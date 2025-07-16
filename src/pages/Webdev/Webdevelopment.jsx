import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
import Footer from "../../components/Footer/Footer";
import WebDevComp from "../../components/Webdev/Webdevcomp";

const WebDevelopment = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <Navbar />
      <WebDevComp />
      <Footer />
    </section>
  );
};

export default WebDevelopment;
