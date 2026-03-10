// // // src/Pages/Admin/hooks/useAdminData.js
// // import { useState, useEffect, useCallback } from 'react';
// // import axios from 'axios';

// // const useAdminData = (navigate) => {
// //     const [adminData, setAdminData] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     // Data states
// //     const [agents, setAgents] = useState([]);
// //     const [customers, setCustomers] = useState([]);
// //     const [vehicles, setVehicles] = useState([]);
// //     const [allBookings, setAllBookings] = useState([]);
// //     const [admins, setAdmins] = useState([]);
// //     const [bankTransfers, setBankTransfers] = useState([]);
// //     const [payments, setPayments] = useState([]);
// //     const [recentActivities, setRecentActivities] = useState([]);

// //     const BASE_URL = 'http://localhost:8080';

// //     const fetchAllData = useCallback(async () => {
// //         setIsLoading(true);
// //         setError('');
        
// //         try {
// //             const token = localStorage.getItem('adminToken');
// //             const adminId = localStorage.getItem('adminId');
            
// //             if (!token || !adminId) {
// //                 throw new Error('Authentication required');
// //             }

// //             const headers = { 
// //                 'Authorization': `Bearer ${token}`,
// //                 'Content-Type': 'application/json'
// //             };

// //             // Verify admin
// //             try {
// //                 const adminResponse = await axios.get(`${BASE_URL}/api/v1/admin/${adminId}`, { headers });
// //                 setAdminData(adminResponse.data);
// //                 localStorage.setItem('adminData', JSON.stringify(adminResponse.data));
// //             } catch (adminErr) {
// //                 if (adminErr.response?.status === 401 || adminErr.response?.status === 403) {
// //                     localStorage.clear();
// //                     navigate('/admin/login');
// //                     return;
// //                 }
// //             }

// //             // Fetch all data
// //             const [agentsRes, customersRes, vehiclesRes, bookingsRes, adminsRes, transfersRes, paymentsRes] = await Promise.all([
// //                 axios.get(`${BASE_URL}/api/v1/agent/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/customer/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/booking/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/admin/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, { headers }).catch(() => ({ data: [] })),
// //                 axios.get(`${BASE_URL}/api/v1/payment/getAll`, { headers }).catch(() => ({ data: [] }))
// //             ]);

// //             setAgents(agentsRes.data || []);
// //             setCustomers(customersRes.data || []);
// //             setVehicles(vehiclesRes.data || []);
// //             setAllBookings(bookingsRes.data || []);
// //             setAdmins(adminsRes.data || []);
// //             setBankTransfers(transfersRes.data || []);
// //             setPayments(paymentsRes.data || []);

// //             // Generate recent activities
// //             generateRecentActivities(bookingsRes.data || [], paymentsRes.data || [], transfersRes.data || []);

// //         } catch (err) {
// //             console.error('Error fetching data:', err);
// //             setError('Failed to load dashboard data');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     }, [navigate]);

// //     const generateRecentActivities = (bookings, payments, transfers) => {
// //         const activities = [];
        
// //         bookings.slice(0, 5).forEach(booking => {
// //             activities.push({
// //                 id: `booking-${booking.id}`,
// //                 type: 'booking',
// //                 title: `New Booking #BK${String(booking.id).padStart(4, '0')}`,
// //                 description: `Booking created by Customer #${booking.customerId}`,
// //                 time: new Date(booking.createdAt || Date.now()),
// //                 status: booking.bookingStatus
// //             });
// //         });

// //         payments.slice(0, 5).forEach(payment => {
// //             activities.push({
// //                 id: `payment-${payment.id}`,
// //                 type: 'payment',
// //                 title: `Payment of ${formatCurrency(payment.amount)}`,
// //                 description: `Payment for Booking #BK${String(payment.bookingId).padStart(4, '0')}`,
// //                 time: new Date(payment.paidAt || Date.now()),
// //                 status: payment.paymentStatus
// //             });
// //         });

// //         transfers.slice(0, 5).forEach(transfer => {
// //             activities.push({
// //                 id: `transfer-${transfer.id}`,
// //                 type: 'transfer',
// //                 title: `Bank Transfer #BT${String(transfer.id).padStart(4, '0')}`,
// //                 description: `${transfer.bankName} - ${transfer.status}`,
// //                 time: new Date(transfer.createdAt || Date.now()),
// //                 status: transfer.status
// //             });
// //         });

// //         activities.sort((a, b) => b.time - a.time);
// //         setRecentActivities(activities.slice(0, 10));
// //     };

// //     const handleLogout = () => {
// //         localStorage.clear();
// //     };

// //     // Statistics calculations
// //     const stats = {
// //         totalAgents: agents.length,
// //         pendingAgents: agents.filter(a => a.status === 'PENDING').length,
// //         newAgentsToday: agents.filter(a => {
// //             const today = new Date().toDateString();
// //             const agentDate = new Date(a.createdAt || Date.now()).toDateString();
// //             return agentDate === today;
// //         }).length,
        
// //         totalCustomers: customers.length,
// //         newCustomersToday: customers.filter(c => {
// //             const today = new Date().toDateString();
// //             const customerDate = new Date(c.createdAt || Date.now()).toDateString();
// //             return customerDate === today;
// //         }).length,
        
// //         totalAdmins: admins.length,
        
// //         totalVehicles: vehicles.length,
// //         availableVehicles: vehicles.filter(v => v.status === 'AVAILABLE').length,
// //         bookedVehicles: vehicles.filter(v => v.status === 'BOOKED').length,
// //         maintenanceVehicles: vehicles.filter(v => v.status === 'MAINTENANCE').length,
        
// //         totalBookings: allBookings.length,
// //         pendingBookings: allBookings.filter(b => b.bookingStatus === 'PENDING').length,
// //         confirmedBookings: allBookings.filter(b => b.bookingStatus === 'CONFIRMED').length,
// //         completedBookings: allBookings.filter(b => b.bookingStatus === 'COMPLETED').length,
// //         cancelledBookings: allBookings.filter(b => b.bookingStatus === 'CANCELLED').length,
// //         todayPickups: allBookings.filter(b => {
// //             const today = new Date().toDateString();
// //             const pickupDate = new Date(b.pickupDate).toDateString();
// //             return pickupDate === today && b.bookingStatus !== 'CANCELLED';
// //         }).length,
        
// //         totalPayments: payments.length,
// //         paidPayments: payments.filter(p => p.paymentStatus === 'PAID').length,
// //         pendingPayments: payments.filter(p => p.paymentStatus === 'PENDING').length,
// //         totalRevenue: payments.filter(p => p.paymentStatus === 'PAID').reduce((sum, p) => sum + (p.amount || 0), 0),
// //         todayRevenue: payments.filter(p => {
// //             const today = new Date().toDateString();
// //             const paidDate = new Date(p.paidAt || Date.now()).toDateString();
// //             return paidDate === today && p.paymentStatus === 'PAID';
// //         }).reduce((sum, p) => sum + (p.amount || 0), 0),
        
// //         pendingTransfers: bankTransfers.filter(t => t.status === 'Pending').length,
// //         verifiedTransfers: bankTransfers.filter(t => t.status === 'Verified').length,
// //     };

// //     // Utility functions
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
// //             day: 'numeric',
// //             hour: '2-digit',
// //             minute: '2-digit'
// //         });
// //     };

// //     const getStatusColor = (status) => {
// //         switch(status) {
// //             case 'CONFIRMED': return 'bg-green-100 text-green-800';
// //             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
// //             case 'COMPLETED': return 'bg-blue-100 text-blue-800';
// //             case 'CANCELLED': return 'bg-red-100 text-red-800';
// //             case 'Verified': return 'bg-green-100 text-green-800';
// //             case 'Rejected': return 'bg-red-100 text-red-800';
// //             case 'PAID': return 'bg-green-100 text-green-800';
// //             case 'UNPAID': return 'bg-red-100 text-red-800';
// //             case 'ACTIVE': return 'bg-green-100 text-green-800';
// //             case 'PENDING_APPROVAL': return 'bg-yellow-100 text-yellow-800';
// //             case 'AVAILABLE': return 'bg-green-100 text-green-800';
// //             case 'BOOKED': return 'bg-yellow-100 text-yellow-800';
// //             case 'MAINTENANCE': return 'bg-red-100 text-red-800';
// //             default: return 'bg-gray-100 text-gray-800';
// //         }
// //     };

// //     useEffect(() => {
// //         fetchAllData();
// //     }, [fetchAllData]);

// //     return {
// //         adminData,
// //         isLoading,
// //         error,
// //         stats,
// //         agents,
// //         customers,
// //         admins,
// //         vehicles,
// //         allBookings,
// //         payments,
// //         bankTransfers,
// //         recentActivities,
// //         fetchAllData,
// //         handleLogout,
// //         formatCurrency,
// //         formatDate,
// //         getStatusColor
// //     };
// // };

// // export default useAdminData;




// //=======admin


// // src/Pages/Admin/hooks/useAdminData.jsx
// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const useAdminData = (navigate, showToast) => {
//     const [adminData, setAdminData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [stats, setStats] = useState({
//         totalAgents: 0,
//         pendingAgents: 0,
//         totalCustomers: 0,
//         totalAdmins: 0,
//         totalVehicles: 0,
//         availableVehicles: 0,
//         maintenanceVehicles: 0,
//         totalBookings: 0,
//         pendingBookings: 0,
//         confirmedBookings: 0,
//         completedBookings: 0,
//         cancelledBookings: 0,
//         totalPayments: 0,
//         pendingPayments: 0,
//         totalRevenue: 0,
//         todayRevenue: 0,
//         pendingTransfers: 0
//     });
    
//     const [agents, setAgents] = useState([]);
//     const [customers, setCustomers] = useState([]);
//     const [admins, setAdmins] = useState([]);
//     const [vehicles, setVehicles] = useState([]);
//     const [allBookings, setAllBookings] = useState([]);
//     const [payments, setPayments] = useState([]);
//     const [bankTransfers, setBankTransfers] = useState([]);
//     const [recentActivities, setRecentActivities] = useState([]);

//     const BASE_URL = 'http://localhost:8080';

//     const fetchAdminData = useCallback(async () => {
//         try {
//             const adminId = localStorage.getItem('adminId');
//             const token = localStorage.getItem('adminToken');
            
//             if (!adminId || !token) {
//                 navigate('/admin/login');
//                 return null;
//             }

//             const response = await axios.get(`${BASE_URL}/api/v1/admin/${adminId}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
            
//             if (response.status === 200) {
//                 setAdminData(response.data);
//                 localStorage.setItem('adminData', JSON.stringify(response.data));
//                 return response.data;
//             }
//         } catch (err) {
//             console.error('Error fetching admin data:', err);
//             if (err.response?.status === 401) {
//                 navigate('/admin/login');
//             }
//         }
//         return null;
//     }, [navigate]);

//     const fetchAgents = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setAgents(response.data || []);
//         } catch (err) {
//             console.error('Error fetching agents:', err);
//             // Don't show toast for this, just log it
//         }
//     }, []);

//     const fetchCustomers = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setCustomers(response.data || []);
//         } catch (err) {
//             console.error('Error fetching customers:', err);
//         }
//     }, []);

//     const fetchAdmins = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/admin/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setAdmins(response.data || []);
//         } catch (err) {
//             console.error('Error fetching admins:', err);
//         }
//     }, []);

//     const fetchVehicles = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setVehicles(response.data || []);
//         } catch (err) {
//             console.error('Error fetching vehicles:', err);
//         }
//     }, []);

//     const fetchBookings = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setAllBookings(response.data || []);
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//         }
//     }, []);

//     // FIXED: Make payments fetching optional with fallback
//     const fetchPayments = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/payment/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setPayments(response.data || []);
//         } catch (err) {
//             console.error('Payments endpoint not available:', err);
//             // Set empty array instead of failing
//             setPayments([]);
//             // Don't show error toast - this is expected if endpoint doesn't exist
//         }
//     }, []);

//     // FIXED: Make bank transfers fetching optional with fallback
//     const fetchBankTransfers = useCallback(async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setBankTransfers(response.data || []);
//         } catch (err) {
//             console.error('Bank transfers endpoint not available:', err);
//             // Set empty array instead of failing
//             setBankTransfers([]);
//             // Don't show error toast - this is expected if endpoint doesn't exist
//         }
//     }, []);

//     const generateRecentActivities = useCallback(() => {
//         const activities = [];
        
//         // Add recent bookings
//         allBookings.slice(0, 3).forEach(booking => {
//             activities.push({
//                 id: `booking-${booking.id}`,
//                 type: 'booking',
//                 title: `New Booking #BK${String(booking.id).padStart(4, '0')}`,
//                 description: `Booking created for customer #${booking.customerId}`,
//                 status: booking.bookingStatus,
//                 time: booking.createdAt || new Date().toISOString()
//             });
//         });

//         // Add recent payments (if any)
//         payments.slice(0, 2).forEach(payment => {
//             activities.push({
//                 id: `payment-${payment.id}`,
//                 type: 'payment',
//                 title: `Payment Received - ${formatCurrency(payment.amount)}`,
//                 description: `Payment for booking #BK${String(payment.bookingId).padStart(4, '0')}`,
//                 status: payment.paymentStatus,
//                 time: payment.paidAt || new Date().toISOString()
//             });
//         });

//         // Add recent bank transfers (if any)
//         bankTransfers.slice(0, 2).forEach(transfer => {
//             activities.push({
//                 id: `transfer-${transfer.id}`,
//                 type: 'transfer',
//                 title: `Bank Transfer #BT${String(transfer.id).padStart(4, '0')}`,
//                 description: `${transfer.bankName} - ${transfer.status}`,
//                 status: transfer.status,
//                 time: transfer.createdAt || new Date().toISOString()
//             });
//         });

//         // Sort by time (newest first)
//         activities.sort((a, b) => new Date(b.time) - new Date(a.time));
//         setRecentActivities(activities.slice(0, 10));
//     }, [allBookings, payments, bankTransfers]);

//     // Update stats whenever data changes
//     useEffect(() => {
//         const pendingAgents = agents.filter(a => a.status === 'PENDING').length;
//         const availableVehicles = vehicles.filter(v => v.status === 'AVAILABLE').length;
//         const maintenanceVehicles = vehicles.filter(v => v.status === 'MAINTENANCE').length;
//         const pendingBookings = allBookings.filter(b => b.bookingStatus === 'PENDING').length;
//         const confirmedBookings = allBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
//         const completedBookings = allBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
//         const cancelledBookings = allBookings.filter(b => b.bookingStatus === 'CANCELLED').length;
        
//         // Safely calculate payment stats
//         const pendingPayments = payments?.filter(p => p.paymentStatus === 'PENDING').length || 0;
//         const pendingTransfers = bankTransfers?.filter(t => t.status === 'Pending').length || 0;
        
//         const totalRevenue = payments?.filter(p => p.paymentStatus === 'PAID')
//             .reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

//         const today = new Date().toDateString();
//         const todayRevenue = payments?.filter(p => p.paymentStatus === 'PAID' && new Date(p.paidAt).toDateString() === today)
//             .reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

//         setStats({
//             totalAgents: agents.length,
//             pendingAgents,
//             totalCustomers: customers.length,
//             totalAdmins: admins.length,
//             totalVehicles: vehicles.length,
//             availableVehicles,
//             maintenanceVehicles,
//             totalBookings: allBookings.length,
//             pendingBookings,
//             confirmedBookings,
//             completedBookings,
//             cancelledBookings,
//             totalPayments: payments?.length || 0,
//             pendingPayments,
//             totalRevenue,
//             todayRevenue,
//             pendingTransfers
//         });

//         generateRecentActivities();
//     }, [agents, customers, admins, vehicles, allBookings, payments, bankTransfers, generateRecentActivities]);

//     const fetchAllData = useCallback(async () => {
//         setIsLoading(true);
//         setError('');
//         try {
//             // Use Promise.allSettled instead of Promise.all to prevent one failure from breaking everything
//             const results = await Promise.allSettled([
//                 fetchAdminData(),
//                 fetchAgents(),
//                 fetchCustomers(),
//                 fetchAdmins(),
//                 fetchVehicles(),
//                 fetchBookings(),
//                 fetchPayments(),
//                 fetchBankTransfers()
//             ]);

//             // Check if any critical requests failed
//             const criticalFailures = results.filter((result, index) => 
//                 result.status === 'rejected' && index < 6 // First 6 are critical
//             );

//             if (criticalFailures.length > 0) {
//                 console.warn('Some critical data failed to load');
//                 // Don't show error toast, just log it
//             }

//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setError('Failed to load some dashboard data');
//         } finally {
//             setIsLoading(false);
//         }
//     }, [fetchAdminData, fetchAgents, fetchCustomers, fetchAdmins, fetchVehicles, fetchBookings, fetchPayments, fetchBankTransfers]);

//     useEffect(() => {
//         const adminId = localStorage.getItem('adminId');
//         const adminToken = localStorage.getItem('adminToken');
        
//         if (!adminId || !adminToken) {
//             navigate('/admin/login');
//             return;
//         }

//         fetchAllData();
//     }, [navigate, fetchAllData]);

//     const handleLogout = () => {
//         localStorage.removeItem('adminToken');
//         localStorage.removeItem('adminId');
//         localStorage.removeItem('adminData');
//         if (showToast) showToast('Logged out successfully', 'info');
//     };

//     const formatCurrency = (amount) => {
//         return `Rs. ${amount?.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) || 0}`;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return 'N/A';
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     const getStatusColor = (status) => {
//         switch(status) {
//             case 'CONFIRMED':
//             case 'PAID':
//             case 'ACTIVE':
//             case 'AVAILABLE':
//             case 'Verified':
//                 return 'bg-green-100 text-green-800';
//             case 'PENDING':
//             case 'UNPAID':
//                 return 'bg-yellow-100 text-yellow-800';
//             case 'COMPLETED':
//                 return 'bg-blue-100 text-blue-800';
//             case 'CANCELLED':
//             case 'REJECTED':
//             case 'MAINTENANCE':
//                 return 'bg-red-100 text-red-800';
//             case 'UNPAID_CASH_PICKUP':
//                 return 'bg-orange-100 text-orange-800';
//             case 'CHECKING_BANK_TRANSFER':
//                 return 'bg-purple-100 text-purple-800';
//             default:
//                 return 'bg-gray-100 text-gray-800';
//         }
//     };

//     return {
//         adminData,
//         isLoading,
//         error,
//         stats,
//         agents,
//         customers,
//         admins,
//         vehicles,
//         allBookings,
//         payments,
//         bankTransfers,
//         recentActivities,
//         fetchAllData,
//         handleLogout,
//         formatCurrency,
//         formatDate,
//         getStatusColor
//     };
// };

// export default useAdminData;




// src/Pages/Admin/hooks/useAdminData.jsx
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAdminData = (navigate, showToast) => {
    const [adminData, setAdminData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [stats, setStats] = useState({
        totalAgents: 0,
        pendingAgents: 0,
        totalCustomers: 0,
        totalAdmins: 0,
        totalVehicles: 0,
        availableVehicles: 0,
        maintenanceVehicles: 0,
        totalBookings: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        completedBookings: 0,
        cancelledBookings: 0,
        totalPayments: 0,
        pendingPayments: 0,
        totalRevenue: 0,
        todayRevenue: 0,
        pendingTransfers: 0
    });
    
    const [agents, setAgents] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [allBookings, setAllBookings] = useState([]);
    const [payments, setPayments] = useState([]);
    const [bankTransfers, setBankTransfers] = useState([]);
    const [recentActivities, setRecentActivities] = useState([]);
    
    // Delete modal states
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [deleteItemType, setDeleteItemType] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const BASE_URL = 'http://localhost:8080';

    const fetchAdminData = useCallback(async () => {
        try {
            const adminId = localStorage.getItem('adminId');
            const token = localStorage.getItem('adminToken');
            
            if (!adminId || !token) {
                navigate('/admin/login');
                return null;
            }

            const response = await axios.get(`${BASE_URL}/api/v1/admin/${adminId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (response.status === 200) {
                setAdminData(response.data);
                localStorage.setItem('adminData', JSON.stringify(response.data));
                return response.data;
            }
        } catch (err) {
            console.error('Error fetching admin data:', err);
            if (err.response?.status === 401) {
                navigate('/admin/login');
            }
        }
        return null;
    }, [navigate]);

    const fetchAgents = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/agent/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAgents(response.data || []);
        } catch (err) {
            console.error('Error fetching agents:', err);
        }
    }, []);

    const fetchCustomers = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/customer/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setCustomers(response.data || []);
        } catch (err) {
            console.error('Error fetching customers:', err);
        }
    }, []);

    const fetchAdmins = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/admin/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAdmins(response.data || []);
        } catch (err) {
            console.error('Error fetching admins:', err);
        }
    }, []);

    const fetchVehicles = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setVehicles(response.data || []);
        } catch (err) {
            console.error('Error fetching vehicles:', err);
        }
    }, []);

    const fetchBookings = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAllBookings(response.data || []);
        } catch (err) {
            console.error('Error fetching bookings:', err);
        }
    }, []);

    const fetchPayments = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/payment/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setPayments(response.data || []);
        } catch (err) {
            console.error('Payments endpoint not available:', err);
            setPayments([]);
        }
    }, []);

    const fetchBankTransfers = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setBankTransfers(response.data || []);
        } catch (err) {
            console.error('Bank transfers endpoint not available:', err);
            setBankTransfers([]);
        }
    }, []);

    // NEW: Handle delete operations
    const openDeleteModal = (item, type) => {
        setItemToDelete(item);
        setDeleteItemType(type);
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        setItemToDelete(null);
        setDeleteItemType('');
    };

    const handleDelete = async () => {
        if (!itemToDelete || !deleteItemType) return;

        setIsDeleting(true);
        
        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                showToast('Authentication token not found. Please login again.', 'error');
                closeDeleteModal();
                return;
            }

            let endpoint = '';

            switch(deleteItemType) {
                case 'agents':
                    endpoint = `${BASE_URL}/api/v1/agent/delete/${itemToDelete.id}`;
                    break;
                case 'customers':
                    endpoint = `${BASE_URL}/api/v1/customer/delete/${itemToDelete.id}`;
                    break;
                case 'admins':
                    endpoint = `${BASE_URL}/api/v1/admin/delete/${itemToDelete.id}`;
                    break;
                case 'vehicles':
                    endpoint = `${BASE_URL}/api/v1/vehicle/delete/${itemToDelete.id}`;
                    break;
                case 'bookings':
                    endpoint = `${BASE_URL}/api/v1/booking/delete/${itemToDelete.id}`;
                    break;
                default:
                    showToast('Invalid item type', 'error');
                    closeDeleteModal();
                    return;
            }

            console.log('Deleting:', endpoint);
            
            await axios.delete(endpoint, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            // Show success message
            const itemName = deleteItemType.slice(0, -1);
            showToast(`${itemName.charAt(0).toUpperCase() + itemName.slice(1)} deleted successfully!`, 'success');
            
            // Close modal
            closeDeleteModal();
            
            // Refresh data based on type
            switch(deleteItemType) {
                case 'agents':
                    await fetchAgents();
                    break;
                case 'customers':
                    await fetchCustomers();
                    break;
                case 'admins':
                    await fetchAdmins();
                    break;
                case 'vehicles':
                    await fetchVehicles();
                    break;
                case 'bookings':
                    await fetchBookings();
                    break;
                default:
                    await fetchAllData();
            }
            
        } catch (err) {
            console.error('Error deleting:', err);
            
            let errorMessage = 'Failed to delete. Please try again.';
            
            if (err.response) {
                if (err.response.status === 401) {
                    errorMessage = 'Session expired. Please login again.';
                    setTimeout(() => navigate('/admin/login'), 2000);
                } else if (err.response.status === 404) {
                    errorMessage = 'Item not found. It may have been already deleted.';
                } else if (err.response.data?.message) {
                    errorMessage = err.response.data.message;
                } else if (err.response.data?.errorMessage) {
                    errorMessage = err.response.data.errorMessage;
                }
            }
            
            showToast(errorMessage, 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    const generateRecentActivities = useCallback(() => {
        const activities = [];
        
        allBookings.slice(0, 3).forEach(booking => {
            activities.push({
                id: `booking-${booking.id}`,
                type: 'booking',
                title: `New Booking #BK${String(booking.id).padStart(4, '0')}`,
                description: `Booking created for customer #${booking.customerId}`,
                status: booking.bookingStatus,
                time: booking.createdAt || new Date().toISOString()
            });
        });

        payments.slice(0, 2).forEach(payment => {
            activities.push({
                id: `payment-${payment.id}`,
                type: 'payment',
                title: `Payment Received - ${formatCurrency(payment.amount)}`,
                description: `Payment for booking #BK${String(payment.bookingId).padStart(4, '0')}`,
                status: payment.paymentStatus,
                time: payment.paidAt || new Date().toISOString()
            });
        });

        bankTransfers.slice(0, 2).forEach(transfer => {
            activities.push({
                id: `transfer-${transfer.id}`,
                type: 'transfer',
                title: `Bank Transfer #BT${String(transfer.id).padStart(4, '0')}`,
                description: `${transfer.bankName} - ${transfer.status}`,
                status: transfer.status,
                time: transfer.createdAt || new Date().toISOString()
            });
        });

        activities.sort((a, b) => new Date(b.time) - new Date(a.time));
        setRecentActivities(activities.slice(0, 10));
    }, [allBookings, payments, bankTransfers]);

    // Update stats whenever data changes
    useEffect(() => {
        const pendingAgents = agents.filter(a => a.status === 'PENDING').length;
        const availableVehicles = vehicles.filter(v => v.status === 'AVAILABLE').length;
        const maintenanceVehicles = vehicles.filter(v => v.status === 'MAINTENANCE').length;
        const pendingBookings = allBookings.filter(b => b.bookingStatus === 'PENDING').length;
        const confirmedBookings = allBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
        const completedBookings = allBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
        const cancelledBookings = allBookings.filter(b => b.bookingStatus === 'CANCELLED').length;
        
        const pendingPayments = payments?.filter(p => p.paymentStatus === 'PENDING').length || 0;
        const pendingTransfers = bankTransfers?.filter(t => t.status === 'Pending').length || 0;
        
        const totalRevenue = payments?.filter(p => p.paymentStatus === 'PAID')
            .reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

        const today = new Date().toDateString();
        const todayRevenue = payments?.filter(p => p.paymentStatus === 'PAID' && new Date(p.paidAt).toDateString() === today)
            .reduce((sum, p) => sum + (p.amount || 0), 0) || 0;

        setStats({
            totalAgents: agents.length,
            pendingAgents,
            totalCustomers: customers.length,
            totalAdmins: admins.length,
            totalVehicles: vehicles.length,
            availableVehicles,
            maintenanceVehicles,
            totalBookings: allBookings.length,
            pendingBookings,
            confirmedBookings,
            completedBookings,
            cancelledBookings,
            totalPayments: payments?.length || 0,
            pendingPayments,
            totalRevenue,
            todayRevenue,
            pendingTransfers
        });

        generateRecentActivities();
    }, [agents, customers, admins, vehicles, allBookings, payments, bankTransfers, generateRecentActivities]);

    const fetchAllData = useCallback(async () => {
        setIsLoading(true);
        setError('');
        try {
            await Promise.allSettled([
                fetchAdminData(),
                fetchAgents(),
                fetchCustomers(),
                fetchAdmins(),
                fetchVehicles(),
                fetchBookings(),
                fetchPayments(),
                fetchBankTransfers()
            ]);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load some dashboard data');
        } finally {
            setIsLoading(false);
        }
    }, [fetchAdminData, fetchAgents, fetchCustomers, fetchAdmins, fetchVehicles, fetchBookings, fetchPayments, fetchBankTransfers]);

    useEffect(() => {
        const adminId = localStorage.getItem('adminId');
        const adminToken = localStorage.getItem('adminToken');
        
        if (!adminId || !adminToken) {
            navigate('/admin/login');
            return;
        }

        fetchAllData();
    }, [navigate, fetchAllData]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminId');
        localStorage.removeItem('adminData');
        if (showToast) showToast('Logged out successfully', 'info');
    };

    const formatCurrency = (amount) => {
        return `Rs. ${amount?.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) || 0}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'CONFIRMED':
            case 'PAID':
            case 'ACTIVE':
            case 'AVAILABLE':
            case 'Verified':
                return 'bg-green-100 text-green-800';
            case 'PENDING':
            case 'UNPAID':
                return 'bg-yellow-100 text-yellow-800';
            case 'COMPLETED':
                return 'bg-blue-100 text-blue-800';
            case 'CANCELLED':
            case 'REJECTED':
            case 'MAINTENANCE':
                return 'bg-red-100 text-red-800';
            case 'UNPAID_CASH_PICKUP':
                return 'bg-orange-100 text-orange-800';
            case 'CHECKING_BANK_TRANSFER':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return {
        adminData,
        isLoading,
        error,
        stats,
        agents,
        customers,
        admins,
        vehicles,
        allBookings,
        payments,
        bankTransfers,
        recentActivities,
        fetchAllData,
        handleLogout,
        formatCurrency,
        formatDate,
        getStatusColor,
        
        // Delete modal states and functions
        showDeleteModal,
        itemToDelete,
        deleteItemType,
        isDeleting,
        openDeleteModal,
        closeDeleteModal,
        handleDelete
    };
};

export default useAdminData;