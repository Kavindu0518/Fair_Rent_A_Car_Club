import React from 'react';

const BookingStats = ({ stats }) => {
    const statItems = [
        { label: 'Total Bookings', value: stats.total, color: 'teal' },
        { label: 'Pending Payment', value: stats.pending, color: 'yellow' },
        { label: 'Confirmed', value: stats.confirmed, color: 'blue' },
        { label: 'Completed', value: stats.completed, color: 'green' },
        { label: 'Cancelled', value: stats.cancelled, color: 'red' }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {statItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
                    <p className={`text-2xl font-bold text-${item.color}-600`}>{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default BookingStats;