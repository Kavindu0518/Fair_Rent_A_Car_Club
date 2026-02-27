import React from 'react';
import { PICKUP_LOCATIONS } from '../PaymentConfig';

const CashPaymentForm = ({ cashDetails, onInputChange }) => {
    return (
        <div className="space-y-5">
            <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                    <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                        <h4 className="font-semibold text-green-800">Cash on Pickup</h4>
                        <p className="text-sm text-green-600">Pay when you pick up the vehicle</p>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                </label>
                <select
                    name="pickupLocation"
                    value={cashDetails.pickupLocation}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                >
                    <option value="">Select pickup location</option>
                    {PICKUP_LOCATIONS.map(location => (
                        <option key={location.value} value={location.value}>{location.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">+94</span>
                    <input
                        type="tel"
                        name="contactNumber"
                        value={cashDetails.contactNumber}
                        onChange={onInputChange}
                        placeholder="77 123 4567"
                        maxLength="10"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Pickup Time
                </label>
                <input
                    type="time"
                    name="preferredTime"
                    value={cashDetails.preferredTime}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-yellow-700">
                        Please bring exact change if possible. Our branch will have limited cash for change.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CashPaymentForm;