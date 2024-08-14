import { FAQ } from '@/components/FAQ';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';
import '@/App.css';
import { EarlyAccess } from '@/components/EarlyAccess';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <EarlyAccess />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
