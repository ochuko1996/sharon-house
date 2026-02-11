import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getEvents = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("events").collect();
  },
});

export const getEventsByCategory = query({
  args: {
    category: v.union(
      v.literal("Weekly Service"),
      v.literal("Youth"),
      v.literal("Ministry"),
      v.literal("Special Event"),
      v.literal("Annual Event"),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    return await ctx.db
      .query("events")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const getPublishedEvents = query({
  handler: async (ctx) => {
    // Public query - no auth required
    return await ctx.db
      .query("events")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();
  },
});

export const getUpcomingEvents = query({
  handler: async (ctx) => {
    // Public query for upcoming events
    const events = await ctx.db
      .query("events")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    return events.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  },
});

export const createEvent = mutation({
  args: {
    title: v.string(),
    date: v.string(),
    time: v.string(),
    location: v.string(),
    description: v.string(),
    category: v.union(
      v.literal("Weekly Service"),
      v.literal("Youth"),
      v.literal("Ministry"),
      v.literal("Special Event"),
      v.literal("Annual Event"),
    ),
    color: v.string(),
    recurring: v.boolean(),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const eventId = await ctx.db.insert("events", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return eventId;
  },
});

export const updateEvent = mutation({
  args: {
    id: v.id("events"),
    title: v.optional(v.string()),
    date: v.optional(v.string()),
    time: v.optional(v.string()),
    location: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("Weekly Service"),
        v.literal("Youth"),
        v.literal("Ministry"),
        v.literal("Special Event"),
        v.literal("Annual Event"),
      ),
    ),
    color: v.optional(v.string()),
    recurring: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });

    return id;
  },
});

export const deleteEvent = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleEventPublished = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const event = await ctx.db.get(args.id);
    if (!event) throw new Error("Event not found");

    await ctx.db.patch(args.id, {
      published: !event.published,
      updatedAt: Date.now(),
    });

    return args.id;
  },
});
