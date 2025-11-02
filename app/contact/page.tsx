// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Ici vous pouvez implémenter l'envoi via Brevo ou un autre service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-3xl mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une question ? Une suggestion ? Nous sommes là pour vous aider
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Envoyez-nous un message
              </h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">
                      Message envoyé !
                    </h3>
                    <p className="text-green-800">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="Question sur les formations"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Autres moyens de nous joindre
              </h2>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600 mb-2">
                        Pour toute question ou demande d'information
                      </p>
                      <a 
                        href="mailto:contact@dormesia.com" 
                        className="text-slate-900 font-semibold hover:underline"
                      >
                        contact@dormesia.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">FAQ</h3>
                      <p className="text-slate-600 mb-2">
                        Consultez notre foire aux questions
                      </p>
                      <a 
                        href="/ressources/faq" 
                        className="text-slate-900 font-semibold hover:underline"
                      >
                        Voir la FAQ →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  ⏱️ Temps de réponse
                </h3>
                <p className="text-blue-800">
                  Nous nous efforçons de répondre à tous les messages dans un délai de 24-48 heures ouvrées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}