import { Moon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Moon className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold">Dormesia</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Votre guide pour un sommeil réparateur et une meilleure qualité de vie.
            </p>
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
                <a href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Thématiques</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Conseils sommeil</li>
              <li>Hygiène de vie</li>
              <li>Troubles du sommeil</li>
              <li>Bien-être</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Dormesia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
