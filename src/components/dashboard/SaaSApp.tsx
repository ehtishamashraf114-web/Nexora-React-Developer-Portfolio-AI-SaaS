import React, { useState } from 'react';
import { TimeRange, TIME_RANGE_METRICS, INITIAL_TRANSACTIONS } from '../../data/dashboardData';
import { UserPreferences } from '../../types';
import { DashboardSidebar, DashboardTab } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { MetricCard } from './MetricCard';
import { RevenueChart } from './RevenueChart';
import { ConversionChart } from './ConversionChart';
import { ModelUsagePie } from './ModelUsagePie';
import { DataTable } from './DataTable';
import { ActivityFeed } from './ActivityFeed';
import { SettingsPanel } from './SettingsPanel';
import { DollarSign, Users, Activity, Cpu } from 'lucide-react';

export const SaaSApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'dark',
    currency: 'USD',
    emailAlerts: true,
    compactTable: false,
    aiEngine: 'gemini-1.5-flash'
  });

  const currencySymbol = preferences.currency === 'USD' ? '$' : preferences.currency === 'EUR' ? '€' : '£';
  const currentMetrics = TIME_RANGE_METRICS[timeRange];

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
          onToggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
          {/* Demonstration Notice */}
          <div className="px-4 py-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-indigo-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block animate-pulse" />
              <span>Interactive Demonstration Sandbox · Data simulated for portfolio evaluation</span>
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              Active Timeframe: <span className="text-white uppercase font-bold">{timeRange}</span>
            </span>
          </div>

          {/* VIEW: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* 4 KPI Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Monthly Recurring Revenue"
                  value={`${currencySymbol}${currentMetrics.mrr.rawValue.toLocaleString()}`}
                  change={currentMetrics.mrr.change}
                  isPositive={currentMetrics.mrr.isPositive}
                  timeframe={`vs prior ${timeRange}`}
                  icon={DollarSign}
                  iconColor="text-emerald-400"
                />

                <MetricCard
                  title="Active Workspace Users"
                  value={currentMetrics.activeUsers.rawValue.toLocaleString()}
                  change={currentMetrics.activeUsers.change}
                  isPositive={currentMetrics.activeUsers.isPositive}
                  timeframe={`vs prior ${timeRange}`}
                  icon={Users}
                  iconColor="text-sky-400"
                />

                <MetricCard
                  title="Query Inference Conversion"
                  value={`${currentMetrics.conversionRate.rawValue}%`}
                  change={currentMetrics.conversionRate.change}
                  isPositive={currentMetrics.conversionRate.isPositive}
                  timeframe="completion rate"
                  icon={Activity}
                  iconColor="text-indigo-400"
                />

                <MetricCard
                  title="Global Edge Latency"
                  value={`${currentMetrics.latency.rawValue}ms`}
                  change={currentMetrics.latency.change}
                  isPositive={currentMetrics.latency.isPositive}
                  timeframe="p99 percentile"
                  icon={Cpu}
                  iconColor="text-cyan-400"
                />
              </div>

              {/* Primary Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <RevenueChart data={currentMetrics.chartData} currencySymbol={currencySymbol} />
                </div>
                <div className="lg:col-span-4">
                  <ModelUsagePie />
                </div>
              </div>

              {/* Secondary Row: Acquisition Bar Chart & Activity Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <ConversionChart />
                </div>
                <div className="lg:col-span-5">
                  <ActivityFeed />
                </div>
              </div>

              {/* Data Table */}
              <DataTable initialData={INITIAL_TRANSACTIONS} currencySymbol={currencySymbol} />
            </div>
          )}

          {/* VIEW: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <RevenueChart data={currentMetrics.chartData} currencySymbol={currencySymbol} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ConversionChart />
                <ModelUsagePie />
              </div>
            </div>
          )}

          {/* VIEW: CUSTOMERS */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              <DataTable initialData={INITIAL_TRANSACTIONS} currencySymbol={currencySymbol} />
            </div>
          )}

          {/* VIEW: ACTIVITY */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <ActivityFeed />
            </div>
          )}

          {/* VIEW: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <SettingsPanel onPreferencesChange={setPreferences} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
