"use server"

import bcrypt from "bcrypt";
import prisma from "@/db";
import { z } from "zod";


const signupSchema = z.object({
  email: z.string().trim().email("Invalid email format"),
  username: z.string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(/^\w+$/, "Username can only contain letters, numbers, and underscores"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signup(email: string, username: string, password: string) {
  const saltRounds = process.env.BCRYPT_SALT_ROUNDS?? 10;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: await bcrypt.hash(password, saltRounds), // Hash inline
      },
    });
  
    return { success: true, user };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, message: "Email is already taken" };
    }
    console.error("Signup Error:", error);
    return { success: false, message: "An error occurred. Please try again later." };
  }
}
