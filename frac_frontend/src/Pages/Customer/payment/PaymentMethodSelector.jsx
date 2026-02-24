import React from 'react';
import { PAYMENT_METHODS } from './PaymentConfig'; // This will now work with .jsx

const PaymentMethodSelector = ({ selectedMethod, onSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {PAYMENT_METHODS.map((method) => (
                <button
                    key={method.id}
                    onClick={() => onSelect(method.id)}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
                        selectedMethod === method.id
                            ? 'border-teal-600 bg-teal-50 shadow-lg shadow-teal-100'
                            : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
                    }`}
                >
                    {selectedMethod === method.id && (
                        <div className="absolute top-3 right-3">
                            <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    )}
                    
                    <div className="flex items-center mb-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white mr-3`}>
                            {method.icon}
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-gray-800">{method.name}</h4>
                            <p className="text-xs text-gray-500">{method.processingTime}</p>
                        </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 text-left">{method.description}</p>
                </button>
            ))}
        </div>
    );
};

export default PaymentMethodSelector;