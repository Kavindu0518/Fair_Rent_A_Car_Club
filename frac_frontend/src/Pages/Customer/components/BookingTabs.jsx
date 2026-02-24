import React from 'react';

const BookingTabs = ({ activeTab, setActiveTab, stats }) => {
    const tabs = [
        { id: 'all', label: 'All My Bookings', count: stats.total, color: 'teal' },
        { id: 'pending', label: 'Pending Payment', count: stats.pending, color: 'teal' },
        { id: 'confirmed', label: 'Confirmed', count: stats.confirmed, color: 'blue' },
        { id: 'completed', label: 'Completed', count: stats.completed, color: 'green' },
        { id: 'cancelled', label: 'Cancelled', count: stats.cancelled, color: 'red' }
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-2 mb-6 overflow-x-auto">
            <div className="flex space-x-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                            activeTab === tab.id
                                ? `bg-${tab.color}-600 text-white`
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BookingTabs;