// src/Pages/Agent/components/EarningsTab.jsx
import React from 'react';

const EarningsTab = ({ earningsData, stats, vehicles, formatCurrency }) => {
    const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">This Month</p>
                    <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
                    <p className="text-xs mt-2">
                        {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
                        {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">Last Month</p>
                    <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
                    <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
                    <p className="text-sm mb-2">Average per Booking</p>
                    <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
                    <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
                </div>
            </div>

            {/* Earnings Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
                <div className="h-48 flex items-end justify-between gap-2">
                    {earningsData.map((item) => {
                        const barHeight = (item.amount / maxEarnings) * 100;
                        return (
                            <div key={item.month} className="flex-1 flex flex-col items-center">
                                <div 
                                    className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
                                    style={{ height: `${barHeight}%`, minHeight: '40px' }}
                                >
                                    <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
                                        {formatCurrency(item.amount)}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Potential Earnings Based on Daily Rates */}
            {vehicles.length > 0 && (
                <div className="mt-8 bg-teal-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">If all vehicles rented</p>
                            <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
                            <p className="text-xs text-gray-500">per day</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">Highest daily rate</p>
                            <p className="text-2xl font-bold text-teal-600">
                                {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
                            </p>
                            <p className="text-xs text-gray-500">per day</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">Lowest daily rate</p>
                            <p className="text-2xl font-bold text-teal-600">
                                {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
                            </p>
                            <p className="text-xs text-gray-500">per day</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">Monthly potential</p>
                            <p className="text-2xl font-bold text-teal-600">
                                {formatCurrency(stats.totalVehicleValue * 30)}
                            </p>
                            <p className="text-xs text-gray-500">if fully booked</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EarningsTab;




// // src/Pages/Agent/components/EarningsTab.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BankTransferManagement from './BankTransferManagement';

// const EarningsTab = ({ earningsData, stats, vehicles, formatCurrency, BASE_URL = 'http://localhost:8080' }) => {
//     const [pendingTransfers, setPendingTransfers] = useState([]);
//     const [isLoadingTransfers, setIsLoadingTransfers] = useState(false);
//     const [selectedTransfer, setSelectedTransfer] = useState(null);
//     const [showTransferModal, setShowTransferModal] = useState(false);
//     const [transferStats, setTransferStats] = useState({
//         total: 0,
//         pending: 0,
//         verified: 0,
//         rejected: 0,
//         totalAmount: 0
//     });

//     const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

//     // Fetch pending bank transfers
//     useEffect(() => {
//         fetchPendingTransfers();
//     }, []);

//     const fetchPendingTransfers = async () => {
//         setIsLoadingTransfers(true);
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//             });

//             // Filter transfers that belong to this agent's bookings
//             const allTransfers = response.data;
            
//             // Get all bookings for this agent to filter transfers
//             const bookingsResponse = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//             });

//             const agentBookings = bookingsResponse.data.filter(booking => 
//                 booking.agentId === parseInt(agentId)
//             );

//             const agentBookingIds = agentBookings.map(b => b.id);

//             // Filter transfers for this agent's bookings
//             const agentTransfers = allTransfers.filter(transfer => 
//                 agentBookingIds.includes(transfer.bookingId)
//             );

//             // Fetch booking details for each transfer
//             const transfersWithDetails = await Promise.all(
//                 agentTransfers.map(async (transfer) => {
//                     const booking = agentBookings.find(b => b.id === transfer.bookingId);
//                     return {
//                         ...transfer,
//                         booking: booking || { totalPrice: 0, customerId: null }
//                     };
//                 })
//             );

//             setPendingTransfers(transfersWithDetails);

//             // Calculate stats
//             const stats = {
//                 total: transfersWithDetails.length,
//                 pending: transfersWithDetails.filter(t => t.status === 'Pending').length,
//                 verified: transfersWithDetails.filter(t => t.status === 'Verified').length,
//                 rejected: transfersWithDetails.filter(t => t.status === 'Rejected').length,
//                 totalAmount: transfersWithDetails
//                     .filter(t => t.status === 'Verified')
//                     .reduce((sum, t) => sum + (t.booking?.totalPrice || 0), 0)
//             };
//             setTransferStats(stats);

//         } catch (err) {
//             console.error('Error fetching bank transfers:', err);
//         } finally {
//             setIsLoadingTransfers(false);
//         }
//     };

//     const handleViewTransfer = (transfer) => {
//         setSelectedTransfer({
//             ...transfer,
//             customer: { fullName: `Customer #${transfer.booking?.customerId}` },
//             totalPrice: transfer.booking?.totalPrice || 0
//         });
//         setShowTransferModal(true);
//     };

//     const handleStatusUpdate = (newStatus) => {
//         // Refresh the transfers list
//         fetchPendingTransfers();
//     };

//     const getStatusBadgeColor = (status) => {
//         switch(status) {
//             case 'Verified': return 'bg-green-100 text-green-800';
//             case 'Pending': return 'bg-yellow-100 text-yellow-800';
//             case 'Rejected': return 'bg-red-100 text-red-800';
//             default: return 'bg-gray-100 text-gray-800';
//         }
//     };

//     return (
//         <div className="space-y-6">
//             {/* Existing Earnings Overview */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
//                         <p className="text-sm mb-2">This Month</p>
//                         <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
//                         <p className="text-xs mt-2">
//                             {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
//                             {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
//                         </p>
//                     </div>
//                     <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
//                         <p className="text-sm mb-2">Last Month</p>
//                         <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
//                         <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
//                     </div>
//                     <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
//                         <p className="text-sm mb-2">Average per Booking</p>
//                         <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
//                         <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
//                     </div>
//                 </div>

//                 {/* Earnings Chart */}
//                 <div className="bg-gray-50 rounded-xl p-6">
//                     <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
//                     <div className="h-48 flex items-end justify-between gap-2">
//                         {earningsData.map((item) => {
//                             const barHeight = (item.amount / maxEarnings) * 100;
//                             return (
//                                 <div key={item.month} className="flex-1 flex flex-col items-center">
//                                     <div 
//                                         className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
//                                         style={{ height: `${barHeight}%`, minHeight: '40px' }}
//                                     >
//                                         <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
//                                             {formatCurrency(item.amount)}
//                                         </div>
//                                     </div>
//                                     <span className="text-xs text-gray-600 mt-2">{item.month}</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* NEW: Bank Transfer Management Section */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Bank Transfer Verification</h2>
//                     <button
//                         onClick={fetchPendingTransfers}
//                         className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
//                         title="Refresh"
//                     >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Transfer Stats Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                     <div className="bg-gray-50 rounded-lg p-4">
//                         <p className="text-sm text-gray-600">Total Transfers</p>
//                         <p className="text-2xl font-bold text-gray-800">{transferStats.total}</p>
//                     </div>
//                     <div className="bg-yellow-50 rounded-lg p-4">
//                         <p className="text-sm text-yellow-600">Pending Verification</p>
//                         <p className="text-2xl font-bold text-yellow-700">{transferStats.pending}</p>
//                     </div>
//                     <div className="bg-green-50 rounded-lg p-4">
//                         <p className="text-sm text-green-600">Verified</p>
//                         <p className="text-2xl font-bold text-green-700">{transferStats.verified}</p>
//                     </div>
//                     <div className="bg-blue-50 rounded-lg p-4">
//                         <p className="text-sm text-blue-600">Total Verified Amount</p>
//                         <p className="text-2xl font-bold text-blue-700">{formatCurrency(transferStats.totalAmount)}</p>
//                     </div>
//                 </div>

//                 {/* Pending Transfers List */}
//                 {isLoadingTransfers ? (
//                     <div className="text-center py-8">
//                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                         <p className="mt-2 text-gray-600">Loading transfers...</p>
//                     </div>
//                 ) : pendingTransfers.filter(t => t.status === 'Pending').length > 0 ? (
//                     <div className="space-y-3">
//                         <h3 className="font-semibold text-gray-700 mb-3">Pending Verifications</h3>
//                         {pendingTransfers
//                             .filter(t => t.status === 'Pending')
//                             .map((transfer) => (
//                                 <div key={transfer.id} className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors">
//                                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                                         <div className="flex-1">
//                                             <div className="flex items-center gap-3 mb-2">
//                                                 <span className="text-sm font-medium text-gray-500">BT-{String(transfer.id).padStart(4, '0')}</span>
//                                                 <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeColor(transfer.status)}`}>
//                                                     {transfer.status}
//                                                 </span>
//                                             </div>
//                                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
//                                                 <div>
//                                                     <p className="text-gray-500 text-xs">Booking ID</p>
//                                                     <p className="font-medium">#BK{String(transfer.bookingId).padStart(4, '0')}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-gray-500 text-xs">Amount</p>
//                                                     <p className="font-medium text-teal-600">{formatCurrency(transfer.booking?.totalPrice || 0)}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-gray-500 text-xs">Bank</p>
//                                                     <p className="font-medium truncate">{transfer.bankName}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-gray-500 text-xs">Reference</p>
//                                                     <p className="font-mono text-xs truncate">{transfer.transferReference}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <button
//                                             onClick={() => handleViewTransfer(transfer)}
//                                             className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium whitespace-nowrap"
//                                         >
//                                             Review Transfer
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                     </div>
//                 ) : (
//                     <div className="text-center py-8 bg-gray-50 rounded-xl">
//                         <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                         <p className="text-gray-600">No pending bank transfers</p>
//                     </div>
//                 )}

//                 {/* Recently Verified */}
//                 {pendingTransfers.filter(t => t.status !== 'Pending').length > 0 && (
//                     <div className="mt-6">
//                         <h3 className="font-semibold text-gray-700 mb-3">Recent Verifications</h3>
//                         <div className="space-y-2">
//                             {pendingTransfers
//                                 .filter(t => t.status !== 'Pending')
//                                 .slice(0, 3)
//                                 .map((transfer) => (
//                                     <div key={transfer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                                         <div className="flex items-center gap-3">
//                                             <span className={`w-2 h-2 rounded-full ${
//                                                 transfer.status === 'Verified' ? 'bg-green-500' : 'bg-red-500'
//                                             }`}></span>
//                                             <span className="text-sm font-medium">#BK{String(transfer.bookingId).padStart(4, '0')}</span>
//                                             <span className="text-sm text-gray-600">{transfer.bankName}</span>
//                                         </div>
//                                         <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(transfer.status)}`}>
//                                             {transfer.status}
//                                         </span>
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Potential Earnings Section */}
//             {vehicles.length > 0 && (
//                 <div className="bg-teal-50 rounded-2xl shadow-lg p-6">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         <div className="bg-white rounded-lg p-4">
//                             <p className="text-sm text-gray-600">If all vehicles rented</p>
//                             <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
//                             <p className="text-xs text-gray-500">per day</p>
//                         </div>
//                         <div className="bg-white rounded-lg p-4">
//                             <p className="text-sm text-gray-600">Highest daily rate</p>
//                             <p className="text-2xl font-bold text-teal-600">
//                                 {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
//                             </p>
//                             <p className="text-xs text-gray-500">per day</p>
//                         </div>
//                         <div className="bg-white rounded-lg p-4">
//                             <p className="text-sm text-gray-600">Lowest daily rate</p>
//                             <p className="text-2xl font-bold text-teal-600">
//                                 {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
//                             </p>
//                             <p className="text-xs text-gray-500">per day</p>
//                         </div>
//                         <div className="bg-white rounded-lg p-4">
//                             <p className="text-sm text-gray-600">Monthly potential</p>
//                             <p className="text-2xl font-bold text-teal-600">
//                                 {formatCurrency(stats.totalVehicleValue * 30)}
//                             </p>
//                             <p className="text-xs text-gray-500">if fully booked</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Bank Transfer Verification Modal */}
//             {showTransferModal && selectedTransfer && (
//                 <BankTransferManagement
//                     booking={selectedTransfer}
//                     onClose={() => {
//                         setShowTransferModal(false);
//                         setSelectedTransfer(null);
//                     }}
//                     onStatusUpdate={handleStatusUpdate}
//                     formatCurrency={formatCurrency}
//                     formatDate={(date) => new Date(date).toLocaleDateString()}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//         </div>
//     );
// };

// export default EarningsTab;