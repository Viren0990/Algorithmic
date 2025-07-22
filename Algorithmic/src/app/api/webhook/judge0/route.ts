import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/index";

interface Judge0WebhookPayload {
  token: string;
  stdout?: string;
  stderr?: string;
  time?: string;
  memory?: string;
  status?: string;
}

export async function PUT(req: NextRequest) {
  try {
    const body: Judge0WebhookPayload = await req.json();
    const { token, stdout, stderr, time, memory, status } = body;



    // Decoding Base64 stdout to get actual output
    const decodedOutput = stdout ? Buffer.from(stdout, "base64").toString("utf-8").trim() : "";
    
    console.log("Decoded Output:", JSON.stringify(decodedOutput));
    console.log(status);

    // Finding the test case using token
    const testCase = await prisma.testCase.findFirst({
      where: { token },
      include: { submission: true },
    });

    if (!testCase) {
      return NextResponse.json({ error: "Test case not found" }, { status: 404 });
    }

    // Checking if the submission is already finalized
    if (testCase.submission.status !== "Pending") {
      return NextResponse.json({ message: "Submission already evaluated" }, { status: 200 });
    }

    // Ensuring values are valid before updating
    const executionTime = time ? parseFloat(time) : null;
    const memoryUsage = memory ? parseFloat(memory) : null;

    // Normalizing expected output and actual output for comparison
    const normalize = (str: string) => str.replace(/\s+/g, " ").trim();
    const isPassed = normalize(decodedOutput) === normalize(testCase.expectedOutput);

  
    // Updating test case result
    await prisma.testCase.update({
      where: { id: testCase.id },
      data: {
        status: isPassed ? "Passed" : "Failed",
        time: executionTime,
        memory: memoryUsage,
      },
    });

    console.log("a");

    // Checking if all test cases for the submission are processed
    const allTestCases = await prisma.testCase.findMany({ where: { submissionId: testCase.submissionId } });
    const allProcessed = allTestCases.every(tc => tc.status !== "Pending");

    if (allProcessed) {
      console.log("a");
      const allPassed = allTestCases.every(tc => tc.status === "Passed");

      // Collect all test case outputs
      const aggregatedOutput = allTestCases.map(tc => 
        `Input: ${tc.input}\nOutput: ${decodedOutput}\nExpected: ${tc.expectedOutput}\nStatus: ${tc.status}`
      ).join("\n\n");

      // Update submission status
      await prisma.submission.update({
        where: { id: testCase.submissionId },
        data: {
          status: allPassed ? "Accepted" : "Rejected",
          output: aggregatedOutput, // ✅ Store all test case results
          error: stderr?? null,
        },
      });
    }

    return NextResponse.json({ message: "Test case updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in Judge0 Webhook:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
