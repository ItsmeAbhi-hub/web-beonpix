import React, { useEffect, useRef, useState } from "react";

const Intro = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1, // 10% visible
    });

    if (container) observer.observe(container);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible) return; // Only attach events after visible

    const container = containerRef.current;
    const spans = container.querySelectorAll(".letter-span");

    const updateBounce = (e) => {
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      const radius = 50;

      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const spanCenterX = spanRect.left + spanRect.width / 2;
        const spanCenterY = spanRect.top + spanRect.height / 2;

        const distance = Math.sqrt(
          (cursorX - spanCenterX) ** 2 + (cursorY - spanCenterY) ** 2
        );

        if (distance < radius) {
          span.classList.add(
            "-translate-y-1",
            "scale-120",
            "text-yellow-500",
            "opacity-70"
          );
        } else {
          span.classList.remove(
            "-translate-y-1",
            "scale-120",
            "text-yellow-500",
            "opacity-70"
          );
        }
      });
    };

    container.addEventListener("mousemove", updateBounce);
    container.addEventListener("mouseleave", () => {
      spans.forEach((span) =>
        span.classList.remove(
          "-translate-y-1",
          "scale-120",
          "text-yellow-500",
          "opacity-70"
        )
      );
    });

    return () => {
      container.removeEventListener("mousemove", updateBounce);
    };
  }, [visible]);

  const paragraphs = [
    "Welcome to Beonpix, where creativity meets technology to craft exceptional digital experiences. We specialize in app development, web development, UI/UX design, graphic design, branding, and academic projects, delivering high-impact solutions that bring ideas to life.",
    "At Beonpix, we don’t just create—we innovate. From designing sleek websites and intuitive apps to shaping powerful brand identities and driving business growth through strategic digital marketing, we transform visions into reality.",
    "Be bold. Be creative. Beonpix.",
  ];

  return (
    <div className="p-6 text-white flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Introduction</h1>
      <div
        ref={containerRef}
        className={`text-lg leading-relaxed max-w-7xl w-full text-center ml-16 ${
          visible ? "animate-visible" : ""
        }`}
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`mb-4 paragraph-fade-in animate-delay-${index} ${
              visible ? "" : "opacity-0"
            }`}
          >
            {paragraph.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mx-1">
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="letter-span inline-block transition-all duration-300 tracking-wide"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        ))}
      </div>

      {/* Style section for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .paragraph-fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-visible .paragraph-fade-in {
          opacity: 1;
          animation-play-state: running;
        }

        .animate-delay-0 {
          animation-delay: 0.1s;
        }
        .animate-delay-1 {
          animation-delay: 0.4s;
        }
        .animate-delay-2 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Intro;
