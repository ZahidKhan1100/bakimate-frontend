/**
 * Central place for public URLs (env-driven).
 * Set values in `.env.local` / Vercel — see `.env.example`.
 */

const DEFAULT_SITE = "https://bakimate.com";

/** Canonical marketing site URL (Open Graph, metadata). No trailing slash. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE;

/**
 * Laravel API base (must include `/api` prefix). Example: `https://api.bakimate.com/api`.
 * No trailing slash. Empty if unset (contact form will show a config error).
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

/** Build a full API URL: `apiUrl("leads")` → `{API_BASE_URL}/leads` */
export function apiUrl(path: string): string {
  const segment = path.replace(/^\//, "");
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }
  return `${API_BASE_URL}/${segment}`;
}

/** Public App Store listing (override via `NEXT_PUBLIC_APP_STORE_URL`). */
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/app/bakimate/id6768776202";

/** Google Play listing when live; empty until `NEXT_PUBLIC_PLAY_STORE_URL` is set. */
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "";
