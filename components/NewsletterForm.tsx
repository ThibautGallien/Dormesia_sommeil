// components/NewsletterForm.tsx
'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  showDescription?: boolean;
}

export default function NewsletterForm({ 
  source = 'footer',
  placeholder = 'Votre email',
  buttonText = 'Recevoir le guide',
  showDescription = true 
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Merci ! Consultez votre boîte email pour confirmer votre inscription.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue. Réessayez.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
        <p className="text-sm text-green-800">{message}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {showDescription && (
        <p className="text-slate-300 mb-4 leading-relaxed">
          Recevez gratuitement notre guide "7 techniques scientifiques pour s'endormir en moins de 15 minutes"
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={status === 'loading'}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:border-white focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Envoi...</span>
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">{message}</p>
      )}
    </div>
  );
}