// src/Pages/Admin/components/payment/BankTransferTable.jsx
import React from 'react';

const BankTransferTable = ({ data, searchTerm, onViewDetails, getStatusColor }) => {
    const filteredData = data.filter(transfer => 
        transfer.bankName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transfer.transferReference?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Bank</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Account</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Holder</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reference</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(transfer => (
                        <tr key={transfer.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">#BT{String(transfer.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm">#BK{String(transfer.bookingId).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm">{transfer.bankName}</td>
                            <td className="py-3 px-4 text-sm font-mono">{transfer.accountNumber}</td>
                            <td className="py-3 px-4 text-sm">{transfer.accountHolder}</td>
                            <td className="py-3 px-4 text-sm font-mono">{transfer.transferReference}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(transfer.status)}`}>
                                    {transfer.status}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <button
                                    onClick={() => onViewDetails(transfer)}
                                    className={`px-3 py-1 text-white text-xs rounded-lg ${
                                        transfer.status === 'Pending' 
                                            ? 'bg-yellow-600 hover:bg-yellow-700' 
                                            : 'bg-teal-600 hover:bg-teal-700'
                                    }`}
                                >
                                    {transfer.status === 'Pending' ? 'Verify' : 'View'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No bank transfers found matching your search
                </div>
            )}
        </div>
    );
};

export default BankTransferTable;