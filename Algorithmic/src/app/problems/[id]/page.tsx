import { NavBar } from "@/components/NavBar";
import { getDefaultCode, getProblem } from "@/app/actions/getProblems";
import { ProblemClient } from "@/components/problem-client";
import { ProblemDetail } from "@/components/problem-detail";
import { notFound } from 'next/navigation';

export default async function Problem({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const problem = await getProblem(id);
  const defaultCode = await getDefaultCode(id); 

  // Handle case where problem doesn't exist
  if (!problem) {
    return notFound();
  }

  // Handle case where default code doesn't exist
  if (!defaultCode) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-8 mt-12">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-2xl font-bold tracking-tight">{problem.title}</h1>
            <div className="ml-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  problem.difficulty === "Easy"
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : problem.difficulty === "Medium"
                      ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                }`}
              >
                {problem.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem description */}
          <div className="h-[calc(100vh-200px)] overflow-y-auto pr-4">
            <ProblemDetail description={problem.description} />
          </div>

          {/* Code editor (client component) */}
          <ProblemClient 
            defaultCode={defaultCode} 
            problemId={id} 
          />
        </div>
      </div>
    </div>
  );
}