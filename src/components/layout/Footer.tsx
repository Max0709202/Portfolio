import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    selectedTags: [] as string[],
  });

  const [messageCount, setMessageCount] = useState(0);

  const serviceTags = [
    "Website Design",
    "Branding",
    "Web Development",
    "Logo Design",
    "App Development",
    "Automation & Integrations",
    "SEO Optimization",
    "Performance Optimization",
    "WordPress Theme",
    "WordPress Plugin",
    "WordPress Migration",
    "Remote Work",
    "Full-time Employee",
    "Contractor",
  ];

  const toggleTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessageCount(value.length);
    setFormData((prev) => ({ ...prev, message: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <footer id="contact" className="section-padding bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section: Let's Talk */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Let's Talk
            </h3>

            {/* Introductory Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm open to any job opportunity: freelance, remote, full-time or collaborations.
              </p>
              <p>
                Got a project in mind, need help with your website, or want a second opinion on your current code? Reach out and we'll figure out what makes sense, priorities, scope and next steps, no pressure, no fluff.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <a
                href="mailto:noriakinishida38@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">noriakinishida38@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+81-070-2478-6494"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+81 070 2478 6494</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Tottori City, Japan</p>
                </div>
              </div>
            </div>

            {/* Connect Via */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Or connect via</p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:noriakinishida38@gmail.com"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-background"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-background"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="w-full bg-background"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject <span className="text-destructive">*</span>
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-background"
                />
              </div>

              {/* What's on your mind? */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  What's on your mind?
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleMessageChange}
                  maxLength={500}
                  rows={6}
                  className="w-full bg-background resize-none pr-20"
                  placeholder="Tell me about your project..."
                />
                <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                  {messageCount}/500 characters
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
