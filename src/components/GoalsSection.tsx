import { Rocket, GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

const milestones = [
  { year: "2025", icon: GraduationCap, title: "Terminer le Secondaire", description: "Obtention du BAC PRO CIEL", status: "current" },
  { year: "2026", icon: Award, title: "Certifications", description: "CompTIA A+, Network+, Security+", status: "upcoming" },
  { year: "2027", icon: BookOpen, title: "Études Supérieures", description: "Formation spécialisée en cybersécurité", status: "upcoming" },
  { year: "2030+", icon: Briefcase, title: "Carrière en Cybersécurité", description: "Ingénieur DevOps / Sécurité", status: "future" },
];

export const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-terminal justify-center mb-4">
              <span className="text-primary">cat roadmap.md</span>
            </div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Mes objectifs</h2>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
              Une vision claire pour ma carrière dans l'infrastructure IT et la cybersécurité.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-center gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    milestone.status === 'current' ? 'bg-primary border-primary shadow-glow' : 'bg-background border-primary/50'
                  }`} />
                  
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className={`p-6 rounded-2xl card-glass border ${milestone.status === 'current' ? 'border-primary/30' : 'border-border/50'}`}>
                      <span className="text-primary font-mono text-sm">{milestone.year}</span>
                      <h3 className="font-display font-semibold text-lg mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{milestone.description}</p>
                    </div>
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
