import { Suspense, lazy, useEffect } from 'react';

import Spinner from './components/UI/Spinner/Spinner';
import Aos from 'aos';
const Header = lazy(() => import('./components/Sections/HeaderSection/Header'));
const Hero = lazy(() => import('./components/Sections/HeroSection/Hero'));
const EcoSystem = lazy(() => import('./components/Sections/EcoSection/EcoSystem'));
const Products = lazy(() => import('./components/Sections/ProductsSection/Products'));
const Services = lazy(() => import('./components/Sections/ServicesSection/Services'));
const Footer = lazy(() => import('./components/Sections/FooterSection/Footer'));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out-back',
      offset: window.innerWidth < 448 ? 0 : 60,
    });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <main>
        <Hero />
        <EcoSystem />
        <Products />
        <Services />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
