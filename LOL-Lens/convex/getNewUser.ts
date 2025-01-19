
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const getNewUser = mutation({
  args: {}, // No arguments are needed here, since we are just fetching the newest user
  handler: async (ctx) => {
    // Query users ordered by the created_at field (newest first)
    const user = await ctx.db
      .query("users")
      .order("desc")
      .take(1); // Sort by created_at (newest first)
    return user; // Return the newest user
  },
});