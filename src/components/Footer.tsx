export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-20 gap-x-12 gap-y-8">
        <div className="mb-8">
          <a href="/" className="font-bold text-xl flex">
            {/* <img src={Logo} alt="FleetSync Logo" className="h-8 w-8 mr-2" /> */}
            <span>FleetSync</span>
          </a>
        </div>

        <div className="flex gap-4 md:gap-12 text-white flex-col md:flex-row">
          <a href="tel:+12526234320" className="opacity-80 hover:opacity-100" target="_blank">
            (252) 623-4320
          </a>
          <a href="mailto:hello@fleetsync.online" className="opacity-80 hover:opacity-100" target="_blank">
            hello@fleetsync.online
          </a>
          <a href="https://www.facebook.com/FleetSync.online" className="opacity-80 hover:opacity-100" target="_blank">
            Facebook
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; FleetSync 2024 </h3>
      </section>
    </footer>
  );
};
