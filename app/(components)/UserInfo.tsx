"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated" && session?.user?.image) {
    return (
      <div className="shadow-xl p-8 rounded-md d-flex flex-col gap-3 bg-green-100">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          alt=""
          width={80}
          height={80}
        />
        <div className="font-semibold">
          Name: <span>{session?.user.name}</span>
        </div>
        <div className="font-semibold">
          Email : <span>{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
