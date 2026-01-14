import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    gradient: "from-primary/20 to-primary/5",
    image: "/src/images/projects/ecommerce.png", // Add image path here, e.g., "/images/projects/ecommerce.jpg"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team workspaces, and automated workflow features.",
    tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
    gradient: "from-blue-500/20 to-blue-500/5",
    image: "/src/images/projects/task-management.png", // Add image path here, e.g., "/images/projects/task-management.jpg"
  },
  {
    title: "Healthcare Platform",
    description: "Analytics dashboard for healthcare providers featuring patient data visualization and appointment scheduling.",
    tech: ["React", "TypeScript", "GraphQL", "AWS", "D3.js"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    image: "/src/images/projects/healthcare.png", // Add image path here, e.g., "/images/projects/healthcare.jpg"
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, and integrated CRM functionality.",
    tech: ["Next.js", "Python", "Django", "MySQL", "Google Maps"],
    gradient: "from-amber-500/20 to-amber-500/5",
    image: "/src/images/projects/real-estate.png", // Add image path here, e.g., "/images/projects/real-estate.jpg"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wide mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden card-hover"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>
              )}

              <div className="relative p-8" style={{ paddingBottom: '0px' }}>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
