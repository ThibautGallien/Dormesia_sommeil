// components/Footer.tsx
import { Moon } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Moon className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold">Dormesia</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Votre guide pour un sommeil réparateur et une meilleure qualité de vie.
            </p>
            <NewsletterForm source="footer" />
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-white transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/formations" className="hover:text-white transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/ressources/guide-gratuit" className="hover:text-white transition-colors">
                  Guide gratuit
                </a>
              </li>
              <li>
                <a href="/ressources/quiz" className="hover:text-white transition-colors">
                  Quiz sommeil
                </a>
              </li>
              <li>
                <a href="/ressources/calculateur" className="hover:text-white transition-colors">
                  Calculateur
                </a>
              </li>
              <li>
                <a href="/ressources/faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Dormesia. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}