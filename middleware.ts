import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/* I want to authenticate everything on the route pdfai.com/dashboard/* */
const isProtectedRouteFlag = createRouteMatcher("/dashboard(.*)");

export default clerkMiddleware((auth, req) => {
  if (isProtectedRouteFlag(req)) {
    auth().protect(); // don't need to return it. It protects the route.
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
