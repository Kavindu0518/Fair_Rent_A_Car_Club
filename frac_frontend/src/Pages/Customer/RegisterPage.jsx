// import React, { useState } from 'react';
// import axios from 'axios';

// const CustomerRegisterPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         password: '',
//         gender: '',
//         birthday: '',
//         nicNumber: '',
//         contactNumber: '',
//         email: '',
//         country: ''
//     });
//     const [customerImage, setCustomerImage] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);

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

//     const validateForm = () => {
//         const errors = {};
        
//         if (!formData.firstName.trim()) errors.firstName = 'First name is required';
//         if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
//         if (!formData.password) errors.password = 'Password is required';
//         if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
//         if (!formData.email) errors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
//         if (!formData.contactNumber) errors.contactNumber = 'Contact number is required';
//         if (!formData.nicNumber) errors.nicNumber = 'NIC/Passport number is required';
//         if (!formData.gender) errors.gender = 'Gender is required';
//         if (!formData.birthday) errors.birthday = 'Birthday is required';
//         if (!formData.country) errors.country = 'Country is required';
//         if (!customerImage) errors.customerImage = 'Profile image is required';

//         // Age validation (must be at least 18 years old)
//         if (formData.birthday) {
//             const today = new Date();
//             const birthDate = new Date(formData.birthday);
//             let age = today.getFullYear() - birthDate.getFullYear();
//             const monthDiff = today.getMonth() - birthDate.getMonth();
            
//             if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//                 age--;
//             }
            
//             if (age < 18) {
//                 errors.birthday = 'You must be at least 18 years old';
//             }
//         }

//         return errors;
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             // Validate file type
//             const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
//             if (!validTypes.includes(file.type)) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     customerImage: 'Only JPEG, PNG, and GIF images are allowed'
//                 }));
//                 return;
//             }
            
//             // Validate file size (5MB limit)
//             if (file.size > 5 * 1024 * 1024) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     customerImage: 'Image size must be less than 5MB'
//                 }));
//                 return;
//             }
            
//             setCustomerImage(file);
//             // Clear image error
//             if (validationErrors.customerImage) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     customerImage: ''
//                 }));
//             }
//         }
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

//         const submitData = new FormData();
        
//         // Append all form fields exactly as backend expects
//         submitData.append('firstName', formData.firstName);
//         submitData.append('lastName', formData.lastName);
//         submitData.append('password', formData.password);
//         submitData.append('gender', formData.gender);
//         submitData.append('birthday', formData.birthday);
//         submitData.append('nicNumber', formData.nicNumber);
//         submitData.append('contactNumber', formData.contactNumber);
//         submitData.append('email', formData.email);
//         submitData.append('country', formData.country);
//         submitData.append('customerImage', customerImage);

//         try {
//             // Log what we're sending
//             console.log('Form Data:');
//             for (let [key, value] of submitData.entries()) {
//                 console.log(`${key}:`, value);
//             }

//             const response = await axios.post('http://localhost:8080/api/v1/customer/add', submitData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 timeout: 30000,
//             });

//             console.log('Response:', response.data);

//             if (response.status === 201) {
//                 setShowSuccess(true);
//                 // Reset form
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     password: '',
//                     gender: '',
//                     birthday: '',
//                     nicNumber: '',
//                     contactNumber: '',
//                     email: '',
//                     country: ''
//                 });
//                 setCustomerImage(null);
                
//                 // Auto redirect after 3 seconds
//                 setTimeout(() => {
//                     window.location.href = '/customer/login';
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
//                     } else if (errorData && errorData.includes && errorData.includes("email")) {
//                         setErrorMessage('Email already exists. Please use a different email.');
//                     } else if (errorData && errorData.includes && errorData.includes("NIC")) {
//                         setErrorMessage('NIC/Passport number already exists. Please use a different one.');
//                     } else if (errorData && errorData.includes && errorData.includes("contact number")) {
//                         setErrorMessage('Contact number already exists. Please use a different one.');
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
//                             <p className="text-teal-300 text-lg font-medium">Your Journey Begins Here</p>
//                         </div>

//                         {/* Tagline */}
//                         <div className="mb-10">
//                             <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
//                             <p className="text-teal-200 leading-relaxed">
//                                 Create your account to access premium car rental services, exclusive deals, 
//                                 and manage your bookings with ease.
//                             </p>
//                         </div>

//                         {/* Features List */}
//                         <div className="space-y-4 mb-12">
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Wide Range of Vehicles</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>24/7 Customer Support</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Flexible Rental Plans</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Secure Online Booking</span>
//                             </div>
//                         </div>

//                         {/* Login Link */}
//                         <div className="mt-8">
//                             <a href="/customer/login" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
//                                 Already Registered? Sign In
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Customer Registration Form */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
//                     {/* Registration Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Customer Account</h2>
//                         <p className="text-gray-600">Register to start your car rental journey with us</p>
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

//                     <form onSubmit={handleRegister} className="space-y-2 max-w mx-auto w-full">
//                         {/* Personal Information */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                                 </svg>
//                                 Personal Information
//                             </h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         First Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="John"
//                                     />
//                                     {validationErrors.firstName && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Last Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Doe"
//                                     />
//                                     {validationErrors.lastName && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Gender *
//                                     </label>
//                                     <select
//                                         name="gender"
//                                         value={formData.gender}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
//                                             validationErrors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Gender</option>
//                                         <option value="MALE">Male</option>
//                                         <option value="FEMALE">Female</option>
//                                         <option value="OTHER">Other</option>
//                                     </select>
//                                     {validationErrors.gender && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.gender}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Birthday *
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="birthday"
//                                         value={formData.birthday}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {validationErrors.birthday && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.birthday}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Account Security */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                                 Account Security
//                             </h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
//                                         placeholder="customer@example.com"
//                                     />
//                                     {validationErrors.email && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Contact & Identification */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                                 Contact & Identification
//                             </h3>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         NIC/Passport Number *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="nicNumber"
//                                         value={formData.nicNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="123456789V or AB123456"
//                                     />
//                                     {validationErrors.nicNumber && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.nicNumber}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Contact Number *
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="contactNumber"
//                                         value={formData.contactNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="+94 77 123 4567"
//                                     />
//                                     {validationErrors.contactNumber && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.contactNumber}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Country *
//                                 </label>
//                                 <select
//                                     name="country"
//                                     value={formData.country}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
//                                         validationErrors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Country</option>
//                                     <option value="Sri Lanka">Sri Lanka</option>
//                                     <option value="India">India</option>
//                                     <option value="USA">United States</option>
//                                     <option value="UK">United Kingdom</option>
//                                     <option value="Australia">Australia</option>
//                                     <option value="Canada">Canada</option>
//                                     <option value="Germany">Germany</option>
//                                     <option value="France">France</option>
//                                     <option value="Japan">Japan</option>
//                                     <option value="China">China</option>
//                                     <option value="Other">Other</option>
//                                 </select>
//                                 {validationErrors.country && (
//                                     <p className="mt-1 text-sm text-red-600">{validationErrors.country}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Profile Image */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                                 Profile Image *
//                             </h3>

//                             <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
//                                 validationErrors.customerImage 
//                                     ? 'border-red-500 bg-red-50' 
//                                     : customerImage 
//                                         ? 'border-teal-500 bg-teal-50' 
//                                         : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="customerImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/jpeg,image/jpg,image/png,image/gif"
//                                 />
//                                 <label htmlFor="customerImage" className="cursor-pointer">
//                                     {customerImage ? (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             <p className="text-sm font-medium text-teal-700">
//                                                 {customerImage.name}
//                                             </p>
//                                             <p className="text-xs text-teal-600 mt-1">
//                                                 Click to change image
//                                             </p>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">
//                                                 Click to upload profile image
//                                             </p>
//                                         </>
//                                     )}
//                                     <p className="text-xs text-gray-500 mt-2">
//                                         Supported: JPEG, PNG, GIF • Max 5MB
//                                     </p>
//                                 </label>
//                             </div>
//                             {validationErrors.customerImage && (
//                                 <p className="mt-1 text-sm text-red-600">{validationErrors.customerImage}</p>
//                             )}
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
//                                         Creating Account...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                                         </svg>
//                                         Create Customer Account
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         {/* Login Link */}
//                         <div className="text-center pt-4 border-t border-gray-200">
//                             <p className="text-gray-600 text-sm">
//                                 Already have an account? <a href="/customer/login" className="text-teal-600 hover:text-teal-800 font-medium">Sign in here</a>
//                             </p>
//                             <p className="text-gray-500 text-xs mt-2">
//                                 © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
//                             </p>
//                             <p className="text-gray-400 text-xs mt-1">
//                                 * Must be 18 years or older to register
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerRegisterPage;




// src/Pages/Customer/RegisterPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CustomerRegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        gender: '',
        birthday: '',
        nicNumber: '',
        contactNumber: '',
        email: '',
        country: ''
    });
    const [customerImage, setCustomerImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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
        
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
        if (!formData.email) errors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.contactNumber) errors.contactNumber = 'Contact number is required';
        if (!formData.nicNumber) errors.nicNumber = 'NIC/Passport number is required';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.birthday) errors.birthday = 'Birthday is required';
        if (!formData.country) errors.country = 'Country is required';
        if (!customerImage) errors.customerImage = 'Profile image is required';

        // Age validation (must be at least 18 years old)
        if (formData.birthday) {
            const today = new Date();
            const birthDate = new Date(formData.birthday);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            if (age < 18) {
                errors.birthday = 'You must be at least 18 years old';
            }
        }

        return errors;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                setValidationErrors(prev => ({
                    ...prev,
                    customerImage: 'Only JPEG, PNG, and GIF images are allowed'
                }));
                return;
            }
            
            // Validate file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                setValidationErrors(prev => ({
                    ...prev,
                    customerImage: 'Image size must be less than 5MB'
                }));
                return;
            }
            
            setCustomerImage(file);
            // Clear image error
            if (validationErrors.customerImage) {
                setValidationErrors(prev => ({
                    ...prev,
                    customerImage: ''
                }));
            }
        }
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

        const submitData = new FormData();
        
        // Append all form fields exactly as backend expects
        submitData.append('firstName', formData.firstName);
        submitData.append('lastName', formData.lastName);
        submitData.append('password', formData.password);
        submitData.append('gender', formData.gender);
        submitData.append('birthday', formData.birthday);
        submitData.append('nicNumber', formData.nicNumber);
        submitData.append('contactNumber', formData.contactNumber);
        submitData.append('email', formData.email);
        submitData.append('country', formData.country);
        submitData.append('customerImage', customerImage);

        try {
            // Log what we're sending
            console.log('Form Data:');
            for (let [key, value] of submitData.entries()) {
                console.log(`${key}:`, value);
            }

            const response = await axios.post('http://localhost:8080/api/v1/customer/add', submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                timeout: 30000,
            });

            console.log('Response:', response.data);

            if (response.status === 201) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    password: '',
                    gender: '',
                    birthday: '',
                    nicNumber: '',
                    contactNumber: '',
                    email: '',
                    country: ''
                });
                setCustomerImage(null);
                
                // Auto redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = '/customer/login';
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
                
                // FIXED: Better error message extraction
                if (error.response.status === 400 || error.response.status === 500) {
                    const errorData = error.response.data;
                    
                    // Check if error message contains specific field information
                    if (typeof errorData === 'string') {
                        // Handle string error messages
                        if (errorData.toLowerCase().includes('email')) {
                            setErrorMessage('This email address is already registered. Please use a different email.');
                        } else if (errorData.toLowerCase().includes('nic') || errorData.toLowerCase().includes('passport')) {
                            setErrorMessage('This NIC/Passport number is already registered. Please use a different one.');
                        } else if (errorData.toLowerCase().includes('contact') || errorData.toLowerCase().includes('phone')) {
                            setErrorMessage('This contact number is already registered. Please use a different one.');
                        } else {
                            setErrorMessage(errorData);
                        }
                    } else if (errorData && errorData.errorMessage) {
                        // Handle structured error message
                        const errorMsg = errorData.errorMessage.toLowerCase();
                        if (errorMsg.includes('email')) {
                            setErrorMessage('This email address is already registered. Please use a different email.');
                        } else if (errorMsg.includes('nic') || errorMsg.includes('passport')) {
                            setErrorMessage('This NIC/Passport number is already registered. Please use a different one.');
                        } else if (errorMsg.includes('contact')) {
                            setErrorMessage('This contact number is already registered. Please use a different one.');
                        } else {
                            setErrorMessage(errorData.errorMessage);
                        }
                    } else if (errorData && errorData.message) {
                        // Handle message field
                        const errorMsg = errorData.message.toLowerCase();
                        if (errorMsg.includes('email')) {
                            setErrorMessage('This email address is already registered. Please use a different email.');
                        } else if (errorMsg.includes('nic') || errorMsg.includes('passport')) {
                            setErrorMessage('This NIC/Passport number is already registered. Please use a different one.');
                        } else if (errorMsg.includes('contact')) {
                            setErrorMessage('This contact number is already registered. Please use a different one.');
                        } else {
                            setErrorMessage(errorData.message);
                        }
                    } else {
                        // Try to extract from response data structure
                        const responseStr = JSON.stringify(errorData).toLowerCase();
                        if (responseStr.includes('email')) {
                            setErrorMessage('This email address is already registered. Please use a different email.');
                        } else if (responseStr.includes('nic') || responseStr.includes('passport')) {
                            setErrorMessage('This NIC/Passport number is already registered. Please use a different one.');
                        } else if (responseStr.includes('contact')) {
                            setErrorMessage('This contact number is already registered. Please use a different one.');
                        } else {
                            setErrorMessage('Registration failed. Please check your details and try again.');
                        }
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

    // Rest of your component remains the same...
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
                            <p className="text-teal-300 text-lg font-medium">Your Journey Begins Here</p>
                        </div>

                        {/* Tagline */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
                            <p className="text-teal-200 leading-relaxed">
                                Create your account to access premium car rental services, exclusive deals, 
                                and manage your bookings with ease.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Wide Range of Vehicles</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 Customer Support</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Flexible Rental Plans</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Secure Online Booking</span>
                            </div>
                        </div>

                        {/* Login Link */}
                        <div className="mt-8">
                            <a href="/customer/login" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
                                Already Registered? Sign In
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Customer Registration Form */}
                <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                    {/* Registration Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Customer Account</h2>
                        <p className="text-gray-600">Register to start your car rental journey with us</p>
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

                    <form onSubmit={handleRegister} className="space-y-2 max-w mx-auto w-full">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Personal Information
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="John"
                                    />
                                    {validationErrors.firstName && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Doe"
                                    />
                                    {validationErrors.lastName && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Gender *
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                    {validationErrors.gender && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.gender}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Birthday *
                                    </label>
                                    <input
                                        type="date"
                                        name="birthday"
                                        value={formData.birthday}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {validationErrors.birthday && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.birthday}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Account Security */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Account Security
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        placeholder="customer@example.com"
                                    />
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Contact & Identification */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Contact & Identification
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        NIC/Passport Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="nicNumber"
                                        value={formData.nicNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="123456789V or AB123456"
                                    />
                                    {validationErrors.nicNumber && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.nicNumber}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="+94 77 123 4567"
                                    />
                                    {validationErrors.contactNumber && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.contactNumber}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Country *
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                        validationErrors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Country</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="India">India</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Japan">Japan</option>
                                    <option value="China">China</option>
                                    <option value="Other">Other</option>
                                </select>
                                {validationErrors.country && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.country}</p>
                                )}
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Profile Image *
                            </h3>

                            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
                                validationErrors.customerImage 
                                    ? 'border-red-500 bg-red-50' 
                                    : customerImage 
                                        ? 'border-teal-500 bg-teal-50' 
                                        : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="customerImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/jpeg,image/jpg,image/png,image/gif"
                                />
                                <label htmlFor="customerImage" className="cursor-pointer">
                                    {customerImage ? (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-sm font-medium text-teal-700">
                                                {customerImage.name}
                                            </p>
                                            <p className="text-xs text-teal-600 mt-1">
                                                Click to change image
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">
                                                Click to upload profile image
                                            </p>
                                        </>
                                    )}
                                    <p className="text-xs text-gray-500 mt-2">
                                        Supported: JPEG, PNG, GIF • Max 5MB
                                    </p>
                                </label>
                            </div>
                            {validationErrors.customerImage && (
                                <p className="mt-1 text-sm text-red-600">{validationErrors.customerImage}</p>
                            )}
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
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                        Create Customer Account
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Already have an account? <a href="/customer/login" className="text-teal-600 hover:text-teal-800 font-medium">Sign in here</a>
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                * Must be 18 years or older to register
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerRegisterPage;