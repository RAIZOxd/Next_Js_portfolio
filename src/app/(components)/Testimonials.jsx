'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const testimonialsData = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    text: "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.",
    name: "Billy Adams",
    company: "Rolling Thunder",
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    text: "Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.",
    name: "Gary Johnson",
    company: "Locost Accessories",
  },
  {
    id: 3,
    image: "/path/to/image1.jpg",
    text: "Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.",
    name: "Adams Johnson",
    company: "Locost Accessories",
  },
  
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => <div className="custom-dot" />,
  };

  return (
    <section className="mt-16 max-w-6xl text-left">
    <h2 className="text-2xl font-bold text-white mb-4">Testimonials</h2>
    <div className="relative mb-8">
      <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
      <div className="w-40 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
    </div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card p-6 rounded-lg shadow-lg flex items-start relative">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="object-cover" />
            </div>
            <div>
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-gray-400 text-xs">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .testimonials-container {
          background-color: #222222;
          padding: 2rem;
          border-radius: 8px;
        }
        .underline {
          width: 40px;
          height: 2px;
          background-color: #222222;
          margin-left: 5px;
        }
        .testimonial-card {
          background-color: #222222;
          padding: 1.5rem;
          border-radius: 8px;
          position: relative;
        }
        .testimonial-card:before {
          content: "“";
          font-size: 3rem;
          color: #555;
          position: absolute;
          top: -20px;
          left: 15px;
        }
        .testimonial-card:after {
          content: "”";
          font-size: 3rem;
          color: #555;
          position: absolute;
          bottom: -20px;
          right: 15px;
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
  );
};

export default Testimonials;
