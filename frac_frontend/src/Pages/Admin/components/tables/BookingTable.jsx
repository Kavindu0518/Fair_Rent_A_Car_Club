// // src/Pages/Admin/components/tables/BookingTable.jsx
// import React from 'react';

// const BookingTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatCurrency, formatDate }) => {
//     // Add debug logging
//     console.log('BookingTable received:', { 
//         dataLength: data?.length, 
//         searchTerm,
//         hasOnView: !!onView,
//         hasOnEdit: !!onEdit,
//         hasOnDelete: !!onDelete 
//     });

//     // Ensure data is an array
//     const bookingData = Array.isArray(data) ? data : [];
    
//     const filteredData = bookingData.filter(booking => 
//         booking?.id?.toString().includes(searchTerm) ||
//         booking?.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         booking?.vehicleName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         booking?.agentCompanyName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full">
//                 <thead>
//                     <tr className="border-b border-gray-200">
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking ID</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Agent</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking Status</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map(booking => (
//                         <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
//                             <td className="py-3 px-4 text-sm font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
//                             <td className="py-3 px-4 text-sm">{booking.customerName || `Customer #${booking.customerId}`}</td>
//                             <td className="py-3 px-4 text-sm">{booking.vehicleName || `Vehicle #${booking.vehicleId}`}</td>
//                             <td className="py-3 px-4 text-sm">{booking.agentCompanyName || `Agent #${booking.agentId}`}</td>
//                             <td className="py-3 px-4 text-sm">{formatDate(booking.pickupDate)}</td>
//                             <td className="py-3 px-4 text-sm">{formatDate(booking.dropOffDate)}</td>
//                             <td className="py-3 px-4">
//                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
//                                     {booking.bookingStatus}
//                                 </span>
//                             </td>
//                             <td className="py-3 px-4">
//                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(booking.paymentStatus)}`}>
//                                     {booking.paymentStatus}
//                                 </span>
//                             </td>
//                             <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(booking.totalPrice)}</td>
//                             <td className="py-3 px-4">
//                                 <div className="flex items-center gap-2">
//                                     {/* View Icon */}
//                                     <button
//                                         onClick={() => onView && onView(booking)}
//                                         className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
//                                         title="View Details"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                         </svg>
//                                     </button>

//                                     {/* Edit Icon */}
//                                     <button
//                                         onClick={() => onEdit && onEdit(booking)}
//                                         className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
//                                         title="Edit Booking"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                         </svg>
//                                     </button>

//                                     {/* Delete Icon */}
//                                     <button
//                                         onClick={() => onDelete && onDelete(booking.id)}
//                                         className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
//                                         title="Delete Booking"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {filteredData.length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                     No bookings found matching your search
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingTable;



// src/Pages/Admin/components/tables/BookingTable.jsx
import React from 'react';

const BookingTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatCurrency, formatDate }) => {
    // Add debug logging
    console.log('BookingTable received:', { 
        dataLength: data?.length, 
        searchTerm,
        hasOnView: !!onView,
        hasOnEdit: !!onEdit,
        hasOnDelete: !!onDelete 
    });

    // Ensure data is an array
    const bookingData = Array.isArray(data) ? data : [];
    
    const filteredData = bookingData.filter(booking => 
        booking?.id?.toString().includes(searchTerm) ||
        booking?.customerId?.toString().includes(searchTerm) ||
        booking?.vehicleId?.toString().includes(searchTerm) ||
        booking?.agentId?.toString().includes(searchTerm)
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Agent ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(booking => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-medium">CUS{String(booking.customerId).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-medium">VEH{String(booking.vehicleId).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-medium">AG{String(booking.agentId).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm">{formatDate(booking.pickupDate)}</td>
                            <td className="py-3 px-4 text-sm">{formatDate(booking.dropOffDate)}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full text-center ${getStatusColor(booking.bookingStatus)}`}>
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
                                <div className="flex items-center gap-2">
                                    {/* View Icon */}
                                    <button
                                        onClick={() => onView && onView(booking)}
                                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                                        title="View Details"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>

                                    {/* Edit Icon */}
                                    <button
                                        onClick={() => onEdit && onEdit(booking)}
                                        className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
                                        title="Edit Booking"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>

                                    {/* Delete Icon */}
                                    <button
                                        onClick={() => onDelete && onDelete(booking.id)}
                                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                                        title="Delete Booking"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
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