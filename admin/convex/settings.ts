import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getSettings = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("siteSettings").collect();
  },
});

export const getSettingByKey = query({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    // Public query - anyone can get public settings
    const settings = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .collect();

    return settings[0] || null;
  },
});

export const getSettingByKeyAdmin = query({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const settings = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .collect();

    return settings[0] || null;
  },
});

export const getAllSettingsAdmin = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("siteSettings").collect();
  },
});

export const setSetting = mutation({
  args: {
    key: v.string(),
    value: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const existing = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        value: args.value,
        updatedAt: Date.now(),
      });
      return existing._id;
    }

    const settingId = await ctx.db.insert("siteSettings", {
      ...args,
      updatedAt: Date.now(),
    });

    return settingId;
  },
});

export const deleteSetting = mutation({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const existing = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();

    if (!existing) {
      throw new Error(`Setting "${args.key}" not found`);
    }

    await ctx.db.delete(existing._id);
    return existing._id;
  },
});

export const updateMultipleSettings = mutation({
  args: {
    settings: v.array(v.object({ key: v.string(), value: v.string() })),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const results = [];
    for (const setting of args.settings) {
      const existing = await ctx.db
        .query("siteSettings")
        .withIndex("by_key", (q) => q.eq("key", setting.key))
        .first();

      if (existing) {
        await ctx.db.patch(existing._id, {
          value: setting.value,
          updatedAt: Date.now(),
        });
        results.push(existing._id);
      } else {
        const settingId = await ctx.db.insert("siteSettings", {
          ...setting,
          updatedAt: Date.now(),
        });
        results.push(settingId);
      }
    }

    return results;
  },
});
