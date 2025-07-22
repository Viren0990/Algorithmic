"use server";

import axios from "axios";
import prisma from "@/db/index";
import { getTestCases } from "./getTestCases";
import { NEXT_AUTH_CONFIG } from "../lib/auth";
import { getServerSession } from "next-auth";

const JUDGE0_API_URL = process.env.JUDGE0_API_URL?? "https://judge0-ce.p.rapidapi.com";
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY?? "";
const JUDGE0_WEBHOOK_URL = process.env.JUDGE0_WEBHOOK_URL?? "https://yourdomain.com/api/webhook/judge0";


const languageMap: Record<string, number> = {
  cpp: 54,
  javascript: 63,
  python: 71,
};

export async function sendToJudge0(problemId: string, code: string, language: string) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (!session?.user?.id) {
    throw new Error("Unauthorized: No user session found");
  }
  const userId = session.user.id;

  // Fetching problem details from the database
  const problem = await prisma.problem.findUnique({
    where: {
      id: problemId,
    },
  });

  if (!problem) {
    throw new Error("Problem not found.");
  }

  // Retrieving test cases using the problem's title
  const testCases: { input: string; expectedOutput: string }[] = getTestCases(problem.title) || [];
  if (testCases.length === 0) {
    throw new Error("No test cases found for the problem.");
  }


  const languageId = languageMap[language.toLowerCase()];
  if (!languageId) {
    throw new Error("Unsupported language.");
  }

  try {
    // Preparing batch submission data
    const submissions = testCases.map((tc) => ({
      source_code: code,
      language_id: languageId,
      stdin: tc.input,
      expected_output: tc.expectedOutput,
      callback_url: JUDGE0_WEBHOOK_URL,
    }));

    // Sending batch request to Judge0
    const response = await axios.post(
      `${JUDGE0_API_URL}/submissions/batch`,
      { submissions },
      {
        headers: {
          "X-RapidAPI-Key": JUDGE0_API_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 201) {
      console.error("Judge0 API Error:", response.data);
      throw new Error(`Judge0 API responded with status: ${response.status}`);
    }

    const tokens = response.data.map((res: any) => res.token);

    // Inserting submission into the database
    const submission = await prisma.submission.create({
      data: {
        userId,
        problemId,
        code,
        language,
        status: "Pending",
        output: null,
        error: null,
      },
    });

    // Insert test cases into the database with tokens
    const testCaseRecords = testCases.map((tc, index) => ({
      submissionId: submission.id,
      input: tc.input,
      expectedOutput: tc.expectedOutput,
      status: "Pending",
      token: tokens[index], // Store token for result tracking
      time: null,
      memory: null,
    }));

    await prisma.testCase.createMany({ data: testCaseRecords });

    return { submissionId: submission.id, tokens };
  } catch (error) {
    console.error("Error processing submission:", error);
    throw new Error("Failed to submit code and save to database.");
  }
}
