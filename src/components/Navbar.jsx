function Navbar() {
  return (
    <nav className="w-full bg-indigo-950 text-white sticky top-0 z-50">
      <div className="max-w-[81rem] mx-auto flex justify-between items-center px-6 md:px-4 lg:px-0 py-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-2xl cursor-pointer hover:text-blue-400 transition"
        >
          ROOBIECODE
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li>
            <a href="#home" className="hover:text-blue-300 transition">
              HOME
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-300 transition">
              ABOUT
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-300 transition">
              PROJECTS
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-blue-300 transition">
              EXPERIENCE
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="uppercase px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg hover:opacity-90 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
