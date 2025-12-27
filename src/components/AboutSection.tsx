import { User, Target, Lightbulb, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">À propos</h2>
          </div>

          {/* Main Bio */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Je suis <span className="text-foreground font-medium">Brandon Bienvenu</span>, un futur administrateur systèmes et passionné de cybersécurité de 16 ans, basé en France. Actuellement en BAC PRO CIEL au Lycée Georges Brière, je consacre mon temps libre et mes études à maîtriser les fondamentaux de la gestion d'infrastructures IT.
            </p>
            <p>
              Mon approche de l'apprentissage est pratique. Je n'étudie pas seulement les systèmes — je les construis. À travers mon environnement homelab, j'ai configuré et sécurisé des serveurs Linux, déployé des services d'entreprise comme Active Directory et DHCP, et pratiqué les workflows quotidiens des administrateurs systèmes : documentation, gestion de versions et suivi méthodique des changements.
            </p>
            <p>
              Ce qui me distingue, ce n'est pas seulement la compétence technique — c'est un <span className="text-foreground font-medium">état d'esprit orienté sécurité</span>. Je crois que comprendre comment les systèmes peuvent échouer ou être compromis est essentiel pour construire des infrastructures qui fonctionnent vraiment. Chaque service que je déploie, chaque configuration que j'écris, est réalisé avec les considérations de sécurité au premier plan.
            </p>
          </div>

          {/* Key Traits */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Discipline</h3>
              <p className="text-sm text-muted-foreground">
                J'aborde chaque projet avec structure et rigueur, en documentant mon travail et en suivant les standards professionnels.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Curiosité</h3>
              <p className="text-sm text-muted-foreground">
                Je suis animé par le désir de comprendre en profondeur comment les choses fonctionnent — pas seulement comment les utiliser.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Esprit sécurité</h3>
              <p className="text-sm text-muted-foreground">
                Je pense comme un attaquant pour construire comme un défenseur. La sécurité n'est pas une réflexion après coup — c'est le fondement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
