import { useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactForm from "./components/Home/ContactForm";
import MobileDev from "./pages/Mobiledev/Mobiledevelopment";
import WebDev from "./pages/Webdev/Webdevelopment";
import Uiux from "./pages/Uiux/Uiuxdesign";
import Graphic from "./pages/Webdesign/Webdesign";
import Brand from "./pages/Branding/Branding";
import Academy from "./pages/Academic/Academic";

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
      setTimeout(() => cursor.classList.remove("cursor-click"), 200);
    };

    const addHover = () => cursor.classList.add("cursor-hover");
    const removeHover = () => cursor.classList.remove("cursor-hover");

    const bindHoverEvents = () => {
      document.querySelectorAll("a, button, input, select, textarea").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    bindHoverEvents();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
