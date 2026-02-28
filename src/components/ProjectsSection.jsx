import ProjectCard from "./ProjectCard";
import omnifood from "../assets/omnifood.png";
import learnify from "../assets/learnify.png";
import todo from "../assets/todo.png.jpeg";

const projects = [
  {
    name: "Learnify",
    image: learnify,
    description:
      "Fullstack Learning Management system with clerkAuth, cloudinary and stripe",
    liveLink: "https://lms-frontend-six-bice.vercel.app/",
    githubLink: "",
    stacks: ["mongoDB", "expressJs", "nodeJs", "React", "Tailwind CSS"],
  },
  {
    name: "Omnifood",
    image: omnifood,
    description: `A food subscription landing page built using modern UI concepts and responsive design.`,
    liveLink: "https://omnifood-roobie.netlify.app/",
    githubLink: "https://github.com/roobie001/omnifood-project",
    stacks: ["HTML", "CSS", "javaScript"],
  },
  {
    name: "SomethingTodo",
    image: todo,
    description: `A mini Todo app built with react and tailwind`,
    liveLink: "",
    githubLink: "https://github.com/roobie001/Todo-App",
    stacks: ["reactJs", "Tailwind CSS"],
  },

  {
    name: "Omnifood",
    image: omnifood,
    description: `A food subscription landing page built using modern UI concepts and responsive design.`,
    liveLink: "https://omnifood-roobie.netlify.app/",
    githubLink: "https://github.com/roobie001/omnifood-project",
    stacks: ["HTML", "CSS", "javaScript"],
  },
];

function ProjectsSection() {
  return (
    <section className="w-full bg-indigo-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#1E90FF]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
