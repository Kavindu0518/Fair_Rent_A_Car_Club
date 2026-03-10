// import React from 'react';
// import { PAYMENT_METHODS } from './PaymentConfig';
// import { formatCurrency } from './PaymentUtils';

// const PaymentSuccess = ({ 
//     selectedMethod, 
//     booking, 
//     paymentResponse, 
//     transactionRef, 
//     successMessage, 
//     onDownloadReceipt, 
//     onViewBookings 
// }) => {
//     const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);

//     const getSuccessMessage = () => {
//         if (successMessage) return successMessage;
//         switch (selectedMethod) {
//             case 'cash':
//                 return 'Your booking is confirmed! Please pay cash at pickup.';
//             case 'bank':
//                 return 'Your payment is being verified. We\'ll notify you once confirmed.';
//             default:
//                 return 'Payment completed successfully!';
//         }
//     };

//     const getStatusColor = () => {
//         switch (selectedMethod) {
//             case 'cash': return 'text-yellow-600';
//             case 'bank': return 'text-blue-600';
//             default: return 'text-green-600';
//         }
//     };

//     return (
//         <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                 {selectedMethod === 'cash' && 'Booking Confirmed!'}
//                 {selectedMethod === 'bank' && 'Payment Submitted!'}
//                 {(selectedMethod === 'card' || selectedMethod === 'wallet') && 'Payment Successful!'}
//             </h3>
//             <p className="text-gray-600 mb-6">{getSuccessMessage()}</p>
            
//             <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <p className="text-xs text-gray-500">Transaction Reference</p>
//                         <p className="font-mono text-sm font-bold">{paymentResponse?.paymentReference || transactionRef}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Amount</p>
//                         <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Payment Method</p>
//                         <p className="font-medium">{methodConfig?.name}</p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-gray-500">Status</p>
//                         <p className={`font-medium ${getStatusColor()}`}>
//                             {methodConfig?.displayStatus}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex gap-4 justify-center">
//                 {(selectedMethod === 'card' || selectedMethod === 'wallet') && (
//                     <button
//                         onClick={onDownloadReceipt}
//                         className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
//                     >
//                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                         Download Receipt
//                     </button>
//                 )}
//                 <button
//                     onClick={onViewBookings}
//                     className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                 >
//                     View My Bookings
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PaymentSuccess;


// src/Pages/Customer/payment/PaymentSuccess.jsx

import React from 'react';
import { PAYMENT_METHODS } from './PaymentConfig';
import { formatCurrency } from './PaymentUtils';

const PaymentSuccess = ({ 
    selectedMethod, 
    booking, 
    paymentResponse, 
    transactionRef, 
    successMessage, 
    onDownloadReceipt, 
    onViewBookings 
}) => {
    const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);

    const getSuccessMessage = () => {
        if (successMessage) return successMessage;
        switch (selectedMethod) {
            case 'cash':
                return 'Your booking is confirmed! Please pay cash at pickup.';
            case 'bank':
                return 'Your bank transfer details have been submitted successfully. We will verify your payment within 24 hours.';
            default:
                return 'Payment completed successfully!';
        }
    };

    const getStatusColor = () => {
        switch (selectedMethod) {
            case 'cash': return 'text-yellow-600';
            case 'bank': return 'text-blue-600';
            default: return 'text-green-600';
        }
    };

    const getStatusText = () => {
        if (selectedMethod === 'bank') {
            return 'PENDING VERIFICATION';
        }
        return methodConfig?.displayStatus || 'COMPLETED';
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMethod === 'cash' && 'Booking Confirmed!'}
                {selectedMethod === 'bank' && 'Bank Transfer Submitted!'}
                {(selectedMethod === 'card' || selectedMethod === 'wallet') && 'Payment Successful!'}
            </h3>
            <p className="text-gray-600 mb-6">{getSuccessMessage()}</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-500">Reference Number</p>
                        <p className="font-mono text-sm font-bold">
                            {selectedMethod === 'bank' 
                                ? paymentResponse?.transferReference || transactionRef 
                                : paymentResponse?.paymentReference || transactionRef}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Payment Method</p>
                        <p className="font-medium">{methodConfig?.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Status</p>
                        <p className={`font-medium ${getStatusColor()}`}>
                            {getStatusText()}
                        </p>
                    </div>
                    {selectedMethod === 'bank' && paymentResponse?.id && (
                        <div className="col-span-2 mt-2 pt-2 border-t border-gray-200">
                            <p className="text-xs text-gray-500">Bank Transfer ID</p>
                            <p className="font-mono text-sm">BT-{paymentResponse.id}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-4 justify-center">
                {(selectedMethod === 'card' || selectedMethod === 'wallet') && (
                    <button
                        onClick={onDownloadReceipt}
                        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Receipt
                    </button>
                )}
                <button
                    onClick={onViewBookings}
                    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    View My Bookings
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;