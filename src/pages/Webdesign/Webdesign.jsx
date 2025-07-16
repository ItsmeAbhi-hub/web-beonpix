import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import Webdesigncomp from "../../components/Webdesign/Webdesigncomp";

const Webdesign = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <Webdesigncomp />
      <Footer />
    </section>
  );
};

export default Webdesign;
