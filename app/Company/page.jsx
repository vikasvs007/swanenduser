import React from "react";
import { FaLightbulb, FaUserCheck, FaCheckCircle, FaLeaf, FaCamera, FaMicrochip, FaEye, FaBolt, FaCogs, FaSort } from "react-icons/fa";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const Page = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <Navbar />
      
      {/* About Section */}
      <section className="text-gray-800 p-10 text-center">
        <h2 className="text-3xl text-left md:text-center md:text-5xl font-bold mb-4">Innovating the Sorter Industry Since 2014</h2>
        <p className="max-w-3xl text-left md:text-center  mx-auto text-lg">
          At Swan Sorter, we revolutionize the color sorter industry with cutting-edge technology, precision engineering, and a commitment to quality. Our advanced sorting solutions serve agriculture, food processing, and industrial materials.
        </p>
      </section>
      
      {/* Commitment & Values */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-semibold text-blue-700 mb-6">Our Commitment & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Innovation & Excellence", desc: "Pushing technology boundaries for advanced sorting solutions.", icon: <FaLightbulb className='text-yellow-500 text-3xl' /> },
            { title: "Customer-Centric Approach", desc: "Delivering high-quality products for maximum efficiency.", icon: <FaUserCheck className='text-green-500 text-3xl' /> },
            { title: "Precision & Quality", desc: "Adhering to strict quality standards for durability and accuracy.", icon: <FaCheckCircle className='text-blue-500 text-3xl' /> },
            { title: "Sustainability & Responsibility", desc: "Eco-friendly solutions for a sustainable future.", icon: <FaLeaf className='text-green-600 text-3xl' /> },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
              {item.icon}
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mission Section */}
      <section className=" text-gray-900  p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission to Global Excellence</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our goal is to be the global leader in color sorter manufacturing, setting new benchmarks in innovation and technological excellence.
        </p>
      </section>
      
      {/* Key Features */}
      <section className="p-10">
        <h2 className="text-center text-2xl font-semibold text-blue-700 mb-6">Key Features of Swan Swift</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { feature: "RGB CCD Camera Technology", icon: <FaCamera className='text-blue-500 text-3xl' /> },
            { feature: "Proprietary FPGA-Based Image Processing", icon: <FaMicrochip className='text-green-500 text-3xl' /> },
            { feature: "Double-Sided Viewing System", icon: <FaEye className='text-yellow-500 text-3xl' /> },
            { feature: "High-Power LED Illumination", icon: <FaBolt className='text-purple-500 text-3xl' /> },
            { feature: "Smart Ejector Technology", icon: <FaCogs className='text-orange-500 text-3xl' /> },
            { feature: "Simultaneous Sorting Capability", icon: <FaSort className='text-red-500 text-3xl' /> },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
              {item.icon}
              <p className="text-sm text-gray-700 mt-3">{item.feature}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <Footerpage />
    </div>
  );
};

export default Page;