"use client";

import { useRouter } from "next/navigation";
import type { Problem } from "@/types/problem";
import { ProblemDifficulty } from "./ProblemDifficulty";


export const ProblemRow = ({ problem, index }: { problem: Problem; index: number }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/problems/${problem.id}`);
  };

  return (
    <button
      onClick={handleNavigation} 
      className={`grid grid-cols-9 gap-4 py-4 px-4 ${
        index % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"
      } hover:bg-slate-700/30 transition-colors rounded-lg cursor-pointer outline-none w-full text-left`}
    >
      
      <div className="col-span-1 flex items-center text-slate-400 font-mono">
        {index + 1}
      </div>
      <div className="col-span-6 flex items-center">
        <span className="font-medium text-white">{problem.title}</span>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <ProblemDifficulty level={problem.difficulty as "Easy" | "Medium" | "Hard"} />
      </div>
    </button>
  );
};
