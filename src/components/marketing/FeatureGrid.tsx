import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { BarChart3, Camera, Truck, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Customers & balance",
    body: "Each customer has a running balance: credits you gave, payments they made, and optional instalment plans—always visible.",
    tag: "Receivables",
  },
  {
    icon: Truck,
    title: "Supplier payables",
    body: "Track what you owe on stock credit: purchases increase debt, outgoing payments reduce it—same clarity as your customer side.",
    tag: "Payables",
  },
  {
    icon: BarChart3,
    title: "Insights",
    body: "See how your shop is pacing—without bloated accounting software. Built for daily counter workflow.",
    tag: "Pulse",
  },
  {
    icon: Camera,
    title: "Snap receipts",
    body: "When your API has Gemini configured, snap a receipt and let AI suggest amounts—same stack you trust, tuned for BakiMate.",
    tag: "AI",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
          Built for real shop counters
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          Not a roommate app—a focused ledger for udhaar, instalments, and payables. DuitNow QR and
          WhatsApp-friendly receipts when you configure them in the app.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <GlassPanel key={f.title} className="p-6">
              <div className="flex items-center justify-between">
                <f.icon
                  className="h-8 w-8"
                  strokeWidth={1.5}
                  style={{ color: brand.primary }}
                />
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-bold dark:text-teal-300"
                  style={{
                    backgroundColor: `${brand.primary}18`,
                    color: brand.primary,
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
