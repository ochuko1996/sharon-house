import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const applicationTables = {
  // Admin access control
  adminAccess: defineTable({
    userId: v.id("users"),
    role: v.union(v.literal("admin"), v.literal("editor")),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Events management
  events: defineTable({
    title: v.string(),
    date: v.string(), // ISO date string or "Every Sunday", "Every Wednesday", etc.
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
    color: v.string(), // Tailwind gradient classes
    recurring: v.boolean(),
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_published", ["published"]),

  // Sermons/Media
  sermons: defineTable({
    title: v.string(),
    youtubeId: v.string(), // YouTube video ID
    youtubeUrl: v.string(), // Full YouTube URL
    date: v.string(), // ISO date string
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
    featured: v.boolean(), // Show on homepage
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured"])
    .index("by_date", ["date"]),

  // Service times
  serviceTimes: defineTable({
    day: v.string(), // "Sunday", "Wednesday", "Friday"
    time: v.string(),
    name: v.string(),
    location: v.string(),
    description: v.string(),
    color: v.string(), // Tailwind gradient classes
    order: v.number(), // Display order
    active: v.boolean(),
  }).index("by_order", ["order"]),

  // Ministries
  ministries: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    leader: v.optional(v.string()),
    schedule: v.optional(v.string()),
    color: v.string(), // Hex color
    icon: v.optional(v.string()), // SVG icon name or URL
    active: v.boolean(),
    order: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_order", ["order"]),

  // Page content (hero sections, about page, etc.)
  pageContent: defineTable({
    pageId: v.string(), // "home-hero", "about-welcome", etc.
    title: v.string(),
    content: v.string(), // Rich text HTML
    seoMeta: v.optional(
      v.object({
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        keywords: v.optional(v.array(v.string())),
        ogImage: v.optional(v.string()),
      }),
    ),
    updatedAt: v.number(),
  }).index("by_pageId", ["pageId"]),

  // Testimonials
  testimonials: defineTable({
    name: v.string(),
    content: v.string(),
    date: v.string(),
    featured: v.boolean(),
    published: v.boolean(),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_featured", ["featured"])
    .index("by_published", ["published"]),

  // Images
  images: defineTable({
    name: v.string(),
    size: v.number(),
    hash: v.string(),
    storageId: v.id("_storage"),
    url: v.string(),
    uploadedAt: v.number(),
  })
    .index("by_hash", ["hash"])
    .index("by_name", ["name"]),

  // Site settings
  siteSettings: defineTable({
    key: v.string(), // "siteName", "primaryColor", "socialLinks", etc.
    value: v.string(), // JSON stringified for complex values
    updatedAt: v.number(),
  }).index("by_key", ["key"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
