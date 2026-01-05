import { User, Target, Lightbulb, Shield, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const traits = [
  {
    icon: Target,
    title: "Discipline",
    description: "J'aborde chaque projet avec structure et rigueur, en documentant mon travail et en suivant les standards professionnels.",
    color: "primary" as const,
    gradient: "from-primary/20 to-cyan/20",
  },
  {
    icon: Lightbulb,
    title: "Curiosité",
    description: "Je suis animé par le désir de comprendre en profondeur comment les choses fonctionnent — pas seulement comment les utiliser.",
    color: "accent" as const,
    gradient: "from-accent/20 to-purple/20",
  },
  {
    icon: Shield,
    title: "Esprit Sécurité",
    description: "J'adopte une vision offensive pour mieux défendre. La sécurité est intégrée dès la conception.",
    color: "pink" as const,
    gradient: "from-pink/20 to-accent/20",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects - Enhanced with grid and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-pink/5 rounded-full blur-[80px] animate-float" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-[20%] left-[10%] hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card/40 border border-border/30 backdrop-blur-sm animate-float opacity-60">
        <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground">whoami</span>
      </div>
      <div className="absolute bottom-[30%] right-[8%] hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card/40 border border-primary/20 backdrop-blur-sm animate-float-reverse opacity-60">
        <span className="text-xs font-mono text-primary">~/about</span>
      </div>
      <div className="absolute top-[60%] left-[5%] hidden lg:block px-3 py-2 rounded-lg bg-card/40 border border-accent/20 backdrop-blur-sm animate-float opacity-50" style={{ animationDelay: '-2s' }}>
        <span className="text-xs font-mono text-accent">16 ans</span>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - centered like reference sites */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">À propos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Qui suis-je<span className="text-gradient-hero">?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Un passionné d'infrastructure IT avec un état d'esprit sécurité-first.
            </p>
          </div>

          {/* Main Bio Card - Premium glassmorphism */}
          <div className="relative mb-16 animate-fade-in-up stagger-1">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-pink/20 blur-2xl opacity-50" />
            
            <div className="relative p-8 md:p-12 rounded-3xl bg-card/80 border border-border/50 backdrop-blur-xl">
              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">~/whoami</span>
                <Sparkles className="h-4 w-4 text-primary/50" />
              </div>
              
              <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Je m'appelle <span className="text-foreground font-semibold">Brandon Bienvenu</span>, un futur administrateur systèmes et passionné de cybersécurité de 16 ans, basé à <span className="text-primary font-medium">Reims, France</span>.
                  </p>
                  <p>
                    Actuellement en BAC PRO CIEL au Lycée Georges Brière, je consacre mon temps libre à maîtriser les fondamentaux de la gestion d'infrastructures IT à travers mon <span className="text-foreground font-medium">environnement homelab</span>.
                  </p>
                  <p>
                    Mon approche : <span className="text-gradient font-semibold">j'apprends en construisant</span>. Chaque projet est une opportunité de maîtriser de nouvelles compétences techniques.
                  </p>
                </div>
                
                {/* Stats sidebar */}
                <div className="hidden md:flex flex-col gap-4 pl-8 border-l border-border/50">
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="text-3xl font-bold text-primary">16</p>
                    <p className="text-xs text-muted-foreground">ans</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="text-3xl font-bold text-accent">300+</p>
                    <p className="text-xs text-muted-foreground">heures</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <p className="text-3xl font-bold text-pink">5+</p>
                    <p className="text-xs text-muted-foreground">projets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trait Cards - Premium bento grid style */}
          <div className="grid sm:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <div
                key={trait.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${trait.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full group-hover:-translate-y-1">
                  {/* Icon with ring */}
                  <div className={`relative w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${
                    trait.color === 'primary' ? 'bg-primary/10 ring-1 ring-primary/30' :
                    trait.color === 'accent' ? 'bg-accent/10 ring-1 ring-accent/30' :
                    'bg-pink/10 ring-1 ring-pink/30'
                  }`}>
                    <trait.icon className={`h-7 w-7 ${
                      trait.color === 'primary' ? 'text-primary' :
                      trait.color === 'accent' ? 'text-accent' :
                      'text-pink'
                    }`} />
                    {/* Pulse indicator */}
                    <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                      trait.color === 'primary' ? 'bg-primary' :
                      trait.color === 'accent' ? 'bg-accent' :
                      'bg-pink'
                    } animate-pulse`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {trait.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {trait.description}
                  </p>
                  
                  {/* LinkedIn link on hover */}
                  <a 
                    href="https://www.linkedin.com/in/brandon-bienvenu-045858348/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                  >
                    <span>Voir mon profil</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
