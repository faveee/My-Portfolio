import React from 'react';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}
