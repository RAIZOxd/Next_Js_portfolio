'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const clientsData = [
  { id: 1, name: "GOLDENGRID" },
  { id: 2, name: "SWEETY" },
  { id: 3, name: "MAGIC FURNITURES" },
  { id: 4, name: "LIFEGUARD" },
  { id: 5, name: "{less}" },
  { id: 6, name: "DESIGN LOVERS" },
  { id: 7, name: "Word Press" },
];

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => <div className="custom-dot" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="mt-16 px-8">
    <section className=" mt-16 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-4 text-left">Clients</h2>
      <div className="relative mb-8">
      <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
      <div className="w-20 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
    </div>
      <Slider {...settings}>
        {clientsData.map((client) => (
          <div key={client.id} className="client-logo text-gray-500 text-lg font-semibold">
            {client.name}
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .clients-container {
          background-color: #1a1a1a;
          padding: 2rem;
          border-radius: 8px;
        }
        .underline {
          width: 40px;
          height: 2px;
          background-color: #00aced;
        }
        .client-logo {
          padding: 1rem;
        }
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li {
          margin: 0;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #666;
        }
        .slick-dots li.slick-active button:before {
          color: #00aced;
        }
        .custom-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #666;
          margin: 0 4px;
        }
        .slick-dots .slick-active .custom-dot {
          background-color: #00aced;
        }
      `}</style>
    </section>
    </main>
  );
};

export default Clients;
