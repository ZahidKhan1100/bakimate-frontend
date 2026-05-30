import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BakiMate — Shop ledger for udhaar & instalments",
    short_name: "BakiMate",
    description:
      "Track customer credits, payments, instalments, and supplier payables—built for shop counters.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    orientation: "portrait-primary",
    categories: ["finance", "lifestyle", "productivity"],
    lang: "en",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
