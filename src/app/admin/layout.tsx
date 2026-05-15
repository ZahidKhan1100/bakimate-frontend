import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <aside className="flex w-60 flex-col border-r border-[var(--glass-border)] bg-[var(--background)] px-4 py-6">
        <div className="font-heading text-lg font-extrabold tracking-tight text-[var(--brand)]">
          BakiMate
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Admin
        </p>
        <nav className="mt-8 flex flex-col gap-1 text-sm font-semibold" aria-label="Admin">
          <Link
            href="/admin/dashboard"
            className="rounded-xl px-3 py-2 text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
          >
            Overview
          </Link>
          <span className="px-3 py-2 text-xs font-medium text-[var(--muted)]">
            More modules (users, shops, billing) hook to your API here.
          </span>
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-[var(--glass-border)] pt-4">
          <ThemeToggle />
          <Link
            href="/"
            className="text-xs font-semibold text-[var(--muted)] hover:underline"
          >
            ← Marketing site
          </Link>
        </div>
      </aside>
      <main className="min-w-0 flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
