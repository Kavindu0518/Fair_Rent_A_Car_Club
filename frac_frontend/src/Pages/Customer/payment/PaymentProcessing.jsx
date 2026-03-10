import React from 'react';
import { formatCurrency } from './PaymentUtils';

const PaymentProcessing = ({ transactionRef, totalAmount }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-600 border-t-transparent mb-6"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h3>
            <p className="text-gray-600 mb-4">Please do not close this window...</p>
            <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
                <p className="text-sm text-gray-600">Transaction Reference</p>
                <p className="text-lg font-mono font-bold text-teal-600">{transactionRef}</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">
                Amount: {formatCurrency(totalAmount)}
            </p>
        </div>
    );
};

export default PaymentProcessing;