import React, { useState, useEffect } from 'react';
import { UserPreferences } from '../../types';
import { Save, Check, RotateCcw, Sliders, Bell, DollarSign, Cpu } from 'lucide-react';

interface SettingsPanelProps {
  onPreferencesChange: (prefs: UserPreferences) => void;
}

const DEFAULT_PREFS: UserPreferences = {
  theme: 'dark',
  currency: 'USD',
  emailAlerts: true,
  compactTable: false,
  aiEngine: 'gemini-1.5-flash'
};

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ onPreferencesChange }) => {
  const [prefs, setPrefs] = useState<UserPreferences>(() => {
    try {
      const saved = localStorage.getItem('nexora_saas_prefs');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_PREFS;
  });

  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    onPreferencesChange(prefs);
  }, [prefs, onPreferencesChange]);

  const handleSave = () => {
    localStorage.setItem('nexora_saas_prefs', JSON.stringify(prefs));
    onPreferencesChange(prefs);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleReset = () => {
    setPrefs(DEFAULT_PREFS);
    localStorage.removeItem('nexora_saas_prefs');
    onPreferencesChange(DEFAULT_PREFS);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            Dashboard & Workspace Preferences
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Personalize telemetry displays and persist options to LocalStorage
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:bg-slate-800 text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-all flex items-center gap-1.5"
          >
            {savedNotice ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Currency Setting */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Display Currency
          </label>
          <p className="text-[11px] text-slate-400">
            Select the currency symbol applied across MRR and transaction tables.
          </p>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setPrefs({ ...prefs, currency: curr })}
                className={`py-2 px-3 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  prefs.currency === curr
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {curr} ({curr === 'USD' ? '$' : curr === 'EUR' ? '€' : '£'})
              </button>
            ))}
          </div>
        </div>

        {/* AI Engine Model */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-400" />
            Default Inference Engine
          </label>
          <p className="text-[11px] text-slate-400">
            Set the default foundation model routed for tenant queries.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              type="button"
              onClick={() => setPrefs({ ...prefs, aiEngine: 'gemini-1.5-flash' })}
              className={`p-2.5 rounded-lg text-xs border text-left transition-colors ${
                prefs.aiEngine === 'gemini-1.5-flash'
                  ? 'bg-indigo-600/30 text-indigo-200 border-indigo-400'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <div className="font-semibold text-white">Gemini 1.5 Flash</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Ultra low latency</div>
            </button>

            <button
              type="button"
              onClick={() => setPrefs({ ...prefs, aiEngine: 'gemini-1.5-pro' })}
              className={`p-2.5 rounded-lg text-xs border text-left transition-colors ${
                prefs.aiEngine === 'gemini-1.5-pro'
                  ? 'bg-indigo-600/30 text-indigo-200 border-indigo-400'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <div className="font-semibold text-white">Gemini 1.5 Pro</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Deep reasoning</div>
            </button>
          </div>
        </div>

        {/* Email Alerts Toggle */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
          <div className="space-y-1 pr-4">
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-indigo-400" />
              Automated Anomaly Email Alerts
            </div>
            <p className="text-[11px] text-slate-400">
              Receive notifications whenever token surges exceed threshold limit.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPrefs({ ...prefs, emailAlerts: !prefs.emailAlerts })}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 shrink-0 ${
              prefs.emailAlerts ? 'bg-indigo-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                prefs.emailAlerts ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Compact Table Mode */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
          <div className="space-y-1 pr-4">
            <div className="text-xs font-semibold text-white">High-Density Compact Table View</div>
            <p className="text-[11px] text-slate-400">
              Reduces padding on data rows for higher vertical information density.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPrefs({ ...prefs, compactTable: !prefs.compactTable })}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 shrink-0 ${
              prefs.compactTable ? 'bg-indigo-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                prefs.compactTable ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
