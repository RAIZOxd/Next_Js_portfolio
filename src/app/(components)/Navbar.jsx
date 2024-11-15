'use client'
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-darkGray p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-black text-lg">
            A
          </div>
          <span className="ml-3 text-xl font-bold text-white">Alex</span>
          <span className="ml-3 text-xl text-white">Smith</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ml-auto text-gray-300">
          <ul className="flex space-x-8 font-bold text-sm">
            <li className="hover:text-white">
              <Link href="/">About Me</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-300">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 text-gray-300">
          <ul className="space-y-4 font-light text-sm text-center">
            <li className="hover:text-white">
              <Link href="/" onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="/resume" onClick={toggleMenu}>
                Resume
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="/portfolio" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
