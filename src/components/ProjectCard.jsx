import { FaEye, FaGithub } from "react-icons/fa";

function ProjectCard({ project, featured }) {
  const { liveLink, image, name, githubLink, description, stacks } = project;

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div className={`${featured ? "lg:w-1/2" : ""} overflow-hidden`}>
        <img
          src={image}
          alt={name}
          className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
            featured ? "h-80 lg:h-full" : "h-52"
          }`}
        />
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${featured ? "lg:w-1/2" : ""}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stacks?.map((stack, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-[#1E90FF]/10 text-[#1E90FF] rounded-full font-medium"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#1E90FF] text-white rounded-lg hover:opacity-90 transition"
            >
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
