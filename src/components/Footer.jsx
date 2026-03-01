import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-indigo-950/80 backdrop-blur-md border-t border-white/5 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Roobiecode<span className="text-[#1E90FF]">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Frontend developer focused on building clean, responsive and
            production-ready web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Connect
          </h3>

          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://github.com/roobie001"
              target="_blank"
              className="hover:text-[#1E90FF] transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/obiajulu-ogbodo-0123451a4"
              target="_blank"
              className="hover:text-[#1E90FF] transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/roobie001"
              target="_blank"
              className="hover:text-[#1E90FF] transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Roobiecode. All rights reserved.</p>

          <a
            href="#home"
            className="flex items-center gap-2 hover:text-white transition-colors mt-4 md:mt-0"
          >
            Back to top <HiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
