import { ChevronDown, MapPin, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./AnimatedBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float-reverse opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink/5 rounded-full blur-[80px] animate-float opacity-30" style={{ animationDelay: '-2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              ~/home/<span className="text-foreground">brandon</span>
              <span className="terminal-cursor text-primary">_</span>
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up stagger-1">
            Construire des infrastructures{" "}
            <span className="text-gradient">sécurisées</span>,{" "}
            <br className="hidden md:block" />
            <span className="text-foreground/90">un système à la fois</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-fade-in-up stagger-2 max-w-2xl mx-auto">
            Futur administrateur systèmes passionné par la{" "}
            <span className="text-foreground font-medium">cybersécurité</span> et{" "}
            <span className="text-foreground font-medium">l'infrastructure IT</span>
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 animate-fade-in-up stagger-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/30 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Reims, France</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/30 backdrop-blur-sm">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">BAC PRO CIEL — Lycée G. Brière</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">+300h de pratique homelab</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-4">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#projects">
                Voir mes projets
                <ChevronDown className="h-5 w-5 ml-1 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
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
