// // // // import React, { useState } from 'react';

// // // // const LoginPage = () => {
// // // //     const [username, setUsername] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const [errorMessage, setErrorMessage] = useState('');

// // // //     const handleLogin = async (e) => {
// // // //         e.preventDefault();

// // // //         try {
// // // //             // Simulate API call or use actual API if needed
// // // //             // const response = await axios.post('/api/v1/admin/login', {
// // // //             //     username,
// // // //             //     password,
// // // //             // });

// // // //             // Mocking successful login for now
// // // //             if (username === 'admin' && password === 'admin123') {
// // // //                 window.location.href = '/dashboard';
// // // //             } else {
// // // //                 setErrorMessage('Invalid credentials, please try again');
// // // //             }
// // // //         // eslint-disable-next-line no-unused-vars
// // // //         } catch (error) {
// // // //             setErrorMessage('Error while logging in. Please try again.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // //             <div className="bg-white p-6 rounded-md shadow-md w-80">
// // // //                 <h2 className="text-xl font-semibold text-center mb-4">Admin Login</h2>
// // // //                 {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
// // // //                 <form onSubmit={handleLogin}>
// // // //                     <div className="mb-4">
// // // //                         <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
// // // //                         <input
// // // //                             type="text"
// // // //                             id="username"
// // // //                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
// // // //                             value={username}
// // // //                             onChange={(e) => setUsername(e.target.value)}
// // // //                             required
// // // //                         />
// // // //                     </div>
// // // //                     <div className="mb-4">
// // // //                         <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
// // // //                         <input
// // // //                             type="password"
// // // //                             id="password"
// // // //                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
// // // //                             value={password}
// // // //                             onChange={(e) => setPassword(e.target.value)}
// // // //                             required
// // // //                         />
// // // //                     </div>
// // // //                     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
// // // //                         Login
// // // //                     </button>
// // // //                 </form>
// // // //                 <p className="mt-4 text-sm text-center">
// // // //                     Don't have an account? <a href="/register" className="text-blue-600">Register here</a>
// // // //                 </p>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default LoginPage;




// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const LoginPage = () => {
// // //     const [username, setUsername] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [errorMessage, setErrorMessage] = useState('');

// // //     const handleLogin = async (e) => {
// // //         e.preventDefault();

// // //         try {
// // //             const response = await axios.post('/api/v1/admin/login', {
// // //                 username,
// // //                 password,
// // //             });

// // //             if (response.status === 200) {
// // //                 window.location.href = '/dashboard';
// // //             }
// // //         } catch {
// // //             setErrorMessage('Invalid credentials, please try again');
// // //         }
// // //     };

// // //     return (
// // //         <div className="login-container">
// // //             <h2>Admin Login</h2>
// // //             {errorMessage && <p className="error">{errorMessage}</p>}
// // //             <form onSubmit={handleLogin}>
// // //                 <div>
// // //                     <label>Username</label>
// // //                     <input
// // //                         type="text"
// // //                         value={username}
// // //                         onChange={(e) => setUsername(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>Password</label>
// // //                     <input
// // //                         type="password"
// // //                         value={password}
// // //                         onChange={(e) => setPassword(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <button type="submit">Login</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default LoginPage;



// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const LoginPage = () => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');

// //     const handleLogin = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const response = await axios.post('/api/v1/admin/login', {
// //                 username,
// //                 password,
// //             });

// //             if (response.status === 200) {
// //                 window.location.href = '/dashboard'; // Redirect to dashboard or another page
// //             }
// //         } catch {
// //             setErrorMessage('Invalid credentials, please try again');
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <h2>Admin Login</h2>
// //             {errorMessage && <p className="error">{errorMessage}</p>}
// //             <form onSubmit={handleLogin}>
// //                 <div>
// //                     <label>Username</label>
// //                     <input
// //                         type="text"
// //                         value={username}
// //                         onChange={(e) => setUsername(e.target.value)}
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password</label>
// //                     <input
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                 </div>
// //                 <button type="submit">Login</button>
// //             </form>
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

//             // If login is successful, redirect to admin dashboard or home page
//             if (response.status === 200) {
//                 window.location.href = '/admin/dashboard'; // Update with your dashboard route
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
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
//             <div className="max-w-2xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg mb-4">
//                         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
//                         </svg>
//                     </div>
//                     <h1 className="text-4xl font-bold text-blue-900 mb-2">
//                         FAIR RENT A CAR
//                     </h1>
//                     <p className="text-gray-600">Admin Login Portal</p>
//                 </div>

//                 {/* Login Form Card */}
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
//                         <h2 className="text-2xl font-bold text-white">Admin Login</h2>
//                         <p className="text-blue-100 mt-1">Login to manage Fair Rent A Car system</p>
//                     </div>

//                     {/* Form Content */}
//                     <div className="p-8">
//                         {/* Error Message */}
//                         {errorMessage && (
//                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                                 <p className="text-red-700 flex items-center">
//                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-8a8 8 0 11-16 0 8 8 0 0116 0zM10 6a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1z" clipRule="evenodd" />
//                                     </svg>
//                                     {errorMessage}
//                                 </p>
//                             </div>
//                         )}

//                         {/* Login Form */}
//                         <form onSubmit={handleLogin} className="space-y-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                                     placeholder="you@example.com"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                                     placeholder="••••••••"
//                                 />
//                             </div>

//                             <div className="pt-6">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
//                                         isSubmitting
//                                             ? 'bg-blue-400 cursor-not-allowed'
//                                             : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-0.5'
//                                     } text-white shadow-lg hover:shadow-xl`}
//                                 >
//                                     {isSubmitting ? (
//                                         <span className="flex items-center justify-center">
//                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Logging In...
//                                         </span>
//                                     ) : (
//                                         'Login to Admin Panel'
//                                     )}
//                                 </button>
//                             </div>

//                             <div className="text-center pt-4 border-t border-gray-200">
//                                 <p className="text-gray-600">
//                                     Don't have an account?{' '}
//                                     <a
//                                         href="/register"
//                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
//                                     >
//                                         Register here
//                                     </a>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-6 text-center text-gray-500 text-sm">
//                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [username, setUsername] = useState(''); // Store the username after successful login

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsSubmitting(true);

        try {
            // Prepare the payload for login
            const loginData = {
                email: email,
                password: password,
            };

            const response = await axios.post('http://localhost:8080/api/v1/admin/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000,
            });

            // If login is successful, set the username and show success message
            if (response.status === 200) {
                setUsername(response.data.fullName);  // Assuming 'fullName' is the username
                setShowSuccess(true);
                // Redirect to dashboard after 2 seconds
                setTimeout(() => {
                    window.location.href = '/admin/dashboard'; // Update with your dashboard route
                }, 2000);
            }
        } catch (error) {
            // Handle different error responses
            if (error.response) {
                // Error from server
                setErrorMessage('Invalid email or password.');
            } else if (error.request) {
                // No response from the server
                setErrorMessage('Network error. Please check your connection.');
            } else {
                // Other errors
                setErrorMessage('An unexpected error occurred.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg mb-4">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-blue-900 mb-2">
                        FAIR RENT A CAR CLUB
                    </h1>
                    <p className="text-gray-600">Admin Login Portal</p>
                </div>

                {/* Login Form Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
                        <h2 className="text-2xl font-bold text-white">Admin Login</h2>
                        <p className="text-blue-100 mt-1">Login to manage Fair Rent A Car system</p>
                    </div>

                    {/* Form Content */}
                    <div className="p-8">
                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                                <p className="text-green-700 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Login successful! Welcome back, <span className="font-bold text-lg text-green-700"> {username}</span>.
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

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 ${
                                        isSubmitting
                                            ? 'bg-blue-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-0.5'
                                    } text-white shadow-lg hover:shadow-xl`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Logging In...
                                        </span>
                                    ) : (
                                        'Login to Admin Panel'
                                    )}
                                </button>
                            </div>

                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600">
                                    Don't have an account?{' '}
                                    <a
                                        href="/admin/register"
                                        className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
                                    >
                                        Register here
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
