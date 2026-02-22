import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-indigo-950 text-white">
      <div className=" max-w-[81rem] mx-auto flex justify-between md:px-4 lg:px-0 px-6 py-6 items-center">
        <h1
          className="font-bold text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          ROOBIECODE
        </h1>

        <ul className="flex gap-6 justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white hover:text-blue-300"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white hover:text-blue-300"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white hover:text-blue-300"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white hover:text-blue-300"
              }
            >
              EXPERIENCE
            </NavLink>
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
