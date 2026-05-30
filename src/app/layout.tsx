import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { PlausibleScript } from "@/components/analytics/PlausibleScript";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/config/urls";
import {
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
  SITE_KEYWORDS,
  absoluteUrl,
} from "@/lib/seo";
import { OG_ALT } from "@/lib/og-image";

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

const defaultOgImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "BakiMate",
  title: {
    default: DEFAULT_SITE_TITLE,
    template: "%s | BakiMate",
  },
  description: DEFAULT_SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg" }],
  },
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
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "BakiMate",
    url: SITE_URL,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: OG_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [defaultOgImage],
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
