export const ProblemListHeader = () => {
    return (
      <div className="grid grid-cols-9 gap-4 py-2 px-4 border-b border-slate-700 text-sm font-medium text-slate-400">
        <div className="col-span-1">#</div>
        <div className="col-span-6">Title</div>
        <div className="col-span-2 flex justify-end">Difficulty</div>
      </div>
    )
  }
  