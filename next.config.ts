import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.genius.com"
      },
      {
        protocol: "https",
        hostname: "i.scdn.co"
      },
      {
        protocol: "https",
        hostname: "image.europafm.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  experimental:{
    ppr: "incremental",
  },
  devIndicators: false,
};

export default withSentryConfig(nextConfig, {
  org: "ameri-x9",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
