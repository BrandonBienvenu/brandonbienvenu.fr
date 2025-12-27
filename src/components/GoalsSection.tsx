import { Rocket, GitBranch, Server, ArrowRight } from "lucide-react";

export const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes objectifs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une vision claire pour ma carrière dans l'infrastructure IT et la cybersécurité.
            </p>
          </div>

          {/* Goals Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Short-term Goal */}
            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary">Court terme</span>
                  <h3 className="text-xl font-bold">Administrateur Systèmes</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Mon objectif immédiat est de devenir un administrateur systèmes compétent, capable de gérer des infrastructures professionnelles complètes — du déploiement initial à la maintenance et à la montée en charge.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Maîtriser les environnements Linux et Windows Server d'entreprise",
                  "Acquérir de l'expérience avec les pratiques d'infrastructure-as-code",
                  "Développer une expertise en monitoring et réponse aux incidents",
                  "Renforcer mes compétences en documentation et processus",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-term Goal */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary">Long terme</span>
                  <h3 className="text-xl font-bold">Ingénieur DevOps</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Ma vision à long terme est de maîtriser les pratiques DevOps pour automatiser, déployer et maintenir des infrastructures scalables — allier développement et opérations pour des pipelines CI/CD performants.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Maîtriser les outils d'orchestration (Kubernetes, Docker Swarm)",
                  "Implémenter des pipelines CI/CD complets (GitLab CI, Jenkins)",
                  "Automatiser l'infrastructure avec Terraform et Ansible",
                  "Développer une expertise en monitoring et observabilité",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 p-6 rounded-xl bg-secondary/50 border border-border text-center">
            <p className="text-lg italic text-muted-foreground">
              « Les meilleurs administrateurs ne se contentent pas de résoudre les problèmes — ils construisent des systèmes où les problèmes ne peuvent pas survenir. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
