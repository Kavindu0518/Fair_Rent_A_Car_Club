// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate, useLocation } from 'react-router-dom';

// // // // const CustomerPaymentPage = () => {
// // // //     const navigate = useNavigate();
// // // //     const location = useLocation();
    
// // // //     // State for booking and payment
// // // //     const [booking, setBooking] = useState(null);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [errorMessage, setErrorMessage] = useState('');
// // // //     const [successMessage, setSuccessMessage] = useState('');
    
// // // //     // Payment method state
// // // //     const [selectedMethod, setSelectedMethod] = useState('card');
// // // //     const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
// // // //     // Card payment details
// // // //     const [cardDetails, setCardDetails] = useState({
// // // //         cardNumber: '',
// // // //         cardHolder: '',
// // // //         expiryDate: '',
// // // //         cvv: '',
// // // //         saveCard: false
// // // //     });
    
// // // //     // Bank transfer details
// // // //     const [bankTransferDetails, setBankTransferDetails] = useState({
// // // //         bankName: '',
// // // //         accountNumber: '',
// // // //         accountHolder: '',
// // // //         branch: '',
// // // //         transferDate: '',
// // // //         transferReference: '',
// // // //         uploadSlip: null
// // // //     });
    
// // // //     // Cash payment details
// // // //     const [cashDetails, setCashDetails] = useState({
// // // //         pickupLocation: '',
// // // //         contactNumber: '',
// // // //         preferredTime: ''
// // // //     });
    
// // // //     // Digital wallet details
// // // //     const [walletDetails, setWalletDetails] = useState({
// // // //         walletType: 'gpay', // gpay, phonepay, paytm
// // // //         walletId: '',
// // // //         phoneNumber: ''
// // // //     });
    
// // // //     // Customer info
// // // //     const [customerId, setCustomerId] = useState(null);
// // // //     const [customerName, setCustomerName] = useState('');
    
// // // //     // Transaction reference
// // // //     const [transactionRef, setTransactionRef] = useState('');
    
// // // //     const BASE_URL = 'http://localhost:8080';

// // // //     useEffect(() => {
// // // //         // Check authentication
// // // //         const token = localStorage.getItem('customerToken');
// // // //         const storedCustomerId = localStorage.getItem('customerId');
// // // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // // //         if (!token || !storedCustomerId) {
// // // //             navigate('/customer/login', { state: { from: '/customer/payment' } });
// // // //             return;
// // // //         }
        
// // // //         setCustomerId(storedCustomerId);
// // // //         setCustomerName(storedCustomerName || 'Customer');
        
// // // //         // Get booking from location state or fetch from API
// // // //         const bookingFromState = location.state?.selectedBooking;
// // // //         const bookingIdFromState = location.state?.bookingId;
        
// // // //         if (bookingFromState) {
// // // //             setBooking(bookingFromState);
// // // //             setIsLoading(false);
// // // //         } else if (bookingIdFromState) {
// // // //             fetchBookingDetails(bookingIdFromState);
// // // //         } else {
// // // //             setErrorMessage('No booking selected for payment');
// // // //             setIsLoading(false);
// // // //         }
// // // //     }, [navigate, location]);

// // // //     const fetchBookingDetails = async (bookingId) => {
// // // //         setIsLoading(true);
// // // //         try {
// // // //             const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// // // //                 }
// // // //             });
            
// // // //             if (response.status === 200) {
// // // //                 setBooking(response.data);
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching booking:', err);
// // // //             setErrorMessage('Failed to load booking details');
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     const handlePaymentSubmit = async (e) => {
// // // //         e.preventDefault();
        
// // // //         // Validate based on payment method
// // // //         if (!validatePaymentDetails()) {
// // // //             return;
// // // //         }
        
// // // //         setPaymentStep('processing');
// // // //         setErrorMessage('');
        
// // // //         try {
// // // //             // Generate transaction reference
// // // //             const txnRef = generateTransactionReference();
// // // //             setTransactionRef(txnRef);
            
// // // //             // Prepare payment data based on method
// // // //             const paymentData = preparePaymentData(txnRef);
            
// // // //             // Simulate API call (replace with actual API)
// // // //             await new Promise(resolve => setTimeout(resolve, 3000));
            
// // // //             // For demo purposes, randomly succeed or fail
// // // //             const isSuccess = Math.random() > 0.2; // 80% success rate
            
// // // //             if (isSuccess) {
// // // //                 setPaymentStep('success');
// // // //                 setSuccessMessage('Payment completed successfully!');
                
// // // //                 // In production, call your actual payment API
// // // //                 // const response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
// // // //                 //     headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` }
// // // //                 // });
// // // //             } else {
// // // //                 setPaymentStep('failed');
// // // //                 setErrorMessage('Payment failed. Please try again.');
// // // //             }
            
// // // //         } catch (error) {
// // // //             console.error('Payment error:', error);
// // // //             setPaymentStep('failed');
// // // //             setErrorMessage('An error occurred during payment. Please try again.');
// // // //         }
// // // //     };

// // // //     const preparePaymentData = (txnRef) => {
// // // //         const baseData = {
// // // //             bookingId: booking.id,
// // // //             amount: booking.totalPrice,
// // // //             currency: 'LKR',
// // // //             paymentReference: txnRef,
// // // //             paidAt: new Date().toISOString()
// // // //         };

// // // //         switch (selectedMethod) {
// // // //             case 'card':
// // // //                 return {
// // // //                     ...baseData,
// // // //                     paymentMethod: 'CARD',
// // // //                     paymentStatus: 'PAID',
// // // //                     maskedCardNumber: maskCardNumber(cardDetails.cardNumber),
// // // //                     cardLast4: cardDetails.cardNumber.slice(-4),
// // // //                     cardBrand: detectCardBrand(cardDetails.cardNumber)
// // // //                 };
                
// // // //             case 'bank':
// // // //                 return {
// // // //                     ...baseData,
// // // //                     paymentMethod: 'BANK_TRANSFER',
// // // //                     paymentStatus: 'PENDING', // Will be confirmed after verification
// // // //                     bankName: bankTransferDetails.bankName,
// // // //                     accountNumber: maskAccountNumber(bankTransferDetails.accountNumber),
// // // //                     transferReference: bankTransferDetails.transferReference
// // // //                 };
                
// // // //             case 'cash':
// // // //                 return {
// // // //                     ...baseData,
// // // //                     paymentMethod: 'CASH',
// // // //                     paymentStatus: 'PENDING', // Will be collected at pickup
// // // //                     pickupLocation: cashDetails.pickupLocation,
// // // //                     contactNumber: cashDetails.contactNumber
// // // //                 };
                
// // // //             case 'wallet':
// // // //                 return {
// // // //                     ...baseData,
// // // //                     paymentMethod: 'DIGITAL_WALLET',
// // // //                     paymentStatus: 'PAID',
// // // //                     walletType: walletDetails.walletType,
// // // //                     walletId: maskWalletId(walletDetails.walletId)
// // // //                 };
                
// // // //             default:
// // // //                 return baseData;
// // // //         }
// // // //     };

// // // //     const validatePaymentDetails = () => {
// // // //         switch (selectedMethod) {
// // // //             case 'card':
// // // //                 if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
// // // //                     setErrorMessage('Invalid card number');
// // // //                     return false;
// // // //                 }
// // // //                 if (!cardDetails.cardHolder.trim()) {
// // // //                     setErrorMessage('Card holder name is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
// // // //                     setErrorMessage('Invalid expiry date (MM/YY)');
// // // //                     return false;
// // // //                 }
// // // //                 if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
// // // //                     setErrorMessage('Invalid CVV');
// // // //                     return false;
// // // //                 }
// // // //                 break;
                
// // // //             case 'bank':
// // // //                 if (!bankTransferDetails.bankName) {
// // // //                     setErrorMessage('Please select a bank');
// // // //                     return false;
// // // //                 }
// // // //                 if (!bankTransferDetails.accountNumber) {
// // // //                     setErrorMessage('Account number is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (!bankTransferDetails.accountHolder) {
// // // //                     setErrorMessage('Account holder name is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (!bankTransferDetails.transferReference) {
// // // //                     setErrorMessage('Transfer reference is required');
// // // //                     return false;
// // // //                 }
// // // //                 break;
                
// // // //             case 'cash':
// // // //                 if (!cashDetails.pickupLocation) {
// // // //                     setErrorMessage('Pickup location is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (!cashDetails.contactNumber) {
// // // //                     setErrorMessage('Contact number is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (!cashDetails.contactNumber.match(/^[0-9]{10}$/)) {
// // // //                     setErrorMessage('Invalid phone number (10 digits)');
// // // //                     return false;
// // // //                 }
// // // //                 break;
                
// // // //             case 'wallet':
// // // //                 if (!walletDetails.walletId && !walletDetails.phoneNumber) {
// // // //                     setErrorMessage('Wallet ID or phone number is required');
// // // //                     return false;
// // // //                 }
// // // //                 if (walletDetails.phoneNumber && !walletDetails.phoneNumber.match(/^[0-9]{10}$/)) {
// // // //                     setErrorMessage('Invalid phone number (10 digits)');
// // // //                     return false;
// // // //                 }
// // // //                 break;
// // // //         }
// // // //         return true;
// // // //     };

// // // //     // Helper functions
// // // //     const generateTransactionReference = () => {
// // // //         const timestamp = Date.now().toString(36);
// // // //         const random = Math.random().toString(36).substring(2, 7).toUpperCase();
// // // //         return `TXN${timestamp}${random}`;
// // // //     };

// // // //     const maskCardNumber = (number) => {
// // // //         const cleaned = number.replace(/\s/g, '');
// // // //         return `**** **** **** ${cleaned.slice(-4)}`;
// // // //     };

// // // //     const maskAccountNumber = (number) => {
// // // //         if (!number) return '';
// // // //         const cleaned = number.replace(/\s/g, '');
// // // //         if (cleaned.length <= 4) return cleaned;
// // // //         return `XXXX XXXX ${cleaned.slice(-4)}`;
// // // //     };

// // // //     const maskWalletId = (id) => {
// // // //         if (!id) return '';
// // // //         if (id.length <= 4) return id;
// // // //         return `****${id.slice(-4)}`;
// // // //     };

// // // //     const detectCardBrand = (number) => {
// // // //         const firstDigit = number[0];
// // // //         if (firstDigit === '4') return 'VISA';
// // // //         if (firstDigit === '5') return 'MASTERCARD';
// // // //         if (firstDigit === '3') return 'AMEX';
// // // //         if (firstDigit === '6') return 'DISCOVER';
// // // //         return 'UNKNOWN';
// // // //     };

// // // //     // Form input handlers
// // // //     const handleCardInputChange = (e) => {
// // // //         const { name, value, type, checked } = e.target;
        
// // // //         if (type === 'checkbox') {
// // // //             setCardDetails(prev => ({ ...prev, [name]: checked }));
// // // //             return;
// // // //         }
        
// // // //         if (name === 'cardNumber') {
// // // //             const digitsOnly = value.replace(/\D/g, '');
// // // //             const truncated = digitsOnly.slice(0, 16);
// // // //             const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
// // // //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// // // //             return;
// // // //         }
        
// // // //         if (name === 'expiryDate') {
// // // //             const digitsOnly = value.replace(/\D/g, '');
// // // //             const truncated = digitsOnly.slice(0, 4);
// // // //             let formatted = truncated;
// // // //             if (truncated.length > 2) {
// // // //                 formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
// // // //             }
// // // //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// // // //             return;
// // // //         }
        
// // // //         if (name === 'cvv') {
// // // //             const digitsOnly = value.replace(/\D/g, '');
// // // //             const truncated = digitsOnly.slice(0, 4);
// // // //             setCardDetails(prev => ({ ...prev, [name]: truncated }));
// // // //             return;
// // // //         }
        
// // // //         setCardDetails(prev => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleBankInputChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setBankTransferDetails(prev => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleCashInputChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         if (name === 'contactNumber') {
// // // //             const digitsOnly = value.replace(/\D/g, '');
// // // //             const truncated = digitsOnly.slice(0, 10);
// // // //             setCashDetails(prev => ({ ...prev, [name]: truncated }));
// // // //         } else {
// // // //             setCashDetails(prev => ({ ...prev, [name]: value }));
// // // //         }
// // // //     };

// // // //     const handleWalletInputChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         if (name === 'phoneNumber') {
// // // //             const digitsOnly = value.replace(/\D/g, '');
// // // //             const truncated = digitsOnly.slice(0, 10);
// // // //             setWalletDetails(prev => ({ ...prev, [name]: truncated }));
// // // //         } else {
// // // //             setWalletDetails(prev => ({ ...prev, [name]: value }));
// // // //         }
// // // //     };

// // // //     const handleFileUpload = (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (file) {
// // // //             setBankTransferDetails(prev => ({ ...prev, uploadSlip: file }));
// // // //         }
// // // //     };

// // // //     const formatCurrency = (amount) => {
// // // //         return new Intl.NumberFormat('en-LK', {
// // // //             style: 'currency',
// // // //             currency: 'LKR',
// // // //             minimumFractionDigits: 0
// // // //         }).format(amount).replace('LKR', 'Rs.');
// // // //     };

// // // //     const formatDate = (dateString) => {
// // // //         if (!dateString) return 'N/A';
// // // //         return new Date(dateString).toLocaleDateString('en-US', {
// // // //             year: 'numeric',
// // // //             month: 'short',
// // // //             day: 'numeric'
// // // //         });
// // // //     };

// // // //     // Payment Methods Configuration
// // // //     const paymentMethods = [
// // // //         {
// // // //             id: 'card',
// // // //             name: 'Credit / Debit Card',
// // // //             icon: (
// // // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// // // //                 </svg>
// // // //             ),
// // // //             description: 'Pay instantly with Visa, Mastercard, Amex',
// // // //             processingTime: 'Instant',
// // // //             color: 'from-blue-600 to-blue-700'
// // // //         },
// // // //         {
// // // //             id: 'bank',
// // // //             name: 'Bank Transfer',
// // // //             icon: (
// // // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
// // // //                 </svg>
// // // //             ),
// // // //             description: 'Pay from your bank account',
// // // //             processingTime: '1-2 business days',
// // // //             color: 'from-green-600 to-green-700'
// // // //         },
// // // //         {
// // // //             id: 'cash',
// // // //             name: 'Cash',
// // // //             icon: (
// // // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// // // //                 </svg>
// // // //             ),
// // // //             description: 'Pay at vehicle pickup',
// // // //             processingTime: 'Pay at counter',
// // // //             color: 'from-yellow-600 to-yellow-700'
// // // //         },
// // // //         {
// // // //             id: 'wallet',
// // // //             name: 'Digital Wallet',
// // // //             icon: (
// // // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a4 4 0 004-4V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4z" />
// // // //                 </svg>
// // // //             ),
// // // //             description: 'Google Pay, PhonePe, Paytm',
// // // //             processingTime: 'Instant',
// // // //             color: 'from-purple-600 to-purple-700'
// // // //         }
// // // //     ];

// // // //     // Render payment form based on selected method
// // // //     const renderPaymentForm = () => {
// // // //         switch (selectedMethod) {
// // // //             case 'card':
// // // //                 return (
// // // //                     <div className="space-y-5">
// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Card Number
// // // //                             </label>
// // // //                             <div className="relative">
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="cardNumber"
// // // //                                     value={cardDetails.cardNumber}
// // // //                                     onChange={handleCardInputChange}
// // // //                                     placeholder="1234 5678 9012 3456"
// // // //                                     maxLength="19"
// // // //                                     className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 />
// // // //                                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
// // // //                                     <img src="/images/visa.svg" alt="Visa" className="h-6 w-8 object-contain" />
// // // //                                     <img src="/images/mastercard.svg" alt="Mastercard" className="h-6 w-8 object-contain" />
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Card Holder Name
// // // //                             </label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="cardHolder"
// // // //                                 value={cardDetails.cardHolder}
// // // //                                 onChange={handleCardInputChange}
// // // //                                 placeholder="John Doe"
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                     Expiry Date
// // // //                                 </label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="expiryDate"
// // // //                                     value={cardDetails.expiryDate}
// // // //                                     onChange={handleCardInputChange}
// // // //                                     placeholder="MM/YY"
// // // //                                     maxLength="5"
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 />
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                     CVV
// // // //                                 </label>
// // // //                                 <input
// // // //                                     type="password"
// // // //                                     name="cvv"
// // // //                                     value={cardDetails.cvv}
// // // //                                     onChange={handleCardInputChange}
// // // //                                     placeholder="123"
// // // //                                     maxLength="4"
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="flex items-center">
// // // //                             <input
// // // //                                 type="checkbox"
// // // //                                 name="saveCard"
// // // //                                 checked={cardDetails.saveCard}
// // // //                                 onChange={handleCardInputChange}
// // // //                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// // // //                             />
// // // //                             <label className="ml-2 text-sm text-gray-700">
// // // //                                 Save card for future payments
// // // //                             </label>
// // // //                         </div>

// // // //                         <div className="bg-blue-50 p-4 rounded-lg">
// // // //                             <div className="flex items-start">
// // // //                                 <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // // //                                 </svg>
// // // //                                 <p className="text-xs text-blue-700">
// // // //                                     Your payment information is encrypted and secure. We never store your full card details.
// // // //                                 </p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'bank':
// // // //                 return (
// // // //                     <div className="space-y-5">
// // // //                         <div className="bg-yellow-50 p-4 rounded-lg mb-4">
// // // //                             <h4 className="font-semibold text-yellow-800 mb-2">Bank Account Details</h4>
// // // //                             <div className="space-y-1 text-sm">
// // // //                                 <p><span className="font-medium">Bank:</span> Fair Rent Bank</p>
// // // //                                 <p><span className="font-medium">Account Name:</span> FRAC Vehicle Rentals</p>
// // // //                                 <p><span className="font-medium">Account Number:</span> 1234 5678 9012 3456</p>
// // // //                                 <p><span className="font-medium">Branch:</span> Colombo Main</p>
// // // //                                 <p><span className="font-medium">Amount:</span> {formatCurrency(booking?.totalPrice)}</p>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Select Your Bank
// // // //                             </label>
// // // //                             <select
// // // //                                 name="bankName"
// // // //                                 value={bankTransferDetails.bankName}
// // // //                                 onChange={handleBankInputChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             >
// // // //                                 <option value="">Select bank</option>
// // // //                                 <option value="BOC">Bank of Ceylon</option>
// // // //                                 <option value="Peoples">People's Bank</option>
// // // //                                 <option value="Commercial">Commercial Bank</option>
// // // //                                 <option value="HNB">HNB</option>
// // // //                                 <option value="NTB">NTB</option>
// // // //                                 <option value="Sampath">Sampath Bank</option>
// // // //                             </select>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Account Number
// // // //                             </label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="accountNumber"
// // // //                                 value={bankTransferDetails.accountNumber}
// // // //                                 onChange={handleBankInputChange}
// // // //                                 placeholder="Enter your account number"
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Account Holder Name
// // // //                             </label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="accountHolder"
// // // //                                 value={bankTransferDetails.accountHolder}
// // // //                                 onChange={handleBankInputChange}
// // // //                                 placeholder="As per bank records"
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Transfer Reference / Transaction ID
// // // //                             </label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="transferReference"
// // // //                                 value={bankTransferDetails.transferReference}
// // // //                                 onChange={handleBankInputChange}
// // // //                                 placeholder="Enter the reference number from your transfer"
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Upload Payment Slip (Optional)
// // // //                             </label>
// // // //                             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // // //                                 <input
// // // //                                     type="file"
// // // //                                     id="slip-upload"
// // // //                                     onChange={handleFileUpload}
// // // //                                     accept="image/*,.pdf"
// // // //                                     className="hidden"
// // // //                                 />
// // // //                                 <label
// // // //                                     htmlFor="slip-upload"
// // // //                                     className="cursor-pointer flex flex-col items-center"
// // // //                                 >
// // // //                                     <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// // // //                                     </svg>
// // // //                                     <span className="text-sm text-gray-600">
// // // //                                         {bankTransferDetails.uploadSlip ? 
// // // //                                             bankTransferDetails.uploadSlip.name : 
// // // //                                             'Click to upload payment slip'}
// // // //                                     </span>
// // // //                                     <span className="text-xs text-gray-500 mt-1">
// // // //                                         PDF, PNG, JPG (Max 5MB)
// // // //                                     </span>
// // // //                                 </label>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="bg-blue-50 p-4 rounded-lg">
// // // //                             <p className="text-sm text-blue-700">
// // // //                                 <span className="font-bold">Note:</span> Your payment will be verified within 24 hours. 
// // // //                                 You'll receive a confirmation once verified.
// // // //                             </p>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'cash':
// // // //                 return (
// // // //                     <div className="space-y-5">
// // // //                         <div className="bg-green-50 p-4 rounded-lg mb-4">
// // // //                             <div className="flex items-center">
// // // //                                 <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// // // //                                 </svg>
// // // //                                 <div>
// // // //                                     <h4 className="font-semibold text-green-800">Cash on Pickup</h4>
// // // //                                     <p className="text-sm text-green-600">Pay when you pick up the vehicle</p>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Pickup Location
// // // //                             </label>
// // // //                             <select
// // // //                                 name="pickupLocation"
// // // //                                 value={cashDetails.pickupLocation}
// // // //                                 onChange={handleCashInputChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             >
// // // //                                 <option value="">Select pickup location</option>
// // // //                                 <option value="Colombo">Colombo Branch</option>
// // // //                                 <option value="Kandy">Kandy Branch</option>
// // // //                                 <option value="Galle">Galle Branch</option>
// // // //                                 <option value="Negombo">Negombo Branch</option>
// // // //                                 <option value="Jaffna">Jaffna Branch</option>
// // // //                             </select>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Contact Number
// // // //                             </label>
// // // //                             <div className="relative">
// // // //                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
// // // //                                 <input
// // // //                                     type="tel"
// // // //                                     name="contactNumber"
// // // //                                     value={cashDetails.contactNumber}
// // // //                                     onChange={handleCashInputChange}
// // // //                                     placeholder="77 123 4567"
// // // //                                     maxLength="10"
// // // //                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Preferred Pickup Time
// // // //                             </label>
// // // //                             <input
// // // //                                 type="time"
// // // //                                 name="preferredTime"
// // // //                                 value={cashDetails.preferredTime}
// // // //                                 onChange={handleCashInputChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="bg-yellow-50 p-4 rounded-lg">
// // // //                             <div className="flex items-start">
// // // //                                 <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                                 <p className="text-sm text-yellow-700">
// // // //                                     Please bring exact change if possible. Our branch will have limited cash for change.
// // // //                                 </p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'wallet':
// // // //                 return (
// // // //                     <div className="space-y-5">
// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-3">
// // // //                                 Select Wallet
// // // //                             </label>
// // // //                             <div className="grid grid-cols-3 gap-3">
// // // //                                 {['gpay', 'phonepay', 'paytm'].map((wallet) => (
// // // //                                     <button
// // // //                                         key={wallet}
// // // //                                         type="button"
// // // //                                         onClick={() => setWalletDetails(prev => ({ ...prev, walletType: wallet }))}
// // // //                                         className={`p-4 border-2 rounded-lg flex flex-col items-center transition duration-200 ${
// // // //                                             walletDetails.walletType === wallet
// // // //                                                 ? 'border-teal-600 bg-teal-50'
// // // //                                                 : 'border-gray-200 hover:border-teal-300'
// // // //                                         }`}
// // // //                                     >
// // // //                                         {wallet === 'gpay' && (
// // // //                                             <>
// // // //                                                 <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
// // // //                                                     <span className="text-white font-bold text-sm">GP</span>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs font-medium">Google Pay</span>
// // // //                                             </>
// // // //                                         )}
// // // //                                         {wallet === 'phonepay' && (
// // // //                                             <>
// // // //                                                 <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2">
// // // //                                                     <span className="text-white font-bold text-sm">PP</span>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs font-medium">PhonePe</span>
// // // //                                             </>
// // // //                                         )}
// // // //                                         {wallet === 'paytm' && (
// // // //                                             <>
// // // //                                                 <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2">
// // // //                                                     <span className="text-white font-bold text-sm">PT</span>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs font-medium">Paytm</span>
// // // //                                             </>
// // // //                                         )}
// // // //                                     </button>
// // // //                                 ))}
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Wallet ID / UPI ID
// // // //                             </label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="walletId"
// // // //                                 value={walletDetails.walletId}
// // // //                                 onChange={handleWalletInputChange}
// // // //                                 placeholder="username@bank"
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="relative">
// // // //                             <div className="absolute inset-0 flex items-center">
// // // //                                 <div className="w-full border-t border-gray-300"></div>
// // // //                             </div>
// // // //                             <div className="relative flex justify-center text-sm">
// // // //                                 <span className="px-2 bg-white text-gray-500">OR</span>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Mobile Number
// // // //                             </label>
// // // //                             <div className="relative">
// // // //                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
// // // //                                 <input
// // // //                                     type="tel"
// // // //                                     name="phoneNumber"
// // // //                                     value={walletDetails.phoneNumber}
// // // //                                     onChange={handleWalletInputChange}
// // // //                                     placeholder="77 123 4567"
// // // //                                     maxLength="10"
// // // //                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="bg-purple-50 p-4 rounded-lg">
// // // //                             <p className="text-sm text-purple-700">
// // // //                                 You will receive a payment request on your UPI app. Please approve it to complete the payment.
// // // //                             </p>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             default:
// // // //                 return null;
// // // //         }
// // // //     };

// // // //     if (isLoading) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // //                 <div className="text-center">
// // // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // // //                     <p className="text-gray-600">Loading payment details...</p>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (!booking) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
// // // //                     <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                     </svg>
// // // //                     <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
// // // //                     <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
// // // //                     <button
// // // //                         onClick={() => navigate('/customer/bookings')}
// // // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// // // //                     >
// // // //                         Go to My Bookings
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // //             {/* Header */}
// // // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // // //                 <div className="max-w-7xl mx-auto px-4 py-6">
// // // //                     <div className="flex justify-between items-center">
// // // //                         <div className="flex items-center">
// // // //                             <button
// // // //                                 onClick={() => navigate(-1)}
// // // //                                 className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200"
// // // //                             >
// // // //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// // // //                                 </svg>
// // // //                             </button>
// // // //                             <div>
// // // //                                 <h1 className="text-2xl md:text-3xl font-bold">Payment</h1>
// // // //                                 <p className="text-teal-300 text-sm">Complete your booking payment</p>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="flex items-center">
// // // //                             <span className="text-sm hidden md:block">Welcome, {customerName}</span>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // // //                 {/* Progress Steps */}
// // // //                 <div className="mb-8">
// // // //                     <div className="flex items-center justify-center">
// // // //                         <div className="flex items-center">
// // // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // // //                                 paymentStep === 'select' ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
// // // //                             }`}>
// // // //                                 1
// // // //                             </div>
// // // //                             <span className="ml-2 text-sm font-medium text-gray-700">Select Method</span>
// // // //                         </div>
// // // //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// // // //                         <div className="flex items-center">
// // // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // // //                                 paymentStep === 'processing' ? 'bg-teal-600 text-white' : 
// // // //                                 paymentStep === 'success' || paymentStep === 'failed' ? 'bg-teal-100 text-teal-600' : 'bg-gray-200 text-gray-400'
// // // //                             }`}>
// // // //                                 2
// // // //                             </div>
// // // //                             <span className="ml-2 text-sm font-medium text-gray-700">Process</span>
// // // //                         </div>
// // // //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// // // //                         <div className="flex items-center">
// // // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // // //                                 paymentStep === 'success' ? 'bg-green-600 text-white' :
// // // //                                 paymentStep === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
// // // //                             }`}>
// // // //                                 3
// // // //                             </div>
// // // //                             <span className="ml-2 text-sm font-medium text-gray-700">Complete</span>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //                     {/* Main Payment Area */}
// // // //                     <div className="lg:col-span-2">
// // // //                         {paymentStep === 'select' && (
// // // //                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // // //                                 <div className="p-6">
// // // //                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                    
// // // //                                     {/* Payment Methods Grid */}
// // // //                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// // // //                                         {paymentMethods.map((method) => (
// // // //                                             <button
// // // //                                                 key={method.id}
// // // //                                                 onClick={() => setSelectedMethod(method.id)}
// // // //                                                 className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
// // // //                                                     selectedMethod === method.id
// // // //                                                         ? 'border-teal-600 bg-teal-50 shadow-lg shadow-teal-100'
// // // //                                                         : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
// // // //                                                 }`}
// // // //                                             >
// // // //                                                 {selectedMethod === method.id && (
// // // //                                                     <div className="absolute top-3 right-3">
// // // //                                                         <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
// // // //                                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// // // //                                                             </svg>
// // // //                                                         </div>
// // // //                                                     </div>
// // // //                                                 )}
                                                
// // // //                                                 <div className="flex items-center mb-3">
// // // //                                                     <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white mr-3`}>
// // // //                                                         {method.icon}
// // // //                                                     </div>
// // // //                                                     <div className="text-left">
// // // //                                                         <h4 className="font-semibold text-gray-800">{method.name}</h4>
// // // //                                                         <p className="text-xs text-gray-500">{method.processingTime}</p>
// // // //                                                     </div>
// // // //                                                 </div>
                                                
// // // //                                                 <p className="text-sm text-gray-600 text-left">{method.description}</p>
// // // //                                             </button>
// // // //                                         ))}
// // // //                                     </div>

// // // //                                     {/* Payment Form */}
// // // //                                     <div className="border-t border-gray-200 pt-6">
// // // //                                         <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // // //                                             {paymentMethods.find(m => m.id === selectedMethod)?.name} Details
// // // //                                         </h3>
                                        
// // // //                                         <form onSubmit={handlePaymentSubmit}>
// // // //                                             {renderPaymentForm()}
                                            
// // // //                                             {errorMessage && (
// // // //                                                 <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
// // // //                                                     <p className="text-red-700 text-sm">{errorMessage}</p>
// // // //                                                 </div>
// // // //                                             )}
                                            
// // // //                                             <div className="mt-6 flex gap-4">
// // // //                                                 <button
// // // //                                                     type="submit"
// // // //                                                     className="flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200"
// // // //                                                 >
// // // //                                                     Pay {formatCurrency(booking.totalPrice)}
// // // //                                                 </button>
// // // //                                                 <button
// // // //                                                     type="button"
// // // //                                                     onClick={() => navigate('/customer/bookings')}
// // // //                                                     className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
// // // //                                                 >
// // // //                                                     Cancel
// // // //                                                 </button>
// // // //                                             </div>
// // // //                                         </form>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         )}

// // // //                         {paymentStep === 'processing' && (
// // // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // // //                                 <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-600 border-t-transparent mb-6"></div>
// // // //                                 <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h3>
// // // //                                 <p className="text-gray-600 mb-4">Please do not close this window...</p>
// // // //                                 <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
// // // //                                     <p className="text-sm text-gray-600">Transaction Reference</p>
// // // //                                     <p className="text-lg font-mono font-bold text-teal-600">{transactionRef || 'Generating...'}</p>
// // // //                                 </div>
// // // //                                 <p className="text-xs text-gray-400 mt-4">
// // // //                                     Amount: {formatCurrency(booking.totalPrice)}
// // // //                                 </p>
// // // //                             </div>
// // // //                         )}

// // // //                         {paymentStep === 'success' && (
// // // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // // //                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // // //                                     <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                                     </svg>
// // // //                                 </div>
// // // //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
// // // //                                 <p className="text-gray-600 mb-6">Your booking has been confirmed</p>
                                
// // // //                                 <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
// // // //                                     <div className="grid grid-cols-2 gap-4">
// // // //                                         <div>
// // // //                                             <p className="text-xs text-gray-500">Transaction Reference</p>
// // // //                                             <p className="font-mono text-sm font-bold">{transactionRef}</p>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-xs text-gray-500">Amount Paid</p>
// // // //                                             <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-xs text-gray-500">Payment Method</p>
// // // //                                             <p className="font-medium">{paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-xs text-gray-500">Date & Time</p>
// // // //                                             <p className="font-medium">{new Date().toLocaleString()}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 <div className="flex gap-4 justify-center">
// // // //                                     <button
// // // //                                         onClick={() => navigate('/customer/bookings')}
// // // //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                                     >
// // // //                                         View My Bookings
// // // //                                     </button>
// // // //                                     <button
// // // //                                         onClick={() => navigate('/customer/dashboard')}
// // // //                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // // //                                     >
// // // //                                         Browse More Vehicles
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         )}

// // // //                         {paymentStep === 'failed' && (
// // // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // // //                                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // // //                                     <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                                     </svg>
// // // //                                 </div>
// // // //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h3>
// // // //                                 <p className="text-gray-600 mb-6">{errorMessage || 'Something went wrong. Please try again.'}</p>
                                
// // // //                                 <div className="flex gap-4 justify-center">
// // // //                                     <button
// // // //                                         onClick={() => setPaymentStep('select')}
// // // //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                                     >
// // // //                                         Try Again
// // // //                                     </button>
// // // //                                     <button
// // // //                                         onClick={() => navigate('/customer/bookings')}
// // // //                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // // //                                     >
// // // //                                         Back to Bookings
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         )}
// // // //                     </div>

// // // //                     {/* Order Summary Sidebar */}
// // // //                     <div className="lg:col-span-1">
// // // //                         <div className="bg-white rounded-2xl shadow-xl sticky top-8">
// // // //                             <div className="p-6">
// // // //                                 <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                                
// // // //                                 {/* Vehicle Info */}
// // // //                                 <div className="flex items-center mb-4">
// // // //                                     <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
// // // //                                         {booking.vehicle?.vehicleImage ? (
// // // //                                             <img 
// // // //                                                 src={`${BASE_URL}/uploads/vehicles/${booking.vehicle.vehicleImage}`}
// // // //                                                 alt={booking.vehicle?.makeModel}
// // // //                                                 className="w-full h-full object-cover"
// // // //                                             />
// // // //                                         ) : (
// // // //                                             <div className="w-full h-full bg-teal-100 flex items-center justify-center">
// // // //                                                 <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// // // //                                                 </svg>
// // // //                                             </div>
// // // //                                         )}
// // // //                                     </div>
// // // //                                     <div>
// // // //                                         <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
// // // //                                         <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* Booking Details */}
// // // //                                 <div className="space-y-3 mb-4">
// // // //                                     <div className="flex justify-between text-sm">
// // // //                                         <span className="text-gray-600">Booking ID:</span>
// // // //                                         <span className="font-medium">#{booking.id}</span>
// // // //                                     </div>
// // // //                                     <div className="flex justify-between text-sm">
// // // //                                         <span className="text-gray-600">Pickup Date:</span>
// // // //                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
// // // //                                     </div>
// // // //                                     <div className="flex justify-between text-sm">
// // // //                                         <span className="text-gray-600">Drop-off Date:</span>
// // // //                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
// // // //                                     </div>
// // // //                                     <div className="flex justify-between text-sm">
// // // //                                         <span className="text-gray-600">Duration:</span>
// // // //                                         <span className="font-medium">{booking.numberOfDays || 1} days</span>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* Price Breakdown */}
// // // //                                 <div className="border-t border-gray-200 pt-4 space-y-2">
// // // //                                     <div className="flex justify-between text-sm">
// // // //                                         <span className="text-gray-600">Base Price</span>
// // // //                                         <span>{formatCurrency(booking.totalPrice)}</span>
// // // //                                     </div>
// // // //                                     {booking.gpsIncluded && (
// // // //                                         <div className="flex justify-between text-sm">
// // // //                                             <span className="text-gray-600">GPS Navigation</span>
// // // //                                             <span>+ Rs. 500/day</span>
// // // //                                         </div>
// // // //                                     )}
// // // //                                     {booking.childSeatIncluded && (
// // // //                                         <div className="flex justify-between text-sm">
// // // //                                             <span className="text-gray-600">Child Seat</span>
// // // //                                             <span>+ Rs. 300/day</span>
// // // //                                         </div>
// // // //                                     )}
// // // //                                     {booking.driverStatus === 'WITH_DRIVER' && (
// // // //                                         <div className="flex justify-between text-sm">
// // // //                                             <span className="text-gray-600">Driver Service</span>
// // // //                                             <span>+ Rs. 1,500/day</span>
// // // //                                         </div>
// // // //                                     )}
// // // //                                 </div>

// // // //                                 {/* Total */}
// // // //                                 <div className="border-t border-gray-200 pt-4 mt-4">
// // // //                                     <div className="flex justify-between items-center">
// // // //                                         <span className="text-lg font-bold text-gray-800">Total</span>
// // // //                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* Security Badge */}
// // // //                                 <div className="mt-6 pt-4 border-t border-gray-200">
// // // //                                     <div className="flex items-center text-xs text-gray-500">
// // // //                                         <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // // //                                         </svg>
// // // //                                         <span>Secure Payment • SSL Encrypted</span>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CustomerPaymentPage;



// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const CustomerPaymentView = () => {
// // //     const navigate = useNavigate();
// // //     const location = useLocation();
    
// // //     // State for booking and payment
// // //     const [booking, setBooking] = useState(null);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [errorMessage, setErrorMessage] = useState('');
// // //     const [paymentSuccessMessage, setPaymentSuccessMessage] = useState(''); // Renamed to avoid unused warning
    
// // //     // Payment method state
// // //     const [selectedMethod, setSelectedMethod] = useState('card');
// // //     const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
// // //     // Card payment details
// // //     const [cardDetails, setCardDetails] = useState({
// // //         cardNumber: '',
// // //         cardHolder: '',
// // //         expiryDate: '',
// // //         cvv: '',
// // //         saveCard: false
// // //     });
    
// // //     // Bank transfer details
// // //     const [bankTransferDetails, setBankTransferDetails] = useState({
// // //         bankName: '',
// // //         accountNumber: '',
// // //         accountHolder: '',
// // //         branch: '',
// // //         transferDate: '',
// // //         transferReference: '',
// // //         uploadSlip: null
// // //     });
    
// // //     // Cash payment details
// // //     const [cashDetails, setCashDetails] = useState({
// // //         pickupLocation: '',
// // //         contactNumber: '',
// // //         preferredTime: ''
// // //     });
    
// // //     // Digital wallet details
// // //     const [walletDetails, setWalletDetails] = useState({
// // //         walletType: 'gpay', // gpay, phonepay, paytm
// // //         walletId: '',
// // //         phoneNumber: ''
// // //     });
    
// // //     // Customer info - keeping customerId for potential future use
// // //     const [customerId] = useState(localStorage.getItem('customerId')); // stored for inclusion in payment data
// // //     const [customerName, setCustomerName] = useState('');
    
// // //     // Transaction reference
// // //     const [transactionRef, setTransactionRef] = useState('');
    
// // //     const BASE_URL = 'http://localhost:8080';

// // //     useEffect(() => {
// // //         // Check authentication
// // //         const token = localStorage.getItem('customerToken');
// // //         const storedCustomerId = localStorage.getItem('customerId');
// // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // //         if (!token || !storedCustomerId) {
// // //             navigate('/customer/login', { state: { from: '/customer/payment' } });
// // //             return;
// // //         }
        
// // //         setCustomerName(storedCustomerName || 'Customer');
        
// // //         // Get booking from location state or fetch from API
// // //         const bookingFromState = location.state?.selectedBooking;
// // //         const bookingIdFromState = location.state?.bookingId;
        
// // //         if (bookingFromState) {
// // //             setBooking(bookingFromState);
// // //             setIsLoading(false);
// // //         } else if (bookingIdFromState) {
// // //             fetchBookingDetails(bookingIdFromState);
// // //         } else {
// // //             setErrorMessage('No booking selected for payment');
// // //             setIsLoading(false);
// // //         }
// // //     }, [navigate, location]);

// // //     const fetchBookingDetails = async (bookingId) => {
// // //         setIsLoading(true);
// // //         try {
// // //             const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
// // //                 headers: {
// // //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// // //                 }
// // //             });
            
// // //             if (response.status === 200) {
// // //                 setBooking(response.data);
// // //             }
// // //         } catch (err) {
// // //             console.error('Error fetching booking:', err);
// // //             setErrorMessage('Failed to load booking details');
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     const handlePaymentSubmit = async (e) => {
// // //         e.preventDefault();
        
// // //         // Validate based on payment method
// // //         if (!validatePaymentDetails()) {
// // //             return;
// // //         }
        
// // //         setPaymentStep('processing');
// // //         setErrorMessage('');
        
// // //         try {
// // //             // Generate transaction reference
// // //             const txnRef = generateTransactionReference();
// // //             setTransactionRef(txnRef);
            
// // //             // Prepare payment data based on method (kept for potential future use)
// // //             const paymentData = preparePaymentData(txnRef);
            
// // //             // In production, uncomment this to use the paymentData
// // //             console.log('Payment Data prepared:', paymentData); // Using paymentData to avoid unused warning
            
// // //             // Simulate API call (replace with actual API)
// // //             await new Promise(resolve => setTimeout(resolve, 3000));
            
// // //             // For demo purposes, randomly succeed or fail
// // //             const isSuccess = Math.random() > 0.2; // 80% success rate
            
// // //             if (isSuccess) {
// // //                 setPaymentStep('success');
// // //                 setPaymentSuccessMessage('Payment completed successfully!');
                
// // //                 // In production, call your actual payment API
// // //                 // const response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
// // //                 //     headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` }
// // //                 // });
// // //             } else {
// // //                 setPaymentStep('failed');
// // //                 setErrorMessage('Payment failed. Please try again.');
// // //             }
            
// // //         } catch (error) {
// // //             console.error('Payment error:', error);
// // //             setPaymentStep('failed');
// // //             setErrorMessage('An error occurred during payment. Please try again.');
// // //         }
// // //     };

// // //     const preparePaymentData = (txnRef) => {
// // //         const baseData = {
// // //             bookingId: booking.id,
// // //             customerId: customerId, // include for backend tracking
// // //             amount: booking.totalPrice,
// // //             currency: 'LKR',
// // //             paymentReference: txnRef,
// // //             paidAt: new Date().toISOString()
// // //         };

// // //         switch (selectedMethod) {
// // //             case 'card':
// // //                 return {
// // //                     ...baseData,
// // //                     paymentMethod: 'CARD',
// // //                     paymentStatus: 'PAID',
// // //                     maskedCardNumber: maskCardNumber(cardDetails.cardNumber),
// // //                     cardLast4: cardDetails.cardNumber.slice(-4),
// // //                     cardBrand: detectCardBrand(cardDetails.cardNumber)
// // //                 };
                
// // //             case 'bank':
// // //                 return {
// // //                     ...baseData,
// // //                     paymentMethod: 'BANK_TRANSFER',
// // //                     paymentStatus: 'PENDING', // Will be confirmed after verification
// // //                     bankName: bankTransferDetails.bankName,
// // //                     accountNumber: maskAccountNumber(bankTransferDetails.accountNumber),
// // //                     transferReference: bankTransferDetails.transferReference
// // //                 };
                
// // //             case 'cash':
// // //                 return {
// // //                     ...baseData,
// // //                     paymentMethod: 'CASH',
// // //                     paymentStatus: 'PENDING', // Will be collected at pickup
// // //                     pickupLocation: cashDetails.pickupLocation,
// // //                     contactNumber: cashDetails.contactNumber
// // //                 };
                
// // //             case 'wallet':
// // //                 return {
// // //                     ...baseData,
// // //                     paymentMethod: 'DIGITAL_WALLET',
// // //                     paymentStatus: 'PAID',
// // //                     walletType: walletDetails.walletType,
// // //                     walletId: maskWalletId(walletDetails.walletId)
// // //                 };
                
// // //             default:
// // //                 return baseData;
// // //         }
// // //     };

// // //     const validatePaymentDetails = () => {
// // //         switch (selectedMethod) {
// // //             case 'card':
// // //                 if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
// // //                     setErrorMessage('Invalid card number');
// // //                     return false;
// // //                 }
// // //                 if (!cardDetails.cardHolder.trim()) {
// // //                     setErrorMessage('Card holder name is required');
// // //                     return false;
// // //                 }
// // //                 if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
// // //                     setErrorMessage('Invalid expiry date (MM/YY)');
// // //                     return false;
// // //                 }
// // //                 if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
// // //                     setErrorMessage('Invalid CVV');
// // //                     return false;
// // //                 }
// // //                 break;
                
// // //             case 'bank':
// // //                 if (!bankTransferDetails.bankName) {
// // //                     setErrorMessage('Please select a bank');
// // //                     return false;
// // //                 }
// // //                 if (!bankTransferDetails.accountNumber) {
// // //                     setErrorMessage('Account number is required');
// // //                     return false;
// // //                 }
// // //                 if (!bankTransferDetails.accountHolder) {
// // //                     setErrorMessage('Account holder name is required');
// // //                     return false;
// // //                 }
// // //                 if (!bankTransferDetails.transferReference) {
// // //                     setErrorMessage('Transfer reference is required');
// // //                     return false;
// // //                 }
// // //                 break;
                
// // //             case 'cash':
// // //                 if (!cashDetails.pickupLocation) {
// // //                     setErrorMessage('Pickup location is required');
// // //                     return false;
// // //                 }
// // //                 if (!cashDetails.contactNumber) {
// // //                     setErrorMessage('Contact number is required');
// // //                     return false;
// // //                 }
// // //                 if (!cashDetails.contactNumber.match(/^[0-9]{10}$/)) {
// // //                     setErrorMessage('Invalid phone number (10 digits)');
// // //                     return false;
// // //                 }
// // //                 break;
                
// // //             case 'wallet':
// // //                 if (!walletDetails.walletId && !walletDetails.phoneNumber) {
// // //                     setErrorMessage('Wallet ID or phone number is required');
// // //                     return false;
// // //                 }
// // //                 if (walletDetails.phoneNumber && !walletDetails.phoneNumber.match(/^[0-9]{10}$/)) {
// // //                     setErrorMessage('Invalid phone number (10 digits)');
// // //                     return false;
// // //                 }
// // //                 break;
// // //         }
// // //         return true;
// // //     };

// // //     // Helper functions
// // //     const generateTransactionReference = () => {
// // //         const timestamp = Date.now().toString(36);
// // //         const random = Math.random().toString(36).substring(2, 7).toUpperCase();
// // //         return `TXN${timestamp}${random}`;
// // //     };

// // //     const maskCardNumber = (number) => {
// // //         const cleaned = number.replace(/\s/g, '');
// // //         return `**** **** **** ${cleaned.slice(-4)}`;
// // //     };

// // //     const maskAccountNumber = (number) => {
// // //         if (!number) return '';
// // //         const cleaned = number.replace(/\s/g, '');
// // //         if (cleaned.length <= 4) return cleaned;
// // //         return `XXXX XXXX ${cleaned.slice(-4)}`;
// // //     };

// // //     const maskWalletId = (id) => {
// // //         if (!id) return '';
// // //         if (id.length <= 4) return id;
// // //         return `****${id.slice(-4)}`;
// // //     };

// // //     const detectCardBrand = (number) => {
// // //         const firstDigit = number[0];
// // //         if (firstDigit === '4') return 'VISA';
// // //         if (firstDigit === '5') return 'MASTERCARD';
// // //         if (firstDigit === '3') return 'AMEX';
// // //         if (firstDigit === '6') return 'DISCOVER';
// // //         return 'UNKNOWN';
// // //     };

// // //     // Form input handlers
// // //     const handleCardInputChange = (e) => {
// // //         const { name, value, type, checked } = e.target;
        
// // //         if (type === 'checkbox') {
// // //             setCardDetails(prev => ({ ...prev, [name]: checked }));
// // //             return;
// // //         }
        
// // //         if (name === 'cardNumber') {
// // //             const digitsOnly = value.replace(/\D/g, '');
// // //             const truncated = digitsOnly.slice(0, 16);
// // //             const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
// // //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// // //             return;
// // //         }
        
// // //         if (name === 'expiryDate') {
// // //             const digitsOnly = value.replace(/\D/g, '');
// // //             const truncated = digitsOnly.slice(0, 4);
// // //             let formatted = truncated;
// // //             if (truncated.length > 2) {
// // //                 formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
// // //             }
// // //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// // //             return;
// // //         }
        
// // //         if (name === 'cvv') {
// // //             const digitsOnly = value.replace(/\D/g, '');
// // //             const truncated = digitsOnly.slice(0, 4);
// // //             setCardDetails(prev => ({ ...prev, [name]: truncated }));
// // //             return;
// // //         }
        
// // //         setCardDetails(prev => ({ ...prev, [name]: value }));
// // //     };

// // //     const handleBankInputChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setBankTransferDetails(prev => ({ ...prev, [name]: value }));
// // //     };

// // //     const handleCashInputChange = (e) => {
// // //         const { name, value } = e.target;
// // //         if (name === 'contactNumber') {
// // //             const digitsOnly = value.replace(/\D/g, '');
// // //             const truncated = digitsOnly.slice(0, 10);
// // //             setCashDetails(prev => ({ ...prev, [name]: truncated }));
// // //         } else {
// // //             setCashDetails(prev => ({ ...prev, [name]: value }));
// // //         }
// // //     };

// // //     const handleWalletInputChange = (e) => {
// // //         const { name, value } = e.target;
// // //         if (name === 'phoneNumber') {
// // //             const digitsOnly = value.replace(/\D/g, '');
// // //             const truncated = digitsOnly.slice(0, 10);
// // //             setWalletDetails(prev => ({ ...prev, [name]: truncated }));
// // //         } else {
// // //             setWalletDetails(prev => ({ ...prev, [name]: value }));
// // //         }
// // //     };

// // //     const handleFileUpload = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setBankTransferDetails(prev => ({ ...prev, uploadSlip: file }));
// // //         }
// // //     };

// // //     const formatCurrency = (amount) => {
// // //         return new Intl.NumberFormat('en-LK', {
// // //             style: 'currency',
// // //             currency: 'LKR',
// // //             minimumFractionDigits: 0
// // //         }).format(amount).replace('LKR', 'Rs.');
// // //     };

// // //     const formatDate = (dateString) => {
// // //         if (!dateString) return 'N/A';
// // //         return new Date(dateString).toLocaleDateString('en-US', {
// // //             year: 'numeric',
// // //             month: 'short',
// // //             day: 'numeric'
// // //         });
// // //     };

// // //     // Payment Methods Configuration
// // //     const paymentMethods = [
// // //         {
// // //             id: 'card',
// // //             name: 'Credit / Debit Card',
// // //             icon: (
// // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// // //                 </svg>
// // //             ),
// // //             description: 'Pay instantly with Visa, Mastercard, Amex',
// // //             processingTime: 'Instant',
// // //             color: 'from-blue-600 to-blue-700'
// // //         },
// // //         {
// // //             id: 'bank',
// // //             name: 'Bank Transfer',
// // //             icon: (
// // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
// // //                 </svg>
// // //             ),
// // //             description: 'Pay from your bank account',
// // //             processingTime: '1-2 business days',
// // //             color: 'from-green-600 to-green-700'
// // //         },
// // //         {
// // //             id: 'cash',
// // //             name: 'Cash',
// // //             icon: (
// // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// // //                 </svg>
// // //             ),
// // //             description: 'Pay at vehicle pickup',
// // //             processingTime: 'Pay at counter',
// // //             color: 'from-yellow-600 to-yellow-700'
// // //         },
// // //         {
// // //             id: 'wallet',
// // //             name: 'Digital Wallet',
// // //             icon: (
// // //                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a4 4 0 004-4V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4z" />
// // //                 </svg>
// // //             ),
// // //             description: 'Google Pay, PhonePe, Paytm',
// // //             processingTime: 'Instant',
// // //             color: 'from-purple-600 to-purple-700'
// // //         }
// // //     ];

// // //     // Render payment form based on selected method
// // //     const renderPaymentForm = () => {
// // //         switch (selectedMethod) {
// // //             case 'card':
// // //                 return (
// // //                     <div className="space-y-5">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Card Number
// // //                             </label>
// // //                             <div className="relative">
// // //                                 <input
// // //                                     type="text"
// // //                                     name="cardNumber"
// // //                                     value={cardDetails.cardNumber}
// // //                                     onChange={handleCardInputChange}
// // //                                     placeholder="1234 5678 9012 3456"
// // //                                     maxLength="19"
// // //                                     className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
// // //                                     <span className="text-xs font-bold text-blue-600">VISA</span>
// // //                                     <span className="text-xs font-bold text-red-600">MC</span>
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Card Holder Name
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="cardHolder"
// // //                                 value={cardDetails.cardHolder}
// // //                                 onChange={handleCardInputChange}
// // //                                 placeholder="John Doe"
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Expiry Date
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="expiryDate"
// // //                                     value={cardDetails.expiryDate}
// // //                                     onChange={handleCardInputChange}
// // //                                     placeholder="MM/YY"
// // //                                     maxLength="5"
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     CVV
// // //                                 </label>
// // //                                 <input
// // //                                     type="password"
// // //                                     name="cvv"
// // //                                     value={cardDetails.cvv}
// // //                                     onChange={handleCardInputChange}
// // //                                     placeholder="123"
// // //                                     maxLength="4"
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex items-center">
// // //                             <input
// // //                                 type="checkbox"
// // //                                 name="saveCard"
// // //                                 checked={cardDetails.saveCard}
// // //                                 onChange={handleCardInputChange}
// // //                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// // //                             />
// // //                             <label className="ml-2 text-sm text-gray-700">
// // //                                 Save card for future payments
// // //                             </label>
// // //                         </div>

// // //                         <div className="bg-blue-50 p-4 rounded-lg">
// // //                             <div className="flex items-start">
// // //                                 <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                                 </svg>
// // //                                 <p className="text-xs text-blue-700">
// // //                                     Your payment information is encrypted and secure. We never store your full card details.
// // //                                 </p>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 );

// // //             case 'bank':
// // //                 return (
// // //                     <div className="space-y-5">
// // //                         <div className="bg-yellow-50 p-4 rounded-lg mb-4">
// // //                             <h4 className="font-semibold text-yellow-800 mb-2">Bank Account Details</h4>
// // //                             <div className="space-y-1 text-sm">
// // //                                 <p><span className="font-medium">Bank:</span> Fair Rent Bank</p>
// // //                                 <p><span className="font-medium">Account Name:</span> FRAC Vehicle Rentals</p>
// // //                                 <p><span className="font-medium">Account Number:</span> 1234 5678 9012 3456</p>
// // //                                 <p><span className="font-medium">Branch:</span> Colombo Main</p>
// // //                                 <p><span className="font-medium">Amount:</span> {formatCurrency(booking?.totalPrice)}</p>
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Select Your Bank
// // //                             </label>
// // //                             <select
// // //                                 name="bankName"
// // //                                 value={bankTransferDetails.bankName}
// // //                                 onChange={handleBankInputChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             >
// // //                                 <option value="">Select bank</option>
// // //                                 <option value="BOC">Bank of Ceylon</option>
// // //                                 <option value="Peoples">People's Bank</option>
// // //                                 <option value="Commercial">Commercial Bank</option>
// // //                                 <option value="HNB">HNB</option>
// // //                                 <option value="NTB">NTB</option>
// // //                                 <option value="Sampath">Sampath Bank</option>
// // //                             </select>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Account Number
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="accountNumber"
// // //                                 value={bankTransferDetails.accountNumber}
// // //                                 onChange={handleBankInputChange}
// // //                                 placeholder="Enter your account number"
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Account Holder Name
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="accountHolder"
// // //                                 value={bankTransferDetails.accountHolder}
// // //                                 onChange={handleBankInputChange}
// // //                                 placeholder="As per bank records"
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Transfer Reference / Transaction ID
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="transferReference"
// // //                                 value={bankTransferDetails.transferReference}
// // //                                 onChange={handleBankInputChange}
// // //                                 placeholder="Enter the reference number from your transfer"
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Upload Payment Slip (Optional)
// // //                             </label>
// // //                             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // //                                 <input
// // //                                     type="file"
// // //                                     id="slip-upload"
// // //                                     onChange={handleFileUpload}
// // //                                     accept="image/*,.pdf"
// // //                                     className="hidden"
// // //                                 />
// // //                                 <label
// // //                                     htmlFor="slip-upload"
// // //                                     className="cursor-pointer flex flex-col items-center"
// // //                                 >
// // //                                     <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// // //                                     </svg>
// // //                                     <span className="text-sm text-gray-600">
// // //                                         {bankTransferDetails.uploadSlip ? 
// // //                                             bankTransferDetails.uploadSlip.name : 
// // //                                             'Click to upload payment slip'}
// // //                                     </span>
// // //                                     <span className="text-xs text-gray-500 mt-1">
// // //                                         PDF, PNG, JPG (Max 5MB)
// // //                                     </span>
// // //                                 </label>
// // //                             </div>
// // //                         </div>

// // //                         <div className="bg-blue-50 p-4 rounded-lg">
// // //                             <p className="text-sm text-blue-700">
// // //                                 <span className="font-bold">Note:</span> Your payment will be verified within 24 hours. 
// // //                                 You'll receive a confirmation once verified.
// // //                             </p>
// // //                         </div>
// // //                     </div>
// // //                 );

// // //             case 'cash':
// // //                 return (
// // //                     <div className="space-y-5">
// // //                         <div className="bg-green-50 p-4 rounded-lg mb-4">
// // //                             <div className="flex items-center">
// // //                                 <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// // //                                 </svg>
// // //                                 <div>
// // //                                     <h4 className="font-semibold text-green-800">Cash on Pickup</h4>
// // //                                     <p className="text-sm text-green-600">Pay when you pick up the vehicle</p>
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Pickup Location
// // //                             </label>
// // //                             <select
// // //                                 name="pickupLocation"
// // //                                 value={cashDetails.pickupLocation}
// // //                                 onChange={handleCashInputChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             >
// // //                                 <option value="">Select pickup location</option>
// // //                                 <option value="Colombo">Colombo Branch</option>
// // //                                 <option value="Kandy">Kandy Branch</option>
// // //                                 <option value="Galle">Galle Branch</option>
// // //                                 <option value="Negombo">Negombo Branch</option>
// // //                                 <option value="Jaffna">Jaffna Branch</option>
// // //                             </select>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Contact Number
// // //                             </label>
// // //                             <div className="relative">
// // //                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="contactNumber"
// // //                                     value={cashDetails.contactNumber}
// // //                                     onChange={handleCashInputChange}
// // //                                     placeholder="77 123 4567"
// // //                                     maxLength="10"
// // //                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Preferred Pickup Time
// // //                             </label>
// // //                             <input
// // //                                 type="time"
// // //                                 name="preferredTime"
// // //                                 value={cashDetails.preferredTime}
// // //                                 onChange={handleCashInputChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div className="bg-yellow-50 p-4 rounded-lg">
// // //                             <div className="flex items-start">
// // //                                 <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                 </svg>
// // //                                 <p className="text-sm text-yellow-700">
// // //                                     Please bring exact change if possible. Our branch will have limited cash for change.
// // //                                 </p>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 );

// // //             case 'wallet':
// // //                 return (
// // //                     <div className="space-y-5">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-3">
// // //                                 Select Wallet
// // //                             </label>
// // //                             <div className="grid grid-cols-3 gap-3">
// // //                                 {['gpay', 'phonepay', 'paytm'].map((wallet) => (
// // //                                     <button
// // //                                         key={wallet}
// // //                                         type="button"
// // //                                         onClick={() => setWalletDetails(prev => ({ ...prev, walletType: wallet }))}
// // //                                         className={`p-4 border-2 rounded-lg flex flex-col items-center transition duration-200 ${
// // //                                             walletDetails.walletType === wallet
// // //                                                 ? 'border-teal-600 bg-teal-50'
// // //                                                 : 'border-gray-200 hover:border-teal-300'
// // //                                         }`}
// // //                                     >
// // //                                         {wallet === 'gpay' && (
// // //                                             <>
// // //                                                 <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
// // //                                                     <span className="text-white font-bold text-sm">GP</span>
// // //                                                 </div>
// // //                                                 <span className="text-xs font-medium">Google Pay</span>
// // //                                             </>
// // //                                         )}
// // //                                         {wallet === 'phonepay' && (
// // //                                             <>
// // //                                                 <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2">
// // //                                                     <span className="text-white font-bold text-sm">PP</span>
// // //                                                 </div>
// // //                                                 <span className="text-xs font-medium">PhonePe</span>
// // //                                             </>
// // //                                         )}
// // //                                         {wallet === 'paytm' && (
// // //                                             <>
// // //                                                 <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2">
// // //                                                     <span className="text-white font-bold text-sm">PT</span>
// // //                                                 </div>
// // //                                                 <span className="text-xs font-medium">Paytm</span>
// // //                                             </>
// // //                                         )}
// // //                                     </button>
// // //                                 ))}
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Wallet ID / UPI ID
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="walletId"
// // //                                 value={walletDetails.walletId}
// // //                                 onChange={handleWalletInputChange}
// // //                                 placeholder="username@bank"
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div className="relative">
// // //                             <div className="absolute inset-0 flex items-center">
// // //                                 <div className="w-full border-t border-gray-300"></div>
// // //                             </div>
// // //                             <div className="relative flex justify-center text-sm">
// // //                                 <span className="px-2 bg-white text-gray-500">OR</span>
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Mobile Number
// // //                             </label>
// // //                             <div className="relative">
// // //                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="phoneNumber"
// // //                                     value={walletDetails.phoneNumber}
// // //                                     onChange={handleWalletInputChange}
// // //                                     placeholder="77 123 4567"
// // //                                     maxLength="10"
// // //                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="bg-purple-50 p-4 rounded-lg">
// // //                             <p className="text-sm text-purple-700">
// // //                                 You will receive a payment request on your UPI app. Please approve it to complete the payment.
// // //                             </p>
// // //                         </div>
// // //                     </div>
// // //                 );

// // //             default:
// // //                 return null;
// // //         }
// // //     };

// // //     if (isLoading) {
// // //         return (
// // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // //                 <div className="text-center">
// // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // //                     <p className="text-gray-600">Loading payment details...</p>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     if (!booking) {
// // //         return (
// // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
// // //                     <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                     </svg>
// // //                     <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
// // //                     <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
// // //                     <button
// // //                         onClick={() => navigate('/customer/bookings')}
// // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// // //                     >
// // //                         Go to My Bookings
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // //             {/* Header */}
// // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // //                 <div className="max-w-7xl mx-auto px-4 py-6">
// // //                     <div className="flex justify-between items-center">
// // //                         <div className="flex items-center">
// // //                             <button
// // //                                 onClick={() => navigate(-1)}
// // //                                 className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200"
// // //                             >
// // //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// // //                                 </svg>
// // //                             </button>
// // //                             <div>
// // //                                 <h1 className="text-2xl md:text-3xl font-bold">Payment</h1>
// // //                                 <p className="text-teal-300 text-sm">Complete your booking payment</p>
// // //                             </div>
// // //                         </div>
// // //                         <div className="flex items-center">
// // //                             <span className="text-sm hidden md:block">Welcome, {customerName}</span>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // //                 {/* Progress Steps */}
// // //                 <div className="mb-8">
// // //                     <div className="flex items-center justify-center">
// // //                         <div className="flex items-center">
// // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // //                                 paymentStep === 'select' ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
// // //                             }`}>
// // //                                 1
// // //                             </div>
// // //                             <span className="ml-2 text-sm font-medium text-gray-700">Select Method</span>
// // //                         </div>
// // //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// // //                         <div className="flex items-center">
// // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // //                                 paymentStep === 'processing' ? 'bg-teal-600 text-white' : 
// // //                                 paymentStep === 'success' || paymentStep === 'failed' ? 'bg-teal-100 text-teal-600' : 'bg-gray-200 text-gray-400'
// // //                             }`}>
// // //                                 2
// // //                             </div>
// // //                             <span className="ml-2 text-sm font-medium text-gray-700">Process</span>
// // //                         </div>
// // //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// // //                         <div className="flex items-center">
// // //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // //                                 paymentStep === 'success' ? 'bg-green-600 text-white' :
// // //                                 paymentStep === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
// // //                             }`}>
// // //                                 3
// // //                             </div>
// // //                             <span className="ml-2 text-sm font-medium text-gray-700">Complete</span>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                     {/* Main Payment Area */}
// // //                     <div className="lg:col-span-2">
// // //                         {paymentStep === 'select' && (
// // //                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // //                                 <div className="p-6">
// // //                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                    
// // //                                     {/* Payment Methods Grid */}
// // //                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// // //                                         {paymentMethods.map((method) => (
// // //                                             <button
// // //                                                 key={method.id}
// // //                                                 onClick={() => setSelectedMethod(method.id)}
// // //                                                 className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
// // //                                                     selectedMethod === method.id
// // //                                                         ? 'border-teal-600 bg-teal-50 shadow-lg shadow-teal-100'
// // //                                                         : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
// // //                                                 }`}
// // //                                             >
// // //                                                 {selectedMethod === method.id && (
// // //                                                     <div className="absolute top-3 right-3">
// // //                                                         <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
// // //                                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// // //                                                             </svg>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 )}
                                                
// // //                                                 <div className="flex items-center mb-3">
// // //                                                     <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white mr-3`}>
// // //                                                         {method.icon}
// // //                                                     </div>
// // //                                                     <div className="text-left">
// // //                                                         <h4 className="font-semibold text-gray-800">{method.name}</h4>
// // //                                                         <p className="text-xs text-gray-500">{method.processingTime}</p>
// // //                                                     </div>
// // //                                                 </div>
                                                
// // //                                                 <p className="text-sm text-gray-600 text-left">{method.description}</p>
// // //                                             </button>
// // //                                         ))}
// // //                                     </div>

// // //                                     {/* Payment Form */}
// // //                                     <div className="border-t border-gray-200 pt-6">
// // //                                         <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // //                                             {paymentMethods.find(m => m.id === selectedMethod)?.name} Details
// // //                                         </h3>
                                        
// // //                                         <form onSubmit={handlePaymentSubmit}>
// // //                                             {renderPaymentForm()}
                                            
// // //                                             {errorMessage && (
// // //                                                 <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
// // //                                                     <p className="text-red-700 text-sm">{errorMessage}</p>
// // //                                                 </div>
// // //                                             )}
                                            
// // //                                             <div className="mt-6 flex gap-4">
// // //                                                 <button
// // //                                                     type="submit"
// // //                                                     className="flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200"
// // //                                                 >
// // //                                                     Pay {formatCurrency(booking.totalPrice)}
// // //                                                 </button>
// // //                                                 <button
// // //                                                     type="button"
// // //                                                     onClick={() => navigate('/customer/bookings')}
// // //                                                     className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
// // //                                                 >
// // //                                                     Cancel
// // //                                                 </button>
// // //                                             </div>
// // //                                         </form>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         {paymentStep === 'processing' && (
// // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // //                                 <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-600 border-t-transparent mb-6"></div>
// // //                                 <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h3>
// // //                                 <p className="text-gray-600 mb-4">Please do not close this window...</p>
// // //                                 <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
// // //                                     <p className="text-sm text-gray-600">Transaction Reference</p>
// // //                                     <p className="text-lg font-mono font-bold text-teal-600">{transactionRef || 'Generating...'}</p>
// // //                                 </div>
// // //                                 <p className="text-xs text-gray-400 mt-4">
// // //                                     Amount: {formatCurrency(booking.totalPrice)}
// // //                                 </p>
// // //                             </div>
// // //                         )}

// // //                         {paymentStep === 'success' && (
// // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // //                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                                     <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                                     </svg>
// // //                                 </div>
// // //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
// // //                                 <p className="text-gray-600 mb-2">{paymentSuccessMessage || 'Your booking has been confirmed'}</p>
                                
// // //                                 <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
// // //                                     <div className="grid grid-cols-2 gap-4">
// // //                                         <div>
// // //                                             <p className="text-xs text-gray-500">Transaction Reference</p>
// // //                                             <p className="font-mono text-sm font-bold">{transactionRef}</p>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-gray-500">Amount Paid</p>
// // //                                             <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-gray-500">Payment Method</p>
// // //                                             <p className="font-medium">{paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-gray-500">Date & Time</p>
// // //                                             <p className="font-medium">{new Date().toLocaleString()}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="flex gap-4 justify-center">
// // //                                     <button
// // //                                         onClick={() => navigate('/customer/bookings')}
// // //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// // //                                     >
// // //                                         View My Bookings
// // //                                     </button>
// // //                                     <button
// // //                                         onClick={() => navigate('/customer/dashboard')}
// // //                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // //                                     >
// // //                                         Browse More Vehicles
// // //                                     </button>
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         {paymentStep === 'failed' && (
// // //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// // //                                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                                     <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                                     </svg>
// // //                                 </div>
// // //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h3>
// // //                                 <p className="text-gray-600 mb-6">{errorMessage || 'Something went wrong. Please try again.'}</p>
                                
// // //                                 <div className="flex gap-4 justify-center">
// // //                                     <button
// // //                                         onClick={() => setPaymentStep('select')}
// // //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// // //                                     >
// // //                                         Try Again
// // //                                     </button>
// // //                                     <button
// // //                                         onClick={() => navigate('/customer/bookings')}
// // //                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // //                                     >
// // //                                         Back to Bookings
// // //                                     </button>
// // //                                 </div>
// // //                             </div>
// // //                         )}
// // //                     </div>

// // //                     {/* Order Summary Sidebar */}
// // //                     <div className="lg:col-span-1">
// // //                         <div className="bg-white rounded-2xl shadow-xl sticky top-8">
// // //                             <div className="p-6">
// // //                                 <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                                
// // //                                 {/* Vehicle Info */}
// // //                                 <div className="flex items-center mb-4">
// // //                                     <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
// // //                                         {booking.vehicle?.vehicleImage ? (
// // //                                             <img 
// // //                                                 src={`${BASE_URL}/uploads/vehicles/${booking.vehicle.vehicleImage}`}
// // //                                                 alt={booking.vehicle?.makeModel}
// // //                                                 className="w-full h-full object-cover"
// // //                                             />
// // //                                         ) : (
// // //                                             <div className="w-full h-full bg-teal-100 flex items-center justify-center">
// // //                                                 <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// // //                                                 </svg>
// // //                                             </div>
// // //                                         )}
// // //                                     </div>
// // //                                     <div>
// // //                                         <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
// // //                                         <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
// // //                                     </div>
// // //                                 </div>

// // //                                 {/* Booking Details */}
// // //                                 <div className="space-y-3 mb-4">
// // //                                     <div className="flex justify-between text-sm">
// // //                                         <span className="text-gray-600">Booking ID:</span>
// // //                                         <span className="font-medium">#{booking.id}</span>
// // //                                     </div>
// // //                                     <div className="flex justify-between text-sm">
// // //                                         <span className="text-gray-600">Pickup Date:</span>
// // //                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
// // //                                     </div>
// // //                                     <div className="flex justify-between text-sm">
// // //                                         <span className="text-gray-600">Drop-off Date:</span>
// // //                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
// // //                                     </div>
// // //                                     <div className="flex justify-between text-sm">
// // //                                         <span className="text-gray-600">Duration:</span>
// // //                                         <span className="font-medium">{booking.numberOfDays || 1} days</span>
// // //                                     </div>
// // //                                 </div>

// // //                                 {/* Price Breakdown */}
// // //                                 <div className="border-t border-gray-200 pt-4 space-y-2">
// // //                                     <div className="flex justify-between text-sm">
// // //                                         <span className="text-gray-600">Base Price</span>
// // //                                         <span>{formatCurrency(booking.totalPrice)}</span>
// // //                                     </div>
// // //                                     {booking.gpsIncluded && (
// // //                                         <div className="flex justify-between text-sm">
// // //                                             <span className="text-gray-600">GPS Navigation</span>
// // //                                             <span>+ Rs. 500/day</span>
// // //                                         </div>
// // //                                     )}
// // //                                     {booking.childSeatIncluded && (
// // //                                         <div className="flex justify-between text-sm">
// // //                                             <span className="text-gray-600">Child Seat</span>
// // //                                             <span>+ Rs. 300/day</span>
// // //                                         </div>
// // //                                     )}
// // //                                     {booking.driverStatus === 'WITH_DRIVER' && (
// // //                                         <div className="flex justify-between text-sm">
// // //                                             <span className="text-gray-600">Driver Service</span>
// // //                                             <span>+ Rs. 1,500/day</span>
// // //                                         </div>
// // //                                     )}
// // //                                 </div>

// // //                                 {/* Total */}
// // //                                 <div className="border-t border-gray-200 pt-4 mt-4">
// // //                                     <div className="flex justify-between items-center">
// // //                                         <span className="text-lg font-bold text-gray-800">Total</span>
// // //                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
// // //                                     </div>
// // //                                 </div>

// // //                                 {/* Security Badge */}
// // //                                 <div className="mt-6 pt-4 border-t border-gray-200">
// // //                                     <div className="flex items-center text-xs text-gray-500">
// // //                                         <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                                         </svg>
// // //                                         <span>Secure Payment • SSL Encrypted</span>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CustomerPaymentView;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // const CustomerPaymentView = () => {
// //     const navigate = useNavigate();
// //     const location = useLocation();
    
// //     // State for booking and payment
// //     const [booking, setBooking] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [successMessage, setSuccessMessage] = useState('');
    
// //     // Payment method state
// //     const [selectedMethod, setSelectedMethod] = useState('card');
// //     const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
// //     // Card payment details
// //     const [cardDetails, setCardDetails] = useState({
// //         cardNumber: '',
// //         cardHolder: '',
// //         expiryDate: '',
// //         cvv: '',
// //         saveCard: false
// //     });
    
// //     // Customer info
// //     const [customerId, setCustomerId] = useState(null);
// //     const [customerName, setCustomerName] = useState('');
    
// //     // Transaction reference
// //     const [transactionRef, setTransactionRef] = useState('');
// //     const [paymentResponse, setPaymentResponse] = useState(null);
    
// //     const BASE_URL = 'http://localhost:8080';

// //     useEffect(() => {
// //         // Check authentication
// //         const token = localStorage.getItem('customerToken');
// //         const storedCustomerId = localStorage.getItem('customerId');
// //         const storedCustomerName = localStorage.getItem('customerName');
        
// //         if (!token || !storedCustomerId) {
// //             navigate('/customer/login', { state: { from: '/customer/payment' } });
// //             return;
// //         }
        
// //         setCustomerId(storedCustomerId);
// //         setCustomerName(storedCustomerName || 'Customer');
        
// //         // Get booking from location state
// //         const bookingFromState = location.state?.selectedBooking;
// //         const bookingIdFromState = location.state?.bookingId;
        
// //         if (bookingFromState) {
// //             setBooking(bookingFromState);
// //             setIsLoading(false);
// //         } else if (bookingIdFromState) {
// //             fetchBookingDetails(bookingIdFromState);
// //         } else {
// //             setErrorMessage('No booking selected for payment');
// //             setIsLoading(false);
// //         }
// //     }, [navigate, location]);

// //     const fetchBookingDetails = async (bookingId) => {
// //         setIsLoading(true);
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/booking/${bookingId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 }
// //             });
            
// //             if (response.status === 200) {
// //                 setBooking(response.data);
// //             }
// //         } catch (err) {
// //             console.error('Error fetching booking:', err);
// //             setErrorMessage('Failed to load booking details');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const handlePaymentSubmit = async (e) => {
// //         e.preventDefault();
        
// //         // Validate card details
// //         if (!validateCardDetails()) {
// //             return;
// //         }
        
// //         setPaymentStep('processing');
// //         setErrorMessage('');
// //         setIsSubmitting(true);
        
// //         try {
// //             // Generate transaction reference
// //             const txnRef = generateTransactionReference();
// //             setTransactionRef(txnRef);
            
// //             // Prepare payment data for backend
// //             const paymentData = {
// //                 bookingId: booking.id,
// //                 amount: booking.totalPrice,
// //                 currency: 'LKR',
// //                 paymentMethod: 'CARD',
// //                 paymentStatus: 'PAID',
// //                 paymentReference: txnRef,
// //                 maskedCardNumber: maskCardNumber(cardDetails.cardNumber),
// //                 cardLast4: cardDetails.cardNumber.slice(-4),
// //                 cardBrand: detectCardBrand(cardDetails.cardNumber)
// //             };
            
// //             console.log('Sending payment data:', paymentData);
            
// //             // Call the payment API
// //             const response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 }
// //             });
            
// //             if (response.status === 201) {
// //                 setPaymentResponse(response.data);
// //                 setPaymentStep('success');
// //                 setSuccessMessage('Payment completed successfully!');
                
// //                 // Update the booking in local state
// //                 setBooking(prev => ({
// //                     ...prev,
// //                     paymentStatus: 'PAID'
// //                 }));
// //             }
            
// //         } catch (error) {
// //             console.error('Payment error:', error);
// //             setPaymentStep('failed');
            
// //             if (error.response) {
// //                 // The request was made and the server responded with a status code
// //                 // that falls out of the range of 2xx
// //                 setErrorMessage(error.response.data?.message || 'Payment failed. Please try again.');
// //             } else if (error.request) {
// //                 // The request was made but no response was received
// //                 setErrorMessage('Network error. Please check your connection.');
// //             } else {
// //                 // Something happened in setting up the request that triggered an Error
// //                 setErrorMessage('An error occurred. Please try again.');
// //             }
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     const validateCardDetails = () => {
// //         if (!cardDetails.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
// //             setErrorMessage('Invalid card number (16 digits required)');
// //             return false;
// //         }
// //         if (!cardDetails.cardHolder.trim()) {
// //             setErrorMessage('Card holder name is required');
// //             return false;
// //         }
// //         if (!cardDetails.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
// //             setErrorMessage('Invalid expiry date (MM/YY)');
// //             return false;
// //         }
        
// //         // Check if card is not expired
// //         const [month, year] = cardDetails.expiryDate.split('/');
// //         const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
// //         const today = new Date();
// //         if (expiry < today) {
// //             setErrorMessage('Card has expired');
// //             return false;
// //         }
        
// //         if (!cardDetails.cvv.match(/^\d{3,4}$/)) {
// //             setErrorMessage('Invalid CVV (3 or 4 digits)');
// //             return false;
// //         }
// //         return true;
// //     };

// //     const generateTransactionReference = () => {
// //         const timestamp = Date.now().toString(36);
// //         const random = Math.random().toString(36).substring(2, 7).toUpperCase();
// //         return `TXN${timestamp}${random}`;
// //     };

// //     const maskCardNumber = (number) => {
// //         const cleaned = number.replace(/\s/g, '');
// //         return `**** **** **** ${cleaned.slice(-4)}`;
// //     };

// //     const detectCardBrand = (number) => {
// //         const firstDigit = number[0];
// //         if (firstDigit === '4') return 'VISA';
// //         if (firstDigit === '5') return 'MASTERCARD';
// //         if (firstDigit === '3') return 'AMEX';
// //         if (firstDigit === '6') return 'DISCOVER';
// //         return 'UNKNOWN';
// //     };

// //     const handleCardInputChange = (e) => {
// //         const { name, value, type, checked } = e.target;
        
// //         if (type === 'checkbox') {
// //             setCardDetails(prev => ({ ...prev, [name]: checked }));
// //             return;
// //         }
        
// //         if (name === 'cardNumber') {
// //             const digitsOnly = value.replace(/\D/g, '');
// //             const truncated = digitsOnly.slice(0, 16);
// //             const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
// //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// //             return;
// //         }
        
// //         if (name === 'expiryDate') {
// //             const digitsOnly = value.replace(/\D/g, '');
// //             const truncated = digitsOnly.slice(0, 4);
// //             let formatted = truncated;
// //             if (truncated.length > 2) {
// //                 formatted = truncated.slice(0, 2) + '/' + truncated.slice(2);
// //             }
// //             setCardDetails(prev => ({ ...prev, [name]: formatted }));
// //             return;
// //         }
        
// //         if (name === 'cvv') {
// //             const digitsOnly = value.replace(/\D/g, '');
// //             const truncated = digitsOnly.slice(0, 4);
// //             setCardDetails(prev => ({ ...prev, [name]: truncated }));
// //             return;
// //         }
        
// //         setCardDetails(prev => ({ ...prev, [name]: value }));
// //     };

// //     const handleDownloadReceipt = async () => {
// //         if (paymentResponse?.id) {
// //             try {
// //                 const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentResponse.id}/receipt`, {
// //                     headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// //                     responseType: 'blob'
// //                 });
                
// //                 const url = window.URL.createObjectURL(new Blob([response.data]));
// //                 const link = document.createElement('a');
// //                 link.href = url;
// //                 link.setAttribute('download', `receipt_${paymentResponse.id}.pdf`);
// //                 document.body.appendChild(link);
// //                 link.click();
// //                 link.remove();
// //             } catch (error) {
// //                 console.error('Download error:', error);
// //                 alert('Failed to download receipt');
// //             }
// //         }
// //     };

// //     const formatCurrency = (amount) => {
// //         return new Intl.NumberFormat('en-LK', {
// //             style: 'currency',
// //             currency: 'LKR',
// //             minimumFractionDigits: 0
// //         }).format(amount).replace('LKR', 'Rs.');
// //     };

// //     const formatDate = (dateString) => {
// //         if (!dateString) return 'N/A';
// //         return new Date(dateString).toLocaleDateString('en-US', {
// //             year: 'numeric',
// //             month: 'short',
// //             day: 'numeric'
// //         });
// //     };

// //     if (isLoading) {
// //         return (
// //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// //                 <div className="text-center">
// //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// //                     <p className="text-gray-600">Loading payment details...</p>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     if (!booking) {
// //         return (
// //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
// //                     <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                     <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
// //                     <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
// //                     <button
// //                         onClick={() => navigate('/customer/bookings')}
// //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// //                     >
// //                         Go to My Bookings
// //                     </button>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     // Check if booking is already paid
// //     if (booking.paymentStatus === 'PAID') {
// //         return (
// //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
// //                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                         <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-xl font-bold text-gray-800 mb-2">Already Paid</h2>
// //                     <p className="text-gray-600 mb-6">This booking has already been paid for.</p>
// //                     <button
// //                         onClick={() => navigate('/customer/bookings')}
// //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
// //                     >
// //                         View My Bookings
// //                     </button>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// //             {/* Header */}
// //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// //                 <div className="max-w-7xl mx-auto px-4 py-6">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex items-center">
// //                             <button
// //                                 onClick={() => navigate(-1)}
// //                                 className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200"
// //                             >
// //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// //                                 </svg>
// //                             </button>
// //                             <div>
// //                                 <h1 className="text-2xl md:text-3xl font-bold">Payment</h1>
// //                                 <p className="text-teal-300 text-sm">Complete your booking payment</p>
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center">
// //                             <span className="text-sm hidden md:block">Welcome, {customerName}</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="max-w-7xl mx-auto px-4 py-8">
// //                 {/* Progress Steps */}
// //                 <div className="mb-8">
// //                     <div className="flex items-center justify-center">
// //                         <div className="flex items-center">
// //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// //                                 paymentStep === 'select' ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
// //                             }`}>
// //                                 1
// //                             </div>
// //                             <span className="ml-2 text-sm font-medium text-gray-700">Enter Details</span>
// //                         </div>
// //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// //                         <div className="flex items-center">
// //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// //                                 paymentStep === 'processing' ? 'bg-teal-600 text-white' : 
// //                                 paymentStep === 'success' || paymentStep === 'failed' ? 'bg-teal-100 text-teal-600' : 'bg-gray-200 text-gray-400'
// //                             }`}>
// //                                 2
// //                             </div>
// //                             <span className="ml-2 text-sm font-medium text-gray-700">Process</span>
// //                         </div>
// //                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
// //                         <div className="flex items-center">
// //                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
// //                                 paymentStep === 'success' ? 'bg-green-600 text-white' :
// //                                 paymentStep === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
// //                             }`}>
// //                                 3
// //                             </div>
// //                             <span className="ml-2 text-sm font-medium text-gray-700">Complete</span>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //                     {/* Main Payment Area */}
// //                     <div className="lg:col-span-2">
// //                         {paymentStep === 'select' && (
// //                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //                                 <div className="p-6">
// //                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Card Payment Details</h2>
                                    
// //                                     <form onSubmit={handlePaymentSubmit}>
// //                                         <div className="space-y-5">
// //                                             <div>
// //                                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                                     Card Number
// //                                                 </label>
// //                                                 <div className="relative">
// //                                                     <input
// //                                                         type="text"
// //                                                         name="cardNumber"
// //                                                         value={cardDetails.cardNumber}
// //                                                         onChange={handleCardInputChange}
// //                                                         placeholder="1234 5678 9012 3456"
// //                                                         maxLength="19"
// //                                                         className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                                         required
// //                                                     />
// //                                                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
// //                                                         <span className="text-xs font-bold text-blue-600">VISA</span>
// //                                                         <span className="text-xs font-bold text-red-600">MC</span>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>

// //                                             <div>
// //                                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                                     Card Holder Name
// //                                                 </label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="cardHolder"
// //                                                     value={cardDetails.cardHolder}
// //                                                     onChange={handleCardInputChange}
// //                                                     placeholder="John Doe"
// //                                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                                     required
// //                                                 />
// //                                             </div>

// //                                             <div className="grid grid-cols-2 gap-4">
// //                                                 <div>
// //                                                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                                         Expiry Date
// //                                                     </label>
// //                                                     <input
// //                                                         type="text"
// //                                                         name="expiryDate"
// //                                                         value={cardDetails.expiryDate}
// //                                                         onChange={handleCardInputChange}
// //                                                         placeholder="MM/YY"
// //                                                         maxLength="5"
// //                                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                                         required
// //                                                     />
// //                                                 </div>
// //                                                 <div>
// //                                                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                                         CVV
// //                                                     </label>
// //                                                     <input
// //                                                         type="password"
// //                                                         name="cvv"
// //                                                         value={cardDetails.cvv}
// //                                                         onChange={handleCardInputChange}
// //                                                         placeholder="123"
// //                                                         maxLength="4"
// //                                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                                         required
// //                                                     />
// //                                                 </div>
// //                                             </div>

// //                                             <div className="flex items-center">
// //                                                 <input
// //                                                     type="checkbox"
// //                                                     name="saveCard"
// //                                                     checked={cardDetails.saveCard}
// //                                                     onChange={handleCardInputChange}
// //                                                     className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// //                                                 />
// //                                                 <label className="ml-2 text-sm text-gray-700">
// //                                                     Save card for future payments
// //                                                 </label>
// //                                             </div>

// //                                             <div className="bg-blue-50 p-4 rounded-lg">
// //                                                 <div className="flex items-start">
// //                                                     <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                                                     </svg>
// //                                                     <p className="text-xs text-blue-700">
// //                                                         Your payment information is encrypted and secure. We never store your full card details.
// //                                                     </p>
// //                                                 </div>
// //                                             </div>
// //                                         </div>

// //                                         {errorMessage && (
// //                                             <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
// //                                                 <p className="text-red-700 text-sm">{errorMessage}</p>
// //                                             </div>
// //                                         )}

// //                                         <div className="mt-6 flex gap-4">
// //                                             <button
// //                                                 type="submit"
// //                                                 disabled={isSubmitting}
// //                                                 className={`flex-1 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-900 transition duration-200 ${
// //                                                     isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
// //                                                 }`}
// //                                             >
// //                                                 {isSubmitting ? 'Processing...' : `Pay ${formatCurrency(booking.totalPrice)}`}
// //                                             </button>
// //                                             <button
// //                                                 type="button"
// //                                                 onClick={() => navigate('/customer/bookings')}
// //                                                 className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition duration-200"
// //                                             >
// //                                                 Cancel
// //                                             </button>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         )}

// //                         {paymentStep === 'processing' && (
// //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                                 <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-600 border-t-transparent mb-6"></div>
// //                                 <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h3>
// //                                 <p className="text-gray-600 mb-4">Please do not close this window...</p>
// //                                 <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
// //                                     <p className="text-sm text-gray-600">Transaction Reference</p>
// //                                     <p className="text-lg font-mono font-bold text-teal-600">{transactionRef}</p>
// //                                 </div>
// //                                 <p className="text-xs text-gray-400 mt-4">
// //                                     Amount: {formatCurrency(booking.totalPrice)}
// //                                 </p>
// //                             </div>
// //                         )}

// //                         {paymentStep === 'success' && (
// //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //                                     <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                                     </svg>
// //                                 </div>
// //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
// //                                 <p className="text-gray-600 mb-6">Your booking has been confirmed</p>
                                
// //                                 <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
// //                                     <div className="grid grid-cols-2 gap-4">
// //                                         <div>
// //                                             <p className="text-xs text-gray-500">Transaction Reference</p>
// //                                             <p className="font-mono text-sm font-bold">{paymentResponse?.paymentReference || transactionRef}</p>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-xs text-gray-500">Amount Paid</p>
// //                                             <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-xs text-gray-500">Payment Method</p>
// //                                             <p className="font-medium">Credit Card</p>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-xs text-gray-500">Card</p>
// //                                             <p className="font-medium">{paymentResponse?.cardBrand} •••• {paymentResponse?.cardLast4}</p>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-xs text-gray-500">Date & Time</p>
// //                                             <p className="font-medium">{new Date().toLocaleString()}</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>

// //                                 <div className="flex gap-4 justify-center">
// //                                     <button
// //                                         onClick={handleDownloadReceipt}
// //                                         className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
// //                                     >
// //                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                         </svg>
// //                                         Download Receipt
// //                                     </button>
// //                                     <button
// //                                         onClick={() => navigate('/customer/bookings')}
// //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// //                                     >
// //                                         View My Bookings
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         )}

// //                         {paymentStep === 'failed' && (
// //                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //                                     <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                                     </svg>
// //                                 </div>
// //                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h3>
// //                                 <p className="text-gray-600 mb-6">{errorMessage || 'Something went wrong. Please try again.'}</p>
                                
// //                                 <div className="flex gap-4 justify-center">
// //                                     <button
// //                                         onClick={() => setPaymentStep('select')}
// //                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// //                                     >
// //                                         Try Again
// //                                     </button>
// //                                     <button
// //                                         onClick={() => navigate('/customer/bookings')}
// //                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                                     >
// //                                         Back to Bookings
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         )}
// //                     </div>

// //                     {/* Order Summary Sidebar */}
// //                     <div className="lg:col-span-1">
// //                         <div className="bg-white rounded-2xl shadow-xl sticky top-8">
// //                             <div className="p-6">
// //                                 <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                                
// //                                 {/* Vehicle Info */}
// //                                 <div className="flex items-center mb-4">
// //                                     <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
// //                                         {booking.vehicle?.vehicleImage ? (
// //                                             <img 
// //                                                 src={`${BASE_URL}/uploads/vehicles/${booking.vehicle.vehicleImage}`}
// //                                                 alt={booking.vehicle?.makeModel}
// //                                                 className="w-full h-full object-cover"
// //                                             />
// //                                         ) : (
// //                                             <div className="w-full h-full bg-teal-100 flex items-center justify-center">
// //                                                 <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// //                                                 </svg>
// //                                             </div>
// //                                         )}
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
// //                                         <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
// //                                     </div>
// //                                 </div>

// //                                 {/* Booking Details */}
// //                                 <div className="space-y-3 mb-4">
// //                                     <div className="flex justify-between text-sm">
// //                                         <span className="text-gray-600">Booking ID:</span>
// //                                         <span className="font-medium">#{booking.id}</span>
// //                                     </div>
// //                                     <div className="flex justify-between text-sm">
// //                                         <span className="text-gray-600">Pickup Date:</span>
// //                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
// //                                     </div>
// //                                     <div className="flex justify-between text-sm">
// //                                         <span className="text-gray-600">Drop-off Date:</span>
// //                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
// //                                     </div>
// //                                     <div className="flex justify-between text-sm">
// //                                         <span className="text-gray-600">Duration:</span>
// //                                         <span className="font-medium">
// //                                             {Math.ceil((new Date(booking.dropOffDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24))} days
// //                                         </span>
// //                                     </div>
// //                                 </div>

// //                                 {/* Price Breakdown */}
// //                                 <div className="border-t border-gray-200 pt-4 space-y-2">
// //                                     <div className="flex justify-between text-sm">
// //                                         <span className="text-gray-600">Base Price</span>
// //                                         <span>{formatCurrency(booking.totalPrice)}</span>
// //                                     </div>
// //                                     {booking.gpsIncluded && (
// //                                         <div className="flex justify-between text-sm">
// //                                             <span className="text-gray-600">GPS Navigation</span>
// //                                             <span>+ Rs. 500/day</span>
// //                                         </div>
// //                                     )}
// //                                     {booking.childSeatIncluded && (
// //                                         <div className="flex justify-between text-sm">
// //                                             <span className="text-gray-600">Child Seat</span>
// //                                             <span>+ Rs. 300/day</span>
// //                                         </div>
// //                                     )}
// //                                     {booking.driverStatus === 'WITH_DRIVER' && (
// //                                         <div className="flex justify-between text-sm">
// //                                             <span className="text-gray-600">Driver Service</span>
// //                                             <span>+ Rs. 1,500/day</span>
// //                                         </div>
// //                                     )}
// //                                 </div>

// //                                 {/* Total */}
// //                                 <div className="border-t border-gray-200 pt-4 mt-4">
// //                                     <div className="flex justify-between items-center">
// //                                         <span className="text-lg font-bold text-gray-800">Total</span>
// //                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
// //                                     </div>
// //                                 </div>

// //                                 {/* Security Badge */}
// //                                 <div className="mt-6 pt-4 border-t border-gray-200">
// //                                     <div className="flex items-center text-xs text-gray-500">
// //                                         <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                                         </svg>
// //                                         <span>Secure Payment • SSL Encrypted</span>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CustomerPaymentView;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

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

//     // Payment Methods Configuration
//     const paymentMethods = [
//         {
//             id: 'card',
//             name: 'Credit / Debit Card',
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                 </svg>
//             ),
//             description: 'Pay instantly with Visa, Mastercard, Amex',
//             processingTime: 'Instant',
//             color: 'from-blue-600 to-blue-700',
//             displayStatus: 'PAID', // For UI display
//             backendStatus: 'PAID', // For backend (must be one of: PAID, PENDING, UNPAID)
//             backendValue: 'CARD'
//         },
//         {
//             id: 'bank',
//             name: 'Bank Transfer',
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
//                 </svg>
//             ),
//             description: 'Pay from your bank account',
//             processingTime: '1-2 business days',
//             color: 'from-green-600 to-green-700',
//             displayStatus: 'CHECKING_BANK_TRANSFER', // For UI display
//             backendStatus: 'PENDING', // For backend (must be one of: PAID, PENDING, UNPAID)
//             backendValue: 'BANK_TRANSFER'
//         },
//         {
//             id: 'cash',
//             name: 'Cash',
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//             ),
//             description: 'Pay at vehicle pickup',
//             processingTime: 'Pay at counter',
//             color: 'from-yellow-600 to-yellow-700',
//             displayStatus: 'UNPAID_CASH_PICKUP', // For UI display
//             backendStatus: 'UNPAID', // For backend (must be one of: PAID, PENDING, UNPAID)
//             backendValue: 'CASH'
//         },
//         {
//             id: 'wallet',
//             name: 'Digital Wallet',
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a4 4 0 004-4V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4z" />
//                 </svg>
//             ),
//             description: 'Google Pay, PhonePe, Paytm',
//             processingTime: 'Instant',
//             color: 'from-purple-600 to-purple-700',
//             displayStatus: 'PAID', // For UI display
//             backendStatus: 'PAID', // For backend (must be one of: PAID, PENDING, UNPAID)
//             backendValue: 'CARD'
//         }
//     ];

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
//             const methodConfig = paymentMethods.find(m => m.id === selectedMethod);
            
//             // Prepare payment data for backend based on method
//             const paymentData = preparePaymentData(txnRef, methodConfig.backendStatus, methodConfig.backendValue);
            
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
//                     paymentStatus: methodConfig.backendStatus // Use backendStatus, not displayStatus
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

//     const preparePaymentData = (txnRef, paymentStatus, backendValue) => {
//         const baseData = {
//             bookingId: booking.id,
//             customerId: customerId || localStorage.getItem('customerId'), // include customer for backend tracking
//             amount: booking.totalPrice,
//             currency: 'LKR',
//             paymentMethod: backendValue,
//             paymentStatus: paymentStatus, // This must be one of: PAID, PENDING, UNPAID
//             paymentReference: txnRef
//         };

//         switch (selectedMethod) {
//             case 'card': {
//                 return {
//                     ...baseData,
//                     maskedCardNumber: maskCardNumber(cardDetails.cardNumber),
//                     cardLast4: cardDetails.cardNumber.slice(-4),
//                     cardBrand: detectCardBrand(cardDetails.cardNumber)
//                 };
//             }
                
//             case 'bank':
//                 return {
//                     ...baseData,
//                     bankName: bankTransferDetails.bankName,
//                     accountNumber: maskAccountNumber(bankTransferDetails.accountNumber),
//                     accountHolder: bankTransferDetails.accountHolder,
//                     transferReference: bankTransferDetails.transferReference
//                 };
                
//             case 'cash':
//                 return {
//                     ...baseData,
//                     pickupLocation: cashDetails.pickupLocation,
//                     contactNumber: cashDetails.contactNumber
//                 };
                
//             case 'wallet':
//                 return {
//                     ...baseData,
//                     walletId: maskWalletId(walletDetails.walletId),
//                     phoneNumber: walletDetails.phoneNumber,
//                     cardLast4: walletDetails.phoneNumber?.slice(-4) || '',
//                     cardBrand: walletDetails.walletType.toUpperCase()
//                 };
                
//             default:
//                 return baseData;
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

//     // Helper functions
//     const generateTransactionReference = () => {
//         const timestamp = Date.now().toString(36);
//         const random = Math.random().toString(36).substring(2, 7).toUpperCase();
//         return `TXN${timestamp}${random}`;
//     };

//     const maskCardNumber = (number) => {
//         const cleaned = number.replace(/\s/g, '');
//         return `**** **** **** ${cleaned.slice(-4)}`;
//     };

//     const maskAccountNumber = (number) => {
//         if (!number) return '';
//         const cleaned = number.replace(/\s/g, '');
//         if (cleaned.length <= 4) return cleaned;
//         return `XXXX XXXX ${cleaned.slice(-4)}`;
//     };

//     const maskWalletId = (id) => {
//         if (!id) return '';
//         if (id.length <= 4) return id;
//         return `****${id.slice(-4)}`;
//     };

//     const detectCardBrand = (number) => {
//         const firstDigit = number[0];
//         if (firstDigit === '4') return 'VISA';
//         if (firstDigit === '5') return 'MASTERCARD';
//         if (firstDigit === '3') return 'AMEX';
//         if (firstDigit === '6') return 'DISCOVER';
//         return 'UNKNOWN';
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

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-LK', {
//             style: 'currency',
//             currency: 'LKR',
//             minimumFractionDigits: 0
//         }).format(amount).replace('LKR', 'Rs.');
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     // Render payment form based on selected method
//     const renderPaymentForm = () => {
//         switch (selectedMethod) {
//             case 'card':
//                 return (
//                     <div className="space-y-5">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Card Number
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="cardNumber"
//                                     value={cardDetails.cardNumber}
//                                     onChange={handleCardInputChange}
//                                     placeholder="1234 5678 9012 3456"
//                                     maxLength="19"
//                                     className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     required
//                                 />
//                                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
//                                     <span className="text-xs font-bold text-blue-600">VISA</span>
//                                     <span className="text-xs font-bold text-red-600">MC</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Card Holder Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="cardHolder"
//                                 value={cardDetails.cardHolder}
//                                 onChange={handleCardInputChange}
//                                 placeholder="John Doe"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             />
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Expiry Date
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="expiryDate"
//                                     value={cardDetails.expiryDate}
//                                     onChange={handleCardInputChange}
//                                     placeholder="MM/YY"
//                                     maxLength="5"
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     CVV
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="cvv"
//                                     value={cardDetails.cvv}
//                                     onChange={handleCardInputChange}
//                                     placeholder="123"
//                                     maxLength="4"
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 name="saveCard"
//                                 checked={cardDetails.saveCard}
//                                 onChange={handleCardInputChange}
//                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                             />
//                             <label className="ml-2 text-sm text-gray-700">
//                                 Save card for future payments
//                             </label>
//                         </div>

//                         <div className="bg-blue-50 p-4 rounded-lg">
//                             <div className="flex items-start">
//                                 <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                                 <p className="text-xs text-blue-700">
//                                     Your payment information is encrypted and secure. We never store your full card details.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 );

//             case 'bank':
//                 return (
//                     <div className="space-y-5">
//                         <div className="bg-yellow-50 p-4 rounded-lg mb-4">
//                             <h4 className="font-semibold text-yellow-800 mb-2">Bank Account Details</h4>
//                             <div className="space-y-1 text-sm">
//                                 <p><span className="font-medium">Bank:</span> Fair Rent Bank</p>
//                                 <p><span className="font-medium">Account Name:</span> FRAC Vehicle Rentals</p>
//                                 <p><span className="font-medium">Account Number:</span> 1234 5678 9012 3456</p>
//                                 <p><span className="font-medium">Branch:</span> Colombo Main</p>
//                                 <p><span className="font-medium">Amount:</span> {formatCurrency(booking?.totalPrice)}</p>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Select Your Bank
//                             </label>
//                             <select
//                                 name="bankName"
//                                 value={bankTransferDetails.bankName}
//                                 onChange={handleBankInputChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             >
//                                 <option value="">Select bank</option>
//                                 <option value="BOC">Bank of Ceylon</option>
//                                 <option value="Peoples">People's Bank</option>
//                                 <option value="Commercial">Commercial Bank</option>
//                                 <option value="HNB">HNB</option>
//                                 <option value="NTB">NTB</option>
//                                 <option value="Sampath">Sampath Bank</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Account Number
//                             </label>
//                             <input
//                                 type="text"
//                                 name="accountNumber"
//                                 value={bankTransferDetails.accountNumber}
//                                 onChange={handleBankInputChange}
//                                 placeholder="Enter your account number"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Account Holder Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="accountHolder"
//                                 value={bankTransferDetails.accountHolder}
//                                 onChange={handleBankInputChange}
//                                 placeholder="As per bank records"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Transfer Reference / Transaction ID
//                             </label>
//                             <input
//                                 type="text"
//                                 name="transferReference"
//                                 value={bankTransferDetails.transferReference}
//                                 onChange={handleBankInputChange}
//                                 placeholder="Enter the reference number from your transfer"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Upload Payment Slip (Optional)
//                             </label>
//                             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                                 <input
//                                     type="file"
//                                     id="slip-upload"
//                                     onChange={handleFileUpload}
//                                     accept="image/*,.pdf"
//                                     className="hidden"
//                                 />
//                                 <label
//                                     htmlFor="slip-upload"
//                                     className="cursor-pointer flex flex-col items-center"
//                                 >
//                                     <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                                     </svg>
//                                     <span className="text-sm text-gray-600">
//                                         {bankTransferDetails.uploadSlip ? 
//                                             bankTransferDetails.uploadSlip.name : 
//                                             'Click to upload payment slip'}
//                                     </span>
//                                     <span className="text-xs text-gray-500 mt-1">
//                                         PDF, PNG, JPG (Max 5MB)
//                                     </span>
//                                 </label>
//                             </div>
//                         </div>

//                         <div className="bg-blue-50 p-4 rounded-lg">
//                             <p className="text-sm text-blue-700">
//                                 <span className="font-bold">Note:</span> Your payment will be verified within 24 hours. 
//                                 You'll receive a confirmation once verified.
//                             </p>
//                         </div>
//                     </div>
//                 );

//             case 'cash':
//                 return (
//                     <div className="space-y-5">
//                         <div className="bg-green-50 p-4 rounded-lg mb-4">
//                             <div className="flex items-center">
//                                 <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                                 </svg>
//                                 <div>
//                                     <h4 className="font-semibold text-green-800">Cash on Pickup</h4>
//                                     <p className="text-sm text-green-600">Pay when you pick up the vehicle</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Pickup Location
//                             </label>
//                             <select
//                                 name="pickupLocation"
//                                 value={cashDetails.pickupLocation}
//                                 onChange={handleCashInputChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 required
//                             >
//                                 <option value="">Select pickup location</option>
//                                 <option value="Colombo">Colombo Branch</option>
//                                 <option value="Kandy">Kandy Branch</option>
//                                 <option value="Galle">Galle Branch</option>
//                                 <option value="Negombo">Negombo Branch</option>
//                                 <option value="Jaffna">Jaffna Branch</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Contact Number
//                             </label>
//                             <div className="relative">
//                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
//                                 <input
//                                     type="tel"
//                                     name="contactNumber"
//                                     value={cashDetails.contactNumber}
//                                     onChange={handleCashInputChange}
//                                     placeholder="77 123 4567"
//                                     maxLength="10"
//                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Preferred Pickup Time
//                             </label>
//                             <input
//                                 type="time"
//                                 name="preferredTime"
//                                 value={cashDetails.preferredTime}
//                                 onChange={handleCashInputChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                             />
//                         </div>

//                         <div className="bg-yellow-50 p-4 rounded-lg">
//                             <div className="flex items-start">
//                                 <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <p className="text-sm text-yellow-700">
//                                     Please bring exact change if possible. Our branch will have limited cash for change.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 );

//             case 'wallet':
//                 return (
//                     <div className="space-y-5">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-3">
//                                 Select Wallet
//                             </label>
//                             <div className="grid grid-cols-3 gap-3">
//                                 {['gpay', 'phonepay', 'paytm'].map((wallet) => (
//                                     <button
//                                         key={wallet}
//                                         type="button"
//                                         onClick={() => setWalletDetails(prev => ({ ...prev, walletType: wallet }))}
//                                         className={`p-4 border-2 rounded-lg flex flex-col items-center transition duration-200 ${
//                                             walletDetails.walletType === wallet
//                                                 ? 'border-teal-600 bg-teal-50'
//                                                 : 'border-gray-200 hover:border-teal-300'
//                                         }`}
//                                     >
//                                         {wallet === 'gpay' && (
//                                             <>
//                                                 <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
//                                                     <span className="text-white font-bold text-sm">GP</span>
//                                                 </div>
//                                                 <span className="text-xs font-medium">Google Pay</span>
//                                             </>
//                                         )}
//                                         {wallet === 'phonepay' && (
//                                             <>
//                                                 <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2">
//                                                     <span className="text-white font-bold text-sm">PP</span>
//                                                 </div>
//                                                 <span className="text-xs font-medium">PhonePe</span>
//                                             </>
//                                         )}
//                                         {wallet === 'paytm' && (
//                                             <>
//                                                 <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2">
//                                                     <span className="text-white font-bold text-sm">PT</span>
//                                                 </div>
//                                                 <span className="text-xs font-medium">Paytm</span>
//                                             </>
//                                         )}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Wallet ID / UPI ID
//                             </label>
//                             <input
//                                 type="text"
//                                 name="walletId"
//                                 value={walletDetails.walletId}
//                                 onChange={handleWalletInputChange}
//                                 placeholder="username@bank"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                             />
//                         </div>

//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300"></div>
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-white text-gray-500">OR</span>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Mobile Number
//                             </label>
//                             <div className="relative">
//                                 <span className="absolute left-3 top-3 text-gray-500">+94</span>
//                                 <input
//                                     type="tel"
//                                     name="phoneNumber"
//                                     value={walletDetails.phoneNumber}
//                                     onChange={handleWalletInputChange}
//                                     placeholder="77 123 4567"
//                                     maxLength="10"
//                                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                         </div>

//                         <div className="bg-purple-50 p-4 rounded-lg">
//                             <p className="text-sm text-purple-700">
//                                 You will receive a payment request on your UPI app. Please approve it to complete the payment.
//                             </p>
//                         </div>
//                     </div>
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
//             {/* Header */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
//                 <div className="max-w-7xl mx-auto px-4 py-6">
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="mr-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                             </button>
//                             <div>
//                                 <h1 className="text-2xl md:text-3xl font-bold">Payment</h1>
//                                 <p className="text-teal-300 text-sm">Complete your booking payment</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center">
//                             <span className="text-sm hidden md:block">Welcome, {customerName}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Progress Steps */}
//                 <div className="mb-8">
//                     <div className="flex items-center justify-center">
//                         <div className="flex items-center">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                 paymentStep === 'select' ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
//                             }`}>
//                                 1
//                             </div>
//                             <span className="ml-2 text-sm font-medium text-gray-700">Select Method</span>
//                         </div>
//                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
//                         <div className="flex items-center">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                 paymentStep === 'processing' ? 'bg-teal-600 text-white' : 
//                                 paymentStep === 'success' || paymentStep === 'failed' ? 'bg-teal-100 text-teal-600' : 'bg-gray-200 text-gray-400'
//                             }`}>
//                                 2
//                             </div>
//                             <span className="ml-2 text-sm font-medium text-gray-700">Process</span>
//                         </div>
//                         <div className="w-16 h-1 mx-2 bg-gray-300"></div>
//                         <div className="flex items-center">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                 paymentStep === 'success' ? 'bg-green-600 text-white' :
//                                 paymentStep === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
//                             }`}>
//                                 3
//                             </div>
//                             <span className="ml-2 text-sm font-medium text-gray-700">Complete</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Main Payment Area */}
//                     <div className="lg:col-span-2">
//                         {paymentStep === 'select' && (
//                             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                                 <div className="p-6">
//                                     <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                                    
//                                     {/* Payment Methods Grid */}
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                                         {paymentMethods.map((method) => (
//                                             <button
//                                                 key={method.id}
//                                                 onClick={() => setSelectedMethod(method.id)}
//                                                 className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
//                                                     selectedMethod === method.id
//                                                         ? 'border-teal-600 bg-teal-50 shadow-lg shadow-teal-100'
//                                                         : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
//                                                 }`}
//                                             >
//                                                 {selectedMethod === method.id && (
//                                                     <div className="absolute top-3 right-3">
//                                                         <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
//                                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                                             </svg>
//                                                         </div>
//                                                     </div>
//                                                 )}
                                                
//                                                 <div className="flex items-center mb-3">
//                                                     <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white mr-3`}>
//                                                         {method.icon}
//                                                     </div>
//                                                     <div className="text-left">
//                                                         <h4 className="font-semibold text-gray-800">{method.name}</h4>
//                                                         <p className="text-xs text-gray-500">{method.processingTime}</p>
//                                                     </div>
//                                                 </div>
                                                
//                                                 <p className="text-sm text-gray-600 text-left">{method.description}</p>
//                                             </button>
//                                         ))}
//                                     </div>

//                                     {/* Payment Form */}
//                                     <div className="border-t border-gray-200 pt-6">
//                                         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                                             {paymentMethods.find(m => m.id === selectedMethod)?.name} Details
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
//                                                     {isSubmitting ? 'Processing...' : `Confirm ${paymentMethods.find(m => m.id === selectedMethod)?.name}`}
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
//                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                                 <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-600 border-t-transparent mb-6"></div>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h3>
//                                 <p className="text-gray-600 mb-4">Please do not close this window...</p>
//                                 <div className="bg-gray-50 rounded-lg p-4 max-w-sm mx-auto">
//                                     <p className="text-sm text-gray-600">Transaction Reference</p>
//                                     <p className="text-lg font-mono font-bold text-teal-600">{transactionRef}</p>
//                                 </div>
//                                 <p className="text-xs text-gray-400 mt-4">
//                                     Amount: {formatCurrency(booking.totalPrice)}
//                                 </p>
//                             </div>
//                         )}

//                         {paymentStep === 'success' && (
//                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                                     <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                                     {selectedMethod === 'cash' && 'Booking Confirmed!'}
//                                     {selectedMethod === 'bank' && 'Payment Submitted!'}
//                                     {(selectedMethod === 'card' || selectedMethod === 'wallet') && 'Payment Successful!'}
//                                 </h3>
//                                 <p className="text-gray-600 mb-6">
//                                     {successMessage || (
//                                         selectedMethod === 'cash' ? 'Your booking is confirmed! Please pay cash at pickup.' :
//                                         selectedMethod === 'bank' ? 'Your payment is being verified. We\'ll notify you once confirmed.' :
//                                         'Payment completed successfully!'
//                                     )}
//                                 </p>
                                
//                                 <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <p className="text-xs text-gray-500">Transaction Reference</p>
//                                             <p className="font-mono text-sm font-bold">{paymentResponse?.paymentReference || transactionRef}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs text-gray-500">Amount</p>
//                                             <p className="text-lg font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs text-gray-500">Payment Method</p>
//                                             <p className="font-medium">{paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs text-gray-500">Status</p>
//                                             <p className={`font-medium ${
//                                                 selectedMethod === 'cash' ? 'text-yellow-600' :
//                                                 selectedMethod === 'bank' ? 'text-blue-600' : 'text-green-600'
//                                             }`}>
//                                                 {/* Show display status for UI, but backend uses simple status */}
//                                                 {paymentMethods.find(m => m.id === selectedMethod)?.displayStatus}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4 justify-center">
//                                     {(selectedMethod === 'card' || selectedMethod === 'wallet') && (
//                                         <button
//                                             onClick={handleDownloadReceipt}
//                                             className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
//                                         >
//                                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                             </svg>
//                                             Download Receipt
//                                         </button>
//                                     )}
//                                     <button
//                                         onClick={() => navigate('/customer/bookings')}
//                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                                     >
//                                         View My Bookings
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         {paymentStep === 'failed' && (
//                             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                                     <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h3>
//                                 <p className="text-gray-600 mb-6">{errorMessage || 'Something went wrong. Please try again.'}</p>
                                
//                                 <div className="flex gap-4 justify-center">
//                                     <button
//                                         onClick={() => setPaymentStep('select')}
//                                         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                                     >
//                                         Try Again
//                                     </button>
//                                     <button
//                                         onClick={() => navigate('/customer/bookings')}
//                                         className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                                     >
//                                         Back to Bookings
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Order Summary Sidebar */}
//                     <div className="lg:col-span-1">
//                         <div className="bg-white rounded-2xl shadow-xl sticky top-8">
//                             <div className="p-6">
//                                 <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                                
//                                 {/* Vehicle Info */}
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
//                                         {booking.vehicle?.vehicleImage ? (
//                                             <img 
//                                                 src={`${BASE_URL}/uploads/vehicles/${booking.vehicle.vehicleImage}`}
//                                                 alt={booking.vehicle?.makeModel}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         ) : (
//                                             <div className="w-full h-full bg-teal-100 flex items-center justify-center">
//                                                 <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                                                 </svg>
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
//                                         <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
//                                     </div>
//                                 </div>

//                                 {/* Booking Details */}
//                                 <div className="space-y-3 mb-4">
//                                     <div className="flex justify-between text-sm">
//                                         <span className="text-gray-600">Booking ID:</span>
//                                         <span className="font-medium">#{booking.id}</span>
//                                     </div>
//                                     <div className="flex justify-between text-sm">
//                                         <span className="text-gray-600">Pickup Date:</span>
//                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
//                                     </div>
//                                     <div className="flex justify-between text-sm">
//                                         <span className="text-gray-600">Drop-off Date:</span>
//                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
//                                     </div>
//                                     <div className="flex justify-between text-sm">
//                                         <span className="text-gray-600">Duration:</span>
//                                         <span className="font-medium">
//                                             {Math.ceil((new Date(booking.dropOffDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24))} days
//                                         </span>
//                                     </div>
//                                 </div>

//                                 {/* Price Breakdown */}
//                                 <div className="border-t border-gray-200 pt-4 space-y-2">
//                                     <div className="flex justify-between text-sm">
//                                         <span className="text-gray-600">Base Price</span>
//                                         <span>{formatCurrency(booking.totalPrice)}</span>
//                                     </div>
//                                     {booking.gpsIncluded && (
//                                         <div className="flex justify-between text-sm">
//                                             <span className="text-gray-600">GPS Navigation</span>
//                                             <span>+ Rs. 500/day</span>
//                                         </div>
//                                     )}
//                                     {booking.childSeatIncluded && (
//                                         <div className="flex justify-between text-sm">
//                                             <span className="text-gray-600">Child Seat</span>
//                                             <span>+ Rs. 300/day</span>
//                                         </div>
//                                     )}
//                                     {booking.driverStatus === 'WITH_DRIVER' && (
//                                         <div className="flex justify-between text-sm">
//                                             <span className="text-gray-600">Driver Service</span>
//                                             <span>+ Rs. 1,500/day</span>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Total */}
//                                 <div className="border-t border-gray-200 pt-4 mt-4">
//                                     <div className="flex justify-between items-center">
//                                         <span className="text-lg font-bold text-gray-800">Total</span>
//                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
//                                     </div>
//                                 </div>

//                                 {/* Security Badge */}
//                                 <div className="mt-6 pt-4 border-t border-gray-200">
//                                     <div className="flex items-center text-xs text-gray-500">
//                                         <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                         </svg>
//                                         <span>Secure Payment • SSL Encrypted</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerPaymentView;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import PaymentHeader from './payment/PaymentHeader';
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
    const [paymentStep, setPaymentStep] = useState('select'); // select, processing, success, failed
    
    // Card payment details
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
        saveCard: false
    });
    
    // Bank transfer details
    const [bankTransferDetails, setBankTransferDetails] = useState({
        bankName: '',
        accountNumber: '',
        accountHolder: '',
        branch: '',
        transferDate: '',
        transferReference: '',
        uploadSlip: null
    });
    
    // Cash payment details
    const [cashDetails, setCashDetails] = useState({
        pickupLocation: '',
        contactNumber: '',
        preferredTime: ''
    });
    
    // Digital wallet details
    const [walletDetails, setWalletDetails] = useState({
        walletType: 'gpay',
        walletId: '',
        phoneNumber: ''
    });
    
    // Customer info
    const [customerId, setCustomerId] = useState(null);
    const [customerName, setCustomerName] = useState('');
    
    // Transaction reference
    const [transactionRef, setTransactionRef] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);
    
    const BASE_URL = 'http://localhost:8080';

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem('customerToken');
        const storedCustomerId = localStorage.getItem('customerId');
        const storedCustomerName = localStorage.getItem('customerName');
        
        if (!token || !storedCustomerId) {
            navigate('/customer/login', { state: { from: '/customer/payment' } });
            return;
        }
        
        setCustomerId(storedCustomerId);
        setCustomerName(storedCustomerName || 'Customer');
        
        // Get booking from location state
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
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                }
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

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        
        // Validate based on payment method
        if (!validatePaymentDetails()) {
            return;
        }
        
        setPaymentStep('processing');
        setErrorMessage('');
        setIsSubmitting(true);
        
        try {
            // Generate transaction reference
            const txnRef = generateTransactionReference();
            setTransactionRef(txnRef);
            
            // Get the payment method configuration
            const methodConfig = PAYMENT_METHODS.find(m => m.id === selectedMethod);
            
            // Prepare payment data for backend based on method
            const paymentData = preparePaymentData(
                booking, customerId, selectedMethod, 
                cardDetails, bankTransferDetails, cashDetails, walletDetails, 
                txnRef, methodConfig
            );
            
            console.log('Sending payment data:', paymentData);
            
            // Call the payment API
            const response = await axios.post(`${BASE_URL}/api/v1/payment/add`, paymentData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                }
            });
            
            if (response.status === 201) {
                setPaymentResponse(response.data);
                setPaymentStep('success');
                
                // Set appropriate success message based on payment method
                if (selectedMethod === 'cash') {
                    setSuccessMessage('Your booking is confirmed! Please pay cash at pickup.');
                } else if (selectedMethod === 'bank') {
                    setSuccessMessage('Your payment is being verified. We\'ll notify you once confirmed.');
                } else {
                    setSuccessMessage('Payment completed successfully!');
                }
                
                // Update the booking in local state
                setBooking(prev => ({
                    ...prev,
                    paymentStatus: methodConfig.backendStatus
                }));
            }
            
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
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading payment details...</p>
                </div>
            </div>
        );
    }

    if (!booking) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
                    <svg className="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Selected</h2>
                    <p className="text-gray-600 mb-6">Please select a booking to make payment.</p>
                    <button
                        onClick={() => navigate('/customer/bookings')}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                    >
                        Go to My Bookings
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            <PaymentHeader 
                customerName={customerName}
                onBack={() => navigate(-1)}
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <PaymentProgress currentStep={paymentStep} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                                    {/* Payment Form */}
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
                                                    onClick={() => navigate('/customer/bookings')}
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
                                onViewBookings={() => navigate('/customer/bookings')}
                            />
                        )}

                        {paymentStep === 'failed' && (
                            <PaymentFailed 
                                errorMessage={errorMessage}
                                onTryAgain={() => setPaymentStep('select')}
                                onBackToBookings={() => navigate('/customer/bookings')}
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
            </div>
        </div>
    );
};

export default CustomerPaymentView;