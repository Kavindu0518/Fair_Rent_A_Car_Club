// src/Pages/Admin/hooks/useAdminData.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAdminData = (navigate) => {
    const [adminData, setAdminData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // Data states
    const [agents, setAgents] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [allBookings, setAllBookings] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [bankTransfers, setBankTransfers] = useState([]);
    const [payments, setPayments] = useState([]);
    const [recentActivities, setRecentActivities] = useState([]);

    const BASE_URL = 'http://localhost:8080';

    const fetchAllData = useCallback(async () => {
        setIsLoading(true);
        setError('');
        
        try {
            const token = localStorage.getItem('adminToken');
            const adminId = localStorage.getItem('adminId');
            
            if (!token || !adminId) {
                throw new Error('Authentication required');
            }

            const headers = { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

            // Verify admin
            try {
                const adminResponse = await axios.get(`${BASE_URL}/api/v1/admin/${adminId}`, { headers });
                setAdminData(adminResponse.data);
                localStorage.setItem('adminData', JSON.stringify(adminResponse.data));
            } catch (adminErr) {
                if (adminErr.response?.status === 401 || adminErr.response?.status === 403) {
                    localStorage.clear();
                    navigate('/admin/login');
                    return;
                }
            }

            // Fetch all data
            const [agentsRes, customersRes, vehiclesRes, bookingsRes, adminsRes, transfersRes, paymentsRes] = await Promise.all([
                axios.get(`${BASE_URL}/api/v1/agent/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/customer/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/booking/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/admin/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/banktransfer/getAll`, { headers }).catch(() => ({ data: [] })),
                axios.get(`${BASE_URL}/api/v1/payment/getAll`, { headers }).catch(() => ({ data: [] }))
            ]);

            setAgents(agentsRes.data || []);
            setCustomers(customersRes.data || []);
            setVehicles(vehiclesRes.data || []);
            setAllBookings(bookingsRes.data || []);
            setAdmins(adminsRes.data || []);
            setBankTransfers(transfersRes.data || []);
            setPayments(paymentsRes.data || []);

            // Generate recent activities
            generateRecentActivities(bookingsRes.data || [], paymentsRes.data || [], transfersRes.data || []);

        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load dashboard data');
        } finally {
            setIsLoading(false);
        }
    }, [navigate]);

    const generateRecentActivities = (bookings, payments, transfers) => {
        const activities = [];
        
        bookings.slice(0, 5).forEach(booking => {
            activities.push({
                id: `booking-${booking.id}`,
                type: 'booking',
                title: `New Booking #BK${String(booking.id).padStart(4, '0')}`,
                description: `Booking created by Customer #${booking.customerId}`,
                time: new Date(booking.createdAt || Date.now()),
                status: booking.bookingStatus
            });
        });

        payments.slice(0, 5).forEach(payment => {
            activities.push({
                id: `payment-${payment.id}`,
                type: 'payment',
                title: `Payment of ${formatCurrency(payment.amount)}`,
                description: `Payment for Booking #BK${String(payment.bookingId).padStart(4, '0')}`,
                time: new Date(payment.paidAt || Date.now()),
                status: payment.paymentStatus
            });
        });

        transfers.slice(0, 5).forEach(transfer => {
            activities.push({
                id: `transfer-${transfer.id}`,
                type: 'transfer',
                title: `Bank Transfer #BT${String(transfer.id).padStart(4, '0')}`,
                description: `${transfer.bankName} - ${transfer.status}`,
                time: new Date(transfer.createdAt || Date.now()),
                status: transfer.status
            });
        });

        activities.sort((a, b) => b.time - a.time);
        setRecentActivities(activities.slice(0, 10));
    };

    const handleLogout = () => {
        localStorage.clear();
    };

    // Statistics calculations
    const stats = {
        totalAgents: agents.length,
        pendingAgents: agents.filter(a => a.status === 'PENDING').length,
        newAgentsToday: agents.filter(a => {
            const today = new Date().toDateString();
            const agentDate = new Date(a.createdAt || Date.now()).toDateString();
            return agentDate === today;
        }).length,
        
        totalCustomers: customers.length,
        newCustomersToday: customers.filter(c => {
            const today = new Date().toDateString();
            const customerDate = new Date(c.createdAt || Date.now()).toDateString();
            return customerDate === today;
        }).length,
        
        totalAdmins: admins.length,
        
        totalVehicles: vehicles.length,
        availableVehicles: vehicles.filter(v => v.status === 'AVAILABLE').length,
        bookedVehicles: vehicles.filter(v => v.status === 'BOOKED').length,
        maintenanceVehicles: vehicles.filter(v => v.status === 'MAINTENANCE').length,
        
        totalBookings: allBookings.length,
        pendingBookings: allBookings.filter(b => b.bookingStatus === 'PENDING').length,
        confirmedBookings: allBookings.filter(b => b.bookingStatus === 'CONFIRMED').length,
        completedBookings: allBookings.filter(b => b.bookingStatus === 'COMPLETED').length,
        cancelledBookings: allBookings.filter(b => b.bookingStatus === 'CANCELLED').length,
        todayPickups: allBookings.filter(b => {
            const today = new Date().toDateString();
            const pickupDate = new Date(b.pickupDate).toDateString();
            return pickupDate === today && b.bookingStatus !== 'CANCELLED';
        }).length,
        
        totalPayments: payments.length,
        paidPayments: payments.filter(p => p.paymentStatus === 'PAID').length,
        pendingPayments: payments.filter(p => p.paymentStatus === 'PENDING').length,
        totalRevenue: payments.filter(p => p.paymentStatus === 'PAID').reduce((sum, p) => sum + (p.amount || 0), 0),
        todayRevenue: payments.filter(p => {
            const today = new Date().toDateString();
            const paidDate = new Date(p.paidAt || Date.now()).toDateString();
            return paidDate === today && p.paymentStatus === 'PAID';
        }).reduce((sum, p) => sum + (p.amount || 0), 0),
        
        pendingTransfers: bankTransfers.filter(t => t.status === 'Pending').length,
        verifiedTransfers: bankTransfers.filter(t => t.status === 'Verified').length,
    };

    // Utility functions
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
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'CONFIRMED': return 'bg-green-100 text-green-800';
            case 'PENDING': return 'bg-yellow-100 text-yellow-800';
            case 'COMPLETED': return 'bg-blue-100 text-blue-800';
            case 'CANCELLED': return 'bg-red-100 text-red-800';
            case 'Verified': return 'bg-green-100 text-green-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            case 'PAID': return 'bg-green-100 text-green-800';
            case 'UNPAID': return 'bg-red-100 text-red-800';
            case 'ACTIVE': return 'bg-green-100 text-green-800';
            case 'PENDING_APPROVAL': return 'bg-yellow-100 text-yellow-800';
            case 'AVAILABLE': return 'bg-green-100 text-green-800';
            case 'BOOKED': return 'bg-yellow-100 text-yellow-800';
            case 'MAINTENANCE': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

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
        getStatusColor
    };
};

export default useAdminData;