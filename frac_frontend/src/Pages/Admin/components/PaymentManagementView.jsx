// src/Pages/Admin/components/PaymentManagementView.jsx
import React from 'react';
import PaymentTable from './payment/PaymentTable';
import BankTransferTable from './payment/BankTransferTable';
import RevenueReports from './payment/RevenueReports';

const PaymentManagementView = ({ 
    payments, 
    bankTransfers,
    searchTerm, 
    setSearchTerm,
    activeSubTab,
    setActiveSubTab,
    onViewDetails,
    getStatusColor,
    formatCurrency,
    formatDate,
    stats
}) => {
    const tabs = [
        { id: 'transactions', label: 'All Transactions', count: stats.totalPayments },
        { id: 'pending-payments', label: 'Pending', count: stats.pendingPayments },
        { id: 'bank-transfers', label: 'Bank Transfers', count: bankTransfers.length, badge: stats.pendingTransfers },
        { id: 'revenue', label: 'Revenue Reports' }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Payment Management</h2>
                        <p className="text-sm text-gray-600 mt-1">Manage all financial transactions</p>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
                        />
                        <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Sub Tabs */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition relative ${
                                activeSubTab === tab.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tab.label} {tab.count !== undefined && `(${tab.count})`}
                            {tab.badge > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {tab.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                {activeSubTab === 'transactions' && (
                    <PaymentTable
                        data={payments}
                        searchTerm={searchTerm}
                        onViewDetails={onViewDetails}
                        getStatusColor={getStatusColor}
                        formatCurrency={formatCurrency}
                        formatDate={formatDate}
                    />
                )}
                {activeSubTab === 'pending-payments' && (
                    <PaymentTable
                        data={payments.filter(p => p.paymentStatus === 'PENDING')}
                        searchTerm={searchTerm}
                        onViewDetails={onViewDetails}
                        getStatusColor={getStatusColor}
                        formatCurrency={formatCurrency}
                        formatDate={formatDate}
                        showProcessButton={true}
                    />
                )}
                {activeSubTab === 'bank-transfers' && (
                    <BankTransferTable
                        data={bankTransfers}
                        searchTerm={searchTerm}
                        onViewDetails={onViewDetails}
                        getStatusColor={getStatusColor}
                        formatCurrency={formatCurrency}
                        formatDate={formatDate}
                    />
                )}
                {activeSubTab === 'revenue' && (
                    <RevenueReports
                        data={payments}
                        formatCurrency={formatCurrency}
                    />
                )}
            </div>
        </div>
    );
};

export default PaymentManagementView;