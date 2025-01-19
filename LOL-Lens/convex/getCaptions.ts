import { query } from "./_generated/server";

export const getCaptions = query({
  args: {},
  handler: async (ctx) => {
    const captions = await ctx.db
      .query("captions")
      .collect();
    return captions;
  },
});
