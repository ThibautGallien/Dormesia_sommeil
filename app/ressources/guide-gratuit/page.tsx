// app/ressources/guide-gratuit/page.tsx
import { Gift, CheckCircle, Download } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Guide Gratuit - 7 Techniques pour Mieux Dormir | Dormesia',
  description: 'Téléchargez gratuitement notre guide avec 7 techniques scientifiques pour vous endormir en moins de 15 minutes.',
};

export default function GuideGratuitPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Guide Gratuit : 7 Techniques Scientifiques pour Mieux Dormir
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Découvrez des méthodes éprouvées pour vous endormir rapidement et améliorer la qualité de votre sommeil dès ce soir.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Ce que vous allez découvrir :
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">La technique 4-7-8 pour s'endormir en quelques minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Le body scan complet pour une relaxation profonde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Comment créer l'environnement parfait pour dormir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Les aliments qui favorisent l'endormissement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">La routine du soir en 5 étapes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gérer les pensées intrusives au coucher</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">L'auto-hypnose pour un sommeil réparateur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Download className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <div className="text-2xl font-bold mb-2">Guide PDF</div>
                    <div className="text-sm opacity-75">25 pages</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">100% Gratuit</div>
                  <div className="text-slate-600">Téléchargement immédiat</div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Recevez le guide par email
              </h3>
              <p className="text-slate-600 mb-6 text-center">
                Entrez votre email ci-dessous pour recevoir instantanément votre guide gratuit
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm 
                  source="guide-gratuit"
                  placeholder="votre@email.com"
                  buttonText="Télécharger le guide"
                  showDescription={false}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">
              💡 Bonus : Newsletter hebdomadaire
            </h3>
            <p className="text-blue-800">
              En téléchargeant le guide, vous recevrez également nos meilleurs conseils sommeil chaque semaine. Désinscription possible en 1 clic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Pourquoi ce guide fonctionne
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Basé sur la science</h3>
              <p className="text-slate-600">
                Toutes les techniques sont validées par des études scientifiques récentes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Facile à appliquer</h3>
              <p className="text-slate-600">
                Des instructions claires et détaillées, sans jargon médical complexe
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Résultats rapides</h3>
              <p className="text-slate-600">
                Vous pouvez commencer dès ce soir et voir des améliorations rapidement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}