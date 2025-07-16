import React from "react";

const UiuxComp = () => {
  const tools = [
    { name: "Figma", src: "/src/assets/images/figma.png" },
    { name: "Adobe Xd", src: "/src/assets/images/adobe.png" },
    { name: "Sketch", src: "/src/assets/images/sketch.png" },
    { name: "Core|Draw", src: "/src/assets/images/core.png" },

    { name: "Adobe Photoshop", src: "/src/assets/images/photoshop.png" },
    { name: "Adobe Illustrator", src: "/src/assets/images/illustrator.png" },
    { name: "Canva", src: "/src/assets/images/canva.png" },
  ];

  return (
    <div className="container mx-auto p-5 text-white font-poppins">
      {/* Main Heading */}
      <h1 className="text-4xl font-semibold text-left mt-28 mb-28">
        "Strategic Graphic Design for Powerful Brand Identity"
      </h1>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <img
          src="/src/assets/images/graphic1.png"
          alt="Design Process"
          className="w-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Graphic Design
          </h2>
          <p className="text-lg text-gray-300">
            We create visually captivating and strategically crafted graphic
            designs that leave a lasting impression. Our approach blends
            creativity, innovation, and brand storytelling to build a strong
            visual identity that resonates with your audience. From logo design
            and brand identity development to marketing materials and digital
            assets, we ensure that every design element reflects your brand’s
            personality and values. Whether it's business cards, brochures,
            social media graphics, website visuals, or advertising creatives,
            our designs are crafted to maximize engagement and brand
            recognition. By leveraging the latest design trends, color
            psychology, and typography principles, we create designs that are
            not only aesthetically appealing but also highly functional and
            impactful. In today’s competitive digital landscape, we focus on
            delivering visually cohesive, professional, and market-driven
            designs that set your brand apart.
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
              Logo Design & Branding – Crafting unique logos and brand
              identities.
            </li>
            <li>
              Marketing Collateral – Brochures, flyers, business cards, and
              posters.
            </li>
            <li>
              Social Media Graphics – Engaging designs for posts, ads, and
              banners.
            </li>
            <li>Infographics – Visually appealing data representation.</li>
            <li>
              Custom Illustrations – Unique artwork for digital and print media.
            </li>
            <li>
              Packaging Design – Creative and attractive packaging solutions.
            </li>
            <li>Website & App Graphics – UI elements, icons, and banners.</li>
            <li>
              Print Design – Magazines, book covers, and corporate reports.
            </li>
            <li>
              Advertising Creatives – Eye-catching ads for digital and print
              media.
            </li>
            <li>
              Motion Graphics – Animated visuals for marketing and branding.
            </li>
          </ul>
        </div>
        <img
          src="/src/assets/images/graphic2.png"
          alt="Our Services Illustration"
          className="w-[500px] rounded-xl"
        />
      </div>

      {/* Design Tools Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-20">
        <img
          src="/src/assets/images/graphic3.png"
          alt="Design Tools"
          className="w-[500px] h-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Graphic Design Tools
          </h3>
          <ul className="list-disc pl-5 text-lg text-gray-300 space-y-2">
            <li>
              <strong>Adobe Illustrator</strong> – For logo design and branding.
            </li>
            <li>
              <strong>Adobe Photoshop</strong> – For marketing collateral and
              social media graphics.
            </li>
            <li>
              <strong>Canva</strong> – For quick and easy social media graphics
              and marketing materials.
            </li>
            <li>
              <strong>CorelDRAW</strong> – For brochures, business cards, and
              vector illustrations.
            </li>
            <li>
              <strong>Adobe InDesign</strong> – For print design, magazines, and
              corporate reports.
            </li>
            <li>
              <strong>Figma</strong> – For website and app graphics, UI
              elements, and banners.
            </li>
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
                <span className="text-sm font-medium text-white">
                  {tool.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UiuxComp;
