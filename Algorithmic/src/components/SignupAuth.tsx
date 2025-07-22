"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { signup } from "@/app/actions/user";
import { useRouter } from "next/navigation";

export function SignupAuth() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Basic validation
    if (!email || !username || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
        const res = await signup(email, username, password);
        if (!res.success) {
          setError(typeof res.message === "string" ? res.message : "Signup failed");
        } else {
          router.push("/signin"); // Redirect to dashboard on success
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
      
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 rounded-2xl pt-6 pb-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="text-slate-400">Sign up and create your account</p>
      </div>
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-200 font-bold pl-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="border-slate-700 bg-slate-900 text-slate-200 placeholder:text-slate-500 focus-visible:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Username Field */}
        <div className="space-y-2">
          <Label htmlFor="username" className="text-slate-200 font-bold pl-2">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="JohnDoe123"
            className="border-slate-700 bg-slate-900 text-slate-200 placeholder:text-slate-500 focus-visible:ring-purple-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-slate-200 font-bold pl-2">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border-slate-700 bg-slate-900 text-slate-200 placeholder:text-slate-500 focus-visible:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
