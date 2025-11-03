// app/ressources/calculateur/page.tsx
import { Calculator } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import dynamique du composant client
const SleepCalculator = dynamic(() => import('@/components/SleepCalculator'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-16 bg-slate-200 rounded-xl"></div>
        <div className="h-32 bg-slate-200 rounded-xl"></div>
        <div className="h-12 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  )
});

export const metadata = {
  title: 'Calculateur de Cycles de Sommeil | Dormesia',
  description: 'Calculez vos heures de coucher et de réveil idéales en fonction des cycles de sommeil de 90 minutes.',
};

export default function CalculateurPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
            <Calculator className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Calculateur de Cycles de Sommeil
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Trouvez les meilleures heures pour vous coucher ou vous réveiller en respectant vos cycles naturels
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SleepCalculator />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Comment ça fonctionne ?
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Les cycles de sommeil
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Chaque nuit, nous passons par plusieurs cycles de sommeil d'environ <strong>90 minutes</strong> chacun. 
              Un cycle complet comprend différentes phases : sommeil léger, sommeil profond et sommeil paradoxal (REM).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Se réveiller au milieu d'un cycle, particulièrement pendant le sommeil profond, peut vous laisser 
              groggy et fatigué, même après avoir dormi suffisamment longtemps.
            </p>
            <p className="text-slate-600 leading-relaxed">
              En synchronisant votre réveil avec la fin d'un cycle, vous vous réveillerez naturellement 
              et vous sentirez plus reposé, même avec légèrement moins d'heures de sommeil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">😴</div>
              <h3 className="font-bold text-slate-900 mb-2">4-5 cycles</h3>
              <p className="text-slate-600 text-sm">
                6-7,5 heures - Minimum pour la plupart des adultes
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-slate-900 mb-2">5-6 cycles</h3>
              <p className="text-slate-600 text-sm">
                7,5-9 heures - Idéal pour la récupération optimale
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-bold text-slate-900 mb-2">Moins de 4 cycles</h3>
              <p className="text-slate-600 text-sm">
                Moins de 6h - Insuffisant sur le long terme
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">
              💡 Conseil pro
            </h3>
            <p className="text-blue-800">
              Le calculateur ajoute automatiquement 15 minutes au temps de coucher pour tenir compte 
              du temps d'endormissement moyen. Si vous vous endormez plus rapidement ou plus lentement, 
              ajustez en conséquence !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}