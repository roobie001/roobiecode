import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-indigo-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl text-white/80 font-bold tracking-wide hover:text-[#1E90FF] transition-colors duration-300"
        >
          Roobiecode<span className="text-[#1E90FF]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li>
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-[#1E90FF] rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-[0_0_15px_rgba(30,144,255,0.25)]"
        >
          Contact
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300 transition-transform duration-300"
        >
          {isOpen ? (
            <FiX className="rotate-180 transition-transform duration-300" />
          ) : (
            <FiMenu className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-indigo-950/95 backdrop-blur-md border-t border-white/5">
          <ul className="flex flex-col gap-6 text-gray-300 text-sm font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block px-6 py-2 bg-[#1E90FF] rounded-lg text-sm font-medium transition-all duration-300 hover:brightness-110"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
