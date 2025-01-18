import { query } from "./_generated/server";

export const get = query(async (ctx) => {
  return await ctx.db.query("tasks").collect();
});