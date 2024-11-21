import { FaClock, FaCoffee, FaHeart, FaTrophy } from "react-icons/fa";

const FunFacts = () => {
  const facts = [
    { icon: <FaHeart />, label: "Happy Clients", value: "578" },
    { icon: <FaClock />, label: "Working Hours", value: "4,780" },
    { icon: <FaTrophy />, label: "Awards Won", value: "15" },
    { icon: <FaCoffee />, label: "Coffee Consumed", value: "1,286" },
  ];

  return (
    <main className="mt-16 px-8">
      <div className="bg-[#222222] text-gray-400 py-10">
        <div className="mt-16 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white text-left">Fun Facts</h2>
          <div className="relative mb-8">
            <div className="w-10 h-0.5 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
            <div className="w-28 h-0.5 bg-gray-600 mt-1"></div> {/* Gray line */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="fact-card bg-[#333333] text-white p-6 rounded-lg flex flex-col items-center justify-center space-y-2 transform transition-all duration-300"
              >
                <div className="text-blue-500 text-4xl flex items-center justify-center">
                  {fact.icon}
                </div>
                <h3 className="font-semibold text-lg">{fact.label}</h3>
                <p className="text-3xl font-bold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fact-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .fact-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </main>
  );
};

export default FunFacts;
