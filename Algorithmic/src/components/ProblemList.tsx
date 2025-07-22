import type { Problem } from "@/types/problem"
import { ProblemListHeader } from "./ProblemListHeader"
import { ProblemRow } from "./ProblemRow"

interface ProblemListProps {
  problems: Problem[]
}

export const ProblemList = ({ problems }: ProblemListProps) => {
  return (
      <div className="bg-slate-900/70 border border-slate-700 rounded-lg overflow-hidden backdrop-blur-sm">
        <ProblemListHeader />
        <div className="divide-y divide-slate-800">
          {problems.map((problem, index) => (
            <ProblemRow key={problem.id} problem={problem} index={index} />
          ))}
        </div>
      </div>
  )
}

