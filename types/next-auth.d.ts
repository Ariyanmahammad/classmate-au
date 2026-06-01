import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: "student" | "admin";
      department?: string;
      semester?: number;
      bio?: string;
      subjectsCanHelp?: string[];
      isProfileComplete?: boolean;
    };
  }
}