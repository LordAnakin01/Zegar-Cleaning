import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Stats from '../components/Stats';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <Stats />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Team />
      <Contact />
    </>
  );
};

export default Home; 