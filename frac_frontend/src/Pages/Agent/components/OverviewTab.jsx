// // src/Pages/Agent/components/OverviewTab.jsx
// import React from 'react';

// const OverviewTab = ({ 
//     agentData, 
//     recentBookings, 
//     vehicles, 
//     stats, 
//     isBookingsLoading, 
//     setActiveTab,
//     getStatusColor,
//     getPaymentStatusColor,
//     formatCurrency,
//     formatDate,
//     getRatingStars
// }) => {
//     return (
//         <>
//             {/* Profile Summary */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
//                 <div className="flex flex-col md:flex-row gap-6">
//                     <div className="flex-1">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <p className="text-sm text-gray-600">Company Name</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Tagline</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Email</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Contact Number</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Business Registration</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Member Since</p>
//                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="md:w-64">
//                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
//                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
//                             <div className="flex justify-center mb-2">
//                                 {getRatingStars(4.5)}
//                             </div>
//                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Recent Bookings */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
//                     <button 
//                         onClick={() => setActiveTab('bookings')}
//                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
//                     >
//                         View All →
//                     </button>
//                 </div>
//                 {isBookingsLoading ? (
//                     <div className="text-center py-8">
//                         <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
//                         <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
//                     </div>
//                 ) : recentBookings.length === 0 ? (
//                     <div className="text-center py-8 bg-gray-50 rounded-lg">
//                         <p className="text-gray-500">No bookings yet</p>
//                     </div>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full">
//                             <thead>
//                                 <tr className="border-b border-gray-200">
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
//                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {recentBookings.slice(0, 3).map((booking) => (
//                                     <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
//                                         <td className="py-3 text-sm text-gray-800">
//                                             {booking.customer?.fullName || 
//                                              `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
//                                              `Customer #${booking.customerId}`}
//                                         </td>
//                                         <td className="py-3 text-sm text-gray-800">
//                                             {booking.vehicle?.displayInfo || 
//                                              `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
//                                         </td>
//                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
//                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
//                                         <td className="py-3">
//                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
//                                                 {booking.bookingStatus}
//                                             </span>
//                                         </td>
//                                         <td className="py-3">
//                                             <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                                                 {booking.paymentStatus}
//                                             </span>
//                                         </td>
//                                         <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>

//             {/* Vehicle Summary */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
//                     <button 
//                         onClick={() => setActiveTab('vehicles')}
//                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
//                     >
//                         Manage Vehicles →
//                     </button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
//                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                             </svg>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-600">Total Vehicles</p>
//                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
//                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-600">Avg Daily Rate</p>
//                             <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                             </svg>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-600">Available Now</p>
//                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default OverviewTab;


// src/Pages/Agent/components/OverviewTab.jsx
import React from 'react';

const OverviewTab = ({ 
    agentData, 
    recentBookings, 
    vehicles, 
    stats, 
    isBookingsLoading, 
    setActiveTab,
    getStatusColor,
    getPaymentStatusColor,
    formatCurrency,
    formatDate,
    getRatingStars
}) => {
    // Generate rating stars
    const renderRatingStars = () => {
        const stars = getRatingStars(4.5);
        return stars.map((star) => (
            <svg 
                key={star.key} 
                className={`w-5 h-5 ${star.filled ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <>
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Company Name</p>
                                <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Tagline</p>
                                <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="font-semibold text-gray-800">{agentData?.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Contact Number</p>
                                <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Business Registration</p>
                                <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Member Since</p>
                                <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-64">
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
                            <div className="flex justify-center mb-2">
                                {renderRatingStars()}
                            </div>
                            <p className="text-sm text-gray-600">Based on 128 reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
                    <button 
                        onClick={() => setActiveTab('bookings')}
                        className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                    >
                        View All →
                    </button>
                </div>
                {isBookingsLoading ? (
                    <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
                        <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
                    </div>
                ) : recentBookings.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No bookings yet</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.slice(0, 3).map((booking) => (
                                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 text-sm text-gray-800">
                                            {booking.customer?.fullName || 
                                             `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
                                             `Customer #${booking.customerId}`}
                                        </td>
                                        <td className="py-3 text-sm text-gray-800">
                                            {booking.vehicle?.displayInfo || 
                                             `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                                        </td>
                                        <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
                                        <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
                                        <td className="py-3">
                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                                                {booking.bookingStatus}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                                                {booking.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Vehicle Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
                    <button 
                        onClick={() => setActiveTab('vehicles')}
                        className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                    >
                        Manage Vehicles →
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Vehicles</p>
                            <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
                        </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Avg Daily Rate</p>
                            <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
                        </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Available Now</p>
                            <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewTab;