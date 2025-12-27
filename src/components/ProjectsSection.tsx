import { Folder, Server, Network, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Infrastructure Homelab",
    description: "Une infrastructure virtuelle complète simulant des environnements d'entreprise. Plusieurs VMs sous Ubuntu Server avec Active Directory, DNS, DHCP et services web. Documentation complète et configurations versionnées.",
    tags: ["VirtualBox", "Ubuntu Server", "Active Directory", "DNS/DHCP"],
    status: "Actif",
    statusType: "active",
  },
  {
    icon: Network,
    title: "Infrastructure Multi-Site avec pfSense + VPN IPsec",
    description: "Simulation d'une interconnexion de deux sites distants via tunnel VPN IPsec. Chaque site dispose d'un routeur pfSense, d'un Windows Server (AD, DNS, DHCP) et de clients. Communication sécurisée inter-sites fonctionnelle.",
    tags: ["pfSense", "VPN IPsec", "Windows Server", "Routage"],
    status: "Terminé",
    statusType: "completed",
  },
  {
    icon: BarChart3,
    title: "Stack de Monitoring Grafana",
    description: "Déploiement d'une solution de monitoring complète avec Prometheus pour la collecte de métriques, Node Exporter pour les données système, et Grafana pour la visualisation. Tableaux de bord personnalisés et alerting configuré.",
    tags: ["Grafana", "Prometheus", "Node Exporter", "Monitoring"],
    status: "Terminé",
    statusType: "completed",
    link: "https://github.com/BrandonBienvenu/-Grafana-Prometheus-and-Node-Exporter-",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Folder className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Projets en cours</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Des projets pratiques où j'applique et développe mes compétences. Chaque projet suit les pratiques professionnelles avec documentation et gestion des changements.
          </p>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit shrink-0">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <span className={`shrink-0 px-2 py-1 text-xs font-medium rounded-full ${
                        project.statusType === 'active' 
                          ? 'bg-primary/10 text-primary' 
                          : project.statusType === 'completed'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono rounded bg-secondary border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
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
