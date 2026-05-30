"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { APP_STORE_URL, SITE_URL } from "@/config/urls";

/**
 * Lightweight /join page: app download + optional deep link when `?code=` is present
 * (no invite code displayed on-page).
 */
export function JoinClient() {
  const search = useSearchParams();
  const code = useMemo(
    () => (search.get("code") || search.get("house_code") || "").trim(),
    [search],
  );
  const openInAppHref = useMemo(
    () => (code ? `bakimate://join?code=${encodeURIComponent(code)}` : null),
    [code],
  );

  return (
    <div className="space-y-8">
      <ol className="list-decimal space-y-3 pl-5 text-slate-600 dark:text-slate-300">
        <li>
          Install BakiMate from the{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00875A] underline underline-offset-2 hover:text-[#006d4d] dark:text-teal-300"
          >
            App Store
          </a>
          .
        </li>
        <li>Sign up or log in with email, Google, or Apple.</li>
        {openInAppHref ? (
          <li>
            Tap <strong>Open in BakiMate</strong> below — we&apos;ll pass your link through to the
            app if you opened this page from a shared link.
          </li>
        ) : (
          <li>Open the app and complete onboarding to set up your shop ledger.</li>
        )}
      </ol>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#00875A] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#00875A]/30 transition hover:bg-[#006d4d]"
        >
          Download on the App Store
        </a>
        {openInAppHref ? (
          <a
            href={openInAppHref}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white/20 dark:text-white"
          >
            Open in BakiMate
          </a>
        ) : null}
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center text-sm font-semibold text-[#2EC4B6] underline-offset-2 hover:underline"
        >
          Home
        </Link>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-500">
        If someone shared a link with you, open it on your phone — it can bring you here (
        {SITE_URL}/join) so you can continue in the installed app.
      </p>
    </div>
  );
}
