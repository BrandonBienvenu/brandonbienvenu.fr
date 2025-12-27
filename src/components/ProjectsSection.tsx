import { Folder, Server, Network, BarChart3, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Server,
    title: "Infrastructure Homelab",
    description: "Une infrastructure virtuelle complète simulant des environnements d'entreprise. Plusieurs VMs sous Ubuntu Server avec Active Directory, DNS, DHCP et services web.",
    tags: ["VirtualBox", "Ubuntu Server", "Active Directory", "DNS/DHCP"],
    status: "Actif",
    statusType: "active" as const,
    highlight: true,
  },
  {
    icon: Network,
    title: "Multi-Site VPN IPsec",
    description: "Simulation d'une interconnexion de deux sites distants via tunnel VPN IPsec avec pfSense, Windows Server et clients.",
    tags: ["pfSense", "VPN IPsec", "Windows Server", "Routage"],
    status: "Terminé",
    statusType: "completed" as const,
  },
  {
    icon: BarChart3,
    title: "Stack Monitoring Grafana",
    description: "Solution de monitoring complète avec Prometheus, Node Exporter et Grafana. Tableaux de bord personnalisés et alerting.",
    tags: ["Grafana", "Prometheus", "Node Exporter"],
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
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 border border-pink/30 mb-6">
              <Folder className="h-4 w-4 text-pink" />
              <span className="text-sm font-medium text-pink">Projets</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Réalisations <span className="text-gradient-pink">Pratiques</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Des projets concrets où j'applique et développe mes compétences en infrastructure IT.
            </p>
          </div>

          {/* Projects Grid - Bento style like ExamAi */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative animate-fade-in-up ${
                  project.highlight ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative rounded-2xl bg-card/80 border backdrop-blur-sm transition-all duration-500 h-full group-hover:-translate-y-1 overflow-hidden ${
                  project.highlight ? 'border-primary/30' : 'border-border/50 hover:border-primary/30'
                }`}>
                  {/* Gradient top bar for highlighted project */}
                  {project.highlight && (
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-pink" />
                  )}
                  
                  <div className="p-6 md:p-8">
                    <div className={`flex flex-col ${project.highlight ? 'lg:flex-row lg:items-start' : ''} gap-6`}>
                      {/* Icon */}
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300 shrink-0 w-fit">
                        <project.icon className="h-8 w-8 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
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
                          <span className={`shrink-0 px-4 py-1.5 text-xs font-medium rounded-full flex items-center gap-2 ${
                            project.statusType === 'active' 
                              ? 'bg-primary/10 text-primary border border-primary/30' 
                              : 'bg-green/10 text-green border border-green/30'
                          }`}>
                            <span className={`w-2 h-2 rounded-full ${
                              project.statusType === 'active' ? 'bg-primary animate-pulse' : 'bg-green'
                            }`} />
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
                              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/80 border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/80 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Preview mockup for highlighted project */}
                      {project.highlight && (
                        <div className="hidden lg:block shrink-0 w-64">
                          <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green/50" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 w-full bg-primary/20 rounded" />
                              <div className="h-2 w-3/4 bg-muted rounded" />
                              <div className="h-2 w-1/2 bg-muted rounded" />
                              <div className="h-8 w-full bg-muted/50 rounded mt-4" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in-up stagger-4">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/BrandonBienvenu" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Voir sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
