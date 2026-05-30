import Link from "next/link";
import { HeroAppPreview } from "@/components/marketing/HeroAppPreview";
import { brand } from "@/lib/brand";
import { Wallet } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 90% 60% at 50% -20%, rgba(0,135,90,0.28) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(46,196,182,0.14) 0%, transparent 50%)`,
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center">
        <div className="hm-hero-rise">
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-[15px] dark:border-white/10"
            style={{ color: brand.primary }}
          >
            <Wallet className="h-3.5 w-3.5" aria-hidden />
            Shop ledger
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Udhaar &amp; installments,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${brand.primary}, ${brand.accentTeal})`,
              }}
            >
              clear and fast.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-lg">
            Track what customers owe (credits you gave) and what they paid (got)—per customer, in
            your currency, without spreadsheet chaos. Manage supplier payables, instalments, and
            light insights from one app.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#download"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl px-8 py-3.5 text-center font-semibold text-white shadow-xl transition sm:min-h-14 sm:py-0"
              style={{
                backgroundColor: brand.primary,
                boxShadow: `0 20px 40px -12px ${brand.primary}55`,
              }}
            >
              Get the app
            </a>
            <Link
              href="#get-started"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 py-3.5 text-center font-semibold text-slate-900 backdrop-blur-[15px] transition hover:bg-white/20 dark:text-white sm:min-h-14 sm:py-0"
            >
              See features
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="text-sm font-semibold underline-offset-4 hover:underline"
              style={{ color: brand.primary }}
            >
              Business or partnership question →
            </Link>
          </div>
        </div>

        <div className="hm-hero-zoom">
          <HeroAppPreview />
        </div>
      </div>
    </section>
  );
}
