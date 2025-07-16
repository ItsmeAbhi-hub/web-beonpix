import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutContent = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">

        {/* Title */}
        <motion.h1
          className="text-5xl font-semibold text-center mt-28 mb-8 transition-transform duration-300 hover:scale-105"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Beonpix: Innovating Digital Excellence
        </motion.h1>

        {/* Introduction Heading */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-12 transition duration-300 hover:text-yellow-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Introduction
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-[1000px]">
            <motion.p className="text-2xl mb-6 text-gray-300 font-poppins">
              Welcome to Beonpix, where creativity meets technology to build
              extraordinary digital experiences! We specialize in app
              development, web development, UI/UX design, graphic design,
              branding, and academic projects, delivering smart, high-impact
              solutions that bring ideas to life. At Beonpix, we don’t just
              create—we innovate. Whether it’s crafting sleek websites,
              designing intuitive apps, shaping powerful brand identities, or
              driving business growth with strategic digital marketing, we turn
              your vision into reality. Let’s redefine digital excellence
              together.
            </motion.p>
            <motion.p
              className="text-xl mb-6 text-yellow-400 text-center font-bold cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0px 0px 0px #facc15" }}
            >
              Be bold. Be creative. Beonpix.
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="flex items-center justify-center mb-12 gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="w-[500px] pr-8 p-4 rounded-xl transition duration-300 hover:-translate-y-2 hover:bg-[#111] hover:shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              Our Mission
            </h3>
            <p className="text-lg text-white-100">
              “ To be a global leader in IT solutions, driving digital
              transformation through innovative technology, seamless user
              experiences, and data-driven marketing strategies that empower
              businesses to thrive in an ever-evolving digital landscape. “
            </p>
          </motion.div>

          <motion.div
            className="w-[400px]"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/src/assets/images/about1.png"
              alt="Mission Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="flex items-center justify-center mb-12 gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="w-[400px] pr-8"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/src/assets/images/about2.png"
              alt="Vision Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            className="w-[500px] p-4 rounded-xl transition duration-300 hover:-translate-y-2 hover:bg-[#111] hover:shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              Our Vision
            </h3>
            <p className="text-lg text-white-100">
              "Beonpix leads the digital revolution, crafting intelligent
              solutions that merge innovation with real-world impact—staying on
              the pixel of innovation to shape a limitless future.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
