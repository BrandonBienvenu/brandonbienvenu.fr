import { Rocket, GraduationCap, Award, BookOpen, Briefcase, ChevronRight } from "lucide-react";

const milestones = [
  { 
    year: "2025", 
    icon: GraduationCap, 
    title: "Terminer le Secondaire", 
    description: "Obtention du BAC PRO CIEL avec mention",
    status: "current" as const,
    color: "primary" as const,
  },
  { 
    year: "2026", 
    icon: Award, 
    title: "Certifications", 
    description: "CompTIA A+, Network+, Security+",
    status: "upcoming" as const,
    color: "accent" as const,
  },
  { 
    year: "2027", 
    icon: BookOpen, 
    title: "Études Supérieures", 
    description: "Formation spécialisée en cybersécurité",
    status: "upcoming" as const,
    color: "pink" as const,
  },
  { 
    year: "2030+", 
    icon: Briefcase, 
    title: "Carrière Pro", 
    description: "Ingénieur DevOps / Sécurité",
    status: "future" as const,
    color: "green" as const,
  },
];

export const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 border border-green/30 mb-6">
              <Rocket className="h-4 w-4 text-green" />
              <span className="text-sm font-medium text-green">Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Mes <span className="text-gradient-green">Objectifs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une vision claire pour ma carrière dans l'infrastructure IT et la cybersécurité.
            </p>
          </div>

          {/* Timeline - Horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Desktop horizontal timeline */}
            <div className="hidden md:block">
              {/* Progress bar */}
              <div className="absolute top-[60px] left-0 right-0 h-1 bg-border rounded-full">
                <div className="h-full w-1/4 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year} 
                    className="relative animate-fade-in-up pt-20"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Node */}
                    <div className={`absolute top-[52px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                      milestone.status === 'current' 
                        ? 'bg-primary border-primary shadow-glow animate-pulse' 
                        : 'bg-background border-border'
                    }`} />
                    
                    {/* Card */}
                    <div className={`group p-6 rounded-2xl bg-card/80 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                      milestone.status === 'current' 
                        ? 'border-primary/40 shadow-glow-sm' 
                        : 'border-border/50 hover:border-primary/30'
                    }`}>
                      {/* Year badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                        milestone.color === 'primary' ? 'bg-primary/10 text-primary' :
                        milestone.color === 'accent' ? 'bg-accent/10 text-accent' :
                        milestone.color === 'pink' ? 'bg-pink/10 text-pink' :
                        'bg-green/10 text-green'
                      }`}>
                        {milestone.year}
                      </span>
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                        milestone.color === 'primary' ? 'bg-primary/10' :
                        milestone.color === 'accent' ? 'bg-accent/10' :
                        milestone.color === 'pink' ? 'bg-pink/10' :
                        'bg-green/10'
                      }`}>
                        <milestone.icon className={`h-6 w-6 ${
                          milestone.color === 'primary' ? 'text-primary' :
                          milestone.color === 'accent' ? 'text-accent' :
                          milestone.color === 'pink' ? 'text-pink' :
                          'text-green'
                        }`} />
                      </div>
                      
                      <h3 className="font-display font-bold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      
                      {milestone.status === 'current' && (
                        <div className="mt-4 flex items-center gap-2 text-xs text-primary font-medium">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          En cours
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile vertical timeline */}
            <div className="md:hidden space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Line and node */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full shrink-0 ${
                      milestone.status === 'current' 
                        ? 'bg-primary shadow-glow' 
                        : 'bg-border'
                    }`} />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  
                  {/* Card */}
                  <div className={`flex-1 p-5 rounded-xl bg-card/80 border ${
                    milestone.status === 'current' ? 'border-primary/40' : 'border-border/50'
                  }`}>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${
                      milestone.color === 'primary' ? 'bg-primary/10 text-primary' :
                      milestone.color === 'accent' ? 'bg-accent/10 text-accent' :
                      milestone.color === 'pink' ? 'bg-pink/10 text-pink' :
                      'bg-green/10 text-green'
                    }`}>
                      {milestone.year}
                    </span>
                    <h3 className="font-display font-bold mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
