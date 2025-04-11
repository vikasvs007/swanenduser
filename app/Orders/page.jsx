"use client"

import React from 'react'
import Navbar from '../Components/NavbarLinks/Navbar'
import Footerpage from '../Components/LandingPages/Footerpage'
import ChatBot from '../Components/ChatBot/ChatBot'

const page = () => {
  return (
    <div>{/* Order / Inquiry Section */}
    <Navbar/>
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 text-center mb-4">
          <span className="text-2xl md:text-4xl bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-1 rounded-2xl">Place an Order or Enquiry</span>
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-10">
          Let us know your requirements, and we’ll get back to you as soon as possible.
        </p>
    
        <form className="bg-gray-50 p-6 rounded-3xl shadow-md space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
    
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us more about your requirements..."
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
    
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-full shadow hover:shadow-lg transition"
          >
            Submit enquiry
          </button>
        </form>
      </div>
    </section>
    <ChatBot/>
    <Footerpage/>
    </div>
  )
}

export default page