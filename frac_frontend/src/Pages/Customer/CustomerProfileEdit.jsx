// // src/Pages/Customer/CustomerProfileEdit.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CustomerProfileEdit = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [customerData, setCustomerData] = useState(null);
//     const [profileImage, setProfileImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [errors, setErrors] = useState({});

//     const BASE_URL = 'http://localhost:8080';

//     // Form data state
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         contactNumber: '',
//         nicNumber: '',
//         birthday: '',
//         gender: '',
//         country: ''
//     });

//     useEffect(() => {
//         const token = localStorage.getItem('customerToken');
//         const customerId = localStorage.getItem('customerId');
        
//         if (!token || !customerId) {
//             navigate('/customer/login');
//             return;
//         }

//         fetchCustomerDetails();
//     }, [navigate]);

//     const fetchCustomerDetails = async () => {
//         setIsLoading(true);
//         try {
//             const token = localStorage.getItem('customerToken');
//             const customerId = localStorage.getItem('customerId');
            
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             if (response.status === 200) {
//                 const data = response.data;
//                 setCustomerData(data);
//                 setFormData({
//                     firstName: data.firstName || '',
//                     lastName: data.lastName || '',
//                     email: data.email || '',
//                     contactNumber: data.contactNumber || '',
//                     nicNumber: data.nicNumber || '',
//                     birthday: data.birthday ? data.birthday.split('T')[0] : '',
//                     gender: data.gender || '',
//                     country: data.country || ''
//                 });
//             }
//         } catch (err) {
//             console.error('Error fetching customer details:', err);
//             setErrorMessage('Failed to load profile data');
//         } finally {
//             setIsLoading(false);
//         }
//     };

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
//                 setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
//                 return;
//             }
//             if (file.size > 5 * 1024 * 1024) {
//                 setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
//                 return;
//             }
//             setProfileImage(file);
//             setImagePreview(URL.createObjectURL(file));
//             setErrors(prev => ({ ...prev, profileImage: '' }));
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
//         setErrorMessage('');
//         setSuccessMessage('');

//         try {
//             const token = localStorage.getItem('customerToken');
//             const customerId = localStorage.getItem('customerId');

//             const submitData = new FormData();
//             submitData.append('firstName', formData.firstName);
//             submitData.append('lastName', formData.lastName);
//             submitData.append('email', formData.email);
//             submitData.append('contactNumber', formData.contactNumber);
//             submitData.append('nicNumber', formData.nicNumber);
//             submitData.append('birthday', formData.birthday);
//             submitData.append('gender', formData.gender);
//             submitData.append('country', formData.country);
//             submitData.append('password', 'dummy'); // Backend requires password
            
//             if (profileImage) {
//                 submitData.append('customerImage', profileImage);
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
//                 setSuccessMessage('Profile updated successfully!');
//                 // Update local storage with new name
//                 localStorage.setItem('customerName', `${formData.firstName} ${formData.lastName}`);
//                 // Refresh customer data
//                 fetchCustomerDetails();
//                 // Clear image preview
//                 setImagePreview(null);
//                 setProfileImage(null);
//             }
//         } catch (err) {
//             console.error('Error updating profile:', err);
//             setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

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

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading profile...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
//                 <div className="max-w-7xl mx-auto px-4 py-6">
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
//                             <div>
//                                 <h1 className="text-3xl font-bold">Edit Profile</h1>
//                                 <p className="text-teal-300">Update your personal information</p>
//                             </div>
//                         </div>
//                         <div className="flex gap-4">
//                             <button
//                                 onClick={() => navigate('/customer/dashboard')}
//                                 className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition"
//                             >
//                                 Back to Dashboard
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-3xl mx-auto px-4 py-8">
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                     <div className="p-8">
//                         {/* Success Message */}
//                         {successMessage && (
//                             <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
//                                 <p className="text-green-700 flex items-center">
//                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                     {successMessage}
//                                 </p>
//                             </div>
//                         )}

//                         {/* Error Message */}
//                         {errorMessage && (
//                             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
//                                 <p className="text-red-700 flex items-center">
//                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     {errorMessage}
//                                 </p>
//                             </div>
//                         )}

//                         {/* Current Profile Image */}
//                         <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
//                             <div className="relative">
//                                 <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
//                                     {imagePreview ? (
//                                         <img 
//                                             src={imagePreview} 
//                                             alt="Preview" 
//                                             className="w-full h-full object-cover"
//                                         />
//                                     ) : customerData?.customerImage ? (
//                                         <img 
//                                             src={getImageUrl(customerData.customerImage)} 
//                                             alt={customerData.firstName} 
//                                             className="w-full h-full object-cover"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.style.display = 'none';
//                                                 e.target.parentElement.innerHTML = `<span class="text-white font-bold text-3xl">${customerData.firstName?.charAt(0)}</span>`;
//                                             }}
//                                         />
//                                     ) : (
//                                         <span className="text-white font-bold text-3xl">
//                                             {customerData?.firstName?.charAt(0)}
//                                         </span>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="ml-6">
//                                 <p className="text-lg font-medium text-blue-800">{customerData?.firstName} {customerData?.lastName}</p>
//                                 <p className="text-sm text-blue-600">Member since: {new Date(customerData?.createdAt).toLocaleDateString()}</p>
//                                 <p className="text-xs text-gray-500 mt-2">Upload a new image below to change your profile picture</p>
//                             </div>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* First Name */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         First Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.firstName && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
//                                     )}
//                                 </div>

//                                 {/* Last Name */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Last Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.lastName && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* Email */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Email Address <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.email && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.email}</p>
//                                     )}
//                                 </div>

//                                 {/* Contact Number */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Contact Number <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="contactNumber"
//                                         value={formData.contactNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.contactNumber && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* NIC Number */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         NIC Number <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="nicNumber"
//                                         value={formData.nicNumber}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.nicNumber && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>
//                                     )}
//                                 </div>

//                                 {/* Birthday */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Birthday <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="birthday"
//                                         value={formData.birthday}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     />
//                                     {errors.birthday && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* Gender */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Gender <span className="text-red-500">*</span>
//                                     </label>
//                                     <select
//                                         name="gender"
//                                         value={formData.gender}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                             errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                     >
//                                         <option value="">Select Gender</option>
//                                         <option value="MALE">Male</option>
//                                         <option value="FEMALE">Female</option>
//                                         <option value="OTHER">Other</option>
//                                     </select>
//                                     {errors.gender && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
//                                     )}
//                                 </div>

//                                 {/* Country */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Country <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="country"
//                                         value={formData.country}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                             errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         placeholder="Sri Lanka"
//                                     />
//                                     {errors.country && (
//                                         <p className="mt-1 text-xs text-red-600">{errors.country}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Profile Image Upload */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Profile Image
//                                 </label>
//                                 <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
//                                     errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
//                                 }`}>
//                                     <input
//                                         type="file"
//                                         id="profileImage"
//                                         onChange={handleImageChange}
//                                         className="hidden"
//                                         accept="image/*"
//                                     />
//                                     <label htmlFor="profileImage" className="cursor-pointer block">
//                                         {imagePreview ? (
//                                             <div className="flex flex-col items-center">
//                                                 <img 
//                                                     src={imagePreview} 
//                                                     alt="Preview" 
//                                                     className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-500"
//                                                 />
//                                                 <p className="text-sm text-teal-600">Click to change image</p>
//                                             </div>
//                                         ) : (
//                                             <>
//                                                 <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                                 </svg>
//                                                 <p className="text-sm text-gray-600">Click to upload new profile image</p>
//                                                 <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
//                                             </>
//                                         )}
//                                     </label>
//                                 </div>
//                                 {errors.profileImage && (
//                                     <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>
//                                 )}
//                             </div>

//                             {/* Form Actions */}
//                             <div className="flex gap-4 pt-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
//                                 >
//                                     {isSubmitting ? (
//                                         <>
//                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Saving Changes...
//                                         </>
//                                     ) : (
//                                         'Save Changes'
//                                     )}
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => navigate('/customer/dashboard')}
//                                     className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerProfileEdit;



// src/Pages/Customer/CustomerProfileEdit.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerLayout from './components/CustomerLayout';

const CustomerProfileEdit = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [customerData, setCustomerData] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});

    const BASE_URL = 'http://localhost:8080';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        nicNumber: '',
        birthday: '',
        gender: '',
        country: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('customerToken');
        const customerId = localStorage.getItem('customerId');
        
        if (!token || !customerId) {
            navigate('/customer/login');
            return;
        }

        fetchCustomerDetails();
    }, [navigate]);

    const fetchCustomerDetails = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('customerToken');
            const customerId = localStorage.getItem('customerId');
            
            const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 200) {
                const data = response.data;
                setCustomerData(data);
                setFormData({
                    firstName: data.firstName || '',
                    lastName: data.lastName || '',
                    email: data.email || '',
                    contactNumber: data.contactNumber || '',
                    nicNumber: data.nicNumber || '',
                    birthday: data.birthday ? data.birthday.split('T')[0] : '',
                    gender: data.gender || '',
                    country: data.country || ''
                });
            }
        } catch (err) {
            console.error('Error fetching customer details:', err);
            setErrorMessage('Failed to load profile data');
        } finally {
            setIsLoading(false);
        }
    };

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
                setErrors(prev => ({ ...prev, profileImage: 'Please select an image file' }));
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, profileImage: 'Image size must be less than 5MB' }));
                return;
            }
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, profileImage: '' }));
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
        setErrorMessage('');
        setSuccessMessage('');

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
            
            // DO NOT send password - backend will keep existing
            // submitData.append('password', 'dummy'); // REMOVED - this was the problem
            
            if (profileImage) {
                submitData.append('customerImage', profileImage);
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
                setSuccessMessage('Profile updated successfully!');
                localStorage.setItem('customerName', `${formData.firstName} ${formData.lastName}`);
                fetchCustomerDetails();
                setImagePreview(null);
                setProfileImage(null);
                
                // Redirect back to dashboard after 2 seconds
                setTimeout(() => {
                    navigate('/customer/dashboard');
                }, 2000);
            }
        } catch (err) {
            console.error('Error updating profile:', err);
            setErrorMessage(err.response?.data?.message || 'Failed to update profile. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

    if (isLoading) {
        return (
            <CustomerLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                        <p className="text-gray-600">Loading profile...</p>
                    </div>
                </div>
            </CustomerLayout>
        );
    }

    return (
        <CustomerLayout>
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

                        {/* Success Message */}
                        {successMessage && (
                            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                                <p className="text-green-700 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {successMessage}
                                </p>
                            </div>
                        )}

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                <p className="text-red-700 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        {/* Current Profile Image */}
                        <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                                    {imagePreview ? (
                                        <img 
                                            src={imagePreview} 
                                            alt="Preview" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : customerData?.customerImage ? (
                                        <img 
                                            src={getImageUrl(customerData.customerImage)} 
                                            alt={customerData.firstName} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `<span class="text-white font-bold text-3xl">${customerData.firstName?.charAt(0)}</span>`;
                                            }}
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-3xl">
                                            {customerData?.firstName?.charAt(0)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="ml-6">
                                <p className="text-lg font-medium text-blue-800">{customerData?.firstName} {customerData?.lastName}</p>
                                <p className="text-sm text-blue-600">Member since: {new Date(customerData?.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.firstName && (
                                        <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.lastName && (
                                        <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                {/* Contact Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.contactNumber && (
                                        <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* NIC Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        NIC Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nicNumber"
                                        value={formData.nicNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.nicNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.nicNumber && (
                                        <p className="mt-1 text-xs text-red-600">{errors.nicNumber}</p>
                                    )}
                                </div>

                                {/* Birthday */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Birthday <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="birthday"
                                        value={formData.birthday}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.birthday && (
                                        <p className="mt-1 text-xs text-red-600">{errors.birthday}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Gender */}
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
                                    {errors.gender && (
                                        <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
                                    )}
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                            errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Sri Lanka"
                                    />
                                    {errors.country && (
                                        <p className="mt-1 text-xs text-red-600">{errors.country}</p>
                                    )}
                                </div>
                            </div>

                            {/* Profile Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Profile Image
                                </label>
                                <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                                    errors.profileImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                                }`}>
                                    <input
                                        type="file"
                                        id="profileImage"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                    <label htmlFor="profileImage" className="cursor-pointer block">
                                        {imagePreview ? (
                                            <div className="flex flex-col items-center">
                                                <img 
                                                    src={imagePreview} 
                                                    alt="Preview" 
                                                    className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-500"
                                                />
                                                <p className="text-sm text-teal-600">Click to change image</p>
                                            </div>
                                        ) : (
                                            <>
                                                <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-sm text-gray-600">Click to upload new profile image</p>
                                                <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
                                            </>
                                        )}
                                    </label>
                                </div>
                                {errors.profileImage && (
                                    <p className="mt-1 text-xs text-red-600">{errors.profileImage}</p>
                                )}
                            </div>

                            {/* Form Actions */}
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
                                            Saving Changes...
                                        </>
                                    ) : (
                                        'Save Changes'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/customer/dashboard')}
                                    className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default CustomerProfileEdit;