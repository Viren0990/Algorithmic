import { Badge } from "@/components/ui/badge"

export const ProblemDifficulty  = ({ level }: { level: "Easy" | "Medium" | "Hard" }) => {
    const colorMap = {
      Easy: "bg-green-500/10 text-green-500 border-green-500/20",
      Medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      Hard: "bg-red-500/10 text-red-500 border-red-500/20",
    }
  
    return (
      <Badge variant="outline" className={`${colorMap[level]} font-medium`}>
        {level}
      </Badge>
    )
}