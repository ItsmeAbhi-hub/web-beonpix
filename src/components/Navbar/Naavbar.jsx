
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions", hasDropdown: true },
  ];

  const dropdownItems = [
    "Mobile Development",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Branding",
    "Academic Projects",
  ];

  useEffect(() => {
    // Check if the current path matches any nav item's href or starts with /solutions
    const currentNavItem = navItems.find(
      (item) => item.href === location.pathname
    );
    if (currentNavItem) {
      setActive(currentNavItem.label);
    } else if (location.pathname.startsWith("/solutions")) {
      setActive("Solutions");
    }
  }, [location.pathname]);

  // Show navbar after 1 second (unchanged)
  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!showNavbar) return null; // Hide navbar before 1 second

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="font-poppins bg-black/10 backdrop-blur-[2px] w-full flex justify-between items-center px-8 py-6 fixed top-0 left-0 z-50"
    >
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex items-center"
      >
        <motion.img
          src={logo}
          alt="Beonpix Logo"
          className="h-[40px] w-auto"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center gap-8 relative">
        {navItems.map((item) => (
          <div key={item.label} className="relative">
            {item.hasDropdown ? (
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`group relative text-sm font-extralight transition flex items-center cursor-pointer ${
                  active === item.label
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item.label}
                <ChevronDown size={16} className="ml-1" />

                {/* Dot for active state */}
                {active === item.label && (
                  <span className="absolute -top-0.5 -right-1.5 border border-yellow-300 rounded-full transition-all duration-300 p-[2px]" />
                )}
                {/* Dot for hover state */}
                <span className="absolute -top-0.5 -right-1.5 border border-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 p-[2px]" />
                {/* Underline for hover and active states */}
                <span
                  className={`absolute left-0 bottom-[-2px] h-0.5 bg-[#b8860b] transition-all duration-300 ${
                    active === item.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            ) : (
              <Link
                to={item.href}
                onClick={() => setActive(item.label)}
                className={`group relative text-sm font-extralight transition flex items-center ${
                  active === item.label
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item.label}

                {/* Dot for active state */}
                {active === item.label && (
                  <span className="absolute -top-0.5 -right-1.5 border border-yellow-300 rounded-full transition-all duration-300 p-[2px]" />
                )}
                {/* Dot for hover state */}
                <span className="absolute -top-0.5 -right-1.5 border border-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 p-[2px]" />
                {/* Underline for hover and active states */}
                <span
                  className={`absolute left-0 bottom-[-2px] h-0.5 bg-[#b8860b] transition-all duration-300 ${
                    active === item.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )}

            {item.hasDropdown && isDropdownOpen && (
              <div className="absolute w-[220px] top-full left-0 mt-5 bg-gray-950 border border-gray-800 rounded-xl shadow-lg z-50">
                <ul className="py-2">
                  {dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem}>
                      <Link
                        to={`/solutions/${dropdownItem
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-white hover:bg-gray-800"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setActive("Solutions"); // Explicitly set Solutions as active
                        }}
                      >
                        {dropdownItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="relative border bg-yellow-500 text-white text-sm font-semibold rounded-full px-4 py-2.5 overflow-hidden group"
        >
          <span className="relative z-10 flex items-center">
            Contact Us <span className="ml-1">→</span>
          </span>
          <span className="absolute inset-0 bg-gray-800 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out origin-left" />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
