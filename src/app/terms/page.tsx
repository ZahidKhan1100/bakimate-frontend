import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlassPanel } from "@/components/ui/glass-panel";
import { brand } from "@/lib/brand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "BakiMate Terms of Service for the shop ledger mobile app, Pro subscription, and bakimate.com website.",
  path: "/terms",
  keywords: ["terms of service", "user agreement", "BakiMate"],
});

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Terms" },
            ]}
          />
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            These terms apply to the BakiMate mobile apps and this website. Replace this placeholder
            with counsel-approved text when you are ready; the canonical URL stays at{" "}
            <strong className="text-slate-900 dark:text-white">bakimate.com/terms</strong> so in-app
            links and store listings keep working.
          </p>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
            <GlassPanel className="p-5 sm:p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Summary</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  By using BakiMate you agree to follow these terms and our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold underline-offset-2 hover:underline"
                    style={{ color: brand.accentTeal }}
                  >
                    Privacy &amp; Trust
                  </Link>{" "}
                  materials. The service is provided &quot;as is&quot; as software to help you record
                  customer and supplier balances—not as legal, tax, or financial advice.
                </p>
                <p>
                  You are responsible for the accuracy of amounts you enter and for any agreements
                  with your customers or suppliers. See{" "}
                  <Link
                    href="#calculations-disclaimer"
                    className="font-semibold underline-offset-2 hover:underline"
                    style={{ color: brand.primary }}
                  >
                    calculations &amp; rounding
                  </Link>{" "}
                  below for how the app represents money.
                </p>
              </div>
            </GlassPanel>

            <GlassPanel
              className="border p-5 sm:p-6 md:p-8"
              style={{ borderColor: `${brand.primary}40` }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: brand.primary }}
              >
                Full legal text
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                Publish your binding Terms of Service in this panel (or swap in a hosted document).
                Keeping the canonical URL on{" "}
                <strong className="text-slate-900 dark:text-white">bakimate.com/terms</strong> lets
                the app open it with{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">
                  Linking.openURL
                </code>{" "}
                without a new app store build when wording changes.
              </p>
            </GlassPanel>
          </div>

          <GlassPanel
            id="calculations-disclaimer"
            className="mt-10 scroll-mt-28 p-5 sm:mt-12 sm:p-6 md:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              Calculations, cents &amp; rounding
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Amounts in BakiMate are intended to match how you think at the counter: totals you
              enter, &quot;gave&quot; credit, &quot;got&quot; payments, supplier dues, and
              instalment splits. We store and display values in a way that keeps running balances
              consistent. When a figure does not divide evenly across instalments or parties, any
              remainder is assigned using stable rules built into the app so the math adds up and
              stays auditable in the ledger.
            </p>
            <p className="mt-4 rounded-xl border p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
              style={{ borderColor: `${brand.primary}40`, backgroundColor: `${brand.primary}0d` }}
            >
              <strong className="font-semibold text-slate-900 dark:text-white">Important.</strong>{" "}
              BakiMate helps you track and organize your shop&apos;s numbers. It does not settle
              disputes with buyers or suppliers, enforce payment, or replace qualified professional
              advice. For tax, lending regulations, or legal matters, keep your own records and
              consult a professional. See also our{" "}
              <Link
                href="/privacy"
                className="font-semibold underline-offset-2 hover:underline"
                style={{ color: brand.primary }}
              >
                Privacy &amp; Trust
              </Link>{" "}
              for how we describe limitations in plain language.
            </p>
          </GlassPanel>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
