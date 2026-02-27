// // // src/Pages/Admin/components/modals/ViewDetailsModal.jsx
// // import React from 'react';

// // const ViewDetailsModal = ({ item, type, onClose, formatDate, formatCurrency, getStatusColor, BASE_URL }) => {
// //     const getTitle = () => {
// //         switch(type) {
// //             case 'agents': return 'Agent Details';
// //             case 'customers': return 'Customer Details';
// //             case 'admins': return 'Admin Details';
// //             default: return 'Details';
// //         }
// //     };

// //     const renderAgentDetails = () => (
// //         <div className="space-y-4">
// //             <div className="flex items-center mb-4">
// //                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
// //                     <span className="text-teal-600 font-bold text-2xl">
// //                         {item.companyName?.charAt(0)}
// //                     </span>
// //                 </div>
// //                 <div className="ml-4">
// //                     <h3 className="text-xl font-bold text-gray-800">{item.companyName}</h3>
// //                     <p className="text-sm text-gray-500">Agent ID: #AG{String(item.id).padStart(4, '0')}</p>
// //                 </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4">
// //                 <DetailField label="Email" value={item.email} />
// //                 <DetailField label="Contact Number" value={item.contactNumber} />
// //                 <DetailField label="Registration Number" value={item.registrationNumber || 'N/A'} />
// //                 <DetailField label="Status" value={item.status || 'ACTIVE'} badge={getStatusColor(item.status || 'ACTIVE')} />
// //                 <DetailField label="Address" value={item.address || 'N/A'} />
// //                 <DetailField label="City" value={item.city || 'N/A'} />
// //                 <DetailField label="Member Since" value={formatDate(item.createdAt)} />
// //             </div>
// //         </div>
// //     );

// //     // const renderCustomerDetails = () => (
// //     //     <div className="space-y-4">
// //     //         <div className="flex items-center mb-4">
// //     //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
// //     //                 <span className="text-blue-600 font-bold text-2xl">
// //     //                     {`${item.firstName || ''} ${item.lastName || ''}`.charAt(0)}
// //     //                 </span>
// //     //             </div>
// //     //             <div className="ml-4">
// //     //                 <h3 className="text-xl font-bold text-gray-800">{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</h3>
// //     //                 <p className="text-sm text-gray-500">Customer ID: #CUS{String(item.id).padStart(4, '0')}</p>
// //     //             </div>
// //     //         </div>

// //     //         <div className="grid grid-cols-2 gap-4">
// //     //             <DetailField label="Email" value={item.email} />
// //     //             <DetailField label="Contact Number" value={item.contactNumber} />
// //     //             <DetailField label="NIC" value={item.nic || 'N/A'} />
// //     //             <DetailField label="Date of Birth" value={item.dob ? formatDate(item.dob) : 'N/A'} />
// //     //             <DetailField label="Gender" value={item.gender || 'N/A'} />
// //     //             <DetailField label="Member Since" value={formatDate(item.createdAt)} />
// //     //         </div>
// //     //     </div>
// //     // );

// //     // In ViewDetailsModal.jsx, add this case in the render function:

// // const renderCustomerDetails = () => (
// //     <div className="space-y-4">
// //         <div className="flex items-center mb-4">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
// //                 {item.customerImage ? (
// //                     <img 
// //                         src={`${BASE_URL}${item.customerImage}`} 
// //                         alt={item.firstName} 
// //                         className="w-16 h-16 rounded-full object-cover"
// //                         onError={(e) => {
// //                             e.target.onerror = null;
// //                             e.target.style.display = 'none';
// //                             e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-2xl">${item.firstName?.charAt(0)}</span>`;
// //                         }}
// //                     />
// //                 ) : (
// //                     <span className="text-blue-600 font-bold text-2xl">
// //                         {item.firstName?.charAt(0)}
// //                     </span>
// //                 )}
// //             </div>
// //             <div className="ml-4">
// //                 <h3 className="text-xl font-bold text-gray-800">{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</h3>
// //                 <p className="text-sm text-gray-500">Customer ID: #CUS{String(item.id).padStart(4, '0')}</p>
// //             </div>
// //         </div>

// //         <div className="grid grid-cols-2 gap-4">
// //             <DetailField label="Email" value={item.email} />
// //             <DetailField label="Contact Number" value={item.contactNumber} />
// //             <DetailField label="NIC Number" value={item.nicNumber} />
// //             <DetailField label="Birthday" value={item.birthday ? formatDate(item.birthday) : 'N/A'} />
// //             <DetailField label="Gender" value={item.gender || 'N/A'} />
// //             <DetailField label="Country" value={item.country || 'N/A'} />
// //             <DetailField label="Member Since" value={formatDate(item.createdAt)} />
// //         </div>
// //     </div>
// // );

// //     const renderAdminDetails = () => (
// //         <div className="space-y-4">
// //             <div className="flex items-center mb-4">
// //                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center overflow-hidden">
// //                     {item.adminImage ? (
// //                         <img 
// //                             src={`${BASE_URL}/uploads/admins/${item.adminImage}`} 
// //                             alt={item.fullName} 
// //                             className="w-16 h-16 rounded-full object-cover"
// //                         />
// //                     ) : (
// //                         <span className="text-purple-600 font-bold text-2xl">
// //                             {item.fullName?.charAt(0)}
// //                         </span>
// //                     )}
// //                 </div>
// //                 <div className="ml-4">
// //                     <h3 className="text-xl font-bold text-gray-800">{item.fullName}</h3>
// //                     <p className="text-sm text-gray-500">Admin ID: #AD{String(item.id).padStart(4, '0')}</p>
// //                 </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4">
// //                 <DetailField label="Username" value={item.userName} />
// //                 <DetailField label="Email" value={item.email} />
// //                 <DetailField label="Contact Number" value={item.contactNo} />
// //                 <DetailField label="Gender" value={item.gender || 'N/A'} />
// //                 <DetailField label="Role" value={item.role} badge={item.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-teal-100 text-teal-800'} />
// //                 <DetailField label="Member Since" value={formatDate(item.createdAt)} />
// //             </div>
// //         </div>
// //     );

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">{getTitle()}</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {type === 'agents' && renderAgentDetails()}
// //                     {type === 'customers' && renderCustomerDetails()}
// //                     {type === 'admins' && renderAdminDetails()}

// //                     <div className="mt-6 flex justify-end">
// //                         <button
// //                             onClick={onClose}
// //                             className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // const DetailField = ({ label, value, badge }) => (
// //     <div>
// //         <p className="text-xs text-gray-500 mb-1">{label}</p>
// //         {badge ? (
// //             <span className={`inline-block px-2 py-1 text-xs rounded-full ${badge}`}>
// //                 {value}
// //             </span>
// //         ) : (
// //             <p className="text-sm font-medium text-gray-800">{value}</p>
// //         )}
// //     </div>
// // );

// // export default ViewDetailsModal;



// // src/Pages/Admin/components/modals/ViewDetailsModal.jsx
// import React from 'react';

// const ViewDetailsModal = ({ item, type, onClose, formatDate, formatCurrency, getStatusColor, BASE_URL }) => {
    
//     // Helper function to get the correct image URL
//     const getImageUrl = (imagePath) => {
//         if (!imagePath) return null;
        
//         // If it's already a full URL
//         if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
//             return imagePath;
//         }
        
//         // Clean the path - remove any quotes or extra spaces
//         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
//         // Handle Windows paths (with backslashes)
//         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
//             // Extract just the filename from the full path
//             const filename = cleanPath.split('\\').pop().split('/').pop();
//             return `${BASE_URL}/uploads/customers/${filename}`;
//         }
        
//         // If it starts with /uploads
//         if (cleanPath.startsWith('/uploads')) {
//             return `${BASE_URL}${cleanPath}`;
//         }
        
//         // If it already has 'uploads' in the path
//         if (cleanPath.includes('uploads/')) {
//             const uploadsIndex = cleanPath.indexOf('uploads/');
//             const relativePath = cleanPath.substring(uploadsIndex);
//             return `${BASE_URL}/${relativePath}`;
//         }
        
//         // Default case - assume it's just a filename
//         return `${BASE_URL}/uploads/customers/${cleanPath}`;
//     };

//     const getTitle = () => {
//         switch(type) {
//             case 'agents': return 'Agent Details';
//             case 'customers': return 'Customer Details';
//             case 'admins': return 'Admin Details';
//             default: return 'Details';
//         }
//     };

//     const renderCustomerDetails = () => {
//         const imageUrl = getImageUrl(item.customerImage);
        
//         return (
//             <div className="space-y-4">
//                 <div className="flex items-center mb-4">
//                     <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-200">
//                         {imageUrl ? (
//                             <img 
//                                 src={imageUrl} 
//                                 alt={`${item.firstName} ${item.lastName}`} 
//                                 className="w-full h-full object-cover"
//                                 onError={(e) => {
//                                     console.error('Image failed to load:', imageUrl);
//                                     e.target.onerror = null;
//                                     e.target.style.display = 'none';
//                                     e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-3xl">${item.firstName?.charAt(0)}${item.lastName?.charAt(0)}</span>`;
//                                 }}
//                             />
//                         ) : (
//                             <span className="text-blue-600 font-bold text-3xl">
//                                 {item.firstName?.charAt(0)}{item.lastName?.charAt(0)}
//                             </span>
//                         )}
//                     </div>
//                     <div className="ml-4">
//                         <h3 className="text-xl font-bold text-gray-800">{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</h3>
//                         <p className="text-sm text-gray-500">Customer ID: #CUS{String(item.id).padStart(4, '0')}</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
//                     <DetailField label="Email" value={item.email} />
//                     <DetailField label="Contact Number" value={item.contactNumber} />
//                     <DetailField label="NIC Number" value={item.nicNumber} />
//                     <DetailField label="Birthday" value={item.birthday ? formatDate(item.birthday) : 'N/A'} />
//                     <DetailField label="Gender" value={item.gender || 'N/A'} />
//                     <DetailField label="Country" value={item.country || 'Sri Lanka'} />
//                     {/* <DetailField label="Member Since" value={item.createdAt ? formatDate(item.createdAt) : 'N/A'} /> */}
//                 </div>
//             </div>
//         );
//     };

// const renderAgentDetails = () => (
//     <div className="space-y-4">
//         <div className="flex items-center mb-4">
//             <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
//                 <span className="text-teal-600 font-bold text-2xl">
//                     {item.companyName?.charAt(0)}
//                 </span>
//             </div>
//             <div className="ml-4">
//                 <h3 className="text-xl font-bold text-gray-800">{item.companyName}</h3>
//                 <p className="text-sm text-gray-500">Agent ID: #AG{String(item.id).padStart(4, '0')}</p>
//                 {item.tagline && <p className="text-xs text-teal-600 mt-1">"{item.tagline}"</p>}
//             </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
//             <DetailField label="Username" value={item.userName} />
//             <DetailField label="Email" value={item.email} />
//             <DetailField label="Contact Number" value={item.contactNo || 'N/A'} />
//             <DetailField label="Business Reg No" value={item.businessRegNo || 'N/A'} />
//             <DetailField label="Operating Since" value={item.operatingSince || 'N/A'} />
//             <DetailField label="Tourism Approved" value={item.tourismApproved || 'N/A'} />
//             <DetailField label="Insurance Type" value={item.insuranceType || 'N/A'} />
//         </div>
        
//         {/* Service Areas - Full width at bottom */}
//         <div className="bg-gray-50 p-4 rounded-lg">
//             <p className="text-xs text-gray-500 mb-2">Service Areas</p>
//             <div className="flex flex-wrap gap-2">
//                 {item.serviceAreas ? (
//                     item.serviceAreas.split(', ').map((area, index) => (
//                         <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
//                             {area}
//                         </span>
//                     ))
//                 ) : (
//                     <p className="text-sm text-gray-500">No service areas specified</p>
//                 )}
//             </div>
//         </div>
//     </div>
// );

//     const renderAdminDetails = () => {
//         const imageUrl = item.adminImage ? getImageUrl(item.adminImage) : null;
        
//         return (
//             <div className="space-y-4">
//                 <div className="flex items-center mb-4">
//                     <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-purple-200">
//                         {imageUrl ? (
//                             <img 
//                                 src={`${BASE_URL}/uploads/admins/${item.adminImage}`} 
//                                 alt={item.fullName} 
//                                 className="w-full h-full object-cover"
//                                 onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.style.display = 'none';
//                                     e.target.parentElement.innerHTML = `<span class="text-purple-600 font-bold text-3xl">${item.fullName?.charAt(0)}</span>`;
//                                 }}
//                             />
//                         ) : (
//                             <span className="text-purple-600 font-bold text-3xl">
//                                 {item.fullName?.charAt(0)}
//                             </span>
//                         )}
//                     </div>
//                     <div className="ml-4">
//                         <h3 className="text-xl font-bold text-gray-800">{item.fullName}</h3>
//                         <p className="text-sm text-gray-500">Admin ID: #AD{String(item.id).padStart(4, '0')}</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
//                     <DetailField label="Username" value={item.userName} />
//                     <DetailField label="Email" value={item.email} />
//                     <DetailField label="Contact Number" value={item.contactNo} />
//                     <DetailField label="Gender" value={item.gender || 'N/A'} />
//                     <DetailField label="Role" value={item.role} badge={item.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-teal-100 text-teal-800'} />
//                     <DetailField label="Member Since" value={item.createdAt ? formatDate(item.createdAt) : 'N/A'} />
//                 </div>
//             </div>
//         );
//     };

//     const DetailField = ({ label, value, badge }) => (
//         <div className="border-b border-gray-200 pb-2 last:border-0">
//             <p className="text-xs text-gray-500 mb-1">{label}</p>
//             {badge ? (
//                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${badge}`}>
//                     {value}
//                 </span>
//             ) : (
//                 <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
//             )}
//         </div>
//     );

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">{getTitle()}</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {type === 'customers' && renderCustomerDetails()}
//                     {type === 'agents' && renderAgentDetails()}
//                     {type === 'admins' && renderAdminDetails()}

//                     <div className="mt-6 flex justify-end">
//                         <button
//                             onClick={onClose}
//                             className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewDetailsModal;



// src/Pages/Admin/components/modals/ViewDetailsModal.jsx
import React from 'react';

const ViewDetailsModal = ({ item, type, onClose, formatDate, BASE_URL }) => {
    
    // Helper function to get the correct image URL for any type
    const getImageUrl = (imagePath, userType) => {
        if (!imagePath) return null;
        
        // If it's already a full URL
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        
        // Clean the path - remove any quotes or extra spaces
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        // Determine upload folder based on user type
        let uploadFolder = 'uploads';
        if (userType === 'customers') uploadFolder = 'uploads/customers';
        else if (userType === 'agents') uploadFolder = 'uploads/agents';
        else if (userType === 'admins') uploadFolder = 'uploads/admins';
        
        // Handle Windows paths (with backslashes)
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            // Extract just the filename from the full path
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/${uploadFolder}/${filename}`;
        }
        
        // If it starts with /uploads
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        // If it already has 'uploads' in the path
        if (cleanPath.includes('uploads/')) {
            const uploadsIndex = cleanPath.indexOf('uploads/');
            const relativePath = cleanPath.substring(uploadsIndex);
            return `${BASE_URL}/${relativePath}`;
        }
        
        // Default case - assume it's just a filename
        return `${BASE_URL}/${uploadFolder}/${cleanPath}`;
    };

    const getTitle = () => {
        switch(type) {
            case 'agents': return 'Agent Details';
            case 'customers': return 'Customer Details';
            case 'admins': return 'Admin Details';
            default: return 'Details';
        }
    };

    const renderCustomerDetails = () => {
        const imageUrl = getImageUrl(item.customerImage, 'customers');
        
        return (
            <div className="space-y-4">
                <div className="flex items-center mb-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-200">
                        {imageUrl ? (
                            <img 
                                src={imageUrl} 
                                alt={`${item.firstName} ${item.lastName}`} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    console.error('Image failed to load:', imageUrl);
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-3xl">${item.firstName?.charAt(0)}${item.lastName?.charAt(0)}</span>`;
                                }}
                            />
                        ) : (
                            <span className="text-blue-600 font-bold text-3xl">
                                {item.firstName?.charAt(0)}{item.lastName?.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800">{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</h3>
                        <p className="text-sm text-gray-500">Customer ID: #CUS{String(item.id).padStart(4, '0')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <DetailField label="Email" value={item.email} />
                    <DetailField label="Contact Number" value={item.contactNumber} />
                    <DetailField label="NIC Number" value={item.nicNumber} />
                    <DetailField label="Birthday" value={item.birthday ? formatDate(item.birthday) : 'N/A'} />
                    <DetailField label="Gender" value={item.gender || 'N/A'} />
                    <DetailField label="Country" value={item.country || 'Sri Lanka'} />
                </div>
            </div>
        );
    };

    const renderAgentDetails = () => (
        <div className="space-y-4">
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-teal-200">
                    <span className="text-teal-600 font-bold text-2xl">
                        {item.companyName?.charAt(0)}
                    </span>
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.companyName}</h3>
                    <p className="text-sm text-gray-500">Agent ID: #AG{String(item.id).padStart(4, '0')}</p>
                    {item.tagline && <p className="text-xs text-teal-600 mt-1">"{item.tagline}"</p>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <DetailField label="Username" value={item.userName} />
                <DetailField label="Email" value={item.email} />
                <DetailField label="Contact Number" value={item.contactNo || 'N/A'} />
                <DetailField label="Business Reg No" value={item.businessRegNo || 'N/A'} />
                <DetailField label="Operating Since" value={item.operatingSince || 'N/A'} />
                <DetailField label="Tourism Approved" value={item.tourismApproved || 'N/A'} />
                <DetailField label="Insurance Type" value={item.insuranceType || 'N/A'} />
            </div>
            
            {/* Service Areas - Full width at bottom */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500 mb-2">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                    {item.serviceAreas ? (
                        item.serviceAreas.split(', ').map((area, index) => (
                            <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                {area}
                            </span>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No service areas specified</p>
                    )}
                </div>
            </div>
        </div>
    );

    const renderAdminDetails = () => {
        // Use the enhanced getImageUrl with proper type
        const imageUrl = getImageUrl(item.adminImage, 'admins');
        
        return (
            <div className="space-y-4">
                <div className="flex items-center mb-4">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-purple-200">
                        {imageUrl ? (
                            <img 
                                src={imageUrl} 
                                alt={item.fullName} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    console.error('Admin image failed to load:', imageUrl);
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<span class="text-purple-600 font-bold text-3xl">${item.fullName?.charAt(0)}</span>`;
                                }}
                            />
                        ) : (
                            <span className="text-purple-600 font-bold text-3xl">
                                {item.fullName?.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800">{item.fullName}</h3>
                        <p className="text-sm text-gray-500">Admin ID: #AD{String(item.id).padStart(4, '0')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <DetailField label="Username" value={item.userName} />
                    <DetailField label="Email" value={item.email} />
                    <DetailField label="Contact Number" value={item.contactNo} />
                    <DetailField label="Gender" value={item.gender || 'N/A'} />
                    <DetailField 
                        label="Role" 
                        value={item.role} 
                        badge={item.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-teal-100 text-teal-800'} 
                    />
                    <DetailField label="Member Since" value={item.createdAt ? formatDate(item.createdAt) : 'N/A'} />
                </div>
            </div>
        );
    };

    const DetailField = ({ label, value, badge }) => (
        <div className="border-b border-gray-200 pb-2 last:border-0">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            {badge ? (
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${badge}`}>
                    {value}
                </span>
            ) : (
                <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
            )}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">{getTitle()}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {type === 'customers' && renderCustomerDetails()}
                    {type === 'agents' && renderAgentDetails()}
                    {type === 'admins' && renderAdminDetails()}

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsModal;