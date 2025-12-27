import { ChevronDown, MapPin, GraduationCap, Clock, Shield, Server, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./AnimatedBackground";

const featurePills = [
  { icon: Shield, label: "Sécurité First" },
  { icon: Server, label: "Infrastructure" },
  { icon: Network, label: "Réseaux" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Large gradient orb - like ExamAi's purple/cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-accent/10 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* Secondary orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink/10 rounded-full blur-[100px] animate-float-reverse opacity-40" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Feature pills row - like Devty.io */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up">
            {featurePills.map((pill, index) => (
              <div 
                key={pill.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/60 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-1 rounded-full bg-primary/20">
                  <pill.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{pill.label}</span>
              </div>
            ))}
          </div>

          {/* Main heading with gradient text - like ExamAi/Devty */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up stagger-1 leading-tight">
            Construire des infrastructures{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-hero">sécurisées</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-10 animate-fade-in-up stagger-2 max-w-3xl mx-auto leading-relaxed">
            Futur administrateur systèmes passionné par la{" "}
            <span className="text-foreground font-medium">cybersécurité</span> et{" "}
            <span className="text-foreground font-medium">l'infrastructure IT</span>
          </p>

          {/* CTA Buttons - like ReelsBuilder dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up stagger-3">
            <Button variant="hero" size="xl" className="group min-w-[200px]" asChild>
              <a href="#projects">
                <Sparkles className="h-5 w-5" />
                Voir mes projets
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          {/* Feature checkmarks - like ReelsBuilder */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 animate-fade-in-up stagger-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>+300h de pratique</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Homelab personnel</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Sécurité-first</span>
            </div>
          </div>

          {/* Stat counters - like Devty.io/ReelsBuilder */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up stagger-5">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">Reims</p>
                <p className="text-xs text-muted-foreground">France</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
              <GraduationCap className="h-5 w-5 text-accent" />
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">BAC PRO</p>
                <p className="text-xs text-muted-foreground">CIEL — Lycée G. Brière</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-lg font-bold text-primary">300+</p>
                <p className="text-xs text-muted-foreground">Heures de pratique</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI cards - like ExamAi mockups */}
      <div className="absolute top-1/4 left-[5%] hidden xl:block animate-float opacity-80">
        <div className="p-4 rounded-xl bg-card/80 border border-border/50 backdrop-blur-xl shadow-elevated w-48">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Server className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-16 bg-muted rounded" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-muted/50 rounded" />
            <div className="h-2 w-3/4 bg-muted/50 rounded" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-[5%] hidden xl:block animate-float-reverse opacity-80" style={{ animationDelay: '-2s' }}>
        <div className="p-4 rounded-xl bg-card/80 border border-border/50 backdrop-blur-xl shadow-elevated w-52">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-green font-medium">ACTIF</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Network className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium">Homelab</p>
              <p className="text-xs text-muted-foreground">5 VMs actives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 animate-fade-in stagger-6 group"
      >
        <span className="text-xs font-mono tracking-wider uppercase">défiler</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
};
