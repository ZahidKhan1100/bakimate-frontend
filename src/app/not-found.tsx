import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found on BakiMate.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Page not found" },
            ]}
          />
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            That link may be outdated. Head back to the homepage or contact us if you need help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: brand.primary }}
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 dark:border-white/15 dark:text-white"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
