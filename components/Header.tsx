// components/Header.tsx
'use client';

import Link from 'next/link';
import { Moon, Menu, X, ChevronDown, Gift, Calculator, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

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

          {/* Desktop Navigation */}
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
            
            {/* Dropdown Ressources */}
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Ressources
                <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/ressources/guide-gratuit"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Gift className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Guide gratuit</div>
                      <div className="text-xs text-slate-600">7 techniques pour mieux dormir</div>
                    </div>
                  </Link>
                  <Link
                    href="/ressources/quiz"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Quiz sommeil</div>
                      <div className="text-xs text-slate-600">Évaluez votre profil</div>
                    </div>
                  </Link>
                  <Link
                    href="/ressources/calculateur"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Calculator className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Calculateur</div>
                      <div className="text-xs text-slate-600">Cycles de sommeil</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/formations"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Formations
            </Link>
            
            <Link
              href="/a-propos"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              À propos
            </Link>

            <Link
              href="/ressources/guide-gratuit"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Gift className="h-4 w-4" />
              Guide gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
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
              
              <div className="border-t border-slate-200 pt-4">
                <div className="text-sm font-semibold text-slate-500 mb-3">Ressources</div>
                <div className="pl-4 space-y-3">
                  <Link
                    href="/ressources/guide-gratuit"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Gift className="h-4 w-4" />
                    Guide gratuit
                  </Link>
                  <Link
                    href="/ressources/quiz"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HelpCircle className="h-4 w-4" />
                    Quiz sommeil
                  </Link>
                  <Link
                    href="/ressources/calculateur"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calculator className="h-4 w-4" />
                    Calculateur
                  </Link>
                </div>
              </div>

              <Link
                href="/formations"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
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