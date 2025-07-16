import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import Academic from "../../components/Academic/Academiccomp";

const Academy = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <Academic />
      <Footer />
    </section>
  );
};

export default Academy;
