import React, { useState, useEffect } from "react";

const WebDevelopment = () => {
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
      image: "/src/assets/images/web1.png",
      alt: "Web Development Concept",
      heading: "Web Development",
      paragraph:
        "We specialize in crafting dynamic, high-performing websites designed to adapt to the ever-evolving needs of modern businesses...",
      imageOnLeft: true,
    },
    {
      image: "/src/assets/images/web2.png",
      alt: "Web Development Services",
      heading: "",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2">Our Services</h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>Custom Website Development – Bespoke websites for any industry.</li>
            <li>E-Commerce Platforms – Secure, scalable online stores with payment integration.</li>
            <li>Content Management Systems (CMS) – WordPress, Drupal, or custom solutions.</li>
            <li>Progressive Web Apps (PWAs) – Fast, app-like experiences on the web.</li>
            <li>Web Portals – Enterprise portals for employees, customers, or partners.</li>
            <li>API Development – RESTful and GraphQL APIs for seamless integrations.</li>
            <li>SaaS Applications – Scalable, cloud-based software solutions.</li>
            <li>Single Page Applications (SPAs) – Dynamic, fast-loading web apps.</li>
            <li>Web UI/UX Design – Intuitive, visually appealing interfaces.</li>
            <li>Web Maintenance & Support – Updates, security patches, and optimization.</li>
          </ul>
        </>
      ),
      imageOnLeft: false,
    },
    {
      image: "/src/assets/images/web3.png",
      alt: "Web Development Technologies",
      heading: "Technology Stack",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2"></h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>React (JavaScript/TypeScript) – Build interactive, component-based web applications.</li>
            <li>Node.js (Express.js) – Create fast, scalable, and real-time backend services.</li>
            <li>Tailwind CSS – Design responsive, modern, and utility-first interfaces.</li>
          </ul>
        </>
      ),
      imageOnLeft: true,
    },
    {
      image: "/src/assets/images/web4.png",
      alt: "Web Development Innovation",
      heading: "Innovative Practices",
      paragraph: (
        <>
          <h4 className="text-xl font-bold text-white mb-2"></h4>
          <ul className="text-md text-gray-300 list-disc list-inside">
            <li>Python (Django, Flask) – Secure, efficient, and data-driven backends.</li>
            <li>PHP (Laravel) – Robust, feature-rich web applications.</li>
            <li>Next.js – Server-side rendering and static site generation for React.</li>
            <li>AWS/Cloud Services – Scalable, cloud-native infrastructure.</li>
            <li>MongoDB/PostgreSQL – Flexible, high-performance databases.</li>
            <li>GraphQL – Efficient, flexible API queries.</li>
            <li>WebSocket – Real-time communication for dynamic apps.</li>
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
    { name: "Vue", src: "/src/assets/images/vue.png" },
    { name: "Svelte", src: "/src/assets/images/svelte.png" },
    { name: "Tailwind", src: "/src/assets/images/tailwind.png" },
    { name: "Boostrap", src: "/src/assets/images/bootstrap.png" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8  flex flex-col">
      <h1 className="text-5xl font-bold text-center leading-tight mt-20 mb-2 w-[900px] text-white flex items-left justify-left">
        <span className="text-yellow-300 text-4xl ">"</span>
        <span>
          <span className="">Next-Gen</span> Web Development for Seamless Digital Experiences
        </span>
        <span className="text-yellow-300 text-4xl ">"</span>
      </h1>

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

      <div className=" flex flex-col gap-2 mb-10 p-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              section.imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-9`}
          >
            <div className="w-full md:w-1/2 mx-10 section-image transition-all duration-300">
              <img
                src={section.image}
                alt={section.alt}
                className="w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/1 p-8 paragraph-container transition-all duration-300">
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

      <div className="w-full p-14 m-0">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tools We Use
        </h2>
        <div className="flex justify-center gap-16 flex-wrap">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-item flex flex-row items-center transition-all duration-300"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-12 w-16 object-contain"
              />
              <span className="text-sm font-semi text-white ml-4">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
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
      transform: scale(1.25);
    }
  `}
</style>

    </div>
  );
};

export default WebDevelopment;