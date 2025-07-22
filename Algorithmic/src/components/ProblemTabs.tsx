

import { Tabs, TabsTrigger, TabsContent, TabsList } from "@radix-ui/react-tabs";
import { DifficultyLegends } from "./DifficultyLegens";
import { ProblemList } from "./ProblemList";
import { getProblems } from "@/app/actions/getProblems";

export const ProblemTabs = async () => {
    const problems = await getProblems();
    

    return (
        <div>
            <Tabs defaultValue="all" className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <TabsList className="bg-slate-900/80 border border-slate-700 rounded-lg p-1 backdrop-blur-sm">
  <TabsTrigger 
    value="all" 
    className="
      px-4 py-2 text-sm font-medium
      data-[state=active]:bg-slate-700/80 
      data-[state=active]:shadow-sm
      data-[state=active]:text-white
      text-slate-300 hover:text-white
      rounded-md transition-all
      hover:bg-slate-800/50
    "
  >
    All Problems
  </TabsTrigger>
  <TabsTrigger 
    value="easy" 
    className="
      px-4 py-2 text-sm font-medium
      data-[state=active]:bg-emerald-900/60
      data-[state=active]:text-emerald-300
      data-[state=active]:shadow-sm
      text-slate-300 hover:text-emerald-300
      rounded-md transition-all
      hover:bg-slate-800/50
    "
  >
    Easy
  </TabsTrigger>
  <TabsTrigger 
    value="medium" 
    className="
      px-4 py-2 text-sm font-medium
      data-[state=active]:bg-amber-900/60
      data-[state=active]:text-amber-300
      data-[state=active]:shadow-sm
      text-slate-300 hover:text-amber-300
      rounded-md transition-all
      hover:bg-slate-800/50
    "
  >
    Medium
  </TabsTrigger>
  <TabsTrigger 
    value="hard" 
    className="
      px-4 py-2 text-sm font-medium
      data-[state=active]:bg-rose-900/60
      data-[state=active]:text-rose-300
      data-[state=active]:shadow-sm
      text-slate-300 hover:text-rose-300
      rounded-md transition-all
      hover:bg-slate-800/50
    "
  >
    Hard
  </TabsTrigger>
</TabsList>
                    <DifficultyLegends />
                </div>

                <TabsContent value="all" className="mt-4">
                    <ProblemList problems={problems} />
                </TabsContent>

                <TabsContent value="easy" className="mt-4">
                    <ProblemList problems={problems.filter((p) => p.difficulty === "Easy")} />
                </TabsContent>

                <TabsContent value="medium" className="mt-4">
                    <ProblemList problems={problems.filter((p) => p.difficulty === "Medium")} />
                </TabsContent>

                <TabsContent value="hard" className="mt-4">
                    <ProblemList problems={problems.filter((p) => p.difficulty === "Hard")} />
                </TabsContent>
            </Tabs>
        </div>
    );
};
