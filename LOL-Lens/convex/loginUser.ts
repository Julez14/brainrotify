// In your Convex API (e.g., convex/_generated/api.js)
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const loginUser = mutation({
    args: {
        number: v.string(),
        password: v.string(),
      },
      handler: async (ctx, args) => {
        // Query the "users" table to find a user with the specified number
        const user = await ctx.db
        .query("users")          // Access the "users" collection
        .take(1);
        if (!user) {
            throw new Error("User not found");
        }
      },
    })