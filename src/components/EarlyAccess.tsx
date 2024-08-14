import CalendlyWidget from './Calendly';
import HighwayPanoramaImage from '@/assets/highway-panorama.webp';

export const EarlyAccess = () => {
  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     console.log("Subscribed!");
  //   };

  return (
    <>
      <section id="contact">
        {/* <hr className="w-11/12 mx-auto" /> */}
        <div className="text-center space-y-8 mt-32">
          <div className="flex justify-center content-center mx-10">
            <div
              style={{
                backgroundImage: `url(${HighwayPanoramaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="bg-cover bg-center h-96 w-full max-w-[1000px] rounded-3xl"
            />
          </div>
          <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center font-bold">
            Your Partner in Road-Ready Truck Dispatching.
          </p>
        </div>
        <div className="bg-slate-50">
          <div className="container py-24 sm:py-10 sm:p-4 md:px-4 lg:px-16 xl:px-16 mt-20">
            <h3 className="text-center text-3xl md:text-4xl font-bold">Join us today!</h3>
            <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
              Experience the FleetSync difference. Get in touch now to start optimizing your trucking operations.
            </p>
            <p className="text-center block text-muted-foreground underline">
              <a href="mailto:hello@fleetsync.online">hello@fleetsync.online</a>
            </p>
          </div>
          <CalendlyWidget />
        </div>
      </section>
    </>
  );
};
