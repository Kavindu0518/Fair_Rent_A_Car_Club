// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import BookingsHeader from './components/BookingsHeader';
// // import BookingStats from './components/BookingStats';
// // import BookingTabs from './components/BookingTabs';
// // import BookingList from './components/BookingList';
// // import DetailsModal from './components/DetailsModal';
// // import CancelModal from './components/CancelModal';
// // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// // const CustomerMyBookings = () => {
// //     const navigate = useNavigate();
// //     const [bookings, setBookings] = useState([]);
// //     const [filteredBookings, setFilteredBookings] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [activeTab, setActiveTab] = useState('all');
// //     const [selectedBooking, setSelectedBooking] = useState(null);
// //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// //     const [showCancelModal, setShowCancelModal] = useState(false);
// //     const [cancelReason, setCancelReason] = useState('');
// //     const [isCancelling, setIsCancelling] = useState(false);
// //     const [customerName, setCustomerName] = useState('');
// //     const [bookingStats, setBookingStats] = useState({
// //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// //     });

// //     useEffect(() => {
// //         const customerToken = localStorage.getItem('customerToken');
// //         const storedCustomerId = localStorage.getItem('customerId');
// //         const storedCustomerName = localStorage.getItem('customerName');
        
// //         if (!customerToken || !storedCustomerId) {
// //             navigate('/customer/login');
// //             return;
// //         }

// //         setCustomerName(storedCustomerName || 'Customer');
// //         loadBookings();
// //     }, [navigate]);

// //     useEffect(() => {
// //         const filtered = filterBookingsByTab(bookings, activeTab);
// //         setFilteredBookings(filtered);
// //     }, [activeTab, bookings]);

// //     const loadBookings = async () => {
// //         setIsLoading(true);
// //         setErrorMessage('');
        
// //         try {
// //             const result = await fetchCustomerBookings();
// //             setBookings(result.bookings);
// //             setBookingStats(result.stats);
// //         } catch (error) {
// //             console.error('Error loading bookings:', error);
// //             setErrorMessage('Failed to load your bookings. Please try again.');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const handleCancelBooking = async () => {
// //         if (!cancelReason.trim()) {
// //             alert('Please provide a reason for cancellation');
// //             return;
// //         }

// //         setIsCancelling(true);
// //         try {
// //             // API call here
// //             await new Promise(resolve => setTimeout(resolve, 1500));
            
// //             setShowCancelModal(false);
// //             setShowDetailsModal(false);
// //             setCancelReason('');
// //             alert('Booking cancelled successfully');
// //             loadBookings();
// //         } catch (error) {
// //             console.error('Error cancelling booking:', error);
// //             alert('Failed to cancel booking. Please try again.');
// //         } finally {
// //             setIsCancelling(false);
// //         }
// //     };

// //     const handleMakePayment = (booking) => {
// //         navigate('/customer/paymentview', { 
// //             state: { selectedBooking: booking, bookingId: booking.id } 
// //         });
// //     };

// //     const handleDownloadReceipt = async (paymentId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
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

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// //             <BookingsHeader customerName={customerName} />
            
// //             <div className="max-w-7xl mx-auto px-4 py-8">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
// //                 <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

// //                 <BookingStats stats={bookingStats} />
// //                 <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// //                 <BookingList
// //                     isLoading={isLoading}
// //                     errorMessage={errorMessage}
// //                     filteredBookings={filteredBookings}
// //                     onRefresh={loadBookings}
// //                     onViewDetails={(booking) => {
// //                         setSelectedBooking(booking);
// //                         setShowDetailsModal(true);
// //                     }}
// //                     onMakePayment={handleMakePayment}
// //                     onDownloadReceipt={handleDownloadReceipt}
// //                 />

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

// //             {showDetailsModal && selectedBooking && (
// //                 <DetailsModal
// //                     booking={selectedBooking}
// //                     onClose={() => {
// //                         setShowDetailsModal(false);
// //                         setSelectedBooking(null);
// //                     }}
// //                     onMakePayment={handleMakePayment}
// //                     onCancelClick={(booking) => {
// //                         setShowDetailsModal(false);
// //                         setSelectedBooking(booking);
// //                         setShowCancelModal(true);
// //                     }}
// //                     onDownloadReceipt={handleDownloadReceipt}
// //                 />
// //             )}

// //             {showCancelModal && selectedBooking && (
// //                 <CancelModal
// //                     cancelReason={cancelReason}
// //                     setCancelReason={setCancelReason}
// //                     isCancelling={isCancelling}
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
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BookingsHeader from './components/BookingsHeader';
// import BookingStats from './components/BookingStats';
// import BookingTabs from './components/BookingTabs';
// import BookingList from './components/BookingList';
// import DetailsModal from './components/DetailsModal';
// import CancelModal from './components/CancelModal';
// import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// const CustomerMyBookings = () => {
//     const navigate = useNavigate();
//     const [bookings, setBookings] = useState([]);
//     const [filteredBookings, setFilteredBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [activeTab, setActiveTab] = useState('all');
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [showDetailsModal, setShowDetailsModal] = useState(false);
//     const [showCancelModal, setShowCancelModal] = useState(false);
//     const [cancelReason, setCancelReason] = useState('');
//     const [isCancelling, setIsCancelling] = useState(false);
//     const [customerName, setCustomerName] = useState('');
//     const [bookingStats, setBookingStats] = useState({
//         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
//     });

//     useEffect(() => {
//         const customerToken = localStorage.getItem('customerToken');
//         const storedCustomerId = localStorage.getItem('customerId');
//         const storedCustomerName = localStorage.getItem('customerName');
        
//         if (!customerToken || !storedCustomerId) {
//             navigate('/customer/login');
//             return;
//         }

//         setCustomerName(storedCustomerName || 'Customer');
//         loadBookings();
//     }, [navigate]);

//     useEffect(() => {
//         const filtered = filterBookingsByTab(bookings, activeTab);
//         setFilteredBookings(filtered);
//     }, [activeTab, bookings]);

//     const loadBookings = async () => {
//         setIsLoading(true);
//         setErrorMessage('');
        
//         try {
//             const result = await fetchCustomerBookings();
//             setBookings(result.bookings);
//             setBookingStats(result.stats);
//         } catch (error) {
//             console.error('Error loading bookings:', error);
//             setErrorMessage('Failed to load your bookings. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleCancelBooking = async () => {
//         if (!cancelReason.trim()) {
//             alert('Please provide a reason for cancellation');
//             return;
//         }

//         setIsCancelling(true);
//         try {
//             // API call here
//             await new Promise(resolve => setTimeout(resolve, 1500));
            
//             setShowCancelModal(false);
//             setShowDetailsModal(false);
//             setCancelReason('');
//             alert('Booking cancelled successfully');
//             loadBookings();
//         } catch (error) {
//             console.error('Error cancelling booking:', error);
//             alert('Failed to cancel booking. Please try again.');
//         } finally {
//             setIsCancelling(false);
//         }
//     };

//     const handleMakePayment = (booking) => {
//         navigate('/customer/paymentview', { 
//             state: { selectedBooking: booking, bookingId: booking.id } 
//         });
//     };

//     const handleDownloadReceipt = async (paymentId) => {
//         try {
//             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
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

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             <BookingsHeader customerName={customerName} />
            
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
//                 <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

//                 <BookingStats stats={bookingStats} />
//                 <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

//                 <BookingList
//                     isLoading={isLoading}
//                     errorMessage={errorMessage}
//                     filteredBookings={filteredBookings}
//                     onRefresh={loadBookings}
//                     onViewDetails={(booking) => {
//                         setSelectedBooking(booking);
//                         setShowDetailsModal(true);
//                     }}
//                     onMakePayment={handleMakePayment}
//                     onDownloadReceipt={handleDownloadReceipt}
//                 />

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

//             {showDetailsModal && selectedBooking && (
//                 <DetailsModal
//                     booking={selectedBooking}
//                     onClose={() => {
//                         setShowDetailsModal(false);
//                         setSelectedBooking(null);
//                     }}
//                     onMakePayment={handleMakePayment}
//                     onCancelClick={(booking) => {
//                         setShowDetailsModal(false);
//                         setSelectedBooking(booking);
//                         setShowCancelModal(true);
//                     }}
//                     onDownloadReceipt={handleDownloadReceipt}
//                 />
//             )}

//             {showCancelModal && selectedBooking && (
//                 <CancelModal
//                     cancelReason={cancelReason}
//                     setCancelReason={setCancelReason}
//                     isCancelling={isCancelling}
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



// src/Pages/Customer/CustomerMyBookings.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookingsHeader from './components/BookingsHeader';
import BookingStats from './components/BookingStats';
import BookingTabs from './components/BookingTabs';
import BookingList from './components/BookingList';
import DetailsModal from './components/DetailsModal';
import CancelModal from './components/CancelModal';
import EditBookingModal from './components/EditBookingModal'; // Import the new component
import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

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
    const [showEditModal, setShowEditModal] = useState(false); // New state for edit modal
    const [cancelReason, setCancelReason] = useState('');
    const [isCancelling, setIsCancelling] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [bookingStats, setBookingStats] = useState({
        total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
    });

    useEffect(() => {
        const customerToken = localStorage.getItem('customerToken');
        const storedCustomerId = localStorage.getItem('customerId');
        const storedCustomerName = localStorage.getItem('customerName');
        
        if (!customerToken || !storedCustomerId) {
            navigate('/customer/login');
            return;
        }

        setCustomerName(storedCustomerName || 'Customer');
        loadBookings();
    }, [navigate]);

    useEffect(() => {
        const filtered = filterBookingsByTab(bookings, activeTab);
        setFilteredBookings(filtered);
    }, [activeTab, bookings]);

    const loadBookings = async () => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            const result = await fetchCustomerBookings();
            setBookings(result.bookings);
            setBookingStats(result.stats);
        } catch (error) {
            console.error('Error loading bookings:', error);
            setErrorMessage('Failed to load your bookings. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditBooking = (booking) => {
        setSelectedBooking(booking);
        setShowEditModal(true);
    };

    const handleEditSuccess = () => {
        loadBookings(); // Refresh bookings after successful edit
    };

    const handleCancelBooking = async () => {
        if (!cancelReason.trim()) {
            alert('Please provide a reason for cancellation');
            return;
        }

        setIsCancelling(true);
        try {
            // API call here
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setShowCancelModal(false);
            setShowDetailsModal(false);
            setCancelReason('');
            alert('Booking cancelled successfully');
            loadBookings();
        } catch (error) {
            console.error('Error cancelling booking:', error);
            alert('Failed to cancel booking. Please try again.');
        } finally {
            setIsCancelling(false);
        }
    };

    const handleMakePayment = (booking) => {
        navigate('/customer/paymentview', { 
            state: { selectedBooking: booking, bookingId: booking.id } 
        });
    };

    const handleDownloadReceipt = async (paymentId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            <BookingsHeader customerName={customerName} />
            
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
                <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

                <BookingStats stats={bookingStats} />
                <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

                <BookingList
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    filteredBookings={filteredBookings}
                    onRefresh={loadBookings}
                    onViewDetails={(booking) => {
                        setSelectedBooking(booking);
                        setShowDetailsModal(true);
                    }}
                    onMakePayment={handleMakePayment}
                    onDownloadReceipt={handleDownloadReceipt}
                    onEditBooking={handleEditBooking} // Pass edit handler
                />

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

            {showDetailsModal && selectedBooking && (
                <DetailsModal
                    booking={selectedBooking}
                    onClose={() => {
                        setShowDetailsModal(false);
                        setSelectedBooking(null);
                    }}
                    onMakePayment={handleMakePayment}
                    onCancelClick={(booking) => {
                        setShowDetailsModal(false);
                        setSelectedBooking(booking);
                        setShowCancelModal(true);
                    }}
                    onDownloadReceipt={handleDownloadReceipt}
                    onEditClick={(booking) => {
                        setShowDetailsModal(false);
                        setSelectedBooking(booking);
                        setShowEditModal(true);
                    }}
                />
            )}

            {showCancelModal && selectedBooking && (
                <CancelModal
                    cancelReason={cancelReason}
                    setCancelReason={setCancelReason}
                    isCancelling={isCancelling}
                    onClose={() => {
                        setShowCancelModal(false);
                        setCancelReason('');
                    }}
                    onConfirm={handleCancelBooking}
                />
            )}

            {showEditModal && selectedBooking && (
                <EditBookingModal
                    booking={selectedBooking}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedBooking(null);
                    }}
                    onSuccess={handleEditSuccess}
                    formatCurrency={formatCurrency}
                    BASE_URL="http://localhost:8080"
                />
            )}
        </div>
    );
};

export default CustomerMyBookings;