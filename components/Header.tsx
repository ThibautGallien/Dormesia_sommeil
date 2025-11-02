'use client';

import Link from 'next/link';
import { Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
              <Moon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Dormesia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/articles"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/a-propos"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              À propos
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/articles"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/a-propos"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
