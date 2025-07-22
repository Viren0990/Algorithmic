"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeEditor } from "@/components/code-editor"
import { Clock, LightbulbIcon, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { sendToJudge0 } from "@/app/actions/submission"
import { pollResult } from "@/app/actions/pollingResult"

interface CodeOption {
  id: string
  language: string
  starterCode: string
  problemId: string
  createdAt: Date
}

const getStatusClass1 = (status: string) => {
  if (status === "success") return "bg-green-500/10 border border-green-500/20";
  if (status === "error") return "bg-red-500/10 border border-red-500/20";
  return "bg-slate-700/50 border border-slate-600/20";
};


const getStatusClass = (status: string) => {
  if (status === "success") return "text-green-400";
  if (status === "error") return "text-red-400";
  return "text-slate-400";
};

interface ProblemClientProps {
  defaultCode: CodeOption[]
  problemId: string
}

export const ProblemClient = ({ defaultCode, problemId }: ProblemClientProps) => {
  const [language, setLanguage] = useState<string>(defaultCode[0]?.language || "javascript")
  const [code, setCode] = useState<string>(
    defaultCode.find((option) => option.language === language)?.starterCode?? "",
  )
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error" | "pending">("idle")
  const [statusMessage, setStatusMessage] = useState<string>("")

  
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    const newStarterCode = defaultCode.find((option) => option.language === newLanguage)?.starterCode?? ""
    setCode(newStarterCode)
  }

  const handleReset = () => {
    const newStarterCode = defaultCode.find((option) => option.language === language)?.starterCode?? ""
    setCode(newStarterCode)
  }

  const handleSubmit = async () => {
    setSubmissionStatus("pending")
    setStatusMessage("Submitting...")
    setIsSubmitting(true)

    try {
      const response = await sendToJudge0(problemId, code, language)
      if (!response?.submissionId) {
        throw new Error("Submission failed")
      }

      const submissionId = response.submissionId
      const startTime = Date.now()

      let result
      while (Date.now() - startTime < 30000) {
      
        result = await pollResult(submissionId)

        if (result?.status === "Error Polling!") {
          setSubmissionStatus("error")
          setStatusMessage("Error fetching result")
          break
        }

        if (result?.status !== "Pending") {
          break
        }

        await new Promise((resolve) => setTimeout(resolve, 2000)) // Poll every 2 seconds
      }

      if (result?.status === "Pending") {
        setSubmissionStatus("error")
        setStatusMessage("Judge server timeout")
      } else if (result?.status === "Accepted") {
        setSubmissionStatus("success")
        setStatusMessage("All test cases passed!")
      } else {
        setSubmissionStatus("error")
        setStatusMessage(result?.status === "Rejected" ? "Solution rejected" : "Submission error")
      }
    } catch (error: any) {
      setSubmissionStatus("error")
      setStatusMessage(error.message || "An error occurred")
    } finally {
      setIsSubmitting(false)

      
      setTimeout(() => {
        if (submissionStatus !== "pending") {
          setSubmissionStatus("idle")
          setStatusMessage("")
        }
      }, 5000)
    }
  }

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      <div className="bg-slate-800/70 border border-slate-700 rounded-t-lg overflow-hidden backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700">
          <Tabs defaultValue={language} className="w-full" onValueChange={handleLanguageChange}>
            <TabsList className="bg-slate-800/50 border border-slate-700 h-8">
              {defaultCode.map((option) => (
                <TabsTrigger
                  key={option.id}
                  value={option.language}
                  className="text-xs h-7 data-[state=active]:bg-slate-700"
                >
                  {option.language.charAt(0).toUpperCase() + option.language.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs border-slate-700 bg-slate-800/50"
              onClick={handleReset}
            >
              <Clock className="h-3.5 w-3.5 mr-1" />
              Reset
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs border-slate-700 bg-slate-800/50">
              <LightbulbIcon className="h-3.5 w-3.5 mr-1" />
              Hint
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 border-x border-slate-700 bg-slate-900">
        <CodeEditor value={code} onChange={setCode} language={language} />
      </div>

      <div className="bg-slate-800/70 border border-slate-700 rounded-b-lg p-4 backdrop-blur-sm">
        
        {submissionStatus !== "idle" && (
          <div className={`mb-4 p-3 rounded-lg flex items-center ${getStatusClass1(submissionStatus)}`}>
            {submissionStatus === "success" && <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />}
            {submissionStatus === "error" && <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />}
            {submissionStatus === "pending" && (
              <Loader2 className="h-5 w-5 text-slate-400 mr-2 animate-spin flex-shrink-0" />
            )}
            <span className={`text-sm ${getStatusClass(submissionStatus)}`}>
              {statusMessage}
            </span>
          </div>
        )}

       
        <div className="flex justify-between items-center">
          <div className="text-sm text-slate-400">Make sure your function handles all test cases</div>
          <div className="flex gap-2">
            <Button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700
                transition-all duration-300 shadow-lg shadow-purple-600/20"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

