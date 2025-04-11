import React from "react";
import Image from "next/image";
import Navbar from "@/app/Components/NavbarLinks/Navbar";
import Footerpage from "@/app/Components/LandingPages/Footerpage";

const BlogDetailPage = async (props) => {
  const params = await props.params; // ✅ await the params
  const { id } = params;

  let blog;
  try {
    const response = await fetch(
      `https://swanbackend.onrender.com/api/blogs/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    blog = data.blog;
  } catch (error) {
    return (
      <div className="text-center text-red-600 py-20 px-4">
        Failed to fetch blog. Please try again later.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-white py-8 px-4 md:px-8">
        {/* Heading Section */}
        {/* Enhanced Heading Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Discover Our Blogs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 tracking-wide">
            Insights, ideas, and innovations from the heart of our team
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
          {/* Blog Image */}
          <div className="w-full h-68 md:h-80 relative">
            <Image
              src={
                blog.featured_image?.startsWith("data:image")
                  ? blog.featured_image
                  : "/img1.jpeg"
              }
              alt={blog.title}
              fill
              priority
              className="object-contain w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Blog Content */}
          <div className="p-5 sm:p-8">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mb-6 italic border-l-4 border-blue-500 pl-3">
              Published on {new Date(blog.published_date).toLocaleDateString()}
            </p>

            <div
              className="prose prose-sm sm:prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html: blog.content || "<p>No content provided.</p>",
              }}
            />
          </div>
        </div>
      </main>

      <Footerpage />
    </div>
  );
};

export default BlogDetailPage;
