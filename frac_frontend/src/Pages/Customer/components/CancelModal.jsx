// import React from 'react';

// const CancelModal = ({ cancelReason, setCancelReason, isCancelling, onClose, onConfirm }) => {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-2xl max-w-md w-full">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-xl font-bold text-gray-800">Cancel Booking</h3>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     <p className="text-gray-600 mb-4">Please provide a reason for cancelling this booking:</p>

//                     <textarea
//                         value={cancelReason}
//                         onChange={(e) => setCancelReason(e.target.value)}
//                         placeholder="Enter reason for cancellation..."
//                         rows="4"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-4"
//                     />

//                     <div className="bg-yellow-50 p-3 rounded-lg mb-4">
//                         <p className="text-sm text-yellow-800">
//                             <span className="font-bold">Note:</span> Cancellation may be subject to fees based on our cancellation policy.
//                         </p>
//                     </div>

//                     <div className="flex gap-3">
//                         <button
//                             onClick={onConfirm}
//                             disabled={isCancelling || !cancelReason.trim()}
//                             className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
//                                 isCancelling || !cancelReason.trim()
//                                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                     : 'bg-red-600 text-white hover:bg-red-700'
//                             }`}
//                         >
//                             {isCancelling ? (
//                                 <span className="flex items-center justify-center">
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Processing...
//                                 </span>
//                             ) : (
//                                 'Confirm Cancellation'
//                             )}
//                         </button>
//                         <button
//                             onClick={onClose}
//                             className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                         >
//                             Back
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CancelModal;



// src/Pages/Customer/components/CancelModal.jsx
import React from 'react';

const CancelModal = ({ cancelReason, setCancelReason, isCancelling, onClose, onConfirm, booking, formatCurrency }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full transform transition-all animate-fadeIn">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Cancel Booking
                        </h3>
                        <button 
                            onClick={onClose} 
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            disabled={isCancelling}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Booking Summary */}
                    {booking && (
                        <div className="bg-red-50 p-4 rounded-lg mb-4 border border-red-200">
                            <p className="text-sm font-semibold text-red-800 mb-2">Booking Details:</p>
                            <div className="space-y-1 text-sm">
                                <p className="flex justify-between">
                                    <span className="text-red-600">Booking ID:</span>
                                    <span className="font-medium text-red-800">#{booking.id}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-red-600">Vehicle:</span>
                                    <span className="font-medium text-red-800">{booking.vehicle?.makeModel || 'N/A'}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-red-600">Dates:</span>
                                    <span className="font-medium text-red-800">
                                        {new Date(booking.pickupDate).toLocaleDateString()} - {new Date(booking.dropOffDate).toLocaleDateString()}
                                    </span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-red-600">Total Amount:</span>
                                    <span className="font-bold text-red-800">
                                        {formatCurrency ? formatCurrency(booking.totalPrice) : `Rs. ${booking.totalPrice}`}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Reason Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Reason for Cancellation <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={cancelReason}
                            onChange={(e) => setCancelReason(e.target.value)}
                            placeholder="Please provide a reason for cancelling this booking..."
                            rows="4"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-colors ${
                                cancelReason.trim() ? 'border-gray-300' : 'border-red-300 bg-red-50'
                            }`}
                            disabled={isCancelling}
                        />
                        {!cancelReason.trim() && (
                            <p className="text-xs text-red-500 mt-1">Reason is required</p>
                        )}
                    </div>

                    {/* Cancellation Policy */}
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4 border border-yellow-200">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-sm font-semibold text-yellow-800 mb-2">Cancellation Policy</p>
                                <ul className="text-xs text-yellow-700 space-y-1 list-disc ml-4">
                                    <li>Cancellation may be subject to fees based on our policy</li>
                                    <li>Refunds (if applicable) will be processed within 5-7 business days</li>
                                    <li>This action cannot be undone</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onConfirm}
                            disabled={isCancelling || !cancelReason.trim()}
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                                isCancelling || !cancelReason.trim()
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5'
                            }`}
                        >
                            {isCancelling ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Confirm Cancellation'
                            )}
                        </button>
                        <button
                            onClick={onClose}
                            disabled={isCancelling}
                            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200 disabled:opacity-50"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Add animation styles inline */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </div>
    );
};

export default CancelModal;