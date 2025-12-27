import { Terminal, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm">
              © {currentYear} Brandon Bienvenu
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            Construit avec <Heart className="h-3 w-3 text-primary inline" /> pour l'infrastructure & la sécurité
          </p>
        </div>
      </div>
    </footer>
  );
};
