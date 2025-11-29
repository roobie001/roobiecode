import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="w-full bg-indigo-950 text-white">
      <div className="max-w-[81rem] mx-auto md:px-4 lg:px-0 px-6 py-6 pt-[9rem] ">
        <div className="text-4xl text-bold mb-6">
          <h1 className="mb-4 text-gray-400">
            hey, I am <span className="uppercase text-blue-500">Roobie,</span>
          </h1>
          <p className="uppercase text-6xl">
            Frontend developer <span className="text-blue-500">.</span>
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="uppercase px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded">
            Projects
          </button>
          <button className="uppercase px-6 py-3 border border-blue-500">
            resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
