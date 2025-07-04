// pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import NewsSection from '../components/NewsSection';
import UpcomingMatches from '../components/UpcomingMatches'; 
import Gallery from '../components/Gallery';
import FeaturedPlayers from '../components/FeaturedPlayers';
import FamousTestimonials from '../components/FamousTestimonials';
import AnimatedSection from '../components/AnimatedSectionForHome';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedSection>
      <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <InfoSection />
      </AnimatedSection>
      <AnimatedSection>
        <NewsSection />
      </AnimatedSection>
      <AnimatedSection>
        <UpcomingMatches />
      </AnimatedSection>
      <AnimatedSection>
        <Gallery />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedPlayers />
      </AnimatedSection>
      <AnimatedSection>
        <FamousTestimonials />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Home;
