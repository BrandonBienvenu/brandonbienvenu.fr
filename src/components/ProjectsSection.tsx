import { Folder, Server, Network, BarChart3, ArrowUpRight, ExternalLink, Monitor, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Server,
    title: "Infrastructure Homelab",
    description: "Une infrastructure virtuelle complète simulant des environnements d'entreprise. Plusieurs VMs sous Ubuntu Server avec Active Directory, DNS, DHCP et services web.",
    tags: ["VirtualBox", "Ubuntu Server", "Active Directory", "DNS/DHCP"],
    status: "Actif",
    statusType: "active" as const,
    highlight: true,
    preview: "server",
  },
  {
    icon: Network,
    title: "Multi-Site VPN IPsec",
    description: "Simulation d'une interconnexion de deux sites distants via tunnel VPN IPsec avec pfSense, Windows Server et clients.",
    tags: ["pfSense", "VPN IPsec", "Windows Server", "Routage"],
    status: "Terminé",
    statusType: "completed" as const,
    preview: "network",
  },
  {
    icon: BarChart3,
    title: "Stack Monitoring Grafana",
    description: "Solution de monitoring complète avec Prometheus, Node Exporter et Grafana. Tableaux de bord personnalisés et alerting.",
    tags: ["Grafana", "Prometheus", "Node Exporter"],
    status: "Terminé",
    statusType: "completed" as const,
    link: "https://github.com/BrandonBienvenu/-Grafana-Prometheus-and-Node-Exporter-",
    preview: "chart",
  },
];

const PreviewMockup = ({ type }: { type: string }) => {
  if (type === "server") {
    return (
      <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green/60" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">terminal</span>
        </div>
        <div className="font-mono text-xs space-y-1">
          <p className="text-muted-foreground">$ <span className="text-primary">systemctl status</span></p>
          <p className="text-green text-[10px]">● nginx.service - active</p>
          <p className="text-green text-[10px]">● ssh.service - active</p>
          <p className="text-green text-[10px]">● docker.service - active</p>
        </div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono text-muted-foreground">Network Topology</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
            <Monitor className="w-4 h-4 text-primary" />
          </div>
          <div className="w-8 border-t-2 border-dashed border-primary/40" />
          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
            <Network className="w-4 h-4 text-accent" />
          </div>
          <div className="w-8 border-t-2 border-dashed border-accent/40" />
          <div className="w-8 h-8 rounded bg-green/20 flex items-center justify-center">
            <Server className="w-4 h-4 text-green" />
          </div>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-2">Site A ↔ VPN ↔ Site B</p>
      </div>
    );
  }

  // Chart preview
  return (
    <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono text-muted-foreground">CPU Usage</span>
        <span className="text-[10px] text-primary">23%</span>
      </div>
      <div className="h-12 flex items-end gap-0.5">
        {[40, 55, 35, 70, 45, 60, 30, 50].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary"
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
          </motion.div>

          {/* Projects Grid - Bento style like ExamAi */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${project.highlight ? 'lg:col-span-2' : ''}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-2xl bg-card/80 border backdrop-blur-sm transition-all duration-500 h-full overflow-hidden hover:shadow-elevated ${
                    project.highlight ? 'border-primary/30' : 'border-border/50 hover:border-primary/30'
                  }`}
                >
                  {/* Gradient top bar for highlighted project */}
                  {project.highlight && (
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-pink" />
                  )}
                  
                  <div className="p-6 md:p-8">
                    <div className={`flex flex-col ${project.highlight ? 'lg:flex-row lg:items-start' : ''} gap-6`}>
                      {/* Icon */}
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300 shrink-0 w-fit"
                      >
                        <project.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            {project.link && (
                              <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </motion.a>
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
                            <motion.span
                              key={tag}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/80 border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/80 transition-all duration-300"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Preview mockup */}
                      <div className={`shrink-0 ${project.highlight ? 'hidden lg:block w-64' : 'w-full lg:w-48'}`}>
                        <PreviewMockup type={project.preview} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/BrandonBienvenu" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Voir sur GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
