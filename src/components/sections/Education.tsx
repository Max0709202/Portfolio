import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    "Web Development",
    "Data Structures",
    "Algorithms",
    "Software Engineering",
  ];

  return (
    <section id="education" className="section-padding bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wide mb-4">Education</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border card-hover">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center glow">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  Master of Science
                </h3>
                <p className="text-xl text-primary font-medium mb-2">
                  Information Science / Studies
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  University of Tokyo, Japan
                </p>

                {/* Relevant Courses */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <span key={course} className="skill-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
