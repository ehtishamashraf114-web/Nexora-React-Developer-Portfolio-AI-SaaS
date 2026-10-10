import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';
import { ACQUISITION_CHANNELS } from '../../data/dashboardData';

export const ConversionChart: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-white">Acquisition Channels & Conversion</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          User volume acquired and conversion rates across ingress sources
        </p>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ACQUISITION_CHANNELS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis
              dataKey="channel"
              stroke="#64748B"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748B"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs shadow-xl font-mono">
                      <div className="text-slate-400 mb-1">{data.channel}</div>
                      <div className="text-white font-bold">{data.users.toLocaleString()} Users</div>
                      <div className="text-[11px] text-emerald-400 mt-0.5">
                        {data.conversion}% Conversion Rate
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="users" radius={[6, 6, 0, 0]}>
              {ACQUISITION_CHANNELS.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
