const ROOT_URL = "https://new-mini-app-quickstart-theta-steel.vercel.app";

export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },

  baseBuilder: {
    ownerAddress: "0xCd3a2C87cdf4B8dBD960E59163b30c428eFbFc20",
  },

  miniapp: {
    version: "1",
    name: "GPP Official BD",
    subtitle: "Google Play Points Tools BD",
    description: "Tools and utilities for Google Play Points users in Bangladesh.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["gpp", "bd", "points", "tools"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Simple tools for Play Points users in BD.",
    ogTitle: "GPP Official BD",
    ogDescription: "Mini app for Google Play Points tools in Bangladesh.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;
