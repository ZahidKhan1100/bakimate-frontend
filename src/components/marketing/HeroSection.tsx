import Link from "next/link";
import type { ReactNode } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SiteLogo } from "@/components/site/SiteLogo";
import { brand } from "@/lib/brand";
import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";

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

        <div className="relative hm-hero-zoom">
          <div
            className="absolute -right-8 -top-8 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: `${brand.accentTeal}33` }}
          />
          <GlassPanel className="relative p-6 md:p-8">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
              <div className="aspect-[9/16] max-h-[320px] rounded-xl bg-gradient-to-b from-slate-700 to-slate-900 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>9:41</span>
                  <span className="flex items-center gap-1.5 font-medium text-white/80">
                    <SiteLogo decorative size={18} className="rounded-md" />
                    BakiMate
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <MockLedgerRow
                    icon={<ArrowUpRight className="h-4 w-4 text-emerald-400" />}
                    label="Gave (credit)"
                    amount="RM 240.00"
                    sub="Ahmad — instalment 2/6"
                  />
                  <MockLedgerRow
                    icon={<ArrowDownLeft className="h-4 w-4 text-teal-300" />}
                    label="Got (payment)"
                    amount="RM 80.00"
                    sub="DuitNow · today"
                  />
                  <div
                    className="rounded-xl border border-white/10 p-3 backdrop-blur-md"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-300">
                      Receipt scan
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">Supplier invoice</p>
                    <p className="text-xs text-white/60">Gemini · amount prefilled</p>
                    <p className="mt-2 text-lg font-black" style={{ color: brand.accentTeal }}>
                      RM 42.10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function MockLedgerRow({
  icon,
  label,
  amount,
  sub,
}: {
  icon: ReactNode;
  label: string;
  amount: string;
  sub: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
      <div className="flex min-w-0 items-start gap-2">
        <div className="mt-0.5 shrink-0 rounded-lg bg-white/10 p-1.5">{icon}</div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{label}</p>
          <p className="truncate text-sm font-bold text-white">{sub}</p>
        </div>
      </div>
      <p className="shrink-0 text-sm font-black text-white">{amount}</p>
    </div>
  );
}
