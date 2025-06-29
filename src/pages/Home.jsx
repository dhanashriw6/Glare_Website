import React, { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaStar,
  FaAward,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaTruck,
  FaHeadphones,
} from "react-icons/fa";
import banner from "../assets/banner1.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      title: "Precision Crafted Kitchen Excellence",
      subtitle:
        "Discover premium kitchen appliances that blend tradition with innovation",
      image: banner,
      cta: "Explore Collection",
    },
    {
      title: "Sharp Performance, Every Time",
      subtitle:
        "Professional-grade knives and cutting tools for culinary perfection",
      image: banner,
      cta: "View Products",
    },
    {
      title: "Innovation Meets Tradition",
      subtitle:
        "Three decades of excellence in kitchen appliance manufacturing",
      image: banner,
      cta: "Our Story",
    },
  ];

  const companies = [
    {
      name: "GLARE",
      tagline: "Your Companion Forever",
      description:
        "Premium knives, kitchen gadgets and cutlery for professional cooking",
      color: "from-red-500 to-red-600",
      accentColor: "red",
      image: c1,
      products: [
        "Kitchen Knives",
        "Cutting Tools",
        "Kitchen Gadgets",
        "Cutlery Sets",
      ],
    },
    {
      name: "KRISH",
      tagline: "Your Companion Forever",
      description:
        "Gas lighters, precision scissors and premium strainers for every kitchen",
      color: "from-blue-500 to-blue-600",
      accentColor: "blue",
      image: c2,
      products: [
        "Gas Lighters",
        "Kitchen Scissors",
        "Strainers",
        "Utility Tools",
      ],
    },
    {
      name: "GLARE",
      tagline: "100% Melamine Tableware & Trays",
      description:
        "Elegant melamine dinnerware and serving solutions for modern dining",
      color: "from-green-500 to-green-600",
      accentColor: "green",
      image: c3,
      products: [
        "Melamine Plates",
        "Serving Trays",
        "Dinnerware Sets",
        "Kitchen Bowls",
      ],
    },
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: FaAward },
    { number: "1M+", label: "Happy Customers", icon: FaUsers },
    { number: "50+", label: "Countries Served", icon: FaGlobe },
    { number: "500+", label: "Product Range", icon: FaStar },
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting durability",
    },
    {
      icon: FaTruck,
      title: "Fast Delivery",
      description: "Quick and secure shipping to your doorstep",
    },
    {
      icon: FaHeadphones,
      title: "24/7 Support",
      description: "Expert customer service whenever you need it",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              {heroSlides[currentSlide].cta}
              <FaArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="py-20 bg-gradient-to-r from-red-50 to-orange-50 mt-4"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      {/* Our Companies Section - Innovative Design */}
      <section
        id="companies"
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Companies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinctive brands, each specialized in their craft, united
              by our commitment to kitchen excellence
            </p>
          </div>

          {/* Companies Grid - New Layout */}
          <div className="space-y-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`${
                  isVisible.companies
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                } transition-all duration-700 delay-${index * 200}`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-video overflow-hidden flex items-center justify-center">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="w-auto h-[90%] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    {/* Company Header */}
                    <div>
                     
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {company.tagline}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {company.description}
                      </p>
                    </div>

                    {/* Product Categories */}
                    {/* <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Product Categories:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {company.products.map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className={`group bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-${company.accentColor}-200`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`w-3 h-3 bg-gradient-to-r ${company.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                              ></div>
                              <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors duration-300">
                                {product}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        className={`w-1/2 bg-gradient-to-r ${company.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group`}
                      >
                        <span>View Products</span>
                        <FaArrowRight className="inline ml-2 w-5 h-5" />{" "}
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to explore our complete range?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover thousands of premium kitchen products across all our
                brands
              </p>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Glare?
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in every detail, trust in every product
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform ${
                  isVisible.features
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover our complete range of premium kitchen appliances and start
            your culinary journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View Our Products
              <FaArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              <FaPlay className="inline mr-2 w-5 h-5" />
              Watch Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
