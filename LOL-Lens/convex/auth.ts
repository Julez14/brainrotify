import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import bcrypt from "bcryptjs";

// Simulate an in-memory database for users (you can replace this with any database)
const usersDb: { [email: string]: { passwordHash: string } } = {};

// Function to get user by email
const getUserByEmail = async (email: string) => usersDb[email];

// Function to create user (hashes password)
const createUser = async (email: string, password: string) => {
  const passwordHash = await bcrypt.hash(password, 10);
  usersDb[email] = { passwordHash };
};

// Function to verify password
const verifyPassword = async (user: { passwordHash: string }, password: string) => {
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    throw new Error("Invalid password");
  }
  return user;
};

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      getUserByEmail,
      verifyPassword,
    }),
  ],
});