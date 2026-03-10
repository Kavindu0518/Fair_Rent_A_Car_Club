// src/Pages/Admin/components/OverviewDashboard.jsx
import React from 'react';

const OverviewDashboard = ({ 
    stats, 
    recentActivities, 
    allBookings, 
    formatCurrency, 
    formatDate, 
    getStatusColor,
    onNavigate 
}) => {
    const today = new Date().toDateString();
    const todayPickups = allBookings.filter(b => {
        const pickupDate = new Date(b.pickupDate).toDateString();
        return pickupDate === today && b.bookingStatus !== 'CANCELLED';
    }).slice(0, 5);

    const quickActions = [
        {
            title: 'Pending Approvals',
            count: stats.pendingAgents,
            description: 'New agent registrations waiting for review',
            color: 'red',
            icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
            navigateTo: () => onNavigate('user', 'agents')
        },
        {
            title: 'Bank Transfers',
            count: stats.pendingTransfers,
            description: 'Pending payment verifications',
            color: 'yellow',
            icon: (
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
            ),
            navigateTo: () => onNavigate('payment', 'bank-transfers')
        },
        {
            title: 'Pending Bookings',
            count: stats.pendingBookings,
            description: 'Bookings awaiting confirmation',
            color: 'orange',
            icon: (
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            navigateTo: () => onNavigate('booking', 'pending')
        }
    ];

    const keyMetrics = [
        {
            label: 'Total Revenue',
            value: formatCurrency(stats.totalRevenue),
            subValue: `${formatCurrency(stats.todayRevenue)} today`,
            color: 'blue',
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            label: 'Active Bookings',
            value: stats.confirmedBookings,
            subValue: `${stats.todayPickups} pickups today`,
            color: 'green',
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: 'Total Users',
            value: stats.totalAgents + stats.totalCustomers,
            subValue: `${stats.totalAgents} Agents · ${stats.totalCustomers} Customers`,
            color: 'purple',
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            label: 'Vehicles',
            value: stats.totalVehicles,
            subValue: `${stats.availableVehicles} available`,
            color: 'yellow',
            icon: (
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl shadow-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Good to see you again! 👋</h2>
                <p className="text-teal-100">Here's what's happening with your platform today.</p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-600">{metric.label}</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{metric.value}</p>
                                <p className="text-xs text-green-600 mt-2">{metric.subValue}</p>
                            </div>
                            <div className={`w-10 h-10 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                                {metric.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                    <button
                        key={index}
                        onClick={action.navigateTo}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-left group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">{action.title}</h3>
                            <span className={`bg-${action.color}-100 text-${action.color}-600 text-sm font-bold px-2 py-1 rounded-full`}>
                                {action.count}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                        <div className="flex items-center text-teal-600 group-hover:text-teal-700">
                            <span className="text-sm font-medium">Review Now</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {recentActivities.slice(0, 5).map(activity => (
                            <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    activity.type === 'booking' ? 'bg-blue-100' :
                                    activity.type === 'payment' ? 'bg-green-100' : 'bg-purple-100'
                                }`}>
                                    {activity.type === 'booking' && (
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    {activity.type === 'payment' && (
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )}
                                    {activity.type === 'transfer' && (
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.description}</p>
                                    <div className="flex items-center mt-1">
                                        <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                                            {activity.status}
                                        </span>
                                        <span className="text-xs text-gray-400 ml-2">{formatDate(activity.time)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Today's Pickups */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Pickups</h3>
                    {todayPickups.length > 0 ? (
                        <div className="space-y-3">
                            {todayPickups.map(booking => (
                                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-800">#BK{String(booking.id).padStart(4, '0')}</p>
                                        <p className="text-xs text-gray-500">Customer #{booking.customerId}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
                                        <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                                            {booking.bookingStatus}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-500">No pickups scheduled for today</p>
                        </div>
                    )}
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="bg-teal-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-teal-600">Available Vehicles</p>
                            <p className="text-xl font-bold text-teal-700">{stats.availableVehicles}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-purple-600">Completed Today</p>
                            <p className="text-xl font-bold text-purple-700">{stats.completedBookings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewDashboard;