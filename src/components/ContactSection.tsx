import { Mail, Github, Linkedin, Send, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="section-terminal justify-center mb-6">
            <span className="text-primary">./contact.sh</span>
          </div>
          
          <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6 animate-glow-pulse">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Prenons contact</h2>
          <p className="text-muted-foreground text-body-lg mb-8">
            Intéressé pour discuter d'infrastructure IT, de pratiques de sécurité ou d'opportunités potentielles ?
          </p>

          {/* Quote */}
          <div className="relative p-6 rounded-2xl card-glass border border-border/50 mb-10">
            <Quote className="h-8 w-8 text-primary/30 absolute top-4 left-4" />
            <p className="text-lg italic text-muted-foreground pt-4">
              "La meilleure façon de prédire l'avenir est de le construire."
            </p>
            <p className="text-sm text-primary mt-2">— Alan Kay</p>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" className="mb-10" asChild>
            <a href="mailto:contact@brandonbienvenu.dev">
              <Send className="h-5 w-5" />
              Envoyer un email
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/BrandonBienvenu" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm transition-all duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/brandon-bienvenu-045858348/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
