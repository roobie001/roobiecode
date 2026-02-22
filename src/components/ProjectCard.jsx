import { FaEye, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const { liveLink, image, name, githubLink, description, stacks } = project;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden  hover:shadow-xl transition-all duration-300">
      {/* Image Wrapper */}
      <div className="relative group overflow-hidden">
        <img
          src={image}
          alt="Project screenshot"
          className="w-full h-48 object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Sliding Overlay */}
        <div
          className="
    absolute inset-0 
    bg-white/80 
    flex items-center justify-center gap-6 
    translate-y-full 
    group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
        >
          <a
            href={liveLink}
            target="_blank"
            className="text-indigo-700 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaEye size={24} />
          </a>

          <a
            href={githubLink}
            target="_blank"
            className="text-indigo-700 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-indigo-900">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {stacks &&
            stacks.map((stack, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full font-medium"
              >
                {stack}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
