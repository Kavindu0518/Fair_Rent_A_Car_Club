// // // // // // // // // src/Pages/Admin/components/UserManagementView.jsx
// // // // // // // // import React from 'react';
// // // // // // // // import AgentTable from './tables/AgentTable';
// // // // // // // // import CustomerTable from './tables/CustomerTable';
// // // // // // // // import AdminTable from './tables/AdminTable';

// // // // // // // // const UserManagementView = ({ 
// // // // // // // //     agents, 
// // // // // // // //     customers, 
// // // // // // // //     admins, 
// // // // // // // //     activeSubTab, 
// // // // // // // //     setActiveSubTab,
// // // // // // // //     searchTerm,
// // // // // // // //     setSearchTerm,
// // // // // // // //     onViewDetails,
// // // // // // // //     onEdit,
// // // // // // // //     onDelete,
// // // // // // // //     getStatusColor,
// // // // // // // //     formatDate,
// // // // // // // //     formatCurrency,
// // // // // // // //     allBookings,
// // // // // // // //     stats,
// // // // // // // //     BASE_URL
// // // // // // // // }) => {
// // // // // // // //     const tabs = [
// // // // // // // //         { id: 'agents', label: 'Agents', count: stats.totalAgents, badge: stats.pendingAgents },
// // // // // // // //         { id: 'customers', label: 'Customers', count: stats.totalCustomers },
// // // // // // // //         { id: 'admins', label: 'Admins', count: stats.totalAdmins }
// // // // // // // //     ];

// // // // // // // //     return (
// // // // // // // //         <div className="space-y-6">
// // // // // // // //             {/* Header */}
// // // // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // // // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // // // // // // //                     <div>
// // // // // // // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // // // // // // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // // // // // // //                     </div>
                    
// // // // // // // //                     <div className="relative">
// // // // // // // //                         <input
// // // // // // // //                             type="text"
// // // // // // // //                             placeholder="Search users..."
// // // // // // // //                             value={searchTerm}
// // // // // // // //                             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // //                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // // // // // // //                         />
// // // // // // // //                         <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // // // // // //                         </svg>
// // // // // // // //                     </div>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Sub Tabs */}
// // // // // // // //                 <div className="flex gap-2 mt-6">
// // // // // // // //                     {tabs.map(tab => (
// // // // // // // //                         <button
// // // // // // // //                             key={tab.id}
// // // // // // // //                             onClick={() => setActiveSubTab(tab.id)}
// // // // // // // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative ${
// // // // // // // //                                 activeSubTab === tab.id
// // // // // // // //                                     ? 'bg-teal-600 text-white'
// // // // // // // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // // // // // // //                             }`}
// // // // // // // //                         >
// // // // // // // //                             {tab.label} ({tab.count})
// // // // // // // //                             {tab.badge > 0 && (
// // // // // // // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // // // // // // //                                     {tab.badge}
// // // // // // // //                                 </span>
// // // // // // // //                             )}
// // // // // // // //                         </button>
// // // // // // // //                     ))}
// // // // // // // //                 </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Table */}
// // // // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // // // //                 {activeSubTab === 'agents' && (
// // // // // // // //                     <AgentTable
// // // // // // // //                         data={agents}
// // // // // // // //                         searchTerm={searchTerm}
// // // // // // // //                         onViewDetails={onViewDetails}
// // // // // // // //                         getStatusColor={getStatusColor}
// // // // // // // //                         formatDate={formatDate}
// // // // // // // //                     />
// // // // // // // //                 )}
// // // // // // // //                 {activeSubTab === 'customers' && (
// // // // // // // //                     <CustomerTable
// // // // // // // //                         data={customers}
// // // // // // // //                         searchTerm={searchTerm}
// // // // // // // //                         onViewDetails={onViewDetails}
// // // // // // // //                         getStatusColor={getStatusColor}
// // // // // // // //                         formatDate={formatDate}
// // // // // // // //                         formatCurrency={formatCurrency}
// // // // // // // //                         allBookings={allBookings}
// // // // // // // //                     />
// // // // // // // //                 )}
// // // // // // // //                 {activeSubTab === 'admins' && (
// // // // // // // //                     <AdminTable
// // // // // // // //                         data={admins}
// // // // // // // //                         searchTerm={searchTerm}
// // // // // // // //                         onViewDetails={onViewDetails}
// // // // // // // //                         onEdit={onEdit}
// // // // // // // //                         onDelete={onDelete}
// // // // // // // //                         getStatusColor={getStatusColor}
// // // // // // // //                         formatDate={formatDate}
// // // // // // // //                         BASE_URL={BASE_URL}
// // // // // // // //                     />
// // // // // // // //                 )}
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default UserManagementView;


// // // // // // // // src/Pages/Admin/components/UserManagementView.jsx
// // // // // // // import React, { useState } from 'react';
// // // // // // // import AgentTable from './tables/AgentTable';
// // // // // // // import CustomerTable from './tables/CustomerTable';
// // // // // // // import AdminTable from './tables/AdminTable';
// // // // // // // import AddAgentModal from './modals/AddAgentModal';
// // // // // // // import AddCustomerModal from './modals/AddCustomerModal';
// // // // // // // import AddAdminModal from './modals/AddAdminModal';
// // // // // // // import EditAgentModal from './modals/EditAgentModal';
// // // // // // // import EditCustomerModal from './modals/EditCustomerModal';
// // // // // // // import EditAdminModal from './modals/EditAdminModal';
// // // // // // // import ViewDetailsModal from './modals/ViewDetailsModal';

// // // // // // // const UserManagementView = ({ 
// // // // // // //     agents, 
// // // // // // //     customers, 
// // // // // // //     admins, 
// // // // // // //     activeSubTab, 
// // // // // // //     setActiveSubTab,
// // // // // // //     searchTerm,
// // // // // // //     setSearchTerm,
// // // // // // //     onRefresh,
// // // // // // //     getStatusColor,
// // // // // // //     formatDate,
// // // // // // //     formatCurrency,
// // // // // // //     allBookings,
// // // // // // //     stats,
// // // // // // //     BASE_URL
// // // // // // // }) => {
// // // // // // //     const [showAddModal, setShowAddModal] = useState(false);
// // // // // // //     const [showEditModal, setShowEditModal] = useState(false);
// // // // // // //     const [showViewModal, setShowViewModal] = useState(false);
// // // // // // //     const [selectedItem, setSelectedItem] = useState(null);
// // // // // // //     const [modalType, setModalType] = useState('');

// // // // // // //     const tabs = [
// // // // // // //         { id: 'agents', label: 'Agents', count: stats.totalAgents, badge: stats.pendingAgents },
// // // // // // //         { id: 'customers', label: 'Customers', count: stats.totalCustomers },
// // // // // // //         { id: 'admins', label: 'Admins', count: stats.totalAdmins }
// // // // // // //     ];

// // // // // // //     const handleAdd = () => {
// // // // // // //         setModalType(activeSubTab);
// // // // // // //         setShowAddModal(true);
// // // // // // //     };

// // // // // // //     const handleEdit = (item) => {
// // // // // // //         setSelectedItem(item);
// // // // // // //         setModalType(activeSubTab);
// // // // // // //         setShowEditModal(true);
// // // // // // //     };

// // // // // // //     const handleView = (item) => {
// // // // // // //         setSelectedItem(item);
// // // // // // //         setModalType(activeSubTab);
// // // // // // //         setShowViewModal(true);
// // // // // // //     };

// // // // // // //     const handleDelete = async (id) => {
// // // // // // //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             const token = localStorage.getItem('adminToken');
// // // // // // //             let endpoint = '';

// // // // // // //             switch(activeSubTab) {
// // // // // // //                 case 'agents':
// // // // // // //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// // // // // // //                     break;
// // // // // // //                 case 'customers':
// // // // // // //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// // // // // // //                     break;
// // // // // // //                 case 'admins':
// // // // // // //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// // // // // // //                     break;
// // // // // // //                 default:
// // // // // // //                     return;
// // // // // // //             }

// // // // // // //             await axios.delete(endpoint, {
// // // // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // // // //             });

// // // // // // //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
// // // // // // //             onRefresh();
// // // // // // //         } catch (err) {
// // // // // // //             console.error('Error deleting:', err);
// // // // // // //             alert('Failed to delete. Please try again.');
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleSave = async (formData) => {
// // // // // // //         try {
// // // // // // //             const token = localStorage.getItem('adminToken');
// // // // // // //             let endpoint = '';
// // // // // // //             let method = 'post';

// // // // // // //             if (showEditModal && selectedItem) {
// // // // // // //                 method = 'put';
// // // // // // //                 switch(modalType) {
// // // // // // //                     case 'agents':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // // // // // //                         break;
// // // // // // //                     case 'customers':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // // // // // //                         break;
// // // // // // //                     case 'admins':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // // // // // //                         break;
// // // // // // //                 }
// // // // // // //             } else {
// // // // // // //                 switch(modalType) {
// // // // // // //                     case 'agents':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/agent/add`;
// // // // // // //                         break;
// // // // // // //                     case 'customers':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/customer/register`;
// // // // // // //                         break;
// // // // // // //                     case 'admins':
// // // // // // //                         endpoint = `${BASE_URL}/api/v1/admin/add`;
// // // // // // //                         break;
// // // // // // //                 }
// // // // // // //             }

// // // // // // //             const response = await axios({
// // // // // // //                 method,
// // // // // // //                 url: endpoint,
// // // // // // //                 data: formData,
// // // // // // //                 headers: {
// // // // // // //                     'Authorization': `Bearer ${token}`,
// // // // // // //                     'Content-Type': method === 'post' && modalType !== 'admins' ? 'application/json' : 'multipart/form-data'
// // // // // // //                 }
// // // // // // //             });

// // // // // // //             if (response.status === 200 || response.status === 201) {
// // // // // // //                 alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
// // // // // // //                 setShowAddModal(false);
// // // // // // //                 setShowEditModal(false);
// // // // // // //                 setSelectedItem(null);
// // // // // // //                 onRefresh();
// // // // // // //             }
// // // // // // //         } catch (err) {
// // // // // // //             console.error('Error saving:', err);
// // // // // // //             alert(`Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. Please try again.`);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className="space-y-6">
// // // // // // //             {/* Header */}
// // // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // // // // // //                     <div>
// // // // // // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // // // // // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // // // // // //                     </div>
                    
// // // // // // //                     <div className="flex gap-3">
// // // // // // //                         <div className="relative">
// // // // // // //                             <input
// // // // // // //                                 type="text"
// // // // // // //                                 placeholder="Search users..."
// // // // // // //                                 value={searchTerm}
// // // // // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // // // // // //                             />
// // // // // // //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // // // // //                             </svg>
// // // // // // //                         </div>
                        
// // // // // // //                         {/* Add Button */}
// // // // // // //                         <button
// // // // // // //                             onClick={handleAdd}
// // // // // // //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // // // // //                         >
// // // // // // //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // // // // //                             </svg>
// // // // // // //                             Add {activeSubTab.slice(0, -1)}
// // // // // // //                         </button>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 {/* Sub Tabs */}
// // // // // // //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// // // // // // //                     {tabs.map(tab => (
// // // // // // //                         <button
// // // // // // //                             key={tab.id}
// // // // // // //                             onClick={() => setActiveSubTab(tab.id)}
// // // // // // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// // // // // // //                                 activeSubTab === tab.id
// // // // // // //                                     ? 'bg-teal-600 text-white'
// // // // // // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // // // // // //                             }`}
// // // // // // //                         >
// // // // // // //                             {tab.label} ({tab.count})
// // // // // // //                             {tab.badge > 0 && (
// // // // // // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // // // // // //                                     {tab.badge}
// // // // // // //                                 </span>
// // // // // // //                             )}
// // // // // // //                         </button>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* Table */}
// // // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // // //                 {activeSubTab === 'agents' && (
// // // // // // //                     <AgentTable
// // // // // // //                         data={agents}
// // // // // // //                         searchTerm={searchTerm}
// // // // // // //                         onView={handleView}
// // // // // // //                         onEdit={handleEdit}
// // // // // // //                         onDelete={handleDelete}
// // // // // // //                         getStatusColor={getStatusColor}
// // // // // // //                         formatDate={formatDate}
// // // // // // //                     />
// // // // // // //                 )}
// // // // // // //                 {activeSubTab === 'customers' && (
// // // // // // //                     <CustomerTable
// // // // // // //                         data={customers}
// // // // // // //                         searchTerm={searchTerm}
// // // // // // //                         onView={handleView}
// // // // // // //                         onEdit={handleEdit}
// // // // // // //                         onDelete={handleDelete}
// // // // // // //                         getStatusColor={getStatusColor}
// // // // // // //                         formatDate={formatDate}
// // // // // // //                         formatCurrency={formatCurrency}
// // // // // // //                         allBookings={allBookings}
// // // // // // //                     />
// // // // // // //                 )}
// // // // // // //                 {activeSubTab === 'admins' && (
// // // // // // //                     <AdminTable
// // // // // // //                         data={admins}
// // // // // // //                         searchTerm={searchTerm}
// // // // // // //                         onView={handleView}
// // // // // // //                         onEdit={handleEdit}
// // // // // // //                         onDelete={handleDelete}
// // // // // // //                         getStatusColor={getStatusColor}
// // // // // // //                         formatDate={formatDate}
// // // // // // //                         BASE_URL={BASE_URL}
// // // // // // //                     />
// // // // // // //                 )}
// // // // // // //             </div>

// // // // // // //             {/* Modals */}
// // // // // // //             {showAddModal && modalType === 'agents' && (
// // // // // // //                 <AddAgentModal
// // // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                 />
// // // // // // //             )}
// // // // // // //             {showAddModal && modalType === 'customers' && (
// // // // // // //                 <AddCustomerModal
// // // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                 />
// // // // // // //             )}
// // // // // // //             {showAddModal && modalType === 'admins' && (
// // // // // // //                 <AddAdminModal
// // // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                     BASE_URL={BASE_URL}
// // // // // // //                 />
// // // // // // //             )}

// // // // // // //             {showEditModal && modalType === 'agents' && selectedItem && (
// // // // // // //                 <EditAgentModal
// // // // // // //                     agent={selectedItem}
// // // // // // //                     onClose={() => {
// // // // // // //                         setShowEditModal(false);
// // // // // // //                         setSelectedItem(null);
// // // // // // //                     }}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                 />
// // // // // // //             )}
// // // // // // //             {showEditModal && modalType === 'customers' && selectedItem && (
// // // // // // //                 <EditCustomerModal
// // // // // // //                     customer={selectedItem}
// // // // // // //                     onClose={() => {
// // // // // // //                         setShowEditModal(false);
// // // // // // //                         setSelectedItem(null);
// // // // // // //                     }}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                 />
// // // // // // //             )}
// // // // // // //             {showEditModal && modalType === 'admins' && selectedItem && (
// // // // // // //                 <EditAdminModal
// // // // // // //                     admin={selectedItem}
// // // // // // //                     onClose={() => {
// // // // // // //                         setShowEditModal(false);
// // // // // // //                         setSelectedItem(null);
// // // // // // //                     }}
// // // // // // //                     onSave={(data) => handleSave(data)}
// // // // // // //                     BASE_URL={BASE_URL}
// // // // // // //                 />
// // // // // // //             )}

// // // // // // //             {showViewModal && selectedItem && (
// // // // // // //                 <ViewDetailsModal
// // // // // // //                     item={selectedItem}
// // // // // // //                     type={modalType}
// // // // // // //                     onClose={() => {
// // // // // // //                         setShowViewModal(false);
// // // // // // //                         setSelectedItem(null);
// // // // // // //                     }}
// // // // // // //                     formatDate={formatDate}
// // // // // // //                     formatCurrency={formatCurrency}
// // // // // // //                     getStatusColor={getStatusColor}
// // // // // // //                     BASE_URL={BASE_URL}
// // // // // // //                 />
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default UserManagementView;



// // // // // // // src/Pages/Admin/components/UserManagementView.jsx
// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import AgentTable from './tables/AgentTable';
// // // // // // import CustomerTable from './tables/CustomerTable';
// // // // // // import AdminTable from './tables/AdminTable';
// // // // // // import AddAgentModal from './modals/AddAgentModal';
// // // // // // import AddCustomerModal from './modals/AddCustomerModal';
// // // // // // import AddAdminModal from './modals/AddAdminModal';
// // // // // // import EditAgentModal from './modals/EditAgentModal';
// // // // // // import EditCustomerModal from './modals/EditCustomerModal';
// // // // // // import EditAdminModal from './modals/EditAdminModal';
// // // // // // import ViewDetailsModal from './modals/ViewDetailsModal';

// // // // // // const UserManagementView = ({ 
// // // // // //     agents, 
// // // // // //     customers, 
// // // // // //     admins, 
// // // // // //     activeSubTab, 
// // // // // //     setActiveSubTab,
// // // // // //     searchTerm,
// // // // // //     setSearchTerm,
// // // // // //     onRefresh,
// // // // // //     getStatusColor,
// // // // // //     formatDate,
// // // // // //     formatCurrency,
// // // // // //     allBookings,
// // // // // //     stats,
// // // // // //     BASE_URL
// // // // // // }) => {
// // // // // //     const [showAddModal, setShowAddModal] = useState(false);
// // // // // //     const [showEditModal, setShowEditModal] = useState(false);
// // // // // //     const [showViewModal, setShowViewModal] = useState(false);
// // // // // //     const [selectedItem, setSelectedItem] = useState(null);
// // // // // //     const [modalType, setModalType] = useState('');

// // // // // //     const tabs = [
// // // // // //         { id: 'agents', label: 'Agents', count: stats.totalAgents, badge: stats.pendingAgents },
// // // // // //         { id: 'customers', label: 'Customers', count: stats.totalCustomers },
// // // // // //         { id: 'admins', label: 'Admins', count: stats.totalAdmins }
// // // // // //     ];

// // // // // //     const handleAdd = () => {
// // // // // //         setModalType(activeSubTab);
// // // // // //         setShowAddModal(true);
// // // // // //     };

// // // // // //     const handleEdit = (item) => {
// // // // // //         setSelectedItem(item);
// // // // // //         setModalType(activeSubTab);
// // // // // //         setShowEditModal(true);
// // // // // //     };

// // // // // //     const handleView = (item) => {
// // // // // //         setSelectedItem(item);
// // // // // //         setModalType(activeSubTab);
// // // // // //         setShowViewModal(true);
// // // // // //     };

// // // // // //     const handleDelete = async (id) => {
// // // // // //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             const token = localStorage.getItem('adminToken');
// // // // // //             let endpoint = '';

// // // // // //             switch(activeSubTab) {
// // // // // //                 case 'agents':
// // // // // //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// // // // // //                     break;
// // // // // //                 case 'customers':
// // // // // //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// // // // // //                     break;
// // // // // //                 case 'admins':
// // // // // //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// // // // // //                     break;
// // // // // //                 default:
// // // // // //                     return;
// // // // // //             }

// // // // // //             await axios.delete(endpoint, {
// // // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // // //             });

// // // // // //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
// // // // // //             onRefresh();
// // // // // //         } catch (err) {
// // // // // //             console.error('Error deleting:', err);
// // // // // //             alert('Failed to delete. Please try again.');
// // // // // //         }
// // // // // //     };

// // // // // //     const handleSave = async (formData) => {
// // // // // //         try {
// // // // // //             const token = localStorage.getItem('adminToken');
// // // // // //             let endpoint = '';
// // // // // //             let method = 'post';

// // // // // //             if (showEditModal && selectedItem) {
// // // // // //                 method = 'put';
// // // // // //                 switch(modalType) {
// // // // // //                     case 'agents':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // // // // //                         break;
// // // // // //                     case 'customers':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // // // // //                         break;
// // // // // //                     case 'admins':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // // // // //                         break;
// // // // // //                     default:
// // // // // //                         return;
// // // // // //                 }
// // // // // //             } else {
// // // // // //                 switch(modalType) {
// // // // // //                     case 'agents':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/agent/add`;
// // // // // //                         break;
// // // // // //                     case 'customers':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/customer/register`;
// // // // // //                         break;
// // // // // //                     case 'admins':
// // // // // //                         endpoint = `${BASE_URL}/api/v1/admin/add`;
// // // // // //                         break;
// // // // // //                     default:
// // // // // //                         return;
// // // // // //                 }
// // // // // //             }

// // // // // //             // Prepare headers based on content type
// // // // // //             const headers = {
// // // // // //                 'Authorization': `Bearer ${token}`
// // // // // //             };

// // // // // //             // For admin with image upload, use multipart/form-data
// // // // // //             if (modalType === 'admins' && (method === 'post' || formData instanceof FormData)) {
// // // // // //                 headers['Content-Type'] = 'multipart/form-data';
// // // // // //             } else {
// // // // // //                 headers['Content-Type'] = 'application/json';
// // // // // //                 // If it's not FormData, stringify it
// // // // // //                 if (!(formData instanceof FormData)) {
// // // // // //                     formData = JSON.stringify(formData);
// // // // // //                 }
// // // // // //             }

// // // // // //             const response = await axios({
// // // // // //                 method,
// // // // // //                 url: endpoint,
// // // // // //                 data: formData,
// // // // // //                 headers
// // // // // //             });

// // // // // //             if (response.status === 200 || response.status === 201) {
// // // // // //                 alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
// // // // // //                 setShowAddModal(false);
// // // // // //                 setShowEditModal(false);
// // // // // //                 setSelectedItem(null);
// // // // // //                 onRefresh();
// // // // // //             }
// // // // // //         } catch (err) {
// // // // // //             console.error('Error saving:', err);
// // // // // //             alert(`Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. Please try again.`);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="space-y-6">
// // // // // //             {/* Header */}
// // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // // // // //                     <div>
// // // // // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // // // // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // // // // //                     </div>
                    
// // // // // //                     <div className="flex gap-3">
// // // // // //                         <div className="relative">
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 placeholder="Search users..."
// // // // // //                                 value={searchTerm}
// // // // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // // // // //                             />
// // // // // //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // // // //                             </svg>
// // // // // //                         </div>
                        
// // // // // //                         {/* Add Button */}
// // // // // //                         <button
// // // // // //                             onClick={handleAdd}
// // // // // //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // // // //                         >
// // // // // //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // // // //                             </svg>
// // // // // //                             Add {activeSubTab.slice(0, -1)}
// // // // // //                         </button>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* Sub Tabs */}
// // // // // //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// // // // // //                     {tabs.map(tab => (
// // // // // //                         <button
// // // // // //                             key={tab.id}
// // // // // //                             onClick={() => setActiveSubTab(tab.id)}
// // // // // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// // // // // //                                 activeSubTab === tab.id
// // // // // //                                     ? 'bg-teal-600 text-white'
// // // // // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // // // // //                             }`}
// // // // // //                         >
// // // // // //                             {tab.label} ({tab.count})
// // // // // //                             {tab.badge > 0 && (
// // // // // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // // // // //                                     {tab.badge}
// // // // // //                                 </span>
// // // // // //                             )}
// // // // // //                         </button>
// // // // // //                     ))}
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* Table */}
// // // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // // //                 {activeSubTab === 'agents' && (
// // // // // //                     <AgentTable
// // // // // //                         data={agents}
// // // // // //                         searchTerm={searchTerm}
// // // // // //                         onView={handleView}
// // // // // //                         onEdit={handleEdit}
// // // // // //                         onDelete={handleDelete}
// // // // // //                         getStatusColor={getStatusColor}
// // // // // //                         formatDate={formatDate}
// // // // // //                     />
// // // // // //                 )}
// // // // // //                 {activeSubTab === 'customers' && (
// // // // // //                     <CustomerTable
// // // // // //                         data={customers}
// // // // // //                         searchTerm={searchTerm}
// // // // // //                         onView={handleView}
// // // // // //                         onEdit={handleEdit}
// // // // // //                         onDelete={handleDelete}
// // // // // //                         getStatusColor={getStatusColor}
// // // // // //                         formatDate={formatDate}
// // // // // //                         formatCurrency={formatCurrency}
// // // // // //                         allBookings={allBookings}
// // // // // //                     />
// // // // // //                 )}
// // // // // //                 {activeSubTab === 'admins' && (
// // // // // //                     <AdminTable
// // // // // //                         data={admins}
// // // // // //                         searchTerm={searchTerm}
// // // // // //                         onView={handleView}
// // // // // //                         onEdit={handleEdit}
// // // // // //                         onDelete={handleDelete}
// // // // // //                         getStatusColor={getStatusColor}
// // // // // //                         formatDate={formatDate}
// // // // // //                         BASE_URL={BASE_URL}
// // // // // //                     />
// // // // // //                 )}
// // // // // //             </div>

// // // // // //             {/* Add Modals */}
// // // // // //             {showAddModal && modalType === 'agents' && (
// // // // // //                 <AddAgentModal
// // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                 />
// // // // // //             )}
// // // // // //             {showAddModal && modalType === 'customers' && (
// // // // // //                 <AddCustomerModal
// // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                 />
// // // // // //             )}
// // // // // //             {showAddModal && modalType === 'admins' && (
// // // // // //                 <AddAdminModal
// // // // // //                     onClose={() => setShowAddModal(false)}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                     BASE_URL={BASE_URL}
// // // // // //                 />
// // // // // //             )}

// // // // // //             {/* Edit Modals */}
// // // // // //             {showEditModal && modalType === 'agents' && selectedItem && (
// // // // // //                 <EditAgentModal
// // // // // //                     agent={selectedItem}
// // // // // //                     onClose={() => {
// // // // // //                         setShowEditModal(false);
// // // // // //                         setSelectedItem(null);
// // // // // //                     }}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                 />
// // // // // //             )}
// // // // // //             {showEditModal && modalType === 'customers' && selectedItem && (
// // // // // //                 <EditCustomerModal
// // // // // //                     customer={selectedItem}
// // // // // //                     onClose={() => {
// // // // // //                         setShowEditModal(false);
// // // // // //                         setSelectedItem(null);
// // // // // //                     }}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                 />
// // // // // //             )}
// // // // // //             {showEditModal && modalType === 'admins' && selectedItem && (
// // // // // //                 <EditAdminModal
// // // // // //                     admin={selectedItem}
// // // // // //                     onClose={() => {
// // // // // //                         setShowEditModal(false);
// // // // // //                         setSelectedItem(null);
// // // // // //                     }}
// // // // // //                     onSave={(data) => handleSave(data)}
// // // // // //                     BASE_URL={BASE_URL}
// // // // // //                 />
// // // // // //             )}

// // // // // //             {/* View Details Modal */}
// // // // // //             {showViewModal && selectedItem && (
// // // // // //                 <ViewDetailsModal
// // // // // //                     item={selectedItem}
// // // // // //                     type={modalType}
// // // // // //                     onClose={() => {
// // // // // //                         setShowViewModal(false);
// // // // // //                         setSelectedItem(null);
// // // // // //                     }}
// // // // // //                     formatDate={formatDate}
// // // // // //                     formatCurrency={formatCurrency}
// // // // // //                     getStatusColor={getStatusColor}
// // // // // //                     BASE_URL={BASE_URL}
// // // // // //                 />
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default UserManagementView;



// // // // // // src/Pages/Admin/components/UserManagementView.jsx
// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import AgentTable from './tables/AgentTable';
// // // // // import CustomerTable from './tables/CustomerTable';
// // // // // import AdminTable from './tables/AdminTable';
// // // // // import AddAgentModal from './modals/AddAgentModal';
// // // // // import AddCustomerModal from './modals/AddCustomerModal';
// // // // // import AddAdminModal from './modals/AddAdminModal';
// // // // // import EditAgentModal from './modals/EditAgentModal';
// // // // // import EditCustomerModal from './modals/EditCustomerModal';
// // // // // import EditAdminModal from './modals/EditAdminModal';
// // // // // import ViewDetailsModal from './modals/ViewDetailsModal';

// // // // // const UserManagementView = ({ 
// // // // //     agents, 
// // // // //     customers, 
// // // // //     admins, 
// // // // //     activeSubTab, 
// // // // //     setActiveSubTab,
// // // // //     searchTerm,
// // // // //     setSearchTerm,
// // // // //     onRefresh,
// // // // //     getStatusColor,
// // // // //     formatDate,
// // // // //     formatCurrency,
// // // // //     allBookings,
// // // // //     stats,
// // // // //     BASE_URL
// // // // // }) => {
// // // // //     const [showAddModal, setShowAddModal] = useState(false);
// // // // //     const [showEditModal, setShowEditModal] = useState(false);
// // // // //     const [showViewModal, setShowViewModal] = useState(false);
// // // // //     const [selectedItem, setSelectedItem] = useState(null);
// // // // //     const [modalType, setModalType] = useState('');

// // // // //     const tabs = [
// // // // //         { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
// // // // //         { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
// // // // //         { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
// // // // //     ];

// // // // //     const handleAdd = () => {
// // // // //         console.log('Add clicked for:', activeSubTab);
// // // // //         setModalType(activeSubTab);
// // // // //         setShowAddModal(true);
// // // // //     };

// // // // //     const handleEdit = (item) => {
// // // // //         console.log('Edit clicked:', item);
// // // // //         setSelectedItem(item);
// // // // //         setModalType(activeSubTab);
// // // // //         setShowEditModal(true);
// // // // //     };

// // // // //     const handleView = (item) => {
// // // // //         console.log('View clicked:', item);
// // // // //         setSelectedItem(item);
// // // // //         setModalType(activeSubTab);
// // // // //         setShowViewModal(true);
// // // // //     };

// // // // //     const handleDelete = async (id) => {
// // // // //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             const token = localStorage.getItem('adminToken');
// // // // //             let endpoint = '';

// // // // //             switch(activeSubTab) {
// // // // //                 case 'agents':
// // // // //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// // // // //                     break;
// // // // //                 case 'customers':
// // // // //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// // // // //                     break;
// // // // //                 case 'admins':
// // // // //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// // // // //                     break;
// // // // //                 default:
// // // // //                     return;
// // // // //             }

// // // // //             await axios.delete(endpoint, {
// // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // //             });

// // // // //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
// // // // //             onRefresh();
// // // // //         } catch (err) {
// // // // //             console.error('Error deleting:', err);
// // // // //             alert('Failed to delete. Please try again.');
// // // // //         }
// // // // //     };

// // // // //     // const handleSave = async (formData) => {
// // // // //     //     try {
// // // // //     //         const token = localStorage.getItem('adminToken');
// // // // //     //         let endpoint = '';
// // // // //     //         let method = 'post';

// // // // //     //         if (showEditModal && selectedItem) {
// // // // //     //             method = 'put';
// // // // //     //             switch(modalType) {
// // // // //     //                 case 'agents':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // // // //     //                     break;
// // // // //     //                 case 'customers':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // // // //     //                     break;
// // // // //     //                 case 'admins':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // // // //     //                     break;
// // // // //     //                 default:
// // // // //     //                     return;
// // // // //     //             }
// // // // //     //         } else {
// // // // //     //             switch(modalType) {
// // // // //     //                 case 'agents':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/agent/add`;
// // // // //     //                     break;
// // // // //     //                 case 'customers':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/customer/add`;
// // // // //     //                     break;
// // // // //     //                 case 'admins':
// // // // //     //                     endpoint = `${BASE_URL}/api/v1/admin/add`;
// // // // //     //                     break;
// // // // //     //                 default:
// // // // //     //                     return;
// // // // //     //             }
// // // // //     //         }

// // // // //     //         console.log('Saving to endpoint:', endpoint, 'Method:', method);
// // // // //     //         console.log('FormData:', formData);

// // // // //     //         const response = await axios({
// // // // //     //             method,
// // // // //     //             url: endpoint,
// // // // //     //             data: formData,
// // // // //     //             headers: {
// // // // //     //                 'Authorization': `Bearer ${token}`,
// // // // //     //                 'Content-Type': 'multipart/form-data'
// // // // //     //             }
// // // // //     //         });

// // // // //     //         if (response.status === 200 || response.status === 201) {
// // // // //     //             alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
// // // // //     //             setShowAddModal(false);
// // // // //     //             setShowEditModal(false);
// // // // //     //             setSelectedItem(null);
// // // // //     //             onRefresh();
// // // // //     //         }
// // // // //     //     } catch (err) {
// // // // //     //         console.error('Error saving:', err);
// // // // //     //         const errorMessage = err.response?.data?.errorMessage || err.response?.data || `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}`;
// // // // //     //         alert(errorMessage);
// // // // //     //     }
// // // // //     // };

// // // // //     // In UserManagementView.jsx, update the handleSave function:

// // // // // const handleSave = async (formData) => {
// // // // //     try {
// // // // //         const token = localStorage.getItem('adminToken');
// // // // //         let endpoint = '';
// // // // //         let method = 'post';

// // // // //         if (showEditModal && selectedItem) {
// // // // //             method = 'put';
// // // // //             switch(modalType) {
// // // // //                 case 'agents':
// // // // //                     endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // // // //                     break;
// // // // //                 case 'customers':
// // // // //                     endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // // // //                     break;
// // // // //                 case 'admins':
// // // // //                     endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // // // //                     break;
// // // // //                 default:
// // // // //                     return;
// // // // //             }
// // // // //         } else {
// // // // //             switch(modalType) {
// // // // //                 case 'agents':
// // // // //                     endpoint = `${BASE_URL}/api/v1/agent/add`;
// // // // //                     break;
// // // // //                 case 'customers':
// // // // //                     endpoint = `${BASE_URL}/api/v1/customer/add`;
// // // // //                     break;
// // // // //                 case 'admins':
// // // // //                     endpoint = `${BASE_URL}/api/v1/admin/add`;
// // // // //                     break;
// // // // //                 default:
// // // // //                     return;
// // // // //             }
// // // // //         }

// // // // //         console.log('Saving to endpoint:', endpoint, 'Method:', method);
        
// // // // //         // Log FormData contents for debugging
// // // // //         if (formData instanceof FormData) {
// // // // //             console.log('FormData contents:');
// // // // //             for (let [key, value] of formData.entries()) {
// // // // //                 console.log(key, value);
// // // // //             }
// // // // //         }

// // // // //         const response = await axios({
// // // // //             method,
// // // // //             url: endpoint,
// // // // //             data: formData,
// // // // //             headers: {
// // // // //                 'Authorization': `Bearer ${token}`,
// // // // //                 'Content-Type': 'multipart/form-data'
// // // // //             }
// // // // //         });

// // // // //         console.log('Save response:', response.data);

// // // // //         if (response.status === 200 || response.status === 201) {
// // // // //             alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
            
// // // // //             // Close all modals
// // // // //             setShowAddModal(false);
// // // // //             setShowEditModal(false);
// // // // //             setSelectedItem(null);
            
// // // // //             // Immediately refresh the data
// // // // //             await onRefresh();
// // // // //         }
// // // // //     } catch (err) {
// // // // //         console.error('Error saving:', err);
        
// // // // //         // Better error message
// // // // //         let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
        
// // // // //         if (err.response) {
// // // // //             console.error('Error response:', err.response.data);
// // // // //             errorMessage += err.response.data?.message || err.response.data?.errorMessage || err.response.statusText;
// // // // //         } else if (err.request) {
// // // // //             errorMessage += 'Network error. Please check your connection.';
// // // // //         } else {
// // // // //             errorMessage += err.message;
// // // // //         }
        
// // // // //         alert(errorMessage);
// // // // //     }
// // // // // };

// // // // //     return (
// // // // //         <div className="space-y-6">
// // // // //             {/* Header */}
// // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // // // //                     <div>
// // // // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // // // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // // // //                     </div>
                    
// // // // //                     <div className="flex gap-3">
// // // // //                         <div className="relative">
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 placeholder="Search users..."
// // // // //                                 value={searchTerm}
// // // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // // // //                             />
// // // // //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // // //                             </svg>
// // // // //                         </div>
                        
// // // // //                         {/* Add Button */}
// // // // //                         <button
// // // // //                             onClick={handleAdd}
// // // // //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // // //                         >
// // // // //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // // //                             </svg>
// // // // //                             Add {activeSubTab.slice(0, -1)}
// // // // //                         </button>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Sub Tabs */}
// // // // //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// // // // //                     {tabs.map(tab => (
// // // // //                         <button
// // // // //                             key={tab.id}
// // // // //                             onClick={() => setActiveSubTab(tab.id)}
// // // // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// // // // //                                 activeSubTab === tab.id
// // // // //                                     ? 'bg-teal-600 text-white'
// // // // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // // // //                             }`}
// // // // //                         >
// // // // //                             {tab.label} ({tab.count})
// // // // //                             {tab.badge > 0 && (
// // // // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // // // //                                     {tab.badge}
// // // // //                                 </span>
// // // // //                             )}
// // // // //                         </button>
// // // // //                     ))}
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* Table */}
// // // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                 {activeSubTab === 'agents' && (
// // // // //                     <AgentTable
// // // // //                         data={agents}
// // // // //                         searchTerm={searchTerm}
// // // // //                         onView={handleView}
// // // // //                         onEdit={handleEdit}
// // // // //                         onDelete={handleDelete}
// // // // //                         getStatusColor={getStatusColor}
// // // // //                         formatDate={formatDate}
// // // // //                     />
// // // // //                 )}
// // // // //                 {activeSubTab === 'customers' && (
// // // // //                     <CustomerTable
// // // // //                         data={customers}
// // // // //                         searchTerm={searchTerm}
// // // // //                         onView={handleView}
// // // // //                         onEdit={handleEdit}
// // // // //                         onDelete={handleDelete}
// // // // //                         getStatusColor={getStatusColor}
// // // // //                         formatDate={formatDate}
// // // // //                         formatCurrency={formatCurrency}
// // // // //                         allBookings={allBookings}
// // // // //                         BASE_URL={BASE_URL}
// // // // //                     />
// // // // //                 )}
// // // // //                 {activeSubTab === 'admins' && (
// // // // //                     <AdminTable
// // // // //                         data={admins}
// // // // //                         searchTerm={searchTerm}
// // // // //                         onView={handleView}
// // // // //                         onEdit={handleEdit}
// // // // //                         onDelete={handleDelete}
// // // // //                         getStatusColor={getStatusColor}
// // // // //                         formatDate={formatDate}
// // // // //                         BASE_URL={BASE_URL}
// // // // //                     />
// // // // //                 )}
// // // // //             </div>

// // // // //             {/* Add Modals */}
// // // // //             {showAddModal && modalType === 'agents' && (
// // // // //                 <AddAgentModal
// // // // //                     onClose={() => setShowAddModal(false)}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                 />
// // // // //             )}
// // // // //             {showAddModal && modalType === 'customers' && (
// // // // //                 <AddCustomerModal
// // // // //                     onClose={() => setShowAddModal(false)}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                     BASE_URL={BASE_URL}
// // // // //                 />
// // // // //             )}
// // // // //             {showAddModal && modalType === 'admins' && (
// // // // //                 <AddAdminModal
// // // // //                     onClose={() => setShowAddModal(false)}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                     BASE_URL={BASE_URL}
// // // // //                 />
// // // // //             )}

// // // // //             {/* Edit Modals */}
// // // // //             {showEditModal && modalType === 'agents' && selectedItem && (
// // // // //                 <EditAgentModal
// // // // //                     agent={selectedItem}
// // // // //                     onClose={() => {
// // // // //                         setShowEditModal(false);
// // // // //                         setSelectedItem(null);
// // // // //                     }}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                 />
// // // // //             )}
// // // // //             {showEditModal && modalType === 'customers' && selectedItem && (
// // // // //                 <EditCustomerModal
// // // // //                     customer={selectedItem}
// // // // //                     onClose={() => {
// // // // //                         setShowEditModal(false);
// // // // //                         setSelectedItem(null);
// // // // //                     }}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                     BASE_URL={BASE_URL}
// // // // //                 />
// // // // //             )}
// // // // //             {showEditModal && modalType === 'admins' && selectedItem && (
// // // // //                 <EditAdminModal
// // // // //                     admin={selectedItem}
// // // // //                     onClose={() => {
// // // // //                         setShowEditModal(false);
// // // // //                         setSelectedItem(null);
// // // // //                     }}
// // // // //                     onSave={(data) => handleSave(data)}
// // // // //                     BASE_URL={BASE_URL}
// // // // //                 />
// // // // //             )}

// // // // //             {/* View Details Modal */}
// // // // //             {showViewModal && selectedItem && (
// // // // //                 <ViewDetailsModal
// // // // //                     item={selectedItem}
// // // // //                     type={modalType}
// // // // //                     onClose={() => {
// // // // //                         setShowViewModal(false);
// // // // //                         setSelectedItem(null);
// // // // //                     }}
// // // // //                     formatDate={formatDate}
// // // // //                     formatCurrency={formatCurrency}
// // // // //                     getStatusColor={getStatusColor}
// // // // //                     BASE_URL={BASE_URL}
// // // // //                 />
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default UserManagementView;



// // // // // src/Pages/Admin/components/UserManagementView.jsx
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import AgentTable from './tables/AgentTable';
// // // // import CustomerTable from './tables/CustomerTable';
// // // // import AdminTable from './tables/AdminTable';
// // // // import AddAgentModal from './modals/AddAgentModal';
// // // // import AddCustomerModal from './modals/AddCustomerModal';
// // // // import AddAdminModal from './modals/AddAdminModal';
// // // // import EditAgentModal from './modals/EditAgentModal';
// // // // import EditCustomerModal from './modals/EditCustomerModal';
// // // // import EditAdminModal from './modals/EditAdminModal';
// // // // import ViewDetailsModal from './modals/ViewDetailsModal';

// // // // const UserManagementView = ({ 
// // // //     agents, 
// // // //     customers, 
// // // //     admins, 
// // // //     activeSubTab, 
// // // //     setActiveSubTab,
// // // //     searchTerm,
// // // //     setSearchTerm,
// // // //     onViewDetails,
// // // //     onEdit,
// // // //     onDelete,
// // // //     onRefresh,  // Make sure this is received
// // // //     getStatusColor,
// // // //     formatDate,
// // // //     formatCurrency,
// // // //     allBookings,
// // // //     stats,
// // // //     BASE_URL
// // // // }) => {
// // // //     const [showAddModal, setShowAddModal] = useState(false);
// // // //     const [showEditModal, setShowEditModal] = useState(false);
// // // //     const [showViewModal, setShowViewModal] = useState(false);
// // // //     const [selectedItem, setSelectedItem] = useState(null);
// // // //     const [modalType, setModalType] = useState('');

// // // //     const tabs = [
// // // //         { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
// // // //         { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
// // // //         { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
// // // //     ];

// // // //     const handleAdd = () => {
// // // //         console.log('Add clicked for:', activeSubTab);
// // // //         setModalType(activeSubTab);
// // // //         setShowAddModal(true);
// // // //     };

// // // //     const handleEdit = (item) => {
// // // //         console.log('Edit clicked:', item);
// // // //         setSelectedItem(item);
// // // //         setModalType(activeSubTab);
// // // //         setShowEditModal(true);
// // // //     };

// // // //     const handleView = (item) => {
// // // //         console.log('View clicked:', item);
// // // //         setSelectedItem(item);
// // // //         setModalType(activeSubTab);
// // // //         setShowViewModal(true);
// // // //     };

// // // //     const handleDelete = async (id) => {
// // // //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// // // //             return;
// // // //         }

// // // //         try {
// // // //             const token = localStorage.getItem('adminToken');
// // // //             let endpoint = '';

// // // //             switch(activeSubTab) {
// // // //                 case 'agents':
// // // //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// // // //                     break;
// // // //                 case 'customers':
// // // //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// // // //                     break;
// // // //                 case 'admins':
// // // //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// // // //                     break;
// // // //                 default:
// // // //                     return;
// // // //             }

// // // //             await axios.delete(endpoint, {
// // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // //             });

// // // //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
            
// // // //             // Call onRefresh if it exists
// // // //             if (onRefresh && typeof onRefresh === 'function') {
// // // //                 await onRefresh();
// // // //             } else {
// // // //                 console.warn('onRefresh is not a function or not provided');
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error deleting:', err);
// // // //             alert('Failed to delete. Please try again.');
// // // //         }
// // // //     };

// // // // const handleSave = async (formData) => {
// // // //     try {
// // // //         const token = localStorage.getItem('adminToken');
// // // //         let endpoint = '';
// // // //         let method = 'post';
// // // //         let headers = {
// // // //             'Authorization': `Bearer ${token}`,
// // // //             'Content-Type': 'application/json'
// // // //         };

// // // //         if (showEditModal && selectedItem) {
// // // //             method = 'put';
// // // //             switch(modalType) {
// // // //                 case 'agents':
// // // //                     endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // // //                     break;
// // // //                 case 'customers':
// // // //                     endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // // //                     break;
// // // //                 case 'admins':
// // // //                     endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // // //                     break;
// // // //                 default:
// // // //                     return;
// // // //             }
// // // //         } else {
// // // //             switch(modalType) {
// // // //                 case 'agents':
// // // //                     endpoint = `${BASE_URL}/api/v1/agent/add`;
// // // //                     break;
// // // //                 case 'customers':
// // // //                     endpoint = `${BASE_URL}/api/v1/customer/add`;
// // // //                     break;
// // // //                 case 'admins':
// // // //                     endpoint = `${BASE_URL}/api/v1/admin/add`;
// // // //                     break;
// // // //                 default:
// // // //                     return;
// // // //             }
// // // //         }

// // // //         console.log('Saving to endpoint:', endpoint, 'Method:', method);
// // // //         console.log('FormData type:', typeof formData);
// // // //         console.log('FormData content:', formData);

// // // //         // For agents, we always send JSON
// // // //         let dataToSend = formData;
// // // //         if (typeof formData === 'string') {
// // // //             dataToSend = JSON.parse(formData);
// // // //         }

// // // //         const response = await axios({
// // // //             method,
// // // //             url: endpoint,
// // // //             data: dataToSend,
// // // //             headers
// // // //         });

// // // //         console.log('Save response:', response.data);

// // // //         if (response.status === 200 || response.status === 201) {
// // // //             alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
            
// // // //             setShowAddModal(false);
// // // //             setShowEditModal(false);
// // // //             setSelectedItem(null);
            
// // // //             if (onRefresh && typeof onRefresh === 'function') {
// // // //                 await onRefresh();
// // // //             }
// // // //         }
// // // //     } catch (err) {
// // // //         console.error('Error saving:', err);
        
// // // //         let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
        
// // // //         if (err.response) {
// // // //             console.error('Error response data:', err.response.data);
// // // //             console.error('Error response status:', err.response.status);
            
// // // //             if (err.response.data) {
// // // //                 if (typeof err.response.data === 'string') {
// // // //                     errorMessage += err.response.data;
// // // //                 } else if (err.response.data.message) {
// // // //                     errorMessage += err.response.data.message;
// // // //                 } else if (err.response.data.error) {
// // // //                     errorMessage += err.response.data.error;
// // // //                 } else {
// // // //                     errorMessage += `Server error (${err.response.status})`;
// // // //                 }
// // // //             } else {
// // // //                 errorMessage += `Server error (${err.response.status})`;
// // // //             }
// // // //         } else if (err.request) {
// // // //             errorMessage += 'No response from server. Please check if the backend is running.';
// // // //             console.error('No response received:', err.request);
// // // //         } else {
// // // //             errorMessage += err.message;
// // // //         }
        
// // // //         alert(errorMessage);
// // // //     }
// // // // };

// // // //     return (
// // // //         <div className="space-y-6">
// // // //             {/* Header */}
// // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // // //                     <div>
// // // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // // //                     </div>
                    
// // // //                     <div className="flex gap-3">
// // // //                         <div className="relative">
// // // //                             <input
// // // //                                 type="text"
// // // //                                 placeholder="Search users..."
// // // //                                 value={searchTerm}
// // // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // // //                             />
// // // //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // //                             </svg>
// // // //                         </div>
                        
// // // //                         {/* Add Button */}
// // // //                         <button
// // // //                             onClick={handleAdd}
// // // //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // //                         >
// // // //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // //                             </svg>
// // // //                             Add {activeSubTab.slice(0, -1)}
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Sub Tabs */}
// // // //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// // // //                     {tabs.map(tab => (
// // // //                         <button
// // // //                             key={tab.id}
// // // //                             onClick={() => setActiveSubTab(tab.id)}
// // // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// // // //                                 activeSubTab === tab.id
// // // //                                     ? 'bg-teal-600 text-white'
// // // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // // //                             }`}
// // // //                         >
// // // //                             {tab.label} ({tab.count})
// // // //                             {tab.badge > 0 && (
// // // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // // //                                     {tab.badge}
// // // //                                 </span>
// // // //                             )}
// // // //                         </button>
// // // //                     ))}
// // // //                 </div>
// // // //             </div>

// // // //             {/* Table */}
// // // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                 {activeSubTab === 'agents' && (
// // // //                     <AgentTable
// // // //                         data={agents}
// // // //                         searchTerm={searchTerm}
// // // //                         onView={handleView}
// // // //                         onEdit={handleEdit}
// // // //                         onDelete={handleDelete}
// // // //                         getStatusColor={getStatusColor}
// // // //                         formatDate={formatDate}
// // // //                     />
// // // //                 )}
// // // //                 {activeSubTab === 'customers' && (
// // // //                     <CustomerTable
// // // //                         data={customers}
// // // //                         searchTerm={searchTerm}
// // // //                         onView={handleView}
// // // //                         onEdit={handleEdit}
// // // //                         onDelete={handleDelete}
// // // //                         getStatusColor={getStatusColor}
// // // //                         formatDate={formatDate}
// // // //                         formatCurrency={formatCurrency}
// // // //                         allBookings={allBookings}
// // // //                     />
// // // //                 )}
// // // //                 {activeSubTab === 'admins' && (
// // // //                     <AdminTable
// // // //                         data={admins}
// // // //                         searchTerm={searchTerm}
// // // //                         onView={handleView}
// // // //                         onEdit={handleEdit}
// // // //                         onDelete={handleDelete}
// // // //                         getStatusColor={getStatusColor}
// // // //                         formatDate={formatDate}
// // // //                         BASE_URL={BASE_URL}
// // // //                     />
// // // //                 )}
// // // //             </div>

// // // //             {/* Add Modals */}
// // // //             {showAddModal && modalType === 'agents' && (
// // // //                 <AddAgentModal
// // // //                     onClose={() => setShowAddModal(false)}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                 />
// // // //             )}
// // // //             {showAddModal && modalType === 'customers' && (
// // // //                 <AddCustomerModal
// // // //                     onClose={() => setShowAddModal(false)}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                     BASE_URL={BASE_URL}
// // // //                 />
// // // //             )}
// // // //             {showAddModal && modalType === 'admins' && (
// // // //                 <AddAdminModal
// // // //                     onClose={() => setShowAddModal(false)}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                     BASE_URL={BASE_URL}
// // // //                 />
// // // //             )}

// // // //             {/* Edit Modals */}
// // // //             {showEditModal && modalType === 'agents' && selectedItem && (
// // // //                 <EditAgentModal
// // // //                     agent={selectedItem}
// // // //                     onClose={() => {
// // // //                         setShowEditModal(false);
// // // //                         setSelectedItem(null);
// // // //                     }}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                 />
// // // //             )}
// // // //             {showEditModal && modalType === 'customers' && selectedItem && (
// // // //                 <EditCustomerModal
// // // //                     customer={selectedItem}
// // // //                     onClose={() => {
// // // //                         setShowEditModal(false);
// // // //                         setSelectedItem(null);
// // // //                     }}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                     BASE_URL={BASE_URL}
// // // //                 />
// // // //             )}
// // // //             {showEditModal && modalType === 'admins' && selectedItem && (
// // // //                 <EditAdminModal
// // // //                     admin={selectedItem}
// // // //                     onClose={() => {
// // // //                         setShowEditModal(false);
// // // //                         setSelectedItem(null);
// // // //                     }}
// // // //                     onSave={(data) => handleSave(data)}
// // // //                     BASE_URL={BASE_URL}
// // // //                 />
// // // //             )}

// // // //             {/* View Details Modal */}
// // // //             {showViewModal && selectedItem && (
// // // //                 <ViewDetailsModal
// // // //                     item={selectedItem}
// // // //                     type={modalType}
// // // //                     onClose={() => {
// // // //                         setShowViewModal(false);
// // // //                         setSelectedItem(null);
// // // //                     }}
// // // //                     formatDate={formatDate}
// // // //                     formatCurrency={formatCurrency}
// // // //                     getStatusColor={getStatusColor}
// // // //                     BASE_URL={BASE_URL}
// // // //                 />
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default UserManagementView;



// // // // src/Pages/Admin/components/UserManagementView.jsx
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import AgentTable from './tables/AgentTable';
// // // import CustomerTable from './tables/CustomerTable';
// // // import AdminTable from './tables/AdminTable';
// // // import AddAgentModal from './modals/AddAgentModal';
// // // import AddCustomerModal from './modals/AddCustomerModal';
// // // import AddAdminModal from './modals/AddAdminModal';
// // // import EditAgentModal from './modals/EditAgentModal';
// // // import EditCustomerModal from './modals/EditCustomerModal';
// // // import EditAdminModal from './modals/EditAdminModal';
// // // import ViewDetailsModal from './modals/ViewDetailsModal';

// // // const UserManagementView = ({ 
// // //     agents, 
// // //     customers, 
// // //     admins, 
// // //     activeSubTab, 
// // //     setActiveSubTab,
// // //     searchTerm,
// // //     setSearchTerm,
// // //     onViewDetails,
// // //     onEdit,
// // //     onDelete,
// // //     onRefresh,
// // //     getStatusColor,
// // //     formatDate,
// // //     formatCurrency,
// // //     allBookings,
// // //     stats,
// // //     BASE_URL
// // // }) => {
// // //     const [showAddModal, setShowAddModal] = useState(false);
// // //     const [showEditModal, setShowEditModal] = useState(false);
// // //     const [showViewModal, setShowViewModal] = useState(false);
// // //     const [selectedItem, setSelectedItem] = useState(null);
// // //     const [modalType, setModalType] = useState('');

// // //     const tabs = [
// // //         { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
// // //         { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
// // //         { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
// // //     ];

// // //     const handleAdd = () => {
// // //         console.log('Add clicked for:', activeSubTab);
// // //         setModalType(activeSubTab);
// // //         setShowAddModal(true);
// // //     };

// // //     const handleEdit = (item) => {
// // //         console.log('Edit clicked:', item);
// // //         setSelectedItem(item);
// // //         setModalType(activeSubTab);
// // //         setShowEditModal(true);
// // //     };

// // //     const handleView = (item) => {
// // //         console.log('View clicked:', item);
// // //         setSelectedItem(item);
// // //         setModalType(activeSubTab);
// // //         setShowViewModal(true);
// // //     };

// // //     const handleDelete = async (id) => {
// // //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// // //             return;
// // //         }

// // //         try {
// // //             const token = localStorage.getItem('adminToken');
// // //             let endpoint = '';

// // //             switch(activeSubTab) {
// // //                 case 'agents':
// // //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// // //                     break;
// // //                 case 'customers':
// // //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// // //                     break;
// // //                 case 'admins':
// // //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// // //                     break;
// // //                 default:
// // //                     return;
// // //             }

// // //             await axios.delete(endpoint, {
// // //                 headers: { 'Authorization': `Bearer ${token}` }
// // //             });

// // //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
            
// // //             if (onRefresh && typeof onRefresh === 'function') {
// // //                 await onRefresh();
// // //             }
// // //         } catch (err) {
// // //             console.error('Error deleting:', err);
// // //             alert('Failed to delete. Please try again.');
// // //         }
// // //     };

// // //     // const handleSave = async (formData) => {
// // //     //     try {
// // //     //         const token = localStorage.getItem('adminToken');
// // //     //         let endpoint = '';
// // //     //         let method = 'post';
// // //     //         let headers = {
// // //     //             'Authorization': `Bearer ${token}`
// // //     //         };

// // //     //         if (showEditModal && selectedItem) {
// // //     //             method = 'put';
// // //     //             switch(modalType) {
// // //     //                 case 'agents':
// // //     //                     endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // //     //                     headers['Content-Type'] = 'application/json';
// // //     //                     break;
// // //     //                 case 'customers':
// // //     //                     endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // //     //                     headers['Content-Type'] = 'multipart/form-data';
// // //     //                     break;
// // //     //                 case 'admins':
// // //     //                     endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // //     //                     headers['Content-Type'] = 'multipart/form-data';
// // //     //                     break;
// // //     //                 default:
// // //     //                     return;
// // //     //             }
// // //     //         } else {
// // //     //             switch(modalType) {
// // //     //                 case 'agents':
// // //     //                     endpoint = `${BASE_URL}/api/v1/agent/add`;
// // //     //                     headers['Content-Type'] = 'application/json';
// // //     //                     break;
// // //     //                 case 'customers':
// // //     //                     endpoint = `${BASE_URL}/api/v1/customer/add`;
// // //     //                     headers['Content-Type'] = 'multipart/form-data';
// // //     //                     break;
// // //     //                 case 'admins':
// // //     //                     endpoint = `${BASE_URL}/api/v1/admin/add`;
// // //     //                     headers['Content-Type'] = 'multipart/form-data';
// // //     //                     break;
// // //     //                 default:
// // //     //                     return;
// // //     //             }
// // //     //         }

// // //     //         console.log('Saving to endpoint:', endpoint, 'Method:', method);
// // //     //         console.log('Content-Type:', headers['Content-Type']);
            
// // //     //         // Log FormData contents for debugging
// // //     //         if (formData instanceof FormData) {
// // //     //             console.log('FormData contents:');
// // //     //             for (let [key, value] of formData.entries()) {
// // //     //                 console.log(key, value instanceof File ? `File: ${value.name} (${value.type})` : value);
// // //     //             }
// // //     //         } else {
// // //     //             console.log('Data:', formData);
// // //     //         }

// // //     //         const response = await axios({
// // //     //             method,
// // //     //             url: endpoint,
// // //     //             data: formData,
// // //     //             headers
// // //     //         });

// // //     //         console.log('Save response:', response.data);

// // //     //         if (response.status === 200 || response.status === 201) {
// // //     //             alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
                
// // //     //             setShowAddModal(false);
// // //     //             setShowEditModal(false);
// // //     //             setSelectedItem(null);
                
// // //     //             if (onRefresh && typeof onRefresh === 'function') {
// // //     //                 await onRefresh();
// // //     //             }
// // //     //         }
// // //     //     } catch (err) {
// // //     //         console.error('Error saving:', err);
            
// // //     //         let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
            
// // //     //         if (err.response) {
// // //     //             console.error('Error response data:', err.response.data);
// // //     //             console.error('Error response status:', err.response.status);
                
// // //     //             if (err.response.data) {
// // //     //                 if (typeof err.response.data === 'string') {
// // //     //                     errorMessage += err.response.data;
// // //     //                 } else if (err.response.data.message) {
// // //     //                     errorMessage += err.response.data.message;
// // //     //                 } else if (err.response.data.error) {
// // //     //                     errorMessage += err.response.data.error;
// // //     //                 } else if (err.response.data.errorMessage) {
// // //     //                     errorMessage += err.response.data.errorMessage;
// // //     //                 } else {
// // //     //                     errorMessage += `Server error (${err.response.status})`;
// // //     //                 }
// // //     //             } else {
// // //     //                 errorMessage += `Server error (${err.response.status})`;
// // //     //             }
// // //     //         } else if (err.request) {
// // //     //             errorMessage += 'No response from server. Please check if the backend is running.';
// // //     //             console.error('No response received:', err.request);
// // //     //         } else {
// // //     //             errorMessage += err.message;
// // //     //         }
            
// // //     //         alert(errorMessage);
// // //     //     }
// // //     // };

// // //     // In UserManagementView.jsx, update the handleSave function:

// // // const handleSave = async (formData) => {
// // //     try {
// // //         const token = localStorage.getItem('adminToken');
// // //         let endpoint = '';
// // //         let method = 'post';
// // //         let headers = {
// // //             'Authorization': `Bearer ${token}`
// // //         };

// // //         if (showEditModal && selectedItem) {
// // //             method = 'put';
// // //             switch(modalType) {
// // //                 case 'agents':
// // //                     endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// // //                     headers['Content-Type'] = 'application/json';
// // //                     break;
// // //                 case 'customers':
// // //                     endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// // //                     headers['Content-Type'] = 'multipart/form-data';
// // //                     break;
// // //                 case 'admins':
// // //                     endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// // //                     headers['Content-Type'] = 'multipart/form-data';
// // //                     break;
// // //                 default:
// // //                     return;
// // //             }
// // //         } else {
// // //             switch(modalType) {
// // //                 case 'agents':
// // //                     endpoint = `${BASE_URL}/api/v1/agent/add`;
// // //                     headers['Content-Type'] = 'application/json';
// // //                     break;
// // //                 case 'customers':
// // //                     endpoint = `${BASE_URL}/api/v1/customer/add`;
// // //                     headers['Content-Type'] = 'multipart/form-data';
// // //                     break;
// // //                 case 'admins':
// // //                     endpoint = `${BASE_URL}/api/v1/admin/add`;
// // //                     headers['Content-Type'] = 'multipart/form-data';
// // //                     break;
// // //                 default:
// // //                     return;
// // //             }
// // //         }

// // //         console.log('Saving to endpoint:', endpoint, 'Method:', method);
// // //         console.log('Content-Type:', headers['Content-Type']);
        
// // //         // Log FormData contents for debugging
// // //         if (formData instanceof FormData) {
// // //             console.log('FormData contents:');
// // //             for (let [key, value] of formData.entries()) {
// // //                 console.log(key, value instanceof File ? `File: ${value.name}` : value);
// // //             }
// // //         } else {
// // //             console.log('Data:', formData);
// // //         }

// // //         const response = await axios({
// // //             method,
// // //             url: endpoint,
// // //             data: formData,
// // //             headers
// // //         });

// // //         console.log('Save response:', response.data);

// // //         if (response.status === 200 || response.status === 201) {
// // //             alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
            
// // //             setShowAddModal(false);
// // //             setShowEditModal(false);
// // //             setSelectedItem(null);
            
// // //             if (onRefresh && typeof onRefresh === 'function') {
// // //                 await onRefresh();
// // //             }
// // //         }
// // //     } catch (err) {
// // //         console.error('Error saving:', err);
        
// // //         let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
        
// // //         if (err.response) {
// // //             console.error('Error response status:', err.response.status);
// // //             console.error('Error response data:', err.response.data);
// // //             console.error('Error response headers:', err.response.headers);
            
// // //             if (err.response.data) {
// // //                 if (typeof err.response.data === 'string') {
// // //                     errorMessage += err.response.data;
// // //                 } else if (err.response.data.message) {
// // //                     errorMessage += err.response.data.message;
// // //                 } else if (err.response.data.error) {
// // //                     errorMessage += err.response.data.error;
// // //                 } else if (err.response.data.errorMessage) {
// // //                     errorMessage += err.response.data.errorMessage;
// // //                 } else {
// // //                     errorMessage += JSON.stringify(err.response.data);
// // //                 }
// // //             } else {
// // //                 errorMessage += `Server error (${err.response.status})`;
// // //             }
// // //         } else if (err.request) {
// // //             errorMessage += 'No response from server. Please check if the backend is running.';
// // //             console.error('No response received:', err.request);
// // //         } else {
// // //             errorMessage += err.message;
// // //         }
        
// // //         alert(errorMessage);
// // //     }
// // // };

// // //     return (
// // //         <div className="space-y-6">
// // //             {/* Header */}
// // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //                     <div>
// // //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// // //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// // //                     </div>
                    
// // //                     <div className="flex gap-3">
// // //                         <div className="relative">
// // //                             <input
// // //                                 type="text"
// // //                                 placeholder="Search users..."
// // //                                 value={searchTerm}
// // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// // //                             />
// // //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // //                             </svg>
// // //                         </div>
                        
// // //                         {/* Add Button */}
// // //                         <button
// // //                             onClick={handleAdd}
// // //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // //                         >
// // //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // //                             </svg>
// // //                             Add {activeSubTab.slice(0, -1)}
// // //                         </button>
// // //                     </div>
// // //                 </div>

// // //                 {/* Sub Tabs */}
// // //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// // //                     {tabs.map(tab => (
// // //                         <button
// // //                             key={tab.id}
// // //                             onClick={() => setActiveSubTab(tab.id)}
// // //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// // //                                 activeSubTab === tab.id
// // //                                     ? 'bg-teal-600 text-white'
// // //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // //                             }`}
// // //                         >
// // //                             {tab.label} ({tab.count})
// // //                             {tab.badge > 0 && (
// // //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // //                                     {tab.badge}
// // //                                 </span>
// // //                             )}
// // //                         </button>
// // //                     ))}
// // //                 </div>
// // //             </div>

// // //             {/* Table */}
// // //             <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                 {activeSubTab === 'agents' && (
// // //                     <AgentTable
// // //                         data={agents}
// // //                         searchTerm={searchTerm}
// // //                         onView={handleView}
// // //                         onEdit={handleEdit}
// // //                         onDelete={handleDelete}
// // //                         getStatusColor={getStatusColor}
// // //                         formatDate={formatDate}
// // //                     />
// // //                 )}
// // //                 {activeSubTab === 'customers' && (
// // //                     <CustomerTable
// // //                         data={customers}
// // //                         searchTerm={searchTerm}
// // //                         onView={handleView}
// // //                         onEdit={handleEdit}
// // //                         onDelete={handleDelete}
// // //                         getStatusColor={getStatusColor}
// // //                         formatDate={formatDate}
// // //                         formatCurrency={formatCurrency}
// // //                         allBookings={allBookings}
// // //                     />
// // //                 )}
// // //                 {activeSubTab === 'admins' && (
// // //                     <AdminTable
// // //                         data={admins}
// // //                         searchTerm={searchTerm}
// // //                         onView={handleView}
// // //                         onEdit={handleEdit}
// // //                         onDelete={handleDelete}
// // //                         getStatusColor={getStatusColor}
// // //                         formatDate={formatDate}
// // //                         BASE_URL={BASE_URL}
// // //                     />
// // //                 )}
// // //             </div>

// // //             {/* Add Modals */}
// // //             {showAddModal && modalType === 'agents' && (
// // //                 <AddAgentModal
// // //                     onClose={() => setShowAddModal(false)}
// // //                     onSave={(data) => handleSave(data)}
// // //                 />
// // //             )}
// // //             {showAddModal && modalType === 'customers' && (
// // //                 <AddCustomerModal
// // //                     onClose={() => setShowAddModal(false)}
// // //                     onSave={(data) => handleSave(data)}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}
// // //             {showAddModal && modalType === 'admins' && (
// // //                 <AddAdminModal
// // //                     onClose={() => setShowAddModal(false)}
// // //                     onSave={(data) => handleSave(data)}
// // //                 />
// // //             )}

// // //             {/* Edit Modals */}
// // //             {showEditModal && modalType === 'agents' && selectedItem && (
// // //                 <EditAgentModal
// // //                     agent={selectedItem}
// // //                     onClose={() => {
// // //                         setShowEditModal(false);
// // //                         setSelectedItem(null);
// // //                     }}
// // //                     onSave={(data) => handleSave(data)}
// // //                 />
// // //             )}
// // //             {showEditModal && modalType === 'customers' && selectedItem && (
// // //                 <EditCustomerModal
// // //                     customer={selectedItem}
// // //                     onClose={() => {
// // //                         setShowEditModal(false);
// // //                         setSelectedItem(null);
// // //                     }}
// // //                     onSave={(data) => handleSave(data)}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}
// // //             {showEditModal && modalType === 'admins' && selectedItem && (
// // //                 <EditAdminModal
// // //                     admin={selectedItem}
// // //                     onClose={() => {
// // //                         setShowEditModal(false);
// // //                         setSelectedItem(null);
// // //                     }}
// // //                     onSave={(data) => handleSave(data)}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}

// // //             {/* View Details Modal */}
// // //             {showViewModal && selectedItem && (
// // //                 <ViewDetailsModal
// // //                     item={selectedItem}
// // //                     type={modalType}
// // //                     onClose={() => {
// // //                         setShowViewModal(false);
// // //                         setSelectedItem(null);
// // //                     }}
// // //                     formatDate={formatDate}
// // //                     formatCurrency={formatCurrency}
// // //                     getStatusColor={getStatusColor}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default UserManagementView;



// // // src/Pages/Admin/components/UserManagementView.jsx
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import AgentTable from './tables/AgentTable';
// // import CustomerTable from './tables/CustomerTable';
// // import AdminTable from './tables/AdminTable';
// // import AddAgentModal from './modals/AddAgentModal';
// // import AddCustomerModal from './modals/AddCustomerModal';
// // import AddAdminModal from './modals/AddAdminModal';
// // import EditAgentModal from './modals/EditAgentModal';
// // import EditCustomerModal from './modals/EditCustomerModal';
// // import EditAdminModal from './modals/EditAdminModal';
// // import ViewDetailsModal from './modals/ViewDetailsModal';

// // const UserManagementView = ({ 
// //     agents, 
// //     customers, 
// //     admins, 
// //     activeSubTab, 
// //     setActiveSubTab,
// //     searchTerm,
// //     setSearchTerm,
// //     onRefresh,
// //     getStatusColor,
// //     formatDate,
// //     formatCurrency,
// //     allBookings,
// //     stats,
// //     BASE_URL
// //     // Removed unused props: onViewDetails, onEdit, onDelete
// // }) => {
// //     const [showAddModal, setShowAddModal] = useState(false);
// //     const [showEditModal, setShowEditModal] = useState(false);
// //     const [showViewModal, setShowViewModal] = useState(false);
// //     const [selectedItem, setSelectedItem] = useState(null);
// //     const [modalType, setModalType] = useState('');

// //     const tabs = [
// //         { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
// //         { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
// //         { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
// //     ];

// //     const handleAdd = () => {
// //         console.log('Add clicked for:', activeSubTab);
// //         setModalType(activeSubTab);
// //         setShowAddModal(true);
// //     };

// //     const handleEdit = (item) => {
// //         console.log('Edit clicked:', item);
// //         setSelectedItem(item);
// //         setModalType(activeSubTab);
// //         setShowEditModal(true);
// //     };

// //     const handleView = (item) => {
// //         console.log('View clicked:', item);
// //         setSelectedItem(item);
// //         setModalType(activeSubTab);
// //         setShowViewModal(true);
// //     };

// //     const handleDelete = async (id) => {
// //         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
// //             return;
// //         }

// //         try {
// //             const token = localStorage.getItem('adminToken');
// //             let endpoint = '';

// //             switch(activeSubTab) {
// //                 case 'agents':
// //                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
// //                     break;
// //                 case 'customers':
// //                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
// //                     break;
// //                 case 'admins':
// //                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
// //                     break;
// //                 default:
// //                     return;
// //             }

// //             await axios.delete(endpoint, {
// //                 headers: { 'Authorization': `Bearer ${token}` }
// //             });

// //             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
            
// //             if (onRefresh && typeof onRefresh === 'function') {
// //                 await onRefresh();
// //             }
// //         } catch (err) {
// //             console.error('Error deleting:', err);
// //             alert('Failed to delete. Please try again.');
// //         }
// //     };

// //     const handleSave = async (formData) => {
// //         try {
// //             const token = localStorage.getItem('adminToken');
// //             let endpoint = '';
// //             let method = 'post';
// //             let headers = {
// //                 'Authorization': `Bearer ${token}`
// //             };

// //             if (showEditModal && selectedItem) {
// //                 method = 'put';
// //                 switch(modalType) {
// //                     case 'agents':
// //                         endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
// //                         headers['Content-Type'] = 'application/json';
// //                         break;
// //                     case 'customers':
// //                         endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
// //                         headers['Content-Type'] = 'multipart/form-data';
// //                         break;
// //                     case 'admins':
// //                         endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
// //                         headers['Content-Type'] = 'multipart/form-data';
// //                         break;
// //                     default:
// //                         return;
// //                 }
// //             } else {
// //                 switch(modalType) {
// //                     case 'agents':
// //                         endpoint = `${BASE_URL}/api/v1/agent/add`;
// //                         headers['Content-Type'] = 'application/json';
// //                         break;
// //                     case 'customers':
// //                         endpoint = `${BASE_URL}/api/v1/customer/add`;
// //                         headers['Content-Type'] = 'multipart/form-data';
// //                         break;
// //                     case 'admins':
// //                         endpoint = `${BASE_URL}/api/v1/admin/add`;
// //                         headers['Content-Type'] = 'multipart/form-data';
// //                         break;
// //                     default:
// //                         return;
// //                 }
// //             }

// //             console.log('Saving to endpoint:', endpoint, 'Method:', method);
// //             console.log('Content-Type:', headers['Content-Type']);
            
// //             // Log FormData contents for debugging
// //             if (formData instanceof FormData) {
// //                 console.log('FormData contents:');
// //                 for (let [key, value] of formData.entries()) {
// //                     console.log(key, value instanceof File ? `File: ${value.name}` : value);
// //                 }
// //             } else {
// //                 console.log('Data:', formData);
// //             }

// //             const response = await axios({
// //                 method,
// //                 url: endpoint,
// //                 data: formData,
// //                 headers
// //             });

// //             console.log('Save response:', response.data);

// //             if (response.status === 200 || response.status === 201) {
// //                 alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
                
// //                 setShowAddModal(false);
// //                 setShowEditModal(false);
// //                 setSelectedItem(null);
                
// //                 if (onRefresh && typeof onRefresh === 'function') {
// //                     await onRefresh();
// //                 }
// //             }
// //         } catch (err) {
// //             console.error('Error saving:', err);
            
// //             let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
            
// //             if (err.response) {
// //                 console.error('Error response status:', err.response.status);
// //                 console.error('Error response data:', err.response.data);
                
// //                 if (err.response.data) {
// //                     if (typeof err.response.data === 'string') {
// //                         errorMessage += err.response.data;
// //                     } else if (err.response.data.message) {
// //                         errorMessage += err.response.data.message;
// //                     } else if (err.response.data.error) {
// //                         errorMessage += err.response.data.error;
// //                     } else if (err.response.data.errorMessage) {
// //                         errorMessage += err.response.data.errorMessage;
// //                     } else {
// //                         errorMessage += JSON.stringify(err.response.data);
// //                     }
// //                 } else {
// //                     errorMessage += `Server error (${err.response.status})`;
// //                 }
// //             } else if (err.request) {
// //                 errorMessage += 'No response from server. Please check if the backend is running.';
// //                 console.error('No response received:', err.request);
// //             } else {
// //                 errorMessage += err.message;
// //             }
            
// //             alert(errorMessage);
// //         }
// //     };

// //     return (
// //         <div className="space-y-6">
// //             {/* Header */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //                     <div>
// //                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
// //                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
// //                     </div>
                    
// //                     <div className="flex gap-3">
// //                         <div className="relative">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Search users..."
// //                                 value={searchTerm}
// //                                 onChange={(e) => setSearchTerm(e.target.value)}
// //                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// //                             />
// //                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                             </svg>
// //                         </div>
                        
// //                         {/* Add Button */}
// //                         <button
// //                             onClick={handleAdd}
// //                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// //                         >
// //                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //                             </svg>
// //                             Add {activeSubTab.slice(0, -1)}
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Sub Tabs */}
// //                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
// //                     {tabs.map(tab => (
// //                         <button
// //                             key={tab.id}
// //                             onClick={() => setActiveSubTab(tab.id)}
// //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
// //                                 activeSubTab === tab.id
// //                                     ? 'bg-teal-600 text-white'
// //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                             }`}
// //                         >
// //                             {tab.label} ({tab.count})
// //                             {tab.badge > 0 && (
// //                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //                                     {tab.badge}
// //                                 </span>
// //                             )}
// //                         </button>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Table */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 {activeSubTab === 'agents' && (
// //                     <AgentTable
// //                         data={agents}
// //                         searchTerm={searchTerm}
// //                         onView={handleView}
// //                         onEdit={handleEdit}
// //                         onDelete={handleDelete}
// //                         getStatusColor={getStatusColor}
// //                     />
// //                 )}
// //                 {activeSubTab === 'customers' && (
// //                     <CustomerTable
// //                         data={customers}
// //                         searchTerm={searchTerm}
// //                         onView={handleView}
// //                         onEdit={handleEdit}
// //                         onDelete={handleDelete}
// //                         getStatusColor={getStatusColor}
// //                         formatDate={formatDate}
// //                         formatCurrency={formatCurrency}
// //                         allBookings={allBookings}
// //                     />
// //                 )}
// //                 {activeSubTab === 'admins' && (
// //                     <AdminTable
// //                         data={admins}
// //                         searchTerm={searchTerm}
// //                         onView={handleView}
// //                         onEdit={handleEdit}
// //                         onDelete={handleDelete}
// //                         getStatusColor={getStatusColor}
// //                         formatDate={formatDate}
// //                         BASE_URL={BASE_URL}
// //                     />
// //                 )}
// //             </div>

// //             {/* Add Modals */}
// //             {showAddModal && modalType === 'agents' && (
// //                 <AddAgentModal
// //                     onClose={() => setShowAddModal(false)}
// //                     onSave={(data) => handleSave(data)}
// //                 />
// //             )}
// //             {showAddModal && modalType === 'customers' && (
// //                 <AddCustomerModal
// //                     onClose={() => setShowAddModal(false)}
// //                     onSave={(data) => handleSave(data)}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}
// //             {showAddModal && modalType === 'admins' && (
// //                 <AddAdminModal
// //                     onClose={() => setShowAddModal(false)}
// //                     onSave={(data) => handleSave(data)}
// //                 />
// //             )}

// //             {/* Edit Modals */}
// //             {showEditModal && modalType === 'agents' && selectedItem && (
// //                 <EditAgentModal
// //                     agent={selectedItem}
// //                     onClose={() => {
// //                         setShowEditModal(false);
// //                         setSelectedItem(null);
// //                     }}
// //                     onSave={(data) => handleSave(data)}
// //                 />
// //             )}
// //             {showEditModal && modalType === 'customers' && selectedItem && (
// //                 <EditCustomerModal
// //                     customer={selectedItem}
// //                     onClose={() => {
// //                         setShowEditModal(false);
// //                         setSelectedItem(null);
// //                     }}
// //                     onSave={(data) => handleSave(data)}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}
// //             {showEditModal && modalType === 'admins' && selectedItem && (
// //                 <EditAdminModal
// //                     admin={selectedItem}
// //                     onClose={() => {
// //                         setShowEditModal(false);
// //                         setSelectedItem(null);
// //                     }}
// //                     onSave={(data) => handleSave(data)}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}

// //             {/* View Details Modal */}
// //             {showViewModal && selectedItem && (
// //                 <ViewDetailsModal
// //                     item={selectedItem}
// //                     type={modalType}
// //                     onClose={() => {
// //                         setShowViewModal(false);
// //                         setSelectedItem(null);
// //                     }}
// //                     formatDate={formatDate}
// //                     formatCurrency={formatCurrency}
// //                     getStatusColor={getStatusColor}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // export default UserManagementView;



// // src/Pages/Admin/components/UserManagementView.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import AgentTable from './tables/AgentTable';
// import CustomerTable from './tables/CustomerTable';
// import AdminTable from './tables/AdminTable';
// import AddAgentModal from './modals/AddAgentModal';
// import AddCustomerModal from './modals/AddCustomerModal';
// import AddAdminModal from './modals/AddAdminModal';
// import EditAgentModal from './modals/EditAgentModal';
// import EditCustomerModal from './modals/EditCustomerModal';
// import EditAdminModal from './modals/EditAdminModal';
// import ViewDetailsModal from './modals/ViewDetailsModal';

// const UserManagementView = ({ 
//     agents, 
//     customers, 
//     admins, 
//     activeSubTab, 
//     setActiveSubTab,
//     searchTerm,
//     setSearchTerm,
//     onRefresh,
//     getStatusColor,
//     formatDate,
//     formatCurrency,
//     allBookings,
//     stats,
//     BASE_URL
// }) => {
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showViewModal, setShowViewModal] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [modalType, setModalType] = useState('');

//     const tabs = [
//         { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
//         { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
//         { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
//     ];

//     const handleAdd = () => {
//         console.log('Add clicked for:', activeSubTab);
//         setModalType(activeSubTab);
//         setShowAddModal(true);
//     };

//     const handleEdit = (item) => {
//         console.log('Edit clicked:', item);
//         setSelectedItem(item);
//         setModalType(activeSubTab);
//         setShowEditModal(true);
//     };

//     const handleView = (item) => {
//         console.log('View clicked:', item);
//         setSelectedItem(item);
//         setModalType(activeSubTab);
//         setShowViewModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
//             return;
//         }

//         try {
//             const token = localStorage.getItem('adminToken');
//             let endpoint = '';

//             switch(activeSubTab) {
//                 case 'agents':
//                     endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
//                     break;
//                 case 'customers':
//                     endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
//                     break;
//                 case 'admins':
//                     endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
//                     break;
//                 default:
//                     return;
//             }

//             await axios.delete(endpoint, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
            
//             if (onRefresh && typeof onRefresh === 'function') {
//                 await onRefresh();
//             }
//         } catch (err) {
//             console.error('Error deleting:', err);
//             alert('Failed to delete. Please try again.');
//         }
//     };

//     const handleSave = async (formData) => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             let endpoint = '';
//             let method = 'post';
//             let headers = {
//                 'Authorization': `Bearer ${token}`
//             };

//             if (showEditModal && selectedItem) {
//                 method = 'put';
//                 switch(modalType) {
//                     case 'agents':
//                         endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
//                         headers['Content-Type'] = 'application/json';
//                         break;
//                     case 'customers':
//                         endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
//                         headers['Content-Type'] = 'multipart/form-data';
//                         break;
//                     case 'admins':
//                         endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
//                         headers['Content-Type'] = 'multipart/form-data';
//                         break;
//                     default:
//                         return;
//                 }
//             } else {
//                 switch(modalType) {
//                     case 'agents':
//                         endpoint = `${BASE_URL}/api/v1/agent/add`;
//                         headers['Content-Type'] = 'application/json';
//                         break;
//                     case 'customers':
//                         endpoint = `${BASE_URL}/api/v1/customer/add`;
//                         headers['Content-Type'] = 'multipart/form-data';
//                         break;
//                     case 'admins':
//                         endpoint = `${BASE_URL}/api/v1/admin/add`;
//                         headers['Content-Type'] = 'multipart/form-data';
//                         break;
//                     default:
//                         return;
//                 }
//             }

//             console.log('Saving to endpoint:', endpoint, 'Method:', method);
//             console.log('Content-Type:', headers['Content-Type']);
            
//             // Log FormData contents for debugging
//             if (formData instanceof FormData) {
//                 console.log('FormData contents:');
//                 for (let [key, value] of formData.entries()) {
//                     console.log(key, value instanceof File ? `File: ${value.name}` : value);
//                 }
//             } else {
//                 console.log('Data:', formData);
//             }

//             const response = await axios({
//                 method,
//                 url: endpoint,
//                 data: formData,
//                 headers
//             });

//             console.log('Save response:', response.data);

//             if (response.status === 200 || response.status === 201) {
//                 alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
                
//                 setShowAddModal(false);
//                 setShowEditModal(false);
//                 setSelectedItem(null);
                
//                 if (onRefresh && typeof onRefresh === 'function') {
//                     await onRefresh();
//                 }
//             }
//         } catch (err) {
//             console.error('Error saving:', err);
            
//             let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
            
//             if (err.response) {
//                 console.error('Error response status:', err.response.status);
//                 console.error('Error response data:', err.response.data);
                
//                 if (err.response.data) {
//                     if (typeof err.response.data === 'string') {
//                         errorMessage += err.response.data;
//                     } else if (err.response.data.message) {
//                         errorMessage += err.response.data.message;
//                     } else if (err.response.data.error) {
//                         errorMessage += err.response.data.error;
//                     } else if (err.response.data.errorMessage) {
//                         errorMessage += err.response.data.errorMessage;
//                     } else {
//                         errorMessage += JSON.stringify(err.response.data);
//                     }
//                 } else {
//                     errorMessage += `Server error (${err.response.status})`;
//                 }
//             } else if (err.request) {
//                 errorMessage += 'No response from server. Please check if the backend is running.';
//                 console.error('No response received:', err.request);
//             } else {
//                 errorMessage += err.message;
//             }
            
//             alert(errorMessage);
//         }
//     };

//     // Get the display name for the Add button
//     const getAddButtonText = () => {
//         switch(activeSubTab) {
//             case 'agents': return 'Add Agent';
//             case 'customers': return 'Add Customer';
//             case 'admins': return 'Add Admin';
//             default: return 'Add';
//         }
//     };

//     return (
//         <div className="space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
//                         <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
//                     </div>
                    
//                     <div className="flex gap-3">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 placeholder="Search users..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
//                             />
//                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
                        
//                         {/* Add Button with dynamic text */}
//                         <button
//                             onClick={handleAdd}
//                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center whitespace-nowrap"
//                         >
//                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                             </svg>
//                             {getAddButtonText()}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Sub Tabs */}
//                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
//                     {tabs.map(tab => (
//                         <button
//                             key={tab.id}
//                             onClick={() => setActiveSubTab(tab.id)}
//                             className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
//                                 activeSubTab === tab.id
//                                     ? 'bg-teal-600 text-white'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                             }`}
//                         >
//                             {tab.label} ({tab.count})
//                             {tab.badge > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                                     {tab.badge}
//                                 </span>
//                             )}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Table */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 {activeSubTab === 'agents' && (
//                     <AgentTable
//                         data={agents}
//                         searchTerm={searchTerm}
//                         onView={handleView}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                         getStatusColor={getStatusColor}
//                     />
//                 )}
//                 {activeSubTab === 'customers' && (
//                     <CustomerTable
//                         data={customers}
//                         searchTerm={searchTerm}
//                         onView={handleView}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                         getStatusColor={getStatusColor}
//                         formatDate={formatDate}
//                         formatCurrency={formatCurrency}
//                         allBookings={allBookings}
//                     />
//                 )}
//                 {activeSubTab === 'admins' && (
//                     <AdminTable
//                         data={admins}
//                         searchTerm={searchTerm}
//                         onView={handleView}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                         getStatusColor={getStatusColor}
//                         formatDate={formatDate}
//                         BASE_URL={BASE_URL}
//                     />
//                 )}
//             </div>

//             {/* Add Modals */}
//             {showAddModal && modalType === 'agents' && (
//                 <AddAgentModal
//                     onClose={() => setShowAddModal(false)}
//                     onSave={(data) => handleSave(data)}
//                 />
//             )}
//             {showAddModal && modalType === 'customers' && (
//                 <AddCustomerModal
//                     onClose={() => setShowAddModal(false)}
//                     onSave={(data) => handleSave(data)}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//             {showAddModal && modalType === 'admins' && (
//                 <AddAdminModal
//                     onClose={() => setShowAddModal(false)}
//                     onSave={(data) => handleSave(data)}
//                 />
//             )}

//             {/* Edit Modals */}
//             {showEditModal && modalType === 'agents' && selectedItem && (
//                 <EditAgentModal
//                     agent={selectedItem}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedItem(null);
//                     }}
//                     onSave={(data) => handleSave(data)}
//                 />
//             )}
//             {showEditModal && modalType === 'customers' && selectedItem && (
//                 <EditCustomerModal
//                     customer={selectedItem}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedItem(null);
//                     }}
//                     onSave={(data) => handleSave(data)}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//             {showEditModal && modalType === 'admins' && selectedItem && (
//                 <EditAdminModal
//                     admin={selectedItem}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedItem(null);
//                     }}
//                     onSave={(data) => handleSave(data)}
//                     BASE_URL={BASE_URL}
//                 />
//             )}

//             {/* View Details Modal */}
//             {showViewModal && selectedItem && (
//                 <ViewDetailsModal
//                     item={selectedItem}
//                     type={modalType}
//                     onClose={() => {
//                         setShowViewModal(false);
//                         setSelectedItem(null);
//                     }}
//                     formatDate={formatDate}
//                     formatCurrency={formatCurrency}
//                     getStatusColor={getStatusColor}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//         </div>
//     );
// };

// export default UserManagementView;


// src/Pages/Admin/components/UserManagementView.jsx
import React, { useState } from 'react';
import axios from 'axios';
import AgentTable from './tables/AgentTable';
import CustomerTable from './tables/CustomerTable';
import AdminTable from './tables/AdminTable';
import AddAgentModal from './modals/AddAgentModal';
import AddCustomerModal from './modals/AddCustomerModal';
import AddAdminModal from './modals/AddAdminModal';
import EditAgentModal from './modals/EditAgentModal';
import EditCustomerModal from './modals/EditCustomerModal';
import EditAdminModal from './modals/EditAdminModal';
import ViewDetailsModal from './modals/ViewDetailsModal';

const UserManagementView = ({ 
    agents, 
    customers, 
    admins, 
    activeSubTab, 
    setActiveSubTab,
    searchTerm,
    setSearchTerm,
    onRefresh,
    getStatusColor,
    formatDate,
    formatCurrency,
    allBookings,
    stats,
    BASE_URL
}) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalType, setModalType] = useState('');

    const tabs = [
        { id: 'agents', label: 'Agents', count: stats?.totalAgents || 0, badge: stats?.pendingAgents || 0 },
        { id: 'customers', label: 'Customers', count: stats?.totalCustomers || 0 },
        { id: 'admins', label: 'Admins', count: stats?.totalAdmins || 0 }
    ];

    const handleAdd = () => {
        console.log('Add clicked for tab:', activeSubTab); // Debug log
        setModalType(activeSubTab);
        setShowAddModal(true);
    };

    const handleEdit = (item) => {
        console.log('Edit clicked:', item);
        setSelectedItem(item);
        setModalType(activeSubTab);
        setShowEditModal(true);
    };

    const handleView = (item) => {
        console.log('View clicked:', item);
        setSelectedItem(item);
        setModalType(activeSubTab);
        setShowViewModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm(`Are you sure you want to delete this ${activeSubTab.slice(0, -1)}?`)) {
            return;
        }

        try {
            const token = localStorage.getItem('adminToken');
            let endpoint = '';

            switch(activeSubTab) {
                case 'agents':
                    endpoint = `${BASE_URL}/api/v1/agent/delete/${id}`;
                    break;
                case 'customers':
                    endpoint = `${BASE_URL}/api/v1/customer/delete/${id}`;
                    break;
                case 'admins':
                    endpoint = `${BASE_URL}/api/v1/admin/delete/${id}`;
                    break;
                default:
                    return;
            }

            await axios.delete(endpoint, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert(`${activeSubTab.slice(0, -1)} deleted successfully!`);
            
            if (onRefresh && typeof onRefresh === 'function') {
                await onRefresh();
            }
        } catch (err) {
            console.error('Error deleting:', err);
            alert('Failed to delete. Please try again.');
        }
    };

    const handleSave = async (formData) => {
        try {
            const token = localStorage.getItem('adminToken');
            let endpoint = '';
            let method = 'post';
            let headers = {
                'Authorization': `Bearer ${token}`
            };

            if (showEditModal && selectedItem) {
                method = 'put';
                switch(modalType) {
                    case 'agents':
                        endpoint = `${BASE_URL}/api/v1/agent/update/${selectedItem.id}`;
                        headers['Content-Type'] = 'application/json';
                        break;
                    case 'customers':
                        endpoint = `${BASE_URL}/api/v1/customer/update/${selectedItem.id}`;
                        headers['Content-Type'] = 'multipart/form-data';
                        break;
                    case 'admins':
                        endpoint = `${BASE_URL}/api/v1/admin/update/${selectedItem.id}`;
                        headers['Content-Type'] = 'multipart/form-data';
                        break;
                    default:
                        return;
                }
            } else {
                switch(modalType) {
                    case 'agents':
                        endpoint = `${BASE_URL}/api/v1/agent/add`;
                        headers['Content-Type'] = 'application/json';
                        break;
                    case 'customers':
                        endpoint = `${BASE_URL}/api/v1/customer/add`;
                        headers['Content-Type'] = 'multipart/form-data';
                        break;
                    case 'admins':
                        endpoint = `${BASE_URL}/api/v1/admin/add`;
                        headers['Content-Type'] = 'multipart/form-data';
                        break;
                    default:
                        return;
                }
            }

            console.log('Saving to endpoint:', endpoint, 'Method:', method);
            console.log('Modal Type:', modalType); // Debug log
            console.log('Content-Type:', headers['Content-Type']);
            
            // Log FormData contents for debugging
            if (formData instanceof FormData) {
                console.log('FormData contents:');
                for (let [key, value] of formData.entries()) {
                    console.log(key, value instanceof File ? `File: ${value.name}` : value);
                }
            } else {
                console.log('Data:', formData);
            }

            const response = await axios({
                method,
                url: endpoint,
                data: formData,
                headers
            });

            console.log('Save response:', response.data);

            if (response.status === 200 || response.status === 201) {
                alert(`${modalType.slice(0, -1)} ${showEditModal ? 'updated' : 'added'} successfully!`);
                
                setShowAddModal(false);
                setShowEditModal(false);
                setSelectedItem(null);
                
                if (onRefresh && typeof onRefresh === 'function') {
                    await onRefresh();
                }
            }
        } catch (err) {
            console.error('Error saving:', err);
            
            let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} ${modalType.slice(0, -1)}. `;
            
            if (err.response) {
                console.error('Error response status:', err.response.status);
                console.error('Error response data:', err.response.data);
                
                if (err.response.data) {
                    if (typeof err.response.data === 'string') {
                        errorMessage += err.response.data;
                    } else if (err.response.data.message) {
                        errorMessage += err.response.data.message;
                    } else if (err.response.data.error) {
                        errorMessage += err.response.data.error;
                    } else if (err.response.data.errorMessage) {
                        errorMessage += err.response.data.errorMessage;
                    } else {
                        errorMessage += JSON.stringify(err.response.data);
                    }
                } else {
                    errorMessage += `Server error (${err.response.status})`;
                }
            } else if (err.request) {
                errorMessage += 'No response from server. Please check if the backend is running.';
                console.error('No response received:', err.request);
            } else {
                errorMessage += err.message;
            }
            
            alert(errorMessage);
        }
    };

    // Get the display name for the Add button
    const getAddButtonText = () => {
        switch(activeSubTab) {
            case 'agents': return 'Add Agent';
            case 'customers': return 'Add Customer';
            case 'admins': return 'Add Admin';
            default: return 'Add';
        }
    };

    // Debug: Log when modals are rendered
    console.log('Current state:', { 
        showAddModal, 
        modalType, 
        activeSubTab,
        showEditModal,
        showViewModal
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
                        <p className="text-sm text-gray-600 mt-1">Manage all users across the platform</p>
                    </div>
                    
                    <div className="flex gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        {/* Add Button with dynamic text */}
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center whitespace-nowrap"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            {getAddButtonText()}
                        </button>
                    </div>
                </div>

                {/* Sub Tabs */}
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition relative flex-shrink-0 ${
                                activeSubTab === tab.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tab.label} ({tab.count})
                            {tab.badge > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {tab.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                {activeSubTab === 'agents' && (
                    <AgentTable
                        data={agents}
                        searchTerm={searchTerm}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        getStatusColor={getStatusColor}
                    />
                )}
                {activeSubTab === 'customers' && (
                    <CustomerTable
                        data={customers}
                        searchTerm={searchTerm}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        getStatusColor={getStatusColor}
                        formatDate={formatDate}
                        formatCurrency={formatCurrency}
                        allBookings={allBookings}
                    />
                )}
                {activeSubTab === 'admins' && (
                    <AdminTable
                        data={admins}
                        searchTerm={searchTerm}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        getStatusColor={getStatusColor}
                        formatDate={formatDate}
                        BASE_URL={BASE_URL}
                    />
                )}
            </div>

            {/* Add Modals - Ensure they're correctly conditionally rendered */}
            {showAddModal && modalType === 'agents' && (
                <AddAgentModal
                    onClose={() => setShowAddModal(false)}
                    onSave={(data) => handleSave(data)}
                />
            )}
            {showAddModal && modalType === 'customers' && (
                <AddCustomerModal
                    onClose={() => setShowAddModal(false)}
                    onSave={(data) => handleSave(data)}
                    BASE_URL={BASE_URL}
                />
            )}
            {showAddModal && modalType === 'admins' && (
                <AddAdminModal
                    onClose={() => setShowAddModal(false)}
                    onSave={(data) => handleSave(data)}
                />
            )}

            {/* Edit Modals */}
            {showEditModal && modalType === 'agents' && selectedItem && (
                <EditAgentModal
                    agent={selectedItem}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedItem(null);
                    }}
                    onSave={(data) => handleSave(data)}
                />
            )}
            {showEditModal && modalType === 'customers' && selectedItem && (
                <EditCustomerModal
                    customer={selectedItem}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedItem(null);
                    }}
                    onSave={(data) => handleSave(data)}
                    BASE_URL={BASE_URL}
                />
            )}
            {showEditModal && modalType === 'admins' && selectedItem && (
                <EditAdminModal
                    admin={selectedItem}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedItem(null);
                    }}
                    onSave={(data) => handleSave(data)}
                    BASE_URL={BASE_URL}
                />
            )}

            {/* View Details Modal */}
            {showViewModal && selectedItem && (
                <ViewDetailsModal
                    item={selectedItem}
                    type={modalType}
                    onClose={() => {
                        setShowViewModal(false);
                        setSelectedItem(null);
                    }}
                    formatDate={formatDate}
                    formatCurrency={formatCurrency}
                    getStatusColor={getStatusColor}
                    BASE_URL={BASE_URL}
                />
            )}
        </div>
    );
};

export default UserManagementView;