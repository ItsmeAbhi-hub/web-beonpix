import React, { useState, useEffect } from "react";

const MobileDevelopment = () => {
  const [highlightedHeading, setHighlightedHeading] = useState(
    ""
  );

  const headings = [""];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedHeading((current) => {
        const currentIndex = headings.indexOf(current);
        const nextIndex = (currentIndex + 1) % headings.length;
        return headings[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      image: "/src/assets/images/mobile1.jpg",
      alt: "Mobile Development Concept",
      heading: "Mobile Development",
      paragraph:
        "We design cutting-edge mobile applications for iOS and Android, helping businesses thrive in the digital era. With a focus on innovation, we combine advanced technology, intuitive design, and seamless functionality to create high-performance solutions tailored to your vision. Leveraging AI, cloud computing, and data analytics, we build scalable, secure, and future-ready applications that enhance user engagement and drive digital transformation. Whether you're a startup or an enterprise, we craft feature-rich consumer apps, enterprise solutions, and e-commerce platforms that captivate users and ensure lasting success.",
      imageOnLeft: true,
    },
    {
      image: "/src/assets/images/mobile2.jpg",
      alt: "Mobile Development Process",
      heading: "",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">Our Services</h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>
              Custom App Development – Tailored solutions for iOS & Android.
            </li>
            <li>
              Cross-Platform App Development – Using Flutter, React Native, or
              other frameworks.
            </li>
            <li>
              AI-Powered Apps – Integrating AI/ML for smart functionalities.
            </li>
            <li>
              E-Commerce Apps – Online store development with secure payments.
            </li>
            <li>
              On-Demand Apps – Ride-sharing, food delivery, home services, etc.
            </li>
            <li>
              Enterprise Apps – Internal business applications for productivity
              and automation.
            </li>
            <li>Social Networking Apps – Community-building platforms.</li>
            <li>
              Healthcare & Fitness Apps – Telemedicine, wellness tracking,
              appointment booking.
            </li>
            <li>
              Educational Apps – E-learning, LMS platforms, and interactive
              learning tools.
            </li>
            <li>
              Finance & Banking Apps – Digital wallets, expense tracking, and
              financial services.
            </li>
            <li>
              Booking & Reservation Apps – Travel, hotel, events, and
              appointment booking solutions.
            </li>
            <li>
              Wearable & IoT Apps – Apps for smartwatches, IoT devices, and
              connected technology.
            </li>
            <li>App UI/UX Design – Stunning, user-friendly interfaces.</li>
            <li>
              App Maintenance & Support – Regular updates, bug fixes, and
              performance optimization.
            </li>
          </ul>
        </>
      ),
      imageOnLeft: false,
    },
    {
      image: "/src/assets/images/mobile3.jpg",
      alt: "Mobile Development Success",
      heading: "",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            Frontend Development
          </h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>
              Flutter (Dart) – Develop high-performance, visually stunning, and
              natively compiled apps for both iOS and Android.
            </li>
            <li>
              React Native (JavaScript/TypeScript) – Build dynamic, fast, and
              responsive mobile applications with a seamless native-like
              experience.
            </li>
            <li>
              Firebase Integration – Enable real-time databases, authentication,
              cloud storage, and robust backend support for scalable and
              efficient apps.
            </li>
          </ul>
        </>
      ),
      imageOnLeft: true,
    },
    {
      image: "/src/assets/images/mobile4.png",
      alt: "Mobile Development Innovation",
      heading: "",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">
            Backend Development
          </h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>
              Node.js (Express.js, Nest.js) – For high-performance, scalable,
              and real-time web applications.
            </li>
            <li>
              Python (Django, Flask, FastAPI) – For secure, efficient, and
              data-driven web solutions.
            </li>
            <li>
              PHP (Laravel, CodeIgniter) – For robust, feature-rich, and dynamic
              web applications.
            </li>
            <li>
              Java (Spring Boot) – For enterprise-level, secure, and
              high-performance applications.
            </li>
            <li>
              .NET (ASP.NET Core) – For powerful, scalable, and business-centric
              web solutions.
            </li>
            <li>
              Go (Gin, Fiber) – For ultra-fast, efficient, and cloud-native
              applications.
            </li>
            <li>
              Firebase – For real-time database, authentication, serverless
              backend, and cloud-based solutions.
            </li>
          </ul>
        </>
      ),
      imageOnLeft: false,
    },
  ];

  const tools = [
    { name: "Flutter", src: "/src/assets/images/flutter.png" },
    { name: "React Native", src: "/src/assets/images/react-native.png" },
    { name: "Firebase", src: "/src/assets/images/firebase.png" },
    { name: "Node.js", src: "/src/assets/images/nodejs.png" },
    { name: "", src: "/src/assets/images/php.png" },
    { name: "", src: "/src/assets/images/python.png" },
    { name: "", src: "/src/assets/images/java.png" },
    { name: "", src: "/src/assets/images/go.png" },
    { name: "NET", src: "/src/assets/images/dotnet.png" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-18 flex flex-col">
      {/* New Top Heading with Quotation Mark */}
      <h1 className="text-5xl font-bold text-center mt-25 mb-12 mr-25 text-white flex items-left justify-left">
        <span className="text-yellow-300 text-6xl mr-4">&quot;</span>
        <span>
          <span>Our</span> Mobile Development Expertise
        </span>
      </h1>

      {/* Existing Heading with slot animation */}
      <div className="text-center mb-16">
        <div className="slot-container h-12 relative overflow-hidden text-center">
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`slot-item absolute w-full text-4xl font-light ${
                highlightedHeading === heading ? "active" : ""
              }`}
            >
              {heading.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i === 0 ? "text-yellow-300" : "text-white"}
                >
                  {word.split("").map((char, j) => (
                    <span key={j}>{char}</span>
                  ))}
                  {i < heading.split(" ").length - 1 && " "}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Sections with Picture and Paragraph */}
      <div className="flex-1 flex flex-col gap-12 mb-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              section.imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 mx-10 section-image transition-all duration-300">
              <img
                src={section.image}
                alt={section.alt}
                className="w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Paragraph with Heading */}
            <div className="w-full md:w-1/ p-8 paragraph-container transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                {section.heading}
              </h3>
              {typeof section.paragraph === "string" ? (
                <p className="text-md text-gray-300">{section.paragraph}</p>
              ) : (
                section.paragraph
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section (Footer) */}
      <div className="w-full p-10 m-0">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tools We Use
        </h2>
        <div className="flex justify-center gap-12 flex-wrap">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-item flex flex-row items-center transition-all duration-300"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-14 w-18 object-contain"
              />
              <span className="text-sm font-semi text-white ml-4">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          /* Slot Animation for Heading */
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

          /* Image, Paragraph, and Tool Item Hover Effects */
          .section-image:hover,
          .section-image:focus-within {
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(45, 212, 191, 0.5);
          }
          .paragraph-container:hover,
          .paragraph-container:focus-within {
            transform: translateY(-6px);
          }
          .paragraph-container:hover h3,
          .paragraph-container:focus-within h3,
          .paragraph-container:hover h4,
          .paragraph-container:focus-within h4,
          .paragraph-container:hover p,
          .paragraph-container:focus-within p,
          .paragraph-container:hover ul,
          .paragraph-container:focus-within ul {
            filter: brightness(1.3);
          }
          .tool-item:hover,
          .tool-item:focus-within {
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(45, 212, 191, 0.5);
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .md\\:flex-row,
            .md\\:flex-row-reverse {
              flex-direction: column;
            }
            .section-image,
            .section-image img {
              width: 100%;
              height: 200px;
            }
            .slot-container {
              height: 8rem;
            }
            .slot-item {
              font-size: 2rem;
            }
            .tool-item img {
              height: 40px;
              width: 40px;
            }
            .tool-item span {
              font-size: 1rem;
              margin-left: 1rem;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .section-image:hover,
            .section-image:focus-within,
            .paragraph-container:hover,
            .paragraph-container:focus-within,
            .tool-item:hover,
            .tool-item:focus-within {
              transform: none;
              box-shadow: none;
            }
            .paragraph-container:hover h3,
            .paragraph-container:focus-within h3,
            .paragraph-container:hover h4,
            .paragraph-container:focus-within h4,
            .paragraph-container:hover p,
            .paragraph-container:focus-within p,
            .paragraph-container:hover ul,
            .paragraph-container:focus-within ul {
              filter: none;
            }
            .slot-item,
            .slot-item span {
              animation: none;
              transform: none;
              opacity: 1;
            }
          }
            /* New hover effect on tool items */
    .tool-item {
      transition: transform 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .tool-item:hover {
      transform: scale(1.1);
      z-index: 10;
    }

    .tool-item img {
      transition: transform 0.3s ease;
    }

    .tool-item:hover img {
      transform: scale(1.1);
    }
        `}
      </style>
    </div>
  );
};

export default MobileDevelopment