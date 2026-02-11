import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getServiceTimes = query({
  handler: async (ctx) => {
    return await ctx.db.query("serviceTimes").collect();
  },
});

export const getActiveServiceTimes = query({
  handler: async (ctx) => {
    // Public query - only active service times
    const times = await ctx.db.query("serviceTimes").collect();

    return times.filter((t) => t.active);
  },
});

export const createServiceTime = mutation({
  args: {
    day: v.string(),
    time: v.string(),
    name: v.string(),
    location: v.string(),
    description: v.string(),
    color: v.string(),
    order: v.number(),
    active: v.boolean(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const timeId = await ctx.db.insert("serviceTimes", args);
    return timeId;
  },
});

export const updateServiceTime = mutation({
  args: {
    id: v.id("serviceTimes"),
    day: v.optional(v.string()),
    time: v.optional(v.string()),
    name: v.optional(v.string()),
    location: v.optional(v.string()),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
    order: v.optional(v.number()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);

    return id;
  },
});

export const deleteServiceTime = mutation({
  args: { id: v.id("serviceTimes") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const reorderServiceTimes = mutation({
  args: {
    items: v.array(v.object({ id: v.id("serviceTimes"), order: v.number() })),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    for (const item of args.items) {
      await ctx.db.patch(item.id, { order: item.order });
    }

    return true;
  },
});

export const toggleServiceTimeActive = mutation({
  args: { id: v.id("serviceTimes") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const serviceTime = await ctx.db.get(args.id);
    if (!serviceTime) throw new Error("Service time not found");

    await ctx.db.patch(args.id, {
      active: !serviceTime.active,
    });

    return args.id;
  },
});
