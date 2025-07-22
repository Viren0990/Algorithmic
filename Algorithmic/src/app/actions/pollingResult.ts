"use server";

import prisma from "@/db/index";

export const pollResult = async (submissionId: string) => {
    if (!submissionId) {
        return { status: "Error", output: null, error: "Invalid submission ID" };
    }

    try {
        const submission = await prisma.submission.findUnique({
            where: { id: submissionId },
            select: { status: true, output: true, error: true },
        });

        return submission || { status: "Error", output: null, error: "Submission not found" };
    } catch (e) {
        console.error("Error polling submission:", e);
        return { status: "Error", output: null, error: "Database error" };
    }
};
