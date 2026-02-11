import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getImages = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("images").collect();
  },
});

export const getImagesByName = query({
  args: { search: v.string() },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const images = await ctx.db.query("images").collect();
    return images.filter((img) =>
      img.name.toLowerCase().includes(args.search.toLowerCase()),
    );
  },
});

export const getImageByHash = query({
  args: { hash: v.string() },
  handler: async (ctx, args) => {
    const images = await ctx.db
      .query("images")
      .withIndex("by_hash", (q) => q.eq("hash", args.hash))
      .collect();

    return images[0] || null;
  },
});

export const createImage = mutation({
  args: {
    name: v.string(),
    size: v.number(),
    hash: v.string(),
    storageId: v.id("_storage"),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    // Check for duplicate by hash
    const existing = await ctx.db
      .query("images")
      .withIndex("by_hash", (q) => q.eq("hash", args.hash))
      .first();

    if (existing) {
      // Return existing image instead of creating duplicate
      return existing._id;
    }

    const imageId = await ctx.db.insert("images", {
      ...args,
      uploadedAt: Date.now(),
    });

    return imageId;
  },
});

export const updateImage = mutation({
  args: {
    id: v.id("images"),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);

    return id;
  },
});

export const deleteImage = mutation({
  args: { id: v.id("images") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const image = await ctx.db.get(args.id);
    if (!image) throw new Error("Image not found");

    // Delete from storage
    await ctx.storage.delete(image.storageId);

    // Delete from database
    await ctx.db.delete(args.id);

    return args.id;
  },
});

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

export const getImageUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
