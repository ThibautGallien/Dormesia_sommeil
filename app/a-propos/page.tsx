import { Moon, Heart, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'À propos - Dormesia',
  description: 'Découvrez la mission de Dormesia et notre engagement à vous aider à retrouver un sommeil réparateur.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
            <Moon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">À propos de Dormesia</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Votre partenaire pour un sommeil réparateur et une meilleure qualité de vie
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre mission</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Dormesia est né d'un constat simple : le sommeil est l'un des piliers fondamentaux de notre santé,
              pourtant il est souvent négligé dans nos sociétés modernes. Stress, écrans, rythmes effrénés...
              autant de facteurs qui perturbent nos nuits et impactent notre bien-être quotidien.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Notre mission est de démocratiser les connaissances scientifiques sur le sommeil et de rendre
              accessibles des solutions pratiques et naturelles pour améliorer la qualité de vos nuits. Nous
              croyons fermement qu'un sommeil de qualité est à la portée de tous, avec les bons outils et les
              bonnes informations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 rounded-2xl mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Approche scientifique</h3>
              <p className="text-slate-600 leading-relaxed">
                Tous nos conseils sont basés sur des recherches scientifiques reconnues et des
                études validées dans le domaine du sommeil et de la chronobiologie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 rounded-2xl mb-4">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Solutions naturelles</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous privilégions les approches douces et naturelles : hygiène de vie, relaxation,
                nutrition, avant toute solution médicamenteuse.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 rounded-2xl mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accessibilité</h3>
              <p className="text-slate-600 leading-relaxed">
                Nos contenus sont rédigés dans un langage clair et accessible à tous, sans jargon
                médical complexe, pour que chacun puisse améliorer son sommeil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ce que nous proposons</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Articles de fond</h3>
                <p className="text-slate-600 leading-relaxed">
                  Des guides complets sur tous les aspects du sommeil : cycles, nutrition, relaxation,
                  troubles du sommeil, et bien plus encore.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Conseils pratiques</h3>
                <p className="text-slate-600 leading-relaxed">
                  Des techniques concrètes et immédiatement applicables pour améliorer votre
                  routine de sommeil et votre hygiène de vie.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Informations validées</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nous nous appuyons exclusivement sur des sources fiables : études scientifiques,
                  recommandations d'organismes de santé reconnus, et expertise médicale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez-nous dans cette aventure</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Dormesia est bien plus qu'un simple site d'information. C'est une communauté de personnes
            qui ont décidé de prendre leur sommeil au sérieux et de retrouver des nuits réparatrices.
            Explorez nos articles, testez nos conseils, et transformez votre relation au sommeil.
          </p>
          <a
            href="/articles"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-xl"
          >
            Découvrir nos articles
          </a>
        </div>
      </section>
    </div>
  );
}
