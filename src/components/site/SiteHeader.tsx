import Link from "next/link";
import { SITE_NAV } from "@/config/site-nav";
import { MobileNav } from "@/components/site/MobileNav";
import { SiteLogo } from "@/components/site/SiteLogo";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-white/95 pt-[env(safe-area-inset-top)] dark:bg-slate-950/95",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-heading text-lg font-extrabold tracking-tight sm:gap-2.5 sm:text-xl"
          style={{ color: brand.primary }}
        >
          <SiteLogo
            decorative
            size={36}
            priority
            className="shrink-0 rounded-lg"
          />
          <span className="truncate">BakiMate</span>
        </Link>
        <nav className="hidden items-center gap-6 underline-offset-4 md:flex lg:gap-8">
          {SITE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="text-sm font-medium text-slate-800 decoration-slate-500/70 transition hover:underline hover:decoration-[#00875A] dark:text-slate-200 dark:decoration-slate-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            prefetch={false}
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 sm:inline-flex"
            style={{ backgroundColor: brand.primary }}
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
