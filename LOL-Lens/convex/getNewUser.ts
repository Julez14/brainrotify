// // In your server-side code (convex/api.js or similar)
// import { mutation } from "convex/server";

// export const getNewestUser = mutation(async () => {
//   // Query to get the newest registered user, assuming the "users" collection has a "createdAt" field
//   const newestUser = await db.query("users")
//     .order("createdAt", "desc") // Order by the "createdAt" field in descending order
//     .first(); // Get the first result (most recent user)

//   if (!newestUser) {
//     throw new Error("No users found");
//   }

//   return newestUser;
// });

// getNewestUser.js FIXEDDD
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

    console.log('Newest User:', user); // Log the newest user
    return user; // Return the newest user
  },
});