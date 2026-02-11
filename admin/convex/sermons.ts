import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getSermons = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("sermons").collect();
  },
});

export const getSermonsByCategory = query({
  args: {
    category: v.union(
      v.literal("Sunday Service"),
      v.literal("Midweek Service"),
      v.literal("Youth Service"),
      v.literal("Special"),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    return await ctx.db
      .query("sermons")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const getPublishedSermons = query({
  handler: async (ctx) => {
    // Public query
    return await ctx.db
      .query("sermons")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();
  },
});

export const getFeaturedSermon = query({
  handler: async (ctx) => {
    // Get the most recent featured sermon for homepage
    const sermons = await ctx.db
      .query("sermons")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(1);

    return sermons[0] || null;
  },
});

export const getRecentSermons = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    // Public query - recent published sermons
    const sermons = await ctx.db
      .query("sermons")
      .withIndex("by_published", (q) => q.eq("published", true))
      .take(args.limit);

    return sermons;
  },
});

export const createSermon = mutation({
  args: {
    title: v.string(),
    youtubeId: v.string(),
    youtubeUrl: v.string(),
    date: v.string(),
    category: v.union(
      v.literal("Sunday Service"),
      v.literal("Midweek Service"),
      v.literal("Youth Service"),
      v.literal("Special"),
    ),
    speaker: v.string(),
    description: v.optional(v.string()),
    thumbnail: v.optional(v.string()),
    published: v.boolean(),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const sermonId = await ctx.db.insert("sermons", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return sermonId;
  },
});

export const updateSermon = mutation({
  args: {
    id: v.id("sermons"),
    title: v.optional(v.string()),
    youtubeId: v.optional(v.string()),
    youtubeUrl: v.optional(v.string()),
    date: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("Sunday Service"),
        v.literal("Midweek Service"),
        v.literal("Youth Service"),
        v.literal("Special"),
      ),
    ),
    speaker: v.optional(v.string()),
    description: v.optional(v.string()),
    thumbnail: v.optional(v.string()),
    published: v.optional(v.boolean()),
    featured: v.optional(v.boolean()),
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

export const deleteSermon = mutation({
  args: { id: v.id("sermons") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleSermonPublished = mutation({
  args: { id: v.id("sermons") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const sermon = await ctx.db.get(args.id);
    if (!sermon) throw new Error("Sermon not found");

    await ctx.db.patch(args.id, {
      published: !sermon.published,
      updatedAt: Date.now(),
    });

    return args.id;
  },
});

export const toggleSermonFeatured = mutation({
  args: { id: v.id("sermons") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const sermon = await ctx.db.get(args.id);
    if (!sermon) throw new Error("Sermon not found");

    await ctx.db.patch(args.id, {
      featured: !sermon.featured,
      updatedAt: Date.now(),
    });

    return args.id;
  },
});
