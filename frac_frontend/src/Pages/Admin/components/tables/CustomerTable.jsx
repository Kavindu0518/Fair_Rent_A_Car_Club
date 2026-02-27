// // // // // // // src/Pages/Admin/components/tables/CustomerTable.jsx
// // // // // // import React from 'react';

// // // // // // const CustomerTable = ({ data, searchTerm, onViewDetails, getStatusColor, formatDate, formatCurrency, allBookings }) => {
// // // // // //     const filteredData = data.filter(customer => 
// // // // // //         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         customer.contactNumber?.includes(searchTerm)
// // // // // //     );

// // // // // //     return (
// // // // // //         <div className="overflow-x-auto">
// // // // // //             <table className="min-w-full">
// // // // // //                 <thead>
// // // // // //                     <tr className="border-b border-gray-200">
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total Spent</th>
// // // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // // // //                     </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                     {filteredData.map(customer => {
// // // // // //                         const customerBookings = allBookings?.filter(b => b.customerId === customer.id) || [];
// // // // // //                         const totalSpent = customerBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                        
// // // // // //                         return (
// // // // // //                             <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // // // //                                 <td className="py-3 px-4 text-sm">#CUS{String(customer.id).padStart(4, '0')}</td>
// // // // // //                                 <td className="py-3 px-4 text-sm font-medium">{`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}</td>
// // // // // //                                 <td className="py-3 px-4 text-sm">{customer.email}</td>
// // // // // //                                 <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
// // // // // //                                 <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(totalSpent)}</td>
// // // // // //                                 <td className="py-3 px-4">
// // // // // //                                     <button
// // // // // //                                         onClick={() => onViewDetails(customer)}
// // // // // //                                         className="text-teal-600 hover:text-teal-800 text-sm font-medium"
// // // // // //                                     >
// // // // // //                                         View
// // // // // //                                     </button>
// // // // // //                                 </td>
// // // // // //                             </tr>
// // // // // //                         );
// // // // // //                     })}
// // // // // //                 </tbody>
// // // // // //             </table>
// // // // // //             {filteredData.length === 0 && (
// // // // // //                 <div className="text-center py-8 text-gray-500">
// // // // // //                     No customers found matching your search
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default CustomerTable;



// // // // // // src/Pages/Admin/components/tables/CustomerTable.jsx
// // // // // import React from 'react';

// // // // // const CustomerTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, formatCurrency, allBookings }) => {
// // // // //     const filteredData = data.filter(customer => 
// // // // //         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         customer.contactNumber?.includes(searchTerm) ||
// // // // //         customer.nic?.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //     );

// // // // //     return (
// // // // //         <div className="overflow-x-auto">
// // // // //             <table className="min-w-full">
// // // // //                 <thead>
// // // // //                     <tr className="border-b border-gray-200">
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer ID</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total Spent</th>
// // // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // // //                     </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                     {filteredData.map(customer => {
// // // // //                         const customerBookings = allBookings?.filter(b => b.customerId === customer.id) || [];
// // // // //                         const totalSpent = customerBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                        
// // // // //                         return (
// // // // //                             <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // // //                                 <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
// // // // //                                 <td className="py-3 px-4 text-sm">{`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}</td>
// // // // //                                 <td className="py-3 px-4 text-sm">{customer.email}</td>
// // // // //                                 <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
// // // // //                                 <td className="py-3 px-4 text-sm">{customer.nic || 'N/A'}</td>
// // // // //                                 <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(totalSpent)}</td>
// // // // //                                 <td className="py-3 px-4">
// // // // //                                     <div className="flex items-center gap-2">
// // // // //                                         {/* View Icon */}
// // // // //                                         <button
// // // // //                                             onClick={() => onView(customer)}
// // // // //                                             className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// // // // //                                             title="View Details"
// // // // //                                         >
// // // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // // // //                                             </svg>
// // // // //                                         </button>

// // // // //                                         {/* Edit Icon */}
// // // // //                                         <button
// // // // //                                             onClick={() => onEdit(customer)}
// // // // //                                             className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
// // // // //                                             title="Edit Customer"
// // // // //                                         >
// // // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // // //                                             </svg>
// // // // //                                         </button>

// // // // //                                         {/* Delete Icon */}
// // // // //                                         <button
// // // // //                                             onClick={() => onDelete(customer.id)}
// // // // //                                             className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
// // // // //                                             title="Delete Customer"
// // // // //                                         >
// // // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // // //                                             </svg>
// // // // //                                         </button>
// // // // //                                     </div>
// // // // //                                 </td>
// // // // //                             </tr>
// // // // //                         );
// // // // //                     })}
// // // // //                 </tbody>
// // // // //             </table>
// // // // //             {filteredData.length === 0 && (
// // // // //                 <div className="text-center py-8 text-gray-500">
// // // // //                     No customers found matching your search
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CustomerTable;



// // // // // src/Pages/Admin/components/tables/CustomerTable.jsx
// // // // import React from 'react';

// // // // const CustomerTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, formatCurrency, allBookings }) => {
// // // //     const filteredData = data.filter(customer => 
// // // //         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         customer.contactNumber?.includes(searchTerm) ||
// // // //         customer.nicNumber?.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );

// // // //     return (
// // // //         <div className="overflow-x-auto">
// // // //             <table className="min-w-full">
// // // //                 <thead>
// // // //                     <tr className="border-b border-gray-200">
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Country</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {filteredData.map(customer => {
// // // //                         const customerBookings = allBookings?.filter(b => b.customerId === customer.id) || [];
                        
// // // //                         return (
// // // //                             <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                 <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
// // // //                                 <td className="py-3 px-4 text-sm">{`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}</td>
// // // //                                 <td className="py-3 px-4 text-sm">{customer.email}</td>
// // // //                                 <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
// // // //                                 <td className="py-3 px-4 text-sm">{customer.nicNumber || 'N/A'}</td>
// // // //                                 <td className="py-3 px-4 text-sm">{customer.country || 'N/A'}</td>
// // // //                                 <td className="py-3 px-4">
// // // //                                     <div className="flex items-center gap-2">
// // // //                                         {/* View Icon */}
// // // //                                         <button
// // // //                                             onClick={() => onView(customer)}
// // // //                                             className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// // // //                                             title="View Details"
// // // //                                         >
// // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // // //                                             </svg>
// // // //                                         </button>

// // // //                                         {/* Edit Icon */}
// // // //                                         <button
// // // //                                             onClick={() => onEdit(customer)}
// // // //                                             className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
// // // //                                             title="Edit Customer"
// // // //                                         >
// // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // //                                             </svg>
// // // //                                         </button>

// // // //                                         {/* Delete Icon */}
// // // //                                         <button
// // // //                                             onClick={() => onDelete(customer.id)}
// // // //                                             className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
// // // //                                             title="Delete Customer"
// // // //                                         >
// // // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // //                                             </svg>
// // // //                                         </button>
// // // //                                     </div>
// // // //                                 </td>
// // // //                             </tr>
// // // //                         );
// // // //                     })}
// // // //                 </tbody>
// // // //             </table>
// // // //             {filteredData.length === 0 && (
// // // //                 <div className="text-center py-8 text-gray-500">
// // // //                     No customers found matching your search
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CustomerTable;



// // // // src/Pages/Admin/components/tables/CustomerTable.jsx
// // // import React from 'react';

// // // const CustomerTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, formatCurrency, allBookings, BASE_URL }) => {
// // //     const filteredData = data.filter(customer => 
// // //         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         customer.contactNumber?.includes(searchTerm) ||
// // //         customer.nicNumber?.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     return (
// // //         <div className="overflow-x-auto">
// // //             <table className="min-w-full">
// // //                 <thead>
// // //                     <tr className="border-b border-gray-200">
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Country</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {filteredData.map(customer => {
// // //                         const customerBookings = allBookings?.filter(b => b.customerId === customer.id) || [];
                        
// // //                         return (
// // //                             <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
// // //                                 <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
// // //                                 <td className="py-3 px-4 text-sm">
// // //                                     <div className="flex items-center">
// // //                                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 overflow-hidden">
// // //                                             {customer.customerImage ? (
// // //                                                 <img 
// // //                                                     src={`${BASE_URL}${customer.customerImage}`} 
// // //                                                     alt={customer.firstName} 
// // //                                                     className="w-8 h-8 rounded-full object-cover"
// // //                                                     onError={(e) => {
// // //                                                         e.target.onerror = null;
// // //                                                         e.target.style.display = 'none';
// // //                                                         e.target.parentElement.innerHTML = `<span class="text-blue-600 font-bold text-sm">${customer.firstName?.charAt(0)}</span>`;
// // //                                                     }}
// // //                                                 />
// // //                                             ) : (
// // //                                                 <span className="text-blue-600 font-bold text-sm">
// // //                                                     {customer.firstName?.charAt(0)}
// // //                                                 </span>
// // //                                             )}
// // //                                         </div>
// // //                                         {`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}
// // //                                     </div>
// // //                                 </td>
// // //                                 <td className="py-3 px-4 text-sm">{customer.email}</td>
// // //                                 <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
// // //                                 <td className="py-3 px-4 text-sm">{customer.nicNumber || 'N/A'}</td>
// // //                                 <td className="py-3 px-4 text-sm">{customer.country || 'N/A'}</td>
// // //                                 <td className="py-3 px-4">
// // //                                     <div className="flex items-center gap-2">
// // //                                         {/* View Icon */}
// // //                                         <button
// // //                                             onClick={() => onView(customer)}
// // //                                             className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// // //                                             title="View Details"
// // //                                         >
// // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // //                                             </svg>
// // //                                         </button>

// // //                                         {/* Edit Icon */}
// // //                                         <button
// // //                                             onClick={() => onEdit(customer)}
// // //                                             className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
// // //                                             title="Edit Customer"
// // //                                         >
// // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // //                                             </svg>
// // //                                         </button>

// // //                                         {/* Delete Icon */}
// // //                                         <button
// // //                                             onClick={() => onDelete(customer.id)}
// // //                                             className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
// // //                                             title="Delete Customer"
// // //                                         >
// // //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // //                                             </svg>
// // //                                         </button>
// // //                                     </div>
// // //                                 </td>
// // //                             </tr>
// // //                         );
// // //                     })}
// // //                 </tbody>
// // //             </table>
// // //             {filteredData.length === 0 && (
// // //                 <div className="text-center py-8 text-gray-500">
// // //                     No customers found matching your search
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default CustomerTable;



// // // src/Pages/Admin/components/tables/CustomerTable.jsx
// // import React from 'react';

// // const CustomerTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, formatCurrency, allBookings, BASE_URL }) => {
    
// //     // Helper function to get image URL
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

// //     const filteredData = data.filter(customer => 
// //         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         customer.contactNumber?.includes(searchTerm) ||
// //         customer.nicNumber?.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="overflow-x-auto">
// //             <table className="min-w-full">
// //                 <thead>
// //                     <tr className="border-b border-gray-200">
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Customer</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Country</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredData.map(customer => {
// //                         const imageUrl = getImageUrl(customer.customerImage);
                        
// //                         return (
// //                             <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                                 <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
// //                                 <td className="py-3 px-4 text-sm">
// //                                     <div className="flex items-center">
// //                                         <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-2 text-white font-bold text-sm shadow-sm overflow-hidden">
// //                                             {imageUrl ? (
// //                                                 <img 
// //                                                     src={imageUrl} 
// //                                                     alt={customer.firstName} 
// //                                                     className="w-full h-full object-cover"
// //                                                     onError={(e) => {
// //                                                         e.target.onerror = null;
// //                                                         e.target.style.display = 'none';
// //                                                         e.target.parentElement.innerHTML = `<span class="text-white font-bold text-sm">${customer.firstName?.charAt(0)}${customer.lastName?.charAt(0)}</span>`;
// //                                                     }}
// //                                                 />
// //                                             ) : (
// //                                                 <span>{customer.firstName?.charAt(0)}{customer.lastName?.charAt(0)}</span>
// //                                             )}
// //                                         </div>
// //                                         <span className="font-medium">{`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}</span>
// //                                     </div>
// //                                 </td>
// //                                 <td className="py-3 px-4 text-sm">{customer.email}</td>
// //                                 <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
// //                                 <td className="py-3 px-4 text-sm">{customer.nicNumber || 'N/A'}</td>
// //                                 <td className="py-3 px-4 text-sm">{customer.country || 'Sri Lanka'}</td>
// //                                 <td className="py-3 px-4">
// //                                     <div className="flex items-center gap-2">
// //                                         {/* View Icon */}
// //                                         <button
// //                                             onClick={() => onView(customer)}
// //                                             className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// //                                             title="View Details"
// //                                         >
// //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// //                                             </svg>
// //                                         </button>

// //                                         {/* Edit Icon */}
// //                                         <button
// //                                             onClick={() => onEdit(customer)}
// //                                             className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition"
// //                                             title="Edit Customer"
// //                                         >
// //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// //                                             </svg>
// //                                         </button>

// //                                         {/* Delete Icon */}
// //                                         <button
// //                                             onClick={() => onDelete(customer.id)}
// //                                             className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
// //                                             title="Delete Customer"
// //                                         >
// //                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// //                                             </svg>
// //                                         </button>
// //                                     </div>
// //                                 </td>
// //                             </tr>
// //                         );
// //                     })}
// //                 </tbody>
// //             </table>
// //             {filteredData.length === 0 && (
// //                 <div className="text-center py-8 text-gray-500">
// //                     No customers found matching your search
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default CustomerTable;



// // src/Pages/Admin/components/tables/CustomerTable.jsx
// import React from 'react';

// const CustomerTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, formatCurrency, allBookings }) => {
    
//     const filteredData = data.filter(customer => 
//         `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         customer.contactNumber?.includes(searchTerm) ||
//         customer.nicNumber?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full">
//                 <thead>
//                     <tr className="border-b border-gray-200">
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Country</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map(customer => (
//                         <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
//                             <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
//                             <td className="py-3 px-4 text-sm font-medium">
//                                 {`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}
//                             </td>
//                             <td className="py-3 px-4 text-sm">{customer.email}</td>
//                             <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
//                             <td className="py-3 px-4 text-sm">{customer.nicNumber || 'N/A'}</td>
//                             <td className="py-3 px-4 text-sm">{customer.country || 'Sri Lanka'}</td>
//                             <td className="py-3 px-4">
//                                 <div className="flex items-center gap-2">
//                                     {/* View Icon */}
//                                     <button
//                                         onClick={() => onView(customer)}
//                                         className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
//                                         title="View Details"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                         </svg>
//                                     </button>

//                                     {/* Edit Icon */}
//                                     <button
//                                         onClick={() => onEdit(customer)}
//                                         className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition"
//                                         title="Edit Customer"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                         </svg>
//                                     </button>

//                                     {/* Delete Icon */}
//                                     <button
//                                         onClick={() => onDelete(customer.id)}
//                                         className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
//                                         title="Delete Customer"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {filteredData.length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                     No customers found matching your search
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomerTable;





// src/Pages/Admin/components/tables/CustomerTable.jsx
import React from 'react';

const CustomerTable = ({ 
    data, 
    searchTerm, 
    onView, 
    onEdit, 
    onDelete, 
    // formatDate, 
    formatCurrency, 
    allBookings 
}) => {
    const filteredData = data.filter(customer => 
        `${customer.firstName || ''} ${customer.lastName || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.contactNumber?.includes(searchTerm) ||
        customer.nicNumber?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate total spent for each customer if allBookings is provided
    const getCustomerTotalSpent = (customerId) => {
        if (!allBookings) return 0;
        return allBookings
            .filter(b => b.customerId === customerId)
            .reduce((sum, b) => sum + (b.totalPrice || 0), 0);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">NIC</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Country</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total Spent</th>
                        {/* <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Member Since</th> */}
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(customer => {
                        const totalSpent = getCustomerTotalSpent(customer.id);
                        
                        return (
                            <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 text-sm font-medium">#CUS{String(customer.id).padStart(4, '0')}</td>
                                <td className="py-3 px-4 text-sm font-medium">
                                    {`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}
                                </td>
                                <td className="py-3 px-4 text-sm">{customer.email}</td>
                                <td className="py-3 px-4 text-sm">{customer.contactNumber}</td>
                                <td className="py-3 px-4 text-sm">{customer.nicNumber || 'N/A'}</td>
                                <td className="py-3 px-4 text-sm">{customer.country || 'Sri Lanka'}</td>
                                <td className="py-3 px-4 text-sm font-semibold text-teal-600">
                                    {formatCurrency(totalSpent)}
                                </td>
                                {/* <td className="py-3 px-4 text-sm">
                                    {customer.createdAt ? formatDate(customer.createdAt) : 'N/A'}
                                </td> */}
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        {/* View Icon */}
                                        <button
                                            onClick={() => onView(customer)}
                                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                                            title="View Details"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>

                                        {/* Edit Icon */}
                                        <button
                                            onClick={() => onEdit(customer)}
                                            className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
                                            title="Edit Customer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>

                                        {/* Delete Icon */}
                                        <button
                                            onClick={() => onDelete(customer.id)}
                                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                                            title="Delete Customer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No customers found matching your search
                </div>
            )}
        </div>
    );
};

export default CustomerTable;