"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvidr = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};
