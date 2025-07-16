import React from 'react';
import Navbar from '../../components/Navbar/Naavbar';
import AboutContent from '../../components/About/AboutContent';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;