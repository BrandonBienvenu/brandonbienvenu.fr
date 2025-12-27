import { Server, Network, Layers, Terminal, Wrench, Zap } from "lucide-react";

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
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Compétences</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Arsenal <span className="text-gradient-accent">Technique</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une base solide construite par la pratique, l'expérimentation en homelab et l'apprentissage continu.
            </p>
          </div>

          {/* Skills Bento Grid - Like ExamAi feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative animate-fade-in-up ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                  category.color === 'primary' ? 'bg-primary/20' :
                  category.color === 'accent' ? 'bg-accent/20' :
                  category.color === 'pink' ? 'bg-pink/20' :
                  category.color === 'green' ? 'bg-green/20' :
                  'bg-cyan/20'
                }`} />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-background/80 border border-border/50 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-500 h-full group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      category.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow-sm' :
                      category.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                      category.color === 'pink' ? 'bg-pink/10 group-hover:bg-pink/20' :
                      category.color === 'green' ? 'bg-green/10 group-hover:bg-green/20' :
                      'bg-cyan/10 group-hover:bg-cyan/20'
                    }`}>
                      <category.icon className={`h-6 w-6 ${
                        category.color === 'primary' ? 'text-primary' :
                        category.color === 'accent' ? 'text-accent' :
                        category.color === 'pink' ? 'text-pink' :
                        category.color === 'green' ? 'text-green' :
                        'text-cyan'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-lg">{category.title}</h3>
                        <span className={`w-2 h-2 rounded-full ${
                          category.color === 'primary' ? 'bg-primary' :
                          category.color === 'accent' ? 'bg-accent' :
                          category.color === 'pink' ? 'bg-pink' :
                          category.color === 'green' ? 'bg-green' :
                          'bg-cyan'
                        }`} />
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills with premium pill styling */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                          category.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20' :
                          category.color === 'accent' ? 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20' :
                          category.color === 'pink' ? 'bg-pink/10 text-pink border border-pink/20 hover:bg-pink/20' :
                          category.color === 'green' ? 'bg-green/10 text-green border border-green/20 hover:bg-green/20' :
                          'bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20'
                        }`}
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Progress indicator for first card */}
                  {index === 0 && (
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Maîtrise</span>
                        <span className="text-primary font-medium">Avancé</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-primary to-cyan rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
