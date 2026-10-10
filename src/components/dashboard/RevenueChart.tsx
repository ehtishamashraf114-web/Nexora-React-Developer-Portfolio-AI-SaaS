import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface ChartItem {
  time: string;
  revenue: number;
  queries: number;
  cost: number;
}

interface RevenueChartProps {
  data: ChartItem[];
  currencySymbol?: string;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data, currencySymbol = '$' }) => {
  const [metricMode, setMetricMode] = useState<'revenue' | 'queries'>('revenue');

  const formatYAxis = (val: number) => {
    if (metricMode === 'revenue') {
      if (val >= 1000) return `${currencySymbol}${(val / 1000).toFixed(0)}k`;
      return `${currencySymbol}${val}`;
    }
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
    return `${val}`;
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
      {/* Chart Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-sm font-bold text-white">Platform Growth & Telemetry</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {metricMode === 'revenue'
              ? 'Gross processed revenue across active subscription tiers'
              : 'Real-time AI query volume routed through cluster'}
          </p>
        </div>

        {/* Segmented Mode Selector */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-950 border border-white/5 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMetricMode('revenue')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              metricMode === 'revenue'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Revenue ({currencySymbol})
          </button>
          <button
            type="button"
            onClick={() => setMetricMode('queries')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              metricMode === 'queries'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Queries (reqs)
          </button>
        </div>
      </div>

      {/* Recharts Area Container */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={metricMode === 'revenue' ? '#6366f1' : '#38bdf8'}
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor={metricMode === 'revenue' ? '#6366f1' : '#38bdf8'}
                  stopOpacity={0.0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#64748B"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748B"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload as ChartItem;
                  return (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs shadow-xl font-mono">
                      <div className="text-slate-400 mb-1">{label}</div>
                      <div className="text-white font-bold text-sm">
                        {metricMode === 'revenue'
                          ? `${currencySymbol}${item.revenue.toLocaleString()}`
                          : `${item.queries.toLocaleString()} queries`}
                      </div>
                      <div className="text-[10px] text-emerald-400 mt-1">
                        Est. Compute: ${item.cost}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey={metricMode === 'revenue' ? 'revenue' : 'queries'}
              stroke={metricMode === 'revenue' ? '#818cf8' : '#38bdf8'}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#areaGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
