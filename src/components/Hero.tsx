import { Button } from './ui/button';
import HeroImage from '@/assets/vivid-semi-truck.webp';
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from './HeroCards';
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center pt-20 lg:pt-30 md:pb-20 md:pt-20 gap-10">
      <div className="text-center space-y-8">
        <main className="text-7xl md:text-7xl font-bold">
          <h1 className="inline text-center">
            {/* <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              {' '}
              Boost
            </span>{' '} */}
            Welcome to FleetSync
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>
        <div className="flex justify-center content-center">
          <div
            style={{
              backgroundImage: `url(${HeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="bg-cover bg-center h-96 w-full max-w-[700px] rounded-3xl"
          />
        </div>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center font-bold">
          Your Partner in Road-Ready Truck Dispatching.
        </p>
        <div className="gap-4 pb-4 flex flex-col justify-center w-full content-center flex-wrap">
          <Button asChild className="w-full md:w-64">
            <a href="#contact">Join Us Today</a>
          </Button>
        </div>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center max-w-[800px]">
          At FleetSync, we’re all about helping truck drivers and companies keep their operations running smoothly,
          ensuring you can deliver your loads safely and on time.
        </p>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
