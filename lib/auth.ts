import { connectDB } from "@/lib/db";
import User from "@/models/User";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "student",
        });
      }

      return true;
    },

    async jwt({ token }) {
      await connectDB();

      const dbUser = await User.findOne({ email: token.email });

      if (dbUser) {
  token.id = dbUser._id.toString();
  token.role = dbUser.role;
  token.department = dbUser.department;
  token.semester = dbUser.semester;
  token.bio = dbUser.bio;
  token.subjectsCanHelp = dbUser.subjectsCanHelp;
  token.isProfileComplete = dbUser.isProfileComplete;
}

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
  session.user.id = token.id as string;
  session.user.role = token.role as "student" | "admin";
  session.user.department = token.department as string;
  session.user.semester = token.semester as number;
  session.user.bio = token.bio as string;
  session.user.subjectsCanHelp = token.subjectsCanHelp as string[];
  session.user.isProfileComplete = token.isProfileComplete as boolean;
}

      return session;
    },
  },
};