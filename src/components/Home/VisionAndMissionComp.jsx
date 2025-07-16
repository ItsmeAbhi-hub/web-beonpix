import React from "react";
import { motion } from "framer-motion";

const zoomFadeVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const VisionAndMissionComp = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Mission */}
          <motion.div
            className="mission-section space-y-6"
            variants={zoomFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <h2 className="text-4xl font-light">
              <span className="text-yellow-400 font-semibold">Our</span> Mission
            </h2>
            <p className="text-base leading-relaxed">
              “To be a global leader in IT solutions, driving digital transformation through innovative technology, seamless user experiences, and data-driven marketing strategies that empower businesses to thrive in an ever-evolving digital landscape.”
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            className="vision-section space-y-6"
            variants={zoomFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
          >
            <h2 className="text-4xl font-light">
              <span className="text-yellow-400 font-semibold">Our</span> Vision
            </h2>
            <p className="text-base leading-relaxed">
              “Beonpix leads the digital revolution, crafting intelligent solutions that merge innovation with real-world impact—staying on the pixel of innovation to shape a limitless future.”
            </p>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          .mission-section,
          .vision-section {
            transition: all 0.3s ease-in-out;
            border-radius: 0.75rem;
            padding: 1rem;
            position: relative;
          }

          .mission-section:hover,
          .mission-section:focus-within,
          .vision-section:hover,
          .vision-section:focus-within {
            transform: scale(1.02);
            box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
            background: rgba(31, 41, 55, 0.2);
          }

          .mission-section:hover h2,
          .mission-section:focus-within h2,
          .vision-section:hover h2,
          .vision-section:focus-within h2 {
            filter: brightness(1.2);
            text-shadow: 0 0 5px rgba(250, 204, 21, 0.7);
          }

          .mission-section:hover p,
          .mission-section:focus-within p,
          .vision-section:hover p,
          .vision-section:focus-within p {
            filter: brightness(1.2);
          }

          @media (max-width: 768px) {
            .mission-section,
            .vision-section {
              padding: 0.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default VisionAndMissionComp;
