import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addMeme = mutation({
  args: {
    url: v.string(),
    liked: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("memes", {
      ...args,
      created_at: Date.now(), // Store current timestamp as milliseconds
    });
  },
});