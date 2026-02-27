// src/Pages/Admin/components/payment/PaymentTable.jsx
import React from 'react';

const PaymentTable = ({ data, searchTerm, onViewDetails, getStatusColor, formatCurrency, formatDate, showProcessButton }) => {
    const filteredData = data.filter(payment => 
        payment.id.toString().includes(searchTerm) ||
        payment.paymentReference?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reference</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Method</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Date</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(payment => (
                        <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">#P{String(payment.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm">#BK{String(payment.bookingId).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-mono">{payment.paymentReference}</td>
                            <td className="py-3 px-4 text-sm">{payment.paymentMethod}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(payment.paymentStatus)}`}>
                                    {payment.paymentStatus}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(payment.amount)}</td>
                            <td className="py-3 px-4 text-sm">{formatDate(payment.paidAt || payment.createdAt)}</td>
                            <td className="py-3 px-4">
                                {showProcessButton ? (
                                    <button
                                        onClick={() => onViewDetails(payment)}
                                        className="px-3 py-1 bg-teal-600 text-white text-xs rounded-lg hover:bg-teal-700"
                                    >
                                        Process
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onViewDetails(payment)}
                                        className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                                    >
                                        View
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No payments found matching your search
                </div>
            )}
        </div>
    );
};

export default PaymentTable;