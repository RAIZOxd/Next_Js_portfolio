"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { animateFadeInUp } from "../(components)/gsapAnimations";

const BlogSection = () => {
  // State to manage modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Refs for the sections to be animated
  const sectionRef = useRef(null);
  const fadeInUpElements = useRef([]); // Array to hold references to elements

  useEffect(() => {
    if (fadeInUpElements.current.length > 0 && sectionRef.current) {
      animateFadeInUp(fadeInUpElements.current, sectionRef.current); // Call the animation function
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeInUpElements.current.includes(el)) {
      fadeInUpElements.current.push(el); // Add element to refs array
    }
  };

  const openModal = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white" ref={sectionRef}>
      {/* Blog Header */}
      <div
        className="h-48 flex items-center justify-start px-14 border-t border-b border-gray-500 bg-[#252525]"
        ref={addToRefs}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-14 h-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Blog</h1>
        </div>
      </div>

      {/* Blog Content Grid */}
      <div
        className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-14 py-3"
        ref={addToRefs}
      >
        {/* Sample Blog Posts */}
        {[
          {
            category: "WordPress",
            date: "04 Dec 2019",
            title: "How to Make a WordPress Plugin Extensible",
            imageUrl: "https://via.placeholder.com/600x400",
            content: "Learn how to make WordPress plugins extensible to improve scalability and maintainability.",
          },
          {
            category: "Design",
            date: "04 Dec 2019",
            title: "6 Easy Steps to Better Icon Design",
            imageUrl: "https://via.placeholder.com/600x400",
            content: "Follow these 6 steps to create beautiful, functional icons for your design projects.",
          },
          {
            category: "UI",
            date: "04 Dec 2019",
            title: "Understanding UI Principles for Better Design",
            imageUrl: "https://via.placeholder.com/600x400",
            content: "A deep dive into UI principles to help designers create intuitive user interfaces.",
          },
          {
            category: "Design",
            date: "04 Dec 2019",
            title: "Tips for Designing Responsive Layouts",
            imageUrl: "https://via.placeholder.com/600x400",
            content: "Master the art of creating responsive layouts with these practical tips.",
          },
        ].map((blog, index) => (
          <BlogPost
            key={index}
            category={blog.category}
            date={blog.date}
            title={blog.title}
            imageUrl={blog.imageUrl}
            onClick={() => openModal(blog)}
          />
        ))}
      </div>

      {/* Modal for Blog Details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        {currentBlog && (
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">{currentBlog.title}</h2>
            <img
              src={currentBlog.imageUrl}
              alt={currentBlog.title}
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-gray-300">{currentBlog.content}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

// BlogPost component to display each blog item
const BlogPost = ({ category, date, title, imageUrl, onClick }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-gray-400 text-sm mb-1">{date}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default BlogSection;
