// // // src/Pages/Customer/PaymentPage.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import BankTransferForm from './payment/PaymentForms/BankTransferForm';  // Correct path to the form
// // import { 
// //     PAYMENT_METHODS, 
// //     PAYMENT_STATUS,
// //     FRAC_BANK_ACCOUNT 
// // } from './PaymentConfig';
// // import { 
// //     formatCurrency, 
// //     formatDate,
// //     generateTransactionReference 
// // } from './PaymentUtils';

// // const PaymentPage = () => {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { booking } = location.state || {};

// //     const [selectedMethod, setSelectedMethod] = useState('bank');
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [successMessage, setSuccessMessage] = useState('');
// //     const [bankTransferDetails, setBankTransferDetails] = useState({
// //         bankName: '',
// //         accountNumber: '',
// //         accountHolder: '',
// //         transferReference: '',
// //         uploadSlip: null
// //     });

// //     const BASE_URL = 'http://localhost:8080';
// //     const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);

// //     useEffect(() => {
// //         // Redirect if no booking data
// //         if (!booking) {
// //             navigate('/customer/dashboard');
// //         }
// //     }, [booking, navigate]);

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setBankTransferDetails(prev => ({
// //             ...prev,
// //             [name]: value
// //         }));
// //     };

// //     const handleFileUpload = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             // Validate file size (5MB)
// //             if (file.size > 5 * 1024 * 1024) {
// //                 alert('File size must be less than 5MB');
// //                 return;
// //             }
// //             // Validate file type
// //             const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
// //             if (!validTypes.includes(file.type)) {
// //                 alert('Only PDF, JPEG, JPG, and PNG files are allowed');
// //                 return;
// //             }
// //             setBankTransferDetails(prev => ({
// //                 ...prev,
// //                 uploadSlip: file
// //             }));
// //         }
// //     };

// //     const updateBookingPaymentStatus = async (bookingId, status) => {
// //         try {
// //             const token = localStorage.getItem('customerToken');
// //             await axios.put(
// //                 `${BASE_URL}/api/v1/booking/update/${bookingId}`,
// //                 {
// //                     paymentStatus: status
// //                 },
// //                 {
// //                     headers: {
// //                         'Authorization': `Bearer ${token}`,
// //                         'Content-Type': 'application/json'
// //                     }
// //                 }
// //             );
// //         } catch (error) {
// //             console.error('Error updating payment status:', error);
// //         }
// //     };

// //     const handleSubmitBankTransfer = async (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setErrorMessage('');
// //         setSuccessMessage('');

// //         // Validate required fields
// //         if (!bankTransferDetails.bankName) {
// //             setErrorMessage('Please select your bank');
// //             setIsSubmitting(false);
// //             return;
// //         }
// //         if (!bankTransferDetails.accountNumber) {
// //             setErrorMessage('Please enter your account number');
// //             setIsSubmitting(false);
// //             return;
// //         }
// //         if (!bankTransferDetails.accountHolder) {
// //             setErrorMessage('Please enter account holder name');
// //             setIsSubmitting(false);
// //             return;
// //         }
// //         if (!bankTransferDetails.transferReference) {
// //             setErrorMessage('Please enter transfer reference');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         const formData = new FormData();
// //         formData.append('bookingId', booking.id);
// //         formData.append('bankName', bankTransferDetails.bankName);
// //         formData.append('accountNumber', bankTransferDetails.accountNumber.replace(/\s/g, ''));
// //         formData.append('accountHolder', bankTransferDetails.accountHolder);
// //         formData.append('transferReference', bankTransferDetails.transferReference);
        
// //         if (bankTransferDetails.uploadSlip) {
// //             formData.append('paymentSlip', bankTransferDetails.uploadSlip);
// //         }

// //         try {
// //             const response = await axios.post(`${BASE_URL}/api/v1/banktransfer/add`, formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 }
// //             });

// //             if (response.status === 201) {
// //                 setSuccessMessage('Bank transfer details submitted successfully! Your payment is being verified.');
                
// //                 // Update booking payment status
// //                 await updateBookingPaymentStatus(booking.id, 'CHECKING_BANK_TRANSFER');
                
// //                 // Clear form
// //                 setBankTransferDetails({
// //                     bankName: '',
// //                     accountNumber: '',
// //                     accountHolder: '',
// //                     transferReference: '',
// //                     uploadSlip: null
// //                 });

// //                 // Redirect after 3 seconds
// //                 setTimeout(() => {
// //                     navigate('/customer/mybookings');
// //                 }, 3000);
// //             }
// //         } catch (error) {
// //             console.error('Error submitting bank transfer:', error);
// //             if (error.response) {
// //                 setErrorMessage(error.response.data?.errorMessage || 'Failed to submit bank transfer details');
// //             } else {
// //                 setErrorMessage('Network error. Please try again.');
// //             }
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     const handleCashPayment = async () => {
// //         setIsSubmitting(true);
// //         try {
// //             await updateBookingPaymentStatus(booking.id, 'UNPAID_CASH_PICKUP');
// //             setSuccessMessage('Booking confirmed with cash payment at pickup!');
            
// //             setTimeout(() => {
// //                 navigate('/customer/mybookings');
// //             }, 2000);
// //         } catch (error) {
// //             setErrorMessage('Failed to process cash payment');
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     const handleCardPayment = () => {
// //         // Implement card payment logic here
// //         alert('Card payment integration coming soon!');
// //     };

// //     const handleWalletPayment = () => {
// //         // Implement wallet payment logic here
// //         alert('Digital wallet payment integration coming soon!');
// //     };

// //     const handleMethodSelect = (methodId) => {
// //         setSelectedMethod(methodId);
// //         setErrorMessage('');
// //         setSuccessMessage('');
// //     };

// //     const handleProceedWithMethod = () => {
// //         switch(selectedMethod) {
// //             case 'card':
// //                 handleCardPayment();
// //                 break;
// //             case 'bank':
// //                 // Bank transfer is handled by form submit
// //                 break;
// //             case 'cash':
// //                 handleCashPayment();
// //                 break;
// //             case 'wallet':
// //                 handleWalletPayment();
// //                 break;
// //             default:
// //                 break;
// //         }
// //     };

// //     if (!booking) {
// //         return null;
// //     }

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-8 px-4">
// //             <div className="max-w-4xl mx-auto">
// //                 {/* Header */}
// //                 <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white rounded-t-2xl p-6">
// //                     <h1 className="text-2xl font-bold">Complete Your Payment</h1>
// //                     <p className="text-teal-200 mt-1">Booking #{String(booking.id).padStart(4, '0')}</p>
// //                 </div>

// //                 {/* Booking Summary */}
// //                 <div className="bg-white shadow-lg p-6">
// //                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h2>
// //                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                         <div>
// //                             <p className="text-sm text-gray-500">Vehicle</p>
// //                             <p className="font-medium">{booking.vehicle?.makeModel || 'N/A'}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm text-gray-500">Pickup Date</p>
// //                             <p className="font-medium">{formatDate(booking.pickupDate)}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm text-gray-500">Drop-off Date</p>
// //                             <p className="font-medium">{formatDate(booking.dropOffDate)}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm text-gray-500">Total Amount</p>
// //                             <p className="font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Payment Method Selection */}
// //                 <div className="bg-white shadow-lg p-6 border-t border-gray-200">
// //                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Payment Method</h2>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                         {PAYMENT_METHODS.map((method) => (
// //                             <button
// //                                 key={method.id}
// //                                 onClick={() => handleMethodSelect(method.id)}
// //                                 className={`p-4 rounded-xl border-2 transition-all ${
// //                                     selectedMethod === method.id
// //                                         ? `border-teal-500 bg-gradient-to-r ${method.color} text-white shadow-lg scale-105`
// //                                         : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
// //                                 }`}
// //                             >
// //                                 <div className={`${selectedMethod === method.id ? 'text-white' : method.color.replace('from', 'text')}`}>
// //                                     {method.icon}
// //                                 </div>
// //                                 <h3 className={`font-semibold mt-2 ${selectedMethod === method.id ? 'text-white' : 'text-gray-800'}`}>
// //                                     {method.name}
// //                                 </h3>
// //                                 <p className={`text-xs mt-1 ${selectedMethod === method.id ? 'text-white/80' : 'text-gray-500'}`}>
// //                                     {method.description}
// //                                 </p>
// //                                 <p className={`text-xs mt-1 font-medium ${selectedMethod === method.id ? 'text-white/90' : 'text-teal-600'}`}>
// //                                     {method.processingTime}
// //                                 </p>
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {/* Payment Form */}
// //                 <div className="bg-white shadow-lg rounded-b-2xl p-6">
// //                     {errorMessage && (
// //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// //                             <p className="text-red-700">{errorMessage}</p>
// //                         </div>
// //                     )}

// //                     {successMessage && (
// //                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// //                             <p className="text-green-700">{successMessage}</p>
// //                         </div>
// //                     )}

// //                     {selectedMethod === 'bank' && (
// //                         <form onSubmit={handleSubmitBankTransfer}>
// //                             <BankTransferForm
// //                                 bankTransferDetails={bankTransferDetails}
// //                                 booking={booking}
// //                                 onInputChange={handleInputChange}
// //                                 onFileUpload={handleFileUpload}
// //                             />
                            
// //                             <div className="mt-8 flex gap-4">
// //                                 <button
// //                                     type="submit"
// //                                     disabled={isSubmitting}
// //                                     className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
// //                                         isSubmitting
// //                                             ? 'bg-teal-400 cursor-not-allowed'
// //                                             : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
// //                                     } text-white`}
// //                                 >
// //                                     {isSubmitting ? 'Submitting...' : 'Submit Bank Transfer Details'}
// //                                 </button>
// //                                 <button
// //                                     type="button"
// //                                     onClick={() => navigate('/customer/dashboard')}
// //                                     className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     )}

// //                     {(selectedMethod === 'cash' || selectedMethod === 'card' || selectedMethod === 'wallet') && (
// //                         <div className="space-y-6">
// //                             {selectedMethod === 'cash' && (
// //                                 <div className="bg-yellow-50 p-6 rounded-lg">
// //                                     <h3 className="font-semibold text-yellow-800 mb-2">Cash Payment at Pickup</h3>
// //                                     <p className="text-sm text-yellow-700">
// //                                         You've selected to pay in cash when you pick up the vehicle from our branch. 
// //                                         Please bring the exact amount to the rental location.
// //                                     </p>
// //                                     <div className="mt-4 p-3 bg-white rounded-lg">
// //                                         <p className="text-sm font-medium text-gray-700">Amount to Pay at Pickup:</p>
// //                                         <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                                     </div>
// //                                 </div>
// //                             )}

// //                             {selectedMethod === 'card' && (
// //                                 <div className="bg-blue-50 p-6 rounded-lg">
// //                                     <h3 className="font-semibold text-blue-800 mb-2">Card Payment</h3>
// //                                     <p className="text-sm text-blue-700">
// //                                         Secure card payment integration coming soon!
// //                                     </p>
// //                                 </div>
// //                             )}

// //                             {selectedMethod === 'wallet' && (
// //                                 <div className="bg-purple-50 p-6 rounded-lg">
// //                                     <h3 className="font-semibold text-purple-800 mb-2">Digital Wallet Payment</h3>
// //                                     <p className="text-sm text-purple-700">
// //                                         Digital wallet payment integration coming soon!
// //                                     </p>
// //                                 </div>
// //                             )}

// //                             <div className="flex gap-4">
// //                                 <button
// //                                     onClick={handleProceedWithMethod}
// //                                     disabled={isSubmitting}
// //                                     className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
// //                                         isSubmitting
// //                                             ? 'bg-teal-400 cursor-not-allowed'
// //                                             : `bg-gradient-to-r ${methodConfig?.color} hover:opacity-90`
// //                                     } text-white`}
// //                                 >
// //                                     {isSubmitting ? 'Processing...' : `Confirm ${methodConfig?.name}`}
// //                                 </button>
// //                                 <button
// //                                     onClick={() => navigate('/customer/dashboard')}
// //                                     className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PaymentPage;




// // src/Pages/Customer/PaymentPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BankTransferForm from './payment/PaymentForms/BankTransferForm';
// import { 
//     PAYMENT_METHODS, 
//     PAYMENT_STATUS,
//     FRAC_BANK_ACCOUNT 
// } from './payment/PaymentConfig';
// import { 
//     formatCurrency, 
//     formatDate
// } from './payment/PaymentUtils';


// const PaymentPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { booking } = location.state || {};

//     const [selectedMethod, setSelectedMethod] = useState('bank');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [bankTransferDetails, setBankTransferDetails] = useState({
//         bankName: '',
//         accountNumber: '',
//         accountHolder: '',
//         transferReference: '',
//         uploadSlip: null
//     });

//     const BASE_URL = 'http://localhost:8080';
//     const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);

//     useEffect(() => {
//         // Redirect if no booking data
//         if (!booking) {
//             navigate('/customer/dashboard');
//         }
//     }, [booking, navigate]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBankTransferDetails(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             // Validate file size (5MB)
//             if (file.size > 5 * 1024 * 1024) {
//                 alert('File size must be less than 5MB');
//                 return;
//             }
//             // Validate file type
//             const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
//             if (!validTypes.includes(file.type)) {
//                 alert('Only PDF, JPEG, JPG, and PNG files are allowed');
//                 return;
//             }
//             setBankTransferDetails(prev => ({
//                 ...prev,
//                 uploadSlip: file
//             }));
//         }
//     };

//     const updateBookingPaymentStatus = async (bookingId, status) => {
//         try {
//             const token = localStorage.getItem('customerToken');
//             const response = await axios.put(
//                 `${BASE_URL}/api/v1/booking/update/${bookingId}`,
//                 {
//                     paymentStatus: status
//                 },
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//             console.log('Booking status update response:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error updating payment status:', error);
//             throw error;
//         }
//     };

//     const handleSubmitBankTransfer = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setErrorMessage('');
//         setSuccessMessage('');

//         // Validate required fields
//         if (!bankTransferDetails.bankName) {
//             setErrorMessage('Please select your bank');
//             setIsSubmitting(false);
//             return;
//         }
//         if (!bankTransferDetails.accountNumber) {
//             setErrorMessage('Please enter your account number');
//             setIsSubmitting(false);
//             return;
//         }
//         if (!bankTransferDetails.accountHolder) {
//             setErrorMessage('Please enter account holder name');
//             setIsSubmitting(false);
//             return;
//         }
//         if (!bankTransferDetails.transferReference) {
//             setErrorMessage('Please enter transfer reference');
//             setIsSubmitting(false);
//             return;
//         }

//         const formData = new FormData();
//         formData.append('bookingId', booking.id);
//         formData.append('bankName', bankTransferDetails.bankName);
//         formData.append('accountNumber', bankTransferDetails.accountNumber.replace(/\s/g, ''));
//         formData.append('accountHolder', bankTransferDetails.accountHolder);
//         formData.append('transferReference', bankTransferDetails.transferReference);
        
//         if (bankTransferDetails.uploadSlip) {
//             formData.append('paymentSlip', bankTransferDetails.uploadSlip);
//         }

//         // Log FormData contents for debugging
//         console.log('Submitting bank transfer with data:');
//         for (let pair of formData.entries()) {
//             console.log(pair[0] + ': ' + pair[1]);
//         }

//         try {
//             const token = localStorage.getItem('customerToken');
//             const response = await axios.post(`${BASE_URL}/api/v1/banktransfer/add`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

//             console.log('Bank transfer response:', response.data);

//             if (response.status === 201 || response.status === 200) {
//                 setSuccessMessage('Bank transfer details submitted successfully! Your payment is being verified.');
                
//                 // Update booking payment status
//                 try {
//                     await updateBookingPaymentStatus(booking.id, 'CHECKING_BANK_TRANSFER');
//                 } catch (updateError) {
//                     console.error('Error updating booking status:', updateError);
//                     // Still show success for bank transfer submission
//                 }
                
//                 // Clear form
//                 setBankTransferDetails({
//                     bankName: '',
//                     accountNumber: '',
//                     accountHolder: '',
//                     transferReference: '',
//                     uploadSlip: null
//                 });

//                 // Redirect after 3 seconds
//                 setTimeout(() => {
//                     navigate('/customer/mybookings');
//                 }, 3000);
//             } else {
//                 setErrorMessage('Unexpected response from server');
//             }
//         } catch (error) {
//             console.error('Error submitting bank transfer:', error);
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 console.error('Error response data:', error.response.data);
//                 console.error('Error response status:', error.response.status);
//                 console.error('Error response headers:', error.response.headers);
                
//                 if (error.response.data && error.response.data.errorMessage) {
//                     setErrorMessage(error.response.data.errorMessage);
//                 } else if (error.response.data && typeof error.response.data === 'string') {
//                     setErrorMessage(error.response.data);
//                 } else {
//                     setErrorMessage(`Server error: ${error.response.status} - ${error.response.statusText}`);
//                 }
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 console.error('Error request:', error.request);
//                 setErrorMessage('No response from server. Please check if the backend is running.');
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 console.error('Error message:', error.message);
//                 setErrorMessage('Error: ' + error.message);
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleCashPayment = async () => {
//         setIsSubmitting(true);
//         try {
//             await updateBookingPaymentStatus(booking.id, 'UNPAID_CASH_PICKUP');
//             setSuccessMessage('Booking confirmed with cash payment at pickup!');
            
//             setTimeout(() => {
//                 navigate('/customer/mybookings');
//             }, 2000);
//         } catch (error) {
//             console.error('Error processing cash payment:', error);
//             setErrorMessage('Failed to process cash payment');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleCardPayment = () => {
//         // Implement card payment logic here
//         alert('Card payment integration coming soon!');
//     };

//     const handleWalletPayment = () => {
//         // Implement wallet payment logic here
//         alert('Digital wallet payment integration coming soon!');
//     };

//     const handleMethodSelect = (methodId) => {
//         setSelectedMethod(methodId);
//         setErrorMessage('');
//         setSuccessMessage('');
//     };

//     const handleProceedWithMethod = () => {
//         switch(selectedMethod) {
//             case 'card':
//                 handleCardPayment();
//                 break;
//             case 'bank':
//                 // Bank transfer is handled by form submit
//                 break;
//             case 'cash':
//                 handleCashPayment();
//                 break;
//             case 'wallet':
//                 handleWalletPayment();
//                 break;
//             default:
//                 break;
//         }
//     };

//     if (!booking) {
//         return null;
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-8 px-4">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white rounded-t-2xl p-6">
//                     <h1 className="text-2xl font-bold">Complete Your Payment</h1>
//                     <p className="text-teal-200 mt-1">Booking #{String(booking.id).padStart(4, '0')}</p>
//                 </div>

//                 {/* Booking Summary */}
//                 <div className="bg-white shadow-lg p-6">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         <div>
//                             <p className="text-sm text-gray-500">Vehicle</p>
//                             <p className="font-medium">{booking.vehicle?.makeModel || 'N/A'}</p>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">Pickup Date</p>
//                             <p className="font-medium">{formatDate(booking.pickupDate)}</p>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">Drop-off Date</p>
//                             <p className="font-medium">{formatDate(booking.dropOffDate)}</p>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">Total Amount</p>
//                             <p className="font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Payment Method Selection */}
//                 <div className="bg-white shadow-lg p-6 border-t border-gray-200">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Payment Method</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {PAYMENT_METHODS.map((method) => (
//                             <button
//                                 key={method.id}
//                                 onClick={() => handleMethodSelect(method.id)}
//                                 className={`p-4 rounded-xl border-2 transition-all ${
//                                     selectedMethod === method.id
//                                         ? `border-teal-500 bg-gradient-to-r ${method.color} text-white shadow-lg scale-105`
//                                         : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
//                                 }`}
//                             >
//                                 <div className={`${selectedMethod === method.id ? 'text-white' : method.color.replace('from', 'text')}`}>
//                                     {method.icon}
//                                 </div>
//                                 <h3 className={`font-semibold mt-2 ${selectedMethod === method.id ? 'text-white' : 'text-gray-800'}`}>
//                                     {method.name}
//                                 </h3>
//                                 <p className={`text-xs mt-1 ${selectedMethod === method.id ? 'text-white/80' : 'text-gray-500'}`}>
//                                     {method.description}
//                                 </p>
//                                 <p className={`text-xs mt-1 font-medium ${selectedMethod === method.id ? 'text-white/90' : 'text-teal-600'}`}>
//                                     {method.processingTime}
//                                 </p>
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Payment Form */}
//                 <div className="bg-white shadow-lg rounded-b-2xl p-6">
//                     {errorMessage && (
//                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                             <p className="text-red-700">{errorMessage}</p>
//                         </div>
//                     )}

//                     {successMessage && (
//                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                             <p className="text-green-700">{successMessage}</p>
//                         </div>
//                     )}

//                     {selectedMethod === 'bank' && (
//                         <form onSubmit={handleSubmitBankTransfer}>
//                             <BankTransferForm
//                                 bankTransferDetails={bankTransferDetails}
//                                 booking={booking}
//                                 onInputChange={handleInputChange}
//                                 onFileUpload={handleFileUpload}
//                             />
                            
//                             <div className="mt-8 flex gap-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
//                                         isSubmitting
//                                             ? 'bg-teal-400 cursor-not-allowed'
//                                             : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
//                                     } text-white`}
//                                 >
//                                     {isSubmitting ? 'Submitting...' : 'Submit Bank Transfer Details'}
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => navigate('/customer/dashboard')}
//                                     className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     )}

//                     {(selectedMethod === 'cash' || selectedMethod === 'card' || selectedMethod === 'wallet') && (
//                         <div className="space-y-6">
//                             {selectedMethod === 'cash' && (
//                                 <div className="bg-yellow-50 p-6 rounded-lg">
//                                     <h3 className="font-semibold text-yellow-800 mb-2">Cash Payment at Pickup</h3>
//                                     <p className="text-sm text-yellow-700">
//                                         You've selected to pay in cash when you pick up the vehicle from our branch. 
//                                         Please bring the exact amount to the rental location.
//                                     </p>
//                                     <div className="mt-4 p-3 bg-white rounded-lg">
//                                         <p className="text-sm font-medium text-gray-700">Amount to Pay at Pickup:</p>
//                                         <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                                     </div>
//                                 </div>
//                             )}

//                             {selectedMethod === 'card' && (
//                                 <div className="bg-blue-50 p-6 rounded-lg">
//                                     <h3 className="font-semibold text-blue-800 mb-2">Card Payment</h3>
//                                     <p className="text-sm text-blue-700">
//                                         Secure card payment integration coming soon!
//                                     </p>
//                                 </div>
//                             )}

//                             {selectedMethod === 'wallet' && (
//                                 <div className="bg-purple-50 p-6 rounded-lg">
//                                     <h3 className="font-semibold text-purple-800 mb-2">Digital Wallet Payment</h3>
//                                     <p className="text-sm text-purple-700">
//                                         Digital wallet payment integration coming soon!
//                                     </p>
//                                 </div>
//                             )}

//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={handleProceedWithMethod}
//                                     disabled={isSubmitting}
//                                     className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
//                                         isSubmitting
//                                             ? 'bg-teal-400 cursor-not-allowed'
//                                             : `bg-gradient-to-r ${methodConfig?.color} hover:opacity-90`
//                                     } text-white`}
//                                 >
//                                     {isSubmitting ? 'Processing...' : `Confirm ${methodConfig?.name}`}
//                                 </button>
//                                 <button
//                                     onClick={() => navigate('/customer/dashboard')}
//                                     className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentPage;