// // // src/Pages/Admin/components/tables/AdminTable.jsx
// // import React from 'react';

// // const AdminTable = ({ data, searchTerm, onViewDetails, onEdit, onDelete, getStatusColor, formatDate, BASE_URL }) => {
// //     const filteredData = data.filter(admin => 
// //         admin.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         admin.email?.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="overflow-x-auto">
// //             <table className="min-w-full">
// //                 <thead>
// //                     <tr className="border-b border-gray-200">
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredData.map(admin => (
// //                         <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                             <td className="py-3 px-4 text-sm">#AD{String(admin.id).padStart(4, '0')}</td>
// //                             <td className="py-3 px-4 text-sm font-medium flex items-center">
// //                                 <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2 overflow-hidden">
// //                                     {admin.adminImage ? (
// //                                         <img 
// //                                             src={`${BASE_URL}/uploads/admins/${admin.adminImage}`} 
// //                                             alt={admin.fullName} 
// //                                             className="w-8 h-8 rounded-full object-cover"
// //                                             onError={(e) => {
// //                                                 e.target.onerror = null;
// //                                                 e.target.style.display = 'none';
// //                                                 e.target.parentElement.innerHTML = `<span class="text-teal-600 font-bold text-sm">${admin.fullName?.charAt(0)}</span>`;
// //                                             }}
// //                                         />
// //                                     ) : (
// //                                         <span className="text-teal-600 font-bold text-sm">
// //                                             {admin.fullName?.charAt(0)}
// //                                         </span>
// //                                     )}
// //                                 </div>
// //                                 {admin.fullName}
// //                             </td>
// //                             <td className="py-3 px-4 text-sm">{admin.email}</td>
// //                             <td className="py-3 px-4 text-sm">{admin.contactNo}</td>
// //                             <td className="py-3 px-4">
// //                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${
// //                                     admin.role === 'SUPER_ADMIN' 
// //                                         ? 'bg-purple-100 text-purple-800' 
// //                                         : 'bg-teal-100 text-teal-800'
// //                                 }`}>
// //                                     {admin.role}
// //                                 </span>
// //                             </td>
// //                             <td className="py-3 px-4">
// //                                 <div className="flex gap-2">
// //                                     <button
// //                                         onClick={() => onEdit(admin)}
// //                                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
// //                                     >
// //                                         Edit
// //                                     </button>
// //                                     <button
// //                                         onClick={() => onDelete(admin.id)}
// //                                         className="text-red-600 hover:text-red-800 text-sm font-medium"
// //                                     >
// //                                         Delete
// //                                     </button>
// //                                 </div>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //             {filteredData.length === 0 && (
// //                 <div className="text-center py-8 text-gray-500">
// //                     No admins found matching your search
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AdminTable;



// // src/Pages/Admin/components/tables/AdminTable.jsx
// import React from 'react';

// const AdminTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate, BASE_URL }) => {
//     const filteredData = data.filter(admin => 
//         admin.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         admin.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         admin.userName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full">
//                 <thead>
//                     <tr className="border-b border-gray-200">
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Admin ID</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Username</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map(admin => (
//                         <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50">
//                             <td className="py-3 px-4 text-sm font-medium">#AD{String(admin.id).padStart(4, '0')}</td>
//                             <td className="py-3 px-4 text-sm flex items-center">
//                                 <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2 overflow-hidden flex-shrink-0">
//                                     {admin.adminImage ? (
//                                         <img 
//                                             src={`${BASE_URL}/uploads/admins/${admin.adminImage}`} 
//                                             alt={admin.fullName} 
//                                             className="w-8 h-8 rounded-full object-cover"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.style.display = 'none';
//                                                 e.target.parentElement.innerHTML = `<span class="text-teal-600 font-bold text-sm">${admin.fullName?.charAt(0)}</span>`;
//                                             }}
//                                         />
//                                     ) : (
//                                         <span className="text-teal-600 font-bold text-sm">
//                                             {admin.fullName?.charAt(0)}
//                                         </span>
//                                     )}
//                                 </div>
//                                 <span className="truncate">{admin.fullName}</span>
//                             </td>
//                             <td className="py-3 px-4 text-sm">{admin.userName}</td>
//                             <td className="py-3 px-4 text-sm">{admin.email}</td>
//                             <td className="py-3 px-4 text-sm">{admin.contactNo}</td>
//                             <td className="py-3 px-4">
//                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${
//                                     admin.role === 'SUPER_ADMIN' 
//                                         ? 'bg-purple-100 text-purple-800' 
//                                         : 'bg-teal-100 text-teal-800'
//                                 }`}>
//                                     {admin.role}
//                                 </span>
//                             </td>
//                             <td className="py-3 px-4">
//                                 <div className="flex items-center gap-2">
//                                     {/* View Icon */}
//                                     <button
//                                         onClick={() => onView(admin)}
//                                         className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
//                                         title="View Details"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                         </svg>
//                                     </button>

//                                     {/* Edit Icon */}
//                                     <button
//                                         onClick={() => onEdit(admin)}
//                                         className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
//                                         title="Edit Admin"
//                                     >
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                         </svg>
//                                     </button>

//                                     {/* Delete Icon */}
//                                     <button
//                                         onClick={() => onDelete(admin.id)}
//                                         className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
//                                         title="Delete Admin"
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
//                     No admins found matching your search
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminTable;


// src/Pages/Admin/components/tables/AdminTable.jsx
import React from 'react';

const AdminTable = ({ data, searchTerm, onView, onEdit, onDelete, BASE_URL }) => {
    
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

    const filteredData = data.filter(admin => 
        admin.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.userName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Username</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(admin => {
                        const imageUrl = getImageUrl(admin.adminImage);
                        
                        return (
                            <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 text-sm font-medium">#AD{String(admin.id).padStart(4, '0')}</td>
                                <td className="py-3 px-4 text-sm">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                                            {imageUrl ? (
                                                <img 
                                                    src={imageUrl} 
                                                    alt={admin.fullName} 
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `<span class="text-purple-600 font-bold text-sm">${admin.fullName?.charAt(0)}</span>`;
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-purple-600 font-bold text-sm">
                                                    {admin.fullName?.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <span className="font-medium">{admin.fullName}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm">{admin.userName}</td>
                                <td className="py-3 px-4 text-sm">{admin.email}</td>
                                <td className="py-3 px-4 text-sm">{admin.contactNo}</td>
                                <td className="py-3 px-4">
                                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                        admin.role === 'SUPER_ADMIN' 
                                            ? 'bg-purple-100 text-purple-800' 
                                            : 'bg-teal-100 text-teal-800'
                                    }`}>
                                        {admin.role}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => onView(admin)}
                                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                                            title="View Details"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => onEdit(admin)}
                                            className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
                                            title="Edit Admin"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => onDelete(admin.id)}
                                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                                            title="Delete Admin"
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
                    No admins found matching your search
                </div>
            )}
        </div>
    );
};

export default AdminTable;