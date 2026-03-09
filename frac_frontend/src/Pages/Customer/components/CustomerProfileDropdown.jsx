// // // // src/Pages/Customer/components/CustomerProfileDropdown.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import EditProfileModal from './EditProfileModal';

// // // const CustomerProfileDropdown = () => {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [showEditModal, setShowEditModal] = useState(false);
// // //     const [customerData, setCustomerData] = useState(null);
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const navigate = useNavigate();
    
// // //     const BASE_URL = 'http://localhost:8080';

// // //     const fetchCustomerDetails = async () => {
// // //         setIsLoading(true);
// // //         try {
// // //             const token = localStorage.getItem('customerToken');
// // //             const customerId = localStorage.getItem('customerId');
            
// // //             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
// // //                 headers: { 'Authorization': `Bearer ${token}` }
// // //             });

// // //             if (response.status === 200) {
// // //                 setCustomerData(response.data);
// // //             }
// // //         } catch (err) {
// // //             console.error('Error fetching customer details:', err);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchCustomerDetails();
// // //     }, []);

// // //     const handleLogout = () => {
// // //         localStorage.removeItem('customerToken');
// // //         localStorage.removeItem('customerId');
// // //         localStorage.removeItem('customerName');
// // //         localStorage.removeItem('customerEmail');
// // //         localStorage.removeItem('customerData');
// // //         navigate('/customer/login');
// // //     };

// // //     const handleProfileClick = () => {
// // //         setIsOpen(!isOpen);
// // //     };

// // //     const handleEditClick = () => {
// // //         setShowEditModal(true);
// // //         setIsOpen(false);
// // //     };

// // //     const handleProfileUpdate = (updatedData) => {
// // //         setCustomerData(updatedData);
// // //         localStorage.setItem('customerName', `${updatedData.firstName} ${updatedData.lastName}`);
// // //     };

// // //     const getImageUrl = (imagePath) => {
// // //         if (!imagePath) return null;
        
// // //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// // //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// // //             const filename = cleanPath.split('\\').pop().split('/').pop();
// // //             return `${BASE_URL}/uploads/customers/${filename}`;
// // //         }
        
// // //         if (cleanPath.startsWith('/uploads')) {
// // //             return `${BASE_URL}${cleanPath}`;
// // //         }
        
// // //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// // //     };

// // //     const customerName = localStorage.getItem('customerName') || 'Customer';
// // //     const imageUrl = customerData?.customerImage ? getImageUrl(customerData.customerImage) : null;

// // //     return (
// // //         <>
// // //             <div className="relative">
// // //                 {/* Profile Button with Image and Name */}
// // //                 <button
// // //                     onClick={handleProfileClick}
// // //                     className="flex items-center gap-3 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20"
// // //                 >
// // //                     <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">
// // //                         {imageUrl ? (
// // //                             <img 
// // //                                 src={imageUrl} 
// // //                                 alt={customerName}
// // //                                 className="w-full h-full object-cover"
// // //                                 onError={(e) => {
// // //                                     e.target.onerror = null;
// // //                                     e.target.style.display = 'none';
// // //                                     e.target.parentElement.innerHTML = customerName.charAt(0);
// // //                                 }}
// // //                             />
// // //                         ) : (
// // //                             <span className="text-lg">{customerName.charAt(0)}</span>
// // //                         )}
// // //                     </div>
// // //                     <span className="text-white font-medium hidden md:block">{customerName}</span>
// // //                     <svg className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                     </svg>
// // //                 </button>

// // //                 {/* Dropdown Menu */}
// // //                 {isOpen && (
// // //                     <>
// // //                         {/* Backdrop to close dropdown when clicking outside */}
// // //                         <div 
// // //                             className="fixed inset-0 z-40"
// // //                             onClick={() => setIsOpen(false)}
// // //                         ></div>
                        
// // //                         <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
// // //                             {/* Profile Header */}
// // //                             <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-5 text-white">
// // //                                 <div className="flex items-center gap-4">
// // //                                     <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 border-2 border-white flex items-center justify-center text-2xl font-bold">
// // //                                         {imageUrl ? (
// // //                                             <img 
// // //                                                 src={imageUrl} 
// // //                                                 alt={customerName}
// // //                                                 className="w-full h-full object-cover"
// // //                                             />
// // //                                         ) : (
// // //                                             customerName.charAt(0)
// // //                                         )}
// // //                                     </div>
// // //                                     <div>
// // //                                         <h3 className="font-bold text-lg">{customerData?.firstName} {customerData?.lastName}</h3>
// // //                                         <p className="text-sm text-teal-100">{customerData?.email}</p>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Profile Details */}
// // //                             <div className="p-5 border-b border-gray-100">
// // //                                 <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Profile Information</h4>
// // //                                 <div className="space-y-3">
// // //                                     <div className="flex items-center gap-3 text-sm">
// // //                                         <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // //                                         </svg>
// // //                                         <div>
// // //                                             <p className="text-gray-500">Contact Number</p>
// // //                                             <p className="font-medium text-gray-800">{customerData?.contactNumber || 'Not provided'}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center gap-3 text-sm">
// // //                                         <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
// // //                                         </svg>
// // //                                         <div>
// // //                                             <p className="text-gray-500">NIC Number</p>
// // //                                             <p className="font-medium text-gray-800">{customerData?.nicNumber || 'Not provided'}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center gap-3 text-sm">
// // //                                         <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                                         </svg>
// // //                                         <div>
// // //                                             <p className="text-gray-500">Country</p>
// // //                                             <p className="font-medium text-gray-800">{customerData?.country || 'Sri Lanka'}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center gap-3 text-sm">
// // //                                         <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                         </svg>
// // //                                         <div>
// // //                                             <p className="text-gray-500">Member Since</p>
// // //                                             <p className="font-medium text-gray-800">
// // //                                                 {customerData?.createdAt ? new Date(customerData.createdAt).toLocaleDateString('en-US', {
// // //                                                     year: 'numeric',
// // //                                                     month: 'long',
// // //                                                     day: 'numeric'
// // //                                                 }) : 'N/A'}
// // //                                             </p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Action Buttons */}
// // //                             <div className="p-4 bg-gray-50">
// // //                                 <button
// // //                                     onClick={handleEditClick}
// // //                                     className="w-full mb-2 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium flex items-center justify-center gap-2"
// // //                                 >
// // //                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // //                                     </svg>
// // //                                     Edit Profile
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={handleLogout}
// // //                                     className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium flex items-center justify-center gap-2"
// // //                                 >
// // //                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
// // //                                     </svg>
// // //                                     Logout
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </>
// // //                 )}
// // //             </div>

// // //             {/* Edit Profile Modal */}
// // //             {showEditModal && customerData && (
// // //                 <EditProfileModal
// // //                     customer={customerData}
// // //                     onClose={() => setShowEditModal(false)}
// // //                     onUpdate={handleProfileUpdate}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}
// // //         </>
// // //     );
// // // };

// // // export default CustomerProfileDropdown;




// // // src/Pages/Customer/components/CustomerProfileDropdown.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import EditProfileModal from './EditProfileModal';

// // const CustomerProfileDropdown = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [showEditModal, setShowEditModal] = useState(false);
// //     const [customerData, setCustomerData] = useState(null);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const navigate = useNavigate();
    
// //     const BASE_URL = 'http://localhost:8080';

// //     const fetchCustomerDetails = async () => {
// //         setIsLoading(true);
// //         try {
// //             const token = localStorage.getItem('customerToken');
// //             const customerId = localStorage.getItem('customerId');
            
// //             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
// //                 headers: { 'Authorization': `Bearer ${token}` }
// //             });

// //             if (response.status === 200) {
// //                 setCustomerData(response.data);
// //                 // Update localStorage with latest data
// //                 localStorage.setItem('customerName', `${response.data.firstName || ''} ${response.data.lastName || ''}`.trim());
// //                 localStorage.setItem('customerEmail', response.data.email || '');
// //                 localStorage.setItem('customerData', JSON.stringify(response.data));
// //             }
// //         } catch (err) {
// //             console.error('Error fetching customer details:', err);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchCustomerDetails();
        
// //         // Refresh data when modal closes (in case of updates)
// //         const handleRefresh = () => {
// //             fetchCustomerDetails();
// //         };
        
// //         window.addEventListener('focus', handleRefresh);
// //         return () => window.removeEventListener('focus', handleRefresh);
// //     }, []);

// //     const handleLogout = () => {
// //         localStorage.removeItem('customerToken');
// //         localStorage.removeItem('customerId');
// //         localStorage.removeItem('customerName');
// //         localStorage.removeItem('customerEmail');
// //         localStorage.removeItem('customerData');
// //         navigate('/customer/login');
// //     };

// //     const handleProfileClick = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     const handleEditClick = () => {
// //         setShowEditModal(true);
// //         setIsOpen(false);
// //     };

// //     const handleProfileUpdate = (updatedData) => {
// //         setCustomerData(updatedData);
// //         localStorage.setItem('customerName', `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim());
// //         localStorage.setItem('customerEmail', updatedData.email || '');
// //         localStorage.setItem('customerData', JSON.stringify(updatedData));
        
// //         // Refresh the data
// //         fetchCustomerDetails();
// //     };

// //     const getImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
        
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// //             const filename = cleanPath.split('\\').pop().split('/').pop();
// //             return `${BASE_URL}/uploads/customers/${filename}`;
// //         }
        
// //         if (cleanPath.startsWith('/uploads')) {
// //             return `${BASE_URL}${cleanPath}`;
// //         }
        
// //         return `${BASE_URL}/uploads/customers/${cleanPath}`;
// //     };

// //     // Get customer name from data or localStorage
// //     const getCustomerName = () => {
// //         if (customerData?.firstName) {
// //             return `${customerData.firstName} ${customerData.lastName || ''}`.trim();
// //         }
// //         return localStorage.getItem('customerName') || 'Customer';
// //     };

// //     const getInitials = () => {
// //         if (customerData?.firstName) {
// //             return customerData.firstName.charAt(0).toUpperCase();
// //         }
// //         const name = localStorage.getItem('customerName') || 'C';
// //         return name.charAt(0).toUpperCase();
// //     };

// //     const customerName = getCustomerName();
// //     const initials = getInitials();
// //     const imageUrl = customerData?.customerImage ? getImageUrl(customerData.customerImage) : null;

// //     return (
// //         <>
// //             <div className="relative">
// //                 {/* Profile Button with Image and Name */}
// //                 <button
// //                     onClick={handleProfileClick}
// //                     className="flex items-center gap-3 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20"
// //                 >
// //                     <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
// //                         {imageUrl ? (
// //                             <img 
// //                                 src={imageUrl} 
// //                                 alt={customerName}
// //                                 className="w-full h-full object-cover"
// //                                 onError={(e) => {
// //                                     e.target.onerror = null;
// //                                     e.target.style.display = 'none';
// //                                     e.target.parentElement.innerHTML = initials;
// //                                 }}
// //                             />
// //                         ) : (
// //                             <span>{initials}</span>
// //                         )}
// //                     </div>
// //                     <span className="text-white font-medium hidden md:block max-w-[120px] truncate">
// //                         {customerData?.firstName || customerName.split(' ')[0]}
// //                     </span>
// //                     <svg className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                     </svg>
// //                 </button>

// //                 {/* Dropdown Menu */}
// //                 {isOpen && (
// //                     <>
// //                         {/* Backdrop to close dropdown when clicking outside */}
// //                         <div 
// //                             className="fixed inset-0 z-40"
// //                             onClick={() => setIsOpen(false)}
// //                         ></div>
                        
// //                         <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
// //                             {/* Profile Header */}
// //                             <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
// //                                 <div className="flex items-center gap-4">
// //                                     <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 border-3 border-white shadow-lg flex items-center justify-center text-3xl font-bold">
// //                                         {imageUrl ? (
// //                                             <img 
// //                                                 src={imageUrl} 
// //                                                 alt={customerName}
// //                                                 className="w-full h-full object-cover"
// //                                             />
// //                                         ) : (
// //                                             customerData?.firstName?.charAt(0) || initials
// //                                         )}
// //                                     </div>
// //                                     <div className="flex-1">
// //                                         <h3 className="font-bold text-xl">{customerData?.firstName} {customerData?.lastName}</h3>
// //                                         <p className="text-sm text-teal-100 break-all">{customerData?.email}</p>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Profile Details */}
// //                             <div className="p-6 border-b border-gray-100">
// //                                 <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Profile Information</h4>
// //                                 <div className="space-y-4">
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //                                             </svg>
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <p className="text-xs text-gray-500">Contact Number</p>
// //                                             <p className="font-medium text-gray-800">{customerData?.contactNumber || 'Not provided'}</p>
// //                                         </div>
// //                                     </div>
                                    
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
// //                                             </svg>
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <p className="text-xs text-gray-500">NIC Number</p>
// //                                             <p className="font-medium text-gray-800">{customerData?.nicNumber || 'Not provided'}</p>
// //                                         </div>
// //                                     </div>
                                    
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <p className="text-xs text-gray-500">Country</p>
// //                                             <p className="font-medium text-gray-800">{customerData?.country || 'Sri Lanka'}</p>
// //                                         </div>
// //                                     </div>
                                    
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <p className="text-xs text-gray-500">Gender</p>
// //                                             <p className="font-medium text-gray-800">
// //                                                 {customerData?.gender ? 
// //                                                     customerData.gender.charAt(0) + customerData.gender.slice(1).toLowerCase() 
// //                                                     : 'Not specified'}
// //                                             </p>
// //                                         </div>
// //                                     </div>
                                    
// //                                     <div className="flex items-start gap-3">
// //                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <p className="text-xs text-gray-500">Member Since</p>
// //                                             <p className="font-medium text-gray-800">
// //                                                 {customerData?.createdAt ? new Date(customerData.createdAt).toLocaleDateString('en-US', {
// //                                                     year: 'numeric',
// //                                                     month: 'long',
// //                                                     day: 'numeric'
// //                                                 }) : 'N/A'}
// //                                             </p>
// //                                         </div>
// //                                     </div>
                                    
// //                                     {customerData?.birthday && (
// //                                         <div className="flex items-start gap-3">
// //                                             <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                                                 <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
// //                                                 </svg>
// //                                             </div>
// //                                             <div className="flex-1">
// //                                                 <p className="text-xs text-gray-500">Birthday</p>
// //                                                 <p className="font-medium text-gray-800">
// //                                                     {new Date(customerData.birthday).toLocaleDateString('en-US', {
// //                                                         year: 'numeric',
// //                                                         month: 'long',
// //                                                         day: 'numeric'
// //                                                     })}
// //                                                 </p>
// //                                             </div>
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             </div>

// //                             {/* Action Buttons */}
// //                             <div className="p-4 bg-gray-50 flex gap-2">
// //                                 <button
// //                                     onClick={handleEditClick}
// //                                     className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium flex items-center justify-center gap-2"
// //                                 >
// //                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// //                                     </svg>
// //                                     Edit Profile
// //                                 </button>
// //                                 <button
// //                                     onClick={handleLogout}
// //                                     className="flex-1 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium flex items-center justify-center gap-2"
// //                                 >
// //                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
// //                                     </svg>
// //                                     Logout
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </>
// //                 )}
// //             </div>

// //             {/* Edit Profile Modal */}
// //             {showEditModal && customerData && (
// //                 <EditProfileModal
// //                     customer={customerData}
// //                     onClose={() => setShowEditModal(false)}
// //                     onUpdate={handleProfileUpdate}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}
// //         </>
// //     );
// // };

// // export default CustomerProfileDropdown;


// // src/Pages/Customer/components/CustomerProfileDropdown.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EditProfileModal from './EditProfileModal';

// const CustomerProfileDropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [customerData, setCustomerData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
    
//     const BASE_URL = 'http://localhost:8080';

//     const fetchCustomerDetails = async () => {
//         setIsLoading(true);
//         try {
//             const token = localStorage.getItem('customerToken');
//             const customerId = localStorage.getItem('customerId');
            
//             if (!token || !customerId) {
//                 console.error('No token or customer ID found');
//                 return;
//             }

//             console.log('Fetching customer details for ID:', customerId);
            
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             console.log('Customer data response:', response.data);

//             if (response.status === 200) {
//                 setCustomerData(response.data);
//                 // Update localStorage with latest data
//                 const fullName = `${response.data.firstName || ''} ${response.data.lastName || ''}`.trim();
//                 localStorage.setItem('customerName', fullName || 'Customer');
//                 localStorage.setItem('customerEmail', response.data.email || '');
//                 localStorage.setItem('customerData', JSON.stringify(response.data));
//             }
//         } catch (err) {
//             console.error('Error fetching customer details:', err);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Initial fetch
//     useEffect(() => {
//         fetchCustomerDetails();
//     }, []);

//     // Refresh data when component gets focus (in case of updates)
//     useEffect(() => {
//         const handleFocus = () => {
//             fetchCustomerDetails();
//         };
        
//         window.addEventListener('focus', handleFocus);
//         return () => window.removeEventListener('focus', handleFocus);
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('customerToken');
//         localStorage.removeItem('customerId');
//         localStorage.removeItem('customerName');
//         localStorage.removeItem('customerEmail');
//         localStorage.removeItem('customerData');
//         navigate('/customer/login');
//     };

//     const handleProfileClick = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleEditClick = () => {
//         setShowEditModal(true);
//         setIsOpen(false);
//     };

//     // const handleProfileUpdate = (updatedData) => {
//     //     setCustomerData(updatedData);
//     //     const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
//     //     localStorage.setItem('customerName', fullName || 'Customer');
//     //     localStorage.setItem('customerEmail', updatedData.email || '');
//     //     localStorage.setItem('customerData', JSON.stringify(updatedData));
        
//     //     // Refresh the data
//     //     fetchCustomerDetails();
//     // };

//     const handleProfileUpdate = (updatedData) => {
//     setCustomerData(updatedData);
//     const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
//     localStorage.setItem('customerName', fullName || 'Customer');
//     localStorage.setItem('customerEmail', updatedData.email || '');
//     localStorage.setItem('customerData', JSON.stringify(updatedData));
    
//     // IMPORTANT: Do NOT remove or update the token
//     // The token remains valid because the customer ID hasn't changed
    
//     // Refresh the data
//     fetchCustomerDetails();
// };

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

//     // Get customer name from data or localStorage
//     const getCustomerName = () => {
//         if (customerData?.firstName) {
//             return `${customerData.firstName} ${customerData.lastName || ''}`.trim();
//         }
//         return localStorage.getItem('customerName') || 'Customer';
//     };

//     const getInitials = () => {
//         if (customerData?.firstName) {
//             return customerData.firstName.charAt(0).toUpperCase();
//         }
//         const name = localStorage.getItem('customerName') || 'C';
//         return name.charAt(0).toUpperCase();
//     };

//     const getGenderDisplay = (gender) => {
//         if (!gender) return 'Not specified';
//         return gender.charAt(0) + gender.slice(1).toLowerCase();
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };

//     const customerName = getCustomerName();
//     const firstName = customerData?.firstName || customerName.split(' ')[0];
//     const initials = getInitials();
//     const imageUrl = customerData?.customerImage ? getImageUrl(customerData.customerImage) : null;

//     return (
//         <>
//             <div className="relative">
//                 {/* Profile Button with Image and Name */}
//                 <button
//                     onClick={handleProfileClick}
//                     className="flex items-center gap-3 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20"
//                 >
//                     <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
//                         {imageUrl ? (
//                             <img 
//                                 src={imageUrl} 
//                                 alt={customerName}
//                                 className="w-full h-full object-cover"
//                                 onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.style.display = 'none';
//                                     e.target.parentElement.innerHTML = initials;
//                                 }}
//                             />
//                         ) : (
//                             <span>{initials}</span>
//                         )}
//                     </div>
//                     <span className="text-white font-medium hidden md:block max-w-[120px] truncate">
//                         {firstName}
//                     </span>
//                     <svg className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isOpen && (
//                     <>
//                         {/* Backdrop to close dropdown when clicking outside */}
//                         <div 
//                             className="fixed inset-0 z-40"
//                             onClick={() => setIsOpen(false)}
//                         ></div>
                        
//                         <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
//                             {/* Profile Header */}
//                             <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 border-3 border-white shadow-lg flex items-center justify-center text-3xl font-bold flex-shrink-0">
//                                         {imageUrl ? (
//                                             <img 
//                                                 src={imageUrl} 
//                                                 alt={customerName}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         ) : (
//                                             <span>{initials}</span>
//                                         )}
//                                     </div>
//                                     <div className="flex-1 min-w-0">
//                                         <h3 className="font-bold text-xl truncate">{customerData?.firstName} {customerData?.lastName}</h3>
//                                         <p className="text-sm text-teal-100 truncate">{customerData?.email}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Profile Details */}
//                             <div className="p-6 border-b border-gray-100 max-h-96 overflow-y-auto">
//                                 <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Profile Information</h4>
//                                 <div className="space-y-4">
//                                     {/* Contact Number */}
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="text-xs text-gray-500">Contact Number</p>
//                                             <p className="font-medium text-gray-800 break-all">{customerData?.contactNumber || 'Not provided'}</p>
//                                         </div>
//                                     </div>
                                    
//                                     {/* NIC Number */}
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="text-xs text-gray-500">NIC Number</p>
//                                             <p className="font-medium text-gray-800 break-all">{customerData?.nicNumber || 'Not provided'}</p>
//                                         </div>
//                                     </div>
                                    
//                                     {/* Country */}
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="text-xs text-gray-500">Country</p>
//                                             <p className="font-medium text-gray-800">{customerData?.country || 'Sri Lanka'}</p>
//                                         </div>
//                                     </div>
                                    
//                                     {/* Gender */}
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="text-xs text-gray-500">Gender</p>
//                                             <p className="font-medium text-gray-800">{getGenderDisplay(customerData?.gender)}</p>
//                                         </div>
//                                     </div>
                                    
//                                     {/* Birthday */}
//                                     {customerData?.birthday && (
//                                         <div className="flex items-start gap-3">
//                                             <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                                 <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
//                                                 </svg>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <p className="text-xs text-gray-500">Birthday</p>
//                                                 <p className="font-medium text-gray-800">{formatDate(customerData.birthday)}</p>
//                                             </div>
//                                         </div>
//                                     )}
                                    
//                                     {/* Member Since */}
//                                     <div className="flex items-start gap-3">
//                                         <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                             <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <div className="flex-1">
//                                             <p className="text-xs text-gray-500">Member Since</p>
//                                             <p className="font-medium text-gray-800">{formatDate(customerData?.createdAt)}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="p-4 bg-gray-50 flex gap-2">
//                                 <button
//                                     onClick={handleEditClick}
//                                     className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium flex items-center justify-center gap-2"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                     </svg>
//                                     Edit Profile
//                                 </button>
//                                 <button
//                                     onClick={handleLogout}
//                                     className="flex-1 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium flex items-center justify-center gap-2"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                                     </svg>
//                                     Logout
//                                 </button>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Edit Profile Modal */}
//             {showEditModal && customerData && (
//                 <EditProfileModal
//                     customer={customerData}
//                     onClose={() => setShowEditModal(false)}
//                     onUpdate={handleProfileUpdate}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//         </>
//     );
// };

// export default CustomerProfileDropdown;



// src/Pages/Customer/components/CustomerProfileDropdown.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditProfileModal from './EditProfileModal';

const CustomerProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [customerData, setCustomerData] = useState(null);
    const navigate = useNavigate();
    
    const BASE_URL = 'http://localhost:8080';

    const fetchCustomerDetails = async () => {
        try {
            const token = localStorage.getItem('customerToken');
            const customerId = localStorage.getItem('customerId');
            
            if (!token || !customerId) {
                console.error('No token or customer ID found');
                return;
            }

            const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 200) {
                setCustomerData(response.data);
                const fullName = `${response.data.firstName || ''} ${response.data.lastName || ''}`.trim();
                localStorage.setItem('customerName', fullName || 'Customer');
                localStorage.setItem('customerEmail', response.data.email || '');
                localStorage.setItem('customerData', JSON.stringify(response.data));
            }
        } catch (err) {
            console.error('Error fetching customer details:', err);
        }
    };

    useEffect(() => {
        const loadCustomerDetails = async () => {
            await fetchCustomerDetails();
        };
        loadCustomerDetails();
    }, []);

    useEffect(() => {
        const handleFocus = () => {
            fetchCustomerDetails();
        };
        
        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('customerToken');
        localStorage.removeItem('customerId');
        localStorage.removeItem('customerName');
        localStorage.removeItem('customerEmail');
        localStorage.removeItem('customerData');
        navigate('/customer/login');
    };

    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
        setIsOpen(false);
    };

    const handleProfileUpdate = (updatedData) => {
        setCustomerData(updatedData);
        const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
        localStorage.setItem('customerName', fullName || 'Customer');
        localStorage.setItem('customerEmail', updatedData.email || '');
        localStorage.setItem('customerData', JSON.stringify(updatedData));
        
        // Refresh the data
        fetchCustomerDetails();
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

    const getCustomerName = () => {
        if (customerData?.firstName) {
            return `${customerData.firstName} ${customerData.lastName || ''}`.trim();
        }
        return localStorage.getItem('customerName') || 'Customer';
    };

    const getInitials = () => {
        if (customerData?.firstName) {
            return customerData.firstName.charAt(0).toUpperCase();
        }
        const name = localStorage.getItem('customerName') || 'C';
        return name.charAt(0).toUpperCase();
    };

    const getGenderDisplay = (gender) => {
        if (!gender) return 'Not specified';
        return gender.charAt(0) + gender.slice(1).toLowerCase();
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const customerName = getCustomerName();
    const firstName = customerData?.firstName || customerName.split(' ')[0];
    const initials = getInitials();
    const imageUrl = customerData?.customerImage ? getImageUrl(customerData.customerImage) : null;

    return (
        <>
            <div className="relative">
                {/* Profile Button with Image and Name */}
                <button
                    onClick={handleProfileClick}
                    className="flex items-center gap-3 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20"
                >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                        {imageUrl ? (
                            <img 
                                src={imageUrl} 
                                alt={customerName}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = initials;
                                }}
                            />
                        ) : (
                            <span>{initials}</span>
                        )}
                    </div>
                    <span className="text-white font-medium hidden md:block max-w-[120px] truncate">
                        {firstName}
                    </span>
                    <svg className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <>
                        {/* Backdrop to close dropdown when clicking outside */}
                        <div 
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                        
                        <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                            {/* Profile Header */}
                            <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 border-3 border-white shadow-lg flex items-center justify-center text-3xl font-bold flex-shrink-0">
                                        {imageUrl ? (
                                            <img 
                                                src={imageUrl} 
                                                alt={customerName}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span>{initials}</span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-xl truncate">{customerData?.firstName} {customerData?.lastName}</h3>
                                        <p className="text-sm text-teal-100 truncate">{customerData?.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="p-6 border-b border-gray-100 max-h-96 overflow-y-auto">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Profile Information</h4>
                                <div className="space-y-4">
                                    {/* Contact Number */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Contact Number</p>
                                            <p className="font-medium text-gray-800 break-all">{customerData?.contactNumber || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* NIC Number */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">NIC Number</p>
                                            <p className="font-medium text-gray-800 break-all">{customerData?.nicNumber || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Country */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Country</p>
                                            <p className="font-medium text-gray-800">{customerData?.country || 'Sri Lanka'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Gender */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Gender</p>
                                            <p className="font-medium text-gray-800">{getGenderDisplay(customerData?.gender)}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Birthday */}
                                    {customerData?.birthday && (
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">Birthday</p>
                                                <p className="font-medium text-gray-800">{formatDate(customerData.birthday)}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Member Since */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Member Since</p>
                                            <p className="font-medium text-gray-800">{formatDate(customerData?.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-4 bg-gray-50 flex gap-2">
                                <button
                                    onClick={handleEditClick}
                                    className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Profile
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Edit Profile Modal */}
            {showEditModal && customerData && (
                <EditProfileModal
                    customer={customerData}
                    onClose={() => setShowEditModal(false)}
                    onUpdate={handleProfileUpdate}
                    BASE_URL={BASE_URL}
                />
            )}
        </>
    );
};

export default CustomerProfileDropdown;