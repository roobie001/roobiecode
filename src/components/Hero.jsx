import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile_picture.jpg";

function Hero() {
  return (
    <div className="w-full h-screen bg-indigo-950 text-white">
      <div className="max-w-[81rem] mx-auto md:px-4 lg:px-0 px-6 py-6 pt-[9rem] flex items-center justify-between lg:flex-row flex-col ">
        {/* left */}
        <div className="flex-1">
          <div className="text-4xl font-bold mb-6">
            <h1 className="mb-4 text-gray-300">
              hey, I am <span className="uppercase text-blue-400">Roobie,</span>
            </h1>
            <p className="uppercase text-5xl md:text-6xl lg:text-7xl">
              Frontend Developer <span className="text-blue-400">.</span>
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="uppercase px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded">
              Projects
            </button>
            <button className="uppercase px-6 py-3 border border-blue-500 rounded">
              Resume
            </button>
          </div>
        </div>

        {/* right */}
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
      </div>
    </div>
  );
}

export default Hero;
