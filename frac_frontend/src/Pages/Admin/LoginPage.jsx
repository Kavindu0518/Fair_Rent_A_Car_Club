// // // // // // import React, { useState } from 'react';

// // // // // // const LoginPage = () => {
// // // // // //     const [username, setUsername] = useState('');
// // // // // //     const [password, setPassword] = useState('');
// // // // // //     const [errorMessage, setErrorMessage] = useState('');

// // // // // //     const handleLogin = async (e) => {
// // // // // //         e.preventDefault();

// // // // // //         try {
// // // // // //             // Simulate API call or use actual API if needed
// // // // // //             // const response = await axios.post('/api/v1/admin/login', {
// // // // // //             //     username,
// // // // // //             //     password,
// // // // // //             // });

// // // // // //             // Mocking successful login for now
// // // // // //             if (username === 'admin' && password === 'admin123') {
// // // // // //                 window.location.href = '/dashboard';
// // // // // //             } else {
// // // // // //                 setErrorMessage('Invalid credentials, please try again');
// // // // // //             }
// // // // // //         // eslint-disable-next-line no-unused-vars
// // // // // //         } catch (error) {
// // // // // //             setErrorMessage('Error while logging in. Please try again.');
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // //             <div className="bg-white p-6 rounded-md shadow-md w-80">
// // // // // //                 <h2 className="text-xl font-semibold text-center mb-4">Admin Login</h2>
// // // // // //                 {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
// // // // // //                 <form onSubmit={handleLogin}>
// // // // // //                     <div className="mb-4">
// // // // // //                         <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
// // // // // //                         <input
// // // // // //                             type="text"
// // // // // //                             id="username"
// // // // // //                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
// // // // // //                             value={username}
// // // // // //                             onChange={(e) => setUsername(e.target.value)}
// // // // // //                             required
// // // // // //                         />
// // // // // //                     </div>
// // // // // //                     <div className="mb-4">
// // // // // //                         <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
// // // // // //                         <input
// // // // // //                             type="password"
// // // // // //                             id="password"
// // // // // //                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
// // // // // //                             value={password}
// // // // // //                             onChange={(e) => setPassword(e.target.value)}
// // // // // //                             required
// // // // // //                         />
// // // // // //                     </div>
// // // // // //                     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
// // // // // //                         Login
// // // // // //                     </button>
// // // // // //                 </form>
// // // // // //                 <p className="mt-4 text-sm text-center">
// // // // // //                     Don't have an account? <a href="/register" className="text-blue-600">Register here</a>
// // // // // //                 </p>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default LoginPage;




// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const LoginPage = () => {
// // // // //     const [username, setUsername] = useState('');
// // // // //     const [password, setPassword] = useState('');
// // // // //     const [errorMessage, setErrorMessage] = useState('');

// // // // //     const handleLogin = async (e) => {
// // // // //         e.preventDefault();

// // // // //         try {
// // // // //             const response = await axios.post('/api/v1/admin/login', {
// // // // //                 username,
// // // // //                 password,
// // // // //             });

// // // // //             if (response.status === 200) {
// // // // //                 window.location.href = '/dashboard';
// // // // //             }
// // // // //         } catch {
// // // // //             setErrorMessage('Invalid credentials, please try again');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="login-container">
// // // // //             <h2>Admin Login</h2>
// // // // //             {errorMessage && <p className="error">{errorMessage}</p>}
// // // // //             <form onSubmit={handleLogin}>
// // // // //                 <div>
// // // // //                     <label>Username</label>
// // // // //                     <input
// // // // //                         type="text"
// // // // //                         value={username}
// // // // //                         onChange={(e) => setUsername(e.target.value)}
// // // // //                     />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                     <label>Password</label>
// // // // //                     <input
// // // // //                         type="password"
// // // // //                         value={password}
// // // // //                         onChange={(e) => setPassword(e.target.value)}
// // // // //                     />
// // // // //                 </div>
// // // // //                 <button type="submit">Login</button>
// // // // //             </form>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default LoginPage;



// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const LoginPage = () => {
// // // //     const [username, setUsername] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const [errorMessage, setErrorMessage] = useState('');

// // // //     const handleLogin = async (e) => {
// // // //         e.preventDefault();

// // // //         try {
// // // //             const response = await axios.post('/api/v1/admin/login', {
// // // //                 username,
// // // //                 password,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 window.location.href = '/dashboard'; // Redirect to dashboard or another page
// // // //             }
// // // //         } catch {
// // // //             setErrorMessage('Invalid credentials, please try again');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="login-container">
// // // //             <h2>Admin Login</h2>
// // // //             {errorMessage && <p className="error">{errorMessage}</p>}
// // // //             <form onSubmit={handleLogin}>
// // // //                 <div>
// // // //                     <label>Username</label>
// // // //                     <input
// // // //                         type="text"
// // // //                         value={username}
// // // //                         onChange={(e) => setUsername(e.target.value)}
// // // //                     />
// // // //                 </div>
// // // //                 <div>
// // // //                     <label>Password</label>
// // // //                     <input
// // // //                         type="password"
// // // //                         value={password}
// // // //                         onChange={(e) => setPassword(e.target.value)}
// // // //                     />
// // // //                 </div>
// // // //                 <button type="submit">Login</button>
// // // //             </form>
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

// // //             // If login is successful, redirect to admin dashboard or home page
// // //             if (response.status === 200) {
// // //                 window.location.href = '/admin/dashboard'; // Update with your dashboard route
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
// // //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
// // //             <div className="max-w-2xl mx-auto">
// // //                 {/* Header */}
// // //                 <div className="text-center mb-8">
// // //                     <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg mb-4">
// // //                         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
// // //                         </svg>
// // //                     </div>
// // //                     <h1 className="text-4xl font-bold text-blue-900 mb-2">
// // //                         FAIR RENT A CAR
// // //                     </h1>
// // //                     <p className="text-gray-600">Admin Login Portal</p>
// // //                 </div>

// // //                 {/* Login Form Card */}
// // //                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // //                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
// // //                         <h2 className="text-2xl font-bold text-white">Admin Login</h2>
// // //                         <p className="text-blue-100 mt-1">Login to manage Fair Rent A Car system</p>
// // //                     </div>

// // //                     {/* Form Content */}
// // //                     <div className="p-8">
// // //                         {/* Error Message */}
// // //                         {errorMessage && (
// // //                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// // //                                 <p className="text-red-700 flex items-center">
// // //                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-8a8 8 0 11-16 0 8 8 0 0116 0zM10 6a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1z" clipRule="evenodd" />
// // //                                     </svg>
// // //                                     {errorMessage}
// // //                                 </p>
// // //                             </div>
// // //                         )}

// // //                         {/* Login Form */}
// // //                         <form onSubmit={handleLogin} className="space-y-6">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
// // //                                 <input
// // //                                     type="email"
// // //                                     value={email}
// // //                                     onChange={(e) => setEmail(e.target.value)}
// // //                                     required
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // //                                     placeholder="you@example.com"
// // //                                 />
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
// // //                                 <input
// // //                                     type="password"
// // //                                     value={password}
// // //                                     onChange={(e) => setPassword(e.target.value)}
// // //                                     required
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// // //                                     placeholder="••••••••"
// // //                                 />
// // //                             </div>

// // //                             <div className="pt-6">
// // //                                 <button
// // //                                     type="submit"
// // //                                     disabled={isSubmitting}
// // //                                     className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
// // //                                         isSubmitting
// // //                                             ? 'bg-blue-400 cursor-not-allowed'
// // //                                             : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-0.5'
// // //                                     } text-white shadow-lg hover:shadow-xl`}
// // //                                 >
// // //                                     {isSubmitting ? (
// // //                                         <span className="flex items-center justify-center">
// // //                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // //                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                                             </svg>
// // //                                             Logging In...
// // //                                         </span>
// // //                                     ) : (
// // //                                         'Login to Admin Panel'
// // //                                     )}
// // //                                 </button>
// // //                             </div>

// // //                             <div className="text-center pt-4 border-t border-gray-200">
// // //                                 <p className="text-gray-600">
// // //                                     Don't have an account?{' '}
// // //                                     <a
// // //                                         href="/register"
// // //                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
// // //                                     >
// // //                                         Register here
// // //                                     </a>
// // //                                 </p>
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                 </div>

// // //                 {/* Footer */}
// // //                 <div className="mt-6 text-center text-gray-500 text-sm">
// // //                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
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
// //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
// //             <div className="max-w-2xl mx-auto">
// //                 {/* Header */}
// //                 <div className="text-center mb-8">
// //                     <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg mb-4">
// //                         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
// //                         </svg>
// //                     </div>
// //                     <h1 className="text-4xl font-bold text-blue-900 mb-2">
// //                         FAIR RENT A CAR CLUB
// //                     </h1>
// //                     <p className="text-gray-600">Admin Login Portal</p>
// //                 </div>

// //                 {/* Login Form Card */}
// //                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
// //                         <h2 className="text-2xl font-bold text-white">Admin Login</h2>
// //                         <p className="text-blue-100 mt-1">Login to manage Fair Rent A Car system</p>
// //                     </div>

// //                     {/* Form Content */}
// //                     <div className="p-8">
// //                         {/* Success Message */}
// //                         {showSuccess && (
// //                             <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
// //                                 <p className="text-green-700 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                                     </svg>
// //                                     Login successful! Welcome back, <span className="font-bold text-lg text-green-700"> {username}</span>.
// //                                 </p>
// //                             </div>
// //                         )}

// //                         {/* Error Message */}
// //                         {errorMessage && (
// //                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
// //                                 <p className="text-red-700 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// //                                     </svg>
// //                                     {errorMessage}
// //                                 </p>
// //                             </div>
// //                         )}

// //                         {/* Login Form */}
// //                         <form onSubmit={handleLogin} className="space-y-6">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
// //                                 <input
// //                                     type="email"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     required
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                     placeholder="you@example.com"
// //                                 />
// //                             </div>

// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
// //                                 <input
// //                                     type="password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     required
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                     placeholder="••••••••"
// //                                 />
// //                             </div>

// //                             <div className="pt-6">
// //                                 <button
// //                                     type="submit"
// //                                     disabled={isSubmitting}
// //                                     className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
// //                                         isSubmitting
// //                                             ? 'bg-blue-400 cursor-not-allowed'
// //                                             : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-0.5'
// //                                     } text-white shadow-lg hover:shadow-xl`}
// //                                 >
// //                                     {isSubmitting ? (
// //                                         <span className="flex items-center justify-center">
// //                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// //                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                                             </svg>
// //                                             Logging In...
// //                                         </span>
// //                                     ) : (
// //                                         'Login to Admin Panel'
// //                                     )}
// //                                 </button>
// //                             </div>

// //                             <div className="text-center pt-4 border-t border-gray-200">
// //                                 <p className="text-gray-600">
// //                                     Don't have an account?{' '}
// //                                     <a
// //                                         href="/admin/register"
// //                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
// //                                     >
// //                                         Register here
// //                                     </a>
// //                                 </p>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>

// //                 {/* Footer */}
// //                 <div className="mt-6 text-center text-gray-500 text-sm">
// //                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginPage;



// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [username, setUsername] = useState(''); // Store the username after successful login

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

//             const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 timeout: 30000,
//             });

//             // If login is successful, set the username and show success message
//             if (response.status === 200) {
//                 setUsername(response.data.fullName);  // Assuming 'fullName' is the username
//                 setShowSuccess(true);
//                 // Redirect to dashboard after 2 seconds
//                 setTimeout(() => {
//                     window.location.href = '/admin/dashboard'; // Update with your dashboard route
//                 }, 2000);
//             }
//         } catch (error) {
//             // Handle different error responses
//             if (error.response) {
//                 // Error from server
//                 setErrorMessage('Invalid email or password.');
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
//                                 {/* <img src="Fair_Rent_A_Car_Club/frac_frontend/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" /> */}
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

//                         {/* Join Button */}
//                         <div className="mt-8">
//                             <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg">
//                                 Explore Our Fleet
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Admin Login */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
//                     {/* Admin Portal Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h2>
//                         <p className="text-gray-600">Manage your fleet and customer bookings</p>
//                     </div>

//                     {/* Success Message */}
//                     {showSuccess && (
//                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                             <p className="text-green-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                                 Welcome back, <span className="font-bold text-lg text-green-700">{username}</span>! Redirecting to dashboard...
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
//                                     placeholder="admin@fairrentacar.com"
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
//                             <a href="/admin/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
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
//                                         Access Admin Dashboard
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         <div className="text-center pt-4 border-t border-gray-200">
//                             <p className="text-gray-600 text-sm">
//                                 Need help? <a href="/contact" className="text-teal-600 hover:text-teal-800 font-medium">Contact Support</a>
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

// export default LoginPage;




// src/Pages/Admin/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [adminName, setAdminName] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsSubmitting(true);

        try {
            const loginData = {
                email: email,
                password: password,
            };

            console.log('Attempting login with:', { email });

            const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000,
            });

            console.log('Login response:', response.data);

            if (response.status === 200) {
                // IMPORTANT: Store admin data in localStorage
                const adminData = response.data;
                
                // Store essential data
                localStorage.setItem('adminToken', adminData.token || 'dummy-token');
                localStorage.setItem('adminId', adminData.id);
                localStorage.setItem('adminName', adminData.fullName || adminData.userName);
                localStorage.setItem('adminEmail', adminData.email);
                
                // Store full admin data for later use
                localStorage.setItem('adminData', JSON.stringify(adminData));
                
                setAdminName(adminData.fullName || adminData.userName);
                setShowSuccess(true);
                
                // Redirect to dashboard after 2 seconds
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 2000);
            }
        } catch (error) {
            console.error('Login error details:', error);
            
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('Invalid email or password.');
                } else if (error.response.status === 404) {
                    setErrorMessage('Admin not found.');
                } else {
                    setErrorMessage(`Error ${error.response.status}: ${error.response.data?.message || 'Login failed'}`);
                }
            } else if (error.request) {
                setErrorMessage('Network error. Please check if the server is running on http://localhost:8080');
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

                        {/* Join Button */}
                        <div className="mt-8">
                            <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg">
                                Explore Our Fleet
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Admin Login */}
                <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                    {/* Admin Portal Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h2>
                        <p className="text-gray-600">Manage your fleet and customer bookings</p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="text-green-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Welcome back, <span className="font-bold text-lg text-green-700">{adminName}</span>! Redirecting to dashboard...
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
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
                                    placeholder="admin@fairrentacar.com"
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
                            <a href="/admin/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
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
                                        Access Admin Dashboard
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Need help? <a href="/contact" className="text-teal-600 hover:text-teal-800 font-medium">Contact Support</a>
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

export default LoginPage;