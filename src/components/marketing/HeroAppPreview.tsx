import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { ArrowDownLeft, ArrowUpRight, TrendingUp } from "lucide-react";

const STATS = [
  {
    icon: ArrowUpRight,
    label: "Gave (credit)",
    value: "RM 240",
    hint: "Instalment 2 of 6",
    tone: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: ArrowDownLeft,
    label: "Got (payment)",
    value: "RM 80",
    hint: "DuitNow · today",
    tone: "text-teal-700 dark:text-teal-300",
    bg: "bg-teal-500/10",
  },
  {
    icon: TrendingUp,
    label: "This week",
    value: "RM 1.2k",
    hint: "Collected on ledger",
    tone: "text-slate-700 dark:text-slate-200",
    bg: "bg-slate-500/10",
  },
] as const;

export function HeroAppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl sm:-inset-6"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${brand.primary}40, transparent 70%)`,
        }}
        aria-hidden
      />

      <GlassPanel className="relative overflow-hidden border-slate-200/90 p-0 dark:border-white/15">
        <div
          className="border-b border-slate-200/80 px-5 py-4 dark:border-white/10"
          style={{
            background: `linear-gradient(135deg, ${brand.primary}14, transparent 55%)`,
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-800 dark:text-teal-300">
            Live ledger preview
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Credits, payments, and instalments in one place.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 px-5 py-8 sm:px-8 sm:py-10">
          <div
            className="relative w-full max-w-[220px] sm:max-w-[240px]"
            style={{
              boxShadow: `0 24px 48px -16px ${brand.primary}55`,
            }}
          >
            <div
              className="absolute -inset-1 rounded-[1.75rem]"
              style={{
                background: `linear-gradient(145deg, ${brand.primary}, ${brand.accentTeal})`,
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-white p-2 dark:bg-slate-950">
              <Image
                src="/icon.jpg"
                alt="BakiMate app"
                width={480}
                height={480}
                priority
                className="h-auto w-full rounded-[1.25rem] object-cover"
                sizes="(max-width: 1024px) 220px, 240px"
              />
            </div>
          </div>

          <ul className="grid w-full gap-3 sm:gap-3.5">
            {STATS.map((row) => (
              <li
                key={row.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-slate-800/60"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${row.bg}`}
                >
                  <row.icon className={`h-5 w-5 ${row.tone}`} strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {row.label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                    {row.hint}
                  </p>
                </div>
                <p className="shrink-0 font-heading text-base font-extrabold text-slate-900 dark:text-white">
                  {row.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </GlassPanel>
    </div>
  );
}
