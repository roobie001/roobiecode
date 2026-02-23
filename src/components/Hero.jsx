import profileImg from "../assets/profile_picture.jpg";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-indigo-950 text-white flex items-center">
      <div className="max-w-[81rem] mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Hey, I am{" "}
            <span className="uppercase text-blue-400 tracking-wide">
              Roobie,
            </span>
          </h1>

          <h2 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Frontend Developer
            <span className="text-blue-400">.</span>
          </h2>

          <div className="flex gap-4 pt-8 justify-center lg:justify-start flex-wrap">
            <button className="uppercase px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg hover:opacity-90 transition duration-300 shadow-lg">
              Projects
            </button>

            <button className="uppercase px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition duration-300">
              Resume
            </button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
            {/* Decorative border */}
            <div className="absolute inset-0 border-8 rounded-2xl border-blue-500 translate-x-4 translate-y-4" />

            <img
              src={profileImg}
              alt="Roobie Profile"
              className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
