// src/Pages/Admin/components/BookingManagementView.jsx
import React from 'react';
import BookingTable from './booking/BookingTable';

const BookingManagementView = ({ 
    bookings, 
    searchTerm, 
    setSearchTerm,
    activeSubTab,
    setActiveSubTab,
    onViewDetails,
    getStatusColor,
    formatCurrency,
    formatDate,
    stats
}) => {
    const tabs = [
        { id: 'all-bookings', label: 'All Bookings', count: stats.totalBookings },
        { id: 'pending', label: 'Pending', count: stats.pendingBookings },
        { id: 'confirmed', label: 'Confirmed', count: stats.confirmedBookings },
        { id: 'completed', label: 'Completed', count: stats.completedBookings }
    ];

    let filteredBookings = bookings;
    if (activeSubTab === 'pending') {
        filteredBookings = bookings.filter(b => b.bookingStatus === 'PENDING');
    } else if (activeSubTab === 'confirmed') {
        filteredBookings = bookings.filter(b => b.bookingStatus === 'CONFIRMED');
    } else if (activeSubTab === 'completed') {
        filteredBookings = bookings.filter(b => b.bookingStatus === 'COMPLETED');
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Booking Management</h2>
                        <p className="text-sm text-gray-600 mt-1">Manage all bookings across the platform</p>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
                        />
                        <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Sub Tabs */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                activeSubTab === tab.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <BookingTable
                    data={filteredBookings}
                    searchTerm={searchTerm}
                    onViewDetails={onViewDetails}
                    getStatusColor={getStatusColor}
                    formatCurrency={formatCurrency}
                    formatDate={formatDate}
                />
            </div>
        </div>
    );
};

export default BookingManagementView;