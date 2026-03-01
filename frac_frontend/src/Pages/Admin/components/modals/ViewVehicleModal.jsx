// // // src/Pages/Admin/components/modals/ViewVehicleModal.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ViewVehicleModal = ({ vehicle, onClose, formatCurrency, BASE_URL }) => {
// //     const [agentName, setAgentName] = useState('');
// //     const [imageUrl, setImageUrl] = useState(null);
// //     const [imageError, setImageError] = useState(false);

// //     // Helper function to get image URL
// //     const getImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
        
// //         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
// //         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
// //             const filename = cleanPath.split('\\').pop().split('/').pop();
// //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// //         }
        
// //         if (cleanPath.startsWith('/uploads')) {
// //             return `${BASE_URL}${cleanPath}`;
// //         }
        
// //         return `${BASE_URL}/uploads/vehicles/${cleanPath}`;
// //     };

// //     // Fetch agent details
// //     useEffect(() => {
// //         if (vehicle?.agentId) {
// //             fetchAgentDetails(vehicle.agentId);
// //         }
// //         if (vehicle?.vehicleImage) {
// //             setImageUrl(getImageUrl(vehicle.vehicleImage));
// //         }
// //     }, [vehicle]);

// //     const fetchAgentDetails = async (agentId) => {
// //         try {
// //             const token = localStorage.getItem('adminToken');
// //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// //                 headers: { 'Authorization': `Bearer ${token}` }
// //             });
// //             setAgentName(response.data.companyName || `Agent #${agentId}`);
// //         } catch (err) {
// //             console.error('Error fetching agent:', err);
// //             setAgentName(`Agent #${agentId}`);
// //         }
// //     };

// //     const getFuelTypeDisplay = (type) => {
// //         switch(type) {
// //             case 'PETROL': return 'Petrol';
// //             case 'DIESEL': return 'Diesel';
// //             case 'ELECTRIC': return 'Electric';
// //             case 'HYBRID': return 'Hybrid';
// //             default: return type;
// //         }
// //     };

// //     const getTransmissionDisplay = (type) => {
// //         return type === 'MANUAL' ? 'Manual' : 'Automatic';
// //     };

// //     const DetailField = ({ label, value }) => (
// //         <div className="border-b border-gray-200 pb-2 last:border-0">
// //             <p className="text-xs text-gray-500 mb-1">{label}</p>
// //             <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
// //         </div>
// //     );

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //                         {/* Vehicle Image */}
// //                         <div className="md:col-span-1">
// //                             <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
// //                                 {imageUrl && !imageError ? (
// //                                     <img
// //                                         src={imageUrl}
// //                                         alt={vehicle?.makeModel}
// //                                         className="w-full h-full object-cover"
// //                                         onError={() => setImageError(true)}
// //                                     />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
// //                                         <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// //                                         </svg>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         {/* Basic Info */}
// //                         <div className="md:col-span-2">
// //                             <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle?.makeModel}</h3>
// //                             <p className="text-gray-600 mb-4">Reg: {vehicle?.regNumber}</p>
                            
// //                             <div className="grid grid-cols-2 gap-4">
// //                                 <DetailField label="Year" value={vehicle?.yearOfManufacture} />
// //                                 <DetailField label="Color" value={vehicle?.color} />
// //                                 <DetailField label="Seating Capacity" value={`${vehicle?.seatingCapacity} seats`} />
// //                                 <DetailField label="Fuel Type" value={getFuelTypeDisplay(vehicle?.fuelType)} />
// //                                 <DetailField label="Transmission" value={getTransmissionDisplay(vehicle?.transmissionType)} />
// //                                 <DetailField label="Daily Rate" value={formatCurrency(vehicle?.dailyRentalPrice)} />
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Additional Details */}
// //                     <div className="bg-gray-50 rounded-lg p-4 mb-6">
// //                         <h4 className="font-semibold text-gray-800 mb-3">Additional Information</h4>
// //                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                             <DetailField label="Vehicle ID" value={`#V${String(vehicle?.id).padStart(4, '0')}`} />
// //                             <DetailField label="Agent" value={agentName} />
// //                             <DetailField label="Agent ID" value={`#AG${String(vehicle?.agentId).padStart(4, '0')}`} />
// //                             <DetailField label="Status" value={vehicle?.status || 'AVAILABLE'} />
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-end">
// //                         <button
// //                             onClick={onClose}
// //                             className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ViewVehicleModal;



// // src/Pages/Admin/components/modals/ViewVehicleModal.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const DetailField = ({ label, value }) => (
//     <div className="border-b border-gray-200 pb-2 last:border-0">
//         <p className="text-xs text-gray-500 mb-1">{label}</p>
//         <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
//     </div>
// );

// const ViewVehicleModal = ({ vehicle, onClose, formatCurrency, BASE_URL }) => {
//     const [agentName, setAgentName] = useState('');
//     const [imageUrl, setImageUrl] = useState(null);
//     const [imageError, setImageError] = useState(false);

//     // Helper function to get image URL - define first
//     const getImageUrl = useCallback((imagePath) => {
//         if (!imagePath) return null;
        
//         const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
//         if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
//             const filename = cleanPath.split('\\').pop().split('/').pop();
//             return `${BASE_URL}/uploads/vehicles/${filename}`;
//         }
        
//         if (cleanPath.startsWith('/uploads')) {
//             return `${BASE_URL}${cleanPath}`;
//         }
        
//         return `${BASE_URL}/uploads/vehicles/${cleanPath}`;
//     }, [BASE_URL]);

//     // Fetch agent details - define before using in useEffect
//     const fetchAgentDetails = useCallback(async (agentId) => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setAgentName(response.data.companyName || `Agent #${agentId}`);
//         } catch (err) {
//             console.error('Error fetching agent:', err);
//             setAgentName(`Agent #${agentId}`);
//         }
//     }, [BASE_URL]);

//     // Load image and agent details
//     useEffect(() => {
//         if (vehicle?.agentId) {
//             fetchAgentDetails(vehicle.agentId);
//         }
//         if (vehicle?.vehicleImage) {
//             setImageUrl(getImageUrl(vehicle.vehicleImage));
//         }
//     }, [vehicle, fetchAgentDetails, getImageUrl]);

//     const getFuelTypeDisplay = (type) => {
//         switch(type) {
//             case 'PETROL': return 'Petrol';
//             case 'DIESEL': return 'Diesel';
//             case 'ELECTRIC': return 'Electric';
//             case 'HYBRID': return 'Hybrid';
//             default: return type;
//         }
//     };

//     const getTransmissionDisplay = (type) => {
//         return type === 'MANUAL' ? 'Manual' : 'Automatic';
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                         {/* Vehicle Image */}
//                         <div className="md:col-span-1">
//                             <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
//                                 {imageUrl && !imageError ? (
//                                     <img
//                                         src={imageUrl}
//                                         alt={vehicle?.makeModel}
//                                         className="w-full h-full object-cover"
//                                         onError={() => setImageError(true)}
//                                     />
//                                 ) : (
//                                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
//                                         <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                                         </svg>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Basic Info */}
//                         <div className="md:col-span-2">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle?.makeModel}</h3>
//                             <p className="text-gray-600 mb-4">Reg: {vehicle?.regNumber}</p>
                            
//                             <div className="grid grid-cols-2 gap-4">
//                                 <DetailField label="Year" value={vehicle?.yearOfManufacture} />
//                                 <DetailField label="Color" value={vehicle?.color} />
//                                 <DetailField label="Seating Capacity" value={`${vehicle?.seatingCapacity} seats`} />
//                                 <DetailField label="Fuel Type" value={getFuelTypeDisplay(vehicle?.fuelType)} />
//                                 <DetailField label="Transmission" value={getTransmissionDisplay(vehicle?.transmissionType)} />
//                                 <DetailField label="Daily Rate" value={formatCurrency(vehicle?.dailyRentalPrice)} />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Additional Details */}
//                     <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                         <h4 className="font-semibold text-gray-800 mb-3">Additional Information</h4>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             <DetailField label="Vehicle ID" value={`#V${String(vehicle?.id).padStart(4, '0')}`} />
//                             <DetailField label="Agent" value={agentName} />
//                             <DetailField label="Agent ID" value={`#AG${String(vehicle?.agentId).padStart(4, '0')}`} />
//                             <DetailField label="Status" value={vehicle?.status || 'AVAILABLE'} />
//                         </div>
//                     </div>

//                     <div className="flex justify-end">
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

// export default ViewVehicleModal;



// src/Pages/Admin/components/modals/ViewVehicleModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewVehicleModal = ({ vehicle, onClose, formatCurrency, BASE_URL }) => {
    const [agentName, setAgentName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [imageError, setImageError] = useState(false);

    // Helper function to get image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        return `${BASE_URL}/uploads/vehicles/${cleanPath}`;
    };

    // Fetch agent details helper - declared before any effect that uses it
    const fetchAgentDetails = async (agentId) => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAgentName(response.data.companyName || `Agent #${agentId}`);
        } catch (err) {
            console.error('Error fetching agent:', err);
            setAgentName(`Agent #${agentId}`);
        }
    };

    // Update agent info and image whenever the vehicle object changes.
    // `fetchAgentDetails` and `getImageUrl` are stable helpers that don't need
    // to be in the dependency list; suppress the eslint warning accordingly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (vehicle?.agentId) {
            fetchAgentDetails(vehicle.agentId);
        }
        if (vehicle?.vehicleImage) {
            setImageUrl(getImageUrl(vehicle.vehicleImage));
        }
    }, [vehicle]);

    const getFuelTypeDisplay = (type) => {
        switch(type) {
            case 'PETROL': return 'Petrol';
            case 'DIESEL': return 'Diesel';
            case 'ELECTRIC': return 'Electric';
            case 'HYBRID': return 'Hybrid';
            default: return type;
        }
    };

    const getTransmissionDisplay = (type) => {
        return type === 'MANUAL' ? 'Manual' : 'Automatic';
    };

    const DetailField = ({ label, value }) => (
        <div className="border-b border-gray-200 pb-2 last:border-0">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Vehicle Image */}
                        <div className="md:col-span-1">
                            <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
                                {imageUrl && !imageError ? (
                                    <img
                                        src={imageUrl}
                                        alt={vehicle?.makeModel}
                                        className="w-full h-full object-cover"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
                                        <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle?.makeModel}</h3>
                            <p className="text-gray-600 mb-4">Reg: {vehicle?.regNumber}</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <DetailField label="Year" value={vehicle?.yearOfManufacture} />
                                <DetailField label="Color" value={vehicle?.color} />
                                <DetailField label="Seating Capacity" value={`${vehicle?.seatingCapacity} seats`} />
                                <DetailField label="Fuel Type" value={getFuelTypeDisplay(vehicle?.fuelType)} />
                                <DetailField label="Transmission" value={getTransmissionDisplay(vehicle?.transmissionType)} />
                                <DetailField label="Daily Rate" value={formatCurrency(vehicle?.dailyRentalPrice)} />
                            </div>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Additional Information</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <DetailField label="Vehicle ID" value={`#V${String(vehicle?.id).padStart(4, '0')}`} />
                            <DetailField label="Agent" value={agentName} />
                            <DetailField label="Agent ID" value={`#AG${String(vehicle?.agentId).padStart(4, '0')}`} />
                            <DetailField label="Status" value={vehicle?.status || 'AVAILABLE'} />
                        </div>
                    </div>

                    <div className="flex justify-end">
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

export default ViewVehicleModal;