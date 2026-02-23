
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const CustomerMyBookings = () => {
// //     const navigate = useNavigate();
// //     const [bookings, setBookings] = useState([]);
// //     const [filteredBookings, setFilteredBookings] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [activeTab, setActiveTab] = useState('all'); // all, pending, confirmed, completed, cancelled
// //     const [selectedBooking, setSelectedBooking] = useState(null);
// //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// //     const [showCancelModal, setShowCancelModal] = useState(false);
// //     const [cancelReason, setCancelReason] = useState('');
// //     const [isCancelling, setIsCancelling] = useState(false);
    
// //     // Stats
// //     const [bookingStats, setBookingStats] = useState({
// //         total: 0,
// //         pending: 0,
// //         confirmed: 0,
// //         completed: 0,
// //         cancelled: 0
// //     });

// //     const BASE_URL = 'http://localhost:8080';

// //     useEffect(() => {
// //         // Check if customer is logged in
// //         const customerToken = localStorage.getItem('customerToken');
// //         const storedCustomerId = localStorage.getItem('customerId');
        
// //         if (!customerToken || !storedCustomerId) {
// //             navigate('/customer/login');
// //             return;
// //         }

// //         fetchAllBookings();
// //     }, [navigate]);

// //     useEffect(() => {
// //         filterBookingsByTab();
// //     }, [activeTab, bookings]);

// //     const fetchVehicleDetails = async (vehicleId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 },
// //                 timeout: 30000,
// //             });
// //             return response.data;
// //         } catch (err) {
// //             console.error('Error fetching vehicle details:', err);
// //             return null;
// //         }
// //     };

// //     const fetchAgentDetails = async (agentId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 },
// //                 timeout: 30000,
// //             });
// //             return response.data;
// //         } catch (err) {
// //             console.error('Error fetching agent details:', err);
// //             return { companyName: `Agent #${agentId}` };
// //         }
// //     };

// //     const fetchPaymentForBooking = async (bookingId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/payment/by-booking/${bookingId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 }
// //             });
// //             return response.data;
// //         } catch (err) {
// //             // Payment might not exist yet
// //             return null;
// //         }
// //     };

// //     const fetchAllBookings = async () => {
// //         setIsLoading(true);
// //         setErrorMessage('');
        
// //         try {
// //             const customerId = localStorage.getItem('customerId');
            
// //             // Fetch all bookings
// //             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //                 },
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 console.log('Raw booking data:', response.data);
                
// //                 // Filter bookings for this customer
// //                 const customerBookings = response.data.filter(booking => {
// //                     const bookingCustomerId = booking.customerId || booking.customer?.id;
// //                     return bookingCustomerId === parseInt(customerId);
// //                 });

// //                 // Enhance bookings with additional details
// //                 const enhancedBookings = await Promise.all(
// //                     customerBookings.map(async (booking) => {
// //                         // Get vehicle details
// //                         let vehicleData = booking.vehicle;
// //                         if (!vehicleData || !vehicleData.makeModel) {
// //                             const vehicleId = booking.vehicleId || booking.vehicle?.id;
// //                             if (vehicleId) {
// //                                 vehicleData = await fetchVehicleDetails(vehicleId);
// //                             }
// //                         }

// //                         // Get agent details
// //                         let agentData = booking.agent;
// //                         if (!agentData || !agentData.companyName) {
// //                             const agentId = booking.agentId || booking.agent?.id;
// //                             if (agentId) {
// //                                 agentData = await fetchAgentDetails(agentId);
// //                             }
// //                         }

// //                         // Get payment details if available
// //                         const paymentData = await fetchPaymentForBooking(booking.id);

// //                         // Calculate number of days
// //                         const pickupDate = new Date(booking.pickupDate);
// //                         const dropOffDate = new Date(booking.dropOffDate);
// //                         const days = Math.ceil((dropOffDate - pickupDate) / (1000 * 60 * 60 * 24));

// //                         return {
// //                             id: booking.id,
// //                             bookingStatus: booking.bookingStatus || 'PENDING',
// //                             paymentStatus: booking.paymentStatus || 'PENDING',
// //                             pickupDate: booking.pickupDate,
// //                             dropOffDate: booking.dropOffDate,
// //                             totalPrice: booking.totalPrice || 0,
// //                             pickupLocation: booking.pickupLocation,
// //                             dropOffLocation: booking.dropOffLocation || booking.pickupLocation,
// //                             driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
// //                             gpsIncluded: booking.gpsIncluded || false,
// //                             childSeatIncluded: booking.childSeatIncluded || false,
// //                             customerId: booking.customerId || booking.customer?.id,
// //                             vehicleId: booking.vehicleId || booking.vehicle?.id,
// //                             agentId: booking.agentId || booking.agent?.id,
// //                             createdAt: booking.createdAt || new Date().toISOString(),
// //                             numberOfDays: days,
// //                             vehicle: vehicleData ? {
// //                                 id: vehicleData.id,
// //                                 makeModel: vehicleData.makeModel || 'Unknown Vehicle',
// //                                 regNumber: vehicleData.regNumber || 'N/A',
// //                                 fuelType: vehicleData.fuelType,
// //                                 transmissionType: vehicleData.transmissionType,
// //                                 seatingCapacity: vehicleData.seatingCapacity,
// //                                 color: vehicleData.color,
// //                                 vehicleImage: vehicleData.vehicleImage,
// //                                 displayInfo: `${vehicleData.makeModel || 'Unknown'} (${vehicleData.regNumber || 'N/A'})`
// //                             } : {
// //                                 displayInfo: `Vehicle #${booking.vehicleId || 'Unknown'}`
// //                             },
// //                             agent: agentData ? {
// //                                 id: agentData.id,
// //                                 companyName: agentData.companyName || `Agent #${agentData.id}`,
// //                                 contactNumber: agentData.contactNumber,
// //                                 email: agentData.email
// //                             } : {
// //                                 companyName: `Agent #${booking.agentId || 'Unknown'}`
// //                             },
// //                             payment: paymentData
// //                         };
// //                     })
// //                 );

// //                 // Sort by date (most recent first)
// //                 enhancedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                
// //                 console.log('Enhanced bookings:', enhancedBookings);
// //                 setBookings(enhancedBookings);
                
// //                 // Calculate stats
// //                 const stats = {
// //                     total: enhancedBookings.length,
// //                     pending: enhancedBookings.filter(b => b.paymentStatus === 'PENDING' && b.bookingStatus !== 'CANCELLED').length,
// //                     confirmed: enhancedBookings.filter(b => b.bookingStatus === 'CONFIRMED' && b.paymentStatus === 'COMPLETED').length,
// //                     completed: enhancedBookings.filter(b => b.bookingStatus === 'COMPLETED').length,
// //                     cancelled: enhancedBookings.filter(b => b.bookingStatus === 'CANCELLED').length
// //                 };
// //                 setBookingStats(stats);
// //             }
// //         } catch (err) {
// //             console.error('Error fetching bookings:', err);
// //             setErrorMessage('Failed to load bookings. Please try again.');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const filterBookingsByTab = () => {
// //         let filtered = [...bookings];

// //         switch (activeTab) {
// //             case 'pending':
// //                 filtered = bookings.filter(b => 
// //                     b.paymentStatus === 'PENDING' && 
// //                     b.bookingStatus !== 'CANCELLED' &&
// //                     b.bookingStatus !== 'COMPLETED'
// //                 );
// //                 break;
// //             case 'confirmed':
// //                 filtered = bookings.filter(b => 
// //                     b.bookingStatus === 'CONFIRMED' && 
// //                     b.paymentStatus === 'COMPLETED'
// //                 );
// //                 break;
// //             case 'completed':
// //                 filtered = bookings.filter(b => b.bookingStatus === 'COMPLETED');
// //                 break;
// //             case 'cancelled':
// //                 filtered = bookings.filter(b => b.bookingStatus === 'CANCELLED');
// //                 break;
// //             default:
// //                 filtered = bookings;
// //                 break;
// //         }

// //         setFilteredBookings(filtered);
// //     };

// //     const handleViewDetails = (booking) => {
// //         setSelectedBooking(booking);
// //         setShowDetailsModal(true);
// //     };

// //     const handleCancelBooking = async () => {
// //         if (!cancelReason.trim()) {
// //             alert('Please provide a reason for cancellation');
// //             return;
// //         }

// //         setIsCancelling(true);
        
// //         try {
// //             // In a real implementation, you would call your backend API to cancel the booking
// //             // const response = await axios.put(`${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`, {
// //             //     reason: cancelReason
// //             // }, {
// //             //     headers: {
// //             //         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
// //             //     }
// //             // });

// //             // Simulate API call
// //             await new Promise(resolve => setTimeout(resolve, 1500));

// //             // Update local state
// //             const updatedBookings = bookings.map(booking => {
// //                 if (booking.id === selectedBooking.id) {
// //                     return {
// //                         ...booking,
// //                         bookingStatus: 'CANCELLED'
// //                     };
// //                 }
// //                 return booking;
// //             });

// //             setBookings(updatedBookings);
            
// //             // Close modals
// //             setShowCancelModal(false);
// //             setShowDetailsModal(false);
// //             setCancelReason('');
            
// //             // Show success message
// //             alert('Booking cancelled successfully');
            
// //         } catch (err) {
// //             console.error('Error cancelling booking:', err);
// //             alert('Failed to cancel booking. Please try again.');
// //         } finally {
// //             setIsCancelling(false);
// //         }
// //     };

// //     const handleMakePayment = (booking) => {
// //         navigate('/customer/payment', { state: { selectedBooking: booking } });
// //     };

// //     const handleDownloadReceipt = async (paymentId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
// //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// //                 responseType: 'blob'
// //             });
            
// //             const url = window.URL.createObjectURL(new Blob([response.data]));
// //             const link = document.createElement('a');
// //             link.href = url;
// //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// //             document.body.appendChild(link);
// //             link.click();
// //             link.remove();
// //         } catch (error) {
// //             console.error('Download error:', error);
// //             alert('Failed to download receipt');
// //         }
// //     };

// //     const formatCurrency = (amount) => {
// //         return new Intl.NumberFormat('en-LK', {
// //             style: 'currency',
// //             currency: 'LKR',
// //             minimumFractionDigits: 0
// //         }).format(amount).replace('LKR', 'Rs.');
// //     };

// //     const formatDate = (dateString) => {
// //         if (!dateString) return 'N/A';
// //         return new Date(dateString).toLocaleDateString('en-US', {
// //             year: 'numeric',
// //             month: 'short',
// //             day: 'numeric'
// //         });
// //     };

// //     const formatDateTime = (dateString) => {
// //         if (!dateString) return 'N/A';
// //         return new Date(dateString).toLocaleString('en-US', {
// //             year: 'numeric',
// //             month: 'short',
// //             day: 'numeric',
// //             hour: '2-digit',
// //             minute: '2-digit'
// //         });
// //     };

// //     const getStatusBadge = (booking) => {
// //         if (booking.bookingStatus === 'CANCELLED') {
// //             return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
// //         }
        
// //         if (booking.bookingStatus === 'COMPLETED') {
// //             return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
// //         }
        
// //         if (booking.paymentStatus === 'PENDING') {
// //             return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Payment Pending</span>;
// //         }
        
// //         if (booking.bookingStatus === 'CONFIRMED' && booking.paymentStatus === 'COMPLETED') {
// //             return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Confirmed</span>;
// //         }
        
// //         return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{booking.bookingStatus}</span>;
// //     };

// //     const getVehicleImageUrl = (vehicle) => {
// //         if (!vehicle || !vehicle.vehicleImage) return null;
// //         if (vehicle.vehicleImage.startsWith('http')) return vehicle.vehicleImage;
// //         if (vehicle.vehicleImage.startsWith('/uploads')) return `${BASE_URL}${vehicle.vehicleImage}`;
// //         return `${BASE_URL}/uploads/vehicles/${vehicle.vehicleImage}`;
// //     };

// //     // Details Modal Component
// //     const DetailsModal = ({ booking, onClose }) => {
// //         const [imageError, setImageError] = useState(false);
// //         const imageUrl = getVehicleImageUrl(booking.vehicle);

// //         return (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //                 <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //                     <div className="p-6">
// //                         <div className="flex justify-between items-center mb-6">
// //                             <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
// //                             <button
// //                                 onClick={onClose}
// //                                 className="text-gray-500 hover:text-gray-700"
// //                             >
// //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                                 </svg>
// //                             </button>
// //                         </div>

// //                         {/* Status Bar */}
// //                         <div className="flex flex-wrap gap-2 mb-6">
// //                             {getStatusBadge(booking)}
// //                             {booking.payment?.hasPdf && (
// //                                 <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
// //                                     Receipt Available
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Vehicle and Booking Info */}
// //                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //                             {/* Vehicle Image */}
// //                             <div className="md:col-span-1">
// //                                 <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
// //                                     {imageUrl && !imageError ? (
// //                                         <img
// //                                             src={imageUrl}
// //                                             alt={booking.vehicle?.makeModel}
// //                                             className="w-full h-full object-cover"
// //                                             onError={() => setImageError(true)}
// //                                         />
// //                                     ) : (
// //                                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
// //                                             <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// //                                             </svg>
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             </div>

// //                             {/* Vehicle Details */}
// //                             <div className="md:col-span-2">
// //                                 <h3 className="text-xl font-bold text-gray-800 mb-2">{booking.vehicle?.makeModel}</h3>
// //                                 <p className="text-gray-600 mb-4">Reg: {booking.vehicle?.regNumber}</p>
                                
// //                                 <div className="grid grid-cols-2 gap-4">
// //                                     <div>
// //                                         <p className="text-sm text-gray-500">Fuel Type</p>
// //                                         <p className="font-medium">{booking.vehicle?.fuelType || 'N/A'}</p>
// //                                     </div>
// //                                     <div>
// //                                         <p className="text-sm text-gray-500">Transmission</p>
// //                                         <p className="font-medium">{booking.vehicle?.transmissionType || 'N/A'}</p>
// //                                     </div>
// //                                     <div>
// //                                         <p className="text-sm text-gray-500">Seating Capacity</p>
// //                                         <p className="font-medium">{booking.vehicle?.seatingCapacity || 'N/A'} seats</p>
// //                                     </div>
// //                                     <div>
// //                                         <p className="text-sm text-gray-500">Color</p>
// //                                         <div className="flex items-center">
// //                                             <div className="w-4 h-4 rounded-full border border-gray-300 mr-2" 
// //                                                  style={{ backgroundColor: booking.vehicle?.color?.toLowerCase() || '#gray' }}></div>
// //                                             <p className="font-medium">{booking.vehicle?.color || 'N/A'}</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Booking Information */}
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //                             <div className="bg-gray-50 p-4 rounded-lg">
// //                                 <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                     </svg>
// //                                     Rental Period
// //                                 </h4>
// //                                 <div className="space-y-2">
// //                                     <div className="flex justify-between">
// //                                         <span className="text-gray-600">Pickup:</span>
// //                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                         <span className="text-gray-600">Drop-off:</span>
// //                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                         <span className="text-gray-600">Duration:</span>
// //                                         <span className="font-medium">{booking.numberOfDays} days</span>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <div className="bg-gray-50 p-4 rounded-lg">
// //                                 <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
// //                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                                     </svg>
// //                                     Locations
// //                                 </h4>
// //                                 <div className="space-y-2">
// //                                     <div className="flex justify-between">
// //                                         <span className="text-gray-600">Pickup:</span>
// //                                         <span className="font-medium">{booking.pickupLocation}</span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                         <span className="text-gray-600">Drop-off:</span>
// //                                         <span className="font-medium">{booking.dropOffLocation}</span>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Additional Services */}
// //                         <div className="bg-gray-50 p-4 rounded-lg mb-6">
// //                             <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
// //                                 </svg>
// //                                 Additional Services
// //                             </h4>
// //                             <div className="grid grid-cols-2 gap-4">
// //                                 <div className="flex items-center">
// //                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.gpsIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
// //                                     <span className="text-gray-700">GPS Navigation {booking.gpsIncluded ? '(Included)' : '(Not Included)'}</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.childSeatIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
// //                                     <span className="text-gray-700">Child Seat {booking.childSeatIncluded ? '(Included)' : '(Not Included)'}</span>
// //                                 </div>
// //                                 <div className="flex items-center">
// //                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.driverStatus === 'WITH_DRIVER' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
// //                                     <span className="text-gray-700">Driver: {booking.driverStatus === 'WITH_DRIVER' ? 'With Driver' : 'Without Driver'}</span>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Payment Information */}
// //                         <div className="bg-teal-50 p-4 rounded-lg mb-6">
// //                             <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// //                                 </svg>
// //                                 Payment Details
// //                             </h4>
// //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                 <div>
// //                                     <p className="text-sm text-gray-600">Total Amount</p>
// //                                     <p className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                                 </div>
// //                                 <div>
// //                                     <p className="text-sm text-gray-600">Payment Status</p>
// //                                     <p className={`font-medium ${
// //                                         booking.paymentStatus === 'COMPLETED' ? 'text-green-600' : 
// //                                         booking.paymentStatus === 'PENDING' ? 'text-yellow-600' : 'text-gray-600'
// //                                     }`}>
// //                                         {booking.paymentStatus}
// //                                     </p>
// //                                 </div>
// //                                 {booking.payment && (
// //                                     <>
// //                                         <div>
// //                                             <p className="text-sm text-gray-600">Payment Method</p>
// //                                             <p className="font-medium">{booking.payment.paymentMethod}</p>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-sm text-gray-600">Paid On</p>
// //                                             <p className="font-medium">{formatDateTime(booking.payment.paidAt)}</p>
// //                                         </div>
// //                                         {booking.payment.cardLast4 && (
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Card</p>
// //                                                 <p className="font-medium">{booking.payment.cardBrand} •••• {booking.payment.cardLast4}</p>
// //                                             </div>
// //                                         )}
// //                                     </>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         {/* Provider Information */}
// //                         <div className="border-t border-gray-200 pt-4 mb-6">
// //                             <h4 className="font-semibold text-gray-800 mb-2">Vehicle Provider</h4>
// //                             <p className="text-gray-700">{booking.agent?.companyName}</p>
// //                             {booking.agent?.contactNumber && (
// //                                 <p className="text-sm text-gray-600 mt-1">Contact: {booking.agent.contactNumber}</p>
// //                             )}
// //                         </div>

// //                         {/* Action Buttons */}
// //                         <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
// //                             {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
// //                                 <>
// //                                     <button
// //                                         onClick={() => {
// //                                             onClose();
// //                                             handleMakePayment(booking);
// //                                         }}
// //                                         className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200"
// //                                     >
// //                                         Make Payment
// //                                     </button>
// //                                     <button
// //                                         onClick={() => {
// //                                             setShowCancelModal(true);
// //                                             setSelectedBooking(booking);
// //                                         }}
// //                                         className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
// //                                     >
// //                                         Cancel Booking
// //                                     </button>
// //                                 </>
// //                             )}
                            
// //                             {booking.payment?.hasPdf && (
// //                                 <button
// //                                     onClick={() => handleDownloadReceipt(booking.payment.id)}
// //                                     className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
// //                                 >
// //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                     </svg>
// //                                     Download Receipt
// //                                 </button>
// //                             )}
                            
// //                             <button
// //                                 onClick={onClose}
// //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                             >
// //                                 Close
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     // Cancel Modal Component
// //     const CancelModal = ({ onClose, onConfirm }) => {
// //         return (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //                 <div className="bg-white rounded-2xl max-w-md w-full">
// //                     <div className="p-6">
// //                         <div className="flex justify-between items-center mb-4">
// //                             <h3 className="text-xl font-bold text-gray-800">Cancel Booking</h3>
// //                             <button
// //                                 onClick={onClose}
// //                                 className="text-gray-500 hover:text-gray-700"
// //                             >
// //                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                                 </svg>
// //                             </button>
// //                         </div>

// //                         <p className="text-gray-600 mb-4">
// //                             Please provide a reason for cancelling this booking:
// //                         </p>

// //                         <textarea
// //                             value={cancelReason}
// //                             onChange={(e) => setCancelReason(e.target.value)}
// //                             placeholder="Enter reason for cancellation..."
// //                             rows="4"
// //                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-4"
// //                         ></textarea>

// //                         <div className="bg-yellow-50 p-3 rounded-lg mb-4">
// //                             <p className="text-sm text-yellow-800">
// //                                 <span className="font-bold">Note:</span> Cancellation may be subject to fees based on our cancellation policy.
// //                             </p>
// //                         </div>

// //                         <div className="flex gap-3">
// //                             <button
// //                                 onClick={onConfirm}
// //                                 disabled={isCancelling || !cancelReason.trim()}
// //                                 className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
// //                                     isCancelling || !cancelReason.trim()
// //                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //                                         : 'bg-red-600 text-white hover:bg-red-700'
// //                                 }`}
// //                             >
// //                                 {isCancelling ? (
// //                                     <span className="flex items-center justify-center">
// //                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
// //                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                                         </svg>
// //                                         Processing...
// //                                     </span>
// //                                 ) : (
// //                                     'Confirm Cancellation'
// //                                 )}
// //                             </button>
// //                             <button
// //                                 onClick={onClose}
// //                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
// //                             >
// //                                 Back
// //                             </button>
// //                         </div>
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
// //                             <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
// //                                 Browse Vehicles
// //                             </a>
// //                             <a href="/customer/payment" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// //                                 Payments
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="max-w-7xl mx-auto px-4 py-8">
// //                 {/* Page Title */}
// //                 <div className="mb-8">
// //                     <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
// //                     <p className="text-gray-600">View and manage all your vehicle bookings</p>
// //                 </div>

// //                 {/* Stats Cards */}
// //                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
// //                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
// //                         <p className="text-2xl font-bold text-teal-600">{bookingStats.total}</p>
// //                         <p className="text-sm text-gray-600">Total</p>
// //                     </div>
// //                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
// //                         <p className="text-2xl font-bold text-yellow-600">{bookingStats.pending}</p>
// //                         <p className="text-sm text-gray-600">Pending</p>
// //                     </div>
// //                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
// //                         <p className="text-2xl font-bold text-blue-600">{bookingStats.confirmed}</p>
// //                         <p className="text-sm text-gray-600">Confirmed</p>
// //                     </div>
// //                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
// //                         <p className="text-2xl font-bold text-green-600">{bookingStats.completed}</p>
// //                         <p className="text-sm text-gray-600">Completed</p>
// //                     </div>
// //                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
// //                         <p className="text-2xl font-bold text-red-600">{bookingStats.cancelled}</p>
// //                         <p className="text-sm text-gray-600">Cancelled</p>
// //                     </div>
// //                 </div>

// //                 {/* Tab Navigation */}
// //                 <div className="bg-white rounded-xl shadow-lg p-2 mb-6 overflow-x-auto">
// //                     <div className="flex space-x-2">
// //                         <button
// //                             onClick={() => setActiveTab('all')}
// //                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
// //                                 activeTab === 'all'
// //                                     ? 'bg-teal-600 text-white'
// //                                     : 'text-gray-600 hover:bg-gray-100'
// //                             }`}
// //                         >
// //                             All Bookings
// //                         </button>
// //                         <button
// //                             onClick={() => setActiveTab('pending')}
// //                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
// //                                 activeTab === 'pending'
// //                                     ? 'bg-yellow-500 text-white'
// //                                     : 'text-gray-600 hover:bg-gray-100'
// //                             }`}
// //                         >
// //                             Pending Payment
// //                         </button>
// //                         <button
// //                             onClick={() => setActiveTab('confirmed')}
// //                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
// //                                 activeTab === 'confirmed'
// //                                     ? 'bg-blue-600 text-white'
// //                                     : 'text-gray-600 hover:bg-gray-100'
// //                             }`}
// //                         >
// //                             Confirmed
// //                         </button>
// //                         <button
// //                             onClick={() => setActiveTab('completed')}
// //                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
// //                                 activeTab === 'completed'
// //                                     ? 'bg-green-600 text-white'
// //                                     : 'text-gray-600 hover:bg-gray-100'
// //                             }`}
// //                         >
// //                             Completed
// //                         </button>
// //                         <button
// //                             onClick={() => setActiveTab('cancelled')}
// //                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
// //                                 activeTab === 'cancelled'
// //                                     ? 'bg-red-600 text-white'
// //                                     : 'text-gray-600 hover:bg-gray-100'
// //                             }`}
// //                         >
// //                             Cancelled
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Loading State */}
// //                 {isLoading && (
// //                     <div className="text-center py-12">
// //                         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// //                         <p className="text-gray-600">Loading your bookings...</p>
// //                     </div>
// //                 )}

// //                 {/* Error State */}
// //                 {errorMessage && !isLoading && (
// //                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
// //                         <p className="text-red-700">{errorMessage}</p>
// //                         <button
// //                             onClick={fetchAllBookings}
// //                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
// //                         >
// //                             Try Again
// //                         </button>
// //                     </div>
// //                 )}

// //                 {/* No Bookings */}
// //                 {!isLoading && !errorMessage && filteredBookings.length === 0 && (
// //                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
// //                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
// //                         <p className="text-gray-600 mb-6">
// //                             {activeTab === 'all' 
// //                                 ? "You haven't made any bookings yet" 
// //                                 : `No ${activeTab} bookings found`}
// //                         </p>
// //                         <a
// //                             href="/customer/dashboard"
// //                             className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
// //                         >
// //                             Browse Vehicles
// //                         </a>
// //                     </div>
// //                 )}

// //                 {/* Bookings List */}
// //                 {!isLoading && !errorMessage && filteredBookings.length > 0 && (
// //                     <div className="space-y-4">
// //                         {filteredBookings.map((booking) => (
// //                             <div key={booking.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
// //                                 <div className="p-6">
// //                                     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
// //                                         <div className="flex-1">
// //                                             <div className="flex items-center flex-wrap gap-3 mb-3">
// //                                                 <span className="text-lg font-bold text-gray-800">
// //                                                     Booking #{booking.id}
// //                                                 </span>
// //                                                 {getStatusBadge(booking)}
// //                                             </div>
                                            
// //                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                                                 <div>
// //                                                     <p className="text-sm text-gray-500">Vehicle</p>
// //                                                     <p className="font-medium text-gray-800">
// //                                                         {booking.vehicle?.displayInfo || 
// //                                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
// //                                                     </p>
// //                                                 </div>
// //                                                 <div>
// //                                                     <p className="text-sm text-gray-500">Pickup Date</p>
// //                                                     <p className="font-medium text-gray-800">{formatDate(booking.pickupDate)}</p>
// //                                                 </div>
// //                                                 <div>
// //                                                     <p className="text-sm text-gray-500">Drop-off Date</p>
// //                                                     <p className="font-medium text-gray-800">{formatDate(booking.dropOffDate)}</p>
// //                                                 </div>
// //                                                 <div>
// //                                                     <p className="text-sm text-gray-500">Total Amount</p>
// //                                                     <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
// //                                                 </div>
// //                                             </div>

// //                                             {/* Provider Info */}
// //                                             <div className="mt-3 text-sm text-gray-500">
// //                                                 Provider: {booking.agent?.companyName}
// //                                             </div>
// //                                         </div>

// //                                         <div className="mt-4 lg:mt-0 lg:ml-4 flex gap-2">
// //                                             <button
// //                                                 onClick={() => handleViewDetails(booking)}
// //                                                 className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200"
// //                                             >
// //                                                 View Details
// //                                             </button>
                                            
// //                                             {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
// //                                                 <button
// //                                                     onClick={() => handleMakePayment(booking)}
// //                                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200"
// //                                                 >
// //                                                     Pay Now
// //                                                 </button>
// //                                             )}
                                            
// //                                             {booking.payment?.hasPdf && (
// //                                                 <button
// //                                                     onClick={() => handleDownloadReceipt(booking.payment.id)}
// //                                                     className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200"
// //                                                     title="Download Receipt"
// //                                                 >
// //                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                                     </svg>
// //                                                 </button>
// //                                             )}
// //                                         </div>
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

// //             {/* Details Modal */}
// //             {showDetailsModal && selectedBooking && (
// //                 <DetailsModal
// //                     booking={selectedBooking}
// //                     onClose={() => {
// //                         setShowDetailsModal(false);
// //                         setSelectedBooking(null);
// //                     }}
// //                 />
// //             )}

// //             {/* Cancel Modal */}
// //             {showCancelModal && selectedBooking && (
// //                 <CancelModal
// //                     onClose={() => {
// //                         setShowCancelModal(false);
// //                         setCancelReason('');
// //                     }}
// //                     onConfirm={handleCancelBooking}
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // export default CustomerMyBookings;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CustomerMyBookings = () => {
//     const navigate = useNavigate();
//     const [bookings, setBookings] = useState([]);
//     const [filteredBookings, setFilteredBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [activeTab, setActiveTab] = useState('all'); // all, pending, confirmed, completed, cancelled
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [showDetailsModal, setShowDetailsModal] = useState(false);
//     const [showCancelModal, setShowCancelModal] = useState(false);
//     const [cancelReason, setCancelReason] = useState('');
//     const [isCancelling, setIsCancelling] = useState(false);
//     const [customerName, setCustomerName] = useState('');
    
//     // Stats
//     const [bookingStats, setBookingStats] = useState({
//         total: 0,
//         pending: 0,
//         confirmed: 0,
//         completed: 0,
//         cancelled: 0
//     });

//     const BASE_URL = 'http://localhost:8080';

//     useEffect(() => {
//         // Check if customer is logged in
//         const customerToken = localStorage.getItem('customerToken');
//         const storedCustomerId = localStorage.getItem('customerId');
//         const storedCustomerName = localStorage.getItem('customerName');
        
//         if (!customerToken || !storedCustomerId) {
//             navigate('/customer/login');
//             return;
//         }

//         setCustomerName(storedCustomerName || 'Customer');
//         fetchCustomerBookings();
//     }, [navigate]);

//     useEffect(() => {
//         filterBookingsByTab();
//     }, [activeTab, bookings]);

//     const fetchVehicleDetails = async (vehicleId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 },
//                 timeout: 30000,
//             });
//             return response.data;
//         } catch (err) {
//             console.error('Error fetching vehicle details:', err);
//             return null;
//         }
//     };

//     const fetchAgentDetails = async (agentId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 },
//                 timeout: 30000,
//             });
//             return response.data;
//         } catch (err) {
//             console.error('Error fetching agent details:', err);
//             return { companyName: `Agent #${agentId}` };
//         }
//     };

//     const fetchPaymentForBooking = async (bookingId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/payment/by-booking/${bookingId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 }
//             });
//             return response.data;
//         } catch (error) {
//             // Payment might not exist yet or network issue
//             console.debug('fetchPaymentForBooking error', error);
//             return null;
//         }
//     };

//     const fetchCustomerBookings = async () => {
//         setIsLoading(true);
//         setErrorMessage('');
        
//         try {
//             const customerId = localStorage.getItem('customerId');
            
//             // Fetch all bookings
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//                 },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 console.log('Raw booking data:', response.data);
                
//                 // IMPORTANT: Filter ONLY bookings for this customer
//                 const customerBookings = response.data.filter(booking => {
//                     // Check various possible customer ID locations in the response
//                     const bookingCustomerId = booking.customerId || 
//                                               booking.customer?.id || 
//                                               booking.customer?.customerId;
                    
//                     // Parse both as integers to ensure proper comparison
//                     return parseInt(bookingCustomerId) === parseInt(customerId);
//                 });

//                 console.log(`Found ${customerBookings.length} bookings for customer ID: ${customerId}`);

//                 // Enhance bookings with additional details
//                 const enhancedBookings = await Promise.all(
//                     customerBookings.map(async (booking) => {
//                         // Get vehicle details
//                         let vehicleData = booking.vehicle;
//                         if (!vehicleData || !vehicleData.makeModel) {
//                             const vehicleId = booking.vehicleId || booking.vehicle?.id;
//                             if (vehicleId) {
//                                 vehicleData = await fetchVehicleDetails(vehicleId);
//                             }
//                         }

//                         // Get agent details
//                         let agentData = booking.agent;
//                         if (!agentData || !agentData.companyName) {
//                             const agentId = booking.agentId || booking.agent?.id;
//                             if (agentId) {
//                                 agentData = await fetchAgentDetails(agentId);
//                             }
//                         }

//                         // Get payment details if available
//                         const paymentData = await fetchPaymentForBooking(booking.id);

//                         // Calculate number of days
//                         const pickupDate = new Date(booking.pickupDate);
//                         const dropOffDate = new Date(booking.dropOffDate);
//                         const days = Math.ceil((dropOffDate - pickupDate) / (1000 * 60 * 60 * 24));

//                         return {
//                             id: booking.id,
//                             bookingStatus: booking.bookingStatus || 'PENDING',
//                             paymentStatus: booking.paymentStatus || 'PENDING',
//                             pickupDate: booking.pickupDate,
//                             dropOffDate: booking.dropOffDate,
//                             totalPrice: booking.totalPrice || 0,
//                             pickupLocation: booking.pickupLocation,
//                             dropOffLocation: booking.dropOffLocation || booking.pickupLocation,
//                             driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
//                             gpsIncluded: booking.gpsIncluded || false,
//                             childSeatIncluded: booking.childSeatIncluded || false,
//                             customerId: booking.customerId || booking.customer?.id,
//                             vehicleId: booking.vehicleId || booking.vehicle?.id,
//                             agentId: booking.agentId || booking.agent?.id,
//                             createdAt: booking.createdAt || new Date().toISOString(),
//                             numberOfDays: days,
//                             vehicle: vehicleData ? {
//                                 id: vehicleData.id,
//                                 makeModel: vehicleData.makeModel || 'Unknown Vehicle',
//                                 regNumber: vehicleData.regNumber || 'N/A',
//                                 fuelType: vehicleData.fuelType,
//                                 transmissionType: vehicleData.transmissionType,
//                                 seatingCapacity: vehicleData.seatingCapacity,
//                                 color: vehicleData.color,
//                                 vehicleImage: vehicleData.vehicleImage,
//                                 displayInfo: `${vehicleData.makeModel || 'Unknown'} (${vehicleData.regNumber || 'N/A'})`
//                             } : {
//                                 displayInfo: `Vehicle #${booking.vehicleId || 'Unknown'}`
//                             },
//                             agent: agentData ? {
//                                 id: agentData.id,
//                                 companyName: agentData.companyName || `Agent #${agentData.id}`,
//                                 contactNumber: agentData.contactNumber,
//                                 email: agentData.email
//                             } : {
//                                 companyName: `Agent #${booking.agentId || 'Unknown'}`
//                             },
//                             payment: paymentData
//                         };
//                     })
//                 );

//                 // Sort by date (most recent first)
//                 enhancedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                
//                 console.log('Enhanced customer bookings:', enhancedBookings);
//                 setBookings(enhancedBookings);
                
//                 // Calculate stats based on customer's bookings only
//                 const stats = {
//                     total: enhancedBookings.length,
//                     pending: enhancedBookings.filter(b => b.paymentStatus === 'PENDING' && b.bookingStatus !== 'CANCELLED').length,
//                     confirmed: enhancedBookings.filter(b => b.bookingStatus === 'CONFIRMED' && b.paymentStatus === 'COMPLETED').length,
//                     completed: enhancedBookings.filter(b => b.bookingStatus === 'COMPLETED').length,
//                     cancelled: enhancedBookings.filter(b => b.bookingStatus === 'CANCELLED').length
//                 };
//                 setBookingStats(stats);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//             setErrorMessage('Failed to load your bookings. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const filterBookingsByTab = () => {
//         let filtered = [...bookings];

//         switch (activeTab) {
//             case 'pending':
//                 filtered = bookings.filter(b => 
//                     b.paymentStatus === 'PENDING' && 
//                     b.bookingStatus !== 'CANCELLED' &&
//                     b.bookingStatus !== 'COMPLETED'
//                 );
//                 break;
//             case 'confirmed':
//                 filtered = bookings.filter(b => 
//                     b.bookingStatus === 'CONFIRMED' && 
//                     b.paymentStatus === 'COMPLETED'
//                 );
//                 break;
//             case 'completed':
//                 filtered = bookings.filter(b => b.bookingStatus === 'COMPLETED');
//                 break;
//             case 'cancelled':
//                 filtered = bookings.filter(b => b.bookingStatus === 'CANCELLED');
//                 break;
//             default:
//                 filtered = bookings;
//                 break;
//         }

//         setFilteredBookings(filtered);
//     };

//     const handleViewDetails = (booking) => {
//         setSelectedBooking(booking);
//         setShowDetailsModal(true);
//     };

//     const handleCancelBooking = async () => {
//         if (!cancelReason.trim()) {
//             alert('Please provide a reason for cancellation');
//             return;
//         }

//         setIsCancelling(true);
        
//         try {
//             // In a real implementation, you would call your backend API to cancel the booking
//             // const response = await axios.put(`${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`, {
//             //     reason: cancelReason
//             // }, {
//             //     headers: {
//             //         'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
//             //     }
//             // });

//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             // Update local state
//             const updatedBookings = bookings.map(booking => {
//                 if (booking.id === selectedBooking.id) {
//                     return {
//                         ...booking,
//                         bookingStatus: 'CANCELLED'
//                     };
//                 }
//                 return booking;
//             });

//             setBookings(updatedBookings);
            
//             // Close modals
//             setShowCancelModal(false);
//             setShowDetailsModal(false);
//             setCancelReason('');
            
//             // Show success message
//             alert('Booking cancelled successfully');
            
//             // Refresh bookings to get updated data
//             fetchCustomerBookings();
            
//         } catch (err) {
//             console.error('Error cancelling booking:', err);
//             alert('Failed to cancel booking. Please try again.');
//         } finally {
//             setIsCancelling(false);
//         }
//     };

//     const handleMakePayment = (booking) => {
//         navigate('/customer/payment', { state: { selectedBooking: booking } });
//     };

//     const handleDownloadReceipt = async (paymentId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
//                 responseType: 'blob'
//             });
            
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `receipt_${paymentId}.pdf`);
//             document.body.appendChild(link);
//             link.click();
//             link.remove();
//         } catch (error) {
//             console.error('Download error:', error);
//             alert('Failed to download receipt');
//         }
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-LK', {
//             style: 'currency',
//             currency: 'LKR',
//             minimumFractionDigits: 0
//         }).format(amount).replace('LKR', 'Rs.');
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     const formatDateTime = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//         });
//     };

//     const getStatusBadge = (booking) => {
//         if (booking.bookingStatus === 'CANCELLED') {
//             return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
//         }
        
//         if (booking.bookingStatus === 'COMPLETED') {
//             return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
//         }
        
//         if (booking.paymentStatus === 'PENDING') {
//             return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Payment Pending</span>;
//         }
        
//         if (booking.bookingStatus === 'CONFIRMED' && booking.paymentStatus === 'COMPLETED') {
//             return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Confirmed</span>;
//         }
        
//         return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{booking.bookingStatus}</span>;
//     };

//     const getVehicleImageUrl = (vehicle) => {
//         if (!vehicle || !vehicle.vehicleImage) return null;
//         if (vehicle.vehicleImage.startsWith('http')) return vehicle.vehicleImage;
//         if (vehicle.vehicleImage.startsWith('/uploads')) return `${BASE_URL}${vehicle.vehicleImage}`;
//         return `${BASE_URL}/uploads/vehicles/${vehicle.vehicleImage}`;
//     };

//     // Details Modal Component
//     const DetailsModal = ({ booking, onClose }) => {
//         const [imageError, setImageError] = useState(false);
//         const imageUrl = getVehicleImageUrl(booking.vehicle);

//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                 <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                     <div className="p-6">
//                         <div className="flex justify-between items-center mb-6">
//                             <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-500 hover:text-gray-700"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Status Bar */}
//                         <div className="flex flex-wrap gap-2 mb-6">
//                             {getStatusBadge(booking)}
//                             {booking.payment?.hasPdf && (
//                                 <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
//                                     Receipt Available
//                                 </span>
//                             )}
//                         </div>

//                         {/* Vehicle and Booking Info */}
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                             {/* Vehicle Image */}
//                             <div className="md:col-span-1">
//                                 <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
//                                     {imageUrl && !imageError ? (
//                                         <img
//                                             src={imageUrl}
//                                             alt={booking.vehicle?.makeModel}
//                                             className="w-full h-full object-cover"
//                                             onError={() => setImageError(true)}
//                                         />
//                                     ) : (
//                                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
//                                             <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                                             </svg>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Vehicle Details */}
//                             <div className="md:col-span-2">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">{booking.vehicle?.makeModel}</h3>
//                                 <p className="text-gray-600 mb-4">Reg: {booking.vehicle?.regNumber}</p>
                                
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <p className="text-sm text-gray-500">Fuel Type</p>
//                                         <p className="font-medium">{booking.vehicle?.fuelType || 'N/A'}</p>
//                                     </div>
//                                     <div>
//                                         <p className="text-sm text-gray-500">Transmission</p>
//                                         <p className="font-medium">{booking.vehicle?.transmissionType || 'N/A'}</p>
//                                     </div>
//                                     <div>
//                                         <p className="text-sm text-gray-500">Seating Capacity</p>
//                                         <p className="font-medium">{booking.vehicle?.seatingCapacity || 'N/A'} seats</p>
//                                     </div>
//                                     <div>
//                                         <p className="text-sm text-gray-500">Color</p>
//                                         <div className="flex items-center">
//                                             <div className="w-4 h-4 rounded-full border border-gray-300 mr-2" 
//                                                  style={{ backgroundColor: booking.vehicle?.color?.toLowerCase() || '#gray' }}></div>
//                                             <p className="font-medium">{booking.vehicle?.color || 'N/A'}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Booking Information */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                     Rental Period
//                                 </h4>
//                                 <div className="space-y-2">
//                                     <div className="flex justify-between">
//                                         <span className="text-gray-600">Pickup:</span>
//                                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                         <span className="text-gray-600">Drop-off:</span>
//                                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                         <span className="text-gray-600">Duration:</span>
//                                         <span className="font-medium">{booking.numberOfDays} days</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                     Locations
//                                 </h4>
//                                 <div className="space-y-2">
//                                     <div className="flex justify-between">
//                                         <span className="text-gray-600">Pickup:</span>
//                                         <span className="font-medium">{booking.pickupLocation}</span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                         <span className="text-gray-600">Drop-off:</span>
//                                         <span className="font-medium">{booking.dropOffLocation}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Additional Services */}
//                         <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                             <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                                 </svg>
//                                 Additional Services
//                             </h4>
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="flex items-center">
//                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.gpsIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                                     <span className="text-gray-700">GPS Navigation {booking.gpsIncluded ? '(Included)' : '(Not Included)'}</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.childSeatIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                                     <span className="text-gray-700">Child Seat {booking.childSeatIncluded ? '(Included)' : '(Not Included)'}</span>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <div className={`w-3 h-3 rounded-full mr-2 ${booking.driverStatus === 'WITH_DRIVER' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                                     <span className="text-gray-700">Driver: {booking.driverStatus === 'WITH_DRIVER' ? 'With Driver' : 'Without Driver'}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Payment Information */}
//                         <div className="bg-teal-50 p-4 rounded-lg mb-6">
//                             <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                                 <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                                 </svg>
//                                 Payment Details
//                             </h4>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <p className="text-sm text-gray-600">Total Amount</p>
//                                     <p className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-600">Payment Status</p>
//                                     <p className={`font-medium ${
//                                         booking.paymentStatus === 'COMPLETED' ? 'text-green-600' : 
//                                         booking.paymentStatus === 'PENDING' ? 'text-yellow-600' : 'text-gray-600'
//                                     }`}>
//                                         {booking.paymentStatus}
//                                     </p>
//                                 </div>
//                                 {booking.payment && (
//                                     <>
//                                         <div>
//                                             <p className="text-sm text-gray-600">Payment Method</p>
//                                             <p className="font-medium">{booking.payment.paymentMethod}</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-sm text-gray-600">Paid On</p>
//                                             <p className="font-medium">{formatDateTime(booking.payment.paidAt)}</p>
//                                         </div>
//                                         {booking.payment.cardLast4 && (
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Card</p>
//                                                 <p className="font-medium">{booking.payment.cardBrand} •••• {booking.payment.cardLast4}</p>
//                                             </div>
//                                         )}
//                                     </>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Provider Information */}
//                         <div className="border-t border-gray-200 pt-4 mb-6">
//                             <h4 className="font-semibold text-gray-800 mb-2">Vehicle Provider</h4>
//                             <p className="text-gray-700">{booking.agent?.companyName}</p>
//                             {booking.agent?.contactNumber && (
//                                 <p className="text-sm text-gray-600 mt-1">Contact: {booking.agent.contactNumber}</p>
//                             )}
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
//                             {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
//                                 <>
//                                     <button
//                                         onClick={() => {
//                                             onClose();
//                                             handleMakePayment(booking);
//                                         }}
//                                         className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200"
//                                     >
//                                         Make Payment
//                                     </button>
//                                     <button
//                                         onClick={() => {
//                                             setShowCancelModal(true);
//                                             setSelectedBooking(booking);
//                                         }}
//                                         className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
//                                     >
//                                         Cancel Booking
//                                     </button>
//                                 </>
//                             )}
                            
//                             {booking.payment?.hasPdf && (
//                                 <button
//                                     onClick={() => handleDownloadReceipt(booking.payment.id)}
//                                     className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center"
//                                 >
//                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                     Download Receipt
//                                 </button>
//                             )}
                            
//                             <button
//                                 onClick={onClose}
//                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // Cancel Modal Component
//     const CancelModal = ({ onClose, onConfirm }) => {
//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                 <div className="bg-white rounded-2xl max-w-md w-full">
//                     <div className="p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-xl font-bold text-gray-800">Cancel Booking</h3>
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-500 hover:text-gray-700"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <p className="text-gray-600 mb-4">
//                             Please provide a reason for cancelling this booking:
//                         </p>

//                         <textarea
//                             value={cancelReason}
//                             onChange={(e) => setCancelReason(e.target.value)}
//                             placeholder="Enter reason for cancellation..."
//                             rows="4"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-4"
//                         ></textarea>

//                         <div className="bg-yellow-50 p-3 rounded-lg mb-4">
//                             <p className="text-sm text-yellow-800">
//                                 <span className="font-bold">Note:</span> Cancellation may be subject to fees based on our cancellation policy.
//                             </p>
//                         </div>

//                         <div className="flex gap-3">
//                             <button
//                                 onClick={onConfirm}
//                                 disabled={isCancelling || !cancelReason.trim()}
//                                 className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
//                                     isCancelling || !cancelReason.trim()
//                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                         : 'bg-red-600 text-white hover:bg-red-700'
//                                 }`}
//                             >
//                                 {isCancelling ? (
//                                     <span className="flex items-center justify-center">
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Processing...
//                                     </span>
//                                 ) : (
//                                     'Confirm Cancellation'
//                                 )}
//                             </button>
//                             <button
//                                 onClick={onClose}
//                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
//                             >
//                                 Back
//                             </button>
//                         </div>
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
//                         <div className="flex items-center gap-4">
//                             <span className="text-sm hidden md:block">Welcome, {customerName}</span>
//                             <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
//                                 Browse Vehicles
//                             </a>
//                             <a href="/customer/payment" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
//                                 Payments
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Page Title */}
//                 <div className="mb-8">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
//                     <p className="text-gray-600">View and manage all your vehicle bookings</p>
//                 </div>

//                 {/* Stats Cards - Showing only customer's stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
//                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
//                         <p className="text-2xl font-bold text-teal-600">{bookingStats.total}</p>
//                         <p className="text-sm text-gray-600">Total Bookings</p>
//                     </div>
//                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
//                         <p className="text-2xl font-bold text-yellow-600">{bookingStats.pending}</p>
//                         <p className="text-sm text-gray-600">Pending Payment</p>
//                     </div>
//                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
//                         <p className="text-2xl font-bold text-blue-600">{bookingStats.confirmed}</p>
//                         <p className="text-sm text-gray-600">Confirmed</p>
//                     </div>
//                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
//                         <p className="text-2xl font-bold text-green-600">{bookingStats.completed}</p>
//                         <p className="text-sm text-gray-600">Completed</p>
//                     </div>
//                     <div className="bg-white rounded-xl shadow-lg p-4 text-center">
//                         <p className="text-2xl font-bold text-red-600">{bookingStats.cancelled}</p>
//                         <p className="text-sm text-gray-600">Cancelled</p>
//                     </div>
//                 </div>

//                 {/* Tab Navigation */}
//                 <div className="bg-white rounded-xl shadow-lg p-2 mb-6 overflow-x-auto">
//                     <div className="flex space-x-2">
//                         <button
//                             onClick={() => setActiveTab('all')}
//                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
//                                 activeTab === 'all'
//                                     ? 'bg-teal-600 text-white'
//                                     : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                         >
//                             All My Bookings ({bookingStats.total})
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('pending')}
//                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
//                                 activeTab === 'pending'
//                                     ? 'bg-yellow-500 text-white'
//                                     : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                         >
//                             Pending Payment ({bookingStats.pending})
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('confirmed')}
//                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
//                                 activeTab === 'confirmed'
//                                     ? 'bg-blue-600 text-white'
//                                     : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                         >
//                             Confirmed ({bookingStats.confirmed})
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('completed')}
//                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
//                                 activeTab === 'completed'
//                                     ? 'bg-green-600 text-white'
//                                     : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                         >
//                             Completed ({bookingStats.completed})
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('cancelled')}
//                             className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
//                                 activeTab === 'cancelled'
//                                     ? 'bg-red-600 text-white'
//                                     : 'text-gray-600 hover:bg-gray-100'
//                             }`}
//                         >
//                             Cancelled ({bookingStats.cancelled})
//                         </button>
//                     </div>
//                 </div>

//                 {/* Loading State */}
//                 {isLoading && (
//                     <div className="text-center py-12">
//                         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                         <p className="text-gray-600">Loading your bookings...</p>
//                     </div>
//                 )}

//                 {/* Error State */}
//                 {errorMessage && !isLoading && (
//                     <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
//                         <p className="text-red-700">{errorMessage}</p>
//                         <button
//                             onClick={fetchCustomerBookings}
//                             className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                         >
//                             Try Again
//                         </button>
//                     </div>
//                 )}

//                 {/* No Bookings */}
//                 {!isLoading && !errorMessage && filteredBookings.length === 0 && (
//                     <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
//                         <p className="text-gray-600 mb-6">
//                             {activeTab === 'all' 
//                                 ? "You haven't made any bookings yet" 
//                                 : `You don't have any ${activeTab} bookings`}
//                         </p>
//                         <a
//                             href="/customer/dashboard"
//                             className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
//                         >
//                             Browse Vehicles
//                         </a>
//                     </div>
//                 )}

//                 {/* Customer's Bookings List */}
//                 {!isLoading && !errorMessage && filteredBookings.length > 0 && (
//                     <div className="space-y-4">
//                         {filteredBookings.map((booking) => (
//                             <div key={booking.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
//                                 <div className="p-6">
//                                     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
//                                         <div className="flex-1">
//                                             <div className="flex items-center flex-wrap gap-3 mb-3">
//                                                 <span className="text-lg font-bold text-gray-800">
//                                                     Booking #{booking.id}
//                                                 </span>
//                                                 {getStatusBadge(booking)}
//                                             </div>
                                            
//                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                                                 <div>
//                                                     <p className="text-sm text-gray-500">Vehicle</p>
//                                                     <p className="font-medium text-gray-800">
//                                                         {booking.vehicle?.displayInfo || 
//                                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
//                                                     </p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-gray-500">Pickup Date</p>
//                                                     <p className="font-medium text-gray-800">{formatDate(booking.pickupDate)}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-gray-500">Drop-off Date</p>
//                                                     <p className="font-medium text-gray-800">{formatDate(booking.dropOffDate)}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-gray-500">Total Amount</p>
//                                                     <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
//                                                 </div>
//                                             </div>

//                                             {/* Provider Info */}
//                                             <div className="mt-3 text-sm text-gray-500">
//                                                 <span className="font-medium">Provider:</span> {booking.agent?.companyName}
//                                             </div>
//                                         </div>

//                                         <div className="mt-4 lg:mt-0 lg:ml-4 flex gap-2">
//                                             <button
//                                                 onClick={() => handleViewDetails(booking)}
//                                                 className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200"
//                                             >
//                                                 View Details
//                                             </button>
                                            
//                                             {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
//                                                 <button
//                                                     onClick={() => handleMakePayment(booking)}
//                                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200"
//                                                 >
//                                                     Pay Now
//                                                 </button>
//                                             )}
                                            
//                                             {booking.payment?.hasPdf && (
//                                                 <button
//                                                     onClick={() => handleDownloadReceipt(booking.payment.id)}
//                                                     className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200"
//                                                     title="Download Receipt"
//                                                 >
//                                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                                     </svg>
//                                                 </button>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
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

//             {/* Details Modal */}
//             {showDetailsModal && selectedBooking && (
//                 <DetailsModal
//                     booking={selectedBooking}
//                     onClose={() => {
//                         setShowDetailsModal(false);
//                         setSelectedBooking(null);
//                     }}
//                 />
//             )}

//             {/* Cancel Modal */}
//             {showCancelModal && selectedBooking && (
//                 <CancelModal
//                     onClose={() => {
//                         setShowCancelModal(false);
//                         setCancelReason('');
//                     }}
//                     onConfirm={handleCancelBooking}
//                 />
//             )}
//         </div>
//     );
// };

// export default CustomerMyBookings;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerMyBookings = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [cancelReason, setCancelReason] = useState('');
    const [isCancelling, setIsCancelling] = useState(false);
    const [customerName, setCustomerName] = useState('');
    
    // Stats
    const [bookingStats, setBookingStats] = useState({
        total: 0,
        pending: 0,
        confirmed: 0,
        completed: 0,
        cancelled: 0
    });

    const BASE_URL = 'http://localhost:8080';

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    useEffect(() => {
        // Check if customer is logged in
        const customerToken = localStorage.getItem('customerToken');
        const storedCustomerId = localStorage.getItem('customerId');
        const storedCustomerName = localStorage.getItem('customerName');
        
        if (!customerToken || !storedCustomerId) {
            navigate('/customer/login');
            return;
        }

        setCustomerName(storedCustomerName || 'Customer');
        fetchCustomerBookings();
    }, [navigate]);

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    useEffect(() => {
        filterBookingsByTab();
    }, [activeTab, bookings]);

    const fetchVehicleDetails = async (vehicleId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                },
                timeout: 30000,
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching vehicle details:', err);
            return null;
        }
    };

    const fetchAgentDetails = async (agentId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                },
                timeout: 30000,
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching agent details:', err);
            return { companyName: `Agent #${agentId}` };
        }
    };

    const fetchPaymentForBooking = async (bookingId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/payment/by-booking/${bookingId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                }
            });
            return response.data;
        } catch (error) {
            // Payment might not exist yet or network error occurred
            console.debug('fetchPaymentForBooking error', error);
            return null;
        }
    };

    const fetchCustomerBookings = async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const customerId = localStorage.getItem('customerId');
            
            const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                // Filter ONLY bookings for this customer
                const customerBookings = response.data.filter(booking => {
                    const bookingCustomerId = booking.customerId || 
                                              booking.customer?.id || 
                                              booking.customer?.customerId;
                    
                    return parseInt(bookingCustomerId) === parseInt(customerId);
                });

                // Enhance bookings with additional details
                const enhancedBookings = await Promise.all(
                    customerBookings.map(async (booking) => {
                        let vehicleData = booking.vehicle;
                        if (!vehicleData || !vehicleData.makeModel) {
                            const vehicleId = booking.vehicleId || booking.vehicle?.id;
                            if (vehicleId) {
                                vehicleData = await fetchVehicleDetails(vehicleId);
                            }
                        }

                        let agentData = booking.agent;
                        if (!agentData || !agentData.companyName) {
                            const agentId = booking.agentId || booking.agent?.id;
                            if (agentId) {
                                agentData = await fetchAgentDetails(agentId);
                            }
                        }

                        const paymentData = await fetchPaymentForBooking(booking.id);

                        const pickupDate = new Date(booking.pickupDate);
                        const dropOffDate = new Date(booking.dropOffDate);
                        const days = Math.ceil((dropOffDate - pickupDate) / (1000 * 60 * 60 * 24));

                        return {
                            id: booking.id,
                            bookingStatus: booking.bookingStatus || 'PENDING',
                            paymentStatus: booking.paymentStatus || 'PENDING',
                            pickupDate: booking.pickupDate,
                            dropOffDate: booking.dropOffDate,
                            totalPrice: booking.totalPrice || 0,
                            pickupLocation: booking.pickupLocation,
                            dropOffLocation: booking.dropOffLocation || booking.pickupLocation,
                            driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
                            gpsIncluded: booking.gpsIncluded || false,
                            childSeatIncluded: booking.childSeatIncluded || false,
                            customerId: booking.customerId || booking.customer?.id,
                            vehicleId: booking.vehicleId || booking.vehicle?.id,
                            agentId: booking.agentId || booking.agent?.id,
                            createdAt: booking.createdAt || new Date().toISOString(),
                            numberOfDays: days,
                            vehicle: vehicleData ? {
                                id: vehicleData.id,
                                makeModel: vehicleData.makeModel || 'Unknown Vehicle',
                                regNumber: vehicleData.regNumber || 'N/A',
                                fuelType: vehicleData.fuelType,
                                transmissionType: vehicleData.transmissionType,
                                seatingCapacity: vehicleData.seatingCapacity,
                                color: vehicleData.color,
                                vehicleImage: vehicleData.vehicleImage,
                                displayInfo: `${vehicleData.makeModel || 'Unknown'} (${vehicleData.regNumber || 'N/A'})`
                            } : {
                                displayInfo: `Vehicle #${booking.vehicleId || 'Unknown'}`
                            },
                            agent: agentData ? {
                                id: agentData.id,
                                companyName: agentData.companyName || `Agent #${agentData.id}`,
                                contactNumber: agentData.contactNumber,
                                email: agentData.email
                            } : {
                                companyName: `Agent #${booking.agentId || 'Unknown'}`
                            },
                            payment: paymentData
                        };
                    })
                );

                enhancedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                
                setBookings(enhancedBookings);
                
                const stats = {
                    total: enhancedBookings.length,
                    pending: enhancedBookings.filter(b => b.paymentStatus === 'PENDING' && b.bookingStatus !== 'CANCELLED').length,
                    confirmed: enhancedBookings.filter(b => b.bookingStatus === 'CONFIRMED' && b.paymentStatus === 'COMPLETED').length,
                    completed: enhancedBookings.filter(b => b.bookingStatus === 'COMPLETED').length,
                    cancelled: enhancedBookings.filter(b => b.bookingStatus === 'CANCELLED').length
                };
                setBookingStats(stats);
            }
        } catch (err) {
            console.error('Error fetching bookings:', err);
            setErrorMessage('Failed to load your bookings. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const filterBookingsByTab = () => {
        let filtered = [...bookings];

        switch (activeTab) {
            case 'pending':
                filtered = bookings.filter(b => 
                    b.paymentStatus === 'PENDING' && 
                    b.bookingStatus !== 'CANCELLED' &&
                    b.bookingStatus !== 'COMPLETED'
                );
                break;
            case 'confirmed':
                filtered = bookings.filter(b => 
                    b.bookingStatus === 'CONFIRMED' && 
                    b.paymentStatus === 'COMPLETED'
                );
                break;
            case 'completed':
                filtered = bookings.filter(b => b.bookingStatus === 'COMPLETED');
                break;
            case 'cancelled':
                filtered = bookings.filter(b => b.bookingStatus === 'CANCELLED');
                break;
            default:
                filtered = bookings;
                break;
        }

        setFilteredBookings(filtered);
    };

    const handleViewDetails = (booking) => {
        setSelectedBooking(booking);
        setShowDetailsModal(true);
    };

    const handleCancelBooking = async () => {
        if (!cancelReason.trim()) {
            alert('Please provide a reason for cancellation');
            return;
        }

        setIsCancelling(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            const updatedBookings = bookings.map(booking => {
                if (booking.id === selectedBooking.id) {
                    return {
                        ...booking,
                        bookingStatus: 'CANCELLED'
                    };
                }
                return booking;
            });

            setBookings(updatedBookings);
            
            setShowCancelModal(false);
            setShowDetailsModal(false);
            setCancelReason('');
            
            alert('Booking cancelled successfully');
            
            fetchCustomerBookings();
            
        } catch (err) {
            console.error('Error cancelling booking:', err);
            alert('Failed to cancel booking. Please try again.');
        } finally {
            setIsCancelling(false);
        }
    };

    // UPDATED: Navigate to payment page with booking data
    const handleMakePayment = (booking) => {
        navigate('/customer/paymentview', { 
            state: { 
                selectedBooking: booking,
                bookingId: booking.id 
            } 
        });
    };

    const handleDownloadReceipt = async (paymentId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
                responseType: 'blob'
            });
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `receipt_${paymentId}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Download error:', error);
            alert('Failed to download receipt');
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-LK', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0
        }).format(amount).replace('LKR', 'Rs.');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getStatusBadge = (booking) => {
        if (booking.bookingStatus === 'CANCELLED') {
            return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
        }
        
        if (booking.bookingStatus === 'COMPLETED') {
            return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
        }
        
        if (booking.paymentStatus === 'PENDING') {
            return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Payment Pending</span>;
        }
        
        if (booking.bookingStatus === 'CONFIRMED' && booking.paymentStatus === 'COMPLETED') {
            return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Confirmed</span>;
        }
        
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{booking.bookingStatus}</span>;
    };

    const getVehicleImageUrl = (vehicle) => {
        if (!vehicle || !vehicle.vehicleImage) return null;
        if (vehicle.vehicleImage.startsWith('http')) return vehicle.vehicleImage;
        if (vehicle.vehicleImage.startsWith('/uploads')) return `${BASE_URL}${vehicle.vehicleImage}`;
        return `${BASE_URL}/uploads/vehicles/${vehicle.vehicleImage}`;
    };

    // Details Modal Component
    const DetailsModal = ({ booking, onClose }) => {
        const [imageError, setImageError] = useState(false);
        const imageUrl = getVehicleImageUrl(booking.vehicle);

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {getStatusBadge(booking)}
                            {booking.payment?.hasPdf && (
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                                    Receipt Available
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="md:col-span-1">
                                <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
                                    {imageUrl && !imageError ? (
                                        <img
                                            src={imageUrl}
                                            alt={booking.vehicle?.makeModel}
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

                            <div className="md:col-span-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{booking.vehicle?.makeModel}</h3>
                                <p className="text-gray-600 mb-4">Reg: {booking.vehicle?.regNumber}</p>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Fuel Type</p>
                                        <p className="font-medium">{booking.vehicle?.fuelType || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Transmission</p>
                                        <p className="font-medium">{booking.vehicle?.transmissionType || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Seating Capacity</p>
                                        <p className="font-medium">{booking.vehicle?.seatingCapacity || 'N/A'} seats</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Color</p>
                                        <div className="flex items-center">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 mr-2" 
                                                 style={{ backgroundColor: booking.vehicle?.color?.toLowerCase() || '#gray' }}></div>
                                            <p className="font-medium">{booking.vehicle?.color || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Rental Period
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Pickup:</span>
                                        <span className="font-medium">{formatDate(booking.pickupDate)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Drop-off:</span>
                                        <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium">{booking.numberOfDays} days</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Locations
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Pickup:</span>
                                        <span className="font-medium">{booking.pickupLocation}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Drop-off:</span>
                                        <span className="font-medium">{booking.dropOffLocation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Additional Services
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${booking.gpsIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-gray-700">GPS Navigation {booking.gpsIncluded ? '(Included)' : '(Not Included)'}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${booking.childSeatIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-gray-700">Child Seat {booking.childSeatIncluded ? '(Included)' : '(Not Included)'}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${booking.driverStatus === 'WITH_DRIVER' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                                    <span className="text-gray-700">Driver: {booking.driverStatus === 'WITH_DRIVER' ? 'With Driver' : 'Without Driver'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Payment Details
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Total Amount</p>
                                    <p className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Payment Status</p>
                                    <p className={`font-medium ${
                                        booking.paymentStatus === 'COMPLETED' ? 'text-green-600' : 
                                        booking.paymentStatus === 'PENDING' ? 'text-yellow-600' : 'text-gray-600'
                                    }`}>
                                        {booking.paymentStatus}
                                    </p>
                                </div>
                                {booking.payment && (
                                    <>
                                        <div>
                                            <p className="text-sm text-gray-600">Payment Method</p>
                                            <p className="font-medium">{booking.payment.paymentMethod}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Paid On</p>
                                            <p className="font-medium">{new Date(booking.payment.paidAt).toLocaleString()}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mb-6">
                            <h4 className="font-semibold text-gray-800 mb-2">Vehicle Provider</h4>
                            <p className="text-gray-700">{booking.agent?.companyName}</p>
                            {booking.agent?.contactNumber && (
                                <p className="text-sm text-gray-600 mt-1">Contact: {booking.agent.contactNumber}</p>
                            )}
                        </div>

                        {/* UPDATED: Action Buttons with proper spacing and navigation */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                            {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
                                <>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            handleMakePayment(booking);
                                        }}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-center"
                                    >
                                        Make Payment
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowCancelModal(true);
                                            setSelectedBooking(booking);
                                        }}
                                        className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 text-center"
                                    >
                                        Cancel Booking
                                    </button>
                                </>
                            )}
                            
                            {booking.payment?.hasPdf && (
                                <button
                                    onClick={() => handleDownloadReceipt(booking.payment.id)}
                                    className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Receipt
                                </button>
                            )}
                            
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

    // Cancel Modal Component
    const CancelModal = ({ onClose, onConfirm }) => {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-md w-full">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Cancel Booking</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <p className="text-gray-600 mb-4">
                            Please provide a reason for cancelling this booking:
                        </p>

                        <textarea
                            value={cancelReason}
                            onChange={(e) => setCancelReason(e.target.value)}
                            placeholder="Enter reason for cancellation..."
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-4"
                        ></textarea>

                        <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                            <p className="text-sm text-yellow-800">
                                <span className="font-bold">Note:</span> Cancellation may be subject to fees based on our cancellation policy.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={onConfirm}
                                disabled={isCancelling || !cancelReason.trim()}
                                className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
                                    isCancelling || !cancelReason.trim()
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-red-600 text-white hover:bg-red-700'
                                }`}
                            >
                                {isCancelling ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Confirm Cancellation'
                                )}
                            </button>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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
                        <div className="flex items-center gap-4">
                            <span className="text-sm hidden md:block">Welcome, {customerName}</span>
                            <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
                                Browse Vehicles
                            </a>
                            <a href="/customer/payment" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
                                Payments
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
                    <p className="text-gray-600">View and manage all your vehicle bookings</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                        <p className="text-2xl font-bold text-teal-600">{bookingStats.total}</p>
                        <p className="text-sm text-gray-600">Total Bookings</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                        <p className="text-2xl font-bold text-yellow-600">{bookingStats.pending}</p>
                        <p className="text-sm text-gray-600">Pending Payment</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">{bookingStats.confirmed}</p>
                        <p className="text-sm text-gray-600">Confirmed</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                        <p className="text-2xl font-bold text-green-600">{bookingStats.completed}</p>
                        <p className="text-sm text-gray-600">Completed</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                        <p className="text-2xl font-bold text-red-600">{bookingStats.cancelled}</p>
                        <p className="text-sm text-gray-600">Cancelled</p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white rounded-xl shadow-lg p-2 mb-6 overflow-x-auto">
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                                activeTab === 'all'
                                    ? 'bg-teal-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            All My Bookings ({bookingStats.total})
                        </button>
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                                activeTab === 'pending'
                                    ? 'bg-yellow-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Pending Payment ({bookingStats.pending})
                        </button>
                        <button
                            onClick={() => setActiveTab('confirmed')}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                                activeTab === 'confirmed'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Confirmed ({bookingStats.confirmed})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                                activeTab === 'completed'
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Completed ({bookingStats.completed})
                        </button>
                        <button
                            onClick={() => setActiveTab('cancelled')}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                                activeTab === 'cancelled'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Cancelled ({bookingStats.cancelled})
                        </button>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                        <p className="text-gray-600">Loading your bookings...</p>
                    </div>
                )}

                {/* Error State */}
                {errorMessage && !isLoading && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                        <p className="text-red-700">{errorMessage}</p>
                        <button
                            onClick={fetchCustomerBookings}
                            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* No Bookings */}
                {!isLoading && !errorMessage && filteredBookings.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
                        <p className="text-gray-600 mb-6">
                            {activeTab === 'all' 
                                ? "You haven't made any bookings yet" 
                                : `You don't have any ${activeTab} bookings`}
                        </p>
                        <a
                            href="/customer/dashboard"
                            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                        >
                            Browse Vehicles
                        </a>
                    </div>
                )}

                {/* UPDATED: Customer's Bookings List with properly positioned buttons */}
                {!isLoading && !errorMessage && filteredBookings.length > 0 && (
                    <div className="space-y-4">
                        {filteredBookings.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
                                <div className="p-6">
                                    {/* Header with ID and Status */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-bold text-gray-800">
                                                Booking #{booking.id}
                                            </span>
                                            {getStatusBadge(booking)}
                                        </div>
                                        
                                        {/* Action Buttons - Right aligned on desktop, full width on mobile */}
                                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                            <button
                                                onClick={() => handleViewDetails(booking)}
                                                className="flex-1 sm:flex-none px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition duration-200 text-sm font-medium"
                                            >
                                                View Details
                                            </button>
                                            
                                            {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
                                                <button
                                                    onClick={() => handleMakePayment(booking)}
                                                    className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-sm font-medium"
                                                >
                                                    Pay Now
                                                </button>
                                            )}
                                            
                                            {booking.payment?.hasPdf && (
                                                <button
                                                    onClick={() => handleDownloadReceipt(booking.payment.id)}
                                                    className="flex-1 sm:flex-none px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-200 text-sm font-medium flex items-center justify-center"
                                                    title="Download Receipt"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="hidden sm:inline">Receipt</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Booking Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-500">Vehicle</p>
                                            <p className="font-medium text-gray-800 text-sm">
                                                {booking.vehicle?.displayInfo || 
                                                 `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Pickup Date</p>
                                            <p className="font-medium text-gray-800 text-sm">{formatDate(booking.pickupDate)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Drop-off Date</p>
                                            <p className="font-medium text-gray-800 text-sm">{formatDate(booking.dropOffDate)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Total Amount</p>
                                            <p className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</p>
                                        </div>
                                    </div>

                                    {/* Provider Info */}
                                    <div className="mt-3 text-xs text-gray-500">
                                        <span className="font-medium">Provider:</span> {booking.agent?.companyName}
                                    </div>
                                </div>
                            </div>
                        ))}
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

            {/* Details Modal */}
            {showDetailsModal && selectedBooking && (
                <DetailsModal
                    booking={selectedBooking}
                    onClose={() => {
                        setShowDetailsModal(false);
                        setSelectedBooking(null);
                    }}
                />
            )}

            {/* Cancel Modal */}
            {showCancelModal && selectedBooking && (
                <CancelModal
                    onClose={() => {
                        setShowCancelModal(false);
                        setCancelReason('');
                    }}
                    onConfirm={handleCancelBooking}
                />
            )}
        </div>
    );
};

export default CustomerMyBookings;