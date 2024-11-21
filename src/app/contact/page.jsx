'use client';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from 'react';
import { animateFadeInUp } from '../(components)/gsapAnimations';

const ContactSection = () => {

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
    <div className="min-h-screen text-white" ref={sectionRef}>
      {/* Contact Header */}
      <div className="h-48 flex items-center justify-between px-4 sm:px-14 border-t border-b border-gray-500 bg-[#252525]" ref={addToRefs}>
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        <a href="#get-in-touch" className="text-gray-400 text-sm sm:text-lg">
          Get in Touch
        </a>
      </div>

      {/* Google Map Embed */}
      <div className="mt-8 px-4 sm:px-14 py-10 container mx-auto" ref={addToRefs}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0860147340326!2d-122.39968928468182!3d37.774929979759596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c661f5ebf%3A0xe4b0eb3f61df9d87!2sTownsend%20St%2C%20San%20Francisco%2C%20CA%2094113%2C%20USA!5e0!3m2!1sen!2sus!4v1699914289372!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

const ContactPage = () => {

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
    <div>
      {/* Contact Section */}
      <ContactSection />

      {/* Main Content */}
      <div className="max-w-screen-xl container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 sm:px-0 px-4 py-3" ref={sectionRef}>
        {/* Contact Info Section */}
        <div className="space-y-8" ref={addToRefs}>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
            />
            <div>
              <p className="font-semibold text-base sm:text-lg">415-832-2000</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Available for calls during business hours.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
            />
            <div>
              <p className="font-semibold text-base sm:text-lg">San Francisco</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Visit our office at the heart of San Francisco.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
            />
            <div>
              <p className="font-semibold text-base sm:text-lg">hello@example.com</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Drop us an email anytime for inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="" ref={addToRefs}>
          <h2 className="text-2xl sm:text-2xl font-semibold mb-8" ref={sectionRef}>
            How Can I Help You?
            <div className="relative mb-8">
            <div className="w-10 h-0.5 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
            <div className="w-60 h-0.5 bg-gray-600 mt-1"></div> {/* Gray line */}
          </div>
          </h2>
          <form className="space-y-6" ref={sectionRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md text-sm sm:text-base col-span-1 sm:col-span-2"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md h-32 text-sm sm:text-base"
            ></textarea>
            <button className="px-6 py-2 border-2 border-blue-500 text-gray-200 rounded-3xl hover:bg-blue-500 hover:text-white transition w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
