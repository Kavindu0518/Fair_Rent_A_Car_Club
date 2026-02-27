// src/Pages/Admin/components/payment/RevenueReports.jsx
import React from 'react';

const RevenueReports = ({ data, formatCurrency }) => {
    const paidPayments = data.filter(p => p.paymentStatus === 'PAID');
    const totalRevenue = paidPayments.reduce((sum, p) => sum + (p.amount || 0), 0);
    
    // Group by month
    const monthlyRevenue = {};
    paidPayments.forEach(payment => {
        const date = new Date(payment.paidAt || payment.createdAt);
        const monthKey = date.toLocaleString('default', { month: 'short', year: 'numeric' });
        monthlyRevenue[monthKey] = (monthlyRevenue[monthKey] || 0) + (payment.amount || 0);
    });

    // Group by payment method
    const methodRevenue = {};
    paidPayments.forEach(payment => {
        const method = payment.paymentMethod || 'OTHER';
        methodRevenue[method] = (methodRevenue[method] || 0) + (payment.amount || 0);
    });

    // Group by day for last 7 days
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const dayTotal = paidPayments.filter(p => {
            const pDate = new Date(p.paidAt || p.createdAt).toDateString();
            return pDate === date.toDateString();
        }).reduce((sum, p) => sum + (p.amount || 0), 0);
        
        last7Days.push({ date: dateStr, amount: dayTotal });
    }

    const maxAmount = Math.max(...last7Days.map(d => d.amount), 1);

    return (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">Total Revenue</p>
                    <p className="text-3xl font-bold">{formatCurrency(totalRevenue)}</p>
                    <p className="text-xs mt-2">All time</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">Total Transactions</p>
                    <p className="text-3xl font-bold">{paidPayments.length}</p>
                    <p className="text-xs mt-2">Completed payments</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">Average per Booking</p>
                    <p className="text-3xl font-bold">
                        {formatCurrency(paidPayments.length > 0 ? totalRevenue / paidPayments.length : 0)}
                    </p>
                    <p className="text-xs mt-2">Per transaction</p>
                </div>
            </div>

            {/* Last 7 Days Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-4">Last 7 Days Revenue</p>
                <div className="h-48 flex items-end justify-between gap-2">
                    {last7Days.map((day, index) => {
                        const barHeight = (day.amount / maxAmount) * 100;
                        return (
                            <div key={index} className="flex-1 flex flex-col items-center">
                                <div 
                                    className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
                                    style={{ height: `${barHeight}%`, minHeight: '20px' }}
                                >
                                    <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
                                        {formatCurrency(day.amount)}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-600 mt-2">{day.date}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Monthly and Method Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
                    <div className="space-y-3">
                        {Object.entries(monthlyRevenue)
                            .sort((a, b) => new Date(b[0]) - new Date(a[0]))
                            .slice(0, 6)
                            .map(([month, amount]) => (
                                <div key={month} className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">{month}</span>
                                    <span className="font-semibold text-teal-600">{formatCurrency(amount)}</span>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                        {Object.entries(methodRevenue).map(([method, amount]) => (
                            <div key={method} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{method}</span>
                                <span className="font-semibold text-purple-600">{formatCurrency(amount)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueReports;