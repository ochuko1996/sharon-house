import type { QueryCtx, MutationCtx } from "../_generated/server";

export async function requireAdmin(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Not authenticated");
  }

  const adminAccess = await ctx.db
    .query("adminAccess")
    .withIndex("by_user", (q: any) => q.eq("userId", identity.subject))
    .first();

  if (!adminAccess) {
    throw new Error("Not authorized - admin access required");
  }

  return { userId: identity.subject, role: adminAccess.role };
}
