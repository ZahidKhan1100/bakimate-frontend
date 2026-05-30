import type { Metadata } from "next";
import Link from "next/link";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { ProductCtaSection } from "@/components/marketing/ProductCtaSection";
import { StoreDownloadButtons } from "@/components/marketing/StoreDownloadButtons";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shop ledger for udhaar & instalments",
  description:
    "BakiMate helps shopkeepers track customer credits (gave), payments (got), supplier payables, and instalments—fast ledger for iOS and Android.",
  path: "/",
  keywords: [
    "udhaar app",
    "shop ledger",
    "customer balance",
    "instalment tracker",
    "small business Malaysia",
  ],
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeatureGrid />
        <ProductCtaSection />

        <section className="border-t border-white/10 bg-slate-950/40 px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-900 dark:text-teal-300">
              Privacy &amp; compliance
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-300">
              <Link
                href="/privacy"
                className="font-semibold underline underline-offset-2 hover:opacity-90 dark:text-teal-300"
                style={{ color: brand.primary }}
              >
                Privacy &amp; Trust
              </Link>
              <span className="mx-2 text-slate-500 dark:text-slate-400" aria-hidden>
                ·
              </span>
              <Link
                href="/terms"
                className="font-semibold underline underline-offset-2 hover:opacity-90 dark:text-teal-300"
                style={{ color: brand.primary }}
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-16 dark:bg-slate-900/40 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-800 dark:text-teal-400">
                What&apos;s new
              </p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                Receipts, reminders, and shop polish
              </h2>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                We ship improvements to scanning, WhatsApp nudges, PDFs, and Pro gating as the app
                matures—see the full list on What&apos;s New.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-3">
              <GlassPanel className="p-5 sm:p-6">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  Receipt capture
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Snap supplier or expense receipts when your API has Gemini configured—amount hints
                  flow into the right ledger entry.
                </p>
              </GlassPanel>
              <GlassPanel className="p-5 sm:p-6">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  Customer balance link
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Share a read-only webpage so buyers can see their balance without installing the
                  app—great for trust at the counter.
                </p>
              </GlassPanel>
              <GlassPanel className="p-5 sm:p-6">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  DuitNow &amp; shop profile
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Store your QR and payout copy once; reuse in receipts and &quot;got paid&quot;
                  flows on mobile.
                </p>
              </GlassPanel>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Detailed release notes live in the app updates channel too.
              </p>
              <Link
                href="/whats-new"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-500 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
              >
                View What&apos;s New →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="border-t border-white/10 px-4 py-16 dark:bg-slate-900/40 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
              Download BakiMate
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
              BakiMate is live on the App Store for iPhone and iPad. Android on Google Play is
              coming soon.
            </p>
            <StoreDownloadButtons className="mt-8 sm:mt-10" />
            <GlassPanel className="mx-auto mt-10 max-w-lg p-5 sm:mt-12 sm:p-6">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Questions about rollout, training, or regional payments?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex font-bold underline underline-offset-2"
                style={{ color: brand.primary }}
              >
                Talk to us →
              </Link>
            </GlassPanel>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
