import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./lib/auth";

export const getTestimonials = query({
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.db.query("testimonials").collect();
  },
});

export const getPublishedTestimonials = query({
  handler: async (ctx) => {
    // Public query
    return await ctx.db
      .query("testimonials")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();
  },
});

export const getFeaturedTestimonials = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    // Public query - featured testimonials for homepage
    const testimonials = await ctx.db
      .query("testimonials")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(args.limit);

    return testimonials;
  },
});

export const createTestimonial = mutation({
  args: {
    name: v.string(),
    content: v.string(),
    date: v.string(),
    featured: v.boolean(),
    published: v.boolean(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const testimonialId = await ctx.db.insert("testimonials", {
      ...args,
      createdAt: Date.now(),
    });

    return testimonialId;
  },
});

export const updateTestimonial = mutation({
  args: {
    id: v.id("testimonials"),
    name: v.optional(v.string()),
    content: v.optional(v.string()),
    date: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    published: v.optional(v.boolean()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);

    return id;
  },
});

export const deleteTestimonial = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
    return args.id;
  },
});

export const toggleTestimonialPublished = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const testimonial = await ctx.db.get(args.id);
    if (!testimonial) throw new Error("Testimonial not found");

    await ctx.db.patch(args.id, {
      published: !testimonial.published,
    });

    return args.id;
  },
});

export const toggleTestimonialFeatured = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const testimonial = await ctx.db.get(args.id);
    if (!testimonial) throw new Error("Testimonial not found");

    await ctx.db.patch(args.id, {
      featured: !testimonial.featured,
    });

    return args.id;
  },
});
