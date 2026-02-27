// // // src/Pages/Agent/components/BankTransferManagement.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const BankTransferManagement = ({ 
// //     booking, 
// //     onClose, 
// //     onStatusUpdate,
// //     formatCurrency,
// //     formatDate,
// //     BASE_URL 
// // }) => {
// //     const [bankTransfer, setBankTransfer] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const [paymentSlipUrl, setPaymentSlipUrl] = useState('');
// //     const [isUpdating, setIsUpdating] = useState(false);
// //     const [selectedStatus, setSelectedStatus] = useState('');

// //     useEffect(() => {
// //         if (booking?.id) {
// //             fetchBankTransferDetails();
// //         }
// //     }, [booking]);

// //     const fetchBankTransferDetails = async () => {
// //         setIsLoading(true);
// //         try {
// //             // First, get all bank transfers
// //             const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
// //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
// //             });

// //             // Find the one matching this booking
// //             const transfer = response.data.find(bt => bt.bookingId === booking.id);
            
// //             if (transfer) {
// //                 setBankTransfer(transfer);
// //                 setSelectedStatus(transfer.status);
                
// //                 // Construct payment slip URL
// //                 if (transfer.paymentSlip) {
// //                     const slipPath = transfer.paymentSlip.replace(/\\/g, '/');
// //                     const filename = slipPath.split('/').pop();
// //                     setPaymentSlipUrl(`${BASE_URL}/uploads/payment_slips/${filename}`);
// //                 }
// //             } else {
// //                 setError('No bank transfer found for this booking');
// //             }
// //         } catch (err) {
// //             console.error('Error fetching bank transfer:', err);
// //             setError('Failed to load bank transfer details');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const handleVerifyPayment = async () => {
// //         if (!bankTransfer || !selectedStatus) return;
        
// //         setIsUpdating(true);
// //         try {
// //             // 1. Update bank transfer status
// //             await axios.put(
// //                 `${BASE_URL}/api/v1/banktransfer/updateStatus/${bankTransfer.id}?status=${selectedStatus}`,
// //                 {},
// //                 {
// //                     headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
// //                 }
// //             );

// //             // 2. If status is "Verified", update the booking's payment status in frac_payment table
// //             if (selectedStatus === 'Verified') {
// //                 // Get the booking details
// //                 const bookingResponse = await axios.get(`${BASE_URL}/api/v1/booking/${booking.id}`, {
// //                     headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
// //                 });

// //                 const bookingData = bookingResponse.data;

// //                 // Create/Update payment record
// //                 const paymentData = {
// //                     bookingId: booking.id,
// //                     customerId: booking.customerId,
// //                     amount: booking.totalPrice,
// //                     currency: 'LKR',
// //                     paymentMethod: 'BANK_TRANSFER',
// //                     paymentStatus: 'PAID',
// //                     paymentReference: bankTransfer.transferReference,
// //                     bankName: bankTransfer.bankName,
// //                     accountNumber: bankTransfer.accountNumber,
// //                     accountHolder: bankTransfer.accountHolder,
// //                     verifiedAt: new Date().toISOString()
// //                 };

// //                 await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                         'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                     }
// //                 });

// //                 // Also update the booking's payment status
// //                 const updatedBooking = {
// //                     ...bookingData,
// //                     paymentStatus: 'PAID'
// //                 };

// //                 await axios.put(`${BASE_URL}/api/v1/booking/update/${booking.id}`, updatedBooking, {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                         'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                     }
// //                 });
// //             }

// //             // 3. Notify parent component
// //             onStatusUpdate(selectedStatus);
            
// //             // 4. Show success message
// //             alert(`Bank transfer ${selectedStatus === 'Verified' ? 'verified' : 'rejected'} successfully!`);
// //             onClose();

// //         } catch (err) {
// //             console.error('Error updating bank transfer:', err);
// //             setError('Failed to update bank transfer status');
// //         } finally {
// //             setIsUpdating(false);
// //         }
// //     };

// //     if (isLoading) {
// //         return (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //                 <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8">
// //                     <div className="text-center">
// //                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// //                         <p className="mt-2 text-gray-600">Loading bank transfer details...</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     if (error || !bankTransfer) {
// //         return (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //                 <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
// //                     <div className="text-center">
// //                         <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                         <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bank Transfer Found</h3>
// //                         <p className="text-gray-600 mb-4">{error || 'This booking does not have any bank transfer details'}</p>
// //                         <button
// //                             onClick={onClose}
// //                             className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     {/* Header */}
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Bank Transfer Verification</h2>
// //                         <button
// //                             onClick={onClose}
// //                             className="text-gray-400 hover:text-gray-600"
// //                         >
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Booking Info Summary */}
// //                     <div className="bg-teal-50 rounded-xl p-4 mb-6">
// //                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                             <div>
// //                                 <p className="text-xs text-teal-600">Booking ID</p>
// //                                 <p className="font-semibold">#BK{String(booking.id).padStart(4, '0')}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-xs text-teal-600">Customer</p>
// //                                 <p className="font-semibold">{booking.customer?.fullName || 'N/A'}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-xs text-teal-600">Amount</p>
// //                                 <p className="font-semibold text-teal-700">{formatCurrency(booking.totalPrice)}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-xs text-teal-600">Current Status</p>
// //                                 <p className={`font-semibold ${
// //                                     bankTransfer.status === 'Verified' ? 'text-green-600' :
// //                                     bankTransfer.status === 'Rejected' ? 'text-red-600' :
// //                                     'text-yellow-600'
// //                                 }`}>
// //                                     {bankTransfer.status}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                         {/* Left Column - Bank Transfer Details */}
// //                         <div className="space-y-6">
// //                             {/* Customer Bank Details */}
// //                             <div className="bg-gray-50 rounded-xl p-5">
// //                                 <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// //                                     </svg>
// //                                     Customer Bank Details
// //                                 </h3>
// //                                 <div className="space-y-3">
// //                                     <div className="flex justify-between py-2 border-b border-gray-200">
// //                                         <span className="text-gray-600">Bank Name:</span>
// //                                         <span className="font-medium">{bankTransfer.bankName}</span>
// //                                     </div>
// //                                     <div className="flex justify-between py-2 border-b border-gray-200">
// //                                         <span className="text-gray-600">Account Number:</span>
// //                                         <span className="font-mono font-medium">{bankTransfer.accountNumber}</span>
// //                                     </div>
// //                                     <div className="flex justify-between py-2 border-b border-gray-200">
// //                                         <span className="text-gray-600">Account Holder:</span>
// //                                         <span className="font-medium">{bankTransfer.accountHolder}</span>
// //                                     </div>
// //                                     <div className="flex justify-between py-2">
// //                                         <span className="text-gray-600">Transfer Reference:</span>
// //                                         <span className="font-mono font-medium">{bankTransfer.transferReference}</span>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Verification Actions */}
// //                             <div className="bg-white border border-gray-200 rounded-xl p-5">
// //                                 <h3 className="font-semibold text-gray-800 mb-4">Verification Actions</h3>
                                
// //                                 {bankTransfer.status === 'Pending' ? (
// //                                     <>
// //                                         <div className="space-y-3 mb-4">
// //                                             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-green-50">
// //                                                 <input
// //                                                     type="radio"
// //                                                     name="verificationStatus"
// //                                                     value="Verified"
// //                                                     checked={selectedStatus === 'Verified'}
// //                                                     onChange={(e) => setSelectedStatus(e.target.value)}
// //                                                     className="h-4 w-4 text-green-600 focus:ring-green-500"
// //                                                 />
// //                                                 <span className="ml-3 text-sm text-gray-700">
// //                                                     <span className="font-medium text-green-600">Verified</span> - Payment confirmed, update booking to PAID
// //                                                 </span>
// //                                             </label>
// //                                             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-red-50">
// //                                                 <input
// //                                                     type="radio"
// //                                                     name="verificationStatus"
// //                                                     value="Rejected"
// //                                                     checked={selectedStatus === 'Rejected'}
// //                                                     onChange={(e) => setSelectedStatus(e.target.value)}
// //                                                     className="h-4 w-4 text-red-600 focus:ring-red-500"
// //                                                 />
// //                                                 <span className="ml-3 text-sm text-gray-700">
// //                                                     <span className="font-medium text-red-600">Rejected</span> - Payment verification failed
// //                                                 </span>
// //                                             </label>
// //                                         </div>

// //                                         <div className="flex gap-3">
// //                                             <button
// //                                                 onClick={handleVerifyPayment}
// //                                                 disabled={isUpdating || selectedStatus === bankTransfer.status}
// //                                                 className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
// //                                                     selectedStatus === 'Verified'
// //                                                         ? 'bg-green-600 text-white hover:bg-green-700'
// //                                                         : selectedStatus === 'Rejected'
// //                                                         ? 'bg-red-600 text-white hover:bg-red-700'
// //                                                         : 'bg-gray-200 text-gray-500 cursor-not-allowed'
// //                                                 }`}
// //                                             >
// //                                                 {isUpdating ? 'Processing...' : `Confirm ${selectedStatus}`}
// //                                             </button>
// //                                             <button
// //                                                 onClick={onClose}
// //                                                 className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
// //                                             >
// //                                                 Cancel
// //                                             </button>
// //                                         </div>
// //                                     </>
// //                                 ) : (
// //                                     <div className="text-center py-4">
// //                                         <div className={`inline-block px-4 py-2 rounded-full ${
// //                                             bankTransfer.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
// //                                         }`}>
// //                                             This transfer has been {bankTransfer.status.toLowerCase()}
// //                                         </div>
// //                                         <button
// //                                             onClick={onClose}
// //                                             className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
// //                                         >
// //                                             Close
// //                                         </button>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         {/* Right Column - Payment Slip */}
// //                         <div className="space-y-4">
// //                             <h3 className="font-semibold text-gray-800 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                 </svg>
// //                                 Payment Slip
// //                             </h3>
                            
// //                             {paymentSlipUrl ? (
// //                                 <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
// //                                     {paymentSlipUrl.match(/\.(jpg|jpeg|png|gif)$/i) ? (
// //                                         <img 
// //                                             src={paymentSlipUrl} 
// //                                             alt="Payment Slip" 
// //                                             className="w-full h-auto object-contain max-h-[500px]"
// //                                             onError={(e) => {
// //                                                 e.target.onerror = null;
// //                                                 e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
// //                                             }}
// //                                         />
// //                                     ) : (
// //                                         <div className="p-8 text-center">
// //                                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
// //                                             </svg>
// //                                             <p className="text-gray-600 mb-2">PDF Document</p>
// //                                             <a 
// //                                                 href={paymentSlipUrl} 
// //                                                 target="_blank" 
// //                                                 rel="noopener noreferrer"
// //                                                 className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// //                                             >
// //                                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                                 </svg>
// //                                                 View PDF
// //                                             </a>
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             ) : (
// //                                 <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
// //                                     <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                     </svg>
// //                                     <p className="text-gray-600">No payment slip uploaded</p>
// //                                 </div>
// //                             )}

// //                             {/* Download Button */}
// //                             {paymentSlipUrl && (
// //                                 <a
// //                                     href={paymentSlipUrl}
// //                                     download
// //                                     className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
// //                                 >
// //                                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
// //                                     </svg>
// //                                     Download Payment Slip
// //                                 </a>
// //                             )}
// //                         </div>
// //                     </div>

// //                     {/* Verification Notes */}
// //                     <div className="mt-6 p-4 bg-blue-50 rounded-lg">
// //                         <div className="flex items-start">
// //                             <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                             </svg>
// //                             <div>
// //                                 <p className="text-sm text-blue-700 font-medium">Verification Guidelines:</p>
// //                                 <ul className="text-xs text-blue-600 mt-1 list-disc list-inside">
// //                                     <li>Verify that the transfer reference matches the customer's bank statement</li>
// //                                     <li>Check if the amount matches exactly: {formatCurrency(booking.totalPrice)}</li>
// //                                     <li>Ensure the payment slip is clear and legible</li>
// //                                     <li>Once verified, the payment status will be updated to PAID</li>
// //                                 </ul>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BankTransferManagement;



// // src/Pages/Agent/components/BankTransferManagement.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const BankTransferManagement = ({ 
//     booking, 
//     onClose, 
//     onStatusUpdate,
//     formatCurrency,
//     BASE_URL 
// }) => {
//     const [bankTransfer, setBankTransfer] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [paymentSlipUrl, setPaymentSlipUrl] = useState('');
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [selectedStatus, setSelectedStatus] = useState('');

//     useEffect(() => {
//         if (booking?.id) {
//             fetchBankTransferDetails();
//         } else if (booking?.bookingId) {
//             // Handle case where booking object has bookingId instead of id
//             fetchBankTransferDetails(booking.bookingId);
//         }
//     }, [booking, fetchBankTransferDetails]);

//     const fetchBankTransferDetails = useCallback(async (bookingId = null) => {
//         setIsLoading(true);
//         try {
//             const targetBookingId = bookingId || booking?.id || booking?.bookingId;
            
//             if (!targetBookingId) {
//                 setError('No booking ID provided');
//                 setIsLoading(false);
//                 return;
//             }

//             // First, get all bank transfers
//             const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//             });

//             // Find the one matching this booking
//             const transfer = response.data.find(bt => bt.bookingId === targetBookingId);
            
//             if (transfer) {
//                 setBankTransfer(transfer);
//                 setSelectedStatus(transfer.status);
                
//                 // Construct payment slip URL
//                 if (transfer.paymentSlip) {
//                     const slipPath = transfer.paymentSlip.replace(/\\/g, '/');
//                     const filename = slipPath.split('/').pop();
//                     setPaymentSlipUrl(`${BASE_URL}/uploads/payment_slips/${filename}`);
//                 }
//             } else {
//                 setError('No bank transfer found for this booking');
//             }
//         } catch (err) {
//             console.error('Error fetching bank transfer:', err);
//             setError('Failed to load bank transfer details');
//         } finally {
//             setIsLoading(false);
//         }
//     }, [booking, BASE_URL]);

//     const handleVerifyPayment = async () => {
//         if (!bankTransfer || !selectedStatus) return;
        
//         setIsUpdating(true);
//         try {
//             // 1. Update bank transfer status
//             await axios.put(
//                 `${BASE_URL}/api/v1/banktransfer/updateStatus/${bankTransfer.id}?status=${selectedStatus}`,
//                 {},
//                 {
//                     headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//                 }
//             );

//             // 2. If status is "Verified", update the booking's payment status
//             if (selectedStatus === 'Verified') {
//                 // Get the booking details
//                 const bookingResponse = await axios.get(`${BASE_URL}/api/v1/booking/${bankTransfer.bookingId}`, {
//                     headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//                 });

//                 const bookingData = bookingResponse.data;

//                 // Update booking payment status
//                 const updatedBooking = {
//                     ...bookingData,
//                     paymentStatus: 'PAID'
//                 };

//                 await axios.put(`${BASE_URL}/api/v1/booking/update/${bankTransfer.bookingId}`, updatedBooking, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                     }
//                 });

//                 // Create payment record (optional - if you want to track in payment table)
//                 try {
//                     const paymentData = {
//                         bookingId: bankTransfer.bookingId,
//                         customerId: bookingData.customerId,
//                         amount: bookingData.totalPrice,
//                         currency: 'LKR',
//                         paymentMethod: 'BANK_TRANSFER',
//                         paymentStatus: 'PAID',
//                         paymentReference: bankTransfer.transferReference,
//                         bankName: bankTransfer.bankName,
//                         accountNumber: bankTransfer.accountNumber,
//                         accountHolder: bankTransfer.accountHolder,
//                         verifiedAt: new Date().toISOString()
//                     };

//                     await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                         }
//                     });
//                 } catch (paymentErr) {
//                     console.error('Error creating payment record:', paymentErr);
//                     // Continue even if payment record creation fails
//                 }
//             }

//             // 3. Notify parent component
//             onStatusUpdate(selectedStatus);
            
//             // 4. Show success message
//             alert(`Bank transfer ${selectedStatus === 'Verified' ? 'verified' : 'rejected'} successfully!`);
//             onClose();

//         } catch (err) {
//             console.error('Error updating bank transfer:', err);
//             setError('Failed to update bank transfer status');
//         } finally {
//             setIsUpdating(false);
//         }
//     };

//     // Get booking details from props
//     const getBookingId = () => {
//         return booking?.id || booking?.bookingId || bankTransfer?.bookingId || 'N/A';
//     };

//     const getCustomerName = () => {
//         return booking?.customer?.fullName || booking?.customerName || 'Customer';
//     };

//     const getTotalPrice = () => {
//         return booking?.totalPrice || booking?.booking?.totalPrice || 0;
//     };

//     if (isLoading) {
//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8">
//                     <div className="text-center">
//                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                         <p className="mt-2 text-gray-600">Loading bank transfer details...</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (error || !bankTransfer) {
//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
//                     <div className="text-center">
//                         <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bank Transfer Found</h3>
//                         <p className="text-gray-600 mb-4">{error || 'This booking does not have any bank transfer details'}</p>
//                         <button
//                             onClick={onClose}
//                             className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Bank Transfer Verification</h2>
//                         <button
//                             onClick={onClose}
//                             className="text-gray-400 hover:text-gray-600"
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Booking Info Summary */}
//                     <div className="bg-teal-50 rounded-xl p-4 mb-6">
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             <div>
//                                 <p className="text-xs text-teal-600">Booking ID</p>
//                                 <p className="font-semibold">#BK{String(getBookingId()).padStart(4, '0')}</p>
//                             </div>
//                             <div>
//                                 <p className="text-xs text-teal-600">Customer</p>
//                                 <p className="font-semibold">{getCustomerName()}</p>
//                             </div>
//                             <div>
//                                 <p className="text-xs text-teal-600">Amount</p>
//                                 <p className="font-semibold text-teal-700">{formatCurrency(getTotalPrice())}</p>
//                             </div>
//                             <div>
//                                 <p className="text-xs text-teal-600">Current Status</p>
//                                 <p className={`font-semibold ${
//                                     bankTransfer.status === 'Verified' ? 'text-green-600' :
//                                     bankTransfer.status === 'Rejected' ? 'text-red-600' :
//                                     'text-yellow-600'
//                                 }`}>
//                                     {bankTransfer.status}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         {/* Left Column - Bank Transfer Details */}
//                         <div className="space-y-6">
//                             {/* Customer Bank Details */}
//                             <div className="bg-gray-50 rounded-xl p-5">
//                                 <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                                     </svg>
//                                     Customer Bank Details
//                                 </h3>
//                                 <div className="space-y-3">
//                                     <div className="flex justify-between py-2 border-b border-gray-200">
//                                         <span className="text-gray-600">Bank Name:</span>
//                                         <span className="font-medium">{bankTransfer.bankName}</span>
//                                     </div>
//                                     <div className="flex justify-between py-2 border-b border-gray-200">
//                                         <span className="text-gray-600">Account Number:</span>
//                                         <span className="font-mono font-medium">{bankTransfer.accountNumber}</span>
//                                     </div>
//                                     <div className="flex justify-between py-2 border-b border-gray-200">
//                                         <span className="text-gray-600">Account Holder:</span>
//                                         <span className="font-medium">{bankTransfer.accountHolder}</span>
//                                     </div>
//                                     <div className="flex justify-between py-2">
//                                         <span className="text-gray-600">Transfer Reference:</span>
//                                         <span className="font-mono font-medium">{bankTransfer.transferReference}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Verification Actions */}
//                             <div className="bg-white border border-gray-200 rounded-xl p-5">
//                                 <h3 className="font-semibold text-gray-800 mb-4">Verification Actions</h3>
                                
//                                 {bankTransfer.status === 'Pending' ? (
//                                     <>
//                                         <div className="space-y-3 mb-4">
//                                             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-green-50">
//                                                 <input
//                                                     type="radio"
//                                                     name="verificationStatus"
//                                                     value="Verified"
//                                                     checked={selectedStatus === 'Verified'}
//                                                     onChange={(e) => setSelectedStatus(e.target.value)}
//                                                     className="h-4 w-4 text-green-600 focus:ring-green-500"
//                                                 />
//                                                 <span className="ml-3 text-sm text-gray-700">
//                                                     <span className="font-medium text-green-600">Verified</span> - Payment confirmed, update booking to PAID
//                                                 </span>
//                                             </label>
//                                             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-red-50">
//                                                 <input
//                                                     type="radio"
//                                                     name="verificationStatus"
//                                                     value="Rejected"
//                                                     checked={selectedStatus === 'Rejected'}
//                                                     onChange={(e) => setSelectedStatus(e.target.value)}
//                                                     className="h-4 w-4 text-red-600 focus:ring-red-500"
//                                                 />
//                                                 <span className="ml-3 text-sm text-gray-700">
//                                                     <span className="font-medium text-red-600">Rejected</span> - Payment verification failed
//                                                 </span>
//                                             </label>
//                                         </div>

//                                         <div className="flex gap-3">
//                                             <button
//                                                 onClick={handleVerifyPayment}
//                                                 disabled={isUpdating || selectedStatus === bankTransfer.status}
//                                                 className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
//                                                     selectedStatus === 'Verified'
//                                                         ? 'bg-green-600 text-white hover:bg-green-700'
//                                                         : selectedStatus === 'Rejected'
//                                                         ? 'bg-red-600 text-white hover:bg-red-700'
//                                                         : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                                                 }`}
//                                             >
//                                                 {isUpdating ? 'Processing...' : `Confirm ${selectedStatus}`}
//                                             </button>
//                                             <button
//                                                 onClick={onClose}
//                                                 className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <div className="text-center py-4">
//                                         <div className={`inline-block px-4 py-2 rounded-full ${
//                                             bankTransfer.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                                         }`}>
//                                             This transfer has been {bankTransfer.status.toLowerCase()}
//                                         </div>
//                                         <button
//                                             onClick={onClose}
//                                             className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//                                         >
//                                             Close
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Right Column - Payment Slip */}
//                         <div className="space-y-4">
//                             <h3 className="font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                                 Payment Slip
//                             </h3>
                            
//                             {paymentSlipUrl ? (
//                                 <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
//                                     {paymentSlipUrl.match(/\.(jpg|jpeg|png|gif)$/i) ? (
//                                         <img 
//                                             src={paymentSlipUrl} 
//                                             alt="Payment Slip" 
//                                             className="w-full h-auto object-contain max-h-[500px]"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
//                                             }}
//                                         />
//                                     ) : (
//                                         <div className="p-8 text-center">
//                                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-gray-600 mb-2">PDF Document</p>
//                                             <a 
//                                                 href={paymentSlipUrl} 
//                                                 target="_blank" 
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
//                                             >
//                                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                                 </svg>
//                                                 View PDF
//                                             </a>
//                                         </div>
//                                     )}
//                                 </div>
//                             ) : (
//                                 <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
//                                     <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                     <p className="text-gray-600">No payment slip uploaded</p>
//                                 </div>
//                             )}

//                             {/* Download Button */}
//                             {paymentSlipUrl && (
//                                 <a
//                                     href={paymentSlipUrl}
//                                     download
//                                     className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
//                                 >
//                                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                                     </svg>
//                                     Download Payment Slip
//                                 </a>
//                             )}
//                         </div>
//                     </div>

//                     {/* Verification Notes */}
//                     <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//                         <div className="flex items-start">
//                             <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <div>
//                                 <p className="text-sm text-blue-700 font-medium">Verification Guidelines:</p>
//                                 <ul className="text-xs text-blue-600 mt-1 list-disc list-inside">
//                                     <li>Verify that the transfer reference matches the customer's bank statement</li>
//                                     <li>Check if the amount matches exactly: {formatCurrency(getTotalPrice())}</li>
//                                     <li>Ensure the payment slip is clear and legible</li>
//                                     <li>Once verified, the payment status will be updated to PAID</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BankTransferManagement;




// src/Pages/Agent/components/BankTransferManagement.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BankTransferManagement = ({ 
    booking, 
    onClose, 
    onStatusUpdate,
    formatCurrency,
    //formatDate,
    BASE_URL 
}) => {
    const [bankTransfer, setBankTransfer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [paymentSlipUrl, setPaymentSlipUrl] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');

    // Debug logs
    console.log('BankTransferManagement received props:', { booking, BASE_URL });

    useEffect(() => {
        console.log('BankTransferManagement useEffect triggered with booking:', booking);
        
        if (!booking) {
            setError('No booking data provided');
            setIsLoading(false);
            return;
        }

        const bookingId = booking?.id || booking?.bookingId;
        console.log('Looking for booking ID:', bookingId);
        
        if (bookingId) {
            fetchBankTransferDetails(bookingId);
        } else {
            setError('Invalid booking ID');
            setIsLoading(false);
        }
    }, [booking]);

    const fetchBankTransferDetails = async (bookingId) => {
        console.log('Fetching bank transfer for booking ID:', bookingId);
        setIsLoading(true);
        setError('');
        
        try {
            if (!bookingId) {
                throw new Error('No booking ID provided');
            }

            const token = localStorage.getItem('agentToken');
            if (!token) {
                throw new Error('No authentication token found');
            }

            console.log('Fetching from:', `${BASE_URL}/api/v1/banktransfer/getAll`);

            // First, get all bank transfers
            const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            console.log('Bank transfers response:', response.data);

            // Find the one matching this booking
            const transfer = response.data.find(bt => bt.bookingId === bookingId);
            
            console.log('Found transfer:', transfer);

            if (transfer) {
                setBankTransfer(transfer);
                setSelectedStatus(transfer.status);
                
                // Construct payment slip URL
                if (transfer.paymentSlip) {
                    const slipPath = transfer.paymentSlip.replace(/\\/g, '/');
                    const filename = slipPath.split('/').pop();
                    const url = `${BASE_URL}/uploads/payment_slips/${filename}`;
                    console.log('Payment slip URL:', url);
                    setPaymentSlipUrl(url);
                }
            } else {
                setError('No bank transfer found for this booking');
            }
        } catch (err) {
            console.error('Error in fetchBankTransferDetails:', err);
            setError(`Failed to load bank transfer details: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyPayment = async () => {
        console.log('Verifying payment with status:', selectedStatus);
        
        if (!bankTransfer || !selectedStatus) {
            setError('No bank transfer or status selected');
            return;
        }
        
        setIsUpdating(true);
        setError('');
        
        try {
            const token = localStorage.getItem('agentToken');
            
            // 1. Update bank transfer status
            console.log('Updating bank transfer status:', `${BASE_URL}/api/v1/banktransfer/updateStatus/${bankTransfer.id}?status=${selectedStatus}`);
            
            await axios.put(
                `${BASE_URL}/api/v1/banktransfer/updateStatus/${bankTransfer.id}?status=${selectedStatus}`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            );

            // 2. If status is "Verified", update the booking's payment status
            if (selectedStatus === 'Verified') {
                console.log('Verification confirmed, updating booking payment status');
                
                // Get the booking details
                const bookingResponse = await axios.get(`${BASE_URL}/api/v1/booking/${bankTransfer.bookingId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                const bookingData = bookingResponse.data;
                console.log('Booking data:', bookingData);

                // Update booking payment status
                const updatedBooking = {
                    ...bookingData,
                    paymentStatus: 'PAID'
                };

                await axios.put(`${BASE_URL}/api/v1/booking/update/${bankTransfer.bookingId}`, updatedBooking, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                // Create payment record (optional)
                try {
                    const paymentData = {
                        bookingId: bankTransfer.bookingId,
                        customerId: bookingData.customerId,
                        amount: bookingData.totalPrice,
                        currency: 'LKR',
                        paymentMethod: 'BANK_TRANSFER',
                        paymentStatus: 'PAID',
                        paymentReference: bankTransfer.transferReference,
                        bankName: bankTransfer.bankName,
                        accountNumber: bankTransfer.accountNumber,
                        accountHolder: bankTransfer.accountHolder,
                        verifiedAt: new Date().toISOString()
                    };

                    console.log('Creating payment record:', paymentData);

                    await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                } catch (paymentErr) {
                    console.error('Error creating payment record (non-critical):', paymentErr);
                    // Continue even if payment record creation fails
                }
            }

            // 3. Notify parent component
            console.log('Notifying parent of status update:', selectedStatus);
            onStatusUpdate(selectedStatus);
            
            // 4. Show success message
            alert(`Bank transfer ${selectedStatus === 'Verified' ? 'verified' : 'rejected'} successfully!`);
            onClose();

        } catch (err) {
            console.error('Error in handleVerifyPayment:', err);
            setError(`Failed to update bank transfer status: ${err.message}`);
        } finally {
            setIsUpdating(false);
        }
    };

    // Get booking details from props
    const getBookingId = () => {
        return booking?.id || booking?.bookingId || bankTransfer?.bookingId || 'N/A';
    };

    const getCustomerName = () => {
        return booking?.customer?.fullName || booking?.customerName || 'Customer';
    };

    const getTotalPrice = () => {
        return booking?.totalPrice || booking?.booking?.totalPrice || 0;
    };

    // If there's an error, show error UI
    if (error) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
                    <div className="text-center">
                        <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Error</h3>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                        <p className="mt-2 text-gray-600">Loading bank transfer details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!bankTransfer) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
                    <div className="text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bank Transfer Found</h3>
                        <p className="text-gray-600 mb-4">This booking does not have any bank transfer details</p>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Bank Transfer Verification</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Booking Info Summary */}
                    <div className="bg-teal-50 rounded-xl p-4 mb-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-xs text-teal-600">Booking ID</p>
                                <p className="font-semibold">#BK{String(getBookingId()).padStart(4, '0')}</p>
                            </div>
                            <div>
                                <p className="text-xs text-teal-600">Customer</p>
                                <p className="font-semibold">{getCustomerName()}</p>
                            </div>
                            <div>
                                <p className="text-xs text-teal-600">Amount</p>
                                <p className="font-semibold text-teal-700">{formatCurrency(getTotalPrice())}</p>
                            </div>
                            <div>
                                <p className="text-xs text-teal-600">Current Status</p>
                                <p className={`font-semibold ${
                                    bankTransfer.status === 'Verified' ? 'text-green-600' :
                                    bankTransfer.status === 'Rejected' ? 'text-red-600' :
                                    'text-yellow-600'
                                }`}>
                                    {bankTransfer.status}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column - Bank Transfer Details */}
                        <div className="space-y-6">
                            {/* Customer Bank Details */}
                            <div className="bg-gray-50 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    Customer Bank Details
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Bank Name:</span>
                                        <span className="font-medium">{bankTransfer.bankName}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Account Number:</span>
                                        <span className="font-mono font-medium">{bankTransfer.accountNumber}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Account Holder:</span>
                                        <span className="font-medium">{bankTransfer.accountHolder}</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Transfer Reference:</span>
                                        <span className="font-mono font-medium">{bankTransfer.transferReference}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Actions */}
                            <div className="bg-white border border-gray-200 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-800 mb-4">Verification Actions</h3>
                                
                                {bankTransfer.status === 'Pending' ? (
                                    <>
                                        <div className="space-y-3 mb-4">
                                            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-green-50">
                                                <input
                                                    type="radio"
                                                    name="verificationStatus"
                                                    value="Verified"
                                                    checked={selectedStatus === 'Verified'}
                                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                                    className="h-4 w-4 text-green-600 focus:ring-green-500"
                                                />
                                                <span className="ml-3 text-sm text-gray-700">
                                                    <span className="font-medium text-green-600">Verified</span> - Payment confirmed, update booking to PAID
                                                </span>
                                            </label>
                                            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-red-50">
                                                <input
                                                    type="radio"
                                                    name="verificationStatus"
                                                    value="Rejected"
                                                    checked={selectedStatus === 'Rejected'}
                                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                                    className="h-4 w-4 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="ml-3 text-sm text-gray-700">
                                                    <span className="font-medium text-red-600">Rejected</span> - Payment verification failed
                                                </span>
                                            </label>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleVerifyPayment}
                                                disabled={isUpdating || selectedStatus === bankTransfer.status}
                                                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                                                    selectedStatus === 'Verified'
                                                        ? 'bg-green-600 text-white hover:bg-green-700'
                                                        : selectedStatus === 'Rejected'
                                                        ? 'bg-red-600 text-white hover:bg-red-700'
                                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                {isUpdating ? 'Processing...' : `Confirm ${selectedStatus}`}
                                            </button>
                                            <button
                                                onClick={onClose}
                                                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <div className={`inline-block px-4 py-2 rounded-full ${
                                            bankTransfer.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            This transfer has been {bankTransfer.status.toLowerCase()}
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                        >
                                            Close
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Payment Slip */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Payment Slip
                            </h3>
                            
                            {paymentSlipUrl ? (
                                <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                                    {paymentSlipUrl.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                                        <img 
                                            src={paymentSlipUrl} 
                                            alt="Payment Slip" 
                                            className="w-full h-auto object-contain max-h-[500px]"
                                            onError={(e) => {
                                                console.error('Image failed to load:', paymentSlipUrl);
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                                            }}
                                        />
                                    ) : (
                                        <div className="p-8 text-center">
                                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-gray-600 mb-2">PDF Document</p>
                                            <a 
                                                href={paymentSlipUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                View PDF
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-gray-600">No payment slip uploaded</p>
                                </div>
                            )}

                            {/* Download Button */}
                            {paymentSlipUrl && (
                                <a
                                    href={paymentSlipUrl}
                                    download
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Payment Slip
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Verification Notes */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-sm text-blue-700 font-medium">Verification Guidelines:</p>
                                <ul className="text-xs text-blue-600 mt-1 list-disc list-inside">
                                    <li>Verify that the transfer reference matches the customer's bank statement</li>
                                    <li>Check if the amount matches exactly: {formatCurrency(getTotalPrice())}</li>
                                    <li>Ensure the payment slip is clear and legible</li>
                                    <li>Once verified, the payment status will be updated to PAID</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankTransferManagement;