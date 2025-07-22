export const DifficultyLegends = () => {
    return(<div className="flex items-center text-sm text-slate-400">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
          <span>Easy</span>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
          <span>Medium</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
          <span>Hard</span>
        </div>
      </div>)
}