// // // // // src/Pages/Admin/components/tables/AgentTable.jsx
// // // // import React from 'react';

// // // // const AgentTable = ({ data, searchTerm, onViewDetails, getStatusColor, formatDate }) => {
// // // //     const filteredData = data.filter(agent => 
// // // //         agent.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         agent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         agent.contactNumber?.includes(searchTerm)
// // // //     );

// // // //     return (
// // // //         <div className="overflow-x-auto">
// // // //             <table className="min-w-full">
// // // //                 <thead>
// // // //                     <tr className="border-b border-gray-200">
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Company</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {filteredData.map(agent => (
// // // //                         <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                             <td className="py-3 px-4 text-sm">#AG{String(agent.id).padStart(4, '0')}</td>
// // // //                             <td className="py-3 px-4 text-sm font-medium">{agent.companyName}</td>
// // // //                             <td className="py-3 px-4 text-sm">{agent.email}</td>
// // // //                             <td className="py-3 px-4 text-sm">{agent.contactNumber}</td>
// // // //                             <td className="py-3 px-4">
// // // //                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(agent.status || 'ACTIVE')}`}>
// // // //                                     {agent.status || 'ACTIVE'}
// // // //                                 </span>
// // // //                             </td>
// // // //                             <td className="py-3 px-4">
// // // //                                 <button
// // // //                                     onClick={() => onViewDetails(agent)}
// // // //                                     className="text-teal-600 hover:text-teal-800 text-sm font-medium"
// // // //                                 >
// // // //                                     View
// // // //                                 </button>
// // // //                             </td>
// // // //                         </tr>
// // // //                     ))}
// // // //                 </tbody>
// // // //             </table>
// // // //             {filteredData.length === 0 && (
// // // //                 <div className="text-center py-8 text-gray-500">
// // // //                     No agents found matching your search
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AgentTable;


// // // // src/Pages/Admin/components/tables/AgentTable.jsx
// // // import React from 'react';

// // // const AgentTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor, formatDate }) => {
// // //     const filteredData = data.filter(agent => 
// // //         agent.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         agent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         agent.contactNumber?.includes(searchTerm) ||
// // //         agent.registrationNumber?.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     return (
// // //         <div className="overflow-x-auto">
// // //             <table className="min-w-full">
// // //                 <thead>
// // //                     <tr className="border-b border-gray-200">
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Agent ID</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Company</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reg Number</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
// // //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {filteredData.map(agent => (
// // //                         <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
// // //                             <td className="py-3 px-4 text-sm font-medium">#AG{String(agent.id).padStart(4, '0')}</td>
// // //                             <td className="py-3 px-4 text-sm">{agent.companyName}</td>
// // //                             <td className="py-3 px-4 text-sm">{agent.email}</td>
// // //                             <td className="py-3 px-4 text-sm">{agent.contactNumber}</td>
// // //                             <td className="py-3 px-4 text-sm">{agent.registrationNumber || 'N/A'}</td>
// // //                             <td className="py-3 px-4">
// // //                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(agent.status || 'ACTIVE')}`}>
// // //                                     {agent.status || 'ACTIVE'}
// // //                                 </span>
// // //                             </td>
// // //                             <td className="py-3 px-4">
// // //                                 <div className="flex items-center gap-2">
// // //                                     {/* View Icon */}
// // //                                     <button
// // //                                         onClick={() => onView(agent)}
// // //                                         className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// // //                                         title="View Details"
// // //                                     >
// // //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // //                                         </svg>
// // //                                     </button>

// // //                                     {/* Edit Icon */}
// // //                                     <button
// // //                                         onClick={() => onEdit(agent)}
// // //                                         className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
// // //                                         title="Edit Agent"
// // //                                     >
// // //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // //                                         </svg>
// // //                                     </button>

// // //                                     {/* Delete Icon */}
// // //                                     <button
// // //                                         onClick={() => onDelete(agent.id)}
// // //                                         className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
// // //                                         title="Delete Agent"
// // //                                     >
// // //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // //                                         </svg>
// // //                                     </button>
// // //                                 </div>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //             {filteredData.length === 0 && (
// // //                 <div className="text-center py-8 text-gray-500">
// // //                     No agents found matching your search
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AgentTable;



// // // src/Pages/Admin/components/tables/AgentTable.jsx
// // import React from 'react';

// // const AgentTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor }) => {
// //     const filteredData = data.filter(agent => 
// //         agent.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         agent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         agent.contactNumber?.includes(searchTerm) ||
// //         agent.registrationNumber?.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="overflow-x-auto">
// //             <table className="min-w-full">
// //                 <thead>
// //                     <tr className="border-b border-gray-200">
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Agent ID</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Company</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reg Number</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
// //                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredData.map(agent => (
// //                         <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                             <td className="py-3 px-4 text-sm font-medium">#AG{String(agent.id).padStart(4, '0')}</td>
// //                             <td className="py-3 px-4 text-sm font-medium">{agent.companyName}</td>
// //                             <td className="py-3 px-4 text-sm">{agent.email}</td>
// //                             <td className="py-3 px-4 text-sm">{agent.contactNumber || 'N/A'}</td>
// //                             <td className="py-3 px-4 text-sm">{agent.registrationNumber || 'N/A'}</td>
// //                             <td className="py-3 px-4">
// //                                 <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(agent.status || 'ACTIVE')}`}>
// //                                     {agent.status || 'ACTIVE'}
// //                                 </span>
// //                             </td>
// //                             <td className="py-3 px-4">
// //                                 <div className="flex items-center gap-2">
// //                                     {/* View Icon */}
// //                                     <button
// //                                         onClick={() => onView(agent)}
// //                                         className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
// //                                         title="View Details"
// //                                     >
// //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// //                                         </svg>
// //                                     </button>

// //                                     {/* Edit Icon */}
// //                                     <button
// //                                         onClick={() => onEdit(agent)}
// //                                         className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition"
// //                                         title="Edit Agent"
// //                                     >
// //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// //                                         </svg>
// //                                     </button>

// //                                     {/* Delete Icon */}
// //                                     <button
// //                                         onClick={() => onDelete(agent.id)}
// //                                         className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
// //                                         title="Delete Agent"
// //                                     >
// //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// //                                         </svg>
// //                                     </button>
// //                                 </div>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //             {filteredData.length === 0 && (
// //                 <div className="text-center py-8 text-gray-500">
// //                     No agents found matching your search
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AgentTable;



// // src/Pages/Admin/components/tables/AgentTable.jsx
// import React from 'react';

// const AgentTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor }) => {
//     const filteredData = data.filter(agent => 
//         agent.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         agent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         agent.contactNo?.includes(searchTerm) ||
//         agent.userName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full">
//                 <thead>
//                     <tr className="border-b border-gray-200">
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Company</th>
//                         {/* <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Username</th> */}
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reg No</th>
//                         <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map(agent => (
//                         <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
//                             <td className="py-3 px-4 text-sm font-medium">#AG{String(agent.id).padStart(4, '0')}</td>
//                             <td className="py-3 px-4 text-sm font-medium">{agent.companyName}</td>
//                             {/* <td className="py-3 px-4 text-sm">{agent.userName || 'N/A'}</td> */}
//                             <td className="py-3 px-4 text-sm">{agent.email}</td>
//                             <td className="py-3 px-4 text-sm">{agent.contactNo || 'N/A'}</td>
//                             <td className="py-3 px-4 text-sm">{agent.businessRegNo || 'N/A'}</td>
//                             <td className="py-3 px-4">
//                                 <div className="flex items-center gap-2">
//                                     <button onClick={() => onView(agent)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg" title="View">
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                         </svg>
//                                     </button>
//                                     <button onClick={() => onEdit(agent)} className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg" title="Edit">
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                         </svg>
//                                     </button>
//                                     <button onClick={() => onDelete(agent.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg" title="Delete">
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
//                     No agents found matching your search
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AgentTable;



// src/Pages/Admin/components/tables/AgentTable.jsx
import React from 'react';

const AgentTable = ({ data, searchTerm, onView, onEdit, onDelete, getStatusColor }) => {
    const filteredData = data.filter(agent => 
        agent.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.contactNo?.includes(searchTerm) ||
        agent.businessRegNo?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Company</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reg No</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(agent => (
                        <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-medium">#AG{String(agent.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-medium">{agent.companyName}</td>
                            <td className="py-3 px-4 text-sm">{agent.email}</td>
                            <td className="py-3 px-4 text-sm">{agent.contactNo || 'N/A'}</td>
                            <td className="py-3 px-4 text-sm">{agent.businessRegNo || 'N/A'}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(agent.status || 'ACTIVE')}`}>
                                    {agent.status || 'ACTIVE'}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onView(agent)}
                                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                                        title="View Details"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onEdit(agent)}
                                        className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
                                        title="Edit Agent"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onDelete(agent.id)}
                                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                                        title="Delete Agent"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No agents found matching your search
                </div>
            )}
        </div>
    );
};

export default AgentTable;