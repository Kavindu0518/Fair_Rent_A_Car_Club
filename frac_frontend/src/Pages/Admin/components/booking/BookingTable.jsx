// src/Pages/Admin/components/booking/BookingTable.jsx
import React from 'react';

const BookingTable = ({ data, searchTerm, onViewDetails, getStatusColor, formatCurrency, formatDate }) => {
    const filteredData = data.filter(booking => 
        `BK${String(booking.id).padStart(4, '0')}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toString().includes(searchTerm)
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Dropoff</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(booking => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm">cust_id {booking.customerId}</td>
                            <td className="py-3 px-4 text-sm">veh_id {booking.vehicleId}</td>
                            <td className="py-3 px-4 text-sm">{formatDate(booking.pickupDate)}</td>
                            <td className="py-3 px-4 text-sm">{formatDate(booking.dropOffDate)}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                                    {booking.bookingStatus}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(booking.paymentStatus)}`}>
                                    {booking.paymentStatus}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(booking.totalPrice)}</td>
                            <td className="py-3 px-4">
                                <button
                                    onClick={() => onViewDetails(booking)}
                                    className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No bookings found matching your search
                </div>
            )}
        </div>
    );
};

export default BookingTable;