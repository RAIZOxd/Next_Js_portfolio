'use client'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#252525] py-4 text-gray-400">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Social Links */}
        <div className="flex space-x-16">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm">© 2024 All rights reserved.</div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid #333;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 
