import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type ProjectsProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export default function Projects({ scrollRef }: ProjectsProps) {
  const navigate = useNavigate();

  // Project data
  const projects = [
    {
      title: "Web Development",
      description: "Frontend web apps with React",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/web-development-projects",
    },
    {
      title: "Microcontroller Based Application Development",
      description: "Smart Gate Lock & Doorbell System",
      image: "/download.jpeg",
      route: "/microcontroller-project",
    },
    {
      title: "UI / UX Design Project",
      description: "Creative UI/UX designs in Figma",
      image: "/uiux.jpeg",
      route: "/ui-ux-projects",
    },
  ];

  return (
    <section
      id="latest-projects"
      ref={scrollRef}
      className="py-24 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          Latest <span className="text-emerald-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(project.route)} // Navigate on click
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-emerald-400 transition"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                <span className="inline-block mt-3 px-4 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition text-sm font-semibold">
                  View Projects →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
