import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import Branding from "../../components/Branding/Brandingcomp";

const Brand = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <Branding />
      <Footer />
    </section>
  );
};

export default Brand;
