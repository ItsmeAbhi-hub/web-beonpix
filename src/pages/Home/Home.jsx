import React from 'react'
import Navbar from '../../components/Navbar/Naavbar';
import BannerComp from '../../components/Home/BannerComp';
import ServiceComp from '../../components/Home/ServiceComp';
import WhyChooseUsComp from '../../components/Home/WhyChooseUsComp';
import VisionAndMissionComp from '../../components/Home/VisionAndMissionComp';
import ContactForm from '../../components/Home/ContactForm';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Home/Intro';
const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <BannerComp />
      <Intro/>
      <ServiceComp />
      <WhyChooseUsComp />
      <VisionAndMissionComp />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home
