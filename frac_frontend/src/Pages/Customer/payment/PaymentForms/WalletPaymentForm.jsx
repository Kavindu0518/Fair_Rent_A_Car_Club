import React from 'react';
import { WALLET_TYPES } from '../PaymentConfig';

const WalletPaymentForm = ({ walletDetails, onInputChange, onWalletTypeChange }) => {
    return (
        <div className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Wallet
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {WALLET_TYPES.map((wallet) => (
                        <button
                            key={wallet.id}
                            type="button"
                            onClick={() => onWalletTypeChange(wallet.id)}
                            className={`p-4 border-2 rounded-lg flex flex-col items-center transition duration-200 ${
                                walletDetails.walletType === wallet.id
                                    ? 'border-teal-600 bg-teal-50'
                                    : 'border-gray-200 hover:border-teal-300'
                            }`}
                        >
                            <div className={`w-10 h-10 ${wallet.color} rounded-full flex items-center justify-center mb-2`}>
                                <span className="text-white font-bold text-sm">{wallet.short}</span>
                            </div>
                            <span className="text-xs font-medium">{wallet.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wallet ID / UPI ID
                </label>
                <input
                    type="text"
                    name="walletId"
                    value={walletDetails.walletId}
                    onChange={onInputChange}
                    placeholder="username@bank"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">+94</span>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={walletDetails.phoneNumber}
                        onChange={onInputChange}
                        placeholder="77 123 4567"
                        maxLength="10"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-700">
                    You will receive a payment request on your UPI app. Please approve it to complete the payment.
                </p>
            </div>
        </div>
    );
};

export default WalletPaymentForm;