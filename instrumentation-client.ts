import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1d1284ae05d6213c07c8753052df591f@o4509549432930304.ingest.us.sentry.io/4509549436141568",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // integrations:[
  //   Sentry.feedbackIntegration({
  //     // Additional SDK configuration goes in here, for example:
  //     colorScheme: "system",
  //   }),
  // ],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});

// This export will instrument router navigations, and is only relevant if you enable tracing.
// `captureRouterTransitionStart` is available from SDK version 9.12.0 onwards
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
