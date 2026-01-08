import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Code,
  Type,
  Server,
  Atom,
  Sparkles,
  Palette,
  Wind,
  Database,
  GitBranch,
  Cloud,
  FlaskConical,
  FileCode,
  Zap,
  CheckCircle,
  Search,
  Sun,
  Users,
  Lightbulb,
  Target,
  Puzzle,
  ArrowRight,
  ArrowUp,
  Paintbrush,
  MessageSquare,
  Settings,
  Globe,
  Layers,
  Shield,
  TestTube,
  Workflow,
  Box,
  FileJson,
  Webhook,
  Smartphone,
  Package,
  Network,
} from "lucide-react";

interface SkillData {
  skill: string;
  value: number;
  icon: React.ReactNode;
}

const technicalSkills: SkillData[] = [
  { skill: "JavaScript", value: 5, icon: <Code className="w-4 h-4" /> },
  { skill: "TypeScript", value: 4.5, icon: <Type className="w-4 h-4" /> },
  { skill: "React/Redux", value: 5, icon: <Atom className="w-4 h-4" /> },
  { skill: "Node.js", value: 5, icon: <Server className="w-4 h-4" /> },
  { skill: "Express.js", value: 5, icon: <Server className="w-4 h-4" /> },
  { skill: "Python", value: 4.5, icon: <FileCode className="w-4 h-4" /> },
  { skill: "Django", value: 4, icon: <FlaskConical className="w-4 h-4" /> },
  { skill: "PostgreSQL", value: 4.5, icon: <Database className="w-4 h-4" /> },
  { skill: "MongoDB", value: 4, icon: <Database className="w-4 h-4" /> },
  { skill: "RESTful APIs", value: 5, icon: <Webhook className="w-4 h-4" /> },
  { skill: "GraphQL", value: 4, icon: <Network className="w-4 h-4" /> },
  { skill: "Git", value: 5, icon: <GitBranch className="w-4 h-4" /> },
  { skill: "Docker", value: 4.5, icon: <Package className="w-4 h-4" /> },
  { skill: "AWS", value: 4.5, icon: <Cloud className="w-4 h-4" /> },
  { skill: "Tailwind CSS", value: 5, icon: <Wind className="w-4 h-4" /> },
];

const humanSkills: SkillData[] = [
  { skill: "Positive Attitude", value: 4.5, icon: <Sun className="w-4 h-4" /> },
  { skill: "Teamwork", value: 4.5, icon: <Users className="w-4 h-4" /> },
  { skill: "Curiosity", value: 4.5, icon: <Search className="w-4 h-4" /> },
  { skill: "Creativity", value: 4.5, icon: <Sparkles className="w-4 h-4" /> },
  { skill: "Communication", value: 4.5, icon: <MessageSquare className="w-4 h-4" /> },
  { skill: "Analytical Thinking", value: 4.5, icon: <Lightbulb className="w-4 h-4" /> },
  { skill: "Decision Making", value: 4.5, icon: <Target className="w-4 h-4" /> },
  { skill: "Problem Solving", value: 4.5, icon: <Puzzle className="w-4 h-4" /> },
  { skill: "Adaptability", value: 4.5, icon: <ArrowRight className="w-4 h-4" /> },
  { skill: "Flexibility", value: 4.5, icon: <ArrowUp className="w-4 h-4" /> },
  { skill: "Branding", value: 4, icon: <Paintbrush className="w-4 h-4" /> },
  { skill: "Social Media & Flyers", value: 4, icon: <MessageSquare className="w-4 h-4" /> },
  { skill: "Automation", value: 4.5, icon: <Settings className="w-4 h-4" /> },
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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical & Dev Skills Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">
              Technical & Dev Skills
            </h3>
            <div className="w-full max-w-md relative">
              <ResponsiveContainer width="100%" height={450}>
                <RadarChart data={technicalSkills}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 5]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Technical Skills"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.4}
                    strokeWidth={3}
                  />
                </RadarChart>
              </ResponsiveContainer>
              {/* Icons positioned around the radar path */}
              <div className="absolute inset-0 pointer-events-none">
                {technicalSkills.map((skill, index) => {
                  const angle = (index * 360) / technicalSkills.length - 90;
                  const radius = 200;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <motion.div
                      key={skill.skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg">
                        <span className="text-primary">{skill.icon}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* Skill names and icons below chart */}
            <div className="mt-8 w-full max-w-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-card/50 border border-border/50 text-xs hover:bg-card hover:border-primary/50 transition-colors"
                  >
                    <span className="text-primary flex-shrink-0">{skill.icon}</span>
                    <span className="text-foreground truncate">{skill.skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Human & Creative Skills Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">
              Human & Creative Skills
            </h3>
            <div className="w-full max-w-md relative">
              <ResponsiveContainer width="100%" height={450}>
                <RadarChart data={humanSkills}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 5]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Human Skills"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.4}
                    strokeWidth={3}
                  />
                </RadarChart>
              </ResponsiveContainer>
              {/* Icons positioned around the radar path */}
              <div className="absolute inset-0 pointer-events-none">
                {humanSkills.map((skill, index) => {
                  const angle = (index * 360) / humanSkills.length - 90;
                  const radius = 200;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <motion.div
                      key={skill.skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg">
                        <span className="text-primary">{skill.icon}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* Skill names and icons below chart */}
            <div className="mt-8 w-full max-w-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {humanSkills.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.02 }}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-card/50 border border-border/50 text-xs hover:bg-card hover:border-primary/50 transition-colors"
                  >
                    <span className="text-primary flex-shrink-0">{skill.icon}</span>
                    <span className="text-foreground truncate">{skill.skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
