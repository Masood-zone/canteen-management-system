"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GreeLogo from "@/assets/images/gree-logo.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempt with:", { email, password });
    // For demonstration, we'll just redirect to the dashboard
    router.push("/");
  };

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <div className="space-y-4">
                <Image
                  src={GreeLogo}
                  width={144}
                  height={30}
                  className="w-36"
                  alt="Canteen logo"
                />
                <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                  Sign in to your account
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Password
                    </Label>
                    <Button variant="link" className="text-sm text-primary">
                      Forgot your password?
                    </Button>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white dark:text-dark">
                    Connect
                  </span>
                </Button>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>&copy; Canteen</span>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact
            </Link>
            <Link href="/terms" className="text-sm hover:text-primary">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
