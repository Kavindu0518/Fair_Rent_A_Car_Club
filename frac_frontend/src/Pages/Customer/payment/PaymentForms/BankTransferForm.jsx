import React from 'react';
import { BANKS } from '../PaymentConfig';
import { formatCurrency } from '../PaymentUtils';

const BankTransferForm = ({ bankTransferDetails, booking, onInputChange, onFileUpload }) => {
    return (
        <div className="space-y-5">
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Bank Account Details</h4>
                <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Bank:</span> Fair Rent Bank</p>
                    <p><span className="font-medium">Account Name:</span> FRAC Vehicle Rentals</p>
                    <p><span className="font-medium">Account Number:</span> 1234 5678 9012 3456</p>
                    <p><span className="font-medium">Branch:</span> Colombo Main</p>
                    <p><span className="font-medium">Amount:</span> {formatCurrency(booking?.totalPrice)}</p>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Bank
                </label>
                <select
                    name="bankName"
                    value={bankTransferDetails.bankName}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                >
                    <option value="">Select bank</option>
                    {BANKS.map(bank => (
                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                </label>
                <input
                    type="text"
                    name="accountNumber"
                    value={bankTransferDetails.accountNumber}
                    onChange={onInputChange}
                    placeholder="Enter your account number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name
                </label>
                <input
                    type="text"
                    name="accountHolder"
                    value={bankTransferDetails.accountHolder}
                    onChange={onInputChange}
                    placeholder="As per bank records"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transfer Reference / Transaction ID
                </label>
                <input
                    type="text"
                    name="transferReference"
                    value={bankTransferDetails.transferReference}
                    onChange={onInputChange}
                    placeholder="Enter the reference number from your transfer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Payment Slip (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                        type="file"
                        id="slip-upload"
                        onChange={onFileUpload}
                        accept="image/*,.pdf"
                        className="hidden"
                    />
                    <label
                        htmlFor="slip-upload"
                        className="cursor-pointer flex flex-col items-center"
                    >
                        <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-sm text-gray-600">
                            {bankTransferDetails.uploadSlip ? 
                                bankTransferDetails.uploadSlip.name : 
                                'Click to upload payment slip'}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                            PDF, PNG, JPG (Max 5MB)
                        </span>
                    </label>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                    <span className="font-bold">Note:</span> Your payment will be verified within 24 hours. 
                    You'll receive a confirmation once verified.
                </p>
            </div>
        </div>
    );
};

export default BankTransferForm;