import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { PlausibleScript } from "@/components/analytics/PlausibleScript";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/config/urls";
import { SITE_KEYWORDS } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "BakiMate",
  title: {
    default: "BakiMate — Udhaar & installments, clear and fast",
    template: "%s | BakiMate",
  },
  description:
    "Record credits (gave), payments (got), and instalments per customer—simple shop ledger for iOS, Android, and web.",
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: "BakiMate", url: SITE_URL }],
  creator: "BakiMate",
  publisher: "BakiMate",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "BakiMate",
    statusBarStyle: "black-translucent",
  },
  category: "finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "BakiMate — Udhaar & installments, clear and fast",
    description:
      "Track what customers owe and what they paid—fast ledger for daily shop operations.",
    type: "website",
    locale: "en_US",
    siteName: "BakiMate",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "BakiMate — Udhaar & installments, clear and fast",
    description:
      "Customer balances, credits, and instalments in one simple ledger.",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--foreground)] transition-colors duration-300">
        <StructuredData />
        <ThemeProvider>
          <PlausibleScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
