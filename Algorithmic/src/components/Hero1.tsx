import { Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "@/components/ui/badge"


export const Hero1 = () => {
    return(
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black to-slate-900 py-12 md:py-20"> 
            <div className="container relative z-10 px-4 md:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                <div className="space-y-6 pt-10 text-center lg:text-left lg:pl-8 xl:pl-12">
                    <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 shadow-sm backdrop-blur-smflex justify-center p-2">
                        <Code2 className="mr-1 h-3.5 w-3.5"/>
                        <span>1000+ Coding Challenges</span>
                    </div>
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        <span>Master Coding Challenges.</span>
                        <br></br>
                        <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Land Your Dream Job.</span>
                    </h1>

                    <p className="mx-auto max-w-md text-lg text-slate-400 lg:mx-0">
                    Practice with coding challenges, ace technical interviews, and track your progress with detailed analytics.
                    </p>

                    <div className="pl-4 pr-4 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <Button 
                        size="lg"
                        className="shadow-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-700">Start Practicing</Button>
                        <Button
                        size="lg"
                        variant="outline"
                        className="bg-black border-1 border-slate-700 hover:bg-slate-800/70">Explore Problems</Button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-400 lg:justify-start">
                        <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            <span>100+ Companies</span>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                            <span>10,000+ Users</span>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            <span>24/7 Support</span>
                        </div>
                    </div> 
                </div>
            

            <div className="relative mx-auto w-full max-w-md lg:max-w-2xl lg:pr-8 xl:pr-12">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-70 blur-lg"></div>
            {/*header*/}
            <div className="relative z-10 overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-1 shadow-xl">
                <div className="flex items-center gap-4 border-b-1 border-slate-700 bg-slate-800 px-4 py-2">
                    <div className="flex space-x-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div>
                        <div className="text-sm">twoSum.ts</div>
                    </div>
                </div>
                <pre className="bg-slate-900 overflow-x-auto p-4 text-sm text-slate-300">
                <code className="font-mono">{`function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}</code>
                </pre>
                <div className="flex items-center justify-between border-t border-slate-700 bg-slate-800 px-4 py-3">
                <Badge className="border-green-500/20 bg-green-500/10 text-green-500 font-medium"
                variant={"outline"}>
                  Accepted
                </Badge>
                <div className="text-xs text-slate-400">
                  Runtime: <span className="font-semibold text-green-400">76ms</span> | Memory:{" "}
                  <span className="font-semibold text-green-400">42.5MB</span>
                </div>
              </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}