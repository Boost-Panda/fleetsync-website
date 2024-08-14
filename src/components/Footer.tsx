export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-20 gap-x-12 gap-y-8">
        <div className="mb-8">
          <a href="/" className="font-bold text-xl">
            {/* <img src={Logo} alt="FleetSync Logo" className="h-8 w-8 mr-2" /> */}
            <span>FleetSync</span>
          </a>
        </div>

        <div className="grid grid-cols-2">
          <div className="space-y-4 text-white col-span-1">
            <div>
              <a href="tel:+12526234320" className="opacity-80 hover:opacity-100" target="_blank">
                (252) 623-4320
              </a>
            </div>
            <div>
              <a href="mailto:hello@fleetsync.online" className="opacity-80 hover:opacity-100" target="_blank">
                hello@fleetsync.online
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/FleetSync.online"
                className="opacity-80 hover:opacity-100"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="space-y-4 text-white mt-4 col-span-1">
            <div>
              <a href="/terms" className="opacity-80 hover:opacity-100" target="_blank">
                Terms of Service
              </a>
            </div>
            <div>
              <a href="/privacy" className="opacity-80 hover:opacity-100" target="_blank">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center space-y-8">
        <h3>&copy; FleetSync LLC 2024 </h3>
        <span className="opacity-80 text-sm">30 N Gould St, STE R, Sheridan, Wyoming 82801, USA</span>
      </section>
    </footer>
  );
};
