// // // // // src/Pages/Admin/components/modals/EditAgentModal.jsx
// // // // import React, { useState } from 'react';

// // // // const EditAgentModal = ({ agent, onClose, onSave }) => {
// // // //     const [formData, setFormData] = useState({
// // // //         companyName: agent.companyName || '',
// // // //         email: agent.email || '',
// // // //         contactNumber: agent.contactNumber || '',
// // // //         registrationNumber: agent.registrationNumber || '',
// // // //         address: agent.address || '',
// // // //         city: agent.city || '',
// // // //         status: agent.status || 'ACTIVE'
// // // //     });
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         setIsSubmitting(true);
// // // //         await onSave(formData);
// // // //         setIsSubmitting(false);
// // // //     };

// // // //     return (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// // // //                 <div className="p-6">
// // // //                     <div className="flex justify-between items-center mb-6">
// // // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Agent</h2>
// // // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                             </svg>
// // // //                         </button>
// // // //                     </div>

// // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // //                         <div className="grid grid-cols-2 gap-4">
// // // //                             <div>
// // // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="companyName"
// // // //                                     value={formData.companyName}
// // // //                                     onChange={handleChange}
// // // //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     required
// // // //                                 />
// // // //                             </div>
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
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// // // //                             <input
// // // //                                 type="tel"
// // // //                                 name="contactNumber"
// // // //                                 value={formData.contactNumber}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                 required
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="registrationNumber"
// // // //                                 value={formData.registrationNumber}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="address"
// // // //                                 value={formData.address}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 name="city"
// // // //                                 value={formData.city}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                             />
// // // //                         </div>

// // // //                         <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
// // // //                             <select
// // // //                                 name="status"
// // // //                                 value={formData.status}
// // // //                                 onChange={handleChange}
// // // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // // //                             >
// // // //                                 <option value="ACTIVE">Active</option>
// // // //                                 <option value="INACTIVE">Inactive</option>
// // // //                                 <option value="SUSPENDED">Suspended</option>
// // // //                             </select>
// // // //                         </div>

// // // //                         <div className="flex gap-4 pt-4">
// // // //                             <button
// // // //                                 type="submit"
// // // //                                 disabled={isSubmitting}
// // // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// // // //                             >
// // // //                                 {isSubmitting ? 'Updating...' : 'Update Agent'}
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

// // // // export default EditAgentModal;



// // // // src/Pages/Admin/components/modals/EditAgentModal.jsx
// // // import React, { useState } from 'react';

// // // const EditAgentModal = ({ agent, onClose, onSave }) => {
// // //     const [formData, setFormData] = useState({
// // //         companyName: agent.companyName || '',
// // //         email: agent.email || '',
// // //         contactNumber: agent.contactNumber || '',
// // //         registrationNumber: agent.registrationNumber || '',
// // //         address: agent.address || '',
// // //         city: agent.city || '',
// // //         status: agent.status || 'ACTIVE'
// // //     });
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
// // //     const [errors, setErrors] = useState({});

// // //     const validateForm = () => {
// // //         const newErrors = {};
// // //         if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
// // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
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

// // //         // Create JSON data
// // //         const submitData = {
// // //             companyName: formData.companyName,
// // //             email: formData.email,
// // //             password: 'dummy', // Backend requires password
// // //             contactNumber: formData.contactNumber,
// // //             registrationNumber: formData.registrationNumber,
// // //             address: formData.address,
// // //             city: formData.city,
// // //             status: formData.status
// // //         };

// // //         await onSave(JSON.stringify(submitData));
// // //         setIsSubmitting(false);
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// // //                 <div className="p-6">
// // //                     <div className="flex justify-between items-center mb-6">
// // //                         <h2 className="text-2xl font-bold text-gray-800">Edit Agent</h2>
// // //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// // //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                             </svg>
// // //                         </button>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="companyName"
// // //                                 value={formData.companyName}
// // //                                 onChange={handleChange}
// // //                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                     errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                 }`}
// // //                             />
// // //                             {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // //                             <input
// // //                                 type="email"
// // //                                 name="email"
// // //                                 value={formData.email}
// // //                                 onChange={handleChange}
// // //                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// // //                                     errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
// // //                                 }`}
// // //                             />
// // //                             {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// // //                             <input
// // //                                 type="tel"
// // //                                 name="contactNumber"
// // //                                 value={formData.contactNumber}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="registrationNumber"
// // //                                 value={formData.registrationNumber}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
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

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
// // //                             <input
// // //                                 type="text"
// // //                                 name="city"
// // //                                 value={formData.city}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
// // //                             <select
// // //                                 name="status"
// // //                                 value={formData.status}
// // //                                 onChange={handleChange}
// // //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                             >
// // //                                 <option value="ACTIVE">Active</option>
// // //                                 <option value="INACTIVE">Inactive</option>
// // //                                 <option value="SUSPENDED">Suspended</option>
// // //                             </select>
// // //                         </div>

// // //                         <div className="flex gap-4 pt-4">
// // //                             <button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50"
// // //                             >
// // //                                 {isSubmitting ? 'Updating...' : 'Update Agent'}
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

// // // export default EditAgentModal;



// // // src/Pages/Admin/components/modals/EditAgentModal.jsx
// // import React, { useState, useEffect } from 'react';

// // const EditAgentModal = ({ agent, onClose, onSave }) => {
// //     const [formData, setFormData] = useState({
// //         companyName: '',
// //         tagline: '',
// //         userName: '',
// //         email: '',
// //         contactNo: '',
// //         businessRegNo: '',
// //         operatingSince: '',
// //         tourismApproved: '',
// //         insuranceType: '',
// //         serviceAreas: '',
// //         password: '' // Optional for update
// //     });
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errors, setErrors] = useState({});

// //     // Load agent data when modal opens
// //     useEffect(() => {
// //         if (agent) {
// //             setFormData({
// //                 companyName: agent.companyName || '',
// //                 tagline: agent.tagline || '',
// //                 userName: agent.userName || '',
// //                 email: agent.email || '',
// //                 contactNo: agent.contactNo || '',
// //                 businessRegNo: agent.businessRegNo || '',
// //                 operatingSince: agent.operatingSince || '',
// //                 tourismApproved: agent.tourismApproved || '',
// //                 insuranceType: agent.insuranceType || '',
// //                 serviceAreas: agent.serviceAreas || '',
// //                 password: '' // Don't pre-fill password
// //             });
// //         }
// //     }, [agent]);

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
// //         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //             newErrors.email = 'Invalid email format';
// //         }
// //         return newErrors;
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({ ...prev, [name]: value }));
// //         if (errors[name]) {
// //             setErrors(prev => ({ ...prev, [name]: '' }));
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

// //         // Create JSON data matching backend DTO
// //         const submitData = {
// //             companyName: formData.companyName,
// //             tagline: formData.tagline,
// //             userName: formData.userName,
// //             email: formData.email,
// //             contactNo: formData.contactNo,
// //             businessRegNo: formData.businessRegNo,
// //             operatingSince: formData.operatingSince,
// //             tourismApproved: formData.tourismApproved,
// //             insuranceType: formData.insuranceType,
// //             serviceAreas: formData.serviceAreas,
// //             password: formData.password || 'dummy' // Backend requires password
// //         };

// //         await onSave(JSON.stringify(submitData));
// //         setIsSubmitting(false);
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Edit Agent</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Agent Info Summary */}
// //                     <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
// //                         <div className="flex items-center">
// //                             <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
// //                                 {formData.companyName?.charAt(0)}
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-teal-600">Editing Agent</p>
// //                                 <p className="font-semibold text-gray-800">{formData.companyName}</p>
// //                                 <p className="text-xs text-gray-500">ID: #AG{String(agent.id).padStart(4, '0')}</p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
// //                                 <input
// //                                     type="text"
// //                                     name="companyName"
// //                                     value={formData.companyName}
// //                                     onChange={handleChange}
// //                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
// //                                         errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
// //                                     }`}
// //                                 />
// //                                 {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
// //                                 <input
// //                                     type="text"
// //                                     name="tagline"
// //                                     value={formData.tagline}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="Your company motto"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
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
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
// //                                 <input
// //                                     type="tel"
// //                                     name="contactNo"
// //                                     value={formData.contactNo}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="+94 77 123 4567"
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Business Reg No</label>
// //                                 <input
// //                                     type="text"
// //                                     name="businessRegNo"
// //                                     value={formData.businessRegNo}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="Registration number"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Operating Since</label>
// //                                 <input
// //                                     type="text"
// //                                     name="operatingSince"
// //                                     value={formData.operatingSince}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="e.g., 2010"
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tourism Approved</label>
// //                                 <select
// //                                     name="tourismApproved"
// //                                     value={formData.tourismApproved}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                                 >
// //                                     <option value="">Select</option>
// //                                     <option value="Yes">Yes</option>
// //                                     <option value="No">No</option>
// //                                     <option value="Pending">Pending</option>
// //                                 </select>
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
// //                                 <input
// //                                     type="text"
// //                                     name="insuranceType"
// //                                     value={formData.insuranceType}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="e.g., Comprehensive"
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
// //                                 <input
// //                                     type="password"
// //                                     name="password"
// //                                     value={formData.password}
// //                                     onChange={handleChange}
// //                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     placeholder="Leave blank to keep current"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Service Areas</label>
// //                             <textarea
// //                                 name="serviceAreas"
// //                                 value={formData.serviceAreas}
// //                                 onChange={handleChange}
// //                                 rows="3"
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                 placeholder="e.g., Colombo, Kandy, Galle, All Sri Lanka"
// //                             />
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
// //                                     'Update Agent'
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

// // export default EditAgentModal;




// // src/Pages/Admin/components/modals/EditAgentModal.jsx
// import React, { useState, useEffect } from 'react';

// // Sri Lankan districts for service areas
// const sriLankanDistricts = [
//     'Colombo', 'Gampaha', 'Kalutara', // Western
//     'Kandy', 'Matale', 'Nuwara Eliya', // Central
//     'Galle', 'Matara', 'Hambantota', // Southern
//     'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', // Northern
//     'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Trincomalee', 'Batticaloa', 'Ampara', // Other
//     'Kurunegala', 'Puttalam', // North Western
//     'Kegalle', 'Ratnapura' // Sabaragamuwa
// ];

// const EditAgentModal = ({ agent, onClose, onSave }) => {
//     const [formData, setFormData] = useState({
//         companyName: '',
//         tagline: '',
//         userName: '',
//         email: '',
//         contactNo: '',
//         businessRegNo: '',
//         operatingSince: '',
//         tourismApproved: '',
//         insuranceType: '',
//         serviceAreas: '',
//         password: '' // Optional for update
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [validationErrors, setValidationErrors] = useState({});

//     // Load agent data when modal opens
//     useEffect(() => {
//         if (agent) {
//             setFormData({
//                 companyName: agent.companyName || '',
//                 tagline: agent.tagline || '',
//                 userName: agent.userName || '',
//                 email: agent.email || '',
//                 contactNo: agent.contactNo || '',
//                 businessRegNo: agent.businessRegNo || '',
//                 operatingSince: agent.operatingSince || '',
//                 tourismApproved: agent.tourismApproved || '',
//                 insuranceType: agent.insuranceType || '',
//                 serviceAreas: agent.serviceAreas || '',
//                 password: '' // Don't pre-fill password
//             });
//         }
//     }, [agent]);

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
//         if (!formData.userName.trim()) newErrors.userName = 'Username is required';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }
//         if (!formData.serviceAreas.trim()) newErrors.serviceAreas = 'Please select at least one service area';
//         return newErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         if (validationErrors[name]) {
//             setValidationErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length > 0) {
//             setValidationErrors(newErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         // Create JSON data matching backend DTO
//         const submitData = {
//             companyName: formData.companyName,
//             tagline: formData.tagline,
//             userName: formData.userName,
//             email: formData.email,
//             contactNo: formData.contactNo,
//             businessRegNo: formData.businessRegNo,
//             operatingSince: formData.operatingSince,
//             tourismApproved: formData.tourismApproved,
//             insuranceType: formData.insuranceType,
//             serviceAreas: formData.serviceAreas,
//             password: formData.password || 'dummy' // Backend requires password
//         };

//         await onSave(JSON.stringify(submitData));
//         setIsSubmitting(false);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Edit Agent</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Agent Info Summary */}
//                     <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
//                         <div className="flex items-center">
//                             <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                                 {formData.companyName?.charAt(0)}
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-teal-600">Editing Agent</p>
//                                 <p className="font-semibold text-gray-800">{formData.companyName}</p>
//                                 <p className="text-xs text-gray-500">ID: #AG{String(agent.id).padStart(4, '0')}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
//                                 <input
//                                     type="text"
//                                     name="companyName"
//                                     value={formData.companyName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {validationErrors.companyName && <p className="mt-1 text-xs text-red-600">{validationErrors.companyName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
//                                 <input
//                                     type="text"
//                                     name="tagline"
//                                     value={formData.tagline}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
//                                 <input
//                                     type="text"
//                                     name="userName"
//                                     value={formData.userName}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {validationErrors.userName && <p className="mt-1 text-xs text-red-600">{validationErrors.userName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {validationErrors.email && <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
//                                 <input
//                                     type="tel"
//                                     name="contactNo"
//                                     value={formData.contactNo}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Business Reg No</label>
//                                 <input
//                                     type="text"
//                                     name="businessRegNo"
//                                     value={formData.businessRegNo}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Operating Since</label>
//                                 <input
//                                     type="text"
//                                     name="operatingSince"
//                                     value={formData.operatingSince}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tourism Approved</label>
//                                 <select
//                                     name="tourismApproved"
//                                     value={formData.tourismApproved}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="Yes">Yes</option>
//                                     <option value="No">No</option>
//                                     <option value="Pending">Pending</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
//                                 <input
//                                     type="text"
//                                     name="insuranceType"
//                                     value={formData.insuranceType}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     placeholder="Leave blank to keep current"
//                                 />
//                             </div>
//                         </div>

//                         {/* Service Areas */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                                 </svg>
//                                 Service Areas <span className="text-red-500 ml-1">*</span>
//                             </h3>
                            
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Select Service Areas (Select all applicable districts)
//                                 </label>
                                
//                                 <div className={`border rounded-lg p-4 transition duration-200 ${
//                                     validationErrors.serviceAreas ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}>
//                                     {/* Selected Areas Display */}
//                                     {formData.serviceAreas && (
//                                         <div className="mb-4">
//                                             <div className="flex flex-wrap gap-2">
//                                                 {formData.serviceAreas.split(', ').map((district, index) => (
//                                                     <div key={index} className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
//                                                         <span>{district}</span>
//                                                         <button
//                                                             type="button"
//                                                             onClick={() => {
//                                                                 const currentAreas = formData.serviceAreas.split(', ');
//                                                                 const updatedAreas = currentAreas.filter(area => area !== district);
//                                                                 setFormData(prev => ({
//                                                                     ...prev,
//                                                                     serviceAreas: updatedAreas.join(', ')
//                                                                 }));
//                                                             }}
//                                                             className="ml-2 text-teal-600 hover:text-teal-800"
//                                                         >
//                                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                                             </svg>
//                                                         </button>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div className="mt-2 text-xs text-gray-500">
//                                                 {formData.serviceAreas.split(', ').length} district(s) selected
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Quick Selection Buttons */}
//                                     <div className="mb-4">
//                                         <div className="flex flex-wrap gap-2 mb-2">
//                                             <button
//                                                 type="button"
//                                                 onClick={() => {
//                                                     const allDistricts = sriLankanDistricts.join(', ');
//                                                     setFormData(prev => ({ ...prev, serviceAreas: allDistricts }));
//                                                 }}
//                                                 className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
//                                             >
//                                                 Select All
//                                             </button>
//                                             <button
//                                                 type="button"
//                                                 onClick={() => {
//                                                     setFormData(prev => ({ ...prev, serviceAreas: '' }));
//                                                 }}
//                                                 className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
//                                             >
//                                                 Clear All
//                                             </button>
//                                         </div>
                                        
//                                         {/* Major Regions Quick Select */}
//                                         <div className="text-xs text-gray-600 mb-2">Quick select by region:</div>
//                                         <div className="flex flex-wrap gap-2">
//                                             <button
//                                                 type="button"
//                                                 onClick={() => {
//                                                     const westernDistricts = ['Colombo', 'Gampaha', 'Kalutara'];
//                                                     setFormData(prev => ({
//                                                         ...prev,
//                                                         serviceAreas: westernDistricts.join(', ')
//                                                     }));
//                                                 }}
//                                                 className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition duration-200"
//                                             >
//                                                 Western Province
//                                             </button>
//                                             <button
//                                                 type="button"
//                                                 onClick={() => {
//                                                     const southernDistricts = ['Galle', 'Matara', 'Hambantota'];
//                                                     setFormData(prev => ({
//                                                         ...prev,
//                                                         serviceAreas: southernDistricts.join(', ')
//                                                     }));
//                                                 }}
//                                                 className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg hover:bg-green-100 transition duration-200"
//                                             >
//                                                 Southern Province
//                                             </button>
//                                             <button
//                                                 type="button"
//                                                 onClick={() => {
//                                                     const centralDistricts = ['Kandy', 'Matale', 'Nuwara Eliya'];
//                                                     setFormData(prev => ({
//                                                         ...prev,
//                                                         serviceAreas: centralDistricts.join(', ')
//                                                     }));
//                                                 }}
//                                                 className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg hover:bg-purple-100 transition duration-200"
//                                             >
//                                                 Central Province
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* Districts Grid */}
//                                     <div className="border-t pt-4">
//                                         <div className="text-sm font-medium text-gray-700 mb-3">Select Individual Districts:</div>
//                                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-2">
//                                             {sriLankanDistricts.map((district, index) => {
//                                                 const isSelected = formData.serviceAreas.includes(district);
//                                                 return (
//                                                     <div key={index} className="flex items-center">
//                                                         <input
//                                                             type="checkbox"
//                                                             id={`edit-district-${index}`}
//                                                             checked={isSelected}
//                                                             onChange={(e) => {
//                                                                 let currentAreas = formData.serviceAreas ? formData.serviceAreas.split(', ') : [];
//                                                                 if (e.target.checked) {
//                                                                     if (!currentAreas.includes(district)) {
//                                                                         currentAreas.push(district);
//                                                                     }
//                                                                 } else {
//                                                                     currentAreas = currentAreas.filter(area => area !== district);
//                                                                 }
//                                                                 setFormData(prev => ({
//                                                                     ...prev,
//                                                                     serviceAreas: currentAreas.join(', ')
//                                                                 }));
//                                                             }}
//                                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                                         />
//                                                         <label
//                                                             htmlFor={`edit-district-${index}`}
//                                                             className={`ml-2 text-sm cursor-pointer select-none ${
//                                                                 isSelected ? 'text-teal-700 font-medium' : 'text-gray-700'
//                                                             }`}
//                                                         >
//                                                             {district}
//                                                         </label>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
                                        
//                                         {/* Instructions */}
//                                         <div className="mt-4 text-xs text-gray-500 flex items-center">
//                                             <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             Select all districts where you provide services. Click on tags above to remove.
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 {validationErrors.serviceAreas && (
//                                     <p className="mt-2 text-sm text-red-600">{validationErrors.serviceAreas}</p>
//                                 )}
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
//                                     'Update Agent'
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

// export default EditAgentModal;



// src/Pages/Admin/components/modals/EditAgentModal.jsx
import React, { useState, useEffect } from 'react';

// Sri Lankan districts for service areas
const sriLankanDistricts = [
    'Colombo', 'Gampaha', 'Kalutara', // Western
    'Kandy', 'Matale', 'Nuwara Eliya', // Central
    'Galle', 'Matara', 'Hambantota', // Southern
    'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', // Northern
    'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Trincomalee', 'Batticaloa', 'Ampara', // Other
    'Kurunegala', 'Puttalam', // North Western
    'Kegalle', 'Ratnapura' // Sabaragamuwa
];

const EditAgentModal = ({ agent, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        tagline: '',
        userName: '',
        email: '',
        contactNo: '',
        businessRegNo: '',
        operatingSince: '',
        tourismApproved: '',
        insuranceType: '',
        serviceAreas: '',
        password: '' // Optional for update
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    // Load agent data when modal opens
    useEffect(() => {
        if (agent) {
            console.log('Loading agent data for edit:', agent);
            setFormData({
                companyName: agent.companyName || '',
                tagline: agent.tagline || '',
                userName: agent.userName || '',
                email: agent.email || '',
                contactNo: agent.contactNo || '',
                businessRegNo: agent.businessRegNo || '',
                operatingSince: agent.operatingSince || '',
                tourismApproved: agent.tourismApproved || '',
                insuranceType: agent.insuranceType || '',
                serviceAreas: agent.serviceAreas || '',
                password: '' // Don't pre-fill password
            });
        }
    }, [agent]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.userName.trim()) newErrors.userName = 'Username is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        // Service areas is optional, so no validation
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (validationErrors[name]) {
            setValidationErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Create JSON data matching backend DTO exactly
            const submitData = {
                companyName: formData.companyName,
                tagline: formData.tagline || '',
                userName: formData.userName,
                email: formData.email,
                contactNo: formData.contactNo || '',
                businessRegNo: formData.businessRegNo || '',
                operatingSince: formData.operatingSince || '',
                tourismApproved: formData.tourismApproved || '',
                insuranceType: formData.insuranceType || '',
                serviceAreas: formData.serviceAreas || ''
            };

            // Only include password if it's provided
            if (formData.password && formData.password.trim() !== '') {
                submitData.password = formData.password;
            }

            console.log('Submitting agent update:', submitData);
            await onSave(JSON.stringify(submitData));
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Edit Agent</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Agent Info Summary */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {formData.companyName?.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-teal-600">Editing Agent</p>
                                <p className="font-semibold text-gray-800">{formData.companyName}</p>
                                <p className="text-xs text-gray-500">ID: #AG{String(agent.id).padStart(4, '0')}</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {validationErrors.companyName && <p className="mt-1 text-xs text-red-600">{validationErrors.companyName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                                <input
                                    type="text"
                                    name="tagline"
                                    value={formData.tagline}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {validationErrors.userName && <p className="mt-1 text-xs text-red-600">{validationErrors.userName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {validationErrors.email && <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Business Reg No</label>
                                <input
                                    type="text"
                                    name="businessRegNo"
                                    value={formData.businessRegNo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Operating Since</label>
                                <input
                                    type="text"
                                    name="operatingSince"
                                    value={formData.operatingSince}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="e.g., 2010"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tourism Approved</label>
                                <select
                                    name="tourismApproved"
                                    value={formData.tourismApproved}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
                                <input
                                    type="text"
                                    name="insuranceType"
                                    value={formData.insuranceType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="Leave blank to keep current"
                                />
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Service Areas
                            </h3>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Service Areas (Select all applicable districts)
                                </label>
                                
                                <div className="border border-gray-300 rounded-lg p-4">
                                    {/* Selected Areas Display */}
                                    {formData.serviceAreas && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {formData.serviceAreas.split(', ').map((district, index) => (
                                                    <div key={index} className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                                        <span>{district}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const currentAreas = formData.serviceAreas.split(', ');
                                                                const updatedAreas = currentAreas.filter(area => area !== district);
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    serviceAreas: updatedAreas.join(', ')
                                                                }));
                                                            }}
                                                            className="ml-2 text-teal-600 hover:text-teal-800"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-2 text-xs text-gray-500">
                                                {formData.serviceAreas.split(', ').length} district(s) selected
                                            </div>
                                        </div>
                                    )}

                                    {/* Quick Selection Buttons */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const allDistricts = sriLankanDistricts.join(', ');
                                                    setFormData(prev => ({ ...prev, serviceAreas: allDistricts }));
                                                }}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
                                            >
                                                Select All
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, serviceAreas: '' }));
                                                }}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition duration-200"
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                        
                                        {/* Major Regions Quick Select */}
                                        <div className="text-xs text-gray-600 mb-2">Quick select by region:</div>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const westernDistricts = ['Colombo', 'Gampaha', 'Kalutara'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: westernDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition duration-200"
                                            >
                                                Western Province
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const southernDistricts = ['Galle', 'Matara', 'Hambantota'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: southernDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg hover:bg-green-100 transition duration-200"
                                            >
                                                Southern Province
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const centralDistricts = ['Kandy', 'Matale', 'Nuwara Eliya'];
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        serviceAreas: centralDistricts.join(', ')
                                                    }));
                                                }}
                                                className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg hover:bg-purple-100 transition duration-200"
                                            >
                                                Central Province
                                            </button>
                                        </div>
                                    </div>

                                    {/* Districts Grid */}
                                    <div className="border-t pt-4">
                                        <div className="text-sm font-medium text-gray-700 mb-3">Select Individual Districts:</div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-2">
                                            {sriLankanDistricts.map((district, index) => {
                                                const isSelected = formData.serviceAreas.includes(district);
                                                return (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id={`edit-district-${index}`}
                                                            checked={isSelected}
                                                            onChange={(e) => {
                                                                let currentAreas = formData.serviceAreas ? formData.serviceAreas.split(', ') : [];
                                                                if (e.target.checked) {
                                                                    if (!currentAreas.includes(district)) {
                                                                        currentAreas.push(district);
                                                                    }
                                                                } else {
                                                                    currentAreas = currentAreas.filter(area => area !== district);
                                                                }
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    serviceAreas: currentAreas.join(', ')
                                                                }));
                                                            }}
                                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                                        />
                                                        <label
                                                            htmlFor={`edit-district-${index}`}
                                                            className={`ml-2 text-sm cursor-pointer select-none ${
                                                                isSelected ? 'text-teal-700 font-medium' : 'text-gray-700'
                                                            }`}
                                                        >
                                                            {district}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        
                                        {/* Instructions */}
                                        <div className="mt-4 text-xs text-gray-500 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Select all districts where you provide services. Click on tags above to remove.
                                        </div>
                                    </div>
                                </div>
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
                                    'Update Agent'
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

export default EditAgentModal;