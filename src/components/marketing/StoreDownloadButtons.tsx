import { APP_STORE_URL, PLAY_STORE_URL } from "@/config/urls";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type StoreDownloadButtonsProps = {
  className?: string;
  /** When true, Google Play is a muted “coming soon” control instead of a dead link. */
  showPlayComingSoon?: boolean;
};

export function StoreDownloadButtons({
  className,
  showPlayComingSoon = true,
}: StoreDownloadButtonsProps) {
  const playLive = PLAY_STORE_URL.length > 0;

  return (
    <div
      className={cn(
        "flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4",
        className,
      )}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl px-8 py-3.5 font-semibold text-white transition hover:opacity-95 sm:min-h-14 sm:w-auto sm:min-w-[200px] sm:py-0"
        style={{ backgroundColor: brand.primary }}
      >
        App Store
      </a>
      {playLive ? (
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-slate-300 bg-white py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:min-h-14 sm:w-auto sm:min-w-[200px] sm:py-0"
        >
          Google Play
        </a>
      ) : showPlayComingSoon ? (
        <span
          className="inline-flex min-h-[48px] w-full cursor-not-allowed items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-3.5 text-sm font-semibold text-slate-500 dark:border-white/15 dark:bg-slate-900/50 dark:text-slate-400 sm:min-h-14 sm:w-auto sm:min-w-[200px] sm:py-0"
          title="Google Play listing not published yet"
        >
          Google Play — coming soon
        </span>
      ) : null}
    </div>
  );
}
