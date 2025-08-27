import React from "react";
import images from "../assets/images";
import icons from "../assets/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Companies", href: "/companies" },

    { name: "Gallery", href: "/gallery" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  // const productCategories = [
  //   { name: "Kitchen Knives", href: "/products/knives" },
  //   { name: "Scissors & Cutters", href: "/products/scissors" },
  //   { name: "Lighters & Utility", href: "/products/lighters" },
  //   { name: "Kitchen Trays", href: "/products/trays" },
  //   { name: "Kitchen Accessories", href: "/products/accessories" },
  //   { name: "All Products", href: "/products" },
  // ];

  const companies = [
    { name: "Glare Kitchen Essentials", href: "/companies/glare" },
    { name: "Krish Premium Range", href: "/companies/krish" },
    { name: "Glare Solutions & Trays", href: "/companies/glare-solutions" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div>
              <a href="/" className="flex items-center">
                {" "}
                <img
                  src={images.logo}
                  alt="Glare Logo"
                  className="h-20 w-auto"
                />
              </a>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for premium kitchen appliances. Three
                decades of excellence in manufacturing quality products that
                make cooking a pleasure.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start text-gray-300">
                <icons.FaMapMarkerAlt className="w-19 h-5 mr-3 text-red-500" />
                <span>
                  Plot No. 1/C, Survey No. 188/P, National Highway 27, Gondal
                  Road, Village : Veraval (Shapar) Dist. : Rajkot - 360 024
                  Gujarat - INDIA
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <icons.FaPhone className="w-5 h-5 mr-3 text-red-500" />
                <span>+91 2827 252512 / 252391</span>
              </div>
              <div className="flex items-center text-gray-300">
                <icons.FaEnvelope className="w-5 h-5 mr-3 text-red-500" />
                <span>info@glareindia.com</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors duration-200">
                  <icons.FaFacebookF className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors duration-200">
                  <icons.FaTwitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors duration-200">
                  <icons.FaInstagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors duration-200">
                  <icons.FaLinkedinIn className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors duration-200">
                  <icons.FaYoutube className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Our Companies</h3>
            <ul className="space-y-3 mb-6">
              {companies.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get the latest updates about our products and company news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Glare Appliances Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              Powered by <span className="text-red-400">DW</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
