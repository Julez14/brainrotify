import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        number: v.number(),
        password: v.string(),
        firstName: v.string(),
        lastName: v.string(),
        age: v.number(),
        occupation: v.string(),
        created_at: v.number(),
    }).index("by_number", ["number"]),
    memes: defineTable({
        url: v.string(),
        id: v.number(),
        Id: v.string(),
        created_at: v.number(),
    }),
    captions: defineTable({
        id: v.number(),
        caption: v.string(),
        created_at: v.number(),
    }),
})