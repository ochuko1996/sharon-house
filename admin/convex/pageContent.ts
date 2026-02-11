import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getPageContent = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("pageContent").collect();
  },
});

export const getPageContentById = query({
  args: { pageId: v.string() },
  handler: async (ctx, args) => {
    // Public query - get specific page content
    const content = await ctx.db
      .query("pageContent")
      .withIndex("by_pageId", (q) => q.eq("pageId", args.pageId))
      .collect();

    return content[0] || null;
  },
});

export const getPageContentByIdAdmin = query({
  args: { pageId: v.string() },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const content = await ctx.db
      .query("pageContent")
      .withIndex("by_pageId", (q) => q.eq("pageId", args.pageId))
      .collect();

    return content[0] || null;
  },
});

export const createPageContent = mutation({
  args: {
    pageId: v.string(),
    title: v.string(),
    content: v.string(),
    seoMeta: v.optional(
      v.object({
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        keywords: v.optional(v.array(v.string())),
        ogImage: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    // Check if content already exists for this pageId
    const existing = await ctx.db
      .query("pageContent")
      .withIndex("by_pageId", (q) => q.eq("pageId", args.pageId))
      .first();

    if (existing) {
      throw new Error(`Content for page "${args.pageId}" already exists`);
    }

    const contentId = await ctx.db.insert("pageContent", {
      ...args,
      updatedAt: Date.now(),
    });

    return contentId;
  },
});

export const updatePageContent = mutation({
  args: {
    id: v.id("pageContent"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    seoMeta: v.optional(
      v.object({
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        keywords: v.optional(v.array(v.string())),
        ogImage: v.optional(v.string()),
      }),
    ),
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

export const deletePageContent = mutation({
  args: { id: v.id("pageContent") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const updatePageContentByPageId = mutation({
  args: {
    pageId: v.string(),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    seoMeta: v.optional(
      v.object({
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        keywords: v.optional(v.array(v.string())),
        ogImage: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { pageId, ...updates } = args;
    const existing = await ctx.db
      .query("pageContent")
      .withIndex("by_pageId", (q) => q.eq("pageId", pageId))
      .first();

    if (!existing) {
      throw new Error(`Content for page "${pageId}" not found`);
    }

    await ctx.db.patch(existing._id, {
      ...updates,
      updatedAt: Date.now(),
    });

    return existing._id;
  },
});
