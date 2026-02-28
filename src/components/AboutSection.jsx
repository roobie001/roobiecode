import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile_picture.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="w-full min-h-screen bg-indigo-950/90 text-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-[81rem] mx-auto md:px-4 lg:px-0 px-6 py-6 pt-[9rem] flex items-center justify-between lg:flex-row flex-col ">
        {/* left */}
        <div className="flex flex-1 justify-center items-center hidden lg:flex">
          <div className="relative lg:w-120 lg:h-120 md:w-92 md:h-92 sm:w-72 sm:h-72  z-0">
            <div className="absolute inset-0 border-8 rounded-2xl border-blue-500 translate-x-4 translate-y-4 z-0" />
            <img
              src={profileImg}
              alt=""
              className="w-full h-full object-cover rounded-2xl z-10 relative
            "
            />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 justify-center items-start flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m a Frontend Developer from Nigeria, passionate about building
            interactive and user-friendly web applications. I create reusable
            components, work with modern frontend tools, and turn UI designs
            into functional interfaces.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
            My main stack includes <span className="text-blue-500">React</span>,{" "}
            <span className="text-blue-500">Tailwind CSS</span>, and{" "}
            <span className="text-blue-500">JavaScript</span>. I’m currently
            learning backend development as I build a full-stack Learning
            Management System for my IT project. I also document my progress and
            continuously improve my skills through challenges like{" "}
            <span className="text-pink-300">#100DaysOfCode</span>.
          </p>

          <Link
            to="/contact"
            className="uppercase px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded"
          >
            hire me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
