import React from 'react';

const PaymentHeader = ({ customerName, onBack }) => {
    return (
        <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <button
                            onClick={onBack}
                            className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">Payment</h1>
                            <p className="text-teal-300 text-sm">Complete your booking payment</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm hidden md:block">Welcome, {customerName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHeader;