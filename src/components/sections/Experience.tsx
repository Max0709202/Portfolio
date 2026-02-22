import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Development Engineer",
    company: "Grease Co., Ltd",
    period: "January 2024 – March 2025",
    responsibilities: [
      "Led end-to-end development of execuwell.jp, delivering a production-grade web platform from requirements through launch (architecture, implementation, release)",
      "Designed and built scalable backend APIs and core business logic to support user onboarding, content/feature management, and secure account workflows",
      "Implemented responsive, SEO-friendly front-end pages and optimized site performance to improve Core Web Vitals and conversion rates (React/Next.js, SSR/SSG, caching)",
      "Built a maintainable data layer with clean schemas, migrations, and query optimization to support growth and reporting needs (Supabase/MySQL, ORM)",
      "Integrated third-party services for email/notifications, analytics, and payments where applicable, ensuring reliable error handling and observability (webhooks,retries, idempotency)",
      "Partnered with product and stakeholders to define milestones, prioritize roadmap items, and deliver iterative improvements based on user feedback and data"
    ],
  },
  {
    role: "Backend Engineer",
    company: "Kawasaki Heavy Industries",
    period: "October 2022 – October 2023",
    responsibilities: [
      "Built and maintained backend services for industrial/IoT and manufacturing adjacent systems, delivering high-availability APIs for internal and external stakeholders (Java/Spring Boot, Node.js, REST)",
      "Designed and optimized relational data models and complex queries for production workloads, improving throughput and reducing latency (PostgreSQL/MySQL, indexing, query tuning)",
      "Hardened authentication/authorization flows and service-to-service access controls, aligning systems with corporate security requirements (OAuth2, JWT, RBAC, secrets management)",
      "Improved release quality and deployment speed by standardizing CI/CD pipelines and automating testing, migrations, and rollbacks (GitHub Actions/Jenkins, Docker,IaC)",
      "Collaborated with cross-functional teams (manufacturing, QA, security) to translate operational requirements into scalable backend designs and deliver features on schedule using Agile/Scrum",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Human Resocia Co., Ltd",
    period: "March 2019 – July 2022",
    responsibilities: [
      "Developed and maintained full-stack web applications using React.js and Node.js",
      "Designed RESTful APIs and integrated third-party services including payment gateways and social login",
      "Built scalable databases using MongoDB and MySQL, achieving 30% faster data retrieval",
      "Collaborated with UX/UI designers to create responsive, user-friendly interfaces",
      "Improved performance and reduced load times by 25% through optimization and caching strategies",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wide mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-20 bottom-0 w-px bg-border" />

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center glow">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-16">
                  <div className="p-8 rounded-2xl bg-card border border-border card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-heading font-bold">{exp.role}</h3>
                        <p className="text-primary text-lg mt-1">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground bg-secondary px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 + respIndex * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
