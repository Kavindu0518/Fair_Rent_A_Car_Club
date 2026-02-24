// import React from 'react';
// import BookingCard from './BookingCard';

// const BookingList = ({ 
//     isLoading, 
//     errorMessage, 
//     filteredBookings, 
//     onRefresh, 
//     onViewDetails, 
//     onMakePayment,
//     onDownloadReceipt 
// }) => {
//     if (isLoading) {
//         return (
//             <div className="text-center py-12">
//                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                 <p className="text-gray-600">Loading your bookings...</p>
//             </div>
//         );
//     }

//     if (errorMessage) {
//         return (
//             <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
//                 <p className="text-red-700">{errorMessage}</p>
//                 <button
//                     onClick={onRefresh}
//                     className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                     Try Again
//                 </button>
//             </div>
//         );
//     }

//     if (filteredBookings.length === 0) {
//         return (
//             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                 <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
//                 <p className="text-gray-600 mb-6">You haven't made any bookings yet</p>
//                 <a
//                     href="/customer/dashboard"
//                     className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                 >
//                     Browse Vehicles
//                 </a>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-4">
//             {filteredBookings.map((booking) => (
//                 <BookingCard
//                     key={booking.id}
//                     booking={booking}
//                     onViewDetails={onViewDetails}
//                     onMakePayment={onMakePayment}
//                     onDownloadReceipt={onDownloadReceipt}
//                 />
//             ))}
//         </div>
//     );
// };

// export default BookingList;



import React from 'react';
import BookingCard from './BookingCard';

const BookingList = ({ 
    isLoading, 
    errorMessage, 
    filteredBookings, 
    onRefresh, 
    onViewDetails, 
    onMakePayment,
    onDownloadReceipt 
}) => {
    if (isLoading) {
        return (
            <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                <p className="text-gray-600">Loading your bookings...</p>
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                <p className="text-red-700">{errorMessage}</p>
                <button
                    onClick={onRefresh}
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (filteredBookings.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
                <p className="text-gray-600 mb-6">You haven't made any bookings yet</p>
                <a
                    href="/customer/dashboard"
                    className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    Browse Vehicles
                </a>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {filteredBookings.map((booking) => (
                <BookingCard
                    key={booking.id}
                    booking={booking}
                    onViewDetails={onViewDetails}
                    onMakePayment={onMakePayment}
                    onDownloadReceipt={onDownloadReceipt}
                />
            ))}
        </div>
    );
};

export default BookingList;