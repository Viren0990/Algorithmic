import prisma from "../../Algorithmic/src/db/index"; // Import Prisma client from Next.js app
import { promises as fs } from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const PROBLEMS_DIR = path.join(__dirname, "../problems");

// Get problem name from command line arguments
const problemName = process.argv[2];

if (!problemName) {
  console.error("❌ Please provide a problem name. Example: npx ts-node src/uploadProblems.ts sumTwoNumbers");
  process.exit(1);
}

async function uploadProblem(problemName: string) {
  const problemPath = path.join(PROBLEMS_DIR, problemName);

  try {
    // Read problem statement
    const statementPath = path.join(problemPath, "problemStatement.txt");
    const description = await fs.readFile(statementPath, "utf-8");

    // Read boilerplate code
    const boilerplatePath = path.join(problemPath, "boilerplate.json");
    const boilerplateContent = await fs.readFile(boilerplatePath, "utf-8");
    const defaultCode = JSON.parse(boilerplateContent) as Record<string, string>; // Ensure it's a string record

    if (typeof defaultCode !== "object" || defaultCode === null) {
      throw new Error("Invalid format: boilerplate.json should be an object with language keys.");
    }

    // Insert problem into DB
    const problem = await prisma.problem.create({
      data: {
        title: problemName,
        description,
        difficulty: "Medium", 
      },
    });

    // Insert boilerplate code
    const boilerplateEntries = Object.entries(defaultCode).map(([language, starterCode]) => ({
      language,
      starterCode: String(starterCode), // Ensure it's a string
      problemId: problem.id,
    }));

    if (boilerplateEntries.length > 0) {
      await prisma.defaultCode.createMany({ data: boilerplateEntries });
    } else {
      console.warn(`⚠️ Warning: No boilerplate code found for ${problemName}`);
    }

    console.log(`✅ Successfully uploaded: ${problemName}`);
  } catch (error: any) {
    console.error(`❌ Error uploading problem "${problemName}":`, error.message);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the upload function
uploadProblem(problemName);
