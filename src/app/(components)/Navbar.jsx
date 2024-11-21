'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct for client-side routing in Next.js 13+
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

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
        <nav className="hidden md:flex ml-auto justify-between space-x-8 text-gray-300 font-bold text-sm">
          <Link
            href="/"
            className={`hover:text-white ${
              isActive("/") ? "text-white" : ""
            }`}
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className={`hover:text-white ${
              isActive("/resume") ? "text-white" : ""
            }`}
          >
            Resume
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-white ${
              isActive("/portfolio") ? "text-white" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`hover:text-white ${
              isActive("/blog") ? "text-white" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`hover:text-white ${
              isActive("/contact") ? "text-white" : ""
            }`}
          >
            Contact
          </Link>
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
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`hover:text-white ${
                  isActive("/") ? "text-white" : ""
                }`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                onClick={toggleMenu}
                className={`hover:text-white ${
                  isActive("/resume") ? "text-white" : ""
                }`}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                onClick={toggleMenu}
                className={`hover:text-white ${
                  isActive("/portfolio") ? "text-white" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={toggleMenu}
                className={`hover:text-white ${
                  isActive("/blog") ? "text-white" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`hover:text-white ${
                  isActive("/contact") ? "text-white" : ""
                }`}
              >
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
