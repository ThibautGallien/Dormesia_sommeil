// components/SleepQuiz.tsx
'use client';

import { useState } from 'react';
import { ChevronRight, Moon, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Combien de temps vous faut-il pour vous endormir ?",
    options: [
      { value: "< 15min", label: "Moins de 15 minutes", score: 0 },
      { value: "15-30min", label: "Entre 15 et 30 minutes", score: 1 },
      { value: "30-60min", label: "Entre 30 minutes et 1 heure", score: 2 },
      { value: "> 60min", label: "Plus d'1 heure", score: 3 },
    ],
  },
  {
    id: 2,
    question: "Vous réveillez-vous pendant la nuit ?",
    options: [
      { value: "jamais", label: "Jamais ou rarement", score: 0 },
      { value: "parfois", label: "1-2 fois par nuit", score: 1 },
      { value: "souvent", label: "3-4 fois par nuit", score: 2 },
      { value: "tres-souvent", label: "Plus de 4 fois", score: 3 },
    ],
  },
  {
    id: 3,
    question: "Comment vous sentez-vous au réveil ?",
    options: [
      { value: "repose", label: "Reposé(e) et en forme", score: 0 },
      { value: "correct", label: "Correct, mais besoin de café", score: 1 },
      { value: "fatigue", label: "Fatigué(e)", score: 2 },
      { value: "epuise", label: "Épuisé(e)", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Quel est votre niveau de stress quotidien ?",
    options: [
      { value: "faible", label: "Faible", score: 0 },
      { value: "modere", label: "Modéré", score: 1 },
      { value: "eleve", label: "Élevé", score: 2 },
      { value: "tres-eleve", label: "Très élevé", score: 3 },
    ],
  },
  {
    id: 5,
    question: "Combien d'heures dormez-vous en moyenne par nuit ?",
    options: [
      { value: "7-9h", label: "7 à 9 heures", score: 0 },
      { value: "6-7h", label: "6 à 7 heures", score: 1 },
      { value: "5-6h", label: "5 à 6 heures", score: 2 },
      { value: "< 5h", label: "Moins de 5 heures", score: 3 },
    ],
  },
];

interface ProfileResult {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  recommendations: string[];
}

const profiles: Record<string, ProfileResult> = {
  excellent: {
    title: "Excellent dormeur",
    description: "Votre sommeil est de bonne qualité. Continuez vos bonnes habitudes !",
    icon: <CheckCircle2 className="h-12 w-12" />,
    color: "text-green-600",
    recommendations: [
      "Maintenez votre routine régulière",
      "Continuez votre hygiène de sommeil",
      "Partagez vos astuces avec vos proches",
    ],
  },
  bon: {
    title: "Bon dormeur",
    description: "Votre sommeil est globalement satisfaisant, avec quelques pistes d'amélioration.",
    icon: <Moon className="h-12 w-12" />,
    color: "text-blue-600",
    recommendations: [
      "Optimisez votre environnement de sommeil",
      "Établissez une routine du soir plus stricte",
      "Limitez les écrans avant le coucher",
    ],
  },
  moyen: {
    title: "Dormeur à améliorer",
    description: "Votre sommeil pourrait être grandement amélioré avec quelques ajustements.",
    icon: <AlertCircle className="h-12 w-12" />,
    color: "text-orange-600",
    recommendations: [
      "Créez une routine de coucher apaisante",
      "Pratiquez des techniques de relaxation",
      "Consultez nos articles sur l'hygiène du sommeil",
    ],
  },
  difficile: {
    title: "Sommeil difficile",
    description: "Vous rencontrez des difficultés significatives. Des solutions existent !",
    icon: <AlertCircle className="h-12 w-12" />,
    color: "text-red-600",
    recommendations: [
      "Consultez notre guide complet sur l'insomnie",
      "Envisagez une consultation médicale",
      "Explorez les techniques de TCC pour le sommeil",
    ],
  },
};

export default function SleepQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateProfile = (): ProfileResult => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage <= 20) return profiles.excellent;
    if (percentage <= 40) return profiles.bon;
    if (percentage <= 65) return profiles.moyen;
    return profiles.difficile;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'quiz',
          quizResult: calculateProfile().title 
        }),
      });
      setEmailSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const profile = showResult ? calculateProfile() : null;

  if (showResult && profile) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${profile.color} bg-opacity-10`}>
          {profile.icon}
        </div>

        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          {profile.title}
        </h3>
        
        <p className="text-lg text-slate-600 mb-6">
          {profile.description}
        </p>

        <div className="bg-slate-50 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-slate-900 mb-3">Nos recommandations :</h4>
          <ul className="space-y-2">
            {profile.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {!emailSubmitted ? (
          <div className="border-t border-slate-200 pt-6">
            <h4 className="font-bold text-slate-900 mb-2">
              Recevez votre rapport détaillé par email
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              + Notre guide gratuit "7 techniques pour mieux dormir"
            </p>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Recevoir
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <p className="text-green-800">
              Merci ! Consultez votre email pour recevoir votre rapport détaillé.
            </p>
          </div>
        )}

        <button
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers({});
            setShowResult(false);
            setEmail('');
            setEmailSubmitted(false);
          }}
          className="mt-6 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          Refaire le quiz
        </button>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-600">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span className="text-sm font-medium text-slate-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        {questions[currentQuestion].question}
      </h3>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.score)}
            className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900 group-hover:text-slate-900">
                {option.label}
              </span>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}