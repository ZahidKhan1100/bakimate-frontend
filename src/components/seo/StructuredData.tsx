import { SITE_URL } from "@/config/urls";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide JSON-LD for Organization + WebSite (helps rich results eligibility).
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
        },
        description:
          "BakiMate is a simple ledger for shopkeepers: track credits (gave), payments (got), and instalments per customer on iOS, Android, and web.",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "BakiMate",
        url: SITE_URL,
        description:
          "One ledger for udhaar and instalments — see who owes what, and what they paid, without spreadsheet chaos.",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        name: "BakiMate",
        applicationCategory: "FinanceApplication",
        operatingSystem: "iOS, Android, Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: SITE_URL,
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
