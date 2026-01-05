import { Mail, Github, Linkedin, Send, Quote, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveTerminal } from "./InteractiveTerminal";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
          </motion.div>

          {/* Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <InteractiveTerminal />
          </motion.div>

          {/* Quote Card - Premium glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-pink/20 blur-xl opacity-30" />
            <motion.div 
              whileHover={{ y: -4, boxShadow: "0 20px 60px hsl(175 80% 50% / 0.15)" }}
              transition={{ duration: 0.3 }}
              className="relative p-8 md:p-10 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-xl"
            >
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
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20 text-center"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 p-4 rounded-xl bg-primary/10 mb-6"
              >
                <Send className="h-6 w-6 text-primary" />
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold mb-3">Envoyez-moi un message</h3>
              
              {/* Microcopy */}
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4 text-primary/60" />
                <span>Discutons d'infrastructure, de sécurité ou de projets techniques.</span>
              </div>
              
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Je suis toujours ouvert aux discussions sur les projets techniques, les stages ou les opportunités d'apprentissage.
              </p>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} id="send-message-btn">
                <Button variant="hero" size="xl" className="mb-8 group shadow-lg" asChild>
                  <a href="mailto:brandonbienvenu1@gmail.com">
                    <Sparkles className="h-5 w-5" />
                    Envoyer un email
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/BrandonBienvenu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-4 rounded-xl bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/brandon-bienvenu-045858348/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-4 rounded-xl bg-secondary/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
