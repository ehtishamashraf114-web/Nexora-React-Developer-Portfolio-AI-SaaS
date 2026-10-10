import React, { useState } from 'react';
import { TimeRange } from '../../data/dashboardData';
import { Bell, Calendar, ChevronDown, Check, Menu, Search, User } from 'lucide-react';

interface DashboardHeaderProps {
  timeRange: TimeRange;
  onTimeRangeChange: (range: TimeRange) => void;
  onToggleMobileSidebar: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  timeRange,
  onTimeRangeChange,
  onToggleMobileSidebar
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Cluster US-East scaled +4', time: '12m ago', read: false },
    { id: '2', title: 'Monthly billing cycle complete', time: '1h ago', read: false },
    { id: '3', title: 'System health check 100% nominal', time: '4h ago', read: true }
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const timeRangeOptions: Array<{ id: TimeRange; label: string }> = [
    { id: 'today', label: 'Today' },
    { id: '7d', label: 'Last 7 Days' },
    { id: '30d', label: 'Last 30 Days' },
    { id: '90d', label: 'Last 90 Days' },
    { id: 'year', label: 'Past Year' }
  ];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#090D17]/80 backdrop-blur-md border-b border-slate-800">
      {/* Left zone: Mobile trigger & breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="text-white font-semibold">Nexora AI</span>
          <span>/</span>
          <span className="text-indigo-400 font-medium">Enterprise Telemetry</span>
        </div>
      </div>

      {/* Right zone: Date filter, notifications & user profile */}
      <div className="flex items-center gap-3">
        {/* Working Date Filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <Calendar className="w-3.5 h-3.5 text-slate-400 ml-1.5 hidden sm:inline" />
          <select
            value={timeRange}
            onChange={(e) => onTimeRangeChange(e.target.value as TimeRange)}
            className="bg-transparent text-white text-xs font-mono font-medium focus:outline-none cursor-pointer pr-1"
          >
            {timeRangeOptions.map((opt) => (
              <option key={opt.id} value={opt.id} className="bg-slate-900 text-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold font-mono flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-3 z-50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                <span className="font-semibold text-white">System Alerts</span>
                {unreadCount > 0 && (
                  <button
                    type="button"
                    onClick={markAllRead}
                    className="text-[11px] text-indigo-400 hover:underline"
                  >
                    Mark read
                  </button>
                )}
              </div>
              <div className="space-y-1.5 max-h-56 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-2 rounded-lg ${
                      n.read ? 'bg-slate-900/40 text-slate-400' : 'bg-slate-900 text-white font-medium'
                    }`}
                  >
                    <div className="text-xs">{n.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white text-[10px] font-bold">
              ND
            </div>
            <span className="text-xs font-semibold text-white hidden md:inline">Nexora Dev</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-2 z-50 text-xs">
              <div className="px-3 py-2 border-b border-slate-800 mb-1">
                <div className="font-semibold text-white">Lead Engineer</div>
                <div className="text-[10px] text-slate-400 font-mono truncate">thequranacademyhub@gmail.com</div>
              </div>
              <div className="space-y-0.5">
                <div className="px-3 py-1.5 rounded-lg text-slate-300 font-mono text-[11px] flex justify-between">
                  <span>Role:</span>
                  <span className="text-indigo-400">Admin</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg text-slate-300 font-mono text-[11px] flex justify-between">
                  <span>Cluster:</span>
                  <span className="text-emerald-400">Production</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
