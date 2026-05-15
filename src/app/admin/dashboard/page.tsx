import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "BakiMate admin dashboard (placeholder). Wire to bakimate-backend when ready.",
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-extrabold tracking-tight">Overview</h1>
      <p className="mt-3 text-base font-medium text-[var(--muted)]">
        This is the admin shell for BakiMate, mirroring the HabiMate frontend stack (Next.js App
        Router, Tailwind v4, same layout patterns). Connect authentication and data routes to your{" "}
        <code className="rounded bg-[var(--foreground)]/5 px-1.5 py-0.5 text-sm">
          NEXT_PUBLIC_API_BASE_URL
        </code>{" "}
        when the backend admin API is ready.
      </p>
      <ul className="mt-8 list-disc space-y-2 pl-6 text-sm font-medium text-[var(--muted)]">
        <li>Add middleware or session checks before exposing real data.</li>
        <li>Reuse components under <code className="text-[var(--foreground)]">src/components</code>.</li>
        <li>HabiMate’s public repo had no <code>/admin</code>; this portal is net-new for BakiMate.</li>
      </ul>
    </div>
  );
}
