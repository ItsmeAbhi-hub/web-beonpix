import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import UiuxComp from "../../components/Uiux/Uiuxcomp";

const Uiuxdesign = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <UiuxComp />
      <Footer />
    </section>
  );
};

export default Uiuxdesign;
