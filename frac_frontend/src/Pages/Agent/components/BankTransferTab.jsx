// // src/Pages/Agent/components/BankTransferTab.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BankTransferManagement from './BankTransferManagement';

// const BankTransferTab = ({ formatCurrency, BASE_URL = 'http://localhost:8080' }) => {
//     const [transfers, setTransfers] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [selectedTransfer, setSelectedTransfer] = useState(null);
//     const [showTransferModal, setShowTransferModal] = useState(false);
//     const [filterStatus, setFilterStatus] = useState('all');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [stats, setStats] = useState({
//         total: 0,
//         pending: 0,
//         verified: 0,
//         rejected: 0,
//         totalAmount: 0,
//         pendingAmount: 0
//     });

//     const fetchBankTransfers = async () => {
//         setIsLoading(true);
//         setError('');
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const token = localStorage.getItem('agentToken');

//             // Get all bank transfers
//             const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             // Get all bookings for this agent
//             const bookingsResponse = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             const agentBookings = bookingsResponse.data.filter(booking => 
//                 booking.agentId === parseInt(agentId)
//             );

//             const agentBookingIds = agentBookings.map(b => b.id);

//             // Filter transfers for this agent's bookings
//             const agentTransfers = response.data.filter(transfer => 
//                 agentBookingIds.includes(transfer.bookingId)
//             );

//             // Fetch booking details for each transfer
//             const transfersWithDetails = await Promise.all(
//                 agentTransfers.map(async (transfer) => {
//                     const booking = agentBookings.find(b => b.id === transfer.bookingId);
                    
//                     // Fetch customer details
//                     let customerName = 'Unknown Customer';
//                     if (booking?.customerId) {
//                         try {
//                             const customerResponse = await axios.get(`${BASE_URL}/api/v1/customer/${booking.customerId}`, {
//                                 headers: { 'Authorization': `Bearer ${token}` }
//                             });
//                             customerName = `${customerResponse.data.firstName || ''} ${customerResponse.data.lastName || ''}`.trim() || `Customer #${booking.customerId}`;
//                         } catch (err) {
//                             console.error('Error fetching customer:', err);
//                         }
//                     }

//                     return {
//                         ...transfer,
//                         booking: booking || { totalPrice: 0, customerId: null },
//                         customerName,
//                         formattedDate: new Date().toLocaleDateString() // You can use actual transfer date if available
//                     };
//                 })
//             );

//             // Sort by status (pending first) and then by id
//             const sortedTransfers = transfersWithDetails.sort((a, b) => {
//                 if (a.status === 'Pending' && b.status !== 'Pending') return -1;
//                 if (a.status !== 'Pending' && b.status === 'Pending') return 1;
//                 return b.id - a.id;
//             });

//             setTransfers(sortedTransfers);

//             // Calculate stats
//             const pending = sortedTransfers.filter(t => t.status === 'Pending').length;
//             const verified = sortedTransfers.filter(t => t.status === 'Verified').length;
//             const rejected = sortedTransfers.filter(t => t.status === 'Rejected').length;
//             const totalAmount = sortedTransfers
//                 .filter(t => t.status === 'Verified')
//                 .reduce((sum, t) => sum + (t.booking?.totalPrice || 0), 0);
//             const pendingAmount = sortedTransfers
//                 .filter(t => t.status === 'Pending')
//                 .reduce((sum, t) => sum + (t.booking?.totalPrice || 0), 0);

//             setStats({
//                 total: sortedTransfers.length,
//                 pending,
//                 verified,
//                 rejected,
//                 totalAmount,
//                 pendingAmount
//             });

//         } catch (err) {
//             console.error('Error fetching bank transfers:', err);
//             setError('Failed to load bank transfers');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchBankTransfers();
//     }, []);

//     const handleViewTransfer = (transfer) => {
//         setSelectedTransfer({
//             ...transfer,
//             customer: { fullName: transfer.customerName },
//             totalPrice: transfer.booking?.totalPrice || 0
//         });
//         setShowTransferModal(true);
//     };

//     const handleStatusUpdate = (newStatus) => {
//         // Refresh the transfers list
//         fetchBankTransfers();
//     };

//     const getStatusBadgeColor = (status) => {
//         switch(status) {
//             case 'Verified': return 'bg-green-100 text-green-800 border-green-200';
//             case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//             case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
//             default: return 'bg-gray-100 text-gray-800 border-gray-200';
//         }
//     };

//     const getStatusIcon = (status) => {
//         switch(status) {
//             case 'Verified':
//                 return (
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                 );
//             case 'Pending':
//                 return (
//                     <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                 );
//             case 'Rejected':
//                 return (
//                     <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 );
//             default:
//                 return null;
//         }
//     };

//     const filteredTransfers = transfers.filter(transfer => {
//         const matchesStatus = filterStatus === 'all' || transfer.status === filterStatus;
//         const matchesSearch = searchTerm === '' || 
//             transfer.bookingId.toString().includes(searchTerm) ||
//             transfer.bankName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             transfer.transferReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             transfer.customerName.toLowerCase().includes(searchTerm.toLowerCase());
//         return matchesStatus && matchesSearch;
//     });

//     return (
//         <div className="space-y-6">
//             {/* Header Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//                 <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-teal-500">
//                     <p className="text-sm text-gray-600">Total Transfers</p>
//                     <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-500">
//                     <p className="text-sm text-yellow-600">Pending</p>
//                     <p className="text-2xl font-bold text-yellow-700">{stats.pending}</p>
//                     <p className="text-xs text-gray-500">Amount: {formatCurrency(stats.pendingAmount)}</p>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
//                     <p className="text-sm text-green-600">Verified</p>
//                     <p className="text-2xl font-bold text-green-700">{stats.verified}</p>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-500">
//                     <p className="text-sm text-red-600">Rejected</p>
//                     <p className="text-2xl font-bold text-red-700">{stats.rejected}</p>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500">
//                     <p className="text-sm text-blue-600">Total Verified</p>
//                     <p className="text-2xl font-bold text-blue-700">{formatCurrency(stats.totalAmount)}</p>
//                 </div>
//             </div>

//             {/* Main Content Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 {/* Header with Filters */}
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                         <h2 className="text-xl font-bold text-gray-800 flex items-center">
//                             <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
//                             </svg>
//                             Bank Transfer Verification
//                         </h2>
//                         <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//                             <select
//                                 value={filterStatus}
//                                 onChange={(e) => setFilterStatus(e.target.value)}
//                                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                             >
//                                 <option value="all">All Status</option>
//                                 <option value="Pending">Pending</option>
//                                 <option value="Verified">Verified</option>
//                                 <option value="Rejected">Rejected</option>
//                             </select>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     placeholder="Search by booking ID, bank, reference..."
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                     className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                                 <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                 </svg>
//                             </div>
//                             <button
//                                 onClick={fetchBankTransfers}
//                                 className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
//                                 title="Refresh"
//                             >
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                     {isLoading ? (
//                         <div className="text-center py-12">
//                             <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                             <p className="mt-2 text-gray-600">Loading bank transfers...</p>
//                         </div>
//                     ) : error ? (
//                         <div className="text-center py-12">
//                             <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <p className="text-red-600">{error}</p>
//                             <button
//                                 onClick={fetchBankTransfers}
//                                 className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
//                             >
//                                 Try Again
//                             </button>
//                         </div>
//                     ) : filteredTransfers.length === 0 ? (
//                         <div className="text-center py-12 bg-gray-50 rounded-xl">
//                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                             </svg>
//                             <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bank Transfers Found</h3>
//                             <p className="text-gray-600">
//                                 {searchTerm || filterStatus !== 'all' 
//                                     ? 'No transfers match your filters' 
//                                     : 'No bank transfers have been submitted yet'}
//                             </p>
//                         </div>
//                     ) : (
//                         <div className="space-y-4">
//                             {filteredTransfers.map((transfer) => (
//                                 <div
//                                     key={transfer.id}
//                                     className={`border rounded-xl p-5 transition-all hover:shadow-md ${
//                                         transfer.status === 'Pending' 
//                                             ? 'border-yellow-200 bg-yellow-50/30' 
//                                             : transfer.status === 'Verified'
//                                             ? 'border-green-200 bg-green-50/30'
//                                             : transfer.status === 'Rejected'
//                                             ? 'border-red-200 bg-red-50/30'
//                                             : 'border-gray-200'
//                                     }`}
//                                 >
//                                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//                                         {/* Left Section - Basic Info */}
//                                         <div className="flex-1">
//                                             <div className="flex items-center gap-3 mb-3">
//                                                 <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border">
//                                                     BT-{String(transfer.id).padStart(6, '0')}
//                                                 </span>
//                                                 <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(transfer.status)}`}>
//                                                     {getStatusIcon(transfer.status)}
//                                                     {transfer.status}
//                                                 </span>
//                                                 <span className="text-sm text-gray-500">
//                                                     Booking: #BK{String(transfer.bookingId).padStart(4, '0')}
//                                                 </span>
//                                             </div>

//                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Customer</p>
//                                                     <p className="font-medium text-gray-800">{transfer.customerName}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Bank</p>
//                                                     <p className="font-medium text-gray-800">{transfer.bankName}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Account Number</p>
//                                                     <p className="font-mono text-sm">{transfer.accountNumber}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Amount</p>
//                                                     <p className="font-bold text-teal-600">{formatCurrency(transfer.booking?.totalPrice || 0)}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Reference</p>
//                                                     <p className="font-mono text-xs truncate" title={transfer.transferReference}>
//                                                         {transfer.transferReference}
//                                                     </p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Account Holder</p>
//                                                     <p className="text-sm truncate">{transfer.accountHolder}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Submitted</p>
//                                                     <p className="text-sm">{transfer.formattedDate}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-xs text-gray-500">Payment Slip</p>
//                                                     {transfer.paymentSlip ? (
//                                                         <span className="text-xs text-green-600 flex items-center">
//                                                             <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                             </svg>
//                                                             Uploaded
//                                                         </span>
//                                                     ) : (
//                                                         <span className="text-xs text-gray-500">No file</span>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Right Section - Action Button */}
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => handleViewTransfer(transfer)}
//                                                 className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
//                                                     transfer.status === 'Pending'
//                                                         ? 'bg-teal-600 text-white hover:bg-teal-700'
//                                                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                                 }`}
//                                             >
//                                                 {transfer.status === 'Pending' ? 'Review Transfer' : 'View Details'}
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* Show verification summary if already processed */}
//                                     {transfer.status !== 'Pending' && (
//                                         <div className="mt-3 pt-3 border-t border-gray-200">
//                                             <p className="text-xs text-gray-500">
//                                                 {transfer.status === 'Verified' 
//                                                     ? '✓ This transfer has been verified and payment has been processed'
//                                                     : '✗ This transfer has been rejected'
//                                                 }
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Bank Transfer Management Modal */}
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

// export default BankTransferTab;


// src/Pages/Agent/components/BankTransferTab.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BankTransferManagement from './BankTransferManagement';

const BankTransferTab = ({ 
    formatCurrency, 
    bankTransfers: propTransfers, 
    isTransfersLoading: propLoading, 
    refreshBankTransfers,
    BASE_URL = 'http://localhost:8080' 
}) => {
    const [transfers, setTransfers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedTransfer, setSelectedTransfer] = useState(null);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        verified: 0,
        rejected: 0,
        totalAmount: 0,
        pendingAmount: 0
    });

    // Use props if provided, otherwise fetch locally
    useEffect(() => {
        if (propTransfers) {
            setTransfers(propTransfers);
            calculateStats(propTransfers);
            setIsLoading(propLoading || false);
        } else {
            fetchBankTransfers();
        }
    }, [propTransfers, propLoading]);

    const fetchBankTransfers = async () => {
        setIsLoading(true);
        setError('');
        try {
            const agentId = localStorage.getItem('agentId');
            const token = localStorage.getItem('agentToken');

            // Get all bank transfers
            const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            // Get all bookings for this agent
            const bookingsResponse = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            const agentBookings = bookingsResponse.data.filter(booking => 
                booking.agentId === parseInt(agentId)
            );

            const agentBookingIds = agentBookings.map(b => b.id);

            // Filter transfers for this agent's bookings
            const agentTransfers = response.data.filter(transfer => 
                agentBookingIds.includes(transfer.bookingId)
            );

            // Fetch customer and booking details for each transfer
            const transfersWithDetails = await Promise.all(
                agentTransfers.map(async (transfer) => {
                    const booking = agentBookings.find(b => b.id === transfer.bookingId);
                    
                    // Fetch customer details
                    let customerName = 'Unknown Customer';
                    let customerId = null;
                    if (booking?.customerId) {
                        customerId = booking.customerId;
                        try {
                            const customerResponse = await axios.get(`${BASE_URL}/api/v1/customer/${booking.customerId}`, {
                                headers: { 'Authorization': `Bearer ${token}` }
                            });
                            customerName = `${customerResponse.data.firstName || ''} ${customerResponse.data.lastName || ''}`.trim();
                            if (!customerName) {
                                customerName = `Customer #${booking.customerId}`;
                            }
                        } catch (err) {
                            console.error('Error fetching customer:', err);
                            customerName = `Customer #${booking.customerId}`;
                        }
                    }

                    return {
                        ...transfer,
                        booking: booking || { 
                            totalPrice: 0, 
                            customerId: null,
                            bookingStatus: 'UNKNOWN',
                            paymentStatus: 'UNKNOWN'
                        },
                        customerName,
                        customerId,
                        formattedDate: transfer.createdAt ? new Date(transfer.createdAt).toLocaleDateString() : new Date().toLocaleDateString(),
                        formattedTime: transfer.createdAt ? new Date(transfer.createdAt).toLocaleTimeString() : new Date().toLocaleTimeString()
                    };
                })
            );

            // Sort by status (pending first) and then by id (newest first)
            const sortedTransfers = transfersWithDetails.sort((a, b) => {
                if (a.status === 'Pending' && b.status !== 'Pending') return -1;
                if (a.status !== 'Pending' && b.status === 'Pending') return 1;
                return b.id - a.id;
            });

            setTransfers(sortedTransfers);
            calculateStats(sortedTransfers);

        } catch (err) {
            console.error('Error fetching bank transfers:', err);
            setError('Failed to load bank transfers. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const calculateStats = (transferData) => {
        const pending = transferData.filter(t => t.status === 'Pending').length;
        const verified = transferData.filter(t => t.status === 'Verified').length;
        const rejected = transferData.filter(t => t.status === 'Rejected').length;
        const totalAmount = transferData
            .filter(t => t.status === 'Verified')
            .reduce((sum, t) => sum + (t.booking?.totalPrice || 0), 0);
        const pendingAmount = transferData
            .filter(t => t.status === 'Pending')
            .reduce((sum, t) => sum + (t.booking?.totalPrice || 0), 0);

        setStats({
            total: transferData.length,
            pending,
            verified,
            rejected,
            totalAmount,
            pendingAmount
        });
    };

    const handleViewTransfer = (transfer) => {
        // Create a properly structured booking object for BankTransferManagement
        const bookingForModal = {
            id: transfer.bookingId,
            bookingId: transfer.bookingId, // Add both for compatibility
            customer: { 
                fullName: transfer.customerName || 'Unknown Customer',
                id: transfer.customerId
            },
            customerName: transfer.customerName,
            totalPrice: transfer.booking?.totalPrice || 0,
            bookingStatus: transfer.booking?.bookingStatus || 'PENDING',
            paymentStatus: transfer.booking?.paymentStatus || 'PENDING',
            pickupDate: transfer.booking?.pickupDate || new Date().toISOString(),
            dropOffDate: transfer.booking?.dropOffDate || new Date().toISOString()
        };

        setSelectedTransfer({
            ...transfer,
            booking: bookingForModal,
            customerName: transfer.customerName
        });
        setShowTransferModal(true);
    };

    const handleStatusUpdate = () => {
        // Refresh the transfers list
        if (refreshBankTransfers) {
            refreshBankTransfers();
        } else {
            fetchBankTransfers();
        }
        setShowTransferModal(false);
        setSelectedTransfer(null);
    };

    const getStatusBadgeColor = (status) => {
        switch(status) {
            case 'Verified': return 'bg-green-100 text-green-800 border-green-200';
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200 animate-pulse';
            case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Verified':
                return (
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case 'Pending':
                return (
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'Rejected':
                return (
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const filteredTransfers = transfers.filter(transfer => {
        const matchesStatus = filterStatus === 'all' || transfer.status === filterStatus;
        const matchesSearch = searchTerm === '' || 
            transfer.bookingId.toString().includes(searchTerm) ||
            transfer.bankName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transfer.transferReference?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transfer.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transfer.accountNumber?.includes(searchTerm);
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-teal-500">
                    <p className="text-sm text-gray-600">Total Transfers</p>
                    <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-700">{stats.pending}</p>
                    <p className="text-xs text-gray-500">Amount: {formatCurrency(stats.pendingAmount)}</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
                    <p className="text-sm text-green-600">Verified</p>
                    <p className="text-2xl font-bold text-green-700">{stats.verified}</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-500">
                    <p className="text-sm text-red-600">Rejected</p>
                    <p className="text-2xl font-bold text-red-700">{stats.rejected}</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500">
                    <p className="text-sm text-blue-600">Total Verified</p>
                    <p className="text-2xl font-bold text-blue-700">{formatCurrency(stats.totalAmount)}</p>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header with Filters */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            Bank Transfer Verification
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            >
                                <option value="all">All Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Verified">Verified</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by ID, bank, reference..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <button
                                onClick={fetchBankTransfers}
                                className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                                title="Refresh"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                            <p className="mt-2 text-gray-600">Loading bank transfers...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-red-600">{error}</p>
                            <button
                                onClick={fetchBankTransfers}
                                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : filteredTransfers.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-xl">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bank Transfers Found</h3>
                            <p className="text-gray-600">
                                {searchTerm || filterStatus !== 'all' 
                                    ? 'No transfers match your filters' 
                                    : 'No bank transfers have been submitted yet'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredTransfers.map((transfer) => (
                                <div
                                    key={transfer.id}
                                    className={`border rounded-xl p-5 transition-all hover:shadow-md ${
                                        transfer.status === 'Pending' 
                                            ? 'border-yellow-200 bg-yellow-50/30' 
                                            : transfer.status === 'Verified'
                                            ? 'border-green-200 bg-green-50/30'
                                            : transfer.status === 'Rejected'
                                            ? 'border-red-200 bg-red-50/30'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        {/* Left Section - Basic Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border">
                                                    BT-{String(transfer.id).padStart(6, '0')}
                                                </span>
                                                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(transfer.status)}`}>
                                                    {getStatusIcon(transfer.status)}
                                                    {transfer.status}
                                                </span>
                                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                    Booking: #BK{String(transfer.bookingId).padStart(4, '0')}
                                                </span>
                                                {transfer.status === 'Pending' && (
                                                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full animate-pulse">
                                                        Awaiting Review
                                                    </span>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div>
                                                    <p className="text-xs text-gray-500">Customer</p>
                                                    <p className="font-medium text-gray-800 truncate" title={transfer.customerName}>
                                                        {transfer.customerName}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Bank</p>
                                                    <p className="font-medium text-gray-800">{transfer.bankName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Account Number</p>
                                                    <p className="font-mono text-sm">{transfer.accountNumber}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Amount</p>
                                                    <p className="font-bold text-teal-600">{formatCurrency(transfer.booking?.totalPrice || 0)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Reference</p>
                                                    <p className="font-mono text-xs truncate" title={transfer.transferReference}>
                                                        {transfer.transferReference}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Account Holder</p>
                                                    <p className="text-sm truncate" title={transfer.accountHolder}>
                                                        {transfer.accountHolder}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Submitted</p>
                                                    <p className="text-sm">{transfer.formattedDate}</p>
                                                    <p className="text-xs text-gray-500">{transfer.formattedTime}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Payment Slip</p>
                                                    {transfer.paymentSlip ? (
                                                        <span className="text-xs text-green-600 flex items-center">
                                                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            Uploaded
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs text-gray-500">No file</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Section - Action Button */}
                                        <div className="flex gap-2 lg:ml-4">
                                            <button
                                                onClick={() => handleViewTransfer(transfer)}
                                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                                                    transfer.status === 'Pending'
                                                        ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-200'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            >
                                                {transfer.status === 'Pending' ? (
                                                    <>
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        Review Transfer
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        View Details
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Show verification summary if already processed */}
                                    {transfer.status !== 'Pending' && (
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className={`text-xs flex items-center ${
                                                transfer.status === 'Verified' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {transfer.status === 'Verified' ? (
                                                    <>
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        This transfer has been verified and payment has been processed
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        This transfer has been rejected
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bank Transfer Management Modal */}
            {showTransferModal && selectedTransfer && (
                <BankTransferManagement
                    booking={selectedTransfer.booking || selectedTransfer}
                    onClose={() => {
                        setShowTransferModal(false);
                        setSelectedTransfer(null);
                    }}
                    onStatusUpdate={handleStatusUpdate}
                    formatCurrency={formatCurrency}
                    formatDate={(date) => new Date(date).toLocaleDateString()}
                    BASE_URL={BASE_URL}
                />
            )}
        </div>
    );
};

export default BankTransferTab;