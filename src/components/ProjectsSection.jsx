import ProjectCard from "./ProjectCard";
import omnifood from "../assets/omnifood.png";
import learnify from "../assets/learnify.png";
import todo from "../assets/todo.png.jpeg";

const projects = [
  {
    name: "Learnify",
    image: learnify,
    description:
      "Fullstack Learning Management system with Clerk Auth, Cloudinary and Stripe integration.",
    liveLink: "https://lms-frontend-six-bice.vercel.app/",
    githubLink: "",
    stacks: ["MongoDB", "Express", "Node.js", "React", "Tailwind CSS"],
    featured: true,
  },
  {
    name: "Omnifood",
    image: omnifood,
    description: `A food subscription landing page built using modern UI concepts and responsive design.`,
    liveLink: "https://omnifood-roobie.netlify.app/",
    githubLink: "https://github.com/roobie001/omnifood-project",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "SomethingTodo",
    image: todo,
    description: `A mini Todo app built with react and tailwind`,
    liveLink: "",
    githubLink: "https://github.com/roobie001/Todo-App",
    stacks: ["React", "Tailwind CSS"],
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-indigo-950 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-[#1E90FF]">Projects</span>
        </h2>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <div key={index} className="mb-16">
              <ProjectCard project={project} featured />
            </div>
          ))}

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
