// app/ressources/faq/page.tsx
import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'FAQ - Questions fréquentes sur le sommeil | Dormesia',
  description: 'Trouvez les réponses aux questions les plus fréquentes sur le sommeil, l\'insomnie et les troubles du sommeil.',
};

const faqs = [
  {
    category: 'Général',
    questions: [
      {
        q: 'De combien d\'heures de sommeil ai-je besoin ?',
        a: 'La plupart des adultes ont besoin de 7 à 9 heures de sommeil par nuit. Cependant, les besoins varient selon les individus. L\'important est de vous sentir reposé et alerte pendant la journée. Les adolescents ont besoin de 8-10 heures, tandis que les personnes âgées peuvent se contenter de 7-8 heures.',
      },
      {
        q: 'Combien de temps faut-il pour s\'endormir normalement ?',
        a: 'En moyenne, il faut entre 10 et 20 minutes pour s\'endormir. Si vous vous endormez en moins de 5 minutes, cela peut indiquer un manque de sommeil. Si cela prend plus de 30 minutes régulièrement, vous pourriez souffrir d\'insomnie.',
      },
      {
        q: 'Est-il mauvais de faire des siestes ?',
        a: 'Les siestes courtes (15-20 minutes) peuvent être bénéfiques pour la vigilance et les performances. Évitez les siestes longues (plus de 30 minutes) ou tardives (après 15h) car elles peuvent perturber le sommeil nocturne. Si vous avez besoin de siestes quotidiennes, cela peut indiquer un sommeil nocturne insuffisant.',
      },
    ],
  },
  {
    category: 'Insomnie',
    questions: [
      {
        q: 'Comment s\'endormir rapidement quand on a des insomnies ?',
        a: 'Essayez la technique 4-7-8 : inspirez pendant 4 secondes, retenez votre souffle pendant 7 secondes, expirez pendant 8 secondes. Répétez 4 fois. Si vous ne dormez pas après 20 minutes au lit, levez-vous et faites une activité calme jusqu\'à ressentir de la somnolence. Évitez de regarder l\'heure.',
      },
      {
        q: 'Pourquoi je me réveille au milieu de la nuit ?',
        a: 'Les réveils nocturnes peuvent avoir plusieurs causes : stress, anxiété, apnée du sommeil, reflux gastrique, besoin d\'uriner, environnement inadapté (bruit, température). Tenez un journal de sommeil pour identifier les patterns. Si cela persiste plus de 3 mois, consultez un professionnel.',
      },
      {
        q: 'Les somnifères sont-ils une solution ?',
        a: 'Les somnifères peuvent aider à court terme (quelques semaines) mais ne sont pas une solution durable. Ils ne traitent pas la cause de l\'insomnie et peuvent créer une dépendance. La thérapie cognitivo-comportementale (TCC-i) est plus efficace à long terme. Consultez toujours un médecin avant de prendre des somnifères.',
      },
    ],
  },
  {
    category: 'Hygiène du sommeil',
    questions: [
      {
        q: 'Quelle est la température idéale pour dormir ?',
        a: 'La température idéale se situe entre 18 et 19°C. Une chambre trop chaude (plus de 21°C) ou trop froide (moins de 16°C) peut perturber le sommeil. Votre corps a besoin de baisser sa température interne pour s\'endormir, d\'où l\'importance d\'une chambre fraîche.',
      },
      {
        q: 'Les écrans empêchent-ils vraiment de dormir ?',
        a: 'Oui, les écrans émettent de la lumière bleue qui supprime la production de mélatonine, l\'hormone du sommeil. Cette lumière trompe votre cerveau en lui faisant croire qu\'il fait jour. Évitez les écrans 1-2 heures avant le coucher, ou utilisez des filtres de lumière bleue et réduisez la luminosité.',
      },
      {
        q: 'Faut-il manger avant de dormir ?',
        a: 'Évitez les repas copieux 2-3 heures avant le coucher. Un estomac trop plein ou trop vide peut perturber le sommeil. Une petite collation légère (banane, amandes, tisane) peut aider. Évitez l\'alcool, la caféine et les aliments épicés ou gras le soir.',
      },
    ],
  },
  {
    category: 'Cycles et phases',
    questions: [
      {
        q: 'C\'est quoi un cycle de sommeil ?',
        a: 'Un cycle de sommeil dure environ 90 minutes et comprend plusieurs phases : sommeil léger, sommeil profond et sommeil paradoxal (REM). Chaque nuit, vous passez par 4-6 cycles. Se réveiller à la fin d\'un cycle vous fait sentir plus reposé qu\'en plein milieu d\'un cycle.',
      },
      {
        q: 'Pourquoi je me sens fatigué alors que j\'ai dormi 8 heures ?',
        a: 'Plusieurs raisons possibles : vous vous êtes réveillé au milieu d\'un cycle (sommeil profond), la qualité de votre sommeil était mauvaise (réveils fréquents, apnée), vous avez une dette de sommeil accumulée, ou vous souffrez d\'un trouble du sommeil. Essayez de vous réveiller par multiples de 90 minutes après l\'endormissement.',
      },
      {
        q: 'À quelle heure dois-je me coucher pour me lever à 7h ?',
        a: 'Pour un réveil à 7h avec 5 cycles de sommeil (7,5h), couchez-vous à 23h15 (en comptant 15 min pour s\'endormir). Pour 6 cycles (9h), couchez-vous à 21h45. Utilisez notre calculateur de cycles pour trouver votre horaire idéal selon vos besoins.',
      },
    ],
  },
  {
    category: 'Techniques naturelles',
    questions: [
      {
        q: 'La mélatonine est-elle efficace et sans danger ?',
        a: 'La mélatonine peut aider à court terme pour le décalage horaire ou pour rétablir un rythme perturbé. Elle n\'est généralement pas dangereuse mais peut causer somnolence, maux de tête ou nausées. Commencez par une faible dose (0,5-1mg) 1-2h avant le coucher. Ne convient pas aux enfants, femmes enceintes ou personnes sous certains médicaments sans avis médical.',
      },
      {
        q: 'Quelles plantes aident à mieux dormir ?',
        a: 'La valériane réduit le temps d\'endormissement, la passiflore calme l\'anxiété, la camomille favorise la relaxation, le tilleul apaise, et la mélisse aide à la détente. Prenez-les en tisane 30-60 minutes avant le coucher ou en complément selon les recommandations. Évitez de mélanger plusieurs plantes sans avis professionnel.',
      },
      {
        q: 'La méditation aide-t-elle vraiment à dormir ?',
        a: 'Oui, de nombreuses études montrent que la méditation réduit le stress, l\'anxiété et améliore la qualité du sommeil. Pratiquez 10-20 minutes avant le coucher : respiration profonde, body scan ou visualisation guidée. Les effets s\'améliorent avec une pratique régulière (au moins 3-4 semaines).',
      },
    ],
  },
  {
    category: 'Situations particulières',
    questions: [
      {
        q: 'Comment gérer le décalage horaire (jet lag) ?',
        a: 'Avant le voyage, ajustez progressivement vos horaires de sommeil (1h par jour). À l\'arrivée, exposez-vous à la lumière naturelle et adoptez immédiatement le rythme local pour les repas et le coucher. La mélatonine peut aider (demandez conseil). Évitez l\'alcool et la caféine pendant le vol.',
      },
      {
        q: 'Pourquoi je dors mal pendant mes règles ?',
        a: 'Les fluctuations hormonales (progestérone, œstrogènes) avant et pendant les règles peuvent perturber le sommeil. Les symptômes comme crampes, ballonnements et changements d\'humeur n\'aident pas. Maintenez une routine stricte, évitez la caféine, utilisez une bouillotte pour les crampes, et pratiquez la relaxation.',
      },
      {
        q: 'Le sport le soir empêche-t-il de dormir ?',
        a: 'Cela dépend de l\'intensité et du timing. Un exercice intense moins de 2-3h avant le coucher peut retarder l\'endormissement en augmentant la température corporelle et le niveau d\'alerte. Les exercices doux (yoga, stretching, marche) sont bénéfiques le soir. L\'idéal est de faire du sport le matin ou en début d\'après-midi.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur le sommeil
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem 
                    key={qIdx} 
                    value={`${idx}-${qIdx}`}
                    className="bg-slate-50 rounded-lg px-6 border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold text-slate-900 pr-4">
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Consultez nos articles détaillés ou posez-nous directement votre question
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="/articles"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Parcourir les articles
            </a>
            
              href="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 inline-flex items-center justify-center gap-2"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}