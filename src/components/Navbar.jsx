import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-indigo-950 text-white">
      <div className=" max-w-[81rem] mx-auto flex justify-between md:px-4 lg:px-0 px-6 py-6 items-center">
        <h1 className="font-bold text-2xl">ROOBIECODE</h1>

        <ul className="flex gap-6 justify-between">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/experience">EXPERIENCE</Link>
          </li>
        </ul>

        <Link
          to="/contact"
          className="uppercase px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
