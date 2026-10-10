import { TransactionRecord, ActivityItem } from '../types';

export type TimeRange = 'today' | '7d' | '30d' | '90d' | 'year';

export interface DashboardMetricData {
  mrr: { value: string; change: string; isPositive: boolean; rawValue: number };
  activeUsers: { value: string; change: string; isPositive: boolean; rawValue: number };
  conversionRate: { value: string; change: string; isPositive: boolean; rawValue: number };
  latency: { value: string; change: string; isPositive: boolean; rawValue: number };
  chartData: Array<{ time: string; revenue: number; queries: number; cost: number }>;
}

export const TIME_RANGE_METRICS: Record<TimeRange, DashboardMetricData> = {
  today: {
    mrr: { value: '$2,840', change: '+8.4%', isPositive: true, rawValue: 2840 },
    activeUsers: { value: '1,420', change: '+12.1%', isPositive: true, rawValue: 1420 },
    conversionRate: { value: '4.82%', change: '+0.6%', isPositive: true, rawValue: 4.82 },
    latency: { value: '42ms', change: '-5ms', isPositive: true, rawValue: 42 },
    chartData: [
      { time: '00:00', revenue: 140, queries: 450, cost: 12 },
      { time: '04:00', revenue: 90, queries: 280, cost: 8 },
      { time: '08:00', revenue: 420, queries: 1420, cost: 38 },
      { time: '12:00', revenue: 680, queries: 2890, cost: 65 },
      { time: '16:00', revenue: 890, queries: 3410, cost: 82 },
      { time: '20:00', revenue: 620, queries: 2150, cost: 54 }
    ]
  },
  '7d': {
    mrr: { value: '$18,450', change: '+14.2%', isPositive: true, rawValue: 18450 },
    activeUsers: { value: '8,920', change: '+9.4%', isPositive: true, rawValue: 8920 },
    conversionRate: { value: '5.14%', change: '+1.1%', isPositive: true, rawValue: 5.14 },
    latency: { value: '48ms', change: '-2ms', isPositive: true, rawValue: 48 },
    chartData: [
      { time: 'Mon', revenue: 2100, queries: 12400, cost: 190 },
      { time: 'Tue', revenue: 2650, queries: 15200, cost: 230 },
      { time: 'Wed', revenue: 3100, queries: 18400, cost: 280 },
      { time: 'Thu', revenue: 2890, queries: 16800, cost: 250 },
      { time: 'Fri', revenue: 3450, queries: 21000, cost: 310 },
      { time: 'Sat', revenue: 1980, queries: 9800, cost: 160 },
      { time: 'Sun', revenue: 2280, queries: 11500, cost: 180 }
    ]
  },
  '30d': {
    mrr: { value: '$74,820', change: '+21.8%', isPositive: true, rawValue: 74820 },
    activeUsers: { value: '34,600', change: '+16.5%', isPositive: true, rawValue: 34600 },
    conversionRate: { value: '5.48%', change: '+1.8%', isPositive: true, rawValue: 5.48 },
    latency: { value: '45ms', change: '-8ms', isPositive: true, rawValue: 45 },
    chartData: [
      { time: 'Week 1', revenue: 16200, queries: 84000, cost: 1420 },
      { time: 'Week 2', revenue: 18400, queries: 96000, cost: 1650 },
      { time: 'Week 3', revenue: 19800, queries: 108000, cost: 1820 },
      { time: 'Week 4', revenue: 20420, queries: 114000, cost: 1940 }
    ]
  },
  '90d': {
    mrr: { value: '$218,500', change: '+32.4%', isPositive: true, rawValue: 218500 },
    activeUsers: { value: '88,400', change: '+24.1%', isPositive: true, rawValue: 88400 },
    conversionRate: { value: '5.62%', change: '+2.4%', isPositive: true, rawValue: 5.62 },
    latency: { value: '44ms', change: '-12ms', isPositive: true, rawValue: 44 },
    chartData: [
      { time: 'Month 1', revenue: 61000, queries: 320000, cost: 5200 },
      { time: 'Month 2', revenue: 73500, queries: 395000, cost: 6300 },
      { time: 'Month 3', revenue: 84000, queries: 460000, cost: 7400 }
    ]
  },
  year: {
    mrr: { value: '$840,000', change: '+142%', isPositive: true, rawValue: 840000 },
    activeUsers: { value: '240,000', change: '+98%', isPositive: true, rawValue: 240000 },
    conversionRate: { value: '5.85%', change: '+3.1%', isPositive: true, rawValue: 5.85 },
    latency: { value: '41ms', change: '-18ms', isPositive: true, rawValue: 41 },
    chartData: [
      { time: 'Q1', revenue: 145000, queries: 820000, cost: 14000 },
      { time: 'Q2', revenue: 195000, queries: 1120000, cost: 18500 },
      { time: 'Q3', revenue: 235000, queries: 1450000, cost: 23000 },
      { time: 'Q4', revenue: 265000, queries: 1780000, cost: 27500 }
    ]
  }
};

export const ACQUISITION_CHANNELS = [
  { channel: 'Direct API', users: 14200, conversion: 6.8, color: '#6366F1' },
  { channel: 'Dev Community', users: 9800, conversion: 5.4, color: '#38BDF8' },
  { channel: 'Organic Search', users: 6400, conversion: 4.2, color: '#10B981' },
  { channel: 'Partner Referrals', users: 3100, conversion: 7.9, color: '#F59E0B' },
  { channel: 'Social / Tech Talks', users: 1100, conversion: 3.1, color: '#EC4899' }
];

export const TOKEN_DISTRIBUTION = [
  { name: 'Gemini 1.5 Flash', value: 54, color: '#38BDF8' },
  { name: 'Gemini 1.5 Pro', value: 28, color: '#6366F1' },
  { name: 'Vector Embeddings', value: 12, color: '#10B981' },
  { name: 'Fine-tuned Models', value: 6, color: '#F59E0B' }
];

export const INITIAL_TRANSACTIONS: TransactionRecord[] = [
  {
    id: 'TXN-9041',
    customerName: 'Sarah Jenkins',
    customerEmail: 's.jenkins@acmehealth.io',
    plan: 'Enterprise',
    amount: 1499,
    status: 'Completed',
    date: '2026-10-09',
    tokensUsed: 428000
  },
  {
    id: 'TXN-9040',
    customerName: 'Marcus Vance',
    customerEmail: 'm.vance@cloudmatrix.dev',
    plan: 'Pro',
    amount: 299,
    status: 'Completed',
    date: '2026-10-09',
    tokensUsed: 94000
  },
  {
    id: 'TXN-9039',
    customerName: 'Elena Rostova',
    customerEmail: 'elena@vortexlabs.tech',
    plan: 'Pro',
    amount: 299,
    status: 'Completed',
    date: '2026-10-08',
    tokensUsed: 88500
  },
  {
    id: 'TXN-9038',
    customerName: 'Devon Bradley',
    customerEmail: 'd.bradley@finflow.co',
    plan: 'Enterprise',
    amount: 2499,
    status: 'Pending',
    date: '2026-10-08',
    tokensUsed: 890000
  },
  {
    id: 'TXN-9037',
    customerName: 'Amira Tariq',
    customerEmail: 'amira@quranicacademy.org',
    plan: 'Starter',
    amount: 79,
    status: 'Completed',
    date: '2026-10-07',
    tokensUsed: 19200
  },
  {
    id: 'TXN-9036',
    customerName: 'Liam O’Connor',
    customerEmail: 'liam@hyperionpulse.com',
    plan: 'Pro',
    amount: 299,
    status: 'Completed',
    date: '2026-10-06',
    tokensUsed: 112000
  },
  {
    id: 'TXN-9035',
    customerName: 'Chloe Bennett',
    customerEmail: 'chloe@synthetix.design',
    plan: 'Starter',
    amount: 79,
    status: 'Refunded',
    date: '2026-10-05',
    tokensUsed: 4200
  },
  {
    id: 'TXN-9034',
    customerName: 'Kenji Takahashi',
    customerEmail: 'k.takahashi@tokyodata.ai',
    plan: 'Enterprise',
    amount: 1899,
    status: 'Completed',
    date: '2026-10-05',
    tokensUsed: 620000
  }
];

export const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Model Autoscaling Triggered',
    description: 'Fleet scaled +8 instances to absorb high token query surge.',
    timestamp: '4 minutes ago',
    type: 'ai'
  },
  {
    id: 'act-2',
    title: 'New Enterprise Plan Subscribed',
    description: 'AcmeHealth upgraded from Pro to Dedicated Enterprise cluster.',
    timestamp: '22 minutes ago',
    type: 'user'
  },
  {
    id: 'act-3',
    title: 'Zero Downtime Edge Deployment',
    description: 'Vite build v2.4.1 synchronized across all edge CDN points.',
    timestamp: '1 hour ago',
    type: 'deploy'
  },
  {
    id: 'act-4',
    title: 'Cache Invalidation Completed',
    description: 'Vector store indexes refreshed for top 5,000 tenant collections.',
    timestamp: '3 hours ago',
    type: 'alert'
  }
];
