import { useEffect, useRef } from "react";

const tools = [
  { name: "Ubuntu", type: "distro" },
  { name: "Debian", type: "distro" },
  { name: "CentOS", type: "distro" },
  { name: "Rocky Linux", type: "distro" },
  { name: "Arch Linux", type: "distro" },
  { name: "Fedora", type: "distro" },
  { name: "Alpine", type: "distro" },
  { name: "Kali Linux", type: "distro" },
  { name: "Docker", type: "tool" },
  { name: "Ansible", type: "tool" },
  { name: "Nginx", type: "tool" },
  { name: "Apache", type: "tool" },
  { name: "Git", type: "tool" },
  { name: "Vim", type: "tool" },
  { name: "Bash", type: "tool" },
  { name: "SSH", type: "tool" },
  { name: "fail2ban", type: "tool" },
  { name: "iptables", type: "tool" },
  { name: "systemd", type: "tool" },
  { name: "Proxmox", type: "tool" },
  { name: "VirtualBox", type: "tool" },
  { name: "VMware", type: "tool" },
  { name: "Wireshark", type: "tool" },
  { name: "Nmap", type: "tool" },
  { name: "Grafana", type: "tool" },
  { name: "Prometheus", type: "tool" },
  { name: "Active Directory", type: "tool" },
  { name: "DHCP", type: "protocol" },
  { name: "DNS", type: "protocol" },
  { name: "HTTPS", type: "protocol" },
  { name: "VPN", type: "protocol" },
];

export const ToolsMarquee = () => {
  return (
    <div className="py-8 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex shrink-0 gap-6 pr-6">
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap ${
                  tool.type === "distro"
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : tool.type === "protocol"
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-secondary border-border text-foreground"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                <span className="font-mono text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 gap-6 pr-6">
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap ${
                  tool.type === "distro"
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : tool.type === "protocol"
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-secondary border-border text-foreground"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                <span className="font-mono text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
