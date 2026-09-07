import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const HOTEL_LD = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "The Husky's Lodge And Cafe",
  description:
    "A 3-star Himalayan lodge and multi-cuisine cafe in Bahang, Manali, offering mountain view rooms near Jogini Waterfall and Solang Valley.",
  starRating: { "@type": "Rating", ratingValue: "3" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "85, Bahang, Jogni Waterfall Road",
    addressLocality: "Manali",
    addressRegion: "Himachal Pradesh",
    postalCode: "175103",
    addressCountry: "IN",
  },
  telephone: "+917301150001",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "313",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly" },
    { "@type": "LocationFeatureSpecification", name: "Multi-Cuisine Cafe" },
    { "@type": "LocationFeatureSpecification", name: "Private Balconies" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.27515720935587",
    longitude: "77.17895191089487",
  },
  hasMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.3652277729498!2d77.17895191089487!3d32.27515720935587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487840f587b0f%3A0x158815d0f4437465!2sThe%20Husky's%20Lodge%20And%20Cafe!5e0!3m2!1sen!2sin!4v1788765913405!5m2!1sen!2sin",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "The Husky's Lodge And Cafe | Premium Mountain Stay in Manali",
      },
      {
        name: "description",
        content:
          "The Husky's Lodge And Cafe — a 3-star mountain view hotel in Bahang, Manali on Jogni Waterfall Road. Comfortable rooms, multi-cuisine cafe, and easy access to Jogini Waterfall and Solang Valley.",
      },
      { name: "author", content: "The Husky's Lodge And Cafe" },
      {
        name: "keywords",
        content:
          "The Husky's Lodge And Cafe, The Husky Lodge Manali, hotel in Bahang Manali, hotel near Jogini Waterfall, hotel near Solang Valley, mountain view hotel in Manali, best stay near Jogini Waterfall, cafe in Manali, Jogni Waterfall Road hotel",
      },
      { property: "og:title", content: "The Husky's Lodge And Cafe | Premium Mountain Stay in Manali" },
      {
        property: "og:description",
        content:
          "A cozy 3-star Himalayan lodge and cafe in Bahang, Manali. Mountain view rooms, private balconies, and a multi-cuisine cafe near Jogini Waterfall and Solang Valley.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "The Husky's Lodge And Cafe" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "The Husky's Lodge And Cafe | Premium Mountain Stay in Manali",
      },
      {
        name: "twitter:description",
        content:
          "A cozy 3-star Himalayan lodge and cafe in Bahang, Manali. Mountain view rooms, private balconies, and a multi-cuisine cafe near Jogini Waterfall and Solang Valley.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Marcellus&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://thehuskyslodge.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(HOTEL_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
