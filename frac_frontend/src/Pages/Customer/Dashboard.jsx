// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // const CustomerDashboard = () => {
// // //     const navigate = useNavigate();
// // //     const [vehicles, setVehicles] = useState([]);
// // //     const [filteredVehicles, setFilteredVehicles] = useState([]);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [errorMessage, setErrorMessage] = useState('');
// // //     const [selectedVehicle, setSelectedVehicle] = useState(null);
// // //     const [showBookingModal, setShowBookingModal] = useState(false);
// // //     const [customerId, setCustomerId] = useState(null);
// // //     const [isAuthenticated, setIsAuthenticated] = useState(false);
    
// // //     // Filter states
// // //     const [searchTerm, setSearchTerm] = useState('');
// // //     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
// // //     const [transmissionFilter, setTransmissionFilter] = useState('');
// // //     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
// // //     const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
// // //     const [sortBy, setSortBy] = useState('recommended');

// // //     // Available filters
// // //     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
// // //     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
// // //     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

// // //     // Base URL for backend
// // //     const BASE_URL = 'http://localhost:8080';

// // //     useEffect(() => {
// // //         // Check if customer is logged in
// // //         const customerToken = localStorage.getItem('customerToken');
// // //         const storedCustomerId = localStorage.getItem('customerId');
        
// // //         if (customerToken && storedCustomerId) {
// // //             setIsAuthenticated(true);
// // //             setCustomerId(storedCustomerId);
// // //         }

// // //         fetchVehicles();
// // //     }, []);

// // //     useEffect(() => {
// // //         applyFilters();
// // //     }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, priceRange, sortBy, vehicles]);

// // //     const fetchVehicles = async () => {
// // //         setIsLoading(true);
// // //         setErrorMessage('');
        
// // //         try {
// // //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
// // //                 timeout: 30000,
// // //             });

// // //             if (response.status === 200) {
// // //                 // Use the actual dailyRentalPrice from backend
// // //                 const vehiclesWithDetails = response.data.map(vehicle => ({
// // //                     ...vehicle,
// // //                     pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
// // //                     rating: (Math.random() * 2 + 3).toFixed(1),
// // //                     totalTrips: Math.floor(Math.random() * 200) + 50,
// // //                     isAvailable: Math.random() > 0.2,
// // //                     location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
// // //                 }));
// // //                 setVehicles(vehiclesWithDetails);
// // //                 setFilteredVehicles(vehiclesWithDetails);
                
// // //                 // Update max price range based on actual prices
// // //                 if (vehiclesWithDetails.length > 0) {
// // //                     const maxPrice = Math.max(...vehiclesWithDetails.map(v => v.pricePerDay));
// // //                     setPriceRange(prev => ({ ...prev, max: Math.ceil(maxPrice / 1000) * 1000 }));
// // //                 }
// // //             }
// // //         } catch (error) {
// // //             console.error('Error fetching vehicles:', error);
// // //             setErrorMessage('Failed to load vehicles. Please try again.');
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     const applyFilters = () => {
// // //         let result = [...vehicles];

// // //         // Apply search filter
// // //         if (searchTerm) {
// // //             const term = searchTerm.toLowerCase();
// // //             result = result.filter(vehicle =>
// // //                 vehicle.makeModel.toLowerCase().includes(term) ||
// // //                 vehicle.regNumber.toLowerCase().includes(term) ||
// // //                 vehicle.color.toLowerCase().includes(term)
// // //             );
// // //         }

// // //         // Apply fuel type filter
// // //         if (fuelTypeFilter) {
// // //             result = result.filter(vehicle => vehicle.fuelType === fuelTypeFilter);
// // //         }

// // //         // Apply transmission filter
// // //         if (transmissionFilter) {
// // //             result = result.filter(vehicle => vehicle.transmissionType === transmissionFilter);
// // //         }

// // //         // Apply seating capacity filter
// // //         if (seatingCapacityFilter) {
// // //             result = result.filter(vehicle => vehicle.seatingCapacity === parseInt(seatingCapacityFilter));
// // //         }

// // //         // Apply price range filter
// // //         result = result.filter(vehicle => 
// // //             vehicle.pricePerDay >= priceRange.min && vehicle.pricePerDay <= priceRange.max
// // //         );

// // //         // Apply sorting
// // //         switch (sortBy) {
// // //             case 'price-low':
// // //                 result.sort((a, b) => a.pricePerDay - b.pricePerDay);
// // //                 break;
// // //             case 'price-high':
// // //                 result.sort((a, b) => b.pricePerDay - a.pricePerDay);
// // //                 break;
// // //             case 'rating':
// // //                 result.sort((a, b) => b.rating - a.rating);
// // //                 break;
// // //             case 'newest':
// // //                 result.sort((a, b) => b.yearOfManufacture - a.yearOfManufacture);
// // //                 break;
// // //             default:
// // //                 // recommended - mix of rating and availability
// // //                 result.sort((a, b) => {
// // //                     if (a.isAvailable && !b.isAvailable) return -1;
// // //                     if (!a.isAvailable && b.isAvailable) return 1;
// // //                     return b.rating - a.rating;
// // //                 });
// // //         }

// // //         setFilteredVehicles(result);
// // //     };

// // //     const clearFilters = () => {
// // //         setSearchTerm('');
// // //         setFuelTypeFilter('');
// // //         setTransmissionFilter('');
// // //         setSeatingCapacityFilter('');
        
// // //         // Reset price range to min and max from actual data
// // //         if (vehicles.length > 0) {
// // //             const maxPrice = Math.max(...vehicles.map(v => v.pricePerDay));
// // //             setPriceRange({ min: 0, max: Math.ceil(maxPrice / 1000) * 1000 });
// // //         } else {
// // //             setPriceRange({ min: 0, max: 20000 });
// // //         }
        
// // //         setSortBy('recommended');
// // //     };

// // //     const getFuelTypeDisplay = (type) => {
// // //         switch (type) {
// // //             case 'PETROL': return 'Petrol';
// // //             case 'DIESEL': return 'Diesel';
// // //             case 'ELECTRIC': return 'Electric';
// // //             case 'HYBRID': return 'Hybrid';
// // //             default: return type;
// // //         }
// // //     };

// // //     const getTransmissionDisplay = (type) => {
// // //         return type === 'MANUAL' ? 'Manual' : 'Automatic';
// // //     };

// // //     const getVehicleAge = (year) => {
// // //         const currentYear = new Date().getFullYear();
// // //         const age = currentYear - year;
// // //         return age === 0 ? 'Brand New' : `${age} year${age > 1 ? 's' : ''} old`;
// // //     };

// // //     const getFullImageUrl = (imagePath) => {
// // //         if (!imagePath) return null;
// // //         if (imagePath.startsWith('http')) return imagePath;
// // //         if (imagePath.startsWith('/uploads')) return `${BASE_URL}${imagePath}`;
// // //         if (imagePath.includes('\\') || imagePath.includes('C:')) {
// // //             const filename = imagePath.split('\\').pop();
// // //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// // //         }
// // //         return `${BASE_URL}/uploads/vehicles/${imagePath}`;
// // //     };

// // //     const formatCurrency = (amount) => {
// // //         return new Intl.NumberFormat('en-LK', {
// // //             style: 'currency',
// // //             currency: 'LKR',
// // //             minimumFractionDigits: 0,
// // //             maximumFractionDigits: 0
// // //         }).format(amount).replace('LKR', 'Rs.');
// // //     };

// // //     const handleBookNow = (vehicle) => {
// // //         if (!isAuthenticated) {
// // //             // Redirect to login if not authenticated
// // //             if (window.confirm('Please login to book a vehicle. Go to login page?')) {
// // //                 navigate('/customer/login', { state: { from: '/customer/vehicles' } });
// // //             }
// // //             return;
// // //         }
// // //         setSelectedVehicle(vehicle);
// // //         setShowBookingModal(true);
// // //     };

// // //     // Vehicle Image Component
// // //     const VehicleImage = ({ vehicle }) => {
// // //         const [imageError, setImageError] = useState(false);
// // //         const [imageUrl, setImageUrl] = useState(null);

// // //         useEffect(() => {
// // //             if (vehicle.vehicleImage) {
// // //                 setImageUrl(getFullImageUrl(vehicle.vehicleImage));
// // //             }
// // //         }, [vehicle.vehicleImage]);

// // //         if (imageError || !imageUrl) {
// // //             return (
// // //                 <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
// // //                     <svg className="w-20 h-20 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// // //                     </svg>
// // //                 </div>
// // //             );
// // //         }

// // //         return (
// // //             <img
// // //                 src={imageUrl}
// // //                 alt={vehicle.makeModel}
// // //                 className="w-full h-48 object-cover"
// // //                 onError={() => setImageError(true)}
// // //             />
// // //         );
// // //     };

// // //     // Booking Modal Component
// // //     const BookingModal = ({ vehicle, onClose }) => {
// // //         const [pickupDate, setPickupDate] = useState('');
// // //         const [dropOffDate, setDropOffDate] = useState('');
// // //         const [pickupLocation, setPickupLocation] = useState('');
// // //         const [dropOffLocation, setDropOffLocation] = useState('');
// // //         const [driverStatus, setDriverStatus] = useState('WITHOUT_DRIVER');
// // //         const [gpsIncluded, setGpsIncluded] = useState(false);
// // //         const [childSeatIncluded, setChildSeatIncluded] = useState(false);
// // //         const [totalPrice, setTotalPrice] = useState(0);
// // //         const [isSubmitting, setIsSubmitting] = useState(false);
// // //         const [bookingError, setBookingError] = useState('');

// // //         const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];

// // //         useEffect(() => {
// // //             if (pickupDate && dropOffDate) {
// // //                 const days = calculateDays(pickupDate, dropOffDate);
// // //                 if (days > 0) {
// // //                     let price = days * vehicle.pricePerDay;
                    
// // //                     // Add extras
// // //                     if (gpsIncluded) price += days * 500; // Rs. 500 per day for GPS
// // //                     if (childSeatIncluded) price += days * 300; // Rs. 300 per day for child seat
// // //                     if (driverStatus === 'WITH_DRIVER') price += days * 1500; // Rs. 1500 per day for driver
                    
// // //                     setTotalPrice(price);
// // //                 }
// // //             }
// // //         }, [pickupDate, dropOffDate, driverStatus, gpsIncluded, childSeatIncluded, vehicle.pricePerDay]);

// // //         const calculateDays = (start, end) => {
// // //             const startDate = new Date(start);
// // //             const endDate = new Date(end);
// // //             const diffTime = Math.abs(endDate - startDate);
// // //             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// // //             return diffDays;
// // //         };

// // //         const handleBookingSubmit = async (e) => {
// // //             e.preventDefault();
// // //             setBookingError('');

// // //             if (!customerId) {
// // //                 setBookingError('Please login to complete booking');
// // //                 setTimeout(() => {
// // //                     onClose();
// // //                     navigate('/customer/login');
// // //                 }, 2000);
// // //                 return;
// // //             }

// // //             setIsSubmitting(true);

// // //             const bookingData = {
// // //                 customerId: parseInt(customerId),
// // //                 vehicleId: vehicle.id,
// // //                 agentId: vehicle.agentId,
// // //                 pickupDate: pickupDate,
// // //                 dropOffDate: dropOffDate,
// // //                 pickupLocation: pickupLocation,
// // //                 dropOffLocation: dropOffLocation || pickupLocation,
// // //                 driverStatus: driverStatus,
// // //                 bookingStatus: 'PENDING',
// // //                 paymentStatus: 'PENDING',
// // //                 totalPrice: totalPrice,
// // //                 gpsIncluded: gpsIncluded,
// // //                 childSeatIncluded: childSeatIncluded
// // //             };

// // //             try {
// // //                 console.log('Booking Data:', bookingData);

// // //                 const response = await axios.post(`${BASE_URL}/api/v1/booking/add`, bookingData, {
// // //                     headers: {
// // //                         'Content-Type': 'application/json',
// // //                         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// // //                     },
// // //                     timeout: 30000,
// // //                 });

// // //                 if (response.status === 201) {
// // //                     alert('Booking confirmed successfully!');
// // //                     onClose();
// // //                     // Redirect to customer bookings page
// // //                     navigate('/customer/bookings');
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Booking error:', error);
                
// // //                 if (error.response) {
// // //                     if (error.response.status === 400) {
// // //                         setBookingError('Invalid booking data. Please check all fields.');
// // //                     } else if (error.response.status === 401) {
// // //                         setBookingError('Session expired. Please login again.');
// // //                         setTimeout(() => {
// // //                             onClose();
// // //                             navigate('/customer/login');
// // //                         }, 2000);
// // //                     } else if (error.response.data && error.response.data.errorMessage) {
// // //                         setBookingError(error.response.data.errorMessage);
// // //                     } else {
// // //                         setBookingError('Booking failed. Please try again.');
// // //                     }
// // //                 } else if (error.request) {
// // //                     setBookingError('Network error. Please check your connection.');
// // //                 } else {
// // //                     setBookingError('An unexpected error occurred.');
// // //                 }
// // //             } finally {
// // //                 setIsSubmitting(false);
// // //             }
// // //         };

// // //         if (!vehicle) return null;

// // //         return (
// // //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // //                 <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //                     <div className="p-6">
// // //                         <div className="flex justify-between items-center mb-6">
// // //                             <h2 className="text-2xl font-bold text-gray-800">Book Vehicle</h2>
// // //                             <button
// // //                                 onClick={onClose}
// // //                                 className="text-gray-500 hover:text-gray-700"
// // //                             >
// // //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                                 </svg>
// // //                             </button>
// // //                         </div>

// // //                         <div className="flex gap-4 mb-6">
// // //                             <div className="w-32 h-32 rounded-lg overflow-hidden">
// // //                                 <VehicleImage vehicle={vehicle} />
// // //                             </div>
// // //                             <div>
// // //                                 <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
// // //                                 <p className="text-gray-600">{vehicle.regNumber}</p>
// // //                                 <div className="flex items-center mt-2">
// // //                                     <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
// // //                                     <span className="text-gray-500 ml-1">/day</span>
// // //                                 </div>
// // //                                 <p className="text-sm text-gray-500 mt-1">
// // //                                     {getFuelTypeDisplay(vehicle.fuelType)} • {getTransmissionDisplay(vehicle.transmissionType)} • {vehicle.seatingCapacity} seats
// // //                                 </p>
// // //                             </div>
// // //                         </div>

// // //                         {bookingError && (
// // //                             <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
// // //                                 <p className="text-red-700 text-sm">{bookingError}</p>
// // //                             </div>
// // //                         )}

// // //                         <form onSubmit={handleBookingSubmit} className="space-y-4">
// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                                 <div>
// // //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
// // //                                     <input
// // //                                         type="date"
// // //                                         value={pickupDate}
// // //                                         onChange={(e) => setPickupDate(e.target.value)}
// // //                                         min={new Date().toISOString().split('T')[0]}
// // //                                         required
// // //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     />
// // //                                 </div>
// // //                                 <div>
// // //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date *</label>
// // //                                     <input
// // //                                         type="date"
// // //                                         value={dropOffDate}
// // //                                         onChange={(e) => setDropOffDate(e.target.value)}
// // //                                         min={pickupDate || new Date().toISOString().split('T')[0]}
// // //                                         required
// // //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     />
// // //                                 </div>
// // //                             </div>

// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                                 <div>
// // //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
// // //                                     <select
// // //                                         value={pickupLocation}
// // //                                         onChange={(e) => setPickupLocation(e.target.value)}
// // //                                         required
// // //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                                     >
// // //                                         <option value="">Select location</option>
// // //                                         <option value="Colombo">Colombo</option>
// // //                                         <option value="Kandy">Kandy</option>
// // //                                         <option value="Galle">Galle</option>
// // //                                         <option value="Negombo">Negombo</option>
// // //                                         <option value="Jaffna">Jaffna</option>
// // //                                     </select>
// // //                                 </div>
// // //                                 <div>
// // //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
// // //                                     <select
// // //                                         value={dropOffLocation}
// // //                                         onChange={(e) => setDropOffLocation(e.target.value)}
// // //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                                     >
// // //                                         <option value="">Same as pickup</option>
// // //                                         <option value="Colombo">Colombo</option>
// // //                                         <option value="Kandy">Kandy</option>
// // //                                         <option value="Galle">Galle</option>
// // //                                         <option value="Negombo">Negombo</option>
// // //                                         <option value="Jaffna">Jaffna</option>
// // //                                     </select>
// // //                                 </div>
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Driver Option</label>
// // //                                 <div className="flex gap-4">
// // //                                     {driverOptions.map(option => (
// // //                                         <div key={option} className="flex items-center">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 id={option}
// // //                                                 name="driverStatus"
// // //                                                 value={option}
// // //                                                 checked={driverStatus === option}
// // //                                                 onChange={(e) => setDriverStatus(e.target.value)}
// // //                                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
// // //                                             />
// // //                                             <label
// // //                                                 htmlFor={option}
// // //                                                 className="ml-2 text-sm text-gray-700"
// // //                                             >
// // //                                                 {option === 'WITH_DRIVER' ? 'With Driver (+Rs. 1,500/day)' : 'Without Driver'}
// // //                                             </label>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             </div>

// // //                             <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
// // //                                 <div className="space-y-2">
// // //                                     <div className="flex items-center">
// // //                                         <input
// // //                                             type="checkbox"
// // //                                             id="gps"
// // //                                             checked={gpsIncluded}
// // //                                             onChange={(e) => setGpsIncluded(e.target.checked)}
// // //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// // //                                         />
// // //                                         <label htmlFor="gps" className="ml-2 text-sm text-gray-700">
// // //                                             GPS Navigation (Rs. 500/day)
// // //                                         </label>
// // //                                     </div>
// // //                                     <div className="flex items-center">
// // //                                         <input
// // //                                             type="checkbox"
// // //                                             id="childSeat"
// // //                                             checked={childSeatIncluded}
// // //                                             onChange={(e) => setChildSeatIncluded(e.target.checked)}
// // //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// // //                                         />
// // //                                         <label htmlFor="childSeat" className="ml-2 text-sm text-gray-700">
// // //                                             Child Seat (Rs. 300/day)
// // //                                         </label>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {totalPrice > 0 && (
// // //                                 <div className="bg-teal-50 p-4 rounded-lg">
// // //                                     <div className="flex justify-between items-center">
// // //                                         <span className="text-gray-700">
// // //                                             Total for {calculateDays(pickupDate, dropOffDate)} days
// // //                                         </span>
// // //                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(totalPrice)}</span>
// // //                                     </div>
// // //                                     <div className="text-xs text-gray-500 mt-2">
// // //                                         Base rate: {formatCurrency(vehicle.pricePerDay)}/day × {calculateDays(pickupDate, dropOffDate)} days
// // //                                         {driverStatus === 'WITH_DRIVER' && ` • Driver: Rs. 1,500/day`}
// // //                                         {gpsIncluded && ` • GPS: Rs. 500/day`}
// // //                                         {childSeatIncluded && ` • Child Seat: Rs. 300/day`}
// // //                                     </div>
// // //                                 </div>
// // //                             )}

// // //                             <div className="flex gap-4 pt-4">
// // //                                 <button
// // //                                     type="submit"
// // //                                     disabled={isSubmitting || !pickupDate || !dropOffDate || !pickupLocation}
// // //                                     className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
// // //                                         isSubmitting || !pickupDate || !dropOffDate || !pickupLocation
// // //                                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // //                                             : 'bg-gradient-to-r from-teal-600 to-teal-800 text-white hover:from-teal-700 hover:to-teal-900'
// // //                                     }`}
// // //                                 >
// // //                                     {isSubmitting ? (
// // //                                         <span className="flex items-center justify-center">
// // //                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// // //                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                                             </svg>
// // //                                             Processing...
// // //                                         </span>
// // //                                     ) : (
// // //                                         'Confirm Booking'
// // //                                     )}
// // //                                 </button>
// // //                                 <button
// // //                                     type="button"
// // //                                     onClick={onClose}
// // //                                     className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// // //                                 >
// // //                                     Cancel
// // //                                 </button>
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         );
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // //             {/* Header */}
// // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // //                 <div className="max-w-7xl mx-auto px-4 py-8">
// // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // //                         <div className="flex items-center mb-4 md:mb-0">
// // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // //                             <div>
// // //                                 <h1 className="text-3xl md:text-4xl font-bold">FAIR RENT A CAR</h1>
// // //                                 <p className="text-teal-300">Your Journey Begins Here</p>
// // //                             </div>
// // //                         </div>
// // //                         <div className="flex gap-4">
// // //                             {isAuthenticated ? (
// // //                                 <>
// // //                                     <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
// // //                                         Dashboard
// // //                                     </a>
// // //                                     <a href="/customer/bookings" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// // //                                         My Bookings
// // //                                     </a>
// // //                                 </>
// // //                             ) : (
// // //                                 <>
// // //                                     <a href="/customer/login" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
// // //                                         Login
// // //                                     </a>
// // //                                     <a href="/customer/register" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// // //                                         Register
// // //                                     </a>
// // //                                 </>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Rest of the component remains the same */}
// // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // //                 {/* Search and Filters */}
// // //                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
// // //                     {/* Search Bar */}
// // //                     <div className="mb-6">
// // //                         <div className="relative">
// // //                             <input
// // //                                 type="text"
// // //                                 value={searchTerm}
// // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                                 placeholder="Search by car model, brand, or color..."
// // //                                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
// // //                             />
// // //                             <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // //                             </svg>
// // //                         </div>
// // //                     </div>

// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
// // //                         {/* Fuel Type Filter */}
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
// // //                             <select
// // //                                 value={fuelTypeFilter}
// // //                                 onChange={(e) => setFuelTypeFilter(e.target.value)}
// // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                             >
// // //                                 <option value="">All Fuels</option>
// // //                                 {fuelTypes.map(type => (
// // //                                     <option key={type} value={type}>{getFuelTypeDisplay(type)}</option>
// // //                                 ))}
// // //                             </select>
// // //                         </div>

// // //                         {/* Transmission Filter */}
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
// // //                             <select
// // //                                 value={transmissionFilter}
// // //                                 onChange={(e) => setTransmissionFilter(e.target.value)}
// // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                             >
// // //                                 <option value="">All</option>
// // //                                 {transmissionTypes.map(type => (
// // //                                     <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
// // //                                 ))}
// // //                             </select>
// // //                         </div>

// // //                         {/* Seating Capacity Filter */}
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
// // //                             <select
// // //                                 value={seatingCapacityFilter}
// // //                                 onChange={(e) => setSeatingCapacityFilter(e.target.value)}
// // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                             >
// // //                                 <option value="">Any</option>
// // //                                 {seatingCapacities.map(capacity => (
// // //                                     <option key={capacity} value={capacity}>{capacity} seats</option>
// // //                                 ))}
// // //                             </select>
// // //                         </div>

// // //                         {/* Sort By */}
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
// // //                             <select
// // //                                 value={sortBy}
// // //                                 onChange={(e) => setSortBy(e.target.value)}
// // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// // //                             >
// // //                                 <option value="recommended">Recommended</option>
// // //                                 <option value="price-low">Price: Low to High</option>
// // //                                 <option value="price-high">Price: High to Low</option>
// // //                                 <option value="rating">Top Rated</option>
// // //                                 <option value="newest">Newest First</option>
// // //                             </select>
// // //                         </div>

// // //                         {/* Clear Filters */}
// // //                         <div className="flex items-end">
// // //                             <button
// // //                                 onClick={clearFilters}
// // //                                 className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
// // //                             >
// // //                                 Clear Filters
// // //                             </button>
// // //                         </div>
// // //                     </div>

// // //                     {/* Price Range Slider */}
// // //                     <div className="mt-6">
// // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                             Price Range (per day): {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
// // //                         </label>
// // //                         <div className="flex gap-4">
// // //                             <input
// // //                                 type="range"
// // //                                 min="0"
// // //                                 max={priceRange.max}
// // //                                 value={priceRange.min}
// // //                                 onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
// // //                                 className="w-full"
// // //                             />
// // //                             <input
// // //                                 type="range"
// // //                                 min="0"
// // //                                 max={priceRange.max}
// // //                                 value={priceRange.max}
// // //                                 onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
// // //                                 className="w-full"
// // //                             />
// // //                         </div>
// // //                         <div className="flex justify-between text-xs text-gray-500 mt-2">
// // //                             <span>Min: {formatCurrency(priceRange.min)}</span>
// // //                             <span>Max: {formatCurrency(priceRange.max)}</span>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Results Count */}
// // //                 <div className="mb-6 flex justify-between items-center">
// // //                     <p className="text-gray-600">
// // //                         <span className="font-bold">{filteredVehicles.length}</span> vehicles available
// // //                     </p>
// // //                     {filteredVehicles.length > 0 && (
// // //                         <p className="text-sm text-gray-500">
// // //                             Showing {Math.min(filteredVehicles.length, 12)} of {filteredVehicles.length}
// // //                         </p>
// // //                     )}
// // //                 </div>

// // //                 {/* Loading State */}
// // //                 {isLoading && (
// // //                     <div className="text-center py-12">
// // //                         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
// // //                         <p className="mt-4 text-gray-600">Loading amazing vehicles for you...</p>
// // //                     </div>
// // //                 )}

// // //                 {/* Error State */}
// // //                 {errorMessage && !isLoading && (
// // //                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
// // //                         <p className="text-red-700">{errorMessage}</p>
// // //                         <button
// // //                             onClick={fetchVehicles}
// // //                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// // //                         >
// // //                             Try Again
// // //                         </button>
// // //                     </div>
// // //                 )}

// // //                 {/* No Results */}
// // //                 {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
// // //                     <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
// // //                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                         </svg>
// // //                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
// // //                         <p className="text-gray-600 mb-6">Try adjusting your filters</p>
// // //                         <button
// // //                             onClick={clearFilters}
// // //                             className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
// // //                         >
// // //                             Clear All Filters
// // //                         </button>
// // //                     </div>
// // //                 )}

// // //                 {/* Vehicle Grid */}
// // //                 {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //                         {filteredVehicles.map((vehicle) => (
// // //                             <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
// // //                                 {/* Image */}
// // //                                 <div className="relative">
// // //                                     <VehicleImage vehicle={vehicle} />
                                    
// // //                                     {/* Availability Badge */}
// // //                                     <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
// // //                                         vehicle.isAvailable 
// // //                                             ? 'bg-green-500 text-white' 
// // //                                             : 'bg-red-500 text-white'
// // //                                     }`}>
// // //                                         {vehicle.isAvailable ? 'Available Now' : 'Booked'}
// // //                                     </div>

// // //                                     {/* Rating Badge */}
// // //                                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
// // //                                         <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
// // //                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                                         </svg>
// // //                                         {vehicle.rating}
// // //                                     </div>
// // //                                 </div>

// // //                                 {/* Content */}
// // //                                 <div className="p-6">
// // //                                     <div className="flex justify-between items-start mb-3">
// // //                                         <div>
// // //                                             <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
// // //                                             <p className="text-gray-600 text-sm">{vehicle.regNumber}</p>
// // //                                             {vehicle.agentId && (
// // //                                                 <p className="text-xs text-teal-600 mt-1">Agent #{vehicle.agentId}</p>
// // //                                             )}
// // //                                         </div>
// // //                                         <div 
// // //                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
// // //                                             style={{ backgroundColor: vehicle.color.toLowerCase() }}
// // //                                             title={vehicle.color}
// // //                                         />
// // //                                     </div>

// // //                                     {/* Specs */}
// // //                                     <div className="grid grid-cols-2 gap-3 mb-4">
// // //                                         <div className="flex items-center text-sm text-gray-600">
// // //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                             </svg>
// // //                                             {getFuelTypeDisplay(vehicle.fuelType)}
// // //                                         </div>
// // //                                         <div className="flex items-center text-sm text-gray-600">
// // //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //                                             </svg>
// // //                                             {getTransmissionDisplay(vehicle.transmissionType)}
// // //                                         </div>
// // //                                         <div className="flex items-center text-sm text-gray-600">
// // //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// // //                                             </svg>
// // //                                             {vehicle.seatingCapacity} seats
// // //                                         </div>
// // //                                         <div className="flex items-center text-sm text-gray-600">
// // //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                                             </svg>
// // //                                             {vehicle.location}
// // //                                         </div>
// // //                                     </div>

// // //                                     {/* Price and Book Button */}
// // //                                     <div className="flex items-center justify-between pt-4 border-t border-gray-200">
// // //                                         <div>
// // //                                             <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
// // //                                             <span className="text-gray-500 text-sm">/day</span>
// // //                                         </div>
// // //                                         <button
// // //                                             onClick={() => handleBookNow(vehicle)}
// // //                                             disabled={!vehicle.isAvailable}
// // //                                             className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
// // //                                                 vehicle.isAvailable
// // //                                                     ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800'
// // //                                                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // //                                             }`}
// // //                                         >
// // //                                             {vehicle.isAvailable ? 'Book Now' : 'Unavailable'}
// // //                                         </button>
// // //                                     </div>

// // //                                     {/* Trip Stats */}
// // //                                     <div className="mt-3 text-xs text-gray-500 flex items-center">
// // //                                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                         </svg>
// // //                                         {vehicle.totalTrips}+ trips • {getVehicleAge(vehicle.yearOfManufacture)}
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}

// // //                 {/* Footer */}
// // //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// // //                     <p className="text-gray-500 text-sm">
// // //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// // //                     </p>
// // //                     <div className="flex justify-center gap-4 mt-4">
// // //                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
// // //                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
// // //                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
// // //                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Booking Modal */}
// // //             {showBookingModal && (
// // //                 <BookingModal
// // //                     vehicle={selectedVehicle}
// // //                     onClose={() => setShowBookingModal(false)}
// // //                 />
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default CustomerDashboard;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const CustomerDashboard = () => {
// //     const navigate = useNavigate();
// //     const [vehicles, setVehicles] = useState([]);
// //     const [filteredVehicles, setFilteredVehicles] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [selectedVehicle, setSelectedVehicle] = useState(null);
// //     const [showBookingModal, setShowBookingModal] = useState(false);
// //     const [customerId, setCustomerId] = useState(null);
// //     const [isAuthenticated, setIsAuthenticated] = useState(false);
// //     const [agentDetails, setAgentDetails] = useState({}); // Store agent details by agentId
    
// //     // Filter states
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
// //     const [transmissionFilter, setTransmissionFilter] = useState('');
// //     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
// //     const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
// //     const [sortBy, setSortBy] = useState('recommended');

// //     // Available filters
// //     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
// //     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
// //     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

// //     // Base URL for backend
// //     const BASE_URL = 'http://localhost:8080';

// //     useEffect(() => {
// //         // Check if customer is logged in
// //         const customerToken = localStorage.getItem('customerToken');
// //         const storedCustomerId = localStorage.getItem('customerId');
        
// //         if (customerToken && storedCustomerId) {
// //             setIsAuthenticated(true);
// //             setCustomerId(storedCustomerId);
// //         }

// //         fetchVehicles();
// //     }, []);

// //     useEffect(() => {
// //         applyFilters();
// //     }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, priceRange, sortBy, vehicles]);

// //     const fetchAgentDetails = async (agentId) => {
// //         // Skip if already fetched
// //         if (agentDetails[agentId]) return;
        
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 setAgentDetails(prev => ({
// //                     ...prev,
// //                     [agentId]: response.data
// //                 }));
// //             }
// //         } catch (err) {
// //             console.error('Error fetching agent details:', err);
// //             // Set fallback data
// //             setAgentDetails(prev => ({
// //                 ...prev,
// //                 [agentId]: { companyName: `Agent #${agentId}` }
// //             }));
// //         }
// //     };

// //     const fetchVehicles = async () => {
// //         setIsLoading(true);
// //         setErrorMessage('');
        
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 // Get unique agent IDs from vehicles
// //                 const uniqueAgentIds = [...new Set(response.data.map(v => v.agentId).filter(id => id))];
                
// //                 // Fetch agent details for each unique agent ID
// //                 await Promise.all(uniqueAgentIds.map(id => fetchAgentDetails(id)));

// //                 // Use the actual dailyRentalPrice from backend
// //                 const vehiclesWithDetails = response.data.map(vehicle => ({
// //                     ...vehicle,
// //                     pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
// //                     rating: (Math.random() * 2 + 3).toFixed(1),
// //                     totalTrips: Math.floor(Math.random() * 200) + 50,
// //                     isAvailable: Math.random() > 0.2,
// //                     location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
// //                 }));
                
// //                 setVehicles(vehiclesWithDetails);
// //                 setFilteredVehicles(vehiclesWithDetails);
                
// //                 // Update max price range based on actual prices
// //                 if (vehiclesWithDetails.length > 0) {
// //                     const maxPrice = Math.max(...vehiclesWithDetails.map(v => v.pricePerDay));
// //                     setPriceRange(prev => ({ ...prev, max: Math.ceil(maxPrice / 1000) * 1000 }));
// //                 }
// //             }
// //         } catch (error) {
// //             console.error('Error fetching vehicles:', error);
// //             setErrorMessage('Failed to load vehicles. Please try again.');
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
// //                 vehicle.makeModel.toLowerCase().includes(term) ||
// //                 vehicle.regNumber.toLowerCase().includes(term) ||
// //                 vehicle.color.toLowerCase().includes(term) ||
// //                 (agentDetails[vehicle.agentId]?.companyName?.toLowerCase().includes(term))
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

// //         // Apply price range filter
// //         result = result.filter(vehicle => 
// //             vehicle.pricePerDay >= priceRange.min && vehicle.pricePerDay <= priceRange.max
// //         );

// //         // Apply sorting
// //         switch (sortBy) {
// //             case 'price-low':
// //                 result.sort((a, b) => a.pricePerDay - b.pricePerDay);
// //                 break;
// //             case 'price-high':
// //                 result.sort((a, b) => b.pricePerDay - a.pricePerDay);
// //                 break;
// //             case 'rating':
// //                 result.sort((a, b) => b.rating - a.rating);
// //                 break;
// //             case 'newest':
// //                 result.sort((a, b) => b.yearOfManufacture - a.yearOfManufacture);
// //                 break;
// //             default:
// //                 // recommended - mix of rating and availability
// //                 result.sort((a, b) => {
// //                     if (a.isAvailable && !b.isAvailable) return -1;
// //                     if (!a.isAvailable && b.isAvailable) return 1;
// //                     return b.rating - a.rating;
// //                 });
// //         }

// //         setFilteredVehicles(result);
// //     };

// //     const clearFilters = () => {
// //         setSearchTerm('');
// //         setFuelTypeFilter('');
// //         setTransmissionFilter('');
// //         setSeatingCapacityFilter('');
        
// //         // Reset price range to min and max from actual data
// //         if (vehicles.length > 0) {
// //             const maxPrice = Math.max(...vehicles.map(v => v.pricePerDay));
// //             setPriceRange({ min: 0, max: Math.ceil(maxPrice / 1000) * 1000 });
// //         } else {
// //             setPriceRange({ min: 0, max: 20000 });
// //         }
        
// //         setSortBy('recommended');
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
// //         return age === 0 ? 'Brand New' : `${age} year${age > 1 ? 's' : ''} old`;
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

// //     const formatCurrency = (amount) => {
// //         return new Intl.NumberFormat('en-LK', {
// //             style: 'currency',
// //             currency: 'LKR',
// //             minimumFractionDigits: 0,
// //             maximumFractionDigits: 0
// //         }).format(amount).replace('LKR', 'Rs.');
// //     };

// //     const handleBookNow = (vehicle) => {
// //         if (!isAuthenticated) {
// //             // Redirect to login if not authenticated
// //             if (window.confirm('Please login to book a vehicle. Go to login page?')) {
// //                 navigate('/customer/login', { state: { from: '/customer/vehicles' } });
// //             }
// //             return;
// //         }
// //         setSelectedVehicle(vehicle);
// //         setShowBookingModal(true);
// //     };

// //     // Vehicle Image Component
// //     const VehicleImage = ({ vehicle }) => {
// //         const [imageError, setImageError] = useState(false);
// //         const [imageUrl, setImageUrl] = useState(null);

// //         useEffect(() => {
// //             if (vehicle.vehicleImage) {
// //                 setImageUrl(getFullImageUrl(vehicle.vehicleImage));
// //             }
// //         }, [vehicle.vehicleImage]);

// //         if (imageError || !imageUrl) {
// //             return (
// //                 <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
// //                     <svg className="w-20 h-20 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// //                     </svg>
// //                 </div>
// //             );
// //         }

// //         return (
// //             <img
// //                 src={imageUrl}
// //                 alt={vehicle.makeModel}
// //                 className="w-full h-48 object-cover"
// //                 onError={() => setImageError(true)}
// //             />
// //         );
// //     };

// //     // Booking Modal Component
// //     const BookingModal = ({ vehicle, onClose }) => {
// //         const [pickupDate, setPickupDate] = useState('');
// //         const [dropOffDate, setDropOffDate] = useState('');
// //         const [pickupLocation, setPickupLocation] = useState('');
// //         const [dropOffLocation, setDropOffLocation] = useState('');
// //         const [driverStatus, setDriverStatus] = useState('WITHOUT_DRIVER');
// //         const [gpsIncluded, setGpsIncluded] = useState(false);
// //         const [childSeatIncluded, setChildSeatIncluded] = useState(false);
// //         const [totalPrice, setTotalPrice] = useState(0);
// //         const [isSubmitting, setIsSubmitting] = useState(false);
// //         const [bookingError, setBookingError] = useState('');

// //         const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];

// //         useEffect(() => {
// //             if (pickupDate && dropOffDate) {
// //                 const days = calculateDays(pickupDate, dropOffDate);
// //                 if (days > 0) {
// //                     let price = days * vehicle.pricePerDay;
                    
// //                     // Add extras
// //                     if (gpsIncluded) price += days * 500; // Rs. 500 per day for GPS
// //                     if (childSeatIncluded) price += days * 300; // Rs. 300 per day for child seat
// //                     if (driverStatus === 'WITH_DRIVER') price += days * 1500; // Rs. 1500 per day for driver
                    
// //                     setTotalPrice(price);
// //                 }
// //             }
// //         }, [pickupDate, dropOffDate, driverStatus, gpsIncluded, childSeatIncluded, vehicle.pricePerDay]);

// //         const calculateDays = (start, end) => {
// //             const startDate = new Date(start);
// //             const endDate = new Date(end);
// //             const diffTime = Math.abs(endDate - startDate);
// //             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// //             return diffDays;
// //         };

// //         const handleBookingSubmit = async (e) => {
// //             e.preventDefault();
// //             setBookingError('');

// //             if (!customerId) {
// //                 setBookingError('Please login to complete booking');
// //                 setTimeout(() => {
// //                     onClose();
// //                     navigate('/customer/login');
// //                 }, 2000);
// //                 return;
// //             }

// //             setIsSubmitting(true);

// //             const bookingData = {
// //                 customerId: parseInt(customerId),
// //                 vehicleId: vehicle.id,
// //                 agentId: vehicle.agentId,
// //                 pickupDate: pickupDate,
// //                 dropOffDate: dropOffDate,
// //                 pickupLocation: pickupLocation,
// //                 dropOffLocation: dropOffLocation || pickupLocation,
// //                 driverStatus: driverStatus,
// //                 bookingStatus: 'PENDING',
// //                 paymentStatus: 'PENDING',
// //                 totalPrice: totalPrice,
// //                 gpsIncluded: gpsIncluded,
// //                 childSeatIncluded: childSeatIncluded
// //             };

// //             try {
// //                 console.log('Booking Data:', bookingData);

// //                 const response = await axios.post(`${BASE_URL}/api/v1/booking/add`, bookingData, {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                     },
// //                     timeout: 30000,
// //                 });

// //                 if (response.status === 201) {
// //                     alert('Booking confirmed successfully!');
// //                     onClose();
// //                     // Redirect to customer bookings page
// //                     navigate('/customer/bookings');
// //                 }
// //             } catch (error) {
// //                 console.error('Booking error:', error);
                
// //                 if (error.response) {
// //                     if (error.response.status === 400) {
// //                         setBookingError('Invalid booking data. Please check all fields.');
// //                     } else if (error.response.status === 401) {
// //                         setBookingError('Session expired. Please login again.');
// //                         setTimeout(() => {
// //                             onClose();
// //                             navigate('/customer/login');
// //                         }, 2000);
// //                     } else if (error.response.data && error.response.data.errorMessage) {
// //                         setBookingError(error.response.data.errorMessage);
// //                     } else {
// //                         setBookingError('Booking failed. Please try again.');
// //                     }
// //                 } else if (error.request) {
// //                     setBookingError('Network error. Please check your connection.');
// //                 } else {
// //                     setBookingError('An unexpected error occurred.');
// //                 }
// //             } finally {
// //                 setIsSubmitting(false);
// //             }
// //         };

// //         if (!vehicle) return null;

// //         return (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //                 <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //                     <div className="p-6">
// //                         <div className="flex justify-between items-center mb-6">
// //                             <h2 className="text-2xl font-bold text-gray-800">Book Vehicle</h2>
// //                             <button
// //                                 onClick={onClose}
// //                                 className="text-gray-500 hover:text-gray-700"
// //                             >
// //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                                 </svg>
// //                             </button>
// //                         </div>

// //                         <div className="flex gap-4 mb-6">
// //                             <div className="w-32 h-32 rounded-lg overflow-hidden">
// //                                 <VehicleImage vehicle={vehicle} />
// //                             </div>
// //                             <div>
// //                                 <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
// //                                 <p className="text-gray-600">{vehicle.regNumber}</p>
// //                                 {vehicle.agentId && agentDetails[vehicle.agentId] && (
// //                                     <p className="text-sm text-teal-600 mt-1">
// //                                         Provider: {agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
// //                                     </p>
// //                                 )}
// //                                 <div className="flex items-center mt-2">
// //                                     <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
// //                                     <span className="text-gray-500 ml-1">/day</span>
// //                                 </div>
// //                                 <p className="text-sm text-gray-500 mt-1">
// //                                     {getFuelTypeDisplay(vehicle.fuelType)} • {getTransmissionDisplay(vehicle.transmissionType)} • {vehicle.seatingCapacity} seats
// //                                 </p>
// //                             </div>
// //                         </div>

// //                         {bookingError && (
// //                             <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
// //                                 <p className="text-red-700 text-sm">{bookingError}</p>
// //                             </div>
// //                         )}

// //                         <form onSubmit={handleBookingSubmit} className="space-y-4">
// //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
// //                                     <input
// //                                         type="date"
// //                                         value={pickupDate}
// //                                         onChange={(e) => setPickupDate(e.target.value)}
// //                                         min={new Date().toISOString().split('T')[0]}
// //                                         required
// //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     />
// //                                 </div>
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date *</label>
// //                                     <input
// //                                         type="date"
// //                                         value={dropOffDate}
// //                                         onChange={(e) => setDropOffDate(e.target.value)}
// //                                         min={pickupDate || new Date().toISOString().split('T')[0]}
// //                                         required
// //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     />
// //                                 </div>
// //                             </div>

// //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
// //                                     <select
// //                                         value={pickupLocation}
// //                                         onChange={(e) => setPickupLocation(e.target.value)}
// //                                         required
// //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                                     >
// //                                         <option value="">Select location</option>
// //                                         <option value="Colombo">Colombo</option>
// //                                         <option value="Kandy">Kandy</option>
// //                                         <option value="Galle">Galle</option>
// //                                         <option value="Negombo">Negombo</option>
// //                                         <option value="Jaffna">Jaffna</option>
// //                                     </select>
// //                                 </div>
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
// //                                     <select
// //                                         value={dropOffLocation}
// //                                         onChange={(e) => setDropOffLocation(e.target.value)}
// //                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                                     >
// //                                         <option value="">Same as pickup</option>
// //                                         <option value="Colombo">Colombo</option>
// //                                         <option value="Kandy">Kandy</option>
// //                                         <option value="Galle">Galle</option>
// //                                         <option value="Negombo">Negombo</option>
// //                                         <option value="Jaffna">Jaffna</option>
// //                                     </select>
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Driver Option</label>
// //                                 <div className="flex gap-4">
// //                                     {driverOptions.map(option => (
// //                                         <div key={option} className="flex items-center">
// //                                             <input
// //                                                 type="radio"
// //                                                 id={option}
// //                                                 name="driverStatus"
// //                                                 value={option}
// //                                                 checked={driverStatus === option}
// //                                                 onChange={(e) => setDriverStatus(e.target.value)}
// //                                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
// //                                             />
// //                                             <label
// //                                                 htmlFor={option}
// //                                                 className="ml-2 text-sm text-gray-700"
// //                                             >
// //                                                 {option === 'WITH_DRIVER' ? 'With Driver (+Rs. 1,500/day)' : 'Without Driver'}
// //                                             </label>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
// //                                 <div className="space-y-2">
// //                                     <div className="flex items-center">
// //                                         <input
// //                                             type="checkbox"
// //                                             id="gps"
// //                                             checked={gpsIncluded}
// //                                             onChange={(e) => setGpsIncluded(e.target.checked)}
// //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// //                                         />
// //                                         <label htmlFor="gps" className="ml-2 text-sm text-gray-700">
// //                                             GPS Navigation (Rs. 500/day)
// //                                         </label>
// //                                     </div>
// //                                     <div className="flex items-center">
// //                                         <input
// //                                             type="checkbox"
// //                                             id="childSeat"
// //                                             checked={childSeatIncluded}
// //                                             onChange={(e) => setChildSeatIncluded(e.target.checked)}
// //                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
// //                                         />
// //                                         <label htmlFor="childSeat" className="ml-2 text-sm text-gray-700">
// //                                             Child Seat (Rs. 300/day)
// //                                         </label>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {totalPrice > 0 && (
// //                                 <div className="bg-teal-50 p-4 rounded-lg">
// //                                     <div className="flex justify-between items-center">
// //                                         <span className="text-gray-700">
// //                                             Total for {calculateDays(pickupDate, dropOffDate)} days
// //                                         </span>
// //                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(totalPrice)}</span>
// //                                     </div>
// //                                     <div className="text-xs text-gray-500 mt-2">
// //                                         Base rate: {formatCurrency(vehicle.pricePerDay)}/day × {calculateDays(pickupDate, dropOffDate)} days
// //                                         {driverStatus === 'WITH_DRIVER' && ` • Driver: Rs. 1,500/day`}
// //                                         {gpsIncluded && ` • GPS: Rs. 500/day`}
// //                                         {childSeatIncluded && ` • Child Seat: Rs. 300/day`}
// //                                     </div>
// //                                 </div>
// //                             )}

// //                             <div className="flex gap-4 pt-4">
// //                                 <button
// //                                     type="submit"
// //                                     disabled={isSubmitting || !pickupDate || !dropOffDate || !pickupLocation}
// //                                     className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
// //                                         isSubmitting || !pickupDate || !dropOffDate || !pickupLocation
// //                                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //                                             : 'bg-gradient-to-r from-teal-600 to-teal-800 text-white hover:from-teal-700 hover:to-teal-900'
// //                                     }`}
// //                                 >
// //                                     {isSubmitting ? (
// //                                         <span className="flex items-center justify-center">
// //                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// //                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                                             </svg>
// //                                             Processing...
// //                                         </span>
// //                                     ) : (
// //                                         'Confirm Booking'
// //                                     )}
// //                                 </button>
// //                                 <button
// //                                     type="button"
// //                                     onClick={onClose}
// //                                     className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// //             {/* Header */}
// //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// //                 <div className="max-w-7xl mx-auto px-4 py-8">
// //                     <div className="flex flex-col md:flex-row justify-between items-center">
// //                         <div className="flex items-center mb-4 md:mb-0">
// //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// //                             <div>
// //                                 <h1 className="text-3xl md:text-4xl font-bold">FAIR RENT A CAR</h1>
// //                                 <p className="text-teal-300">Your Journey Begins Here</p>
// //                             </div>
// //                         </div>
// //                         <div className="flex gap-4">
// //                             {isAuthenticated ? (
// //                                 <>
// //                                     <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
// //                                         Dashboard
// //                                     </a>
// //                                     <a href="/customer/bookings" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// //                                         My Bookings
// //                                     </a>
// //                                 </>
// //                             ) : (
// //                                 <>
// //                                     <a href="/customer/login" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
// //                                         Login
// //                                     </a>
// //                                     <a href="/customer/register" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// //                                         Register
// //                                     </a>
// //                                 </>
// //                             )}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="max-w-7xl mx-auto px-4 py-8">
// //                 {/* Search and Filters */}
// //                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
// //                     {/* Search Bar */}
// //                     <div className="mb-6">
// //                         <div className="relative">
// //                             <input
// //                                 type="text"
// //                                 value={searchTerm}
// //                                 onChange={(e) => setSearchTerm(e.target.value)}
// //                                 placeholder="Search by car model, brand, color, or provider..."
// //                                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
// //                             />
// //                             <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                             </svg>
// //                         </div>
// //                     </div>

// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
// //                         {/* Fuel Type Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
// //                             <select
// //                                 value={fuelTypeFilter}
// //                                 onChange={(e) => setFuelTypeFilter(e.target.value)}
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                             >
// //                                 <option value="">All Fuels</option>
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
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                             >
// //                                 <option value="">All</option>
// //                                 {transmissionTypes.map(type => (
// //                                     <option key={type} value={type}>{getTransmissionDisplay(type)}</option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         {/* Seating Capacity Filter */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
// //                             <select
// //                                 value={seatingCapacityFilter}
// //                                 onChange={(e) => setSeatingCapacityFilter(e.target.value)}
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                             >
// //                                 <option value="">Any</option>
// //                                 {seatingCapacities.map(capacity => (
// //                                     <option key={capacity} value={capacity}>{capacity} seats</option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         {/* Sort By */}
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
// //                             <select
// //                                 value={sortBy}
// //                                 onChange={(e) => setSortBy(e.target.value)}
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
// //                             >
// //                                 <option value="recommended">Recommended</option>
// //                                 <option value="price-low">Price: Low to High</option>
// //                                 <option value="price-high">Price: High to Low</option>
// //                                 <option value="rating">Top Rated</option>
// //                                 <option value="newest">Newest First</option>
// //                             </select>
// //                         </div>

// //                         {/* Clear Filters */}
// //                         <div className="flex items-end">
// //                             <button
// //                                 onClick={clearFilters}
// //                                 className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
// //                             >
// //                                 Clear Filters
// //                             </button>
// //                         </div>
// //                     </div>

// //                     {/* Price Range Slider */}
// //                     <div className="mt-6">
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                             Price Range (per day): {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
// //                         </label>
// //                         <div className="flex gap-4">
// //                             <input
// //                                 type="range"
// //                                 min="0"
// //                                 max={priceRange.max}
// //                                 value={priceRange.min}
// //                                 onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
// //                                 className="w-full"
// //                             />
// //                             <input
// //                                 type="range"
// //                                 min="0"
// //                                 max={priceRange.max}
// //                                 value={priceRange.max}
// //                                 onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
// //                                 className="w-full"
// //                             />
// //                         </div>
// //                         <div className="flex justify-between text-xs text-gray-500 mt-2">
// //                             <span>Min: {formatCurrency(priceRange.min)}</span>
// //                             <span>Max: {formatCurrency(priceRange.max)}</span>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Results Count */}
// //                 <div className="mb-6 flex justify-between items-center">
// //                     <p className="text-gray-600">
// //                         <span className="font-bold">{filteredVehicles.length}</span> vehicles available
// //                     </p>
// //                     {filteredVehicles.length > 0 && (
// //                         <p className="text-sm text-gray-500">
// //                             Showing {Math.min(filteredVehicles.length, 12)} of {filteredVehicles.length}
// //                         </p>
// //                     )}
// //                 </div>

// //                 {/* Loading State */}
// //                 {isLoading && (
// //                     <div className="text-center py-12">
// //                         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
// //                         <p className="mt-4 text-gray-600">Loading amazing vehicles for you...</p>
// //                     </div>
// //                 )}

// //                 {/* Error State */}
// //                 {errorMessage && !isLoading && (
// //                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
// //                         <p className="text-red-700">{errorMessage}</p>
// //                         <button
// //                             onClick={fetchVehicles}
// //                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// //                         >
// //                             Try Again
// //                         </button>
// //                     </div>
// //                 )}

// //                 {/* No Results */}
// //                 {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
// //                     <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
// //                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
// //                         <p className="text-gray-600 mb-6">Try adjusting your filters</p>
// //                         <button
// //                             onClick={clearFilters}
// //                             className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
// //                         >
// //                             Clear All Filters
// //                         </button>
// //                     </div>
// //                 )}

// //                 {/* Vehicle Grid */}
// //                 {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                         {filteredVehicles.map((vehicle) => (
// //                             <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
// //                                 {/* Image */}
// //                                 <div className="relative">
// //                                     <VehicleImage vehicle={vehicle} />
                                    
// //                                     {/* Availability Badge */}
// //                                     <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
// //                                         vehicle.isAvailable 
// //                                             ? 'bg-green-500 text-white' 
// //                                             : 'bg-red-500 text-white'
// //                                     }`}>
// //                                         {vehicle.isAvailable ? 'Available Now' : 'Booked'}
// //                                     </div>

// //                                     {/* Rating Badge */}
// //                                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
// //                                         <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
// //                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                                         </svg>
// //                                         {vehicle.rating}
// //                                     </div>
// //                                 </div>

// //                                 {/* Content */}
// //                                 <div className="p-6">
// //                                     <div className="flex justify-between items-start mb-3">
// //                                         <div>
// //                                             <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
// //                                             <p className="text-gray-600 text-sm">{vehicle.regNumber}</p>
// //                                             {vehicle.agentId && agentDetails[vehicle.agentId] && (
// //                                                 <p className="text-xs text-teal-600 mt-1 flex items-center">
// //                                                     <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //                                                     </svg>
// //                                                     <b>Agent Name:-</b>{agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
// //                                                 </p>
// //                                             )}
// //                                         </div>
// //                                         <div 
// //                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
// //                                             style={{ backgroundColor: vehicle.color.toLowerCase() }}
// //                                             title={vehicle.color}
// //                                         />
// //                                     </div>

// //                                     {/* Specs */}
// //                                     <div className="grid grid-cols-2 gap-3 mb-4">
// //                                         <div className="flex items-center text-sm text-gray-600">
// //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                             {getFuelTypeDisplay(vehicle.fuelType)}
// //                                         </div>
// //                                         <div className="flex items-center text-sm text-gray-600">
// //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                                             </svg>
// //                                             {getTransmissionDisplay(vehicle.transmissionType)}
// //                                         </div>
// //                                         <div className="flex items-center text-sm text-gray-600">
// //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
// //                                             </svg>
// //                                             {vehicle.seatingCapacity} seats
// //                                         </div>
// //                                         <div className="flex items-center text-sm text-gray-600">
// //                                             <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                                             </svg>
// //                                             {vehicle.location}
// //                                         </div>
// //                                     </div>

// //                                     {/* Price and Book Button */}
// //                                     <div className="flex items-center justify-between pt-4 border-t border-gray-200">
// //                                         <div>
// //                                             <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
// //                                             <span className="text-gray-500 text-sm">/day</span>
// //                                         </div>
// //                                         <button
// //                                             onClick={() => handleBookNow(vehicle)}
// //                                             disabled={!vehicle.isAvailable}
// //                                             className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
// //                                                 vehicle.isAvailable
// //                                                     ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800'
// //                                                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //                                             }`}
// //                                         >
// //                                             {vehicle.isAvailable ? 'Book Now' : 'Unavailable'}
// //                                         </button>
// //                                     </div>

// //                                     {/* Trip Stats */}
// //                                     <div className="mt-3 text-xs text-gray-500 flex items-center">
// //                                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                         </svg>
// //                                         {vehicle.totalTrips}+ trips • {getVehicleAge(vehicle.yearOfManufacture)}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}

// //                 {/* Footer */}
// //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// //                     <p className="text-gray-500 text-sm">
// //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// //                     </p>
// //                     <div className="flex justify-center gap-4 mt-4">
// //                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
// //                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
// //                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
// //                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Booking Modal */}
// //             {showBookingModal && (
// //                 <BookingModal
// //                     vehicle={selectedVehicle}
// //                     onClose={() => setShowBookingModal(false)}
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // export default CustomerDashboard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CustomerDashboard = () => {
//     const navigate = useNavigate();
//     const [vehicles, setVehicles] = useState([]);
//     const [filteredVehicles, setFilteredVehicles] = useState([]);
//     const [allBookings, setAllBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [selectedVehicle, setSelectedVehicle] = useState(null);
//     const [showBookingModal, setShowBookingModal] = useState(false);
//     const [customerId, setCustomerId] = useState(null);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [agentDetails, setAgentDetails] = useState({});
    
//     // Date range filter states
//     const [pickupDate, setPickupDate] = useState('');
//     const [dropOffDate, setDropOffDate] = useState('');
//     const [showDateFilter, setShowDateFilter] = useState(false);
    
//     // Filter states
//     const [searchTerm, setSearchTerm] = useState('');
//     const [fuelTypeFilter, setFuelTypeFilter] = useState('');
//     const [transmissionFilter, setTransmissionFilter] = useState('');
//     const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
//     const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
//     const [sortBy, setSortBy] = useState('recommended');

//     // Available filters
//     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
//     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
//     const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

//     // Base URL for backend
//     const BASE_URL = 'http://localhost:8080';

//     useEffect(() => {
//         // Check if customer is logged in
//         const customerToken = localStorage.getItem('customerToken');
//         const storedCustomerId = localStorage.getItem('customerId');
        
//         if (customerToken && storedCustomerId) {
//             setIsAuthenticated(true);
//             setCustomerId(storedCustomerId);
//         }

//         fetchVehicles();
//         fetchAllBookings();
//     }, []);

//     useEffect(() => {
//         applyFilters();
//     }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, priceRange, sortBy, vehicles, allBookings, pickupDate, dropOffDate]);

//     const fetchAllBookings = async () => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 setAllBookings(response.data);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//         }
//     };

//     const fetchAgentDetails = async (agentId) => {
//         if (agentDetails[agentId]) return;
        
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 setAgentDetails(prev => ({
//                     ...prev,
//                     [agentId]: response.data
//                 }));
//             }
//         } catch (err) {
//             console.error('Error fetching agent details:', err);
//             setAgentDetails(prev => ({
//                 ...prev,
//                 [agentId]: { companyName: `Agent #${agentId}` }
//             }));
//         }
//     };

//     const fetchVehicles = async () => {
//         setIsLoading(true);
//         setErrorMessage('');
        
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 // Get unique agent IDs from vehicles
//                 const uniqueAgentIds = [...new Set(response.data.map(v => v.agentId).filter(id => id))];
                
//                 // Fetch agent details for each unique agent ID
//                 await Promise.all(uniqueAgentIds.map(id => fetchAgentDetails(id)));

//                 // Use the actual dailyRentalPrice from backend
//                 const vehiclesWithDetails = response.data.map(vehicle => ({
//                     ...vehicle,
//                     pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
//                     rating: (Math.random() * 2 + 3).toFixed(1),
//                     totalTrips: Math.floor(Math.random() * 200) + 50,
//                     location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
//                 }));
                
//                 setVehicles(vehiclesWithDetails);
                
//                 // Update max price range based on actual prices
//                 if (vehiclesWithDetails.length > 0) {
//                     const maxPrice = Math.max(...vehiclesWithDetails.map(v => v.pricePerDay));
//                     setPriceRange(prev => ({ ...prev, max: Math.ceil(maxPrice / 1000) * 1000 }));
//                 }
//             }
//         } catch (error) {
//             console.error('Error fetching vehicles:', error);
//             setErrorMessage('Failed to load vehicles. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const isVehicleAvailable = (vehicleId, startDate, endDate) => {
//         if (!startDate || !endDate) return true;
        
//         const start = new Date(startDate);
//         const end = new Date(endDate);
        
//         // Check if the vehicle has any bookings that overlap with the selected date range
//         const conflictingBookings = allBookings.filter(booking => 
//             booking.vehicleId === vehicleId && 
//             booking.bookingStatus !== 'CANCELLED' && // Only consider active bookings
//             ((new Date(booking.pickupDate) <= end && new Date(booking.dropOffDate) >= start))
//         );
        
//         return conflictingBookings.length === 0;
//     };

//     const applyFilters = () => {
//         let result = [...vehicles];

//         // Apply date range filter
//         if (pickupDate && dropOffDate) {
//             result = result.filter(vehicle => 
//                 isVehicleAvailable(vehicle.id, pickupDate, dropOffDate)
//             );
//         }

//         // Apply search filter
//         if (searchTerm) {
//             const term = searchTerm.toLowerCase();
//             result = result.filter(vehicle =>
//                 vehicle.makeModel.toLowerCase().includes(term) ||
//                 vehicle.regNumber.toLowerCase().includes(term) ||
//                 vehicle.color.toLowerCase().includes(term) ||
//                 (agentDetails[vehicle.agentId]?.companyName?.toLowerCase().includes(term))
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

//         // Apply price range filter
//         result = result.filter(vehicle => 
//             vehicle.pricePerDay >= priceRange.min && vehicle.pricePerDay <= priceRange.max
//         );

//         // Apply sorting
//         switch (sortBy) {
//             case 'price-low':
//                 result.sort((a, b) => a.pricePerDay - b.pricePerDay);
//                 break;
//             case 'price-high':
//                 result.sort((a, b) => b.pricePerDay - a.pricePerDay);
//                 break;
//             case 'rating':
//                 result.sort((a, b) => b.rating - a.rating);
//                 break;
//             case 'newest':
//                 result.sort((a, b) => b.yearOfManufacture - a.yearOfManufacture);
//                 break;
//             default:
//                 // recommended - mix of rating and availability
//                 result.sort((a, b) => {
//                     if (pickupDate && dropOffDate) {
//                         const aAvailable = isVehicleAvailable(a.id, pickupDate, dropOffDate);
//                         const bAvailable = isVehicleAvailable(b.id, pickupDate, dropOffDate);
//                         if (aAvailable && !bAvailable) return -1;
//                         if (!aAvailable && bAvailable) return 1;
//                     }
//                     return b.rating - a.rating;
//                 });
//         }

//         setFilteredVehicles(result);
//     };

//     const clearFilters = () => {
//         setSearchTerm('');
//         setFuelTypeFilter('');
//         setTransmissionFilter('');
//         setSeatingCapacityFilter('');
//         setPickupDate('');
//         setDropOffDate('');
        
//         // Reset price range to min and max from actual data
//         if (vehicles.length > 0) {
//             const maxPrice = Math.max(...vehicles.map(v => v.pricePerDay));
//             setPriceRange({ min: 0, max: Math.ceil(maxPrice / 1000) * 1000 });
//         } else {
//             setPriceRange({ min: 0, max: 20000 });
//         }
        
//         setSortBy('recommended');
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
//         if (!isAuthenticated) {
//             if (window.confirm('Please login to book a vehicle. Go to login page?')) {
//                 navigate('/customer/login', { state: { from: '/customer/vehicles' } });
//             }
//             return;
//         }
        
//         // Pre-fill the booking modal with selected dates if available
//         if (pickupDate && dropOffDate) {
//             setSelectedVehicle({
//                 ...vehicle,
//                 preSelectedPickup: pickupDate,
//                 preSelectedDropOff: dropOffDate
//             });
//         } else {
//             setSelectedVehicle(vehicle);
//         }
//         setShowBookingModal(true);
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

//     // Booking Modal Component (Updated to use pre-selected dates)
//     const BookingModal = ({ vehicle, onClose }) => {
//         const [pickupDate, setPickupDate] = useState(vehicle.preSelectedPickup || '');
//         const [dropOffDate, setDropOffDate] = useState(vehicle.preSelectedDropOff || '');
//         const [pickupLocation, setPickupLocation] = useState('');
//         const [dropOffLocation, setDropOffLocation] = useState('');
//         const [driverStatus, setDriverStatus] = useState('WITHOUT_DRIVER');
//         const [gpsIncluded, setGpsIncluded] = useState(false);
//         const [childSeatIncluded, setChildSeatIncluded] = useState(false);
//         const [totalPrice, setTotalPrice] = useState(0);
//         const [isSubmitting, setIsSubmitting] = useState(false);
//         const [bookingError, setBookingError] = useState('');

//         const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];

//         useEffect(() => {
//             if (pickupDate && dropOffDate) {
//                 const days = calculateDays(pickupDate, dropOffDate);
//                 if (days > 0) {
//                     let price = days * vehicle.pricePerDay;
                    
//                     if (gpsIncluded) price += days * 500;
//                     if (childSeatIncluded) price += days * 300;
//                     if (driverStatus === 'WITH_DRIVER') price += days * 1500;
                    
//                     setTotalPrice(price);
//                 }
//             }
//         }, [pickupDate, dropOffDate, driverStatus, gpsIncluded, childSeatIncluded, vehicle.pricePerDay]);

//         const calculateDays = (start, end) => {
//             const startDate = new Date(start);
//             const endDate = new Date(end);
//             const diffTime = Math.abs(endDate - startDate);
//             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//             return diffDays;
//         };

//         const handleBookingSubmit = async (e) => {
//             e.preventDefault();
//             setBookingError('');

//             if (!customerId) {
//                 setBookingError('Please login to complete booking');
//                 setTimeout(() => {
//                     onClose();
//                     navigate('/customer/login');
//                 }, 2000);
//                 return;
//             }

//             setIsSubmitting(true);

//             const bookingData = {
//                 customerId: parseInt(customerId),
//                 vehicleId: vehicle.id,
//                 agentId: vehicle.agentId,
//                 pickupDate: pickupDate,
//                 dropOffDate: dropOffDate,
//                 pickupLocation: pickupLocation,
//                 dropOffLocation: dropOffLocation || pickupLocation,
//                 driverStatus: driverStatus,
//                 bookingStatus: 'PENDING',
//                 paymentStatus: 'PENDING',
//                 totalPrice: totalPrice,
//                 gpsIncluded: gpsIncluded,
//                 childSeatIncluded: childSeatIncluded
//             };

//             try {
//                 console.log('Booking Data:', bookingData);

//                 const response = await axios.post(`${BASE_URL}/api/v1/booking/add`, bookingData, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                     },
//                     timeout: 30000,
//                 });

//                 if (response.status === 201) {
//                     alert('Booking confirmed successfully!');
//                     onClose();
//                     // Refresh bookings and clear date filter
//                     fetchAllBookings();
//                     setPickupDate('');
//                     setDropOffDate('');
//                     navigate('/customer/mybookings');
//                 }
//             } catch (error) {
//                 console.error('Booking error:', error);
                
//                 if (error.response) {
//                     if (error.response.status === 400) {
//                         setBookingError('Invalid booking data. Please check all fields.');
//                     } else if (error.response.status === 401) {
//                         setBookingError('Session expired. Please login again.');
//                         setTimeout(() => {
//                             onClose();
//                             navigate('/customer/login');
//                         }, 2000);
//                     } else if (error.response.data && error.response.data.errorMessage) {
//                         setBookingError(error.response.data.errorMessage);
//                     } else {
//                         setBookingError('Booking failed. Please try again.');
//                     }
//                 } else if (error.request) {
//                     setBookingError('Network error. Please check your connection.');
//                 } else {
//                     setBookingError('An unexpected error occurred.');
//                 }
//             } finally {
//                 setIsSubmitting(false);
//             }
//         };

//         if (!vehicle) return null;

//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                 <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                     <div className="p-6">
//                         <div className="flex justify-between items-center mb-6">
//                             <h2 className="text-2xl font-bold text-gray-800">Book Vehicle</h2>
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-500 hover:text-gray-700"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className="flex gap-4 mb-6">
//                             <div className="w-32 h-32 rounded-lg overflow-hidden">
//                                 <VehicleImage vehicle={vehicle} />
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
//                                 <p className="text-gray-600">{vehicle.regNumber}</p>
//                                 {vehicle.agentId && agentDetails[vehicle.agentId] && (
//                                     <p className="text-sm text-teal-600 mt-1">
//                                         Provider: {agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
//                                     </p>
//                                 )}
//                                 <div className="flex items-center mt-2">
//                                     <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
//                                     <span className="text-gray-500 ml-1">/day</span>
//                                 </div>
//                                 <p className="text-sm text-gray-500 mt-1">
//                                     {getFuelTypeDisplay(vehicle.fuelType)} • {getTransmissionDisplay(vehicle.transmissionType)} • {vehicle.seatingCapacity} seats
//                                 </p>
//                             </div>
//                         </div>

//                         {bookingError && (
//                             <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
//                                 <p className="text-red-700 text-sm">{bookingError}</p>
//                             </div>
//                         )}

//                         <form onSubmit={handleBookingSubmit} className="space-y-4">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
//                                     <input
//                                         type="date"
//                                         value={pickupDate}
//                                         onChange={(e) => setPickupDate(e.target.value)}
//                                         min={new Date().toISOString().split('T')[0]}
//                                         required
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date *</label>
//                                     <input
//                                         type="date"
//                                         value={dropOffDate}
//                                         onChange={(e) => setDropOffDate(e.target.value)}
//                                         min={pickupDate || new Date().toISOString().split('T')[0]}
//                                         required
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
//                                     <select
//                                         value={pickupLocation}
//                                         onChange={(e) => setPickupLocation(e.target.value)}
//                                         required
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                                     >
//                                         <option value="">Select location</option>
//                                         <option value="Colombo">Colombo</option>
//                                         <option value="Kandy">Kandy</option>
//                                         <option value="Galle">Galle</option>
//                                         <option value="Negombo">Negombo</option>
//                                         <option value="Jaffna">Jaffna</option>
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
//                                     <select
//                                         value={dropOffLocation}
//                                         onChange={(e) => setDropOffLocation(e.target.value)}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                                     >
//                                         <option value="">Same as pickup</option>
//                                         <option value="Colombo">Colombo</option>
//                                         <option value="Kandy">Kandy</option>
//                                         <option value="Galle">Galle</option>
//                                         <option value="Negombo">Negombo</option>
//                                         <option value="Jaffna">Jaffna</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Driver Option</label>
//                                 <div className="flex gap-4">
//                                     {driverOptions.map(option => (
//                                         <div key={option} className="flex items-center">
//                                             <input
//                                                 type="radio"
//                                                 id={option}
//                                                 name="driverStatus"
//                                                 value={option}
//                                                 checked={driverStatus === option}
//                                                 onChange={(e) => setDriverStatus(e.target.value)}
//                                                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                                             />
//                                             <label
//                                                 htmlFor={option}
//                                                 className="ml-2 text-sm text-gray-700"
//                                             >
//                                                 {option === 'WITH_DRIVER' ? 'With Driver (+Rs. 1,500/day)' : 'Without Driver'}
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
//                                 <div className="space-y-2">
//                                     <div className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             id="gps"
//                                             checked={gpsIncluded}
//                                             onChange={(e) => setGpsIncluded(e.target.checked)}
//                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                         />
//                                         <label htmlFor="gps" className="ml-2 text-sm text-gray-700">
//                                             GPS Navigation (Rs. 500/day)
//                                         </label>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             id="childSeat"
//                                             checked={childSeatIncluded}
//                                             onChange={(e) => setChildSeatIncluded(e.target.checked)}
//                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                         />
//                                         <label htmlFor="childSeat" className="ml-2 text-sm text-gray-700">
//                                             Child Seat (Rs. 300/day)
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>

//                             {totalPrice > 0 && (
//                                 <div className="bg-teal-50 p-4 rounded-lg">
//                                     <div className="flex justify-between items-center">
//                                         <span className="text-gray-700">
//                                             Total for {calculateDays(pickupDate, dropOffDate)} days
//                                         </span>
//                                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(totalPrice)}</span>
//                                     </div>
//                                     <div className="text-xs text-gray-500 mt-2">
//                                         Base rate: {formatCurrency(vehicle.pricePerDay)}/day × {calculateDays(pickupDate, dropOffDate)} days
//                                         {driverStatus === 'WITH_DRIVER' && ` • Driver: Rs. 1,500/day`}
//                                         {gpsIncluded && ` • GPS: Rs. 500/day`}
//                                         {childSeatIncluded && ` • Child Seat: Rs. 300/day`}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="flex gap-4 pt-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting || !pickupDate || !dropOffDate || !pickupLocation}
//                                     className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
//                                         isSubmitting || !pickupDate || !dropOffDate || !pickupLocation
//                                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                             : 'bg-gradient-to-r from-teal-600 to-teal-800 text-white hover:from-teal-700 hover:to-teal-900'
//                                     }`}
//                                 >
//                                     {isSubmitting ? (
//                                         <span className="flex items-center justify-center">
//                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Processing...
//                                         </span>
//                                     ) : (
//                                         'Confirm Booking'
//                                     )}
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={onClose}
//                                     className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
//                 <div className="max-w-7xl mx-auto px-4 py-8">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         <div className="flex items-center mb-4 md:mb-0">
//                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
//                             <div>
//                                 <h1 className="text-3xl md:text-4xl font-bold">FAIR RENT A CAR</h1>
//                                 <p className="text-teal-300">Your Journey Begins Here</p>
//                             </div>
//                         </div>
//                         <div className="flex gap-4">
//                             {isAuthenticated ? (
//                                 <>
//                                     <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
//                                         Dashboard
//                                     </a>
//                                     <a href="/customer/payment" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
//                                         My Bookings
//                                     </a>
//                                 </>
//                             ) : (
//                                 <>
//                                     <a href="/customer/login" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
//                                         Login
//                                     </a>
//                                     <a href="/customer/register" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
//                                         Register
//                                     </a>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Search and Filters */}
//                 <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
//                     {/* Search Bar */}
//                     <div className="mb-6">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 placeholder="Search by car model, brand, color, or provider..."
//                                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                             />
//                             <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>

//                     {/* Date Range Filter Toggle */}
//                     <div className="mb-4">
//                         <button
//                             onClick={() => setShowDateFilter(!showDateFilter)}
//                             className="flex items-center text-teal-600 hover:text-teal-800 font-medium"
//                         >
//                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                             </svg>
//                             {showDateFilter ? 'Hide Date Filter' : 'Filter by Availability (👈🏻....Clicked Here) '}
//                             {pickupDate && dropOffDate && (
//                                 <span className="ml-2 bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
//                                     {new Date(pickupDate).toLocaleDateString()} - {new Date(dropOffDate).toLocaleDateString()}
//                                 </span>
//                             )}
//                         </button>
//                     </div>

//                     {/* Date Range Filter */}
//                     {showDateFilter && (
//                         <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
//                                     <input
//                                         type="date"
//                                         value={pickupDate}
//                                         onChange={(e) => setPickupDate(e.target.value)}
//                                         min={new Date().toISOString().split('T')[0]}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date</label>
//                                     <input
//                                         type="date"
//                                         value={dropOffDate}
//                                         onChange={(e) => setDropOffDate(e.target.value)}
//                                         min={pickupDate || new Date().toISOString().split('T')[0]}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     />
//                                 </div>
//                             </div>
//                             <p className="text-xs text-gray-500 mt-2">
//                                 Only show vehicles available for the selected dates
//                             </p>
//                         </div>
//                     )}

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

//                         {/* Sort By */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
//                             <select
//                                 value={sortBy}
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                             >
//                                 <option value="recommended">Recommended</option>
//                                 <option value="price-low">Price: Low to High</option>
//                                 <option value="price-high">Price: High to Low</option>
//                                 <option value="rating">Top Rated</option>
//                                 <option value="newest">Newest First</option>
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

//                     {/* Price Range Slider */}
//                     <div className="mt-6">
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Price Range (per day): {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
//                         </label>
//                         <div className="flex gap-4">
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max={priceRange.max}
//                                 value={priceRange.min}
//                                 onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
//                                 className="w-full"
//                             />
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max={priceRange.max}
//                                 value={priceRange.max}
//                                 onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
//                                 className="w-full"
//                             />
//                         </div>
//                         <div className="flex justify-between text-xs text-gray-500 mt-2">
//                             <span>Min: {formatCurrency(priceRange.min)}</span>
//                             <span>Max: {formatCurrency(priceRange.max)}</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Results Count */}
//                 <div className="mb-6 flex justify-between items-center">
//                     <p className="text-gray-600">
//                         <span className="font-bold">{filteredVehicles.length}</span> vehicles available
//                         {pickupDate && dropOffDate && (
//                             <span className="text-sm text-gray-500 ml-2">
//                                 for {new Date(pickupDate).toLocaleDateString()} - {new Date(dropOffDate).toLocaleDateString()}
//                             </span>
//                         )}
//                     </p>
//                     {filteredVehicles.length > 0 && (
//                         <p className="text-sm text-gray-500">
//                             Showing {Math.min(filteredVehicles.length, 12)} of {filteredVehicles.length}
//                         </p>
//                     )}
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
//                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
//                         <p className="text-red-700">{errorMessage}</p>
//                         <button
//                             onClick={fetchVehicles}
//                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                         >
//                             Try Again
//                         </button>
//                     </div>
//                 )}

//                 {/* No Results */}
//                 {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
//                     <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
//                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
//                         <p className="text-gray-600 mb-6">
//                             {pickupDate && dropOffDate 
//                                 ? 'No vehicles available for the selected dates. Try different dates or clear the date filter.'
//                                 : 'Try adjusting your filters'}
//                         </p>
//                         <button
//                             onClick={clearFilters}
//                             className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
//                         >
//                             Clear All Filters
//                         </button>
//                     </div>
//                 )}

//                 {/* Vehicle Grid */}
//                 {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {filteredVehicles.map((vehicle) => {
//                             const isAvailable = !pickupDate || !dropOffDate || isVehicleAvailable(vehicle.id, pickupDate, dropOffDate);
//                             return (
//                                 <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
//                                     {/* Image */}
//                                     <div className="relative">
//                                         <VehicleImage vehicle={vehicle} />
                                        
//                                         {/* Availability Badge */}
//                                         <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
//                                             isAvailable 
//                                                 ? 'bg-green-500 text-white' 
//                                                 : 'bg-red-500 text-white'
//                                         }`}>
//                                             {isAvailable ? 'Available' : 'Booked'}
//                                         </div>

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
//                                                 {vehicle.agentId && agentDetails[vehicle.agentId] && (
//                                                     <p className="text-xs text-teal-600 mt-1 flex items-center">
//                                                         <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                                         </svg>
//                                                         {agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
//                                                     </p>
//                                                 )}
//                                             </div>
//                                             <div 
//                                                 className="w-8 h-8 rounded-full border-2 border-gray-300"
//                                                 style={{ backgroundColor: vehicle.color.toLowerCase() }}
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
//                                                 disabled={!isAvailable}
//                                                 className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
//                                                     isAvailable
//                                                         ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800'
//                                                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                                 }`}
//                                             >
//                                                 {isAvailable ? 'Book Now' : 'Unavailable'}
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
//                             );
//                         })}
//                     </div>
//                 )}

//                 {/* Footer */}
//                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
//                     <p className="text-gray-500 text-sm">
//                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
//                     </p>
//                     <div className="flex justify-center gap-4 mt-4">
//                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
//                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
//                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
//                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
//                     </div>
//                 </div>
//             </div>

//             {/* Booking Modal */}
//             {showBookingModal && (
//                 <BookingModal
//                     vehicle={selectedVehicle}
//                     onClose={() => setShowBookingModal(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default CustomerDashboard;





// src/Pages/Customer/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [allBookings, setAllBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [customerId, setCustomerId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [agentDetails, setAgentDetails] = useState({});
    
    // Date range filter states
    const [pickupDate, setPickupDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [showDateFilter, setShowDateFilter] = useState(false);
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [fuelTypeFilter, setFuelTypeFilter] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [seatingCapacityFilter, setSeatingCapacityFilter] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
    const [sortBy, setSortBy] = useState('recommended');

    // Available filters
    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    const seatingCapacities = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

    // Base URL for backend
    const BASE_URL = 'http://localhost:8080';

    useEffect(() => {
        // Check if customer is logged in
        const customerToken = localStorage.getItem('customerToken');
        const storedCustomerId = localStorage.getItem('customerId');
        
        if (customerToken && storedCustomerId) {
            setIsAuthenticated(true);
            setCustomerId(storedCustomerId);
        }

        fetchVehicles();
        fetchAllBookings();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [searchTerm, fuelTypeFilter, transmissionFilter, seatingCapacityFilter, priceRange, sortBy, vehicles, allBookings, pickupDate, dropOffDate]);

    const fetchAllBookings = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
                timeout: 30000,
            });

            if (response.status === 200) {
                setAllBookings(response.data);
            }
        } catch (err) {
            console.error('Error fetching bookings:', err);
        }
    };

    const fetchAgentDetails = async (agentId) => {
        if (agentDetails[agentId]) return;
        
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
                timeout: 30000,
            });

            if (response.status === 200) {
                setAgentDetails(prev => ({
                    ...prev,
                    [agentId]: response.data
                }));
            }
        } catch (err) {
            console.error('Error fetching agent details:', err);
            setAgentDetails(prev => ({
                ...prev,
                [agentId]: { companyName: `Agent #${agentId}` }
            }));
        }
    };

    const fetchVehicles = async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
                timeout: 30000,
            });

            if (response.status === 200) {
                // Get unique agent IDs from vehicles
                const uniqueAgentIds = [...new Set(response.data.map(v => v.agentId).filter(id => id))];
                
                // Fetch agent details for each unique agent ID
                await Promise.all(uniqueAgentIds.map(id => fetchAgentDetails(id)));

                // Use the actual dailyRentalPrice from backend
                const vehiclesWithDetails = response.data.map(vehicle => ({
                    ...vehicle,
                    pricePerDay: vehicle.dailyRentalPrice || Math.floor(Math.random() * 5000) + 1500,
                    rating: (Math.random() * 2 + 3).toFixed(1),
                    totalTrips: Math.floor(Math.random() * 200) + 50,
                    location: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'][Math.floor(Math.random() * 5)]
                }));
                
                setVehicles(vehiclesWithDetails);
                
                // Update max price range based on actual prices
                if (vehiclesWithDetails.length > 0) {
                    const maxPrice = Math.max(...vehiclesWithDetails.map(v => v.pricePerDay));
                    setPriceRange(prev => ({ ...prev, max: Math.ceil(maxPrice / 1000) * 1000 }));
                }
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            setErrorMessage('Failed to load vehicles. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // FIXED: Proper vehicle availability check
    const isVehicleAvailable = (vehicleId, startDate, endDate) => {
        if (!startDate || !endDate) return true;
        
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        // Set time to beginning and end of day for accurate comparison
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        // Check if the vehicle has any bookings that overlap with the selected date range
        const conflictingBookings = allBookings.filter(booking => {
            // Only consider this vehicle's bookings
            if (booking.vehicleId !== vehicleId) return false;
            
            // Only consider active bookings (not cancelled or completed)
            if (booking.bookingStatus === 'CANCELLED' || booking.bookingStatus === 'COMPLETED') {
                return false;
            }
            
            const bookingStart = new Date(booking.pickupDate);
            const bookingEnd = new Date(booking.dropOffDate);
            
            // Set booking times for proper comparison
            bookingStart.setHours(0, 0, 0, 0);
            bookingEnd.setHours(23, 59, 59, 999);
            
            // Check for overlap:
            // A conflict exists if:
            // 1. The requested start date falls within an existing booking period
            // 2. The requested end date falls within an existing booking period
            // 3. The requested period completely encompasses an existing booking
            // 4. An existing booking completely encompasses the requested period
            
            const overlap = (
                (start >= bookingStart && start <= bookingEnd) || // Start date overlaps
                (end >= bookingStart && end <= bookingEnd) ||     // End date overlaps
                (start <= bookingStart && end >= bookingEnd)      // Requested period covers entire booking
            );
            
            return overlap;
        });
        
        return conflictingBookings.length === 0;
    };

    const applyFilters = () => {
        let result = [...vehicles];

        // Apply date range filter
        if (pickupDate && dropOffDate) {
            result = result.filter(vehicle => 
                isVehicleAvailable(vehicle.id, pickupDate, dropOffDate)
            );
        }

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(vehicle =>
                vehicle.makeModel.toLowerCase().includes(term) ||
                vehicle.regNumber.toLowerCase().includes(term) ||
                vehicle.color.toLowerCase().includes(term) ||
                (agentDetails[vehicle.agentId]?.companyName?.toLowerCase().includes(term))
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

        // Apply price range filter
        result = result.filter(vehicle => 
            vehicle.pricePerDay >= priceRange.min && vehicle.pricePerDay <= priceRange.max
        );

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.pricePerDay - b.pricePerDay);
                break;
            case 'price-high':
                result.sort((a, b) => b.pricePerDay - a.pricePerDay);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                result.sort((a, b) => b.yearOfManufacture - a.yearOfManufacture);
                break;
            default:
                // recommended - mix of rating and availability
                result.sort((a, b) => {
                    if (pickupDate && dropOffDate) {
                        const aAvailable = isVehicleAvailable(a.id, pickupDate, dropOffDate);
                        const bAvailable = isVehicleAvailable(b.id, pickupDate, dropOffDate);
                        if (aAvailable && !bAvailable) return -1;
                        if (!aAvailable && bAvailable) return 1;
                    }
                    return b.rating - a.rating;
                });
        }

        setFilteredVehicles(result);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setFuelTypeFilter('');
        setTransmissionFilter('');
        setSeatingCapacityFilter('');
        setPickupDate('');
        setDropOffDate('');
        
        // Reset price range to min and max from actual data
        if (vehicles.length > 0) {
            const maxPrice = Math.max(...vehicles.map(v => v.pricePerDay));
            setPriceRange({ min: 0, max: Math.ceil(maxPrice / 1000) * 1000 });
        } else {
            setPriceRange({ min: 0, max: 20000 });
        }
        
        setSortBy('recommended');
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
        if (!isAuthenticated) {
            if (window.confirm('Please login to book a vehicle. Go to login page?')) {
                navigate('/customer/login', { state: { from: '/customer/dashboard' } });
            }
            return;
        }
        
        // Pre-fill the booking modal with selected dates if available
        if (pickupDate && dropOffDate) {
            setSelectedVehicle({
                ...vehicle,
                preSelectedPickup: pickupDate,
                preSelectedDropOff: dropOffDate
            });
        } else {
            setSelectedVehicle(vehicle);
        }
        setShowBookingModal(true);
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

    // ========== BOOKING MODAL COMPONENT ==========
    const BookingModal = ({ vehicle, onClose }) => {
        const [pickupDate, setPickupDate] = useState(vehicle.preSelectedPickup || '');
        const [dropOffDate, setDropOffDate] = useState(vehicle.preSelectedDropOff || '');
        const [pickupLocation, setPickupLocation] = useState('');
        const [dropOffLocation, setDropOffLocation] = useState('');
        const [driverStatus, setDriverStatus] = useState('WITHOUT_DRIVER');
        const [gpsIncluded, setGpsIncluded] = useState(false);
        const [childSeatIncluded, setChildSeatIncluded] = useState(false);
        const [totalPrice, setTotalPrice] = useState(0);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [bookingError, setBookingError] = useState('');
        const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

        const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];

        useEffect(() => {
            if (pickupDate && dropOffDate) {
                const days = calculateDays(pickupDate, dropOffDate);
                if (days > 0) {
                    let price = days * vehicle.pricePerDay;
                    
                    if (gpsIncluded) price += days * 500;
                    if (childSeatIncluded) price += days * 300;
                    if (driverStatus === 'WITH_DRIVER') price += days * 1500;
                    
                    setTotalPrice(price);
                }
            }
        }, [pickupDate, dropOffDate, driverStatus, gpsIncluded, childSeatIncluded, vehicle.pricePerDay]);

        const calculateDays = (start, end) => {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        };

        // FIXED: Real-time availability check before booking
        const checkAvailabilityBeforeBooking = async () => {
            setIsCheckingAvailability(true);
            try {
                // Get all bookings
                const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`);
                
                const start = new Date(pickupDate);
                const end = new Date(dropOffDate);
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 999);
                
                // Check for conflicts
                const conflictingBookings = response.data.filter(booking => {
                    if (booking.vehicleId !== vehicle.id) return false;
                    if (booking.bookingStatus === 'CANCELLED' || booking.bookingStatus === 'COMPLETED') {
                        return false;
                    }
                    
                    const bookingStart = new Date(booking.pickupDate);
                    const bookingEnd = new Date(booking.dropOffDate);
                    bookingStart.setHours(0, 0, 0, 0);
                    bookingEnd.setHours(23, 59, 59, 999);
                    
                    const overlap = (
                        (start >= bookingStart && start <= bookingEnd) ||
                        (end >= bookingStart && end <= bookingEnd) ||
                        (start <= bookingStart && end >= bookingEnd)
                    );
                    
                    return overlap;
                });
                
                setIsCheckingAvailability(false);
                return conflictingBookings.length === 0;
            } catch (error) {
                console.error('Error checking availability:', error);
                setIsCheckingAvailability(false);
                return false; // Assume not available if check fails
            }
        };

        const handleBookingSubmit = async (e) => {
            e.preventDefault();
            setBookingError('');

            if (!customerId) {
                setBookingError('Please login to complete booking');
                setTimeout(() => {
                    onClose();
                    navigate('/customer/login');
                }, 2000);
                return;
            }

            // Validate dates
            if (!pickupDate || !dropOffDate) {
                setBookingError('Please select pickup and drop-off dates');
                return;
            }

            if (new Date(pickupDate) >= new Date(dropOffDate)) {
                setBookingError('Drop-off date must be after pickup date');
                return;
            }

            // Double-check availability before booking
            setIsSubmitting(true);
            const isAvailable = await checkAvailabilityBeforeBooking();
            
            if (!isAvailable) {
                setBookingError('Sorry, this vehicle is no longer available for the selected dates. Please choose different dates.');
                setIsSubmitting(false);
                return;
            }

            const bookingData = {
                customerId: parseInt(customerId),
                vehicleId: vehicle.id,
                agentId: vehicle.agentId,
                pickupDate: pickupDate,
                dropOffDate: dropOffDate,
                pickupLocation: pickupLocation,
                dropOffLocation: dropOffLocation || pickupLocation,
                driverStatus: driverStatus,
                bookingStatus: 'PENDING',
                paymentStatus: 'PENDING',
                totalPrice: totalPrice,
                gpsIncluded: gpsIncluded,
                childSeatIncluded: childSeatIncluded
            };

            try {
                console.log('Booking Data:', bookingData);

                const response = await axios.post(`${BASE_URL}/api/v1/booking/add`, bookingData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                    },
                    timeout: 30000,
                });

                if (response.status === 201) {
                    alert('Booking confirmed successfully!');
                    onClose();
                    // Refresh bookings and clear date filter
                    fetchAllBookings();
                    setPickupDate('');
                    setDropOffDate('');
                    navigate('/customer/mybookings');
                }
            } catch (error) {
                console.error('Booking error:', error);
                
                if (error.response) {
                    if (error.response.status === 400) {
                        if (error.response.data && error.response.data.errorMessage) {
                            setBookingError(error.response.data.errorMessage);
                        } else {
                            setBookingError('Invalid booking data. Please check all fields.');
                        }
                    } else if (error.response.status === 409) {
                        setBookingError('This vehicle is already booked for the selected dates. Please choose different dates or vehicle.');
                    } else if (error.response.status === 401) {
                        setBookingError('Session expired. Please login again.');
                        setTimeout(() => {
                            onClose();
                            navigate('/customer/login');
                        }, 2000);
                    } else {
                        setBookingError('Booking failed. Please try again.');
                    }
                } else if (error.request) {
                    setBookingError('Network error. Please check your connection.');
                } else {
                    setBookingError('An unexpected error occurred.');
                }
            } finally {
                setIsSubmitting(false);
            }
        };

        if (!vehicle) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Book Vehicle</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <div className="w-32 h-32 rounded-lg overflow-hidden">
                                <VehicleImage vehicle={vehicle} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h3>
                                <p className="text-gray-600">{vehicle.regNumber}</p>
                                {vehicle.agentId && agentDetails[vehicle.agentId] && (
                                    <p className="text-sm text-teal-600 mt-1">
                                        Provider: {agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
                                    </p>
                                )}
                                <div className="flex items-center mt-2">
                                    <span className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</span>
                                    <span className="text-gray-500 ml-1">/day</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                    {getFuelTypeDisplay(vehicle.fuelType)} • {getTransmissionDisplay(vehicle.transmissionType)} • {vehicle.seatingCapacity} seats
                                </p>
                            </div>
                        </div>

                        {bookingError && (
                            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
                                <p className="text-red-700 text-sm">{bookingError}</p>
                            </div>
                        )}

                        <form onSubmit={handleBookingSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date *</label>
                                    <input
                                        type="date"
                                        value={dropOffDate}
                                        onChange={(e) => setDropOffDate(e.target.value)}
                                        min={pickupDate || new Date().toISOString().split('T')[0]}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
                                    <select
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                    >
                                        <option value="">Select location</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Negombo">Negombo</option>
                                        <option value="Jaffna">Jaffna</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
                                    <select
                                        value={dropOffLocation}
                                        onChange={(e) => setDropOffLocation(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                    >
                                        <option value="">Same as pickup</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Negombo">Negombo</option>
                                        <option value="Jaffna">Jaffna</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Driver Option</label>
                                <div className="flex gap-4">
                                    {driverOptions.map(option => (
                                        <div key={option} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={option}
                                                name="driverStatus"
                                                value={option}
                                                checked={driverStatus === option}
                                                onChange={(e) => setDriverStatus(e.target.value)}
                                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                            />
                                            <label
                                                htmlFor={option}
                                                className="ml-2 text-sm text-gray-700"
                                            >
                                                {option === 'WITH_DRIVER' ? 'With Driver (+Rs. 2,500/day)' : 'Without Driver'}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="gps"
                                            checked={gpsIncluded}
                                            onChange={(e) => setGpsIncluded(e.target.checked)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="gps" className="ml-2 text-sm text-gray-700">
                                            GPS Navigation (Rs. 500/day)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="childSeat"
                                            checked={childSeatIncluded}
                                            onChange={(e) => setChildSeatIncluded(e.target.checked)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="childSeat" className="ml-2 text-sm text-gray-700">
                                            Child Seat (Rs. 300/day)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {totalPrice > 0 && (
                                <div className="bg-teal-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Total for {calculateDays(pickupDate, dropOffDate)} days
                                        </span>
                                        <span className="text-2xl font-bold text-teal-600">{formatCurrency(totalPrice)}</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-2">
                                        Base rate: {formatCurrency(vehicle.pricePerDay)}/day × {calculateDays(pickupDate, dropOffDate)} days
                                        {driverStatus === 'WITH_DRIVER' && ` • Driver: Rs. 1,500/day`}
                                        {gpsIncluded && ` • GPS: Rs. 500/day`}
                                        {childSeatIncluded && ` • Child Seat: Rs. 300/day`}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !pickupDate || !dropOffDate || !pickupLocation || isCheckingAvailability}
                                    className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
                                        isSubmitting || !pickupDate || !dropOffDate || !pickupLocation || isCheckingAvailability
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-teal-600 to-teal-800 text-white hover:from-teal-700 hover:to-teal-900'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : isCheckingAvailability ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Checking Availability...
                                        </span>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
    // ========== END OF BOOKING MODAL ==========

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold">FAIR RENT A CAR</h1>
                                <p className="text-teal-300">Your Journey Begins Here</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {isAuthenticated ? (
                                <>
                                    <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
                                        Dashboard
                                    </a>
                                    <a href="/customer/mybookings" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
                                        My Bookings
                                    </a>
                                </>
                            ) : (
                                <>
                                    <a href="/customer/login" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
                                        Login
                                    </a>
                                    <a href="/customer/register" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
                                        Register
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by car model, brand, color, or provider..."
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                            <svg className="absolute left-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Date Range Filter Toggle */}
                    <div className="mb-4">
                        <button
                            onClick={() => setShowDateFilter(!showDateFilter)}
                            className="flex items-center text-teal-600 hover:text-teal-800 font-medium"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {showDateFilter ? 'Hide Date Filter' : 'Filter by Availability'}
                            {pickupDate && dropOffDate && (
                                <span className="ml-2 bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                                    {new Date(pickupDate).toLocaleDateString()} - {new Date(dropOffDate).toLocaleDateString()}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Date Range Filter */}
                    {showDateFilter && (
                        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Date</label>
                                    <input
                                        type="date"
                                        value={dropOffDate}
                                        onChange={(e) => setDropOffDate(e.target.value)}
                                        min={pickupDate || new Date().toISOString().split('T')[0]}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Only show vehicles available for the selected dates
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

                        {/* Sort By */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                                <option value="newest">Newest First</option>
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

                    {/* Price Range Slider */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price Range (per day): {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="range"
                                min="0"
                                max={priceRange.max}
                                value={priceRange.min}
                                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                                className="w-full"
                            />
                            <input
                                type="range"
                                min="0"
                                max={priceRange.max}
                                value={priceRange.max}
                                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                                className="w-full"
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>Min: {formatCurrency(priceRange.min)}</span>
                            <span>Max: {formatCurrency(priceRange.max)}</span>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-gray-600">
                        <span className="font-bold">{filteredVehicles.length}</span> vehicles available
                        {pickupDate && dropOffDate && (
                            <span className="text-sm text-gray-500 ml-2">
                                for {new Date(pickupDate).toLocaleDateString()} - {new Date(dropOffDate).toLocaleDateString()}
                            </span>
                        )}
                    </p>
                    {filteredVehicles.length > 0 && (
                        <p className="text-sm text-gray-500">
                            Showing {Math.min(filteredVehicles.length, 12)} of {filteredVehicles.length}
                        </p>
                    )}
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
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                        <p className="text-red-700">{errorMessage}</p>
                        <button
                            onClick={fetchVehicles}
                            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* No Results */}
                {!isLoading && !errorMessage && filteredVehicles.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
                        <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Vehicles Found</h3>
                        <p className="text-gray-600 mb-6">
                            {pickupDate && dropOffDate 
                                ? 'No vehicles available for the selected dates. Try different dates or clear the date filter.'
                                : 'Try adjusting your filters'}
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}

                {/* Vehicle Grid */}
                {!isLoading && !errorMessage && filteredVehicles.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVehicles.map((vehicle) => {
                            const isAvailable = !pickupDate || !dropOffDate || isVehicleAvailable(vehicle.id, pickupDate, dropOffDate);
                            return (
                                <div key={vehicle.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                                    {/* Image */}
                                    <div className="relative">
                                        <VehicleImage vehicle={vehicle} />
                                        
                                        {/* Availability Badge */}
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                                            isAvailable 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-red-500 text-white'
                                        }`}>
                                            {isAvailable ? 'Available' : 'Booked'}
                                        </div>

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
                                                {vehicle.agentId && agentDetails[vehicle.agentId] && (
                                                    <p className="text-xs text-teal-600 mt-1 flex items-center">
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                        {agentDetails[vehicle.agentId].companyName || `Agent #${vehicle.agentId}`}
                                                    </p>
                                                )}
                                            </div>
                                            <div 
                                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                                style={{ backgroundColor: vehicle.color.toLowerCase() }}
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
                                                disabled={!isAvailable}
                                                className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
                                                    isAvailable
                                                        ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800'
                                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                {isAvailable ? 'Book Now' : 'Unavailable'}
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
                            );
                        })}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
                        <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
                        <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
                        <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showBookingModal && selectedVehicle && (
                <BookingModal
                    vehicle={selectedVehicle}
                    onClose={() => {
                        setShowBookingModal(false);
                        setSelectedVehicle(null);
                    }}
                />
            )}
        </div>
    );
};

export default CustomerDashboard;