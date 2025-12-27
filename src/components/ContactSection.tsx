import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20 mb-6">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prenons contact</h2>
          <p className="text-muted-foreground mb-10">
            Intéressé pour discuter d'infrastructure IT, de pratiques de sécurité ou d'opportunités potentielles ? Je suis toujours ouvert à échanger avec des professionnels partageant les mêmes idées et à apprendre des administrateurs expérimentés.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:contact@brandonbienvenu.dev">
                <Send className="h-5 w-5" />
                Envoyer un email
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/BrandonBienvenu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-bienvenu-045858348/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
