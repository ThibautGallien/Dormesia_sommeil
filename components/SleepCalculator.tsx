// components/SleepCalculator.tsx
'use client';

import { useState } from 'react';
import { Clock, Moon, Sun } from 'lucide-react';

export default function SleepCalculator() {
  const [mode, setMode] = useState<'bedtime' | 'waketime'>('waketime');
  const [time, setTime] = useState('07:00');
  const [results, setResults] = useState<string[]>([]);

  const calculateCycles = () => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const cycleLength = 90; // minutes
    const fallAsleepTime = 15; // minutes to fall asleep

    const newResults: string[] = [];

    if (mode === 'waketime') {
      // Calculate bedtimes
      for (let cycles = 6; cycles >= 4; cycles--) {
        const sleepMinutes = totalMinutes - (cycles * cycleLength + fallAsleepTime);
        const bedHours = Math.floor(sleepMinutes / 60);
        const bedMins = sleepMinutes % 60;
        
        let displayHours = bedHours;
        if (displayHours < 0) displayHours += 24;
        if (displayHours >= 24) displayHours -= 24;
        
        const displayMins = bedMins < 0 ? bedMins + 60 : bedMins;
        if (bedMins < 0) displayHours--;
        if (displayHours < 0) displayHours += 24;

        const formattedTime = `${String(displayHours).padStart(2, '0')}:${String(Math.abs(displayMins)).padStart(2, '0')}`;
        const totalHours = (cycles * cycleLength) / 60;
        newResults.push(`${formattedTime} (${cycles} cycles - ${totalHours.toFixed(1)}h de sommeil)`);
      }
    } else {
      // Calculate wake times
      for (let cycles = 4; cycles <= 6; cycles++) {
        const wakeMinutes = totalMinutes + (cycles * cycleLength + fallAsleepTime);
        const wakeHours = Math.floor(wakeMinutes / 60) % 24;
        const wakeMins = wakeMinutes % 60;
        
        const formattedTime = `${String(wakeHours).padStart(2, '0')}:${String(wakeMins).padStart(2, '0')}`;
        const totalHours = (cycles * cycleLength) / 60;
        newResults.push(`${formattedTime} (${cycles} cycles - ${totalHours.toFixed(1)}h de sommeil)`);
      }
    }

    setResults(newResults);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-6">
        <Clock className="h-8 w-8 text-white" />
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-3">
        Calculateur de cycles de sommeil
      </h2>
      
      <p className="text-slate-600 mb-8">
        Découvrez les meilleures heures pour vous coucher ou vous réveiller en fonction des cycles de sommeil de 90 minutes.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Je veux calculer :
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setMode('waketime')}
              className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                mode === 'waketime'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <Sun className="h-6 w-6 mx-auto mb-2" />
              <div className="font-medium">Heure de réveil</div>
              <div className="text-sm opacity-75">Je me réveille à...</div>
            </button>
            <button
              onClick={() => setMode('bedtime')}
              className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                mode === 'bedtime'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <Moon className="h-6 w-6 mx-auto mb-2" />
              <div className="font-medium">Heure de coucher</div>
              <div className="text-sm opacity-75">Je me couche à...</div>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {mode === 'waketime' ? 'À quelle heure voulez-vous vous réveiller ?' : 'À quelle heure allez-vous vous coucher ?'}
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg"
          />
        </div>

        <button
          onClick={calculateCycles}
          className="w-full bg-slate-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg"
        >
          Calculer les heures idéales
        </button>

        {results.length > 0 && (
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">
              {mode === 'waketime' ? 'Heures de coucher recommandées :' : 'Heures de réveil recommandées :'}
            </h3>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200"
                >
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  <span className="font-mono text-lg font-semibold text-slate-900">
                    {result.split(' (')[0]}
                  </span>
                  <span className="text-sm text-slate-600">
                    ({result.split(' (')[1]}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-4">
              💡 Ces horaires incluent 15 minutes pour vous endormir. Choisissez l'horaire qui correspond le mieux à vos besoins (4-6 cycles = 6-9h de sommeil).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}