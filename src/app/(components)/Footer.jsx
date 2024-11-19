'use client';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#252525] py-4 text-gray-400 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Links */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-lg transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-lg transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-lg transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center md:text-right text-sm">
          © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
