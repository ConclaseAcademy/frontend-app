import { delay } from 'motion';
import Footer from '../../components/Footer/Footer';
import About from './components/about/About';
import CTA from './components/CTA/CTA';
import Everything from './components/Everything/Everything';
import Hero from './components/hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonies from './components/Testimonies/Testimonies';
import { motion } from "motion/react"

export default function LandingPage() {

  const slideUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay:0.2 },
    },
  };

  return (
    <>
      {/* <motion.div   
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}> */}
        <Hero />
      {/* </motion.div> */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        >
        <About />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        >
        <Everything />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        >
        <HowItWorks />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        >
        <Testimonies />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        >
        <CTA />
      </motion.div>
      <Footer />
    </>
  )
}

