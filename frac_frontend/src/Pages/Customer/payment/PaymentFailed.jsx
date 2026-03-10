import React from 'react';

const PaymentFailed = ({ errorMessage, onTryAgain, onBackToBookings }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-6">{errorMessage || 'Something went wrong. Please try again.'}</p>
            
            <div className="flex gap-4 justify-center">
                <button
                    onClick={onTryAgain}
                    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    Try Again
                </button>
                <button
                    onClick={onBackToBookings}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                >
                    Back to Bookings
                </button>
            </div>
        </div>
    );
};

export default PaymentFailed;