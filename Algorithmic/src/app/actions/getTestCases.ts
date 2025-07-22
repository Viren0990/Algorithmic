

import fs from "fs";
import path from "path";

export function getTestCases(problemName: string) {
  const baseDir = path.resolve(process.cwd(), "../problem-manager/problems");
  const filePath = path.join(baseDir, problemName, "test-cases.json");
         
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test cases not found for ${problemName}`);
  }

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
