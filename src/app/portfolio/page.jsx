'use client';

import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { animateFadeInUp } from '../(components)/gsapAnimations';

const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Portfolio Items
  const portfolioItems = [
    { type: 'Detailed', imageUrl: 'https://via.placeholder.com/400', label: 'Full Project 2', content: 'This is a detailed project description.' },
    { type: 'YouTube Video', imageUrl: 'https://via.placeholder.com/400', label: 'YouTube Video 2', content: 'YouTube Video content.' },
    { type: 'Image', imageUrl: 'https://via.placeholder.com/400', label: 'Image 2', content: 'This is an image description.' },
    { type: 'YouTube Video', imageUrl: 'https://via.placeholder.com/400', label: 'YouTube Video 1', content: 'YouTube Video content.' },
    { type: 'SoundCloud', imageUrl: 'https://via.placeholder.com/400', label: 'SoundCloud Audio 1', content: 'SoundCloud audio content.' },
    { type: 'Vimeo Video', imageUrl: 'https://via.placeholder.com/400', label: 'Vimeo Video', content: 'Vimeo video content.' },
    { type: 'Image', imageUrl: 'https://via.placeholder.com/400', label: 'Image 1', content: 'This is an image description.' },
    { type: 'Detailed', imageUrl: 'https://via.placeholder.com/400', label: 'Full Project 1', content: 'This is a detailed project description.' },
    { type: 'Direct URL', imageUrl: 'https://via.placeholder.com/400', label: 'Direct URL', content: 'Direct URL content.' },
  ];

  // Filter items based on selected type
  const filteredItems = portfolioItems.filter(
    (item) => selectedFilter === 'All' || item.type === selectedFilter
  );

  // Open Modal with Item Details
  const openModal = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  // Refs for the sections to be animated
  const sectionRef = useRef(null);
  const fadeInUpElements = useRef([]); // Array to hold references to elements

  // Animation effect on component mount
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

  return (
    <div className="min-h-screen text-white" ref={sectionRef}>
      {/* Portfolio Header */}
      <div className="h-48 flex items-center justify-start px-14 border-t border-b border-gray-500" ref={addToRefs}>
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
      </div>

      {/* Filter Options */}
      <div className="mt-8 flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-gray-400 text-base sm:text-lg px-16" ref={addToRefs}>
        {['All', 'Detailed', 'Direct URL', 'Image', 'SoundCloud', 'Video', 'Vimeo Video', 'YouTube Video'].map((filter) => (
          <button
            key={filter}
            className={`mb-2 sm:mb-0 ${selectedFilter === filter ? 'text-white font-semibold' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Items Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-14 py-3" ref={addToRefs}>
        {filteredItems.map((item, index) => (
          <PortfolioItem key={index} item={item} onClick={() => openModal(item)} />
        ))}
      </div>

      {/* Modal for Pop-up Details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        {currentItem && (
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-4">{currentItem.label}</h3>
            <img src={currentItem.imageUrl} alt={currentItem.label} className="w-full h-auto mb-4 rounded" />
            <p className="text-gray-300">{currentItem.content}</p>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

// PortfolioItem component to display each item with an overlay label
const PortfolioItem = ({ item, onClick }) => {
  return (
    <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img src={item.imageUrl} alt={item.label} className="w-full h-64 object-cover" />
      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
        {item.label}
      </div>
    </div>
  );
};

export default PortfolioSection;
