//PortfolioSection

const PortfolioSection = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Portfolio Header */}
      <div className="h-48 flex items-center justify-start px-14 border-t border-b border-gray-500">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
      </div>

{/* Filter Options */}
<div className="mt-8 flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-gray-400 text-base sm:text-lg">
  <button className="text-white font-semibold mb-2 sm:mb-0">All</button>
  <button className="mb-2 sm:mb-0">Detailed</button>
  <button className="mb-2 sm:mb-0">Direct URL</button>
  <button className="mb-2 sm:mb-0">Image</button>
  <button className="mb-2 sm:mb-0">SoundCloud</button>
  <button className="mb-2 sm:mb-0">Video</button>
  <button className="mb-2 sm:mb-0">Vimeo Video</button>
  <button className="mb-2 sm:mb-0">YouTube Video</button>
</div>


      {/* Portfolio Items Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-14">
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Full Project 2"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="YouTube Video 2"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Image 2"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="YouTube Video 1"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="SoundCloud Audio 1"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Vimeo Video"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Image 1"
        />
        <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Full Project 1"
        />
         <PortfolioItem
          imageUrl="https://via.placeholder.com/400"
          label="Direct URL"
        />
      </div>
    </div>
  );
};

// PortfolioItem component to display each item with an overlay label
const PortfolioItem = ({ imageUrl, label }) => {
  return (
    <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={label} className="w-full h-64 object-cover" />
      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
        {label}
      </div>
    </div>
  );
};

export default PortfolioSection;

