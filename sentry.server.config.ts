import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1d1284ae05d6213c07c8753052df591f@o4509549432930304.ingest.us.sentry.io/4509549436141568",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
