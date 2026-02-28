import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const sectionTitle = "text-white text-3xl font-bold text-center mb-12";
const categoryTitle = "text-white text-xl font-semibold mb-6";
const iconStyle =
  "text-[#1E90FF] transition-all duration-300 hover:scale-105 hover:brightness-125";

function Skills() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={sectionTitle}>Skills</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* FRONTEND */}
          <div>
            <h3 className={categoryTitle}>Frontend</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-2">
                <FaReact size={48} className={iconStyle} />
                <span className="text-white">React</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiNextdotjs size={48} className={iconStyle} />
                <span className="text-white">Next.js</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiTailwindcss size={48} className={iconStyle} />
                <span className="text-white">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className={categoryTitle}>Backend</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-2">
                <FaNodeJs size={48} className={iconStyle} />
                <span className="text-white">Node.js</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiExpress size={48} className={iconStyle} />
                <span className="text-white">Express</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiMongodb size={48} className={iconStyle} />
                <span className="text-white">MongoDB</span>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className={categoryTitle}>Tools</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-2">
                <FaGitAlt size={48} className={iconStyle} />
                <span className="text-white">Git</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiVercel size={48} className={iconStyle} />
                <span className="text-white">Vercel</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <SiPostman size={48} className={iconStyle} />
                <span className="text-white">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
