// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// // Import components
// import PaymentHeader from './payment/PaymentHeader';
// import PaymentProgress from './payment/PaymentProgress';
// import PaymentMethodSelector from './payment/PaymentMethodSelector';
// import PaymentSummary from './payment/PaymentSummary';
// import PaymentSuccess from './payment/PaymentSuccess';
// import PaymentFailed from './payment/PaymentFailed';
// import PaymentProcessing from './payment/PaymentProcessing';
// import CardPaymentForm from './payment/PaymentForms/CardPaymentForm';
// import BankTransferForm from './payment/PaymentForms/BankTransferForm';
// import CashPaymentForm from './payment/PaymentForms/CashPaymentForm';
// import WalletPaymentForm from './payment/PaymentForms/WalletPaymentForm';

// // Import utilities and config
// import { PAYMENT_METHODS } from './payment/PaymentConfig';
// import { generateTransactionReference, preparePaymentData } from './payment/PaymentUtils';

// const CustomerPaymentView = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
    
//     // State for booking and payment
//     const [booking, setBooking] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
    
//     // Payment method state
//     const [selectedMethod, setSelectedMethod] = useState('card');
//     const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
//     // Card payment details
//     const [cardDetails, setCardDetails] = useState({
//         cardNumber: '',
//         cardHolder: '',
//         expiryDate: '',
//         cvv: '',
//         saveCard: false
//     });
    
//     // Bank transfer details
//     const [bankTransferDetails, setBankTransferDetails] = useState({
//         bankName: '',
//         accountNumber: '',
//         accountHolder: '',
//         branch: '',
//         transferDate: '',
//         transferReference: '',
//         uploadSlip: null
//     });
    
//     // Cash payment details
//     const [cashDetails, setCashDetails] = useState({
//         pickupLocation: '',
//         contactNumber: '',
//         preferredTime: ''
//     });
    
//     // Digital wallet details
//     const [walletDetails, setWalletDetails] = useState({
//         walletType: 'gpay',
//         walletId: '',
//         phoneNumber: ''
//     });
    
//     // Customer info
//     const [customerId, setCustomerId] = useState(null);
//     const [customerName, setCustomerName] = useState('');
    
//     // Transaction reference
//     const [transactionRef, setTransactionRef] = useState('');
//     const [paymentResponse, setPaymentResponse] = useState(null);
    
//     const BASE_URL = 'http://localhost:8080';

//     useEffect(() => {
//         // Check authentication
//         const token = localStorage.getItem('customerToken');
//         const storedCustomerId = localStorage.getItem('customerId');
//         const storedCustomerName = localStorage.getItem('customerName');
        
//         if (!token || !storedCustomerId) {
//             navigate('/customer/login', { state: { from: '/customer/payment' } });
//             return;
//         }
        
//         setCustomerId(storedCustomerId);
//         setCustomerName(storedCustomerName || 'Customer');
        
//         // Get booking from location state
//         const bookingFromState = location.state?.selectedBooking;
//         const bookingIdFromState = location.state?.bookingId;
        
//         if (bookingFromState) {
//             setBooking(bookingFromState);
//             setIsLoading(false);
//         } else if (bookingIdFromState) {
//             fetchBookingDetails(bookingIdFromState);
//         } else {
//             setErrorMessage('No booking selected for payment');
//             setIsLoading(false);
//         }
//     }, [navigate, location]);

//     const fetchBookingDetails = async (bookingId) => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 }
//             });
            
//             if (response.status === 200) {
//                 setBooking(response.data);
//             }
//         } catch (err) {
//             console.error('Error fetching booking:', err);
//             setErrorMessage('Failed to load booking details');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handlePaymentSubmit = async (e) => {
//         e.preventDefault();
        
//         // Validate based on payment method
//         if (!validatePaymentDetails()) {
//             return;
//         }
        
//         setPaymentStep('processing');
//         setErrorMessage('');
//         setIsSubmitting(true);
        
//         try {
//             // Generate transaction reference
//             const txnRef = generateTransactionReference();
//             setTransactionRef(txnRef);
            
//             // Get the payment method configuration
//             const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);
            
//             // Prepare payment data for backend based on method
//             const paymentData = preparePaymentData(
//                 booking, customerId, selectedMethod, 
//                 cardDetails, bankTransferDetails, cashDetails, walletDetails, 
//                 txnRef, methodConfig
//             );
            
//             console.log('Sending payment data:', paymentData);
            
//             // Call the payment API
//             const response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 }
//             });
            
//             if (response.status === 201) {
//                 setPaymentResponse(response.data);
//                 setPaymentStep('success');
                
//                 // Set appropriate success message based on payment method
//                 if (selectedMethod === 'cash') {
//                     setSuccessMessage('Your booking is confirmed! Please pay cash at pickup.');
//                 } else if (selectedMethod === 'bank') {
//                     setSuccessMessage('Your payment is being verified. We\'ll notify you once confirmed.');
//                 } else {
//                     setSuccessMessage('Payment completed successfully!');
//                 }
                
//                 // Update the booking in local state
//                 setBooking(prev => ({
//                     ...prev,
//                     paymentStatus: methodConfig.backendStatus
//                 }));
//             }
            
//         } catch (error) {
//             console.error('Payment error:', error);
//             setPaymentStep('failed');
            
//             if (error.response) {
//                 setErrorMessage(error.response.data?.message || 'Payment failed. Please try again.');
//             } else if (error.request) {
//                 setErrorMessage('Network error. Please check your connection.');
//             } else {
//                 setErrorMessage('An error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const validatePaymentDetails = () => {
//         switch (selectedMethod) {
//             case 'card': {
//                 if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
//                     setErrorMessage('Invalid card number (16 digits required)');
//                     return false;
//                 }
//                 if (!cardDetails.cardHolder.trim()) {
//                     setErrorMessage('Card holder name is required');
//                     return false;
//                 }
//                 if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
//                     setErrorMessage('Invalid expiry date (MM/YY)');
//                     return false;
//                 }

//                 const [month, year] = cardDetails.expiryDate.split('/');
//                 const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
//                 const today = new Date();
//                 if (expiry < today) {
//                     setErrorMessage('Card has expired');
//                     return false;
//                 }

//                 if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
//                     setErrorMessage('Invalid CVV (3 or 4 digits)');
//                     return false;
//                 }
//                 break;
//             }
                
//             case 'bank':
//                 if (!bankTransferDetails.bankName) {
//                     setErrorMessage('Please select a bank');
//                     return false;
//                 }
//                 if (!bankTransferDetails.accountNumber) {
//                     setErrorMessage('Account number is required');
//                     return false;
//                 }
//                 if (!bankTransferDetails.accountHolder) {
//                     setErrorMessage('Account holder name is required');
//                     return false;
//                 }
//                 if (!bankTransferDetails.transferReference) {
//                     setErrorMessage('Transfer reference is required');
//                     return false;
//                 }
//                 break;
                
//             case 'cash':
//                 if (!cashDetails.pickupLocation) {
//                     setErrorMessage('Pickup location is required');
//                     return false;
//                 }
//                 if (!cashDetails.contactNumber) {
//                     setErrorMessage('Contact number is required');
//                     return false;
//                 }
//                 if (!cashDetails.contactNumber.match(/^[0-9]{10}$/)) {
//                     setErrorMessage('Invalid phone number (10 digits)');
//                     return false;
//                 }
//                 break;
                
//             case 'wallet':
//                 if (!walletDetails.walletId && !walletDetails.phoneNumber) {
//                     setErrorMessage('Wallet ID or phone number is required');
//                     return false;
//                 }
//                 if (walletDetails.phoneNumber && !walletDetails.phoneNumber.match(/^[0-9]{10}$/)) {
//                     setErrorMessage('Invalid phone number (10 digits)');
//                     return false;
//                 }
//                 break;
//         }
//         return true;
//     };

//     // Form input handlers
//     const handleCardInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
        
//         if (type === 'checkbox') {
//             setCardDetails(prev => ({ ...prev, [name]: checked }));
//             return;
//         }
        
//         if (name === 'cardNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 16);
//             const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
//             setCardDetails(prev => ({ ...prev, [name]: formatted }));
//             return;
//         }
        
//         if (name === 'expiryDate') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 4);
//             let formatted = truncated;
//             if (truncated.length > 2) {
//                 formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
//             }
//             setCardDetails(prev => ({ ...prev, [name]: formatted }));
//             return;
//         }
        
//         if (name === 'cvv') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 4);
//             setCardDetails(prev => ({ ...prev, [name]: truncated }));
//             return;
//         }
        
//         setCardDetails(prev => ({ ...prev, [name]: value }));
//     };

//     const handleBankInputChange = (e) => {
//         const { name, value } = e.target;
//         setBankTransferDetails(prev => ({ ...prev, [name]: value }));
//     };

//     const handleCashInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'contactNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 10);
//             setCashDetails(prev => ({ ...prev, [name]: truncated }));
//         } else {
//             setCashDetails(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleWalletInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'phoneNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 10);
//             setWalletDetails(prev => ({ ...prev, [name]: truncated }));
//         } else {
//             setWalletDetails(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleWalletTypeChange = (type) => {
//         setWalletDetails(prev => ({ ...prev, walletType: type }));
//     };

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setBankTransferDetails(prev => ({ ...prev, uploadSlip: file }));
//         }
//     };

//     const handleDownloadReceipt = async () => {
//         if (paymentResponse?.id) {
//             try {
//                 const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentResponse.id}/receipt`, {
//                     headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
//                     responseType: 'blob'
//                 });
                
//                 const url = window.URL.createObjectURL(new Blob([response.data]));
//                 const link = document.createElement('a');
//                 link.href = url;
//                 link.setAttribute('download', `receipt_${paymentResponse.id}.pdf`);
//                 document.body.appendChild(link);
//                 link.click();
//                 link.remove();
//             } catch (error) {
//                 console.error('Download error:', error);
//                 alert('Failed to download receipt');
//             }
//         }
//     };

//     const renderPaymentForm = () => {
//         switch (selectedMethod) {
//             case 'card':
//                 return (
//                     <CardPaymentForm 
//                         cardDetails={cardDetails}
//                         onInputChange={handleCardInputChange}
//                         errorMessage={errorMessage}
//                     />
//                 );
//             case 'bank':
//                 return (
//                     <BankTransferForm 
//                         bankTransferDetails={bankTransferDetails}
//                         booking={booking}
//                         onInputChange={handleBankInputChange}
//                         onFileUpload={handleFileUpload}
//                     />
//                 );
//             case 'cash':
//                 return (
//                     <CashPaymentForm 
//                         cashDetails={cashDetails}
//                         onInputChange={handleCashInputChange}
//                     />
//                 );
//             case 'wallet':
//                 return (
//                     <WalletPaymentForm 
//                         walletDetails={walletDetails}
//                         onInputChange={handleWalletInputChange}
//                         onWalletTypeChange={handleWalletTypeChange}
//                     />
//                 );
//             default:
//                 return null;
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading payment details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!booking) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
//                     <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
//                     <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
//                     <button
//                         onClick={() => navigate('/customer/bookings')}
//                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
//                     >
//                         Go to My Bookings
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             <PaymentHeader 
//                 customerName={customerName}
//                 onBack={() => navigate(-1)}
//             />

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <PaymentProgress currentStep={paymentStep} />

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Main Payment Area */}
//                     <div className="lg:col-span-2">
//                         {paymentStep === 'select' && (
//                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                                 <div className="p-6">
//                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                    
//                                     <PaymentMethodSelector 
//                                         selectedMethod={selectedMethod}
//                                         onSelect={setSelectedMethod}
//                                     />

//                                     {/* Payment Form */}
//                                     <div className="border-t border-gray-200 pt-6">
//                                         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                                             {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name} Details
//                                         </h3>
                                        
//                                         <form onSubmit={handlePaymentSubmit}>
//                                             {renderPaymentForm()}
                                            
//                                             {errorMessage && (
//                                                 <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
//                                                     <p className="text-red-700 text-sm">{errorMessage}</p>
//                                                 </div>
//                                             )}
                                            
//                                             <div className="mt-6 flex gap-4">
//                                                 <button
//                                                     type="submit"
//                                                     disabled={isSubmitting}
//                                                     className={`flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200 ${
//                                                         isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                                                     }`}
//                                                 >
//                                                     {isSubmitting ? 'Processing...' : `Confirm ${PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}`}
//                                                 </button>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => navigate('/customer/bookings')}
//                                                     className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {paymentStep === 'processing' && (
//                             <PaymentProcessing 
//                                 transactionRef={transactionRef}
//                                 totalAmount={booking.totalPrice}
//                             />
//                         )}

//                         {paymentStep === 'success' && (
//                             <PaymentSuccess 
//                                 selectedMethod={selectedMethod}
//                                 booking={booking}
//                                 paymentResponse={paymentResponse}
//                                 transactionRef={transactionRef}
//                                 successMessage={successMessage}
//                                 onDownloadReceipt={handleDownloadReceipt}
//                                 onViewBookings={() => navigate('/customer/bookings')}
//                             />
//                         )}

//                         {paymentStep === 'failed' && (
//                             <PaymentFailed 
//                                 errorMessage={errorMessage}
//                                 onTryAgain={() => setPaymentStep('select')}
//                                 onBackToBookings={() => navigate('/customer/bookings')}
//                             />
//                         )}
//                     </div>

//                     {/* Order Summary Sidebar */}
//                     <div className="lg:col-span-1">
//                         <PaymentSummary 
//                             booking={booking}
//                             BASE_URL={BASE_URL}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerPaymentView;


// // src/Pages/Customer/CustomerPaymentView.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// // Import components
// import PaymentHeader from './payment/PaymentHeader';
// import PaymentProgress from './payment/PaymentProgress';
// import PaymentMethodSelector from './payment/PaymentMethodSelector';
// import PaymentSummary from './payment/PaymentSummary';
// import PaymentSuccess from './payment/PaymentSuccess';
// import PaymentFailed from './payment/PaymentFailed';
// import PaymentProcessing from './payment/PaymentProcessing';
// import CardPaymentForm from './payment/PaymentForms/CardPaymentForm';
// import BankTransferForm from './payment/PaymentForms/BankTransferForm';
// import CashPaymentForm from './payment/PaymentForms/CashPaymentForm';
// import WalletPaymentForm from './payment/PaymentForms/WalletPaymentForm';

// // Import utilities and config
// import { PAYMENT_METHODS } from './payment/PaymentConfig';
// import { generateTransactionReference, preparePaymentData } from './payment/PaymentUtils';
// import { submitBankTransfer } from '../../services/bankTransferService'; // Import the new service

// const CustomerPaymentView = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
    
//     // State for booking and payment
//     const [booking, setBooking] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
    
//     // Payment method state
//     const [selectedMethod, setSelectedMethod] = useState('card');
//     const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
//     // Card payment details
//     const [cardDetails, setCardDetails] = useState({
//         cardNumber: '',
//         cardHolder: '',
//         expiryDate: '',
//         cvv: '',
//         saveCard: false
//     });
    
//     // Bank transfer details
//     const [bankTransferDetails, setBankTransferDetails] = useState({
//         bankName: '',
//         accountNumber: '',
//         accountHolder: '',
//         branch: '',
//         transferDate: '',
//         transferReference: '',
//         uploadSlip: null
//     });
    
//     // Cash payment details
//     const [cashDetails, setCashDetails] = useState({
//         pickupLocation: '',
//         contactNumber: '',
//         preferredTime: ''
//     });
    
//     // Digital wallet details
//     const [walletDetails, setWalletDetails] = useState({
//         walletType: 'gpay',
//         walletId: '',
//         phoneNumber: ''
//     });
    
//     // Customer info
//     const [customerId, setCustomerId] = useState(null);
//     const [customerName, setCustomerName] = useState('');
    
//     // Transaction reference
//     const [transactionRef, setTransactionRef] = useState('');
//     const [paymentResponse, setPaymentResponse] = useState(null);
    
//     const BASE_URL = 'http://localhost:8080';

//     useEffect(() => {
//         // Check authentication
//         const token = localStorage.getItem('customerToken');
//         const storedCustomerId = localStorage.getItem('customerId');
//         const storedCustomerName = localStorage.getItem('customerName');
        
//         if (!token || !storedCustomerId) {
//             navigate('/customer/login', { state: { from: '/customer/payment' } });
//             return;
//         }
        
//         setCustomerId(storedCustomerId);
//         setCustomerName(storedCustomerName || 'Customer');
        
//         // Get booking from location state
//         const bookingFromState = location.state?.selectedBooking;
//         const bookingIdFromState = location.state?.bookingId;
        
//         if (bookingFromState) {
//             setBooking(bookingFromState);
//             setIsLoading(false);
//         } else if (bookingIdFromState) {
//             fetchBookingDetails(bookingIdFromState);
//         } else {
//             setErrorMessage('No booking selected for payment');
//             setIsLoading(false);
//         }
//     }, [navigate, location]);

//     const fetchBookingDetails = async (bookingId) => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 }
//             });
            
//             if (response.status === 200) {
//                 setBooking(response.data);
//             }
//         } catch (err) {
//             console.error('Error fetching booking:', err);
//             setErrorMessage('Failed to load booking details');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // NEW: Handle bank transfer submission
//     const handleBankTransferSubmit = async () => {
//         const token = localStorage.getItem('customerToken');
        
//         // Create FormData for bank transfer
//         const formData = new FormData();
//         formData.append('bookingId', booking.id);
//         formData.append('bankName', bankTransferDetails.bankName);
//         formData.append('accountNumber', bankTransferDetails.accountNumber);
//         formData.append('accountHolder', bankTransferDetails.accountHolder);
//         formData.append('transferReference', bankTransferDetails.transferReference);
        
//         // Append the payment slip if it exists
//         if (bankTransferDetails.uploadSlip) {
//             formData.append('paymentSlip', bankTransferDetails.uploadSlip);
//         }
        
//         // Submit bank transfer
//         const response = await submitBankTransfer(formData, token);
//         return response;
//     };

//     // MODIFIED: Handle payment submission
//     const handlePaymentSubmit = async (e) => {
//         e.preventDefault();
        
//         // Validate based on payment method
//         if (!validatePaymentDetails()) {
//             return;
//         }
        
//         setPaymentStep('processing');
//         setErrorMessage('');
//         setIsSubmitting(true);
        
//         try {
//             // Generate transaction reference
//             const txnRef = generateTransactionReference();
//             setTransactionRef(txnRef);
            
//             // Get the payment method configuration
//             const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);
            
//             let response;
            
//             // Handle different payment methods
//             if (selectedMethod === 'bank') {
//                 // Special handling for bank transfer
//                 response = await handleBankTransferSubmit();
//                 setPaymentResponse(response);
//             } else {
//                 // Handle other payment methods (card, cash, wallet) as before
//                 const paymentData = preparePaymentData(
//                     booking, customerId, selectedMethod, 
//                     cardDetails, bankTransferDetails, cashDetails, walletDetails, 
//                     txnRef, methodConfig
//                 );
                
//                 console.log('Sending payment data:', paymentData);
                
//                 // Call the payment API for non-bank methods
//                 response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                     }
//                 });
                
//                 setPaymentResponse(response.data);
//             }
            
//             // Handle success
//             setPaymentStep('success');
            
//             // Set appropriate success message based on payment method
//             if (selectedMethod === 'cash') {
//                 setSuccessMessage('Your booking is confirmed! Please pay cash at pickup.');
//             } else if (selectedMethod === 'bank') {
//                 setSuccessMessage('Your bank transfer details have been submitted successfully. We will verify your payment within 24 hours.');
//             } else {
//                 setSuccessMessage('Payment completed successfully!');
//             }
            
//             // Update the booking in local state
//             setBooking(prev => ({
//                 ...prev,
//                 paymentStatus: methodConfig.backendStatus
//             }));
            
//         } catch (error) {
//             console.error('Payment error:', error);
//             setPaymentStep('failed');
            
//             if (error.response) {
//                 setErrorMessage(error.response.data?.message || 'Payment failed. Please try again.');
//             } else if (error.request) {
//                 setErrorMessage('Network error. Please check your connection.');
//             } else {
//                 setErrorMessage('An error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const validatePaymentDetails = () => {
//         switch (selectedMethod) {
//             case 'card': {
//                 if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
//                     setErrorMessage('Invalid card number (16 digits required)');
//                     return false;
//                 }
//                 if (!cardDetails.cardHolder.trim()) {
//                     setErrorMessage('Card holder name is required');
//                     return false;
//                 }
//                 if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
//                     setErrorMessage('Invalid expiry date (MM/YY)');
//                     return false;
//                 }

//                 const [month, year] = cardDetails.expiryDate.split('/');
//                 const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
//                 const today = new Date();
//                 if (expiry < today) {
//                     setErrorMessage('Card has expired');
//                     return false;
//                 }

//                 if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
//                     setErrorMessage('Invalid CVV (3 or 4 digits)');
//                     return false;
//                 }
//                 break;
//             }
                
//             case 'bank':
//                 if (!bankTransferDetails.bankName) {
//                     setErrorMessage('Please select a bank');
//                     return false;
//                 }
//                 if (!bankTransferDetails.accountNumber) {
//                     setErrorMessage('Account number is required');
//                     return false;
//                 }
//                 if (!bankTransferDetails.accountHolder) {
//                     setErrorMessage('Account holder name is required');
//                     return false;
//                 }
//                 if (!bankTransferDetails.transferReference) {
//                     setErrorMessage('Transfer reference is required');
//                     return false;
//                 }
//                 break;
                
//             case 'cash':
//                 if (!cashDetails.pickupLocation) {
//                     setErrorMessage('Pickup location is required');
//                     return false;
//                 }
//                 if (!cashDetails.contactNumber) {
//                     setErrorMessage('Contact number is required');
//                     return false;
//                 }
//                 if (!cashDetails.contactNumber.match(/^[0-9]{10}$/)) {
//                     setErrorMessage('Invalid phone number (10 digits)');
//                     return false;
//                 }
//                 break;
                
//             case 'wallet':
//                 if (!walletDetails.walletId && !walletDetails.phoneNumber) {
//                     setErrorMessage('Wallet ID or phone number is required');
//                     return false;
//                 }
//                 if (walletDetails.phoneNumber && !walletDetails.phoneNumber.match(/^[0-9]{10}$/)) {
//                     setErrorMessage('Invalid phone number (10 digits)');
//                     return false;
//                 }
//                 break;
//         }
//         return true;
//     };

//     // Form input handlers (keep all existing handlers)
//     const handleCardInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
        
//         if (type === 'checkbox') {
//             setCardDetails(prev => ({ ...prev, [name]: checked }));
//             return;
//         }
        
//         if (name === 'cardNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 16);
//             const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
//             setCardDetails(prev => ({ ...prev, [name]: formatted }));
//             return;
//         }
        
//         if (name === 'expiryDate') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 4);
//             let formatted = truncated;
//             if (truncated.length > 2) {
//                 formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
//             }
//             setCardDetails(prev => ({ ...prev, [name]: formatted }));
//             return;
//         }
        
//         if (name === 'cvv') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 4);
//             setCardDetails(prev => ({ ...prev, [name]: truncated }));
//             return;
//         }
        
//         setCardDetails(prev => ({ ...prev, [name]: value }));
//     };

//     const handleBankInputChange = (e) => {
//         const { name, value } = e.target;
//         setBankTransferDetails(prev => ({ ...prev, [name]: value }));
//     };

//     const handleCashInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'contactNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 10);
//             setCashDetails(prev => ({ ...prev, [name]: truncated }));
//         } else {
//             setCashDetails(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleWalletInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'phoneNumber') {
//             const digitsOnly = value.replace(/\D/g, '');
//             const truncated = digitsOnly.slice(0, 10);
//             setWalletDetails(prev => ({ ...prev, [name]: truncated }));
//         } else {
//             setWalletDetails(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleWalletTypeChange = (type) => {
//         setWalletDetails(prev => ({ ...prev, walletType: type }));
//     };

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setBankTransferDetails(prev => ({ ...prev, uploadSlip: file }));
//         }
//     };

//     const handleDownloadReceipt = async () => {
//         if (paymentResponse?.id) {
//             try {
//                 const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentResponse.id}/receipt`, {
//                     headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
//                     responseType: 'blob'
//                 });
                
//                 const url = window.URL.createObjectURL(new Blob([response.data]));
//                 const link = document.createElement('a');
//                 link.href = url;
//                 link.setAttribute('download', `receipt_${paymentResponse.id}.pdf`);
//                 document.body.appendChild(link);
//                 link.click();
//                 link.remove();
//             } catch (error) {
//                 console.error('Download error:', error);
//                 alert('Failed to download receipt');
//             }
//         }
//     };

//     const renderPaymentForm = () => {
//         switch (selectedMethod) {
//             case 'card':
//                 return (
//                     <CardPaymentForm 
//                         cardDetails={cardDetails}
//                         onInputChange={handleCardInputChange}
//                         errorMessage={errorMessage}
//                     />
//                 );
//             case 'bank':
//                 return (
//                     <BankTransferForm 
//                         bankTransferDetails={bankTransferDetails}
//                         booking={booking}
//                         onInputChange={handleBankInputChange}
//                         onFileUpload={handleFileUpload}
//                     />
//                 );
//             case 'cash':
//                 return (
//                     <CashPaymentForm 
//                         cashDetails={cashDetails}
//                         onInputChange={handleCashInputChange}
//                     />
//                 );
//             case 'wallet':
//                 return (
//                     <WalletPaymentForm 
//                         walletDetails={walletDetails}
//                         onInputChange={handleWalletInputChange}
//                         onWalletTypeChange={handleWalletTypeChange}
//                     />
//                 );
//             default:
//                 return null;
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading payment details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!booking) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
//                     <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
//                     <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
//                     <button
//                         onClick={() => navigate('/customer/bookings')}
//                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
//                     >
//                         Go to My Bookings
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             <PaymentHeader 
//                 customerName={customerName}
//                 onBack={() => navigate(-1)}
//             />

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <PaymentProgress currentStep={paymentStep} />

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Main Payment Area */}
//                     <div className="lg:col-span-2">
//                         {paymentStep === 'select' && (
//                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                                 <div className="p-6">
//                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                    
//                                     <PaymentMethodSelector 
//                                         selectedMethod={selectedMethod}
//                                         onSelect={setSelectedMethod}
//                                     />

//                                     {/* Payment Form */}
//                                     <div className="border-t border-gray-200 pt-6">
//                                         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                                             {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name} Details
//                                         </h3>
                                        
//                                         <form onSubmit={handlePaymentSubmit}>
//                                             {renderPaymentForm()}
                                            
//                                             {errorMessage && (
//                                                 <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
//                                                     <p className="text-red-700 text-sm">{errorMessage}</p>
//                                                 </div>
//                                             )}
                                            
//                                             <div className="mt-6 flex gap-4">
//                                                 <button
//                                                     type="submit"
//                                                     disabled={isSubmitting}
//                                                     className={`flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200 ${
//                                                         isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                                                     }`}
//                                                 >
//                                                     {isSubmitting ? 'Processing...' : `Confirm ${PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}`}
//                                                 </button>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => navigate('/customer/bookings')}
//                                                     className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {paymentStep === 'processing' && (
//                             <PaymentProcessing 
//                                 transactionRef={transactionRef}
//                                 totalAmount={booking.totalPrice}
//                             />
//                         )}

//                         {paymentStep === 'success' && (
//                             <PaymentSuccess 
//                                 selectedMethod={selectedMethod}
//                                 booking={booking}
//                                 paymentResponse={paymentResponse}
//                                 transactionRef={transactionRef}
//                                 successMessage={successMessage}
//                                 onDownloadReceipt={handleDownloadReceipt}
//                                 onViewBookings={() => navigate('/customer/bookings')}
//                             />
//                         )}

//                         {paymentStep === 'failed' && (
//                             <PaymentFailed 
//                                 errorMessage={errorMessage}
//                                 onTryAgain={() => setPaymentStep('select')}
//                                 onBackToBookings={() => navigate('/customer/bookings')}
//                             />
//                         )}
//                     </div>

//                     {/* Order Summary Sidebar */}
//                     <div className="lg:col-span-1">
//                         <PaymentSummary 
//                             booking={booking}
//                             BASE_URL={BASE_URL}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerPaymentView;




//-----------------------------

// src/Pages/Customer/CustomerPaymentView.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomerLayout from './components/CustomerLayout';

// Import payment components
import PaymentProgress from './payment/PaymentProgress';
import PaymentMethodSelector from './payment/PaymentMethodSelector';
import PaymentSummary from './payment/PaymentSummary';
import PaymentSuccess from './payment/PaymentSuccess';
import PaymentFailed from './payment/PaymentFailed';
import PaymentProcessing from './payment/PaymentProcessing';
import CardPaymentForm from './payment/PaymentForms/CardPaymentForm';
import BankTransferForm from './payment/PaymentForms/BankTransferForm';
import CashPaymentForm from './payment/PaymentForms/CashPaymentForm';
import WalletPaymentForm from './payment/PaymentForms/WalletPaymentForm';

// Import utilities and config
import { PAYMENT_METHODS } from './payment/PaymentConfig';
import { generateTransactionReference, preparePaymentData } from './payment/PaymentUtils';
import { submitBankTransfer } from '../../services/bankTransferService';

const CustomerPaymentView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // State for booking and payment
    const [booking, setBooking] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    // Payment method state
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [paymentStep, setPaymentStep] = useState('select');
    
    // Payment form states
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
        saveCard: false
    });
    
    const [bankTransferDetails, setBankTransferDetails] = useState({
        bankName: '',
        accountNumber: '',
        accountHolder: '',
        branch: '',
        transferDate: '',
        transferReference: '',
        uploadSlip: null
    });
    
    const [cashDetails, setCashDetails] = useState({
        pickupLocation: '',
        contactNumber: '',
        preferredTime: ''
    });
    
    const [walletDetails, setWalletDetails] = useState({
        walletType: 'gpay',
        walletId: '',
        phoneNumber: ''
    });
    
    // Customer info
    const [customerId, setCustomerId] = useState(null);
    
    // Transaction reference
    const [transactionRef, setTransactionRef] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);
    
    const BASE_URL = 'http://localhost:8080';

    useEffect(() => {
        const token = localStorage.getItem('customerToken');
        const storedCustomerId = localStorage.getItem('customerId');
        
        if (!token || !storedCustomerId) {
            navigate('/customer/login', { state: { from: '/customer/payment' } });
            return;
        }
        
        setCustomerId(storedCustomerId);
        
        const bookingFromState = location.state?.selectedBooking;
        const bookingIdFromState = location.state?.bookingId;
        
        if (bookingFromState) {
            setBooking(bookingFromState);
            setIsLoading(false);
        } else if (bookingIdFromState) {
            fetchBookingDetails(bookingIdFromState);
        } else {
            setErrorMessage('No booking selected for payment');
            setIsLoading(false);
        }
    }, [navigate, location]);

    const fetchBookingDetails = async (bookingId) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` }
            });
            
            if (response.status === 200) {
                setBooking(response.data);
            }
        } catch (err) {
            console.error('Error fetching booking:', err);
            setErrorMessage('Failed to load booking details');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBankTransferSubmit = async () => {
        const token = localStorage.getItem('customerToken');
        
        const formData = new FormData();
        formData.append('bookingId', booking.id);
        formData.append('bankName', bankTransferDetails.bankName);
        formData.append('accountNumber', bankTransferDetails.accountNumber);
        formData.append('accountHolder', bankTransferDetails.accountHolder);
        formData.append('transferReference', bankTransferDetails.transferReference);
        
        if (bankTransferDetails.uploadSlip) {
            formData.append('paymentSlip', bankTransferDetails.uploadSlip);
        }
        
        const response = await submitBankTransfer(formData, token);
        return response;
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        
        if (!validatePaymentDetails()) {
            return;
        }
        
        setPaymentStep('processing');
        setErrorMessage('');
        setIsSubmitting(true);
        
        try {
            const txnRef = generateTransactionReference();
            setTransactionRef(txnRef);
            
            const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);
            let response;
            
            if (selectedMethod === 'bank') {
                response = await handleBankTransferSubmit();
                setPaymentResponse(response);
            } else {
                const paymentData = preparePaymentData(
                    booking, customerId, selectedMethod, 
                    cardDetails, bankTransferDetails, cashDetails, walletDetails, 
                    txnRef, methodConfig
                );
                
                response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                    }
                });
                
                setPaymentResponse(response.data);
            }
            
            setPaymentStep('success');
            
            if (selectedMethod === 'cash') {
                setSuccessMessage('Your booking is confirmed! Please pay cash at pickup.');
            } else if (selectedMethod === 'bank') {
                setSuccessMessage('Your bank transfer details have been submitted successfully. We will verify your payment within 24 hours.');
            } else {
                setSuccessMessage('Payment completed successfully!');
            }
            
            setBooking(prev => ({
                ...prev,
                paymentStatus: methodConfig.backendStatus
            }));
            
        } catch (error) {
            console.error('Payment error:', error);
            setPaymentStep('failed');
            
            if (error.response) {
                setErrorMessage(error.response.data?.message || 'Payment failed. Please try again.');
            } else if (error.request) {
                setErrorMessage('Network error. Please check your connection.');
            } else {
                setErrorMessage('An error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const validatePaymentDetails = () => {
        switch (selectedMethod) {
            case 'card': {
                if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
                    setErrorMessage('Invalid card number (16 digits required)');
                    return false;
                }
                if (!cardDetails.cardHolder.trim()) {
                    setErrorMessage('Card holder name is required');
                    return false;
                }
                if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
                    setErrorMessage('Invalid expiry date (MM/YY)');
                    return false;
                }
                const [month, year] = cardDetails.expiryDate.split('/');
                const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
                const today = new Date();
                if (expiry < today) {
                    setErrorMessage('Card has expired');
                    return false;
                }
                if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
                    setErrorMessage('Invalid CVV (3 or 4 digits)');
                    return false;
                }
                break;
            }
            case 'bank':
                if (!bankTransferDetails.bankName) {
                    setErrorMessage('Please select a bank');
                    return false;
                }
                if (!bankTransferDetails.accountNumber) {
                    setErrorMessage('Account number is required');
                    return false;
                }
                if (!bankTransferDetails.accountHolder) {
                    setErrorMessage('Account holder name is required');
                    return false;
                }
                if (!bankTransferDetails.transferReference) {
                    setErrorMessage('Transfer reference is required');
                    return false;
                }
                break;
            case 'cash':
                if (!cashDetails.pickupLocation) {
                    setErrorMessage('Pickup location is required');
                    return false;
                }
                if (!cashDetails.contactNumber) {
                    setErrorMessage('Contact number is required');
                    return false;
                }
                if (!cashDetails.contactNumber.match(/^[0-9]{10}$/)) {
                    setErrorMessage('Invalid phone number (10 digits)');
                    return false;
                }
                break;
            case 'wallet':
                if (!walletDetails.walletId && !walletDetails.phoneNumber) {
                    setErrorMessage('Wallet ID or phone number is required');
                    return false;
                }
                if (walletDetails.phoneNumber && !walletDetails.phoneNumber.match(/^[0-9]{10}$/)) {
                    setErrorMessage('Invalid phone number (10 digits)');
                    return false;
                }
                break;
        }
        return true;
    };

    // Form input handlers
    const handleCardInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setCardDetails(prev => ({ ...prev, [name]: checked }));
            return;
        }
        
        if (name === 'cardNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            const truncated = digitsOnly.slice(0, 16);
            const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
            setCardDetails(prev => ({ ...prev, [name]: formatted }));
            return;
        }
        
        if (name === 'expiryDate') {
            const digitsOnly = value.replace(/\D/g, '');
            const truncated = digitsOnly.slice(0, 4);
            let formatted = truncated;
            if (truncated.length > 2) {
                formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
            }
            setCardDetails(prev => ({ ...prev, [name]: formatted }));
            return;
        }
        
        if (name === 'cvv') {
            const digitsOnly = value.replace(/\D/g, '');
            const truncated = digitsOnly.slice(0, 4);
            setCardDetails(prev => ({ ...prev, [name]: truncated }));
            return;
        }
        
        setCardDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleBankInputChange = (e) => {
        const { name, value } = e.target;
        setBankTransferDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleCashInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'contactNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            const truncated = digitsOnly.slice(0, 10);
            setCashDetails(prev => ({ ...prev, [name]: truncated }));
        } else {
            setCashDetails(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleWalletInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            const truncated = digitsOnly.slice(0, 10);
            setWalletDetails(prev => ({ ...prev, [name]: truncated }));
        } else {
            setWalletDetails(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleWalletTypeChange = (type) => {
        setWalletDetails(prev => ({ ...prev, walletType: type }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBankTransferDetails(prev => ({ ...prev, uploadSlip: file }));
        }
    };

    const handleDownloadReceipt = async () => {
        if (paymentResponse?.id) {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentResponse.id}/receipt`, {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
                    responseType: 'blob'
                });
                
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `receipt_${paymentResponse.id}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
            } catch (error) {
                console.error('Download error:', error);
                alert('Failed to download receipt');
            }
        }
    };

    const renderPaymentForm = () => {
        switch (selectedMethod) {
            case 'card':
                return (
                    <CardPaymentForm 
                        cardDetails={cardDetails}
                        onInputChange={handleCardInputChange}
                        errorMessage={errorMessage}
                    />
                );
            case 'bank':
                return (
                    <BankTransferForm 
                        bankTransferDetails={bankTransferDetails}
                        booking={booking}
                        onInputChange={handleBankInputChange}
                        onFileUpload={handleFileUpload}
                    />
                );
            case 'cash':
                return (
                    <CashPaymentForm 
                        cashDetails={cashDetails}
                        onInputChange={handleCashInputChange}
                    />
                );
            case 'wallet':
                return (
                    <WalletPaymentForm 
                        walletDetails={walletDetails}
                        onInputChange={handleWalletInputChange}
                        onWalletTypeChange={handleWalletTypeChange}
                    />
                );
            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <CustomerLayout>
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading payment details...</p>
                </div>
            </CustomerLayout>
        );
    }

    if (!booking) {
        return (
            <CustomerLayout>
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                    <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
                    <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
                    <button
                        onClick={() => navigate('/customer/mybookings')}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                    >
                        Go to My Bookings
                    </button>
                </div>
            </CustomerLayout>
        );
    }

    return (
        <CustomerLayout>
            <PaymentProgress currentStep={paymentStep} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Main Payment Area */}
                <div className="lg:col-span-2">
                    {paymentStep === 'select' && (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                
                                <PaymentMethodSelector 
                                    selectedMethod={selectedMethod}
                                    onSelect={setSelectedMethod}
                                />

                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                        {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name} Details
                                    </h3>
                                    
                                    <form onSubmit={handlePaymentSubmit}>
                                        {renderPaymentForm()}
                                        
                                        {errorMessage && (
                                            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
                                                <p className="text-red-700 text-sm">{errorMessage}</p>
                                            </div>
                                        )}
                                        
                                        <div className="mt-6 flex gap-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200 ${
                                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                                }`}
                                            >
                                                {isSubmitting ? 'Processing...' : `Confirm ${PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}`}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => navigate('/customer/mybookings')}
                                                className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {paymentStep === 'processing' && (
                        <PaymentProcessing 
                            transactionRef={transactionRef}
                            totalAmount={booking.totalPrice}
                        />
                    )}

                    {paymentStep === 'success' && (
                        <PaymentSuccess 
                            selectedMethod={selectedMethod}
                            booking={booking}
                            paymentResponse={paymentResponse}
                            transactionRef={transactionRef}
                            successMessage={successMessage}
                            onDownloadReceipt={handleDownloadReceipt}
                            onViewBookings={() => navigate('/customer/mybookings')}
                        />
                    )}

                    {paymentStep === 'failed' && (
                        <PaymentFailed 
                            errorMessage={errorMessage}
                            onTryAgain={() => setPaymentStep('select')}
                            onBackToBookings={() => navigate('/customer/mybookings')}
                        />
                    )}
                </div>

                {/* Order Summary Sidebar */}
                <div className="lg:col-span-1">
                    <PaymentSummary 
                        booking={booking}
                        BASE_URL={BASE_URL}
                    />
                </div>
            </div>
        </CustomerLayout>
    );
};

export default CustomerPaymentView;