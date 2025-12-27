import { User, Target, Lightbulb, Shield, Sparkles } from "lucide-react";

const traits = [
  {
    icon: Target,
    title: "Discipline",
    description: "J'aborde chaque projet avec structure et rigueur, en documentant mon travail et en suivant les standards professionnels.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Curiosité",
    description: "Je suis animé par le désir de comprendre en profondeur comment les choses fonctionnent — pas seulement comment les utiliser.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Esprit Sécurité",
    description: "Je pense comme un attaquant pour construire comme un défenseur. La sécurité n'est pas une réflexion après coup — c'est le fondement.",
    color: "pink",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="section-terminal mb-4">
              <span className="text-primary">whoami</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 glow-subtle">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">À propos</h2>
            </div>
          </div>

          {/* Main Bio Card */}
          <div className="relative mb-16 animate-fade-in-up stagger-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50" />
            <div className="relative p-8 md:p-10 rounded-2xl card-glass border border-border/50">
              <div className="absolute top-4 right-4">
                <Sparkles className="h-5 w-5 text-primary/50" />
              </div>
              <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
                <p>
                  Je suis <span className="text-foreground font-semibold">Brandon Bienvenu</span>, un futur administrateur systèmes et passionné de cybersécurité de 16 ans, basé à <span className="text-primary">Reims, France</span>. Actuellement en BAC PRO CIEL au Lycée Georges Brière, je consacre mon temps libre et mes études à maîtriser les fondamentaux de la gestion d'infrastructures IT.
                </p>
                <p>
                  Mon approche de l'apprentissage est <span className="text-foreground font-medium">pratique</span>. Je n'étudie pas seulement les systèmes — <span className="text-primary">je les construis</span>. À travers mon environnement homelab, j'ai configuré et sécurisé des serveurs Linux, déployé des services d'entreprise comme Active Directory et DHCP, et pratiqué les workflows quotidiens des administrateurs systèmes.
                </p>
                <p>
                  Ce qui me distingue, ce n'est pas seulement la compétence technique — c'est un <span className="text-gradient font-semibold">état d'esprit orienté sécurité</span>. Je crois que comprendre comment les systèmes peuvent échouer ou être compromis est essentiel pour construire des infrastructures qui fonctionnent vraiment.
                </p>
              </div>
            </div>
          </div>

          {/* Trait Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <div
                key={trait.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl ${
                  trait.color === 'primary' ? 'bg-primary/20' :
                  trait.color === 'accent' ? 'bg-accent/20' :
                  'bg-pink/20'
                } blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl w-fit mb-5 ${
                    trait.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                    trait.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                    'bg-pink/10 group-hover:bg-pink/20'
                  } transition-colors duration-300`}>
                    <trait.icon className={`h-6 w-6 ${
                      trait.color === 'primary' ? 'text-primary' :
                      trait.color === 'accent' ? 'text-accent' :
                      'text-pink'
                    }`} />
                  </div>
                  
                  {/* Title with status indicator */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display font-semibold text-lg">{trait.title}</h3>
                    <span className={`w-2 h-2 rounded-full ${
                      trait.color === 'primary' ? 'bg-primary' :
                      trait.color === 'accent' ? 'bg-accent' :
                      'bg-pink'
                    } animate-pulse`} />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
