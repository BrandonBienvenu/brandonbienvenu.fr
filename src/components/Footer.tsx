import { Terminal, Heart, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand monogram */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-display font-bold text-primary">BB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-medium text-foreground">brandon_bienvenu</span>
                <span className="font-mono text-xs text-muted-foreground">© {currentYear}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Center text */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center flex items-center gap-1"
          >
            Construit avec <Heart className="h-3 w-3 text-primary inline animate-pulse" /> pour l'infrastructure & la sécurité
          </motion.p>

          {/* Social links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/BrandonBienvenu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/brandon-bienvenu-045858348/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
