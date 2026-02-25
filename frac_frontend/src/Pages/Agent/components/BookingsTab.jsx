// // // // src/Pages/Agent/components/BookingsTab.jsx
// // // import React from 'react';

// // // const BookingsTab = ({ 
// // //     recentBookings,
// // //     isBookingsLoading,
// // //     bookingStatusFilter,
// // //     setBookingStatusFilter,
// // //     bookingSearchTerm,
// // //     setBookingSearchTerm,
// // //     handleUpdateBookingStatus,
// // //     getStatusColor,
// // //     getPaymentStatusColor,
// // //     formatCurrency,
// // //     formatDate
// // // }) => {
// // //     return (
// // //         <div className="bg-white rounded-2xl shadow-lg p-6">
// // //             <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // //                 <div className="flex gap-2">
// // //                     <select 
// // //                         value={bookingStatusFilter}
// // //                         onChange={(e) => setBookingStatusFilter(e.target.value)}
// // //                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     >
// // //                         <option value="">All Status</option>
// // //                         <option value="PENDING">Pending</option>
// // //                         <option value="CONFIRMED">Confirmed</option>
// // //                         <option value="PAID">Completed</option>
// // //                         <option value="CANCELLED">Cancelled</option>
// // //                     </select>
// // //                     <input 
// // //                         type="text" 
// // //                         placeholder="Search bookings..." 
// // //                         value={bookingSearchTerm}
// // //                         onChange={(e) => setBookingSearchTerm(e.target.value)}
// // //                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     />
// // //                 </div>
// // //             </div>
            
// // //             {isBookingsLoading ? (
// // //                 <div className="text-center py-12">
// // //                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // //                     <p className="mt-2 text-gray-600">Loading bookings...</p>
// // //                 </div>
// // //             ) : recentBookings.length === 0 ? (
// // //                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// // //                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                     </svg>
// // //                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
// // //                     <p className="text-gray-600">No bookings match your filters</p>
// // //                 </div>
// // //             ) : (
// // //                 <div className="overflow-x-auto">
// // //                     <table className="min-w-full">
// // //                         <thead>
// // //                             <tr className="border-b border-gray-200">
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // //                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // //                             </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                             {recentBookings.map((booking) => (
// // //                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // //                                     <td className="py-3 text-sm text-gray-800">#BK00{booking.id}</td>
// // //                                     <td className="py-3 text-sm text-gray-800">
// // //                                         {booking.customer?.fullName || 
// // //                                          `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
// // //                                          `Customer #${booking.customerId}`}
// // //                                     </td>
// // //                                     <td className="py-3 text-sm text-gray-800">
// // //                                         {booking.vehicle?.displayInfo || 
// // //                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
// // //                                     </td>
// // //                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// // //                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// // //                                     <td className="py-3">
// // //                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
// // //                                             {booking.bookingStatus}
// // //                                         </span>
// // //                                     </td>
// // //                                     <td className="py-3">
// // //                                         <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
// // //                                             {booking.paymentStatus}
// // //                                         </span>
// // //                                     </td>
// // //                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// // //                                     <td className="py-3">
// // //                                         <button 
// // //                                             onClick={() => handleUpdateBookingStatus(booking.id, 'CONFIRMED')}
// // //                                             className="text-green-600 hover:text-green-800 mr-2 text-sm"
// // //                                             disabled={booking.bookingStatus === 'CONFIRMED'}
// // //                                         >
// // //                                             Confirm
// // //                                         </button>
// // //                                         <button 
// // //                                             onClick={() => handleUpdateBookingStatus(booking.id, 'PAID')}
// // //                                             className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
// // //                                             disabled={booking.bookingStatus === 'PAID'}
// // //                                         >
// // //                                             Complete
// // //                                         </button>
// // //                                         <button className="text-teal-600 hover:text-teal-800 text-sm">
// // //                                             View
// // //                                         </button>
// // //                                     </td>
// // //                                 </tr>
// // //                             ))}
// // //                         </tbody>
// // //                     </table>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default BookingsTab;



// // // src/Pages/Agent/components/BookingsTab.jsx
// // import React, { useState } from 'react';

// // const BookingsTab = ({ 
// //     recentBookings,
// //     isBookingsLoading,
// //     bookingStatusFilter,
// //     setBookingStatusFilter,
// //     bookingSearchTerm,
// //     setBookingSearchTerm,
// //     handleUpdateBookingStatus,
// //     handleUpdatePaymentStatus,
// //     getStatusColor,
// //     getPaymentStatusColor,
// //     formatCurrency,
// //     formatDate
// // }) => {
// //     const [selectedBooking, setSelectedBooking] = useState(null);
// //     const [showStatusModal, setShowStatusModal] = useState(false);
// //     const [showPaymentModal, setShowPaymentModal] = useState(false);
// //     const [newStatus, setNewStatus] = useState('');
// //     const [newPaymentStatus, setNewPaymentStatus] = useState('');

// //     const bookingStatusOptions = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];
// //     const paymentStatusOptions = ['PENDING', 'PAID', 'UNPAID', 'UNPAID_CASH_PICKUP', 'CHECKING_BANK_TRANSFER'];

// //     const openStatusModal = (booking) => {
// //         setSelectedBooking(booking);
// //         setNewStatus(booking.bookingStatus);
// //         setShowStatusModal(true);
// //     };

// //     const openPaymentModal = (booking) => {
// //         setSelectedBooking(booking);
// //         setNewPaymentStatus(booking.paymentStatus);
// //         setShowPaymentModal(true);
// //     };

// //     const confirmStatusUpdate = () => {
// //         if (selectedBooking && newStatus) {
// //             handleUpdateBookingStatus(selectedBooking.id, newStatus);
// //             setShowStatusModal(false);
// //             setSelectedBooking(null);
// //         }
// //     };

// //     const confirmPaymentUpdate = () => {
// //         if (selectedBooking && newPaymentStatus) {
// //             handleUpdatePaymentStatus(selectedBooking.id, newPaymentStatus);
// //             setShowPaymentModal(false);
// //             setSelectedBooking(null);
// //         }
// //     };

// //     const getDisplayStatus = (status) => {
// //         if (!status) return 'PENDING';
// //         return status;
// //     };

// //     const getDisplayPaymentStatus = (status) => {
// //         if (!status) return 'PENDING';
// //         return status.replace(/_/g, ' ');
// //     };

// //     return (
// //         <div className="bg-white rounded-2xl shadow-lg p-6">
// //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
// //                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// //                 <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
// //                     <select 
// //                         value={bookingStatusFilter}
// //                         onChange={(e) => setBookingStatusFilter(e.target.value)}
// //                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
// //                     >
// //                         <option value="">All Status</option>
// //                         {bookingStatusOptions.map(status => (
// //                             <option key={status} value={status}>{status}</option>
// //                         ))}
// //                     </select>
// //                     <input 
// //                         type="text" 
// //                         placeholder="Search bookings..." 
// //                         value={bookingSearchTerm}
// //                         onChange={(e) => setBookingSearchTerm(e.target.value)}
// //                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
// //                     />
// //                 </div>
// //             </div>
            
// //             {isBookingsLoading ? (
// //                 <div className="text-center py-12">
// //                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// //                     <p className="mt-2 text-gray-600">Loading bookings...</p>
// //                 </div>
// //             ) : recentBookings.length === 0 ? (
// //                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// //                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                     </svg>
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
// //                     <p className="text-gray-600">No bookings match your filters</p>
// //                 </div>
// //             ) : (
// //                 <div className="overflow-x-auto">
// //                     <table className="min-w-full">
// //                         <thead>
// //                             <tr className="border-b border-gray-200">
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking Status</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
// //                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {recentBookings.map((booking) => (
// //                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                                     <td className="py-3 px-4 text-sm text-gray-800 font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
// //                                     <td className="py-3 px-4 text-sm text-gray-800">
// //                                         {booking.customer?.fullName || 
// //                                          `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
// //                                          `Customer #${booking.customerId}`}
// //                                     </td>
// //                                     <td className="py-3 px-4 text-sm text-gray-800">
// //                                         {booking.vehicle?.displayInfo || 
// //                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
// //                                     </td>
// //                                     <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// //                                     <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// //                                     <td className="py-3 px-4">
// //                                         <button
// //                                             onClick={() => openStatusModal(booking)}
// //                                             className="w-full text-left"
// //                                         >
// //                                             <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(getDisplayStatus(booking.bookingStatus))}`}>
// //                                                 {getDisplayStatus(booking.bookingStatus)}
// //                                             </span>
// //                                         </button>
// //                                     </td>
// //                                     <td className="py-3 px-4">
// //                                         <button
// //                                             onClick={() => openPaymentModal(booking)}
// //                                             className="w-full text-left"
// //                                         >
// //                                             <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getPaymentStatusColor(booking.paymentStatus)}`}>
// //                                                 {getDisplayPaymentStatus(booking.paymentStatus)}
// //                                             </span>
// //                                         </button>
// //                                     </td>
// //                                     <td className="py-3 px-4 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// //                                     <td className="py-3 px-4">
// //                                         <div className="flex flex-col gap-2">
// //                                             <button 
// //                                                 onClick={() => openStatusModal(booking)}
// //                                                 className="text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors font-medium"
// //                                             >
// //                                                 Update Status
// //                                             </button>
// //                                             <button 
// //                                                 onClick={() => openPaymentModal(booking)}
// //                                                 className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors font-medium"
// //                                             >
// //                                                 Update Payment
// //                                             </button>
// //                                             <button className="text-xs bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors font-medium">
// //                                                 View Details
// //                                             </button>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             )}

// //             {/* Status Update Modal */}
// //             {showStatusModal && selectedBooking && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //                     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
// //                         <div className="p-6">
// //                             <h3 className="text-xl font-bold text-gray-800 mb-4">Update Booking Status</h3>
// //                             <p className="text-sm text-gray-600 mb-4">
// //                                 Booking: #{String(selectedBooking.id).padStart(4, '0')} - {selectedBooking.customer?.fullName || 'Customer'}
// //                             </p>
                            
// //                             <div className="space-y-3">
// //                                 {bookingStatusOptions.map((status) => (
// //                                     <label key={status} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
// //                                         <input
// //                                             type="radio"
// //                                             name="bookingStatus"
// //                                             value={status}
// //                                             checked={newStatus === status}
// //                                             onChange={(e) => setNewStatus(e.target.value)}
// //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
// //                                         />
// //                                         <span className="ml-3 text-sm text-gray-700 flex items-center">
// //                                             <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
// //                                                 status === 'CONFIRMED' ? 'bg-green-500' :
// //                                                 status === 'PENDING' ? 'bg-yellow-500' :
// //                                                 status === 'COMPLETED' ? 'bg-blue-500' :
// //                                                 'bg-red-500'
// //                                             }`}></span>
// //                                             {status}
// //                                         </span>
// //                                     </label>
// //                                 ))}
// //                             </div>

// //                             <div className="flex gap-3 mt-6">
// //                                 <button
// //                                     onClick={confirmStatusUpdate}
// //                                     disabled={!newStatus || newStatus === selectedBooking.bookingStatus}
// //                                     className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
// //                                         !newStatus || newStatus === selectedBooking.bookingStatus
// //                                             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
// //                                             : 'bg-teal-600 text-white hover:bg-teal-700'
// //                                     }`}
// //                                 >
// //                                     Update Status
// //                                 </button>
// //                                 <button
// //                                     onClick={() => {
// //                                         setShowStatusModal(false);
// //                                         setSelectedBooking(null);
// //                                     }}
// //                                     className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}

// //             {/* Payment Status Update Modal */}
// //             {showPaymentModal && selectedBooking && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //                     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
// //                         <div className="p-6">
// //                             <h3 className="text-xl font-bold text-gray-800 mb-4">Update Payment Status</h3>
// //                             <p className="text-sm text-gray-600 mb-4">
// //                                 Booking: #{String(selectedBooking.id).padStart(4, '0')} - Total: {formatCurrency(selectedBooking.totalPrice)}
// //                             </p>
                            
// //                             <div className="space-y-3 max-h-96 overflow-y-auto">
// //                                 {paymentStatusOptions.map((status) => (
// //                                     <label key={status} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
// //                                         <input
// //                                             type="radio"
// //                                             name="paymentStatus"
// //                                             value={status}
// //                                             checked={newPaymentStatus === status}
// //                                             onChange={(e) => setNewPaymentStatus(e.target.value)}
// //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
// //                                         />
// //                                         <span className="ml-3 text-sm text-gray-700">
// //                                             {getDisplayPaymentStatus(status)}
// //                                         </span>
// //                                     </label>
// //                                 ))}
// //                             </div>

// //                             <div className="flex gap-3 mt-6">
// //                                 <button
// //                                     onClick={confirmPaymentUpdate}
// //                                     disabled={!newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus}
// //                                     className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
// //                                         !newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus
// //                                             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
// //                                             : 'bg-teal-600 text-white hover:bg-teal-700'
// //                                     }`}
// //                                 >
// //                                     Update Payment
// //                                 </button>
// //                                 <button
// //                                     onClick={() => {
// //                                         setShowPaymentModal(false);
// //                                         setSelectedBooking(null);
// //                                     }}
// //                                     className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default BookingsTab;



// // src/Pages/Agent/components/BookingsTab.jsx
// import React, { useState } from 'react';

// const BookingsTab = ({ 
//     recentBookings,
//     isBookingsLoading,
//     bookingStatusFilter,
//     setBookingStatusFilter,
//     bookingSearchTerm,
//     setBookingSearchTerm,
//     handleUpdateBookingStatus,
//     handleUpdatePaymentStatus,
//     getStatusColor,
//     getPaymentStatusColor,
//     formatCurrency,
//     formatDate
// }) => {
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [showStatusModal, setShowStatusModal] = useState(false);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const [newStatus, setNewStatus] = useState('');
//     const [newPaymentStatus, setNewPaymentStatus] = useState('');

//     const bookingStatusOptions = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];
//     const paymentStatusOptions = ['PENDING', 'PAID', 'UNPAID', 'UNPAID_CASH_PICKUP', 'CHECKING_BANK_TRANSFER'];

//     const openStatusModal = (booking) => {
//         setSelectedBooking(booking);
//         setNewStatus(booking.bookingStatus);
//         setShowStatusModal(true);
//     };

//     const openPaymentModal = (booking) => {
//         setSelectedBooking(booking);
//         setNewPaymentStatus(booking.paymentStatus);
//         setShowPaymentModal(true);
//     };

//     const confirmStatusUpdate = () => {
//         if (selectedBooking && newStatus) {
//             handleUpdateBookingStatus(selectedBooking.id, newStatus);
//             setShowStatusModal(false);
//             setSelectedBooking(null);
//         }
//     };

//     const confirmPaymentUpdate = () => {
//         if (selectedBooking && newPaymentStatus) {
//             handleUpdatePaymentStatus(selectedBooking.id, newPaymentStatus);
//             setShowPaymentModal(false);
//             setSelectedBooking(null);
//         }
//     };

//     const getDisplayStatus = (status) => {
//         if (!status) return 'PENDING';
//         return status;
//     };

//     const getDisplayPaymentStatus = (status) => {
//         if (!status) return 'PENDING';
//         return status.replace(/_/g, ' ');
//     };

//     return (
//         <div className="bg-white rounded-2xl shadow-lg p-6">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
//                 <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//                     <select 
//                         value={bookingStatusFilter}
//                         onChange={(e) => setBookingStatusFilter(e.target.value)}
//                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
//                     >
//                         <option value="">All Status</option>
//                         {bookingStatusOptions.map(status => (
//                             <option key={status} value={status}>{status}</option>
//                         ))}
//                     </select>
//                     <input 
//                         type="text" 
//                         placeholder="Search bookings..." 
//                         value={bookingSearchTerm}
//                         onChange={(e) => setBookingSearchTerm(e.target.value)}
//                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
//                     />
//                 </div>
//             </div>
            
//             {isBookingsLoading ? (
//                 <div className="text-center py-12">
//                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                     <p className="mt-2 text-gray-600">Loading bookings...</p>
//                 </div>
//             ) : recentBookings.length === 0 ? (
//                 <div className="text-center py-12 bg-gray-50 rounded-xl">
//                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
//                     <p className="text-gray-600">No bookings match your filters</p>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full">
//                         <thead>
//                             <tr className="border-b border-gray-200">
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking ID</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking Status</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
//                                 <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {recentBookings.map((booking) => (
//                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
//                                     <td className="py-3 px-4 text-sm text-gray-800 font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
//                                     <td className="py-3 px-4 text-sm text-gray-800">
//                                         {booking.customer?.fullName || 
//                                          `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
//                                          `Customer #${booking.customerId}`}
//                                     </td>
//                                     <td className="py-3 px-4 text-sm text-gray-800">
//                                         {booking.vehicle?.displayInfo || 
//                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
//                                     </td>
//                                     <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
//                                     <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
//                                     <td className="py-3 px-4">
//                                         <button
//                                             onClick={() => openStatusModal(booking)}
//                                             className="w-full text-left"
//                                         >
//                                             <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(getDisplayStatus(booking.bookingStatus))}`}>
//                                                 {getDisplayStatus(booking.bookingStatus)}
//                                             </span>
//                                         </button>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <button
//                                             onClick={() => openPaymentModal(booking)}
//                                             className="w-full text-left"
//                                         >
//                                             <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                                                 {getDisplayPaymentStatus(booking.paymentStatus)}
//                                             </span>
//                                         </button>
//                                     </td>
//                                     <td className="py-3 px-4 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex flex-col gap-2">
//                                             <button 
//                                                 onClick={() => openStatusModal(booking)}
//                                                 className="text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors font-medium"
//                                             >
//                                                 Update Status
//                                             </button>
//                                             <button 
//                                                 onClick={() => openPaymentModal(booking)}
//                                                 className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors font-medium"
//                                             >
//                                                 Update Payment
//                                             </button>
//                                             <button className="text-xs bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors font-medium">
//                                                 View Details
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             {/* Status Update Modal */}
//             {showStatusModal && selectedBooking && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
//                         <div className="p-6">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="text-xl font-bold text-gray-800">Update Booking Status</h3>
//                                 <button
//                                     onClick={() => {
//                                         setShowStatusModal(false);
//                                         setSelectedBooking(null);
//                                     }}
//                                     className="text-gray-400 hover:text-gray-600"
//                                 >
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <p className="text-sm text-gray-600 mb-4">
//                                 Booking: <span className="font-medium">#BK{String(selectedBooking.id).padStart(4, '0')}</span> - {selectedBooking.customer?.fullName || 'Customer'}
//                             </p>
                            
//                             <div className="space-y-3">
//                                 {bookingStatusOptions.map((status) => (
//                                     <label key={status} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
//                                         newStatus === status ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
//                                     }`}>
//                                         <input
//                                             type="radio"
//                                             name="bookingStatus"
//                                             value={status}
//                                             checked={newStatus === status}
//                                             onChange={(e) => setNewStatus(e.target.value)}
//                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                                         />
//                                         <span className="ml-3 text-sm text-gray-700 flex items-center">
//                                             <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
//                                                 status === 'CONFIRMED' ? 'bg-green-500' :
//                                                 status === 'PENDING' ? 'bg-yellow-500' :
//                                                 status === 'COMPLETED' ? 'bg-blue-500' :
//                                                 'bg-red-500'
//                                             }`}></span>
//                                             {status}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>

//                             <div className="flex gap-3 mt-6">
//                                 <button
//                                     onClick={confirmStatusUpdate}
//                                     disabled={!newStatus || newStatus === selectedBooking.bookingStatus}
//                                     className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
//                                         !newStatus || newStatus === selectedBooking.bookingStatus
//                                             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                             : 'bg-teal-600 text-white hover:bg-teal-700'
//                                     }`}
//                                 >
//                                     Update Status
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         setShowStatusModal(false);
//                                         setSelectedBooking(null);
//                                     }}
//                                     className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Payment Status Update Modal */}
//             {showPaymentModal && selectedBooking && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
//                         <div className="p-6">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="text-xl font-bold text-gray-800">Update Payment Status</h3>
//                                 <button
//                                     onClick={() => {
//                                         setShowPaymentModal(false);
//                                         setSelectedBooking(null);
//                                     }}
//                                     className="text-gray-400 hover:text-gray-600"
//                                 >
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <p className="text-sm text-gray-600 mb-2">
//                                 Booking: <span className="font-medium">#BK{String(selectedBooking.id).padStart(4, '0')}</span>
//                             </p>
//                             <p className="text-sm font-medium text-gray-800 mb-4">
//                                 Total Amount: {formatCurrency(selectedBooking.totalPrice)}
//                             </p>
                            
//                             <div className="space-y-3 max-h-96 overflow-y-auto">
//                                 {paymentStatusOptions.map((status) => (
//                                     <label key={status} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
//                                         newPaymentStatus === status ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
//                                     }`}>
//                                         <input
//                                             type="radio"
//                                             name="paymentStatus"
//                                             value={status}
//                                             checked={newPaymentStatus === status}
//                                             onChange={(e) => setNewPaymentStatus(e.target.value)}
//                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                                         />
//                                         <span className="ml-3 text-sm text-gray-700">
//                                             {getDisplayPaymentStatus(status)}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>

//                             <div className="flex gap-3 mt-6">
//                                 <button
//                                     onClick={confirmPaymentUpdate}
//                                     disabled={!newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus}
//                                     className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
//                                         !newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus
//                                             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                             : 'bg-teal-600 text-white hover:bg-teal-700'
//                                     }`}
//                                 >
//                                     Update Payment
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         setShowPaymentModal(false);
//                                         setSelectedBooking(null);
//                                     }}
//                                     className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingsTab;



// src/Pages/Agent/components/BookingsTab.jsx
import React, { useState } from 'react';

const BookingsTab = ({ 
    recentBookings,
    isBookingsLoading,
    bookingStatusFilter,
    setBookingStatusFilter,
    bookingSearchTerm,
    setBookingSearchTerm,
    handleUpdateBookingStatus,
    handleUpdatePaymentStatus,
    getStatusColor,
    getPaymentStatusColor,
    formatCurrency,
    formatDate
}) => {
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [newStatus, setNewStatus] = useState('');
    const [newPaymentStatus, setNewPaymentStatus] = useState('');

    const bookingStatusOptions = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];
    const paymentStatusOptions = ['PENDING', 'PAID', 'UNPAID', 'UNPAID_CASH_PICKUP', 'CHECKING_BANK_TRANSFER'];

    const openStatusModal = (booking) => {
        setSelectedBooking(booking);
        setNewStatus(booking.bookingStatus);
        setShowStatusModal(true);
    };

    const openPaymentModal = (booking) => {
        setSelectedBooking(booking);
        setNewPaymentStatus(booking.paymentStatus);
        setShowPaymentModal(true);
    };

    const openDetailsModal = (booking) => {
        setSelectedBooking(booking);
        setShowDetailsModal(true);
    };

    const confirmStatusUpdate = () => {
        if (selectedBooking && newStatus) {
            handleUpdateBookingStatus(selectedBooking.id, newStatus);
            setShowStatusModal(false);
            setSelectedBooking(null);
        }
    };

    const confirmPaymentUpdate = () => {
        if (selectedBooking && newPaymentStatus) {
            handleUpdatePaymentStatus(selectedBooking.id, newPaymentStatus);
            setShowPaymentModal(false);
            setSelectedBooking(null);
        }
    };

    const getDisplayStatus = (status) => {
        if (!status) return 'PENDING';
        return status;
    };

    const getDisplayPaymentStatus = (status) => {
        if (!status) return 'PENDING';
        return status.replace(/_/g, ' ');
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <select 
                        value={bookingStatusFilter}
                        onChange={(e) => setBookingStatusFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
                    >
                        <option value="">All Status</option>
                        {bookingStatusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    <input 
                        type="text" 
                        placeholder="Search bookings..." 
                        value={bookingSearchTerm}
                        onChange={(e) => setBookingSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-auto"
                    />
                </div>
            </div>
            
            {isBookingsLoading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                    <p className="mt-2 text-gray-600">Loading bookings...</p>
                </div>
            ) : recentBookings.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
                    <p className="text-gray-600">No bookings match your filters</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking ID</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Booking Status</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm text-gray-800 font-medium">#BK{String(booking.id).padStart(4, '0')}</td>
                                    <td className="py-3 px-4 text-sm text-gray-800">
                                        {booking.customer?.fullName || 
                                         `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
                                         `Customer #${booking.customerId}`}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-800">
                                        {booking.vehicle?.displayInfo || 
                                         `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
                                    <td className="py-3 px-4 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => openStatusModal(booking)}
                                            className="w-full text-left"
                                        >
                                            <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(getDisplayStatus(booking.bookingStatus))}`}>
                                                {getDisplayStatus(booking.bookingStatus)}
                                            </span>
                                        </button>
                                    </td>
                                    {/* <td className="py-3 px-4">
                                        <button
                                            onClick={() => openPaymentModal(booking)}
                                            className="w-full text-left"
                                        >
                                            <span className={`inline-block px-3 py-1.5 text-xs rounded-full cursor-pointer hover:opacity-80 transition-opacity ${getPaymentStatusColor(booking.paymentStatus)}`}>
                                                {getDisplayPaymentStatus(booking.paymentStatus)}
                                            </span>
                                        </button>
                                    </td> */}

                                    <td className="py-3 px-4 align-middle">
                                        <button
                                            onClick={() => openPaymentModal(booking)}
                                            className="w-full flex justify-center"
                                        >
                                            <span className={`inline-flex items-center justify-center px-3 py-1.5 text-xs rounded-full text-center whitespace-normal break-words max-w-[120px] cursor-pointer hover:opacity-80 transition-opacity ${getPaymentStatusColor(booking.paymentStatus)}`}>
                                                {getDisplayPaymentStatus(booking.paymentStatus)}
                                            </span>
                                        </button>
                                    </td>
                                    <td className="py-3 px-4 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            {/* Status Update Icon Button */}
                                            <button
                                                onClick={() => openStatusModal(booking)}
                                                className="p-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors group relative"
                                                title="Update Booking Status"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    Update Status
                                                </span>
                                            </button>

                                            {/* Payment Update Icon Button */}
                                            <button
                                                onClick={() => openPaymentModal(booking)}
                                                className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors group relative"
                                                title="Update Payment Status"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    Update Payment
                                                </span>
                                            </button>

                                            {/* View Details Icon Button */}
                                            <button
                                                onClick={() => openDetailsModal(booking)}
                                                className="p-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors group relative"
                                                title="View Details"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Status Update Modal */}
            {showStatusModal && selectedBooking && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800">Update Booking Status</h3>
                                <button
                                    onClick={() => {
                                        setShowStatusModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Booking: <span className="font-medium">#BK{String(selectedBooking.id).padStart(4, '0')}</span> - {selectedBooking.customer?.fullName || 'Customer'}
                            </p>
                            
                            <div className="space-y-3">
                                {bookingStatusOptions.map((status) => (
                                    <label key={status} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                                        newStatus === status ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="radio"
                                            name="bookingStatus"
                                            value={status}
                                            checked={newStatus === status}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                        />
                                        <span className="ml-3 text-sm text-gray-700 flex items-center">
                                            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                                status === 'CONFIRMED' ? 'bg-green-500' :
                                                status === 'PENDING' ? 'bg-yellow-500' :
                                                status === 'COMPLETED' ? 'bg-blue-500' :
                                                'bg-red-500'
                                            }`}></span>
                                            {status}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={confirmStatusUpdate}
                                    disabled={!newStatus || newStatus === selectedBooking.bookingStatus}
                                    className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
                                        !newStatus || newStatus === selectedBooking.bookingStatus
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-teal-600 text-white hover:bg-teal-700'
                                    }`}
                                >
                                    Update Status
                                </button>
                                <button
                                    onClick={() => {
                                        setShowStatusModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Payment Status Update Modal */}
            {showPaymentModal && selectedBooking && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800">Update Payment Status</h3>
                                <button
                                    onClick={() => {
                                        setShowPaymentModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                Booking: <span className="font-medium">#BK{String(selectedBooking.id).padStart(4, '0')}</span>
                            </p>
                            <p className="text-sm font-medium text-gray-800 mb-4">
                                Total Amount: {formatCurrency(selectedBooking.totalPrice)}
                            </p>
                            
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                {paymentStatusOptions.map((status) => (
                                    <label key={status} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                                        newPaymentStatus === status ? 'border-teal-500 bg-teal-50' : 'hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="radio"
                                            name="paymentStatus"
                                            value={status}
                                            checked={newPaymentStatus === status}
                                            onChange={(e) => setNewPaymentStatus(e.target.value)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                        />
                                        <span className="ml-3 text-sm text-gray-700">
                                            {getDisplayPaymentStatus(status)}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={confirmPaymentUpdate}
                                    disabled={!newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus}
                                    className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
                                        !newPaymentStatus || newPaymentStatus === selectedBooking.paymentStatus
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-teal-600 text-white hover:bg-teal-700'
                                    }`}
                                >
                                    Update Payment
                                </button>
                                <button
                                    onClick={() => {
                                        setShowPaymentModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Details Modal */}
            {showDetailsModal && selectedBooking && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Booking Details</h3>
                                <button
                                    onClick={() => {
                                        setShowDetailsModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Customer Information */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Customer Information
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="text-gray-500">Name:</span> <span className="font-medium">{selectedBooking.customer?.fullName || 'N/A'}</span></p>
                                        <p><span className="text-gray-500">Customer ID:</span> <span className="font-medium">#CUS{String(selectedBooking.customerId).padStart(4, '0')}</span></p>
                                    </div>
                                </div>

                                {/* Vehicle Information */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        Vehicle Information
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="text-gray-500">Vehicle:</span> <span className="font-medium">{selectedBooking.vehicle?.makeModel || 'N/A'}</span></p>
                                        <p><span className="text-gray-500">Registration:</span> <span className="font-medium">{selectedBooking.vehicle?.regNumber || 'N/A'}</span></p>
                                    </div>
                                </div>

                                {/* Booking Details */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Booking Details
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="text-gray-500">Booking ID:</span> <span className="font-medium">#BK{String(selectedBooking.id).padStart(4, '0')}</span></p>
                                        <p><span className="text-gray-500">Pickup Date:</span> <span className="font-medium">{formatDate(selectedBooking.pickupDate)}</span></p>
                                        <p><span className="text-gray-500">Drop-off Date:</span> <span className="font-medium">{formatDate(selectedBooking.dropOffDate)}</span></p>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Payment Information
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="text-gray-500">Total Amount:</span> <span className="font-medium text-teal-600">{formatCurrency(selectedBooking.totalPrice)}</span></p>
                                        <p><span className="text-gray-500">Booking Status:</span> 
                                            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(selectedBooking.bookingStatus)}`}>
                                                {selectedBooking.bookingStatus}
                                            </span>
                                        </p>
                                        <p><span className="text-gray-500">Payment Status:</span>
                                            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(selectedBooking.paymentStatus)}`}>
                                                {getDisplayPaymentStatus(selectedBooking.paymentStatus)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => {
                                        setShowDetailsModal(false);
                                        // Small delay to ensure details modal is closed before opening status modal
                                        setTimeout(() => {
                                            openStatusModal(selectedBooking);
                                        }, 100);
                                    }}
                                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                                >
                                    Update Status
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDetailsModal(false);
                                        // Small delay to ensure details modal is closed before opening payment modal
                                        setTimeout(() => {
                                            openPaymentModal(selectedBooking);
                                        }, 100);
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    Update Payment
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDetailsModal(false);
                                        setSelectedBooking(null);
                                    }}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingsTab;