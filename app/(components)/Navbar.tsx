"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Navbar() {
  const { status } = useSession();

  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link className="font-bold text-[16px] text-green-700 " href="/">
        Techloset Solutions
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          SignOut
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          SignIn
        </button>
      )}
    </div>
  );
}
