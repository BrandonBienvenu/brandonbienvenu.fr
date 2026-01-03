import { useState, useEffect } from "react";
import { ChevronDown, MapPin, GraduationCap, Clock, Shield, Server, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./AnimatedBackground";
import { DashboardPreview } from "./DashboardPreview";
import { motion } from "framer-motion";

const AnimatedGradientName = () => {
  return (
    <span className="inline-block animate-gradient-shift bg-gradient-to-r from-primary via-accent to-pink bg-[length:200%_auto] bg-clip-text text-transparent">
      Bienvenu
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

          {/* Main heading with gradient name */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Brandon <AnimatedGradientName />
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Futur administrateur systèmes passionné par la{" "}
            <span className="text-foreground font-medium">cybersécurité</span> et{" "}
            <span className="text-foreground font-medium">l'infrastructure IT</span>
          </motion.p>

          {/* CTA Buttons - like ReelsBuilder dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button variant="hero" size="xl" className="group min-w-[200px]" asChild>
              <a href="#projects">
                <Sparkles className="h-5 w-5" />
                Voir mes projets
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </motion.div>

          {/* Feature checkmarks - like ReelsBuilder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12"
          >
            {["+300h de pratique", "Homelab personnel", "Sécurité-first"].map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat counters - like Devty.io/ReelsBuilder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">Reims</p>
                <p className="text-xs text-muted-foreground">France</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <GraduationCap className="h-5 w-5 text-accent" />
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">BAC PRO</p>
                <p className="text-xs text-muted-foreground">CIEL — Lycée G. Brière</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-lg font-bold text-primary">300+</p>
                <p className="text-xs text-muted-foreground">Heures de pratique</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </div>

      {/* Floating UI cards - Multiple elements */}
      {/* Server Card - Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-[20%] left-[3%] hidden xl:block animate-float"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-4 rounded-xl bg-card/80 border border-border/50 backdrop-blur-xl shadow-elevated w-48"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Server className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">Proxmox VE</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green">Actif</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">CPU</span>
              <span className="text-primary">24%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-primary rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Homelab Card - Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute top-[18%] right-[3%] hidden xl:block animate-float-reverse"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-4 rounded-xl bg-card/80 border border-border/50 backdrop-blur-xl shadow-elevated w-52"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-xs text-green font-medium">Actif</span>
            </div>
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
        </motion.div>
      </motion.div>

      {/* Active Directory Card - Middle Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute top-[45%] left-[2%] hidden xl:block animate-float"
        style={{ animationDelay: '-3s' }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-3 rounded-xl bg-card/80 border border-accent/30 backdrop-blur-xl shadow-elevated w-44"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
              <Shield className="w-3 h-3 text-accent" />
            </div>
            <span className="text-xs font-medium text-foreground">Active Directory</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green">Actif</span>
          </div>
        </motion.div>
      </motion.div>

      {/* pfSense Card - Middle Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-[50%] right-[2%] hidden xl:block animate-float-reverse"
        style={{ animationDelay: '-1s' }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-3 rounded-xl bg-card/80 border border-green/30 backdrop-blur-xl shadow-elevated w-44"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-green/20 flex items-center justify-center">
              <Network className="w-3 h-3 text-green" />
            </div>
            <span className="text-xs font-medium text-foreground">VPN IPsec</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green">Actif</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Monitoring Card - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-[25%] left-[5%] hidden xl:block animate-float"
        style={{ animationDelay: '-4s' }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-3 rounded-xl bg-card/80 border border-pink/30 backdrop-blur-xl shadow-elevated w-40"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-pink/20 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-pink" />
              </div>
              <span className="text-xs font-medium text-foreground">Grafana</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green">Actif</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-pink">67%</p>
            <p className="text-xs text-muted-foreground">CPU</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Docker Card - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute bottom-[28%] right-[5%] hidden xl:block animate-float-reverse"
        style={{ animationDelay: '-2s' }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-3 rounded-xl bg-card/80 border border-primary/30 backdrop-blur-xl shadow-elevated w-40"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                <Server className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">Docker</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green">Actif</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">8 conteneurs</p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
      >
        <span className="text-xs font-mono tracking-wider uppercase">défiler</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
};
