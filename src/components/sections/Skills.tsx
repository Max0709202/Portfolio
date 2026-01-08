import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React.js", "Redux", "Vue.js", "AngularJS",
      "Tailwind CSS", "Material-UI", "Bootstrap"
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express.js",
      "Python", "Django", "Flask",
      "PHP", "Laravel", "WordPress"
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "Redis",
      "Database Design", "Normalization"
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Git", "GitHub", "GitLab",
      "Docker", "Jenkins", "CI/CD",
      "AWS", "Azure", "Google Cloud"
    ],
  },
  {
    title: "APIs & Auth",
    skills: [
      "RESTful APIs", "GraphQL",
      "OAuth", "JWT"
    ],
  },
  {
    title: "Testing & Methods",
    skills: [
      "Jest", "Mocha", "Cypress",
      "Agile", "Scrum"
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wide mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
