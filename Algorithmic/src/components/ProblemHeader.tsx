import { Code2 } from "lucide-react"

export const ProblemHeader =  () => {
    return (<div>
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 shadow-sm backdrop-blur-sm mb-2">
                    <Code2 className="mr-1"/>
                    <span>Problems</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                    Coding Challanges
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent ml-2">Collection</span>
                </h1>
                <p className="mt-1 text-slate-400">Solve problems to improve your coding skills</p>
        </div>)
}