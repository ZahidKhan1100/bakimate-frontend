import { HOME_FAQ } from "@/lib/seo-faq";

type FaqStructuredDataProps = {
  items?: ReadonlyArray<{ question: string; answer: string }>;
};

export function FaqStructuredData({ items = HOME_FAQ }: FaqStructuredDataProps) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
