import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";

/** Replaces the old HabiMate “verified badge / house agreement” lead magnet—BakiMate is B2B-lite / shop ledger. */
export function ProductCtaSection() {
  return (
    <section
      id="get-started"
      className="border-b border-white/10 px-4 py-16 dark:bg-slate-950/30 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              Your counter. Your currency. Your customers.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              BakiMate syncs with your account—use it on iOS and Android today. Web stays
              lightweight (marketing + legal); the app is where the ledger lives.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span style={{ color: brand.primary }}>✓</span>
                Multi-currency display where configured, reference totals optional.
              </li>
              <li className="flex gap-2">
                <span style={{ color: brand.primary }}>✓</span>
                PDFs for credits, settlements, and statements from the app.
              </li>
              <li className="flex gap-2">
                <span style={{ color: brand.primary }}>✓</span>
                  Pro features via in-app subscription when you enable RevenueCat.
              </li>
            </ul>
          </div>
          <GlassPanel className="p-6 sm:p-8">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Ready to try?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Download for your platform, then sign in with email, Google, or Apple—same as the
              production app.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl px-6 py-3 text-center text-sm font-bold text-white transition"
                style={{ backgroundColor: brand.primary }}
              >
                App Store / Play
              </a>
              <Link
                href="/join"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Have an invite code?
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Need something custom for your region or POS integration?{" "}
              <Link href="/contact" className="font-semibold underline underline-offset-2" style={{ color: brand.primary }}>
                Contact us
              </Link>
              .
            </p>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
