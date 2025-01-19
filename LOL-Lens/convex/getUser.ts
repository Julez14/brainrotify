import { query } from "./_generated/server";
import { v } from "convex/values";

// Define the query to fetch a user by their "number"
export const getUser = query({
  args: {
  },
  handler: async (ctx, args) => {
    // Query the "users" table to find a user with the specified number
    const user = await ctx.db
    .query("users")
    .order("desc")
    .take(1);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
  },
});