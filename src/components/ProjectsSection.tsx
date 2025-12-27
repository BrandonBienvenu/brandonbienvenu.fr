import { Folder, Server, Network, BarChart3, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Infrastructure Homelab",
    description: "Une infrastructure virtuelle complète simulant des environnements d'entreprise. Plusieurs VMs sous Ubuntu Server avec Active Directory, DNS, DHCP et services web. Documentation complète et configurations versionnées.",
    tags: ["VirtualBox", "Ubuntu Server", "Active Directory", "DNS/DHCP"],
    status: "Actif",
    statusType: "active" as const,
    image: "/placeholder.svg",
  },
  {
    icon: Network,
    title: "Infrastructure Multi-Site avec pfSense + VPN IPsec",
    description: "Simulation d'une interconnexion de deux sites distants via tunnel VPN IPsec. Chaque site dispose d'un routeur pfSense, d'un Windows Server (AD, DNS, DHCP) et de clients. Communication sécurisée inter-sites fonctionnelle.",
    tags: ["pfSense", "VPN IPsec", "Windows Server", "Routage"],
    status: "Terminé",
    statusType: "completed" as const,
  },
  {
    icon: BarChart3,
    title: "Stack de Monitoring Grafana",
    description: "Déploiement d'une solution de monitoring complète avec Prometheus pour la collecte de métriques, Node Exporter pour les données système, et Grafana pour la visualisation. Tableaux de bord personnalisés et alerting configuré.",
    tags: ["Grafana", "Prometheus", "Node Exporter", "Monitoring"],
    status: "Terminé",
    statusType: "completed" as const,
    link: "https://github.com/BrandonBienvenu/-Grafana-Prometheus-and-Node-Exporter-",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="section-terminal mb-4">
              <span className="text-primary">ls projets/</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 glow-subtle">
                <Folder className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Projets en cours</h2>
            </div>
            <p className="text-muted-foreground text-body-lg max-w-2xl">
              Des projets pratiques où j'applique et développe mes compétences. Chaque projet suit les pratiques professionnelles avec documentation et gestion des changements.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 md:p-8 rounded-2xl card-glass border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300 shrink-0 w-fit">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl md:text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <span className={`shrink-0 px-3 py-1.5 text-xs font-medium rounded-full ${
                          project.statusType === 'active' 
                            ? 'bg-primary/10 text-primary border border-primary/30 shadow-glow-sm' 
                            : 'bg-green/10 text-green border border-green/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/50 border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/80 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
