// // src/Pages/Agent/components/EditAgentProfileModal.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Sri Lankan districts for service areas
// const sriLankanDistricts = [
//     'Colombo', 'Gampaha', 'Kalutara',
//     'Kandy', 'Matale', 'Nuwara Eliya',
//     'Galle', 'Matara', 'Hambantota',
//     'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya',
//     'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Trincomalee', 'Batticaloa', 'Ampara',
//     'Kurunegala', 'Puttalam',
//     'Kegalle', 'Ratnapura'
// ];

// const EditAgentProfileModal = ({ agent, onClose, onUpdate, BASE_URL }) => {
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
//         password: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [validationErrors, setValidationErrors] = useState({});

//     // Load agent data when modal opens
//     useEffect(() => {
//         if (agent) {
//             console.log('Loading agent data for edit:', agent);
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
//                 password: ''
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

//         try {
//             const token = localStorage.getItem('agentToken');
//             const agentId = localStorage.getItem('agentId');

//             const submitData = {
//                 companyName: formData.companyName,
//                 tagline: formData.tagline || '',
//                 userName: formData.userName,
//                 email: formData.email,
//                 contactNo: formData.contactNo || '',
//                 businessRegNo: formData.businessRegNo || '',
//                 operatingSince: formData.operatingSince || '',
//                 tourismApproved: formData.tourismApproved || '',
//                 insuranceType: formData.insuranceType || '',
//                 serviceAreas: formData.serviceAreas || ''
//             };

//             // Only include password if it's provided
//             if (formData.password && formData.password.trim() !== '') {
//                 submitData.password = formData.password;
//             }

//             const response = await axios.put(
//                 `${BASE_URL}/api/v1/agent/update/${agentId}`,
//                 submitData,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     }
//                 }
//             );

//             if (response.status === 200) {
//                 onUpdate(response.data);
//                 onClose();
//             }
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             alert('Failed to update profile. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
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

//                     {/* Agent Info Summary */}
//                     <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
//                         <div className="flex items-center">
//                             <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
//                                 {formData.companyName?.charAt(0)}
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-teal-600">Editing Profile</p>
//                                 <p className="font-semibold text-gray-800 text-lg">{formData.companyName}</p>
//                                 <p className="text-xs text-gray-500">ID: #AG{String(agent.id).padStart(4, '0')}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="companyName"
//                                         value={formData.companyName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         style={{ color: '#111827' }} // Ensure dark text color
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.companyName || 'empty'}
//                                     </span>
//                                 </div>
//                                 {validationErrors.companyName && <p className="mt-1 text-xs text-red-600">{validationErrors.companyName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="tagline"
//                                         value={formData.tagline}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.tagline || 'empty'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="userName"
//                                         value={formData.userName}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.userName || 'empty'}
//                                     </span>
//                                 </div>
//                                 {validationErrors.userName && <p className="mt-1 text-xs text-red-600">{validationErrors.userName}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                                 <div className="relative">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
//                                             validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                         }`}
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[120px]">
//                                         {agent?.email || 'empty'}
//                                     </span>
//                                 </div>
//                                 {validationErrors.email && <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
//                                 <div className="relative">
//                                     <input
//                                         type="tel"
//                                         name="contactNo"
//                                         value={formData.contactNo}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.contactNo || 'empty'}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Business Reg No</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="businessRegNo"
//                                         value={formData.businessRegNo}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.businessRegNo || 'empty'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Operating Since</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="operatingSince"
//                                         value={formData.operatingSince}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                         placeholder="e.g., 2010"
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.operatingSince || 'empty'}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Tourism Approved</label>
//                                 <div className="relative">
//                                     <select
//                                         name="tourismApproved"
//                                         value={formData.tourismApproved}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
//                                         style={{ color: '#111827' }}
//                                     >
//                                         <option value="" className="text-gray-500">Select</option>
//                                         <option value="Yes" className="text-gray-900">Yes</option>
//                                         <option value="No" className="text-gray-900">No</option>
//                                         <option value="Pending" className="text-gray-900">Pending</option>
//                                     </select>
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.tourismApproved || 'not set'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="insuranceType"
//                                         value={formData.insuranceType}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                         style={{ color: '#111827' }}
//                                     />
//                                     <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                         Current: {agent?.insuranceType || 'empty'}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
//                                     placeholder="Leave blank to keep current"
//                                     style={{ color: '#111827' }}
//                                 />
//                                 <p className="text-xs text-gray-500 mt-1">Only fill this to change password</p>
//                             </div>
//                         </div>

//                         {/* Service Areas */}
//                         <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                                 </svg>
//                                 Service Areas
//                                 <span className="ml-2 text-sm font-normal text-gray-500">
//                                     ({formData.serviceAreas ? formData.serviceAreas.split(', ').length : 0} selected)
//                                 </span>
//                             </h3>
                            
//                             <div>
//                                 <div className="border border-gray-300 rounded-lg p-4">
//                                     {/* Selected Areas Display */}
//                                     {formData.serviceAreas && formData.serviceAreas.length > 0 && (
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
//                                     </div>
//                                 </div>
//                             </div>
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

// export default EditAgentProfileModal;



// src/Pages/Agent/components/EditAgentProfileModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Sri Lankan districts for service areas
const sriLankanDistricts = [
    'Colombo', 'Gampaha', 'Kalutara',
    'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya',
    'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Trincomalee', 'Batticaloa', 'Ampara',
    'Kurunegala', 'Puttalam',
    'Kegalle', 'Ratnapura'
];

const EditAgentProfileModal = ({ agent, onClose, onUpdate, BASE_URL }) => {
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
        password: ''
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
                password: '' // IMPORTANT: Never pre-fill password
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
            const token = localStorage.getItem('agentToken');
            const agentId = localStorage.getItem('agentId');

            // Create submit data WITHOUT password unless it's provided
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

            // Only include password if user actually entered a new one
            if (formData.password && formData.password.trim() !== '') {
                submitData.password = formData.password;
                console.log('Password will be updated');
            } else {
                console.log('Password not changed - keeping existing');
            }

            console.log('Submitting agent update:', submitData);

            const response = await axios.put(
                `${BASE_URL}/api/v1/agent/update/${agentId}`,
                submitData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                // Update local storage with new data but keep the same token
                const updatedData = response.data;
                
                // Update localStorage with new data
                localStorage.setItem('agentCompanyName', updatedData.companyName || '');
                localStorage.setItem('agentEmail', updatedData.email || '');
                localStorage.setItem('agentData', JSON.stringify(updatedData));
                
                // IMPORTANT: Do NOT remove or change the token
                // Token remains the same
                
                onUpdate(updatedData);
                onClose();
                
                // Show success message
                alert('Profile updated successfully!');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            
            // Check if it's an authentication error
            if (error.response?.status === 401) {
                alert('Your session has expired. Please login again.');
                localStorage.clear();
                window.location.href = '/agent/login';
            } else {
                alert(error.response?.data?.message || 'Failed to update profile. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
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

                    {/* Agent Info Summary */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                {formData.companyName?.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-teal-600">Editing Profile</p>
                                <p className="font-semibold text-gray-800 text-lg">{formData.companyName}</p>
                                <p className="text-xs text-gray-500">ID: #AG{String(agent.id).padStart(4, '0')}</p>
                                <p className="text-xs text-green-600 mt-1">✓ Your session will remain active after update</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            validationErrors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.companyName || 'empty'}
                                    </span>
                                </div>
                                {validationErrors.companyName && <p className="mt-1 text-xs text-red-600">{validationErrors.companyName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="tagline"
                                        value={formData.tagline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.tagline || 'empty'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            validationErrors.userName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.userName || 'empty'}
                                    </span>
                                </div>
                                {validationErrors.userName && <p className="mt-1 text-xs text-red-600">{validationErrors.userName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 ${
                                            validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[120px]">
                                        {agent?.email || 'empty'}
                                    </span>
                                </div>
                                {validationErrors.email && <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.contactNo || 'empty'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Business Reg No</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="businessRegNo"
                                        value={formData.businessRegNo}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.businessRegNo || 'empty'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Operating Since</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="operatingSince"
                                        value={formData.operatingSince}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                        placeholder="e.g., 2010"
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.operatingSince || 'empty'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tourism Approved</label>
                                <div className="relative">
                                    <select
                                        name="tourismApproved"
                                        value={formData.tourismApproved}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
                                        style={{ color: '#111827' }}
                                    >
                                        <option value="" className="text-gray-500">Select</option>
                                        <option value="Yes" className="text-gray-900">Yes</option>
                                        <option value="No" className="text-gray-900">No</option>
                                        <option value="Pending" className="text-gray-900">Pending</option>
                                    </select>
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.tourismApproved || 'not set'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Type</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="insuranceType"
                                        value={formData.insuranceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                        style={{ color: '#111827' }}
                                    />
                                    <span className="absolute right-3 top-3 text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        Current: {agent?.insuranceType || 'empty'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                                    placeholder="Leave blank to keep current password"
                                    style={{ color: '#111827' }}
                                />
                                <p className="text-xs text-green-600 mt-1">⚠️ Only fill this if you want to change your password</p>
                                <p className="text-xs text-gray-500">Your current password will remain unchanged if left blank</p>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Service Areas
                                <span className="ml-2 text-sm font-normal text-gray-500">
                                    ({formData.serviceAreas ? formData.serviceAreas.split(', ').length : 0} selected)
                                </span>
                            </h3>
                            
                            <div>
                                <div className="border border-gray-300 rounded-lg p-4">
                                    {/* Selected Areas Display */}
                                    {formData.serviceAreas && formData.serviceAreas.length > 0 && (
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
                                    </div>
                                </div>
                            </div>
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
        </div>
    );
};

export default EditAgentProfileModal;