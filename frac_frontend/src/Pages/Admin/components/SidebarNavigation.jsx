// src/Pages/Admin/components/SidebarNavigation.jsx
import React from 'react';

const SidebarNavigation = ({ activeMainTab, setActiveMainTab, stats, formatCurrency, adminData }) => {
    const menuItems = [
        {
            id: 'overview',
            label: 'Dashboard Overview',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 'user',
            label: 'User Management',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            badge: stats.pendingAgents > 0 ? stats.pendingAgents : null
        },
        {
            id: 'vehicle',
            label: 'Vehicle Management',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            id: 'booking',
            label: 'Booking Management',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'payment',
            label: 'Payment Management',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg sticky top-8 overflow-hidden">
                {/* Admin Profile */}
                <div className="p-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-teal-600 font-bold text-lg">
                                {adminData?.fullName?.charAt(0) || 'A'}
                            </span>
                        </div>
                        <div className="ml-3">
                            <p className="font-semibold">{adminData?.fullName}</p>
                            <p className="text-xs text-teal-200">{adminData?.role}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="p-4">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveMainTab(item.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition duration-200 mb-1 ${
                                activeMainTab === item.id
                                    ? 'bg-teal-50 text-teal-700'
                                    : 'hover:bg-gray-50 text-gray-700'
                            }`}
                        >
                            <div className="flex items-center">
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                            </div>
                            {item.badge && (
                                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Quick Stats Footer */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Today's Revenue:</span>
                            <span className="font-bold text-green-600">{formatCurrency(stats.todayRevenue)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Pending Actions:</span>
                            <span className="font-bold text-red-600">
                                {stats.pendingBookings + stats.pendingAgents + stats.pendingTransfers}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarNavigation;