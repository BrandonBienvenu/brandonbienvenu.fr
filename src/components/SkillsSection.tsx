import { Server, Network, Layers, Terminal, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Server,
    title: "Systèmes",
    description: "Administration Linux & gestion de serveurs",
    skills: ["Ubuntu Server", "systemd", "SSH", "Logs", "Users", "FS"],
    color: "primary" as const,
  },
  {
    icon: Network,
    title: "Réseau",
    description: "Protocoles & infrastructure réseau",
    skills: ["TCP/UDP", "DHCP", "DNS", "VLANs", "VPN", "Firewall"],
    color: "accent" as const,
  },
  {
    icon: Layers,
    title: "Virtualisation",
    description: "Environnements virtuels & isolation",
    skills: ["VirtualBox", "VMware", "Réseaux VM", "Snapshots", "Ressources", "Lab"],
    color: "pink" as const,
  },
  {
    icon: Terminal,
    title: "Scripting",
    description: "Automatisation & scripts",
    skills: ["Bash", "Shell", "Cron", "Automation", "Parsing", "Monitoring"],
    color: "green" as const,
  },
  {
    icon: Wrench,
    title: "Outils",
    description: "Workflow professionnel & services",
    skills: ["Active Directory", "Web Server", "Docs", "Git", "Config", "Remote"],
    color: "cyan" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    bgHover: "group-hover:bg-primary/20",
    glow: "bg-primary/20",
    text: "text-primary",
    border: "border-primary/20",
    dot: "bg-primary",
  },
  accent: {
    bg: "bg-accent/10",
    bgHover: "group-hover:bg-accent/20",
    glow: "bg-accent/20",
    text: "text-accent",
    border: "border-accent/20",
    dot: "bg-accent",
  },
  pink: {
    bg: "bg-pink/10",
    bgHover: "group-hover:bg-pink/20",
    glow: "bg-pink/20",
    text: "text-pink",
    border: "border-pink/20",
    dot: "bg-pink",
  },
  green: {
    bg: "bg-green/10",
    bgHover: "group-hover:bg-green/20",
    glow: "bg-green/20",
    text: "text-green",
    border: "border-green/20",
    dot: "bg-green",
  },
  cyan: {
    bg: "bg-cyan/10",
    bgHover: "group-hover:bg-cyan/20",
    glow: "bg-cyan/20",
    text: "text-cyan",
    border: "border-cyan/20",
    dot: "bg-cyan",
  },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Premium style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Compétences</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Arsenal <span className="bg-gradient-to-r from-accent to-pink bg-clip-text text-transparent">Technique</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une base solide construite par la pratique, l'expérimentation en homelab et l'apprentissage continu.
            </p>
          </motion.div>

          {/* Skills Bento Grid - Like ExamAi feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color];
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <motion.div 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-6 md:p-8 rounded-2xl bg-background/80 border border-border/50 backdrop-blur-sm group-hover:border-opacity-60 transition-all duration-500 h-full hover:shadow-lg"
                    style={{ borderColor: `hsl(var(--${category.color === 'primary' ? 'primary' : category.color === 'accent' ? 'accent' : category.color === 'pink' ? 'pink' : category.color === 'green' ? 'green' : 'cyan'}) / 0.3)` }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-xl transition-all duration-300 ${colors.bg} border ${colors.border}`}
                      >
                        <category.icon className={`h-6 w-6 ${colors.text}`} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-lg">{category.title}</h3>
                          <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                        </div>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>

                    {/* Skills with premium pill styling */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-default ${colors.bg} ${colors.text} border ${colors.border} hover:shadow-sm`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Progress indicator for first card */}
                    {index === 0 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-6 pt-6 border-t border-border/50"
                      >
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Maîtrise</span>
                          <span className="text-primary font-medium">Avancé</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "80%" }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-cyan rounded-full"
                          />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
