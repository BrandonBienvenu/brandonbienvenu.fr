import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, HardDrive, Network, Server, Wifi, X, TrendingUp, TrendingDown } from "lucide-react";

const metrics = [
  { 
    label: "CPU", 
    value: "23%", 
    numValue: 23,
    icon: Cpu, 
    color: "primary",
    details: {
      usage: "23%",
      cores: "4 cores",
      temperature: "45°C",
      processes: "127 actifs",
      topProcess: "nginx (4.2%)"
    }
  },
  { 
    label: "RAM", 
    value: "4.2GB", 
    numValue: 52,
    icon: Activity, 
    color: "accent",
    details: {
      used: "4.2 GB",
      total: "8 GB",
      cached: "1.8 GB",
      available: "3.8 GB",
      swap: "0 MB"
    }
  },
  { 
    label: "DISK", 
    value: "67%", 
    numValue: 67,
    icon: HardDrive, 
    color: "pink",
    details: {
      used: "134 GB",
      total: "200 GB",
      read: "12 MB/s",
      write: "3.4 MB/s",
      iops: "1,240"
    }
  },
  { 
    label: "NETWORK", 
    value: "1.2MB/s", 
    numValue: 45,
    icon: Network, 
    color: "green",
    details: {
      download: "1.2 MB/s",
      upload: "0.4 MB/s",
      latency: "12ms",
      packets: "4,521/s",
      connections: "48 actives"
    }
  },
];

const servers = [
  { name: "web-server-01", status: "online", uptime: "99.9%" },
  { name: "db-server-01", status: "online", uptime: "99.8%" },
  { name: "fw-pfsense", status: "online", uptime: "100%" },
  { name: "monitoring", status: "online", uptime: "99.7%" },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    bar: "bg-primary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    bar: "bg-accent",
  },
  pink: {
    bg: "bg-pink/10",
    border: "border-pink/30",
    text: "text-pink",
    bar: "bg-pink",
  },
  green: {
    bg: "bg-green/10",
    border: "border-green/30",
    text: "text-green",
    bar: "bg-green",
  },
};

export const DashboardPreview = () => {
  const [selectedMetric, setSelectedMetric] = useState<typeof metrics[0] | null>(null);

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
          {/* Task Manager Style Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, index) => {
              const colors = colorClasses[metric.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMetric(metric)}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    boxShadow: `0 10px 30px -10px hsl(var(--${metric.color}) / 0.3)`
                  }}
                  className={`p-4 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-200 ${colors.bg} ${colors.border}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <metric.icon className={`h-4 w-4 ${colors.text}`} />
                      <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                    </div>
                    <TrendingUp className={`h-3 w-3 ${colors.text} opacity-60`} />
                  </div>
                  <p className={`text-2xl font-bold mb-2 ${colors.text}`}>{metric.value}</p>
                  <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.numValue}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full ${colors.bar}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Metric Detail Modal */}
          <AnimatePresence>
            {selectedMetric && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mb-6 p-6 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${colorClasses[selectedMetric.color as keyof typeof colorClasses].bg}`}>
                      <selectedMetric.icon className={`h-5 w-5 ${colorClasses[selectedMetric.color as keyof typeof colorClasses].text}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedMetric.label} Monitor</h3>
                      <p className="text-xs text-muted-foreground">Détails en temps réel</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMetric(null)}
                    className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(selectedMetric.details).map(([key, value], i) => (
                    <div key={key} className="p-3 rounded-lg bg-secondary/30 border border-border/30">
                      <p className="text-xs text-muted-foreground capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className={`text-sm font-semibold ${colorClasses[selectedMetric.color as keyof typeof colorClasses].text}`}>{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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