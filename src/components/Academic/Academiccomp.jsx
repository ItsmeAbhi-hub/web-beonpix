import React from "react";

const UiuxComp = () => {
  const tools = [
    { name: "Figma", src: "/src/assets/images/figma.png" },
    { name: "Adobe Xd", src: "/src/assets/images/adobe.png" },
    { name: "Sketch", src: "/src/assets/images/sketch.png" },
    { name: "Adobe Photoshop", src: "/src/assets/images/photoshop.png" },
    { name: "Adobe Illustrator", src: "/src/assets/images/illustrator.png" },
    { name: "Canva", src: "/src/assets/images/canva.png" },
  ];

  return (
    <div className="container mx-auto p-5 text-white font-poppins">
      {/* Main Heading */}
      <h1 className="text-5xl font-semibold text-left w-[1000px] mt-28 mb-28">
        "Expert Academic Project Development for Excellence"{" "}
      </h1>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <img
          src="/src/assets/images/academy1.png"
          alt="Design Process"
          className="w-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Academic Projects
          </h2>
          <p className="text-md text-gray-300">
            We provide expert guidance and development for academic projects,
            delivering high-quality research, innovative solutions, and
            structured methodologies. Our services cater to students and
            professionals, ensuring well-researched, technically sound, and
            industry-relevant projects. With a focus on clarity, originality,
            and academic excellence, we help bring ideas to life while
            maintaining precision and professionalism.{" "}
          </p>
        </div>
      </div>

      {/* Our Services Section WITH Right-Side Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Services
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-300 space-y-2">
            <li>
              Project research & Development – In-depth analysis and
              implementation of innovative concepts.
            </li>
            <li>
              Technical & Software-Based Projects – IT,Web,App,Ai and software
              development projects.
            </li>
            <li>
              Presentation & Documentation – Clear,concise and professional
              project presentations.
            </li>
          </ul>
        </div>
        <img
          src="/src/assets/images/academy2.png"
          alt="Our Services Illustration"
          className="w-[500px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default UiuxComp;
