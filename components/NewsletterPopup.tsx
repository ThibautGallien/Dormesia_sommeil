// components/NewsletterPopup.tsx
'use client';

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé le popup
    const dismissed = localStorage.getItem('newsletter-popup-dismissed');
    if (dismissed) return;

    // Afficher après 30 secondes ou au scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    const handleScroll = () => {
      if (!hasInteracted && window.scrollY > 1000) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-2 hover:bg-slate-800 transition-colors shadow-lg"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Dormez mieux dès ce soir
          </h2>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            Recevez <strong>gratuitement</strong> notre guide exclusif avec 7 techniques scientifiques pour vous endormir en moins de 15 minutes.
          </p>

          <NewsletterForm 
            source="popup"
            placeholder="Votre email"
            buttonText="Recevoir le guide gratuit"
            showDescription={false}
          />

          <p className="text-xs text-slate-500 mt-4 text-center">
            Pas de spam. Désinscription en 1 clic.
          </p>
        </div>
      </div>
    </div>
  );
}