// // // // // src/Pages/Admin/components/modals/EditAdminModal.jsx
// // // // import React, { useState } from 'react';

// // // // const EditAdminModal = ({ admin, onClose, onSave, BASE_URL }) => {
// // // //     const [formData, setFormData] = useState({
// // // //         fullName: admin.fullName || '',
// // // //         userName: admin.userName || '',
// // // //         email: admin.email || '',
// // // //         contactNo: admin.contactNo || '',
// // // //         gender: admin.gender || '',
// // // //         role: admin.role || 'ADMIN'
// // // //     });
// // // //     const [adminImage, setAdminImage] = useState(null);
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleImageChange = (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (file) {
// // // //             if (file.size > 5 * 1024 * 1024) {
// // // //                 alert('Image size must be less than 5MB');
// // // //                 return;
// // // //             }
// // // //             setAdminImage(file);
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         setIsSubmitting(true);

// // // //         const submitData = new FormData();
// // // //         Object.keys(formData).forEach(key => submitData.append(key, formData[key]));
// // // //         if (adminImage) submitData.append('adminImage', adminImage);

// // // //         await onSave(submitData);
// // // //         setIsSubmitting(false);
// // // //     };

// // // //     return (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// // // //                 <div className="p-6">
// // // //                     <div className="flex justify-between items-center mb-6">
// // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
// // // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                             </svg>
// // // //                         </button>
// // // //                     </div>

// // // //                     <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
// // // //                         <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center overflow-hidden">
// // // //                             {admin.adminImage && !adminImage ? (
// // // //                                 <img 
// // // //                                     src={`${BASE_URL}/uploads/admins/${admin.adminImage}`} 
// // // //                                     alt={admin.fullName} 
// // // //                                     className="w-16 h-16 rounded-full object-cover"
// // // //                                 />
// // // //                             ) : adminImage ? (
// // // //                                 <img 
// // // //                                     src={URL.createObjectURL(adminImage)} 
// // // //                                     alt="Preview" 
// // // //                                     className="w-16 h-16 rounded-full object-cover"
// // // //                                 />
// // // //                             ) : (
// // // //                                 <span className="text-teal-600 font-bold text-2xl">
// // // //                                     {admin.fullName?.charAt(0)}
// // // //                                 </span>
// // // //                             )}
// // // //                         </div>
// // // //                         <div className="ml-4">
// // // //                             <p className="text-sm text-gray-500">Current Profile Image</p>
// // // //                             <p className="text-xs text-gray-400">Upload new image below to change</p>
// // // //                         </div>
// // // //                     </div>

// // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="fullName"
// // // //                                     value={formData.fullName}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     required
// // // //                                 />
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="userName"
// // // //                                     value={formData.userName}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     required
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // // //                                 <input
// // // //                                     type="email"
// // // //                                     name="email"
// // // //                                     value={formData.email}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     required
// // // //                                 />
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// // // //                                 <input
// // // //                                     type="tel"
// // // //                                     name="contactNo"
// // // //                                     value={formData.contactNo}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     required
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
// // // //                                 <select
// // // //                                     name="gender"
// // // //                                     value={formData.gender}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // // //                                 >
// // // //                                     <option value="">Select</option>
// // // //                                     <option value="MALE">Male</option>
// // // //                                     <option value="FEMALE">Female</option>
// // // //                                     <option value="OTHER">Other</option>
// // // //                                 </select>
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
// // // //                                 <select
// // // //                                     name="role"
// // // //                                     value={formData.role}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // // //                                 >
// // // //                                     <option value="ADMIN">Admin</option>
// // // //                                     <option value="SUPER_ADMIN">Super Admin</option>
// // // //                                 </select>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // // //                             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-teal-400">
// // // //                                 <input
// // // //                                     type="file"
// // // //                                     id="editAdminImage"
// // // //                                     onChange={handleImageChange}
// // // //                                     className="hidden"
// // // //                                     accept="image/*"
// // // //                                 />
// // // //                                 <label htmlFor="editAdminImage" className="cursor-pointer">
// // // //                                     {adminImage ? (
// // // //                                         <>
// // // //                                             <svg className="w-8 h-8 mx-auto text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                                             </svg>
// // // //                                             <p className="text-sm text-teal-700">{adminImage.name}</p>
// // // //                                         </>
// // // //                                     ) : (
// // // //                                         <>
// // // //                                             <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // //                                             </svg>
// // // //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// // // //                                         </>
// // // //                                     )}
// // // //                                 </label>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="flex gap-4 pt-4">
// // // //                             <button
// // // //                                 type="submit"
// // // //                                 disabled={isSubmitting}
// // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// // // //                             >
// // // //                                 {isSubmitting ? 'Updating...' : 'Update Admin'}
// // // //                             </button>
// // // //                             <button
// // // //                                 type="button"
// // // //                                 onClick={onClose}
// // // //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // // //                             >
// // // //                                 Cancel
// // // //                             </button>
// // // //                         </div>
// // // //                     </form>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default EditAdminModal;



// // // // src/Pages/Admin/components/modals/EditAdminModal.jsx
// // // import React, { useState, useEffect } from 'react';

// // // const EditAdminModal = ({ admin, onClose, onSave, BASE_URL }) => {
// // //     const [formData, setFormData] = useState({
// // //         fullName: '',
// // //         userName: '',
// // //         email: '',
// // //         contactNo: '',
// // //         gender: '',
// // //         role: '',
// // //         password: '' // Optional for update
// // //     });
// // //     const [adminImage, setAdminImage] = useState(null);
// // //     const [imagePreview, setImagePreview] = useState(null);
// // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [errors, setErrors] = useState({});

// // //     // Helper function to get image URL
// // //     const getImageUrl = (imagePath) => {
// // //         if (!imagePath) return null;
        
// // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // //             return `${BASE_URL}/uploads/admins/${filename}`;
// // //         }
        
// // //         if (cleanPath.startsWith('/uploads')) {
// // //             return `${BASE_URL}${cleanPath}`;
// // //         }
        
// // //         return `${BASE_URL}/uploads/admins/${cleanPath}`;
// // //     };

// // //     // Load admin data when modal opens
// // //     useEffect(() => {
// // //         if (admin) {
// // //             console.log('Loading admin data for edit:', admin);
// // //             setFormData({
// // //                 fullName: admin.fullName || '',
// // //                 userName: admin.userName || '',
// // //                 email: admin.email || '',
// // //                 contactNo: admin.contactNo || '',
// // //                 gender: admin.gender || '',
// // //                 role: admin.role || 'ADMIN',
// // //                 password: ''
// // //             });
            
// // //             if (admin.adminImage) {
// // //                 const url = getImageUrl(admin.adminImage);
// // //                 setCurrentImageUrl(url);
// // //                 console.log('Current image URL:', url);
// // //             }
// // //         }
// // //     }, [admin]);

// // //     const validateForm = () => {
// // //         const newErrors = {};
// // //         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
// // //         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
// // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // //             newErrors.email = 'Invalid email format';
// // //         }
// // //         if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
// // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // //         if (!formData.role) newErrors.role = 'Role is required';
// // //         return newErrors;
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData(prev => ({ ...prev, [name]: value }));
// // //         if (errors[name]) {
// // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // //         }
// // //     };

// // //     const handleImageChange = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             if (!file.type.startsWith('image/')) {
// // //                 setErrors(prev => ({ ...prev, adminImage: 'Please select an image file' }));
// // //                 return;
// // //             }
// // //             if (file.size > 5 * 1024 * 1024) {
// // //                 setErrors(prev => ({ ...prev, adminImage: 'Image size must be less than 5MB' }));
// // //                 return;
// // //             }
// // //             setAdminImage(file);
// // //             setImagePreview(URL.createObjectURL(file));
// // //             setErrors(prev => ({ ...prev, adminImage: '' }));
// // //         }
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
        
// // //         const newErrors = validateForm();
// // //         if (Object.keys(newErrors).length > 0) {
// // //             setErrors(newErrors);
// // //             return;
// // //         }

// // //         setIsSubmitting(true);

// // //         try {
// // //             // Create FormData for multipart/form-data
// // //             const submitData = new FormData();
// // //             submitData.append('fullName', formData.fullName);
// // //             submitData.append('userName', formData.userName);
// // //             submitData.append('email', formData.email);
// // //             submitData.append('contactNo', formData.contactNo);
// // //             submitData.append('gender', formData.gender);
// // //             submitData.append('role', formData.role);
            
// // //             // Only include password if provided
// // //             if (formData.password && formData.password.trim() !== '') {
// // //                 submitData.append('password', formData.password);
// // //             } else {
// // //                 // Send dummy password if not changing (backend requires password)
// // //                 submitData.append('password', 'dummy');
// // //             }
            
// // //             // Include image only if new one is selected
// // //             if (adminImage) {
// // //                 submitData.append('adminImage', adminImage);
// // //             }

// // //             // Log FormData contents for debugging
// // //             console.log('Submitting admin update:');
// // //             for (let [key, value] of submitData.entries()) {
// // //                 console.log(key, value);
// // //             }

// // //             await onSave(submitData);
// // //         } catch (error) {
// // //             console.error('Error in form submission:', error);
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //                 <div className="p-6">
// // //                     <div className="flex justify-between items-center mb-6">
// // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
// // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                             </svg>
// // //                         </button>
// // //                     </div>

// // //                     {/* Current Image Preview */}
// // //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
// // //                         <div className="relative">
// // //                             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// // //                                 {imagePreview ? (
// // //                                     <img 
// // //                                         src={imagePreview} 
// // //                                         alt="Preview" 
// // //                                         className="w-full h-full object-cover"
// // //                                     />
// // //                                 ) : currentImageUrl ? (
// // //                                     <img 
// // //                                         src={currentImageUrl} 
// // //                                         alt={admin.fullName} 
// // //                                         className="w-full h-full object-cover"
// // //                                         onError={(e) => {
// // //                                             console.error('Failed to load image:', currentImageUrl);
// // //                                             e.target.onerror = null;
// // //                                             e.target.style.display = 'none';
// // //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${admin.fullName?.charAt(0)}</span>`;
// // //                                         }}
// // //                                     />
// // //                                 ) : (
// // //                                     <span className="text-white font-bold text-2xl">
// // //                                         {admin.fullName?.charAt(0)}
// // //                                     </span>
// // //                                 )}
// // //                             </div>
// // //                             {currentImageUrl && !imagePreview && (
// // //                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
// // //                                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// // //                                     </svg>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                         <div className="ml-4">
// // //                             <p className="text-sm font-medium text-purple-800">Current Profile Image</p>
// // //                             <p className="text-xs text-purple-600">Upload new image below to change</p>
// // //                             {currentImageUrl && (
// // //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageUrl.split('/').pop()}</p>
// // //                             )}
// // //                         </div>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="fullName"
// // //                                     value={formData.fullName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 />
// // //                                 {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="userName"
// // //                                     value={formData.userName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 />
// // //                                 {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // //                                 <input
// // //                                     type="email"
// // //                                     name="email"
// // //                                     value={formData.email}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 />
// // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="contactNo"
// // //                                     value={formData.contactNo}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 />
// // //                                 {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// // //                                 <select
// // //                                     name="gender"
// // //                                     value={formData.gender}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 >
// // //                                     <option value="">Select Gender</option>
// // //                                     <option value="MALE">Male</option>
// // //                                     <option value="FEMALE">Female</option>
// // //                                     <option value="OTHER">Other</option>
// // //                                 </select>
// // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
// // //                                 <select
// // //                                     name="role"
// // //                                     value={formData.role}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// // //                                         errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 >
// // //                                     <option value="ADMIN">Admin</option>
// // //                                     <option value="SUPER_ADMIN">Super Admin</option>
// // //                                 </select>
// // //                                 {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// // //                             <input
// // //                                 type="password"
// // //                                 name="password"
// // //                                 value={formData.password}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 placeholder="Leave blank to keep current"
// // //                             />
// // //                             <p className="text-xs text-gray-500 mt-1">Only fill this if you want to change the password</p>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // //                                 errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // //                             }`}>
// // //                                 <input
// // //                                     type="file"
// // //                                     id="editAdminImage"
// // //                                     onChange={handleImageChange}
// // //                                     className="hidden"
// // //                                     accept="image/*"
// // //                                 />
// // //                                 <label htmlFor="editAdminImage" className="cursor-pointer block">
// // //                                     {imagePreview ? (
// // //                                         <div className="flex flex-col items-center">
// // //                                             <img 
// // //                                                 src={imagePreview} 
// // //                                                 alt="Preview" 
// // //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// // //                                             />
// // //                                             <p className="text-sm text-teal-600">{adminImage.name}</p>
// // //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// // //                                         </div>
// // //                                     ) : (
// // //                                         <>
// // //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                                             </svg>
// // //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // //                                         </>
// // //                                     )}
// // //                                 </label>
// // //                             </div>
// // //                             {errors.adminImage && <p className="mt-1 text-xs text-red-600">{errors.adminImage}</p>}
// // //                         </div>

// // //                         <div className="flex gap-4 pt-4">
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
// // //                             >
// // //                                 {isSubmitting ? (
// // //                                     <>
// // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                                         </svg>
// // //                                         Updating...
// // //                                     </>
// // //                                 ) : (
// // //                                     'Update Admin'
// // //                                 )}
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

// // // export default EditAdminModal;



// // // src/Pages/Admin/components/modals/EditAdminModal.jsx
// // import React, { useState, useEffect } from 'react';

// // const EditAdminModal = ({ admin, onClose, onSave, BASE_URL }) => {
// //     const [formData, setFormData] = useState({
// //         fullName: '',
// //         userName: '',
// //         email: '',
// //         contactNo: '',
// //         gender: '',
// //         role: '',
// //         password: '' // Optional for update
// //     });
// //     const [adminImage, setAdminImage] = useState(null);
// //     const [imagePreview, setImagePreview] = useState(null);
// //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     // Helper function to get image URL
// //     const getImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
        
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// //             const filename = cleanPath.split('\\').pop().split('/').pop();
// //             return `${BASE_URL}/uploads/admins/${filename}`;
// //         }
        
// //         if (cleanPath.startsWith('/uploads')) {
// //             return `${BASE_URL}${cleanPath}`;
// //         }
        
// //         return `${BASE_URL}/uploads/admins/${cleanPath}`;
// //     };

// //     // Load admin data when modal opens
// //     useEffect(() => {
// //         if (admin) {
// //             console.log('Loading admin data for edit:', admin);
// //             setFormData({
// //                 fullName: admin.fullName || '',
// //                 userName: admin.userName || '',
// //                 email: admin.email || '',
// //                 contactNo: admin.contactNo || '',
// //                 gender: admin.gender || '',
// //                 role: admin.role || 'ADMIN',
// //                 password: ''
// //             });
            
// //             if (admin.adminImage) {
// //                 const url = getImageUrl(admin.adminImage);
// //                 setCurrentImageUrl(url);
// //                 console.log('Current image URL:', url);
// //             }
// //         }
// //     }, [admin]);

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
// //         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //             newErrors.email = 'Invalid email format';
// //         }
// //         if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
// //         if (!formData.gender) newErrors.gender = 'Gender is required';
// //         if (!formData.role) newErrors.role = 'Role is required';
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
// //             setImagePreview(URL.createObjectURL(file));
// //             setErrors(prev => ({ ...prev, adminImage: '' }));
// //         }
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
        
// //         const newErrors = validateForm();
// //         if (Object.keys(newErrors).length > 0) {
// //             setErrors(newErrors);
// //             return;
// //         }

// //         setIsSubmitting(true);

// //         try {
// //             // Create FormData for multipart/form-data
// //             const submitData = new FormData();
            
// //             // Append all fields exactly as backend expects
// //             submitData.append('fullName', formData.fullName);
// //             submitData.append('userName', formData.userName);
// //             submitData.append('email', formData.email);
// //             submitData.append('contactNo', formData.contactNo);
// //             submitData.append('gender', formData.gender);
// //             submitData.append('role', formData.role);
            
// //             // Handle password - backend requires it, so send dummy if not changing
// //             if (formData.password && formData.password.trim() !== '') {
// //                 submitData.append('password', formData.password);
// //             } else {
// //                 // Send a dummy password that will be ignored by backend
// //                 // The backend will keep the existing password
// //                 submitData.append('password', 'dummy_password_not_used');
// //             }
            
// //             // Include image only if new one is selected
// //             if (adminImage) {
// //                 submitData.append('adminImage', adminImage);
// //             }

// //             // Log FormData contents for debugging
// //             console.log('Submitting admin update:');
// //             for (let [key, value] of submitData.entries()) {
// //                 console.log(key, value instanceof File ? `File: ${value.name}` : value);
// //             }

// //             await onSave(submitData);
// //         } catch (error) {
// //             console.error('Error in form submission:', error);
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Current Image Preview */}
// //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
// //                         <div className="relative">
// //                             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// //                                 {imagePreview ? (
// //                                     <img 
// //                                         src={imagePreview} 
// //                                         alt="Preview" 
// //                                         className="w-full h-full object-cover"
// //                                     />
// //                                 ) : currentImageUrl ? (
// //                                     <img 
// //                                         src={currentImageUrl} 
// //                                         alt={admin.fullName} 
// //                                         className="w-full h-full object-cover"
// //                                         onError={(e) => {
// //                                             console.error('Failed to load image:', currentImageUrl);
// //                                             e.target.onerror = null;
// //                                             e.target.style.display = 'none';
// //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${admin.fullName?.charAt(0)}</span>`;
// //                                         }}
// //                                     />
// //                                 ) : (
// //                                     <span className="text-white font-bold text-2xl">
// //                                         {admin.fullName?.charAt(0)}
// //                                     </span>
// //                                 )}
// //                             </div>
// //                             {currentImageUrl && !imagePreview && (
// //                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
// //                                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// //                                     </svg>
// //                                 </div>
// //                             )}
// //                         </div>
// //                         <div className="ml-4">
// //                             <p className="text-sm font-medium text-purple-800">Current Profile Image</p>
// //                             <p className="text-xs text-purple-600">Upload new image below to change</p>
// //                         </div>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="fullName"
// //                                     value={formData.fullName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="userName"
// //                                     value={formData.userName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     value={formData.email}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// //                                 <input
// //                                     type="tel"
// //                                     name="contactNo"
// //                                     value={formData.contactNo}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
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
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
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
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// //                             <input
// //                                 type="password"
// //                                 name="password"
// //                                 value={formData.password}
// //                                 onChange={handleChange}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                 placeholder="Leave blank to keep current"
// //                             />
// //                             <p className="text-xs text-gray-500 mt-1">Only fill this if you want to change the password</p>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// //                                 errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="editAdminImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="editAdminImage" className="cursor-pointer block">
// //                                     {imagePreview ? (
// //                                         <div className="flex flex-col items-center">
// //                                             <img 
// //                                                 src={imagePreview} 
// //                                                 alt="Preview" 
// //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// //                                             />
// //                                             <p className="text-sm text-teal-600">{adminImage.name}</p>
// //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// //                                         </div>
// //                                     ) : (
// //                                         <>
// //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                             </svg>
// //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// //                                         </>
// //                                     )}
// //                                 </label>
// //                             </div>
// //                         </div>

// //                         <div className="flex gap-4 pt-4">
// //                             <button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
// //                             >
// //                                 {isSubmitting ? (
// //                                     <>
// //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                                         </svg>
// //                                         Updating...
// //                                     </>
// //                                 ) : (
// //                                     'Update Admin'
// //                                 )}
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

// // export default EditAdminModal;



// // src/Pages/Admin/components/modals/EditAdminModal.jsx
// import React, { useState, useEffect } from 'react';

// const EditAdminModal = ({ admin, onClose, onSave, BASE_URL }) => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         userName: '',
//         email: '',
//         contactNo: '',
//         gender: '',
//         role: '',
//         password: '' // Optional for update
//     });
//     const [adminImage, setAdminImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [currentImageUrl, setCurrentImageUrl] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});

//     // Helper function to get image URL
//     const getImageUrl = (imagePath) => {
//         if (!imagePath) return null;
        
//         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
//         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
//             const filename = cleanPath.split('\\').pop().split('/').pop();
//             return `${BASE_URL}/uploads/admins/${filename}`;
//         }
        
//         if (cleanPath.startsWith('/uploads')) {
//             return `${BASE_URL}${cleanPath}`;
//         }
        
//         return `${BASE_URL}/uploads/admins/${cleanPath}`;
//     };

//     // Load admin data when modal opens
//     useEffect(() => {
//         if (admin) {
//             console.log('Loading admin data for edit:', admin);
//             setFormData({
//                 fullName: admin.fullName || '',
//                 userName: admin.userName || '',
//                 email: admin.email || '',
//                 contactNo: admin.contactNo || '',
//                 gender: admin.gender || '',
//                 role: admin.role || 'ADMIN',
//                 password: '' // Don't pre-fill password
//             });
            
//             if (admin.adminImage) {
//                 const url = getImageUrl(admin.adminImage);
//                 setCurrentImageUrl(url);
//                 console.log('Current image URL:', url);
//             }
//         }
//     }, [admin]);

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }
//         if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
//         if (!formData.gender) newErrors.gender = 'Gender is required';
//         if (!formData.role) newErrors.role = 'Role is required';
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
        
//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Create FormData for multipart/form-data
//             const submitData = new FormData();
            
//             // Append all required fields
//             submitData.append('fullName', formData.fullName);
//             submitData.append('userName', formData.userName);
//             submitData.append('email', formData.email);
//             submitData.append('contactNo', formData.contactNo);
//             submitData.append('gender', formData.gender);
//             submitData.append('role', formData.role);
            
//             // Handle password - IMPORTANT: Only send if user entered a new password
//             // If password field is empty, don't send it at all
//             if (formData.password && formData.password.trim() !== '') {
//                 submitData.append('password', formData.password);
//                 console.log('Sending new password');
//             } else {
//                 // Don't append password at all - let backend keep existing
//                 console.log('No password change - skipping password field');
//             }
            
//             // Include image only if new one is selected
//             if (adminImage) {
//                 submitData.append('adminImage', adminImage);
//                 console.log('Sending new image:', adminImage.name);
//             }

//             // Log FormData contents for debugging
//             console.log('Submitting admin update:');
//             for (let [key, value] of submitData.entries()) {
//                 console.log(key, value instanceof File ? `File: ${value.name}` : value);
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
//                         <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Current Image Preview */}
//                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
//                         <div className="relative">
//                             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
//                                 {imagePreview ? (
//                                     <img 
//                                         src={imagePreview} 
//                                         alt="Preview" 
//                                         className="w-full h-full object-cover"
//                                     />
//                                 ) : currentImageUrl ? (
//                                     <img 
//                                         src={currentImageUrl} 
//                                         alt={admin.fullName} 
//                                         className="w-full h-full object-cover"
//                                         onError={(e) => {
//                                             console.error('Failed to load image:', currentImageUrl);
//                                             e.target.onerror = null;
//                                             e.target.style.display = 'none';
//                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${admin.fullName?.charAt(0)}</span>`;
//                                         }}
//                                     />
//                                 ) : (
//                                     <span className="text-white font-bold text-2xl">
//                                         {admin.fullName?.charAt(0)}
//                                     </span>
//                                 )}
//                             </div>
//                             {currentImageUrl && !imagePreview && (
//                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
//                                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="ml-4">
//                             <p className="text-sm font-medium text-purple-800">Current Profile Image</p>
//                             <p className="text-xs text-purple-600">Upload new image below to change</p>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
//                                 <input
//                                     type="text"
//                                     name="userName"
//                                     value={formData.userName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
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
//                                     name="contactNo"
//                                     value={formData.contactNo}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
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
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
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
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 placeholder="Leave blank to keep current password"
//                             />
//                             <p className="text-xs text-gray-500 mt-1">Only fill this if you want to change the password</p>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                                 errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="editAdminImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/*"
//                                 />
//                                 <label htmlFor="editAdminImage" className="cursor-pointer block">
//                                     {imagePreview ? (
//                                         <div className="flex flex-col items-center">
//                                             <img 
//                                                 src={imagePreview} 
//                                                 alt="Preview" 
//                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
//                                             />
//                                             <p className="text-sm text-teal-600">{adminImage.name}</p>
//                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
//                                         </div>
//                                     ) : (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">Click to change profile image</p>
//                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
//                                         </>
//                                     )}
//                                 </label>
//                             </div>
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
//                                     'Update Admin'
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

// export default EditAdminModal;





// src/Pages/Admin/components/modals/EditAdminModal.jsx
import React, { useState, useEffect } from 'react';

const EditAdminModal = ({ admin, onClose, onSave, BASE_URL }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        contactNo: '',
        gender: '',
        role: '',
        password: '' // Will always send this
    });
    const [adminImage, setAdminImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Helper function to get image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/admins/${filename}`;
        }
        
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        return `${BASE_URL}/uploads/admins/${cleanPath}`;
    };

    // Load admin data when modal opens
    useEffect(() => {
        if (admin) {
            console.log('Loading admin data for edit:', admin);
            setFormData({
                fullName: admin.fullName || '',
                userName: admin.userName || '',
                email: admin.email || '',
                contactNo: admin.contactNo || '',
                gender: admin.gender || '',
                role: admin.role || 'ADMIN',
                password: 'dummy' // Always send a password - backend will hash it
            });
            
            if (admin.adminImage) {
                const url = getImageUrl(admin.adminImage);
                setCurrentImageUrl(url);
                console.log('Current image URL:', url);
            }
        }
    }, [admin]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.userName.trim()) newErrors.userName = 'Username is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.contactNo.trim()) newErrors.contactNo = 'Contact number is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.role) newErrors.role = 'Role is required';
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
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Create FormData for multipart/form-data
            const submitData = new FormData();
            
            // Append all required fields
            submitData.append('fullName', formData.fullName);
            submitData.append('userName', formData.userName);
            submitData.append('email', formData.email);
            submitData.append('contactNo', formData.contactNo);
            submitData.append('gender', formData.gender);
            
            // Fix: Map role to match backend enum exactly
            let roleValue = formData.role;
            if (roleValue === 'SUPER_ADMIN') {
                roleValue = 'Super_Admin';
            }
            submitData.append('role', roleValue);
            
            // IMPORTANT: Always send password - backend requires it
            submitData.append('password', formData.password);
            
            // Include image only if new one is selected
            if (adminImage) {
                submitData.append('adminImage', adminImage);
            }

            // Log FormData contents for debugging
            console.log('Submitting admin update:');
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
                        <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Current Image Preview */}
                    <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                                {imagePreview ? (
                                    <img 
                                        src={imagePreview} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : currentImageUrl ? (
                                    <img 
                                        src={currentImageUrl} 
                                        alt={admin.fullName} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.error('Failed to load image:', currentImageUrl);
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${admin.fullName?.charAt(0)}</span>`;
                                        }}
                                    />
                                ) : (
                                    <span className="text-white font-bold text-2xl">
                                        {admin.fullName?.charAt(0)}
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
                            <p className="text-sm font-medium text-purple-800">Current Profile Image</p>
                            <p className="text-xs text-purple-600">Upload new image below to change</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
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
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
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
                                <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                placeholder="Enter new password"
                            />
                            <p className="text-xs text-gray-500 mt-1">Password is required for update (backend requirement)</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.adminImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="editAdminImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="editAdminImage" className="cursor-pointer block">
                                    {imagePreview ? (
                                        <div className="flex flex-col items-center">
                                            <img 
                                                src={imagePreview} 
                                                alt="Preview" 
                                                className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
                                            />
                                            <p className="text-sm text-teal-600">{adminImage.name}</p>
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
                                    'Update Admin'
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

export default EditAdminModal;