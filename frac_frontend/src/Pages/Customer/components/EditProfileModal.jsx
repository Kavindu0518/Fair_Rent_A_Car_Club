// // // // // // // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import axios from 'axios';

// // // // // // // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // // //         firstName: customer.firstName || '',
// // // // // // // // //         lastName: customer.lastName || '',
// // // // // // // // //         email: customer.email || '',
// // // // // // // // //         contactNumber: customer.contactNumber || '',
// // // // // // // // //         nicNumber: customer.nicNumber || '',
// // // // // // // // //         birthday: customer.birthday ? customer.birthday.split('T')[0] : '',
// // // // // // // // //         gender: customer.gender || '',
// // // // // // // // //         country: customer.country || ''
// // // // // // // // //     });
// // // // // // // // //     const [profileImage, setProfileImage] = useState(null);
// // // // // // // // //     const [imagePreview, setImagePreview] = useState(null);
// // // // // // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // // // //     const [errors, setErrors] = useState({});
// // // // // // // // //     const [errorMessage, setErrorMessage] = useState('');

// // // // // // // // //     const validateForm = () => {
// // // // // // // // //         const newErrors = {};
// // // // // // // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // // // // // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // // // // // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // // // // // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // // // // // // //             newErrors.email = 'Invalid email format';
// // // // // // // // //         }
// // // // // // // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // // // // // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // // // // // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // // // // // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // // // // // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // // // // // // //         return newErrors;
// // // // // // // // //     };

// // // // // // // // //     const handleChange = (e) => {
// // // // // // // // //         const { name, value } = e.target;
// // // // // // // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // // // // // // //         if (errors[name]) {
// // // // // // // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleImageChange = (e) => {
// // // // // // // // //         const file = e.target.files[0];
// // // // // // // // //         if (file) {
// // // // // // // // //             if (!file.type.startsWith('image/')) {
// // // // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
// // // // // // // // //                 return;
// // // // // // // // //             }
// // // // // // // // //             if (file.size > 5 * 1024 * 1024) {
// // // // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
// // // // // // // // //                 return;
// // // // // // // // //             }
// // // // // // // // //             setProfileImage(file);
// // // // // // // // //             setImagePreview(URL.createObjectURL(file));
// // // // // // // // //             setErrors(prev => ({ ...prev, profileImage: '' }));
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // // //         e.preventDefault();
        
// // // // // // // // //         const validationErrors = validateForm();
// // // // // // // // //         if (Object.keys(validationErrors).length > 0) {
// // // // // // // // //             setErrors(validationErrors);
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         setIsSubmitting(true);
// // // // // // // // //         setErrorMessage('');

// // // // // // // // //         try {
// // // // // // // // //             const token = localStorage.getItem('customerToken');
// // // // // // // // //             const customerId = localStorage.getItem('customerId');

// // // // // // // // //             const submitData = new FormData();
// // // // // // // // //             submitData.append('firstName', formData.firstName);
// // // // // // // // //             submitData.append('lastName', formData.lastName);
// // // // // // // // //             submitData.append('email', formData.email);
// // // // // // // // //             submitData.append('contactNumber', formData.contactNumber);
// // // // // // // // //             submitData.append('nicNumber', formData.nicNumber);
// // // // // // // // //             submitData.append('birthday', formData.birthday);
// // // // // // // // //             submitData.append('gender', formData.gender);
// // // // // // // // //             submitData.append('country', formData.country);
// // // // // // // // //             submitData.append('password', 'dummy'); // Backend requires password
            
// // // // // // // // //             if (profileImage) {
// // // // // // // // //                 submitData.append('customerImage', profileImage);
// // // // // // // // //             }

// // // // // // // // //             const response = await axios.put(
// // // // // // // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // // // // // // //                 submitData,
// // // // // // // // //                 {
// // // // // // // // //                     headers: {
// // // // // // // // //                         'Authorization': `Bearer ${token}`,
// // // // // // // // //                         'Content-Type': 'multipart/form-data'
// // // // // // // // //                     }
// // // // // // // // //                 }
// // // // // // // // //             );

// // // // // // // // //             if (response.status === 200) {
// // // // // // // // //                 onUpdate(response.data);
// // // // // // // // //                 onClose();
// // // // // // // // //             }
// // // // // // // // //         } catch (err) {
// // // // // // // // //             console.error('Error updating profile:', err);
// // // // // // // // //             setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
// // // // // // // // //         } finally {
// // // // // // // // //             setIsSubmitting(false);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const getImageUrl = (imagePath) => {
// // // // // // // // //         if (!imagePath) return null;
// // // // // // // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // // // // // // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // // // // // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // // // // // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // // // // // // //         }
// // // // // // // // //         if (cleanPath.startsWith('/uploads')) {
// // // // // // // // //             return `${BASE_URL}${cleanPath}`;
// // // // // // // // //         }
// // // // // // // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // // // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // // // // // // //                 <div className="p-6">
// // // // // // // // //                     {/* Header */}
// // // // // // // // //                     <div className="flex justify-between items-center mb-6">
// // // // // // // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // // // // // // //                         <button
// // // // // // // // //                             onClick={onClose}
// // // // // // // // //                             className="text-gray-500 hover:text-gray-700"
// // // // // // // // //                         >
// // // // // // // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // //                             </svg>
// // // // // // // // //                         </button>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Error Message */}
// // // // // // // // //                     {errorMessage && (
// // // // // // // // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
// // // // // // // // //                             <p className="text-red-700">{errorMessage}</p>
// // // // // // // // //                         </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Current Profile Image */}
// // // // // // // // //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
// // // // // // // // //                         <div className="relative">
// // // // // // // // //                             <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
// // // // // // // // //                                 {imagePreview ? (
// // // // // // // // //                                     <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
// // // // // // // // //                                 ) : customer.customerImage ? (
// // // // // // // // //                                     <img 
// // // // // // // // //                                         src={getImageUrl(customer.customerImage)} 
// // // // // // // // //                                         alt={customer.firstName}
// // // // // // // // //                                         className="w-full h-full object-cover"
// // // // // // // // //                                     />
// // // // // // // // //                                 ) : (
// // // // // // // // //                                     <div className="w-full h-full bg-teal-600 flex items-center justify-center text-white text-2xl font-bold">
// // // // // // // // //                                         {customer.firstName?.charAt(0)}
// // // // // // // // //                                     </div>
// // // // // // // // //                                 )}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="ml-4">
// // // // // // // // //                             <p className="text-sm text-gray-600">Current Profile Picture</p>
// // // // // // // // //                             <p className="text-xs text-gray-500">Upload a new image below to change</p>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>

// // // // // // // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="text"
// // // // // // // // //                                     name="firstName"
// // // // // // // // //                                     value={formData.firstName}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="text"
// // // // // // // // //                                     name="lastName"
// // // // // // // // //                                     value={formData.lastName}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="email"
// // // // // // // // //                                     name="email"
// // // // // // // // //                                     value={formData.email}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="tel"
// // // // // // // // //                                     name="contactNumber"
// // // // // // // // //                                     value={formData.contactNumber}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="text"
// // // // // // // // //                                     name="nicNumber"
// // // // // // // // //                                     value={formData.nicNumber}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="date"
// // // // // // // // //                                     name="birthday"
// // // // // // // // //                                     value={formData.birthday}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// // // // // // // // //                                 <select
// // // // // // // // //                                     name="gender"
// // // // // // // // //                                     value={formData.gender}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 bg-white ${
// // // // // // // // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 >
// // // // // // // // //                                     <option value="">Select Gender</option>
// // // // // // // // //                                     <option value="MALE">Male</option>
// // // // // // // // //                                     <option value="FEMALE">Female</option>
// // // // // // // // //                                     <option value="OTHER">Other</option>
// // // // // // // // //                                 </select>
// // // // // // // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                             <div>
// // // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="text"
// // // // // // // // //                                     name="country"
// // // // // // // // //                                     value={formData.country}
// // // // // // // // //                                     onChange={handleChange}
// // // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // // //                                     }`}
// // // // // // // // //                                 />
// // // // // // // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Profile Image Upload */}
// // // // // // // // //                         <div>
// // // // // // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // // // // // // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // // // // // // //                                 errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // // // // // // //                             }`}>
// // // // // // // // //                                 <input
// // // // // // // // //                                     type="file"
// // // // // // // // //                                     id="profileImage"
// // // // // // // // //                                     onChange={handleImageChange}
// // // // // // // // //                                     className="hidden"
// // // // // // // // //                                     accept="image/*"
// // // // // // // // //                                 />
// // // // // // // // //                                 <label htmlFor="profileImage" className="cursor-pointer block">
// // // // // // // // //                                     {imagePreview ? (
// // // // // // // // //                                         <div className="flex flex-col items-center">
// // // // // // // // //                                             <img 
// // // // // // // // //                                                 src={imagePreview} 
// // // // // // // // //                                                 alt="Preview" 
// // // // // // // // //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// // // // // // // // //                                             />
// // // // // // // // //                                             <p className="text-sm text-teal-600">Click to change image</p>
// // // // // // // // //                                         </div>
// // // // // // // // //                                     ) : (
// // // // // // // // //                                         <>
// // // // // // // // //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // // // // // //                                             </svg>
// // // // // // // // //                                             <p className="text-sm text-gray-600">Click to upload new profile image</p>
// // // // // // // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // // // // // // //                                         </>
// // // // // // // // //                                     )}
// // // // // // // // //                                 </label>
// // // // // // // // //                             </div>
// // // // // // // // //                             {errors.profileImage && <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>}
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // //                         <div className="flex gap-4 pt-4">
// // // // // // // // //                             <button
// // // // // // // // //                                 type="submit"
// // // // // // // // //                                 disabled={isSubmitting}
// // // // // // // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition disabled:opacity-50 flex items-center justify-center"
// // // // // // // // //                             >
// // // // // // // // //                                 {isSubmitting ? (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // // // // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // // //                                         </svg>
// // // // // // // // //                                         Saving...
// // // // // // // // //                                     </>
// // // // // // // // //                                 ) : (
// // // // // // // // //                                     'Save Changes'
// // // // // // // // //                                 )}
// // // // // // // // //                             </button>
// // // // // // // // //                             <button
// // // // // // // // //                                 type="button"
// // // // // // // // //                                 onClick={onClose}
// // // // // // // // //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
// // // // // // // // //                             >
// // // // // // // // //                                 Cancel
// // // // // // // // //                             </button>
// // // // // // // // //                         </div>
// // // // // // // // //                     </form>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default EditProfileModal;



// // // // // // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';

// // // // // // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // //         firstName: '',
// // // // // // // //         lastName: '',
// // // // // // // //         email: '',
// // // // // // // //         contactNumber: '',
// // // // // // // //         nicNumber: '',
// // // // // // // //         birthday: '',
// // // // // // // //         gender: '',
// // // // // // // //         country: ''
// // // // // // // //     });
// // // // // // // //     const [profileImage, setProfileImage] = useState(null);
// // // // // // // //     const [imagePreview, setImagePreview] = useState(null);
// // // // // // // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // // // // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // // //     const [errors, setErrors] = useState({});
// // // // // // // //     const [errorMessage, setErrorMessage] = useState('');

// // // // // // // //     // Load customer data when modal opens
// // // // // // // //     useEffect(() => {
// // // // // // // //         if (customer) {
// // // // // // // //             console.log('Loading customer data for edit:', customer);
// // // // // // // //             setFormData({
// // // // // // // //                 firstName: customer.firstName || '',
// // // // // // // //                 lastName: customer.lastName || '',
// // // // // // // //                 email: customer.email || '',
// // // // // // // //                 contactNumber: customer.contactNumber || '',
// // // // // // // //                 nicNumber: customer.nicNumber || '',
// // // // // // // //                 birthday: customer.birthday ? customer.birthday.split('T')[0] : '',
// // // // // // // //                 gender: customer.gender || '',
// // // // // // // //                 country: customer.country || 'Sri Lanka'
// // // // // // // //             });
            
// // // // // // // //             if (customer.customerImage) {
// // // // // // // //                 const url = getImageUrl(customer.customerImage);
// // // // // // // //                 setCurrentImageUrl(url);
// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     }, [customer]);

// // // // // // // //     const getImageUrl = (imagePath) => {
// // // // // // // //         if (!imagePath) return null;
// // // // // // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // // // // // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // // // // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // // // // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // // // // // //         }
// // // // // // // //         if (cleanPath.startsWith('/uploads')) {
// // // // // // // //             return `${BASE_URL}${cleanPath}`;
// // // // // // // //         }
// // // // // // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // // // // // //     };

// // // // // // // //     const validateForm = () => {
// // // // // // // //         const newErrors = {};
// // // // // // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // // // // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // // // // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // // // // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // // // // // //             newErrors.email = 'Invalid email format';
// // // // // // // //         }
// // // // // // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // // // // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // // // // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // // // // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // // // // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // // // // // //         return newErrors;
// // // // // // // //     };

// // // // // // // //     const handleChange = (e) => {
// // // // // // // //         const { name, value } = e.target;
// // // // // // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // // // // // //         if (errors[name]) {
// // // // // // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleImageChange = (e) => {
// // // // // // // //         const file = e.target.files[0];
// // // // // // // //         if (file) {
// // // // // // // //             if (!file.type.startsWith('image/')) {
// // // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
// // // // // // // //                 return;
// // // // // // // //             }
// // // // // // // //             if (file.size > 5 * 1024 * 1024) {
// // // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
// // // // // // // //                 return;
// // // // // // // //             }
// // // // // // // //             setProfileImage(file);
// // // // // // // //             setImagePreview(URL.createObjectURL(file));
// // // // // // // //             setErrors(prev => ({ ...prev, profileImage: '' }));
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // //         e.preventDefault();
        
// // // // // // // //         const validationErrors = validateForm();
// // // // // // // //         if (Object.keys(validationErrors).length > 0) {
// // // // // // // //             setErrors(validationErrors);
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         setIsSubmitting(true);
// // // // // // // //         setErrorMessage('');

// // // // // // // //         try {
// // // // // // // //             const token = localStorage.getItem('customerToken');
// // // // // // // //             const customerId = localStorage.getItem('customerId');

// // // // // // // //             const submitData = new FormData();
// // // // // // // //             submitData.append('firstName', formData.firstName);
// // // // // // // //             submitData.append('lastName', formData.lastName);
// // // // // // // //             submitData.append('email', formData.email);
// // // // // // // //             submitData.append('contactNumber', formData.contactNumber);
// // // // // // // //             submitData.append('nicNumber', formData.nicNumber);
// // // // // // // //             submitData.append('birthday', formData.birthday);
// // // // // // // //             submitData.append('gender', formData.gender);
// // // // // // // //             submitData.append('country', formData.country);
// // // // // // // //             submitData.append('password', 'dummy'); // Backend requires password
            
// // // // // // // //             if (profileImage) {
// // // // // // // //                 submitData.append('customerImage', profileImage);
// // // // // // // //             }

// // // // // // // //             const response = await axios.put(
// // // // // // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // // // // // //                 submitData,
// // // // // // // //                 {
// // // // // // // //                     headers: {
// // // // // // // //                         'Authorization': `Bearer ${token}`,
// // // // // // // //                         'Content-Type': 'multipart/form-data'
// // // // // // // //                     }
// // // // // // // //                 }
// // // // // // // //             );

// // // // // // // //             if (response.status === 200) {
// // // // // // // //                 onUpdate(response.data);
// // // // // // // //                 onClose();
// // // // // // // //             }
// // // // // // // //         } catch (err) {
// // // // // // // //             console.error('Error updating profile:', err);
// // // // // // // //             setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
// // // // // // // //         } finally {
// // // // // // // //             setIsSubmitting(false);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const getInitials = () => {
// // // // // // // //         if (customer?.firstName) {
// // // // // // // //             return customer.firstName.charAt(0).toUpperCase();
// // // // // // // //         }
// // // // // // // //         return 'C';
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // // // // // //                 <div className="p-6">
// // // // // // // //                     {/* Header */}
// // // // // // // //                     <div className="flex justify-between items-center mb-6">
// // // // // // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // // // // // //                         <button
// // // // // // // //                             onClick={onClose}
// // // // // // // //                             className="text-gray-500 hover:text-gray-700"
// // // // // // // //                         >
// // // // // // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // //                             </svg>
// // // // // // // //                         </button>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Error Message */}
// // // // // // // //                     {errorMessage && (
// // // // // // // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
// // // // // // // //                             <p className="text-red-700">{errorMessage}</p>
// // // // // // // //                         </div>
// // // // // // // //                     )}

// // // // // // // //                     {/* Current Profile Image and Name */}
// // // // // // // //                     <div className="flex items-center gap-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
// // // // // // // //                         <div className="relative">
// // // // // // // //                             <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
// // // // // // // //                                 {imagePreview ? (
// // // // // // // //                                     <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
// // // // // // // //                                 ) : currentImageUrl ? (
// // // // // // // //                                     <img 
// // // // // // // //                                         src={currentImageUrl} 
// // // // // // // //                                         alt={customer?.firstName}
// // // // // // // //                                         className="w-full h-full object-cover"
// // // // // // // //                                         onError={(e) => {
// // // // // // // //                                             e.target.onerror = null;
// // // // // // // //                                             e.target.style.display = 'none';
// // // // // // // //                                             e.target.parentElement.innerHTML = `<div class="w-full h-full bg-teal-600 flex items-center justify-center text-white text-3xl font-bold">${getInitials()}</div>`;
// // // // // // // //                                         }}
// // // // // // // //                                     />
// // // // // // // //                                 ) : (
// // // // // // // //                                     <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">
// // // // // // // //                                         {getInitials()}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                         <div>
// // // // // // // //                             <h3 className="text-xl font-bold text-gray-800">{customer?.firstName} {customer?.lastName}</h3>
// // // // // // // //                             <p className="text-sm text-gray-600 mt-1">{customer?.email}</p>
// // // // // // // //                             <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
// // // // // // // //                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // // // //                                 </svg>
// // // // // // // //                                 Member since: {customer?.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A'}
// // // // // // // //                             </p>
// // // // // // // //                         </div>
// // // // // // // //                     </div>

// // // // // // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     First Name <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="text"
// // // // // // // //                                     name="firstName"
// // // // // // // //                                     value={formData.firstName}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="John"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // // // // // //                             </div>
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Last Name <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="text"
// // // // // // // //                                     name="lastName"
// // // // // // // //                                     value={formData.lastName}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="Doe"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Email <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="email"
// // // // // // // //                                     name="email"
// // // // // // // //                                     value={formData.email}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="john@example.com"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // // // // // //                             </div>
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Contact Number <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="tel"
// // // // // // // //                                     name="contactNumber"
// // // // // // // //                                     value={formData.contactNumber}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="0771234567"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     NIC Number <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="text"
// // // // // // // //                                     name="nicNumber"
// // // // // // // //                                     value={formData.nicNumber}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="901234567V"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // // // // // //                             </div>
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Birthday <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="date"
// // // // // // // //                                     name="birthday"
// // // // // // // //                                     value={formData.birthday}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                 />
// // // // // // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Gender <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <select
// // // // // // // //                                     name="gender"
// // // // // // // //                                     value={formData.gender}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 bg-white ${
// // // // // // // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                 >
// // // // // // // //                                     <option value="">Select Gender</option>
// // // // // // // //                                     <option value="MALE">Male</option>
// // // // // // // //                                     <option value="FEMALE">Female</option>
// // // // // // // //                                     <option value="OTHER">Other</option>
// // // // // // // //                                 </select>
// // // // // // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // // // // // //                             </div>
// // // // // // // //                             <div>
// // // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                                     Country <span className="text-red-500">*</span>
// // // // // // // //                                 </label>
// // // // // // // //                                 <input
// // // // // // // //                                     type="text"
// // // // // // // //                                     name="country"
// // // // // // // //                                     value={formData.country}
// // // // // // // //                                     onChange={handleChange}
// // // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // // //                                     }`}
// // // // // // // //                                     placeholder="Sri Lanka"
// // // // // // // //                                 />
// // // // // // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Profile Image Upload */}
// // // // // // // //                         <div>
// // // // // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // // // // // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // // // // // //                                 errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // // // // // //                             }`}>
// // // // // // // //                                 <input
// // // // // // // //                                     type="file"
// // // // // // // //                                     id="profileImage"
// // // // // // // //                                     onChange={handleImageChange}
// // // // // // // //                                     className="hidden"
// // // // // // // //                                     accept="image/*"
// // // // // // // //                                 />
// // // // // // // //                                 <label htmlFor="profileImage" className="cursor-pointer block">
// // // // // // // //                                     {imagePreview ? (
// // // // // // // //                                         <div className="flex flex-col items-center">
// // // // // // // //                                             <img 
// // // // // // // //                                                 src={imagePreview} 
// // // // // // // //                                                 alt="Preview" 
// // // // // // // //                                                 className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-500"
// // // // // // // //                                             />
// // // // // // // //                                             <p className="text-sm text-teal-600">{profileImage.name}</p>
// // // // // // // //                                             <p className="text-xs text-gray-500 mt-1">Click to change image</p>
// // // // // // // //                                         </div>
// // // // // // // //                                     ) : (
// // // // // // // //                                         <>
// // // // // // // //                                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // // // // //                                             </svg>
// // // // // // // //                                             <p className="text-sm text-gray-600">Click to upload new profile image</p>
// // // // // // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // // // // // //                                             {currentImageUrl && !imagePreview && (
// // // // // // // //                                                 <p className="text-xs text-teal-600 mt-2">Current image: {customer?.customerImage?.split('\\').pop()?.split('/').pop()}</p>
// // // // // // // //                                             )}
// // // // // // // //                                         </>
// // // // // // // //                                     )}
// // // // // // // //                                 </label>
// // // // // // // //                             </div>
// // // // // // // //                             {errors.profileImage && <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>}
// // // // // // // //                         </div>

// // // // // // // //                         {/* Action Buttons */}
// // // // // // // //                         <div className="flex gap-4 pt-6 border-t border-gray-200">
// // // // // // // //                             <button
// // // // // // // //                                 type="submit"
// // // // // // // //                                 disabled={isSubmitting}
// // // // // // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition disabled:opacity-50 flex items-center justify-center"
// // // // // // // //                             >
// // // // // // // //                                 {isSubmitting ? (
// // // // // // // //                                     <>
// // // // // // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // // // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // // //                                         </svg>
// // // // // // // //                                         Saving...
// // // // // // // //                                     </>
// // // // // // // //                                 ) : (
// // // // // // // //                                     'Save Changes'
// // // // // // // //                                 )}
// // // // // // // //                             </button>
// // // // // // // //                             <button
// // // // // // // //                                 type="button"
// // // // // // // //                                 onClick={onClose}
// // // // // // // //                                 className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
// // // // // // // //                             >
// // // // // // // //                                 Cancel
// // // // // // // //                             </button>
// // // // // // // //                         </div>
// // // // // // // //                     </form>
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default EditProfileModal;




// // // // // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // // // // //     // Add debug log to see what customer data is received
// // // // // // //     console.log('EditProfileModal received customer:', customer);

// // // // // // //     const [formData, setFormData] = useState({
// // // // // // //         firstName: '',
// // // // // // //         lastName: '',
// // // // // // //         email: '',
// // // // // // //         contactNumber: '',
// // // // // // //         nicNumber: '',
// // // // // // //         birthday: '',
// // // // // // //         gender: '',
// // // // // // //         country: 'Sri Lanka'
// // // // // // //     });
// // // // // // //     const [profileImage, setProfileImage] = useState(null);
// // // // // // //     const [imagePreview, setImagePreview] = useState(null);
// // // // // // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // // // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // // //     const [errors, setErrors] = useState({});
// // // // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // // // //     const [isLoading, setIsLoading] = useState(true);

// // // // // // //     // Fetch fresh customer data when modal opens
// // // // // // //     useEffect(() => {
// // // // // // //         const fetchFreshCustomerData = async () => {
// // // // // // //             setIsLoading(true);
// // // // // // //             try {
// // // // // // //                 const token = localStorage.getItem('customerToken');
// // // // // // //                 const customerId = localStorage.getItem('customerId');
                
// // // // // // //                 const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
// // // // // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // // // // //                 });

// // // // // // //                 if (response.status === 200) {
// // // // // // //                     const data = response.data;
// // // // // // //                     console.log('Fetched fresh customer data:', data);
                    
// // // // // // //                     setFormData({
// // // // // // //                         firstName: data.firstName || '',
// // // // // // //                         lastName: data.lastName || '',
// // // // // // //                         email: data.email || '',
// // // // // // //                         contactNumber: data.contactNumber || '',
// // // // // // //                         nicNumber: data.nicNumber || '',
// // // // // // //                         birthday: data.birthday ? data.birthday.split('T')[0] : '',
// // // // // // //                         gender: data.gender || '',
// // // // // // //                         country: data.country || 'Sri Lanka'
// // // // // // //                     });
                    
// // // // // // //                     if (data.customerImage) {
// // // // // // //                         const url = getImageUrl(data.customerImage);
// // // // // // //                         setCurrentImageUrl(url);
// // // // // // //                     }
// // // // // // //                 }
// // // // // // //             } catch (err) {
// // // // // // //                 console.error('Error fetching customer data:', err);
// // // // // // //                 setErrorMessage('Failed to load customer data');
// // // // // // //             } finally {
// // // // // // //                 setIsLoading(false);
// // // // // // //             }
// // // // // // //         };

// // // // // // //         fetchFreshCustomerData();
// // // // // // //     }, [BASE_URL]);

// // // // // // //     const getImageUrl = (imagePath) => {
// // // // // // //         if (!imagePath) return null;
// // // // // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // // // // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // // // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // // // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // // // // //         }
// // // // // // //         if (cleanPath.startsWith('/uploads')) {
// // // // // // //             return `${BASE_URL}${cleanPath}`;
// // // // // // //         }
// // // // // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // // // // //     };

// // // // // // //     const validateForm = () => {
// // // // // // //         const newErrors = {};
// // // // // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // // // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // // // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // // // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // // // // //             newErrors.email = 'Invalid email format';
// // // // // // //         }
// // // // // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // // // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // // // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // // // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // // // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // // // // //         return newErrors;
// // // // // // //     };

// // // // // // //     const handleChange = (e) => {
// // // // // // //         const { name, value } = e.target;
// // // // // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // // // // //         if (errors[name]) {
// // // // // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleImageChange = (e) => {
// // // // // // //         const file = e.target.files[0];
// // // // // // //         if (file) {
// // // // // // //             if (!file.type.startsWith('image/')) {
// // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
// // // // // // //                 return;
// // // // // // //             }
// // // // // // //             if (file.size > 5 * 1024 * 1024) {
// // // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
// // // // // // //                 return;
// // // // // // //             }
// // // // // // //             setProfileImage(file);
// // // // // // //             setImagePreview(URL.createObjectURL(file));
// // // // // // //             setErrors(prev => ({ ...prev, profileImage: '' }));
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleSubmit = async (e) => {
// // // // // // //         e.preventDefault();
        
// // // // // // //         const validationErrors = validateForm();
// // // // // // //         if (Object.keys(validationErrors).length > 0) {
// // // // // // //             setErrors(validationErrors);
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         setIsSubmitting(true);
// // // // // // //         setErrorMessage('');

// // // // // // //         try {
// // // // // // //             const token = localStorage.getItem('customerToken');
// // // // // // //             const customerId = localStorage.getItem('customerId');

// // // // // // //             const submitData = new FormData();
// // // // // // //             submitData.append('firstName', formData.firstName);
// // // // // // //             submitData.append('lastName', formData.lastName);
// // // // // // //             submitData.append('email', formData.email);
// // // // // // //             submitData.append('contactNumber', formData.contactNumber);
// // // // // // //             submitData.append('nicNumber', formData.nicNumber);
// // // // // // //             submitData.append('birthday', formData.birthday);
// // // // // // //             submitData.append('gender', formData.gender);
// // // // // // //             submitData.append('country', formData.country);
// // // // // // //             submitData.append('password', 'dummy'); // Backend requires password
            
// // // // // // //             if (profileImage) {
// // // // // // //                 submitData.append('customerImage', profileImage);
// // // // // // //             }

// // // // // // //             const response = await axios.put(
// // // // // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // // // // //                 submitData,
// // // // // // //                 {
// // // // // // //                     headers: {
// // // // // // //                         'Authorization': `Bearer ${token}`,
// // // // // // //                         'Content-Type': 'multipart/form-data'
// // // // // // //                     }
// // // // // // //                 }
// // // // // // //             );

// // // // // // //             if (response.status === 200) {
// // // // // // //                 onUpdate(response.data);
// // // // // // //                 onClose();
// // // // // // //             }
// // // // // // //         } catch (err) {
// // // // // // //             console.error('Error updating profile:', err);
// // // // // // //             setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
// // // // // // //         } finally {
// // // // // // //             setIsSubmitting(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const getInitials = () => {
// // // // // // //         if (formData.firstName) {
// // // // // // //             return formData.firstName.charAt(0).toUpperCase();
// // // // // // //         }
// // // // // // //         return 'C';
// // // // // // //     };

// // // // // // //     if (isLoading) {
// // // // // // //         return (
// // // // // // //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // // //                 <div className="bg-white rounded-2xl shadow-xl p-8">
// // // // // // //                     <div className="text-center">
// // // // // // //                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // // // // // //                         <p className="mt-2 text-gray-600">Loading profile data...</p>
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         );
// // // // // // //     }

// // // // // // //     return (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // // // // //                 <div className="p-6">
// // // // // // //                     {/* Header */}
// // // // // // //                     <div className="flex justify-between items-center mb-6">
// // // // // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // // // // //                         <button
// // // // // // //                             onClick={onClose}
// // // // // // //                             className="text-gray-500 hover:text-gray-700"
// // // // // // //                         >
// // // // // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // //                             </svg>
// // // // // // //                         </button>
// // // // // // //                     </div>

// // // // // // //                     {/* Error Message */}
// // // // // // //                     {errorMessage && (
// // // // // // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
// // // // // // //                             <p className="text-red-700">{errorMessage}</p>
// // // // // // //                         </div>
// // // // // // //                     )}

// // // // // // //                     {/* Current Profile Image and Name - SHOWING CURRENT DATA */}
// // // // // // //                     <div className="flex items-center gap-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
// // // // // // //                         <div className="relative">
// // // // // // //                             <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
// // // // // // //                                 {imagePreview ? (
// // // // // // //                                     <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
// // // // // // //                                 ) : currentImageUrl ? (
// // // // // // //                                     <img 
// // // // // // //                                         src={currentImageUrl} 
// // // // // // //                                         alt={formData.firstName}
// // // // // // //                                         className="w-full h-full object-cover"
// // // // // // //                                         onError={(e) => {
// // // // // // //                                             e.target.onerror = null;
// // // // // // //                                             e.target.style.display = 'none';
// // // // // // //                                             e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">${getInitials()}</div>`;
// // // // // // //                                         }}
// // // // // // //                                     />
// // // // // // //                                 ) : (
// // // // // // //                                     <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">
// // // // // // //                                         {getInitials()}
// // // // // // //                                     </div>
// // // // // // //                                 )}
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                         <div>
// // // // // // //                             <h3 className="text-xl font-bold text-gray-800">{formData.firstName} {formData.lastName}</h3>
// // // // // // //                             <p className="text-sm text-gray-600 mt-1">{formData.email}</p>
// // // // // // //                             <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
// // // // // // //                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // // //                                 </svg>
// // // // // // //                                 Member since: {customer?.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'N/A'}
// // // // // // //                             </p>
// // // // // // //                         </div>
// // // // // // //                     </div>

// // // // // // //                     {/* Form - ALL FIELDS PRE-FILLED WITH CURRENT DATA */}
// // // // // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     First Name <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="text"
// // // // // // //                                     name="firstName"
// // // // // // //                                     value={formData.firstName}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="John"
// // // // // // //                                 />
// // // // // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // // // // //                                 {/* Debug: Show current value */}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.firstName}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Last Name <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="text"
// // // // // // //                                     name="lastName"
// // // // // // //                                     value={formData.lastName}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="Doe"
// // // // // // //                                 />
// // // // // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.lastName}</p>
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Email <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="email"
// // // // // // //                                     name="email"
// // // // // // //                                     value={formData.email}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="john@example.com"
// // // // // // //                                 />
// // // // // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.email}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Contact Number <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="tel"
// // // // // // //                                     name="contactNumber"
// // // // // // //                                     value={formData.contactNumber}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="0771234567"
// // // // // // //                                 />
// // // // // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.contactNumber}</p>
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     NIC Number <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="text"
// // // // // // //                                     name="nicNumber"
// // // // // // //                                     value={formData.nicNumber}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="901234567V"
// // // // // // //                                 />
// // // // // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.nicNumber}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Birthday <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="date"
// // // // // // //                                     name="birthday"
// // // // // // //                                     value={formData.birthday}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                 />
// // // // // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.birthday}</p>
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Gender <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <select
// // // // // // //                                     name="gender"
// // // // // // //                                     value={formData.gender}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 bg-white ${
// // // // // // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                 >
// // // // // // //                                     <option value="">Select Gender</option>
// // // // // // //                                     <option value="MALE">Male</option>
// // // // // // //                                     <option value="FEMALE">Female</option>
// // // // // // //                                     <option value="OTHER">Other</option>
// // // // // // //                                 </select>
// // // // // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.gender}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // //                                     Country <span className="text-red-500">*</span>
// // // // // // //                                 </label>
// // // // // // //                                 <input
// // // // // // //                                     type="text"
// // // // // // //                                     name="country"
// // // // // // //                                     value={formData.country}
// // // // // // //                                     onChange={handleChange}
// // // // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // // //                                     }`}
// // // // // // //                                     placeholder="Sri Lanka"
// // // // // // //                                 />
// // // // // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // // // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formData.country}</p>
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Profile Image Upload */}
// // // // // // //                         <div>
// // // // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // // // // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // // // // //                                 errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // // // // //                             }`}>
// // // // // // //                                 <input
// // // // // // //                                     type="file"
// // // // // // //                                     id="profileImage"
// // // // // // //                                     onChange={handleImageChange}
// // // // // // //                                     className="hidden"
// // // // // // //                                     accept="image/*"
// // // // // // //                                 />
// // // // // // //                                 <label htmlFor="profileImage" className="cursor-pointer block">
// // // // // // //                                     {imagePreview ? (
// // // // // // //                                         <div className="flex flex-col items-center">
// // // // // // //                                             <img 
// // // // // // //                                                 src={imagePreview} 
// // // // // // //                                                 alt="Preview" 
// // // // // // //                                                 className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-500"
// // // // // // //                                             />
// // // // // // //                                             <p className="text-sm text-teal-600">{profileImage.name}</p>
// // // // // // //                                             <p className="text-xs text-gray-500 mt-1">Click to change image</p>
// // // // // // //                                         </div>
// // // // // // //                                     ) : (
// // // // // // //                                         <>
// // // // // // //                                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // // // //                                             </svg>
// // // // // // //                                             <p className="text-sm text-gray-600">Click to upload new profile image</p>
// // // // // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // // // // //                                             {currentImageUrl && !imagePreview && (
// // // // // // //                                                 <p className="text-xs text-teal-600 mt-2">✓ Current image loaded</p>
// // // // // // //                                             )}
// // // // // // //                                         </>
// // // // // // //                                     )}
// // // // // // //                                 </label>
// // // // // // //                             </div>
// // // // // // //                             {errors.profileImage && <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>}
// // // // // // //                         </div>

// // // // // // //                         {/* Debug Info - Remove in production */}
// // // // // // //                         <div className="bg-gray-50 p-3 rounded-lg text-xs border border-gray-200">
// // // // // // //                             <p className="font-semibold text-gray-700 mb-1">Debug Info:</p>
// // // // // // //                             <p>Form Data: {JSON.stringify(formData, null, 2)}</p>
// // // // // // //                         </div>

// // // // // // //                         {/* Action Buttons */}
// // // // // // //                         <div className="flex gap-4 pt-6 border-t border-gray-200">
// // // // // // //                             <button
// // // // // // //                                 type="submit"
// // // // // // //                                 disabled={isSubmitting}
// // // // // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition disabled:opacity-50 flex items-center justify-center"
// // // // // // //                             >
// // // // // // //                                 {isSubmitting ? (
// // // // // // //                                     <>
// // // // // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // // //                                         </svg>
// // // // // // //                                         Saving...
// // // // // // //                                     </>
// // // // // // //                                 ) : (
// // // // // // //                                     'Save Changes'
// // // // // // //                                 )}
// // // // // // //                             </button>
// // // // // // //                             <button
// // // // // // //                                 type="button"
// // // // // // //                                 onClick={onClose}
// // // // // // //                                 className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
// // // // // // //                             >
// // // // // // //                                 Cancel
// // // // // // //                             </button>
// // // // // // //                         </div>
// // // // // // //                     </form>
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default EditProfileModal;


// // // // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // // // //     console.log('EditProfileModal received customer:', customer);

// // // // // //     const [formData, setFormData] = useState({
// // // // // //         firstName: '',
// // // // // //         lastName: '',
// // // // // //         email: '',
// // // // // //         contactNumber: '',
// // // // // //         nicNumber: '',
// // // // // //         birthday: '',
// // // // // //         gender: '',
// // // // // //         country: 'Sri Lanka'
// // // // // //     });
// // // // // //     const [profileImage, setProfileImage] = useState(null);
// // // // // //     const [imagePreview, setImagePreview] = useState(null);
// // // // // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // //     const [errors, setErrors] = useState({});
// // // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // // //     const [isLoading, setIsLoading] = useState(true);

// // // // // //     // Fetch fresh customer data when modal opens
// // // // // //     useEffect(() => {
// // // // // //         const fetchFreshCustomerData = async () => {
// // // // // //             setIsLoading(true);
// // // // // //             try {
// // // // // //                 const token = localStorage.getItem('customerToken');
// // // // // //                 const customerId = localStorage.getItem('customerId');
                
// // // // // //                 const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
// // // // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // // // //                 });

// // // // // //                 if (response.status === 200) {
// // // // // //                     const data = response.data;
// // // // // //                     console.log('Fetched fresh customer data:', data);
                    
// // // // // //                     setFormData({
// // // // // //                         firstName: data.firstName || '',
// // // // // //                         lastName: data.lastName || '',
// // // // // //                         email: data.email || '',
// // // // // //                         contactNumber: data.contactNumber || '',
// // // // // //                         nicNumber: data.nicNumber || '',
// // // // // //                         birthday: data.birthday ? data.birthday.split('T')[0] : '',
// // // // // //                         gender: data.gender || '',
// // // // // //                         country: data.country || 'Sri Lanka'
// // // // // //                     });
                    
// // // // // //                     if (data.customerImage) {
// // // // // //                         const url = getImageUrl(data.customerImage);
// // // // // //                         setCurrentImageUrl(url);
// // // // // //                     }
// // // // // //                 }
// // // // // //             } catch (err) {
// // // // // //                 console.error('Error fetching customer data:', err);
// // // // // //                 setErrorMessage('Failed to load customer data');
// // // // // //             } finally {
// // // // // //                 setIsLoading(false);
// // // // // //             }
// // // // // //         };

// // // // // //         fetchFreshCustomerData();
// // // // // //     }, [BASE_URL]);

// // // // // //     const getImageUrl = (imagePath) => {
// // // // // //         if (!imagePath) return null;
// // // // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // // // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // // // //         }
// // // // // //         if (cleanPath.startsWith('/uploads')) {
// // // // // //             return `${BASE_URL}${cleanPath}`;
// // // // // //         }
// // // // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // // // //     };

// // // // // //     const validateForm = () => {
// // // // // //         const newErrors = {};
// // // // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // // // //             newErrors.email = 'Invalid email format';
// // // // // //         }
// // // // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // // // //         return newErrors;
// // // // // //     };

// // // // // //     const handleChange = (e) => {
// // // // // //         const { name, value } = e.target;
// // // // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // // // //         if (errors[name]) {
// // // // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // // // //         }
// // // // // //     };

// // // // // //     const handleImageChange = (e) => {
// // // // // //         const file = e.target.files[0];
// // // // // //         if (file) {
// // // // // //             if (!file.type.startsWith('image/')) {
// // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
// // // // // //                 return;
// // // // // //             }
// // // // // //             if (file.size > 5 * 1024 * 1024) {
// // // // // //                 setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
// // // // // //                 return;
// // // // // //             }
// // // // // //             setProfileImage(file);
// // // // // //             setImagePreview(URL.createObjectURL(file));
// // // // // //             setErrors(prev => ({ ...prev, profileImage: '' }));
// // // // // //         }
// // // // // //     };

// // // // // //     const handleSubmit = async (e) => {
// // // // // //         e.preventDefault();
        
// // // // // //         const validationErrors = validateForm();
// // // // // //         if (Object.keys(validationErrors).length > 0) {
// // // // // //             setErrors(validationErrors);
// // // // // //             return;
// // // // // //         }

// // // // // //         setIsSubmitting(true);
// // // // // //         setErrorMessage('');

// // // // // //         try {
// // // // // //             const token = localStorage.getItem('customerToken');
// // // // // //             const customerId = localStorage.getItem('customerId');

// // // // // //             const submitData = new FormData();
// // // // // //             submitData.append('firstName', formData.firstName);
// // // // // //             submitData.append('lastName', formData.lastName);
// // // // // //             submitData.append('email', formData.email);
// // // // // //             submitData.append('contactNumber', formData.contactNumber);
// // // // // //             submitData.append('nicNumber', formData.nicNumber);
// // // // // //             submitData.append('birthday', formData.birthday);
// // // // // //             submitData.append('gender', formData.gender);
// // // // // //             submitData.append('country', formData.country);
// // // // // //             submitData.append('password', 'dummy'); // Backend requires password
            
// // // // // //             if (profileImage) {
// // // // // //                 submitData.append('customerImage', profileImage);
// // // // // //             }

// // // // // //             const response = await axios.put(
// // // // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // // // //                 submitData,
// // // // // //                 {
// // // // // //                     headers: {
// // // // // //                         'Authorization': `Bearer ${token}`,
// // // // // //                         'Content-Type': 'multipart/form-data'
// // // // // //                     }
// // // // // //                 }
// // // // // //             );

// // // // // //             if (response.status === 200) {
// // // // // //                 onUpdate(response.data);
// // // // // //                 onClose();
// // // // // //             }
// // // // // //         } catch (err) {
// // // // // //             console.error('Error updating profile:', err);
// // // // // //             setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
// // // // // //         } finally {
// // // // // //             setIsSubmitting(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const getInitials = () => {
// // // // // //         if (formData.firstName) {
// // // // // //             return formData.firstName.charAt(0).toUpperCase();
// // // // // //         }
// // // // // //         return 'C';
// // // // // //     };

// // // // // //     const formatDisplayDate = (dateString) => {
// // // // // //         if (!dateString) return 'Not set';
// // // // // //         return new Date(dateString).toLocaleDateString('en-US', {
// // // // // //             year: 'numeric',
// // // // // //             month: 'long',
// // // // // //             day: 'numeric'
// // // // // //         });
// // // // // //     };

// // // // // //     if (isLoading) {
// // // // // //         return (
// // // // // //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // //                 <div className="bg-white rounded-2xl shadow-xl p-8">
// // // // // //                     <div className="text-center">
// // // // // //                         <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // // // // //                         <p className="mt-2 text-gray-600">Loading profile data...</p>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         );
// // // // // //     }

// // // // // //     return (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // // // //                 <div className="p-6">
// // // // // //                     {/* Header */}
// // // // // //                     <div className="flex justify-between items-center mb-6">
// // // // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // // // //                         <button
// // // // // //                             onClick={onClose}
// // // // // //                             className="text-gray-500 hover:text-gray-700"
// // // // // //                         >
// // // // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // //                             </svg>
// // // // // //                         </button>
// // // // // //                     </div>

// // // // // //                     {/* Error Message */}
// // // // // //                     {errorMessage && (
// // // // // //                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
// // // // // //                             <p className="text-red-700">{errorMessage}</p>
// // // // // //                         </div>
// // // // // //                     )}

// // // // // //                     {/* Current Profile Summary */}
// // // // // //                     <div className="flex items-center gap-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
// // // // // //                         <div className="relative">
// // // // // //                             <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
// // // // // //                                 {imagePreview ? (
// // // // // //                                     <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
// // // // // //                                 ) : currentImageUrl ? (
// // // // // //                                     <img 
// // // // // //                                         src={currentImageUrl} 
// // // // // //                                         alt={formData.firstName}
// // // // // //                                         className="w-full h-full object-cover"
// // // // // //                                         onError={(e) => {
// // // // // //                                             e.target.onerror = null;
// // // // // //                                             e.target.style.display = 'none';
// // // // // //                                             e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">${getInitials()}</div>`;
// // // // // //                                         }}
// // // // // //                                     />
// // // // // //                                 ) : (
// // // // // //                                     <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">
// // // // // //                                         {getInitials()}
// // // // // //                                     </div>
// // // // // //                                 )}
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                         <div className="flex-1">
// // // // // //                             <h3 className="text-xl font-bold text-gray-800">{formData.firstName} {formData.lastName}</h3>
// // // // // //                             <p className="text-sm text-gray-600 mt-1">{formData.email}</p>
// // // // // //                             <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
// // // // // //                                 <span className="flex items-center gap-1">
// // // // // //                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // //                                     </svg>
// // // // // //                                     Member since: {formatDisplayDate(customer?.createdAt)}
// // // // // //                                 </span>
// // // // // //                                 <span className="flex items-center gap-1">
// // // // // //                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// // // // // //                                     </svg>
// // // // // //                                     NIC: {formData.nicNumber || 'Not set'}
// // // // // //                                 </span>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>

// // // // // //                     {/* Edit Form */}
// // // // // //                     <form onSubmit={handleSubmit} className="space-y-5">
// // // // // //                         {/* First Name & Last Name */}
// // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     First Name <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="text"
// // // // // //                                         name="firstName"
// // // // // //                                         value={formData.firstName}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter first name"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         Current: {formData.firstName || 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Last Name <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="text"
// // // // // //                                         name="lastName"
// // // // // //                                         value={formData.lastName}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter last name"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         Current: {formData.lastName || 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         {/* Email & Contact Number */}
// // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Email <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="email"
// // // // // //                                         name="email"
// // // // // //                                         value={formData.email}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter email"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[100px]">
// // // // // //                                         {formData.email ? formData.email.substring(0, 12) + '...' : 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Contact Number <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="tel"
// // // // // //                                         name="contactNumber"
// // // // // //                                         value={formData.contactNumber}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter contact number"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         {formData.contactNumber || 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         {/* NIC Number & Birthday */}
// // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     NIC Number <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="text"
// // // // // //                                         name="nicNumber"
// // // // // //                                         value={formData.nicNumber}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter NIC number"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         {formData.nicNumber || 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Birthday <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="date"
// // // // // //                                         name="birthday"
// // // // // //                                         value={formData.birthday}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         {formData.birthday || 'not set'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         {/* Gender & Country */}
// // // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Gender <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <select
// // // // // //                                         name="gender"
// // // // // //                                         value={formData.gender}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 bg-white ${
// // // // // //                                             errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                     >
// // // // // //                                         <option value="">Select Gender</option>
// // // // // //                                         <option value="MALE">Male</option>
// // // // // //                                         <option value="FEMALE">Female</option>
// // // // // //                                         <option value="OTHER">Other</option>
// // // // // //                                     </select>
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         {formData.gender || 'not set'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                                     Country <span className="text-red-500">*</span>
// // // // // //                                 </label>
// // // // // //                                 <div className="relative">
// // // // // //                                     <input
// // // // // //                                         type="text"
// // // // // //                                         name="country"
// // // // // //                                         value={formData.country}
// // // // // //                                         onChange={handleChange}
// // // // // //                                         className={`w-full px-4 py-3 pr-20 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
// // // // // //                                             errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // // //                                         }`}
// // // // // //                                         placeholder="Enter country"
// // // // // //                                     />
// // // // // //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// // // // // //                                         {formData.country || 'empty'}
// // // // // //                                     </span>
// // // // // //                                 </div>
// // // // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         {/* Profile Image Upload */}
// // // // // //                         <div>
// // // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
// // // // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // // // //                                 errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // // // //                             }`}>
// // // // // //                                 <input
// // // // // //                                     type="file"
// // // // // //                                     id="profileImage"
// // // // // //                                     onChange={handleImageChange}
// // // // // //                                     className="hidden"
// // // // // //                                     accept="image/*"
// // // // // //                                 />
// // // // // //                                 <label htmlFor="profileImage" className="cursor-pointer block">
// // // // // //                                     {imagePreview ? (
// // // // // //                                         <div className="flex flex-col items-center">
// // // // // //                                             <img 
// // // // // //                                                 src={imagePreview} 
// // // // // //                                                 alt="Preview" 
// // // // // //                                                 className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-500"
// // // // // //                                             />
// // // // // //                                             <p className="text-sm text-teal-600">{profileImage.name}</p>
// // // // // //                                             <p className="text-xs text-gray-500 mt-1">Click to change image</p>
// // // // // //                                         </div>
// // // // // //                                     ) : (
// // // // // //                                         <>
// // // // // //                                             <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // // //                                             </svg>
// // // // // //                                             <p className="text-sm text-gray-600">Click to upload new profile image</p>
// // // // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // // // //                                             {currentImageUrl && !imagePreview && (
// // // // // //                                                 <div className="mt-3 p-2 bg-green-50 rounded-lg">
// // // // // //                                                     <p className="text-xs text-green-600 flex items-center justify-center gap-1">
// // // // // //                                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // // //                                                         </svg>
// // // // // //                                                         Current image loaded
// // // // // //                                                     </p>
// // // // // //                                                 </div>
// // // // // //                                             )}
// // // // // //                                         </>
// // // // // //                                     )}
// // // // // //                                 </label>
// // // // // //                             </div>
// // // // // //                             {errors.profileImage && <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>}
// // // // // //                         </div>

// // // // // //                         {/* Summary of Changes */}
// // // // // //                         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
// // // // // //                             <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
// // // // // //                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // // //                                 </svg>
// // // // // //                                 Current Values Summary
// // // // // //                             </h4>
// // // // // //                             <div className="grid grid-cols-2 gap-2 text-sm">
// // // // // //                                 <div><span className="text-gray-600">First Name:</span> <span className="font-medium">{formData.firstName || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Last Name:</span> <span className="font-medium">{formData.lastName || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Email:</span> <span className="font-medium">{formData.email || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Contact:</span> <span className="font-medium">{formData.contactNumber || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">NIC:</span> <span className="font-medium">{formData.nicNumber || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Birthday:</span> <span className="font-medium">{formData.birthday || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Gender:</span> <span className="font-medium">{formData.gender || '—'}</span></div>
// // // // // //                                 <div><span className="text-gray-600">Country:</span> <span className="font-medium">{formData.country || '—'}</span></div>
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         {/* Action Buttons */}
// // // // // //                         <div className="flex gap-4 pt-6 border-t border-gray-200">
// // // // // //                             <button
// // // // // //                                 type="submit"
// // // // // //                                 disabled={isSubmitting}
// // // // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition disabled:opacity-50 flex items-center justify-center"
// // // // // //                             >
// // // // // //                                 {isSubmitting ? (
// // // // // //                                     <>
// // // // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // //                                         </svg>
// // // // // //                                         Saving Changes...
// // // // // //                                     </>
// // // // // //                                 ) : (
// // // // // //                                     'Save Changes'
// // // // // //                                 )}
// // // // // //                             </button>
// // // // // //                             <button
// // // // // //                                 type="button"
// // // // // //                                 onClick={onClose}
// // // // // //                                 className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
// // // // // //                             >
// // // // // //                                 Cancel
// // // // // //                             </button>
// // // // // //                         </div>
// // // // // //                     </form>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default EditProfileModal;



// // // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';

// // // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // // //     const [formData, setFormData] = useState({
// // // // //         firstName: customer?.firstName || '',
// // // // //         lastName: customer?.lastName || '',
// // // // //         password: '', // Password is optional in update
// // // // //         email: customer?.email || '',
// // // // //         contactNumber: customer?.contactNumber || '',
// // // // //         nicNumber: customer?.nicNumber || '',
// // // // //         birthday: customer?.birthday ? customer.birthday.split('T')[0] : '',
// // // // //         gender: customer?.gender || '',
// // // // //         country: customer?.country || 'Sri Lanka'
// // // // //     });
// // // // //     const [customerImage, setCustomerImage] = useState(null);
// // // // //     const [imagePreview, setImagePreview] = useState(null);
// // // // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //     const [errors, setErrors] = useState({});

// // // // //     // Helper function to get the correct image URL
// // // // //     const getImageUrl = (imagePath) => {
// // // // //         if (!imagePath) return null;
        
// // // // //         // Clean the path
// // // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// // // // //         // If it's a full Windows path
// // // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // // //         }
        
// // // // //         // If it starts with /uploads
// // // // //         if (cleanPath.startsWith('/uploads')) {
// // // // //             return `${BASE_URL}${cleanPath}`;
// // // // //         }
        
// // // // //         // Default case
// // // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // // //     };

// // // // //     // Set current image URL when component mounts
// // // // //     useEffect(() => {
// // // // //         if (customer?.customerImage) {
// // // // //             const url = getImageUrl(customer.customerImage);
// // // // //             setCurrentImageUrl(url);
// // // // //             console.log('Current image URL:', url);
// // // // //         }
// // // // //     }, [customer]);

// // // // //     const validateForm = () => {
// // // // //         const newErrors = {};
// // // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // // //             newErrors.email = 'Invalid email format';
// // // // //         }
// // // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // // //         return newErrors;
// // // // //     };

// // // // //     const handleChange = (e) => {
// // // // //         const { name, value } = e.target;
// // // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // // //         if (errors[name]) {
// // // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // // //         }
// // // // //     };

// // // // //     const handleImageChange = (e) => {
// // // // //         const file = e.target.files[0];
// // // // //         if (file) {
// // // // //             // Validate file type
// // // // //             if (!file.type.startsWith('image/')) {
// // // // //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// // // // //                 return;
// // // // //             }
// // // // //             // Validate file size (5MB)
// // // // //             if (file.size > 5 * 1024 * 1024) {
// // // // //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// // // // //                 return;
// // // // //             }
            
// // // // //             setCustomerImage(file);
// // // // //             setImagePreview(URL.createObjectURL(file));
// // // // //             setErrors(prev => ({ ...prev, customerImage: '' }));
// // // // //         }
// // // // //     };

// // // // //     const handleSubmit = async (e) => {
// // // // //         e.preventDefault();
        
// // // // //         const validationErrors = validateForm();
// // // // //         if (Object.keys(validationErrors).length > 0) {
// // // // //             setErrors(validationErrors);
// // // // //             return;
// // // // //         }

// // // // //         setIsSubmitting(true);

// // // // //         try {
// // // // //             const token = localStorage.getItem('customerToken');
// // // // //             const customerId = localStorage.getItem('customerId');

// // // // //             // Create FormData for multipart/form-data
// // // // //             const submitData = new FormData();
// // // // //             submitData.append('firstName', formData.firstName);
// // // // //             submitData.append('lastName', formData.lastName);
// // // // //             submitData.append('password', formData.password || 'dummy'); // Backend requires password
// // // // //             submitData.append('email', formData.email);
// // // // //             submitData.append('contactNumber', formData.contactNumber);
// // // // //             submitData.append('nicNumber', formData.nicNumber);
// // // // //             submitData.append('birthday', formData.birthday);
// // // // //             submitData.append('gender', formData.gender);
// // // // //             submitData.append('country', formData.country);
            
// // // // //             if (customerImage) {
// // // // //                 submitData.append('customerImage', customerImage);
// // // // //             }

// // // // //             const response = await axios.put(
// // // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // // //                 submitData,
// // // // //                 {
// // // // //                     headers: {
// // // // //                         'Authorization': `Bearer ${token}`,
// // // // //                         'Content-Type': 'multipart/form-data'
// // // // //                     }
// // // // //                 }
// // // // //             );

// // // // //             if (response.status === 200) {
// // // // //                 onUpdate(response.data);
// // // // //                 onClose();
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error('Error in form submission:', error);
// // // // //             setErrors({ submit: error.response?.data?.message || 'Failed to update profile' });
// // // // //         } finally {
// // // // //             setIsSubmitting(false);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // // //                 <div className="p-6">
// // // // //                     <div className="flex justify-between items-center mb-6">
// // // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // //                             </svg>
// // // // //                         </button>
// // // // //                     </div>

// // // // //                     {/* Current Image Preview */}
// // // // //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
// // // // //                         <div className="relative">
// // // // //                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// // // // //                                 {imagePreview ? (
// // // // //                                     <img 
// // // // //                                         src={imagePreview} 
// // // // //                                         alt="Preview" 
// // // // //                                         className="w-full h-full object-cover"
// // // // //                                     />
// // // // //                                 ) : currentImageUrl ? (
// // // // //                                     <img 
// // // // //                                         src={currentImageUrl} 
// // // // //                                         alt={customer?.firstName} 
// // // // //                                         className="w-full h-full object-cover"
// // // // //                                         onError={(e) => {
// // // // //                                             console.error('Failed to load image:', currentImageUrl);
// // // // //                                             e.target.onerror = null;
// // // // //                                             e.target.style.display = 'none';
// // // // //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${customer?.firstName?.charAt(0) || ''}${customer?.lastName?.charAt(0) || ''}</span>`;
// // // // //                                         }}
// // // // //                                     />
// // // // //                                 ) : (
// // // // //                                     <span className="text-white font-bold text-2xl">
// // // // //                                         {customer?.firstName?.charAt(0) || ''}{customer?.lastName?.charAt(0) || ''}
// // // // //                                     </span>
// // // // //                                 )}
// // // // //                             </div>
// // // // //                             {currentImageUrl && !imagePreview && (
// // // // //                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
// // // // //                                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// // // // //                                     </svg>
// // // // //                                 </div>
// // // // //                             )}
// // // // //                         </div>
// // // // //                         <div className="ml-4">
// // // // //                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
// // // // //                             <p className="text-xs text-blue-600">Upload new image below to change</p>
// // // // //                             {currentImageUrl && (
// // // // //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageUrl.split('/').pop()}</p>
// // // // //                             )}
// // // // //                         </div>
// // // // //                     </div>

// // // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     name="firstName"
// // // // //                                     value={formData.firstName}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     name="lastName"
// // // // //                                     value={formData.lastName}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // // //                                 <input
// // // // //                                     type="email"
// // // // //                                     name="email"
// // // // //                                     value={formData.email}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// // // // //                                 <input
// // // // //                                     type="tel"
// // // // //                                     name="contactNumber"
// // // // //                                     value={formData.contactNumber}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     name="nicNumber"
// // // // //                                     value={formData.nicNumber}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// // // // //                                 <input
// // // // //                                     type="date"
// // // // //                                     name="birthday"
// // // // //                                     value={formData.birthday}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 />
// // // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// // // // //                                 <select
// // // // //                                     name="gender"
// // // // //                                     value={formData.gender}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// // // // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                 >
// // // // //                                     <option value="">Select Gender</option>
// // // // //                                     <option value="MALE">Male</option>
// // // // //                                     <option value="FEMALE">Female</option>
// // // // //                                     <option value="OTHER">Other</option>
// // // // //                                 </select>
// // // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     name="country"
// // // // //                                     value={formData.country}
// // // // //                                     onChange={handleChange}
// // // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // // //                                     }`}
// // // // //                                     placeholder="Sri Lanka"
// // // // //                                 />
// // // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div>
// // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                                 Password (Leave blank to keep current)
// // // // //                             </label>
// // // // //                             <input
// // // // //                                 type="password"
// // // // //                                 name="password"
// // // // //                                 value={formData.password}
// // // // //                                 onChange={handleChange}
// // // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // // //                                 placeholder="Enter new password to change"
// // // // //                             />
// // // // //                         </div>

// // // // //                         <div>
// // // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
// // // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // // //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // // //                             }`}>
// // // // //                                 <input
// // // // //                                     type="file"
// // // // //                                     id="editProfileImage"
// // // // //                                     onChange={handleImageChange}
// // // // //                                     className="hidden"
// // // // //                                     accept="image/*"
// // // // //                                 />
// // // // //                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
// // // // //                                     {imagePreview ? (
// // // // //                                         <div className="flex flex-col items-center">
// // // // //                                             <img 
// // // // //                                                 src={imagePreview} 
// // // // //                                                 alt="Preview" 
// // // // //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// // // // //                                             />
// // // // //                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
// // // // //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// // // // //                                         </div>
// // // // //                                     ) : (
// // // // //                                         <>
// // // // //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // //                                             </svg>
// // // // //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// // // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                 </label>
// // // // //                             </div>
// // // // //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
// // // // //                         </div>

// // // // //                         <div className="flex gap-4 pt-4">
// // // // //                             <button
// // // // //                                 type="submit"
// // // // //                                 disabled={isSubmitting}
// // // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
// // // // //                             >
// // // // //                                 {isSubmitting ? (
// // // // //                                     <>
// // // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                                         </svg>
// // // // //                                         Updating...
// // // // //                                     </>
// // // // //                                 ) : (
// // // // //                                     'Update Profile'
// // // // //                                 )}
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 type="button"
// // // // //                                 onClick={onClose}
// // // // //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // // // //                             >
// // // // //                                 Cancel
// // // // //                             </button>
// // // // //                         </div>
// // // // //                     </form>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default EditProfileModal;


// // // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // // //     // Debug: Log the received customer prop
// // // //     console.log('EditProfileModal received customer:', customer);

// // // //     const [formData, setFormData] = useState({
// // // //         firstName: '',
// // // //         lastName: '',
// // // //         password: '', // Password is optional in update
// // // //         email: '',
// // // //         contactNumber: '',
// // // //         nicNumber: '',
// // // //         birthday: '',
// // // //         gender: '',
// // // //         country: 'Sri Lanka'
// // // //     });
// // // //     const [customerImage, setCustomerImage] = useState(null);
// // // //     const [imagePreview, setImagePreview] = useState(null);
// // // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // // //     const [currentImageName, setCurrentImageName] = useState('');
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // // //     const [errors, setErrors] = useState({});

// // // //     // Helper function to get the correct image URL
// // // //     const getImageUrl = (imagePath) => {
// // // //         if (!imagePath) return null;
        
// // // //         // Clean the path
// // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// // // //         // If it's a full Windows path
// // // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // // //         }
        
// // // //         // If it starts with /uploads
// // // //         if (cleanPath.startsWith('/uploads')) {
// // // //             return `${BASE_URL}${cleanPath}`;
// // // //         }
        
// // // //         // Default case
// // // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // // //     };

// // // //     // Extract filename from path
// // // //     const getFileName = (imagePath) => {
// // // //         if (!imagePath) return '';
// // // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // // //         return cleanPath.split('\\').pop().split('/').pop();
// // // //     };

// // // //     // Load customer data when component mounts or customer changes
// // // //     useEffect(() => {
// // // //         if (customer) {
// // // //             console.log('Loading customer data into form:', customer);
            
// // // //             // Format birthday properly
// // // //             let formattedBirthday = customer.birthday || '';
// // // //             if (customer.birthday && customer.birthday.includes('T')) {
// // // //                 formattedBirthday = customer.birthday.split('T')[0];
// // // //             }
            
// // // //             setFormData({
// // // //                 firstName: customer.firstName || '',
// // // //                 lastName: customer.lastName || '',
// // // //                 password: '', // Password is optional
// // // //                 email: customer.email || '',
// // // //                 contactNumber: customer.contactNumber || '',
// // // //                 nicNumber: customer.nicNumber || '',
// // // //                 birthday: formattedBirthday,
// // // //                 gender: customer.gender || '',
// // // //                 country: customer.country || 'Sri Lanka'
// // // //             });
            
// // // //             if (customer.customerImage) {
// // // //                 const url = getImageUrl(customer.customerImage);
// // // //                 const fileName = getFileName(customer.customerImage);
// // // //                 setCurrentImageUrl(url);
// // // //                 setCurrentImageName(fileName);
// // // //                 console.log('Current image URL:', url);
// // // //                 console.log('Current image filename:', fileName);
// // // //             }
// // // //         }
// // // //     }, [customer]);

// // // //     const validateForm = () => {
// // // //         const newErrors = {};
// // // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // // //             newErrors.email = 'Invalid email format';
// // // //         }
// // // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
// // // //         return newErrors;
// // // //     };

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // //         if (errors[name]) {
// // // //             setErrors(prev => ({ ...prev, [name]: '' }));
// // // //         }
// // // //     };

// // // //     const handleImageChange = (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (file) {
// // // //             // Validate file type
// // // //             if (!file.type.startsWith('image/')) {
// // // //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// // // //                 return;
// // // //             }
// // // //             // Validate file size (5MB)
// // // //             if (file.size > 5 * 1024 * 1024) {
// // // //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// // // //                 return;
// // // //             }
            
// // // //             setCustomerImage(file);
// // // //             setImagePreview(URL.createObjectURL(file));
// // // //             setErrors(prev => ({ ...prev, customerImage: '' }));
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
        
// // // //         const validationErrors = validateForm();
// // // //         if (Object.keys(validationErrors).length > 0) {
// // // //             setErrors(validationErrors);
// // // //             return;
// // // //         }

// // // //         setIsSubmitting(true);

// // // //         try {
// // // //             const token = localStorage.getItem('customerToken');
// // // //             const customerId = localStorage.getItem('customerId');

// // // //             // Create FormData for multipart/form-data
// // // //             const submitData = new FormData();
// // // //             submitData.append('firstName', formData.firstName);
// // // //             submitData.append('lastName', formData.lastName);
// // // //             submitData.append('password', formData.password || 'dummy'); // Backend requires password
// // // //             submitData.append('email', formData.email);
// // // //             submitData.append('contactNumber', formData.contactNumber);
// // // //             submitData.append('nicNumber', formData.nicNumber);
// // // //             submitData.append('birthday', formData.birthday);
// // // //             submitData.append('gender', formData.gender);
// // // //             submitData.append('country', formData.country);
            
// // // //             if (customerImage) {
// // // //                 submitData.append('customerImage', customerImage);
// // // //             }

// // // //             const response = await axios.put(
// // // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // // //                 submitData,
// // // //                 {
// // // //                     headers: {
// // // //                         'Authorization': `Bearer ${token}`,
// // // //                         'Content-Type': 'multipart/form-data'
// // // //                     }
// // // //                 }
// // // //             );

// // // //             if (response.status === 200) {
// // // //                 onUpdate(response.data);
// // // //                 onClose();
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Error in form submission:', error);
// // // //             setErrors({ submit: error.response?.data?.message || 'Failed to update profile' });
// // // //         } finally {
// // // //             setIsSubmitting(false);
// // // //         }
// // // //     };

// // // //     // Helper to format date display
// // // //     const formatDateForDisplay = (dateString) => {
// // // //         if (!dateString) return '';
// // // //         const date = new Date(dateString);
// // // //         return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
// // // //     };

// // // //     return (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // //                 <div className="p-6">
// // // //                     <div className="flex justify-between items-center mb-6">
// // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                             </svg>
// // // //                         </button>
// // // //                     </div>

// // // //                     {/* Current Image Preview - Matches admin screenshot */}
// // // //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
// // // //                         <div className="relative">
// // // //                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// // // //                                 {imagePreview ? (
// // // //                                     <img 
// // // //                                         src={imagePreview} 
// // // //                                         alt="Preview" 
// // // //                                         className="w-full h-full object-cover"
// // // //                                     />
// // // //                                 ) : currentImageUrl ? (
// // // //                                     <img 
// // // //                                         src={currentImageUrl} 
// // // //                                         alt={formData.firstName} 
// // // //                                         className="w-full h-full object-cover"
// // // //                                         onError={(e) => {
// // // //                                             console.error('Failed to load image:', currentImageUrl);
// // // //                                             e.target.onerror = null;
// // // //                                             e.target.style.display = 'none';
// // // //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${formData.firstName?.charAt(0) || ''}${formData.lastName?.charAt(0) || ''}</span>`;
// // // //                                         }}
// // // //                                     />
// // // //                                 ) : (
// // // //                                     <span className="text-white font-bold text-2xl">
// // // //                                         {formData.firstName?.charAt(0) || ''}{formData.lastName?.charAt(0) || ''}
// // // //                                     </span>
// // // //                                 )}
// // // //                             </div>
// // // //                             {currentImageUrl && !imagePreview && (
// // // //                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
// // // //                                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
// // // //                                     </svg>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                         <div className="ml-4">
// // // //                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
// // // //                             <p className="text-xs text-blue-600">Upload new image below to change</p>
// // // //                             {currentImageName && (
// // // //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>

// // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="firstName"
// // // //                                     value={formData.firstName}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Enter first name"
// // // //                                 />
// // // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="lastName"
// // // //                                     value={formData.lastName}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Enter last name"
// // // //                                 />
// // // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // //                                 <input
// // // //                                     type="email"
// // // //                                     name="email"
// // // //                                     value={formData.email}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Enter email"
// // // //                                 />
// // // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// // // //                                 <input
// // // //                                     type="tel"
// // // //                                     name="contactNumber"
// // // //                                     value={formData.contactNumber}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Enter contact number"
// // // //                                 />
// // // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="nicNumber"
// // // //                                     value={formData.nicNumber}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Enter NIC number"
// // // //                                 />
// // // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// // // //                                 <input
// // // //                                     type="date"
// // // //                                     name="birthday"
// // // //                                     value={formData.birthday}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                 />
// // // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // // //                                 <p className="text-xs text-gray-400 mt-1">Current: {formatDateForDisplay(formData.birthday)}</p>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// // // //                                 <select
// // // //                                     name="gender"
// // // //                                     value={formData.gender}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
// // // //                                         errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                 >
// // // //                                     <option value="">Select Gender</option>
// // // //                                     <option value="MALE">Male</option>
// // // //                                     <option value="FEMALE">Female</option>
// // // //                                     <option value="OTHER">Other</option>
// // // //                                 </select>
// // // //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// // // //                             </div>
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="country"
// // // //                                     value={formData.country}
// // // //                                     onChange={handleChange}
// // // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // // //                                     }`}
// // // //                                     placeholder="Sri Lanka"
// // // //                                 />
// // // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // // //                             </div>
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                                 Password (Leave blank to keep current)
// // // //                             </label>
// // // //                             <input
// // // //                                 type="password"
// // // //                                 name="password"
// // // //                                 value={formData.password}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 placeholder="Enter new password to change"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
// // // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // // //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // // //                             }`}>
// // // //                                 <input
// // // //                                     type="file"
// // // //                                     id="editProfileImage"
// // // //                                     onChange={handleImageChange}
// // // //                                     className="hidden"
// // // //                                     accept="image/*"
// // // //                                 />
// // // //                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
// // // //                                     {imagePreview ? (
// // // //                                         <div className="flex flex-col items-center">
// // // //                                             <img 
// // // //                                                 src={imagePreview} 
// // // //                                                 alt="Preview" 
// // // //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// // // //                                             />
// // // //                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
// // // //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// // // //                                         </div>
// // // //                                     ) : (
// // // //                                         <>
// // // //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // //                                             </svg>
// // // //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// // // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // // //                                         </>
// // // //                                     )}
// // // //                                 </label>
// // // //                             </div>
// // // //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
// // // //                         </div>

// // // //                         <div className="flex gap-4 pt-4">
// // // //                             <button
// // // //                                 type="submit"
// // // //                                 disabled={isSubmitting}
// // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
// // // //                             >
// // // //                                 {isSubmitting ? (
// // // //                                     <>
// // // //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // // //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                                         </svg>
// // // //                                         Updating...
// // // //                                     </>
// // // //                                 ) : (
// // // //                                     'Update Profile'
// // // //                                 )}
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

// // // //                     {/* Debug info - remove in production */}
// // // //                     {/* <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
// // // //                         <p>Debug - Customer Data:</p>
// // // //                         <pre>{JSON.stringify(customer, null, 2)}</pre>
// // // //                     </div> */}
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default EditProfileModal;


// // // // src/Pages/Customer/components/EditProfileModal.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// // //     // Debug: Log the received customer prop
// // //     console.log('EditProfileModal received customer:', customer);

// // //     const [formData, setFormData] = useState({
// // //         firstName: '',
// // //         lastName: '',
// // //         password: '', // Password is optional in update
// // //         email: '',
// // //         contactNumber: '',
// // //         nicNumber: '',
// // //         birthday: '',
// // //         gender: '',
// // //         country: 'Sri Lanka'
// // //     });
// // //     const [customerImage, setCustomerImage] = useState(null);
// // //     const [imagePreview, setImagePreview] = useState(null);
// // //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// // //     const [currentImageName, setCurrentImageName] = useState('');
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [errors, setErrors] = useState({});

// // //     // Helper function to get the correct image URL
// // //     const getImageUrl = (imagePath) => {
// // //         if (!imagePath) return null;
        
// // //         // Clean the path
// // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// // //         // If it's a full Windows path
// // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // //         }
        
// // //         // If it starts with /uploads
// // //         if (cleanPath.startsWith('/uploads')) {
// // //             return `${BASE_URL}${cleanPath}`;
// // //         }
        
// // //         // Default case
// // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // //     };

// // //     // Extract filename from path
// // //     const getFileName = (imagePath) => {
// // //         if (!imagePath) return '';
// // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// // //         return cleanPath.split('\\').pop().split('/').pop();
// // //     };

// // //     // Load customer data when component mounts or customer changes
// // //     useEffect(() => {
// // //         if (customer) {
// // //             console.log('Loading customer data into form:', customer);
            
// // //             // Format birthday properly
// // //             let formattedBirthday = customer.birthday || '';
// // //             if (customer.birthday && customer.birthday.includes('T')) {
// // //                 formattedBirthday = customer.birthday.split('T')[0];
// // //             }
            
// // //             setFormData({
// // //                 firstName: customer.firstName || '',
// // //                 lastName: customer.lastName || '',
// // //                 password: '', // Password is optional
// // //                 email: customer.email || '',
// // //                 contactNumber: customer.contactNumber || '',
// // //                 nicNumber: customer.nicNumber || '',
// // //                 birthday: formattedBirthday,
// // //                 gender: customer.gender || '',
// // //                 country: customer.country || 'Sri Lanka'
// // //             });
            
// // //             if (customer.customerImage) {
// // //                 const url = getImageUrl(customer.customerImage);
// // //                 const fileName = getFileName(customer.customerImage);
// // //                 setCurrentImageUrl(url);
// // //                 setCurrentImageName(fileName);
// // //                 console.log('Current image URL:', url);
// // //                 console.log('Current image filename:', fileName);
// // //             }
// // //         }
// // //     }, [customer]);

// // //     const validateForm = () => {
// // //         const newErrors = {};
// // //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// // //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// // //             newErrors.email = 'Invalid email format';
// // //         }
// // //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// // //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// // //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// // //         if (!formData.gender) newErrors.gender = 'Gender is required';
// // //         if (!formData.country.trim()) newErrors.country = 'Country is required';
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
// // //             // Validate file type
// // //             if (!file.type.startsWith('image/')) {
// // //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// // //                 return;
// // //             }
// // //             // Validate file size (5MB)
// // //             if (file.size > 5 * 1024 * 1024) {
// // //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// // //                 return;
// // //             }
            
// // //             setCustomerImage(file);
// // //             setImagePreview(URL.createObjectURL(file));
// // //             setErrors(prev => ({ ...prev, customerImage: '' }));
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

// // //         try {
// // //             const token = localStorage.getItem('customerToken');
// // //             const customerId = localStorage.getItem('customerId');

// // //             // Create FormData for multipart/form-data
// // //             const submitData = new FormData();
// // //             submitData.append('firstName', formData.firstName);
// // //             submitData.append('lastName', formData.lastName);
// // //             submitData.append('password', formData.password || 'dummy'); // Backend requires password
// // //             submitData.append('email', formData.email);
// // //             submitData.append('contactNumber', formData.contactNumber);
// // //             submitData.append('nicNumber', formData.nicNumber);
// // //             submitData.append('birthday', formData.birthday);
// // //             submitData.append('gender', formData.gender);
// // //             submitData.append('country', formData.country);
            
// // //             if (customerImage) {
// // //                 submitData.append('customerImage', customerImage);
// // //             }

// // //             const response = await axios.put(
// // //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// // //                 submitData,
// // //                 {
// // //                     headers: {
// // //                         'Authorization': `Bearer ${token}`,
// // //                         'Content-Type': 'multipart/form-data'
// // //                     }
// // //                 }
// // //             );

// // //             if (response.status === 200) {
// // //                 onUpdate(response.data);
// // //                 onClose();
// // //             }
// // //         } catch (error) {
// // //             console.error('Error in form submission:', error);
// // //             setErrors({ submit: error.response?.data?.message || 'Failed to update profile' });
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     // Helper to format date display
// // //     const formatDateForDisplay = (dateString) => {
// // //         if (!dateString) return 'Not set';
// // //         const date = new Date(dateString);
// // //         return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //                 <div className="p-6">
// // //                     <div className="flex justify-between items-center mb-6">
// // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                             </svg>
// // //                         </button>
// // //                     </div>

// // //                     {/* Current Image Preview - Matches admin screenshot */}
// // //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
// // //                         <div className="relative">
// // //                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// // //                                 {imagePreview ? (
// // //                                     <img 
// // //                                         src={imagePreview} 
// // //                                         alt="Preview" 
// // //                                         className="w-full h-full object-cover"
// // //                                     />
// // //                                 ) : currentImageUrl ? (
// // //                                     <img 
// // //                                         src={currentImageUrl} 
// // //                                         alt={formData.firstName} 
// // //                                         className="w-full h-full object-cover"
// // //                                         onError={(e) => {
// // //                                             console.error('Failed to load image:', currentImageUrl);
// // //                                             e.target.onerror = null;
// // //                                             e.target.style.display = 'none';
// // //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${formData.firstName?.charAt(0) || ''}${formData.lastName?.charAt(0) || ''}</span>`;
// // //                                         }}
// // //                                     />
// // //                                 ) : (
// // //                                     <span className="text-white font-bold text-2xl">
// // //                                         {formData.firstName?.charAt(0) || ''}{formData.lastName?.charAt(0) || ''}
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
// // //                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
// // //                             <p className="text-xs text-blue-600">Upload new image below to change</p>
// // //                             {currentImageName && (
// // //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
// // //                             )}
// // //                         </div>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="firstName"
// // //                                     value={formData.firstName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Enter first name"
// // //                                 />
// // //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// // //                                 {formData.firstName && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.firstName}</p>
// // //                                 )}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="lastName"
// // //                                     value={formData.lastName}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Enter last name"
// // //                                 />
// // //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// // //                                 {formData.lastName && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.lastName}</p>
// // //                                 )}
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
// // //                                     placeholder="Enter email"
// // //                                 />
// // //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // //                                 {formData.email && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.email}</p>
// // //                                 )}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="contactNumber"
// // //                                     value={formData.contactNumber}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Enter contact number"
// // //                                 />
// // //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// // //                                 {formData.contactNumber && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.contactNumber}</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div className="grid grid-cols-2 gap-4">
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="nicNumber"
// // //                                     value={formData.nicNumber}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Enter NIC number"
// // //                                 />
// // //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// // //                                 {formData.nicNumber && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.nicNumber}</p>
// // //                                 )}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// // //                                 <input
// // //                                     type="date"
// // //                                     name="birthday"
// // //                                     value={formData.birthday}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                 />
// // //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// // //                                 <p className="mt-1 text-xs text-blue-600">Current: {formatDateForDisplay(formData.birthday)}</p>
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
// // //                                 {formData.gender && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.gender}</p>
// // //                                 )}
// // //                             </div>
// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="country"
// // //                                     value={formData.country}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                     }`}
// // //                                     placeholder="Sri Lanka"
// // //                                 />
// // //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// // //                                 {formData.country && (
// // //                                     <p className="mt-1 text-xs text-blue-600">Current: {formData.country}</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                                 Password (Leave blank to keep current)
// // //                             </label>
// // //                             <input
// // //                                 type="password"
// // //                                 name="password"
// // //                                 value={formData.password}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                 placeholder="Enter new password to change"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
// // //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// // //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// // //                             }`}>
// // //                                 <input
// // //                                     type="file"
// // //                                     id="editProfileImage"
// // //                                     onChange={handleImageChange}
// // //                                     className="hidden"
// // //                                     accept="image/*"
// // //                                 />
// // //                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
// // //                                     {imagePreview ? (
// // //                                         <div className="flex flex-col items-center">
// // //                                             <img 
// // //                                                 src={imagePreview} 
// // //                                                 alt="Preview" 
// // //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// // //                                             />
// // //                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
// // //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// // //                                         </div>
// // //                                     ) : (
// // //                                         <>
// // //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                                             </svg>
// // //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// // //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// // //                                             {currentImageName && (
// // //                                                 <p className="text-xs text-blue-600 mt-2">Current: {currentImageName}</p>
// // //                                             )}
// // //                                         </>
// // //                                     )}
// // //                                 </label>
// // //                             </div>
// // //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
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
// // //                                     'Update Profile'
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

// // // export default EditProfileModal;

// // // src/Pages/Customer/components/EditProfileModal.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// //     // Debug: Log the received customer prop
// //     console.log('EditProfileModal received customer:', customer);

// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         password: '', // Password is optional in update
// //         email: '',
// //         contactNumber: '',
// //         nicNumber: '',
// //         birthday: '',
// //         gender: '',
// //         country: 'Sri Lanka'
// //     });
// //     const [customerImage, setCustomerImage] = useState(null);
// //     const [imagePreview, setImagePreview] = useState(null);
// //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// //     const [currentImageName, setCurrentImageName] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     // Helper function to get the correct image URL
// //     const getImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
        
// //         // Clean the path
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// //         // If it's a full Windows path
// //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// //             const filename = cleanPath.split('\\').pop().split('/').pop();
// //             return `${BASE_URL}/uploads/customers/${filename}`;
// //         }
        
// //         // If it starts with /uploads
// //         if (cleanPath.startsWith('/uploads')) {
// //             return `${BASE_URL}${cleanPath}`;
// //         }
        
// //         // Default case
// //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// //     };

// //     // Extract filename from path
// //     const getFileName = (imagePath) => {
// //         if (!imagePath) return '';
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// //         return cleanPath.split('\\').pop().split('/').pop();
// //     };

// //     // Load customer data when component mounts or customer changes
// //     useEffect(() => {
// //         if (customer) {
// //             console.log('Loading customer data into form:', customer);
            
// //             // Format birthday properly
// //             let formattedBirthday = customer.birthday || '';
// //             if (customer.birthday && customer.birthday.includes('T')) {
// //                 formattedBirthday = customer.birthday.split('T')[0];
// //             }
            
// //             setFormData({
// //                 firstName: customer.firstName || '',
// //                 lastName: customer.lastName || '',
// //                 password: '', // Password is optional
// //                 email: customer.email || '',
// //                 contactNumber: customer.contactNumber || '',
// //                 nicNumber: customer.nicNumber || '',
// //                 birthday: formattedBirthday,
// //                 gender: customer.gender || '',
// //                 country: customer.country || 'Sri Lanka'
// //             });
            
// //             if (customer.customerImage) {
// //                 const url = getImageUrl(customer.customerImage);
// //                 const fileName = getFileName(customer.customerImage);
// //                 setCurrentImageUrl(url);
// //                 setCurrentImageName(fileName);
// //                 console.log('Current image URL:', url);
// //                 console.log('Current image filename:', fileName);
// //             }
// //         }
// //     }, [customer]);

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //             newErrors.email = 'Invalid email format';
// //         }
// //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// //         if (!formData.gender) newErrors.gender = 'Gender is required';
// //         if (!formData.country.trim()) newErrors.country = 'Country is required';
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
// //             // Validate file type
// //             if (!file.type.startsWith('image/')) {
// //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// //                 return;
// //             }
// //             // Validate file size (5MB)
// //             if (file.size > 5 * 1024 * 1024) {
// //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// //                 return;
// //             }
            
// //             setCustomerImage(file);
// //             setImagePreview(URL.createObjectURL(file));
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

// //         try {
// //             const token = localStorage.getItem('customerToken');
// //             const customerId = localStorage.getItem('customerId');

// //             // Create FormData for multipart/form-data
// //             const submitData = new FormData();
// //             submitData.append('firstName', formData.firstName);
// //             submitData.append('lastName', formData.lastName);
// //             submitData.append('password', formData.password || 'dummy'); // Backend requires password
// //             submitData.append('email', formData.email);
// //             submitData.append('contactNumber', formData.contactNumber);
// //             submitData.append('nicNumber', formData.nicNumber);
// //             submitData.append('birthday', formData.birthday);
// //             submitData.append('gender', formData.gender);
// //             submitData.append('country', formData.country);
            
// //             if (customerImage) {
// //                 submitData.append('customerImage', customerImage);
// //             }

// //             const response = await axios.put(
// //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// //                 submitData,
// //                 {
// //                     headers: {
// //                         'Authorization': `Bearer ${token}`,
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 }
// //             );

// //             if (response.status === 200) {
// //                 onUpdate(response.data);
// //                 onClose();
// //             }
// //         } catch (error) {
// //             console.error('Error in form submission:', error);
// //             setErrors({ submit: error.response?.data?.message || 'Failed to update profile' });
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     // Helper to format date display
// //     const formatDateForDisplay = (dateString) => {
// //         if (!dateString) return '';
// //         const date = new Date(dateString);
// //         return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Current Image Preview - Matches admin screenshot */}
// //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
// //                         <div className="relative">
// //                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// //                                 {imagePreview ? (
// //                                     <img 
// //                                         src={imagePreview} 
// //                                         alt="Preview" 
// //                                         className="w-full h-full object-cover"
// //                                     />
// //                                 ) : currentImageUrl ? (
// //                                     <img 
// //                                         src={currentImageUrl} 
// //                                         alt={formData.firstName} 
// //                                         className="w-full h-full object-cover"
// //                                         onError={(e) => {
// //                                             console.error('Failed to load image:', currentImageUrl);
// //                                             e.target.onerror = null;
// //                                             e.target.style.display = 'none';
// //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${formData.firstName?.charAt(0) || ''}${formData.lastName?.charAt(0) || ''}</span>`;
// //                                         }}
// //                                     />
// //                                 ) : (
// //                                     <span className="text-white font-bold text-2xl">
// //                                         {formData.firstName?.charAt(0) || ''}{formData.lastName?.charAt(0) || ''}
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
// //                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
// //                             <p className="text-xs text-blue-600">Upload new image below to change</p>
// //                             {currentImageName && (
// //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
// //                             )}
// //                         </div>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="firstName"
// //                                     value={formData.firstName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Enter first name"
// //                                 />
// //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="lastName"
// //                                     value={formData.lastName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Enter last name"
// //                                 />
// //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
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
// //                                     placeholder="Enter email"
// //                                 />
// //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// //                                 <input
// //                                     type="tel"
// //                                     name="contactNumber"
// //                                     value={formData.contactNumber}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Enter contact number"
// //                                 />
// //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="nicNumber"
// //                                     value={formData.nicNumber}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Enter NIC number"
// //                                 />
// //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// //                                 <input
// //                                     type="date"
// //                                     name="birthday"
// //                                     value={formData.birthday}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// //                                 <p className="text-xs text-gray-500 mt-1">Current: {formatDateForDisplay(formData.birthday)}</p>
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
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="country"
// //                                     value={formData.country}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                     placeholder="Sri Lanka"
// //                                 />
// //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Password (Leave blank to keep current)
// //                             </label>
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
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
// //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="editProfileImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
// //                                     {imagePreview ? (
// //                                         <div className="flex flex-col items-center">
// //                                             <img 
// //                                                 src={imagePreview} 
// //                                                 alt="Preview" 
// //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// //                                             />
// //                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
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
// //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
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
// //                                     'Update Profile'
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

// // export default EditProfileModal;



// // // src/Pages/Customer/components/EditProfileModal.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
// //     // Debug: Log the received customer prop
// //     console.log('EditProfileModal received customer:', customer);

// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         password: '', // Password is optional in update
// //         email: '',
// //         contactNumber: '',
// //         nicNumber: '',
// //         birthday: '',
// //         gender: '',
// //         country: 'Sri Lanka'
// //     });
// //     const [customerImage, setCustomerImage] = useState(null);
// //     const [imagePreview, setImagePreview] = useState(null);
// //     const [currentImageUrl, setCurrentImageUrl] = useState(null);
// //     const [currentImageName, setCurrentImageName] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     // Helper function to get the correct image URL
// //     const getImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
        
// //         // Clean the path
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// //         // If it's a full Windows path
// //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// //             const filename = cleanPath.split('\\').pop().split('/').pop();
// //             return `${BASE_URL}/uploads/customers/${filename}`;
// //         }
        
// //         // If it starts with /uploads
// //         if (cleanPath.startsWith('/uploads')) {
// //             return `${BASE_URL}${cleanPath}`;
// //         }
        
// //         // Default case
// //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// //     };

// //     // Extract filename from path
// //     const getFileName = (imagePath) => {
// //         if (!imagePath) return '';
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
// //         return cleanPath.split('\\').pop().split('/').pop();
// //     };

// //     // Load customer data when component mounts or customer changes
// //     useEffect(() => {
// //         if (customer) {
// //             console.log('Loading customer data into form:', customer);
            
// //             // Format birthday properly
// //             let formattedBirthday = customer.birthday || '';
// //             if (customer.birthday && customer.birthday.includes('T')) {
// //                 formattedBirthday = customer.birthday.split('T')[0];
// //             }
            
// //             setFormData({
// //                 firstName: customer.firstName || '',
// //                 lastName: customer.lastName || '',
// //                 password: '', // Password is optional
// //                 email: customer.email || '',
// //                 contactNumber: customer.contactNumber || '',
// //                 nicNumber: customer.nicNumber || '',
// //                 birthday: formattedBirthday,
// //                 gender: customer.gender || '',
// //                 country: customer.country || 'Sri Lanka'
// //             });
            
// //             if (customer.customerImage) {
// //                 const url = getImageUrl(customer.customerImage);
// //                 const fileName = getFileName(customer.customerImage);
// //                 setCurrentImageUrl(url);
// //                 setCurrentImageName(fileName);
// //                 console.log('Current image URL:', url);
// //                 console.log('Current image filename:', fileName);
// //             }
// //         }
// //     }, [customer]);

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
// //         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //             newErrors.email = 'Invalid email format';
// //         }
// //         if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
// //         if (!formData.nicNumber.trim()) newErrors.nicNumber = 'NIC number is required';
// //         if (!formData.birthday) newErrors.birthday = 'Birthday is required';
// //         if (!formData.gender) newErrors.gender = 'Gender is required';
// //         if (!formData.country.trim()) newErrors.country = 'Country is required';
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
// //             // Validate file type
// //             if (!file.type.startsWith('image/')) {
// //                 setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
// //                 return;
// //             }
// //             // Validate file size (5MB)
// //             if (file.size > 5 * 1024 * 1024) {
// //                 setErrors(prev => ({ ...prev, customerImage: 'Image size must be less than 5MB' }));
// //                 return;
// //             }
            
// //             setCustomerImage(file);
// //             setImagePreview(URL.createObjectURL(file));
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

// //         try {
// //             const token = localStorage.getItem('customerToken');
// //             const customerId = localStorage.getItem('customerId');

// //             // Create FormData for multipart/form-data
// //             const submitData = new FormData();
// //             submitData.append('firstName', formData.firstName);
// //             submitData.append('lastName', formData.lastName);
// //             submitData.append('password', formData.password || 'dummy'); // Backend requires password
// //             submitData.append('email', formData.email);
// //             submitData.append('contactNumber', formData.contactNumber);
// //             submitData.append('nicNumber', formData.nicNumber);
// //             submitData.append('birthday', formData.birthday);
// //             submitData.append('gender', formData.gender);
// //             submitData.append('country', formData.country);
            
// //             if (customerImage) {
// //                 submitData.append('customerImage', customerImage);
// //             }

// //             const response = await axios.put(
// //                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
// //                 submitData,
// //                 {
// //                     headers: {
// //                         'Authorization': `Bearer ${token}`,
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 }
// //             );

// //             if (response.status === 200) {
// //                 onUpdate(response.data);
// //                 onClose();
// //             }
// //         } catch (error) {
// //             console.error('Error in form submission:', error);
// //             setErrors({ submit: error.response?.data?.message || 'Failed to update profile' });
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     // Helper to format date display
// //     const formatDateForDisplay = (dateString) => {
// //         if (!dateString) return '';
// //         const date = new Date(dateString);
// //         return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
// //     };

// //     const getInitials = () => {
// //         if (formData.firstName) {
// //             return formData.firstName.charAt(0).toUpperCase();
// //         }
// //         return 'C';
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Current Image Preview */}
// //                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
// //                         <div className="relative">
// //                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
// //                                 {imagePreview ? (
// //                                     <img 
// //                                         src={imagePreview} 
// //                                         alt="Preview" 
// //                                         className="w-full h-full object-cover"
// //                                     />
// //                                 ) : currentImageUrl ? (
// //                                     <img 
// //                                         src={currentImageUrl} 
// //                                         alt={formData.firstName} 
// //                                         className="w-full h-full object-cover"
// //                                         onError={(e) => {
// //                                             console.error('Failed to load image:', currentImageUrl);
// //                                             e.target.onerror = null;
// //                                             e.target.style.display = 'none';
// //                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${getInitials()}</span>`;
// //                                         }}
// //                                     />
// //                                 ) : (
// //                                     <span className="text-white font-bold text-2xl">{getInitials()}</span>
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
// //                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
// //                             <p className="text-xs text-blue-600">Upload new image below to change</p>
// //                             {currentImageName && (
// //                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
// //                             )}
// //                         </div>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="text"
// //                                         name="firstName"
// //                                         value={formData.firstName}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Enter first name"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.firstName || 'empty'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="text"
// //                                         name="lastName"
// //                                         value={formData.lastName}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Enter last name"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.lastName || 'empty'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="email"
// //                                         name="email"
// //                                         value={formData.email}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Enter email"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[120px]">
// //                                         {customer?.email || 'empty'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="tel"
// //                                         name="contactNumber"
// //                                         value={formData.contactNumber}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Enter contact number"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.contactNumber || 'empty'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="text"
// //                                         name="nicNumber"
// //                                         value={formData.nicNumber}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Enter NIC number"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.nicNumber || 'empty'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="date"
// //                                         name="birthday"
// //                                         value={formData.birthday}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {formatDateForDisplay(customer?.birthday) || 'not set'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// //                                 <div className="relative">
// //                                     <select
// //                                         name="gender"
// //                                         value={formData.gender}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 ${
// //                                             errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                     >
// //                                         <option value="" className="text-gray-500">Select Gender</option>
// //                                         <option value="MALE" className="text-gray-900">Male</option>
// //                                         <option value="FEMALE" className="text-gray-900">Female</option>
// //                                         <option value="OTHER" className="text-gray-900">Other</option>
// //                                     </select>
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.gender || 'not set'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
// //                                 <div className="relative">
// //                                     <input
// //                                         type="text"
// //                                         name="country"
// //                                         value={formData.country}
// //                                         onChange={handleChange}
// //                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
// //                                             errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                         }`}
// //                                         style={{ color: '#111827' }}
// //                                         placeholder="Sri Lanka"
// //                                     />
// //                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
// //                                         Current: {customer?.country || 'Sri Lanka'}
// //                                     </span>
// //                                 </div>
// //                                 {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 Password (Leave blank to keep current)
// //                             </label>
// //                             <input
// //                                 type="password"
// //                                 name="password"
// //                                 value={formData.password}
// //                                 onChange={handleChange}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
// //                                 placeholder="Enter new password to change"
// //                                 style={{ color: '#111827' }}
// //                             />
// //                             <p className="text-xs text-gray-500 mt-1">Only fill this to change password</p>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
// //                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
// //                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
// //                             }`}>
// //                                 <input
// //                                     type="file"
// //                                     id="editProfileImage"
// //                                     onChange={handleImageChange}
// //                                     className="hidden"
// //                                     accept="image/*"
// //                                 />
// //                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
// //                                     {imagePreview ? (
// //                                         <div className="flex flex-col items-center">
// //                                             <img 
// //                                                 src={imagePreview} 
// //                                                 alt="Preview" 
// //                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
// //                                             />
// //                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
// //                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
// //                                         </div>
// //                                     ) : (
// //                                         <>
// //                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                             </svg>
// //                                             <p className="text-sm text-gray-600">Click to change profile image</p>
// //                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
// //                                             {currentImageUrl && !imagePreview && (
// //                                                 <p className="text-xs text-teal-600 mt-2">✓ Current image: {currentImageName}</p>
// //                                             )}
// //                                         </>
// //                                     )}
// //                                 </label>
// //                             </div>
// //                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
// //                         </div>

// //                         <div className="flex gap-4 pt-6 border-t border-gray-200">
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
// //                                     'Update Profile'
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

// // export default EditProfileModal;




// // src/Pages/Customer/components/EditProfileModal.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
//     console.log('EditProfileModal received customer:', customer);

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         password: '', // Leave empty - only send when user wants to change
//         email: '',
//         contactNumber: '',
//         nicNumber: '',
//         birthday: '',
//         gender: '',
//         country: 'Sri Lanka'
//     });
//     const [customerImage, setCustomerImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [currentImageUrl, setCurrentImageUrl] = useState(null);
//     const [currentImageName, setCurrentImageName] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});

//     const getImageUrl = (imagePath) => {
//         if (!imagePath) return null;
//         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
//         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
//             const filename = cleanPath.split('\\').pop().split('/').pop();
//             return `${BASE_URL}/uploads/customers/${filename}`;
//         }
//         if (cleanPath.startsWith('/uploads')) {
//             return `${BASE_URL}${cleanPath}`;
//         }
//         return `${BASE_URL}/uploads/customers/${cleanPath}`;
//     };

//     const getFileName = (imagePath) => {
//         if (!imagePath) return '';
//         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
//         return cleanPath.split('\\').pop().split('/').pop();
//     };

//     useEffect(() => {
//         if (customer) {
//             console.log('Loading customer data into form:', customer);
            
//             let formattedBirthday = customer.birthday || '';
//             if (customer.birthday && customer.birthday.includes('T')) {
//                 formattedBirthday = customer.birthday.split('T')[0];
//             }
            
//             setFormData({
//                 firstName: customer.firstName || '',
//                 lastName: customer.lastName || '',
//                 password: '', // NEVER pre-fill password
//                 email: customer.email || '',
//                 contactNumber: customer.contactNumber || '',
//                 nicNumber: customer.nicNumber || '',
//                 birthday: formattedBirthday,
//                 gender: customer.gender || '',
//                 country: customer.country || 'Sri Lanka'
//             });
            
//             if (customer.customerImage) {
//                 const url = getImageUrl(customer.customerImage);
//                 const fileName = getFileName(customer.customerImage);
//                 setCurrentImageUrl(url);
//                 setCurrentImageName(fileName);
//             }
//         }
//     }, [customer]);

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }
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
//             const token = localStorage.getItem('customerToken');
//             const customerId = localStorage.getItem('customerId');

//             // Create FormData for multipart/form-data
//             const submitData = new FormData();
//             submitData.append('firstName', formData.firstName);
//             submitData.append('lastName', formData.lastName);
//             submitData.append('email', formData.email);
//             submitData.append('contactNumber', formData.contactNumber);
//             submitData.append('nicNumber', formData.nicNumber);
//             submitData.append('birthday', formData.birthday);
//             submitData.append('gender', formData.gender);
//             submitData.append('country', formData.country);
            
//             // IMPORTANT FIX: Only send password if user actually wants to change it
//             // If password field is empty, DO NOT send it at all
//             if (formData.password && formData.password.trim() !== '') {
//                 submitData.append('password', formData.password);
//                 console.log('Password will be updated');
//             }
//             // Do NOT send any password field if empty - backend will keep existing password
            
//             if (customerImage) {
//                 submitData.append('customerImage', customerImage);
//             }

//             // Log what we're sending (for debugging)
//             console.log('Submitting update:');
//             for (let [key, value] of submitData.entries()) {
//                 if (key === 'password') {
//                     console.log(key, '[HIDDEN]');
//                 } else {
//                     console.log(key, value);
//                 }
//             }

//             const response = await axios.put(
//                 `${BASE_URL}/api/v1/customer/update/${customerId}`,
//                 submitData,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 }
//             );

//             if (response.status === 200) {
//                 const updatedData = response.data;
//                 const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
                
//                 // Update localStorage with new data but KEEP THE TOKEN
//                 localStorage.setItem('customerName', fullName || 'Customer');
//                 localStorage.setItem('customerEmail', updatedData.email || '');
//                 localStorage.setItem('customerData', JSON.stringify(updatedData));
                
//                 // IMPORTANT: Token remains unchanged - do NOT remove or update it
//                 // The token is still valid because the customer ID hasn't changed
                
//                 onUpdate(updatedData);
//                 onClose();
                
//                 // Show success message
//                 alert('Profile updated successfully!');
//             }
//         } catch (error) {
//             console.error('Error in form submission:', error);
            
//             if (error.response?.status === 401) {
//                 alert('Your session has expired. Please login again.');
//                 localStorage.clear();
//                 window.location.href = '/customer/login';
//             } else {
//                 const errorMsg = error.response?.data?.message || 'Failed to update profile';
//                 setErrors({ submit: errorMsg });
//                 alert(errorMsg);
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const formatDateForDisplay = (dateString) => {
//         if (!dateString) return '';
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-GB');
//     };

//     const getInitials = () => {
//         if (formData.firstName) {
//             return formData.firstName.charAt(0).toUpperCase();
//         }
//         return 'C';
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Current Image Preview */}
//                     <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
//                         <div className="relative">
//                             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
//                                 {imagePreview ? (
//                                     <img 
//                                         src={imagePreview} 
//                                         alt="Preview" 
//                                         className="w-full h-full object-cover"
//                                     />
//                                 ) : currentImageUrl ? (
//                                     <img 
//                                         src={currentImageUrl} 
//                                         alt={formData.firstName} 
//                                         className="w-full h-full object-cover"
//                                         onError={(e) => {
//                                             e.target.onerror = null;
//                                             e.target.style.display = 'none';
//                                             e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${getInitials()}</span>`;
//                                         }}
//                                     />
//                                 ) : (
//                                     <span className="text-white font-bold text-2xl">{getInitials()}</span>
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
//                             <p className="text-sm font-medium text-blue-800">Current Profile Image</p>
//                             <p className="text-xs text-blue-600">Upload new image below to change</p>
//                             {currentImageName && (
//                                 <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
//                             )}
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Enter first name"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.firstName || 'empty'}
//                                     </span>
//                                 </div>
//                                 {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Enter last name"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.lastName || 'empty'}
//                                     </span>
//                                 </div>
//                                 {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Enter email"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[120px]">
//                                         {customer?.email || 'empty'}
//                                     </span>
//                                 </div>
//                                 {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="tel"
//                                         name="contactNumber"
//                                         value={formData.contactNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Enter contact number"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.contactNumber || 'empty'}
//                                     </span>
//                                 </div>
//                                 {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="nicNumber"
//                                         value={formData.nicNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Enter NIC number"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.nicNumber || 'empty'}
//                                     </span>
//                                 </div>
//                                 {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="date"
//                                         name="birthday"
//                                         value={formData.birthday}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {formatDateForDisplay(customer?.birthday) || 'not set'}
//                                     </span>
//                                 </div>
//                                 {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
//                                 <div className="relative">
//                                     <select
//                                         name="gender"
//                                         value={formData.gender}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 ${
//                                             errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Gender</option>
//                                         <option value="MALE">Male</option>
//                                         <option value="FEMALE">Female</option>
//                                         <option value="OTHER">Other</option>
//                                     </select>
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.gender || 'not set'}
//                                     </span>
//                                 </div>
//                                 {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="country"
//                                         value={formData.country}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Sri Lanka"
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {customer?.country || 'Sri Lanka'}
//                                     </span>
//                                 </div>
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
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                 placeholder="Enter new password to change"
//                             />
//                             <p className="text-xs text-amber-600 mt-1">⚠️ Only fill this if you want to change your password</p>
//                             <p className="text-xs text-gray-500">Leave blank to keep your current password</p>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image (Leave blank to keep current)</label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
//                                 errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="editProfileImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/*"
//                                 />
//                                 <label htmlFor="editProfileImage" className="cursor-pointer block">
//                                     {imagePreview ? (
//                                         <div className="flex flex-col items-center">
//                                             <img 
//                                                 src={imagePreview} 
//                                                 alt="Preview" 
//                                                 className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-teal-500"
//                                             />
//                                             <p className="text-sm text-teal-600">{customerImage.name}</p>
//                                             <p className="text-xs text-gray-500 mt-1">Click to change</p>
//                                         </div>
//                                     ) : (
//                                         <>
//                                             <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">Click to change profile image</p>
//                                             <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
//                                             {currentImageUrl && !imagePreview && (
//                                                 <p className="text-xs text-teal-600 mt-2">✓ Current image: {currentImageName}</p>
//                                             )}
//                                         </>
//                                     )}
//                                 </label>
//                             </div>
//                             {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
//                         </div>

//                         <div className="flex gap-4 pt-6 border-t border-gray-200">
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
//                                     'Update Profile'
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

// export default EditProfileModal;



// src/Pages/Customer/components/EditProfileModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toast from '../../../Components/Toast'; // Adjust path as needed

const EditProfileModal = ({ customer, onClose, onUpdate, BASE_URL }) => {
    console.log('EditProfileModal received customer:', customer);

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
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [currentImageName, setCurrentImageName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/customers/${filename}`;
        }
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        return `${BASE_URL}/uploads/customers/${cleanPath}`;
    };

    const getFileName = (imagePath) => {
        if (!imagePath) return '';
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        return cleanPath.split('\\').pop().split('/').pop();
    };

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
    };

    useEffect(() => {
        if (customer) {
            console.log('Loading customer data into form:', customer);
            
            let formattedBirthday = customer.birthday || '';
            if (customer.birthday && customer.birthday.includes('T')) {
                formattedBirthday = customer.birthday.split('T')[0];
            }
            
            setFormData({
                firstName: customer.firstName || '',
                lastName: customer.lastName || '',
                password: '',
                email: customer.email || '',
                contactNumber: customer.contactNumber || '',
                nicNumber: customer.nicNumber || '',
                birthday: formattedBirthday,
                gender: customer.gender || '',
                country: customer.country || 'Sri Lanka'
            });
            
            if (customer.customerImage) {
                const url = getImageUrl(customer.customerImage);
                const fileName = getFileName(customer.customerImage);
                setCurrentImageUrl(url);
                setCurrentImageName(fileName);
            }
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
            if (!file.type.startsWith('image/')) {
                setErrors(prev => ({ ...prev, customerImage: 'Please select an image file' }));
                return;
            }
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
            const token = localStorage.getItem('customerToken');
            const customerId = localStorage.getItem('customerId');

            const submitData = new FormData();
            submitData.append('firstName', formData.firstName);
            submitData.append('lastName', formData.lastName);
            submitData.append('email', formData.email);
            submitData.append('contactNumber', formData.contactNumber);
            submitData.append('nicNumber', formData.nicNumber);
            submitData.append('birthday', formData.birthday);
            submitData.append('gender', formData.gender);
            submitData.append('country', formData.country);
            
            if (formData.password && formData.password.trim() !== '') {
                submitData.append('password', formData.password);
                console.log('Password will be updated');
            }
            
            if (customerImage) {
                submitData.append('customerImage', customerImage);
            }

            const response = await axios.put(
                `${BASE_URL}/api/v1/customer/update/${customerId}`,
                submitData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.status === 200) {
                const updatedData = response.data;
                const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
                
                localStorage.setItem('customerName', fullName || 'Customer');
                localStorage.setItem('customerEmail', updatedData.email || '');
                localStorage.setItem('customerData', JSON.stringify(updatedData));
                
                onUpdate(updatedData);
                
                // Show success toast
                showToast('Profile updated successfully!', 'success');
                
                // Close modal after a short delay
                setTimeout(() => {
                    onClose();
                }, 1500);
            }
        } catch (error) {
            console.error('Error in form submission:', error);
            
            if (error.response?.status === 401) {
                showToast('Your session has expired. Please login again.', 'error');
                setTimeout(() => {
                    localStorage.clear();
                    window.location.href = '/customer/login';
                }, 2000);
            } else {
                const errorMsg = error.response?.data?.message || 'Failed to update profile';
                showToast(errorMsg, 'error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    };

    const getInitials = () => {
        if (formData.firstName) {
            return formData.firstName.charAt(0).toUpperCase();
        }
        return 'C';
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
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
                                        alt={formData.firstName} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span class="text-white font-bold text-2xl">${getInitials()}</span>`;
                                        }}
                                    />
                                ) : (
                                    <span className="text-white font-bold text-2xl">{getInitials()}</span>
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
                            {currentImageName && (
                                <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{currentImageName}</p>
                            )}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Form fields remain the same */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter first name"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.firstName || 'empty'}
                                    </span>
                                </div>
                                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter last name"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.lastName || 'empty'}
                                    </span>
                                </div>
                                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter email"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[120px]">
                                        {customer?.email || 'empty'}
                                    </span>
                                </div>
                                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter contact number"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.contactNumber || 'empty'}
                                    </span>
                                </div>
                                {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">NIC Number *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="nicNumber"
                                        value={formData.nicNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter NIC number"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.nicNumber || 'empty'}
                                    </span>
                                </div>
                                {errors.nicNumber && <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="birthday"
                                        value={formData.birthday}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {formatDateForDisplay(customer?.birthday) || 'not set'}
                                    </span>
                                </div>
                                {errors.birthday && <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                                <div className="relative">
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 ${
                                            errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.gender || 'not set'}
                                    </span>
                                </div>
                                {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Sri Lanka"
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {customer?.country || 'Sri Lanka'}
                                    </span>
                                </div>
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                placeholder="Enter new password to change"
                            />
                            <p className="text-xs text-amber-600 mt-1">⚠️ Only fill this if you want to change your password</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.customerImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="editProfileImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="editProfileImage" className="cursor-pointer block">
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
                                            {currentImageUrl && !imagePreview && (
                                                <p className="text-xs text-teal-600 mt-2">✓ Current image: {currentImageName}</p>
                                            )}
                                        </>
                                    )}
                                </label>
                            </div>
                            {errors.customerImage && <p className="mt-1 text-xs text-red-600">{errors.customerImage}</p>}
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-gray-200">
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
                                    'Update Profile'
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

            {/* Toast Notification */}
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast({ show: false, message: '', type: 'success' })}
                />
            )}
        </div>
    );
};

export default EditProfileModal;