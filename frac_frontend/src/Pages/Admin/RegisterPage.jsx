// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const RegisterPage = () => {
// // //     const [fullName, setFullName] = useState('');
// // //     const [userName, setUserName] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [email, setEmail] = useState('');
// // //     const [contactNo, setContactNo] = useState('');
// // //     const [gender, setGender] = useState('');
// // //     const [role, setRole] = useState('');
// // //     const [adminImage, setAdminImage] = useState(null);
// // //     const [errorMessage, setErrorMessage] = useState('');

// // //     const handleRegister = async (e) => {
// // //         e.preventDefault();

// // //         const formData = new FormData();
// // //         formData.append('fullName', fullName);
// // //         formData.append('userName', userName);
// // //         formData.append('password', password);
// // //         formData.append('email', email);
// // //         formData.append('contactNo', contactNo);
// // //         formData.append('gender', gender);
// // //         formData.append('role', role);
// // //         formData.append('adminImage', adminImage);

// // //         try {
// // //             const response = await axios.post('/api/v1/admin/add', formData, {
// // //                 headers: {
// // //                     'Content-Type': 'multipart/form-data',
// // //                 },
// // //             });

// // //             if (response.status === 201) {
// // //                 window.location.href = '/login';
// // //             }
// // //         } catch (error) {
// // //             setErrorMessage('Error during registration. Please try again.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="register-container">
// // //             <h2>Admin Registration</h2>
// // //             {errorMessage && <p className="error">{errorMessage}</p>}
// // //             <form onSubmit={handleRegister}>
// // //                 <div>
// // //                     <label>Full Name</label>
// // //                     <input
// // //                         type="text"
// // //                         value={fullName}
// // //                         onChange={(e) => setFullName(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>User Name</label>
// // //                     <input
// // //                         type="text"
// // //                         value={userName}
// // //                         onChange={(e) => setUserName(e.target.value)}
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
// // //                 <div>
// // //                     <label>Email</label>
// // //                     <input
// // //                         type="email"
// // //                         value={email}
// // //                         onChange={(e) => setEmail(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>Contact No</label>
// // //                     <input
// // //                         type="text"
// // //                         value={contactNo}
// // //                         onChange={(e) => setContactNo(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>Gender</label>
// // //                     <select value={gender} onChange={(e) => setGender(e.target.value)}>
// // //                         <option value="MALE">Male</option>
// // //                         <option value="FEMALE">Female</option>
// // //                     </select>
// // //                 </div>
// // //                 <div>
// // //                     <label>Role</label>
// // //                     <select value={role} onChange={(e) => setRole(e.target.value)}>
// // //                         <option value="ADMIN">Admin</option>
// // //                         <option value="USER">User</option>
// // //                     </select>
// // //                 </div>
// // //                 <div>
// // //                     <label>Admin Image</label>
// // //                     <input
// // //                         type="file"
// // //                         onChange={(e) => setAdminImage(e.target.files[0])}
// // //                     />
// // //                 </div>
// // //                 <button type="submit">Register</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default RegisterPage;



// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const RegisterPage = () => {
// // //     const [fullName, setFullName] = useState('');
// // //     const [userName, setUserName] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [email, setEmail] = useState('');
// // //     const [contactNo, setContactNo] = useState('');
// // //     const [gender, setGender] = useState('');
// // //     const [role, setRole] = useState('');
// // //     const [adminImage, setAdminImage] = useState(null);
// // //     const [errorMessage, setErrorMessage] = useState('');

// // //     const handleRegister = async (e) => {
// // //         e.preventDefault();

// // //         const formData = new FormData();
// // //         formData.append('fullName', fullName);
// // //         formData.append('userName', userName);
// // //         formData.append('password', password);
// // //         formData.append('email', email);
// // //         formData.append('contactNo', contactNo);
// // //         formData.append('gender', gender);
// // //         formData.append('role', role);
// // //         formData.append('adminImage', adminImage);

// // //         try {
// // //             const response = await axios.post('/api/v1/admin/add', formData, {
// // //                 headers: {
// // //                     'Content-Type': 'multipart/form-data',
// // //                 },
// // //             });

// // //             if (response.status === 201) {
// // //                 window.location.href = '/login';
// // //             }
// // //         } catch {
// // //             setErrorMessage('Error during registration. Please try again.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="register-container">
// // //             <h2>Admin Registration</h2>
// // //             {errorMessage && <p className="error">{errorMessage}</p>}
// // //             <form onSubmit={handleRegister}>
// // //                 <div>
// // //                     <label>Full Name</label>
// // //                     <input
// // //                         type="text"
// // //                         value={fullName}
// // //                         onChange={(e) => setFullName(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>User Name</label>
// // //                     <input
// // //                         type="text"
// // //                         value={userName}
// // //                         onChange={(e) => setUserName(e.target.value)}
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
// // //                 <div>
// // //                     <label>Email</label>
// // //                     <input
// // //                         type="email"
// // //                         value={email}
// // //                         onChange={(e) => setEmail(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>Contact No</label>
// // //                     <input
// // //                         type="text"
// // //                         value={contactNo}
// // //                         onChange={(e) => setContactNo(e.target.value)}
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label>Gender</label>
// // //                     <select value={gender} onChange={(e) => setGender(e.target.value)}>
// // //                         <option value="MALE">Male</option>
// // //                         <option value="FEMALE">Female</option>
// // //                     </select>
// // //                 </div>
// // //                 <div>
// // //                     <label>Role</label>
// // //                     <select value={role} onChange={(e) => setRole(e.target.value)}>
// // //                         <option value="ADMIN">Admin</option>
// // //                         <option value="USER">User</option>
// // //                     </select>
// // //                 </div>
// // //                 <div>
// // //                     <label>Admin Image</label>
// // //                     <input
// // //                         type="file"
// // //                         onChange={(e) => setAdminImage(e.target.files[0])}
// // //                     />
// // //                 </div>
// // //                 <button type="submit">Register</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default RegisterPage;



// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const RegisterPage = () => {
// //     const [fullName, setFullName] = useState('');
// //     const [userName, setUserName] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [contactNo, setContactNo] = useState('');
// //     const [gender, setGender] = useState('');
// //     const [role, setRole] = useState('');
// //     const [adminImage, setAdminImage] = useState(null);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     const handleRegister = async (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setErrorMessage('');

// //         const formData = new FormData();
// //         formData.append('fullName', fullName);
// //         formData.append('userName', userName);
// //         formData.append('password', password);
// //         formData.append('email', email);
// //         formData.append('contactNo', contactNo);
// //         formData.append('gender', gender);
// //         formData.append('role', role);
// //         if (adminImage) {
// //             formData.append('adminImage', adminImage);
// //         }

// //         try {
// //             const response = await axios.post('/api/v1/admin/add', formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                 },
// //             });

// //             if (response.status === 201) {
// //                 window.location.href = '/login';
// //             }
// //         } catch (error) {
// //             setErrorMessage(error.response?.data?.message || 'Error during registration. Please try again.');
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
// //             <div className="max-w-2xl mx-auto">
// //                 {/* Header */}
// //                 <div className="text-center mb-8">
// //                     <h1 className="text-4xl font-bold text-blue-900 mb-2">
// //                         FAIR RENT A CAR
// //                     </h1>
// //                     <p className="text-gray-600">Admin Registration Portal</p>
// //                 </div>

// //                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //                     {/* Decorative Header */}
// //                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
// //                         <h2 className="text-2xl font-bold text-white">Create Admin Account</h2>
// //                         <p className="text-blue-100 mt-1">Register for administrative access</p>
// //                     </div>

// //                     {/* Form Container */}
// //                     <div className="p-8">
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

// //                         <form onSubmit={handleRegister} className="space-y-6">
// //                             {/* Personal Information Section */}
// //                             <div className="border-b pb-6">
// //                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                                     </svg>
// //                                     Personal Information
// //                                 </h3>
                                
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Full Name *
// //                                         </label>
// //                                         <input
// //                                             type="text"
// //                                             required
// //                                             value={fullName}
// //                                             onChange={(e) => setFullName(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                             placeholder="Enter your full name"
// //                                         />
// //                                     </div>

// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Username *
// //                                         </label>
// //                                         <input
// //                                             type="text"
// //                                             required
// //                                             value={userName}
// //                                             onChange={(e) => setUserName(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                             placeholder="Choose a username"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Account Security Section */}
// //                             <div className="border-b pb-6">
// //                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                                     </svg>
// //                                     Account Security
// //                                 </h3>
                                
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Password *
// //                                         </label>
// //                                         <input
// //                                             type="password"
// //                                             required
// //                                             value={password}
// //                                             onChange={(e) => setPassword(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                             placeholder="Create a strong password"
// //                                         />
// //                                     </div>

// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Email Address *
// //                                         </label>
// //                                         <input
// //                                             type="email"
// //                                             required
// //                                             value={email}
// //                                             onChange={(e) => setEmail(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                             placeholder="you@example.com"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Contact Information */}
// //                             <div className="border-b pb-6">
// //                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //                                     </svg>
// //                                     Contact Information
// //                                 </h3>

// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                         Contact Number *
// //                                     </label>
// //                                     <input
// //                                         type="tel"
// //                                         required
// //                                         value={contactNo}
// //                                         onChange={(e) => setContactNo(e.target.value)}
// //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
// //                                         placeholder="+1 (555) 123-4567"
// //                                     />
// //                                 </div>
// //                             </div>

// //                             {/* Additional Information */}
// //                             <div className="border-b pb-6">
// //                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //                                     </svg>
// //                                     Additional Information
// //                                 </h3>

// //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Gender *
// //                                         </label>
// //                                         <select
// //                                             required
// //                                             value={gender}
// //                                             onChange={(e) => setGender(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
// //                                         >
// //                                             <option value="">Select Gender</option>
// //                                             <option value="MALE">Male</option>
// //                                             <option value="FEMALE">Female</option>
// //                                         </select>
// //                                     </div>

// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                             Role *
// //                                         </label>
// //                                         <select
// //                                             required
// //                                             value={role}
// //                                             onChange={(e) => setRole(e.target.value)}
// //                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
// //                                         >
// //                                             <option value="">Select Role</option>
// //                                             <option value="ADMIN">Admin</option>
// //                                             <option value="USER">User</option>
// //                                         </select>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Profile Image */}
// //                             <div>
// //                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                     </svg>
// //                                     Profile Image
// //                                 </h3>

// //                                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition duration-200">
// //                                     <input
// //                                         type="file"
// //                                         id="adminImage"
// //                                         onChange={(e) => setAdminImage(e.target.files[0])}
// //                                         className="hidden"
// //                                         accept="image/*"
// //                                     />
// //                                     <label htmlFor="adminImage" className="cursor-pointer">
// //                                         <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                         </svg>
// //                                         <span className="text-sm text-gray-600">
// //                                             {adminImage ? adminImage.name : 'Click to upload profile image'}
// //                                         </span>
// //                                         <p className="text-xs text-gray-500 mt-2">
// //                                             PNG, JPG, GIF up to 5MB
// //                                         </p>
// //                                     </label>
// //                                 </div>
// //                             </div>

// //                             {/* Submit Button */}
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
// //                                             Creating Account...
// //                                         </span>
// //                                     ) : (
// //                                         'Create Admin Account'
// //                                     )}
// //                                 </button>
// //                             </div>

// //                             {/* Login Link */}
// //                             <div className="text-center pt-4">
// //                                 <p className="text-gray-600">
// //                                     Already have an account?{' '}
// //                                     <a
// //                                         href="/login"
// //                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
// //                                     >
// //                                         Sign in here
// //                                     </a>
// //                                 </p>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>

// //                 {/* Footer Note */}
// //                 <div className="mt-6 text-center text-gray-500 text-sm">
// //                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
// //                     <p className="mt-1">Secure registration powered by our administrative system</p>
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
//         role: '',
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

//         const submitData = new FormData();
//         Object.keys(formData).forEach(key => {
//             submitData.append(key, formData[key]);
//         });
        
//         if (adminImage) {
//             submitData.append('adminImage', adminImage);
//         }

//         try {
//             // For debugging - log what we're sending
//             console.log('Submitting form data:');
//             for (let pair of submitData.entries()) {
//                 console.log(pair[0] + ': ' + pair[1]);
//             }

//             const response = await axios.post('/api/v1/admin/add', submitData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 timeout: 10000, // 10 second timeout
//             });

//             console.log('Response:', response);

//             if (response.status === 201) {
//                 setShowSuccess(true);
//                 // Auto redirect after 2 seconds
//                 setTimeout(() => {
//                     window.location.href = '/login';
//                 }, 2000);
//             }
//         } catch (error) {
//             console.error('Registration error:', error);
            
//             if (error.response) {
//                 // Server responded with error
//                 console.error('Error response:', error.response.data);
                
//                 if (error.response.status === 400) {
//                     // Handle validation errors from server
//                     if (error.response.data.errors) {
//                         const serverErrors = {};
//                         error.response.data.errors.forEach(err => {
//                             serverErrors[err.field] = err.message;
//                         });
//                         setValidationErrors(serverErrors);
//                     } else {
//                         setErrorMessage(error.response.data.message || 'Invalid data. Please check your inputs.');
//                     }
//                 } else if (error.response.status === 409) {
//                     setErrorMessage('Username or email already exists. Please try another.');
//                 } else if (error.response.status === 500) {
//                     setErrorMessage('Server error. Please try again later.');
//                 } else {
//                     setErrorMessage(error.response.data?.message || `Error ${error.response.status}: Registration failed`);
//                 }
//             } else if (error.request) {
//                 // Request was made but no response
//                 console.error('No response received:', error.request);
//                 setErrorMessage('Network error. Please check your connection and try again.');
//             } else {
//                 // Something else happened
//                 setErrorMessage('An unexpected error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
//             <div className="max-w-2xl mx-auto">
//                 <div className="text-center mb-8">
//                     <h1 className="text-4xl font-bold text-blue-900 mb-2">
//                         FAIR RENT A CAR
//                     </h1>
//                     <p className="text-gray-600">Admin Registration Portal</p>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
//                         <h2 className="text-2xl font-bold text-white">Create Admin Account</h2>
//                         <p className="text-blue-100 mt-1">Register for administrative access</p>
//                     </div>

//                     <div className="p-8">
//                         {/* Success Message */}
//                         {showSuccess && (
//                             <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                                 <p className="text-green-700 flex items-center">
//                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                     </svg>
//                                     Registration successful! Redirecting to login...
//                                 </p>
//                             </div>
//                         )}

//                         {/* Error Message */}
//                         {errorMessage && !showSuccess && (
//                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                                 <div className="flex">
//                                     <div className="flex-shrink-0">
//                                         <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-3">
//                                         <h3 className="text-sm font-medium text-red-800">Registration Failed</h3>
//                                         <div className="mt-2 text-sm text-red-700">
//                                             <p>{errorMessage}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         <form onSubmit={handleRegister} className="space-y-6">
//                             {/* Personal Information */}
//                             <div className="border-b pb-6">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                                     </svg>
//                                     Personal Information
//                                 </h3>
                                
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Full Name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             value={formData.fullName}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
//                                                 validationErrors.fullName ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                             placeholder="Enter your full name"
//                                         />
//                                         {validationErrors.fullName && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Username *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="userName"
//                                             value={formData.userName}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
//                                                 validationErrors.userName ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                             placeholder="Choose a username"
//                                         />
//                                         {validationErrors.userName && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Account Security */}
//                             <div className="border-b pb-6">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                     </svg>
//                                     Account Security
//                                 </h3>
                                
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Password *
//                                         </label>
//                                         <input
//                                             type="password"
//                                             name="password"
//                                             value={formData.password}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
//                                                 validationErrors.password ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                             placeholder="Create a strong password"
//                                         />
//                                         {validationErrors.password && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Email Address *
//                                         </label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
//                                                 validationErrors.email ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                             placeholder="you@example.com"
//                                         />
//                                         {validationErrors.email && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Contact Information */}
//                             <div className="border-b pb-6">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                     Contact Information
//                                 </h3>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Contact Number *
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="contactNo"
//                                         value={formData.contactNo}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
//                                             validationErrors.contactNo ? 'border-red-500' : 'border-gray-300'
//                                         }`}
//                                         placeholder="+1 (555) 123-4567"
//                                     />
//                                     {validationErrors.contactNo && (
//                                         <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Additional Information */}
//                             <div className="border-b pb-6">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                     </svg>
//                                     Additional Information
//                                 </h3>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Gender *
//                                         </label>
//                                         <select
//                                             name="gender"
//                                             value={formData.gender}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white ${
//                                                 validationErrors.gender ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         >
//                                             <option value="">Select Gender</option>
//                                             <option value="MALE">Male</option>
//                                             <option value="FEMALE">Female</option>
//                                         </select>
//                                         {validationErrors.gender && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.gender}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Role *
//                                         </label>
//                                         <select
//                                             name="role"
//                                             value={formData.role}
//                                             onChange={handleChange}
//                                             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white ${
//                                                 validationErrors.role ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         >
//                                             <option value="">Select Role</option>
//                                             <option value="ADMIN">Admin</option>
//                                             <option value="USER">User</option>
//                                         </select>
//                                         {validationErrors.role && (
//                                             <p className="mt-1 text-sm text-red-600">{validationErrors.role}</p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Profile Image */}
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                     Profile Image (Optional)
//                                 </h3>

//                                 <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
//                                     validationErrors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
//                                 }`}>
//                                     <input
//                                         type="file"
//                                         id="adminImage"
//                                         onChange={(e) => setAdminImage(e.target.files[0])}
//                                         className="hidden"
//                                         accept="image/*"
//                                     />
//                                     <label htmlFor="adminImage" className="cursor-pointer">
//                                         <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                         </svg>
//                                         <span className="text-sm text-gray-600">
//                                             {adminImage ? adminImage.name : 'Click to upload profile image (optional)'}
//                                         </span>
//                                         <p className="text-xs text-gray-500 mt-2">
//                                             PNG, JPG, GIF up to 5MB
//                                         </p>
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Debug Section (remove in production) */}
//                             <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                                 <h4 className="text-sm font-medium text-gray-700 mb-2">Debug Info:</h4>
//                                 <pre className="text-xs text-gray-600 overflow-auto">
//                                     API Endpoint: /api/v1/admin/add
//                                     Form Data: {JSON.stringify(formData, null, 2)}
//                                     Image: {adminImage ? adminImage.name : 'No image selected'}
//                                 </pre>
//                             </div>

//                             {/* Submit Button */}
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
//                                             Creating Account...
//                                         </span>
//                                     ) : (
//                                         'Create Admin Account'
//                                     )}
//                                 </button>
//                             </div>

//                             {/* Login Link */}
//                             <div className="text-center pt-4">
//                                 <p className="text-gray-600">
//                                     Already have an account?{' '}
//                                     <a
//                                         href="/login"
//                                         className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
//                                     >
//                                         Sign in here
//                                     </a>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="mt-6 text-center text-gray-500 text-sm">
//                     <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
//                     <p className="mt-1">Secure registration powered by our administrative system</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;


import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: '',
        email: '',
        contactNo: '',
        gender: '',
        role: ''
    });
    const [adminImage, setAdminImage] = useState(null);
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
        
        if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
        if (!formData.userName.trim()) errors.userName = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
        if (!formData.email) errors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.contactNo) errors.contactNo = 'Contact number is required';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.role) errors.role = 'Role is required';
        if (!adminImage) errors.adminImage = 'Profile image is required';

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
                    adminImage: 'Only JPEG, PNG, and GIF images are allowed'
                }));
                return;
            }
            
            // Validate file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                setValidationErrors(prev => ({
                    ...prev,
                    adminImage: 'Image size must be less than 5MB'
                }));
                return;
            }
            
            setAdminImage(file);
            // Clear image error
            if (validationErrors.adminImage) {
                setValidationErrors(prev => ({
                    ...prev,
                    adminImage: ''
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
        submitData.append('fullName', formData.fullName);
        submitData.append('userName', formData.userName);
        submitData.append('password', formData.password);
        submitData.append('email', formData.email);
        submitData.append('contactNo', formData.contactNo);
        submitData.append('gender', formData.gender);
        submitData.append('role', formData.role);
        submitData.append('adminImage', adminImage);

        try {
            // Log what we're sending
            console.log('Form Data:');
            for (let [key, value] of submitData.entries()) {
                console.log(`${key}:`, value);
            }

            const response = await axios.post('http://localhost:8080/api/v1/admin/add', submitData, {
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
                    fullName: '',
                    userName: '',
                    password: '',
                    email: '',
                    contactNo: '',
                    gender: '',
                    role: ''
                });
                setAdminImage(null);
                
                // Auto redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = '/login';
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
                
                if (error.response.status === 400) {
                    setErrorMessage('Invalid data. Please check all fields are correctly filled.');
                } else if (error.response.status === 500) {
                    const errorData = error.response.data;
                    if (errorData && errorData.fullName) {
                        // This is the error from AdminOutputDTO.error()
                        if (errorData.fullName.includes("email")) {
                            setErrorMessage('Email already exists. Please use a different email.');
                        } else {
                            setErrorMessage(errorData.fullName || 'Server error occurred.');
                        }
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
                        FAIR RENT A CAR
                    </h1>
                    <p className="text-gray-600">Admin Registration Portal</p>
                </div>

                {/* Registration Form Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
                        <h2 className="text-2xl font-bold text-white">Create Admin Account</h2>
                        <p className="text-blue-100 mt-1">Register for administrative access to Fair Rent A Car system</p>
                    </div>

                    {/* Form Content */}
                    <div className="p-8">
                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded animate-fade-in">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-green-800">Registration Successful!</h3>
                                        <div className="mt-2 text-sm text-green-700">
                                            <p>Your admin account has been created successfully. Redirecting to login page...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {errorMessage && !showSuccess && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded animate-shake">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">Registration Failed</h3>
                                        <div className="mt-2 text-sm text-red-700">
                                            <p>{errorMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleRegister} className="space-y-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Personal Information
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                                                validationErrors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="John Doe"
                                        />
                                        {validationErrors.fullName && (
                                            <p className="mt-1 text-sm text-red-600">{validationErrors.fullName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Username *
                                        </label>
                                        <input
                                            type="text"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                                                validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="johndoe"
                                        />
                                        {validationErrors.userName && (
                                            <p className="mt-1 text-sm text-red-600">{validationErrors.userName}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Account Security */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
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
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                                                validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="admin@fairrentacar.com"
                                        />
                                        {validationErrors.email && (
                                            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Contact Information
                                </h3>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                                            validationErrors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="+94 77 123 4567"
                                    />
                                    {validationErrors.contactNo && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.contactNo}</p>
                                    )}
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Additional Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Gender *
                                        </label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white ${
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
                                            Role *
                                        </label>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white ${
                                                validationErrors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Select Role</option>
                                            <option value="ADMIN">Admin</option>
                                            <option value="USER">User</option>
                                        </select>
                                        {validationErrors.role && (
                                            <p className="mt-1 text-sm text-red-600">{validationErrors.role}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image - REQUIRED based on your backend */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Profile Image *
                                </h3>

                                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
                                    validationErrors.adminImage 
                                        ? 'border-red-500 bg-red-50' 
                                        : adminImage 
                                            ? 'border-green-500 bg-green-50' 
                                            : 'border-gray-300 hover:border-blue-400'
                                }`}>
                                    <input
                                        type="file"
                                        id="adminImage"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        accept="image/jpeg,image/jpg,image/png,image/gif"
                                    />
                                    <label htmlFor="adminImage" className="cursor-pointer">
                                        {adminImage ? (
                                            <>
                                                <svg className="w-12 h-12 mx-auto text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-sm font-medium text-green-700">
                                                    {adminImage.name}
                                                </p>
                                                <p className="text-xs text-green-600 mt-1">
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
                                {validationErrors.adminImage && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.adminImage}</p>
                                )}
                            </div>

                            {/* Debug Info - Can be removed in production */}
                            {/* <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Form Data:</h4>
                                <pre className="text-xs text-gray-600 overflow-auto">
                                    {JSON.stringify({
                                        ...formData,
                                        adminImage: adminImage ? `File: ${adminImage.name} (${adminImage.size} bytes)` : 'No file'
                                    }, null, 2)}
                                </pre>
                            </div> */}

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:-translate-y-0.5 ${
                                        isSubmitting
                                            ? 'bg-blue-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                                    } text-white shadow-lg hover:shadow-xl`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating Account...
                                        </span>
                                    ) : (
                                        'Create Admin Account'
                                    )}
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600">
                                    Already have an account?{' '}
                                    <a
                                        href="/login"
                                        className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 hover:underline"
                                    >
                                        Sign in here
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} FAIR RENT A CAR Service. All rights reserved.</p>
                    <p className="mt-1">Secure admin registration portal</p>
                </div>
            </div>

            {/* Add some custom animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default RegisterPage;