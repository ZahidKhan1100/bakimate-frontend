import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { Link2, Smartphone, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Add people you trade with",
    body: "Customers who owe you on credit, and suppliers you owe on stock—kept in separate lists with phones and notes.",
  },
  {
    icon: Smartphone,
    title: "Record gave & got",
    body: "Log credits (gave), customer payments (got), supplier purchases, and outgoing payments. Instalments when you need them.",
  },
  {
    icon: Link2,
    title: "Share and collect",
    body: "Optional read-only balance link for a customer, WhatsApp nudges with your shop header, and DuitNow QR when you add it in Profile.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-y border-white/10 bg-slate-950/20 px-4 py-16 dark:bg-slate-900/40 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p
          className="text-center text-xs font-bold uppercase tracking-widest"
          style={{ color: brand.primary }}
        >
          How it works
        </p>
        <h2 className="mt-3 text-center font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
          Three beats. One clear ledger.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <GlassPanel key={s.title} className="relative p-6 pt-8">
              <span
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white"
                style={{ backgroundColor: brand.primary }}
              >
                {i + 1}
              </span>
              <s.icon
                className="h-9 w-9"
                strokeWidth={1.5}
                style={{ color: brand.accentTeal }}
              />
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {s.body}
              </p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
