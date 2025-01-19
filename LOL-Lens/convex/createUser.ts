
//FIXEDDD
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    occupation: v.string(),
    age: v.number(),
    number: v.number(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", {
      ...args,
      created_at: Date.now(), // Store current timestamp as milliseconds
    });
  },
});