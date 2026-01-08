import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mail, Phone } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Technologies", value: "25+" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide">About Me</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Building Digital{" "}
                <span className="text-gradient">Experiences</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Engineer based in Tottori City, Japan. 
              With 8 years of hands-on experience, I specialize in creating robust, 
              scalable web applications that deliver exceptional user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full development lifecycle — from designing 
              intuitive user interfaces to architecting efficient backend systems. 
              I thrive in Agile environments and am committed to writing clean, 
              maintainable code that stands the test of time.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:noriakinishida38@gmail.com">noriakinishida38@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+81-070-2478-6494">+81 070 2478 6494</a>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-5 h-5 text-primary" />
                <a href="https://www.max-dev.xyz/" target="_blank" rel="noopener noreferrer">
                  www.max-dev.xyz
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover"
              >
                <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
