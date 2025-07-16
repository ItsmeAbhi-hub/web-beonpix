import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import ContactForm from "./src/components/Home/ContactForm";
import MobileDev from "./src/pages/Mobiledev/Mobiledevelopment";
import WebDev from "./src/pages/Webdev/Webdevelopment";
import Uiux from "./src/pages/Uiux/Uiuxdesign";
import Graphic from "./src/pages/Webdesign/Webdesign";
import Brand from "./src/pages/Branding/Branding";
import Academy from "./src/pages/Academic/Academic";

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const cursorInner = document.createElement("div");
    cursorInner.classList.add("custom-cursor-inner");
    document.body.appendChild(cursorInner);

    const particles = [];
    const maxParticles = 5;

    // Create particles
    for (let i = 0; i < maxParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("custom-cursor-particle");
      document.body.appendChild(particle);
      particles.push({ element: particle, x: 0, y: 0, time: 0 });
    }

    let lastX = 0;
    let lastY = 0;
    let lastUpdate = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      const now = Date.now();
      const deltaTime = now - lastUpdate;

      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
      cursorInner.style.left = `${e.clientX}px`;

      // Update particles with trailing effect
      if (deltaTime > 20) {
        particles.forEach((particle, index) => {
          const delay = index * 50;
          setTimeout(() => {
            particle.element.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            particle.element.style.opacity = 0.5;
            setTimeout(() => {
              particle.element.style.opacity = 0;
            }, 300);
            particle.x = e.clientX;
            particle.y = e.clientY;
          }, delay);
        });
        lastUpdate = now;
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    // Hover effect on interactive elements
    const bindHoverEvents = () => {
      const interactiveElements = document.querySelectorAll("a, button, input, select, textarea");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    const addHover = () => {
      cursor.classList.add("cursor-hover");
      cursorInner.classList.add("cursor-hover");
    };

    const removeHover = () => {
      cursor.classList.remove("cursor-hover");
      cursorInner.classList.remove("cursor-hover");
    };

    bindHoverEvents();

    // Click animation
    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
      cursorInner.classList.add("cursor-click");
      setTimeout(() => {
        cursor.classList.remove("cursor-click");
        cursorInner.classList.remove("cursor-click");
      }, 200);
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => {
      cursor.style.display = "none";
      cursorInner.style.display = "none";
      particles.forEach((particle) => {
        particle.element.style.display = "none";
      });
    };

    const handleMouseEnterWindow = () => {
      cursor.style.display = "block";
      cursorInner.style.display = "block";
      particles.forEach((particle) => {
        particle.element.style.display = "block";
      });
    };

    // Watch DOM changes and re-apply hover events
    const observer = new MutationObserver(() => {
      bindHoverEvents();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      observer.disconnect();
      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
      particles.forEach((particle) => document.body.removeChild(particle.element));
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/mobile-development" element={<MobileDev />} />
        <Route path="/solutions/web-development" element={<WebDev />} />
        <Route path="/solutions/ui/ux-design" element={<Uiux />} />
        <Route path="/solutions/graphic-design" element={<Graphic />} />
        <Route path="/solutions/branding" element={<Brand />} />
        <Route path="/solutions/academic-projects" element={<Academy />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;