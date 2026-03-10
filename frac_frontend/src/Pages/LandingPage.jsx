// // src/Pages/LandingPage.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LandingPage = () => {
//     const navigate = useNavigate();
//     const [vehicles, setVehicles] = useState([]);
//     const [filteredVehicles, setFilteredVehicles] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
    
//     // Filter states
//     const [searchTerm, setSearchTerm] = useState('');
//     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
//     const [transmissionFilter, setTransmissionFilter] = useState('');
//     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
    
//     // Available filters
//     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
//     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
//     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15];

//     // Base URL for backend
//     const BASE_URL = 'http://localhost:8080';

//     // Define applyFilters with useCallback to include in dependencies
//     const applyFilters = useCallback(() => {
//         let result = [...vehicles];

//         // Apply search filter
//         if (searchTerm) {
//             const term = searchTerm.toLowerCase();
//             result = result.filter(vehicle =>
//                 vehicle.makeModel?.toLowerCase().includes(term) ||
//                 vehicle.regNumber?.toLowerCase().includes(term) ||
//                 vehicle.color?.toLowerCase().includes(term)
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

//         // Sort by rating to get the best vehicles
//         result.sort((a, b) => b.rating - a.rating);
        
//         // Take only top 6 vehicles
//         setFilteredVehicles(result.slice(0, 6));
//     }, [vehicles, searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter]);

//     useEffect(() => {
//         fetchVehicles();
//     }, []);

//     useEffect(() => {
//         applyFilters();
//     }, [applyFilters]); // Now includes applyFilters as dependency

//     const fetchVehicles = async () => {
//         setIsLoading(true);
//         setErrorMessage('');
        
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 // Enhance vehicles with additional data for display
//                 const vehiclesWithDetails = response.data.map(vehicle => ({
//                     ...vehicle,
//                     pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
//                     rating: (Math.random() * 2 + 3).toFixed(1),
//                     totalTrips: Math.floor(Math.random() * 200) + 50,
//                     location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
//                 }));
                
//                 setVehicles(vehiclesWithDetails);
//             }
//         } catch (error) {
//             console.error('Error fetching vehicles:', error);
//             setErrorMessage('Failed to load vehicles. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const clearFilters = () => {
//         setSearchTerm('');
//         setFuelTypeFilter('');
//         setTransmissionFilter('');
//         setSeatingCapacityFilter('');
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
//         return age === 0 ? 'Brand New' : `${age} year${age > 1 ? 's' : ''} old`;
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

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-LK', {
//             style: 'currency',
//             currency: 'LKR',
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0
//         }).format(amount).replace('LKR', 'Rs.');
//     };

//     const handleBookNow = (vehicle) => {
//         // Show login prompt - vehicle parameter is used in the message
//         const confirmLogin = window.confirm(`Please login to book the ${vehicle.makeModel}. Would you like to go to the login page?`);
//         if (confirmLogin) {
//             navigate('/customer/login', { state: { from: '/' } });
//         }
//     };

//     // Vehicle Image Component
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
//                 <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
//                     <svg className="w-20 h-20 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                 </div>
//             );
//         }

//         return (
//             <img
//                 src={imageUrl}
//                 alt={vehicle.makeModel}
//                 className="w-full h-48 object-cover"
//                 onError={() => setImageError(true)}
//             />
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             {/* Header/Navigation */}
//             <nav className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                             <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR" className="h-12 w-auto mr-4" />
//                             <span className="text-2xl font-bold">FAIR RENT A CAR</span>
//                         </div>
//                         <div className="flex gap-4">
//                             <button
//                                 onClick={() => navigate('/customer/login')}
//                                 className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition"
//                             >
//                                 Customer Login
//                             </button>
//                             <button
//                                 onClick={() => navigate('/agent/login')}
//                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition"
//                             >
//                                 Agent Login
//                             </button>
//                             <button
//                                 onClick={() => navigate('/admin/login')}
//                                 className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
//                             >
//                                 Admin
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="text-center">
//                     <h1 className="text-5xl font-bold text-gray-800 mb-4">
//                         Your Journey Begins Here
//                     </h1>
//                     <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//                         Fair Rent A Car offers the widest selection of quality vehicles at competitive prices. 
//                         From economy cars to luxury SUVs, we have the perfect vehicle for every occasion.
//                     </p>
//                     <div className="flex justify-center gap-4">
//                         <button
//                             onClick={() => navigate('/customer/register')}
//                             className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-lg font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition shadow-lg"
//                         >
//                             Register as Customer
//                         </button>
//                         <button
//                             onClick={() => navigate('/agent/register')}
//                             className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition shadow-lg"
//                         >
//                             List Your Vehicle
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Fair Rent A Car?</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Feature 1 */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                         <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
//                         <p className="text-gray-600">Book your vehicle anytime, anywhere with our easy-to-use platform.</p>
//                     </div>

//                     {/* Feature 2 */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                         <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
//                         <p className="text-gray-600">Competitive rates with transparent pricing and no hidden fees.</p>
//                     </div>

//                     {/* Feature 3 */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                         <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
//                         <p className="text-gray-600">Multiple payment options with bank-grade security.</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Search & Filter Section - NEW */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Browse Our Top Vehicles</h2>
                
//                 {/* Search and Filters */}
//                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
//                     {/* Search Bar */}
//                     <div className="mb-6">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 placeholder="Search by car model, brand, or color..."
//                                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                             />
//                             <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                         {/* Fuel Type Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
//                             <select
//                                 value={fuelTypeFilter}
//                                 onChange={(e) => setFuelTypeFilter(e.target.value)}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                             >
//                                 <option value="">All Fuels</option>
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
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                             >
//                                 <option value="">All</option>
//                                 {transmissionTypes.map(type => (
//                                     <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Seating Capacity Filter */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
//                             <select
//                                 value={seatingCapacityFilter}
//                                 onChange={(e) => setSeatingCapacityFilter(e.target.value)}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                             >
//                                 <option value="">Any</option>
//                                 {seatingCapacities.map(capacity => (
//                                     <option key={capacity} value={capacity}>{capacity} seats</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Clear Filters */}
//                         <div className="flex items-end">
//                             <button
//                                 onClick={clearFilters}
//                                 className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
//                             >
//                                 Clear Filters
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Results Count */}
//                 <div className="mb-6 flex justify-between items-center">
//                     <p className="text-gray-600">
//                         <span className="font-bold">{filteredVehicles.length}</span> top vehicles
//                     </p>
//                 </div>

//                 {/* Loading State */}
//                 {isLoading && (
//                     <div className="text-center py-12">
//                         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
//                         <p className="mt-4 text-gray-600">Loading amazing vehicles for you...</p>
//                     </div>
//                 )}

//                 {/* Error State */}
//                 {errorMessage && !isLoading && (
//                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
//                         <p className="text-red-700">{errorMessage}</p>
//                         <button
//                             onClick={fetchVehicles}
//                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                         >
//                             Try Again
//                         </button>
//                     </div>
//                 )}

//                 {/* Vehicle Grid - Top 6 Vehicles */}
//                 {!isLoading && !errorMessage && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {filteredVehicles.length > 0 ? (
//                             filteredVehicles.map((vehicle) => (
//                                 <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
//                                     {/* Image */}
//                                     <div className="relative">
//                                         <VehicleImage vehicle={vehicle} />
                                        
//                                         {/* Rating Badge */}
//                                         <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
//                                             <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                             </svg>
//                                             {vehicle.rating}
//                                         </div>
//                                     </div>

//                                     {/* Content */}
//                                     <div className="p-6">
//                                         <div className="flex justify-between items-start mb-3">
//                                             <div>
//                                                 <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
//                                                 <p className="text-gray-600 text-sm">{vehicle.regNumber}</p>
//                                             </div>
//                                             <div 
//                                                 className="w-8 h-8 rounded-full border-2 border-gray-300"
//                                                 style={{ backgroundColor: vehicle.color?.toLowerCase() || '#gray' }}
//                                                 title={vehicle.color}
//                                             />
//                                         </div>

//                                         {/* Specs */}
//                                         <div className="grid grid-cols-2 gap-3 mb-4">
//                                             <div className="flex items-center text-sm text-gray-600">
//                                                 <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                 </svg>
//                                                 {getFuelTypeDisplay(vehicle.fuelType)}
//                                             </div>
//                                             <div className="flex items-center text-sm text-gray-600">
//                                                 <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                                 </svg>
//                                                 {getTransmissionDisplay(vehicle.transmissionType)}
//                                             </div>
//                                             <div className="flex items-center text-sm text-gray-600">
//                                                 <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                                 </svg>
//                                                 {vehicle.seatingCapacity} seats
//                                             </div>
//                                             <div className="flex items-center text-sm text-gray-600">
//                                                 <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                                 </svg>
//                                                 {vehicle.location}
//                                             </div>
//                                         </div>

//                                         {/* Price and Book Button */}
//                                         <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                                             <div>
//                                                 <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
//                                                 <span className="text-gray-500 text-sm">/day</span>
//                                             </div>
//                                             <button
//                                                 onClick={() => handleBookNow(vehicle)}
//                                                 className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition duration-200"
//                                             >
//                                                 Book Now
//                                             </button>
//                                         </div>

//                                         {/* Trip Stats */}
//                                         <div className="mt-3 text-xs text-gray-500 flex items-center">
//                                             <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             {vehicle.totalTrips}+ trips • {getVehicleAge(vehicle.yearOfManufacture)}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div className="col-span-3 text-center py-12 bg-white rounded-2xl shadow-xl">
//                                 <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
//                                 <p className="text-gray-600">Try adjusting your filters</p>
//                                 <button
//                                     onClick={clearFilters}
//                                     className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
//                                 >
//                                     Clear Filters
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>

//             {/* How It Works Section */}
//             <div className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div className="text-center">
//                             <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
//                             <h3 className="font-semibold text-gray-800 mb-2">Search</h3>
//                             <p className="text-gray-600">Find your perfect vehicle by model, type, or preferences</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
//                             <h3 className="font-semibold text-gray-800 mb-2">Book</h3>
//                             <p className="text-gray-600">Select your vehicle and confirm your booking</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
//                             <h3 className="font-semibold text-gray-800 mb-2">Pay</h3>
//                             <p className="text-gray-600">Choose from multiple secure payment options</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
//                             <h3 className="font-semibold text-gray-800 mb-2">Drive</h3>
//                             <p className="text-gray-600">Pick up your vehicle and enjoy your journey</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Call to Action */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//                     <p className="text-xl mb-8 text-teal-200">Join thousands of satisfied customers today</p>
//                     <div className="flex justify-center gap-4">
//                         <button
//                             onClick={() => navigate('/customer/register')}
//                             className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition shadow-lg"
//                         >
//                             Create Account
//                         </button>
//                         <button
//                             onClick={() => navigate('/customer/login')}
//                             className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition shadow-lg"
//                         >
//                             Sign In
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="bg-gray-800 text-white py-12">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="font-bold text-lg mb-4">FAIR RENT A CAR</h3>
//                             <p className="text-gray-400">Your trusted partner for vehicle rentals in Sri Lanka.</p>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
//                                 <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
//                                 <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
//                                 <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg mb-4">For Partners</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="/agent/register" className="text-gray-400 hover:text-white transition">Become an Agent</a></li>
//                                 <li><a href="/agent/login" className="text-gray-400 hover:text-white transition">Agent Login</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg mb-4">Contact</h3>
//                             <ul className="space-y-2 text-gray-400">
//                                 <li>support@fairrentacar.lk</li>
//                                 <li>+94 11 234 5678</li>
//                                 <li>Colombo, Sri Lanka</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//                         <p>&copy; {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;


// src/Pages/LandingPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false); // Hidden state for admin login
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [fuelTypeFilter, setFuelTypeFilter] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
    
    // Available filters
    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15];

    // Base URL for backend
    const BASE_URL = 'http://localhost:8080';

    // Secret key combination to show admin login (Ctrl+Shift+A)
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl+Shift+A to toggle admin login visibility
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                e.preventDefault();
                setShowAdminLogin(prev => !prev);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Triple click on logo to show admin login
    let clickCount = 0;
    let clickTimer = null;

    const handleLogoClick = () => {
        clickCount++;
        
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        clickTimer = setTimeout(() => {
            if (clickCount >= 3) {
                setShowAdminLogin(prev => !prev);
            }
            clickCount = 0;
        }, 500);
    };

    // Define applyFilters with useCallback to include in dependencies
    const applyFilters = useCallback(() => {
        let result = [...vehicles];

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(vehicle =>
                vehicle.makeModel?.toLowerCase().includes(term) ||
                vehicle.regNumber?.toLowerCase().includes(term) ||
                vehicle.color?.toLowerCase().includes(term)
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

        // Sort by rating to get the best vehicles
        result.sort((a, b) => b.rating - a.rating);
        
        // Take only top 6 vehicles
        setFilteredVehicles(result.slice(0, 6));
    }, [vehicles, searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const fetchVehicles = async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
                timeout: 30000,
            });

            if (response.status === 200) {
                // Enhance vehicles with additional data for display
                const vehiclesWithDetails = response.data.map(vehicle => ({
                    ...vehicle,
                    pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
                    rating: (Math.random() * 2 + 3).toFixed(1),
                    totalTrips: Math.floor(Math.random() * 200) + 50,
                    location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
                }));
                
                setVehicles(vehiclesWithDetails);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            setErrorMessage('Failed to load vehicles. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const clearFilters = () => {
        setSearchTerm('');
        setFuelTypeFilter('');
        setTransmissionFilter('');
        setSeatingCapacityFilter('');
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
        return age === 0 ? 'Brand New' : `${age} year${age > 1 ? 's' : ''} old`;
    };

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        if (imagePath.startsWith('/uploads')) return `${BASE_URL}${imagePath}`;
        if (imagePath.includes('\\') || imagePath.includes('C:')) {
            const filename = imagePath.split('\\').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        return `${BASE_URL}/uploads/vehicles/${imagePath}`;
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-LK', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('LKR', 'Rs.');
    };

    const handleBookNow = (vehicle) => {
        const confirmLogin = window.confirm(`Please login to book the ${vehicle.makeModel}. Would you like to go to the login page?`);
        if (confirmLogin) {
            navigate('/customer/login', { state: { from: '/' } });
        }
    };

    // Vehicle Image Component
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
                <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
                    <svg className="w-20 h-20 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
            );
        }

        return (
            <img
                src={imageUrl}
                alt={vehicle.makeModel}
                className="w-full h-48 object-cover"
                onError={() => setImageError(true)}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            {/* Header/Navigation */}
            <nav className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div 
                            className="flex items-center cursor-pointer" 
                            onClick={handleLogoClick}
                            title="Fair Rent A Car"
                        >
                            <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR" className="h-12 w-auto mr-4" />
                            <span className="text-2xl font-bold">FAIR RENT A CAR</span>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/customer/login')}
                                className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition"
                            >
                                Customer Login
                            </button>
                            <button
                                onClick={() => navigate('/agent/login')}
                                className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition"
                            >
                                Agent Login
                            </button>
                            
                            {/* Hidden Admin Login Button - Only visible when showAdminLogin is true */}
                            {showAdminLogin && (
                                <button
                                    onClick={() => navigate('/admin/login')}
                                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                                >
                                    Admin
                                </button>
                            )}
                        </div>
                    </div>
                    
                    {/* Hidden admin hint - only visible when admin mode is activated */}
                    {showAdminLogin && (
                        <div className="text-right mt-2 text-xs text-teal-300 animate-pulse">
                            Admin mode activated
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Your Journey Begins Here
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Fair Rent A Car offers the widest selection of quality vehicles at competitive prices. 
                        From economy cars to luxury SUVs, we have the perfect vehicle for every occasion.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/customer/register')}
                            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-lg font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition shadow-lg"
                        >
                            Register as Customer
                        </button>
                        <button
                            onClick={() => navigate('/agent/register')}
                            className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition shadow-lg"
                        >
                            List Your Vehicle
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Fair Rent A Car?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
                        <p className="text-gray-600">Book your vehicle anytime, anywhere with our easy-to-use platform.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
                        <p className="text-gray-600">Competitive rates with transparent pricing and no hidden fees.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
                        <p className="text-gray-600">Multiple payment options with bank-grade security.</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Browse Our Top Vehicles</h2>
                
                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by car model, brand, or color..."
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                            <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Fuel Type Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                            <select
                                value={fuelTypeFilter}
                                onChange={(e) => setFuelTypeFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                            >
                                <option value="">All Fuels</option>
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                            >
                                <option value="">All</option>
                                {transmissionTypes.map(type => (
                                    <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
                                ))}
                            </select>
                        </div>

                        {/* Seating Capacity Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
                            <select
                                value={seatingCapacityFilter}
                                onChange={(e) => setSeatingCapacityFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                            >
                                <option value="">Any</option>
                                {seatingCapacities.map(capacity => (
                                    <option key={capacity} value={capacity}>{capacity} seats</option>
                                ))}
                            </select>
                        </div>

                        {/* Clear Filters */}
                        <div className="flex items-end">
                            <button
                                onClick={clearFilters}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-gray-600">
                        <span className="font-bold">{filteredVehicles.length}</span> top vehicles
                    </p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
                        <p className="mt-4 text-gray-600">Loading amazing vehicles for you...</p>
                    </div>
                )}

                {/* Error State */}
                {errorMessage && !isLoading && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
                        <p className="text-red-700">{errorMessage}</p>
                        <button
                            onClick={fetchVehicles}
                            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Vehicle Grid - Top 6 Vehicles */}
                {!isLoading && !errorMessage && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVehicles.length > 0 ? (
                            filteredVehicles.map((vehicle) => (
                                <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                                    {/* Image */}
                                    <div className="relative">
                                        <VehicleImage vehicle={vehicle} />
                                        
                                        {/* Rating Badge */}
                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
                                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {vehicle.rating}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
                                                <p className="text-gray-600 text-sm">{vehicle.regNumber}</p>
                                            </div>
                                            <div 
                                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                                style={{ backgroundColor: vehicle.color?.toLowerCase() || '#gray' }}
                                                title={vehicle.color}
                                            />
                                        </div>

                                        {/* Specs */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {getFuelTypeDisplay(vehicle.fuelType)}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                {getTransmissionDisplay(vehicle.transmissionType)}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                {vehicle.seatingCapacity} seats
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {vehicle.location}
                                            </div>
                                        </div>

                                        {/* Price and Book Button */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div>
                                                <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
                                                <span className="text-gray-500 text-sm">/day</span>
                                            </div>
                                            <button
                                                onClick={() => handleBookNow(vehicle)}
                                                className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition duration-200"
                                            >
                                                Book Now
                                            </button>
                                        </div>

                                        {/* Trip Stats */}
                                        <div className="mt-3 text-xs text-gray-500 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {vehicle.totalTrips}+ trips • {getVehicleAge(vehicle.yearOfManufacture)}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 bg-white rounded-2xl shadow-xl">
                                <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
                                <p className="text-gray-600">Try adjusting your filters</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* How It Works Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Search</h3>
                            <p className="text-gray-600">Find your perfect vehicle by model, type, or preferences</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Book</h3>
                            <p className="text-gray-600">Select your vehicle and confirm your booking</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Pay</h3>
                            <p className="text-gray-600">Choose from multiple secure payment options</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                            <h3 className="font-semibold text-gray-800 mb-2">Drive</h3>
                            <p className="text-gray-600">Pick up your vehicle and enjoy your journey</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-teal-200">Join thousands of satisfied customers today</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/customer/register')}
                            className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition shadow-lg"
                        >
                            Create Account
                        </button>
                        <button
                            onClick={() => navigate('/customer/login')}
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition shadow-lg"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">FAIR RENT A CAR</h3>
                            <p className="text-gray-400">Your trusted partner for vehicle rentals in Sri Lanka.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                                <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">For Partners</h3>
                            <ul className="space-y-2">
                                <li><a href="/agent/register" className="text-gray-400 hover:text-white transition">Become an Agent</a></li>
                                <li><a href="/agent/login" className="text-gray-400 hover:text-white transition">Agent Login</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>support@fairrentacar.lk</li>
                                <li>+94 11 234 5678</li>
                                <li>Colombo, Sri Lanka</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;