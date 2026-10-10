import React, { useState, useMemo } from 'react';
import { Search, Download, ArrowUpDown, ChevronLeft, ChevronRight, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { TransactionRecord } from '../../types';

interface DataTableProps {
  initialData: TransactionRecord[];
  currencySymbol?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ initialData, currencySymbol = '$' }) => {
  const [data] = useState<TransactionRecord[]>(initialData);
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortField, setSortField] = useState<'amount' | 'date'>('date');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredAndSorted = useMemo(() => {
    return data
      .filter((row) => {
        const matchSearch =
          row.customerName.toLowerCase().includes(search.toLowerCase()) ||
          row.customerEmail.toLowerCase().includes(search.toLowerCase()) ||
          row.id.toLowerCase().includes(search.toLowerCase());
        const matchPlan = selectedPlan === 'all' || row.plan.toLowerCase() === selectedPlan.toLowerCase();
        const matchStatus = selectedStatus === 'all' || row.status.toLowerCase() === selectedStatus.toLowerCase();
        return matchSearch && matchPlan && matchStatus;
      })
      .sort((a, b) => {
        if (sortField === 'amount') {
          return sortAsc ? a.amount - b.amount : b.amount - a.amount;
        }
        // date sorting
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortAsc ? dateA - dateB : dateB - dateA;
      });
  }, [data, search, selectedPlan, selectedStatus, sortField, sortAsc]);

  const totalPages = Math.ceil(filteredAndSorted.length / pageSize) || 1;
  const paginatedRows = filteredAndSorted.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleExportCSV = () => {
    const headers = 'Transaction ID,Customer Name,Email,Plan,Amount,Status,Date,Tokens Used\n';
    const rows = filteredAndSorted
      .map(
        (r) =>
          `"${r.id}","${r.customerName}","${r.customerEmail}","${r.plan}",${r.amount},"${r.status}","${r.date}",${r.tokensUsed}`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `nexora_transactions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSort = (field: 'amount' | 'date') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
      {/* Table Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">Active Customers & Transactions</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Searchable ledger with live sorting, plan filters, and CSV export
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportCSV}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 flex items-center gap-1.5 self-start sm:self-auto transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search by customer, email, or TXN-ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Plan filter */}
          <select
            value={selectedPlan}
            onChange={(e) => {
              setSelectedPlan(e.target.value);
              setCurrentPage(1);
            }}
            className="py-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="all">All Plans</option>
            <option value="enterprise">Enterprise</option>
            <option value="pro">Pro</option>
            <option value="starter">Starter</option>
          </select>

          {/* Status filter */}
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="py-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">TXN ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4 cursor-pointer select-none" onClick={() => toggleSort('amount')}>
                <div className="flex items-center gap-1 hover:text-white">
                  <span>Amount</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-500" />
                </div>
              </th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Tokens Used</th>
              <th className="py-3 px-4 cursor-pointer select-none" onClick={() => toggleSort('date')}>
                <div className="flex items-center gap-1 hover:text-white">
                  <span>Date</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-500" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500 text-xs">
                  No transaction records match the specified query filters.
                </td>
              </tr>
            ) : (
              paginatedRows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-3 px-4 font-mono text-indigo-400 font-medium">{row.id}</td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-white">{row.customerName}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{row.customerEmail}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[11px] border border-white/5">
                      {row.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-white tabular-nums">
                    {currencySymbol}{row.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    {row.status === 'Completed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completed
                      </span>
                    )}
                    {row.status === 'Pending' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                        <Clock className="w-3.5 h-3.5" />
                        Pending
                      </span>
                    )}
                    {row.status === 'Refunded' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-400">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Refunded
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400 tabular-nums">
                    {row.tokensUsed.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400 text-[11px]">{row.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
        <div>
          Showing {(currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, filteredAndSorted.length)} of {filteredAndSorted.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 text-slate-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2 text-white font-bold">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 text-slate-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
