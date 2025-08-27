import React, { useState, useEffect } from "react";
import icons from "../assets/icons";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Our Companies",
      href: "/companies",
      dropdown: [
        { name: "Glare - Kitchen Essentials", href: "/companies/glare" },
        { name: "Krish - Premium Range", href: "/companies/krish" },
        { name: "Glare Solutions & Trays", href: "/companies/glare-solutions" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href) => {
    navigate(href);
    setActiveDropdown(null); // Close dropdown after navigation
  };

  const handleDropdownItemClick = (href) => {
    handleNavigation(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <icons.FaPhone className="w-4 h-4 mr-2" />
              <span>+91 2827 252512 / 252391</span>
            </div>
            <div className="flex items-center">
              <icons.FaEnvelope className="w-4 h-4 mr-2" />
              <span>sales@glareindia.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/GlareIndia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icons.FaFacebookF className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              </a>
              <icons.FaTwitter className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              <a
                href="https://www.instagram.com/glareindia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icons.FaInstagram className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              </a>
              <icons.FaLinkedinIn className="w-4 h-4 hover:text-red-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => handleNavigation("/")} className="flex items-center">
                <img
                  src={images.logo}
                  alt="Glare Logo"
                  className="h-20 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, idx) => (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 focus:outline-none"
                    aria-haspopup={!!item.dropdown}
                    aria-expanded={activeDropdown === idx}
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === idx ? null : idx);
                      } else {
                        handleNavigation(item.href);
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <icons.FaChevronDown
                        className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === idx && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                          onClick={() => handleDropdownItemClick(subItem.href)}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavigation("/contact")}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <icons.FaTimes className="w-6 h-6" />
              ) : (
                <icons.FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="mt-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        handleNavigation(item.href);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              handleNavigation(subItem.href);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-4">
                  <button
                    onClick={() => {
                      handleNavigation("/contact");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Get Quote
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;