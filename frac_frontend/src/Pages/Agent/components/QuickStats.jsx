// src/Pages/Agent/components/QuickStats.jsx
import React from 'react';

const QuickStats = ({ stats, vehicles, formatCurrency }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                    <div className="p-3 bg-teal-100 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-600">Total Vehicles</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
                        <p className="text-xs text-green-600">
                            {vehicles.filter(v => v.status === 'Available').length} available
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-600">Active Bookings</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
                        <p className="text-xs text-blue-600">{stats.pendingBookings} pending</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-600">Total Earnings</p>
                        <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
                        <p className="text-xs text-green-600">{stats.completedTrips} completed trips</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-600">Completion Rate</p>
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.totalBookings > 0 
                                ? Math.round((stats.completedTrips / stats.totalBookings) * 100) 
                                : 0}%
                        </p>
                        <p className="text-xs text-purple-600">{stats.totalBookings} total bookings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStats;