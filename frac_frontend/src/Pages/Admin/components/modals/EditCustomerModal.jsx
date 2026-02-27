// // // // src/Pages/Admin/components/modals/EditCustomerModal.jsx
// // // import React, { useState } from 'react';

// // // const EditCustomerModal = ({ customer, onClose, onSave }) => {
// // //     const [formData, setFormData] = useState({
// // //         firstName: customer.firstName || '',
// // //         lastName: customer.lastName || '',
// // //         email: customer.email || '',
// // //         contactNumber: customer.contactNumber || '',
// // //         nic: customer.nic || '',
// // //         dob: customer.dob ? customer.dob.split('T')[0] : '',
// // //         gender: customer.gender || '',
// // //         address: customer.address || ''
// // //     });
// // //     const [isSubmitting, setIsSubmitting] = useState(false);

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData(prev => ({ ...prev, [name]: value }));
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         setIsSubmitting(true);
// // //         await onSave(formData);
// // //         setIsSubmitting(false);
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// // //                 <div className="p-6">
// // //                     <div className="flex justify-between items-center mb-6">
// // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Customer</h2>
// // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                             </svg>
// // //                         </button>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="firstName"
// // //                                     value={formData.firstName}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="lastName"
// // //                                     value={formData.lastName}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // //                                 <input
// // //                                     type="email"
// // //                                     name="email"
// // //                                     value={formData.email}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="contactNumber"
// // //                                     value={formData.contactNumber}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="nic"
// // //                                     value={formData.nic}
// // //                                     onChange={handleChange}
// // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
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
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
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
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="address"
// // //                                 value={formData.address}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div className="flex gap-4 pt-4">
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// // //                             >
// // //                                 {isSubmitting ? 'Updating...' : 'Update Customer'}
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

// // // export default EditCustomerModal;



// // // src/Pages/Admin/components/modals/EditCustomerModal.jsx
// // import React, { useState } from 'react';

// // const EditCustomerModal = ({ customer, onClose, onSave }) => {
// //     const [formData, setFormData] = useState({
// //         firstName: customer.firstName || '',
// //         lastName: customer.lastName || '',
// //         password: '', // Password is optional in update
// //         email: customer.email || '',
// //         contactNumber: customer.contactNumber || '',
// //         nicNumber: customer.nicNumber || '',
// //         birthday: customer.birthday ? customer.birthday.split('T')[0] : '',
// //         gender: customer.gender || '',
// //         country: customer.country || ''
// //     });
// //     const [customerImage, setCustomerImage] = useState(null);
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({ ...prev, [name]: value }));
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             if (file.size > 5 * 1024 * 1024) {
// //                 alert('Image size must be less than 5MB');
// //                 return;
// //             }
// //             setCustomerImage(file);
// //         }
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);

// //         // Create FormData for multipart/form-data
// //         const submitData = new FormData();
// //         submitData.append('firstName', formData.firstName);
// //         submitData.append('lastName', formData.lastName);
// //         submitData.append('password', formData.password || 'dummy'); // Backend requires password
// //         submitData.append('email', formData.email);
// //         submitData.append('contactNumber', formData.contactNumber);
// //         submitData.append('nicNumber', formData.nicNumber);
// //         submitData.append('birthday', formData.birthday);
// //         submitData.append('gender', formData.gender);
// //         submitData.append('country', formData.country);
        
// //         if (customerImage) {
// //             submitData.append('customerImage', customerImage);
// //         }

// //         await onSave(submitData);
// //         setIsSubmitting(false);
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Edit Customer</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
// //                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
// //                             {customer.customerImage && !customerImage ? (
// //                                 <img 
// //                                     src={`${BASE_URL}${customer.customerImage}`} 
// //                                     alt={customer.firstName} 
// //                                     className="w-16 h-16 rounded-full object-cover"
// //                                     onError={(e) => {
// //                                         e.target.onerror = null;
// //                                         e.target.style.display = 'none';
// //                                         e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-2xl">${customer.firstName?.charAt(0)}</span>`;
// //                                     }}
// //                                 />
// //                             ) : customerImage ? (
// //                                 <img 
// //                                     src={URL.createObjectURL(customerImage)} 
// //                                     alt="Preview" 
// //                                     className="w-16 h-16 rounded-full object-cover"
// //                                 />
// //                             ) : (
// //                                 <span className="text-blue-600 font-bold text-2xl">
// //                                     {customer.firstName?.charAt(0)}
// //                                 </span>
// //                             )}
// //                         </div>
// //                         <div className="ml-4">
// //                             <p className="text-sm text-gray-500">Current Profile Image</p>
// //                             <p className="text-xs text-gray-400">Upload new image below to change</p>
// //                         </div>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
// //                                 <input
// //                                     type="text"
// //                                     name="firstName"
// //                                     value={formData.firstName}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
// //                                 <input
// //                                     type="text"
// //                                     name="lastName"
// //                                     value={formData.lastName}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     value={formData.email}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// //                                 <input
// //                                     type="tel"
// //                                     name="contactNumber"
// //                                     value={formData.contactNumber}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number</label>
// //                                 <input
// //                                     type="text"
// //                                     name="nicNumber"
// //                                     value={formData.nicNumber}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
// //                                 <input
// //                                     type="date"
// //                                     name="birthday"
// //                                     value={formData.birthday}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
// //                                 <select
// //                                     name="gender"
// //                                     value={formData.gender}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                                     required
// //                                 >
// //                                     <option value="">Select Gender</option>
// //                                     <option value="MALE">Male</option>
// //                                     <option value="FEMALE">Female</option>
// //                                     <option value="OTHER">Other</option>
// //                                 </select>
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
// //                                 <input
// //                                     type="text"
// //                                     name="country"
// //                                     value={formData.country}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     required
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password (Leave blank to keep current)</label>
// //                             <input
// //                                 type="password"
// //                                 name="password"
// //                                 value={formData.password}
// //                                 onChange={handleChange}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                 placeholder="Enter new password to change"
// //                             />
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// //                             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-teal-400">
// //                                 <input
// //                                     type="file"
// //                                     id="editCustomerImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="editCustomerImage" className="cursor-pointer">
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
// //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// //                                         </>
// //                                     )}
// //                                 </label>
// //                             </div>
// //                         </div>

// //                         <div className="flex gap-4 pt-4">
// //                             <button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// //                             >
// //                                 {isSubmitting ? 'Updating...' : 'Update Customer'}
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

// // export default EditCustomerModal;



// // src/Pages/Admin/components/modals/EditCustomerModal.jsx
// import React, { useState } from 'react';

// const EditCustomerModal = ({ customer, onClose, onSave, BASE_URL }) => {
//     const [formData, setFormData] = useState({
//         firstName: customer.firstName || '',
//         lastName: customer.lastName || '',
//         password: '', // Password is optional in update
//         email: customer.email || '',
//         contactNumber: customer.contactNumber || '',
//         nicNumber: customer.nicNumber || '',
//         birthday: customer.birthday ? customer.birthday.split('T')[0] : '',
//         gender: customer.gender || '',
//         country: customer.country || ''
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
//         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
//         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
//         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
//         if (!formData.gender) newErrors.gender = 'Gender is required';
//         if (!formData.country.trim()) newErrors.country = 'Country is required';
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
//                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
//                 return;
//             }
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
//             submitData.append('password', formData.password || 'dummy'); // Backend requires password
//             submitData.append('email', formData.email);
//             submitData.append('contactNumber', formData.contactNumber);
//             submitData.append('nicNumber', formData.nicNumber);
//             submitData.append('birthday', formData.birthday);
//             submitData.append('gender', formData.gender);
//             submitData.append('country', formData.country);
            
//             if (customerImage) {
//                 submitData.append('customerImage', customerImage);
//             }

//             await onSave(submitData);
//         } catch (error) {
//             console.error('Error in form submission:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // Get current image URL
//     const getCurrentImageUrl = () => {
//         if (!customer.customerImage) return null;
//         return `${BASE_URL}${customer.customerImage}`;
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Edit Customer</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Current Image Preview */}
//                     <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
//                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
//                             {imagePreview ? (
//                                 <img 
//                                     src={imagePreview} 
//                                     alt="Preview" 
//                                     className="w-16 h-16 rounded-full object-cover"
//                                 />
//                             ) : getCurrentImageUrl() ? (
//                                 <img 
//                                     src={getCurrentImageUrl()} 
//                                     alt={customer.firstName} 
//                                     className="w-16 h-16 rounded-full object-cover"
//                                     onError={(e) => {
//                                         e.target.onerror = null;
//                                         e.target.style.display = 'none';
//                                         e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-2xl">${customer.firstName?.charAt(0)}</span>`;
//                                     }}
//                                 />
//                             ) : (
//                                 <span className="text-blue-600 font-bold text-2xl">
//                                     {customer.firstName?.charAt(0)}
//                                 </span>
//                             )}
//                         </div>
//                         <div className="ml-4">
//                             <p className="text-sm text-gray-500">Current Profile Image</p>
//                             <p className="text-xs text-gray-400">Upload new image below to change</p>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
//                                 <input
//                                     type="tel"
//                                     name="contactNumber"
//                                     value={formData.contactNumber}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
//                                 <input
//                                     type="text"
//                                     name="nicNumber"
//                                     value={formData.nicNumber}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
//                                 <input
//                                     type="date"
//                                     name="birthday"
//                                     value={formData.birthday}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
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
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
//                                 <input
//                                     type="text"
//                                     name="country"
//                                     value={formData.country}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Password (Leave blank to keep current)
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 placeholder="Enter new password to change"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="editCustomerImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/*"
//                                 />
//                                 <label htmlFor="editCustomerImage" className="cursor-pointer block">
//                                     {!imagePreview && (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">Click to change profile image</p>
//                                         </>
//                                     )}
//                                 </label>
//                             </div>
//                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
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
//                                         Updating...
//                                     </>
//                                 ) : (
//                                     'Update Customer'
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

// export default EditCustomerModal;



// src/Pages/Admin/components/modals/EditCustomerModal.jsx
import React, { useState, useEffect } from 'react';

const EditCustomerModal = ({ customer, onClose, onSave, BASE_URL }) => {
    const [formData, setFormData] = useState({
        firstName: customer.firstName || '',
        lastName: customer.lastName || '',
        password: '', // Password is optional in update
        email: customer.email || '',
        contactNumber: customer.contactNumber || '',
        nicNumber: customer.nicNumber || '',
        birthday: customer.birthday ? customer.birthday.split('T')[0] : '',
        gender: customer.gender || '',
        country: customer.country || ''
    });
    const [customerImage, setCustomerImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Helper function to get the correct image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        // Clean the path
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        // If it's a full Windows path
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/customers/${filename}`;
        }
        
        // If it starts with /uploads
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        // Default case
        return `${BASE_URL}/uploads/customers/${cleanPath}`;
    };

    // Set current image URL when component mounts
    useEffect(() => {
        if (customer.customerImage) {
            const url = getImageUrl(customer.customerImage);
            setCurrentImageUrl(url);
            console.log('Current image URL:', url);
        }
    }, [customer]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
        if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
        if (!formData.birthday) newErrors.birthday = 'Birthday is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
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
            submitData.append('password', formData.password || 'dummy'); // Backend requires password
            submitData.append('email', formData.email);
            submitData.append('contactNumber', formData.contactNumber);
            submitData.append('nicNumber', formData.nicNumber);
            submitData.append('birthday', formData.birthday);
            submitData.append('gender', formData.gender);
            submitData.append('country', formData.country);
            
            if (customerImage) {
                submitData.append('customerImage', customerImage);
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
                        <h2 className="text-2xl font-bold text-gray-800">Edit Customer</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Current Image Preview */}
                    <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                                {imagePreview ? (
                                    <img 
                                        src={imagePreview} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : currentImageUrl ? (
                                    <img 
                                        src={currentImageUrl} 
                                        alt={customer.firstName} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.error('Failed to load image:', currentImageUrl);
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${customer.firstName?.charAt(0)}${customer.lastName?.charAt(0)}</span>`;
                                        }}
                                    />
                                ) : (
                                    <span className="text-white font-bold text-2xl">
                                        {customer.firstName?.charAt(0)}{customer.lastName?.charAt(0)}
                                    </span>
                                )}
                            </div>
                            {currentImageUrl && !imagePreview && (
                                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
                            <p className="text-xs text-blue-600">Upload new image below to change</p>
                            {currentImageUrl && (
                                <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageUrl.split('/').pop()}</p>
                            )}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
                                <input
                                    type="text"
                                    name="nicNumber"
                                    value={formData.nicNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password (Leave blank to keep current)
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Enter new password to change"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="editCustomerImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="editCustomerImage" className="cursor-pointer block">
                                    {imagePreview ? (
                                        <div className="flex flex-col items-center">
                                            <img 
                                                src={imagePreview} 
                                                alt="Preview" 
                                                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
                                            />
                                            <p className="text-sm text-teal-600">{customerImage.name}</p>
                                            <p className="text-xs text-gray-500 mt-1">Click to change</p>
                                        </div>
                                    ) : (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">Click to change profile image</p>
                                            <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
                                        </>
                                    )}
                                </label>
                            </div>
                            {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
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
                                        Updating...
                                    </>
                                ) : (
                                    'Update Customer'
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

export default EditCustomerModal;