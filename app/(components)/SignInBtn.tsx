"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function SignInBtn() {
  return (
    <>
      <div className="grid place-items-center h-[400px]">
        <div className="shadow-lg p-5 border-t-4 rounded-lg border-green-700">
          <h1 className="text-xl font-semibold my-4">
            Enter your details here
          </h1>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Enter your email here" />
            <input type="password" placeholder="Enter your password here" />
            <button className="bg-green-900 text-white font-semibold cursor-pointer px-6 py-2 rounded-xl">
              Login
            </button>

            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              error message
            </div>
            <Link href="/register" className="text-sm mt-3 text-right">
              Don't have an account?{" "}
              <span className="underline">Register here</span>
            </Link>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 mx-5">
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
        >
          <Image src="/google.png" height={30} width={30} alt="" />
          <span className="bg-blue-500 text-white rounded-lg px-4 py-3">
            SignIn with Google
          </span>
        </button>

        <h2 className="flex flex-row justify-center items-center">OR</h2>

        <div>
          <button
            onClick={() => signIn("github")}
            className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
          >
            <Image src="/github.png" height={30} width={30} alt="" />
            <span className="bg-slate-800 text-white rounded-lg px-4 py-3">
              SignIn with Github
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
