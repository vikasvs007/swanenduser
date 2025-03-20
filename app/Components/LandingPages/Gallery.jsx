import React from "react";

const Gallery = () => {
    return (
        <div className="w-full md:min-h-full bg-gradient-to-r from-gray-50 to-white flex flex-col items-center">
            {/* Heading Section */}
            <div className="w-[90%] md:w-[80%] mt-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 break-words text-wrap balance leading-relaxed">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-sm">
                        Revolutionizing
                    </span> Industries with AI  Stay Updated!
                </h1>
            </div>

            {/* Image Section */}
            <div className="w-[90%] flex justify-center items-center my-10">
                <img 
                    src="/Swan-TechPartners.png" 
                    className="w-full md:w-[80%] max-w-[650px] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" 
                    alt="AI Revolution"
                />
            </div>
        </div>
    );
};

export default Gallery;
