import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const authOoptions = {
  providers: [
    // Google provider

    GoogleProvider({
      clientId:
        "951857334989-5376je7negk55jnnvk3oqe48acfmbud5.apps.googleusercontent.com",
      clientSecret: "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",
    }),

    // Github provider
    GithubProvider({
      clientId: "f50d897c5ee6ba8c6864",
      clientSecret: "0c0e574c9cd2a737ea3762e6095e9dea3a0d3ee7",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      console.log("User", user);
      console.log("Account", account);

      if (account.provider === "google") {
        const { name, email } = user;
        try {
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          if (res.ok) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOoptions);
export { handler as GET, handler as POST };
