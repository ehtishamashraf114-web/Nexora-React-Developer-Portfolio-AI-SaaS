import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  timeframe: string;
  icon: LucideIcon;
  iconColor: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  timeframe,
  icon: Icon,
  iconColor
}) => {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-slate-400">{title}</span>
        <div className={`p-2 rounded-xl bg-slate-950/70 border border-white/5 ${iconColor}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-2">
        {value}
      </div>

      <div className="flex items-center justify-between text-xs font-mono">
        <span
          className={`inline-flex items-center gap-1 font-semibold ${
            isPositive ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          {change}
        </span>
        <span className="text-slate-500">{timeframe}</span>
      </div>
    </div>
  );
};
