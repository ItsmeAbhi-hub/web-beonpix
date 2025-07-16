import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/images/globe.mp4";

const WhyChooseUsComp = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1, // 10% visibility triggers animation
    });

    if (container) observer.observe(container);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Technology logos data (unused here but you can still map logos if needed)
  const technologies = [
    { name: "Flutter", logo: "/api/placeholder/80/40" },
    { name: "Angular", logo: "/api/placeholder/80/40" },
    { name: "AWS", logo: "/api/placeholder/80/40" },
    { name: "Python", logo: "/api/placeholder/80/40" },
    { name: "Laravel", logo: "/api/placeholder/80/40" },
    { name: "Spring", logo: "/api/placeholder/80/40" },
    { name: "Node.js", logo: "/api/placeholder/80/40" },
    { name: "Odoo", logo: "/api/placeholder/80/40" },
    { name: "Figma", logo: "/api/placeholder/80/40" },
    { name: "Photoshop", logo: "/api/placeholder/80/40" },
  ];

  return (
    <div
      ref={containerRef}
      className={`bg-black text-white py-16 px-6 max-w-7xl mx-auto transition-opacity transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-700 ease-out`}
    >
      {/* Why Choose Us Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-8">
          <span className="text-yellow-400 font-semibold">Why Choose</span>
          <span className="text-white font-light"> Us?</span>
        </h2>

        <p className="text-lg leading-relaxed">
          At Beonpix, we craft scalable, robust IT solutions that evolve with
          your business. Our custom software enhances user experience, drives
          efficiency, and fuels long-term success. Let's build innovative
          solutions that delight your customers and accelerate your growth in
          the digital era.
        </p>
      </div>

      {/* Video Section */}
      <div className="text-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsComp;
