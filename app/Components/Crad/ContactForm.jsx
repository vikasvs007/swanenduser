export default function ContactForm() {
    return (
      <div className=" min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white border border-gray-300 rounded-xl p-8">
          <h2 className="text-center text-4xl font-bold">
            <span className="">Contact Us</span>
          </h2>
          <p className="text-center text-lg text-gray-600 mt-2">
            Are you interested in this product? Let us know!
          </p>
  
          <form className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                />
              </div>
  
              {/* Company */}
              <div>
                <label className="block text-gray-700 font-semibold">Company</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                />
              </div>
  
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                />
              </div>
  
              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                />
              </div>
            </div>
  
            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-8 py-3 rounded-md  transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  