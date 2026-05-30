import { HOME_FAQ } from "@/lib/seo-faq";

export function HomeFaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-white/10 px-4 py-16 dark:bg-slate-950/20 sm:px-6 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-800 dark:text-teal-400">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl"
        >
          Common questions
        </h2>
        <dl className="mt-10 space-y-8">
          {HOME_FAQ.map((item) => (
            <div key={item.question}>
              <dt className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
