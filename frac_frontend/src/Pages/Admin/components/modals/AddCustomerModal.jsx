// // // // src/Pages/Admin/components/modals/AddCustomerModal.jsx
// // // import React, { useState } from 'react';

// // // const AddCustomerModal = ({ onClose, onSave }) => {
// // //     const [formData, setFormData] = useState({
// // //         firstName: '',
// // //         lastName: '',
// // //         email: '',
// // //         password: '',
// // //         contactNumber: '',
// // //         nic: '',
// // //         dob: '',
// // //         gender: '',
// // //         address: ''
// // //     });
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [errors, setErrors] = useState({});

// // //     const validateForm = () => {
// // //         const newErrors = {};
// // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // //         if (!formData.password) newErrors.password = 'Password is required';
// // //         if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
// // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // //         if (!formData.nic.trim()) newErrors.nic = 'NIC is required';
// // //         return newErrors;
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData(prev => ({ ...prev, [name]: value }));
// // //         if (errors[name]) {
// // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // //         }
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         const validationErrors = validateForm();
// // //         if (Object.keys(validationErrors).length > 0) {
// // //             setErrors(validationErrors);
// // //             return;
// // //         }

// // //         setIsSubmitting(true);
// // //         await onSave(formData);
// // //         setIsSubmitting(false);
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //                 <div className="p-6">
// // //                     <div className="flex justify-between items-center mb-6">
// // //                         <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
// // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                             </svg>
// // //                         </button>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     First Name <span className="text-red-500">*</span>
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="firstName"
// // //                                     value={formData.firstName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="John"
// // //                                 />
// // //                                 {errors.firstName && (
// // //                                     <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
// // //                                 )}
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Last Name <span className="text-red-500">*</span>
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="lastName"
// // //                                     value={formData.lastName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Doe"
// // //                                 />
// // //                                 {errors.lastName && (
// // //                                     <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Email <span className="text-red-500">*</span>
// // //                                 </label>
// // //                                 <input
// // //                                     type="email"
// // //                                     name="email"
// // //                                     value={formData.email}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="john.doe@example.com"
// // //                                 />
// // //                                 {errors.email && (
// // //                                     <p className="mt-1 text-xs text-red-600">{errors.email}</p>
// // //                                 )}
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Password <span className="text-red-500">*</span>
// // //                                 </label>
// // //                                 <input
// // //                                     type="password"
// // //                                     name="password"
// // //                                     value={formData.password}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="••••••••"
// // //                                 />
// // //                                 {errors.password && (
// // //                                     <p className="mt-1 text-xs text-red-600">{errors.password}</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Contact Number <span className="text-red-500">*</span>
// // //                             </label>
// // //                             <input
// // //                                 type="tel"
// // //                                 name="contactNumber"
// // //                                 value={formData.contactNumber}
// // //                                 onChange={handleChange}
// // //                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                     errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                 }`}
// // //                                 placeholder="+94 77 123 4567"
// // //                             />
// // //                             {errors.contactNumber && (
// // //                                 <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
// // //                             )}
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     NIC <span className="text-red-500">*</span>
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="nic"
// // //                                     value={formData.nic}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.nic ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="123456789V"
// // //                                 />
// // //                                 {errors.nic && (
// // //                                     <p className="mt-1 text-xs text-red-600">{errors.nic}</p>
// // //                                 )}
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Date of Birth
// // //                                 </label>
// // //                                 <input
// // //                                     type="date"
// // //                                     name="dob"
// // //                                     value={formData.dob}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                     Gender
// // //                                 </label>
// // //                                 <select
// // //                                     name="gender"
// // //                                     value={formData.gender}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                                 >
// // //                                     <option value="">Select Gender</option>
// // //                                     <option value="MALE">Male</option>
// // //                                     <option value="FEMALE">Female</option>
// // //                                     <option value="OTHER">Other</option>
// // //                                 </select>
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Address
// // //                             </label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="address"
// // //                                 value={formData.address}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 placeholder="Street address"
// // //                             />
// // //                         </div>

// // //                         <div className="flex gap-4 pt-4">
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// // //                             >
// // //                                 {isSubmitting ? 'Adding...' : 'Add Customer'}
// // //                             </button>
// // //                             <button
// // //                                 type="button"
// // //                                 onClick={onClose}
// // //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // //                             >
// // //                                 Cancel
// // //                             </button>
// // //                         </div>
// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AddCustomerModal;



// // // src/Pages/Admin/components/modals/AddCustomerModal.jsx
// // import React, { useState } from 'react';

// // const AddCustomerModal = ({ onClose, onSave }) => {
// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         password: '',
// //         email: '',
// //         contactNumber: '',
// //         nicNumber: '',
// //         birthday: '',
// //         gender: '',
// //         country: ''
// //     });
// //     const [customerImage, setCustomerImage] = useState(null);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (!formData.password) newErrors.password = 'Password is required';
// //         if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
// //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// //         if (!formData.gender) newErrors.gender = 'Gender is required';
// //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// //         if (!customerImage) newErrors.customerImage = 'Profile image is required';
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
// //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// //                 return;
// //             }
// //             if (file.size > 5 * 1024 * 1024) {
// //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// //                 return;
// //             }
// //             setCustomerImage(file);
// //             setErrors(prev => ({ ...prev, customerImage: '' }));
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
        
// //         // Create FormData for multipart/form-data
// //         const submitData = new FormData();
// //         submitData.append('firstName', formData.firstName);
// //         submitData.append('lastName', formData.lastName);
// //         submitData.append('password', formData.password);
// //         submitData.append('email', formData.email);
// //         submitData.append('contactNumber', formData.contactNumber);
// //         submitData.append('nicNumber', formData.nicNumber);
// //         submitData.append('birthday', formData.birthday);
// //         submitData.append('gender', formData.gender);
// //         submitData.append('country', formData.country);
// //         submitData.append('customerImage', customerImage);

// //         await onSave(submitData);
// //         setIsSubmitting(false);
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
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
// //                                     First Name <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="firstName"
// //                                     value={formData.firstName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="John"
// //                                 />
// //                                 {errors.firstName && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
// //                                 )}
// //                             </div>

// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Last Name <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="lastName"
// //                                     value={formData.lastName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Doe"
// //                                 />
// //                                 {errors.lastName && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
// //                                 )}
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
// //                                     placeholder="john.doe@example.com"
// //                                 />
// //                                 {errors.email && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.email}</p>
// //                                 )}
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
// //                                 {errors.password && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.password}</p>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Contact Number <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="tel"
// //                                     name="contactNumber"
// //                                     value={formData.contactNumber}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="0771234567"
// //                                 />
// //                                 {errors.contactNumber && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
// //                                 )}
// //                             </div>

// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     NIC Number <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="nicNumber"
// //                                     value={formData.nicNumber}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="123456789V"
// //                                 />
// //                                 {errors.nicNumber && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                     Birthday <span className="text-red-500">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="date"
// //                                     name="birthday"
// //                                     value={formData.birthday}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.birthday && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>
// //                                 )}
// //                             </div>

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
// //                                 {errors.gender && (
// //                                     <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Country <span className="text-red-500">*</span>
// //                             </label>
// //                             <input
// //                                 type="text"
// //                                 name="country"
// //                                 value={formData.country}
// //                                 onChange={handleChange}
// //                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                     errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                 }`}
// //                                 placeholder="Sri Lanka"
// //                             />
// //                             {errors.country && (
// //                                 <p className="mt-1 text-xs text-red-600">{errors.country}</p>
// //                             )}
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Profile Image <span className="text-red-500">*</span>
// //                             </label>
// //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="customerImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="customerImage" className="cursor-pointer">
// //                                     {customerImage ? (
// //                                         <>
// //                                             <svg className="w-8 h-8 mx-auto text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                                             </svg>
// //                                             <p className="text-sm text-teal-700">{customerImage.name}</p>
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
// //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
// //                         </div>

// //                         <div className="flex gap-4 pt-4">
// //                             <button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// //                             >
// //                                 {isSubmitting ? 'Adding...' : 'Add Customer'}
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

// // export default AddCustomerModal;


// // src/Pages/Admin/components/modals/AddCustomerModal.jsx
// import React, { useState } from 'react';

// const AddCustomerModal = ({ onClose, onSave, BASE_URL }) => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         password: '',
//         email: '',
//         contactNumber: '',
//         nicNumber: '',
//         birthday: '',
//         gender: '',
//         country: ''
//     });
//     const [customerImage, setCustomerImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         if (!formData.password) newErrors.password = 'Password is required';
//         if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
//         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
//         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
//         if (!formData.gender) newErrors.gender = 'Gender is required';
//         if (!formData.country.trim()) newErrors.country = 'Country is required';
//         if (!customerImage) newErrors.customerImage = 'Profile image is required';
//         return newErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         // Clear error for this field
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             // Validate file type
//             if (!file.type.startsWith('image/')) {
//                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
//                 return;
//             }
//             // Validate file size (5MB)
//             if (file.size > 5 * 1024 * 1024) {
//                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
//                 return;
//             }
            
//             setCustomerImage(file);
//             setImagePreview(URL.createObjectURL(file));
//             setErrors(prev => ({ ...prev, customerImage: '' }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Validate form
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setIsSubmitting(true);
        
//         try {
//             // Create FormData for multipart/form-data
//             const submitData = new FormData();
//             submitData.append('firstName', formData.firstName);
//             submitData.append('lastName', formData.lastName);
//             submitData.append('password', formData.password);
//             submitData.append('email', formData.email);
//             submitData.append('contactNumber', formData.contactNumber);
//             submitData.append('nicNumber', formData.nicNumber);
//             submitData.append('birthday', formData.birthday);
//             submitData.append('gender', formData.gender);
//             submitData.append('country', formData.country);
//             submitData.append('customerImage', customerImage);

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
//                         <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         {/* Image Preview */}
//                         {imagePreview && (
//                             <div className="flex justify-center mb-4">
//                                 <div className="relative">
//                                     <img 
//                                         src={imagePreview} 
//                                         alt="Preview" 
//                                         className="w-24 h-24 rounded-full object-cover border-4 border-teal-500"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => {
//                                             setCustomerImage(null);
//                                             setImagePreview(null);
//                                         }}
//                                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
//                                     >
//                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     First Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="John"
//                                 />
//                                 {errors.firstName && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Last Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="Doe"
//                                 />
//                                 {errors.lastName && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
//                                 )}
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
//                                     placeholder="john.doe@example.com"
//                                 />
//                                 {errors.email && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.email}</p>
//                                 )}
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
//                                 {errors.password && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.password}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Contact Number <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="contactNumber"
//                                     value={formData.contactNumber}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="0771234567"
//                                 />
//                                 {errors.contactNumber && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     NIC Number <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="nicNumber"
//                                     value={formData.nicNumber}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     placeholder="123456789V"
//                                 />
//                                 {errors.nicNumber && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Birthday <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="date"
//                                     name="birthday"
//                                     value={formData.birthday}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.birthday && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>
//                                 )}
//                             </div>

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
//                                 {errors.gender && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Country <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 name="country"
//                                 value={formData.country}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                     errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}
//                                 placeholder="Sri Lanka"
//                             />
//                             {errors.country && (
//                                 <p className="mt-1 text-xs text-red-600">{errors.country}</p>
//                             )}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Profile Image <span className="text-red-500">*</span>
//                             </label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="customerImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/*"
//                                 />
//                                 <label htmlFor="customerImage" className="cursor-pointer block">
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
//                             {errors.customerImage && (
//                                 <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>
//                             )}
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
//                                     'Add Customer'
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

// export default AddCustomerModal;


// src/Pages/Admin/components/modals/AddCustomerModal.jsx
import React, { useState } from 'react';

const AddCustomerModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        contactNumber: '',
        nicNumber: '',
        birthday: '',
        gender: '',
        country: 'Sri Lanka'
    });
    const [customerImage, setCustomerImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password && formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
        if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
        if (!formData.birthday) newErrors.birthday = 'Birthday is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!customerImage) newErrors.customerImage = 'Profile image is required';
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
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
                return;
            }
            // Validate file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
                return;
            }
            
            setCustomerImage(file);
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, customerImage: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Create FormData for multipart/form-data
            const submitData = new FormData();
            submitData.append('firstName', formData.firstName);
            submitData.append('lastName', formData.lastName);
            submitData.append('password', formData.password);
            submitData.append('email', formData.email);
            submitData.append('contactNumber', formData.contactNumber);
            submitData.append('nicNumber', formData.nicNumber);
            submitData.append('birthday', formData.birthday);
            submitData.append('gender', formData.gender);
            submitData.append('country', formData.country);
            submitData.append('customerImage', customerImage);

            // Log FormData contents for debugging
            console.log('Submitting customer data:');
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
                        <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
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
                                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCustomerImage(null);
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
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="John"
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="Doe"
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                                )}
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="john.doe@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                                )}
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="••••••••"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="0771234567"
                                />
                                {errors.contactNumber && (
                                    <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    NIC Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nicNumber"
                                    value={formData.nicNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="123456789V"
                                />
                                {errors.nicNumber && (
                                    <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Birthday <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                        errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.birthday && (
                                    <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${
                                        errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                                {errors.gender && (
                                    <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                    errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                placeholder="Sri Lanka"
                            />
                            {errors.country && (
                                <p className="mt-1 text-xs text-red-600">{errors.country}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Image <span className="text-red-500">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                            }`}>
                                <input
                                    type="file"
                                    id="customerImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="customerImage" className="cursor-pointer block">
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
                            {errors.customerImage && (
                                <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>
                            )}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
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
                                    'Add Customer'
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

export default AddCustomerModal;

