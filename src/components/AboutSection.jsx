function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-indigo-950 to-black py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-[#1E90FF]">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I’m a Frontend Developer based in Nigeria, passionate about building
          responsive, scalable, and user-focused web applications using modern
          JavaScript technologies. I enjoy transforming UI designs into clean,
          maintainable, and high-performance interfaces.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          My core stack includes{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-white font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-white font-medium">Node.js</span>. I’m currently
          expanding deeper into full-stack development while building real-world
          applications like a Learning Management System.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#1E90FF] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-[0_0_20px_rgba(30,144,255,0.25)]"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
