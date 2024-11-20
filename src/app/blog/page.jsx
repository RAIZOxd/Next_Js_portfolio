//BlogSection

const BlogSection = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Blog Header */}
      <div className="h-48 flex items-center justify-start px-14 border-t border-b border-gray-500">
        <h2 className="text-4xl font-bold text-white">Blog</h2>
      </div>

      {/* Blog Content Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-14 py-3">
        {/* Sample Blog Post */}
        <BlogPost
          category="WordPress"
          date="04 Dec 2019"
          title="How to Make a WordPress Plugin Extensible"
          imageUrl="https://via.placeholder.com/600x400"
        />
        <BlogPost
          category="Design"
          date="04 Dec 2019"
          title="6 Easy Steps to Better Icon Design"
          imageUrl="https://via.placeholder.com/600x400"
        />
        <BlogPost
          category="UI"
          date="04 Dec 2019"
          title="Understanding UI Principles for Better Design"
          imageUrl="https://via.placeholder.com/600x400"
        />
        <BlogPost
          category="Design"
          date="04 Dec 2019"
          title="Tips for Designing Responsive Layouts"
          imageUrl="https://via.placeholder.com/600x400"
        />
      </div>
    </div>
  );
};

// BlogPost component to display each blog item
const BlogPost = ({ category, date, title, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
