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
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              &lt;compétences /&gt;
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Arsenal Technique</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une base solide construite par la pratique, l'expérimentation en homelab et l'apprentissage continu.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
