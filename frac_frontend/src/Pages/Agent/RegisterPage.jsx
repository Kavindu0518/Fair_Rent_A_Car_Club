// import React, { useState } from 'react';
// import axios from 'axios';

// const AgentRegisterPage = () => {
//     const [formData, setFormData] = useState({
//         companyName: '',
//         tagline: '',
//         email: '',
//         contactNo: '',
//         businessRegNo: '',
//         operatingSince: '',
//         tourismApproved: '',
//         insuranceType: '',
//         serviceAreas: '',
//         userName: '',
//         password: ''
//     });
//     const [errorMessage, setErrorMessage] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);

//     // Sri Lankan districts for service areas
//     const sriLankanDistricts = [
//         'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
//         'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
//         'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
//         'Matale', 'Matara', 'Moneragala', 'Mullaitivu', 'Nuwara Eliya',
//         'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
//     ];

//     const insuranceTypes = [
//         'Full Comprehensive Coverage',
//         'Third Party Insurance',
//         'Collision Damage Waiver',
//         'Theft Protection',
//         'Personal Accident Insurance',
//         'Full Package'
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         // Clear validation error for this field
//         if (validationErrors[name]) {
//             setValidationErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const handleMultiSelectChange = (e) => {
//         const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
//         setFormData(prev => ({
//             ...prev,
//             serviceAreas: selectedOptions.join(', ')
//         }));
//         // Clear validation error
//         if (validationErrors.serviceAreas) {
//             setValidationErrors(prev => ({
//                 ...prev,
//                 serviceAreas: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const errors = {};
        
//         if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
//         if (!formData.tagline.trim()) errors.tagline = 'Tagline is required';
//         if (!formData.email) errors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
//         if (!formData.contactNo) errors.contactNo = 'Contact number is required';
//         if (!formData.businessRegNo) errors.businessRegNo = 'Business registration number is required';
//         if (!formData.operatingSince) errors.operatingSince = 'Operating since year is required';
//         if (!formData.tourismApproved) errors.tourismApproved = 'Tourism approval status is required';
//         if (!formData.insuranceType) errors.insuranceType = 'Insurance type is required';
//         if (!formData.serviceAreas) errors.serviceAreas = 'Service areas are required';
//         if (!formData.userName) errors.userName = 'Username is required';
//         if (!formData.password) errors.password = 'Password is required';
//         if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';

//         // Validate operating year (should be 4 digits and not in future)
//         const currentYear = new Date().getFullYear();
//         if (formData.operatingSince) {
//             const year = parseInt(formData.operatingSince);
//             if (formData.operatingSince.length !== 4 || isNaN(year)) {
//                 errors.operatingSince = 'Please enter a valid 4-digit year';
//             } else if (year > currentYear) {
//                 errors.operatingSince = 'Year cannot be in the future';
//             } else if (year < 1900) {
//                 errors.operatingSince = 'Year must be after 1900';
//             }
//         }

//         return errors;
//     };

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setErrorMessage('');
//         setValidationErrors({});

//         // Validate form
//         const errors = validateForm();
//         if (Object.keys(errors).length > 0) {
//             setValidationErrors(errors);
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Prepare the payload for registration
//             const registerData = {
//                 companyName: formData.companyName,
//                 tagline: formData.tagline,
//                 email: formData.email,
//                 contactNo: formData.contactNo,
//                 businessRegNo: formData.businessRegNo,
//                 operatingSince: formData.operatingSince,
//                 tourismApproved: formData.tourismApproved,
//                 insuranceType: formData.insuranceType,
//                 serviceAreas: formData.serviceAreas,
//                 userName: formData.userName,
//                 password: formData.password
//             };

//             console.log('Registration Data:', registerData);

//             const response = await axios.post('http://localhost:8080/api/v1/agent/add', registerData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 timeout: 30000,
//             });

//             console.log('Response:', response.data);

//             if (response.status === 201) {
//                 setShowSuccess(true);
//                 // Reset form
//                 setFormData({
//                     companyName: '',
//                     tagline: '',
//                     email: '',
//                     contactNo: '',
//                     businessRegNo: '',
//                     operatingSince: '',
//                     tourismApproved: '',
//                     insuranceType: '',
//                     serviceAreas: '',
//                     userName: '',
//                     password: ''
//                 });
                
//                 // Auto redirect after 3 seconds
//                 setTimeout(() => {
//                     window.location.href = '/agent/login';
//                 }, 3000);
//             }
//         } catch (error) {
//             console.error('Registration error details:', error);
            
//             if (error.code === 'ECONNABORTED') {
//                 setErrorMessage('Request timeout. Please try again.');
//             } else if (error.response) {
//                 // Server responded with error
//                 console.error('Error response status:', error.response.status);
//                 console.error('Error response data:', error.response.data);
                
//                 if (error.response.status === 400 || error.response.status === 500) {
//                     const errorData = error.response.data;
//                     if (typeof errorData === 'string') {
//                         setErrorMessage(errorData);
//                     } else if (errorData && errorData.errorMessage) {
//                         setErrorMessage(errorData.errorMessage);
//                     } else if (errorData && errorData.includes && errorData.includes("company name")) {
//                         setErrorMessage('Company name already exists. Please use a different name.');
//                     } else if (errorData && errorData.includes && errorData.includes("username")) {
//                         setErrorMessage('Username already exists. Please choose a different username.');
//                     } else if (errorData && errorData.includes && errorData.includes("email")) {
//                         setErrorMessage('Email already exists. Please use a different email.');
//                     } else if (errorData && errorData.includes && errorData.includes("contact")) {
//                         setErrorMessage('Contact number already exists. Please use a different number.');
//                     } else if (errorData && errorData.includes && errorData.includes("business registration")) {
//                         setErrorMessage('Business registration number already exists. Please use a different number.');
//                     } else {
//                         setErrorMessage('Server error. Please try again later.');
//                     }
//                 } else {
//                     setErrorMessage(`Error ${error.response.status}: Registration failed`);
//                 }
//             } else if (error.request) {
//                 // Request was made but no response
//                 console.error('No response received. Check if server is running.');
//                 setErrorMessage('Cannot connect to server. Please make sure the backend is running on http://localhost:8080');
//             } else {
//                 // Something else happened
//                 setErrorMessage('An unexpected error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
//             <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
//                 {/* Left Section - Car Adventure Theme */}
//                 <div className="md:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
//                     {/* Background Pattern */}
//                     <div className="absolute inset-0 opacity-10">
//                         <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
//                         <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
//                         <div className="absolute top-1/2 left-1/3 w-12 h-12 border-4 border-white rounded-full"></div>
//                     </div>

//                     <div className="relative z-10">
//                         {/* Logo/Brand Section */}
//                         <div className="mb-8">
//                             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
//                                 <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
//                             </div>
//                             <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
//                             <p className="text-teal-300 text-lg font-medium">Partner With Us</p>
//                         </div>

//                         {/* Tagline */}
//                         <div className="mb-10">
//                             <h2 className="text-2xl font-bold mb-3">Become Our Partner</h2>
//                             <p className="text-teal-200 leading-relaxed">
//                                 Join our network of trusted agents and expand your car rental business. 
//                                 Access our premium fleet, marketing support, and advanced booking system.
//                             </p>
//                         </div>

//                         {/* Benefits List */}
//                         <div className="space-y-4 mb-12">
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Access to Premium Fleet</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Marketing & Promotional Support</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Competitive Commission Structure</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>24/7 Technical Support</span>
//                             </div>
//                         </div>

//                         {/* Login Link */}
//                         <div className="mt-8">
//                             <a href="/agent/login" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
//                                 Already a Partner? Sign In
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Agent Registration Form */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
//                     {/* Agent Registration Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Become an Agent</h2>
//                         <p className="text-gray-600">Register your travel agency for partnership</p>
//                     </div>

//                     {/* Success Message */}
//                     {showSuccess && (
//                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                             <p className="text-green-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                                 Registration successful! Redirecting to login page...
//                             </p>
//                         </div>
//                     )}

//                     {/* Error Message */}
//                     {errorMessage && !showSuccess && (
//                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                             <p className="text-red-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                 </svg>
//                                 {errorMessage}
//                             </p>
//                         </div>
//                     )}

//                     <form onSubmit={handleRegister} className="space-y-6 max-w-md mx-auto w-full">
//                         {/* Company Information */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                 </svg>
//                                 Company Information
//                             </h3>
                            
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Company Name *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="companyName"
//                                     value={formData.companyName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                         validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="ABC Travel & Tours"
//                                 />
//                                 {validationErrors.companyName && (
//                                     <p className="mt-1 text-sm text-red-600">{validationErrors.companyName}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Tagline *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="tagline"
//                                     value={formData.tagline}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                         validationErrors.tagline ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="Your trusted travel partner"
//                                 />
//                                 {validationErrors.tagline && (
//                                     <p className="mt-1 text-sm text-red-600">{validationErrors.tagline}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Contact Information */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                 </svg>
//                                 Contact Information
//                             </h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Email Address *
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="info@company.com"
//                                     />
//                                     {validationErrors.email && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Contact Number *
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="contactNo"
//                                         value={formData.contactNo}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="+94 77 123 4567"
//                                     />
//                                     {validationErrors.contactNo && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Business Details */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                                 Business Details
//                             </h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Business Registration No *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="businessRegNo"
//                                         value={formData.businessRegNo}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.businessRegNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="AB123456789"
//                                     />
//                                     {validationErrors.businessRegNo && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.businessRegNo}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Operating Since *
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="operatingSince"
//                                         value={formData.operatingSince}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.operatingSince ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="2010"
//                                         min="1900"
//                                         max={new Date().getFullYear()}
//                                     />
//                                     {validationErrors.operatingSince && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.operatingSince}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Tourism Approved *
//                                     </label>
//                                     <select
//                                         name="tourismApproved"
//                                         value={formData.tourismApproved}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
//                                             validationErrors.tourismApproved ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Status</option>
//                                         <option value="Yes">Yes</option>
//                                         <option value="No">No</option>
//                                     </select>
//                                     {validationErrors.tourismApproved && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.tourismApproved}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Insurance Type *
//                                     </label>
//                                     <select
//                                         name="insuranceType"
//                                         value={formData.insuranceType}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
//                                             validationErrors.insuranceType ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Insurance Type</option>
//                                         {insuranceTypes.map((type, index) => (
//                                             <option key={index} value={type}>{type}</option>
//                                         ))}
//                                     </select>
//                                     {validationErrors.insuranceType && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.insuranceType}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Service Areas */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                                 </svg>
//                                 Service Areas *
//                             </h3>
                            
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Select Districts (Hold Ctrl/Cmd to select multiple)
//                                 </label>
//                                 <select
//                                     multiple
//                                     name="serviceAreas"
//                                     value={formData.serviceAreas ? formData.serviceAreas.split(', ') : []}
//                                     onChange={handleMultiSelectChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white min-h-[120px] ${
//                                         validationErrors.serviceAreas ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     {sriLankanDistricts.map((district, index) => (
//                                         <option key={index} value={district}>{district}</option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.serviceAreas && (
//                                     <p className="mt-1 text-sm text-red-600">{validationErrors.serviceAreas}</p>
//                                 )}
//                                 <p className="mt-1 text-xs text-gray-500">
//                                     Selected: {formData.serviceAreas || 'None'}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Account Credentials */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                                 Account Credentials
//                             </h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Username *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="userName"
//                                         value={formData.userName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="company_agent"
//                                     />
//                                     {validationErrors.userName && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Password *
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="••••••••"
//                                     />
//                                     {validationErrors.password && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="pt-4">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:-translate-y-0.5 ${
//                                     isSubmitting
//                                         ? 'bg-teal-400 cursor-not-allowed'
//                                         : 'bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900'
//                                 } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Processing Registration...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                         </svg>
//                                         Register as Agent
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         {/* Login Link */}
//                         <div className="text-center pt-4 border-t border-gray-200">
//                             <p className="text-gray-600 text-sm">
//                                 Already registered? <a href="/agent/login" className="text-teal-600 hover:text-teal-800 font-medium">Sign in here</a>
//                             </p>
//                             <p className="text-gray-500 text-xs mt-2">
//                                 © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AgentRegisterPage;



import React, { useState } from 'react';
import axios from 'axios';

const AgentRegisterPage = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        tagline: '',
        email: '',
        contactNo: '',
        businessRegNo: '',
        operatingSince: '',
        tourismApproved: '',
        insuranceType: '',
        serviceAreas: '',
        userName: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Sri Lankan districts for service areas
    const sriLankanDistricts = [
        'Colombo', 'Gampaha', 'Kalutara', // Western
        'Kandy', 'Matale', 'Nuwara Eliya', // Central
        'Galle', 'Matara', 'Hambantota', // Southern
        'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', // Northern
        'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Trincomalee', 'Batticaloa', 'Ampara', // Other
        'Kurunegala', 'Puttalam', // North Western
        'Kegalle', 'Ratnapura' // Sabaragamuwa
    ];

    const insuranceTypes = [
        'Full Comprehensive Coverage',
        'Third Party Insurance',
        'Collision Damage Waiver',
        'Theft Protection',
        'Personal Accident Insurance',
        'Full Package'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear validation error for this field
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
        if (!formData.tagline.trim()) errors.tagline = 'Tagline is required';
        if (!formData.email) errors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.contactNo) errors.contactNo = 'Contact number is required';
        if (!formData.businessRegNo) errors.businessRegNo = 'Business registration number is required';
        if (!formData.operatingSince) errors.operatingSince = 'Operating since year is required';
        if (!formData.tourismApproved) errors.tourismApproved = 'Tourism approval status is required';
        if (!formData.insuranceType) errors.insuranceType = 'Insurance type is required';
        if (!formData.serviceAreas) errors.serviceAreas = 'Service areas are required';
        if (!formData.userName) errors.userName = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';

        // Validate operating year (should be 4 digits and not in future)
        const currentYear = new Date().getFullYear();
        if (formData.operatingSince) {
            const year = parseInt(formData.operatingSince);
            if (formData.operatingSince.length !== 4 || isNaN(year)) {
                errors.operatingSince = 'Please enter a valid 4-digit year';
            } else if (year > currentYear) {
                errors.operatingSince = 'Year cannot be in the future';
            } else if (year < 1900) {
                errors.operatingSince = 'Year must be after 1900';
            }
        }

        return errors;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setValidationErrors({});

        // Validate form
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare the payload for registration
            const registerData = {
                companyName: formData.companyName,
                tagline: formData.tagline,
                email: formData.email,
                contactNo: formData.contactNo,
                businessRegNo: formData.businessRegNo,
                operatingSince: formData.operatingSince,
                tourismApproved: formData.tourismApproved,
                insuranceType: formData.insuranceType,
                serviceAreas: formData.serviceAreas,
                userName: formData.userName,
                password: formData.password
            };

            console.log('Registration Data:', registerData);

            const response = await axios.post('http://localhost:8080/api/v1/agent/add', registerData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000,
            });

            console.log('Response:', response.data);

            if (response.status === 201) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    companyName: '',
                    tagline: '',
                    email: '',
                    contactNo: '',
                    businessRegNo: '',
                    operatingSince: '',
                    tourismApproved: '',
                    insuranceType: '',
                    serviceAreas: '',
                    userName: '',
                    password: ''
                });
                
                // Auto redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = '/agent/login';
                }, 3000);
            }
        } catch (error) {
            console.error('Registration error details:', error);
            
            if (error.code === 'ECONNABORTED') {
                setErrorMessage('Request timeout. Please try again.');
            } else if (error.response) {
                // Server responded with error
                console.error('Error response status:', error.response.status);
                console.error('Error response data:', error.response.data);
                
                if (error.response.status === 400 || error.response.status === 500) {
                    const errorData = error.response.data;
                    if (typeof errorData === 'string') {
                        setErrorMessage(errorData);
                    } else if (errorData && errorData.errorMessage) {
                        setErrorMessage(errorData.errorMessage);
                    } else if (errorData && errorData.includes && errorData.includes("company name")) {
                        setErrorMessage('Company name already exists. Please use a different name.');
                    } else if (errorData && errorData.includes && errorData.includes("username")) {
                        setErrorMessage('Username already exists. Please choose a different username.');
                    } else if (errorData && errorData.includes && errorData.includes("email")) {
                        setErrorMessage('Email already exists. Please use a different email.');
                    } else if (errorData && errorData.includes && errorData.includes("contact")) {
                        setErrorMessage('Contact number already exists. Please use a different number.');
                    } else if (errorData && errorData.includes && errorData.includes("business registration")) {
                        setErrorMessage('Business registration number already exists. Please use a different number.');
                    } else {
                        setErrorMessage('Server error. Please try again later.');
                    }
                } else {
                    setErrorMessage(`Error ${error.response.status}: Registration failed`);
                }
            } else if (error.request) {
                // Request was made but no response
                console.error('No response received. Check if server is running.');
                setErrorMessage('Cannot connect to server. Please make sure the backend is running on http://localhost:8080');
            } else {
                // Something else happened
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Section - Car Adventure Theme */}
                <div className="md:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
                        <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/3 w-12 h-12 border-4 border-white rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Logo/Brand Section */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
                                <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
                            <p className="text-teal-300 text-lg font-medium">Partner With Us</p>
                        </div>

                        {/* Tagline */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3">Become Our Partner</h2>
                            <p className="text-teal-200 leading-relaxed">
                                Join our network of trusted agents and expand your car rental business. 
                                Access our premium fleet, marketing support, and advanced booking system.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Access to Premium Fleet</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Marketing & Promotional Support</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Competitive Commission Structure</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 Technical Support</span>
                            </div>
                        </div>

                        {/* Login Link */}
                        <div className="mt-8">
                            <a href="/agent/login" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
                                Already a Partner? Sign In
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Agent Registration Form */}
                <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                    {/* Agent Registration Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Become an Agent</h2>
                        <p className="text-gray-600">Register your travel agency for partnership</p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="text-green-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Registration successful! Redirecting to login page...
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && !showSuccess && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                            <p className="text-red-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-2 max-w-md mx-auto w-full">
                        {/* Company Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Company Information
                            </h3>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                        validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="ABC Travel & Tours"
                                />
                                {validationErrors.companyName && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.companyName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tagline *
                                </label>
                                <input
                                    type="text"
                                    name="tagline"
                                    value={formData.tagline}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                        validationErrors.tagline ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="Your trusted travel partner"
                                />
                                {validationErrors.tagline && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.tagline}</p>
                                )}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Contact Information
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="info@company.com"
                                    />
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="+94 77 123 4567"
                                    />
                                    {validationErrors.contactNo && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Business Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Business Details
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Registration No *
                                    </label>
                                    <input
                                        type="text"
                                        name="businessRegNo"
                                        value={formData.businessRegNo}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.businessRegNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="AB123456789"
                                    />
                                    {validationErrors.businessRegNo && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.businessRegNo}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Operating Since *
                                    </label>
                                    <input
                                        type="number"
                                        name="operatingSince"
                                        value={formData.operatingSince}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.operatingSince ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="2010"
                                        min="1900"
                                        max={new Date().getFullYear()}
                                    />
                                    {validationErrors.operatingSince && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.operatingSince}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tourism Approved *
                                    </label>
                                    <select
                                        name="tourismApproved"
                                        value={formData.tourismApproved}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.tourismApproved ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {validationErrors.tourismApproved && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.tourismApproved}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Insurance Type *
                                    </label>
                                    <select
                                        name="insuranceType"
                                        value={formData.insuranceType}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.insuranceType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Insurance Type</option>
                                        {insuranceTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    {validationErrors.insuranceType && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.insuranceType}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Service Areas *
                            </h3>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Service Areas (Select all applicable districts)
                                </label>
                                
                                <div className={`border rounded-lg p-4 transition duration-200 ${
                                    validationErrors.serviceAreas ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}>
                                    {/* Selected Areas Display */}
                                    {formData.serviceAreas && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {formData.serviceAreas.split(', ').map((district, index) => (
                                                    <div key={index} className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                                        <span>{district}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const currentAreas = formData.serviceAreas.split(', ');
                                                                const updatedAreas = currentAreas.filter(area => area !== district);
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    serviceAreas: updatedAreas.join(', ')
                                                                }));
                                                            }}
                                                            className="ml-2 text-teal-600 hover:text-teal-800"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-2 text-xs text-gray-500">
                                                {formData.serviceAreas.split(', ').length} district(s) selected
                                            </div>
                                        </div>
                                    )}

                                    {/* Quick Selection Buttons */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const allDistricts = sriLankanDistricts.join(', ');
                                                    setFormData(prev => ({ ...prev, serviceAreas: allDistricts }));
                                                }}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
                                            >
                                                Select All
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, serviceAreas: '' }));
                                                }}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                        
                                        {/* Major Regions Quick Select */}
                                        <div className="text-xs text-gray-600 mb-2">Quick select by region:</div>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const westernDistricts = ['Colombo', 'Gampaha', 'Kalutara'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: westernDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition duration-200"
                                            >
                                                Western Province
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const southernDistricts = ['Galle', 'Matara', 'Hambantota'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: southernDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg hover:bg-green-100 transition duration-200"
                                            >
                                                Southern Province
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const centralDistricts = ['Kandy', 'Matale', 'Nuwara Eliya'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: centralDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg hover:bg-purple-100 transition duration-200"
                                            >
                                                Central Province
                                            </button>
                                        </div>
                                    </div>

                                    {/* Districts Grid */}
                                    <div className="border-t pt-4">
                                        <div className="text-sm font-medium text-gray-700 mb-3">Select Individual Districts:</div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-2">
                                            {sriLankanDistricts.map((district, index) => {
                                                const isSelected = formData.serviceAreas.includes(district);
                                                return (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id={`district-${index}`}
                                                            checked={isSelected}
                                                            onChange={(e) => {
                                                                let currentAreas = formData.serviceAreas ? formData.serviceAreas.split(', ') : [];
                                                                if (e.target.checked) {
                                                                    // Add district if not already present
                                                                    if (!currentAreas.includes(district)) {
                                                                        currentAreas.push(district);
                                                                    }
                                                                } else {
                                                                    // Remove district
                                                                    currentAreas = currentAreas.filter(area => area !== district);
                                                                }
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    serviceAreas: currentAreas.join(', ')
                                                                }));
                                                            }}
                                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                                        />
                                                        <label
                                                            htmlFor={`district-${index}`}
                                                            className={`ml-2 text-sm cursor-pointer select-none ${
                                                                isSelected ? 'text-teal-700 font-medium' : 'text-gray-700'
                                                            }`}
                                                        >
                                                            {district}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        
                                        {/* Instructions */}
                                        <div className="mt-4 text-xs text-gray-500 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Select all districts where you provide services. Click on tags above to remove.
                                        </div>
                                    </div>
                                </div>
                                
                                {validationErrors.serviceAreas && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.serviceAreas}</p>
                                )}
                            </div>
                        </div>

                        {/* Account Credentials */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Account Credentials
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Username *
                                    </label>
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="company_agent"
                                    />
                                    {validationErrors.userName && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="••••••••"
                                    />
                                    {validationErrors.password && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:-translate-y-0.5 ${
                                    isSubmitting
                                        ? 'bg-teal-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900'
                                } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing Registration...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Register as Agent
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Already registered? <a href="/agent/login" className="text-teal-600 hover:text-teal-800 font-medium">Sign in here</a>
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgentRegisterPage;