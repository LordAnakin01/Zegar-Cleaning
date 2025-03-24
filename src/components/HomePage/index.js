import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import WhyChooseUs from '../WhyChooseUs';
import AboutSection from '../AboutSection';
import Stats from '../Stats';
import Gallery from '../Gallery';
import Team from '../Team';
import Testimonials from '../Testimonials';
import CallToAction from '../CallToAction';
import Contact from '../Contact';
import RecentArticles from '../RecentArticles';

const HomePage = () => {
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

export default HomePage; 