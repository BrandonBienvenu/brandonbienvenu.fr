import { Mail, Github, Linkedin, Send, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Prenons <span className="text-gradient-hero">Contact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Intéressé pour discuter d'infrastructure IT, de pratiques de sécurité ou d'opportunités potentielles ?
            </p>
          </div>

          {/* Quote Card - Premium glassmorphism */}
          <div className="relative mb-12 animate-fade-in-up stagger-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-pink/20 blur-xl opacity-30" />
            <div className="relative p-8 md:p-10 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xl">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-xl md:text-2xl font-display italic text-foreground/90 mb-4 leading-relaxed">
                "La meilleure façon de prédire l'avenir est de le construire."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">AK</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Alan Kay</p>
                  <p className="text-sm text-muted-foreground">Pionnier de l'informatique</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative animate-fade-in-up stagger-2">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl opacity-50" />
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 text-center">
              <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-primary/10 mb-6 animate-glow-pulse">
                <Send className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3">Envoyez-moi un message</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Je suis toujours ouvert aux discussions sur les projets techniques, les stages ou les opportunités d'apprentissage.
              </p>
              
              <Button variant="hero" size="xl" className="mb-8 group" asChild>
                <a href="mailto:contact@brandonbienvenu.dev">
                  <Sparkles className="h-5 w-5" />
                  Envoyer un email
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://github.com/BrandonBienvenu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-4 rounded-xl bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/brandon-bienvenu-045858348/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-4 rounded-xl bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
