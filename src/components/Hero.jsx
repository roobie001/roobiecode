import profileImg from "../assets/profile_picture.jpg";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-indigo-950 text-white flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <p className="text-gray-400 text-lg mb-4">Hey, I'm</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#1E90FF]">Roobie</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8">
            Frontend Developer building fast & scalable web applications.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects">
              <button className="px-8 py-3 bg-[#1E90FF] rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-[0_0_20px_rgba(30,144,255,0.25)]">
                View Projects
              </button>
            </a>

            <a href="/cv/OGBODO-OBIAJULU-CV.pdf" download>
              <button className="px-8 py-3 border border-[#1E90FF] rounded-lg font-medium transition-all duration-300 hover:bg-[#1E90FF]/10">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 rounded-2xl bg-[#1E90FF]/20 blur-2xl"></div>

            <img
              src={profileImg}
              alt="Roobie Profile"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
