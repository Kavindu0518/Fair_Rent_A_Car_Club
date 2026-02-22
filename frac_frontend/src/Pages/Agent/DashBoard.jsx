// // // // // import React, { useState, useEffect } from 'react';
// // // // // // Remove unused axios import

// // // // // const AgentDashboard = () => {
// // // // //     const [agentData, setAgentData] = useState(null);
// // // // //     const [isLoading, setIsLoading] = useState(true);
// // // // //     const [error, setError] = useState('');
// // // // //     const [activeTab, setActiveTab] = useState('overview');
// // // // //     const [stats, setStats] = useState({
// // // // //         totalVehicles: 0,
// // // // //         activeBookings: 0,
// // // // //         totalEarnings: 0,
// // // // //         completedTrips: 0
// // // // //     });

// // // // //     // Mock data for demonstration (replace with actual API calls)
// // // // //     const recentBookings = [
// // // // //         { id: 1, customer: 'John Doe', vehicle: 'Toyota Vios', pickupDate: '2026-02-20', returnDate: '2026-02-25', status: 'Confirmed', total: 'Rs. 25,000' },
// // // // //         { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', pickupDate: '2026-02-21', returnDate: '2026-02-23', status: 'Pending', total: 'Rs. 18,000' },
// // // // //         { id: 3, customer: 'Mike Johnson', vehicle: 'Suzuki Swift', pickupDate: '2026-02-22', returnDate: '2026-02-24', status: 'Completed', total: 'Rs. 15,000' },
// // // // //         { id: 4, customer: 'Sarah Williams', vehicle: 'Nissan Sunny', pickupDate: '2026-02-23', returnDate: '2026-02-26', status: 'Confirmed', total: 'Rs. 22,000' },
// // // // //     ];

// // // // //     const vehicles = [
// // // // //         { id: 1, model: 'Toyota Vios', regNo: 'ABC-1234', status: 'Available', bookings: 45, image: null },
// // // // //         { id: 2, model: 'Honda Civic', regNo: 'DEF-5678', status: 'Booked', bookings: 32, image: null },
// // // // //         { id: 3, model: 'Suzuki Swift', regNo: 'GHI-9012', status: 'Maintenance', bookings: 28, image: null },
// // // // //         { id: 4, model: 'Nissan Sunny', regNo: 'JKL-3456', status: 'Available', bookings: 51, image: null },
// // // // //     ];

// // // // //     // Mock earnings data for chart (fixed values instead of random)
// // // // //     const earningsData = [
// // // // //         { month: 'Sep', amount: 75000 },
// // // // //         { month: 'Oct', amount: 82000 },
// // // // //         { month: 'Nov', amount: 95000 },
// // // // //         { month: 'Dec', amount: 110000 },
// // // // //         { month: 'Jan', amount: 98000 },
// // // // //         { month: 'Feb', amount: 125000 }
// // // // //     ];

// // // // //     // Find max amount for chart scaling
// // // // //     const maxEarnings = Math.max(...earningsData.map(item => item.amount));

// // // // //     useEffect(() => {
// // // // //         // Get agent data from localStorage or API
// // // // //         const fetchAgentData = async () => {
// // // // //             try {
// // // // //                 // For demo, using mock data - replace with actual API call
// // // // //                 // const response = await axios.get('http://localhost:8080/api/v1/agent/profile', {
// // // // //                 //     headers: { Authorization: `Bearer ${token}` }
// // // // //                 // });
                
// // // // //                 // Mock data
// // // // //                 const mockAgentData = {
// // // // //                     id: 1,
// // // // //                     companyName: 'ABC Travel & Tours',
// // // // //                     tagline: 'Your Trusted Travel Partner',
// // // // //                     email: 'info@abctravel.com',
// // // // //                     contactNo: '+94 77 123 4567',
// // // // //                     businessRegNo: 'BR123456789',
// // // // //                     operatingSince: '2010',
// // // // //                     tourismApproved: 'Yes',
// // // // //                     insuranceType: 'Full Comprehensive Coverage',
// // // // //                     serviceAreas: 'Colombo, Kandy, Galle, Negombo',
// // // // //                     userName: 'abc_agent',
// // // // //                     profileImage: null,
// // // // //                     rating: 4.5,
// // // // //                     memberSince: '2024',
// // // // //                     totalReviews: 128
// // // // //                 };
                
// // // // //                 setAgentData(mockAgentData);
                
// // // // //                 // Set stats
// // // // //                 setStats({
// // // // //                     totalVehicles: 12,
// // // // //                     activeBookings: 8,
// // // // //                     totalEarnings: 456000,
// // // // //                     completedTrips: 156
// // // // //                 });
                
// // // // //                 setIsLoading(false);
// // // // //             } catch {
// // // // //                 // Error handled without using 'err' variable
// // // // //                 setError('Failed to load agent data');
// // // // //                 setIsLoading(false);
// // // // //             }
// // // // //         };

// // // // //         fetchAgentData();
// // // // //     }, []);

// // // // //     const getStatusColor = (status) => {
// // // // //         switch(status) {
// // // // //             case 'Confirmed': return 'bg-green-100 text-green-800';
// // // // //             case 'Pending': return 'bg-yellow-100 text-yellow-800';
// // // // //             case 'Completed': return 'bg-blue-100 text-blue-800';
// // // // //             case 'Available': return 'bg-green-100 text-green-800';
// // // // //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// // // // //             case 'Maintenance': return 'bg-red-100 text-red-800';
// // // // //             default: return 'bg-gray-100 text-gray-800';
// // // // //         }
// // // // //     };

// // // // //     const formatCurrency = (amount) => {
// // // // //         return `Rs. ${amount.toLocaleString()}`;
// // // // //     };

// // // // //     const getRatingStars = (rating) => {
// // // // //         return [...Array(5)].map((_, index) => (
// // // // //             <svg 
// // // // //                 key={index} 
// // // // //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// // // // //                 fill="currentColor" 
// // // // //                 viewBox="0 0 20 20"
// // // // //             >
// // // // //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // // //             </svg>
// // // // //         ));
// // // // //     };

// // // // //     if (isLoading) {
// // // // //         return (
// // // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // // //                 <div className="text-center">
// // // // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // // // //                     <p className="text-gray-600">Loading your dashboard...</p>
// // // // //                 </div>
// // // // //             </div>
// // // // //         );
// // // // //     }

// // // // //     if (error) {
// // // // //         return (
// // // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// // // // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// // // // //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // // //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // //                         </svg>
// // // // //                     </div>
// // // // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// // // // //                     <p className="text-gray-600 mb-6">{error}</p>
// // // // //                     <button 
// // // // //                         onClick={() => window.location.reload()}
// // // // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // // //                     >
// // // // //                         Try Again
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         );
// // // // //     }

// // // // //     return (
// // // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // // //             {/* Header */}
// // // // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // // // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // // // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // // // //                         <div className="flex items-center mb-4 md:mb-0">
// // // // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // // // //                             <div>
// // // // //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// // // // //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                         <div className="flex gap-4">
// // // // //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// // // // //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // // //                                 </svg>
// // // // //                                 Notifications
// // // // //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
// // // // //                             </button>
// // // // //                             <a href="/agent/profile" className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
// // // // //                                 My Profile
// // // // //                             </a>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* Main Content */}
// // // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // // //                 {/* Quick Stats */}
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                         <div className="flex items-center">
// // // // //                             <div className="p-3 bg-teal-100 rounded-lg">
// // // // //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // // //                                 </svg>
// // // // //                             </div>
// // // // //                             <div className="ml-4">
// // // // //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// // // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // // //                                 <p className="text-xs text-green-600">+2 this month</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>

// // // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                         <div className="flex items-center">
// // // // //                             <div className="p-3 bg-blue-100 rounded-lg">
// // // // //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // //                                 </svg>
// // // // //                             </div>
// // // // //                             <div className="ml-4">
// // // // //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// // // // //                                 <p className="text-xs text-blue-600">Next 3 days</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>

// // // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                         <div className="flex items-center">
// // // // //                             <div className="p-3 bg-green-100 rounded-lg">
// // // // //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // //                                 </svg>
// // // // //                             </div>
// // // // //                             <div className="ml-4">
// // // // //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// // // // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// // // // //                                 <p className="text-xs text-green-600">+15% from last month</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>

// // // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                         <div className="flex items-center">
// // // // //                             <div className="p-3 bg-purple-100 rounded-lg">
// // // // //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // //                                 </svg>
// // // // //                             </div>
// // // // //                             <div className="ml-4">
// // // // //                                 <p className="text-sm text-gray-600">Completed Trips</p>
// // // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.completedTrips}</p>
// // // // //                                 <p className="text-xs text-purple-600">All time</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Navigation Tabs */}
// // // // //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// // // // //                     <div className="border-b border-gray-200">
// // // // //                         <nav className="flex -mb-px">
// // // // //                             <button
// // // // //                                 onClick={() => setActiveTab('overview')}
// // // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // // //                                     activeTab === 'overview'
// // // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // // //                                 }`}
// // // // //                             >
// // // // //                                 Overview
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 onClick={() => setActiveTab('bookings')}
// // // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // // //                                     activeTab === 'bookings'
// // // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // // //                                 }`}
// // // // //                             >
// // // // //                                 Bookings
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 onClick={() => setActiveTab('vehicles')}
// // // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // // //                                     activeTab === 'vehicles'
// // // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // // //                                 }`}
// // // // //                             >
// // // // //                                 My Vehicles
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 onClick={() => setActiveTab('earnings')}
// // // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // // //                                     activeTab === 'earnings'
// // // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // // //                                 }`}
// // // // //                             >
// // // // //                                 Earnings
// // // // //                             </button>
// // // // //                         </nav>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Tab Content */}
// // // // //                 <div className="space-y-6">
// // // // //                     {/* Overview Tab */}
// // // // //                     {activeTab === 'overview' && (
// // // // //                         <>
// // // // //                             {/* Profile Summary */}
// // // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// // // // //                                 <div className="flex flex-col md:flex-row gap-6">
// // // // //                                     <div className="flex-1">
// // // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Company Name</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// // // // //                                             </div>
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Tagline</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// // // // //                                             </div>
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Email</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// // // // //                                             </div>
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// // // // //                                             </div>
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// // // // //                                             </div>
// // // // //                                             <div>
// // // // //                                                 <p className="text-sm text-gray-600">Member Since</p>
// // // // //                                                 <p className="font-semibold text-gray-800">{agentData?.memberSince}</p>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                     <div className="md:w-64">
// // // // //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// // // // //                                             <div className="text-3xl font-bold text-teal-600 mb-1">{agentData?.rating}</div>
// // // // //                                             <div className="flex justify-center mb-2">
// // // // //                                                 {getRatingStars(agentData?.rating || 0)}
// // // // //                                             </div>
// // // // //                                             <p className="text-sm text-gray-600">Based on {agentData?.totalReviews} reviews</p>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                             </div>

// // // // //                             {/* Recent Bookings */}
// // // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                                 <div className="flex justify-between items-center mb-4">
// // // // //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// // // // //                                     <button 
// // // // //                                         onClick={() => setActiveTab('bookings')}
// // // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // // //                                     >
// // // // //                                         View All →
// // // // //                                     </button>
// // // // //                                 </div>
// // // // //                                 <div className="overflow-x-auto">
// // // // //                                     <table className="min-w-full">
// // // // //                                         <thead>
// // // // //                                             <tr className="border-b border-gray-200">
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Return</th>
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // // //                                             </tr>
// // // // //                                         </thead>
// // // // //                                         <tbody>
// // // // //                                             {recentBookings.slice(0, 3).map((booking) => (
// // // // //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // // //                                                     <td className="py-3">
// // // // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // // //                                                             {booking.status}
// // // // //                                                         </span>
// // // // //                                                     </td>
// // // // //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{booking.total}</td>
// // // // //                                                 </tr>
// // // // //                                             ))}
// // // // //                                         </tbody>
// // // // //                                     </table>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </>
// // // // //                     )}

// // // // //                     {/* Bookings Tab */}
// // // // //                     {activeTab === 'bookings' && (
// // // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                             <div className="flex justify-between items-center mb-6">
// // // // //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // // // //                                 <div className="flex gap-2">
// // // // //                                     <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
// // // // //                                         <option>All Status</option>
// // // // //                                         <option>Confirmed</option>
// // // // //                                         <option>Pending</option>
// // // // //                                         <option>Completed</option>
// // // // //                                     </select>
// // // // //                                     <input 
// // // // //                                         type="text" 
// // // // //                                         placeholder="Search bookings..." 
// // // // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // // //                                     />
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <div className="overflow-x-auto">
// // // // //                                 <table className="min-w-full">
// // // // //                                     <thead>
// // // // //                                         <tr className="border-b border-gray-200">
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Return Date</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // // //                                         </tr>
// // // // //                                     </thead>
// // // // //                                     <tbody>
// // // // //                                         {recentBookings.map((booking) => (
// // // // //                                             <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // // //                                                 <td className="py-3 text-sm text-gray-800">#BK{booking.id}234</td>
// // // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // // //                                                 <td className="py-3">
// // // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // // //                                                         {booking.status}
// // // // //                                                     </span>
// // // // //                                                 </td>
// // // // //                                                 <td className="py-3 text-sm font-semibold text-gray-800">{booking.total}</td>
// // // // //                                                 <td className="py-3">
// // // // //                                                     <button className="text-teal-600 hover:text-teal-800 mr-2">View</button>
// // // // //                                                     <button className="text-blue-600 hover:text-blue-800">Update</button>
// // // // //                                                 </td>
// // // // //                                             </tr>
// // // // //                                         ))}
// // // // //                                     </tbody>
// // // // //                                 </table>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}

// // // // //                     {/* Vehicles Tab */}
// // // // //                     {activeTab === 'vehicles' && (
// // // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                             <div className="flex justify-between items-center mb-6">
// // // // //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// // // // //                                 <a 
// // // // //                                     href="/vehicle/register" 
// // // // //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // // //                                 >
// // // // //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                                     </svg>
// // // // //                                     Add New Vehicle
// // // // //                                 </a>
// // // // //                             </div>
// // // // //                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //                                 {vehicles.map((vehicle) => (
// // // // //                                     <div key={vehicle.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition duration-200">
// // // // //                                         <div className="flex items-center justify-between mb-4">
// // // // //                                             <h3 className="font-semibold text-gray-800">{vehicle.model}</h3>
// // // // //                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status)}`}>
// // // // //                                                 {vehicle.status}
// // // // //                                             </span>
// // // // //                                         </div>
// // // // //                                         <p className="text-sm text-gray-600 mb-2">Reg No: {vehicle.regNo}</p>
// // // // //                                         <p className="text-sm text-gray-600 mb-4">Total Bookings: {vehicle.bookings}</p>
// // // // //                                         <div className="flex gap-2">
// // // // //                                             <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700">
// // // // //                                                 Edit
// // // // //                                             </button>
// // // // //                                             <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// // // // //                                                 View Details
// // // // //                                             </button>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 ))}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}

// // // // //                     {/* Earnings Tab */}
// // // // //                     {activeTab === 'earnings' && (
// // // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // // //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// // // // //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// // // // //                                     <p className="text-sm mb-2">This Month</p>
// // // // //                                     <p className="text-3xl font-bold">{formatCurrency(125000)}</p>
// // // // //                                     <p className="text-xs mt-2">↑ 12% from last month</p>
// // // // //                                 </div>
// // // // //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// // // // //                                     <p className="text-sm mb-2">Last Month</p>
// // // // //                                     <p className="text-3xl font-bold">{formatCurrency(98000)}</p>
// // // // //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// // // // //                                 </div>
// // // // //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// // // // //                                     <p className="text-sm mb-2">Average per Booking</p>
// // // // //                                     <p className="text-3xl font-bold">{formatCurrency(2500)}</p>
// // // // //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// // // // //                                 </div>
// // // // //                             </div>

// // // // //                             {/* Earnings Chart */}
// // // // //                             <div className="bg-gray-50 rounded-xl p-6">
// // // // //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
// // // // //                                 <div className="h-48 flex items-end justify-between gap-2">
// // // // //                                     {earningsData.map((item) => {
// // // // //                                         const barHeight = (item.amount / maxEarnings) * 100;
// // // // //                                         return (
// // // // //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// // // // //                                                 <div 
// // // // //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// // // // //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// // // // //                                                 >
// // // // //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// // // // //                                                         {formatCurrency(item.amount)}
// // // // //                                                     </div>
// // // // //                                                 </div>
// // // // //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// // // // //                                             </div>
// // // // //                                         );
// // // // //                                     })}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* Quick Actions */}
// // // // //             <div className="fixed bottom-6 right-6">
// // // // //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// // // // //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                     </svg>
// // // // //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// // // // //                         Quick Actions
// // // // //                     </span>
// // // // //                 </button>
// // // // //             </div>

// // // // //             {/* Footer */}
// // // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// // // // //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// // // // //                 <p className="mt-1">Agent Portal v1.0</p>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AgentDashboard;



// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const AgentDashboard = () => {
// // // //     const navigate = useNavigate();
// // // //     const [agentData, setAgentData] = useState(null);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [error, setError] = useState('');
// // // //     const [activeTab, setActiveTab] = useState('overview');
// // // //     const [stats, setStats] = useState({
// // // //         totalVehicles: 0,
// // // //         activeBookings: 0,
// // // //         totalEarnings: 0,
// // // //         completedTrips: 0
// // // //     });
// // // //     const [recentBookings, setRecentBookings] = useState([]);
// // // //     const [vehicles, setVehicles] = useState([]);
// // // //     const [earningsData, setEarningsData] = useState([]);

// // // //     const BASE_URL = 'http://localhost:8080';

// // // //     useEffect(() => {
// // // //         // Check if user is logged in
// // // //         const agentId = localStorage.getItem('agentId');
// // // //         const agentToken = localStorage.getItem('agentToken');
        
// // // //         if (!agentId || !agentToken) {
// // // //             navigate('/agent/login');
// // // //             return;
// // // //         }

// // // //         fetchAgentData();
// // // //         fetchAgentVehicles();
// // // //         fetchAgentBookings();
// // // //         fetchAgentEarnings();
// // // //     }, [navigate]);

// // // //     const fetchAgentData = async () => {
// // // //         try {
// // // //             const agentId = localStorage.getItem('agentId');
// // // //             const storedAgentData = localStorage.getItem('agentData');
            
// // // //             if (storedAgentData) {
// // // //                 setAgentData(JSON.parse(storedAgentData));
// // // //             }

// // // //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 const freshData = response.data;
// // // //                 setAgentData(freshData);
// // // //                 localStorage.setItem('agentData', JSON.stringify(freshData));
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching agent data:', err);
// // // //             setError('Failed to load agent data');
// // // //         }
// // // //     };

// // // //     const fetchAgentVehicles = async () => {
// // // //         try {
// // // //             // Mock data - replace with actual API call
// // // //             const mockVehicles = [
// // // //                 { id: 1, model: 'Toyota Vios', regNo: 'ABC-1234', status: 'Available', bookings: 45, image: null },
// // // //                 { id: 2, model: 'Honda Civic', regNo: 'DEF-5678', status: 'Booked', bookings: 32, image: null },
// // // //                 { id: 3, model: 'Suzuki Swift', regNo: 'GHI-9012', status: 'Maintenance', bookings: 28, image: null },
// // // //                 { id: 4, model: 'Nissan Sunny', regNo: 'JKL-3456', status: 'Available', bookings: 51, image: null },
// // // //             ];
            
// // // //             setVehicles(mockVehicles);
// // // //             setStats(prev => ({ ...prev, totalVehicles: mockVehicles.length }));
// // // //         } catch (err) {
// // // //             console.error('Error fetching vehicles:', err);
// // // //         }
// // // //     };

// // // //     const fetchAgentBookings = async () => {
// // // //         try {
// // // //             // Mock data - replace with actual API call
// // // //             const mockBookings = [
// // // //                 { id: 1, customer: 'John Doe', vehicle: 'Toyota Vios', pickupDate: '2026-02-20', returnDate: '2026-02-25', status: 'Confirmed', total: 25000 },
// // // //                 { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', pickupDate: '2026-02-21', returnDate: '2026-02-23', status: 'Pending', total: 18000 },
// // // //                 { id: 3, customer: 'Mike Johnson', vehicle: 'Suzuki Swift', pickupDate: '2026-02-22', returnDate: '2026-02-24', status: 'Completed', total: 15000 },
// // // //                 { id: 4, customer: 'Sarah Williams', vehicle: 'Nissan Sunny', pickupDate: '2026-02-23', returnDate: '2026-02-26', status: 'Confirmed', total: 22000 },
// // // //             ];
            
// // // //             setRecentBookings(mockBookings);
            
// // // //             const active = mockBookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending').length;
// // // //             const completed = mockBookings.filter(b => b.status === 'Completed').length;
// // // //             const total = mockBookings.reduce((sum, b) => sum + b.total, 0);
            
// // // //             setStats(prev => ({
// // // //                 ...prev,
// // // //                 activeBookings: active,
// // // //                 completedTrips: completed,
// // // //                 totalEarnings: total
// // // //             }));
// // // //         } catch (err) {
// // // //             console.error('Error fetching bookings:', err);
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchAgentEarnings = async () => {
// // // //         try {
// // // //             // Mock earnings data
// // // //             const mockEarnings = [
// // // //                 { month: 'Sep', amount: 75000 },
// // // //                 { month: 'Oct', amount: 82000 },
// // // //                 { month: 'Nov', amount: 95000 },
// // // //                 { month: 'Dec', amount: 110000 },
// // // //                 { month: 'Jan', amount: 98000 },
// // // //                 { month: 'Feb', amount: 125000 }
// // // //             ];
// // // //             setEarningsData(mockEarnings);
// // // //         } catch (err) {
// // // //             console.error('Error fetching earnings:', err);
// // // //         }
// // // //     };

// // // //     const handleLogout = () => {
// // // //         localStorage.removeItem('agentToken');
// // // //         localStorage.removeItem('agentId');
// // // //         localStorage.removeItem('agentCompanyName');
// // // //         localStorage.removeItem('agentEmail');
// // // //         localStorage.removeItem('agentData');
// // // //         navigate('/agent/login');
// // // //     };

// // // //     const getStatusColor = (status) => {
// // // //         switch(status) {
// // // //             case 'Confirmed': return 'bg-green-100 text-green-800';
// // // //             case 'Pending': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Completed': return 'bg-blue-100 text-blue-800';
// // // //             case 'Available': return 'bg-green-100 text-green-800';
// // // //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Maintenance': return 'bg-red-100 text-red-800';
// // // //             default: return 'bg-gray-100 text-gray-800';
// // // //         }
// // // //     };

// // // //     const formatCurrency = (amount) => {
// // // //         return `Rs. ${amount.toLocaleString()}`;
// // // //     };

// // // //     const getRatingStars = (rating) => {
// // // //         return [...Array(5)].map((_, index) => (
// // // //             <svg 
// // // //                 key={index} 
// // // //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// // // //                 fill="currentColor" 
// // // //                 viewBox="0 0 20 20"
// // // //             >
// // // //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // //             </svg>
// // // //         ));
// // // //     };

// // // //     const maxEarnings = Math.max(...earningsData.map(item => item.amount));

// // // //     if (isLoading) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // //                 <div className="text-center">
// // // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // // //                     <p className="text-gray-600">Loading your dashboard...</p>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (error) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// // // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// // // //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                         </svg>
// // // //                     </div>
// // // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// // // //                     <p className="text-gray-600 mb-6">{error}</p>
// // // //                     <button 
// // // //                         onClick={handleLogout}
// // // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                     >
// // // //                         Back to Login
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // //             {/* Header */}
// // // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // // //                         <div className="flex items-center mb-4 md:mb-0">
// // // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // // //                             <div>
// // // //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// // // //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="flex gap-4">
// // // //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// // // //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // //                                 </svg>
// // // //                                 Notifications
// // // //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
// // // //                             </button>
// // // //                             <button 
// // // //                                 onClick={handleLogout}
// // // //                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
// // // //                             >
// // // //                                 Logout
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Main Content */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // //                 {/* Quick Stats */}
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-teal-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // //                                 <p className="text-xs text-green-600">+2 this month</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-blue-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// // // //                                 <p className="text-xs text-blue-600">Next 3 days</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-green-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// // // //                                 <p className="text-xs text-green-600">+15% from last month</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-purple-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Completed Trips</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.completedTrips}</p>
// // // //                                 <p className="text-xs text-purple-600">All time</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Navigation Tabs */}
// // // //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// // // //                     <div className="border-b border-gray-200">
// // // //                         <nav className="flex -mb-px">
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('overview')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'overview'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Overview
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('bookings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'bookings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Bookings
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('vehicles')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'vehicles'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 My Vehicles
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('earnings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'earnings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Earnings
// // // //                             </button>
// // // //                         </nav>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Tab Content */}
// // // //                 <div className="space-y-6">
// // // //                     {/* Overview Tab */}
// // // //                     {activeTab === 'overview' && (
// // // //                         <>
// // // //                             {/* Profile Summary */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// // // //                                 <div className="flex flex-col md:flex-row gap-6">
// // // //                                     <div className="flex-1">
// // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Company Name</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Tagline</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Email</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Member Since</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="md:w-64">
// // // //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// // // //                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
// // // //                                             <div className="flex justify-center mb-2">
// // // //                                                 {getRatingStars(4.5)}
// // // //                                             </div>
// // // //                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Recent Bookings */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <div className="flex justify-between items-center mb-4">
// // // //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// // // //                                     <button 
// // // //                                         onClick={() => setActiveTab('bookings')}
// // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // //                                     >
// // // //                                         View All →
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="overflow-x-auto">
// // // //                                     <table className="min-w-full">
// // // //                                         <thead>
// // // //                                             <tr className="border-b border-gray-200">
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Return</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             </tr>
// // // //                                         </thead>
// // // //                                         <tbody>
// // // //                                             {recentBookings.slice(0, 3).map((booking) => (
// // // //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                     <td className="py-3">
// // // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                             {booking.status}
// // // //                                                         </span>
// // // //                                                     </td>
// // // //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 </tr>
// // // //                                             ))}
// // // //                                         </tbody>
// // // //                                     </table>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </>
// // // //                     )}

// // // //                     {/* Bookings Tab */}
// // // //                     {activeTab === 'bookings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // // //                                 <div className="flex gap-2">
// // // //                                     <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
// // // //                                         <option>All Status</option>
// // // //                                         <option>Confirmed</option>
// // // //                                         <option>Pending</option>
// // // //                                         <option>Completed</option>
// // // //                                     </select>
// // // //                                     <input 
// // // //                                         type="text" 
// // // //                                         placeholder="Search bookings..." 
// // // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     />
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full">
// // // //                                     <thead>
// // // //                                         <tr className="border-b border-gray-200">
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Return Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody>
// // // //                                         {recentBookings.map((booking) => (
// // // //                                             <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                 <td className="py-3 text-sm text-gray-800">#BK{booking.id}234</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                         {booking.status}
// // // //                                                     </span>
// // // //                                                 </td>
// // // //                                                 <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <button className="text-teal-600 hover:text-teal-800 mr-2">View</button>
// // // //                                                     <button className="text-blue-600 hover:text-blue-800">Update</button>
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Vehicles Tab */}
// // // //                     {activeTab === 'vehicles' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// // // //                                 <a 
// // // //                                     href="/vehicle/register" 
// // // //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // //                                 >
// // // //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                                     </svg>
// // // //                                     Add New Vehicle
// // // //                                 </a>
// // // //                             </div>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                                 {vehicles.map((vehicle) => (
// // // //                                     <div key={vehicle.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition duration-200">
// // // //                                         <div className="flex items-center justify-between mb-4">
// // // //                                             <h3 className="font-semibold text-gray-800">{vehicle.model}</h3>
// // // //                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status)}`}>
// // // //                                                 {vehicle.status}
// // // //                                             </span>
// // // //                                         </div>
// // // //                                         <p className="text-sm text-gray-600 mb-2">Reg No: {vehicle.regNo}</p>
// // // //                                         <p className="text-sm text-gray-600 mb-4">Total Bookings: {vehicle.bookings}</p>
// // // //                                         <div className="flex gap-2">
// // // //                                             <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700">
// // // //                                                 Edit
// // // //                                             </button>
// // // //                                             <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// // // //                                                 View Details
// // // //                                             </button>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 ))}
// // // //                             </div>
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Earnings Tab */}
// // // //                     {activeTab === 'earnings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">This Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(125000)}</p>
// // // //                                     <p className="text-xs mt-2">↑ 12% from last month</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Last Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(98000)}</p>
// // // //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Average per Booking</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(2500)}</p>
// // // //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Earnings Chart */}
// // // //                             <div className="bg-gray-50 rounded-xl p-6">
// // // //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
// // // //                                 <div className="h-48 flex items-end justify-between gap-2">
// // // //                                     {earningsData.map((item) => {
// // // //                                         const barHeight = (item.amount / maxEarnings) * 100;
// // // //                                         return (
// // // //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// // // //                                                 <div 
// // // //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// // // //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// // // //                                                 >
// // // //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// // // //                                                         {formatCurrency(item.amount)}
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// // // //                                             </div>
// // // //                                         );
// // // //                                     })}
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //             </div>

// // // //             {/* Quick Actions */}
// // // //             <div className="fixed bottom-6 right-6">
// // // //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// // // //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                     </svg>
// // // //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// // // //                         Quick Actions
// // // //                     </span>
// // // //                 </button>
// // // //             </div>

// // // //             {/* Footer */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// // // //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// // // //                 <p className="mt-1">Agent Portal v1.0</p>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AgentDashboard;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const AgentDashboard = () => {
// // // //     const navigate = useNavigate();
// // // //     const [agentData, setAgentData] = useState(null);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [error, setError] = useState('');
// // // //     const [activeTab, setActiveTab] = useState('overview');
// // // //     const [stats, setStats] = useState({
// // // //         totalVehicles: 0,
// // // //         activeBookings: 0,
// // // //         totalEarnings: 0,
// // // //         completedTrips: 0
// // // //     });
// // // //     const [recentBookings, setRecentBookings] = useState([]);
// // // //     const [vehicles, setVehicles] = useState([]);
// // // //     const [earningsData, setEarningsData] = useState([]);
// // // //     const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);

// // // //     const BASE_URL = 'http://localhost:8080';

// // // //     useEffect(() => {
// // // //         // Check if user is logged in
// // // //         const agentId = localStorage.getItem('agentId');
// // // //         const agentToken = localStorage.getItem('agentToken');
        
// // // //         if (!agentId || !agentToken) {
// // // //             navigate('/agent/login');
// // // //             return;
// // // //         }

// // // //         fetchAgentData();
// // // //         fetchAgentVehicles(); // Fetch real vehicles from backend
// // // //         fetchAgentBookings();
// // // //         fetchAgentEarnings();
// // // //     }, [navigate]);

// // // //     const fetchAgentData = async () => {
// // // //         try {
// // // //             const agentId = localStorage.getItem('agentId');
// // // //             const storedAgentData = localStorage.getItem('agentData');
            
// // // //             if (storedAgentData) {
// // // //                 setAgentData(JSON.parse(storedAgentData));
// // // //             }

// // // //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 const freshData = response.data;
// // // //                 setAgentData(freshData);
// // // //                 localStorage.setItem('agentData', JSON.stringify(freshData));
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching agent data:', err);
// // // //             setError('Failed to load agent data');
// // // //         }
// // // //     };

// // // //     // ✅ NEW: Fetch real vehicles for this agent
// // // //     const fetchAgentVehicles = async () => {
// // // //         setIsVehiclesLoading(true);
// // // //         try {
// // // //             const agentId = localStorage.getItem('agentId');
            
// // // //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 const vehicleData = response.data;
// // // //                 setVehicles(vehicleData);
// // // //                 setStats(prev => ({ ...prev, totalVehicles: vehicleData.length }));
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching vehicles:', err);
// // // //             // Show empty vehicles on error
// // // //             setVehicles([]);
// // // //         } finally {
// // // //             setIsVehiclesLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchAgentBookings = async () => {
// // // //         try {
// // // //             // Mock data for now - replace with actual API call when ready
// // // //             // const agentId = localStorage.getItem('agentId');
// // // //             // const response = await axios.get(`${BASE_URL}/api/v1/booking/agent/${agentId}`);
            
// // // //             const mockBookings = [
// // // //                 { id: 1, customer: 'John Doe', vehicle: 'Toyota Vios', pickupDate: '2026-02-20', returnDate: '2026-02-25', status: 'Confirmed', total: 25000 },
// // // //                 { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', pickupDate: '2026-02-21', returnDate: '2026-02-23', status: 'Pending', total: 18000 },
// // // //                 { id: 3, customer: 'Mike Johnson', vehicle: 'Suzuki Swift', pickupDate: '2026-02-22', returnDate: '2026-02-24', status: 'Completed', total: 15000 },
// // // //                 { id: 4, customer: 'Sarah Williams', vehicle: 'Nissan Sunny', pickupDate: '2026-02-23', returnDate: '2026-02-26', status: 'Confirmed', total: 22000 },
// // // //             ];
            
// // // //             setRecentBookings(mockBookings);
            
// // // //             const active = mockBookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending').length;
// // // //             const completed = mockBookings.filter(b => b.status === 'Completed').length;
// // // //             const total = mockBookings.reduce((sum, b) => sum + b.total, 0);
            
// // // //             setStats(prev => ({
// // // //                 ...prev,
// // // //                 activeBookings: active,
// // // //                 completedTrips: completed,
// // // //                 totalEarnings: total
// // // //             }));
// // // //         } catch (err) {
// // // //             console.error('Error fetching bookings:', err);
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchAgentEarnings = async () => {
// // // //         try {
// // // //             // Mock earnings data
// // // //             const mockEarnings = [
// // // //                 { month: 'Sep', amount: 75000 },
// // // //                 { month: 'Oct', amount: 82000 },
// // // //                 { month: 'Nov', amount: 95000 },
// // // //                 { month: 'Dec', amount: 110000 },
// // // //                 { month: 'Jan', amount: 98000 },
// // // //                 { month: 'Feb', amount: 125000 }
// // // //             ];
// // // //             setEarningsData(mockEarnings);
// // // //         } catch (err) {
// // // //             console.error('Error fetching earnings:', err);
// // // //         }
// // // //     };

// // // //     const handleDeleteVehicle = async (vehicleId) => {
// // // //         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
// // // //             return;
// // // //         }

// // // //         try {
// // // //             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 }
// // // //             });
            
// // // //             // Refresh vehicles list
// // // //             fetchAgentVehicles();
// // // //             alert('Vehicle deleted successfully!');
// // // //         } catch (err) {
// // // //             console.error('Error deleting vehicle:', err);
// // // //             alert('Failed to delete vehicle. Please try again.');
// // // //         }
// // // //     };

// // // //     const handleLogout = () => {
// // // //         localStorage.removeItem('agentToken');
// // // //         localStorage.removeItem('agentId');
// // // //         localStorage.removeItem('agentCompanyName');
// // // //         localStorage.removeItem('agentEmail');
// // // //         localStorage.removeItem('agentData');
// // // //         navigate('/agent/login');
// // // //     };

// // // //     const getStatusColor = (status) => {
// // // //         switch(status) {
// // // //             case 'Confirmed': return 'bg-green-100 text-green-800';
// // // //             case 'Pending': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Completed': return 'bg-blue-100 text-blue-800';
// // // //             case 'Available': return 'bg-green-100 text-green-800';
// // // //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Maintenance': return 'bg-red-100 text-red-800';
// // // //             default: return 'bg-gray-100 text-gray-800';
// // // //         }
// // // //     };

// // // //     const formatCurrency = (amount) => {
// // // //         return `Rs. ${amount.toLocaleString()}`;
// // // //     };

// // // //     const getFuelTypeDisplay = (type) => {
// // // //         switch(type) {
// // // //             case 'PETROL': return 'Petrol';
// // // //             case 'DIESEL': return 'Diesel';
// // // //             case 'ELECTRIC': return 'Electric';
// // // //             case 'HYBRID': return 'Hybrid';
// // // //             default: return type;
// // // //         }
// // // //     };

// // // //     const getTransmissionDisplay = (type) => {
// // // //         return type === 'MANUAL' ? 'Manual' : 'Automatic';
// // // //     };

// // // //     const getFullImageUrl = (imagePath) => {
// // // //         if (!imagePath) return null;
// // // //         if (imagePath.startsWith('http')) return imagePath;
// // // //         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
// // // //             const filename = imagePath.split('\\').pop();
// // // //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// // // //         }
// // // //         return `${BASE_URL}${imagePath}`;
// // // //     };

// // // //     const getRatingStars = (rating) => {
// // // //         return [...Array(5)].map((_, index) => (
// // // //             <svg 
// // // //                 key={index} 
// // // //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// // // //                 fill="currentColor" 
// // // //                 viewBox="0 0 20 20"
// // // //             >
// // // //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // //             </svg>
// // // //         ));
// // // //     };

// // // //     const maxEarnings = Math.max(...earningsData.map(item => item.amount));

// // // //     if (isLoading) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // //                 <div className="text-center">
// // // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // // //                     <p className="text-gray-600">Loading your dashboard...</p>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (error) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// // // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// // // //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                         </svg>
// // // //                     </div>
// // // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// // // //                     <p className="text-gray-600 mb-6">{error}</p>
// // // //                     <button 
// // // //                         onClick={handleLogout}
// // // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                     >
// // // //                         Back to Login
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // //             {/* Header */}
// // // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // // //                         <div className="flex items-center mb-4 md:mb-0">
// // // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // // //                             <div>
// // // //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// // // //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="flex gap-4">
// // // //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// // // //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // //                                 </svg>
// // // //                                 Notifications
// // // //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
// // // //                             </button>
// // // //                             <button 
// // // //                                 onClick={handleLogout}
// // // //                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
// // // //                             >
// // // //                                 Logout
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Main Content */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // //                 {/* Quick Stats */}
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-teal-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // //                                 <p className="text-xs text-green-600">
// // // //                                     {vehicles.filter(v => v.status === 'Available').length} available
// // // //                                 </p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-blue-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// // // //                                 <p className="text-xs text-blue-600">Next 3 days</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-green-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// // // //                                 <p className="text-xs text-green-600">+15% from last month</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-purple-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Completed Trips</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.completedTrips}</p>
// // // //                                 <p className="text-xs text-purple-600">All time</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Navigation Tabs */}
// // // //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// // // //                     <div className="border-b border-gray-200">
// // // //                         <nav className="flex -mb-px">
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('overview')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'overview'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Overview
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('bookings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'bookings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Bookings
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('vehicles')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'vehicles'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 My Vehicles
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('earnings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'earnings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Earnings
// // // //                             </button>
// // // //                         </nav>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Tab Content */}
// // // //                 <div className="space-y-6">
// // // //                     {/* Overview Tab */}
// // // //                     {activeTab === 'overview' && (
// // // //                         <>
// // // //                             {/* Profile Summary */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// // // //                                 <div className="flex flex-col md:flex-row gap-6">
// // // //                                     <div className="flex-1">
// // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Company Name</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Tagline</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Email</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Member Since</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="md:w-64">
// // // //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// // // //                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
// // // //                                             <div className="flex justify-center mb-2">
// // // //                                                 {getRatingStars(4.5)}
// // // //                                             </div>
// // // //                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Recent Bookings */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <div className="flex justify-between items-center mb-4">
// // // //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// // // //                                     <button 
// // // //                                         onClick={() => setActiveTab('bookings')}
// // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // //                                     >
// // // //                                         View All →
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="overflow-x-auto">
// // // //                                     <table className="min-w-full">
// // // //                                         <thead>
// // // //                                             <tr className="border-b border-gray-200">
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Return</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             </tr>
// // // //                                         </thead>
// // // //                                         <tbody>
// // // //                                             {recentBookings.slice(0, 3).map((booking) => (
// // // //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                     <td className="py-3">
// // // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                             {booking.status}
// // // //                                                         </span>
// // // //                                                     </td>
// // // //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 </tr>
// // // //                                             ))}
// // // //                                         </tbody>
// // // //                                     </table>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Vehicle Summary */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <div className="flex justify-between items-center mb-4">
// // // //                                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
// // // //                                     <button 
// // // //                                         onClick={() => setActiveTab('vehicles')}
// // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // //                                     >
// // // //                                         Manage Vehicles →
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // // //                                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
// // // //                                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                             </svg>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-sm text-gray-600">Total Vehicles</p>
// // // //                                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // // //                                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
// // // //                                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                                             </svg>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-sm text-gray-600">Available Now</p>
// // // //                                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </>
// // // //                     )}

// // // //                     {/* Bookings Tab */}
// // // //                     {activeTab === 'bookings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // // //                                 <div className="flex gap-2">
// // // //                                     <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
// // // //                                         <option>All Status</option>
// // // //                                         <option>Confirmed</option>
// // // //                                         <option>Pending</option>
// // // //                                         <option>Completed</option>
// // // //                                     </select>
// // // //                                     <input 
// // // //                                         type="text" 
// // // //                                         placeholder="Search bookings..." 
// // // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     />
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full">
// // // //                                     <thead>
// // // //                                         <tr className="border-b border-gray-200">
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Return Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody>
// // // //                                         {recentBookings.map((booking) => (
// // // //                                             <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                 <td className="py-3 text-sm text-gray-800">#BK{booking.id}234</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                         {booking.status}
// // // //                                                     </span>
// // // //                                                 </td>
// // // //                                                 <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <button className="text-teal-600 hover:text-teal-800 mr-2">View</button>
// // // //                                                     <button className="text-blue-600 hover:text-blue-800">Update</button>
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Vehicles Tab */}
// // // //                     {activeTab === 'vehicles' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// // // //                                 <a 
// // // //                                     href="/vehicle/register" 
// // // //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // //                                 >
// // // //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                                     </svg>
// // // //                                     Add New Vehicle
// // // //                                 </a>
// // // //                             </div>

// // // //                             {isVehiclesLoading ? (
// // // //                                 <div className="text-center py-12">
// // // //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // // //                                     <p className="mt-2 text-gray-600">Loading vehicles...</p>
// // // //                                 </div>
// // // //                             ) : vehicles.length === 0 ? (
// // // //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// // // //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                     </svg>
// // // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
// // // //                                     <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
// // // //                                     <a 
// // // //                                         href="/vehicle/register" 
// // // //                                         className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                                     >
// // // //                                         Add Your First Vehicle
// // // //                                     </a>
// // // //                                 </div>
// // // //                             ) : (
// // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                                     {vehicles.map((vehicle) => (
// // // //                                         <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
// // // //                                             {/* Vehicle Image */}
// // // //                                             <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
// // // //                                                 {vehicle.vehicleImage ? (
// // // //                                                     <img 
// // // //                                                         src={getFullImageUrl(vehicle.vehicleImage)} 
// // // //                                                         alt={vehicle.makeModel}
// // // //                                                         className="w-full h-full object-cover"
// // // //                                                         onError={(e) => {
// // // //                                                             e.target.onerror = null;
// // // //                                                             e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
// // // //                                                         }}
// // // //                                                     />
// // // //                                                 ) : (
// // // //                                                     <div className="w-full h-full flex items-center justify-center">
// // // //                                                         <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                             <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
// // // //                                                             <circle cx="8" cy="16" r="2" strokeWidth={1}/>
// // // //                                                             <circle cx="16" cy="16" r="2" strokeWidth={1}/>
// // // //                                                             <path d="M16 8h2" strokeWidth={1}/>
// // // //                                                             <path d="M6 8h2" strokeWidth={1}/>
// // // //                                                         </svg>
// // // //                                                     </div>
// // // //                                                 )}
// // // //                                                 <div className="absolute top-2 right-2">
// // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
// // // //                                                         {vehicle.status || 'Available'}
// // // //                                                     </span>
// // // //                                                 </div>
// // // //                                             </div>

// // // //                                             <div className="p-4">
// // // //                                                 <div className="flex justify-between items-start mb-2">
// // // //                                                     <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
// // // //                                                     <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
// // // //                                                 </div>
                                                
// // // //                                                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Year</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Color</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.color}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Fuel</p>
// // // //                                                         <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Transmission</p>
// // // //                                                         <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Seats</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
// // // //                                                     </div>
// // // //                                                 </div>

// // // //                                                 <div className="flex gap-2">
// // // //                                                     <a 
// // // //                                                         href={`/vehicle/edit/${vehicle.id}`}
// // // //                                                         className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
// // // //                                                     >
// // // //                                                         Edit
// // // //                                                     </a>
// // // //                                                     <button 
// // // //                                                         onClick={() => handleDeleteVehicle(vehicle.id)}
// // // //                                                         className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
// // // //                                                     >
// // // //                                                         Delete
// // // //                                                     </button>
// // // //                                                     <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// // // //                                                         Details
// // // //                                                     </button>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Earnings Tab */}
// // // //                     {activeTab === 'earnings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">This Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(125000)}</p>
// // // //                                     <p className="text-xs mt-2">↑ 12% from last month</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Last Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(98000)}</p>
// // // //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Average per Booking</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(2500)}</p>
// // // //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Earnings Chart */}
// // // //                             <div className="bg-gray-50 rounded-xl p-6">
// // // //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
// // // //                                 <div className="h-48 flex items-end justify-between gap-2">
// // // //                                     {earningsData.map((item) => {
// // // //                                         const barHeight = (item.amount / maxEarnings) * 100;
// // // //                                         return (
// // // //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// // // //                                                 <div 
// // // //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// // // //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// // // //                                                 >
// // // //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// // // //                                                         {formatCurrency(item.amount)}
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// // // //                                             </div>
// // // //                                         );
// // // //                                     })}
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //             </div>

// // // //             {/* Quick Actions */}
// // // //             <div className="fixed bottom-6 right-6">
// // // //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// // // //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                     </svg>
// // // //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// // // //                         Quick Actions
// // // //                     </span>
// // // //                 </button>
// // // //             </div>

// // // //             {/* Footer */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// // // //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// // // //                 <p className="mt-1">Agent Portal v1.0</p>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AgentDashboard;



// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const AgentDashboard = () => {
// // // //     const navigate = useNavigate();
// // // //     const [agentData, setAgentData] = useState(null);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [error, setError] = useState('');
// // // //     const [activeTab, setActiveTab] = useState('overview');
// // // //     const [stats, setStats] = useState({
// // // //         totalVehicles: 0,
// // // //         activeBookings: 0,
// // // //         totalEarnings: 0,
// // // //         completedTrips: 0,
// // // //         totalVehicleValue: 0,
// // // //         averageDailyRate: 0
// // // //     });
// // // //     const [recentBookings, setRecentBookings] = useState([]);
// // // //     const [vehicles, setVehicles] = useState([]);
// // // //     const [earningsData, setEarningsData] = useState([]);
// // // //     const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);

// // // //     const BASE_URL = 'http://localhost:8080';

// // // //     useEffect(() => {
// // // //         // Check if user is logged in
// // // //         const agentId = localStorage.getItem('agentId');
// // // //         const agentToken = localStorage.getItem('agentToken');
        
// // // //         if (!agentId || !agentToken) {
// // // //             navigate('/agent/login');
// // // //             return;
// // // //         }

// // // //         fetchAgentData();
// // // //         fetchAgentVehicles();
// // // //         fetchAgentBookings();
// // // //         fetchAgentEarnings();
// // // //     }, [navigate]);

// // // //     const fetchAgentData = async () => {
// // // //         try {
// // // //             const agentId = localStorage.getItem('agentId');
// // // //             const storedAgentData = localStorage.getItem('agentData');
            
// // // //             if (storedAgentData) {
// // // //                 setAgentData(JSON.parse(storedAgentData));
// // // //             }

// // // //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 const freshData = response.data;
// // // //                 setAgentData(freshData);
// // // //                 localStorage.setItem('agentData', JSON.stringify(freshData));
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching agent data:', err);
// // // //             setError('Failed to load agent data');
// // // //         }
// // // //     };

// // // //     const fetchAgentVehicles = async () => {
// // // //         setIsVehiclesLoading(true);
// // // //         try {
// // // //             const agentId = localStorage.getItem('agentId');
            
// // // //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 },
// // // //                 timeout: 30000,
// // // //             });

// // // //             if (response.status === 200) {
// // // //                 const vehicleData = response.data;
// // // //                 setVehicles(vehicleData);
                
// // // //                 // Calculate vehicle stats
// // // //                 const totalVehicles = vehicleData.length;
// // // //                 const totalVehicleValue = vehicleData.reduce((sum, v) => sum + (v.dailyRentalPrice || 0), 0);
// // // //                 const avgDailyRate = totalVehicles > 0 ? totalVehicleValue / totalVehicles : 0;
                
// // // //                 setStats(prev => ({ 
// // // //                     ...prev, 
// // // //                     totalVehicles,
// // // //                     totalVehicleValue,
// // // //                     averageDailyRate: avgDailyRate
// // // //                 }));
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('Error fetching vehicles:', err);
// // // //             setVehicles([]);
// // // //         } finally {
// // // //             setIsVehiclesLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchAgentBookings = async () => {
// // // //         try {
// // // //             // Mock data for now - replace with actual API call when ready
// // // //             const mockBookings = [
// // // //                 { id: 1, customer: 'John Doe', vehicle: 'Toyota Vios', pickupDate: '2026-02-20', returnDate: '2026-02-25', status: 'Confirmed', total: 25000 },
// // // //                 { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', pickupDate: '2026-02-21', returnDate: '2026-02-23', status: 'Pending', total: 18000 },
// // // //                 { id: 3, customer: 'Mike Johnson', vehicle: 'Suzuki Swift', pickupDate: '2026-02-22', returnDate: '2026-02-24', status: 'Completed', total: 15000 },
// // // //                 { id: 4, customer: 'Sarah Williams', vehicle: 'Nissan Sunny', pickupDate: '2026-02-23', returnDate: '2026-02-26', status: 'Confirmed', total: 22000 },
// // // //             ];
            
// // // //             setRecentBookings(mockBookings);
            
// // // //             const active = mockBookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending').length;
// // // //             const completed = mockBookings.filter(b => b.status === 'Completed').length;
// // // //             const total = mockBookings.reduce((sum, b) => sum + b.total, 0);
            
// // // //             setStats(prev => ({
// // // //                 ...prev,
// // // //                 activeBookings: active,
// // // //                 completedTrips: completed,
// // // //                 totalEarnings: total
// // // //             }));
// // // //         } catch (err) {
// // // //             console.error('Error fetching bookings:', err);
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchAgentEarnings = async () => {
// // // //         try {
// // // //             // Mock earnings data
// // // //             const mockEarnings = [
// // // //                 { month: 'Sep', amount: 75000 },
// // // //                 { month: 'Oct', amount: 82000 },
// // // //                 { month: 'Nov', amount: 95000 },
// // // //                 { month: 'Dec', amount: 110000 },
// // // //                 { month: 'Jan', amount: 98000 },
// // // //                 { month: 'Feb', amount: 125000 }
// // // //             ];
// // // //             setEarningsData(mockEarnings);
// // // //         } catch (err) {
// // // //             console.error('Error fetching earnings:', err);
// // // //         }
// // // //     };

// // // //     const handleDeleteVehicle = async (vehicleId) => {
// // // //         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
// // // //             return;
// // // //         }

// // // //         try {
// // // //             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // // //                 }
// // // //             });
            
// // // //             fetchAgentVehicles();
// // // //             alert('Vehicle deleted successfully!');
// // // //         } catch (err) {
// // // //             console.error('Error deleting vehicle:', err);
// // // //             alert('Failed to delete vehicle. Please try again.');
// // // //         }
// // // //     };

// // // //     const handleLogout = () => {
// // // //         localStorage.removeItem('agentToken');
// // // //         localStorage.removeItem('agentId');
// // // //         localStorage.removeItem('agentCompanyName');
// // // //         localStorage.removeItem('agentEmail');
// // // //         localStorage.removeItem('agentData');
// // // //         navigate('/agent/login');
// // // //     };

// // // //     const getStatusColor = (status) => {
// // // //         switch(status) {
// // // //             case 'Confirmed': return 'bg-green-100 text-green-800';
// // // //             case 'Pending': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Completed': return 'bg-blue-100 text-blue-800';
// // // //             case 'Available': return 'bg-green-100 text-green-800';
// // // //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// // // //             case 'Maintenance': return 'bg-red-100 text-red-800';
// // // //             default: return 'bg-gray-100 text-gray-800';
// // // //         }
// // // //     };

// // // //     const formatCurrency = (amount) => {
// // // //         return `Rs. ${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
// // // //     };

// // // //     const getFuelTypeDisplay = (type) => {
// // // //         switch(type) {
// // // //             case 'PETROL': return 'Petrol';
// // // //             case 'DIESEL': return 'Diesel';
// // // //             case 'ELECTRIC': return 'Electric';
// // // //             case 'HYBRID': return 'Hybrid';
// // // //             default: return type;
// // // //         }
// // // //     };

// // // //     const getTransmissionDisplay = (type) => {
// // // //         return type === 'MANUAL' ? 'Manual' : 'Automatic';
// // // //     };

// // // //     const getFullImageUrl = (imagePath) => {
// // // //         if (!imagePath) return null;
// // // //         if (imagePath.startsWith('http')) return imagePath;
// // // //         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
// // // //             const filename = imagePath.split('\\').pop();
// // // //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// // // //         }
// // // //         return `${BASE_URL}${imagePath}`;
// // // //     };

// // // //     const getRatingStars = (rating) => {
// // // //         return [...Array(5)].map((_, index) => (
// // // //             <svg 
// // // //                 key={index} 
// // // //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// // // //                 fill="currentColor" 
// // // //                 viewBox="0 0 20 20"
// // // //             >
// // // //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // //             </svg>
// // // //         ));
// // // //     };

// // // //     const maxEarnings = Math.max(...earningsData.map(item => item.amount));

// // // //     if (isLoading) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // // //                 <div className="text-center">
// // // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // // //                     <p className="text-gray-600">Loading your dashboard...</p>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (error) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// // // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// // // //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                         </svg>
// // // //                     </div>
// // // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// // // //                     <p className="text-gray-600 mb-6">{error}</p>
// // // //                     <button 
// // // //                         onClick={handleLogout}
// // // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                     >
// // // //                         Back to Login
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // //             {/* Header */}
// // // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // // //                         <div className="flex items-center mb-4 md:mb-0">
// // // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // // //                             <div>
// // // //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// // // //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="flex gap-4">
// // // //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// // // //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // //                                 </svg>
// // // //                                 Notifications
// // // //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
// // // //                             </button>
// // // //                             <button 
// // // //                                 onClick={handleLogout}
// // // //                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
// // // //                             >
// // // //                                 Logout
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Main Content */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // //                 {/* Quick Stats */}
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-teal-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // //                                 <p className="text-xs text-green-600">
// // // //                                     {vehicles.filter(v => v.status === 'Available').length} available
// // // //                                 </p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-blue-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// // // //                                 <p className="text-xs text-blue-600">Next 3 days</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-green-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// // // //                                 <p className="text-xs text-green-600">+15% from last month</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                         <div className="flex items-center">
// // // //                             <div className="p-3 bg-purple-100 rounded-lg">
// // // //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                 </svg>
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                                 <p className="text-sm text-gray-600">Avg. Daily Rate</p>
// // // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
// // // //                                 <p className="text-xs text-purple-600">Across all vehicles</p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Navigation Tabs */}
// // // //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// // // //                     <div className="border-b border-gray-200">
// // // //                         <nav className="flex -mb-px">
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('overview')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'overview'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Overview
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('bookings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'bookings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Bookings
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('vehicles')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'vehicles'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 My Vehicles
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => setActiveTab('earnings')}
// // // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // // //                                     activeTab === 'earnings'
// // // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // // //                                         : 'text-gray-500 hover:text-gray-700'
// // // //                                 }`}
// // // //                             >
// // // //                                 Earnings
// // // //                             </button>
// // // //                         </nav>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Tab Content */}
// // // //                 <div className="space-y-6">
// // // //                     {/* Overview Tab */}
// // // //                     {activeTab === 'overview' && (
// // // //                         <>
// // // //                             {/* Profile Summary */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// // // //                                 <div className="flex flex-col md:flex-row gap-6">
// // // //                                     <div className="flex-1">
// // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Company Name</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Tagline</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Email</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <p className="text-sm text-gray-600">Member Since</p>
// // // //                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="md:w-64">
// // // //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// // // //                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
// // // //                                             <div className="flex justify-center mb-2">
// // // //                                                 {getRatingStars(4.5)}
// // // //                                             </div>
// // // //                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Recent Bookings */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <div className="flex justify-between items-center mb-4">
// // // //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// // // //                                     <button 
// // // //                                         onClick={() => setActiveTab('bookings')}
// // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // //                                     >
// // // //                                         View All →
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="overflow-x-auto">
// // // //                                     <table className="min-w-full">
// // // //                                         <thead>
// // // //                                             <tr className="border-b border-gray-200">
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Return</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             </tr>
// // // //                                         </thead>
// // // //                                         <tbody>
// // // //                                             {recentBookings.slice(0, 3).map((booking) => (
// // // //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                     <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                     <td className="py-3">
// // // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                             {booking.status}
// // // //                                                         </span>
// // // //                                                     </td>
// // // //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 </tr>
// // // //                                             ))}
// // // //                                         </tbody>
// // // //                                     </table>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Vehicle Summary */}
// // // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                                 <div className="flex justify-between items-center mb-4">
// // // //                                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
// // // //                                     <button 
// // // //                                         onClick={() => setActiveTab('vehicles')}
// // // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // // //                                     >
// // // //                                         Manage Vehicles →
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // // //                                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
// // // //                                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                             </svg>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-sm text-gray-600">Total Vehicles</p>
// // // //                                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // // //                                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
// // // //                                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //                                             </svg>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-sm text-gray-600">Avg Daily Rate</p>
// // // //                                             <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // // //                                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
// // // //                                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// // // //                                             </svg>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <p className="text-sm text-gray-600">Available Now</p>
// // // //                                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </>
// // // //                     )}

// // // //                     {/* Bookings Tab */}
// // // //                     {activeTab === 'bookings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // // //                                 <div className="flex gap-2">
// // // //                                     <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
// // // //                                         <option>All Status</option>
// // // //                                         <option>Confirmed</option>
// // // //                                         <option>Pending</option>
// // // //                                         <option>Completed</option>
// // // //                                     </select>
// // // //                                     <input 
// // // //                                         type="text" 
// // // //                                         placeholder="Search bookings..." 
// // // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // // //                                     />
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full">
// // // //                                     <thead>
// // // //                                         <tr className="border-b border-gray-200">
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Return Date</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // // //                                             <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody>
// // // //                                         {recentBookings.map((booking) => (
// // // //                                             <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // // //                                                 <td className="py-3 text-sm text-gray-800">#BK{booking.id}234</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.customer}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.vehicle}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.pickupDate}</td>
// // // //                                                 <td className="py-3 text-sm text-gray-800">{booking.returnDate}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
// // // //                                                         {booking.status}
// // // //                                                     </span>
// // // //                                                 </td>
// // // //                                                 <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.total)}</td>
// // // //                                                 <td className="py-3">
// // // //                                                     <button className="text-teal-600 hover:text-teal-800 mr-2">View</button>
// // // //                                                     <button className="text-blue-600 hover:text-blue-800">Update</button>
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Vehicles Tab */}
// // // //                     {activeTab === 'vehicles' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <div className="flex justify-between items-center mb-6">
// // // //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// // // //                                 <a 
// // // //                                     href="/vehicle/register" 
// // // //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // // //                                 >
// // // //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                                     </svg>
// // // //                                     Add New Vehicle
// // // //                                 </a>
// // // //                             </div>

// // // //                             {isVehiclesLoading ? (
// // // //                                 <div className="text-center py-12">
// // // //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // // //                                     <p className="mt-2 text-gray-600">Loading vehicles...</p>
// // // //                                 </div>
// // // //                             ) : vehicles.length === 0 ? (
// // // //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// // // //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                     </svg>
// // // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
// // // //                                     <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
// // // //                                     <a 
// // // //                                         href="/vehicle/register" 
// // // //                                         className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // // //                                     >
// // // //                                         Add Your First Vehicle
// // // //                                     </a>
// // // //                                 </div>
// // // //                             ) : (
// // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                                     {vehicles.map((vehicle) => (
// // // //                                         <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
// // // //                                             {/* Vehicle Image */}
// // // //                                             <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
// // // //                                                 {vehicle.vehicleImage ? (
// // // //                                                     <img 
// // // //                                                         src={getFullImageUrl(vehicle.vehicleImage)} 
// // // //                                                         alt={vehicle.makeModel}
// // // //                                                         className="w-full h-full object-cover"
// // // //                                                         onError={(e) => {
// // // //                                                             e.target.onerror = null;
// // // //                                                             e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
// // // //                                                         }}
// // // //                                                     />
// // // //                                                 ) : (
// // // //                                                     <div className="w-full h-full flex items-center justify-center">
// // // //                                                         <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                             <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
// // // //                                                             <circle cx="8" cy="16" r="2" strokeWidth={1}/>
// // // //                                                             <circle cx="16" cy="16" r="2" strokeWidth={1}/>
// // // //                                                             <path d="M16 8h2" strokeWidth={1}/>
// // // //                                                             <path d="M6 8h2" strokeWidth={1}/>
// // // //                                                         </svg>
// // // //                                                     </div>
// // // //                                                 )}
// // // //                                                 <div className="absolute top-2 right-2">
// // // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
// // // //                                                         {vehicle.status || 'Available'}
// // // //                                                     </span>
// // // //                                                 </div>
// // // //                                                 {vehicle.dailyRentalPrice && (
// // // //                                                     <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
// // // //                                                         {formatCurrency(vehicle.dailyRentalPrice)}/day
// // // //                                                     </div>
// // // //                                                 )}
// // // //                                             </div>

// // // //                                             <div className="p-4">
// // // //                                                 <div className="flex justify-between items-start mb-2">
// // // //                                                     <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
// // // //                                                     <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
// // // //                                                 </div>
                                                
// // // //                                                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Year</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Color</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.color}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Fuel</p>
// // // //                                                         <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Transmission</p>
// // // //                                                         <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Seats</p>
// // // //                                                         <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-gray-500">Daily Rate</p>
// // // //                                                         <p className="font-medium text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</p>
// // // //                                                     </div>
// // // //                                                 </div>

// // // //                                                 <div className="flex gap-2">
// // // //                                                     <a 
// // // //                                                         href={`/vehicle/edit/${vehicle.id}`}
// // // //                                                         className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
// // // //                                                     >
// // // //                                                         Edit
// // // //                                                     </a>
// // // //                                                     <button 
// // // //                                                         onClick={() => handleDeleteVehicle(vehicle.id)}
// // // //                                                         className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
// // // //                                                     >
// // // //                                                         Delete
// // // //                                                     </button>
// // // //                                                     <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// // // //                                                         Details
// // // //                                                     </button>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     )}

// // // //                     {/* Earnings Tab */}
// // // //                     {activeTab === 'earnings' && (
// // // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // // //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">This Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(125000)}</p>
// // // //                                     <p className="text-xs mt-2">↑ 12% from last month</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Last Month</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(98000)}</p>
// // // //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// // // //                                 </div>
// // // //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// // // //                                     <p className="text-sm mb-2">Avg per Booking</p>
// // // //                                     <p className="text-3xl font-bold">{formatCurrency(2500)}</p>
// // // //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Earnings Chart */}
// // // //                             <div className="bg-gray-50 rounded-xl p-6">
// // // //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
// // // //                                 <div className="h-48 flex items-end justify-between gap-2">
// // // //                                     {earningsData.map((item) => {
// // // //                                         const barHeight = (item.amount / maxEarnings) * 100;
// // // //                                         return (
// // // //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// // // //                                                 <div 
// // // //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// // // //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// // // //                                                 >
// // // //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// // // //                                                         {formatCurrency(item.amount)}
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// // // //                                             </div>
// // // //                                         );
// // // //                                     })}
// // // //                                 </div>
// // // //                             </div>

// // // //                             {/* Potential Earnings Based on Daily Rates */}
// // // //                             {vehicles.length > 0 && (
// // // //                                 <div className="mt-8 bg-teal-50 rounded-xl p-6">
// // // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
// // // //                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //                                         <div className="bg-white rounded-lg p-4">
// // // //                                             <p className="text-sm text-gray-600">If all vehicles rented</p>
// // // //                                             <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
// // // //                                             <p className="text-xs text-gray-500">per day</p>
// // // //                                         </div>
// // // //                                         <div className="bg-white rounded-lg p-4">
// // // //                                             <p className="text-sm text-gray-600">Highest daily rate</p>
// // // //                                             <p className="text-2xl font-bold text-teal-600">
// // // //                                                 {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// // // //                                             </p>
// // // //                                             <p className="text-xs text-gray-500">per day</p>
// // // //                                         </div>
// // // //                                         <div className="bg-white rounded-lg p-4">
// // // //                                             <p className="text-sm text-gray-600">Lowest daily rate</p>
// // // //                                             <p className="text-2xl font-bold text-teal-600">
// // // //                                                 {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// // // //                                             </p>
// // // //                                             <p className="text-xs text-gray-500">per day</p>
// // // //                                         </div>
// // // //                                         <div className="bg-white rounded-lg p-4">
// // // //                                             <p className="text-sm text-gray-600">Monthly potential</p>
// // // //                                             <p className="text-2xl font-bold text-teal-600">
// // // //                                                 {formatCurrency(stats.totalVehicleValue * 30)}
// // // //                                             </p>
// // // //                                             <p className="text-xs text-gray-500">if fully booked</p>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //             </div>

// // // //             {/* Quick Actions */}
// // // //             <div className="fixed bottom-6 right-6">
// // // //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// // // //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                     </svg>
// // // //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// // // //                         Quick Actions
// // // //                     </span>
// // // //                 </button>
// // // //             </div>

// // // //             {/* Footer */}
// // // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// // // //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// // // //                 <p className="mt-1">Agent Portal v1.0</p>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AgentDashboard;




// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // const AgentDashboard = () => {
// // //     const navigate = useNavigate();
// // //     const [agentData, setAgentData] = useState(null);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [error, setError] = useState('');
// // //     const [activeTab, setActiveTab] = useState('overview');
// // //     const [stats, setStats] = useState({
// // //         totalVehicles: 0,
// // //         activeBookings: 0,
// // //         totalEarnings: 0,
// // //         completedTrips: 0,
// // //         totalVehicleValue: 0,
// // //         averageDailyRate: 0,
// // //         pendingBookings: 0,
// // //         confirmedBookings: 0,
// // //         totalBookings: 0
// // //     });
// // //     const [recentBookings, setRecentBookings] = useState([]);
// // //     const [allBookings, setAllBookings] = useState([]);
// // //     const [vehicles, setVehicles] = useState([]);
// // //     const [earningsData, setEarningsData] = useState([]);
// // //     const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);
// // //     const [isBookingsLoading, setIsBookingsLoading] = useState(false);
    
// // //     // Filter states for bookings
// // //     const [bookingStatusFilter, setBookingStatusFilter] = useState('');
// // //     const [bookingSearchTerm, setBookingSearchTerm] = useState('');

// // //     const BASE_URL = 'http://localhost:8080';

// // //     useEffect(() => {
// // //         // Check if user is logged in
// // //         const agentId = localStorage.getItem('agentId');
// // //         const agentToken = localStorage.getItem('agentToken');
        
// // //         if (!agentId || !agentToken) {
// // //             navigate('/agent/login');
// // //             return;
// // //         }

// // //         fetchAgentData();
// // //         fetchAgentVehicles();
// // //         fetchAgentBookings();
// // //         fetchAgentEarnings();
// // //     }, [navigate]);

// // //     useEffect(() => {
// // //         // Filter bookings when filter or search changes
// // //         if (allBookings.length > 0) {
// // //             filterBookings();
// // //         }
// // //     }, [bookingStatusFilter, bookingSearchTerm, allBookings]);

// // //     const fetchAgentData = async () => {
// // //         try {
// // //             const agentId = localStorage.getItem('agentId');
// // //             const storedAgentData = localStorage.getItem('agentData');
            
// // //             if (storedAgentData) {
// // //                 setAgentData(JSON.parse(storedAgentData));
// // //             }

// // //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// // //                 headers: {
// // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // //                 },
// // //                 timeout: 30000,
// // //             });

// // //             if (response.status === 200) {
// // //                 const freshData = response.data;
// // //                 setAgentData(freshData);
// // //                 localStorage.setItem('agentData', JSON.stringify(freshData));
// // //             }
// // //         } catch (err) {
// // //             console.error('Error fetching agent data:', err);
// // //             setError('Failed to load agent data');
// // //         }
// // //     };

// // //     const fetchAgentVehicles = async () => {
// // //         setIsVehiclesLoading(true);
// // //         try {
// // //             const agentId = localStorage.getItem('agentId');
            
// // //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
// // //                 headers: {
// // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // //                 },
// // //                 timeout: 30000,
// // //             });

// // //             if (response.status === 200) {
// // //                 const vehicleData = response.data;
// // //                 setVehicles(vehicleData);
                
// // //                 // Calculate vehicle stats
// // //                 const totalVehicles = vehicleData.length;
// // //                 const totalVehicleValue = vehicleData.reduce((sum, v) => sum + (v.dailyRentalPrice || 0), 0);
// // //                 const avgDailyRate = totalVehicles > 0 ? totalVehicleValue / totalVehicles : 0;
                
// // //                 setStats(prev => ({ 
// // //                     ...prev, 
// // //                     totalVehicles,
// // //                     totalVehicleValue,
// // //                     averageDailyRate: avgDailyRate
// // //                 }));
// // //             }
// // //         } catch (err) {
// // //             console.error('Error fetching vehicles:', err);
// // //             setVehicles([]);
// // //         } finally {
// // //             setIsVehiclesLoading(false);
// // //         }
// // //     };

// // //     const fetchAgentBookings = async () => {
// // //         setIsBookingsLoading(true);
// // //         try {
// // //             const agentId = localStorage.getItem('agentId');
            
// // //             // You'll need to create this endpoint in your backend
// // //             // For now, we'll use getAll and filter client-side
// // //             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
// // //                 headers: {
// // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // //                 },
// // //                 timeout: 30000,
// // //             });

// // //             if (response.status === 200) {
// // //                 // Filter bookings for this agent
// // //                 const agentBookings = response.data.filter(booking => 
// // //                     booking.agentId === parseInt(agentId)
// // //                 );
                
// // //                 setAllBookings(agentBookings);
// // //                 setRecentBookings(agentBookings.slice(0, 5)); // Show last 5 bookings
                
// // //                 // Calculate booking stats
// // //                 const active = agentBookings.filter(b => 
// // //                     b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
// // //                 ).length;
                
// // //                 const completed = agentBookings.filter(b => 
// // //                     b.bookingStatus === 'COMPLETED'
// // //                 ).length;
                
// // //                 const pending = agentBookings.filter(b => 
// // //                     b.bookingStatus === 'PENDING'
// // //                 ).length;
                
// // //                 const confirmed = agentBookings.filter(b => 
// // //                     b.bookingStatus === 'CONFIRMED'
// // //                 ).length;
                
// // //                 const total = agentBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                
// // //                 setStats(prev => ({
// // //                     ...prev,
// // //                     activeBookings: active,
// // //                     completedTrips: completed,
// // //                     totalEarnings: total,
// // //                     pendingBookings: pending,
// // //                     confirmedBookings: confirmed,
// // //                     totalBookings: agentBookings.length
// // //                 }));
// // //             }
// // //         } catch (err) {
// // //             console.error('Error fetching bookings:', err);
// // //             // Fallback to mock data if API fails
// // //             const mockBookings = [
// // //                 { id: 1, customer: { firstName: 'John', lastName: 'Doe' }, vehicle: { makeModel: 'Toyota Vios' }, pickupDate: '2026-02-20', dropOffDate: '2026-02-25', bookingStatus: 'CONFIRMED', paymentStatus: 'PAID', totalPrice: 25000 },
// // //                 { id: 2, customer: { firstName: 'Jane', lastName: 'Smith' }, vehicle: { makeModel: 'Honda Civic' }, pickupDate: '2026-02-21', dropOffDate: '2026-02-23', bookingStatus: 'PENDING', paymentStatus: 'PENDING', totalPrice: 18000 },
// // //                 { id: 3, customer: { firstName: 'Mike', lastName: 'Johnson' }, vehicle: { makeModel: 'Suzuki Swift' }, pickupDate: '2026-02-22', dropOffDate: '2026-02-24', bookingStatus: 'COMPLETED', paymentStatus: 'PAID', totalPrice: 15000 },
// // //                 { id: 4, customer: { firstName: 'Sarah', lastName: 'Williams' }, vehicle: { makeModel: 'Nissan Sunny' }, pickupDate: '2026-02-23', dropOffDate: '2026-02-26', bookingStatus: 'CONFIRMED', paymentStatus: 'PAID', totalPrice: 22000 },
// // //             ];
            
// // //             setAllBookings(mockBookings);
// // //             setRecentBookings(mockBookings);
            
// // //             const active = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING').length;
// // //             const completed = mockBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
// // //             const pending = mockBookings.filter(b => b.bookingStatus === 'PENDING').length;
// // //             const confirmed = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
// // //             const total = mockBookings.reduce((sum, b) => sum + b.totalPrice, 0);
            
// // //             setStats(prev => ({
// // //                 ...prev,
// // //                 activeBookings: active,
// // //                 completedTrips: completed,
// // //                 totalEarnings: total,
// // //                 pendingBookings: pending,
// // //                 confirmedBookings: confirmed,
// // //                 totalBookings: mockBookings.length
// // //             }));
// // //         } finally {
// // //             setIsBookingsLoading(false);
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     const filterBookings = () => {
// // //         let filtered = [...allBookings];
        
// // //         // Apply status filter
// // //         if (bookingStatusFilter) {
// // //             filtered = filtered.filter(booking => 
// // //                 booking.bookingStatus === bookingStatusFilter
// // //             );
// // //         }
        
// // //         // Apply search filter
// // //         if (bookingSearchTerm) {
// // //             const term = bookingSearchTerm.toLowerCase();
// // //             filtered = filtered.filter(booking => 
// // //                 (booking.customer?.firstName?.toLowerCase().includes(term) ||
// // //                  booking.customer?.lastName?.toLowerCase().includes(term) ||
// // //                  booking.vehicle?.makeModel?.toLowerCase().includes(term) ||
// // //                  booking.id?.toString().includes(term))
// // //             );
// // //         }
        
// // //         setRecentBookings(filtered);
// // //     };

// // //     const fetchAgentEarnings = async () => {
// // //         try {
// // //             // Calculate earnings from actual booking data
// // //             if (allBookings.length > 0) {
// // //                 const monthlyEarnings = {};
// // //                 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                
// // //                 allBookings.forEach(booking => {
// // //                     if (booking.bookingStatus === 'COMPLETED' || booking.bookingStatus === 'CONFIRMED') {
// // //                         const date = new Date(booking.pickupDate);
// // //                         const monthIndex = date.getMonth();
// // //                         const monthName = months[monthIndex];
                        
// // //                         if (!monthlyEarnings[monthName]) {
// // //                             monthlyEarnings[monthName] = 0;
// // //                         }
// // //                         monthlyEarnings[monthName] += booking.totalPrice || 0;
// // //                     }
// // //                 });
                
// // //                 // Convert to array format for chart
// // //                 const earningsArray = months.map(month => ({
// // //                     month,
// // //                     amount: monthlyEarnings[month] || 0
// // //                 })).filter(item => item.amount > 0);
                
// // //                 setEarningsData(earningsArray.length > 0 ? earningsArray : [
// // //                     { month: 'Sep', amount: 75000 },
// // //                     { month: 'Oct', amount: 82000 },
// // //                     { month: 'Nov', amount: 95000 },
// // //                     { month: 'Dec', amount: 110000 },
// // //                     { month: 'Jan', amount: 98000 },
// // //                     { month: 'Feb', amount: 125000 }
// // //                 ]);
// // //             } else {
// // //                 // Mock earnings data
// // //                 const mockEarnings = [
// // //                     { month: 'Sep', amount: 75000 },
// // //                     { month: 'Oct', amount: 82000 },
// // //                     { month: 'Nov', amount: 95000 },
// // //                     { month: 'Dec', amount: 110000 },
// // //                     { month: 'Jan', amount: 98000 },
// // //                     { month: 'Feb', amount: 125000 }
// // //                 ];
// // //                 setEarningsData(mockEarnings);
// // //             }
// // //         } catch (err) {
// // //             console.error('Error calculating earnings:', err);
// // //         }
// // //     };

// // //     const handleUpdateBookingStatus = async (bookingId, newStatus) => {
// // //         try {
// // //             const booking = allBookings.find(b => b.id === bookingId);
// // //             if (!booking) return;
            
// // //             const updatedBooking = {
// // //                 ...booking,
// // //                 bookingStatus: newStatus
// // //             };
            
// // //             await axios.put(`${BASE_URL}/api/v1/booking/update/${bookingId}`, updatedBooking, {
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // //                 }
// // //             });
            
// // //             // Refresh bookings
// // //             fetchAgentBookings();
// // //             alert(`Booking status updated to ${newStatus}`);
// // //         } catch (err) {
// // //             console.error('Error updating booking:', err);
// // //             alert('Failed to update booking status');
// // //         }
// // //     };

// // //     const handleDeleteVehicle = async (vehicleId) => {
// // //         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
// // //             return;
// // //         }

// // //         try {
// // //             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
// // //                 headers: {
// // //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// // //                 }
// // //             });
            
// // //             fetchAgentVehicles();
// // //             alert('Vehicle deleted successfully!');
// // //         } catch (err) {
// // //             console.error('Error deleting vehicle:', err);
// // //             alert('Failed to delete vehicle. Please try again.');
// // //         }
// // //     };

// // //     const handleLogout = () => {
// // //         localStorage.removeItem('agentToken');
// // //         localStorage.removeItem('agentId');
// // //         localStorage.removeItem('agentCompanyName');
// // //         localStorage.removeItem('agentEmail');
// // //         localStorage.removeItem('agentData');
// // //         navigate('/agent/login');
// // //     };

// // //     const getStatusColor = (status) => {
// // //         switch(status) {
// // //             case 'CONFIRMED': return 'bg-green-100 text-green-800';
// // //             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
// // //             case 'COMPLETED': return 'bg-blue-100 text-blue-800';
// // //             case 'CANCELLED': return 'bg-red-100 text-red-800';
// // //             case 'Available': return 'bg-green-100 text-green-800';
// // //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// // //             case 'Maintenance': return 'bg-red-100 text-red-800';
// // //             default: return 'bg-gray-100 text-gray-800';
// // //         }
// // //     };

// // //     const getPaymentStatusColor = (status) => {
// // //         switch(status) {
// // //             case 'PAID': return 'bg-green-100 text-green-800';
// // //             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
// // //             case 'FAILED': return 'bg-red-100 text-red-800';
// // //             default: return 'bg-gray-100 text-gray-800';
// // //         }
// // //     };

// // //     const formatCurrency = (amount) => {
// // //         return `Rs. ${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
// // //     };

// // //     const formatDate = (dateString) => {
// // //         return new Date(dateString).toLocaleDateString('en-US', {
// // //             year: 'numeric',
// // //             month: 'short',
// // //             day: 'numeric'
// // //         });
// // //     };

// // //     const getFuelTypeDisplay = (type) => {
// // //         switch(type) {
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

// // //     const getFullImageUrl = (imagePath) => {
// // //         if (!imagePath) return null;
// // //         if (imagePath.startsWith('http')) return imagePath;
// // //         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
// // //             const filename = imagePath.split('\\').pop();
// // //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// // //         }
// // //         return `${BASE_URL}${imagePath}`;
// // //     };

// // //     const getRatingStars = (rating) => {
// // //         return [...Array(5)].map((_, index) => (
// // //             <svg 
// // //                 key={index} 
// // //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// // //                 fill="currentColor" 
// // //                 viewBox="0 0 20 20"
// // //             >
// // //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //             </svg>
// // //         ));
// // //     };

// // //     const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

// // //     if (isLoading) {
// // //         return (
// // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// // //                 <div className="text-center">
// // //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// // //                     <p className="text-gray-600">Loading your dashboard...</p>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     if (error) {
// // //         return (
// // //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// // //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// // //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                         </svg>
// // //                     </div>
// // //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// // //                     <p className="text-gray-600 mb-6">{error}</p>
// // //                     <button 
// // //                         onClick={handleLogout}
// // //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // //                     >
// // //                         Back to Login
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // //             {/* Header */}
// // //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // //                     <div className="flex flex-col md:flex-row justify-between items-center">
// // //                         <div className="flex items-center mb-4 md:mb-0">
// // //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// // //                             <div>
// // //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// // //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// // //                             </div>
// // //                         </div>
// // //                         <div className="flex gap-4">
// // //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// // //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // //                                 </svg>
// // //                                 Notifications
// // //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// // //                                     {stats.pendingBookings}
// // //                                 </span>
// // //                             </button>
// // //                             <button 
// // //                                 onClick={handleLogout}
// // //                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
// // //                             >
// // //                                 Logout
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Main Content */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //                 {/* Quick Stats */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                         <div className="flex items-center">
// // //                             <div className="p-3 bg-teal-100 rounded-lg">
// // //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // //                                 </svg>
// // //                             </div>
// // //                             <div className="ml-4">
// // //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// // //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // //                                 <p className="text-xs text-green-600">
// // //                                     {vehicles.filter(v => v.status === 'Available').length} available
// // //                                 </p>
// // //                             </div>
// // //                         </div>
// // //                     </div>

// // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                         <div className="flex items-center">
// // //                             <div className="p-3 bg-blue-100 rounded-lg">
// // //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                                 </svg>
// // //                             </div>
// // //                             <div className="ml-4">
// // //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// // //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// // //                                 <p className="text-xs text-blue-600">{stats.pendingBookings} pending</p>
// // //                             </div>
// // //                         </div>
// // //                     </div>

// // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                         <div className="flex items-center">
// // //                             <div className="p-3 bg-green-100 rounded-lg">
// // //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                 </svg>
// // //                             </div>
// // //                             <div className="ml-4">
// // //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// // //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// // //                                 <p className="text-xs text-green-600">{stats.completedTrips} completed trips</p>
// // //                             </div>
// // //                         </div>
// // //                     </div>

// // //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                         <div className="flex items-center">
// // //                             <div className="p-3 bg-purple-100 rounded-lg">
// // //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                 </svg>
// // //                             </div>
// // //                             <div className="ml-4">
// // //                                 <p className="text-sm text-gray-600">Completion Rate</p>
// // //                                 <p className="text-2xl font-bold text-gray-800">
// // //                                     {stats.totalBookings > 0 
// // //                                         ? Math.round((stats.completedTrips / stats.totalBookings) * 100) 
// // //                                         : 0}%
// // //                                 </p>
// // //                                 <p className="text-xs text-purple-600">{stats.totalBookings} total bookings</p>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Navigation Tabs */}
// // //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// // //                     <div className="border-b border-gray-200">
// // //                         <nav className="flex -mb-px">
// // //                             <button
// // //                                 onClick={() => setActiveTab('overview')}
// // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // //                                     activeTab === 'overview'
// // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // //                                         : 'text-gray-500 hover:text-gray-700'
// // //                                 }`}
// // //                             >
// // //                                 Overview
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => setActiveTab('bookings')}
// // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // //                                     activeTab === 'bookings'
// // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // //                                         : 'text-gray-500 hover:text-gray-700'
// // //                                 }`}
// // //                             >
// // //                                 Bookings
// // //                                 {stats.pendingBookings > 0 && (
// // //                                     <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
// // //                                         {stats.pendingBookings}
// // //                                     </span>
// // //                                 )}
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => setActiveTab('vehicles')}
// // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // //                                     activeTab === 'vehicles'
// // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // //                                         : 'text-gray-500 hover:text-gray-700'
// // //                                 }`}
// // //                             >
// // //                                 My Vehicles
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => setActiveTab('earnings')}
// // //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// // //                                     activeTab === 'earnings'
// // //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// // //                                         : 'text-gray-500 hover:text-gray-700'
// // //                                 }`}
// // //                             >
// // //                                 Earnings
// // //                             </button>
// // //                         </nav>
// // //                     </div>
// // //                 </div>

// // //                 {/* Tab Content */}
// // //                 <div className="space-y-6">
// // //                     {/* Overview Tab */}
// // //                     {activeTab === 'overview' && (
// // //                         <>
// // //                             {/* Profile Summary */}
// // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// // //                                 <div className="flex flex-col md:flex-row gap-6">
// // //                                     <div className="flex-1">
// // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Company Name</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Tagline</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Email</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <p className="text-sm text-gray-600">Member Since</p>
// // //                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="md:w-64">
// // //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// // //                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
// // //                                             <div className="flex justify-center mb-2">
// // //                                                 {getRatingStars(4.5)}
// // //                                             </div>
// // //                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Recent Bookings */}
// // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                                 <div className="flex justify-between items-center mb-4">
// // //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// // //                                     <button 
// // //                                         onClick={() => setActiveTab('bookings')}
// // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // //                                     >
// // //                                         View All →
// // //                                     </button>
// // //                                 </div>
// // //                                 {isBookingsLoading ? (
// // //                                     <div className="text-center py-8">
// // //                                         <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
// // //                                         <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
// // //                                     </div>
// // //                                 ) : recentBookings.length === 0 ? (
// // //                                     <div className="text-center py-8 bg-gray-50 rounded-lg">
// // //                                         <p className="text-gray-500">No bookings yet</p>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <div className="overflow-x-auto">
// // //                                         <table className="min-w-full">
// // //                                             <thead>
// // //                                                 <tr className="border-b border-gray-200">
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
// // //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // //                                                 </tr>
// // //                                             </thead>
// // //                                             <tbody>
// // //                                                 {recentBookings.slice(0, 3).map((booking) => (
// // //                                                     <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // //                                                         <td className="py-3 text-sm text-gray-800">
// // //                                                             {booking.customer?.firstName} {booking.customer?.lastName}
// // //                                                         </td>
// // //                                                         <td className="py-3 text-sm text-gray-800">{booking.vehicle?.makeModel}</td>
// // //                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// // //                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// // //                                                         <td className="py-3">
// // //                                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
// // //                                                                 {booking.bookingStatus}
// // //                                                             </span>
// // //                                                         </td>
// // //                                                         <td className="py-3">
// // //                                                             <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
// // //                                                                 {booking.paymentStatus}
// // //                                                             </span>
// // //                                                         </td>
// // //                                                         <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// // //                                                     </tr>
// // //                                                 ))}
// // //                                             </tbody>
// // //                                         </table>
// // //                                     </div>
// // //                                 )}
// // //                             </div>

// // //                             {/* Vehicle Summary */}
// // //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                                 <div className="flex justify-between items-center mb-4">
// // //                                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
// // //                                     <button 
// // //                                         onClick={() => setActiveTab('vehicles')}
// // //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// // //                                     >
// // //                                         Manage Vehicles →
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // //                                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
// // //                                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-sm text-gray-600">Total Vehicles</p>
// // //                                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // //                                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
// // //                                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-sm text-gray-600">Avg Daily Rate</p>
// // //                                             <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// // //                                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
// // //                                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-sm text-gray-600">Available Now</p>
// // //                                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </>
// // //                     )}

// // //                     {/* Bookings Tab */}
// // //                     {activeTab === 'bookings' && (
// // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                             <div className="flex justify-between items-center mb-6">
// // //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// // //                                 <div className="flex gap-2">
// // //                                     <select 
// // //                                         value={bookingStatusFilter}
// // //                                         onChange={(e) => setBookingStatusFilter(e.target.value)}
// // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     >
// // //                                         <option value="">All Status</option>
// // //                                         <option value="PENDING">Pending</option>
// // //                                         <option value="CONFIRMED">Confirmed</option>
// // //                                         <option value="COMPLETED">Completed</option>
// // //                                         <option value="CANCELLED">Cancelled</option>
// // //                                     </select>
// // //                                     <input 
// // //                                         type="text" 
// // //                                         placeholder="Search bookings..." 
// // //                                         value={bookingSearchTerm}
// // //                                         onChange={(e) => setBookingSearchTerm(e.target.value)}
// // //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// // //                                     />
// // //                                 </div>
// // //                             </div>
                            
// // //                             {isBookingsLoading ? (
// // //                                 <div className="text-center py-12">
// // //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // //                                     <p className="mt-2 text-gray-600">Loading bookings...</p>
// // //                                 </div>
// // //                             ) : recentBookings.length === 0 ? (
// // //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// // //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                                     </svg>
// // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
// // //                                     <p className="text-gray-600">No bookings match your filters</p>
// // //                                 </div>
// // //                             ) : (
// // //                                 <div className="overflow-x-auto">
// // //                                     <table className="min-w-full">
// // //                                         <thead>
// // //                                             <tr className="border-b border-gray-200">
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// // //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// // //                                             </tr>
// // //                                         </thead>
// // //                                         <tbody>
// // //                                             {recentBookings.map((booking) => (
// // //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// // //                                                     <td className="py-3 text-sm text-gray-800">#BK{booking.id}</td>
// // //                                                     <td className="py-3 text-sm text-gray-800">
// // //                                                         {booking.customer?.firstName} {booking.customer?.lastName}
// // //                                                     </td>
// // //                                                     <td className="py-3 text-sm text-gray-800">{booking.vehicle?.makeModel}</td>
// // //                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// // //                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// // //                                                     <td className="py-3">
// // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
// // //                                                             {booking.bookingStatus}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="py-3">
// // //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
// // //                                                             {booking.paymentStatus}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// // //                                                     <td className="py-3">
// // //                                                         <button 
// // //                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'CONFIRMED')}
// // //                                                             className="text-green-600 hover:text-green-800 mr-2 text-sm"
// // //                                                             disabled={booking.bookingStatus === 'CONFIRMED'}
// // //                                                         >
// // //                                                             Confirm
// // //                                                         </button>
// // //                                                         <button 
// // //                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'COMPLETED')}
// // //                                                             className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
// // //                                                             disabled={booking.bookingStatus === 'COMPLETED'}
// // //                                                         >
// // //                                                             Complete
// // //                                                         </button>
// // //                                                         <button className="text-teal-600 hover:text-teal-800 text-sm">
// // //                                                             View
// // //                                                         </button>
// // //                                                     </td>
// // //                                                 </tr>
// // //                                             ))}
// // //                                         </tbody>
// // //                                     </table>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     )}

// // //                     {/* Vehicles Tab */}
// // //                     {activeTab === 'vehicles' && (
// // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                             <div className="flex justify-between items-center mb-6">
// // //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// // //                                 <a 
// // //                                     href="/vehicle/register" 
// // //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// // //                                 >
// // //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                                     </svg>
// // //                                     Add New Vehicle
// // //                                 </a>
// // //                             </div>

// // //                             {isVehiclesLoading ? (
// // //                                 <div className="text-center py-12">
// // //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// // //                                     <p className="mt-2 text-gray-600">Loading vehicles...</p>
// // //                                 </div>
// // //                             ) : vehicles.length === 0 ? (
// // //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// // //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // //                                     </svg>
// // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
// // //                                     <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
// // //                                     <a 
// // //                                         href="/vehicle/register" 
// // //                                         className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// // //                                     >
// // //                                         Add Your First Vehicle
// // //                                     </a>
// // //                                 </div>
// // //                             ) : (
// // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //                                     {vehicles.map((vehicle) => (
// // //                                         <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
// // //                                             {/* Vehicle Image */}
// // //                                             <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
// // //                                                 {vehicle.vehicleImage ? (
// // //                                                     <img 
// // //                                                         src={getFullImageUrl(vehicle.vehicleImage)} 
// // //                                                         alt={vehicle.makeModel}
// // //                                                         className="w-full h-full object-cover"
// // //                                                         onError={(e) => {
// // //                                                             e.target.onerror = null;
// // //                                                             e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
// // //                                                         }}
// // //                                                     />
// // //                                                 ) : (
// // //                                                     <div className="w-full h-full flex items-center justify-center">
// // //                                                         <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                             <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
// // //                                                             <circle cx="8" cy="16" r="2" strokeWidth={1}/>
// // //                                                             <circle cx="16" cy="16" r="2" strokeWidth={1}/>
// // //                                                             <path d="M16 8h2" strokeWidth={1}/>
// // //                                                             <path d="M6 8h2" strokeWidth={1}/>
// // //                                                         </svg>
// // //                                                     </div>
// // //                                                 )}
// // //                                                 <div className="absolute top-2 right-2">
// // //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
// // //                                                         {vehicle.status || 'Available'}
// // //                                                     </span>
// // //                                                 </div>
// // //                                                 {vehicle.dailyRentalPrice && (
// // //                                                     <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
// // //                                                         {formatCurrency(vehicle.dailyRentalPrice)}/day
// // //                                                     </div>
// // //                                                 )}
// // //                                             </div>

// // //                                             <div className="p-4">
// // //                                                 <div className="flex justify-between items-start mb-2">
// // //                                                     <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
// // //                                                     <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
// // //                                                 </div>
                                                
// // //                                                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Year</p>
// // //                                                         <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Color</p>
// // //                                                         <p className="font-medium text-gray-800">{vehicle.color}</p>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Fuel</p>
// // //                                                         <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Transmission</p>
// // //                                                         <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Seats</p>
// // //                                                         <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <p className="text-gray-500">Daily Rate</p>
// // //                                                         <p className="font-medium text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</p>
// // //                                                     </div>
// // //                                                 </div>

// // //                                                 <div className="flex gap-2">
// // //                                                     <a 
// // //                                                         href={`/vehicle/edit/${vehicle.id}`}
// // //                                                         className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
// // //                                                     >
// // //                                                         Edit
// // //                                                     </a>
// // //                                                     <button 
// // //                                                         onClick={() => handleDeleteVehicle(vehicle.id)}
// // //                                                         className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
// // //                                                     >
// // //                                                         Delete
// // //                                                     </button>
// // //                                                     <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// // //                                                         Details
// // //                                                     </button>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     )}

// // //                     {/* Earnings Tab */}
// // //                     {activeTab === 'earnings' && (
// // //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// // //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// // //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// // //                                     <p className="text-sm mb-2">This Month</p>
// // //                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
// // //                                     <p className="text-xs mt-2">
// // //                                         {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
// // //                                         {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
// // //                                     </p>
// // //                                 </div>
// // //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// // //                                     <p className="text-sm mb-2">Last Month</p>
// // //                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
// // //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// // //                                 </div>
// // //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// // //                                     <p className="text-sm mb-2">Average per Booking</p>
// // //                                     <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
// // //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// // //                                 </div>
// // //                             </div>

// // //                             {/* Earnings Chart */}
// // //                             <div className="bg-gray-50 rounded-xl p-6">
// // //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend</p>
// // //                                 <div className="h-48 flex items-end justify-between gap-2">
// // //                                     {earningsData.map((item) => {
// // //                                         const barHeight = (item.amount / maxEarnings) * 100;
// // //                                         return (
// // //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// // //                                                 <div 
// // //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// // //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// // //                                                 >
// // //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// // //                                                         {formatCurrency(item.amount)}
// // //                                                     </div>
// // //                                                 </div>
// // //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// // //                                             </div>
// // //                                         );
// // //                                     })}
// // //                                 </div>
// // //                             </div>

// // //                             {/* Potential Earnings Based on Daily Rates */}
// // //                             {vehicles.length > 0 && (
// // //                                 <div className="mt-8 bg-teal-50 rounded-xl p-6">
// // //                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
// // //                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //                                         <div className="bg-white rounded-lg p-4">
// // //                                             <p className="text-sm text-gray-600">If all vehicles rented</p>
// // //                                             <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
// // //                                             <p className="text-xs text-gray-500">per day</p>
// // //                                         </div>
// // //                                         <div className="bg-white rounded-lg p-4">
// // //                                             <p className="text-sm text-gray-600">Highest daily rate</p>
// // //                                             <p className="text-2xl font-bold text-teal-600">
// // //                                                 {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// // //                                             </p>
// // //                                             <p className="text-xs text-gray-500">per day</p>
// // //                                         </div>
// // //                                         <div className="bg-white rounded-lg p-4">
// // //                                             <p className="text-sm text-gray-600">Lowest daily rate</p>
// // //                                             <p className="text-2xl font-bold text-teal-600">
// // //                                                 {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// // //                                             </p>
// // //                                             <p className="text-xs text-gray-500">per day</p>
// // //                                         </div>
// // //                                         <div className="bg-white rounded-lg p-4">
// // //                                             <p className="text-sm text-gray-600">Monthly potential</p>
// // //                                             <p className="text-2xl font-bold text-teal-600">
// // //                                                 {formatCurrency(stats.totalVehicleValue * 30)}
// // //                                             </p>
// // //                                             <p className="text-xs text-gray-500">if fully booked</p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             </div>

// // //             {/* Quick Actions */}
// // //             <div className="fixed bottom-6 right-6">
// // //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// // //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                     </svg>
// // //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// // //                         Quick Actions
// // //                     </span>
// // //                 </button>
// // //             </div>

// // //             {/* Footer */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// // //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// // //                 <p className="mt-1">Agent Portal v1.0</p>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AgentDashboard;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const AgentDashboard = () => {
// //     const navigate = useNavigate();
// //     const [agentData, setAgentData] = useState(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const [activeTab, setActiveTab] = useState('overview');
// //     const [stats, setStats] = useState({
// //         totalVehicles: 0,
// //         activeBookings: 0,
// //         totalEarnings: 0,
// //         completedTrips: 0,
// //         totalVehicleValue: 0,
// //         averageDailyRate: 0,
// //         pendingBookings: 0,
// //         confirmedBookings: 0,
// //         totalBookings: 0
// //     });
// //     const [recentBookings, setRecentBookings] = useState([]);
// //     const [allBookings, setAllBookings] = useState([]);
// //     const [vehicles, setVehicles] = useState([]);
// //     const [earningsData, setEarningsData] = useState([]);
// //     const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);
// //     const [isBookingsLoading, setIsBookingsLoading] = useState(false);
    
// //     // Filter states for bookings
// //     const [bookingStatusFilter, setBookingStatusFilter] = useState('');
// //     const [bookingSearchTerm, setBookingSearchTerm] = useState('');

// //     const BASE_URL = 'http://localhost:8080';

// //     useEffect(() => {
// //         // Check if user is logged in
// //         const agentId = localStorage.getItem('agentId');
// //         const agentToken = localStorage.getItem('agentToken');
        
// //         if (!agentId || !agentToken) {
// //             navigate('/agent/login');
// //             return;
// //         }

// //         fetchAgentData();
// //         fetchAgentVehicles();
// //         fetchAgentBookings();
// //     }, [navigate]);

// //     useEffect(() => {
// //         // Filter bookings when filter or search changes
// //         if (allBookings.length > 0) {
// //             filterBookings();
// //         }
// //     }, [bookingStatusFilter, bookingSearchTerm, allBookings]);

// //     const fetchAgentData = async () => {
// //         try {
// //             const agentId = localStorage.getItem('agentId');
// //             const storedAgentData = localStorage.getItem('agentData');
            
// //             if (storedAgentData) {
// //                 setAgentData(JSON.parse(storedAgentData));
// //             }

// //             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 },
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 const freshData = response.data;
// //                 setAgentData(freshData);
// //                 localStorage.setItem('agentData', JSON.stringify(freshData));
// //             }
// //         } catch (err) {
// //             console.error('Error fetching agent data:', err);
// //             setError('Failed to load agent data');
// //         }
// //     };

// //     const fetchAgentVehicles = async () => {
// //         setIsVehiclesLoading(true);
// //         try {
// //             const agentId = localStorage.getItem('agentId');
            
// //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 },
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 const vehicleData = response.data;
// //                 setVehicles(vehicleData);
                
// //                 // Calculate vehicle stats
// //                 const totalVehicles = vehicleData.length;
// //                 const totalVehicleValue = vehicleData.reduce((sum, v) => sum + (v.dailyRentalPrice || 0), 0);
// //                 const avgDailyRate = totalVehicles > 0 ? totalVehicleValue / totalVehicles : 0;
                
// //                 setStats(prev => ({ 
// //                     ...prev, 
// //                     totalVehicles,
// //                     totalVehicleValue,
// //                     averageDailyRate: avgDailyRate
// //                 }));
// //             }
// //         } catch (err) {
// //             console.error('Error fetching vehicles:', err);
// //             setVehicles([]);
// //         } finally {
// //             setIsVehiclesLoading(false);
// //         }
// //     };

// //     const fetchCustomerDetails = async (customerId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 },
// //                 timeout: 30000,
// //             });
// //             return response.data;
// //         } catch (err) {
// //             console.error('Error fetching customer details:', err);
// //             return { firstName: 'Unknown', lastName: 'Customer' };
// //         }
// //     };

// //     const fetchVehicleDetails = async (vehicleId) => {
// //         try {
// //             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 },
// //                 timeout: 30000,
// //             });
// //             return response.data;
// //         } catch (err) {
// //             console.error('Error fetching vehicle details:', err);
// //             return { makeModel: `Vehicle #${vehicleId}`, regNumber: 'N/A' };
// //         }
// //     };

// //     const fetchAgentBookings = async () => {
// //         setIsBookingsLoading(true);
// //         try {
// //             const agentId = localStorage.getItem('agentId');
            
// //             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 },
// //                 timeout: 30000,
// //             });

// //             if (response.status === 200) {
// //                 // Filter bookings for this agent
// //                 const agentBookings = response.data.filter(booking => {
// //                     const bookingAgentId = booking.agentId || booking.agent?.id;
// //                     return bookingAgentId === parseInt(agentId);
// //                 });
                
// //                 // Enhance bookings with customer and vehicle details if needed
// //                 const enhancedBookings = await Promise.all(
// //                     agentBookings.map(async (booking) => {
// //                         let customer = booking.customer;
// //                         let vehicle = booking.vehicle;
                        
// //                         // If customer is just an ID, fetch details
// //                         if (!customer && booking.customerId) {
// //                             customer = await fetchCustomerDetails(booking.customerId);
// //                         }
                        
// //                         // If vehicle is just an ID, fetch details
// //                         if (!vehicle && booking.vehicleId) {
// //                             vehicle = await fetchVehicleDetails(booking.vehicleId);
// //                         }
                        
// //                         return {
// //                             id: booking.id,
// //                             bookingStatus: booking.bookingStatus || 'PENDING',
// //                             paymentStatus: booking.paymentStatus || 'PENDING',
// //                             pickupDate: booking.pickupDate,
// //                             dropOffDate: booking.dropOffDate,
// //                             totalPrice: booking.totalPrice || 0,
// //                             customer: customer ? {
// //                                 id: customer.id,
// //                                 firstName: customer.firstName || 'Unknown',
// //                                 lastName: customer.lastName || 'Customer',
// //                                 fullName: `${customer.firstName || ''} ${customer.lastName || ''}`.trim() || 'Unknown Customer'
// //                             } : {
// //                                 id: booking.customerId,
// //                                 firstName: 'Unknown',
// //                                 lastName: 'Customer',
// //                                 fullName: `Customer #${booking.customerId}`
// //                             },
// //                             vehicle: vehicle ? {
// //                                 id: vehicle.id,
// //                                 makeModel: vehicle.makeModel || 'Unknown Vehicle',
// //                                 regNumber: vehicle.regNumber || 'N/A',
// //                                 dailyRentalPrice: vehicle.dailyRentalPrice
// //                             } : {
// //                                 id: booking.vehicleId,
// //                                 makeModel: `Vehicle #${booking.vehicleId}`,
// //                                 regNumber: 'N/A'
// //                             },
// //                             customerId: booking.customerId || customer?.id,
// //                             vehicleId: booking.vehicleId || vehicle?.id,
// //                             agentId: booking.agentId || booking.agent?.id
// //                         };
// //                     })
// //                 );
                
// //                 setAllBookings(enhancedBookings);
// //                 setRecentBookings(enhancedBookings.slice(0, 5));
                
// //                 // Calculate booking stats
// //                 const active = enhancedBookings.filter(b => 
// //                     b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
// //                 ).length;
                
// //                 const completed = enhancedBookings.filter(b => 
// //                     b.bookingStatus === 'COMPLETED'
// //                 ).length;
                
// //                 const pending = enhancedBookings.filter(b => 
// //                     b.bookingStatus === 'PENDING'
// //                 ).length;
                
// //                 const confirmed = enhancedBookings.filter(b => 
// //                     b.bookingStatus === 'CONFIRMED'
// //                 ).length;
                
// //                 const total = enhancedBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
                
// //                 setStats(prev => ({
// //                     ...prev,
// //                     activeBookings: active,
// //                     completedTrips: completed,
// //                     totalEarnings: total,
// //                     pendingBookings: pending,
// //                     confirmedBookings: confirmed,
// //                     totalBookings: enhancedBookings.length
// //                 }));

// //                 // Generate earnings data from bookings
// //                 generateEarningsData(enhancedBookings);
// //             }
// //         } catch (err) {
// //             console.error('Error fetching bookings:', err);
            
// //             // Fallback to mock data with proper structure
// //             const agentId = localStorage.getItem('agentId');
// //             const mockBookings = [
// //                 { 
// //                     id: 1, 
// //                     customer: { firstName: 'John', lastName: 'Doe', id: 1 }, 
// //                     vehicle: { makeModel: 'Toyota Vios', regNumber: 'ABC-1234', dailyRentalPrice: 4500, id: 1 }, 
// //                     pickupDate: '2026-02-20', 
// //                     dropOffDate: '2026-02-25', 
// //                     bookingStatus: 'CONFIRMED', 
// //                     paymentStatus: 'PENDING', 
// //                     totalPrice: 12600,
// //                     customerId: 1,
// //                     vehicleId: 1,
// //                     agentId: parseInt(agentId)
// //                 }
// //             ];
            
// //             setAllBookings(mockBookings);
// //             setRecentBookings(mockBookings);
            
// //             const active = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING').length;
// //             const completed = mockBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
// //             const pending = mockBookings.filter(b => b.bookingStatus === 'PENDING').length;
// //             const confirmed = mockBookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
// //             const total = mockBookings.reduce((sum, b) => sum + b.totalPrice, 0);
            
// //             setStats(prev => ({
// //                 ...prev,
// //                 activeBookings: active,
// //                 completedTrips: completed,
// //                 totalEarnings: total,
// //                 pendingBookings: pending,
// //                 confirmedBookings: confirmed,
// //                 totalBookings: mockBookings.length
// //             }));

// //             // Generate mock earnings data
// //             generateEarningsData(mockBookings);
// //         } finally {
// //             setIsBookingsLoading(false);
// //             setIsLoading(false);
// //         }
// //     };

// //     const generateEarningsData = (bookings) => {
// //         try {
// //             if (bookings.length > 0) {
// //                 const monthlyEarnings = {};
// //                 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                
// //                 // Get last 6 months
// //                 const today = new Date();
// //                 const last6Months = [];
// //                 for (let i = 5; i >= 0; i--) {
// //                     const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
// //                     last6Months.push({
// //                         month: months[date.getMonth()],
// //                         year: date.getFullYear(),
// //                         index: date.getMonth()
// //                     });
// //                 }

// //                 // Initialize with zeros
// //                 last6Months.forEach(m => {
// //                     monthlyEarnings[`${m.month} ${m.year}`] = 0;
// //                 });

// //                 // Add earnings from completed/confirmed bookings
// //                 bookings.forEach(booking => {
// //                     if (booking.bookingStatus === 'COMPLETED' || booking.bookingStatus === 'CONFIRMED') {
// //                         const date = new Date(booking.pickupDate);
// //                         const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;
                        
// //                         // Check if this month is in our last 6 months
// //                         if (monthlyEarnings.hasOwnProperty(monthKey)) {
// //                             monthlyEarnings[monthKey] += booking.totalPrice || 0;
// //                         }
// //                     }
// //                 });
                
// //                 // Convert to array format for chart
// //                 const earningsArray = last6Months.map(m => ({
// //                     month: m.month,
// //                     amount: monthlyEarnings[`${m.month} ${m.year}`] || 0
// //                 }));
                
// //                 setEarningsData(earningsArray);
// //             } else {
// //                 // Mock earnings data
// //                 const mockEarnings = [
// //                     { month: 'Sep', amount: 75000 },
// //                     { month: 'Oct', amount: 82000 },
// //                     { month: 'Nov', amount: 95000 },
// //                     { month: 'Dec', amount: 110000 },
// //                     { month: 'Jan', amount: 98000 },
// //                     { month: 'Feb', amount: 125000 }
// //                 ];
// //                 setEarningsData(mockEarnings);
// //             }
// //         } catch (err) {
// //             console.error('Error generating earnings data:', err);
// //         }
// //     };

// //     const filterBookings = () => {
// //         let filtered = [...allBookings];
        
// //         // Apply status filter
// //         if (bookingStatusFilter) {
// //             filtered = filtered.filter(booking => 
// //                 booking.bookingStatus === bookingStatusFilter
// //             );
// //         }
        
// //         // Apply search filter
// //         if (bookingSearchTerm) {
// //             const term = bookingSearchTerm.toLowerCase();
// //             filtered = filtered.filter(booking => 
// //                 (booking.customer?.fullName?.toLowerCase().includes(term)) ||
// //                 (booking.customer?.firstName?.toLowerCase().includes(term)) ||
// //                 (booking.customer?.lastName?.toLowerCase().includes(term)) ||
// //                 (booking.vehicle?.makeModel?.toLowerCase().includes(term)) ||
// //                 booking.id?.toString().includes(term)
// //             );
// //         }
        
// //         setRecentBookings(filtered);
// //     };

// //     const handleUpdateBookingStatus = async (bookingId, newStatus) => {
// //         try {
// //             const booking = allBookings.find(b => b.id === bookingId);
// //             if (!booking) return;
            
// //             const updatedBooking = {
// //                 id: booking.id,
// //                 customerId: booking.customerId || booking.customer?.id,
// //                 vehicleId: booking.vehicleId || booking.vehicle?.id,
// //                 agentId: parseInt(localStorage.getItem('agentId')),
// //                 pickupDate: booking.pickupDate,
// //                 dropOffDate: booking.dropOffDate,
// //                 pickupLocation: booking.pickupLocation || 'Colombo',
// //                 dropOffLocation: booking.dropOffLocation || 'Colombo',
// //                 driverStatus: booking.driverStatus || 'WITHOUT_DRIVER',
// //                 bookingStatus: newStatus,
// //                 paymentStatus: booking.paymentStatus,
// //                 totalPrice: booking.totalPrice,
// //                 gpsIncluded: booking.gpsIncluded || false,
// //                 childSeatIncluded: booking.childSeatIncluded || false
// //             };
            
// //             await axios.put(`${BASE_URL}/api/v1/booking/update/${bookingId}`, updatedBooking, {
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 }
// //             });
            
// //             // Refresh bookings
// //             fetchAgentBookings();
// //             alert(`Booking status updated to ${newStatus}`);
// //         } catch (err) {
// //             console.error('Error updating booking:', err);
// //             alert('Failed to update booking status');
// //         }
// //     };

// //     const handleDeleteVehicle = async (vehicleId) => {
// //         if (!window.confirm('Are you sure you want to delete this vehicle?')) {
// //             return;
// //         }

// //         try {
// //             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
// //                 headers: {
// //                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
// //                 }
// //             });
            
// //             fetchAgentVehicles();
// //             alert('Vehicle deleted successfully!');
// //         } catch (err) {
// //             console.error('Error deleting vehicle:', err);
// //             alert('Failed to delete vehicle. Please try again.');
// //         }
// //     };

// //     const handleLogout = () => {
// //         localStorage.removeItem('agentToken');
// //         localStorage.removeItem('agentId');
// //         localStorage.removeItem('agentCompanyName');
// //         localStorage.removeItem('agentEmail');
// //         localStorage.removeItem('agentData');
// //         navigate('/agent/login');
// //     };

// //     const getStatusColor = (status) => {
// //         switch(status) {
// //             case 'CONFIRMED': return 'bg-green-100 text-green-800';
// //             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
// //             case 'COMPLETED': return 'bg-blue-100 text-blue-800';
// //             case 'CANCELLED': return 'bg-red-100 text-red-800';
// //             case 'Available': return 'bg-green-100 text-green-800';
// //             case 'Booked': return 'bg-yellow-100 text-yellow-800';
// //             case 'Maintenance': return 'bg-red-100 text-red-800';
// //             default: return 'bg-gray-100 text-gray-800';
// //         }
// //     };

// //     const getPaymentStatusColor = (status) => {
// //         switch(status) {
// //             case 'PAID': return 'bg-green-100 text-green-800';
// //             case 'PENDING': return 'bg-yellow-100 text-yellow-800';
// //             case 'FAILED': return 'bg-red-100 text-red-800';
// //             default: return 'bg-gray-100 text-gray-800';
// //         }
// //     };

// //     const formatCurrency = (amount) => {
// //         return `Rs. ${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
// //     };

// //     const formatDate = (dateString) => {
// //         if (!dateString) return 'N/A';
// //         return new Date(dateString).toLocaleDateString('en-US', {
// //             year: 'numeric',
// //             month: 'short',
// //             day: 'numeric'
// //         });
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

// //     const getFullImageUrl = (imagePath) => {
// //         if (!imagePath) return null;
// //         if (imagePath.startsWith('http')) return imagePath;
// //         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
// //             const filename = imagePath.split('\\').pop();
// //             return `${BASE_URL}/uploads/vehicles/${filename}`;
// //         }
// //         return `${BASE_URL}${imagePath}`;
// //     };

// //     const getRatingStars = (rating) => {
// //         return [...Array(5)].map((_, index) => (
// //             <svg 
// //                 key={index} 
// //                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
// //                 fill="currentColor" 
// //                 viewBox="0 0 20 20"
// //             >
// //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //             </svg>
// //         ));
// //     };

// //     const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

// //     if (isLoading) {
// //         return (
// //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
// //                 <div className="text-center">
// //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
// //                     <p className="text-gray-600">Loading your dashboard...</p>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     if (error) {
// //         return (
// //             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
// //                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
// //                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
// //                     <p className="text-gray-600 mb-6">{error}</p>
// //                     <button 
// //                         onClick={handleLogout}
// //                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// //                     >
// //                         Back to Login
// //                     </button>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// //             {/* Header */}
// //             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //                     <div className="flex flex-col md:flex-row justify-between items-center">
// //                         <div className="flex items-center mb-4 md:mb-0">
// //                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
// //                             <div>
// //                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
// //                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
// //                             </div>
// //                         </div>
// //                         <div className="flex gap-4">
// //                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
// //                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// //                                 </svg>
// //                                 Notifications
// //                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //                                     {stats.pendingBookings}
// //                                 </span>
// //                             </button>
// //                             <button 
// //                                 onClick={handleLogout}
// //                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
// //                             >
// //                                 Logout
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Main Content */}
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //                 {/* Quick Stats */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-teal-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Total Vehicles</p>
// //                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
// //                                 <p className="text-xs text-green-600">
// //                                     {vehicles.filter(v => v.status === 'Available').length} available
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-blue-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Active Bookings</p>
// //                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
// //                                 <p className="text-xs text-blue-600">{stats.pendingBookings} pending</p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-green-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Total Earnings</p>
// //                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
// //                                 <p className="text-xs text-green-600">{stats.completedTrips} completed trips</p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="bg-white rounded-2xl shadow-lg p-6">
// //                         <div className="flex items-center">
// //                             <div className="p-3 bg-purple-100 rounded-lg">
// //                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                 </svg>
// //                             </div>
// //                             <div className="ml-4">
// //                                 <p className="text-sm text-gray-600">Completion Rate</p>
// //                                 <p className="text-2xl font-bold text-gray-800">
// //                                     {stats.totalBookings > 0 
// //                                         ? Math.round((stats.completedTrips / stats.totalBookings) * 100) 
// //                                         : 0}%
// //                                 </p>
// //                                 <p className="text-xs text-purple-600">{stats.totalBookings} total bookings</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Navigation Tabs */}
// //                 <div className="bg-white rounded-2xl shadow-lg mb-8">
// //                     <div className="border-b border-gray-200">
// //                         <nav className="flex -mb-px">
// //                             <button
// //                                 onClick={() => setActiveTab('overview')}
// //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// //                                     activeTab === 'overview'
// //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// //                                         : 'text-gray-500 hover:text-gray-700'
// //                                 }`}
// //                             >
// //                                 Overview
// //                             </button>
// //                             <button
// //                                 onClick={() => setActiveTab('bookings')}
// //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// //                                     activeTab === 'bookings'
// //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// //                                         : 'text-gray-500 hover:text-gray-700'
// //                                 }`}
// //                             >
// //                                 Bookings
// //                                 {stats.pendingBookings > 0 && (
// //                                     <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
// //                                         {stats.pendingBookings}
// //                                     </span>
// //                                 )}
// //                             </button>
// //                             <button
// //                                 onClick={() => setActiveTab('vehicles')}
// //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// //                                     activeTab === 'vehicles'
// //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// //                                         : 'text-gray-500 hover:text-gray-700'
// //                                 }`}
// //                             >
// //                                 My Vehicles
// //                             </button>
// //                             <button
// //                                 onClick={() => setActiveTab('earnings')}
// //                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
// //                                     activeTab === 'earnings'
// //                                         ? 'border-b-2 border-teal-600 text-teal-600'
// //                                         : 'text-gray-500 hover:text-gray-700'
// //                                 }`}
// //                             >
// //                                 Earnings
// //                             </button>
// //                         </nav>
// //                     </div>
// //                 </div>

// //                 {/* Tab Content */}
// //                 <div className="space-y-6">
// //                     {/* Overview Tab */}
// //                     {activeTab === 'overview' && (
// //                         <>
// //                             {/* Profile Summary */}
// //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
// //                                 <div className="flex flex-col md:flex-row gap-6">
// //                                     <div className="flex-1">
// //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Company Name</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
// //                                             </div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Tagline</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
// //                                             </div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Email</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
// //                                             </div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Contact Number</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
// //                                             </div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Business Registration</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
// //                                             </div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-600">Member Since</p>
// //                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="md:w-64">
// //                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
// //                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
// //                                             <div className="flex justify-center mb-2">
// //                                                 {getRatingStars(4.5)}
// //                                             </div>
// //                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Recent Bookings */}
// //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                                 <div className="flex justify-between items-center mb-4">
// //                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
// //                                     <button 
// //                                         onClick={() => setActiveTab('bookings')}
// //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// //                                     >
// //                                         View All →
// //                                     </button>
// //                                 </div>
// //                                 {isBookingsLoading ? (
// //                                     <div className="text-center py-8">
// //                                         <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
// //                                         <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
// //                                     </div>
// //                                 ) : recentBookings.length === 0 ? (
// //                                     <div className="text-center py-8 bg-gray-50 rounded-lg">
// //                                         <p className="text-gray-500">No bookings yet</p>
// //                                     </div>
// //                                 ) : (
// //                                     <div className="overflow-x-auto">
// //                                         <table className="min-w-full">
// //                                             <thead>
// //                                                 <tr className="border-b border-gray-200">
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
// //                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// //                                                 </tr>
// //                                             </thead>
// //                                             <tbody>
// //                                                 {recentBookings.slice(0, 3).map((booking) => (
// //                                                     <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                                                         <td className="py-3 text-sm text-gray-800">
// //                                                             {booking.customer?.fullName || 
// //                                                              `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
// //                                                              `Customer #${booking.customerId}`}
// //                                                         </td>
// //                                                         <td className="py-3 text-sm text-gray-800">
// //                                                             {booking.vehicle?.makeModel || `Vehicle #${booking.vehicleId}`}
// //                                                         </td>
// //                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// //                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// //                                                         <td className="py-3">
// //                                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
// //                                                                 {booking.bookingStatus}
// //                                                             </span>
// //                                                         </td>
// //                                                         <td className="py-3">
// //                                                             <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
// //                                                                 {booking.paymentStatus}
// //                                                             </span>
// //                                                         </td>
// //                                                         <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// //                                                     </tr>
// //                                                 ))}
// //                                             </tbody>
// //                                         </table>
// //                                     </div>
// //                                 )}
// //                             </div>

// //                             {/* Vehicle Summary */}
// //                             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                                 <div className="flex justify-between items-center mb-4">
// //                                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
// //                                     <button 
// //                                         onClick={() => setActiveTab('vehicles')}
// //                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
// //                                     >
// //                                         Manage Vehicles →
// //                                     </button>
// //                                 </div>
// //                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// //                                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
// //                                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// //                                             </svg>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-sm text-gray-600">Total Vehicles</p>
// //                                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
// //                                         </div>
// //                                     </div>
// //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// //                                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
// //                                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-sm text-gray-600">Avg Daily Rate</p>
// //                                             <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
// //                                         </div>
// //                                     </div>
// //                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
// //                                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
// //                                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// //                                             </svg>
// //                                         </div>
// //                                         <div>
// //                                             <p className="text-sm text-gray-600">Available Now</p>
// //                                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </>
// //                     )}

// //                     {/* Bookings Tab */}
// //                     {activeTab === 'bookings' && (
// //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// //                             <div className="flex justify-between items-center mb-6">
// //                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
// //                                 <div className="flex gap-2">
// //                                     <select 
// //                                         value={bookingStatusFilter}
// //                                         onChange={(e) => setBookingStatusFilter(e.target.value)}
// //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     >
// //                                         <option value="">All Status</option>
// //                                         <option value="PENDING">Pending</option>
// //                                         <option value="CONFIRMED">Confirmed</option>
// //                                         <option value="COMPLETED">Completed</option>
// //                                         <option value="CANCELLED">Cancelled</option>
// //                                     </select>
// //                                     <input 
// //                                         type="text" 
// //                                         placeholder="Search bookings..." 
// //                                         value={bookingSearchTerm}
// //                                         onChange={(e) => setBookingSearchTerm(e.target.value)}
// //                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
// //                                     />
// //                                 </div>
// //                             </div>
                            
// //                             {isBookingsLoading ? (
// //                                 <div className="text-center py-12">
// //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// //                                     <p className="mt-2 text-gray-600">Loading bookings...</p>
// //                                 </div>
// //                             ) : recentBookings.length === 0 ? (
// //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                                     </svg>
// //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
// //                                     <p className="text-gray-600">No bookings match your filters</p>
// //                                 </div>
// //                             ) : (
// //                                 <div className="overflow-x-auto">
// //                                     <table className="min-w-full">
// //                                         <thead>
// //                                             <tr className="border-b border-gray-200">
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
// //                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
// //                                             </tr>
// //                                         </thead>
// //                                         <tbody>
// //                                             {recentBookings.map((booking) => (
// //                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
// //                                                     <td className="py-3 text-sm text-gray-800">#BK{booking.id}</td>
// //                                                     <td className="py-3 text-sm text-gray-800">
// //                                                         {booking.customer?.fullName || 
// //                                                          `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
// //                                                          `Customer #${booking.customerId}`}
// //                                                     </td>
// //                                                     <td className="py-3 text-sm text-gray-800">
// //                                                         {booking.vehicle?.makeModel || `Vehicle #${booking.vehicleId}`}
// //                                                     </td>
// //                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
// //                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
// //                                                     <td className="py-3">
// //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
// //                                                             {booking.bookingStatus}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="py-3">
// //                                                         <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
// //                                                             {booking.paymentStatus}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
// //                                                     <td className="py-3">
// //                                                         <button 
// //                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'CONFIRMED')}
// //                                                             className="text-green-600 hover:text-green-800 mr-2 text-sm"
// //                                                             disabled={booking.bookingStatus === 'CONFIRMED'}
// //                                                         >
// //                                                             Confirm
// //                                                         </button>
// //                                                         <button 
// //                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'COMPLETED')}
// //                                                             className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
// //                                                             disabled={booking.bookingStatus === 'COMPLETED'}
// //                                                         >
// //                                                             Complete
// //                                                         </button>
// //                                                         <button className="text-teal-600 hover:text-teal-800 text-sm">
// //                                                             View
// //                                                         </button>
// //                                                     </td>
// //                                                 </tr>
// //                                             ))}
// //                                         </tbody>
// //                                     </table>
// //                                 </div>
// //                             )}
// //                         </div>
// //                     )}

// //                     {/* Vehicles Tab */}
// //                     {activeTab === 'vehicles' && (
// //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// //                             <div className="flex justify-between items-center mb-6">
// //                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
// //                                 <a 
// //                                     href="/vehicle/register" 
// //                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
// //                                 >
// //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                                     </svg>
// //                                     Add New Vehicle
// //                                 </a>
// //                             </div>

// //                             {isVehiclesLoading ? (
// //                                 <div className="text-center py-12">
// //                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
// //                                     <p className="mt-2 text-gray-600">Loading vehicles...</p>
// //                                 </div>
// //                             ) : vehicles.length === 0 ? (
// //                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
// //                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// //                                     </svg>
// //                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
// //                                     <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
// //                                     <a 
// //                                         href="/vehicle/register" 
// //                                         className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
// //                                     >
// //                                         Add Your First Vehicle
// //                                     </a>
// //                                 </div>
// //                             ) : (
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                                     {vehicles.map((vehicle) => (
// //                                         <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
// //                                             {/* Vehicle Image */}
// //                                             <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
// //                                                 {vehicle.vehicleImage ? (
// //                                                     <img 
// //                                                         src={getFullImageUrl(vehicle.vehicleImage)} 
// //                                                         alt={vehicle.makeModel}
// //                                                         className="w-full h-full object-cover"
// //                                                         onError={(e) => {
// //                                                             e.target.onerror = null;
// //                                                             e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
// //                                                         }}
// //                                                     />
// //                                                 ) : (
// //                                                     <div className="w-full h-full flex items-center justify-center">
// //                                                         <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                             <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
// //                                                             <circle cx="8" cy="16" r="2" strokeWidth={1}/>
// //                                                             <circle cx="16" cy="16" r="2" strokeWidth={1}/>
// //                                                             <path d="M16 8h2" strokeWidth={1}/>
// //                                                             <path d="M6 8h2" strokeWidth={1}/>
// //                                                         </svg>
// //                                                     </div>
// //                                                 )}
// //                                                 <div className="absolute top-2 right-2">
// //                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
// //                                                         {vehicle.status || 'Available'}
// //                                                     </span>
// //                                                 </div>
// //                                                 {vehicle.dailyRentalPrice && (
// //                                                     <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
// //                                                         {formatCurrency(vehicle.dailyRentalPrice)}/day
// //                                                     </div>
// //                                                 )}
// //                                             </div>

// //                                             <div className="p-4">
// //                                                 <div className="flex justify-between items-start mb-2">
// //                                                     <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
// //                                                     <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
// //                                                 </div>
                                                
// //                                                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
// //                                                     <div>
// //                                                         <p className="text-gray-500">Year</p>
// //                                                         <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
// //                                                     </div>
// //                                                     <div>
// //                                                         <p className="text-gray-500">Color</p>
// //                                                         <p className="font-medium text-gray-800">{vehicle.color}</p>
// //                                                     </div>
// //                                                     <div>
// //                                                         <p className="text-gray-500">Fuel</p>
// //                                                         <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
// //                                                     </div>
// //                                                     <div>
// //                                                         <p className="text-gray-500">Transmission</p>
// //                                                         <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
// //                                                     </div>
// //                                                     <div>
// //                                                         <p className="text-gray-500">Seats</p>
// //                                                         <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
// //                                                     </div>
// //                                                     <div>
// //                                                         <p className="text-gray-500">Daily Rate</p>
// //                                                         <p className="font-medium text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</p>
// //                                                     </div>
// //                                                 </div>

// //                                                 <div className="flex gap-2">
// //                                                     <a 
// //                                                         href={`/vehicle/edit/${vehicle.id}`}
// //                                                         className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
// //                                                     >
// //                                                         Edit
// //                                                     </a>
// //                                                     <button 
// //                                                         onClick={() => handleDeleteVehicle(vehicle.id)}
// //                                                         className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
// //                                                     >
// //                                                         Delete
// //                                                     </button>
// //                                                     <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
// //                                                         Details
// //                                                     </button>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </div>
// //                     )}

// //                     {/* Earnings Tab */}
// //                     {activeTab === 'earnings' && (
// //                         <div className="bg-white rounded-2xl shadow-lg p-6">
// //                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
// //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
// //                                     <p className="text-sm mb-2">This Month</p>
// //                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
// //                                     <p className="text-xs mt-2">
// //                                         {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
// //                                         {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
// //                                     </p>
// //                                 </div>
// //                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
// //                                     <p className="text-sm mb-2">Last Month</p>
// //                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
// //                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
// //                                 </div>
// //                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
// //                                     <p className="text-sm mb-2">Average per Booking</p>
// //                                     <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
// //                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
// //                                 </div>
// //                             </div>

// //                             {/* Earnings Chart */}
// //                             <div className="bg-gray-50 rounded-xl p-6">
// //                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
// //                                 <div className="h-48 flex items-end justify-between gap-2">
// //                                     {earningsData.map((item) => {
// //                                         const barHeight = (item.amount / maxEarnings) * 100;
// //                                         return (
// //                                             <div key={item.month} className="flex-1 flex flex-col items-center">
// //                                                 <div 
// //                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
// //                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
// //                                                 >
// //                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
// //                                                         {formatCurrency(item.amount)}
// //                                                     </div>
// //                                                 </div>
// //                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
// //                                             </div>
// //                                         );
// //                                     })}
// //                                 </div>
// //                             </div>

// //                             {/* Potential Earnings Based on Daily Rates */}
// //                             {vehicles.length > 0 && (
// //                                 <div className="mt-8 bg-teal-50 rounded-xl p-6">
// //                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
// //                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                                         <div className="bg-white rounded-lg p-4">
// //                                             <p className="text-sm text-gray-600">If all vehicles rented</p>
// //                                             <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
// //                                             <p className="text-xs text-gray-500">per day</p>
// //                                         </div>
// //                                         <div className="bg-white rounded-lg p-4">
// //                                             <p className="text-sm text-gray-600">Highest daily rate</p>
// //                                             <p className="text-2xl font-bold text-teal-600">
// //                                                 {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// //                                             </p>
// //                                             <p className="text-xs text-gray-500">per day</p>
// //                                         </div>
// //                                         <div className="bg-white rounded-lg p-4">
// //                                             <p className="text-sm text-gray-600">Lowest daily rate</p>
// //                                             <p className="text-2xl font-bold text-teal-600">
// //                                                 {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
// //                                             </p>
// //                                             <p className="text-xs text-gray-500">per day</p>
// //                                         </div>
// //                                         <div className="bg-white rounded-lg p-4">
// //                                             <p className="text-sm text-gray-600">Monthly potential</p>
// //                                             <p className="text-2xl font-bold text-teal-600">
// //                                                 {formatCurrency(stats.totalVehicleValue * 30)}
// //                                             </p>
// //                                             <p className="text-xs text-gray-500">if fully booked</p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             )}
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>

// //             {/* Quick Actions */}
// //             <div className="fixed bottom-6 right-6">
// //                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
// //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                     </svg>
// //                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
// //                         Quick Actions
// //                     </span>
// //                 </button>
// //             </div>

// //             {/* Footer */}
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
// //                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
// //                 <p className="mt-1">Agent Portal v1.0</p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AgentDashboard;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AgentDashboard = () => {
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
    
//     // Filter states for bookings
//     const [bookingStatusFilter, setBookingStatusFilter] = useState('');
//     const [bookingSearchTerm, setBookingSearchTerm] = useState('');

//     const BASE_URL = 'http://localhost:8080';

//     useEffect(() => {
//         // Check if user is logged in
//         const agentId = localStorage.getItem('agentId');
//         const agentToken = localStorage.getItem('agentToken');
        
//         if (!agentId || !agentToken) {
//             navigate('/agent/login');
//             return;
//         }

//         fetchAgentData();
//         fetchAgentVehicles();
//         fetchAgentBookings();
//     }, [navigate]);

//     useEffect(() => {
//         // Filter bookings when filter or search changes
//         if (allBookings.length > 0) {
//             filterBookings();
//         }
//     }, [bookingStatusFilter, bookingSearchTerm, allBookings]);

//     const fetchAgentData = async () => {
//         try {
//             const agentId = localStorage.getItem('agentId');
//             const storedAgentData = localStorage.getItem('agentData');
            
//             if (storedAgentData) {
//                 setAgentData(JSON.parse(storedAgentData));
//             }

//             const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
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
//     };

//     const fetchAgentVehicles = async () => {
//         setIsVehiclesLoading(true);
//         try {
//             const agentId = localStorage.getItem('agentId');
            
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/byAgent/${agentId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 const vehicleData = response.data;
//                 setVehicles(vehicleData);
                
//                 // Calculate vehicle stats
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
//     };

//     const fetchCustomerDetails = async (customerId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
//                 timeout: 30000,
//             });
//             return response.data;
//         } catch (err) {
//             console.error('Error fetching customer details:', err);
//             return { firstName: 'Unknown', lastName: 'Customer' };
//         }
//     };

//     const fetchVehicleDetails = async (vehicleId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
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
//     };

//     const fetchAgentBookings = async () => {
//         setIsBookingsLoading(true);
//         try {
//             const agentId = localStorage.getItem('agentId');
            
//             const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 // Filter bookings for this agent
//                 const agentBookings = response.data.filter(booking => {
//                     const bookingAgentId = booking.agentId || booking.agent?.id;
//                     return bookingAgentId === parseInt(agentId);
//                 });
                
//                 // Enhance bookings with customer and vehicle details if needed
//                 const enhancedBookings = await Promise.all(
//                     agentBookings.map(async (booking) => {
//                         let customer = booking.customer;
//                         let vehicle = booking.vehicle;
                        
//                         // If customer is just an ID, fetch details
//                         if (!customer && booking.customerId) {
//                             customer = await fetchCustomerDetails(booking.customerId);
//                         }
                        
//                         // If vehicle is just an ID, fetch details
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
//                 setRecentBookings(enhancedBookings.slice(0, 5));
                
//                 // Calculate booking stats
//                 const active = enhancedBookings.filter(b => 
//                     b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
//                 ).length;
                
//                 const completed = enhancedBookings.filter(b => 
//                     b.bookingStatus === 'COMPLETED'
//                 ).length;
                
//                 const pending = enhancedBookings.filter(b => 
//                     b.bookingStatus === 'PENDING'
//                 ).length;
                
//                 const confirmed = enhancedBookings.filter(b => 
//                     b.bookingStatus === 'CONFIRMED'
//                 ).length;
                
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

//                 // Generate earnings data from bookings
//                 generateEarningsData(enhancedBookings);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
            
//             // Fallback to mock data with proper structure
//             const agentId = localStorage.getItem('agentId');
//             const mockBookings = [
//                 { 
//                     id: 1, 
//                     customer: { firstName: 'John', lastName: 'Doe', id: 1 }, 
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
//             const completed = mockBookings.filter(b => b.bookingStatus === 'COMPLETED').length;
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

//             // Generate mock earnings data
//             generateEarningsData(mockBookings);
//         } finally {
//             setIsBookingsLoading(false);
//             setIsLoading(false);
//         }
//     };

//     const generateEarningsData = (bookings) => {
//         try {
//             if (bookings.length > 0) {
//                 // const monthlyEarnings = {};
//                 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                
//                 // Get last 6 months
//                 const today = new Date();
//                 const last6Months = [];
//                 for (let i = 5; i >= 0; i--) {
//                     const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
//                     last6Months.push({
//                         month: months[date.getMonth()],
//                         year: date.getFullYear(),
//                         index: date.getMonth(),
//                         key: `${months[date.getMonth()]} ${date.getFullYear()}`
//                     });
//                 }

//                 // Initialize with zeros using Object.fromEntries
//                 const initialEarnings = Object.fromEntries(
//                     last6Months.map(m => [m.key, 0])
//                 );

//                 // Add earnings from completed/confirmed bookings
//                 bookings.forEach(booking => {
//                     if (booking.bookingStatus === 'COMPLETED' || booking.bookingStatus === 'CONFIRMED') {
//                         const date = new Date(booking.pickupDate);
//                         const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;
                        
//                         // Check if this month is in our last 6 months using Object.hasOwn or in operator
//                         if (Object.prototype.hasOwnProperty.call(initialEarnings, monthKey)) {
//                             initialEarnings[monthKey] += booking.totalPrice || 0;
//                         }
//                     }
//                 });
                
//                 // Convert to array format for chart
//                 const earningsArray = last6Months.map(m => ({
//                     month: m.month,
//                     amount: initialEarnings[m.key] || 0
//                 }));
                
//                 setEarningsData(earningsArray);
//             } else {
//                 // Mock earnings data
//                 const mockEarnings = [
//                     { month: 'Sep', amount: 75000 },
//                     { month: 'Oct', amount: 82000 },
//                     { month: 'Nov', amount: 95000 },
//                     { month: 'Dec', amount: 110000 },
//                     { month: 'Jan', amount: 98000 },
//                     { month: 'Feb', amount: 125000 }
//                 ];
//                 setEarningsData(mockEarnings);
//             }
//         } catch (err) {
//             console.error('Error generating earnings data:', err);
//         }
//     };

//     const filterBookings = () => {
//         let filtered = [...allBookings];
        
//         // Apply status filter
//         if (bookingStatusFilter) {
//             filtered = filtered.filter(booking => 
//                 booking.bookingStatus === bookingStatusFilter
//             );
//         }
        
//         // Apply search filter
//         if (bookingSearchTerm) {
//             const term = bookingSearchTerm.toLowerCase();
//             filtered = filtered.filter(booking => 
//                 (booking.customer?.fullName?.toLowerCase().includes(term)) ||
//                 (booking.customer?.firstName?.toLowerCase().includes(term)) ||
//                 (booking.customer?.lastName?.toLowerCase().includes(term)) ||
//                 (booking.vehicle?.makeModel?.toLowerCase().includes(term)) ||
//                 (booking.vehicle?.regNumber?.toLowerCase().includes(term)) ||
//                 (booking.vehicle?.displayInfo?.toLowerCase().includes(term)) ||
//                 booking.id?.toString().includes(term)
//             );
//         }
        
//         setRecentBookings(filtered);
//     };

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
            
//             // Refresh bookings
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
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 }
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
//             case 'COMPLETED': return 'bg-blue-100 text-blue-800';
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

//     const getRatingStars = (rating) => {
//         return [...Array(5)].map((_, index) => (
//             <svg 
//                 key={index} 
//                 className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
//                 fill="currentColor" 
//                 viewBox="0 0 20 20"
//             >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//         ));
//     };

//     const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading your dashboard...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
//                     <p className="text-gray-600 mb-6">{error}</p>
//                     <button 
//                         onClick={handleLogout}
//                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
//                     >
//                         Back to Login
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         <div className="flex items-center mb-4 md:mb-0">
//                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
//                             <div>
//                                 <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
//                                 <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
//                             </div>
//                         </div>
//                         <div className="flex gap-4">
//                             <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                                 </svg>
//                                 Notifications
//                                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                                     {stats.pendingBookings}
//                                 </span>
//                             </button>
//                             <button 
//                                 onClick={handleLogout}
//                                 className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-teal-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Total Vehicles</p>
//                                 <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
//                                 <p className="text-xs text-green-600">
//                                     {vehicles.filter(v => v.status === 'Available').length} available
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-blue-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Active Bookings</p>
//                                 <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
//                                 <p className="text-xs text-blue-600">{stats.pendingBookings} pending</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-green-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Total Earnings</p>
//                                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
//                                 <p className="text-xs text-green-600">{stats.completedTrips} completed trips</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <div className="flex items-center">
//                             <div className="p-3 bg-purple-100 rounded-lg">
//                                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <div className="ml-4">
//                                 <p className="text-sm text-gray-600">Completion Rate</p>
//                                 <p className="text-2xl font-bold text-gray-800">
//                                     {stats.totalBookings > 0 
//                                         ? Math.round((stats.completedTrips / stats.totalBookings) * 100) 
//                                         : 0}%
//                                 </p>
//                                 <p className="text-xs text-purple-600">{stats.totalBookings} total bookings</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Navigation Tabs */}
//                 <div className="bg-white rounded-2xl shadow-lg mb-8">
//                     <div className="border-b border-gray-200">
//                         <nav className="flex -mb-px">
//                             <button
//                                 onClick={() => setActiveTab('overview')}
//                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                                     activeTab === 'overview'
//                                         ? 'border-b-2 border-teal-600 text-teal-600'
//                                         : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                             >
//                                 Overview
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('bookings')}
//                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                                     activeTab === 'bookings'
//                                         ? 'border-b-2 border-teal-600 text-teal-600'
//                                         : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                             >
//                                 Bookings
//                                 {stats.pendingBookings > 0 && (
//                                     <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
//                                         {stats.pendingBookings}
//                                     </span>
//                                 )}
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('vehicles')}
//                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                                     activeTab === 'vehicles'
//                                         ? 'border-b-2 border-teal-600 text-teal-600'
//                                         : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                             >
//                                 My Vehicles
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('earnings')}
//                                 className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                                     activeTab === 'earnings'
//                                         ? 'border-b-2 border-teal-600 text-teal-600'
//                                         : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                             >
//                                 Earnings
//                             </button>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="space-y-6">
//                     {/* Overview Tab */}
//                     {activeTab === 'overview' && (
//                         <>
//                             {/* Profile Summary */}
//                             <div className="bg-white rounded-2xl shadow-lg p-6">
//                                 <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
//                                 <div className="flex flex-col md:flex-row gap-6">
//                                     <div className="flex-1">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Company Name</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Tagline</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Email</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.email}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Contact Number</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Business Registration</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-600">Member Since</p>
//                                                 <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="md:w-64">
//                                         <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
//                                             <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
//                                             <div className="flex justify-center mb-2">
//                                                 {getRatingStars(4.5)}
//                                             </div>
//                                             <p className="text-sm text-gray-600">Based on 128 reviews</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Recent Bookings */}
//                             <div className="bg-white rounded-2xl shadow-lg p-6">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
//                                     <button 
//                                         onClick={() => setActiveTab('bookings')}
//                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
//                                     >
//                                         View All →
//                                     </button>
//                                 </div>
//                                 {isBookingsLoading ? (
//                                     <div className="text-center py-8">
//                                         <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
//                                         <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
//                                     </div>
//                                 ) : recentBookings.length === 0 ? (
//                                     <div className="text-center py-8 bg-gray-50 rounded-lg">
//                                         <p className="text-gray-500">No bookings yet</p>
//                                     </div>
//                                 ) : (
//                                     <div className="overflow-x-auto">
//                                         <table className="min-w-full">
//                                             <thead>
//                                                 <tr className="border-b border-gray-200">
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
//                                                     <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {recentBookings.slice(0, 3).map((booking) => (
//                                                     <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
//                                                         <td className="py-3 text-sm text-gray-800">
//                                                             {booking.customer?.fullName || 
//                                                              `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
//                                                              `Customer #${booking.customerId}`}
//                                                         </td>
//                                                         <td className="py-3 text-sm text-gray-800">
//                                                             {booking.vehicle?.displayInfo || 
//                                                              `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'}`}
//                                                         </td>
//                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
//                                                         <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
//                                                         <td className="py-3">
//                                                             <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
//                                                                 {booking.bookingStatus}
//                                                             </span>
//                                                         </td>
//                                                         <td className="py-3">
//                                                             <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                                                                 {booking.paymentStatus}
//                                                             </span>
//                                                         </td>
//                                                         <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Vehicle Summary */}
//                             <div className="bg-white rounded-2xl shadow-lg p-6">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
//                                     <button 
//                                         onClick={() => setActiveTab('vehicles')}
//                                         className="text-sm text-teal-600 hover:text-teal-800 font-medium"
//                                     >
//                                         Manage Vehicles →
//                                     </button>
//                                 </div>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                                         <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
//                                             <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-sm text-gray-600">Total Vehicles</p>
//                                             <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
//                                             <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-sm text-gray-600">Avg Daily Rate</p>
//                                             <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//                                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-sm text-gray-600">Available Now</p>
//                                             <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )}

//                     {/* Bookings Tab */}
//                     {activeTab === 'bookings' && (
//                         <div className="bg-white rounded-2xl shadow-lg p-6">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
//                                 <div className="flex gap-2">
//                                     <select 
//                                         value={bookingStatusFilter}
//                                         onChange={(e) => setBookingStatusFilter(e.target.value)}
//                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     >
//                                         <option value="">All Status</option>
//                                         <option value="PENDING">Pending</option>
//                                         <option value="CONFIRMED">Confirmed</option>
//                                         <option value="COMPLETED">Completed</option>
//                                         <option value="CANCELLED">Cancelled</option>
//                                     </select>
//                                     <input 
//                                         type="text" 
//                                         placeholder="Search bookings..." 
//                                         value={bookingSearchTerm}
//                                         onChange={(e) => setBookingSearchTerm(e.target.value)}
//                                         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                                     />
//                                 </div>
//                             </div>
                            
//                             {isBookingsLoading ? (
//                                 <div className="text-center py-12">
//                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                                     <p className="mt-2 text-gray-600">Loading bookings...</p>
//                                 </div>
//                             ) : recentBookings.length === 0 ? (
//                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
//                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
//                                     <p className="text-gray-600">No bookings match your filters</p>
//                                 </div>
//                             ) : (
//                                 <div className="overflow-x-auto">
//                                     <table className="min-w-full">
//                                         <thead>
//                                             <tr className="border-b border-gray-200">
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
//                                                 <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {recentBookings.map((booking) => (
//                                                 <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
//                                                     <td className="py-3 text-sm text-gray-800">#BK{booking.id}</td>
//                                                     <td className="py-3 text-sm text-gray-800">
//                                                         {booking.customer?.fullName || 
//                                                          `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
//                                                          `Customer #${booking.customerId}`}
//                                                     </td>
//                                                     <td className="py-3 text-sm text-gray-800">
//                                                         {booking.vehicle?.displayInfo || 
//                                                          `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
//                                                     </td>
//                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
//                                                     <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
//                                                     <td className="py-3">
//                                                         <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
//                                                             {booking.bookingStatus}
//                                                         </span>
//                                                     </td>
//                                                     <td className="py-3">
//                                                         <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                                                             {booking.paymentStatus}
//                                                         </span>
//                                                     </td>
//                                                     <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
//                                                     <td className="py-3">
//                                                         <button 
//                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'CONFIRMED')}
//                                                             className="text-green-600 hover:text-green-800 mr-2 text-sm"
//                                                             disabled={booking.bookingStatus === 'CONFIRMED'}
//                                                         >
//                                                             Confirm
//                                                         </button>
//                                                         <button 
//                                                             onClick={() => handleUpdateBookingStatus(booking.id, 'COMPLETED')}
//                                                             className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
//                                                             disabled={booking.bookingStatus === 'COMPLETED'}
//                                                         >
//                                                             Complete
//                                                         </button>
//                                                         <button className="text-teal-600 hover:text-teal-800 text-sm">
//                                                             View
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Vehicles Tab */}
//                     {activeTab === 'vehicles' && (
//                         <div className="bg-white rounded-2xl shadow-lg p-6">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
//                                 <a 
//                                     href="/vehicle/register" 
//                                     className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
//                                 >
//                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                     </svg>
//                                     Add New Vehicle
//                                 </a>
//                             </div>

//                             {isVehiclesLoading ? (
//                                 <div className="text-center py-12">
//                                     <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
//                                     <p className="mt-2 text-gray-600">Loading vehicles...</p>
//                                 </div>
//                             ) : vehicles.length === 0 ? (
//                                 <div className="text-center py-12 bg-gray-50 rounded-xl">
//                                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                     </svg>
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
//                                     <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
//                                     <a 
//                                         href="/vehicle/register" 
//                                         className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
//                                     >
//                                         Add Your First Vehicle
//                                     </a>
//                                 </div>
//                             ) : (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {vehicles.map((vehicle) => (
//                                         <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
//                                             {/* Vehicle Image */}
//                                             <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
//                                                 {vehicle.vehicleImage ? (
//                                                     <img 
//                                                         src={getFullImageUrl(vehicle.vehicleImage)} 
//                                                         alt={vehicle.makeModel}
//                                                         className="w-full h-full object-cover"
//                                                         onError={(e) => {
//                                                             e.target.onerror = null;
//                                                             e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
//                                                         }}
//                                                     />
//                                                 ) : (
//                                                     <div className="w-full h-full flex items-center justify-center">
//                                                         <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                             <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
//                                                             <circle cx="8" cy="16" r="2" strokeWidth={1}/>
//                                                             <circle cx="16" cy="16" r="2" strokeWidth={1}/>
//                                                             <path d="M16 8h2" strokeWidth={1}/>
//                                                             <path d="M6 8h2" strokeWidth={1}/>
//                                                         </svg>
//                                                     </div>
//                                                 )}
//                                                 <div className="absolute top-2 right-2">
//                                                     <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
//                                                         {vehicle.status || 'Available'}
//                                                     </span>
//                                                 </div>
//                                                 {vehicle.dailyRentalPrice && (
//                                                     <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
//                                                         {formatCurrency(vehicle.dailyRentalPrice)}/day
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             <div className="p-4">
//                                                 <div className="flex justify-between items-start mb-2">
//                                                     <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
//                                                     <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
//                                                 </div>
                                                
//                                                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
//                                                     <div>
//                                                         <p className="text-gray-500">Year</p>
//                                                         <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500">Color</p>
//                                                         <p className="font-medium text-gray-800">{vehicle.color}</p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500">Fuel</p>
//                                                         <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500">Transmission</p>
//                                                         <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500">Seats</p>
//                                                         <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500">Daily Rate</p>
//                                                         <p className="font-medium text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex gap-2">
//                                                     <a 
//                                                         href={`/vehicle/edit/${vehicle.id}`}
//                                                         className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
//                                                     >
//                                                         Edit
//                                                     </a>
//                                                     <button 
//                                                         onClick={() => handleDeleteVehicle(vehicle.id)}
//                                                         className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
//                                                     >
//                                                         Delete
//                                                     </button>
//                                                     <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
//                                                         Details
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Earnings Tab */}
//                     {activeTab === 'earnings' && (
//                         <div className="bg-white rounded-2xl shadow-lg p-6">
//                             <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                                 <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
//                                     <p className="text-sm mb-2">This Month</p>
//                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
//                                     <p className="text-xs mt-2">
//                                         {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
//                                         {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
//                                     </p>
//                                 </div>
//                                 <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
//                                     <p className="text-sm mb-2">Last Month</p>
//                                     <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
//                                     <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
//                                 </div>
//                                 <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
//                                     <p className="text-sm mb-2">Average per Booking</p>
//                                     <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
//                                     <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
//                                 </div>
//                             </div>

//                             {/* Earnings Chart */}
//                             <div className="bg-gray-50 rounded-xl p-6">
//                                 <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
//                                 <div className="h-48 flex items-end justify-between gap-2">
//                                     {earningsData.map((item) => {
//                                         const barHeight = (item.amount / maxEarnings) * 100;
//                                         return (
//                                             <div key={item.month} className="flex-1 flex flex-col items-center">
//                                                 <div 
//                                                     className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
//                                                     style={{ height: `${barHeight}%`, minHeight: '40px' }}
//                                                 >
//                                                     <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
//                                                         {formatCurrency(item.amount)}
//                                                     </div>
//                                                 </div>
//                                                 <span className="text-xs text-gray-600 mt-2">{item.month}</span>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>

//                             {/* Potential Earnings Based on Daily Rates */}
//                             {vehicles.length > 0 && (
//                                 <div className="mt-8 bg-teal-50 rounded-xl p-6">
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                                         <div className="bg-white rounded-lg p-4">
//                                             <p className="text-sm text-gray-600">If all vehicles rented</p>
//                                             <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
//                                             <p className="text-xs text-gray-500">per day</p>
//                                         </div>
//                                         <div className="bg-white rounded-lg p-4">
//                                             <p className="text-sm text-gray-600">Highest daily rate</p>
//                                             <p className="text-2xl font-bold text-teal-600">
//                                                 {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
//                                             </p>
//                                             <p className="text-xs text-gray-500">per day</p>
//                                         </div>
//                                         <div className="bg-white rounded-lg p-4">
//                                             <p className="text-sm text-gray-600">Lowest daily rate</p>
//                                             <p className="text-2xl font-bold text-teal-600">
//                                                 {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
//                                             </p>
//                                             <p className="text-xs text-gray-500">per day</p>
//                                         </div>
//                                         <div className="bg-white rounded-lg p-4">
//                                             <p className="text-sm text-gray-600">Monthly potential</p>
//                                             <p className="text-2xl font-bold text-teal-600">
//                                                 {formatCurrency(stats.totalVehicleValue * 30)}
//                                             </p>
//                                             <p className="text-xs text-gray-500">if fully booked</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="fixed bottom-6 right-6">
//                 <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                     <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
//                         Quick Actions
//                     </span>
//                 </button>
//             </div>

//             {/* Footer */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
//                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
//                 <p className="mt-1">Agent Portal v1.0</p>
//             </div>
//         </div>
//     );
// };

// export default AgentDashboard;



import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AgentDashboard = () => {
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
    
    // Filter states for bookings
    const [bookingStatusFilter, setBookingStatusFilter] = useState('');
    const [bookingSearchTerm, setBookingSearchTerm] = useState('');

    const BASE_URL = 'http://localhost:8080';

    // Helper functions
    const fetchCustomerDetails = useCallback(async (customerId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/customer/${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
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
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
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
                
                // Get last 6 months
                const today = new Date();
                const last6Months = [];
                for (let i = 5; i >= 0; i--) {
                    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
                    last6Months.push({
                        month: months[date.getMonth()],
                        year: date.getFullYear(),
                        index: date.getMonth(),
                        key: `${months[date.getMonth()]} ${date.getFullYear()}`
                    });
                }

                // Initialize with zeros
                const initialEarnings = Object.fromEntries(
                    last6Months.map(m => [m.key, 0])
                );

                // Add earnings from completed/confirmed bookings
                bookings.forEach(booking => {
                    if (booking.bookingStatus === 'COMPLETED' || booking.bookingStatus === 'CONFIRMED') {
                        const date = new Date(booking.pickupDate);
                        const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;
                        
                        if (Object.prototype.hasOwnProperty.call(initialEarnings, monthKey)) {
                            initialEarnings[monthKey] += booking.totalPrice || 0;
                        }
                    }
                });
                
                // Convert to array format for chart
                const earningsArray = last6Months.map(m => ({
                    month: m.month,
                    amount: initialEarnings[m.key] || 0
                }));
                
                setEarningsData(earningsArray);
            } else {
                // Mock earnings data
                const mockEarnings = [
                    { month: 'Sep', amount: 75000 },
                    { month: 'Oct', amount: 82000 },
                    { month: 'Nov', amount: 95000 },
                    { month: 'Dec', amount: 110000 },
                    { month: 'Jan', amount: 98000 },
                    { month: 'Feb', amount: 125000 }
                ];
                setEarningsData(mockEarnings);
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
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
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
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                const vehicleData = response.data;
                setVehicles(vehicleData);
                
                // Calculate vehicle stats
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
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                // Filter bookings for this agent
                const agentBookings = response.data.filter(booking => {
                    const bookingAgentId = booking.agentId || booking.agent?.id;
                    return bookingAgentId === parseInt(agentId);
                });
                
                // Enhance bookings with customer and vehicle details if needed
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
                setRecentBookings(enhancedBookings.slice(0, 5));
                
                // Calculate booking stats
                const active = enhancedBookings.filter(b => 
                    b.bookingStatus === 'CONFIRMED' || b.bookingStatus === 'PENDING'
                ).length;
                
                const completed = enhancedBookings.filter(b => 
                    b.bookingStatus === 'COMPLETED'
                ).length;
                
                const pending = enhancedBookings.filter(b => 
                    b.bookingStatus === 'PENDING'
                ).length;
                
                const confirmed = enhancedBookings.filter(b => 
                    b.bookingStatus === 'CONFIRMED'
                ).length;
                
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
            
            // Fallback to mock data
            const agentId = localStorage.getItem('agentId');
            const mockBookings = [
                { 
                    id: 1, 
                    customer: { firstName: 'John', lastName: 'Doe', id: 1 }, 
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

    // Filter bookings function
    const filterBookings = useCallback(() => {
        let filtered = [...allBookings];
        
        // Apply status filter
        if (bookingStatusFilter) {
            filtered = filtered.filter(booking => 
                booking.bookingStatus === bookingStatusFilter
            );
        }
        
        // Apply search filter
        if (bookingSearchTerm) {
            const term = bookingSearchTerm.toLowerCase();
            filtered = filtered.filter(booking => 
                (booking.customer?.fullName?.toLowerCase().includes(term)) ||
                (booking.customer?.firstName?.toLowerCase().includes(term)) ||
                (booking.customer?.lastName?.toLowerCase().includes(term)) ||
                (booking.vehicle?.makeModel?.toLowerCase().includes(term)) ||
                (booking.vehicle?.regNumber?.toLowerCase().includes(term)) ||
                (booking.vehicle?.displayInfo?.toLowerCase().includes(term)) ||
                booking.id?.toString().includes(term)
            );
        }
        
        setRecentBookings(filtered);
    }, [allBookings, bookingStatusFilter, bookingSearchTerm]);

    // Initial data fetch useEffect
    useEffect(() => {
        // Check if user is logged in
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

    // Filter bookings useEffect
    useEffect(() => {
        // Filter bookings when filter or search changes
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
            
            // Refresh bookings
            fetchAgentBookings();
            alert(`Booking status updated to ${newStatus}`);
        } catch (err) {
            console.error('Error updating booking:', err);
            alert('Failed to update booking status');
        }
    };

    const handleDeleteVehicle = async (vehicleId) => {
        if (!window.confirm('Are you sure you want to delete this vehicle?')) {
            return;
        }

        try {
            await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${vehicleId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                }
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

    // Utility functions
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
            case 'FAILED': return 'bg-red-100 text-red-800';
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
        if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
            const filename = imagePath.split('\\').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        return `${BASE_URL}${imagePath}`;
    };

    const getRatingStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg 
                key={index} 
                className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    const maxEarnings = Math.max(...earningsData.map(item => item.amount), 1);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button 
                        onClick={handleLogout}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
                                <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                Notifications
                                <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {stats.pendingBookings}
                                </span>
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-teal-100 rounded-lg">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Vehicles</p>
                                <p className="text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
                                <p className="text-xs text-green-600">
                                    {vehicles.filter(v => v.status === 'Available').length} available
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Active Bookings</p>
                                <p className="text-2xl font-bold text-gray-800">{stats.activeBookings}</p>
                                <p className="text-xs text-blue-600">{stats.pendingBookings} pending</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Earnings</p>
                                <p className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalEarnings)}</p>
                                <p className="text-xs text-green-600">{stats.completedTrips} completed trips</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Completion Rate</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {stats.totalBookings > 0 
                                        ? Math.round((stats.completedTrips / stats.totalBookings) * 100) 
                                        : 0}%
                                </p>
                                <p className="text-xs text-purple-600">{stats.totalBookings} total bookings</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-2xl shadow-lg mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`py-4 px-6 font-medium text-sm transition duration-200 ${
                                    activeTab === 'overview'
                                        ? 'border-b-2 border-teal-600 text-teal-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('bookings')}
                                className={`py-4 px-6 font-medium text-sm transition duration-200 ${
                                    activeTab === 'bookings'
                                        ? 'border-b-2 border-teal-600 text-teal-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Bookings
                                {stats.pendingBookings > 0 && (
                                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
                                        {stats.pendingBookings}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('vehicles')}
                                className={`py-4 px-6 font-medium text-sm transition duration-200 ${
                                    activeTab === 'vehicles'
                                        ? 'border-b-2 border-teal-600 text-teal-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                My Vehicles
                            </button>
                            <button
                                onClick={() => setActiveTab('earnings')}
                                className={`py-4 px-6 font-medium text-sm transition duration-200 ${
                                    activeTab === 'earnings'
                                        ? 'border-b-2 border-teal-600 text-teal-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Earnings
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Profile Summary */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-600">Company Name</p>
                                                <p className="font-semibold text-gray-800">{agentData?.companyName}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Tagline</p>
                                                <p className="font-semibold text-gray-800">{agentData?.tagline}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Email</p>
                                                <p className="font-semibold text-gray-800">{agentData?.email}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Contact Number</p>
                                                <p className="font-semibold text-gray-800">{agentData?.contactNo}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Business Registration</p>
                                                <p className="font-semibold text-gray-800">{agentData?.businessRegNo}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Member Since</p>
                                                <p className="font-semibold text-gray-800">{agentData?.operatingSince}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-64">
                                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center">
                                            <div className="text-3xl font-bold text-teal-600 mb-1">4.5</div>
                                            <div className="flex justify-center mb-2">
                                                {getRatingStars(4.5)}
                                            </div>
                                            <p className="text-sm text-gray-600">Based on 128 reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Bookings */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
                                    <button 
                                        onClick={() => setActiveTab('bookings')}
                                        className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                                    >
                                        View All →
                                    </button>
                                </div>
                                {isBookingsLoading ? (
                                    <div className="text-center py-8">
                                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-teal-600 border-t-transparent"></div>
                                        <p className="mt-2 text-sm text-gray-500">Loading bookings...</p>
                                    </div>
                                ) : recentBookings.length === 0 ? (
                                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                                        <p className="text-gray-500">No bookings yet</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
                                                    <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recentBookings.slice(0, 3).map((booking) => (
                                                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-3 text-sm text-gray-800">
                                                            {booking.customer?.fullName || 
                                                             `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
                                                             `Customer #${booking.customerId}`}
                                                        </td>
                                                        <td className="py-3 text-sm text-gray-800">
                                                            {booking.vehicle?.displayInfo || 
                                                             `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                                                        </td>
                                                        <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
                                                        <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
                                                        <td className="py-3">
                                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                                                                {booking.bookingStatus}
                                                            </span>
                                                        </td>
                                                        <td className="py-3">
                                                            <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                                                                {booking.paymentStatus}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            {/* Vehicle Summary */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-800">Vehicle Fleet Summary</h2>
                                    <button 
                                        onClick={() => setActiveTab('vehicles')}
                                        className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                                    >
                                        Manage Vehicles →
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Total Vehicles</p>
                                            <p className="text-xl font-bold text-gray-800">{stats.totalVehicles}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Avg Daily Rate</p>
                                            <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.averageDailyRate)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Available Now</p>
                                            <p className="text-xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Available').length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Bookings Tab */}
                    {activeTab === 'bookings' && (
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800">All Bookings</h2>
                                <div className="flex gap-2">
                                    <select 
                                        value={bookingStatusFilter}
                                        onChange={(e) => setBookingStatusFilter(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    >
                                        <option value="">All Status</option>
                                        <option value="PENDING">Pending</option>
                                        <option value="CONFIRMED">Confirmed</option>
                                        <option value="COMPLETED">Completed</option>
                                        <option value="CANCELLED">Cancelled</option>
                                    </select>
                                    <input 
                                        type="text" 
                                        placeholder="Search bookings..." 
                                        value={bookingSearchTerm}
                                        onChange={(e) => setBookingSearchTerm(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                            </div>
                            
                            {isBookingsLoading ? (
                                <div className="text-center py-12">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                                    <p className="mt-2 text-gray-600">Loading bookings...</p>
                                </div>
                            ) : recentBookings.length === 0 ? (
                                <div className="text-center py-12 bg-gray-50 rounded-xl">
                                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No Bookings Found</h3>
                                    <p className="text-gray-600">No bookings match your filters</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Booking ID</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Drop-off Date</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Payment</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Total</th>
                                                <th className="py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentBookings.map((booking) => (
                                                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 text-sm text-gray-800">#BK{booking.id}</td>
                                                    <td className="py-3 text-sm text-gray-800">
                                                        {booking.customer?.fullName || 
                                                         `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim() || 
                                                         `Customer #${booking.customerId}`}
                                                    </td>
                                                    <td className="py-3 text-sm text-gray-800">
                                                        {booking.vehicle?.displayInfo || 
                                                         `${booking.vehicle?.makeModel || 'Unknown'} (${booking.vehicle?.regNumber || 'N/A'})`}
                                                    </td>
                                                    <td className="py-3 text-sm text-gray-800">{formatDate(booking.pickupDate)}</td>
                                                    <td className="py-3 text-sm text-gray-800">{formatDate(booking.dropOffDate)}</td>
                                                    <td className="py-3">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                                                            {booking.bookingStatus}
                                                        </span>
                                                    </td>
                                                    <td className="py-3">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                                                            {booking.paymentStatus}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 text-sm font-semibold text-gray-800">{formatCurrency(booking.totalPrice)}</td>
                                                    <td className="py-3">
                                                        <button 
                                                            onClick={() => handleUpdateBookingStatus(booking.id, 'CONFIRMED')}
                                                            className="text-green-600 hover:text-green-800 mr-2 text-sm"
                                                            disabled={booking.bookingStatus === 'CONFIRMED'}
                                                        >
                                                            Confirm
                                                        </button>
                                                        <button 
                                                            onClick={() => handleUpdateBookingStatus(booking.id, 'COMPLETED')}
                                                            className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
                                                            disabled={booking.bookingStatus === 'COMPLETED'}
                                                        >
                                                            Complete
                                                        </button>
                                                        <button className="text-teal-600 hover:text-teal-800 text-sm">
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Vehicles Tab */}
                    {activeTab === 'vehicles' && (
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
                                <a 
                                    href="/vehicle/register" 
                                    className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add New Vehicle
                                </a>
                            </div>

                            {isVehiclesLoading ? (
                                <div className="text-center py-12">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                                    <p className="mt-2 text-gray-600">Loading vehicles...</p>
                                </div>
                            ) : vehicles.length === 0 ? (
                                <div className="text-center py-12 bg-gray-50 rounded-xl">
                                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No Vehicles Yet</h3>
                                    <p className="text-gray-600 mb-4">Start by adding your first vehicle to the fleet</p>
                                    <a 
                                        href="/vehicle/register" 
                                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                                    >
                                        Add Your First Vehicle
                                    </a>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {vehicles.map((vehicle) => (
                                        <div key={vehicle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
                                            {/* Vehicle Image */}
                                            <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                                                {vehicle.vehicleImage ? (
                                                    <img 
                                                        src={getFullImageUrl(vehicle.vehicleImage)} 
                                                        alt={vehicle.makeModel}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1}/>
                                                            <circle cx="8" cy="16" r="2" strokeWidth={1}/>
                                                            <circle cx="16" cy="16" r="2" strokeWidth={1}/>
                                                            <path d="M16 8h2" strokeWidth={1}/>
                                                            <path d="M6 8h2" strokeWidth={1}/>
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className="absolute top-2 right-2">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'Available')}`}>
                                                        {vehicle.status || 'Available'}
                                                    </span>
                                                </div>
                                                {vehicle.dailyRentalPrice && (
                                                    <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                        {formatCurrency(vehicle.dailyRentalPrice)}/day
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-gray-800">{vehicle.makeModel}</h3>
                                                    <span className="text-xs text-gray-500">{vehicle.regNumber}</span>
                                                </div>
                                                
                                                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                                                    <div>
                                                        <p className="text-gray-500">Year</p>
                                                        <p className="font-medium text-gray-800">{vehicle.yearOfManufacture}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Color</p>
                                                        <p className="font-medium text-gray-800">{vehicle.color}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Fuel</p>
                                                        <p className="font-medium text-gray-800">{getFuelTypeDisplay(vehicle.fuelType)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Transmission</p>
                                                        <p className="font-medium text-gray-800">{getTransmissionDisplay(vehicle.transmissionType)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Seats</p>
                                                        <p className="font-medium text-gray-800">{vehicle.seatingCapacity}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Daily Rate</p>
                                                        <p className="font-medium text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2">
                                                    <a 
                                                        href={`/vehicle/edit/${vehicle.id}`}
                                                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
                                                    >
                                                        Edit
                                                    </a>
                                                    <button 
                                                        onClick={() => handleDeleteVehicle(vehicle.id)}
                                                        className="flex-1 px-3 py-2 bg-red-100 text-red-600 text-sm rounded-lg hover:bg-red-200"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Earnings Tab */}
                    {activeTab === 'earnings' && (
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl p-6">
                                    <p className="text-sm mb-2">This Month</p>
                                    <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 1]?.amount || 0)}</p>
                                    <p className="text-xs mt-2">
                                        {earningsData.length > 1 && earningsData[earningsData.length - 1]?.amount > earningsData[earningsData.length - 2]?.amount ? '↑' : '↓'} 
                                        {Math.abs(((earningsData[earningsData.length - 1]?.amount || 0) - (earningsData[earningsData.length - 2]?.amount || 0)) / (earningsData[earningsData.length - 2]?.amount || 1) * 100).toFixed(1)}% from last month
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6">
                                    <p className="text-sm mb-2">Last Month</p>
                                    <p className="text-3xl font-bold">{formatCurrency(earningsData[earningsData.length - 2]?.amount || 0)}</p>
                                    <p className="text-xs mt-2">Total: {formatCurrency(stats.totalEarnings)}</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6">
                                    <p className="text-sm mb-2">Average per Booking</p>
                                    <p className="text-3xl font-bold">{formatCurrency(stats.completedTrips > 0 ? stats.totalEarnings / stats.completedTrips : 0)}</p>
                                    <p className="text-xs mt-2">Based on {stats.completedTrips} trips</p>
                                </div>
                            </div>

                            {/* Earnings Chart */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-sm text-gray-600 mb-4">Earnings Trend (Last 6 months)</p>
                                <div className="h-48 flex items-end justify-between gap-2">
                                    {earningsData.map((item) => {
                                        const barHeight = (item.amount / maxEarnings) * 100;
                                        return (
                                            <div key={item.month} className="flex-1 flex flex-col items-center">
                                                <div 
                                                    className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600"
                                                    style={{ height: `${barHeight}%`, minHeight: '40px' }}
                                                >
                                                    <div className="text-white text-xs text-center pt-1 opacity-0 hover:opacity-100 transition-opacity">
                                                        {formatCurrency(item.amount)}
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Potential Earnings Based on Daily Rates */}
                            {vehicles.length > 0 && (
                                <div className="mt-8 bg-teal-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Potential Daily Earnings</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="bg-white rounded-lg p-4">
                                            <p className="text-sm text-gray-600">If all vehicles rented</p>
                                            <p className="text-2xl font-bold text-teal-600">{formatCurrency(stats.totalVehicleValue)}</p>
                                            <p className="text-xs text-gray-500">per day</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <p className="text-sm text-gray-600">Highest daily rate</p>
                                            <p className="text-2xl font-bold text-teal-600">
                                                {formatCurrency(Math.max(...vehicles.map(v => v.dailyRentalPrice || 0)))}
                                            </p>
                                            <p className="text-xs text-gray-500">per day</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <p className="text-sm text-gray-600">Lowest daily rate</p>
                                            <p className="text-2xl font-bold text-teal-600">
                                                {formatCurrency(Math.min(...vehicles.map(v => v.dailyRentalPrice || 0)))}
                                            </p>
                                            <p className="text-xs text-gray-500">per day</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <p className="text-sm text-gray-600">Monthly potential</p>
                                            <p className="text-2xl font-bold text-teal-600">
                                                {formatCurrency(stats.totalVehicleValue * 30)}
                                            </p>
                                            <p className="text-xs text-gray-500">if fully booked</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="fixed bottom-6 right-6">
                <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
                        Quick Actions
                    </span>
                </button>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
                <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
                <p className="mt-1">Agent Portal v1.0</p>
            </div>
        </div>
    );
};

export default AgentDashboard;