import type { Metadata } from "next";
import { SITE_URL } from "@/config/urls";
import { OG_ALT } from "@/lib/og-image";

/** Primary phrases for `<meta name="keywords">` (supporting signal only). */
export const SITE_KEYWORDS = [
  "BakiMate",
  "udhaar app",
  "shop ledger",
  "buku hutang",
  "customer balance",
  "instalment tracker",
  "installment app",
  "small business Malaysia",
  "DuitNow shop",
  "supplier payables",
  "receivables ledger",
] as const;

export const DEFAULT_SITE_TITLE = "BakiMate — Udhaar & installments, clear and fast";

export const DEFAULT_SITE_DESCRIPTION =
  "Track customer credits (gave), payments (got), instalments, and supplier payables—shop ledger for iPhone. Free on the App Store.";

/** Next.js file-based OG/Twitter images (see `app/opengraph-image.tsx`). */
export const DEFAULT_OG_IMAGE_PATH = "/opengraph-image";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

function defaultSocialImages(title: string) {
  const imageUrl = absoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const openGraphImages = [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
  const twitterImages = [imageUrl];
  return { openGraphImages, twitterImages };
}

/**
 * Per-route metadata with canonical URL and consistent social cards.
 * Use a short `title` — root layout's `title.template` appends `| BakiMate`.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  /** Set false for admin or utility pages that should not rank. */
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const keywords = opts.keywords?.length
    ? [...new Set([...opts.keywords, ...SITE_KEYWORDS.slice(0, 6)])]
    : [...SITE_KEYWORDS];

  const fullTitle = `${opts.title} | BakiMate`;
  const { openGraphImages, twitterImages } = defaultSocialImages(OG_ALT);
  const indexable = opts.index !== false;

  return {
    title: opts.title,
    description: opts.description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      type: opts.ogType ?? "website",
      siteName: "BakiMate",
      locale: "en_US",
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: twitterImages,
    },
  };
}
