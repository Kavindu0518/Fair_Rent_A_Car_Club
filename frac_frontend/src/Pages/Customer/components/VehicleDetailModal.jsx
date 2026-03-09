// // // src/Pages/Customer/components/VehicleDetailModal.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const VehicleDetailModal = ({ vehicle, onClose, onBookNow, formatCurrency, getFuelTypeDisplay, getTransmissionDisplay, BASE_URL }) => {
// //     const [agentName, setAgentName] = useState('');
// //     const [imageUrl, setImageUrl] = useState(null);
// //     const [imageError, setImageError] = useState(false);
// //     const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
// //     // Mock multiple images (since backend only has one)
// //     const vehicleImages = vehicle?.vehicleImage ? [vehicle.vehicleImage] : [];

// //     useEffect(() => {
// //         if (vehicle?.agentId) {
// //             fetchAgentDetails(vehicle.agentId);
// //         }
// //         if (vehicle?.vehicleImage) {
// //             setImageUrl(getFullImageUrl(vehicle.vehicleImage));
// //         }
// //     }, [vehicle]);

// //     const fetchAgentDetails = async (agentId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`);
// //             if (response.status === 200) {
// //                 setAgentName(response.data.companyName || `Agent #${agentId}`);
// //             }
// //         } catch (err) {
// //             console.error('Error fetching agent:', err);
// //             setAgentName(`Agent #${agentId}`);
// //         }
// //     };

// //     const getFullImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
// //         if (imagePath.startsWith('http')) return imagePath;
// //         if (imagePath.startsWith('/uploads')) return `${BASE_URL}${imagePath}`;
// //         if (imagePath.includes('\\') || imagePath.includes('C:')) {
// //             const filename = imagePath.split('\\').pop();
// //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// //         }
// //         return `${BASE_URL}/uploads/vehicles/${imagePath}`;
// //     };

// //     const handlePrevImage = () => {
// //         setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : vehicleImages.length - 1));
// //     };

// //     const handleNextImage = () => {
// //         setCurrentImageIndex((prev) => (prev < vehicleImages.length - 1 ? prev + 1 : 0));
// //     };

// //     if (!vehicle) return null;

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //                 <div className="p-6">
// //                     {/* Header */}
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
// //                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                         </button>
// //                     </div>

// //                     {/* Image Gallery */}
// //                     <div className="relative mb-6">
// //                         <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
// //                             {imageUrl && !imageError ? (
// //                                 <img
// //                                     src={imageUrl}
// //                                     alt={vehicle.makeModel}
// //                                     className="w-full h-full object-cover"
// //                                     onError={() => setImageError(true)}
// //                                 />
// //                             ) : (
// //                                 <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
// //                                     <svg className="w-24 h-24 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// //                                     </svg>
// //                                 </div>
// //                             )}
// //                         </div>
                        
// //                         {/* Image Navigation Buttons */}
// //                         {vehicleImages.length > 1 && (
// //                             <>
// //                                 <button
// //                                     onClick={handlePrevImage}
// //                                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
// //                                 >
// //                                     <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //                                     </svg>
// //                                 </button>
// //                                 <button
// //                                     onClick={handleNextImage}
// //                                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
// //                                 >
// //                                     <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                                     </svg>
// //                                 </button>
// //                             </>
// //                         )}
                        
// //                         {/* Image Counter */}
// //                         {vehicleImages.length > 1 && (
// //                             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
// //                                 {currentImageIndex + 1} / {vehicleImages.length}
// //                             </div>
// //                         )}
// //                     </div>

// //                     {/* Vehicle Info */}
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //                         {/* Basic Info */}
// //                         <div className="md:col-span-2">
// //                             <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.makeModel}</h3>
// //                             <p className="text-gray-600 mb-4">Registration: {vehicle.regNumber}</p>
                            
// //                             <div className="grid grid-cols-2 gap-4 mb-4">
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Year</p>
// //                                     <p className="font-semibold text-gray-800">{vehicle.yearOfManufacture}</p>
// //                                 </div>
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Color</p>
// //                                     <div className="flex items-center">
// //                                         <div className="w-4 h-4 rounded-full mr-2 border border-gray-300" 
// //                                              style={{ backgroundColor: vehicle.color?.toLowerCase() || '#gray' }}></div>
// //                                         <p className="font-semibold text-gray-800">{vehicle.color}</p>
// //                                     </div>
// //                                 </div>
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Fuel Type</p>
// //                                     <p className="font-semibold text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
// //                                 </div>
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Transmission</p>
// //                                     <p className="font-semibold text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
// //                                 </div>
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Seating</p>
// //                                     <p className="font-semibold text-gray-800">{vehicle.seatingCapacity} seats</p>
// //                                 </div>
// //                                 <div className="bg-teal-50 p-3 rounded-lg">
// //                                     <p className="text-xs text-teal-600">Daily Rate</p>
// //                                     <p className="font-semibold text-teal-600">{formatCurrency(vehicle.pricePerDay)}/day</p>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Provider Info */}
// //                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4">
// //                             <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //                                 </svg>
// //                                 Provider Information
// //                             </h4>
// //                             <div className="space-y-2 text-sm">
// //                                 <p><span className="text-gray-500">Company:</span> <span className="font-medium">{agentName}</span></p>
// //                                 <p><span className="text-gray-500">Location:</span> <span className="font-medium">{vehicle.location || 'Sri Lanka'}</span></p>
// //                                 <p><span className="text-gray-500">Rating:</span> 
// //                                     <span className="ml-2 text-yellow-500">⭐ {vehicle.rating}</span>
// //                                     <span className="text-xs text-gray-500 ml-1">({vehicle.totalTrips} trips)</span>
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Features & Specifications */}
// //                     <div className="mb-6">
// //                         <h4 className="font-semibold text-gray-800 mb-3">Features & Specifications</h4>
// //                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// //                             <div className="border rounded-lg p-3 text-center">
// //                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                                 <p className="text-xs text-gray-600">Air Conditioning</p>
// //                             </div>
// //                             <div className="border rounded-lg p-3 text-center">
// //                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                                 <p className="text-xs text-gray-600">Bluetooth</p>
// //                             </div>
// //                             <div className="border rounded-lg p-3 text-center">
// //                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                                 <p className="text-xs text-gray-600">USB Charging</p>
// //                             </div>
// //                             <div className="border rounded-lg p-3 text-center">
// //                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                                 <p className="text-xs text-gray-600">Backup Camera</p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Action Buttons */}
// //                     <div className="flex gap-4 pt-4 border-t border-gray-200">
// //                         <button
// //                             onClick={() => {
// //                                 onClose();
// //                                 onBookNow(vehicle);
// //                             }}
// //                             className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center justify-center gap-2"
// //                         >
// //                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                             </svg>
// //                             Book This Vehicle
// //                         </button>
// //                         <button
// //                             onClick={onClose}
// //                             className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default VehicleDetailModal;


// // src/Pages/Customer/components/VehicleDetailModal.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VehicleDetailModal = ({ vehicle, onClose, onBookNow, formatCurrency, getFuelTypeDisplay, getTransmissionDisplay, BASE_URL }) => {
//     const [agentName, setAgentName] = useState('');
//     const [imageUrl, setImageUrl] = useState(null);
//     const [imageError, setImageError] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
//     // Mock multiple images (since backend only has one)
//     const vehicleImages = vehicle?.vehicleImage ? [vehicle.vehicleImage] : [];

//     useEffect(() => {
//         if (vehicle?.agentId) {
//             fetchAgentDetails(vehicle.agentId);
//         }
//         if (vehicle?.vehicleImage) {
//             setImageUrl(getFullImageUrl(vehicle.vehicleImage));
//         }
//     }, [vehicle]);

//     const fetchAgentDetails = async (agentId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`);
//             if (response.status === 200) {
//                 setAgentName(response.data.companyName || `Agent #${agentId}`);
//             }
//         } catch (err) {
//             console.error('Error fetching agent:', err);
//             setAgentName(`Agent #${agentId}`);
//         }
//     };

//     const getFullImageUrl = (imagePath) => {
//         if (!imagePath) return null;
//         if (imagePath.startsWith('http')) return imagePath;
//         if (imagePath.startsWith('/uploads')) return `${BASE_URL}${imagePath}`;
//         if (imagePath.includes('\\') || imagePath.includes('C:')) {
//             const filename = imagePath.split('\\').pop();
//             return `${BASE_URL}/uploads/vehicles/${filename}`;
//         }
//         return `${BASE_URL}/uploads/vehicles/${imagePath}`;
//     };

//     const handlePrevImage = () => {
//         setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : vehicleImages.length - 1));
//     };

//     const handleNextImage = () => {
//         setCurrentImageIndex((prev) => (prev < vehicleImages.length - 1 ? prev + 1 : 0));
//     };

//     if (!vehicle) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Image Gallery */}
//                     <div className="relative mb-6">
//                         <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
//                             {imageUrl && !imageError ? (
//                                 <img
//                                     src={imageUrl}
//                                     alt={vehicle.makeModel}
//                                     className="w-full h-full object-cover"
//                                     onError={() => setImageError(true)}
//                                 />
//                             ) : (
//                                 <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
//                                     <svg className="w-24 h-24 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                                     </svg>
//                                 </div>
//                             )}
//                         </div>
                        
//                         {/* Image Navigation Buttons */}
//                         {vehicleImages.length > 1 && (
//                             <>
//                                 <button
//                                     onClick={handlePrevImage}
//                                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
//                                 >
//                                     <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                                     </svg>
//                                 </button>
//                                 <button
//                                     onClick={handleNextImage}
//                                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
//                                 >
//                                     <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                     </svg>
//                                 </button>
//                             </>
//                         )}
                        
//                         {/* Image Counter */}
//                         {vehicleImages.length > 1 && (
//                             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//                                 {currentImageIndex + 1} / {vehicleImages.length}
//                             </div>
//                         )}
//                     </div>

//                     {/* Vehicle Info */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                         {/* Basic Info */}
//                         <div className="md:col-span-2">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.makeModel}</h3>
//                             <p className="text-gray-600 mb-4">Registration: {vehicle.regNumber}</p>
                            
//                             <div className="grid grid-cols-2 gap-4 mb-4">
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Year</p>
//                                     <p className="font-semibold text-gray-800">{vehicle.yearOfManufacture}</p>
//                                 </div>
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Color</p>
//                                     <div className="flex items-center">
//                                         <div className="w-4 h-4 rounded-full mr-2 border border-gray-300" 
//                                              style={{ backgroundColor: vehicle.color?.toLowerCase() || '#gray' }}></div>
//                                         <p className="font-semibold text-gray-800">{vehicle.color}</p>
//                                     </div>
//                                 </div>
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Fuel Type</p>
//                                     <p className="font-semibold text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
//                                 </div>
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Transmission</p>
//                                     <p className="font-semibold text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
//                                 </div>
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Seating</p>
//                                     <p className="font-semibold text-gray-800">{vehicle.seatingCapacity} seats</p>
//                                 </div>
//                                 <div className="bg-teal-50 p-3 rounded-lg">
//                                     <p className="text-xs text-teal-600">Daily Rate</p>
//                                     <p className="font-semibold text-teal-600">{formatCurrency(vehicle.pricePerDay)}/day</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Provider Info */}
//                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4">
//                             <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                 </svg>
//                                 Provider Information
//                             </h4>
//                             <div className="space-y-2 text-sm">
//                                 <p><span className="text-gray-500">Company:</span> <span className="font-medium">{agentName}</span></p>
//                                 <p><span className="text-gray-500">Location:</span> <span className="font-medium">{vehicle.location || 'Sri Lanka'}</span></p>
//                                 <p><span className="text-gray-500">Rating:</span> 
//                                     <span className="ml-2 text-yellow-500">⭐ {vehicle.rating}</span>
//                                     <span className="text-xs text-gray-500 ml-1">({vehicle.totalTrips} trips)</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Features & Specifications */}
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-gray-800 mb-3">Features & Specifications</h4>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                             <div className="border rounded-lg p-3 text-center">
//                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <p className="text-xs text-gray-600">Air Conditioning</p>
//                             </div>
//                             <div className="border rounded-lg p-3 text-center">
//                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <p className="text-xs text-gray-600">Bluetooth</p>
//                             </div>
//                             <div className="border rounded-lg p-3 text-center">
//                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <p className="text-xs text-gray-600">USB Charging</p>
//                             </div>
//                             <div className="border rounded-lg p-3 text-center">
//                                 <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <p className="text-xs text-gray-600">Backup Camera</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-4 pt-4 border-t border-gray-200">
//                         <button
//                             onClick={() => {
//                                 onClose();
//                                 onBookNow(vehicle);
//                             }}
//                             className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center justify-center gap-2"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                             </svg>
//                             Book This Vehicle
//                         </button>
//                         <button
//                             onClick={onClose}
//                             className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VehicleDetailModal;



// src/Pages/Customer/components/VehicleDetailModal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const VehicleDetailModal = ({ vehicle, onClose, onBookNow, formatCurrency, getFuelTypeDisplay, getTransmissionDisplay, BASE_URL }) => {
    const [agentName, setAgentName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Mock multiple images (since backend only has one)
    const vehicleImages = vehicle?.vehicleImage ? [vehicle.vehicleImage] : [];

    // Memoize fetchAgentDetails to prevent recreation on each render
    const fetchAgentDetails = useCallback(async (agentId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`);
            if (response.status === 200) {
                setAgentName(response.data.companyName || `Agent #${agentId}`);
            }
        } catch (err) {
            console.error('Error fetching agent:', err);
            setAgentName(`Agent #${agentId}`);
        }
    }, [BASE_URL]);

    // Memoize getFullImageUrl to prevent recreation
    const getFullImageUrl = useCallback((imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        if (imagePath.startsWith('/uploads')) return `${BASE_URL}${imagePath}`;
        if (imagePath.includes('\\') || imagePath.includes('C:')) {
            const filename = imagePath.split('\\').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        return `${BASE_URL}/uploads/vehicles/${imagePath}`;
    }, [BASE_URL]);

    useEffect(() => {
        let isMounted = true; // Prevent state updates if component unmounts
        
        const loadData = async () => {
            if (vehicle?.agentId) {
                try {
                    await fetchAgentDetails(vehicle.agentId);
                } catch (err) {
                    console.error('Error in fetchAgentDetails:', err);
                }
            }
            
            if (vehicle?.vehicleImage && isMounted) {
                const url = getFullImageUrl(vehicle.vehicleImage);
                setImageUrl(url);
            }
        };

        loadData();

        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [vehicle, fetchAgentDetails, getFullImageUrl]); // Add dependencies

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : vehicleImages.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev < vehicleImages.length - 1 ? prev + 1 : 0));
    };

    if (!vehicle) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <div className="relative mb-6">
                        <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
                            {imageUrl && !imageError ? (
                                <img
                                    src={imageUrl}
                                    alt={vehicle.makeModel}
                                    className="w-full h-full object-cover"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
                                    <svg className="w-24 h-24 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        
                        {/* Image Navigation Buttons */}
                        {vehicleImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
                                >
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
                                >
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                        
                        {/* Image Counter */}
                        {vehicleImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {vehicleImages.length}
                            </div>
                        )}
                    </div>

                    {/* Vehicle Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Basic Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.makeModel}</h3>
                            <p className="text-gray-600 mb-4">Registration: {vehicle.regNumber}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Year</p>
                                    <p className="font-semibold text-gray-800">{vehicle.yearOfManufacture}</p>
                                </div>
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Color</p>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-2 border border-gray-300" 
                                             style={{ backgroundColor: vehicle.color?.toLowerCase() || '#gray' }}></div>
                                        <p className="font-semibold text-gray-800">{vehicle.color}</p>
                                    </div>
                                </div>
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Fuel Type</p>
                                    <p className="font-semibold text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
                                </div>
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Transmission</p>
                                    <p className="font-semibold text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
                                </div>
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Seating</p>
                                    <p className="font-semibold text-gray-800">{vehicle.seatingCapacity} seats</p>
                                </div>
                                <div className="bg-teal-50 p-3 rounded-lg">
                                    <p className="text-xs text-teal-600">Daily Rate</p>
                                    <p className="font-semibold text-teal-600">{formatCurrency(vehicle.pricePerDay)}/day</p>
                                </div>
                            </div>
                        </div>

                        {/* Provider Info */}
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4">
                            <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Provider Information
                            </h4>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-gray-500">Company:</span> <span className="font-medium">{agentName}</span></p>
                                <p><span className="text-gray-500">Location:</span> <span className="font-medium">{vehicle.location || 'Sri Lanka'}</span></p>
                                <p><span className="text-gray-500">Rating:</span> 
                                    <span className="ml-2 text-yellow-500">⭐ {vehicle.rating}</span>
                                    <span className="text-xs text-gray-500 ml-1">({vehicle.totalTrips} trips)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features & Specifications */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Features & Specifications</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="border rounded-lg p-3 text-center">
                                <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-gray-600">Air Conditioning</p>
                            </div>
                            <div className="border rounded-lg p-3 text-center">
                                <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-gray-600">Bluetooth</p>
                            </div>
                            <div className="border rounded-lg p-3 text-center">
                                <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-gray-600">USB Charging</p>
                            </div>
                            <div className="border rounded-lg p-3 text-center">
                                <svg className="w-6 h-6 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-gray-600">Backup Camera</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200">
                        <button
                            onClick={() => {
                                onClose();
                                onBookNow(vehicle);
                            }}
                            className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book This Vehicle
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetailModal;