import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { JoinClient } from "./JoinClient";

export const metadata: Metadata = pageMetadata({
  title: "Download BakiMate",
  description:
    "Download BakiMate on the App Store for iPhone and iPad. Sign in and run your shop ledger—udhaar, payments, instalments, and supplier payables.",
  path: "/join",
  keywords: ["download BakiMate", "App Store", "udhaar app iOS"],
});

function JoinFallback() {
  return (
    <div className="h-32 animate-pulse rounded-2xl border border-white/5 bg-slate-200/20 dark:bg-slate-800/40" />
  );
}

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Download" },
            ]}
          />
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Get BakiMate
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The ledger runs in the mobile app. Install on your device, sign in, and you&apos;re
            set—no codes to type on this page.
          </p>
          <div className="mt-10">
            <Suspense fallback={<JoinFallback />}>
              <JoinClient />
            </Suspense>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
