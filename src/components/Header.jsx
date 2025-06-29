import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import logo from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Our Companies', href: '/companies', dropdown: [
        { name: 'Glare - Kitchen Essentials', href: '/companies/glare' },
        { name: 'Krish - Premium Range', href: '/companies/krish' },
        { name: 'Glare Solutions & Trays', href: '/companies/glare-solutions' }
      ]
    },
    {
      name: 'Products', href: '/products', dropdown: [
        { name: 'Kitchen Knives', href: '/products/knives' },
        { name: 'Scissors & Cutters', href: '/products/scissors' },
        { name: 'Lighters & Utility', href: '/products/lighters' },
        { name: 'Kitchen Trays', href: '/products/trays' },
        { name: 'All Products', href: '/products' }
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Quality', href: '/quality' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <FaPhone className="w-4 h-4 mr-2" />
              <span>+91 7878778778</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-4 h-4 mr-2" />
              <span>info@glareindia.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <FaFacebookF className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              <FaTwitter className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              <FaInstagram className="w-4 h-4 hover:text-red-200 cursor-pointer" />
              <FaLinkedinIn className="w-4 h-4 hover:text-red-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Glare Logo" className="h-20 w-auto" />
                    
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </a>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="mt-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-4">
                  <a
                    href="/contact"
                    className="block w-full text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </a>
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
