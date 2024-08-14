import PersonalizedSchedulingImage from '@/assets/personalized-scheduling.webp';
import RoutePlanningImage from '@/assets/truck-driver.webp';
import DirectCommunicationImage from '@/assets/truck-driver-outside.webp';
import ComplianceSupportImage from '@/assets/inspector-clipboard.webp';

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    id: 'personalized-schedling',
    title: 'Personalized Scheduling',
    description: 'Our team works with you to plan your pick-ups and deliveries efficiently.',
    image: PersonalizedSchedulingImage,
  },
  {
    id: 'route-planning',
    title: 'Route Planning',
    description: 'We help you to find the best routes, helping you save time and avoid delays.',
    image: RoutePlanningImage,
  },
  {
    id: 'direct-communication',
    title: 'Direct Communication',
    description: 'We stay in constant contact, ready to assist with any updates or changes.',
    image: DirectCommunicationImage,
  },
  {
    id: 'compliance-support',
    title: 'Compliance Support',
    description: 'We help you stay on top of industry rules and regulations, ensuring you’re always compliant.',
    image: ComplianceSupportImage,
  },
];

export const Features = () => {
  return (
    <div className="bg-slate-50">
      <section id="services" className="container py-10 ">
        {features.map((feature, index) => {
          const highlightedPart = feature.title.match(/\*(.*?)\*/)?.[1];
          const normalPart = feature.title.replace(/\*(.*?)\*/g, '');
          const normalIndex = feature.title.indexOf(normalPart);

          return (
            <div className="max-w-[1100px] mx-auto">
              <div
                id={feature.id}
                key={index}
                className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center pb-20"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-auto rounded-xl max-h-[30rem] ${index % 2 === 1 ? 'xl:order-last lg:order-last md:order-last sm:order-none' : ''}`}
                />
                <div>
                  <h2 className="font-bold text-4xl">
                    {normalIndex === 0 ? (
                      <>
                        {normalPart}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                          {highlightedPart}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                          {highlightedPart}
                        </span>
                        {normalPart}
                      </>
                    )}
                  </h2>
                  <p className="pt-4 text-xl">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
