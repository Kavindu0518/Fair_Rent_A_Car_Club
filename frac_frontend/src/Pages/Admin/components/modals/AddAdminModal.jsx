// // // src/Pages/Admin/components/modals/AddAdminModal.jsx
// // import React, { useState } from 'react';

// // const AddAdminModal = ({ onClose, onSave, BASE_URL }) => {
// //     const [formData, setFormData] = useState({
// //         fullName: '',
// //         userName: '',
// //         password: '',
// //         email: '',
// //         contactNo: '',
// //         gender: '',
// //         role: 'ADMIN'
// //     });
// //     const [adminImage, setAdminImage] = useState(null);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
// //         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
// //         if (!formData.password) newErrors.password = 'Password is required';
// //         if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
// //         if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
// //         if (!formData.gender) newErrors.gender = 'Gender is required';
// //         if (!formData.role) newErrors.role = 'Role is required';
// //         if (!adminImage) newErrors.adminImage = 'Profile image is required';
// //         return newErrors;
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({ ...prev, [name]: value }));
// //         if (errors[name]) {
// //             setErrors(prev => ({ ...prev, [name]: '' }));
// //         }
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             if (!file.type.startsWith('image/')) {
// //                 setErrors(prev => ({ ...prev, adminImage: 'Please select an image file' }));
// //                 return;
// //             }
// //             if (file.size > 5 * 1024 * 1024) {
// //                 setErrors(prev => ({ ...prev, adminImage: 'Image size must be less than 5MB' }));
// //                 return;
// //             }
// //             setAdminImage(file);
// //             setErrors(prev => ({ ...prev, adminImage: '' }));
// //         }
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const validationErrors = validateForm();
// //         if (Object.keys(validationErrors).length > 0) {
// //             setErrors(validationErrors);
// //             return;
// //         }

// //         setIsSubmitting(true);
// //         const submitData = new FormData();
// //         Object.keys(formData).forEach(key => submitData.append(key, formData[key]));
// //         if (adminImage) submitData.append('adminImage', adminImage);

// //         await onSave(submitData);
// //         setIsSubmitting(false);
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Add New Admin</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Full Name <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="fullName"
// //                                     value={formData.fullName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="John Doe"
// //                                 />
// //                                 {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Username <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="userName"
// //                                     value={formData.userName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="johndoe"
// //                                 />
// //                                 {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Email <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     value={formData.email}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="admin@example.com"
// //                                 />
// //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Password <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="password"
// //                                     name="password"
// //                                     value={formData.password}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="••••••••"
// //                                 />
// //                                 {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Contact Number <span className="text-red-500">*</span>
// //                             </label>
// //                             <input
// //                                 type="tel"
// //                                 name="contactNo"
// //                                 value={formData.contactNo}
// //                                 onChange={handleChange}
// //                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                     errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                 }`}
// //                                 placeholder="+94 77 123 4567"
// //                             />
// //                             {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Gender <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <select
// //                                     name="gender"
// //                                     value={formData.gender}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 >
// //                                     <option value="">Select Gender</option>
// //                                     <option value="MALE">Male</option>
// //                                     <option value="FEMALE">Female</option>
// //                                     <option value="OTHER">Other</option>
// //                                 </select>
// //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Role <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <select
// //                                     name="role"
// //                                     value={formData.role}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// //                                         errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 >
// //                                     <option value="ADMIN">Admin</option>
// //                                     <option value="SUPER_ADMIN">Super Admin</option>
// //                                 </select>
// //                                 {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Profile Image <span className="text-red-500">*</span>
// //                             </label>
// //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// //                                 errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="adminImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="adminImage" className="cursor-pointer">
// //                                     {adminImage ? (
// //                                         <>
// //                                             <svg className="w-8 h-8 mx-auto text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                                             </svg>
// //                                             <p className="text-sm text-teal-700">{adminImage.name}</p>
// //                                         </>
// //                                     ) : (
// //                                         <>
// //                                             <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                             </svg>
// //                                             <p className="text-sm text-gray-600">Click to upload profile image</p>
// //                                             <p className="text-xs text-gray-500 mt-1">PNG, JPG (Max 5MB)</p>
// //                                         </>
// //                                     )}
// //                                 </label>
// //                             </div>
// //                             {errors.adminImage && <p className="mt-1 text-xs text-red-600">{errors.adminImage}</p>}
// //                         </div>

// //                         <div className="flex gap-4 pt-4">
// //                             <button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// //                             >
// //                                 {isSubmitting ? 'Adding...' : 'Add Admin'}
// //                             </button>
// //                             <button
// //                                 type="button"
// //                                 onClick={onClose}
// //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                             >
// //                                 Cancel
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddAdminModal;



// // src/Pages/Admin/components/modals/AddAdminModal.jsx
// import React, { useState } from 'react';

// const AddAdminModal = ({ onClose, onSave }) => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         userName: '',
//         password: '',
//         email: '',
//         contactNo: '',
//         gender: '',
//         role: 'ADMIN'
//     });
//     const [adminImage, setAdminImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
//         if (!formData.password) newErrors.password = 'Password is required';
//         if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
//         if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
//         if (!formData.gender) newErrors.gender = 'Gender is required';
//         if (!formData.role) newErrors.role = 'Role is required';
//         if (!adminImage) newErrors.adminImage = 'Profile image is required';
//         return newErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             if (!file.type.startsWith('image/')) {
//                 setErrors(prev => ({ ...prev, adminImage: 'Please select an image file' }));
//                 return;
//             }
//             if (file.size > 5 * 1024 * 1024) {
//                 setErrors(prev => ({ ...prev, adminImage: 'Image size must be less than 5MB' }));
//                 return;
//             }
//             setAdminImage(file);
//             setImagePreview(URL.createObjectURL(file));
//             setErrors(prev => ({ ...prev, adminImage: '' }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setIsSubmitting(true);
        
//         try {
//             // Create FormData for multipart/form-data
//             const submitData = new FormData();
//             submitData.append('fullName', formData.fullName);
//             submitData.append('userName', formData.userName);
//             submitData.append('password', formData.password);
//             submitData.append('email', formData.email);
//             submitData.append('contactNo', formData.contactNo);
//             submitData.append('gender', formData.gender);
//             submitData.append('role', formData.role);
//             submitData.append('adminImage', adminImage);

//             // Log FormData contents for debugging
//             console.log('Submitting admin data:');
//             for (let [key, value] of submitData.entries()) {
//                 console.log(key, value);
//             }

//             await onSave(submitData);
//         } catch (error) {
//             console.error('Error in form submission:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Add New Admin</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Image Preview */}
//                     {imagePreview && (
//                         <div className="flex justify-center mb-4">
//                             <div className="relative">
//                                 <img 
//                                     src={imagePreview} 
//                                     alt="Preview" 
//                                     className="w-24 h-24 rounded-full object-cover border-4 border-teal-500"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => {
//                                         setAdminImage(null);
//                                         setImagePreview(null);
//                                     }}
//                                     className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
//                                 >
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Full Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="John Doe"
//                                 />
//                                 {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Username <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="userName"
//                                     value={formData.userName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="johndoe"
//                                 />
//                                 {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Email <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="admin@example.com"
//                                 />
//                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Password <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="••••••••"
//                                 />
//                                 {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Contact Number <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="tel"
//                                 name="contactNo"
//                                 value={formData.contactNo}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                     errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}
//                                 placeholder="+94 77 123 4567"
//                             />
//                             {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Gender <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="gender"
//                                     value={formData.gender}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Gender</option>
//                                     <option value="MALE">Male</option>
//                                     <option value="FEMALE">Female</option>
//                                     <option value="OTHER">Other</option>
//                                 </select>
//                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Role <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="role"
//                                     value={formData.role}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="ADMIN">Admin</option>
//                                     <option value="SUPER_ADMIN">Super Admin</option>
//                                 </select>
//                                 {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Profile Image <span className="text-red-500">*</span>
//                             </label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                                 errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="adminImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/*"
//                                 />
//                                 <label htmlFor="adminImage" className="cursor-pointer block">
//                                     {!imagePreview && (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">Click to upload profile image</p>
//                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
//                                         </>
//                                     )}
//                                 </label>
//                             </div>
//                             {errors.adminImage && <p className="mt-1 text-xs text-red-600">{errors.adminImage}</p>}
//                         </div>

//                         <div className="flex gap-4 pt-4">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Adding...
//                                     </>
//                                 ) : (
//                                     'Add Admin'
//                                 )}
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddAdminModal;



// src/Pages/Admin/components/modals/AddAdminModal.jsx
import React, { useState } from 'react';

const AddAdminModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: '',
        email: '',
        contactNo: '',
        gender: '',
        role: 'ADMIN' // Default to ADMIN
    });
    const [adminImage, setAdminImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.userName.trim()) newErrors.userName = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (!adminImage) newErrors.adminImage = 'Profile image is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setErrors(prev => ({ ...prev, adminImage: 'Please select an image file' }));
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, adminImage: 'Image size must be less than 5MB' }));
                return;
            }
            setAdminImage(file);
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, adminImage: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Create FormData for multipart/form-data
            const submitData = new FormData();
            
            // Append all fields
            submitData.append('fullName', formData.fullName);
            submitData.append('userName', formData.userName);
            submitData.append('password', formData.password);
            submitData.append('email', formData.email);
            submitData.append('contactNo', formData.contactNo);
            submitData.append('gender', formData.gender);
            
            // Fix: Map role to match backend enum exactly
            let roleValue = formData.role;
            if (roleValue === 'SUPER_ADMIN') {
                roleValue = 'Super_Admin'; // Match the enum value
            }
            submitData.append('role', roleValue);
            
            submitData.append('adminImage', adminImage);

            // Log FormData contents for debugging
            console.log('Submitting admin data:');
            for (let [key, value] of submitData.entries()) {
                console.log(key, value instanceof File ? `File: ${value.name}` : value);
            }

            await onSave(submitData);
        } catch (error) {
            console.error('Error in form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Add New Admin</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <img 
                                    src={imagePreview} 
                                    alt="Preview" 
                                    className="w-24 h-24 rounded-full object-cover border-4 border-teal-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setAdminImage(null);
                                        setImagePreview(null);
                                    }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="johndoe"
                                />
                                {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="admin@example.com"
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="••••••••"
                                />
                                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                    errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                placeholder="+94 77 123 4567"
                            />
                            {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                                {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Role</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="Super_Admin">Super Admin</option>
                                    <option value="Moderator">Moderator</option>
                                    <option value="User_Manager">User Manager</option>
                                </select>
                                {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Image <span className="text-red-500">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="adminImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="adminImage" className="cursor-pointer block">
                                    {!imagePreview && (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">Click to upload profile image</p>
                                            <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
                                        </>
                                    )}
                                </label>
                            </div>
                            {errors.adminImage && <p className="mt-1 text-xs text-red-600">{errors.adminImage}</p>}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding...
                                    </>
                                ) : (
                                    'Add Admin'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdminModal;