import React from "react";

const Brand = () => {
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
      <h1 className="text-5xl w-[1000px] font-semibold text-left mt-28 mb-28">
      "Building Memorable Brands with Strategy & Design"      </h1>

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <img
          src="/src/assets/images/brand1.png"
          alt="Design Process"
          className="w-[500px] rounded-xl"
        />
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Branding</h2>
          <p className="text-lg text-gray-300">
            We build powerful, distinctive, and memorable brand identities that
            not only capture attention but also create meaningful connections
            with audiences, fostering trust and loyalty while driving long-term
            business success. Our comprehensive branding solutions seamlessly
            blend strategic thinking, compelling storytelling, and visually
            striking design to establish a strong, cohesive, and recognizable
            brand presence across all touchpoints. From thoughtfully crafted
            logo designs and persuasive brand messaging to fully integrated
            identity systems, we ensure that every element of your brand
            reflects consistency, authenticity, and a lasting impact in an
            ever-evolving and highly competitive marketplace.
          </p>
        </div>
      </div>

      {/* Our Services Section WITH Right-Side Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-16">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Services
          </h2>
          <ul className="list-disc pl-5 text-md text-gray-300 space-y-2">
            <li>
              Logo Design & Branding – Crafting unique logos and comprehensive
              brand identities.
            </li>
            <li>
              Brand Strategy & Positioning – Defining mission, vision, and
              market positioning for a strong identity.
            </li>
            <li>
              Brand Messaging & Voice – Developing consistent and compelling
              brand communication.
            </li>
            <li>
              Visual Identity Design – Creating cohesive color palettes,
              typography, and design elements.
            </li>
            <li>
              Brand Guidelines – Establishing clear rules for consistent
              branding across all platforms.
            </li>
            <li>
              Marketing Collateral – Designing brochures, business cards,
              presentations, and posters.
            </li>
            <li>
              Social Media Branding – Engaging and visually consistent assets
              for digital platforms.
            </li>
            <li>
              Packaging Design – Creative packaging solutions that enhance
              product appeal.
            </li>
            <li>
              Corporate & Print Design – Magazines, book covers, reports, and
              business stationery.
            </li>
            <li>
              Rebranding & Brand Refresh – Updating brand identity to stay
              modern and relevant.
            </li>
          </ul>
        </div>
        <img
          src="/src/assets/images/brand2.png"
          alt="Our Services Illustration"
          className="w-[500px] rounded-xl"
        />
      </div>

      {/* Design Tools Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 mb-20">
        <img
          src="/src/assets/images/brand3.png"
          alt="Design Tools"
          className="w-[500px] h-[500px] rounded-xl"
        />
        <div className="max-w-[600px] text-sm">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Design & Creativity
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Adobe Illustrator</strong> – Logo design, vector
                graphics, and branding assets.
              </li>
              <li>
                <strong>Adobe Photoshop</strong> – Image editing, mockups, and
                digital branding materials.
              </li>
              <li>
                <strong>Adobe InDesign</strong> – Brochure, business card, and
                marketing collateral design.
              </li>
              <li>
                <strong>Canva</strong> – Quick, high-quality branding templates
                and social media graphics.
              </li>
              <li>
                <strong>Figma</strong> – UI/UX design, wireframing, and
                interactive prototyping.
              </li>
            </ul>
          </div>

          {/* Brand Strategy & Management */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Brand Strategy & Management
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Notion</strong> – Brand strategy planning, guidelines,
                and documentation.
              </li>
              <li>
                <strong>Miro</strong> – Brainstorming and visual collaboration
                for brand positioning.
              </li>
              <li>
                <strong>Trello</strong> – Organizing branding projects and
                workflow management.
              </li>
              <li>
                <strong>Google Workspace</strong> – Documenting brand assets,
                messaging, and communication.
              </li>
            </ul>
          </div>

          {/* Social Media & Marketing */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Social Media & Marketing
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Meta Business Suite</strong> – Managing brand presence
                on Facebook and Instagram.
              </li>
              <li>
                <strong>Hootsuite / Buffer</strong> – Social media scheduling
                and branding consistency.
              </li>
              <li>
                <strong>Google Analytics</strong> – Tracking brand performance
                and audience engagement.
              </li>
              <li>
                <strong>SEMrush / Ahrefs</strong> – Brand visibility, SEO
                optimization, and competitor analysis.
              </li>
            </ul>
          </div>

          {/* Packaging & Mockups */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Packaging & Mockups
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Adobe Dimension</strong> – 3D mockups for packaging and
                product visualization.
              </li>
              <li>
                <strong>MockupWorld / Smartmockups</strong> – Realistic mockups
                for branding presentation.
              </li>
            </ul>
          </div>
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

export default Brand;
