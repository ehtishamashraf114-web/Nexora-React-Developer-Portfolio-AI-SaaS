import React, { useState } from 'react';
import { ActivityItem } from '../../types';
import { INITIAL_ACTIVITIES } from '../../data/dashboardData';
import { Sparkles, Server, UserPlus, AlertCircle, RefreshCw } from 'lucide-react';

export const ActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>(INITIAL_ACTIVITIES);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const simulateNewEvent = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const newItems: ActivityItem[] = [
        {
          id: `act-${Date.now()}`,
          title: 'Fine-Tuned Adapter Synced',
          description: 'Custom customer prompt matrix deployed to 3 distributed edge zones.',
          timestamp: 'Just now',
          type: 'ai'
        },
        ...activities
      ];
      setActivities(newItems.slice(0, 8));
      setIsRefreshing(false);
    }, 400);
  };

  const getIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'ai':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'user':
        return <UserPlus className="w-4 h-4 text-emerald-400" />;
      case 'deploy':
        return <Server className="w-4 h-4 text-indigo-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-sm font-bold text-white">System Events & Activity</h3>
          <p className="text-xs text-slate-400 mt-0.5">Real-time telemetry and workspace mutations</p>
        </div>
        <button
          type="button"
          onClick={simulateNewEvent}
          disabled={isRefreshing}
          className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          title="Simulate Event"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
        {activities.map((act) => (
          <div
            key={act.id}
            className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3 hover:border-slate-800 transition-colors"
          >
            <div className="p-2 rounded-lg bg-slate-900 border border-white/5 shrink-0 mt-0.5">
              {getIcon(act.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-xs font-semibold text-white truncate">{act.title}</h4>
                <span className="text-[10px] text-slate-500 font-mono shrink-0">{act.timestamp}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{act.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
