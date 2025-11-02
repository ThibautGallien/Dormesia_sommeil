// app/page.tsx
import Link from 'next/link';
import { Moon, Brain, Heart, Sparkles, Clock, BookOpen, Gift, TrendingUp, Users } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/articles';
import SleepQuiz from '@/components/SleepQuiz';

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div>
      {/* Hero Section améliorée */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full mb-6">
            <Moon className="h-5 w-5" />
            <span className="text-sm font-medium">Approche scientifique & naturelle</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Redécouvrez le plaisir
            <br />
            <span className="text-slate-600">de bien dormir</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Des conseils scientifiques, des techniques éprouvées et des ressources pratiques pour transformer vos nuits et améliorer votre qualité de vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ressources/guide-gratuit"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Gift className="h-5 w-5" />
              Télécharger le guide gratuit
            </Link>
            <Link
              href="/ressources/quiz"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 inline-flex items-center justify-center gap-2"
            >
              Faire le quiz
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span><strong>1000+</strong> lecteurs</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span><strong>85%</strong> d'amélioration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Science du sommeil</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprenez les mécanismes du sommeil et ses cycles
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Solutions naturelles</h3>
              <p className="text-slate-600 leading-relaxed">
                Sans médicaments, approches douces et efficaces
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Techniques pratiques</h3>
              <p className="text-slate-600 leading-relaxed">
                Des méthodes concrètes applicables dès ce soir
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Routines saines</h3>
              <p className="text-slate-600 leading-relaxed">
                Établissez des habitudes durables et bénéfiques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Quel est votre profil de dormeur ?
            </h2>
            <p className="text-xl text-slate-600">
              Découvrez votre profil en 2 minutes et recevez des conseils personnalisés
            </p>
          </div>
          <SleepQuiz />
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Articles populaires</h2>
            <p className="text-xl text-slate-600">
              Nos derniers conseils pour améliorer votre sommeil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold text-lg hover:gap-3 transition-all"
            >
              <span>Voir tous les articles</span>
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Moon className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à transformer vos nuits ?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Recevez gratuitement notre guide avec 7 techniques scientifiques pour vous endormir rapidement.
          </p>
          <Link
            href="/ressources/guide-gratuit"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-xl"
          >
            <Gift className="h-5 w-5" />
            Télécharger le guide gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}