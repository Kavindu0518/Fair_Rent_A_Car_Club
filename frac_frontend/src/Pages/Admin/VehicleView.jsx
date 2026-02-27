// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const AllVehiclesPage = () => {
// //     const [vehicles, setVehicles] = useState([]);
// //     const [filteredVehicles, setFilteredVehicles] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [errorMessage, setErrorMessage] = useState('');
    
// //     // Filter states
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
// //     const [transmissionFilter, setTransmissionFilter] = useState('');
// //     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
// //     const [colorFilter, setColorFilter] = useState('');
    
// //     // Available filters
// //     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
// //     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
// //     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];
// //     const colors = [
// //         'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
// //         'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
// //     ];

// //     // Fetch vehicles on component mount
// //     useEffect(() => {
// //         fetchVehicles();
// //     }, []);

// //     // Apply filters whenever filter states change
// //     useEffect(() => {
// //         applyFilters();
// //     }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, colorFilter, vehicles]);

// //     const fetchVehicles = async () => {
// //         setIsLoading(true);
// //         setErrorMessage('');
        
// //         try {
// //             const response = await axios.get('http://localhost:8080/api/v1/vehicle/getAll', {
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 setVehicles(response.data);
// //                 setFilteredVehicles(response.data);
// //             }
// //         } catch (error) {
// //             console.error('Error fetching vehicles:', error);
            
// //             if (error.response) {
// //                 setErrorMessage(`Error ${error.response.status}: Failed to load vehicles`);
// //             } else if (error.request) {
// //                 setErrorMessage('Network error. Please check your connection.');
// //             } else {
// //                 setErrorMessage('An unexpected error occurred.');
// //             }
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const applyFilters = () => {
// //         let result = [...vehicles];

// //         // Apply search filter
// //         if (searchTerm) {
// //             const term = searchTerm.toLowerCase();
// //             result = result.filter(vehicle =>
// //                 vehicle.regNumber.toLowerCase().includes(term) ||
// //                 vehicle.makeModel.toLowerCase().includes(term) ||
// //                 vehicle.color.toLowerCase().includes(term)
// //             );
// //         }

// //         // Apply fuel type filter
// //         if (fuelTypeFilter) {
// //             result = result.filter(vehicle => vehicle.fuelType === fuelTypeFilter);
// //         }

// //         // Apply transmission filter
// //         if (transmissionFilter) {
// //             result = result.filter(vehicle => vehicle.transmissionType === transmissionFilter);
// //         }

// //         // Apply seating capacity filter
// //         if (seatingCapacityFilter) {
// //             result = result.filter(vehicle => vehicle.seatingCapacity === parseInt(seatingCapacityFilter));
// //         }

// //         // Apply color filter
// //         if (colorFilter) {
// //             result = result.filter(vehicle => vehicle.color === colorFilter);
// //         }

// //         setFilteredVehicles(result);
// //     };

// //     const clearFilters = () => {
// //         setSearchTerm('');
// //         setFuelTypeFilter('');
// //         setTransmissionFilter('');
// //         setSeatingCapacityFilter('');
// //         setColorFilter('');
// //     };

// //     const getFuelTypeDisplay = (type) => {
// //         switch (type) {
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

// //     const getVehicleAge = (year) => {
// //         const currentYear = new Date().getFullYear();
// //         const age = currentYear - year;
// //         return age === 0 ? 'New' : `${age} year${age > 1 ? 's' : ''} old`;
// //     };

// //     const handleDeleteVehicle = async (id) => {
// //         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
// //             return;
// //         }

// //         try {
// //             await axios.delete(`http://localhost:8080/api/v1/vehicle/delete/${id}`);
// //             // Remove the vehicle from the list
// //             setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
// //             // Show success message
// //             alert('Vehicle deleted successfully!');
// //         } catch (error) {
// //             console.error('Error deleting vehicle:', error);
// //             alert('Failed to delete vehicle. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 p-4 md:p-8">
// //             <div className="max-w-7xl mx-auto">
// //                 {/* Header Section */}
// //                 <div className="mb-8">
// //                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// //                         <div>
// //                             <h1 className="text-4xl font-bold text-gray-800 mb-2">Vehicle Fleet</h1>
// //                             <p className="text-gray-600">Browse and manage all registered vehicles</p>
// //                         </div>
// //                         <div className="flex gap-4">
// //                             <a 
// //                                 href="/vehicle/register" 
// //                                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 shadow-lg hover:shadow-xl"
// //                             >
// //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                                 </svg>
// //                                 Add New Vehicle
// //                             </a>
// //                             <a 
// //                                 href="/agent/dashboard" 
// //                                 className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition duration-200"
// //                             >
// //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// //                                 </svg>
// //                                 Back to Dashboard
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Stats Cards */}
// //                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //                     <div className="bg-white rounded-xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-teal-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// //                                 <p className="text-2xl font-bold text-gray-800">{vehicles.length}</p>
// //                             </div>
// //                         </div>
// //                     </div>
                    
// //                     <div className="bg-white rounded-xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-blue-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Available</p>
// //                                 <p className="text-2xl font-bold text-gray-800">
// //                                     {vehicles.filter(v => !v.isBooked).length}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
                    
// //                     <div className="bg-white rounded-xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-green-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Active</p>
// //                                 <p className="text-2xl font-bold text-gray-800">
// //                                     {vehicles.filter(v => v.status === 'ACTIVE').length}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
                    
// //                     <div className="bg-white rounded-xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-purple-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Types</p>
// //                                 <p className="text-2xl font-bold text-gray-800">
// //                                     {[...new Set(vehicles.map(v => v.fuelType))].length}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Filters Section */}
// //                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
// //                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Filters</h2>
// //                         <div className="flex gap-4">
// //                             <button
// //                                 onClick={clearFilters}
// //                                 className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
// //                             >
// //                                 Clear All
// //                             </button>
// //                             <button
// //                                 onClick={fetchVehicles}
// //                                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
// //                             >
// //                                 Refresh
// //                             </button>
// //                         </div>
// //                     </div>

// //                     {/* Search Bar */}
// //                     <div className="mb-6">
// //                         <div className="relative">
// //                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                                 </svg>
// //                             </div>
// //                             <input
// //                                 type="text"
// //                                 value={searchTerm}
// //                                 onChange={(e) => setSearchTerm(e.target.value)}
// //                                 className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
// //                                 placeholder="Search by registration, make/model, or color..."
// //                             />
// //                         </div>
// //                     </div>

// //                     {/* Filter Grid */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                         {/* Fuel Type Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
// //                             <select
// //                                 value={fuelTypeFilter}
// //                                 onChange={(e) => setFuelTypeFilter(e.target.value)}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
// //                             >
// //                                 <option value="">All Fuel Types</option>
// //                                 {fuelTypes.map(type => (
// //                                     <option key={type} value={type}>{getFuelTypeDisplay(type)}</option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         {/* Transmission Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
// //                             <select
// //                                 value={transmissionFilter}
// //                                 onChange={(e) => setTransmissionFilter(e.target.value)}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
// //                             >
// //                                 <option value="">All Transmissions</option>
// //                                 {transmissionTypes.map(type => (
// //                                     <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         {/* Seating Capacity Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Seating Capacity</label>
// //                             <select
// //                                 value={seatingCapacityFilter}
// //                                 onChange={(e) => setSeatingCapacityFilter(e.target.value)}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
// //                             >
// //                                 <option value="">All Capacities</option>
// //                                 {seatingCapacities.map(capacity => (
// //                                     <option key={capacity} value={capacity}>{capacity} seats</option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         {/* Color Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
// //                             <select
// //                                 value={colorFilter}
// //                                 onChange={(e) => setColorFilter(e.target.value)}
// //                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
// //                             >
// //                                 <option value="">All Colors</option>
// //                                 {colors.map(color => (
// //                                     <option key={color} value={color}>{color}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                     </div>

// //                     {/* Active Filters Display */}
// //                     {(fuelTypeFilter || transmissionFilter || seatingCapacityFilter || colorFilter) && (
// //                         <div className="mt-6 pt-6 border-t border-gray-200">
// //                             <p className="text-sm font-medium text-gray-700 mb-2">Active Filters:</p>
// //                             <div className="flex flex-wrap gap-2">
// //                                 {fuelTypeFilter && (
// //                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
// //                                         Fuel: {getFuelTypeDisplay(fuelTypeFilter)}
// //                                         <button
// //                                             onClick={() => setFuelTypeFilter('')}
// //                                             className="ml-2 text-blue-600 hover:text-blue-800"
// //                                         >
// //                                             ×
// //                                         </button>
// //                                     </span>
// //                                 )}
// //                                 {transmissionFilter && (
// //                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
// //                                         Transmission: {getTransmissionDisplay(transmissionFilter)}
// //                                         <button
// //                                             onClick={() => setTransmissionFilter('')}
// //                                             className="ml-2 text-green-600 hover:text-green-800"
// //                                         >
// //                                             ×
// //                                         </button>
// //                                     </span>
// //                                 )}
// //                                 {seatingCapacityFilter && (
// //                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
// //                                         Seats: {seatingCapacityFilter}
// //                                         <button
// //                                             onClick={() => setSeatingCapacityFilter('')}
// //                                             className="ml-2 text-purple-600 hover:text-purple-800"
// //                                         >
// //                                             ×
// //                                         </button>
// //                                     </span>
// //                                 )}
// //                                 {colorFilter && (
// //                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
// //                                         Color: {colorFilter}
// //                                         <button
// //                                             onClick={() => setColorFilter('')}
// //                                             className="ml-2 text-yellow-600 hover:text-yellow-800"
// //                                         >
// //                                             ×
// //                                         </button>
// //                                     </span>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     )}
// //                 </div>

// //                 {/* Results Count */}
// //                 <div className="mb-6">
// //                     <p className="text-gray-600">
// //                         Showing <span className="font-bold">{filteredVehicles.length}</span> of <span className="font-bold">{vehicles.length}</span> vehicles
// //                     </p>
// //                 </div>

// //                 {/* Loading State */}
// //                 {isLoading && (
// //                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                         <div className="flex flex-col items-center justify-center">
// //                             <svg className="animate-spin h-12 w-12 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24">
// //                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                             </svg>
// //                             <p className="text-lg text-gray-700">Loading vehicles...</p>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Error State */}
// //                 {errorMessage && !isLoading && (
// //                     <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
// //                         <div className="flex flex-col items-center justify-center">
// //                             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
// //                                 <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                             </div>
// //                             <h3 className="text-xl font-bold text-gray-800 mb-2">Unable to Load Vehicles</h3>
// //                             <p className="text-gray-600 mb-6">{errorMessage}</p>
// //                             <button
// //                                 onClick={fetchVehicles}
// //                                 className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// //                             >
// //                                 Try Again
// //                             </button>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* No Results State */}
// //                 {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
// //                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                         <div className="flex flex-col items-center justify-center">
// //                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
// //                                 <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                             </div>
// //                             <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
// //                             <p className="text-gray-600 mb-6">Try adjusting your filters or add a new vehicle</p>
// //                             <div className="flex gap-4">
// //                                 <button
// //                                     onClick={clearFilters}
// //                                     className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                                 >
// //                                     Clear Filters
// //                                 </button>
// //                                 <a
// //                                     href="/vehicle/register"
// //                                     className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// //                                 >
// //                                     Add Vehicle
// //                                 </a>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Vehicles Grid */}
// //                 {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                         {filteredVehicles.map((vehicle) => (
// //                             <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1">
// //                                 {/* Vehicle Image */}
// //                                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
// //                                     {vehicle.vehicleImage ? (
// //                                         <img
// //                                             src={vehicle.vehicleImage}
// //                                             alt={vehicle.makeModel}
// //                                             className="w-full h-full object-cover"
// //                                         />
// //                                     ) : (
// //                                         <div className="w-full h-full flex items-center justify-center">
// //                                             <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                             </svg>
// //                                         </div>
// //                                     )}
// //                                     {/* Registration Badge */}
// //                                     <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white px-3 py-1 rounded-full text-sm font-bold">
// //                                         {vehicle.regNumber}
// //                                     </div>
// //                                     {/* Age Badge */}
// //                                     <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
// //                                         {getVehicleAge(vehicle.yearOfManufacture)}
// //                                     </div>
// //                                 </div>

// //                                 {/* Vehicle Info */}
// //                                 <div className="p-6">
// //                                     <div className="flex justify-between items-start mb-4">
// //                                         <div>
// //                                             <h3 className="text-xl font-bold text-gray-800 mb-1">{vehicle.makeModel}</h3>
// //                                             <p className="text-gray-600">Year: {vehicle.yearOfManufacture}</p>
// //                                         </div>
// //                                         <div className={`w-6 h-6 rounded-full border-2 ${vehicle.color.toLowerCase()}`} 
// //                                              style={{ backgroundColor: vehicle.color.toLowerCase() }} 
// //                                              title={vehicle.color} />
// //                                     </div>

// //                                     {/* Specifications */}
// //                                     <div className="grid grid-cols-2 gap-4 mb-6">
// //                                         <div className="flex items-center">
// //                                             <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// //                                             </svg>
// //                                             <span className="text-gray-700">{vehicle.seatingCapacity} Seats</span>
// //                                         </div>
// //                                         <div className="flex items-center">
// //                                             <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                                             </svg>
// //                                             <span className="text-gray-700">{getFuelTypeDisplay(vehicle.fuelType)}</span>
// //                                         </div>
// //                                         <div className="flex items-center">
// //                                             <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                             <span className="text-gray-700">{getTransmissionDisplay(vehicle.transmissionType)}</span>
// //                                         </div>
// //                                         <div className="flex items-center">
// //                                             <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
// //                                             </svg>
// //                                             <span className="text-gray-700">{vehicle.color}</span>
// //                                         </div>
// //                                     </div>

// //                                     {/* Action Buttons */}
// //                                     <div className="flex gap-3">
// //                                         <a
// //                                             href={`/vehicle/edit/${vehicle.id}`}
// //                                             className="flex-1 px-4 py-2 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition duration-200"
// //                                         >
// //                                             Edit
// //                                         </a>
// //                                         <button
// //                                             onClick={() => handleDeleteVehicle(vehicle.id)}
// //                                             className="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition duration-200"
// //                                         >
// //                                             Delete
// //                                         </button>
// //                                         <a
// //                                             href={`/vehicle/view/${vehicle.id}`}
// //                                             className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition duration-200"
// //                                         >
// //                                             View
// //                                         </a>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}

// //                 {/* Footer */}
// //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// //                     <p className="text-gray-600">
// //                         Showing {filteredVehicles.length} of {vehicles.length} vehicles
// //                     </p>
// //                     <p className="text-gray-500 text-sm mt-2">
// //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AllVehiclesPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllVehiclesPage = () => {
//     const [vehicles, setVehicles] = useState([]);
//     const [filteredVehicles, setFilteredVehicles] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
    
//     // Filter states
//     const [searchTerm, setSearchTerm] = useState('');
//     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
//     const [transmissionFilter, setTransmissionFilter] = useState('');
//     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
//     const [colorFilter, setColorFilter] = useState('');
    
//     // Available filters
//     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
//     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
//     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];
//     const colors = [
//         'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
//         'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
//     ];

//     // Base URL for backend
//     const BASE_URL = 'http://localhost:8080';

//     // Fetch vehicles on component mount
//     useEffect(() => {
//         fetchVehicles();
//     }, []);

//     // Apply filters whenever filter states change
//     useEffect(() => {
//         applyFilters();
//     }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, colorFilter, vehicles]);

//     const fetchVehicles = async () => {
//         setIsLoading(true);
//         setErrorMessage('');
        
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 console.log('Fetched vehicles:', response.data);
//                 setVehicles(response.data);
//                 setFilteredVehicles(response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching vehicles:', error);
            
//             if (error.response) {
//                 setErrorMessage(`Error ${error.response.status}: Failed to load vehicles`);
//             } else if (error.request) {
//                 setErrorMessage('Network error. Please check your connection.');
//             } else {
//                 setErrorMessage('An unexpected error occurred.');
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const applyFilters = () => {
//         let result = [...vehicles];

//         // Apply search filter
//         if (searchTerm) {
//             const term = searchTerm.toLowerCase();
//             result = result.filter(vehicle =>
//                 vehicle.regNumber.toLowerCase().includes(term) ||
//                 vehicle.makeModel.toLowerCase().includes(term) ||
//                 vehicle.color.toLowerCase().includes(term)
//             );
//         }

//         // Apply fuel type filter
//         if (fuelTypeFilter) {
//             result = result.filter(vehicle => vehicle.fuelType === fuelTypeFilter);
//         }

//         // Apply transmission filter
//         if (transmissionFilter) {
//             result = result.filter(vehicle => vehicle.transmissionType === transmissionFilter);
//         }

//         // Apply seating capacity filter
//         if (seatingCapacityFilter) {
//             result = result.filter(vehicle => vehicle.seatingCapacity === parseInt(seatingCapacityFilter));
//         }

//         // Apply color filter
//         if (colorFilter) {
//             result = result.filter(vehicle => vehicle.color === colorFilter);
//         }

//         setFilteredVehicles(result);
//     };

//     const clearFilters = () => {
//         setSearchTerm('');
//         setFuelTypeFilter('');
//         setTransmissionFilter('');
//         setSeatingCapacityFilter('');
//         setColorFilter('');
//     };

//     const getFuelTypeDisplay = (type) => {
//         switch (type) {
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

//     const getVehicleAge = (year) => {
//         const currentYear = new Date().getFullYear();
//         const age = currentYear - year;
//         return age === 0 ? 'New' : `${age} year${age > 1 ? 's' : ''} old`;
//     };

//     const getFullImageUrl = (imagePath) => {
//         if (!imagePath) return null;
        
//         console.log('Original image path:', imagePath);
        
//         // If it's already a full URL
//         if (imagePath.startsWith('http')) {
//             return imagePath;
//         }
        
//         // If it starts with /uploads, prepend the base URL
//         if (imagePath.startsWith('/uploads')) {
//             return `${BASE_URL}${imagePath}`;
//         }
        
//         // If it's a Windows path (contains backslashes or C:)
//         if (imagePath.includes('\\') || imagePath.includes('C:')) {
//             // Extract just the filename
//             const filename = imagePath.split('\\').pop();
//             return `${BASE_URL}/uploads/vehicles/${filename}`;
//         }
        
//         // If it's just a filename
//         return `${BASE_URL}/uploads/vehicles/${imagePath}`;
//     };

//     const handleDeleteVehicle = async (id) => {
//         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
//             return;
//         }

//         try {
//             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`);
//             // Remove the vehicle from the list
//             setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
//             alert('Vehicle deleted successfully!');
//         } catch (error) {
//             console.error('Error deleting vehicle:', error);
//             alert('Failed to delete vehicle. Please try again.');
//         }
//     };

//     // Vehicle Image Component with Error Handling
//     const VehicleImage = ({ vehicle }) => {
//         const [imageError, setImageError] = useState(false);
//         const [imageUrl, setImageUrl] = useState(null);

//         useEffect(() => {
//             if (vehicle.vehicleImage) {
//                 setImageUrl(getFullImageUrl(vehicle.vehicleImage));
//             }
//         }, [vehicle.vehicleImage]);

//         if (imageError || !imageUrl) {
//             return (
//                 <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
//                     <div className="text-center p-4">
//                         <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                         </svg>
//                         <p className="text-sm text-gray-500 font-medium">{vehicle.makeModel}</p>
//                         <p className="text-xs text-gray-400 mt-1">No image available</p>
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <img
//                 src={imageUrl}
//                 alt={`${vehicle.makeModel} - ${vehicle.regNumber}`}
//                 className="w-full h-full object-cover"
//                 onError={() => {
//                     console.error('Image failed to load:', imageUrl);
//                     setImageError(true);
//                 }}
//                 onLoad={() => console.log('Image loaded successfully:', imageUrl)}
//             />
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 p-4 md:p-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="mb-8">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                         <div>
//                             <h1 className="text-4xl font-bold text-gray-800 mb-2">Vehicle Fleet</h1>
//                             <p className="text-gray-600">Browse and manage all registered vehicles</p>
//                         </div>
//                         <div className="flex gap-4">
//                             <a 
//                                 href="/vehicle/register" 
//                                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 shadow-lg hover:shadow-xl"
//                             >
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                 </svg>
//                                 Add New Vehicle
//                             </a>
//                             <a 
//                                 href="/agent/dashboard" 
//                                 className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition duration-200"
//                             >
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                                 Back to Dashboard
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//                     <div className="bg-white rounded-xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-teal-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Total Vehicles</p>
//                                 <p className="text-2xl font-bold text-gray-800">{vehicles.length}</p>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="bg-white rounded-xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-blue-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Fuel Types</p>
//                                 <p className="text-2xl font-bold text-gray-800">
//                                     {new Set(vehicles.map(v => v.fuelType)).size}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="bg-white rounded-xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-green-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Transmission</p>
//                                 <p className="text-2xl font-bold text-gray-800">
//                                     {new Set(vehicles.map(v => v.transmissionType)).size}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="bg-white rounded-xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-purple-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Colors</p>
//                                 <p className="text-2xl font-bold text-gray-800">
//                                     {new Set(vehicles.map(v => v.color)).size}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Filters Section */}
//                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Filters</h2>
//                         <div className="flex gap-4">
//                             <button
//                                 onClick={clearFilters}
//                                 className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
//                             >
//                                 Clear All
//                             </button>
//                             <button
//                                 onClick={fetchVehicles}
//                                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
//                             >
//                                 Refresh
//                             </button>
//                         </div>
//                     </div>

//                     {/* Search Bar */}
//                     <div className="mb-6">
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                 </svg>
//                             </div>
//                             <input
//                                 type="text"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                                 placeholder="Search by registration, make/model, or color..."
//                             />
//                         </div>
//                     </div>

//                     {/* Filter Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {/* Fuel Type Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
//                             <select
//                                 value={fuelTypeFilter}
//                                 onChange={(e) => setFuelTypeFilter(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
//                             >
//                                 <option value="">All Fuel Types</option>
//                                 {fuelTypes.map(type => (
//                                     <option key={type} value={type}>{getFuelTypeDisplay(type)}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Transmission Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
//                             <select
//                                 value={transmissionFilter}
//                                 onChange={(e) => setTransmissionFilter(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
//                             >
//                                 <option value="">All Transmissions</option>
//                                 {transmissionTypes.map(type => (
//                                     <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Seating Capacity Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Seating Capacity</label>
//                             <select
//                                 value={seatingCapacityFilter}
//                                 onChange={(e) => setSeatingCapacityFilter(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
//                             >
//                                 <option value="">All Capacities</option>
//                                 {seatingCapacities.map(capacity => (
//                                     <option key={capacity} value={capacity}>{capacity} seats</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Color Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
//                             <select
//                                 value={colorFilter}
//                                 onChange={(e) => setColorFilter(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
//                             >
//                                 <option value="">All Colors</option>
//                                 {colors.map(color => (
//                                     <option key={color} value={color}>{color}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Active Filters Display */}
//                     {(fuelTypeFilter || transmissionFilter || seatingCapacityFilter || colorFilter) && (
//                         <div className="mt-6 pt-6 border-t border-gray-200">
//                             <p className="text-sm font-medium text-gray-700 mb-2">Active Filters:</p>
//                             <div className="flex flex-wrap gap-2">
//                                 {fuelTypeFilter && (
//                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
//                                         Fuel: {getFuelTypeDisplay(fuelTypeFilter)}
//                                         <button
//                                             onClick={() => setFuelTypeFilter('')}
//                                             className="ml-2 text-blue-600 hover:text-blue-800"
//                                         >
//                                             ×
//                                         </button>
//                                     </span>
//                                 )}
//                                 {transmissionFilter && (
//                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
//                                         Transmission: {getTransmissionDisplay(transmissionFilter)}
//                                         <button
//                                             onClick={() => setTransmissionFilter('')}
//                                             className="ml-2 text-green-600 hover:text-green-800"
//                                         >
//                                             ×
//                                         </button>
//                                     </span>
//                                 )}
//                                 {seatingCapacityFilter && (
//                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
//                                         Seats: {seatingCapacityFilter}
//                                         <button
//                                             onClick={() => setSeatingCapacityFilter('')}
//                                             className="ml-2 text-purple-600 hover:text-purple-800"
//                                         >
//                                             ×
//                                         </button>
//                                     </span>
//                                 )}
//                                 {colorFilter && (
//                                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
//                                         Color: {colorFilter}
//                                         <button
//                                             onClick={() => setColorFilter('')}
//                                             className="ml-2 text-yellow-600 hover:text-yellow-800"
//                                         >
//                                             ×
//                                         </button>
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Results Count */}
//                 <div className="mb-6">
//                     <p className="text-gray-600">
//                         Showing <span className="font-bold">{filteredVehicles.length}</span> of <span className="font-bold">{vehicles.length}</span> vehicles
//                     </p>
//                 </div>

//                 {/* Loading State */}
//                 {isLoading && (
//                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                         <div className="flex flex-col items-center justify-center">
//                             <svg className="animate-spin h-12 w-12 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             <p className="text-lg text-gray-700">Loading vehicles...</p>
//                         </div>
//                     </div>
//                 )}

//                 {/* Error State */}
//                 {errorMessage && !isLoading && (
//                     <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
//                         <div className="flex flex-col items-center justify-center">
//                             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
//                                 <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">Unable to Load Vehicles</h3>
//                             <p className="text-gray-600 mb-6">{errorMessage}</p>
//                             <button
//                                 onClick={fetchVehicles}
//                                 className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                             >
//                                 Try Again
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* No Results State */}
//                 {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
//                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                         <div className="flex flex-col items-center justify-center">
//                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                                 <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
//                             <p className="text-gray-600 mb-6">Try adjusting your filters or add a new vehicle</p>
//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={clearFilters}
//                                     className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                                 >
//                                     Clear Filters
//                                 </button>
//                                 <a
//                                     href="/vehicle/register"
//                                     className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                                 >
//                                     Add Vehicle
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Vehicles Grid */}
//                 {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {filteredVehicles.map((vehicle) => (
//                             <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1">
//                                 {/* Vehicle Image */}
//                                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                                     <VehicleImage vehicle={vehicle} />
                                    
//                                     {/* Registration Badge */}
//                                     <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white px-3 py-1 rounded-full text-sm font-bold">
//                                         {vehicle.regNumber}
//                                     </div>
                                    
//                                     {/* Age Badge */}
//                                     <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
//                                         {getVehicleAge(vehicle.yearOfManufacture)}
//                                     </div>
//                                 </div>

//                                 {/* Vehicle Info */}
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-4">
//                                         <div>
//                                             <h3 className="text-xl font-bold text-gray-800 mb-1">{vehicle.makeModel}</h3>
//                                             <p className="text-gray-600">Year: {vehicle.yearOfManufacture}</p>
//                                         </div>
//                                         <div 
//                                             className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm" 
//                                             style={{ 
//                                                 backgroundColor: vehicle.color.toLowerCase(),
//                                                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                                             }} 
//                                             title={vehicle.color}
//                                         />
//                                     </div>

//                                     {/* Specifications */}
//                                     <div className="grid grid-cols-2 gap-4 mb-6">
//                                         <div className="flex items-center">
//                                             <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                             </svg>
//                                             <span className="text-gray-700">{vehicle.seatingCapacity} Seats</span>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                             </svg>
//                                             <span className="text-gray-700">{getFuelTypeDisplay(vehicle.fuelType)}</span>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             <span className="text-gray-700">{getTransmissionDisplay(vehicle.transmissionType)}</span>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//                                             </svg>
//                                             <span className="text-gray-700">{vehicle.color}</span>
//                                         </div>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="flex gap-3">
//                                         <a
//                                             href={`/vehicle/edit/${vehicle.id}`}
//                                             className="flex-1 px-4 py-2 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition duration-200"
//                                         >
//                                             Edit
//                                         </a>
//                                         <button
//                                             onClick={() => handleDeleteVehicle(vehicle.id)}
//                                             className="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition duration-200"
//                                         >
//                                             Delete
//                                         </button>
//                                         <a
//                                             href={`/vehicle/view/${vehicle.id}`}
//                                             className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition duration-200"
//                                         >
//                                             View
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* Footer */}
//                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
//                     <p className="text-gray-600">
//                         Showing {filteredVehicles.length} of {vehicles.length} vehicles
//                     </p>
//                     <p className="text-gray-500 text-sm mt-2">
//                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllVehiclesPage;



import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const AllVehiclesPage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [fuelTypeFilter, setFuelTypeFilter] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    
    // Available filters
    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];
    const colors = [
        'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
        'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
    ];

    // Base URL for backend
    const BASE_URL = 'http://localhost:8080';

    // Apply filters function - wrapped in useCallback
    const applyFilters = useCallback(() => {
        let result = [...vehicles];

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(vehicle =>
                vehicle.regNumber.toLowerCase().includes(term) ||
                vehicle.makeModel.toLowerCase().includes(term) ||
                vehicle.color.toLowerCase().includes(term)
            );
        }

        // Apply fuel type filter
        if (fuelTypeFilter) {
            result = result.filter(vehicle => vehicle.fuelType === fuelTypeFilter);
        }

        // Apply transmission filter
        if (transmissionFilter) {
            result = result.filter(vehicle => vehicle.transmissionType === transmissionFilter);
        }

        // Apply seating capacity filter
        if (seatingCapacityFilter) {
            result = result.filter(vehicle => vehicle.seatingCapacity === parseInt(seatingCapacityFilter));
        }

        // Apply color filter
        if (colorFilter) {
            result = result.filter(vehicle => vehicle.color === colorFilter);
        }

        setFilteredVehicles(result);
    }, [vehicles, searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, colorFilter]);

    // Fetch vehicles function - wrapped in useCallback
    const fetchVehicles = useCallback(async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
                timeout: 30000,
            });

            if (response.status === 200) {
                console.log('Fetched vehicles:', response.data);
                setVehicles(response.data);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            
            if (error.response) {
                setErrorMessage(`Error ${error.response.status}: Failed to load vehicles`);
            } else if (error.request) {
                setErrorMessage('Network error. Please check your connection.');
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Fetch vehicles on component mount
    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles]);

    // Apply filters whenever filter states change
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const clearFilters = () => {
        setSearchTerm('');
        setFuelTypeFilter('');
        setTransmissionFilter('');
        setSeatingCapacityFilter('');
        setColorFilter('');
    };

    const getFuelTypeDisplay = (type) => {
        switch (type) {
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

    const getVehicleAge = (year) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        return age === 0 ? 'New' : `${age} year${age > 1 ? 's' : ''} old`;
    };

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        console.log('Original image path:', imagePath);
        
        // If it's already a full URL
        if (imagePath.startsWith('http')) {
            return imagePath;
        }
        
        // If it starts with /uploads, prepend the base URL
        if (imagePath.startsWith('/uploads')) {
            return `${BASE_URL}${imagePath}`;
        }
        
        // If it's a Windows path (contains backslashes or C:)
        if (imagePath.includes('\\') || imagePath.includes('C:')) {
            // Extract just the filename
            const filename = imagePath.split('\\').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        
        // If it's just a filename
        return `${BASE_URL}/uploads/vehicles/${imagePath}`;
    };

    const handleDeleteVehicle = async (id) => {
        if (!window.confirm('Are you sure you want to delete this vehicle?')) {
            return;
        }

        try {
            await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`);
            // Remove the vehicle from the list
            setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
            alert('Vehicle deleted successfully!');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            alert('Failed to delete vehicle. Please try again.');
        }
    };

    // Vehicle Image Component with Error Handling
    const VehicleImage = ({ vehicle }) => {
        const [imageError, setImageError] = useState(false);
        const [imageUrl, setImageUrl] = useState(null);

        useEffect(() => {
            if (vehicle.vehicleImage) {
                setImageUrl(getFullImageUrl(vehicle.vehicleImage));
            }
        }, [vehicle.vehicleImage]);

        if (imageError || !imageUrl) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center p-4">
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-500 font-medium">{vehicle.makeModel}</p>
                        <p className="text-xs text-gray-400 mt-1">No image available</p>
                    </div>
                </div>
            );
        }

        return (
            <img
                src={imageUrl}
                alt={`${vehicle.makeModel} - ${vehicle.regNumber}`}
                className="w-full h-full object-cover"
                onError={() => {
                    console.error('Image failed to load:', imageUrl);
                    setImageError(true);
                }}
                onLoad={() => console.log('Image loaded successfully:', imageUrl)}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Vehicle Fleet</h1>
                            <p className="text-gray-600">Browse and manage all registered vehicles</p>
                        </div>
                        <div className="flex gap-4">
                            <a 
                                href="/vehicle/register" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add New Vehicle
                            </a>
                            <a 
                                href="/agent/dashboard" 
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition duration-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Dashboard
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-teal-100 rounded-lg">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Vehicles</p>
                                <p className="text-2xl font-bold text-gray-800">{vehicles.length}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Fuel Types</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {new Set(vehicles.map(v => v.fuelType)).size}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Transmission</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {new Set(vehicles.map(v => v.transmissionType)).size}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Colors</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {new Set(vehicles.map(v => v.color)).size}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Filters</h2>
                        <div className="flex gap-4">
                            <button
                                onClick={clearFilters}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Clear All
                            </button>
                            <button
                                onClick={fetchVehicles}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Refresh
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="Search by registration, make/model, or color..."
                            />
                        </div>
                    </div>

                    {/* Filter Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Fuel Type Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                            <select
                                value={fuelTypeFilter}
                                onChange={(e) => setFuelTypeFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
                            >
                                <option value="">All Fuel Types</option>
                                {fuelTypes.map(type => (
                                    <option key={type} value={type}>{getFuelTypeDisplay(type)}</option>
                                ))}
                            </select>
                        </div>

                        {/* Transmission Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                            <select
                                value={transmissionFilter}
                                onChange={(e) => setTransmissionFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
                            >
                                <option value="">All Transmissions</option>
                                {transmissionTypes.map(type => (
                                    <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
                                ))}
                            </select>
                        </div>

                        {/* Seating Capacity Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Seating Capacity</label>
                            <select
                                value={seatingCapacityFilter}
                                onChange={(e) => setSeatingCapacityFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
                            >
                                <option value="">All Capacities</option>
                                {seatingCapacities.map(capacity => (
                                    <option key={capacity} value={capacity}>{capacity} seats</option>
                                ))}
                            </select>
                        </div>

                        {/* Color Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                            <select
                                value={colorFilter}
                                onChange={(e) => setColorFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white"
                            >
                                <option value="">All Colors</option>
                                {colors.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {(fuelTypeFilter || transmissionFilter || seatingCapacityFilter || colorFilter) && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-700 mb-2">Active Filters:</p>
                            <div className="flex flex-wrap gap-2">
                                {fuelTypeFilter && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                                        Fuel: {getFuelTypeDisplay(fuelTypeFilter)}
                                        <button
                                            onClick={() => setFuelTypeFilter('')}
                                            className="ml-2 text-blue-600 hover:text-blue-800"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {transmissionFilter && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                                        Transmission: {getTransmissionDisplay(transmissionFilter)}
                                        <button
                                            onClick={() => setTransmissionFilter('')}
                                            className="ml-2 text-green-600 hover:text-green-800"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {seatingCapacityFilter && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                                        Seats: {seatingCapacityFilter}
                                        <button
                                            onClick={() => setSeatingCapacityFilter('')}
                                            className="ml-2 text-purple-600 hover:text-purple-800"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {colorFilter && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                        Color: {colorFilter}
                                        <button
                                            onClick={() => setColorFilter('')}
                                            className="ml-2 text-yellow-600 hover:text-yellow-800"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-bold">{filteredVehicles.length}</span> of <span className="font-bold">{vehicles.length}</span> vehicles
                    </p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <svg className="animate-spin h-12 w-12 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="text-lg text-gray-700">Loading vehicles...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {errorMessage && !isLoading && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Unable to Load Vehicles</h3>
                            <p className="text-gray-600 mb-6">{errorMessage}</p>
                            <button
                                onClick={fetchVehicles}
                                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* No Results State */}
                {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your filters or add a new vehicle</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                                >
                                    Clear Filters
                                </button>
                                <a
                                    href="/vehicle/register"
                                    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                                >
                                    Add Vehicle
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Vehicles Grid */}
                {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVehicles.map((vehicle) => (
                            <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                                {/* Vehicle Image */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <VehicleImage vehicle={vehicle} />
                                    
                                    {/* Registration Badge */}
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        {vehicle.regNumber}
                                    </div>
                                    
                                    {/* Age Badge */}
                                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                                        {getVehicleAge(vehicle.yearOfManufacture)}
                                    </div>
                                </div>

                                {/* Vehicle Info */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{vehicle.makeModel}</h3>
                                            <p className="text-gray-600">Year: {vehicle.yearOfManufacture}</p>
                                        </div>
                                        <div 
                                            className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm" 
                                            style={{ 
                                                backgroundColor: vehicle.color.toLowerCase(),
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }} 
                                            title={vehicle.color}
                                        />
                                    </div>

                                    {/* Specifications */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="text-gray-700">{vehicle.seatingCapacity} Seats</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span className="text-gray-700">{getFuelTypeDisplay(vehicle.fuelType)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">{getTransmissionDisplay(vehicle.transmissionType)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                            <span className="text-gray-700">{vehicle.color}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <a
                                            href={`/vehicle/edit/${vehicle.id}`}
                                            className="flex-1 px-4 py-2 bg-teal-600 text-white text-center font-medium rounded-lg hover:bg-teal-700 transition duration-200"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            onClick={() => handleDeleteVehicle(vehicle.id)}
                                            className="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition duration-200"
                                        >
                                            Delete
                                        </button>
                                        <a
                                            href={`/vehicle/view/${vehicle.id}`}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition duration-200"
                                        >
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-600">
                        Showing {filteredVehicles.length} of {vehicles.length} vehicles
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllVehiclesPage;