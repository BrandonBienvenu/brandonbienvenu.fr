import { ChevronDown, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/home/brandon<span className="terminal-cursor">_</span>
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Brandon{" "}
            <span className="text-gradient">Bienvenu</span>
          </h1>

          {/* Identity Statement */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Construire des infrastructures sécurisées,{" "}
            <span className="text-foreground font-medium">un système à la fois</span>
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>France</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>BAC PRO CIEL – Lycée Georges Brière</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <span className="text-xs font-mono">défiler</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};
