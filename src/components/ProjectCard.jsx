import { FaEye, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const { liveLink, image, name, githubLink, description, stacks } = project;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full text-[#1E90FF] hover:scale-110 transition-transform"
            >
              <FaEye size={20} />
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full text-[#1E90FF] hover:scale-110 transition-transform"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stacks?.map((stack, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-[#1E90FF]/10 text-[#1E90FF] rounded-full font-medium"
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
