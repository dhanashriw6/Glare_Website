import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="bg-white text-gray-800">
     {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Glare Appliances
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Where innovation meets craftsmanship in every blade and kitchen tool.
        </p>
      </motion.section>

{/* Company Overview */}
      <section
        className="py-20 px-6 md:px-16 bg-gray-50"
       
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GLARE APPLIANCES PRIVATE LIMITED is one of India’s leading
              manufacturers of kitchen knives, professional knife series,
              kitchen cutlery, dining cutlery, and kitchen gadgets — all built
              to international standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our brand is backed by decades of experience in the industry,
              handling everything from original designs to final manufacturing
              in-house. This has helped us establish a strong reputation across
              India.
            </p>
          </div>
          <div>
            <img
              src={images.aboutus}
              alt="Glare Appliances"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={images.glare1}
              alt="Soft Grip Innovation"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Innovation That Sets Us Apart
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We pioneered the use of “Soft & Sensational Grip with Flexible
              Fins” in India, using imported food-grade thermoplastic rubber.
              This grip innovation remains unmatched in comfort and control.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our knives also feature a cutting-edge taper grinding technique on
              Mertensitic Surgical Stainless Steel blades — ensuring smooth,
              fast cutting for professional and home chefs alike.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We use only top-quality indigenous and imported materials such as
            thermoplastics, food-grade polypropylene, and surgical-grade
            stainless steel. Our R&D and quality control team ensures every
            product delivers exceptional utility, safety, and comfort.
          </p>
          <p className="text-gray-700 text-lg">
            At Glare, quality isn’t just a feature — it’s our identity. Because
            <span className="text-red-600 font-semibold">
              {" "}
              Glare differs in quality.
            </span>
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Experience the Glare Difference
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Join thousands of satisfied customers and explore our world-class
          range of kitchen appliances.
        </p>
        <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
