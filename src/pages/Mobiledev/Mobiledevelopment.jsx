import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import MobileDevComp from "../../components/Mobiledev/Mobiledevcomp";


const MobileDevelopment = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <MobileDevComp />
      <Footer />
    </section>
  );
};

export default MobileDevelopment;