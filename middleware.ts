import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

// Define the route matcher to exclude "/dashboard/setting(.*)" from being protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "!/dashboard/setting(.*)", // Exclude "/dashboard/setting" and all its sub-routes
  "/",
]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
