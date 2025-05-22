import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/organizations/(.*)",
  "/select-org",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();
  const { pathname } = req.nextUrl;

  // If user is signed in and trying to access public auth routes, redirect to dashboard
  if (userId && !isProtectedRoute(req)) {
    let path = "/select-org";

    if (orgId) {
      path = `/organizations/${orgId}`;
    }

    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
  }

  // If user is not signed in and trying to access protected routes, redirect to sign-in
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // For organization-specific routes, check if user has org access
  if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
