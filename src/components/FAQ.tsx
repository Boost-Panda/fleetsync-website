interface FAQProps {
  question: string;
  answer: string | JSX.Element;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'What support does FleetSync offer?',
    answer: 'We help with scheduling and compliance, giving you the freedom to choose your best routes.',
    value: 'item-1',
  },
  {
    question: 'How do I start with FleetSync?',
    answer: (
      <>
        <a className="underline" href="#contact">
          Schedule
        </a>{' '}
        a call or contact us by{' '}
        <a className="underline" href="tel:+12526234320">
          phone
        </a>{' '}
        or{' '}
        <a className="underline" href="mailto:hello@fleetsync.online">
          email
        </a>
        , and we'll guide you through a simple setup.
      </>
    ),
    value: 'item-2',
  },
  {
    question: 'Can FleetSync support multiple trucks?',
    answer: 'Absolutely, we tailor our services to both individual drivers and fleets.',
    value: 'item-3',
  },
  {
    question: 'Why choose FleetSync?',
    answer: 'For our direct, personalized support that respects your experience and choices on the road!',
    value: 'item-4',
  },
];
const half = Math.ceil(FAQList.length / 2);
const firstHalfFAQs = FAQList.slice(0, half);
const secondHalfFAQs = FAQList.slice(half, FAQList.length);

export const FAQ = () => {
  return (
    <section id="faqs" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 px-6">FleetSync 101: What You Need To Know</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 px-8">
        <div>
          {firstHalfFAQs.map(({ question, answer, value }: FAQProps) => (
            <div className="pb-6 pt-5 text-xl" key={value}>
              <h2 className="font-bold text-xl">{question}</h2>
              <p>{answer}</p>
            </div>
          ))}
        </div>

        <div>
          {secondHalfFAQs.map(({ question, answer, value }: FAQProps) => (
            <div className="pb-6 pt-5" key={value}>
              <h2 className="font-bold text-xl">{question}</h2>
              <p className="text-xl">{answer}</p>
            </div>
          ))}
        </div>
      </div>

      <h3 className="font-medium mt-4 px-8">
        <span className="text-muted-foreground"> Still have questions? </span>
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
