// // // import React from 'react';
// // // import { formatCurrency, formatDate, getStatusBadge } from './BookingUtils'; // This will now work with .jsx

// // // const BookingCard = ({ booking, onViewDetails, onMakePayment, onDownloadReceipt }) => {
// // //     return (
// // //         <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
// // //             <div className="p-6">
// // //                 <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
// // //                     <div className="flex items-center gap-3">
// // //                         <span className="text-lg font-bold text-gray-800">
// // //                             Booking #{booking.id}
// // //                         </span>
// // //                         {getStatusBadge(booking)}
// // //                     </div>
                    
// // //                     <div className="flex flex-wrap gap-2 w-full sm:w-auto">
// // //                         <button
// // //                             onClick={() => onViewDetails(booking)}
// // //                             className="flex-1 sm:flex-none px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200 text-sm font-medium"
// // //                         >
// // //                             View Details
// // //                         </button>
                        
// // //                         {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
// // //                             <button
// // //                                 onClick={() => onMakePayment(booking)}
// // //                                 className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-sm font-medium"
// // //                             >
// // //                                 Pay Now
// // //                             </button>
// // //                         )}
                        
// // //                         {booking.payment?.hasPdf && (
// // //                             <button
// // //                                 onClick={() => onDownloadReceipt(booking.payment.id)}
// // //                                 className="flex-1 sm:flex-none px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200 text-sm font-medium flex items-center justify-center"
// // //                             >
// // //                                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                                 </svg>
// // //                                 <span className="hidden sm:inline">Receipt</span>
// // //                             </button>
// // //                         )}
// // //                     </div>
// // //                 </div>
                
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //                     <div>
// // //                         <p className="text-xs text-gray-500">Vehicle</p>
// // //                         <p className="font-medium text-gray-800 text-sm">
// // //                             {booking.vehicle?.displayInfo || 
// // //                              `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
// // //                         </p>
// // //                     </div>
// // //                     <div>
// // //                         <p className="text-xs text-gray-500">Pickup Date</p>
// // //                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.pickupDate)}</p>
// // //                     </div>
// // //                     <div>
// // //                         <p className="text-xs text-gray-500">Drop-off Date</p>
// // //                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.dropOffDate)}</p>
// // //                     </div>
// // //                     <div>
// // //                         <p className="text-xs text-gray-500">Total Amount</p>
// // //                         <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// // //                     </div>
// // //                 </div>

// // //                 <div className="mt-3 text-xs text-gray-500">
// // //                     <span className="font-medium">Provider:</span> {booking.agent?.companyName}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default BookingCard;


// // import React from 'react';
// // import { formatCurrency, formatDate, getStatusBadge } from './BookingUtils';

// // const BookingCard = ({ booking, onViewDetails, onMakePayment, onDownloadReceipt }) => {
// //     return (
// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
// //             <div className="p-6">
// //                 <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
// //                     <div className="flex items-center gap-3">
// //                         <span className="text-lg font-bold text-gray-800">
// //                             Booking #BK00{booking.id}
// //                         </span>
// //                         {getStatusBadge(booking)}
// //                     </div>
                    
// //                     <div className="flex flex-wrap gap-2 w-full sm:w-auto">
// //                         <button
// //                             onClick={() => onViewDetails(booking)}
// //                             className="flex-1 sm:flex-none px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200 text-sm font-medium"
// //                         >
// //                             View Details
// //                         </button>
                        
// //                         {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
// //                             <button
// //                                 onClick={() => onMakePayment(booking)}
// //                                 className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-sm font-medium"
// //                             >
// //                                 Pay Now
// //                             </button>
// //                         )}
                        
// //                         {booking.payment?.hasPdf && (
// //                             <button
// //                                 onClick={() => onDownloadReceipt(booking.payment.id)}
// //                                 className="flex-1 sm:flex-none px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200 text-sm font-medium flex items-center justify-center"
// //                             >
// //                                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                 </svg>
// //                                 <span className="hidden sm:inline">Receipt</span>
// //                             </button>
// //                         )}
// //                     </div>
// //                 </div>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                     <div>
// //                         <p className="text-xs text-gray-500">Vehicle</p>
// //                         <p className="font-medium text-gray-800 text-sm">
// //                             {booking.vehicle?.displayInfo || 
// //                              `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
// //                         </p>
// //                     </div>
// //                     <div>
// //                         <p className="text-xs text-gray-500">Pickup Date</p>
// //                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.pickupDate)}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-xs text-gray-500">Drop-off Date</p>
// //                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.dropOffDate)}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-xs text-gray-500">Total Amount</p>
// //                         <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                     </div>
// //                 </div>

// //                 <div className="mt-3 text-xs text-gray-500">
// //                     <span className="font-medium">Provider:</span> {booking.agent?.companyName}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BookingCard;


// // src/Pages/Customer/components/BookingCard.jsx
// import React from 'react';
// import { formatCurrency, formatDate, getStatusBadge } from './BookingUtils';

// const BookingCard = ({ booking, onViewDetails, onMakePayment, onDownloadReceipt, onEditBooking }) => {
//     // Check if booking can be edited (only pending bookings can be edited)
//     const canEdit = booking.paymentStatus === 'PENDING' && 
//                     booking.bookingStatus !== 'CANCELLED' && 
//                     booking.bookingStatus !== 'COMPLETED';

//     return (
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
//             <div className="p-6">
//                 <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
//                     <div className="flex items-center gap-3">
//                         <span className="text-lg font-bold text-gray-800">
//                             Booking #BK00{booking.id}
//                         </span>
//                         {getStatusBadge(booking)}
//                     </div>
                    
//                     <div className="flex flex-wrap gap-2 w-full sm:w-auto">
//                         <button
//                             onClick={() => onViewDetails(booking)}
//                             className="flex-1 sm:flex-none px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200 text-sm font-medium"
//                         >
//                             View Details
//                         </button>
                        
//                         {/* Edit Button - Only for editable bookings */}
//                         {canEdit && (
//                             <button
//                                 onClick={() => onEditBooking(booking)}
//                                 className="flex-1 sm:flex-none px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition duration-200 text-sm font-medium flex items-center justify-center"
//                             >
//                                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                 </svg>
//                                 Edit
//                             </button>
//                         )}
                        
//                         {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
//                             <button
//                                 onClick={() => onMakePayment(booking)}
//                                 className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-sm font-medium"
//                             >
//                                 Pay Now
//                             </button>
//                         )}
                        
//                         {booking.payment?.hasPdf && (
//                             <button
//                                 onClick={() => onDownloadReceipt(booking.payment.id)}
//                                 className="flex-1 sm:flex-none px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200 text-sm font-medium flex items-center justify-center"
//                             >
//                                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                                 <span className="hidden sm:inline">Receipt</span>
//                             </button>
//                         )}
//                     </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     <div>
//                         <p className="text-xs text-gray-500">Vehicle</p>
//                         <p className="font-medium text-gray-800 text-sm">
//                             {booking.vehicle?.displayInfo || 
//                              `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
//                         </p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Pickup Date</p>
//                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.pickupDate)}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Drop-off Date</p>
//                         <p className="font-medium text-gray-800 text-sm">{formatDate(booking.dropOffDate)}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Total Amount</p>
//                         <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                     </div>
//                 </div>

//                 <div className="mt-3 text-xs text-gray-500">
//                     <span className="font-medium">Provider:</span> {booking.agent?.companyName}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingCard;



// src/Pages/Customer/components/BookingCard.jsx
import React from 'react';
import { formatCurrency, formatDate, getStatusBadge } from './BookingUtils';

const BookingCard = ({ booking, onViewDetails, onMakePayment, onDownloadReceipt, onEditBooking }) => {
    // Debug: Log to check if props are received
    console.log('BookingCard props:', { 
        bookingId: booking.id, 
        hasOnEditBooking: !!onEditBooking,
        paymentStatus: booking.paymentStatus,
        bookingStatus: booking.bookingStatus
    });

    // Check if booking can be edited (only pending bookings can be edited)
    const canEdit = booking.paymentStatus === 'PENDING' && 
                    booking.bookingStatus !== 'CANCELLED' && 
                    booking.bookingStatus !== 'COMPLETED';

    // Debug: Log canEdit status
    console.log('Can Edit:', canEdit);

    const handleEditClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Edit button clicked for booking:', booking.id);
        if (onEditBooking) {
            onEditBooking(booking);
        } else {
            console.error('onEditBooking is not defined!');
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
            <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gray-800">
                            Booking #BK{String(booking.id).padStart(4, '0')}
                        </span>
                        {getStatusBadge(booking)}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        <button
                            onClick={() => onViewDetails(booking)}
                            className="flex-1 sm:flex-none px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200 text-sm font-medium"
                        >
                            View Details
                        </button>
                        
                        {/* Edit Button - Only for editable bookings */}
                        {canEdit && (
                            <button
                                onClick={handleEditClick}
                                className="flex-1 sm:flex-none px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition duration-200 text-sm font-medium flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Edit
                            </button>
                        )}
                        
                        {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
                            <button
                                onClick={() => onMakePayment(booking)}
                                className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-sm font-medium"
                            >
                                Pay Now
                            </button>
                        )}
                        
                        {booking.payment?.hasPdf && (
                            <button
                                onClick={() => onDownloadReceipt(booking.payment.id)}
                                className="flex-1 sm:flex-none px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200 text-sm font-medium flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="hidden sm:inline">Receipt</span>
                            </button>
                        )}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <p className="text-xs text-gray-500">Vehicle</p>
                        <p className="font-medium text-gray-800 text-sm">
                            {booking.vehicle?.displayInfo || 
                             `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Pickup Date</p>
                        <p className="font-medium text-gray-800 text-sm">{formatDate(booking.pickupDate)}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Drop-off Date</p>
                        <p className="font-medium text-gray-800 text-sm">{formatDate(booking.dropOffDate)}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Total Amount</p>
                        <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
                    </div>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                    <span className="font-medium">Provider:</span> {booking.agent?.companyName || 'N/A'}
                </div>

                {/* Debug info - remove in production */}
                {/* {process.env.NODE_ENV === 'development' && (
                    <div className="mt-2 text-xs text-gray-400 border-t pt-2">
                        <p>Debug: canEdit = {canEdit.toString()} | paymentStatus: {booking.paymentStatus} | bookingStatus: {booking.bookingStatus}</p>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default BookingCard;