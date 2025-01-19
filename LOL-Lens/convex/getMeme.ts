import { query } from "./_generated/server";
import { v } from "convex/values";

// Define the query to fetch a user by their "number"
export const getMeme = query({
  args: {
  },
  handler: async (ctx, args) => {
    // Query the "users" table to find a user with the specified number
    const meme = await ctx.db
    .query("memes")
    .order("desc")
    .collect();
    if (!meme) {
        throw new Error("Memes not found");
    }
    return meme;
  },
});