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
        // .collect();  // Get the first result (assuming there's one user per number)
        if (!user) {
            throw new Error("User not found");
        }
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
    })
//     });
//   // Retrieve user from the database using the phone number
//   const user = await db.query("users").filter({ number }).first();

//   if (!user) {
//     throw new Error("User not found");
//   }

//   // Verify the password (make sure passwords are securely hashed in the database)
//   if (user.password !== password) {
//     throw new Error("Invalid password");
//   }

//   // If login is successful, return user data
//   return {
//     number: user.number,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     occupation: user.occupation,
//     age: user.age,
//   };
// });

