// // // import React from 'react';
// // // import { BANKS } from '../PaymentConfig';
// // // import { formatCurrency } from '../PaymentUtils';

// // // const BankTransferForm = ({ bankTransferDetails, booking, onInputChange, onFileUpload }) => {
// // //     return (
// // //         <div className="space-y-5">
// // //             <div className="bg-yellow-50 p-4 rounded-lg mb-4">
// // //                 <h4 className="font-semibold text-yellow-800 mb-2">Bank Account Details</h4>
// // //                 <div className="space-y-1 text-sm">
// // //                     <p><span className="font-medium">Bank:</span> Fair Rent Bank</p>
// // //                     <p><span className="font-medium">Account Name:</span> FRAC Vehicle Rentals</p>
// // //                     <p><span className="font-medium">Account Number:</span> 1234 5678 9012 3456</p>
// // //                     <p><span className="font-medium">Branch:</span> Colombo Main</p>
// // //                     <p><span className="font-medium">Amount:</span> {formatCurrency(booking?.totalPrice)}</p>
// // //                 </div>
// // //             </div>

// // //             <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Select Your Bank
// // //                 </label>
// // //                 <select
// // //                     name="bankName"
// // //                     value={bankTransferDetails.bankName}
// // //                     onChange={onInputChange}
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     required
// // //                 >
// // //                     <option value="">Select bank</option>
// // //                     {BANKS.map(bank => (
// // //                         <option key={bank.value} value={bank.value}>{bank.label}</option>
// // //                     ))}
// // //                 </select>
// // //             </div>

// // //             <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Account Number
// // //                 </label>
// // //                 <input
// // //                     type="text"
// // //                     name="accountNumber"
// // //                     value={bankTransferDetails.accountNumber}
// // //                     onChange={onInputChange}
// // //                     placeholder="Enter your account number"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     required
// // //                 />
// // //             </div>

// // //             <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Account Holder Name
// // //                 </label>
// // //                 <input
// // //                     type="text"
// // //                     name="accountHolder"
// // //                     value={bankTransferDetails.accountHolder}
// // //                     onChange={onInputChange}
// // //                     placeholder="As per bank records"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     required
// // //                 />
// // //             </div>

// // //             <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Transfer Reference / Transaction ID
// // //                 </label>
// // //                 <input
// // //                     type="text"
// // //                     name="transferReference"
// // //                     value={bankTransferDetails.transferReference}
// // //                     onChange={onInputChange}
// // //                     placeholder="Enter the reference number from your transfer"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                     required
// // //                 />
// // //             </div>

// // //             <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Upload Payment Slip (Optional)
// // //                 </label>
// // //                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // //                     <input
// // //                         type="file"
// // //                         id="slip-upload"
// // //                         onChange={onFileUpload}
// // //                         accept="image/*,.pdf"
// // //                         className="hidden"
// // //                     />
// // //                     <label
// // //                         htmlFor="slip-upload"
// // //                         className="cursor-pointer flex flex-col items-center"
// // //                     >
// // //                         <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// // //                         </svg>
// // //                         <span className="text-sm text-gray-600">
// // //                             {bankTransferDetails.uploadSlip ? 
// // //                                 bankTransferDetails.uploadSlip.name : 
// // //                                 'Click to upload payment slip'}
// // //                         </span>
// // //                         <span className="text-xs text-gray-500 mt-1">
// // //                             PDF, PNG, JPG (Max 5MB)
// // //                         </span>
// // //                     </label>
// // //                 </div>
// // //             </div>

// // //             <div className="bg-blue-50 p-4 rounded-lg">
// // //                 <p className="text-sm text-blue-700">
// // //                     <span className="font-bold">Note:</span> Your payment will be verified within 24 hours. 
// // //                     You'll receive a confirmation once verified.
// // //                 </p>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default BankTransferForm;




// // // src/Pages/Customer/BankTransferForm.jsx
// // import React, { useState } from 'react';
// // import { BANKS, FRAC_BANK_ACCOUNT } from './PaymentConfig';
// // import { formatCurrency, validateAccountNumber, validateTransferReference } from './PaymentUtils';

// // const BankTransferForm = ({ bankTransferDetails, booking, onInputChange, onFileUpload }) => {
// //     const [errors, setErrors] = useState({});

// //     const handleBlur = (fieldName, value) => {
// //         const newErrors = { ...errors };
        
// //         if (fieldName === 'accountNumber' && value) {
// //             if (!validateAccountNumber(value)) {
// //                 newErrors.accountNumber = 'Please enter a valid account number (8-20 digits)';
// //             } else {
// //                 delete newErrors.accountNumber;
// //             }
// //         }
        
// //         if (fieldName === 'transferReference' && value) {
// //             if (!validateTransferReference(value)) {
// //                 newErrors.transferReference = 'Reference should be 5-30 alphanumeric characters';
// //             } else {
// //                 delete newErrors.transferReference;
// //             }
// //         }
        
// //         if (fieldName === 'bankName' && !value) {
// //             newErrors.bankName = 'Please select your bank';
// //         } else {
// //             delete newErrors.bankName;
// //         }
        
// //         if (fieldName === 'accountHolder' && !value.trim()) {
// //             newErrors.accountHolder = 'Account holder name is required';
// //         } else {
// //             delete newErrors.accountHolder;
// //         }
        
// //         setErrors(newErrors);
// //     };

// //     return (
// //         <div className="space-y-6">
// //             {/* FRAC Bank Details - Highlighted Section */}
// //             <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
// //                 <div className="flex items-center mb-4">
// //                     <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
// //                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// //                         </svg>
// //                     </div>
// //                     <h4 className="text-lg font-bold text-teal-800">Transfer To FAIR RENT A CAR</h4>
// //                 </div>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
// //                     <div>
// //                         <p className="text-teal-600 text-xs">Bank</p>
// //                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.bankName}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-teal-600 text-xs">Account Name</p>
// //                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.accountName}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-teal-600 text-xs">Account Number</p>
// //                         <p className="font-semibold text-gray-800 font-mono">{FRAC_BANK_ACCOUNT.accountNumber}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-teal-600 text-xs">Branch</p>
// //                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.branch}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-teal-600 text-xs">SWIFT Code</p>
// //                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.swiftCode}</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-teal-600 text-xs">Amount to Pay</p>
// //                         <p className="font-bold text-teal-700">{formatCurrency(booking?.totalPrice)}</p>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Important Instructions */}
// //             <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
// //                 <p className="text-sm text-blue-700 flex items-start">
// //                     <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                     <span>
// //                         <span className="font-bold">Important:</span> Please transfer exactly 
// //                         <span className="font-bold"> {formatCurrency(booking?.totalPrice)} </span> 
// //                         to the FAIR RENT A CAR account above and fill in your bank details correctly. 
// //                         Your booking will be confirmed after payment verification (within 24 hours).
// //                     </span>
// //                 </p>
// //             </div>

// //             {/* Your Bank Details Form */}
// //             <div className="space-y-5">
// //                 <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
// //                     Your Bank Account Details
// //                 </h4>

// //                 {/* Bank Selection */}
// //                 <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Select Your Bank <span className="text-red-500">*</span>
// //                     </label>
// //                     <select
// //                         name="bankName"
// //                         value={bankTransferDetails.bankName}
// //                         onChange={onInputChange}
// //                         onBlur={(e) => handleBlur('bankName', e.target.value)}
// //                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                             errors.bankName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                         }`}
// //                         required
// //                     >
// //                         <option value="">Select your bank</option>
// //                         {BANKS.map(bank => (
// //                             <option key={bank.value} value={bank.value}>{bank.label}</option>
// //                         ))}
// //                     </select>
// //                     {errors.bankName && (
// //                         <p className="mt-1 text-xs text-red-600">{errors.bankName}</p>
// //                     )}
// //                 </div>

// //                 {/* Account Number */}
// //                 <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Your Account Number <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                         type="text"
// //                         name="accountNumber"
// //                         value={bankTransferDetails.accountNumber}
// //                         onChange={onInputChange}
// //                         onBlur={(e) => handleBlur('accountNumber', e.target.value)}
// //                         placeholder="Enter your account number"
// //                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                             errors.accountNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                         }`}
// //                         required
// //                     />
// //                     {errors.accountNumber && (
// //                         <p className="mt-1 text-xs text-red-600">{errors.accountNumber}</p>
// //                     )}
// //                     <p className="mt-1 text-xs text-gray-500">Enter without spaces (8-20 digits)</p>
// //                 </div>

// //                 {/* Account Holder Name */}
// //                 <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Account Holder Name <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                         type="text"
// //                         name="accountHolder"
// //                         value={bankTransferDetails.accountHolder}
// //                         onChange={onInputChange}
// //                         onBlur={(e) => handleBlur('accountHolder', e.target.value)}
// //                         placeholder="As per bank records"
// //                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                             errors.accountHolder ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                         }`}
// //                         required
// //                     />
// //                     {errors.accountHolder && (
// //                         <p className="mt-1 text-xs text-red-600">{errors.accountHolder}</p>
// //                     )}
// //                 </div>

// //                 {/* Transfer Reference */}
// //                 <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Transfer Reference / Transaction ID <span className="text-red-500">*</span>
// //                     </label>
// //                     <input
// //                         type="text"
// //                         name="transferReference"
// //                         value={bankTransferDetails.transferReference}
// //                         onChange={onInputChange}
// //                         onBlur={(e) => handleBlur('transferReference', e.target.value)}
// //                         placeholder="Enter the reference number from your transfer"
// //                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                             errors.transferReference ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                         }`}
// //                         required
// //                     />
// //                     {errors.transferReference && (
// //                         <p className="mt-1 text-xs text-red-600">{errors.transferReference}</p>
// //                     )}
// //                     <p className="mt-1 text-xs text-gray-500">The reference number from your bank transfer</p>
// //                 </div>

// //                 {/* Payment Slip Upload */}
// //                 <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Upload Payment Slip (Optional - Recommended)
// //                     </label>
// //                     <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
// //                         bankTransferDetails.uploadSlip 
// //                             ? 'border-teal-500 bg-teal-50' 
// //                             : 'border-gray-300 hover:border-teal-400'
// //                     }`}>
// //                         <input
// //                             type="file"
// //                             id="slip-upload"
// //                             onChange={onFileUpload}
// //                             accept="image/*,.pdf"
// //                             className="hidden"
// //                         />
// //                         <label
// //                             htmlFor="slip-upload"
// //                             className="cursor-pointer flex flex-col items-center"
// //                         >
// //                             {bankTransferDetails.uploadSlip ? (
// //                                 <>
// //                                     <svg className="w-12 h-12 text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                     </svg>
// //                                     <span className="text-sm font-medium text-teal-700">
// //                                         {bankTransferDetails.uploadSlip.name}
// //                                     </span>
// //                                     <span className="text-xs text-teal-600 mt-1">
// //                                         Click to change file
// //                                     </span>
// //                                 </>
// //                             ) : (
// //                                 <>
// //                                     <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// //                                     </svg>
// //                                     <span className="text-sm text-gray-600">
// //                                         Click to upload payment slip
// //                                     </span>
// //                                     <span className="text-xs text-gray-500 mt-2">
// //                                         PDF, PNG, JPG (Max 5MB)
// //                                     </span>
// //                                 </>
// //                             )}
// //                         </label>
// //                     </div>
// //                 </div>

// //                 {/* Verification Note */}
// //                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
// //                     <p className="text-sm text-purple-700 flex items-start">
// //                         <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                         <span>
// //                             <span className="font-bold">Verification Time:</span> Your payment will be verified within 24 hours during business days. 
// //                             You'll receive an email confirmation once verified and your booking status will be updated to "CONFIRMED".
// //                         </span>
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BankTransferForm;



// // src/Pages/Customer/payment/PaymentForms/BankTransferForm.jsx
// import React, { useState } from 'react';
// // // import { BANKS, FRAC_BANK_ACCOUNT } from '../../PaymentConfig';  // Go up two levels
// // import { BANKS, FRAC_BANK_ACCOUNT } from '../payment/PaymentConfig';  // Go up two levels
// // import { formatCurrency, validateAccountNumber, validateTransferReference } from '../payment/PaymentUtils';  // Go up two levels

// import { BANKS, FRAC_BANK_ACCOUNT } from '../PaymentConfig';
// import { formatCurrency, validateAccountNumber, validateTransferReference } from '../PaymentUtils';

// const BankTransferForm = ({ bankTransferDetails, booking, onInputChange, onFileUpload }) => {
//     const [errors, setErrors] = useState({});

//     const handleBlur = (fieldName, value) => {
//         const newErrors = { ...errors };
        
//         if (fieldName === 'accountNumber' && value) {
//             if (!validateAccountNumber(value)) {
//                 newErrors.accountNumber = 'Please enter a valid account number (8-20 digits)';
//             } else {
//                 delete newErrors.accountNumber;
//             }
//         }
        
//         if (fieldName === 'transferReference' && value) {
//             if (!validateTransferReference(value)) {
//                 newErrors.transferReference = 'Reference should be 5-30 alphanumeric characters';
//             } else {
//                 delete newErrors.transferReference;
//             }
//         }
        
//         if (fieldName === 'bankName' && !value) {
//             newErrors.bankName = 'Please select your bank';
//         } else {
//             delete newErrors.bankName;
//         }
        
//         if (fieldName === 'accountHolder' && !value.trim()) {
//             newErrors.accountHolder = 'Account holder name is required';
//         } else {
//             delete newErrors.accountHolder;
//         }
        
//         setErrors(newErrors);
//     };

//     return (
//         <div className="space-y-6">
//             {/* FRAC Bank Details - Highlighted Section */}
//             <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
//                 <div className="flex items-center mb-4">
//                     <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                         </svg>
//                     </div>
//                     <h4 className="text-lg font-bold text-teal-800">Transfer To FAIR RENT A CAR</h4>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                     <div>
//                         <p className="text-teal-600 text-xs">Bank</p>
//                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.bankName}</p>
//                     </div>
//                     <div>
//                         <p className="text-teal-600 text-xs">Account Name</p>
//                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.accountName}</p>
//                     </div>
//                     <div>
//                         <p className="text-teal-600 text-xs">Account Number</p>
//                         <p className="font-semibold text-gray-800 font-mono">{FRAC_BANK_ACCOUNT.accountNumber}</p>
//                     </div>
//                     <div>
//                         <p className="text-teal-600 text-xs">Branch</p>
//                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.branch}</p>
//                     </div>
//                     <div>
//                         <p className="text-teal-600 text-xs">SWIFT Code</p>
//                         <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.swiftCode}</p>
//                     </div>
//                     <div>
//                         <p className="text-teal-600 text-xs">Amount to Pay</p>
//                         <p className="font-bold text-teal-700">{formatCurrency(booking?.totalPrice)}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Important Instructions */}
//             <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//                 <p className="text-sm text-blue-700 flex items-start">
//                     <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>
//                         <span className="font-bold">Important:</span> Please transfer exactly 
//                         <span className="font-bold"> {formatCurrency(booking?.totalPrice)} </span> 
//                         to the FAIR RENT A CAR account above and fill in your bank details correctly. 
//                         Your booking will be confirmed after payment verification (within 24 hours).
//                     </span>
//                 </p>
//             </div>

//             {/* Your Bank Details Form */}
//             <div className="space-y-5">
//                 <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
//                     Your Bank Account Details
//                 </h4>

//                 {/* Bank Selection */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Select Your Bank <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                         name="bankName"
//                         value={bankTransferDetails.bankName}
//                         onChange={onInputChange}
//                         onBlur={(e) => handleBlur('bankName', e.target.value)}
//                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                             errors.bankName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                         }`}
//                         required
//                     >
//                         <option value="">Select your bank</option>
//                         {BANKS.map(bank => (
//                             <option key={bank.value} value={bank.value}>{bank.label}</option>
//                         ))}
//                     </select>
//                     {errors.bankName && (
//                         <p className="mt-1 text-xs text-red-600">{errors.bankName}</p>
//                     )}
//                 </div>

//                 {/* Account Number */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Your Account Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="accountNumber"
//                         value={bankTransferDetails.accountNumber}
//                         onChange={onInputChange}
//                         onBlur={(e) => handleBlur('accountNumber', e.target.value)}
//                         placeholder="Enter your account number"
//                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                             errors.accountNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                         }`}
//                         required
//                     />
//                     {errors.accountNumber && (
//                         <p className="mt-1 text-xs text-red-600">{errors.accountNumber}</p>
//                     )}
//                     <p className="mt-1 text-xs text-gray-500">Enter without spaces (8-20 digits)</p>
//                 </div>

//                 {/* Account Holder Name */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Account Holder Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="accountHolder"
//                         value={bankTransferDetails.accountHolder}
//                         onChange={onInputChange}
//                         onBlur={(e) => handleBlur('accountHolder', e.target.value)}
//                         placeholder="As per bank records"
//                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                             errors.accountHolder ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                         }`}
//                         required
//                     />
//                     {errors.accountHolder && (
//                         <p className="mt-1 text-xs text-red-600">{errors.accountHolder}</p>
//                     )}
//                 </div>

//                 {/* Transfer Reference */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Transfer Reference / Transaction ID <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="transferReference"
//                         value={bankTransferDetails.transferReference}
//                         onChange={onInputChange}
//                         onBlur={(e) => handleBlur('transferReference', e.target.value)}
//                         placeholder="Enter the reference number from your transfer"
//                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                             errors.transferReference ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                         }`}
//                         required
//                     />
//                     {errors.transferReference && (
//                         <p className="mt-1 text-xs text-red-600">{errors.transferReference}</p>
//                     )}
//                     <p className="mt-1 text-xs text-gray-500">The reference number from your bank transfer</p>
//                 </div>

//                 {/* Payment Slip Upload */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Upload Payment Slip (Optional - Recommended)
//                     </label>
//                     <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
//                         bankTransferDetails.uploadSlip 
//                             ? 'border-teal-500 bg-teal-50' 
//                             : 'border-gray-300 hover:border-teal-400'
//                     }`}>
//                         <input
//                             type="file"
//                             id="slip-upload"
//                             onChange={onFileUpload}
//                             accept="image/*,.pdf"
//                             className="hidden"
//                         />
//                         <label
//                             htmlFor="slip-upload"
//                             className="cursor-pointer flex flex-col items-center"
//                         >
//                             {bankTransferDetails.uploadSlip ? (
//                                 <>
//                                     <svg className="w-12 h-12 text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     <span className="text-sm font-medium text-teal-700">
//                                         {bankTransferDetails.uploadSlip.name}
//                                     </span>
//                                     <span className="text-xs text-teal-600 mt-1">
//                                         Click to change file
//                                     </span>
//                                 </>
//                             ) : (
//                                 <>
//                                     <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                                     </svg>
//                                     <span className="text-sm text-gray-600">
//                                         Click to upload payment slip
//                                     </span>
//                                     <span className="text-xs text-gray-500 mt-2">
//                                         PDF, PNG, JPG (Max 5MB)
//                                     </span>
//                                 </>
//                             )}
//                         </label>
//                     </div>
//                 </div>

//                 {/* Verification Note */}
//                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
//                     <p className="text-sm text-purple-700 flex items-start">
//                         <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <span>
//                             <span className="font-bold">Verification Time:</span> Your payment will be verified within 24 hours during business days. 
//                             You'll receive an email confirmation once verified and your booking status will be updated to "CONFIRMED".
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BankTransferForm;




// src/Pages/Customer/payment/PaymentForms/BankTransferForm.jsx
import React, { useState } from 'react';
import { BANKS, FRAC_BANK_ACCOUNT } from '../PaymentConfig';
import { formatCurrency, validateAccountNumber, validateTransferReference } from '../PaymentUtils';

const BankTransferForm = ({ bankTransferDetails, booking, onInputChange, onFileUpload }) => {
    const [errors, setErrors] = useState({});

    const handleBlur = (fieldName, value) => {
        const newErrors = { ...errors };
        
        if (fieldName === 'accountNumber' && value) {
            if (!validateAccountNumber(value)) {
                newErrors.accountNumber = 'Please enter a valid account number (8-20 digits)';
            } else {
                delete newErrors.accountNumber;
            }
        }
        
        if (fieldName === 'transferReference' && value) {
            if (!validateTransferReference(value)) {
                newErrors.transferReference = 'Reference should be 5-30 alphanumeric characters';
            } else {
                delete newErrors.transferReference;
            }
        }
        
        if (fieldName === 'bankName' && !value) {
            newErrors.bankName = 'Please select your bank';
        } else {
            delete newErrors.bankName;
        }
        
        if (fieldName === 'accountHolder' && !value.trim()) {
            newErrors.accountHolder = 'Account holder name is required';
        } else {
            delete newErrors.accountHolder;
        }
        
        setErrors(newErrors);
    };

    return (
        <div className="space-y-6">
            {/* FRAC Bank Details - Highlighted Section */}
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h4 className="text-lg font-bold text-teal-800">Transfer To FAIR RENT A CAR</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-teal-600 text-xs">Bank</p>
                        <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.bankName}</p>
                    </div>
                    <div>
                        <p className="text-teal-600 text-xs">Account Name</p>
                        <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.accountName}</p>
                    </div>
                    <div>
                        <p className="text-teal-600 text-xs">Account Number</p>
                        <p className="font-semibold text-gray-800 font-mono">{FRAC_BANK_ACCOUNT.accountNumber}</p>
                    </div>
                    <div>
                        <p className="text-teal-600 text-xs">Branch</p>
                        <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.branch}</p>
                    </div>
                    <div>
                        <p className="text-teal-600 text-xs">SWIFT Code</p>
                        <p className="font-semibold text-gray-800">{FRAC_BANK_ACCOUNT.swiftCode}</p>
                    </div>
                    <div>
                        <p className="text-teal-600 text-xs">Amount to Pay</p>
                        <p className="font-bold text-teal-700">{formatCurrency(booking?.totalPrice)}</p>
                    </div>
                </div>
            </div>

            {/* Important Instructions */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-700 flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                        <span className="font-bold">Important:</span> Please transfer exactly 
                        <span className="font-bold"> {formatCurrency(booking?.totalPrice)} </span> 
                        to the FAIR RENT A CAR account above and fill in your bank details correctly. 
                        Your booking will be confirmed after payment verification (within 24 hours).
                    </span>
                </p>
            </div>

            {/* Your Bank Details Form */}
            <div className="space-y-5">
                <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Your Bank Account Details
                </h4>

                {/* Bank Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Your Bank <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="bankName"
                        value={bankTransferDetails.bankName}
                        onChange={onInputChange}
                        onBlur={(e) => handleBlur('bankName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                            errors.bankName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                    >
                        <option value="">Select your bank</option>
                        {BANKS.map(bank => (
                            <option key={bank.value} value={bank.value}>{bank.label}</option>
                        ))}
                    </select>
                    {errors.bankName && (
                        <p className="mt-1 text-xs text-red-600">{errors.bankName}</p>
                    )}
                </div>

                {/* Account Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={bankTransferDetails.accountNumber}
                        onChange={onInputChange}
                        onBlur={(e) => handleBlur('accountNumber', e.target.value)}
                        placeholder="Enter your account number"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                            errors.accountNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                    />
                    {errors.accountNumber && (
                        <p className="mt-1 text-xs text-red-600">{errors.accountNumber}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">Enter without spaces (8-20 digits)</p>
                </div>

                {/* Account Holder Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Holder Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="accountHolder"
                        value={bankTransferDetails.accountHolder}
                        onChange={onInputChange}
                        onBlur={(e) => handleBlur('accountHolder', e.target.value)}
                        placeholder="As per bank records"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                            errors.accountHolder ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                    />
                    {errors.accountHolder && (
                        <p className="mt-1 text-xs text-red-600">{errors.accountHolder}</p>
                    )}
                </div>

                {/* Transfer Reference */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transfer Reference / Transaction ID <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="transferReference"
                        value={bankTransferDetails.transferReference}
                        onChange={onInputChange}
                        onBlur={(e) => handleBlur('transferReference', e.target.value)}
                        placeholder="Enter the reference number from your transfer"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                            errors.transferReference ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                    />
                    {errors.transferReference && (
                        <p className="mt-1 text-xs text-red-600">{errors.transferReference}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">The reference number from your bank transfer</p>
                </div>

                {/* Payment Slip Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Payment Slip (Optional - Recommended)
                    </label>
                    <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        bankTransferDetails.uploadSlip 
                            ? 'border-teal-500 bg-teal-50' 
                            : 'border-gray-300 hover:border-teal-400'
                    }`}>
                        <input
                            type="file"
                            id="slip-upload"
                            onChange={onFileUpload}
                            accept="image/*,.pdf"
                            className="hidden"
                        />
                        <label
                            htmlFor="slip-upload"
                            className="cursor-pointer flex flex-col items-center"
                        >
                            {bankTransferDetails.uploadSlip ? (
                                <>
                                    <svg className="w-12 h-12 text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-teal-700">
                                        {bankTransferDetails.uploadSlip.name}
                                    </span>
                                    <span className="text-xs text-teal-600 mt-1">
                                        Click to change file
                                    </span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-sm text-gray-600">
                                        Click to upload payment slip
                                    </span>
                                    <span className="text-xs text-gray-500 mt-2">
                                        PDF, PNG, JPG (Max 5MB)
                                    </span>
                                </>
                            )}
                        </label>
                    </div>
                </div>

                {/* Verification Note */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-700 flex items-start">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                            <span className="font-bold">Verification Time:</span> Your payment will be verified within 24 hours during business days. 
                            You'll receive an email confirmation once verified and your booking status will be updated to "CONFIRMED".
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BankTransferForm;