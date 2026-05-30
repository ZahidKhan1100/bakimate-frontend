import { APP_STORE_URL, SITE_URL } from "@/config/urls";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

/**
 * Site-wide JSON-LD: Organization, WebSite, and MobileApplication (App Store).
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "BakiMate",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.jpg`,
          width: 512,
          height: 512,
        },
        description:
          "BakiMate is a shop ledger for customer udhaar, instalments, payments, and supplier payables.",
        sameAs: [APP_STORE_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${SITE_URL}/contact`,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "BakiMate",
        url: SITE_URL,
        description:
          "Marketing site for BakiMate — udhaar and instalment ledger for shopkeepers.",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "MobileApplication",
        "@id": APP_ID,
        name: "BakiMate",
        applicationCategory: "FinanceApplication",
        operatingSystem: "iOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: APP_STORE_URL,
        },
        downloadUrl: APP_STORE_URL,
        installUrl: APP_STORE_URL,
        url: APP_STORE_URL,
        description:
          "Run your shop customer credit smarter: balances, reminders, instalments, supplier payables, and PDF summaries.",
        publisher: { "@id": ORG_ID },
        screenshot: `${SITE_URL}/opengraph-image`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
