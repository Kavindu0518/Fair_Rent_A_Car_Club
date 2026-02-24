// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080';

// export const fetchVehicleDetails = async (vehicleId, token) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
//             headers: { 'Authorization': `Bearer ${token}` },
//             timeout: 30000,
//         });
//         return response.data;
//     } catch (err) {
//         console.error('Error fetching vehicle details:', err);
//         return null;
//     }
// };

// export const fetchAgentDetails = async (agentId, token) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//             headers: { 'Authorization': `Bearer ${token}` },
//             timeout: 30000,
//         });
//         return response.data;
//     } catch (err) {
//         console.error('Error fetching agent details:', err);
//         return { companyName: `Agent #${agentId}` };
//     }
// };

// export const fetchPaymentForBooking = async (bookingId, token) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/api/v1/payment/by-booking/${bookingId}`, {
//             headers: { 'Authorization': `Bearer ${token}` }
//         });
//         return response.data;
//     } catch (error) {
//         console.log('Payment not found for booking:', bookingId);
//         return null;
//     }
// };

// export const fetchCustomerBookings = async () => {
//     const token = localStorage.getItem('customerToken');
//     const customerId = localStorage.getItem('customerId');

//     try {
//         const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//             headers: { 'Authorization': `Bearer ${token}` },
//             timeout: 30000,
//         });

//         if (response.status === 200) {
//             // Filter bookings for this customer only
//             const customerBookings = response.data.filter(booking => {
//                 const bookingCustomerId = booking.customerId || 
//                                           booking.customer?.id || 
//                                           booking.customer?.customerId;
//                 return parseInt(bookingCustomerId) === parseInt(customerId);
//             });

//             // Enhance bookings with vehicle and agent details
//             const enhancedBookings = await Promise.all(
//                 customerBookings.map(async (booking) => {
//                     // Fetch vehicle details if not present
//                     let vehicleData = booking.vehicle;
//                     if (!vehicleData || !vehicleData.makeModel) {
//                         const vehicleId = booking.vehicleId || booking.vehicle?.id;
//                         if (vehicleId) {
//                             vehicleData = await fetchVehicleDetails(vehicleId, token);
//                         }
//                     }

//                     // Fetch agent details if not present
//                     let agentData = booking.agent;
//                     if (!agentData || !agentData.companyName) {
//                         const agentId = booking.agentId || booking.agent?.id;
//                         if (agentId) {
//                             agentData = await fetchAgentDetails(agentId, token);
//                         }
//                     }

//                     // Fetch payment details
//                     const paymentData = await fetchPaymentForBooking(booking.id, token);

//                     // Calculate number of days
//                     const pickupDate = new Date(booking.pickupDate);
//                     const dropOffDate = new Date(booking.dropOffDate);
//                     const days = Math.ceil((dropOffDate - pickupDate) / (1000 * 60 * 60 * 24));

//                     // Return enhanced booking object
//                     return {
//                         id: booking.id,
//                         bookingStatus: booking.bookingStatus || 'PENDING',
//                         paymentStatus: booking.paymentStatus || 'PENDING',
//                         pickupDate: booking.pickupDate,
//                         dropOffDate: booking.dropOffDate,
//                         totalPrice: booking.totalPrice || 0,
//                         pickupLocation: booking.pickupLocation,
//                         dropOffLocation: booking.dropOffLocation || booking.pickupLocation,
//                         driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
//                         gpsIncluded: booking.gpsIncluded || false,
//                         childSeatIncluded: booking.childSeatIncluded || false,
//                         customerId: booking.customerId || booking.customer?.id,
//                         vehicleId: booking.vehicleId || booking.vehicle?.id,
//                         agentId: booking.agentId || booking.agent?.id,
//                         createdAt: booking.createdAt || new Date().toISOString(),
//                         numberOfDays: days,
//                         vehicle: vehicleData ? {
//                             id: vehicleData.id,
//                             makeModel: vehicleData.makeModel || 'Unknown Vehicle',
//                             regNumber: vehicleData.regNumber || 'N/A',
//                             fuelType: vehicleData.fuelType || 'N/A',
//                             transmissionType: vehicleData.transmissionType || 'N/A',
//                             seatingCapacity: vehicleData.seatingCapacity || 'N/A',
//                             color: vehicleData.color || 'N/A',
//                             vehicleImage: vehicleData.vehicleImage,
//                             displayInfo: `${vehicleData.makeModel || 'Unknown Vehicle'} (${vehicleData.regNumber || 'N/A'})`
//                         } : {
//                             id: booking.vehicleId,
//                             makeModel: 'Unknown Vehicle',
//                             regNumber: 'N/A',
//                             fuelType: 'N/A',
//                             transmissionType: 'N/A',
//                             seatingCapacity: 'N/A',
//                             color: 'N/A',
//                             vehicleImage: null,
//                             displayInfo: `Vehicle #${booking.vehicleId || 'Unknown'}`
//                         },
//                         agent: agentData ? {
//                             id: agentData.id,
//                             companyName: agentData.companyName || `Agent #${agentData.id}`,
//                             contactNumber: agentData.contactNumber,
//                             email: agentData.email
//                         } : {
//                             companyName: `Agent #${booking.agentId || 'Unknown'}`
//                         },
//                         payment: paymentData
//                     };
//                 })
//             );

//             // Sort by creation date (newest first)
//             enhancedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            
//             const stats = calculateStats(enhancedBookings);
//             return { bookings: enhancedBookings, stats };
//         }
//     } catch (error) {
//         console.error('Error fetching customer bookings:', error);
//         throw error;
//     }
    
//     return { bookings: [], stats: { total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 } };
// };

// export const calculateStats = (bookings) => ({
//     total: bookings.length,
//     pending: bookings.filter(b => b.paymentStatus === 'PENDING' && b.bookingStatus !== 'CANCELLED').length,
//     confirmed: bookings.filter(b => b.bookingStatus === 'CONFIRMED' && b.paymentStatus === 'COMPLETED').length,
//     completed: bookings.filter(b => b.bookingStatus === 'COMPLETED').length,
//     cancelled: bookings.filter(b => b.bookingStatus === 'CANCELLED').length
// });

// export const filterBookingsByTab = (bookings, activeTab) => {
//     let filtered = [...bookings];
//     switch (activeTab) {
//         case 'pending':
//             filtered = bookings.filter(b => b.paymentStatus === 'PENDING' && b.bookingStatus !== 'CANCELLED' && b.bookingStatus !== 'COMPLETED');
//             break;
//         case 'confirmed':
//             filtered = bookings.filter(b => b.bookingStatus === 'CONFIRMED' && b.paymentStatus === 'COMPLETED');
//             break;
//         case 'completed':
//             filtered = bookings.filter(b => b.bookingStatus === 'COMPLETED');
//             break;
//         case 'cancelled':
//             filtered = bookings.filter(b => b.bookingStatus === 'CANCELLED');
//             break;
//         default:
//             filtered = bookings;
//             break;
//     }
//     return filtered;
// };

// export const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-LK', {
//         style: 'currency',
//         currency: 'LKR',
//         minimumFractionDigits: 0
//     }).format(amount).replace('LKR', 'Rs.');
// };

// export const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//     });
// };

// export const getStatusBadge = (booking) => {
//     if (booking.bookingStatus === 'CANCELLED') {
//         return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
//     }
    
//     if (booking.bookingStatus === 'COMPLETED') {
//         return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
//     }
    
//     if (booking.paymentStatus === 'PENDING') {
//         return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Payment Pending</span>;
//     }
    
//     if (booking.bookingStatus === 'CONFIRMED' && booking.paymentStatus === 'COMPLETED') {
//         return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Confirmed</span>;
//     }
    
//     return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{booking.bookingStatus}</span>;
// };



import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const fetchVehicleDetails = async (vehicleId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            timeout: 30000,
        });
        return response.data;
    } catch (err) {
        console.error('Error fetching vehicle details:', err);
        return null;
    }
};

export const fetchAgentDetails = async (agentId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            timeout: 30000,
        });
        return response.data;
    } catch (err) {
        console.error('Error fetching agent details:', err);
        return { companyName: `Agent #${agentId}` };
    }
};

export const fetchPaymentForBooking = async (bookingId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/payment/by-booking/${bookingId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.debug('Payment not found for booking:', bookingId, 'Error:', error);
        return null;
    }
};

export const fetchCustomerBookings = async () => {
    const token = localStorage.getItem('customerToken');
    const customerId = localStorage.getItem('customerId');

    try {
        const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
            headers: { 'Authorization': `Bearer ${token}` },
            timeout: 30000,
        });

        if (response.status === 200) {
            // Filter bookings for this customer only
            const customerBookings = response.data.filter(booking => {
                const bookingCustomerId = booking.customerId || 
                                          booking.customer?.id || 
                                          booking.customer?.customerId;
                return parseInt(bookingCustomerId) === parseInt(customerId);
            });

            // Enhance bookings with vehicle and agent details
            const enhancedBookings = await Promise.all(
                customerBookings.map(async (booking) => {
                    // Fetch vehicle details if not present
                    let vehicleData = booking.vehicle;
                    if (!vehicleData || !vehicleData.makeModel) {
                        const vehicleId = booking.vehicleId || booking.vehicle?.id;
                        if (vehicleId) {
                            vehicleData = await fetchVehicleDetails(vehicleId, token);
                        }
                    }

                    // Fetch agent details if not present
                    let agentData = booking.agent;
                    if (!agentData || !agentData.companyName) {
                        const agentId = booking.agentId || booking.agent?.id;
                        if (agentId) {
                            agentData = await fetchAgentDetails(agentId, token);
                        }
                    }

                    // Fetch payment details
                    const paymentData = await fetchPaymentForBooking(booking.id, token);

                    // Calculate number of days
                    const pickupDate = new Date(booking.pickupDate);
                    const dropOffDate = new Date(booking.dropOffDate);
                    const days = Math.ceil((dropOffDate - pickupDate) / (1000 * 60 * 60 * 24));

                    // Return enhanced booking object
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
                            fuelType: vehicleData.fuelType || 'N/A',
                            transmissionType: vehicleData.transmissionType || 'N/A',
                            seatingCapacity: vehicleData.seatingCapacity || 'N/A',
                            color: vehicleData.color || 'N/A',
                            vehicleImage: vehicleData.vehicleImage,
                            displayInfo: `${vehicleData.makeModel || 'Unknown Vehicle'} (${vehicleData.regNumber || 'N/A'})`
                        } : {
                            id: booking.vehicleId,
                            makeModel: 'Unknown Vehicle',
                            regNumber: 'N/A',
                            fuelType: 'N/A',
                            transmissionType: 'N/A',
                            seatingCapacity: 'N/A',
                            color: 'N/A',
                            vehicleImage: null,
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

            // Sort by creation date (newest first)
            enhancedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            
            const stats = calculateStats(enhancedBookings);
            return { bookings: enhancedBookings, stats };
        }
    } catch (error) {
        console.error('Error fetching customer bookings:', error);
        throw error;
    }
    
    return { bookings: [], stats: { total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 } };
};

export const calculateStats = (bookings) => ({
    total: bookings.length,
    pending: bookings.filter(b => 
        b.paymentStatus === 'PENDING' && 
        b.bookingStatus !== 'CANCELLED' && 
        b.bookingStatus !== 'COMPLETED'
    ).length,
    confirmed: bookings.filter(b => 
        b.bookingStatus === 'CONFIRMED' && 
        b.paymentStatus === 'PAID'
    ).length,
    completed: bookings.filter(b => b.bookingStatus === 'COMPLETED').length,
    cancelled: bookings.filter(b => b.bookingStatus === 'CANCELLED').length
});

export const filterBookingsByTab = (bookings, activeTab) => {
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
                b.paymentStatus === 'PAID'
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
    return filtered;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 0
    }).format(amount).replace('LKR', 'Rs.');
};

export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const getStatusBadge = (booking) => {
    // Booking status takes precedence for cancelled and completed
    if (booking.bookingStatus === 'CANCELLED') {
        return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
    }
    
    if (booking.bookingStatus === 'COMPLETED') {
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
    }
    
    // Payment status based on your PaymentStatus enum
    if (booking.paymentStatus === 'PENDING') {
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Payment Pending</span>;
    }
    
    if (booking.paymentStatus === 'PAID') {
        if (booking.bookingStatus === 'CONFIRMED') {
            return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Confirmed (Paid)</span>;
        }
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Paid</span>;
    }
    
    if (booking.paymentStatus === 'UNPAID') {
        return <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Unpaid</span>;
    }
    
    if (booking.paymentStatus === 'UNPAID_CASH_PICKUP') {
        return <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Cash on Pickup</span>;
    }
    
    if (booking.paymentStatus === 'CHECKING_BANK_TRANSFER') {
        return <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Checking Transfer</span>;
    }
    
    return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{booking.bookingStatus}</span>;
};