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
      <h1 className="text-5xl font-semibold text-left mt-28 mb-28">
        "User-Centric UI/UX Design for Engaging Digital Experiences"
      </h1>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <img
          src="/src/assets/images/ui1.png"
          alt="Design Process"
          className="w-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">UI/UX Design</h2>
          <p className="text-lg text-gray-300">
            We specialize in creating intuitive, user-centric designs that enhance digital experiences and drive engagement. Our UI/UX design solutions go beyond aesthetics, focusing on usability, accessibility, and seamless interaction to elevate brand experiences. By leveraging the latest design trends, user psychology principles, and cutting-edge prototyping tools, we develop designs that are not only visually stunning but also highly intuitive and efficient.
          </p>
        </div>
      </div>

      {/* Our Services Section WITH Right-Side Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Services</h2>
          <ul className="list-disc pl-5 text-lg text-gray-300 space-y-2">
            <li>User Interface (UI) Design – Visually appealing and functional interface design.</li>
            <li>User Experience (UX) Design – Creating seamless and intuitive user journeys.</li>
            <li>Wireframing & Prototyping – Low/high-fidelity wireframes and interactive prototypes.</li>
            <li>Mobile & Web Design – Optimized designs across platforms and screen sizes.</li>
            <li>User Research & Testing – Enhancing user behavior through feedback and testing.</li>
            <li>Accessibility Design – Inclusive solutions for all users including those with disabilities.</li>
            <li>Design Systems – Consistent design language for brand recognition and scalability.</li>
          </ul>
        </div>
        <img
          src="/src/assets/images/ui2.png"
          alt="Our Services Illustration"
          className="w-[500px] rounded-xl"
        />
      </div>

      {/* Design Tools Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-20">
        <img
          src="/src/assets/images/ui3.png"
          alt="Design Tools"
          className="w-[500px] h-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">UI/UX Design Tools</h3>
          <ul className="list-disc pl-5 text-lg text-gray-300 space-y-2">
            <li><strong>Figma</strong> – Collaborative design and prototyping tool.</li>
            <li><strong>Adobe XD</strong> – Vector-based design and interactive prototyping.</li>
            <li><strong>Sketch</strong> – Popular UI/UX design tool for macOS.</li>
            <li><strong>Adobe Illustrator</strong> – Vector-based logo and icon design.</li>
            <li><strong>Photoshop</strong> – Visual design, editing, and mockup creation.</li>
            <li><strong>Canva</strong> – Easy-to-use tool for creative design tasks.</li>
          </ul>
        </div>
      </div>

      {/* Tools We Use Section */}
      <div className="w-full px-6 py-14  rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-white mb-10">
          Tools We Use
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-item flex gap-2 items-center transition-transform transform hover:scale-110 duration-300"
            >
              <img
                src={tool.src}
                alt={tool.name || "tool"}
                className="h-7 w-18 object-contain mb-2"
              />
              {tool.name && (
                <span className="text-sm font-medium text-white">{tool.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UiuxComp;
