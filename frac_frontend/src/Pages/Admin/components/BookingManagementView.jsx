// // // src/Pages/Admin/components/BookingManagementView.jsx
// // import React from 'react';
// // import BookingTable from './booking/BookingTable';

// // const BookingManagementView = ({ 
// //     bookings, 
// //     searchTerm, 
// //     setSearchTerm,
// //     activeSubTab,
// //     setActiveSubTab,
// //     onViewDetails,
// //     getStatusColor,
// //     formatCurrency,
// //     formatDate,
// //     stats
// // }) => {
// //     const tabs = [
// //         { id: 'all-bookings', label: 'All Bookings', count: stats.totalBookings },
// //         { id: 'pending', label: 'Pending', count: stats.pendingBookings },
// //         { id: 'confirmed', label: 'Confirmed', count: stats.confirmedBookings },
// //         { id: 'completed', label: 'Completed', count: stats.completedBookings }
// //     ];

// //     let filteredBookings = bookings;
// //     if (activeSubTab === 'pending') {
// //         filteredBookings = bookings.filter(b => b.bookingStatus === 'PENDING');
// //     } else if (activeSubTab === 'confirmed') {
// //         filteredBookings = bookings.filter(b => b.bookingStatus === 'CONFIRMED');
// //     } else if (activeSubTab === 'completed') {
// //         filteredBookings = bookings.filter(b => b.bookingStatus === 'COMPLETED');
// //     }

// //     return (
// //         <div className="space-y-6">
// //             {/* Header */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //                     <div>
// //                         <h2 className="text-2xl font-bold text-gray-800">Booking Management</h2>
// //                         <p className="text-sm text-gray-600 mt-1">Manage all bookings across the platform</p>
// //                     </div>
                    
// //                     <div className="relative">
// //                         <input
// //                             type="text"
// //                             placeholder="Search bookings..."
// //                             value={searchTerm}
// //                             onChange={(e) => setSearchTerm(e.target.value)}
// //                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
// //                         />
// //                         <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                         </svg>
// //                     </div>
// //                 </div>

// //                 {/* Sub Tabs */}
// //                 <div className="flex flex-wrap gap-2 mt-6">
// //                     {tabs.map(tab => (
// //                         <button
// //                             key={tab.id}
// //                             onClick={() => setActiveSubTab(tab.id)}
// //                             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
// //                                 activeSubTab === tab.id
// //                                     ? 'bg-teal-600 text-white'
// //                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                             }`}
// //                         >
// //                             {tab.label} ({tab.count})
// //                         </button>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Table */}
// //             <div className="bg-white rounded-2xl shadow-lg p-6">
// //                 <BookingTable
// //                     data={filteredBookings}
// //                     searchTerm={searchTerm}
// //                     onViewDetails={onViewDetails}
// //                     getStatusColor={getStatusColor}
// //                     formatCurrency={formatCurrency}
// //                     formatDate={formatDate}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default BookingManagementView;




// // src/Pages/Admin/components/BookingManagementView.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import BookingTable from './tables/BookingTable';
// import ViewBookingModal from './modals/ViewBookingModal';
// import EditBookingModal from './modals/EditBookingModal';

// const BookingManagementView = ({ 
//     bookings, 
//     searchTerm, 
//     setSearchTerm,
//     activeSubTab,
//     setActiveSubTab,
//     onRefresh,
//     getStatusColor,
//     formatCurrency,
//     formatDate,
//     stats,
//     BASE_URL
// }) => {
//     // Debug log
//     console.log('BookingManagementView received:', {
//         bookingsCount: bookings?.length,
//         searchTerm,
//         activeSubTab,
//         stats
//     });

//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showViewModal, setShowViewModal] = useState(false);
//     const [selectedBooking, setSelectedBooking] = useState(null);

//     // Ensure stats has default values
//     const safeStats = {
//         totalBookings: stats?.totalBookings || 0,
//         pendingBookings: stats?.pendingBookings || 0,
//         confirmedBookings: stats?.confirmedBookings || 0,
//         completedBookings: stats?.completedBookings || 0,
//         cancelledBookings: stats?.cancelledBookings || 0
//     };

//     const tabs = [
//         { id: 'all-bookings', label: 'All Bookings', count: safeStats.totalBookings },
//         { id: 'pending', label: 'Pending', count: safeStats.pendingBookings },
//         { id: 'confirmed', label: 'Confirmed', count: safeStats.confirmedBookings },
//         { id: 'completed', label: 'Completed', count: safeStats.completedBookings },
//         { id: 'cancelled', label: 'Cancelled', count: safeStats.cancelledBookings }
//     ];

//     // Ensure bookings is an array
//     const bookingArray = Array.isArray(bookings) ? bookings : [];
    
//     let filteredBookings = bookingArray;
//     if (activeSubTab === 'pending') {
//         filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'PENDING');
//     } else if (activeSubTab === 'confirmed') {
//         filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'CONFIRMED');
//     } else if (activeSubTab === 'completed') {
//         filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'COMPLETED');
//     } else if (activeSubTab === 'cancelled') {
//         filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'CANCELLED');
//     }

//     const handleEdit = (booking) => {
//         console.log('Edit booking:', booking);
//         setSelectedBooking(booking);
//         setShowEditModal(true);
//     };

//     const handleView = (booking) => {
//         console.log('View booking:', booking);
//         setSelectedBooking(booking);
//         setShowViewModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure you want to delete this booking?')) {
//             return;
//         }

//         try {
//             const token = localStorage.getItem('adminToken');
//             if (!token) {
//                 alert('Authentication token not found. Please login again.');
//                 return;
//             }

//             console.log('Deleting booking:', id);
//             await axios.delete(`${BASE_URL}/api/v1/booking/delete/${id}`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             alert('Booking deleted successfully!');
            
//             if (onRefresh && typeof onRefresh === 'function') {
//                 await onRefresh();
//             }
//         } catch (err) {
//             console.error('Error deleting booking:', err);
//             alert('Failed to delete booking. Please try again.');
//         }
//     };

//     const handleSave = async (formData) => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             if (!token) {
//                 alert('Authentication token not found. Please login again.');
//                 return;
//             }

//             let dataToSend = formData;
//             if (typeof formData === 'string') {
//                 dataToSend = JSON.parse(formData);
//             }

//             console.log('Updating booking:', dataToSend);
//             const response = await axios({
//                 method: 'put',
//                 url: `${BASE_URL}/api/v1/booking/update/${selectedBooking.id}`,
//                 data: dataToSend,
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             console.log('Update response:', response.data);

//             if (response.status === 200) {
//                 alert('Booking updated successfully!');
                
//                 setShowEditModal(false);
//                 setSelectedBooking(null);
                
//                 if (onRefresh && typeof onRefresh === 'function') {
//                     await onRefresh();
//                 }
//             }
//         } catch (err) {
//             console.error('Error updating booking:', err);
            
//             let errorMessage = 'Failed to update booking. ';
            
//             if (err.response) {
//                 console.error('Error response:', err.response.data);
//                 if (err.response.data?.errorMessage) {
//                     errorMessage += err.response.data.errorMessage;
//                 } else if (typeof err.response.data === 'string') {
//                     errorMessage += err.response.data;
//                 } else {
//                     errorMessage += `Server error (${err.response.status})`;
//                 }
//             } else if (err.request) {
//                 errorMessage += 'No response from server. Please check if the backend is running.';
//             } else {
//                 errorMessage += err.message;
//             }
            
//             alert(errorMessage);
//         }
//     };

//     // If no bookings, show empty state
//     if (!bookingArray.length && !searchTerm) {
//         return (
//             <div className="space-y-6">
//                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Management</h2>
//                     <div className="text-center py-12">
//                         <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                         </svg>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
//                         <p className="text-gray-600">There are no bookings in the system yet</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-6">
//             {/* Header */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-800">Booking Management</h2>
//                         <p className="text-sm text-gray-600 mt-1">Manage all bookings across the platform</p>
//                     </div>
                    
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search bookings..."
//                             value={searchTerm || ''}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
//                         />
//                         <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                         </svg>
//                     </div>
//                 </div>

//                 {/* Sub Tabs */}
//                 <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
//                     {tabs.map(tab => (
//                         <button
//                             key={tab.id}
//                             onClick={() => setActiveSubTab(tab.id)}
//                             className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
//                                 activeSubTab === tab.id
//                                     ? 'bg-teal-600 text-white'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                             }`}
//                         >
//                             {tab.label} ({tab.count})
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Table */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <BookingTable
//                     data={filteredBookings}
//                     searchTerm={searchTerm || ''}
//                     onView={handleView}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                     getStatusColor={getStatusColor}
//                     formatCurrency={formatCurrency}
//                     formatDate={formatDate}
//                 />
//             </div>

//             {/* Modals */}
//             {showViewModal && selectedBooking && (
//                 <ViewBookingModal
//                     booking={selectedBooking}
//                     onClose={() => {
//                         setShowViewModal(false);
//                         setSelectedBooking(null);
//                     }}
//                     formatCurrency={formatCurrency}
//                     formatDate={formatDate}
//                     getStatusColor={getStatusColor}
//                     BASE_URL={BASE_URL}
//                 />
//             )}

//             {showEditModal && selectedBooking && (
//                 <EditBookingModal
//                     booking={selectedBooking}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedBooking(null);
//                     }}
//                     onSave={handleSave}
//                     formatCurrency={formatCurrency}
//                     formatDate={formatDate}
//                 />
//             )}
//         </div>
//     );
// };

// export default BookingManagementView;



// src/Pages/Admin/components/BookingManagementView.jsx
import React, { useState } from 'react';
import axios from 'axios';
import BookingTable from './tables/BookingTable';
import AddBookingModal from './modals/AddBookingModal';
import ViewBookingModal from './modals/ViewBookingModal';
import EditBookingModal from './modals/EditBookingModal';

const BookingManagementView = ({ 
    bookings, 
    searchTerm, 
    setSearchTerm,
    activeSubTab,
    setActiveSubTab,
    onRefresh,
    getStatusColor,
    formatCurrency,
    formatDate,
    stats,
    BASE_URL
}) => {
    // Debug log
    console.log('BookingManagementView received:', {
        bookingsCount: bookings?.length,
        searchTerm,
        activeSubTab,
        stats
    });

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    // Ensure stats has default values
    const safeStats = {
        totalBookings: stats?.totalBookings || 0,
        pendingBookings: stats?.pendingBookings || 0,
        confirmedBookings: stats?.confirmedBookings || 0,
        completedBookings: stats?.completedBookings || 0,
        cancelledBookings: stats?.cancelledBookings || 0
    };

    const tabs = [
        { id: 'all-bookings', label: 'All Bookings', count: safeStats.totalBookings },
        { id: 'pending', label: 'Pending', count: safeStats.pendingBookings },
        { id: 'confirmed', label: 'Confirmed', count: safeStats.confirmedBookings },
        { id: 'completed', label: 'Completed', count: safeStats.completedBookings },
        { id: 'cancelled', label: 'Cancelled', count: safeStats.cancelledBookings }
    ];

    // Ensure bookings is an array
    const bookingArray = Array.isArray(bookings) ? bookings : [];
    
    let filteredBookings = bookingArray;
    if (activeSubTab === 'pending') {
        filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'PENDING');
    } else if (activeSubTab === 'confirmed') {
        filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'CONFIRMED');
    } else if (activeSubTab === 'completed') {
        filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'COMPLETED');
    } else if (activeSubTab === 'cancelled') {
        filteredBookings = bookingArray.filter(b => b?.bookingStatus === 'CANCELLED');
    }

    const handleAdd = () => {
        console.log('Add booking clicked');
        setShowAddModal(true);
    };

    const handleEdit = (booking) => {
        console.log('Edit booking:', booking);
        setSelectedBooking(booking);
        setShowEditModal(true);
    };

    const handleView = (booking) => {
        console.log('View booking:', booking);
        setSelectedBooking(booking);
        setShowViewModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this booking?')) {
            return;
        }

        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                alert('Authentication token not found. Please login again.');
                return;
            }

            console.log('Deleting booking:', id);
            await axios.delete(`${BASE_URL}/api/v1/booking/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            alert('Booking deleted successfully!');
            
            if (onRefresh && typeof onRefresh === 'function') {
                await onRefresh();
            }
        } catch (err) {
            console.error('Error deleting booking:', err);
            alert('Failed to delete booking. Please try again.');
        }
    };

    const handleSave = async (formData) => {
        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                alert('Authentication token not found. Please login again.');
                return;
            }

            let dataToSend = formData;
            if (typeof formData === 'string') {
                dataToSend = JSON.parse(formData);
            }

            let url, method;
            
            if (showAddModal) {
                // Add new booking
                url = `${BASE_URL}/api/v1/booking/add`;
                method = 'post';
                console.log('Adding new booking:', dataToSend);
            } else {
                // Update existing booking
                url = `${BASE_URL}/api/v1/booking/update/${selectedBooking.id}`;
                method = 'put';
                console.log('Updating booking:', dataToSend);
            }

            const response = await axios({
                method,
                url,
                data: dataToSend,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Save response:', response.data);

            if (response.status === 200 || response.status === 201) {
                alert(`Booking ${showAddModal ? 'created' : 'updated'} successfully!`);
                
                setShowAddModal(false);
                setShowEditModal(false);
                setSelectedBooking(null);
                
                if (onRefresh && typeof onRefresh === 'function') {
                    await onRefresh();
                }
            }
        } catch (err) {
            console.error('Error saving booking:', err);
            
            let errorMessage = `Failed to ${showAddModal ? 'create' : 'update'} booking. `;
            
            if (err.response) {
                console.error('Error response:', err.response.data);
                if (err.response.data?.errorMessage) {
                    errorMessage += err.response.data.errorMessage;
                } else if (typeof err.response.data === 'string') {
                    errorMessage += err.response.data;
                } else {
                    errorMessage += `Server error (${err.response.status})`;
                }
            } else if (err.request) {
                errorMessage += 'No response from server. Please check if the backend is running.';
            } else {
                errorMessage += err.message;
            }
            
            alert(errorMessage);
        }
    };

    // If no bookings, show empty state
    if (!bookingArray.length && !searchTerm) {
        return (
            <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Booking Management</h2>
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create First Booking
                        </button>
                    </div>
                    <div className="text-center py-12">
                        <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Found</h3>
                        <p className="text-gray-600">Get started by creating your first booking</p>
                    </div>
                </div>

                {showAddModal && (
                    <AddBookingModal
                        onClose={() => setShowAddModal(false)}
                        onSave={handleSave}
                        BASE_URL={BASE_URL}
                    />
                )}
            </div>
        );
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
                    
                    <div className="flex gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by ID..."
                                value={searchTerm || ''}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-full sm:w-64"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        {/* Add Booking Button */}
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center whitespace-nowrap"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            New Booking
                        </button>
                    </div>
                </div>

                {/* Sub Tabs */}
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
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
                    searchTerm={searchTerm || ''}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    getStatusColor={getStatusColor}
                    formatCurrency={formatCurrency}
                    formatDate={formatDate}
                />
            </div>

            {/* Modals */}
            {showAddModal && (
                <AddBookingModal
                    onClose={() => setShowAddModal(false)}
                    onSave={handleSave}
                    BASE_URL={BASE_URL}
                />
            )}

            {showViewModal && selectedBooking && (
                <ViewBookingModal
                    booking={selectedBooking}
                    onClose={() => {
                        setShowViewModal(false);
                        setSelectedBooking(null);
                    }}
                    formatCurrency={formatCurrency}
                    formatDate={formatDate}
                    getStatusColor={getStatusColor}
                    BASE_URL={BASE_URL}
                />
            )}

            {/* {showEditModal && selectedBooking && (
                <EditBookingModal
                    booking={selectedBooking}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedBooking(null);
                    }}
                    onSave={handleSave}
                    formatCurrency={formatCurrency}
                    formatDate={formatDate}
                />
            )} */}

            {showEditModal && selectedBooking && (
    <EditBookingModal
        booking={selectedBooking}
        onClose={() => {
            setShowEditModal(false);
            setSelectedBooking(null);
        }}
        onSave={handleSave}
        formatCurrency={formatCurrency}
        formatDate={formatDate}
        BASE_URL={BASE_URL}  // Make sure this is passed
    />
)}
        </div>
    );
};

export default BookingManagementView;