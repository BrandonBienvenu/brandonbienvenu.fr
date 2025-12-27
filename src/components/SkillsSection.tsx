import { Server, Network, Layers, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Systèmes",
    description: "Administration Linux & gestion de serveurs",
    skills: [
      "Ubuntu Server",
      "systemd & services",
      "Sécurisation SSH",
      "Analyse de logs",
      "Gestion des utilisateurs",
      "Systèmes de fichiers",
    ],
  },
  {
    icon: Network,
    title: "Réseau",
    description: "Protocoles & infrastructure réseau",
    skills: [
      "TCP/UDP",
      "DHCP & DNS",
      "Routage & VLANs",
      "HTTPS/TLS",
      "Configuration VPN",
      "Règles de pare-feu",
    ],
  },
  {
    icon: Layers,
    title: "Virtualisation",
    description: "Environnements virtuels & isolation",
    skills: [
      "VirtualBox",
      "VMware",
      "Réseaux VM",
      "Snapshots",
      "Allocation de ressources",
      "Environnements lab",
    ],
  },
  {
    icon: Terminal,
    title: "Scripting",
    description: "Automatisation & scripts",
    skills: [
      "Scripting Bash",
      "Commandes shell",
      "Tâches cron",
      "Automatisation",
      "Parsing de logs",
      "Monitoring système",
    ],
  },
  {
    icon: Wrench,
    title: "Outils & Pratiques",
    description: "Workflow professionnel & services",
    skills: [
      "Active Directory",
      "Serveurs web",
      "Documentation",
      "Suivi des changements",
      "Gestion de config",
      "Accès distant",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-grid-dense opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-terminal justify-center mb-4">
              <span className="text-primary">cat skills.txt</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Arsenal Technique</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-body-lg">
              Une base solide construite par la pratique, l'expérimentation en homelab et l'apprentissage continu.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-background border border-border group-hover:border-primary/40 transition-all duration-500 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="pill-glow opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
