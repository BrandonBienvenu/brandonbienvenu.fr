import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Network, Server, Wifi } from "lucide-react";

const metrics = [
  { label: "CPU", value: "23%", icon: Cpu, color: "primary" },
  { label: "RAM", value: "4.2GB", icon: Activity, color: "accent" },
  { label: "Disk", value: "67%", icon: HardDrive, color: "pink" },
  { label: "Network", value: "1.2Mbps", icon: Network, color: "green" },
];

const servers = [
  { name: "web-server-01", status: "online", uptime: "99.9%" },
  { name: "db-server-01", status: "online", uptime: "99.8%" },
  { name: "fw-pfsense", status: "online", uptime: "100%" },
  { name: "monitoring", status: "online", uptime: "99.7%" },
];

export const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl opacity-50" />
      
      <div className="relative rounded-2xl bg-card/80 border border-border/50 backdrop-blur-xl overflow-hidden shadow-elevated">
        {/* Dashboard header */}
        <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green/70" />
            </div>
            <span className="text-sm font-mono text-muted-foreground">Homelab Dashboard — Grafana</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-green">
            <Wifi className="h-3 w-3" />
            <span>Connecté</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  metric.color === "primary" ? "bg-primary/5 border-primary/20" :
                  metric.color === "accent" ? "bg-accent/5 border-accent/20" :
                  metric.color === "pink" ? "bg-pink/5 border-pink/20" :
                  "bg-green/5 border-green/20"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <metric.icon className={`h-4 w-4 ${
                    metric.color === "primary" ? "text-primary" :
                    metric.color === "accent" ? "text-accent" :
                    metric.color === "pink" ? "text-pink" :
                    "text-green"
                  }`} />
                  <span className="text-xs text-muted-foreground">{metric.label}</span>
                </div>
                <p className={`text-xl font-bold ${
                  metric.color === "primary" ? "text-primary" :
                  metric.color === "accent" ? "text-accent" :
                  metric.color === "pink" ? "text-pink" :
                  "text-green"
                }`}>{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart mockup */}
          <div className="mb-6 p-4 rounded-xl bg-background/50 border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Server Requests</span>
              <span className="text-xs text-muted-foreground">Dernières 24h</span>
            </div>
            <div className="h-24 flex items-end gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                  transition={{ duration: 0.5, delay: i * 0.02 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
                />
              ))}
            </div>
          </div>

          {/* Server status */}
          <div className="grid md:grid-cols-2 gap-4">
            {servers.map((server, index) => (
              <motion.div
                key={server.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-mono">{server.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{server.uptime}</span>
                  <span className="flex items-center gap-1.5 text-xs text-green">
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                    {server.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
