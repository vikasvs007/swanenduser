import React from "react";
import {
  FaLightbulb,
  FaUserCheck,
  FaCheckCircle,
  FaLeaf,
  FaCamera,
  FaMicrochip,
  FaEye,
  FaBolt,
  FaCogs,
  FaSort,
  FaGlobe,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

const OurClients = () => {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#364153] mb-6">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            name: "Rakesh P.",
            feedback:
              "Swan Sorter helped increase our grain sorting speed by 40%. Outstanding quality!",
          },
          {
            name: "Nguyen T.",
            feedback:
              "We’ve been using Swan sorters for over 3 years – precision and durability are unmatched.",
          },
        ].map((testi, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl shadow-md border border-blue-100"
          >
            <FaHandshake className="text-3xl text-green-500 mx-auto mb-2" />
            <p className="text-gray-600 italic mb-2">"{testi.feedback}"</p>
            <p className="font-semibold text-gray-800">— {testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
