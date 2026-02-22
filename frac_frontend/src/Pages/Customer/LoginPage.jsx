// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const LoginPage = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [errorMessage, setErrorMessage] = useState('');
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [showSuccess, setShowSuccess] = useState(false);
// // //     const [username, setUsername] = useState('');
// // //     const [rememberMe, setRememberMe] = useState(false);

// // //     const handleLogin = async (e) => {
// // //         e.preventDefault();
// // //         setErrorMessage('');
// // //         setIsSubmitting(true);

// // //         try {
// // //             const loginData = {
// // //                 email: email,
// // //                 password: password,
// // //             };

// // //             const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 timeout: 30000,
// // //             });

// // //             if (response.status === 200) {
// // //                 setUsername(response.data.fullName);
// // //                 setShowSuccess(true);
// // //                 setTimeout(() => {
// // //                     window.location.href = '/admin/dashboard';
// // //                 }, 2000);
// // //             }
// // //         } catch (error) {
// // //             if (error.response) {
// // //                 setErrorMessage('Invalid email or password.');
// // //             } else if (error.request) {
// // //                 setErrorMessage('Network error. Please check your connection.');
// // //             } else {
// // //                 setErrorMessage('An unexpected error occurred.');
// // //             }
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
// // //             <div className="w-full max-w-md">
// // //                 {/* Header with Adventure Theme */}
// // //                 <div className="text-center mb-10">
// // //                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg mb-4">
// // //                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
// // //                         </svg>
// // //                     </div>
// // //                     <h1 className="text-3xl font-bold text-gray-800 mb-2">
// // //                         Adventure start here
// // //                     </h1>
// // //                     <p className="text-gray-600 mb-6">
// // //                         Create an account to Join Our Community
// // //                     </p>
// // //                 </div>

// // //                 {/* Login Card */}
// // //                 <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
// // //                     <div className="p-8">
// // //                         {/* Welcome Header */}
// // //                         <div className="text-center mb-10">
// // //                             <h2 className="text-2xl font-bold text-gray-800 mb-2">
// // //                                 Hello ! Welcome back
// // //                             </h2>
// // //                             <p className="text-gray-500">Sign in to continue your journey</p>
// // //                         </div>

// // //                         {/* Success Message */}
// // //                         {showSuccess && (
// // //                             <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
// // //                                 <div className="flex items-center">
// // //                                     <div className="flex-shrink-0">
// // //                                         <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
// // //                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // //                                         </svg>
// // //                                     </div>
// // //                                     <div className="ml-3">
// // //                                         <p className="text-sm font-medium text-green-800">
// // //                                             Welcome back, <span className="font-bold">{username}</span>!
// // //                                         </p>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         {/* Error Message */}
// // //                         {errorMessage && (
// // //                             <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
// // //                                 <div className="flex items-center">
// // //                                     <div className="flex-shrink-0">
// // //                                         <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
// // //                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // //                                         </svg>
// // //                                     </div>
// // //                                     <div className="ml-3">
// // //                                         <p className="text-sm font-medium text-red-800">{errorMessage}</p>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         {/* Login Form */}
// // //                         <form onSubmit={handleLogin} className="space-y-6">
// // //                             {/* Email Field */}
// // //                             <div className="space-y-2">
// // //                                 <label className="block text-sm font-medium text-gray-700">
// // //                                     Email
// // //                                 </label>
// // //                                 <div className="relative">
// // //                                     <input
// // //                                         type="email"
// // //                                         value={email}
// // //                                         onChange={(e) => setEmail(e.target.value)}
// // //                                         required
// // //                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 pl-12"
// // //                                         placeholder="Enter your email address"
// // //                                     />
// // //                                     <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
// // //                                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
// // //                                         </svg>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Password Field */}
// // //                             <div className="space-y-2">
// // //                                 <label className="block text-sm font-medium text-gray-700">
// // //                                     Password
// // //                                 </label>
// // //                                 <div className="relative">
// // //                                     <input
// // //                                         type="password"
// // //                                         value={password}
// // //                                         onChange={(e) => setPassword(e.target.value)}
// // //                                         required
// // //                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 pl-12"
// // //                                         placeholder="********"
// // //                                     />
// // //                                     <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
// // //                                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
// // //                                         </svg>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Remember Me and Forgot Password */}
// // //                             <div className="flex items-center justify-between">
// // //                                 <div className="flex items-center">
// // //                                     <input
// // //                                         type="checkbox"
// // //                                         id="remember"
// // //                                         checked={rememberMe}
// // //                                         onChange={(e) => setRememberMe(e.target.checked)}
// // //                                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// // //                                     />
// // //                                     <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
// // //                                         Remember me
// // //                                     </label>
// // //                                 </div>
// // //                                 <button
// // //                                     type="button"
// // //                                     className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition duration-200"
// // //                                 >
// // //                                     Reset Password!
// // //                                 </button>
// // //                             </div>

// // //                             {/* Login Button */}
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition duration-200 ${
// // //                                     isSubmitting
// // //                                         ? 'bg-indigo-400 cursor-not-allowed'
// // //                                         : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
// // //                                 }`}
// // //                             >
// // //                                 {isSubmitting ? (
// // //                                     <span className="flex items-center justify-center">
// // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                                         </svg>
// // //                                         Logging in...
// // //                                     </span>
// // //                                 ) : (
// // //                                     'Login'
// // //                                 )}
// // //                             </button>

// // //                             {/* Divider */}
// // //                             <div className="relative">
// // //                                 <div className="absolute inset-0 flex items-center">
// // //                                     <div className="w-full border-t border-gray-200"></div>
// // //                                 </div>
// // //                                 <div className="relative flex justify-center text-sm">
// // //                                     <span className="px-2 bg-white text-gray-500">or</span>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Social Login Buttons */}
// // //                             <div className="grid grid-cols-2 gap-3">
// // //                                 <button
// // //                                     type="button"
// // //                                     className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center justify-center"
// // //                                 >
// // //                                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                                         <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
// // //                                     </svg>
// // //                                     Facebook
// // //                                 </button>
// // //                                 <button
// // //                                     type="button"
// // //                                     className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center justify-center"
// // //                                 >
// // //                                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                                         <path fill="#4285F4" d="M23.766 12.276c0-.815-.066-1.635-.207-2.438H12.24v4.621h6.482c-.26 1.562-1.169 2.89-2.488 3.788v3.127h3.872c2.28-2.107 3.59-5.21 3.59-8.898z" />
// // //                                         <path fill="#34A853" d="M12.24 24c3.24 0 5.966-1.062 7.955-2.896l-3.872-3.127c-1.075.71-2.465 1.125-4.083 1.125-3.13 0-5.784-2.112-6.737-4.952H1.517v3.239C3.553 21.644 7.533 24 12.24 24z" />
// // //                                         <path fill="#FBBC05" d="M5.503 14.15c-.23-.69-.36-1.427-.36-2.15 0-.723.13-1.46.36-2.15V6.611H1.517C.552 8.39 0 10.39 0 12.5c0 2.11.552 4.11 1.517 5.889l4.015-3.239z" />
// // //                                         <path fill="#EA4335" d="M12.24 4.75c1.77 0 3.345.61 4.6 1.81l3.427-3.426C18.203 1.08 15.48 0 12.24 0 7.533 0 3.553 2.356 1.517 6.611l4.015 3.239c.953-2.84 3.607-4.952 6.737-4.952z" />
// // //                                     </svg>
// // //                                     Google
// // //                                 </button>
// // //                             </div>

// // //                             {/* Create Account Link */}
// // //                             <div className="text-center pt-4">
// // //                                 <p className="text-gray-600">
// // //                                     Don't Have an account?{' '}
// // //                                     <button
// // //                                         type="button"
// // //                                         className="font-semibold text-indigo-600 hover:text-indigo-500 transition duration-200"
// // //                                         onClick={() => window.location.href = '/admin/register'}
// // //                                     >
// // //                                         Create Account
// // //                                     </button>
// // //                                 </p>
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                 </div>

// // //                 {/* Footer */}
// // //                 <div className="mt-8 text-center text-gray-500 text-sm">
// // //                     <p>© {new Date().getFullYear()} Fair Rent A Car. All rights reserved.</p>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default LoginPage;



// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const LoginPage = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [showSuccess, setShowSuccess] = useState(false);
// //     const [username, setUsername] = useState(''); // Store the username after successful login

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         setErrorMessage('');
// //         setIsSubmitting(true);

// //         try {
// //             // Prepare the payload for login
// //             const loginData = {
// //                 email: email,
// //                 password: password,
// //             };

// //             const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 timeout: 30000,
// //             });

// //             // If login is successful, set the username and show success message
// //             if (response.status === 200) {
// //                 setUsername(response.data.fullName);  // Assuming 'fullName' is the username
// //                 setShowSuccess(true);
// //                 // Redirect to dashboard after 2 seconds
// //                 setTimeout(() => {
// //                     window.location.href = '/admin/dashboard'; // Update with your dashboard route
// //                 }, 2000);
// //             }
// //         } catch (error) {
// //             // Handle different error responses
// //             if (error.response) {
// //                 // Error from server
// //                 setErrorMessage('Invalid email or password.');
// //             } else if (error.request) {
// //                 // No response from the server
// //                 setErrorMessage('Network error. Please check your connection.');
// //             } else {
// //                 // Other errors
// //                 setErrorMessage('An unexpected error occurred.');
// //             }
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// //             <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
// //                 {/* Left Section - Car Adventure Theme */}
// //                 <div className="md:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
// //                     {/* Background Pattern */}
// //                     <div className="absolute inset-0 opacity-10">
// //                         <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
// //                         <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
// //                         <div className="absolute top-1/2 left-1/3 w-12 h-12 border-4 border-white rounded-full"></div>
// //                     </div>

// //                     <div className="relative z-10">
// //                         {/* Logo/Brand Section */}
// //                         <div className="mb-8">
// //                             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
// //                                 {/* <img src="Fair_Rent_A_Car_Club/frac_frontend/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" /> */}
// //                                 <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
// //                             </div>
// //                             <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
// //                             <p className="text-teal-300 text-lg font-medium">Your Journey Begins Here</p>
// //                         </div>

// //                         {/* Tagline */}
// //                         <div className="mb-10">
// //                             <h2 className="text-2xl font-bold mb-3">Premium Car Rental Experience</h2>
// //                             <p className="text-teal-200 leading-relaxed">
// //                                 Join thousands of satisfied customers who trust us for their travel adventures. 
// //                                 From economy to luxury, we have the perfect vehicle for every journey.
// //                             </p>
// //                         </div>

// //                         {/* Features List */}
// //                         <div className="space-y-4 mb-12">
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>24/7 Roadside Assistance</span>
// //                             </div>
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>Flexible Rental Plans</span>
// //                             </div>
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>Wide Range of Vehicles</span>
// //                             </div>
// //                         </div>

// //                         {/* Join Button */}
// //                         <div className="mt-8">
// //                             <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg">
// //                                 Explore Our Fleet
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Right Section - Admin Login */}
// //                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
// //                     {/* Admin Portal Header */}
// //                     <div className="mb-8 text-center">
// //                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
// //                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                             </svg>
// //                         </div>
// //                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h2>
// //                         <p className="text-gray-600">Manage your fleet and customer bookings</p>
// //                     </div>

// //                     {/* Success Message */}
// //                     {showSuccess && (
// //                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// //                             <p className="text-green-700 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                                 </svg>
// //                                 Welcome back, <span className="font-bold text-lg text-green-700">{username}</span>! Redirecting to dashboard...
// //                             </p>
// //                         </div>
// //                     )}

// //                     {/* Error Message */}
// //                     {errorMessage && (
// //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// //                             <p className="text-red-700 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// //                                 </svg>
// //                                 {errorMessage}
// //                             </p>
// //                         </div>
// //                     )}

// //                     <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto w-full">
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
// //                             <div className="relative">
// //                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                                     </svg>
// //                                 </div>
// //                                 <input
// //                                     type="email"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     required
// //                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
// //                                     placeholder="admin@fairrentacar.com"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// //                             <div className="relative">
// //                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                                     </svg>
// //                                 </div>
// //                                 <input
// //                                     type="password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     required
// //                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
// //                                     placeholder="••••••••"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="flex justify-between items-center">
// //                             <div className="flex items-center">
// //                                 <input
// //                                     type="checkbox"
// //                                     id="remember"
// //                                     className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// //                                 />
// //                                 <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
// //                                     Remember me
// //                                 </label>
// //                             </div>
// //                             <a href="/admin/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
// //                                 Forgot Password?
// //                             </a>
// //                         </div>

// //                         <div>
// //                             <button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
// //                                     isSubmitting
// //                                         ? 'bg-teal-400 cursor-not-allowed'
// //                                         : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
// //                                 } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
// //                             >
// //                                 {isSubmitting ? (
// //                                     <>
// //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                                         </svg>
// //                                         Authenticating...
// //                                     </>
// //                                 ) : (
// //                                     <>
// //                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
// //                                         </svg>
// //                                         Access Admin Dashboard
// //                                     </>
// //                                 )}
// //                             </button>
// //                         </div>

// //                         <div className="text-center pt-4 border-t border-gray-200">
// //                             <p className="text-gray-600 text-sm">
// //                                 Need help? <a href="/contact" className="text-teal-600 hover:text-teal-800 font-medium">Contact Support</a>
// //                             </p>
// //                             <p className="text-gray-500 text-xs mt-2">
// //                                 © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// //                             </p>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginPage;




// import React, { useState } from 'react';
// import axios from 'axios';

// const CustomerLoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [customerName, setCustomerName] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setErrorMessage('');
//         setIsSubmitting(true);

//         try {
//             // Prepare the payload for login
//             const loginData = {
//                 email: email,
//                 password: password,
//             };

//             const response = await axios.post('http://localhost:8080/api/v1/customer/login', loginData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 timeout: 30000,
//             });

//             // If login is successful, set the customer name and show success message
//             if (response.status === 200) {
//                 // Assuming response contains firstName and lastName
//                 const fullName = `${response.data.firstName} ${response.data.lastName}`;
//                 setCustomerName(fullName);
//                 setShowSuccess(true);
//                 // Redirect to customer dashboard after 2 seconds
//                 setTimeout(() => {
//                     window.location.href = '/customer/dashboard';
//                 }, 2000);
//             }
//         } catch (error) {
//             // Handle different error responses
//             if (error.response) {
//                 // Error from server
//                 if (error.response.status === 401) {
//                     setErrorMessage('Invalid email or password.');
//                 } else if (error.response.status === 404) {
//                     setErrorMessage('Customer not found.');
//                 } else {
//                     setErrorMessage('Login failed. Please try again.');
//                 }
//             } else if (error.request) {
//                 // No response from the server
//                 setErrorMessage('Network error. Please check your connection.');
//             } else {
//                 // Other errors
//                 setErrorMessage('An unexpected error occurred.');
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
//                             <h2 className="text-2xl font-bold mb-3">Premium Car Rental Experience</h2>
//                             <p className="text-teal-200 leading-relaxed">
//                                 Join thousands of satisfied customers who trust us for their travel adventures. 
//                                 From economy to luxury, we have the perfect vehicle for every journey.
//                             </p>
//                         </div>

//                         {/* Features List */}
//                         <div className="space-y-4 mb-12">
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>24/7 Roadside Assistance</span>
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
//                                 <span>Wide Range of Vehicles</span>
//                             </div>
//                         </div>

//                         {/* Register Button */}
//                         <div className="mt-8">
//                             <a href="/customer/register" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
//                                 Create New Account
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Customer Login */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
//                     {/* Customer Portal Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Portal</h2>
//                         <p className="text-gray-600">Access your bookings and manage your profile</p>
//                     </div>

//                     {/* Success Message */}
//                     {showSuccess && (
//                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                             <p className="text-green-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                                 Welcome back, <span className="font-bold text-lg text-green-700">{customerName}</span>! Redirecting to dashboard...
//                             </p>
//                         </div>
//                     )}

//                     {/* Error Message */}
//                     {errorMessage && (
//                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                             <p className="text-red-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                 </svg>
//                                 {errorMessage}
//                             </p>
//                         </div>
//                     )}

//                     <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto w-full">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                                     placeholder="customer@example.com"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                                     placeholder="••••••••"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex justify-between items-center">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id="remember"
//                                     className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
//                                     Remember me
//                                 </label>
//                             </div>
//                             <a href="/customer/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
//                                 Forgot Password?
//                             </a>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
//                                     isSubmitting
//                                         ? 'bg-teal-400 cursor-not-allowed'
//                                         : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
//                                 } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Authenticating...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                                         </svg>
//                                         Sign In to Your Account
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         <div className="text-center pt-4 border-t border-gray-200">
//                             <p className="text-gray-600 text-sm">
//                                 Don't have an account? <a href="/customer/register" className="text-teal-600 hover:text-teal-800 font-medium">Create one here</a>
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

// export default CustomerLoginPage;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomerLoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [customerName, setCustomerName] = useState('');

    // Get the redirect path from location state or default to customer dashboard
    const from = location.state?.from || '/customer/dashboard';

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsSubmitting(true);

        try {
            const loginData = {
                email: email,
                password: password,
            };

            const response = await axios.post('http://localhost:8080/api/v1/customer/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                const customerData = response.data;
                
                // Store customer data in localStorage
                localStorage.setItem('customerToken', 'authenticated');
                localStorage.setItem('customerId', customerData.id);
                localStorage.setItem('customerName', `${customerData.firstName} ${customerData.lastName}`);
                localStorage.setItem('customerEmail', customerData.email);
                localStorage.setItem('customerData', JSON.stringify(customerData));
                
                setCustomerName(`${customerData.firstName} ${customerData.lastName}`);
                setShowSuccess(true);
                
                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 2000);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('Invalid email or password.');
                } else {
                    setErrorMessage('Login failed. Please try again.');
                }
            } else if (error.request) {
                setErrorMessage('Network error. Please check your connection.');
            } else {
                setErrorMessage('An unexpected error occurred.');
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
                            <p className="text-teal-300 text-lg font-medium">Your Journey Begins Here</p>
                        </div>

                        {/* Tagline */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3">Premium Car Rental Experience</h2>
                            <p className="text-teal-200 leading-relaxed">
                                Join thousands of satisfied customers who trust us for their travel adventures. 
                                From economy to luxury, we have the perfect vehicle for every journey.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 Roadside Assistance</span>
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
                                <span>Wide Range of Vehicles</span>
                            </div>
                        </div>

                        {/* Register Button */}
                        <div className="mt-8">
                            <a href="/customer/register" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
                                Create New Account
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Login</h2>
                        <p className="text-gray-600">Access your account to book vehicles</p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="text-green-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Welcome back, <span className="font-bold text-lg text-green-700">{customerName}</span>! Redirecting...
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

                    <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto w-full">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                    placeholder="customer@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <a href="/customer/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
                                Forgot Password?
                            </a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
                                    isSubmitting
                                        ? 'bg-teal-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
                                } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        Sign In
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Don't have an account? <a href="/customer/register" className="text-teal-600 hover:text-teal-800 font-medium">Create one here</a>
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

export default CustomerLoginPage;