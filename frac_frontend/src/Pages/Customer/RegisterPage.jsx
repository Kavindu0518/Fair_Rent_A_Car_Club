// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const LoginPage = () => {
// // // // //     const [email, setEmail] = useState('');
// // // // //     const [password, setPassword] = useState('');
// // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //     const [showSuccess, setShowSuccess] = useState(false);
// // // // //     const [username, setUsername] = useState('');
// // // // //     const [rememberMe, setRememberMe] = useState(false);

// // // // //     const handleLogin = async (e) => {
// // // // //         e.preventDefault();
// // // // //         setErrorMessage('');
// // // // //         setIsSubmitting(true);

// // // // //         try {
// // // // //             // Prepare the payload for login
// // // // //             const loginData = {
// // // // //                 email: email,
// // // // //                 password: password,
// // // // //             };

// // // // //             const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json',
// // // // //                 },
// // // // //                 timeout: 30000,
// // // // //             });

// // // // //             // If login is successful, set the username and show success message
// // // // //             if (response.status === 200) {
// // // // //                 setUsername(response.data.fullName);  // Assuming 'fullName' is the username
// // // // //                 setShowSuccess(true);
// // // // //                 // Redirect to dashboard after 2 seconds
// // // // //                 setTimeout(() => {
// // // // //                     window.location.href = '/admin/dashboard'; // Update with your dashboard route
// // // // //                 }, 2000);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             // Handle different error responses
// // // // //             if (error.response) {
// // // // //                 // Error from server
// // // // //                 setErrorMessage('Invalid email or password.');
// // // // //             } else if (error.request) {
// // // // //                 // No response from the server
// // // // //                 setErrorMessage('Network error. Please check your connection.');
// // // // //             } else {
// // // // //                 // Other errors
// // // // //                 setErrorMessage('An unexpected error occurred.');
// // // // //             }
// // // // //         } finally {
// // // // //             setIsSubmitting(false);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center py-8 px-4">
// // // // //             <div className="max-w-md w-full">
// // // // //                 {/* Header Section */}
// // // // //                 <div className="text-center mb-8">
// // // // //                     <h1 className="text-3xl font-bold text-gray-800 mb-2">
// // // // //                         Adventure start here
// // // // //                     </h1>
// // // // //                     <p className="text-gray-600 mb-6">
// // // // //                         Create an account to Join Our Community
// // // // //                     </p>
                    
// // // // //                     {/* Welcome Header */}
// // // // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">
// // // // //                         Hello ! Welcome back
// // // // //                     </h2>
// // // // //                 </div>

// // // // //                 {/* Login Form Card */}
// // // // //                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // // // //                     <div className="p-8">
// // // // //                         {/* Success Message */}
// // // // //                         {showSuccess && (
// // // // //                             <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // // // //                                 <p className="text-green-700 flex items-center">
// // // // //                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // // //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // // //                                     </svg>
// // // // //                                     Login successful! Welcome back, <span className="font-bold text-lg text-green-700"> {username}</span>.
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                         )}

// // // // //                         {/* Error Message */}
// // // // //                         {errorMessage && (
// // // // //                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// // // // //                                 <p className="text-red-700 flex items-center">
// // // // //                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // // //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // // //                                     </svg>
// // // // //                                     {errorMessage}
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                         )}

// // // // //                         {/* Login Form */}
// // // // //                         <form onSubmit={handleLogin} className="space-y-6">
// // // // //                             {/* Email Field */}
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                                     Email
// // // // //                                 </label>
// // // // //                                 <input
// // // // //                                     type="email"
// // // // //                                     value={email}
// // // // //                                     onChange={(e) => setEmail(e.target.value)}
// // // // //                                     required
// // // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // // // //                                     placeholder="Enter your email address"
// // // // //                                 />
// // // // //                             </div>

// // // // //                             {/* Password Field */}
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                                     Password
// // // // //                                 </label>
// // // // //                                 <input
// // // // //                                     type="password"
// // // // //                                     value={password}
// // // // //                                     onChange={(e) => setPassword(e.target.value)}
// // // // //                                     required
// // // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // // // //                                     placeholder="********"
// // // // //                                 />
// // // // //                             </div>

// // // // //                             {/* Remember Me and Reset Password */}
// // // // //                             <div className="flex items-center justify-between">
// // // // //                                 <div className="flex items-center">
// // // // //                                     <input
// // // // //                                         type="checkbox"
// // // // //                                         id="remember"
// // // // //                                         checked={rememberMe}
// // // // //                                         onChange={(e) => setRememberMe(e.target.checked)}
// // // // //                                         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // //                                     />
// // // // //                                     <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
// // // // //                                         Remember me
// // // // //                                     </label>
// // // // //                                 </div>
// // // // //                                 <button
// // // // //                                     type="button"
// // // // //                                     className="text-sm font-medium text-blue-600 hover:text-blue-800"
// // // // //                                 >
// // // // //                                     Reset Password!
// // // // //                                 </button>
// // // // //                             </div>

// // // // //                             {/* Login Button */}
// // // // //                             <div className="pt-2">
// // // // //                                 <button
// // // // //                                     type="submit"
// // // // //                                     disabled={isSubmitting}
// // // // //                                     className={`w-full py-3 px-4 rounded-lg font-semibold text-lg transition duration-200 ${
// // // // //                                         isSubmitting
// // // // //                                             ? 'bg-blue-400 cursor-not-allowed'
// // // // //                                             : 'bg-blue-600 hover:bg-blue-700'
// // // // //                                     } text-white shadow-lg hover:shadow-xl`}
// // // // //                                 >
// // // // //                                     {isSubmitting ? (
// // // // //                                         <span className="flex items-center justify-center">
// // // // //                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // //                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                                             </svg>
// // // // //                                             Logging In...
// // // // //                                         </span>
// // // // //                                     ) : (
// // // // //                                         'Login'
// // // // //                                     )}
// // // // //                                 </button>
// // // // //                             </div>

// // // // //                             {/* Divider */}
// // // // //                             <div className="relative">
// // // // //                                 <div className="absolute inset-0 flex items-center">
// // // // //                                     <div className="w-full border-t border-gray-300"></div>
// // // // //                                 </div>
// // // // //                                 <div className="relative flex justify-center text-sm">
// // // // //                                     <span className="px-2 bg-white text-gray-500">or</span>
// // // // //                                 </div>
// // // // //                             </div>

// // // // //                             {/* Social Login Buttons */}
// // // // //                             <div className="grid grid-cols-2 gap-3">
// // // // //                                 <button
// // // // //                                     type="button"
// // // // //                                     className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center justify-center"
// // // // //                                 >
// // // // //                                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // //                                         <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
// // // // //                                     </svg>
// // // // //                                     Facebook
// // // // //                                 </button>
// // // // //                                 <button
// // // // //                                     type="button"
// // // // //                                     className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center justify-center"
// // // // //                                 >
// // // // //                                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // //                                         <path fill="#4285F4" d="M23.766 12.276c0-.815-.066-1.635-.207-2.438H12.24v4.621h6.482c-.26 1.562-1.169 2.89-2.488 3.788v3.127h3.872c2.28-2.107 3.59-5.21 3.59-8.898z" />
// // // // //                                         <path fill="#34A853" d="M12.24 24c3.24 0 5.966-1.062 7.955-2.896l-3.872-3.127c-1.075.71-2.465 1.125-4.083 1.125-3.13 0-5.784-2.112-6.737-4.952H1.517v3.239C3.553 21.644 7.533 24 12.24 24z" />
// // // // //                                         <path fill="#FBBC05" d="M5.503 14.15c-.23-.69-.36-1.427-.36-2.15 0-.723.13-1.46.36-2.15V6.611H1.517C.552 8.39 0 10.39 0 12.5c0 2.11.552 4.11 1.517 5.889l4.015-3.239z" />
// // // // //                                         <path fill="#EA4335" d="M12.24 4.75c1.77 0 3.345.61 4.6 1.81l3.427-3.426C18.203 1.08 15.48 0 12.24 0 7.533 0 3.553 2.356 1.517 6.611l4.015 3.239c.953-2.84 3.607-4.952 6.737-4.952z" />
// // // // //                                     </svg>
// // // // //                                     Google
// // // // //                                 </button>
// // // // //                             </div>

// // // // //                             {/* Create Account Link */}
// // // // //                             <div className="text-center pt-4">
// // // // //                                 <p className="text-gray-600">
// // // // //                                     Don't Have an account?{' '}
// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
// // // // //                                         onClick={() => window.location.href = '/admin/register'}
// // // // //                                     >
// // // // //                                         Create Account
// // // // //                                     </button>
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                         </form>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Footer */}
// // // // //                 <div className="mt-6 text-center text-gray-500 text-sm">
// // // // //                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default LoginPage;



// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const LoginPage = () => {
// // // //     const [email, setEmail] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const [errorMessage, setErrorMessage] = useState('');
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // //     const [showSuccess, setShowSuccess] = useState(false);
// // // //     const [username, setUsername] = useState(''); // Store the username after successful login

// // // //     const handleLogin = async (e) => {
// // // //         e.preventDefault();
// // // //         setErrorMessage('');
// // // //         setIsSubmitting(true);

// // // //         try {
// // // //             // Prepare the payload for login
// // // //             const loginData = {
// // // //                 email: email,
// // // //                 password: password,
// // // //             };

// // // //             const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json',
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             // If login is successful, set the username and show success message
// // // //             if (response.status === 200) {
// // // //                 setUsername(response.data.fullName);  // Assuming 'fullName' is the username
// // // //                 setShowSuccess(true);
// // // //                 // Redirect to dashboard after 2 seconds
// // // //                 setTimeout(() => {
// // // //                     window.location.href = '/admin/dashboard'; // Update with your dashboard route
// // // //                 }, 2000);
// // // //             }
// // // //         } catch (error) {
// // // //             // Handle different error responses
// // // //             if (error.response) {
// // // //                 // Error from server
// // // //                 setErrorMessage('Invalid email or password.');
// // // //             } else if (error.request) {
// // // //                 // No response from the server
// // // //                 setErrorMessage('Network error. Please check your connection.');
// // // //             } else {
// // // //                 // Other errors
// // // //                 setErrorMessage('An unexpected error occurred.');
// // // //             }
// // // //         } finally {
// // // //             setIsSubmitting(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
// // // //             <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
// // // //                 {/* Left Section - Welcome/Create Account */}
// // // //                 <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 md:p-12 flex flex-col justify-center">
// // // //                     <div className="mb-8">
// // // //                         <h1 className="text-4xl font-bold mb-2">Adventure start here</h1>
// // // //                         <p className="text-blue-100 text-lg">Create an account to Join Our Community</p>
// // // //                     </div>
                    
// // // //                     <div className="mt-8">
// // // //                         <button className="w-full py-3 px-6 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 transform hover:-translate-y-1 shadow-lg">
// // // //                             Create Account
// // // //                         </button>
// // // //                     </div>
                    
// // // //                     <div className="mt-12 text-center">
// // // //                         <p className="text-blue-200">Join thousands of adventurers already with us</p>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Right Section - Login Form */}
// // // //                 <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
// // // //                     <div className="mb-8">
// // // //                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Hello ! Welcome back</h2>
// // // //                         <p className="text-gray-600">Sign in to continue your adventure</p>
// // // //                     </div>

// // // //                     {/* Success Message */}
// // // //                     {showSuccess && (
// // // //                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // // //                             <p className="text-green-700 flex items-center">
// // // //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // //                                 </svg>
// // // //                                 Login successful! Welcome back, <span className="font-bold text-lg text-green-700"> {username}</span>.
// // // //                             </p>
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Error Message */}
// // // //                     {errorMessage && (
// // // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// // // //                             <p className="text-red-700 flex items-center">
// // // //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // //                                 </svg>
// // // //                                 {errorMessage}
// // // //                             </p>
// // // //                         </div>
// // // //                     )}

// // // //                     <form onSubmit={handleLogin} className="space-y-6">
// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // // //                             <input
// // // //                                 type="email"
// // // //                                 value={email}
// // // //                                 onChange={(e) => setEmail(e.target.value)}
// // // //                                 required
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // // //                                 placeholder="Enter your email address"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// // // //                             <input
// // // //                                 type="password"
// // // //                                 value={password}
// // // //                                 onChange={(e) => setPassword(e.target.value)}
// // // //                                 required
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // // //                                 placeholder="********"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="flex justify-between items-center">
// // // //                             <div className="flex items-center">
// // // //                                 <input
// // // //                                     type="checkbox"
// // // //                                     id="remember"
// // // //                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // //                                 />
// // // //                                 <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
// // // //                                     Remember me
// // // //                                 </label>
// // // //                             </div>
// // // //                             <a href="/reset-password" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
// // // //                                 Reset Password!
// // // //                             </a>
// // // //                         </div>

// // // //                         <div>
// // // //                             <button
// // // //                                 type="submit"
// // // //                                 disabled={isSubmitting}
// // // //                                 className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
// // // //                                     isSubmitting
// // // //                                         ? 'bg-blue-400 cursor-not-allowed'
// // // //                                         : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
// // // //                                 } text-white shadow-lg hover:shadow-xl`}
// // // //                             >
// // // //                                 {isSubmitting ? (
// // // //                                     <span className="flex items-center justify-center">
// // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                                         </svg>
// // // //                                         Logging In...
// // // //                                     </span>
// // // //                                 ) : (
// // // //                                     'Login'
// // // //                                 )}
// // // //                             </button>
// // // //                         </div>

// // // //                         <div className="text-center">
// // // //                             <p className="text-gray-600 text-sm">or</p>
// // // //                         </div>

// // // //                         <div className="text-center">
// // // //                             <p className="text-gray-700">
// // // //                                 Don't Have an account?{' '}
// // // //                                 <a
// // // //                                     href="/admin/register"
// // // //                                     className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
// // // //                                 >
// // // //                                     Create Account
// // // //                                 </a>
// // // //                             </p>
// // // //                         </div>
// // // //                     </form>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default LoginPage;



// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const LoginPage = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [errorMessage, setErrorMessage] = useState('');
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [showSuccess, setShowSuccess] = useState(false);
// // //     const [username, setUsername] = useState(''); // Store the username after successful login

// // //     const handleLogin = async (e) => {
// // //         e.preventDefault();
// // //         setErrorMessage('');
// // //         setIsSubmitting(true);

// // //         try {
// // //             // Prepare the payload for login
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

// // //             // If login is successful, set the username and show success message
// // //             if (response.status === 200) {
// // //                 setUsername(response.data.fullName);  // Assuming 'fullName' is the username
// // //                 setShowSuccess(true);
// // //                 // Redirect to dashboard after 2 seconds
// // //                 setTimeout(() => {
// // //                     window.location.href = '/admin/dashboard'; // Update with your dashboard route
// // //                 }, 2000);
// // //             }
// // //         } catch (error) {
// // //             // Handle different error responses
// // //             if (error.response) {
// // //                 // Error from server
// // //                 setErrorMessage('Invalid email or password.');
// // //             } else if (error.request) {
// // //                 // No response from the server
// // //                 setErrorMessage('Network error. Please check your connection.');
// // //             } else {
// // //                 // Other errors
// // //                 setErrorMessage('An unexpected error occurred.');
// // //             }
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
// // //             <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
// // //                 {/* Left Section - Car Adventure Theme */}
// // //                 <div className="md:w-2/5 bg-gradient-to-br from-blue-900 to-gray-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
// // //                     {/* Background Pattern */}
// // //                     <div className="absolute inset-0 opacity-10">
// // //                         <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
// // //                         <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
// // //                         <div className="absolute top-1/2 left-1/3 w-12 h-12 border-4 border-white rounded-full"></div>
// // //                     </div>
                    
// // //                     <div className="relative z-10">
// // //                         {/* Logo/Brand Section */}
// // //                         <div className="mb-8">
// // //                             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl mb-4">
// // //                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// // //                                 </svg>
// // //                             </div>
// // //                             <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
// // //                             <p className="text-blue-300 text-lg font-medium">Your Journey Begins Here</p>
// // //                         </div>
                        
// // //                         {/* Tagline */}
// // //                         <div className="mb-10">
// // //                             <h2 className="text-2xl font-bold mb-3">Premium Car Rental Experience</h2>
// // //                             <p className="text-blue-200 leading-relaxed">
// // //                                 Join thousands of satisfied customers who trust us for their travel adventures. 
// // //                                 From economy to luxury, we have the perfect vehicle for every journey.
// // //                             </p>
// // //                         </div>
                        
// // //                         {/* Features List */}
// // //                         <div className="space-y-4 mb-12">
// // //                             <div className="flex items-center">
// // //                                 <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// // //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                                 </svg>
// // //                                 <span>24/7 Roadside Assistance</span>
// // //                             </div>
// // //                             <div className="flex items-center">
// // //                                 <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// // //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                                 </svg>
// // //                                 <span>Flexible Rental Plans</span>
// // //                             </div>
// // //                             <div className="flex items-center">
// // //                                 <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// // //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                                 </svg>
// // //                                 <span>Wide Range of Vehicles</span>
// // //                             </div>
// // //                         </div>
                        
// // //                         {/* Join Button */}
// // //                         <div className="mt-8">
// // //                             <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200 transform hover:-translate-y-1 shadow-lg">
// // //                                 Explore Our Fleet
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Right Section - Admin Login */}
// // //                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
// // //                     {/* Admin Portal Header */}
// // //                     <div className="mb-8 text-center">
// // //                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-4">
// // //                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                             </svg>
// // //                         </div>
// // //                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h2>
// // //                         <p className="text-gray-600">Manage your fleet and customer bookings</p>
// // //                     </div>

// // //                     {/* Success Message */}
// // //                     {showSuccess && (
// // //                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// // //                             <p className="text-green-700 flex items-center">
// // //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // //                                 </svg>
// // //                                 Welcome back, <span className="font-bold text-lg text-green-700">{username}</span>! Redirecting to dashboard...
// // //                             </p>
// // //                         </div>
// // //                     )}

// // //                     {/* Error Message */}
// // //                     {errorMessage && (
// // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// // //                             <p className="text-red-700 flex items-center">
// // //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // //                                 </svg>
// // //                                 {errorMessage}
// // //                             </p>
// // //                         </div>
// // //                     )}

// // //                     <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto w-full">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
// // //                             <div className="relative">
// // //                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// // //                                     </svg>
// // //                                 </div>
// // //                                 <input
// // //                                     type="email"
// // //                                     value={email}
// // //                                     onChange={(e) => setEmail(e.target.value)}
// // //                                     required
// // //                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // //                                     placeholder="admin@fairrentacar.com"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// // //                             <div className="relative">
// // //                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                                     </svg>
// // //                                 </div>
// // //                                 <input
// // //                                     type="password"
// // //                                     value={password}
// // //                                     onChange={(e) => setPassword(e.target.value)}
// // //                                     required
// // //                                     className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // //                                     placeholder="••••••••"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex justify-between items-center">
// // //                             <div className="flex items-center">
// // //                                 <input
// // //                                     type="checkbox"
// // //                                     id="remember"
// // //                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // //                                 />
// // //                                 <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
// // //                                     Remember me
// // //                                 </label>
// // //                             </div>
// // //                             <a href="/admin/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
// // //                                 Forgot Password?
// // //                             </a>
// // //                         </div>

// // //                         <div>
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
// // //                                     isSubmitting
// // //                                         ? 'bg-blue-400 cursor-not-allowed'
// // //                                         : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
// // //                                 } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
// // //                             >
// // //                                 {isSubmitting ? (
// // //                                     <>
// // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                                         </svg>
// // //                                         Authenticating...
// // //                                     </>
// // //                                 ) : (
// // //                                     <>
// // //                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
// // //                                         </svg>
// // //                                         Access Admin Dashboard
// // //                                     </>
// // //                                 )}
// // //                             </button>
// // //                         </div>

// // //                         <div className="text-center pt-4 border-t border-gray-200">
// // //                             <p className="text-gray-600 text-sm">
// // //                                 Need help? <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact Support</a>
// // //                             </p>
// // //                             <p className="text-gray-500 text-xs mt-2">
// // //                                 © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// // //                             </p>
// // //                         </div>
// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default LoginPage;



// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const RegisterPage = () => {
// //     const [formData, setFormData] = useState({
// //         fullName: '',
// //         userName: '',
// //         password: '',
// //         email: '',
// //         contactNo: '',
// //         gender: '',
// //         role: ''
// //     });
// //     const [adminImage, setAdminImage] = useState(null);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [validationErrors, setValidationErrors] = useState({});
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [showSuccess, setShowSuccess] = useState(false);
// //     const [imagePreview, setImagePreview] = useState(null);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({
// //             ...prev,
// //             [name]: value
// //         }));
// //         // Clear validation error for this field
// //         if (validationErrors[name]) {
// //             setValidationErrors(prev => ({
// //                 ...prev,
// //                 [name]: ''
// //             }));
// //         }
// //     };

// //     const validateForm = () => {
// //         const errors = {};
        
// //         if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
// //         if (!formData.userName.trim()) errors.userName = 'Username is required';
// //         if (!formData.password) errors.password = 'Password is required';
// //         if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
// //         if (!formData.email) errors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
// //         if (!formData.contactNo) errors.contactNo = 'Contact number is required';
// //         if (!formData.gender) errors.gender = 'Gender is required';
// //         if (!formData.role) errors.role = 'Role is required';
// //         if (!adminImage) errors.adminImage = 'Profile image is required';

// //         return errors;
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             // Validate file type
// //             const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
// //             if (!validTypes.includes(file.type)) {
// //                 setValidationErrors(prev => ({
// //                     ...prev,
// //                     adminImage: 'Only JPEG, PNG, and GIF images are allowed'
// //                 }));
// //                 return;
// //             }
            
// //             // Validate file size (5MB limit)
// //             if (file.size > 5 * 1024 * 1024) {
// //                 setValidationErrors(prev => ({
// //                     ...prev,
// //                     adminImage: 'Image size must be less than 5MB'
// //                 }));
// //                 return;
// //             }
            
// //             setAdminImage(file);
            
// //             // Create preview URL
// //             const reader = new FileReader();
// //             reader.onloadend = () => {
// //                 setImagePreview(reader.result);
// //             };
// //             reader.readAsDataURL(file);
            
// //             // Clear image error
// //             if (validationErrors.adminImage) {
// //                 setValidationErrors(prev => ({
// //                     ...prev,
// //                     adminImage: ''
// //                 }));
// //             }
// //         }
// //     };

// //     const handleRegister = async (e) => {
// //         e.preventDefault();
// //         setErrorMessage('');
// //         setValidationErrors({});

// //         // Validate form
// //         const errors = validateForm();
// //         if (Object.keys(errors).length > 0) {
// //             setValidationErrors(errors);
// //             return;
// //         }

// //         setIsSubmitting(true);

// //         const submitData = new FormData();
        
// //         // Append all form fields exactly as backend expects
// //         submitData.append('fullName', formData.fullName);
// //         submitData.append('userName', formData.userName);
// //         submitData.append('password', formData.password);
// //         submitData.append('email', formData.email);
// //         submitData.append('contactNo', formData.contactNo);
// //         submitData.append('gender', formData.gender);
// //         submitData.append('role', formData.role);
// //         submitData.append('adminImage', adminImage);

// //         try {
// //             const response = await axios.post('http://localhost:8080/api/v1/admin/add', submitData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                 },
// //                 timeout: 30000,
// //             });

// //             if (response.status === 201) {
// //                 setShowSuccess(true);
// //                 // Reset form
// //                 setFormData({
// //                     fullName: '',
// //                     userName: '',
// //                     password: '',
// //                     email: '',
// //                     contactNo: '',
// //                     gender: '',
// //                     role: ''
// //                 });
// //                 setAdminImage(null);
// //                 setImagePreview(null);
                
// //                 // Auto redirect after 3 seconds
// //                 setTimeout(() => {
// //                     window.location.href = '/admin/login';
// //                 }, 3000);
// //             }
// //         } catch (error) {
// //             if (error.code === 'ECONNABORTED') {
// //                 setErrorMessage('Request timeout. Please try again.');
// //             } else if (error.response) {
// //                 if (error.response.status === 400) {
// //                     setErrorMessage('Invalid data. Please check all fields are correctly filled.');
// //                 } else if (error.response.status === 500) {
// //                     const errorData = error.response.data;
// //                     if (errorData && errorData.fullName) {
// //                         if (errorData.fullName.includes("email")) {
// //                             setErrorMessage('Email already exists. Please use a different email.');
// //                         } else {
// //                             setErrorMessage(errorData.fullName || 'Server error occurred.');
// //                         }
// //                     } else {
// //                         setErrorMessage('Server error. Please try again later.');
// //                     }
// //                 } else {
// //                     setErrorMessage(`Error ${error.response.status}: Registration failed`);
// //                 }
// //             } else if (error.request) {
// //                 setErrorMessage('Cannot connect to server. Please make sure the backend is running on http://localhost:8080');
// //             } else {
// //                 setErrorMessage('An unexpected error occurred. Please try again.');
// //             }
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// //             <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
// //                 {/* Left Section - Car Adventure Theme (Same as Login) */}
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
// //                                 <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
// //                             </div>
// //                             <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
// //                             <p className="text-teal-300 text-lg font-medium">Your Journey Begins Here</p>
// //                         </div>

// //                         {/* Tagline */}
// //                         <div className="mb-10">
// //                             <h2 className="text-2xl font-bold mb-3">Join Our Admin Team</h2>
// //                             <p className="text-teal-200 leading-relaxed">
// //                                 Become part of our premium car rental service management team. 
// //                                 Help us deliver exceptional service to thousands of customers.
// //                             </p>
// //                         </div>

// //                         {/* Features List */}
// //                         <div className="space-y-4 mb-12">
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>Manage Fleet & Bookings</span>
// //                             </div>
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>Access Analytics Dashboard</span>
// //                             </div>
// //                             <div className="flex items-center">
// //                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
// //                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                                 </svg>
// //                                 <span>Priority Support & Training</span>
// //                             </div>
// //                         </div>

// //                         {/* Login Button */}
// //                         <div className="mt-8">
// //                             <a href="/admin/login">
// //                                 <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg">
// //                                     Already have an account? Sign In
// //                                 </button>
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Right Section - Registration Form */}
// //                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
// //                     {/* Admin Registration Header */}
// //                     <div className="mb-8 text-center">
// //                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
// //                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
// //                             </svg>
// //                         </div>
// //                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Registration</h2>
// //                         <p className="text-gray-600">Create your admin account to get started</p>
// //                     </div>

// //                     {/* Success Message */}
// //                     {showSuccess && (
// //                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded animate-fade-in">
// //                             <div className="flex">
// //                                 <div className="flex-shrink-0">
// //                                     <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
// //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                                     </svg>
// //                                 </div>
// //                                 <div className="ml-3">
// //                                     <p className="text-sm text-green-700">
// //                                         Registration successful! Redirecting to login page...
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}

// //                     {/* Error Message */}
// //                     {errorMessage && !showSuccess && (
// //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded animate-shake">
// //                             <div className="flex">
// //                                 <div className="flex-shrink-0">
// //                                     <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
// //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// //                                     </svg>
// //                                 </div>
// //                                 <div className="ml-3">
// //                                     <p className="text-sm text-red-700">
// //                                         {errorMessage}
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}

// //                     <form onSubmit={handleRegister} className="space-y-6 max-w-2xl mx-auto w-full">
// //                         {/* Two Column Grid for Inputs */}
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                             {/* Full Name */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Full Name *
// //                                 </label>
// //                                 <div className="relative">
// //                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                                         </svg>
// //                                     </div>
// //                                     <input
// //                                         type="text"
// //                                         name="fullName"
// //                                         value={formData.fullName}
// //                                         onChange={handleChange}
// //                                         className={`w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
// //                                             validationErrors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         placeholder="John Doe"
// //                                     />
// //                                 </div>
// //                                 {validationErrors.fullName && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
// //                                 )}
// //                             </div>

// //                             {/* Username */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Username *
// //                                 </label>
// //                                 <div className="relative">
// //                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                                         </svg>
// //                                     </div>
// //                                     <input
// //                                         type="text"
// //                                         name="userName"
// //                                         value={formData.userName}
// //                                         onChange={handleChange}
// //                                         className={`w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
// //                                             validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         placeholder="johndoe"
// //                                     />
// //                                 </div>
// //                                 {validationErrors.userName && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
// //                                 )}
// //                             </div>

// //                             {/* Password */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Password *
// //                                 </label>
// //                                 <div className="relative">
// //                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                                         </svg>
// //                                     </div>
// //                                     <input
// //                                         type="password"
// //                                         name="password"
// //                                         value={formData.password}
// //                                         onChange={handleChange}
// //                                         className={`w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
// //                                             validationErrors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         placeholder="••••••••"
// //                                     />
// //                                 </div>
// //                                 {validationErrors.password && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
// //                                 )}
// //                             </div>

// //                             {/* Email */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Email *
// //                                 </label>
// //                                 <div className="relative">
// //                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //                                         </svg>
// //                                     </div>
// //                                     <input
// //                                         type="email"
// //                                         name="email"
// //                                         value={formData.email}
// //                                         onChange={handleChange}
// //                                         className={`w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
// //                                             validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         placeholder="admin@fairrentacar.com"
// //                                     />
// //                                 </div>
// //                                 {validationErrors.email && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
// //                                 )}
// //                             </div>

// //                             {/* Contact Number */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Contact Number *
// //                                 </label>
// //                                 <div className="relative">
// //                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //                                         </svg>
// //                                     </div>
// //                                     <input
// //                                         type="tel"
// //                                         name="contactNo"
// //                                         value={formData.contactNo}
// //                                         onChange={handleChange}
// //                                         className={`w-full pl-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
// //                                             validationErrors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         placeholder="+94 77 123 4567"
// //                                     />
// //                                 </div>
// //                                 {validationErrors.contactNo && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
// //                                 )}
// //                             </div>

// //                             {/* Gender */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Gender *
// //                                 </label>
// //                                 <select
// //                                     name="gender"
// //                                     value={formData.gender}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
// //                                         validationErrors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 >
// //                                     <option value="">Select Gender</option>
// //                                     <option value="MALE">Male</option>
// //                                     <option value="FEMALE">Female</option>
// //                                     <option value="OTHER">Other</option>
// //                                 </select>
// //                                 {validationErrors.gender && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.gender}</p>
// //                                 )}
// //                             </div>

// //                             {/* Role */}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Role *
// //                                 </label>
// //                                 <select
// //                                     name="role"
// //                                     value={formData.role}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
// //                                         validationErrors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 >
// //                                     <option value="">Select Role</option>
// //                                     <option value="ADMIN">Admin</option>
// //                                     <option value="USER">User</option>
// //                                 </select>
// //                                 {validationErrors.role && (
// //                                     <p className="mt-1 text-sm text-red-600">{validationErrors.role}</p>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         {/* Profile Image Upload */}
// //                         <div className="space-y-4">
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Profile Image *
// //                             </label>
// //                             <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
// //                                 validationErrors.adminImage 
// //                                     ? 'border-red-500 bg-red-50' 
// //                                     : adminImage 
// //                                         ? 'border-green-500 bg-green-50' 
// //                                         : 'border-gray-300 hover:border-teal-400 hover:bg-teal-50'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="adminImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/jpeg,image/jpg,image/png,image/gif"
// //                                 />
// //                                 <label htmlFor="adminImage" className="cursor-pointer block">
// //                                     {adminImage ? (
// //                                         <div className="flex flex-col items-center">
// //                                             <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
// //                                                 <img 
// //                                                     src={imagePreview} 
// //                                                     alt="Preview" 
// //                                                     className="w-full h-full object-cover"
// //                                                 />
// //                                             </div>
// //                                             <p className="text-sm font-medium text-green-700">
// //                                                 {adminImage.name}
// //                                             </p>
// //                                             <p className="text-xs text-green-600 mt-1">
// //                                                 Click to change image
// //                                             </p>
// //                                         </div>
// //                                     ) : (
// //                                         <div className="flex flex-col items-center">
// //                                             <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-dashed border-gray-300 flex items-center justify-center mb-3">
// //                                                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                                 </svg>
// //                                             </div>
// //                                             <p className="text-sm text-gray-600">
// //                                                 Click to upload profile image
// //                                             </p>
// //                                         </div>
// //                                     )}
// //                                     <p className="text-xs text-gray-500 mt-2">
// //                                         Supported: JPEG, PNG, GIF • Max 5MB
// //                                     </p>
// //                                 </label>
// //                             </div>
// //                             {validationErrors.adminImage && (
// //                                 <p className="mt-1 text-sm text-red-600">{validationErrors.adminImage}</p>
// //                             )}
// //                         </div>

// //                         {/* Submit Button */}
// //                         <div className="pt-4">
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
// //                                         Creating Account...
// //                                     </>
// //                                 ) : (
// //                                     <>
// //                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
// //                                         </svg>
// //                                         Create Admin Account
// //                                     </>
// //                                 )}
// //                             </button>
// //                         </div>

// //                         {/* Login Link */}
// //                         <div className="text-center pt-4 border-t border-gray-200">
// //                             <p className="text-gray-600">
// //                                 Already have an account?{' '}
// //                                 <a
// //                                     href="/admin/login"
// //                                     className="text-teal-600 hover:text-teal-800 font-medium hover:underline"
// //                                 >
// //                                     Sign in here
// //                                 </a>
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

// // export default RegisterPage;


// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterPage = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         userName: '',
//         password: '',
//         email: '',
//         contactNo: '',
//         gender: '',
//         role: ''
//     });
//     const [adminImage, setAdminImage] = useState(null);
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
        
//         if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
//         if (!formData.userName.trim()) errors.userName = 'Username is required';
//         if (!formData.password) errors.password = 'Password is required';
//         if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
//         if (!formData.email) errors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
//         if (!formData.contactNo) errors.contactNo = 'Contact number is required';
//         if (!formData.gender) errors.gender = 'Gender is required';
//         if (!formData.role) errors.role = 'Role is required';
//         if (!adminImage) errors.adminImage = 'Profile image is required';

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
//                     adminImage: 'Only JPEG, PNG, and GIF images are allowed'
//                 }));
//                 return;
//             }
            
//             // Validate file size (5MB limit)
//             if (file.size > 5 * 1024 * 1024) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     adminImage: 'Image size must be less than 5MB'
//                 }));
//                 return;
//             }
            
//             setAdminImage(file);
//             // Clear image error
//             if (validationErrors.adminImage) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     adminImage: ''
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
//         submitData.append('fullName', formData.fullName);
//         submitData.append('userName', formData.userName);
//         submitData.append('password', formData.password);
//         submitData.append('email', formData.email);
//         submitData.append('contactNo', formData.contactNo);
//         submitData.append('gender', formData.gender);
//         submitData.append('role', formData.role);
//         submitData.append('adminImage', adminImage);

//         try {
//             // Log what we're sending
//             console.log('Form Data:');
//             for (let [key, value] of submitData.entries()) {
//                 console.log(`${key}:`, value);
//             }

//             const response = await axios.post('http://localhost:8080/api/v1/admin/add', submitData, {
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
//                     fullName: '',
//                     userName: '',
//                     password: '',
//                     email: '',
//                     contactNo: '',
//                     gender: '',
//                     role: ''
//                 });
//                 setAdminImage(null);
                
//                 // Auto redirect after 3 seconds
//                 setTimeout(() => {
//                     window.location.href = '/login';
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
                
//                 if (error.response.status === 400) {
//                     setErrorMessage('Invalid data. Please check all fields are correctly filled.');
//                 } else if (error.response.status === 500) {
//                     const errorData = error.response.data;
//                     if (errorData && errorData.fullName) {
//                         // This is the error from AdminOutputDTO.error()
//                         if (errorData.fullName.includes("email")) {
//                             setErrorMessage('Email already exists. Please use a different email.');
//                         } else {
//                             setErrorMessage(errorData.fullName || 'Server error occurred.');
//                         }
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
//                             <h2 className="text-2xl font-bold mb-3">Admin Registration</h2>
//                             <p className="text-teal-200 leading-relaxed">
//                                 Create a new admin account to manage fleet operations, customer bookings, 
//                                 and oversee the entire rental system.
//                             </p>
//                         </div>

//                         {/* Features List */}
//                         <div className="space-y-4 mb-12">
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Full System Management Access</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Real-time Booking Monitoring</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Advanced Analytics & Reports</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>Secure Admin Authentication</span>
//                             </div>
//                         </div>

//                         {/* Login Link */}
//                         <div className="mt-8">
//                             <a href="/login" className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center">
//                                 Already Registered? Sign In
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Admin Registration Form */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
//                     {/* Admin Registration Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Admin Account</h2>
//                         <p className="text-gray-600">Register for administrative access to the system</p>
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
//                                         Full Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                             validationErrors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="John Doe"
//                                     />
//                                     {validationErrors.fullName && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
//                                     )}
//                                 </div>

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
//                                         placeholder="johndoe"
//                                     />
//                                     {validationErrors.userName && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
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
//                                         placeholder="admin@fairrentacar.com"
//                                     />
//                                     {validationErrors.email && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
//                                     )}
//                                 </div>
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

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Contact Number *
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="contactNo"
//                                     value={formData.contactNo}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
//                                         validationErrors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="+94 77 123 4567"
//                                 />
//                                 {validationErrors.contactNo && (
//                                     <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Additional Information */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                 </svg>
//                                 Additional Information
//                             </h3>

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
//                                         Role *
//                                     </label>
//                                     <select
//                                         name="role"
//                                         value={formData.role}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
//                                             validationErrors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Role</option>
//                                         <option value="ADMIN">Admin</option>
//                                         <option value="USER">User</option>
//                                     </select>
//                                     {validationErrors.role && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.role}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Profile Image - REQUIRED based on your backend */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                                 Profile Image *
//                             </h3>

//                             <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
//                                 validationErrors.adminImage 
//                                     ? 'border-red-500 bg-red-50' 
//                                     : adminImage 
//                                         ? 'border-teal-500 bg-teal-50' 
//                                         : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="adminImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/jpeg,image/jpg,image/png,image/gif"
//                                 />
//                                 <label htmlFor="adminImage" className="cursor-pointer">
//                                     {adminImage ? (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             <p className="text-sm font-medium text-teal-700">
//                                                 {adminImage.name}
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
//                             {validationErrors.adminImage && (
//                                 <p className="mt-1 text-sm text-red-600">{validationErrors.adminImage}</p>
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
//                                         Create Admin Account
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         {/* Login Link */}
//                         <div className="text-center pt-4 border-t border-gray-200">
//                             <p className="text-gray-600 text-sm">
//                                 Already have an account? <a href="/login" className="text-teal-600 hover:text-teal-800 font-medium">Sign in here</a>
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

// export default RegisterPage;





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
                
                if (error.response.status === 400 || error.response.status === 500) {
                    const errorData = error.response.data;
                    if (typeof errorData === 'string') {
                        setErrorMessage(errorData);
                    } else if (errorData && errorData.errorMessage) {
                        setErrorMessage(errorData.errorMessage);
                    } else if (errorData && errorData.includes && errorData.includes("email")) {
                        setErrorMessage('Email already exists. Please use a different email.');
                    } else if (errorData && errorData.includes && errorData.includes("NIC")) {
                        setErrorMessage('NIC/Passport number already exists. Please use a different one.');
                    } else if (errorData && errorData.includes && errorData.includes("contact number")) {
                        setErrorMessage('Contact number already exists. Please use a different one.');
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