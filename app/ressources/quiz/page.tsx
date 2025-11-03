// app/ressources/quiz/page.tsx
import { HelpCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import dynamique du composant client
const SleepQuiz = dynamic(() => import('@/components/SleepQuiz'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-8 bg-slate-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-16 bg-slate-200 rounded-xl"></div>
          <div className="h-16 bg-slate-200 rounded-xl"></div>
          <div className="h-16 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
});

export const metadata = {
  title: 'Quiz Sommeil - Évaluez votre profil de dormeur | Dormesia',
  description: 'Découvrez votre profil de dormeur en 2 minutes et recevez des conseils personnalisés pour améliorer votre sommeil.',
};

export default function QuizPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Quel est votre profil de dormeur ?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Répondez à 5 questions rapides pour découvrir votre profil et recevoir des conseils personnalisés
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <span>2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <span>Conseils personnalisés</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SleepQuiz />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Pourquoi connaître votre profil ?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Comprendre votre profil de dormeur vous permet de cibler les solutions les plus adaptées à votre situation
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">Conseils ciblés</h3>
              <p className="text-slate-600">
                Recevez des recommandations spécifiques à votre profil
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Résultats rapides</h3>
              <p className="text-slate-600">
                Concentrez-vous sur ce qui fonctionne vraiment pour vous
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-slate-900 mb-2">Suivi personnalisé</h3>
              <p className="text-slate-600">
                Mesurez vos progrès avec un plan adapté à vos besoins
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}