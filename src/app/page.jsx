// pages/index.js
'use client'
import {
  faBullhorn,
  faLaptopCode,
  faPenNib,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../public/profile_img.png";
import Clients from "./(components)/Clients";
import FunFacts from "./(components)/FunFacts";
import Testimonials from "./(components)/Testimonials";
import { animateFadeInUp } from "./(components)/gsapAnimations";

export default function Home() {
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
  return (
    <div className="min-h-screen bg-darkGray text-gray-400" ref={sectionRef}>
      <Head>
        <title>Frontend Developer - Alex Smith</title>
      </Head>
     <main className="flex flex-col items-center mt-8 px-4 md:flex-row md:items-start md:justify-center md:mt-16 md:px-8 space-y-6 md:space-y-0 md:space-x-12 py-20">
{/* Profile Picture Section */}
<div className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-900 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-slate-950" ref={addToRefs}>
  <Image
    src={img1}
    alt="Profile Picture"
    className="w-full h-full object-cover"
  />
</div>


  {/* Info Section */}
  <div className="max-w-lg text-center md:text-left space-y-4 md:space-y-6" ref={addToRefs}>
    <h2 className="text-base sm:text-lg text-gray-500">Frontend Developer</h2>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Alex Smith</h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
      Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
      risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis
      purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
    </p>

{/* Button Section */}
<div className="flex flex-col items-center md:flex-row md:justify-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
  <button className="px-6 py-2 border-2 border-blue-500 text-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-blue-500 hover:text-white transition">
    Download CV
  </button>
  <button className="px-6 py-2 border-2 border-gray-400 text-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-gray-400 hover:text-gray-800 transition">
    Contact
  </button>
</div>

  </div>
</main>

<main className="flex flex-col items-center mt-16 px-8">
      {/* "What I Do" Section */}
      <section className="mt-16 max-w-6xl text-left">
        <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
        <div className="relative mb-8">
          <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
          <div className="w-28 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Copywriting */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faPenNib}
              className="text-3xl text-blue-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Copywriting
              </h3>
              <p className="text-gray-400">
                Craft compelling and impactful content that drives engagement
                and boosts your brand’s voice.
              </p>
            </div>
          </div>

          {/* Ecommerce */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-3xl text-blue-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Ecommerce
              </h3>
              <p className="text-gray-400">
                Build and optimize online stores for seamless shopping
                experiences and increased conversions.
              </p>
            </div>
          </div>

          {/* Web Design */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-3xl text-blue-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Web Design
              </h3>
              <p className="text-gray-400">
                Design intuitive, user-friendly, and visually appealing
                websites to enhance your digital presence.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faBullhorn}
              className="text-3xl text-blue-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Marketing
              </h3>
              <p className="text-gray-400">
                Develop strategic marketing campaigns to amplify your brand’s
                reach and drive results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Testimonials Section */}

    <div ref={addToRefs}>  <Testimonials /></div>


    {/* Client Section */}
    <div className="pt-10" ref={addToRefs}><Clients/></div>


    {/* FunFacts Section */}
    <div ref={addToRefs}><FunFacts/></div>

      
    </div>
  );
}
