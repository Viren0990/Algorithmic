import ReactMarkdown from "react-markdown"

interface ProblemDetailProps {
  description: string
}

export const ProblemDetail = ({ description }: ProblemDetailProps) => {
  return (
    <div className="problem-detail rounded-lg border border-slate-700 bg-slate-800/30 p-6 backdrop-blur-sm">
      <div className="prose prose-invert prose-slate max-w-none">
        <ReactMarkdown
          components={{
            h1: (props) => <h1 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-slate-700" {...props} />,
            h2: (props) => <h2 className="text-xl font-bold text-white mt-8 mb-4" {...props} />,
            h3: (props) => <h3 className="text-lg font-semibold text-white mt-6 mb-3" {...props} />,
            p: (props) => <p className="text-slate-300 mb-4 leading-relaxed" {...props} />,
            strong: (props) => <strong className="font-semibold text-white" {...props} />,
            em: (props) => <em className="text-purple-300 italic" {...props} />,
            ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-300" {...props} />,
            ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-300" {...props} />,
            li: (props) => <li className="text-slate-300" {...props} />,
            blockquote: (props) => (
              <blockquote className="bg-slate-800/50 border-l-4 border-cyan-500 pl-4 py-2 pr-2 my-4 rounded-r-lg" {...props} />
            ),
            code: ({ className, children, ...props }) => {
              const match = className?.match(/language-(\w+)/)
              if (!match) {
                return (
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-purple-300 font-mono text-sm" {...props}>
                    {children}
                  </code>
                )
              }
              return (
                <div className="my-4 rounded-lg overflow-hidden border border-slate-700">
                  <div className="bg-slate-800 px-4 py-2 text-xs font-medium text-slate-400 border-b border-slate-700">
                    <span className="uppercase">{match[1]}</span>
                  </div>
                  <pre className="bg-slate-900 p-4 overflow-x-auto">
                    <code className={`text-slate-300 font-mono text-sm ${className}`} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              )
            },
          }}
        >
          {description}
        </ReactMarkdown>
      </div>

      
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="flex items-center mb-4">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mr-2">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Tips</h3>
        </div>
        <p className="text-slate-300">
          Make sure to test your solution with all the examples provided. Pay attention to edge cases!
        </p>
      </div>
    </div>
  )
}
