"use server"

import prisma from "@/db/index"; 
import { Problem } from "@/types/problem";
import { getTestCases } from "./getTestCases";

export async function getProblems(): Promise<Problem[]> {
    try {
        const problems = await prisma.problem.findMany();
        console.log(problems);
        return problems;
    } catch (error) {
        console.error("Error fetching problems:", error);
        return [];
    }
}


export async function getProblem(id: string): Promise<Problem | null> {
    try {
        const problem = await prisma.problem.findUnique({
            where: { id }
        });

        return problem;
    } catch (error) {
        console.error("Error fetching problem:", error);
        return null;
    }
}

export async function getDefaultCode(problemId: string) {
    try {
        const defaultCode = await prisma.defaultCode.findMany({
            where: { problemId },
        });

        return defaultCode;
    } catch (error) {
        console.error("Error fetching default code:", error);
        return null;
    }
}