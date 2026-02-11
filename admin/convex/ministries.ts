import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getMinistries = query({
  handler: async (ctx) => {
    return await ctx.db.query("ministries").collect();
  },
});

export const getActiveMinistries = query({
  handler: async (ctx) => {
    // Public query - only active ministries
    const ministries = await ctx.db.query("ministries").collect();

    return ministries.filter((m) => m.active);
  },
});

export const getMinistryBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const ministries = await ctx.db
      .query("ministries")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .collect();

    return ministries[0] || null;
  },
});

export const createMinistry = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    leader: v.optional(v.string()),
    schedule: v.optional(v.string()),
    color: v.string(),
    icon: v.optional(v.string()),
    active: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const ministryId = await ctx.db.insert("ministries", args);
    return ministryId;
  },
});

export const updateMinistry = mutation({
  args: {
    id: v.id("ministries"),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    leader: v.optional(v.string()),
    schedule: v.optional(v.string()),
    color: v.optional(v.string()),
    icon: v.optional(v.string()),
    active: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);

    return id;
  },
});

export const deleteMinistry = mutation({
  args: { id: v.id("ministries") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const reorderMinistries = mutation({
  args: {
    items: v.array(v.object({ id: v.id("ministries"), order: v.number() })),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    for (const item of args.items) {
      await ctx.db.patch(item.id, { order: item.order });
    }

    return true;
  },
});

export const toggleMinistryActive = mutation({
  args: { id: v.id("ministries") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const ministry = await ctx.db.get(args.id);
    if (!ministry) throw new Error("Ministry not found");

    await ctx.db.patch(args.id, {
      active: !ministry.active,
    });

    return args.id;
  },
});
