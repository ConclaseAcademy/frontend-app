import Footer from '../../components/Footer/Footer';
import About from './components/about/About';
import CTA from './components/CTA/CTA';
import Everything from './components/Everything/Everything';
import Hero from './components/hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonies from './components/Testimonies/Testimonies';

export default function LandingPage() {

  return (
    <>
      <Hero />
      <About />
      <Everything />
      <HowItWorks />
      <Testimonies />
      <CTA />
      <Footer />
    </>
  )
}

