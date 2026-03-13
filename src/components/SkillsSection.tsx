import { useState } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

import ubuntuLogo from "@/assets/logos/ubuntu.webp";
import linuxLogo from "@/assets/logos/linux.webp";
import grafanaLogo from "@/assets/logos/grafana-new.webp"; // use real webp instead of empty png
import luaLogo from "@/assets/logos/lua.webp";
import puttyLogo from "@/assets/logos/putty-real.webp"; // actual PuTTY asset
import powershellLogo from "@/assets/logos/335911.webp"; // actual PowerShell logo file
import ciscoLogo from "@/assets/logos/cisco-real.webp"; // actual Cisco asset
import adLogo from "@/assets/logos/active-directory.webp";
import dockerLogo from "@/assets/logos/docker.png";
import elasticsearchLogo from "@/assets/logos/elasticsearch.webp";
import bashLogo from "@/assets/logos/bash.webp";
import gitLogo from "@/assets/logos/git.png";
import virtualboxLogo from "@/assets/logos/virtualbox.webp";
import nodejsLogo from "@/assets/logos/nodejs.webp";
import prometheusLogo from "@/assets/logos/prometheus.webp";
import teratermLogo from "@/assets/logos/tera-term-screenshot.png";
import proxmoxLogo from "@/assets/logos/573-5731000_proxmox-proxmox-logo-hd-png-download.png";
import portainerLogo from "@/assets/logos/portainer-original.png";

const skills = [
  { name: "Ubuntu", src: ubuntuLogo },
  { name: "Linux", src: linuxLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Git", src: gitLogo },
  { name: "Bash", src: bashLogo },
  { name: "PuTTY", src: puttyLogo },
  { name: "Grafana", src: grafanaLogo },
  { name: "Prometheus", src: prometheusLogo },
  { name: "Lua", src: luaLogo },
  { name: "Active Directory", src: adLogo },
  { name: "Elasticsearch", src: elasticsearchLogo },
  { name: "VirtualBox", src: virtualboxLogo },
  { name: "Node.js", src: nodejsLogo },
  { name: "PowerShell", src: powershellLogo },
  { name: "Cisco", src: ciscoLogo },
  { name: "Tera Term", src: teratermLogo },
  { name: "Proxmox", src: proxmoxLogo },
  { name: "Portainer", src: portainerLogo },
];

const LogoItem = ({ name, src }: { name: string; src: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 flex items-center justify-center h-14 w-20 md:h-16 md:w-24 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-card/95 border border-primary/30 text-primary text-[11px] font-mono whitespace-nowrap z-20 pointer-events-none shadow-lg backdrop-blur-sm">
          {name}
        </div>
      )}
      <img
        src={src}
        alt={name}
        className={"max-h-full max-w-full object-contain select-none " + (name === "Cisco" ? "opacity-50" : "")}
        onError={(e) => {
          // if logo fails to load, fall back to transparent pixel
          e.currentTarget.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
        }}
        style={{
          filter: hovered ? "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))" : "none",
          transition: "filter 0.2s ease",
        }}
        draggable={false}
      />
    </div>
  );
};

export const SkillsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
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
            Arsenal{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-primary via-accent to-pink bg-[length:200%_auto] bg-clip-text text-transparent">
              Technique
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une base solide construite par la pratique, l'expérimentation en homelab et l'apprentissage continu.
          </p>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            // conveyor belt speed bumped to 15s per cycle as requested
            animation: "marquee 15s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-8 md:gap-14 px-4 md:px-7">
              {skills.map((skill) => (
                <LogoItem key={`${setIndex}-${skill.name}`} name={skill.name} src={skill.src} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
