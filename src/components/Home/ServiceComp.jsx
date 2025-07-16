import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import images from src/assets/images/
import mobile1 from "../../assets/images/mobile1.jpg";
import web1 from "../../assets/images/web1.png";
import ui1 from "../../assets/images/ui1.png";
import graphic1 from "../../assets/images/graphic1.png";
import brand1 from "../../assets/images/brand1.png";
import academy1 from "../../assets/images/academy1.png";

const ServiceComp = () => {
  const [highlightedService, setHighlightedService] =
    useState("Mobile Development");

  const services = [
    "Mobile Development",
    "Web Development",
    "UI/UX Design",
    "Academic Projects",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedService((current) => {
        const currentIndex = services.indexOf(current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const serviceCards = [
    {
      title: "Mobile Development",
      image: mobile1,
      description:
        "We empower businesses with innovative, high-performance mobile applications tailored to your specific needs and challenges.",
      route: "/solutions/mobile-development",
    },
    {
      title: "Web Development",
      image: web1,
      description:
        "We craft dynamic, high-performing websites tailored to meet business needs, ensuring a seamless user experience.",
      route: "/solutions/web-development",
    },
    {
      title: "UI/UX Design",
      image: ui1,
      description:
        "We design immersive, user-centric UI/UX solutions blending creativity and functionality for an unforgettable experience.",
      route: "/solutions/ui/ux-design",
    },
    {
      title: "Graphic Design",
      image: graphic1,
      description:
        "We create captivating and strategic graphic designs that help build a strong, memorable brand identity.",
      route: "/solutions/graphic-design",
    },
    {
      title: "Branding",
      image: brand1,
      description:
        "We build powerful brand identities through a strategic mix of storytelling, creativity, and design.",
      route: "/solutions/branding",
    },
    {
      title: "Academic Projects",
      image: academy1,
      description:
        "We guide and develop academic projects with high-quality research, innovation, and practical application of knowledge.",
      route: "/solutions/academic-projects",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light mb-2">
          Delivering Cutting-Edge Solutions
        </h2>
        <h2 className="text-4xl font-light mb-8">For Modern Enterprises</h2>
        <div className="slot-container h-16 relative overflow-hidden text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`slot-item absolute w-full text-5xl font-semibold ${
                highlightedService === service ? "active" : ""
              }`}
            >
              {service.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i === 0 ? "text-yellow-400 mr-4" : "text-white"}
                >
                  {word.split("").map((char, j) => (
                    <span key={j}>{char}</span>
                  ))}
                  {i < service.split(" ").length - 1 && " "}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="border border-yellow-700 rounded-3xl flex justify-center service-card relative transition-all duration-300"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-black to-gray-600 min-h-[400px] flex flex-col justify-between items-center text-center w-full relative overflow-hidden">
              <div className="hover-overlay absolute inset-0 bg-[rgba(31,41,55,0.5)] opacity-0 transition-opacity duration-300"></div>
              <div className="relative z-10 content-wrapper">
                <div className="image-container rounded-3xl overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[220px] w-full max-w-[400px] rounded-3xl shadow-lg mx-auto object-cover service-card-image block transition-all duration-400 ease-in-out"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4 transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-md text-gray-300 px-2 transition-all duration-300">
                  {card.description}
                </p>
              </div>
              <Link
                to={card.route}
                className="relative bg-yellow-500 border-1 text-white text-sm font-semibold rounded-full mt-8 px-4 py-2.5 overflow-hidden group transition-all duration-300 service-card-button inline-flex items-center"
              >
                <span className="relative z-10">
                  Learn More <span className="ml-1">→</span>
                </span>
                <span className="absolute inset-0 bg-gray-800 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out origin-left" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .slot-item {
            opacity: 0;
          }
          .slot-item.active {
            animation: slot-spin 4s ease-in-out forwards;
          }
          .slot-item span {
            display: inline-block;
            transform: translateY(100%);
            animation: letter-spin 1s ease-in-out forwards;
          }
          .slot-item span:nth-child(n) {
            animation-delay: calc(0.05s * var(--i));
          }
          @keyframes slot-spin {
            0% { opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes letter-spin {
            0% {
              transform: translateY(100%);
              filter: blur(2px);
              opacity: 0;
            }
            50% {
              transform: translateY(-10%);
              filter: blur(0);
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              filter: blur(0);
              opacity: 1;
            }
          }

          /* Hover Effects */
          .service-card-image {
            transform: scale(1) rotate(0deg);
          }
          .service-card:hover .hover-overlay,
          .service-card:focus-within .hover-overlay {
            opacity: 1;
            animation: pulse-overlay 1.5s ease-in-out infinite;
          }
          .service-card:hover,
          .service-card:focus-within {
            transform: scale(1.04);
            border: 3px solid;
            border-image: linear-gradient(45deg, #b8860b, #2dd4bf) 1;
            border-image-slice: 1;
            box-shadow: 0 8px 24px rgba(184, 134, 11, 0.4), 0 4px 16px rgba(45, 212, 191, 0.3);
            animation: gradient-slide 2s linear infinite;
          }
          .service-card::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #facc15 20%, #2dd4bf 80%);
            border-radius: 50%;
            opacity: 0;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 5;
          }
          .service-card:hover::after,
          .service-card:focus-within::after {
            animation: sparkle 0.6s ease-out forwards;
          }
          .service-card:hover .image-container .service-card-image,
          .service-card:focus-within .image-container .service-card-image {
            transform: scale(1.25) rotate(2deg);
            filter: brightness(1.15) saturate(1.2);
          }
          .service-card:hover .image-container::after,
          .service-card:focus-within .image-container::after {
            content: '';
            position: absolute;
            top: 10%;
            left: 90%;
            width: 6px;
            height: 6px;
            background: #facc15;
            border-radius: 50%;
            opacity: 0;
            animation: sparkle 0.4s ease-out 0.2s forwards;
          }
          .service-card:hover .content-wrapper h3,
          .service-card:focus-within .content-wrapper h3 {
            transform: translateY(-6px);
            filter: brightness(1.3);
          }
          .service-card:hover .content-wrapper p,
          .service-card:focus-within .content-wrapper p {
            transform: translateY(-6px);
            filter: brightness(1.3);
          }
          .service-card:hover .service-card-button,
          .service-card:focus-within .service-card-button {
            transform: scale(1.1);
            background: #facc15;
            box-shadow: 0 0 10px rgba(250, 204, 21, 0.6);
          }
          .service-card-button:hover {
            transform: scale(1.2) !important;
            animation: bounce 0.4s ease-in-out;
          }
          .service-card-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 100%;
            width: 6px;
            height: 6px;
            background: #facc15;
            border-radius: 50%;
            opacity: 0;
            transform: translate(-50%, -50%);
            z-index: 5;
          }
          .service-card-button:hover::after {
            animation: sparkle 0.5s ease-out forwards;
          }

          /* Animations */
          @keyframes gradient-slide {
            0% { border-image-source: linear-gradient(45deg, #b8860b, #2dd4bf); }
            50% { border-image-source: linear-gradient(45deg, #2dd4bf, #b8860b); }
            100% { border-image-source: linear-gradient(45deg, #b8860b, #2dd4bf); }
          }
          @keyframes pulse-overlay {
            0% { opacity: 0.8; }
            50% { opacity: 1; }
            100% { opacity: 0.8; }
          }
          @keyframes sparkle {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(2) translateX(calc(100px * (var(--sparkle-dir, 1)))) translateY(calc(100px * (var(--sparkle-dir-y, 1))));
            }
          }
          @keyframes bounce {
            0% { transform: scale(1.2); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1.2); }
          }

          /* Sparkle Variations */
          .service-card:hover::after:nth-child(1),
          .service-card:focus-within::after:nth-child(1) {
            --sparkle-dir: 1;
            --sparkle-dir-y: -1;
            animation-delay: 0s;
          }
          .service-card:hover::after:nth-child(2),
          .service-card:focus-within::after:nth-child(2) {
            --sparkle-dir: -1;
            --sparkle-dir-y: 1;
            animation-delay: 0.1s;
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .service-card,
            .service-card-image,
            .service-card-button,
            .hover-overlay,
            .content-wrapper h3,
            .content-wrapper p,
            .service-card::after,
            .image-container::after,
            .service-card-button::after {
              transition: none;
              animation: none;
            }
            .service-card:hover,
            .service-card:focus-within {
              transform: none;
              border: 1px solid #b8860b;
              box-shadow: none;
            }
            .service-card:hover .hover-overlay,
            .service-card:focus-within .hover-overlay {
              opacity: 0;
            }
            .service-card:hover .image-container .service-card-image,
            .service-card:focus-within .image-container .service-card-image {
              transform: none;
              filter: none;
            }
            .service-card:hover .content-wrapper h3,
            .service-card:focus-within .content-wrapper h3 {
              transform: none;
              filter: none;
            }
            .service-card:hover .content-wrapper p,
            .service-card:focus-within .content-wrapper p {
              transform: none;
              filter: none;
            }
            .service-card:hover .service-card-button,
            .service-card:focus-within .service-card-button {
              transform: none;
              box-shadow: none;
            }
            .service-card:hover::after,
            .service-card:focus-within::after,
            .service-card:hover .image-container::after,
            .service-card:focus-within .image-container::after,
            .service-card-button:hover::after {
              opacity: 0;
            }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .slot-container {
              height: 10rem;
            }
            .slot-item {
              font-size: 2.5rem;
            }
            .service-card-image {
              height: 180px;
              max-width: 100%;
            }
            .service-card {
              min-height: 360px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServiceComp;
