import Image from "next/image";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { Smartphone } from "lucide-react";

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
          <GlassPanel className="overflow-hidden p-0">
            <div
              className="flex items-center gap-4 border-b border-slate-200/80 px-6 py-5 dark:border-white/10 sm:px-8"
              style={{
                background: `linear-gradient(135deg, ${brand.primary}12, transparent 60%)`,
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${brand.primary}18` }}
              >
                <Smartphone className="h-6 w-6" style={{ color: brand.primary }} aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  Ready to try?
                </p>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                  iOS &amp; Android — same sign-in as production.
                </p>
              </div>
              <Image
                src="/icon.jpg"
                alt=""
                width={56}
                height={56}
                aria-hidden
                className="hidden h-14 w-14 shrink-0 rounded-2xl object-cover shadow-md sm:block"
              />
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Download for your platform, then sign in with email, Google, or Apple.
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
                  href="/contact"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Contact
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Need something custom for your region or POS integration?{" "}
                <Link
                  href="/contact"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: brand.primary }}
                >
                  Contact us
                </Link>
                .
              </p>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
