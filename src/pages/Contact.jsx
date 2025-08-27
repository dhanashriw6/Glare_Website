import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Page Title */}

      <section
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We'd love to hear from you. Whether you have a question about
          products, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 px-6 md:px-16">
        {/* Contact Form */}
        <form className="bg-gray-50 p-5 rounded-2xl shadow-lg space-y-6">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 font-semibold text-2xl">
            Contact Form
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name here"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows="3"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Address + Map */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-base leading-relaxed">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">GLARE</h3>
            <p className="mt-4 font-semibold">Address:</p>
            <p>GLARE APPLIANCES PVT. LTD.</p>
            <p>Plot No. 1/C, Survey No. 188/P,</p>
            <p>National Highway 27, Gondal Road,</p>
            <p>Village: Veraval (Shapar)</p>
            <p>Dist: Rajkot - 360 024</p>
            <p>Gujarat - INDIA</p>
            <p className="mt-4 font-semibold">Phone:</p>
            <p>+91 2827 252512 / 252391</p>
            <p className="mt-4 font-semibold">Email:</p>
            <p>sales@glareindia.com</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg py-10 px-6 md:px-16">
        <iframe
          title="Glare Location"
          src="https://www.google.com/maps?q=GLARE+APPLIANCES+PVT+LTD,+Veraval+Shapar,+Gujarat,+India&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

