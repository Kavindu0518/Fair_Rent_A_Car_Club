// // // src/Pages/Admin/components/VehicleManagementView.jsx
// // import React from 'react';
// // import VehicleTable from './tables/VehicleTable';

// // const VehicleManagementView = ({ 
// //     vehicles, 
// //     searchTerm, 
// //     setSearchTerm,
// //     activeSubTab,
// //     setActiveSubTab,
// //     onViewDetails,
// //     getStatusColor,
// //     formatCurrency,
// //     stats
// // }) => {
// //     const tabs = [
// //         { id: 'all-vehicles', label: 'All Vehicles', count: stats.totalVehicles },
// //         { id: 'available', label: 'Available', count: stats.availableVehicles },
// //         { id: 'maintenance', label: 'Maintenance', count: stats.maintenanceVehicles }
// //     ];

// //     let filteredVehicles = vehicles;
// //     if (activeSubTab === 'available') {
// //         filteredVehicles = vehicles.filter(v => v.status === 'AVAILABLE');
// //     } else if (activeSubTab === 'maintenance') {
// //         filteredVehicles = vehicles.filter(v => v.status === 'MAINTENANCE');
// //     }

// //     return (
// //         <div className="space-y-6">
// //             {/* Header */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //                     <div>
// //                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Management</h2>
// //                         <p className="text-sm text-gray-600 mt-1">Manage all vehicles across the platform</p>
// //                     </div>
                    
// //                     <div className="relative">
// //                         <input
// //                             type="text"
// //                             placeholder="Search vehicles..."
// //                             value={searchTerm}
// //                             onChange={(e) => setSearchTerm(e.target.value)}
// //                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// //                         />
// //                         <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                         </svg>
// //                     </div>
// //                 </div>

// //                 {/* Sub Tabs */}
// //                 <div className="flex gap-2 mt-6">
// //                     {tabs.map(tab => (
// //                         <button
// //                             key={tab.id}
// //                             onClick={() => setActiveSubTab(tab.id)}
// //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
// //                                 activeSubTab === tab.id
// //                                     ? 'bg-teal-600 text-white'
// //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                             }`}
// //                         >
// //                             {tab.label} ({tab.count})
// //                         </button>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Table */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 <VehicleTable
// //                     data={filteredVehicles}
// //                     searchTerm={searchTerm}
// //                     onViewDetails={onViewDetails}
// //                     getStatusColor={getStatusColor}
// //                     formatCurrency={formatCurrency}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default VehicleManagementView;



// // src/Pages/Admin/components/VehicleManagementView.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import VehicleTable from './tables/VehicleTable';
// import AddVehicleModal from './modals/AddVehicleModal';
// import EditVehicleModal from './modals/EditVehicleModal';
// import ViewVehicleModal from './modals/ViewVehicleModal';

// const VehicleManagementView = ({ 
//     vehicles, 
//     searchTerm, 
//     setSearchTerm,
//     activeSubTab,
//     setActiveSubTab,
//     onRefresh,
//     getStatusColor,
//     formatCurrency,
//     stats,
//     BASE_URL
// }) => {
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showViewModal, setShowViewModal] = useState(false);
//     const [selectedVehicle, setSelectedVehicle] = useState(null);

//     const tabs = [
//         { id: 'all-vehicles', label: 'All Vehicles', count: stats?.totalVehicles || 0 },
//         { id: 'available', label: 'Available', count: stats?.availableVehicles || 0 },
//         { id: 'maintenance', label: 'Maintenance', count: stats?.maintenanceVehicles || 0 }
//     ];

//     let filteredVehicles = vehicles;
//     if (activeSubTab === 'available') {
//         filteredVehicles = vehicles.filter(v => v.status === 'AVAILABLE');
//     } else if (activeSubTab === 'maintenance') {
//         filteredVehicles = vehicles.filter(v => v.status === 'MAINTENANCE');
//     }

//     const handleAdd = () => {
//         setShowAddModal(true);
//     };

//     const handleEdit = (vehicle) => {
//         setSelectedVehicle(vehicle);
//         setShowEditModal(true);
//     };

//     const handleView = (vehicle) => {
//         setSelectedVehicle(vehicle);
//         setShowViewModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
//             return;
//         }

//         try {
//             const token = localStorage.getItem('adminToken');
//             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             alert('Vehicle deleted successfully!');
            
//             if (onRefresh && typeof onRefresh === 'function') {
//                 await onRefresh();
//             }
//         } catch (err) {
//             console.error('Error deleting vehicle:', err);
//             alert('Failed to delete vehicle. Please try again.');
//         }
//     };

//     const handleSave = async (formData) => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             let endpoint = '';
//             let method = 'post';

//             if (showEditModal && selectedVehicle) {
//                 method = 'put';
//                 endpoint = `${BASE_URL}/api/v1/vehicle/update/${selectedVehicle.id}`;
//             } else {
//                 endpoint = `${BASE_URL}/api/v1/vehicle/add`;
//             }

//             console.log('Saving vehicle to:', endpoint, 'Method:', method);

//             const response = await axios({
//                 method,
//                 url: endpoint,
//                 data: formData,
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             console.log('Save response:', response.data);

//             if (response.status === 200 || response.status === 201) {
//                 alert(`Vehicle ${showEditModal ? 'updated' : 'added'} successfully!`);
                
//                 setShowAddModal(false);
//                 setShowEditModal(false);
//                 setSelectedVehicle(null);
                
//                 if (onRefresh && typeof onRefresh === 'function') {
//                     await onRefresh();
//                 }
//             }
//         } catch (err) {
//             console.error('Error saving vehicle:', err);
            
//             let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} vehicle. `;
            
//             if (err.response) {
//                 console.error('Error response:', err.response.data);
//                 if (err.response.data?.errorMessage) {
//                     errorMessage += err.response.data.errorMessage;
//                 } else if (typeof err.response.data === 'string') {
//                     errorMessage += err.response.data;
//                 } else {
//                     errorMessage += `Server error (${err.response.status})`;
//                 }
//             } else if (err.request) {
//                 errorMessage += 'No response from server. Please check if the backend is running.';
//             } else {
//                 errorMessage += err.message;
//             }
            
//             alert(errorMessage);
//         }
//     };

//     return (
//         <div className="space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Management</h2>
//                         <p className="text-sm text-gray-600 mt-1">Manage all vehicles across the platform</p>
//                     </div>
                    
//                     <div className="flex gap-3">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 placeholder="Search vehicles..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
//                             />
//                             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
                        
//                         {/* Add Vehicle Button */}
//                         <button
//                             onClick={handleAdd}
//                             className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center whitespace-nowrap"
//                         >
//                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                             </svg>
//                             Add Vehicle
//                         </button>
//                     </div>
//                 </div>

//                 {/* Sub Tabs */}
//                 <div className="flex gap-2 mt-6">
//                     {tabs.map(tab => (
//                         <button
//                             key={tab.id}
//                             onClick={() => setActiveSubTab(tab.id)}
//                             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                                 activeSubTab === tab.id
//                                     ? 'bg-teal-600 text-white'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                             }`}
//                         >
//                             {tab.label} ({tab.count})
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Table */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <VehicleTable
//                     data={filteredVehicles}
//                     searchTerm={searchTerm}
//                     onView={handleView}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                     getStatusColor={getStatusColor}
//                     formatCurrency={formatCurrency}
//                 />
//             </div>

//             {/* Modals */}
//             {showAddModal && (
//                 <AddVehicleModal
//                     onClose={() => setShowAddModal(false)}
//                     onSave={handleSave}
//                     BASE_URL={BASE_URL}
//                 />
//             )}

//             {showEditModal && selectedVehicle && (
//                 <EditVehicleModal
//                     vehicle={selectedVehicle}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedVehicle(null);
//                     }}
//                     onSave={handleSave}
//                     BASE_URL={BASE_URL}
//                 />
//             )}

//             {showViewModal && selectedVehicle && (
//                 <ViewVehicleModal
//                     vehicle={selectedVehicle}
//                     onClose={() => {
//                         setShowViewModal(false);
//                         setSelectedVehicle(null);
//                     }}
//                     formatCurrency={formatCurrency}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//         </div>
//     );
// };

// export default VehicleManagementView;




// src/Pages/Admin/components/VehicleManagementView.jsx
import React, { useState } from 'react';
import axios from 'axios';
import VehicleTable from './tables/VehicleTable';
import AddVehicleModal from './modals/AddVehicleModal';
import EditVehicleModal from './modals/EditVehicleModal';
import ViewVehicleModal from './modals/ViewVehicleModal';

const VehicleManagementView = ({ 
    vehicles, 
    searchTerm, 
    setSearchTerm,
    activeSubTab,
    setActiveSubTab,
    onRefresh,
    getStatusColor,
    formatCurrency,
    stats,
    BASE_URL
}) => {
    // Debug log
    console.log('VehicleManagementView received:', {
        vehiclesCount: vehicles?.length,
        searchTerm,
        activeSubTab,
        stats,
        BASE_URL
    });

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    // Ensure stats has default values
    const safeStats = {
        totalVehicles: stats?.totalVehicles || 0,
        availableVehicles: stats?.availableVehicles || 0,
        maintenanceVehicles: stats?.maintenanceVehicles || 0
    };

    const tabs = [
        { id: 'all-vehicles', label: 'All Vehicles', count: safeStats.totalVehicles },
        { id: 'available', label: 'Available', count: safeStats.availableVehicles },
        { id: 'maintenance', label: 'Maintenance', count: safeStats.maintenanceVehicles }
    ];

    // Ensure vehicles is an array
    const vehicleArray = Array.isArray(vehicles) ? vehicles : [];
    
    let filteredVehicles = vehicleArray;
    if (activeSubTab === 'available') {
        filteredVehicles = vehicleArray.filter(v => v?.status === 'AVAILABLE');
    } else if (activeSubTab === 'maintenance') {
        filteredVehicles = vehicleArray.filter(v => v?.status === 'MAINTENANCE');
    }

    const handleAdd = () => {
        console.log('Add vehicle clicked');
        setShowAddModal(true);
    };

    const handleEdit = (vehicle) => {
        console.log('Edit vehicle:', vehicle);
        setSelectedVehicle(vehicle);
        setShowEditModal(true);
    };

    const handleView = (vehicle) => {
        console.log('View vehicle:', vehicle);
        setSelectedVehicle(vehicle);
        setShowViewModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this vehicle?')) {
            return;
        }

        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                alert('Authentication token not found. Please login again.');
                return;
            }

            console.log('Deleting vehicle:', id);
            await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert('Vehicle deleted successfully!');
            
            if (onRefresh && typeof onRefresh === 'function') {
                await onRefresh();
            }
        } catch (err) {
            console.error('Error deleting vehicle:', err);
            alert('Failed to delete vehicle. Please try again.');
        }
    };

    const handleSave = async (formData) => {
        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                alert('Authentication token not found. Please login again.');
                return;
            }

            let endpoint = '';
            let method = 'post';

            if (showEditModal && selectedVehicle) {
                method = 'put';
                endpoint = `${BASE_URL}/api/v1/vehicle/update/${selectedVehicle.id}`;
            } else {
                endpoint = `${BASE_URL}/api/v1/vehicle/add`;
            }

            console.log('Saving vehicle to:', endpoint, 'Method:', method);

            const response = await axios({
                method,
                url: endpoint,
                data: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Save response:', response.data);

            if (response.status === 200 || response.status === 201) {
                alert(`Vehicle ${showEditModal ? 'updated' : 'added'} successfully!`);
                
                setShowAddModal(false);
                setShowEditModal(false);
                setSelectedVehicle(null);
                
                if (onRefresh && typeof onRefresh === 'function') {
                    await onRefresh();
                }
            }
        } catch (err) {
            console.error('Error saving vehicle:', err);
            
            let errorMessage = `Failed to ${showEditModal ? 'update' : 'add'} vehicle. `;
            
            if (err.response) {
                console.error('Error response:', err.response.data);
                if (err.response.data?.errorMessage) {
                    errorMessage += err.response.data.errorMessage;
                } else if (typeof err.response.data === 'string') {
                    errorMessage += err.response.data;
                } else {
                    errorMessage += `Server error (${err.response.status})`;
                }
            } else if (err.request) {
                errorMessage += 'No response from server. Please check if the backend is running.';
            } else {
                errorMessage += err.message;
            }
            
            alert(errorMessage);
        }
    };

    // If no vehicles, show empty state
    if (!vehicleArray.length && !searchTerm) {
        return (
            <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Vehicle Management</h2>
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add First Vehicle
                        </button>
                    </div>
                    <div className="text-center py-12">
                        <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
                        <p className="text-gray-600">Get started by adding your first vehicle</p>
                    </div>
                </div>

                {showAddModal && (
                    <AddVehicleModal
                        onClose={() => setShowAddModal(false)}
                        onSave={handleSave}
                        BASE_URL={BASE_URL}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Vehicle Management</h2>
                        <p className="text-sm text-gray-600 mt-1">Manage all vehicles across the platform</p>
                    </div>
                    
                    <div className="flex gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search vehicles..."
                                value={searchTerm || ''}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        {/* Add Vehicle Button */}
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center whitespace-nowrap"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Vehicle
                        </button>
                    </div>
                </div>

                {/* Sub Tabs */}
                <div className="flex gap-2 mt-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                activeSubTab === tab.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <VehicleTable
                    data={filteredVehicles}
                    searchTerm={searchTerm || ''}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    getStatusColor={getStatusColor}
                    formatCurrency={formatCurrency}
                />
            </div>

            {/* Modals */}
            {showAddModal && (
                <AddVehicleModal
                    onClose={() => setShowAddModal(false)}
                    onSave={handleSave}
                    BASE_URL={BASE_URL}
                />
            )}

            {showEditModal && selectedVehicle && (
                <EditVehicleModal
                    vehicle={selectedVehicle}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedVehicle(null);
                    }}
                    onSave={handleSave}
                    BASE_URL={BASE_URL}
                />
            )}

            {showViewModal && selectedVehicle && (
                <ViewVehicleModal
                    vehicle={selectedVehicle}
                    onClose={() => {
                        setShowViewModal(false);
                        setSelectedVehicle(null);
                    }}
                    formatCurrency={formatCurrency}
                    BASE_URL={BASE_URL}
                />
            )}
        </div>
    );
};

export default VehicleManagementView;