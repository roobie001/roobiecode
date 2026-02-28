import profileImg from "../assets/profile_picture.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="w-full bg-indigo-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-80 h-80">
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-[#1E90FF]/20 blur-2xl rounded-2xl"></div>

            <img
              src={profileImg}
              alt="Roobie"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-[#1E90FF]">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m a Frontend Developer based in Nigeria, focused on building
            responsive and scalable web applications with modern JavaScript
            technologies. I enjoy transforming UI designs into clean,
            maintainable, and performant interfaces.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My core stack includes React, Next.js, Tailwind CSS, and Node.js.
            I’m currently expanding into full-stack development while building
            real-world applications like a Learning Management System.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#1E90FF] rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-[0_0_20px_rgba(30,144,255,0.25)]"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
