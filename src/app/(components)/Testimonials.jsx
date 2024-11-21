'use client';
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
    slidesToShow: 2, // Default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
    customPaging: () => <div className="custom-dot" />,
  };

  return (
    <main className="mt-16 px-8">
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-left md:text-left">
          Testimonials
        </h2>
        <div className="relative mb-8">
          <div className="w-10 h-0.5 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
          <div className="w-40 h-0.5 bg-gray-600 mt-1"></div> {/* Gray line */}
        </div>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card p-6 bg-[#333333] rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-xs">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </Slider>

        <style jsx>{`
          .testimonial-card {
            background-color: #222222;
          }
          .slick-dots {
            bottom: -20px;
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

export default Testimonials;
