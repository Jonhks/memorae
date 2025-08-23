import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  localePrefix: "always",

  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "en",
});
