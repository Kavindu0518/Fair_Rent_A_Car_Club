// // src/Pages/Agent/hooks/useAgentDashboard.jsx
// import { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const useAgentDashboard = () => {
//     const navigate = useNavigate();
//     const [agentData, setAgentData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [activeTab, setActiveTab] = useState('overview');
//     const [stats, setStats] = useState({
//         totalVehicles: 0,
//         activeBookings: 0,
//         totalEarnings: 0,
//         completedTrips: 0,
//         totalVehicleValue: 0,
//         averageDailyRate: 0,
//         pendingBookings: 0,
//         confirmedBookings: 0,
//         totalBookings: 0
//     });
//     const [recentBookings, setRecentBookings] = useState([]);
//     const [allBookings, setAllBookings] = useState([]);
//     const [vehicles, setVehicles] = useState([]);
//     const [earningsData, setEarningsData] = useState([]);
//     const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);
//     const [isBookingsLoading, setIsBookingsLoading] = useState(false);
//     const [bookingStatusFilter, setBookingStatusFilter] = useState('');
//     const [bookingSearchTerm, setBookingSearchTerm] = useState('');

//     const BASE_URL = 'http://localhost:8080';

//     // Helper functions
//     const fetchCustomerDetails = useCallback(async (customerId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
//                 timeout: 30000,
//             });
//             return response.data;
//         } catch (err) {
//             console.error('Error fetching customer details:', err);
//             return { firstName: 'Unknown', lastName: 'Customer' };
//         }
//     }, []);

//     const fetchVehicleDetails = useCallback(async (vehicleId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
//                 timeout: 30000,
//             });
//             return response.data;
//         } catch (err) {
//             console.error('Error fetching vehicle details:', err);
//             return { 
//                 makeModel: `Vehicle #${vehicleId}`, 
//                 regNumber: 'N/A',
//                 dailyRentalPrice: 0
//             };
//         }
//     }, []);

//     const generateEarningsData = useCallback((bookings) => {
//         try {
//             if (bookings.length > 0) {
//                 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//                 const today = new Date();
//                 const last6Months = [];
//                 for (let i = 5; i >= 0; i--) {
//                     const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
//                     last6Months.push({
//                         month: months[date.getMonth()],
//                         year: date.getFullYear(),
//                         key: `${months[date.getMonth()]} ${date.getFullYear()}`
//                     });
//                 }

//                 const initialEarnings = Object.fromEntries(last6Months.map(m => [m.key, 0]));

//                 bookings.forEach(booking => {
//                     if (booking.bookingStatus === 'PAID' || booking.bookingStatus === 'CONFIRMED') {
//                         const date = new Date(booking.pickupDate);
//                         const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;
//                         if (Object.prototype.hasOwnProperty.call(initialEarnings, monthKey)) {
//                             initialEarnings[monthKey] += booking.totalPrice || 0;
//                         }
//                     }
//                 });
                
//                 const earningsArray = last6Months.map(m => ({
//                     month: m.month,
//                     amount: initialEarnings[m.key] || 0
//                 }));
                
//                 setEarningsData(earningsArray);
//             } else {
//                 setEarningsData([
//                     { month: 'Sep', amount: 75000 },
//                     { month: 'Oct', amount: 82000 },
//                     { month: 'Nov', amount: 95000 },
//                     { month: 'Dec', amount: 110000 },
//                     { month: 'Jan', amount: 98000 },
//                     { month: 'Feb', amount: 125000 }
//                 ]);
//             }
//         } catch (err) {
//             console.error('Error generating earnings data:', err);
//         }
//     }, []);

//     const fetchAgentData = useCallback(async () => {
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const storedAgentData = localStorage.getItem('agentData');
            
//             if (storedAgentData) {
//                 setAgentData(JSON.parse(storedAgentData));
//             }

//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 const freshData = response.data;
//                 setAgentData(freshData);
//                 localStorage.setItem('agentData', JSON.stringify(freshData));
//             }
//         } catch (err) {
//             console.error('Error fetching agent data:', err);
//             setError('Failed to load agent data');
//         }
//     }, []);

//     const fetchAgentVehicles = useCallback(async () => {
//         setIsVehiclesLoading(true);
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 const vehicleData = response.data;
//                 setVehicles(vehicleData);
                
//                 const totalVehicles = vehicleData.length;
//                 const totalVehicleValue = vehicleData.reduce((sum, v) => sum + (v.dailyRentalPrice || 0), 0);
//                 const avgDailyRate = totalVehicles > 0 ? totalVehicleValue / totalVehicles : 0;
                
//                 setStats(prev => ({ 
//                     ...prev, 
//                     totalVehicles,
//                     totalVehicleValue,
//                     averageDailyRate: avgDailyRate
//                 }));
//             }
//         } catch (err) {
//             console.error('Error fetching vehicles:', err);
//             setVehicles([]);
//         } finally {
//             setIsVehiclesLoading(false);
//         }
//     }, []);

//     const fetchAgentBookings = useCallback(async () => {
//         setIsBookingsLoading(true);
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 const agentBookings = response.data.filter(booking => 
//                     (booking.agentId || booking.agent?.id) === parseInt(agentId)
//                 );
                
//                 const enhancedBookings = await Promise.all(
//                     agentBookings.map(async (booking) => {
//                         let customer = booking.customer;
//                         let vehicle = booking.vehicle;
                        
//                         if (!customer && booking.customerId) {
//                             customer = await fetchCustomerDetails(booking.customerId);
//                         }
                        
//                         if (!vehicle && booking.vehicleId) {
//                             vehicle = await fetchVehicleDetails(booking.vehicleId);
//                         }
                        
//                         return {
//                             id: booking.id,
//                             bookingStatus: booking.bookingStatus || 'PENDING',
//                             paymentStatus: booking.paymentStatus || 'PENDING',
//                             pickupDate: booking.pickupDate,
//                             dropOffDate: booking.dropOffDate,
//                             totalPrice: booking.totalPrice || 0,
//                             customer: customer ? {
//                                 id: customer.id,
//                                 firstName: customer.firstName || 'Unknown',
//                                 lastName: customer.lastName || 'Customer',
//                                 fullName: `${customer.firstName || ''} ${customer.lastName || ''}`.trim() || 'Unknown Customer'
//                             } : {
//                                 id: booking.customerId,
//                                 firstName: 'Unknown',
//                                 lastName: 'Customer',
//                                 fullName: `Customer #${booking.customerId}`
//                             },
//                             vehicle: vehicle ? {
//                                 id: vehicle.id,
//                                 makeModel: vehicle.makeModel || 'Unknown Vehicle',
//                                 regNumber: vehicle.regNumber || 'N/A',
//                                 dailyRentalPrice: vehicle.dailyRentalPrice || 0,
//                                 displayInfo: `${vehicle.makeModel || 'Unknown'} (${vehicle.regNumber || 'N/A'})`
//                             } : {
//                                 id: booking.vehicleId,
//                                 makeModel: `Vehicle #${booking.vehicleId}`,
//                                 regNumber: 'N/A',
//                                 displayInfo: `Vehicle #${booking.vehicleId}`
//                             },
//                             customerId: booking.customerId || customer?.id,
//                             vehicleId: booking.vehicleId || vehicle?.id,
//                             agentId: booking.agentId || booking.agent?.id
//                         };
//                     })
//                 );
                
//                 setAllBookings(enhancedBookings);
//                 setRecentBookings(enhancedBookings);
                
//                 const active = enhancedBookings.filter(b => 
//                     b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
//                 ).length;
                
//                 const completed = enhancedBookings.filter(b => b.bookingStatus === 'PAID').length;
//                 const pending = enhancedBookings.filter(b => b.bookingStatus === 'PENDING').length;
//                 const confirmed = enhancedBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
//                 const total = enhancedBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                
//                 setStats(prev => ({
//                     ...prev,
//                     activeBookings: active,
//                     completedTrips: completed,
//                     totalEarnings: total,
//                     pendingBookings: pending,
//                     confirmedBookings: confirmed,
//                     totalBookings: enhancedBookings.length
//                 }));

//                 generateEarningsData(enhancedBookings);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//             const agentId = localStorage.getItem('agentId');
//             const mockBookings = [
//                 { 
//                     id: 1, 
//                     customer: { firstName: 'John', lastName: 'Doe', id: 1, fullName: 'John Doe' }, 
//                     vehicle: { 
//                         makeModel: 'Toyota Vios', 
//                         regNumber: 'ABC-1234', 
//                         dailyRentalPrice: 4500, 
//                         id: 1,
//                         displayInfo: 'Toyota Vios (ABC-1234)'
//                     }, 
//                     pickupDate: '2026-02-20', 
//                     dropOffDate: '2026-02-25', 
//                     bookingStatus: 'CONFIRMED', 
//                     paymentStatus: 'PENDING', 
//                     totalPrice: 12600,
//                     customerId: 1,
//                     vehicleId: 1,
//                     agentId: parseInt(agentId)
//                 }
//             ];
            
//             setAllBookings(mockBookings);
//             setRecentBookings(mockBookings);
            
//             const active = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING').length;
//             const completed = mockBookings.filter(b => b.bookingStatus === 'PAID').length;
//             const pending = mockBookings.filter(b => b.bookingStatus === 'PENDING').length;
//             const confirmed = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
//             const total = mockBookings.reduce((sum, b) => sum + b.totalPrice, 0);
            
//             setStats(prev => ({
//                 ...prev,
//                 activeBookings: active,
//                 completedTrips: completed,
//                 totalEarnings: total,
//                 pendingBookings: pending,
//                 confirmedBookings: confirmed,
//                 totalBookings: mockBookings.length
//             }));

//             generateEarningsData(mockBookings);
//         } finally {
//             setIsBookingsLoading(false);
//             setIsLoading(false);
//         }
//     }, [fetchCustomerDetails, fetchVehicleDetails, generateEarningsData]);

//     const filterBookings = useCallback(() => {
//         let filtered = [...allBookings];
        
//         if (bookingStatusFilter) {
//             filtered = filtered.filter(booking => booking.bookingStatus === bookingStatusFilter);
//         }
        
//         if (bookingSearchTerm) {
//             const term = bookingSearchTerm.toLowerCase();
//             filtered = filtered.filter(booking => 
//                 (booking.customer?.fullName?.toLowerCase().includes(term)) ||
//                 (booking.customer?.firstName?.toLowerCase().includes(term)) ||
//                 (booking.customer?.lastName?.toLowerCase().includes(term)) ||
//                 (booking.vehicle?.makeModel?.toLowerCase().includes(term)) ||
//                 (booking.vehicle?.regNumber?.toLowerCase().includes(term)) ||
//                 booking.id?.toString().includes(term)
//             );
//         }
        
//         setRecentBookings(filtered);
//     }, [allBookings, bookingStatusFilter, bookingSearchTerm]);

//     useEffect(() => {
//         const agentId = localStorage.getItem('agentId');
//         const agentToken = localStorage.getItem('agentToken');
        
//         if (!agentId || !agentToken) {
//             navigate('/agent/login');
//             return;
//         }

//         fetchAgentData();
//         fetchAgentVehicles();
//         fetchAgentBookings();
//     }, [navigate, fetchAgentData, fetchAgentVehicles, fetchAgentBookings]);

//     useEffect(() => {
//         if (allBookings.length > 0) {
//             filterBookings();
//         }
//     }, [bookingStatusFilter, bookingSearchTerm, allBookings, filterBookings]);
    

//     const handleUpdateBookingStatus = async (bookingId, newStatus) => {
//         try {
//             const booking = allBookings.find(b => b.id === bookingId);
//             if (!booking) return;
            
//             const updatedBooking = {
//                 id: booking.id,
//                 customerId: booking.customerId || booking.customer?.id,
//                 vehicleId: booking.vehicleId || booking.vehicle?.id,
//                 agentId: parseInt(localStorage.getItem('agentId')),
//                 pickupDate: booking.pickupDate,
//                 dropOffDate: booking.dropOffDate,
//                 pickupLocation: booking.pickupLocation || 'Colombo',
//                 dropOffLocation: booking.dropOffLocation || 'Colombo',
//                 driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
//                 bookingStatus: newStatus,
//                 paymentStatus: booking.paymentStatus,
//                 totalPrice: booking.totalPrice,
//                 gpsIncluded: booking.gpsIncluded || false,
//                 childSeatIncluded: booking.childSeatIncluded || false
//             };
            
//             await axios.put(`${BASE_URL}/api/v1/booking/update/${bookingId}`, updatedBooking, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 }
//             });
            
//             fetchAgentBookings();
//             alert(`Booking status updated to ${newStatus}`);
//         } catch (err) {
//             console.error('Error updating booking:', err);
//             alert('Failed to update booking status');
//         }
//     };

//     const handleDeleteVehicle = async (vehicleId) => {
//         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
//             return;
//         }

//         try {
//             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
//             });
            
//             fetchAgentVehicles();
//             alert('Vehicle deleted successfully!');
//         } catch (err) {
//             console.error('Error deleting vehicle:', err);
//             alert('Failed to delete vehicle. Please try again.');
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('agentToken');
//         localStorage.removeItem('agentId');
//         localStorage.removeItem('agentCompanyName');
//         localStorage.removeItem('agentEmail');
//         localStorage.removeItem('agentData');
//         navigate('/agent/login');
//     };

//     const getStatusColor = (status) => {
//         switch(status) {
//             case 'CONFIRMED': return 'bg-green-100 text-green-800';
//             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
//             case 'PAID': return 'bg-blue-100 text-blue-800';
//             case 'CANCELLED': return 'bg-red-100 text-red-800';
//             case 'Available': return 'bg-green-100 text-green-800';
//             case 'Booked': return 'bg-yellow-100 text-yellow-800';
//             case 'Maintenance': return 'bg-red-100 text-red-800';
//             default: return 'bg-gray-100 text-gray-800';
//         }
//     };

//     const getPaymentStatusColor = (status) => {
//         switch(status) {
//             case 'PAID': return 'bg-green-100 text-green-800';
//             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
//             case 'FAILED': return 'bg-red-100 text-red-800';
//             default: return 'bg-gray-100 text-gray-800';
//         }
//     };

//     const formatCurrency = (amount) => {
//         return `Rs. ${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

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

//     const getFullImageUrl = (imagePath) => {
//         if (!imagePath) return null;
//         if (imagePath.startsWith('http')) return imagePath;
//         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
//             const filename = imagePath.split('\\').pop();
//             return `${BASE_URL}/uploads/vehicles/${filename}`;
//         }
//         return `${BASE_URL}${imagePath}`;
//     };

//     // This function now returns a configuration object instead of JSX
//     const getRatingStars = (rating) => {
//         const stars = [];
//         for (let i = 0; i < 5; i++) {
//             stars.push({
//                 filled: i < Math.floor(rating),
//                 key: i
//             });
//         }
//         return stars;
//     };

//     return {
//         agentData,
//         isLoading,
//         error,
//         activeTab,
//         setActiveTab,
//         stats,
//         recentBookings,
//         allBookings,
//         vehicles,
//         earningsData,
//         isVehiclesLoading,
//         isBookingsLoading,
//         bookingStatusFilter,
//         setBookingStatusFilter,
//         bookingSearchTerm,
//         setBookingSearchTerm,
//         handleUpdateBookingStatus,
//         handleDeleteVehicle,
//         handleLogout,
//         getStatusColor,
//         getPaymentStatusColor,
//         formatCurrency,
//         formatDate,
//         getFuelTypeDisplay,
//         getTransmissionDisplay,
//         getFullImageUrl,
//         getRatingStars
//     };
// };

// export default useAgentDashboard;




// src/Pages/Agent/hooks/useAgentDashboard.jsx
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAgentDashboard = () => {
    const navigate = useNavigate();
    const [agentData, setAgentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalVehicles: 0,
        activeBookings: 0,
        totalEarnings: 0,
        completedTrips: 0,
        totalVehicleValue: 0,
        averageDailyRate: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        totalBookings: 0
    });
    const [recentBookings, setRecentBookings] = useState([]);
    const [allBookings, setAllBookings] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [earningsData, setEarningsData] = useState([]);
    const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);
    const [isBookingsLoading, setIsBookingsLoading] = useState(false);
    const [bookingStatusFilter, setBookingStatusFilter] = useState('');
    const [bookingSearchTerm, setBookingSearchTerm] = useState('');


    const BASE_URL = 'http://localhost:8080';

    // Helper functions
    const fetchCustomerDetails = useCallback(async (customerId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
                timeout: 30000,
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching customer details:', err);
            return { firstName: 'Unknown', lastName: 'Customer' };
        }
    }, []);

    const fetchVehicleDetails = useCallback(async (vehicleId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
                timeout: 30000,
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching vehicle details:', err);
            return { 
                makeModel: `Vehicle #${vehicleId}`, 
                regNumber: 'N/A',
                dailyRentalPrice: 0
            };
        }
    }, []);
    

    const generateEarningsData = useCallback((bookings) => {
        try {
            if (bookings.length > 0) {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const today = new Date();
                const last6Months = [];
                for (let i = 5; i >= 0; i--) {
                    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
                    last6Months.push({
                        month: months[date.getMonth()],
                        year: date.getFullYear(),
                        key: `${months[date.getMonth()]} ${date.getFullYear()}`
                    });
                }

                const initialEarnings = Object.fromEntries(last6Months.map(m => [m.key, 0]));

                bookings.forEach(booking => {
                    if (booking.bookingStatus === 'COMPLETED' || booking.bookingStatus === 'CONFIRMED') {
                        const date = new Date(booking.pickupDate);
                        const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;
                        if (Object.prototype.hasOwnProperty.call(initialEarnings, monthKey)) {
                            initialEarnings[monthKey] += booking.totalPrice || 0;
                        }
                    }
                });
                
                const earningsArray = last6Months.map(m => ({
                    month: m.month,
                    amount: initialEarnings[m.key] || 0
                }));
                
                setEarningsData(earningsArray);
            } else {
                setEarningsData([
                    { month: 'Sep', amount: 75000 },
                    { month: 'Oct', amount: 82000 },
                    { month: 'Nov', amount: 95000 },
                    { month: 'Dec', amount: 110000 },
                    { month: 'Jan', amount: 98000 },
                    { month: 'Feb', amount: 125000 }
                ]);
            }
        } catch (err) {
            console.error('Error generating earnings data:', err);
        }
    }, []);

    const fetchAgentData = useCallback(async () => {
        try {
            const agentId = localStorage.getItem('agentId');
            const storedAgentData = localStorage.getItem('agentData');
            
            if (storedAgentData) {
                setAgentData(JSON.parse(storedAgentData));
            }

            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
                timeout: 30000,
            });

            if (response.status === 200) {
                const freshData = response.data;
                setAgentData(freshData);
                localStorage.setItem('agentData', JSON.stringify(freshData));
            }
        } catch (err) {
            console.error('Error fetching agent data:', err);
            setError('Failed to load agent data');
        }
    }, []);

    const fetchAgentVehicles = useCallback(async () => {
        setIsVehiclesLoading(true);
        try {
            const agentId = localStorage.getItem('agentId');
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
                timeout: 30000,
            });

            if (response.status === 200) {
                const vehicleData = response.data;
                setVehicles(vehicleData);
                
                const totalVehicles = vehicleData.length;
                const totalVehicleValue = vehicleData.reduce((sum, v) => sum + (v.dailyRentalPrice || 0), 0);
                const avgDailyRate = totalVehicles > 0 ? totalVehicleValue / totalVehicles : 0;
                
                setStats(prev => ({ 
                    ...prev, 
                    totalVehicles,
                    totalVehicleValue,
                    averageDailyRate: avgDailyRate
                }));
            }
        } catch (err) {
            console.error('Error fetching vehicles:', err);
            setVehicles([]);
        } finally {
            setIsVehiclesLoading(false);
        }
    }, []);

    const fetchAgentBookings = useCallback(async () => {
        setIsBookingsLoading(true);
        try {
            const agentId = localStorage.getItem('agentId');
            const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` },
                timeout: 30000,
            });

            if (response.status === 200) {
                const agentBookings = response.data.filter(booking => 
                    (booking.agentId || booking.agent?.id) === parseInt(agentId)
                );
                
                const enhancedBookings = await Promise.all(
                    agentBookings.map(async (booking) => {
                        let customer = booking.customer;
                        let vehicle = booking.vehicle;
                        
                        if (!customer && booking.customerId) {
                            customer = await fetchCustomerDetails(booking.customerId);
                        }
                        
                        if (!vehicle && booking.vehicleId) {
                            vehicle = await fetchVehicleDetails(booking.vehicleId);
                        }
                        
                        return {
                            id: booking.id,
                            bookingStatus: booking.bookingStatus || 'PENDING',
                            paymentStatus: booking.paymentStatus || 'PENDING',
                            pickupDate: booking.pickupDate,
                            dropOffDate: booking.dropOffDate,
                            totalPrice: booking.totalPrice || 0,
                            customer: customer ? {
                                id: customer.id,
                                firstName: customer.firstName || 'Unknown',
                                lastName: customer.lastName || 'Customer',
                                fullName: `${customer.firstName || ''} ${customer.lastName || ''}`.trim() || 'Unknown Customer'
                            } : {
                                id: booking.customerId,
                                firstName: 'Unknown',
                                lastName: 'Customer',
                                fullName: `Customer #${booking.customerId}`
                            },
                            vehicle: vehicle ? {
                                id: vehicle.id,
                                makeModel: vehicle.makeModel || 'Unknown Vehicle',
                                regNumber: vehicle.regNumber || 'N/A',
                                dailyRentalPrice: vehicle.dailyRentalPrice || 0,
                                displayInfo: `${vehicle.makeModel || 'Unknown'} (${vehicle.regNumber || 'N/A'})`
                            } : {
                                id: booking.vehicleId,
                                makeModel: `Vehicle #${booking.vehicleId}`,
                                regNumber: 'N/A',
                                displayInfo: `Vehicle #${booking.vehicleId}`
                            },
                            customerId: booking.customerId || customer?.id,
                            vehicleId: booking.vehicleId || vehicle?.id,
                            agentId: booking.agentId || booking.agent?.id
                        };
                    })
                );
                
                setAllBookings(enhancedBookings);
                setRecentBookings(enhancedBookings);
                
                const active = enhancedBookings.filter(b => 
                    b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
                ).length;
                
                const completed = enhancedBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
                const pending = enhancedBookings.filter(b => b.bookingStatus === 'PENDING').length;
                const confirmed = enhancedBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
                const total = enhancedBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                
                setStats(prev => ({
                    ...prev,
                    activeBookings: active,
                    completedTrips: completed,
                    totalEarnings: total,
                    pendingBookings: pending,
                    confirmedBookings: confirmed,
                    totalBookings: enhancedBookings.length
                }));

                generateEarningsData(enhancedBookings);
            }
        } catch (err) {
            console.error('Error fetching bookings:', err);
            const agentId = localStorage.getItem('agentId');
            const mockBookings = [
                { 
                    id: 1, 
                    customer: { firstName: 'John', lastName: 'Doe', id: 1, fullName: 'John Doe' }, 
                    vehicle: { 
                        makeModel: 'Toyota Vios', 
                        regNumber: 'ABC-1234', 
                        dailyRentalPrice: 4500, 
                        id: 1,
                        displayInfo: 'Toyota Vios (ABC-1234)'
                    }, 
                    pickupDate: '2026-02-20', 
                    dropOffDate: '2026-02-25', 
                    bookingStatus: 'CONFIRMED', 
                    paymentStatus: 'PENDING', 
                    totalPrice: 12600,
                    customerId: 1,
                    vehicleId: 1,
                    agentId: parseInt(agentId)
                },
                {
                    id: 2,
                    customer: { firstName: 'Jane', lastName: 'Smith', id: 2, fullName: 'Jane Smith' },
                    vehicle: {
                        makeModel: 'Honda Civic',
                        regNumber: 'XYZ-7890',
                        dailyRentalPrice: 5000,
                        id: 2,
                        displayInfo: 'Honda Civic (XYZ-7890)'
                    },
                    pickupDate: '2026-02-22',
                    dropOffDate: '2026-02-27',
                    bookingStatus: 'PENDING',
                    paymentStatus: 'UNPAID',
                    totalPrice: 25000,
                    customerId: 2,
                    vehicleId: 2,
                    agentId: parseInt(agentId)
                }
            ];
            
            setAllBookings(mockBookings);
            setRecentBookings(mockBookings);
            
            const active = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING').length;
            const completed = mockBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
            const pending = mockBookings.filter(b => b.bookingStatus === 'PENDING').length;
            const confirmed = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
            const total = mockBookings.reduce((sum, b) => sum + b.totalPrice, 0);
            
            setStats(prev => ({
                ...prev,
                activeBookings: active,
                completedTrips: completed,
                totalEarnings: total,
                pendingBookings: pending,
                confirmedBookings: confirmed,
                totalBookings: mockBookings.length
            }));

            generateEarningsData(mockBookings);
        } finally {
            setIsBookingsLoading(false);
            setIsLoading(false);
        }
    }, [fetchCustomerDetails, fetchVehicleDetails, generateEarningsData]);

    const filterBookings = useCallback(() => {
        let filtered = [...allBookings];
        
        if (bookingStatusFilter) {
            filtered = filtered.filter(booking => booking.bookingStatus === bookingStatusFilter);
        }
        
        if (bookingSearchTerm) {
            const term = bookingSearchTerm.toLowerCase();
            filtered = filtered.filter(booking => 
                (booking.customer?.fullName?.toLowerCase().includes(term)) ||
                (booking.customer?.firstName?.toLowerCase().includes(term)) ||
                (booking.customer?.lastName?.toLowerCase().includes(term)) ||
                (booking.vehicle?.makeModel?.toLowerCase().includes(term)) ||
                (booking.vehicle?.regNumber?.toLowerCase().includes(term)) ||
                booking.id?.toString().includes(term)
            );
        }
        
        setRecentBookings(filtered);
    }, [allBookings, bookingStatusFilter, bookingSearchTerm]);

    useEffect(() => {
        const agentId = localStorage.getItem('agentId');
        const agentToken = localStorage.getItem('agentToken');
        
        if (!agentId || !agentToken) {
            navigate('/agent/login');
            return;
        }

        fetchAgentData();
        fetchAgentVehicles();
        fetchAgentBookings();
    }, [navigate, fetchAgentData, fetchAgentVehicles, fetchAgentBookings]);

    useEffect(() => {
        if (allBookings.length > 0) {
            filterBookings();
        }
    }, [bookingStatusFilter, bookingSearchTerm, allBookings, filterBookings]);

    const handleUpdateBookingStatus = async (bookingId, newStatus) => {
        try {
            const booking = allBookings.find(b => b.id === bookingId);
            if (!booking) return;
            
            const updatedBooking = {
                id: booking.id,
                customerId: booking.customerId || booking.customer?.id,
                vehicleId: booking.vehicleId || booking.vehicle?.id,
                agentId: parseInt(localStorage.getItem('agentId')),
                pickupDate: booking.pickupDate,
                dropOffDate: booking.dropOffDate,
                pickupLocation: booking.pickupLocation || 'Colombo',
                dropOffLocation: booking.dropOffLocation || 'Colombo',
                driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
                bookingStatus: newStatus,
                paymentStatus: booking.paymentStatus,
                totalPrice: booking.totalPrice,
                gpsIncluded: booking.gpsIncluded || false,
                childSeatIncluded: booking.childSeatIncluded || false
            };
            
            await axios.put(`${BASE_URL}/api/v1/booking/update/${bookingId}`, updatedBooking, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                }
            });
            
            fetchAgentBookings();
            alert(`Booking status updated to ${newStatus}`);
        } catch (err) {
            console.error('Error updating booking:', err);
            alert('Failed to update booking status');
        }
    };

    const handleUpdatePaymentStatus = async (bookingId, newPaymentStatus) => {
        try {
            const booking = allBookings.find(b => b.id === bookingId);
            if (!booking) return;
            
            const updatedBooking = {
                id: booking.id,
                customerId: booking.customerId || booking.customer?.id,
                vehicleId: booking.vehicleId || booking.vehicle?.id,
                agentId: parseInt(localStorage.getItem('agentId')),
                pickupDate: booking.pickupDate,
                dropOffDate: booking.dropOffDate,
                pickupLocation: booking.pickupLocation || 'Colombo',
                dropOffLocation: booking.dropOffLocation || 'Colombo',
                driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
                bookingStatus: booking.bookingStatus,
                paymentStatus: newPaymentStatus,
                totalPrice: booking.totalPrice,
                gpsIncluded: booking.gpsIncluded || false,
                childSeatIncluded: booking.childSeatIncluded || false
            };
            
            await axios.put(`${BASE_URL}/api/v1/booking/update/${bookingId}`, updatedBooking, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                }
            });
            
            fetchAgentBookings();
            alert(`Payment status updated to ${newPaymentStatus}`);
        } catch (err) {
            console.error('Error updating payment status:', err);
            alert('Failed to update payment status');
        }
    };

    const handleDeleteVehicle = async (vehicleId) => {
        if (!window.confirm('Are you sure you want to delete this vehicle?')) {
            return;
        }

        try {
            await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('agentToken')}` }
            });
            
            fetchAgentVehicles();
            alert('Vehicle deleted successfully!');
        } catch (err) {
            console.error('Error deleting vehicle:', err);
            alert('Failed to delete vehicle. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('agentToken');
        localStorage.removeItem('agentId');
        localStorage.removeItem('agentCompanyName');
        localStorage.removeItem('agentEmail');
        localStorage.removeItem('agentData');
        navigate('/agent/login');
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'CONFIRMED': return 'bg-green-100 text-green-800';
            case 'PENDING': return 'bg-yellow-100 text-yellow-800';
            case 'COMPLETED': return 'bg-blue-100 text-blue-800';
            case 'CANCELLED': return 'bg-red-100 text-red-800';
            case 'Available': return 'bg-green-100 text-green-800';
            case 'Booked': return 'bg-yellow-100 text-yellow-800';
            case 'Maintenance': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPaymentStatusColor = (status) => {
        switch(status) {
            case 'PAID': return 'bg-green-100 text-green-800';
            case 'PENDING': return 'bg-yellow-100 text-yellow-800';
            case 'UNPAID': return 'bg-red-100 text-red-800';
            case 'UNPAID_CASH_PICKUP': return 'bg-orange-100 text-orange-800';
            case 'CHECKING_BANK_TRANSFER': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const formatCurrency = (amount) => {
        return `Rs. ${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

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

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        if (imagePath.includes('uploads')) {
            return `${BASE_URL}/${imagePath.replace(/\\/g, '/')}`;
        }
        return `${BASE_URL}${imagePath}`;
    };

    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push({
                filled: i < Math.floor(rating),
                key: i
            });
        }
        return stars;
    };

    return {
        agentData,
        isLoading,
        error,
        activeTab,
        setActiveTab,
        stats,
        recentBookings,
        allBookings,
        vehicles,
        earningsData,
        isVehiclesLoading,
        isBookingsLoading,
        bookingStatusFilter,
        setBookingStatusFilter,
        bookingSearchTerm,
        setBookingSearchTerm,
        handleUpdateBookingStatus,
        handleUpdatePaymentStatus,
        handleDeleteVehicle,
        handleLogout,
        getStatusColor,
        getPaymentStatusColor,
        formatCurrency,
        formatDate,
        getFuelTypeDisplay,
        getTransmissionDisplay,
        getFullImageUrl,
        getRatingStars
    };
};

export default useAgentDashboard;