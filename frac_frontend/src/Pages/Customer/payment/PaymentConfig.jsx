// // Payment Methods Configuration
// export const PAYMENT_METHODS = [
//     {
//         id: 'card',
//         name: 'Credit / Debit Card',
//         icon: (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//             </svg>
//         ),
//         description: 'Pay instantly with Visa, Mastercard, Amex',
//         processingTime: 'Instant',
//         color: 'from-blue-600 to-blue-700',
//         displayStatus: 'PAID',
//         backendStatus: 'PAID',
//         backendValue: 'CARD'
//     },
//     {
//         id: 'bank',
//         name: 'Bank Transfer',
//         icon: (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
//             </svg>
//         ),
//         description: 'Pay from your bank account',
//         processingTime: '1-2 business days',
//         color: 'from-green-600 to-green-700',
//         displayStatus: 'CHECKING_BANK_TRANSFER',
//         backendStatus: 'PENDING',
//         backendValue: 'BANK_TRANSFER'
//     },
//     {
//         id: 'cash',
//         name: 'Cash',
//         icon: (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//         ),
//         description: 'Pay at vehicle pickup',
//         processingTime: 'Pay at counter',
//         color: 'from-yellow-600 to-yellow-700',
//         displayStatus: 'UNPAID_CASH_PICKUP',
//         backendStatus: 'UNPAID',
//         backendValue: 'CASH'
//     },
//     {
//         id: 'wallet',
//         name: 'Digital Wallet',
//         icon: (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a4 4 0 004-4V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4z" />
//             </svg>
//         ),
//         description: 'Google Pay, PhonePe, Paytm',
//         processingTime: 'Instant',
//         color: 'from-purple-600 to-purple-700',
//         displayStatus: 'PAID',
//         backendStatus: 'PAID',
//         backendValue: 'CARD'
//     }
// ];

// // export const BANKS = [
// //     { value: 'BOC', label: 'Bank of Ceylon' },
// //     { value: 'Peoples', label: "People's Bank" },
// //     { value: 'Commercial', label: 'Commercial Bank' },
// //     { value: 'HNB', label: 'HNB' },
// //     { value: 'NTB', label: 'NTB' },
// //     { value: 'Sampath', label: 'Sampath Bank' }
// // ];

// // Bank options for the dropdown
// export const BANKS = [
//     { value: 'BOC', label: 'Bank of Ceylon' },
//     { value: 'PEOPLES', label: 'People\'s Bank' },
//     { value: 'COMMERCIAL', label: 'Commercial Bank' },
//     { value: 'HNB', label: 'Hatton National Bank' },
//     { value: 'NSB', label: 'National Savings Bank' },
//     { value: 'SAMPATH', label: 'Sampath Bank' },
//     { value: 'SEYLAN', label: 'Seylan Bank' },
//     { value: 'DFCC', label: 'DFCC Bank' },
//     { value: 'NTB', label: 'Nations Trust Bank' },
//     { value: 'PANASIA', label: 'Pan Asia Bank' },
//     { value: 'UNION', label: 'Union Bank' },
//     { value: 'CARGILLS', label: 'Cargills Bank' },
//     { value: 'AIA', label: 'AIA Insurance' }, // For insurance partners
//     { value: 'SOFTLOGIC', label: 'Softlogic Finance' },
//     { value: 'LB FINANCE', label: 'LB Finance' },
//     { value: 'PEOPLE LEASING', label: 'People\'s Leasing' }
// ];

// export const PICKUP_LOCATIONS = [
//     { value: 'Colombo', label: 'Colombo Branch' },
//     { value: 'Kandy', label: 'Kandy Branch' },
//     { value: 'Galle', label: 'Galle Branch' },
//     { value: 'Negombo', label: 'Negombo Branch' },
//     { value: 'Jaffna', label: 'Jaffna Branch' }
// ];

// export const WALLET_TYPES = [
//     { id: 'gpay', name: 'Google Pay', color: 'bg-blue-500', short: 'GP' },
//     { id: 'phonepay', name: 'PhonePe', color: 'bg-purple-500', short: 'PP' },
//     { id: 'paytm', name: 'Paytm', color: 'bg-red-500', short: 'PT' }
// ];



// src/Pages/Customer/PaymentConfig.js

// Payment Methods Configuration
export const PAYMENT_METHODS = [
    {
        id: 'card',
        name: 'Credit / Debit Card',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        description: 'Pay instantly with Visa, Mastercard, Amex',
        processingTime: 'Instant',
        color: 'from-blue-600 to-blue-700',
        displayStatus: 'PAID',
        backendStatus: 'PAID',
        backendValue: 'CARD'
    },
    {
        id: 'bank',
        name: 'Bank Transfer',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        ),
        description: 'Pay from your bank account',
        processingTime: '1-2 business days',
        color: 'from-green-600 to-green-700',
        displayStatus: 'CHECKING_BANK_TRANSFER',
        backendStatus: 'PENDING',
        backendValue: 'BANK_TRANSFER'
    },
    {
        id: 'cash',
        name: 'Cash',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        description: 'Pay at vehicle pickup',
        processingTime: 'Pay at counter',
        color: 'from-yellow-600 to-yellow-700',
        displayStatus: 'UNPAID_CASH_PICKUP',
        backendStatus: 'UNPAID',
        backendValue: 'CASH'
    },
    {
        id: 'wallet',
        name: 'Digital Wallet',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a4 4 0 004-4V7a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4z" />
            </svg>
        ),
        description: 'Google Pay, PhonePe, Paytm',
        processingTime: 'Instant',
        color: 'from-purple-600 to-purple-700',
        displayStatus: 'PAID',
        backendStatus: 'PAID',
        backendValue: 'CARD'
    }
];

// Bank options for the dropdown
export const BANKS = [
    { value: 'BOC', label: 'Bank of Ceylon' },
    { value: 'PEOPLES', label: 'People\'s Bank' },
    { value: 'COMMERCIAL', label: 'Commercial Bank' },
    { value: 'HNB', label: 'Hatton National Bank' },
    { value: 'NSB', label: 'National Savings Bank' },
    { value: 'SAMPATH', label: 'Sampath Bank' },
    { value: 'SEYLAN', label: 'Seylan Bank' },
    { value: 'DFCC', label: 'DFCC Bank' },
    { value: 'NTB', label: 'Nations Trust Bank' },
    { value: 'PANASIA', label: 'Pan Asia Bank' },
    { value: 'UNION', label: 'Union Bank' },
    { value: 'CARGILLS', label: 'Cargills Bank' },
    { value: 'AIA', label: 'AIA Insurance' },
    { value: 'SOFTLOGIC', label: 'Softlogic Finance' },
    { value: 'LB FINANCE', label: 'LB Finance' },
    { value: 'PEOPLE LEASING', label: 'People\'s Leasing' }
];

// FRAC Bank Account Details for Bank Transfers
export const FRAC_BANK_ACCOUNT = {
    bankName: 'Fair Rent Bank',
    accountName: 'FRAC Vehicle Rentals',
    accountNumber: '1234 5678 9012 3456',
    branch: 'Colombo Main',
    swiftCode: 'FRACLKLX',
    address: 'No. 123, Galle Road, Colombo 03',
    city: 'Colombo',
    country: 'Sri Lanka'
};

// Bank Transfer Status
export const BANK_TRANSFER_STATUS = {
    PENDING: 'Pending',
    VERIFIED: 'Verified',
    REJECTED: 'Rejected'
};

// Payment Status Constants
export const PAYMENT_STATUS = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    UNPAID: 'UNPAID',
    UNPAID_CASH_PICKUP: 'UNPAID_CASH_PICKUP',
    CHECKING_BANK_TRANSFER: 'CHECKING_BANK_TRANSFER'
};

// Pickup Locations
export const PICKUP_LOCATIONS = [
    { value: 'Colombo', label: 'Colombo Branch' },
    { value: 'Kandy', label: 'Kandy Branch' },
    { value: 'Galle', label: 'Galle Branch' },
    { value: 'Negombo', label: 'Negombo Branch' },
    { value: 'Jaffna', label: 'Jaffna Branch' }
];

// Digital Wallet Types
export const WALLET_TYPES = [
    { id: 'gpay', name: 'Google Pay', color: 'bg-blue-500', short: 'GP' },
    { id: 'phonepay', name: 'PhonePe', color: 'bg-purple-500', short: 'PP' },
    { id: 'paytm', name: 'Paytm', color: 'bg-red-500', short: 'PT' }
];