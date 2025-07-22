"use client"

import { useRef } from "react"
import Editor, { type Monaco } from "@monaco-editor/react"
import type { editor } from "monaco-editor"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
}

export const CodeEditor = ({ value, onChange, language }: CodeEditorProps) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor

  
    editor.focus()

   
    monaco.editor.defineTheme("codingChallengeTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0f172a",
        "editor.lineHighlightBackground": "#1e293b",
        "editorLineNumber.foreground": "#64748b",
        "editorLineNumber.activeForeground": "#e2e8f0",
        "editorCursor.foreground": "#a855f7",
        "editor.selectionBackground": "#334155",
        "editor.inactiveSelectionBackground": "#1e293b",
      },
    })

    monaco.editor.setTheme("codingChallengeTheme")
  }

  const getLanguageFromSelection = (selected: string): string => {
    switch (selected) {
      case "javascript":
        return "javascript"
      case "python":
        return "python"
      case "cpp":
        return "cpp"
      default:
        return selected
    }
  }

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      language={getLanguageFromSelection(language)}
      value={value}
      onChange={(value:any) => onChange(value || "")}
      onMount={handleEditorDidMount}
      theme="codingChallengeTheme"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: "on",
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on",
        padding: { top: 10 },
        scrollbar: {
          verticalScrollbarSize: 10,
          horizontalScrollbarSize: 10,
          verticalSliderSize: 10,
          horizontalSliderSize: 10,
          verticalHasArrows: false,
          horizontalHasArrows: false,
          arrowSize: 0,
        },
        lineNumbersMinChars: 3,
        glyphMargin: false,
        folding: true,
        renderLineHighlight: "line",
        contextmenu: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: "on",
        smoothScrolling: true,
        bracketPairColorization: {
          enabled: true,
        },
        guides: {
          bracketPairs: true,
          indentation: true,
        },
      }}
    />
  )
}

