import { query } from "./_generated/server";
import { v } from "convex/values";

// Define the query to fetch a user by their "number"
export const getUser = query({
//   args: {
//     number: v.number(), // The number that will be used to look up the user
//   },
  args: {
  },
  handler: async (ctx, args) => {
    // Query the "users" table to find a user with the specified number
    const user = await ctx.db
    .query("users")
    .order("desc")
    .take(1); // Sort by created_at (newest first)
    // .query("users")          // Access the "users" collection
    // .withIndex("by_number", (q) => q.eq("number", args.number))
    // .first();                // Get the first matching document
    // .collect();
    // console.log(user)
    if (!user) {
        throw new Error("User not found");
    }
    return user;
    // // Return the user data
    // return {
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     occupation: user.occupation,
    //     age: user.age,
    //     number: user.number,
    //     password: user.password,  // Include the password in the response
    //   };
  },
});