import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import project from "../assets/projects/project.png";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

const projects = [
  {
    id: 1,
    title: "Self-directed Learning",
    description: "A self-directed learning platform using MERN stack.",
    image: project1,
    tags: ["React", "MongoDB"],
    demoUrl: "https://self-directed-learning.netlify.app",
    githubUrl: "https://github.com/meghd9/self-directed-learning",
  },
  {
    id: 2,
    title: "Movies App",
    description:
      "Movie App offering trending movies, search functionality and a responsive, modern design.",
    image: project,
    tags: ["React", "Tailwind CSS", "Appwrite"],
    demoUrl: "https://moviesearchmarathon.netlify.app",
    githubUrl: "https://github.com/meghd9/movie-app",
  },
  {
    id: 3,
    title: "Skia - A Lifestyle App",
    description:
      "A lifestyle app to follow routines of famous celebrities.",
    image: project2,
    tags: ["Android Studio", "Figma"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {projects.map((project, key) => ( */}
          {projects.map((project) => (
            <div
              // key={key}
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/meghd9"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
