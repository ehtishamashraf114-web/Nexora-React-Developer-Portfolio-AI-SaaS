import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';
import { TOKEN_DISTRIBUTION } from '../../data/dashboardData';

export const ModelUsagePie: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-white">Model Token Distribution</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Proportion of compute consumed by active generative models
        </p>
      </div>

      <div className="w-full h-52 relative my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs shadow-xl font-mono">
                      <div className="text-white font-bold">{data.name}</div>
                      <div className="text-indigo-400">{data.value}% of fleet tokens</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Pie
              data={TOKEN_DISTRIBUTION}
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {TOKEN_DISTRIBUTION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs text-slate-400 font-mono">Total Share</span>
          <span className="text-lg font-bold text-white font-mono">100%</span>
        </div>
      </div>

      {/* Legend list */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
        {TOKEN_DISTRIBUTION.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-slate-300 truncate">{item.name}</span>
            <span className="text-slate-500 font-mono ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
