import React from 'react';

const CardPaymentForm = ({ cardDetails, onInputChange, errorMessage }) => {
    return (
        <div className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                </label>
                <div className="relative">
                    <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={onInputChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                        <span className="text-xs font-bold text-blue-600">VISA</span>
                        <span className="text-xs font-bold text-red-600">MC</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Holder Name
                </label>
                <input
                    type="text"
                    name="cardHolder"
                    value={cardDetails.cardHolder}
                    onChange={onInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                    </label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={onInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                    </label>
                    <input
                        type="password"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={onInputChange}
                        placeholder="123"
                        maxLength="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="saveCard"
                    checked={cardDetails.saveCard}
                    onChange={onInputChange}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                    Save card for future payments
                </label>
            </div>

            {errorMessage && (
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-blue-700">
                        Your payment information is encrypted and secure. We never store your full card details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardPaymentForm;
