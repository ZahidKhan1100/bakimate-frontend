import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & support",
  description:
    "Contact BakiMate for bug reports, product ideas, press, and partnerships—we read every message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-xl">
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Contact & support
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Bugs, feature ideas, or partnerships—pick a category and we&apos;ll
            route it to the right human.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
