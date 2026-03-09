// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import axios from 'axios';
// // // // // // import BookingsHeader from './components/BookingsHeader';
// // // // // // import BookingStats from './components/BookingStats';
// // // // // // import BookingTabs from './components/BookingTabs';
// // // // // // import BookingList from './components/BookingList';
// // // // // // import DetailsModal from './components/DetailsModal';
// // // // // // import CancelModal from './components/CancelModal';
// // // // // // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// // // // // // const CustomerMyBookings = () => {
// // // // // //     const navigate = useNavigate();
// // // // // //     const [bookings, setBookings] = useState([]);
// // // // // //     const [filteredBookings, setFilteredBookings] = useState([]);
// // // // // //     const [isLoading, setIsLoading] = useState(true);
// // // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // // //     const [activeTab, setActiveTab] = useState('all');
// // // // // //     const [selectedBooking, setSelectedBooking] = useState(null);
// // // // // //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// // // // // //     const [showCancelModal, setShowCancelModal] = useState(false);
// // // // // //     const [cancelReason, setCancelReason] = useState('');
// // // // // //     const [isCancelling, setIsCancelling] = useState(false);
// // // // // //     const [customerName, setCustomerName] = useState('');
// // // // // //     const [bookingStats, setBookingStats] = useState({
// // // // // //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// // // // // //     });

// // // // // //     useEffect(() => {
// // // // // //         const customerToken = localStorage.getItem('customerToken');
// // // // // //         const storedCustomerId = localStorage.getItem('customerId');
// // // // // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // // // // //         if (!customerToken || !storedCustomerId) {
// // // // // //             navigate('/customer/login');
// // // // // //             return;
// // // // // //         }

// // // // // //         setCustomerName(storedCustomerName || 'Customer');
// // // // // //         loadBookings();
// // // // // //     }, [navigate]);

// // // // // //     useEffect(() => {
// // // // // //         const filtered = filterBookingsByTab(bookings, activeTab);
// // // // // //         setFilteredBookings(filtered);
// // // // // //     }, [activeTab, bookings]);

// // // // // //     const loadBookings = async () => {
// // // // // //         setIsLoading(true);
// // // // // //         setErrorMessage('');
        
// // // // // //         try {
// // // // // //             const result = await fetchCustomerBookings();
// // // // // //             setBookings(result.bookings);
// // // // // //             setBookingStats(result.stats);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error loading bookings:', error);
// // // // // //             setErrorMessage('Failed to load your bookings. Please try again.');
// // // // // //         } finally {
// // // // // //             setIsLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleCancelBooking = async () => {
// // // // // //         if (!cancelReason.trim()) {
// // // // // //             alert('Please provide a reason for cancellation');
// // // // // //             return;
// // // // // //         }

// // // // // //         setIsCancelling(true);
// // // // // //         try {
// // // // // //             // API call here
// // // // // //             await new Promise(resolve => setTimeout(resolve, 1500));
            
// // // // // //             setShowCancelModal(false);
// // // // // //             setShowDetailsModal(false);
// // // // // //             setCancelReason('');
// // // // // //             alert('Booking cancelled successfully');
// // // // // //             loadBookings();
// // // // // //         } catch (error) {
// // // // // //             console.error('Error cancelling booking:', error);
// // // // // //             alert('Failed to cancel booking. Please try again.');
// // // // // //         } finally {
// // // // // //             setIsCancelling(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleMakePayment = (booking) => {
// // // // // //         navigate('/customer/paymentview', { 
// // // // // //             state: { selectedBooking: booking, bookingId: booking.id } 
// // // // // //         });
// // // // // //     };

// // // // // //     const handleDownloadReceipt = async (paymentId) => {
// // // // // //         try {
// // // // // //             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
// // // // // //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// // // // // //                 responseType: 'blob'
// // // // // //             });
            
// // // // // //             const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // // //             const link = document.createElement('a');
// // // // // //             link.href = url;
// // // // // //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// // // // // //             document.body.appendChild(link);
// // // // // //             link.click();
// // // // // //             link.remove();
// // // // // //         } catch (error) {
// // // // // //             console.error('Download error:', error);
// // // // // //             alert('Failed to download receipt');
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // // // //             <BookingsHeader customerName={customerName} />
            
// // // // // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // // // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
// // // // // //                 <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

// // // // // //                 <BookingStats stats={bookingStats} />
// // // // // //                 <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// // // // // //                 <BookingList
// // // // // //                     isLoading={isLoading}
// // // // // //                     errorMessage={errorMessage}
// // // // // //                     filteredBookings={filteredBookings}
// // // // // //                     onRefresh={loadBookings}
// // // // // //                     onViewDetails={(booking) => {
// // // // // //                         setSelectedBooking(booking);
// // // // // //                         setShowDetailsModal(true);
// // // // // //                     }}
// // // // // //                     onMakePayment={handleMakePayment}
// // // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // // //                 />

// // // // // //                 {/* Footer */}
// // // // // //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// // // // // //                     <p className="text-gray-500 text-sm">
// // // // // //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// // // // // //                     </p>
// // // // // //                     <div className="flex justify-center gap-4 mt-4">
// // // // // //                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
// // // // // //                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
// // // // // //                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
// // // // // //                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {showDetailsModal && selectedBooking && (
// // // // // //                 <DetailsModal
// // // // // //                     booking={selectedBooking}
// // // // // //                     onClose={() => {
// // // // // //                         setShowDetailsModal(false);
// // // // // //                         setSelectedBooking(null);
// // // // // //                     }}
// // // // // //                     onMakePayment={handleMakePayment}
// // // // // //                     onCancelClick={(booking) => {
// // // // // //                         setShowDetailsModal(false);
// // // // // //                         setSelectedBooking(booking);
// // // // // //                         setShowCancelModal(true);
// // // // // //                     }}
// // // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // // //                 />
// // // // // //             )}

// // // // // //             {showCancelModal && selectedBooking && (
// // // // // //                 <CancelModal
// // // // // //                     cancelReason={cancelReason}
// // // // // //                     setCancelReason={setCancelReason}
// // // // // //                     isCancelling={isCancelling}
// // // // // //                     onClose={() => {
// // // // // //                         setShowCancelModal(false);
// // // // // //                         setCancelReason('');
// // // // // //                     }}
// // // // // //                     onConfirm={handleCancelBooking}
// // // // // //                 />
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default CustomerMyBookings;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import axios from 'axios';
// // // // // import BookingsHeader from './components/BookingsHeader';
// // // // // import BookingStats from './components/BookingStats';
// // // // // import BookingTabs from './components/BookingTabs';
// // // // // import BookingList from './components/BookingList';
// // // // // import DetailsModal from './components/DetailsModal';
// // // // // import CancelModal from './components/CancelModal';
// // // // // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// // // // // const CustomerMyBookings = () => {
// // // // //     const navigate = useNavigate();
// // // // //     const [bookings, setBookings] = useState([]);
// // // // //     const [filteredBookings, setFilteredBookings] = useState([]);
// // // // //     const [isLoading, setIsLoading] = useState(true);
// // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // //     const [activeTab, setActiveTab] = useState('all');
// // // // //     const [selectedBooking, setSelectedBooking] = useState(null);
// // // // //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// // // // //     const [showCancelModal, setShowCancelModal] = useState(false);
// // // // //     const [cancelReason, setCancelReason] = useState('');
// // // // //     const [isCancelling, setIsCancelling] = useState(false);
// // // // //     const [customerName, setCustomerName] = useState('');
// // // // //     const [bookingStats, setBookingStats] = useState({
// // // // //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// // // // //     });

// // // // //     useEffect(() => {
// // // // //         const customerToken = localStorage.getItem('customerToken');
// // // // //         const storedCustomerId = localStorage.getItem('customerId');
// // // // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // // // //         if (!customerToken || !storedCustomerId) {
// // // // //             navigate('/customer/login');
// // // // //             return;
// // // // //         }

// // // // //         setCustomerName(storedCustomerName || 'Customer');
// // // // //         loadBookings();
// // // // //     }, [navigate]);

// // // // //     useEffect(() => {
// // // // //         const filtered = filterBookingsByTab(bookings, activeTab);
// // // // //         setFilteredBookings(filtered);
// // // // //     }, [activeTab, bookings]);

// // // // //     const loadBookings = async () => {
// // // // //         setIsLoading(true);
// // // // //         setErrorMessage('');
        
// // // // //         try {
// // // // //             const result = await fetchCustomerBookings();
// // // // //             setBookings(result.bookings);
// // // // //             setBookingStats(result.stats);
// // // // //         } catch (error) {
// // // // //             console.error('Error loading bookings:', error);
// // // // //             setErrorMessage('Failed to load your bookings. Please try again.');
// // // // //         } finally {
// // // // //             setIsLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const handleCancelBooking = async () => {
// // // // //         if (!cancelReason.trim()) {
// // // // //             alert('Please provide a reason for cancellation');
// // // // //             return;
// // // // //         }

// // // // //         setIsCancelling(true);
// // // // //         try {
// // // // //             // API call here
// // // // //             await new Promise(resolve => setTimeout(resolve, 1500));
            
// // // // //             setShowCancelModal(false);
// // // // //             setShowDetailsModal(false);
// // // // //             setCancelReason('');
// // // // //             alert('Booking cancelled successfully');
// // // // //             loadBookings();
// // // // //         } catch (error) {
// // // // //             console.error('Error cancelling booking:', error);
// // // // //             alert('Failed to cancel booking. Please try again.');
// // // // //         } finally {
// // // // //             setIsCancelling(false);
// // // // //         }
// // // // //     };

// // // // //     const handleMakePayment = (booking) => {
// // // // //         navigate('/customer/paymentview', { 
// // // // //             state: { selectedBooking: booking, bookingId: booking.id } 
// // // // //         });
// // // // //     };

// // // // //     const handleDownloadReceipt = async (paymentId) => {
// // // // //         try {
// // // // //             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
// // // // //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// // // // //                 responseType: 'blob'
// // // // //             });
            
// // // // //             const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // //             const link = document.createElement('a');
// // // // //             link.href = url;
// // // // //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// // // // //             document.body.appendChild(link);
// // // // //             link.click();
// // // // //             link.remove();
// // // // //         } catch (error) {
// // // // //             console.error('Download error:', error);
// // // // //             alert('Failed to download receipt');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // // //             <BookingsHeader customerName={customerName} />
            
// // // // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
// // // // //                 <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

// // // // //                 <BookingStats stats={bookingStats} />
// // // // //                 <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// // // // //                 <BookingList
// // // // //                     isLoading={isLoading}
// // // // //                     errorMessage={errorMessage}
// // // // //                     filteredBookings={filteredBookings}
// // // // //                     onRefresh={loadBookings}
// // // // //                     onViewDetails={(booking) => {
// // // // //                         setSelectedBooking(booking);
// // // // //                         setShowDetailsModal(true);
// // // // //                     }}
// // // // //                     onMakePayment={handleMakePayment}
// // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // //                 />

// // // // //                 {/* Footer */}
// // // // //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// // // // //                     <p className="text-gray-500 text-sm">
// // // // //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// // // // //                     </p>
// // // // //                     <div className="flex justify-center gap-4 mt-4">
// // // // //                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
// // // // //                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
// // // // //                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
// // // // //                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             {showDetailsModal && selectedBooking && (
// // // // //                 <DetailsModal
// // // // //                     booking={selectedBooking}
// // // // //                     onClose={() => {
// // // // //                         setShowDetailsModal(false);
// // // // //                         setSelectedBooking(null);
// // // // //                     }}
// // // // //                     onMakePayment={handleMakePayment}
// // // // //                     onCancelClick={(booking) => {
// // // // //                         setShowDetailsModal(false);
// // // // //                         setSelectedBooking(booking);
// // // // //                         setShowCancelModal(true);
// // // // //                     }}
// // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // //                 />
// // // // //             )}

// // // // //             {showCancelModal && selectedBooking && (
// // // // //                 <CancelModal
// // // // //                     cancelReason={cancelReason}
// // // // //                     setCancelReason={setCancelReason}
// // // // //                     isCancelling={isCancelling}
// // // // //                     onClose={() => {
// // // // //                         setShowCancelModal(false);
// // // // //                         setCancelReason('');
// // // // //                     }}
// // // // //                     onConfirm={handleCancelBooking}
// // // // //                 />
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CustomerMyBookings;



// // // // // // src/Pages/Customer/CustomerMyBookings.jsx
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import axios from 'axios';
// // // // // import BookingsHeader from './components/BookingsHeader';
// // // // // import BookingStats from './components/BookingStats';
// // // // // import BookingTabs from './components/BookingTabs';
// // // // // import BookingList from './components/BookingList';
// // // // // import DetailsModal from './components/DetailsModal';
// // // // // import CancelModal from './components/CancelModal';
// // // // // import EditBookingModal from './components/EditBookingModal'; // Import the new component
// // // // // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// // // // // const CustomerMyBookings = () => {
// // // // //     const navigate = useNavigate();
// // // // //     const [bookings, setBookings] = useState([]);
// // // // //     const [filteredBookings, setFilteredBookings] = useState([]);
// // // // //     const [isLoading, setIsLoading] = useState(true);
// // // // //     const [errorMessage, setErrorMessage] = useState('');
// // // // //     const [activeTab, setActiveTab] = useState('all');
// // // // //     const [selectedBooking, setSelectedBooking] = useState(null);
// // // // //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// // // // //     const [showCancelModal, setShowCancelModal] = useState(false);
// // // // //     const [showEditModal, setShowEditModal] = useState(false); // New state for edit modal
// // // // //     const [cancelReason, setCancelReason] = useState('');
// // // // //     const [isCancelling, setIsCancelling] = useState(false);
// // // // //     const [customerName, setCustomerName] = useState('');
// // // // //     const [bookingStats, setBookingStats] = useState({
// // // // //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// // // // //     });

// // // // //     useEffect(() => {
// // // // //         const customerToken = localStorage.getItem('customerToken');
// // // // //         const storedCustomerId = localStorage.getItem('customerId');
// // // // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // // // //         if (!customerToken || !storedCustomerId) {
// // // // //             navigate('/customer/login');
// // // // //             return;
// // // // //         }

// // // // //         setCustomerName(storedCustomerName || 'Customer');
// // // // //         loadBookings();
// // // // //     }, [navigate]);

// // // // //     useEffect(() => {
// // // // //         const filtered = filterBookingsByTab(bookings, activeTab);
// // // // //         setFilteredBookings(filtered);
// // // // //     }, [activeTab, bookings]);

// // // // //     const loadBookings = async () => {
// // // // //         setIsLoading(true);
// // // // //         setErrorMessage('');
        
// // // // //         try {
// // // // //             const result = await fetchCustomerBookings();
// // // // //             setBookings(result.bookings);
// // // // //             setBookingStats(result.stats);
// // // // //         } catch (error) {
// // // // //             console.error('Error loading bookings:', error);
// // // // //             setErrorMessage('Failed to load your bookings. Please try again.');
// // // // //         } finally {
// // // // //             setIsLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const handleEditBooking = (booking) => {
// // // // //         setSelectedBooking(booking);
// // // // //         setShowEditModal(true);
// // // // //     };

// // // // //     const handleEditSuccess = () => {
// // // // //         loadBookings(); // Refresh bookings after successful edit
// // // // //     };

// // // // //     const handleCancelBooking = async () => {
// // // // //         if (!cancelReason.trim()) {
// // // // //             alert('Please provide a reason for cancellation');
// // // // //             return;
// // // // //         }

// // // // //         setIsCancelling(true);
// // // // //         try {
// // // // //             // API call here
// // // // //             await new Promise(resolve => setTimeout(resolve, 1500));
            
// // // // //             setShowCancelModal(false);
// // // // //             setShowDetailsModal(false);
// // // // //             setCancelReason('');
// // // // //             alert('Booking cancelled successfully');
// // // // //             loadBookings();
// // // // //         } catch (error) {
// // // // //             console.error('Error cancelling booking:', error);
// // // // //             alert('Failed to cancel booking. Please try again.');
// // // // //         } finally {
// // // // //             setIsCancelling(false);
// // // // //         }
// // // // //     };

// // // // //     const handleMakePayment = (booking) => {
// // // // //         navigate('/customer/paymentview', { 
// // // // //             state: { selectedBooking: booking, bookingId: booking.id } 
// // // // //         });
// // // // //     };

// // // // //     const handleDownloadReceipt = async (paymentId) => {
// // // // //         try {
// // // // //             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
// // // // //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// // // // //                 responseType: 'blob'
// // // // //             });
            
// // // // //             const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // //             const link = document.createElement('a');
// // // // //             link.href = url;
// // // // //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// // // // //             document.body.appendChild(link);
// // // // //             link.click();
// // // // //             link.remove();
// // // // //         } catch (error) {
// // // // //             console.error('Download error:', error);
// // // // //             alert('Failed to download receipt');
// // // // //         }
// // // // //     };

// // // // //     const formatCurrency = (amount) => {
// // // // //         return new Intl.NumberFormat('en-LK', {
// // // // //             style: 'currency',
// // // // //             currency: 'LKR',
// // // // //             minimumFractionDigits: 0
// // // // //         }).format(amount).replace('LKR', 'Rs.');
// // // // //     };

// // // // //     return (
// // // // //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
// // // // //             <BookingsHeader customerName={customerName} />
            
// // // // //             <div className="max-w-7xl mx-auto px-4 py-8">
// // // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
// // // // //                 <p className="text-gray-600 mb-8">View and manage all your vehicle bookings</p>

// // // // //                 <BookingStats stats={bookingStats} />
// // // // //                 <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// // // // //                 <BookingList
// // // // //                     isLoading={isLoading}
// // // // //                     errorMessage={errorMessage}
// // // // //                     filteredBookings={filteredBookings}
// // // // //                     onRefresh={loadBookings}
// // // // //                     onViewDetails={(booking) => {
// // // // //                         setSelectedBooking(booking);
// // // // //                         setShowDetailsModal(true);
// // // // //                     }}
// // // // //                     onMakePayment={handleMakePayment}
// // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // //                     onEditBooking={handleEditBooking} // Pass edit handler
// // // // //                 />

// // // // //                 {/* Footer */}
// // // // //                 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
// // // // //                     <p className="text-gray-500 text-sm">
// // // // //                         © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
// // // // //                     </p>
// // // // //                     <div className="flex justify-center gap-4 mt-4">
// // // // //                         <a href="/about" className="text-sm text-teal-600 hover:text-teal-800">About Us</a>
// // // // //                         <a href="/contact" className="text-sm text-teal-600 hover:text-teal-800">Contact</a>
// // // // //                         <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">Terms & Conditions</a>
// // // // //                         <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">Privacy Policy</a>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             {showDetailsModal && selectedBooking && (
// // // // //                 <DetailsModal
// // // // //                     booking={selectedBooking}
// // // // //                     onClose={() => {
// // // // //                         setShowDetailsModal(false);
// // // // //                         setSelectedBooking(null);
// // // // //                     }}
// // // // //                     onMakePayment={handleMakePayment}
// // // // //                     onCancelClick={(booking) => {
// // // // //                         setShowDetailsModal(false);
// // // // //                         setSelectedBooking(booking);
// // // // //                         setShowCancelModal(true);
// // // // //                     }}
// // // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // // //                     onEditClick={(booking) => {
// // // // //                         setShowDetailsModal(false);
// // // // //                         setSelectedBooking(booking);
// // // // //                         setShowEditModal(true);
// // // // //                     }}
// // // // //                 />
// // // // //             )}

// // // // //             {showCancelModal && selectedBooking && (
// // // // //                 <CancelModal
// // // // //                     cancelReason={cancelReason}
// // // // //                     setCancelReason={setCancelReason}
// // // // //                     isCancelling={isCancelling}
// // // // //                     onClose={() => {
// // // // //                         setShowCancelModal(false);
// // // // //                         setCancelReason('');
// // // // //                     }}
// // // // //                     onConfirm={handleCancelBooking}
// // // // //                 />
// // // // //             )}

// // // // //             {showEditModal && selectedBooking && (
// // // // //                 <EditBookingModal
// // // // //                     booking={selectedBooking}
// // // // //                     onClose={() => {
// // // // //                         setShowEditModal(false);
// // // // //                         setSelectedBooking(null);
// // // // //                     }}
// // // // //                     onSuccess={handleEditSuccess}
// // // // //                     formatCurrency={formatCurrency}
// // // // //                     BASE_URL="http://localhost:8080"
// // // // //                 />
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CustomerMyBookings;




// // // // //----------------------------

// // // // // src/Pages/Customer/CustomerMyBookings.jsx
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import CustomerLayout from './components/CustomerLayout';
// // // // import BookingStats from './components/BookingStats';
// // // // import BookingTabs from './components/BookingTabs';
// // // // import BookingList from './components/BookingList';
// // // // import DetailsModal from './components/DetailsModal';
// // // // import CancelModal from './components/CancelModal';
// // // // import EditBookingModal from './components/EditBookingModal';
// // // // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';

// // // // const CustomerMyBookings = () => {
// // // //     const navigate = useNavigate();
// // // //     const [bookings, setBookings] = useState([]);
// // // //     const [filteredBookings, setFilteredBookings] = useState([]);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [errorMessage, setErrorMessage] = useState('');
// // // //     const [activeTab, setActiveTab] = useState('all');
// // // //     const [selectedBooking, setSelectedBooking] = useState(null);
// // // //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// // // //     const [showCancelModal, setShowCancelModal] = useState(false);
// // // //     const [showEditModal, setShowEditModal] = useState(false);
// // // //     const [cancelReason, setCancelReason] = useState('');
// // // //     const [isCancelling, setIsCancelling] = useState(false);
// // // //     const [customerName, setCustomerName] = useState('');
// // // //     const [bookingStats, setBookingStats] = useState({
// // // //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// // // //     });

// // // //     useEffect(() => {
// // // //         const customerToken = localStorage.getItem('customerToken');
// // // //         const storedCustomerId = localStorage.getItem('customerId');
// // // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // // //         if (!customerToken || !storedCustomerId) {
// // // //             navigate('/customer/login');
// // // //             return;
// // // //         }

// // // //         setCustomerName(storedCustomerName || 'Customer');
// // // //         loadBookings();
// // // //     }, [navigate]);

// // // //     useEffect(() => {
// // // //         const filtered = filterBookingsByTab(bookings, activeTab);
// // // //         setFilteredBookings(filtered);
// // // //     }, [activeTab, bookings]);

// // // //     const loadBookings = async () => {
// // // //         setIsLoading(true);
// // // //         setErrorMessage('');
        
// // // //         try {
// // // //             const result = await fetchCustomerBookings();
// // // //             setBookings(result.bookings);
// // // //             setBookingStats(result.stats);
// // // //         } catch (error) {
// // // //             console.error('Error loading bookings:', error);
// // // //             setErrorMessage('Failed to load your bookings. Please try again.');
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     const handleEditBooking = (booking) => {
// // // //         setSelectedBooking(booking);
// // // //         setShowEditModal(true);
// // // //     };

// // // //     const handleEditSuccess = () => {
// // // //         loadBookings();
// // // //     };

// // // //     const handleCancelBooking = async () => {
// // // //         if (!cancelReason.trim()) {
// // // //             alert('Please provide a reason for cancellation');
// // // //             return;
// // // //         }

// // // //         setIsCancelling(true);
// // // //         try {
// // // //             await new Promise(resolve => setTimeout(resolve, 1500));
            
// // // //             setShowCancelModal(false);
// // // //             setShowDetailsModal(false);
// // // //             setCancelReason('');
// // // //             alert('Booking cancelled successfully');
// // // //             loadBookings();
// // // //         } catch (error) {
// // // //             console.error('Error cancelling booking:', error);
// // // //             alert('Failed to cancel booking. Please try again.');
// // // //         } finally {
// // // //             setIsCancelling(false);
// // // //         }
// // // //     };

// // // //     const handleMakePayment = (booking) => {
// // // //         navigate('/customer/paymentview', { 
// // // //             state: { selectedBooking: booking, bookingId: booking.id } 
// // // //         });
// // // //     };

// // // //     const handleDownloadReceipt = async (paymentId) => {
// // // //         try {
// // // //             const response = await axios.get(`http://localhost:8080/api/v1/payment/${paymentId}/receipt`, {
// // // //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// // // //                 responseType: 'blob'
// // // //             });
            
// // // //             const url = window.URL.createObjectURL(new Blob([response.data]));
// // // //             const link = document.createElement('a');
// // // //             link.href = url;
// // // //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// // // //             document.body.appendChild(link);
// // // //             link.click();
// // // //             link.remove();
// // // //         } catch (error) {
// // // //             console.error('Download error:', error);
// // // //             alert('Failed to download receipt');
// // // //         }
// // // //     };

// // // //     const formatCurrency = (amount) => {
// // // //         return new Intl.NumberFormat('en-LK', {
// // // //             style: 'currency',
// // // //             currency: 'LKR',
// // // //             minimumFractionDigits: 0
// // // //         }).format(amount).replace('LKR', 'Rs.');
// // // //     };

// // // //     return (
// // // //         <CustomerLayout>
// // // //             {/* Booking Stats */}
// // // //             <BookingStats stats={bookingStats} />
            
// // // //             {/* Booking Tabs */}
// // // //             <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// // // //             {/* Booking List */}
// // // //             <BookingList
// // // //                 isLoading={isLoading}
// // // //                 errorMessage={errorMessage}
// // // //                 filteredBookings={filteredBookings}
// // // //                 onRefresh={loadBookings}
// // // //                 onViewDetails={(booking) => {
// // // //                     setSelectedBooking(booking);
// // // //                     setShowDetailsModal(true);
// // // //                 }}
// // // //                 onMakePayment={handleMakePayment}
// // // //                 onDownloadReceipt={handleDownloadReceipt}
// // // //                 onEditBooking={handleEditBooking}
// // // //             />

// // // //             {/* Modals */}
// // // //             {showDetailsModal && selectedBooking && (
// // // //                 <DetailsModal
// // // //                     booking={selectedBooking}
// // // //                     onClose={() => {
// // // //                         setShowDetailsModal(false);
// // // //                         setSelectedBooking(null);
// // // //                     }}
// // // //                     onMakePayment={handleMakePayment}
// // // //                     onCancelClick={(booking) => {
// // // //                         setShowDetailsModal(false);
// // // //                         setSelectedBooking(booking);
// // // //                         setShowCancelModal(true);
// // // //                     }}
// // // //                     onDownloadReceipt={handleDownloadReceipt}
// // // //                     onEditClick={(booking) => {
// // // //                         setShowDetailsModal(false);
// // // //                         setSelectedBooking(booking);
// // // //                         setShowEditModal(true);
// // // //                     }}
// // // //                 />
// // // //             )}

// // // //             {showCancelModal && selectedBooking && (
// // // //                 <CancelModal
// // // //                     cancelReason={cancelReason}
// // // //                     setCancelReason={setCancelReason}
// // // //                     isCancelling={isCancelling}
// // // //                     onClose={() => {
// // // //                         setShowCancelModal(false);
// // // //                         setCancelReason('');
// // // //                     }}
// // // //                     onConfirm={handleCancelBooking}
// // // //                 />
// // // //             )}

// // // //             {showEditModal && selectedBooking && (
// // // //                 <EditBookingModal
// // // //                     booking={selectedBooking}
// // // //                     onClose={() => {
// // // //                         setShowEditModal(false);
// // // //                         setSelectedBooking(null);
// // // //                     }}
// // // //                     onSuccess={handleEditSuccess}
// // // //                     formatCurrency={formatCurrency}
// // // //                     BASE_URL="http://localhost:8080"
// // // //                 />
// // // //             )}
// // // //         </CustomerLayout>
// // // //     );
// // // // };

// // // // export default CustomerMyBookings;



// // // // src/Pages/Customer/CustomerMyBookings.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import CustomerLayout from './components/CustomerLayout';
// // // import BookingStats from './components/BookingStats';
// // // import BookingTabs from './components/BookingTabs';
// // // import BookingList from './components/BookingList';
// // // import DetailsModal from './components/DetailsModal';
// // // import CancelModal from './components/CancelModal';
// // // import EditBookingModal from './components/EditBookingModal';
// // // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils';
// // // import Toast from '../../components/Toast'; // Import Toast component

// // // const CustomerMyBookings = () => {
// // //     const navigate = useNavigate();
// // //     const [bookings, setBookings] = useState([]);
// // //     const [filteredBookings, setFilteredBookings] = useState([]);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [errorMessage, setErrorMessage] = useState('');
// // //     const [activeTab, setActiveTab] = useState('all');
// // //     const [selectedBooking, setSelectedBooking] = useState(null);
// // //     const [showDetailsModal, setShowDetailsModal] = useState(false);
// // //     const [showCancelModal, setShowCancelModal] = useState(false);
// // //     const [showEditModal, setShowEditModal] = useState(false);
// // //     const [cancelReason, setCancelReason] = useState('');
// // //     const [isCancelling, setIsCancelling] = useState(false);
// // //     const [customerName, setCustomerName] = useState('');
    
// // //     // Toast states
// // //     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    
// // //     const [bookingStats, setBookingStats] = useState({
// // //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// // //     });

// // //     const BASE_URL = 'http://localhost:8080';

// // //     // Toast helper function
// // //     const showToast = (message, type = 'success') => {
// // //         setToast({ show: true, message, type });
// // //     };

// // //     const hideToast = () => {
// // //         setToast({ show: false, message: '', type: 'success' });
// // //     };

// // //     useEffect(() => {
// // //         const customerToken = localStorage.getItem('customerToken');
// // //         const storedCustomerId = localStorage.getItem('customerId');
// // //         const storedCustomerName = localStorage.getItem('customerName');
        
// // //         if (!customerToken || !storedCustomerId) {
// // //             navigate('/customer/login');
// // //             return;
// // //         }

// // //         setCustomerName(storedCustomerName || 'Customer');
// // //         loadBookings();
// // //     }, [navigate]);

// // //     useEffect(() => {
// // //         const filtered = filterBookingsByTab(bookings, activeTab);
// // //         setFilteredBookings(filtered);
// // //     }, [activeTab, bookings]);

// // //     const loadBookings = async () => {
// // //         setIsLoading(true);
// // //         setErrorMessage('');
        
// // //         try {
// // //             const result = await fetchCustomerBookings();
// // //             setBookings(result.bookings);
// // //             setBookingStats(result.stats);
// // //         } catch (error) {
// // //             console.error('Error loading bookings:', error);
// // //             setErrorMessage('Failed to load your bookings. Please try again.');
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     const handleEditBooking = (booking) => {
// // //         setSelectedBooking(booking);
// // //         setShowEditModal(true);
// // //     };

// // //     const handleEditSuccess = () => {
// // //         loadBookings();
// // //         showToast('Booking updated successfully!', 'success');
// // //     };

// // //     const handleCancelBooking = async () => {
// // //         if (!cancelReason.trim()) {
// // //             showToast('Please provide a reason for cancellation', 'error');
// // //             return;
// // //         }

// // //         setIsCancelling(true);
        
// // //         try {
// // //             // Make API call to cancel booking
// // //             const token = localStorage.getItem('customerToken');
            
// // //             const response = await axios.put(
// // //                 `${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`,
// // //                 {
// // //                     reason: cancelReason,
// // //                     cancellationReason: cancelReason
// // //                 },
// // //                 {
// // //                     headers: {
// // //                         'Content-Type': 'application/json',
// // //                         'Authorization': `Bearer ${token}`
// // //                     },
// // //                     timeout: 30000
// // //                 }
// // //             );

// // //             if (response.status === 200) {
// // //                 // Close modals
// // //                 setShowCancelModal(false);
// // //                 setShowDetailsModal(false);
                
// // //                 // Clear cancel reason
// // //                 setCancelReason('');
                
// // //                 // Show success toast
// // //                 showToast('Booking cancelled successfully!', 'success');
                
// // //                 // Reload bookings after a short delay
// // //                 setTimeout(() => {
// // //                     loadBookings();
// // //                 }, 500);
// // //             } else {
// // //                 throw new Error('Failed to cancel booking');
// // //             }
// // //         } catch (error) {
// // //             console.error('Error cancelling booking:', error);
            
// // //             // Show error toast
// // //             let errorMsg = 'Failed to cancel booking. Please try again.';
            
// // //             if (error.response) {
// // //                 if (error.response.status === 400) {
// // //                     errorMsg = error.response.data?.errorMessage || 'Invalid cancellation request';
// // //                 } else if (error.response.status === 401) {
// // //                     errorMsg = 'Session expired. Please login again.';
// // //                     setTimeout(() => navigate('/customer/login'), 2000);
// // //                 } else if (error.response.status === 409) {
// // //                     errorMsg = 'Booking cannot be cancelled at this stage';
// // //                 }
// // //             } else if (error.request) {
// // //                 errorMsg = 'Network error. Please check your connection.';
// // //             }
            
// // //             showToast(errorMsg, 'error');
// // //         } finally {
// // //             setIsCancelling(false);
// // //         }
// // //     };

// // //     const handleMakePayment = (booking) => {
// // //         navigate('/customer/paymentview', { 
// // //             state: { selectedBooking: booking, bookingId: booking.id } 
// // //         });
// // //     };

// // //     const handleDownloadReceipt = async (paymentId) => {
// // //         try {
// // //             const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
// // //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` },
// // //                 responseType: 'blob'
// // //             });
            
// // //             const url = window.URL.createObjectURL(new Blob([response.data]));
// // //             const link = document.createElement('a');
// // //             link.href = url;
// // //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// // //             document.body.appendChild(link);
// // //             link.click();
// // //             link.remove();
            
// // //             showToast('Receipt downloaded successfully!', 'success');
// // //         } catch (error) {
// // //             console.error('Download error:', error);
// // //             showToast('Failed to download receipt', 'error');
// // //         }
// // //     };

// // //     const formatCurrency = (amount) => {
// // //         return new Intl.NumberFormat('en-LK', {
// // //             style: 'currency',
// // //             currency: 'LKR',
// // //             minimumFractionDigits: 0
// // //         }).format(amount).replace('LKR', 'Rs.');
// // //     };

// // //     return (
// // //         <CustomerLayout>
// // //             {/* Toast Notification */}
// // //             {toast.show && (
// // //                 <Toast 
// // //                     message={toast.message} 
// // //                     type={toast.type} 
// // //                     onClose={hideToast} 
// // //                     duration={3000}
// // //                 />
// // //             )}

// // //             {/* Booking Stats */}
// // //             <BookingStats stats={bookingStats} />
            
// // //             {/* Booking Tabs */}
// // //             <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// // //             {/* Booking List */}
// // //             <BookingList
// // //                 isLoading={isLoading}
// // //                 errorMessage={errorMessage}
// // //                 filteredBookings={filteredBookings}
// // //                 onRefresh={loadBookings}
// // //                 onViewDetails={(booking) => {
// // //                     setSelectedBooking(booking);
// // //                     setShowDetailsModal(true);
// // //                 }}
// // //                 onMakePayment={handleMakePayment}
// // //                 onDownloadReceipt={handleDownloadReceipt}
// // //                 onEditBooking={handleEditBooking}
// // //             />

// // //             {/* Modals */}
// // //             {showDetailsModal && selectedBooking && (
// // //                 <DetailsModal
// // //                     booking={selectedBooking}
// // //                     onClose={() => {
// // //                         setShowDetailsModal(false);
// // //                         setSelectedBooking(null);
// // //                     }}
// // //                     onMakePayment={handleMakePayment}
// // //                     onCancelClick={(booking) => {
// // //                         setShowDetailsModal(false);
// // //                         setSelectedBooking(booking);
// // //                         setShowCancelModal(true);
// // //                     }}
// // //                     onDownloadReceipt={handleDownloadReceipt}
// // //                     onEditClick={(booking) => {
// // //                         setShowDetailsModal(false);
// // //                         setSelectedBooking(booking);
// // //                         setShowEditModal(true);
// // //                     }}
// // //                 />
// // //             )}

// // //             {showCancelModal && selectedBooking && (
// // //                 <CancelModal
// // //                     cancelReason={cancelReason}
// // //                     setCancelReason={setCancelReason}
// // //                     isCancelling={isCancelling}
// // //                     onClose={() => {
// // //                         setShowCancelModal(false);
// // //                         setCancelReason('');
// // //                     }}
// // //                     onConfirm={handleCancelBooking}
// // //                 />
// // //             )}

// // //             {showEditModal && selectedBooking && (
// // //                 <EditBookingModal
// // //                     booking={selectedBooking}
// // //                     onClose={() => {
// // //                         setShowEditModal(false);
// // //                         setSelectedBooking(null);
// // //                     }}
// // //                     onSuccess={handleEditSuccess}
// // //                     formatCurrency={formatCurrency}
// // //                     BASE_URL={BASE_URL}
// // //                 />
// // //             )}
// // //         </CustomerLayout>
// // //     );
// // // };

// // // export default CustomerMyBookings;



// // // src/Pages/Customer/CustomerMyBookings.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import CustomerLayout from './components/CustomerLayout';
// // import BookingStats from './components/BookingStats';
// // import BookingTabs from './components/BookingTabs';
// // import BookingList from './components/BookingList';
// // import DetailsModal from './components/DetailsModal';
// // import CancelModal from './components/CancelModal';
// // import EditBookingModal from './components/EditBookingModal';
// // import Toast from '../../components/Toast';
// // import { fetchCustomerBookings, filterBookingsByTab } from './components/BookingUtils'; // Removed unused updateBookingStatus

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
// //     const [showEditModal, setShowEditModal] = useState(false);
// //     const [cancelReason, setCancelReason] = useState('');
// //     const [isCancelling, setIsCancelling] = useState(false);
// //     // const [customerName, setCustomerName] = useState(''); // Commented out unused state
    
// //     // Toast states
// //     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    
// //     const [bookingStats, setBookingStats] = useState({
// //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// //     });

// //     const BASE_URL = 'http://localhost:8080';

// //     // Toast helper function
// //     const showToast = (message, type = 'success') => {
// //         setToast({ show: true, message, type });
// //     };

// //     const hideToast = () => {
// //         setToast({ show: false, message: '', type: 'success' });
// //     };

// //     useEffect(() => {
// //         const customerToken = localStorage.getItem('customerToken');
// //         const storedCustomerId = localStorage.getItem('customerId');
// //         // const storedCustomerName = localStorage.getItem('customerName'); // Commented out unused variable
        
// //         if (!customerToken || !storedCustomerId) {
// //             navigate('/customer/login');
// //             return;
// //         }

// //         // setCustomerName(storedCustomerName || 'Customer'); // Commented out unused state
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

// //     const handleEditBooking = (booking) => {
// //         setSelectedBooking(booking);
// //         setShowEditModal(true);
// //     };

// //     const handleEditSuccess = () => {
// //         loadBookings();
// //     };

// //     const handleCancelBooking = async () => {
// //         if (!cancelReason.trim()) {
// //             showToast('Please provide a reason for cancellation', 'error');
// //             return;
// //         }

// //         setIsCancelling(true);
        
// //         try {
// //             const token = localStorage.getItem('customerToken');
            
// //             // Make actual API call to cancel booking
// //             const response = await axios.put(
// //                 `${BASE_URL}/api/v1/booking/${selectedBooking.id}/cancel`,
// //                 { 
// //                     cancellationReason: cancelReason,
// //                     bookingStatus: 'CANCELLED'
// //                 },
// //                 {
// //                     headers: { 
// //                         'Authorization': `Bearer ${token}`,
// //                         'Content-Type': 'application/json'
// //                     }
// //                 }
// //             );

// //             if (response.status === 200) {
// //                 // Close modals
// //                 setShowCancelModal(false);
// //                 setShowDetailsModal(false);
                
// //                 // Show success toast
// //                 showToast('Booking cancelled successfully', 'success');
                
// //                 // Reset cancel reason
// //                 setCancelReason('');
                
// //                 // Reload bookings to reflect changes
// //                 setTimeout(() => {
// //                     loadBookings();
// //                 }, 500); // Small delay to allow toast to be seen
// //             } else {
// //                 throw new Error('Failed to cancel booking');
// //             }
// //         } catch (error) {
// //             console.error('Error cancelling booking:', error);
            
// //             let errorMsg = 'Failed to cancel booking. Please try again.';
// //             if (error.response?.data?.message) {
// //                 errorMsg = error.response.data.message;
// //             } else if (error.response?.data?.errorMessage) {
// //                 errorMsg = error.response.data.errorMessage;
// //             }
            
// //             showToast(errorMsg, 'error');
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
            
// //             showToast('Receipt downloaded successfully', 'success');
// //         } catch (error) {
// //             console.error('Download error:', error);
// //             showToast('Failed to download receipt', 'error');
// //         }
// //     };

// //     const formatCurrency = (amount) => {
// //         return new Intl.NumberFormat('en-LK', {
// //             style: 'currency',
// //             currency: 'LKR',
// //             minimumFractionDigits: 0
// //         }).format(amount).replace('LKR', 'Rs.');
// //     };

// //     return (
// //         <CustomerLayout>
// //             {/* Toast Notification */}
// //             {toast.show && (
// //                 <Toast 
// //                     message={toast.message} 
// //                     type={toast.type} 
// //                     onClose={hideToast} 
// //                     duration={3000}
// //                 />
// //             )}

// //             {/* Booking Stats */}
// //             <BookingStats stats={bookingStats} />
            
// //             {/* Booking Tabs */}
// //             <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// //             {/* Booking List */}
// //             <BookingList
// //                 isLoading={isLoading}
// //                 errorMessage={errorMessage}
// //                 filteredBookings={filteredBookings}
// //                 onRefresh={loadBookings}
// //                 onViewDetails={(booking) => {
// //                     setSelectedBooking(booking);
// //                     setShowDetailsModal(true);
// //                 }}
// //                 onMakePayment={handleMakePayment}
// //                 onDownloadReceipt={handleDownloadReceipt}
// //                 onEditBooking={handleEditBooking}
// //             />

// //             {/* Modals */}
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
// //                     onEditClick={(booking) => {
// //                         setShowDetailsModal(false);
// //                         setSelectedBooking(booking);
// //                         setShowEditModal(true);
// //                     }}
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
// //                     bookingDetails={selectedBooking}
// //                 />
// //             )}

// //             {showEditModal && selectedBooking && (
// //                 <EditBookingModal
// //                     booking={selectedBooking}
// //                     onClose={() => {
// //                         setShowEditModal(false);
// //                         setSelectedBooking(null);
// //                     }}
// //                     onSuccess={handleEditSuccess}
// //                     formatCurrency={formatCurrency}
// //                     BASE_URL={BASE_URL}
// //                     showToast={showToast}
// //                 />
// //             )}
// //         </CustomerLayout>
// //     );
// // };

// // export default CustomerMyBookings;




// // // src/Pages/Customer/CustomerMyBookings.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import CustomerLayout from './components/CustomerLayout';
// // import BookingStats from './components/BookingStats';
// // import BookingTabs from './components/BookingTabs';
// // import BookingList from './components/BookingList';
// // import DetailsModal from './components/DetailsModal';
// // import CancelModal from './components/CancelModal';
// // import EditBookingModal from './components/EditBookingModal';
// // import Toast from '../../components/Toast';
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
// //     const [showEditModal, setShowEditModal] = useState(false);
// //     const [cancelReason, setCancelReason] = useState('');
// //     const [isCancelling, setIsCancelling] = useState(false);
// //     const [customerName, setCustomerName] = useState('');
    
// //     // Toast states
// //     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    
// //     const [bookingStats, setBookingStats] = useState({
// //         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
// //     });

// //     const BASE_URL = 'http://localhost:8080';

// //     // Toast helper function
// //     const showToast = (message, type = 'success') => {
// //         setToast({ show: true, message, type });
// //     };

// //     const hideToast = () => {
// //         setToast({ show: false, message: '', type: 'success' });
// //     };

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

// //     const handleEditBooking = (booking) => {
// //         setSelectedBooking(booking);
// //         setShowEditModal(true);
// //     };

// //     const handleEditSuccess = () => {
// //         loadBookings();
// //         showToast('Booking updated successfully!', 'success');
// //     };

// //     // FIXED: Proper cancellation with API call and multiple endpoint attempts
// //     const handleCancelBooking = async () => {
// //         if (!cancelReason.trim()) {
// //             showToast('Please provide a reason for cancellation', 'error');
// //             return;
// //         }

// //         setIsCancelling(true);
        
// //         try {
// //             const token = localStorage.getItem('customerToken');
            
// //             if (!token) {
// //                 showToast('Please login again', 'error');
// //                 navigate('/customer/login');
// //                 return;
// //             }

// //             console.log('Attempting to cancel booking:', selectedBooking.id);
// //             console.log('Cancel reason:', cancelReason);
            
// //             let response = null;
// //             let error = null;

// //             // TRY ENDPOINT 1: /api/v1/booking/{id}/cancel
// //             try {
// //                 console.log('Trying endpoint: /api/v1/booking/${selectedBooking.id}/cancel');
// //                 response = await axios.put(
// //                     `${BASE_URL}/api/v1/booking/${selectedBooking.id}/cancel`,
// //                     { cancellationReason: cancelReason },
// //                     {
// //                         headers: { 
// //                             'Authorization': `Bearer ${token}`,
// //                             'Content-Type': 'application/json'
// //                         }
// //                     }
// //                 );
// //                 console.log('Endpoint 1 success:', response.status);
// //             } catch (err) {
// //                 console.log('Endpoint 1 failed:', err.response?.status);
// //                 error = err;
                
// //                 // TRY ENDPOINT 2: /api/v1/booking/cancel/{id}
// //                 try {
// //                     console.log('Trying endpoint: /api/v1/booking/cancel/${selectedBooking.id}');
// //                     response = await axios.put(
// //                         `${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`,
// //                         { cancellationReason: cancelReason },
// //                         {
// //                             headers: { 
// //                                 'Authorization': `Bearer ${token}`,
// //                                 'Content-Type': 'application/json'
// //                             }
// //                         }
// //                     );
// //                     console.log('Endpoint 2 success:', response.status);
// //                     error = null;
// //                 } catch (err2) {
// //                     console.log('Endpoint 2 failed:', err2.response?.status);
                    
// //                     // TRY ENDPOINT 3: Update booking status
// //                     try {
// //                         console.log('Trying endpoint: /api/v1/booking/update/${selectedBooking.id}');
// //                         response = await axios.put(
// //                             `${BASE_URL}/api/v1/booking/update/${selectedBooking.id}`,
// //                             { 
// //                                 bookingStatus: 'CANCELLED',
// //                                 cancellationReason: cancelReason 
// //                             },
// //                             {
// //                                 headers: { 
// //                                     'Authorization': `Bearer ${token}`,
// //                                     'Content-Type': 'application/json'
// //                                 }
// //                             }
// //                         );
// //                         console.log('Endpoint 3 success:', response.status);
// //                         error = null;
// //                     } catch (err3) {
// //                         console.log('Endpoint 3 failed:', err3.response?.status);
// //                         error = err3;
// //                     }
// //                 }
// //             }

// //             if (response && (response.status === 200 || response.status === 201 || response.status === 204)) {
// //                 // Close modals
// //                 setShowCancelModal(false);
// //                 setShowDetailsModal(false);
                
// //                 // Show success toast
// //                 showToast('Booking cancelled successfully!', 'success');
                
// //                 // Reset cancel reason
// //                 setCancelReason('');
                
// //                 // Reload bookings to reflect changes
// //                 await loadBookings();
// //             } else {
// //                 throw error || new Error('Failed to cancel booking');
// //             }
            
// //         } catch (error) {
// //             console.error('Error cancelling booking - Full details:', {
// //                 message: error.message,
// //                 response: error.response,
// //                 data: error.response?.data,
// //                 status: error.response?.status,
// //                 config: error.config
// //             });
            
// //             let errorMsg = 'Failed to cancel booking. Please try again.';
            
// //             if (error.response?.status === 404) {
// //                 errorMsg = 'Cancellation endpoint not found. Please contact support.';
// //             } else if (error.response?.status === 400) {
// //                 errorMsg = error.response.data?.message || 
// //                           error.response.data?.errorMessage || 
// //                           'Invalid cancellation request';
// //             } else if (error.response?.status === 401) {
// //                 errorMsg = 'Session expired. Please login again.';
// //                 setTimeout(() => navigate('/customer/login'), 2000);
// //             } else if (error.response?.status === 403) {
// //                 errorMsg = 'You are not authorized to cancel this booking';
// //             } else if (error.response?.status === 409) {
// //                 errorMsg = 'Booking cannot be cancelled at this stage';
// //             } else if (error.response?.data?.message) {
// //                 errorMsg = error.response.data.message;
// //             } else if (error.response?.data?.errorMessage) {
// //                 errorMsg = error.response.data.errorMessage;
// //             } else if (error.response?.data) {
// //                 errorMsg = typeof error.response.data === 'string' 
// //                     ? error.response.data 
// //                     : 'Server error. Please try again.';
// //             }
            
// //             showToast(errorMsg, 'error');
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
// //             const token = localStorage.getItem('customerToken');
// //             const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
// //                 headers: { 'Authorization': `Bearer ${token}` },
// //                 responseType: 'blob'
// //             });
            
// //             const url = window.URL.createObjectURL(new Blob([response.data]));
// //             const link = document.createElement('a');
// //             link.href = url;
// //             link.setAttribute('download', `receipt_${paymentId}.pdf`);
// //             document.body.appendChild(link);
// //             link.click();
// //             link.remove();
// //             window.URL.revokeObjectURL(url);
            
// //             showToast('Receipt downloaded successfully!', 'success');
// //         } catch (error) {
// //             console.error('Download error:', error);
// //             showToast('Failed to download receipt', 'error');
// //         }
// //     };

// //     const formatCurrency = (amount) => {
// //         return new Intl.NumberFormat('en-LK', {
// //             style: 'currency',
// //             currency: 'LKR',
// //             minimumFractionDigits: 0
// //         }).format(amount).replace('LKR', 'Rs.');
// //     };

// //     return (
// //         <CustomerLayout>
// //             {/* Toast Notification */}
// //             {toast.show && (
// //                 <Toast 
// //                     message={toast.message} 
// //                     type={toast.type} 
// //                     onClose={hideToast} 
// //                     duration={3000}
// //                 />
// //             )}

// //             {/* Booking Stats */}
// //             <BookingStats stats={bookingStats} />
            
// //             {/* Booking Tabs */}
// //             <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

// //             {/* Booking List */}
// //             <BookingList
// //                 isLoading={isLoading}
// //                 errorMessage={errorMessage}
// //                 filteredBookings={filteredBookings}
// //                 onRefresh={loadBookings}
// //                 onViewDetails={(booking) => {
// //                     setSelectedBooking(booking);
// //                     setShowDetailsModal(true);
// //                 }}
// //                 onMakePayment={handleMakePayment}
// //                 onDownloadReceipt={handleDownloadReceipt}
// //                 onEditBooking={handleEditBooking}
// //             />

// //             {/* Modals */}
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
// //                     onEditClick={(booking) => {
// //                         setShowDetailsModal(false);
// //                         setSelectedBooking(booking);
// //                         setShowEditModal(true);
// //                     }}
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
// //                     booking={selectedBooking}
// //                     formatCurrency={formatCurrency}
// //                 />
// //             )}

// //             {showEditModal && selectedBooking && (
// //                 <EditBookingModal
// //                     booking={selectedBooking}
// //                     onClose={() => {
// //                         setShowEditModal(false);
// //                         setSelectedBooking(null);
// //                     }}
// //                     onSuccess={handleEditSuccess}
// //                     formatCurrency={formatCurrency}
// //                     BASE_URL={BASE_URL}
// //                 />
// //             )}
// //         </CustomerLayout>
// //     );
// // };

// // export default CustomerMyBookings;



// // src/Pages/Customer/CustomerMyBookings.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CustomerLayout from './components/CustomerLayout';
// import BookingStats from './components/BookingStats';
// import BookingTabs from './components/BookingTabs';
// import BookingList from './components/BookingList';
// import DetailsModal from './components/DetailsModal';
// import CancelModal from './components/CancelModal';
// import EditBookingModal from './components/EditBookingModal';
// import Toast from '../../Components/Toast';
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
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [cancelReason, setCancelReason] = useState('');
//     const [isCancelling, setIsCancelling] = useState(false);
//     const [customerName, setCustomerName] = useState('');
    
//     // Toast states
//     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    
//     const [bookingStats, setBookingStats] = useState({
//         total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
//     });

//     const BASE_URL = 'http://localhost:8080';

//     // Toast helper function
//     const showToast = (message, type = 'success') => {
//         setToast({ show: true, message, type });
//     };

//     const hideToast = () => {
//         setToast({ show: false, message: '', type: 'success' });
//     };

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

//     const handleEditBooking = (booking) => {
//         setSelectedBooking(booking);
//         setShowEditModal(true);
//     };

//     const handleEditSuccess = () => {
//         loadBookings();
//         showToast('Booking updated successfully!', 'success');
//     };

//     // FIXED: Proper cancellation with API call and multiple endpoint attempts
//     const handleCancelBooking = async () => {
//         if (!cancelReason.trim()) {
//             showToast('Please provide a reason for cancellation', 'error');
//             return;
//         }

//         setIsCancelling(true);
        
//         try {
//             const token = localStorage.getItem('customerToken');
            
//             if (!token) {
//                 showToast('Please login again', 'error');
//                 navigate('/customer/login');
//                 return;
//             }

//             console.log('Attempting to cancel booking:', selectedBooking.id);
//             console.log('Cancel reason:', cancelReason);
            
//             let response = null;
//             let error = null;

//             // TRY ENDPOINT 1: /api/v1/booking/{id}/cancel
//             try {
//                 console.log('Trying endpoint: /api/v1/booking/${selectedBooking.id}/cancel');
//                 response = await axios.put(
//                     `${BASE_URL}/api/v1/booking/${selectedBooking.id}/cancel`,
//                     { cancellationReason: cancelReason },
//                     {
//                         headers: { 
//                             'Authorization': `Bearer ${token}`,
//                             'Content-Type': 'application/json'
//                         }
//                     }
//                 );
//                 console.log('Endpoint 1 success:', response.status);
//             } catch (err) {
//                 console.log('Endpoint 1 failed:', err.response?.status);
//                 error = err;
                
//                 // TRY ENDPOINT 2: /api/v1/booking/cancel/{id}
//                 try {
//                     console.log('Trying endpoint: /api/v1/booking/cancel/${selectedBooking.id}');
//                     response = await axios.put(
//                         `${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`,
//                         { cancellationReason: cancelReason },
//                         {
//                             headers: { 
//                                 'Authorization': `Bearer ${token}`,
//                                 'Content-Type': 'application/json'
//                             }
//                         }
//                     );
//                     console.log('Endpoint 2 success:', response.status);
//                     error = null;
//                 } catch (err2) {
//                     console.log('Endpoint 2 failed:', err2.response?.status);
                    
//                     // TRY ENDPOINT 3: Update booking status
//                     try {
//                         console.log('Trying endpoint: /api/v1/booking/update/${selectedBooking.id}');
//                         response = await axios.put(
//                             `${BASE_URL}/api/v1/booking/update/${selectedBooking.id}`,
//                             { 
//                                 bookingStatus: 'CANCELLED',
//                                 cancellationReason: cancelReason 
//                             },
//                             {
//                                 headers: { 
//                                     'Authorization': `Bearer ${token}`,
//                                     'Content-Type': 'application/json'
//                                 }
//                             }
//                         );
//                         console.log('Endpoint 3 success:', response.status);
//                         error = null;
//                     } catch (err3) {
//                         console.log('Endpoint 3 failed:', err3.response?.status);
//                         error = err3;
//                     }
//                 }
//             }

//             if (response && (response.status === 200 || response.status === 201 || response.status === 204)) {
//                 // Close modals
//                 setShowCancelModal(false);
//                 setShowDetailsModal(false);
                
//                 // Show success toast (NO ALERT)
//                 showToast('Booking cancelled successfully!', 'success');
                
//                 // Reset cancel reason
//                 setCancelReason('');
                
//                 // Reload bookings to reflect changes
//                 await loadBookings();
//             } else {
//                 throw error || new Error('Failed to cancel booking');
//             }
            
//         } catch (error) {
//             console.error('Error cancelling booking - Full details:', {
//                 message: error.message,
//                 response: error.response,
//                 data: error.response?.data,
//                 status: error.response?.status,
//                 config: error.config
//             });
            
//             let errorMsg = 'Failed to cancel booking. Please try again.';
            
//             if (error.response?.status === 404) {
//                 errorMsg = 'Cancellation endpoint not found. Please contact support.';
//             } else if (error.response?.status === 400) {
//                 errorMsg = error.response.data?.message || 
//                           error.response.data?.errorMessage || 
//                           'Invalid cancellation request';
//             } else if (error.response?.status === 401) {
//                 errorMsg = 'Session expired. Please login again.';
//                 setTimeout(() => navigate('/customer/login'), 2000);
//             } else if (error.response?.status === 403) {
//                 errorMsg = 'You are not authorized to cancel this booking';
//             } else if (error.response?.status === 409) {
//                 errorMsg = 'Booking cannot be cancelled at this stage';
//             } else if (error.response?.data?.message) {
//                 errorMsg = error.response.data.message;
//             } else if (error.response?.data?.errorMessage) {
//                 errorMsg = error.response.data.errorMessage;
//             } else if (error.response?.data) {
//                 errorMsg = typeof error.response.data === 'string' 
//                     ? error.response.data 
//                     : 'Server error. Please try again.';
//             }
            
//             showToast(errorMsg, 'error');
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
//             const token = localStorage.getItem('customerToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
//                 headers: { 'Authorization': `Bearer ${token}` },
//                 responseType: 'blob'
//             });
            
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `receipt_${paymentId}.pdf`);
//             document.body.appendChild(link);
//             link.click();
//             link.remove();
//             window.URL.revokeObjectURL(url);
            
//             showToast('Receipt downloaded successfully!', 'success');
//         } catch (error) {
//             console.error('Download error:', error);
//             showToast('Failed to download receipt', 'error');
//         }
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-LK', {
//             style: 'currency',
//             currency: 'LKR',
//             minimumFractionDigits: 0
//         }).format(amount).replace('LKR', 'Rs.');
//     };

//     return (
//         <CustomerLayout>
//             {/* Toast Notification */}
//             {toast.show && (
//                 <Toast 
//                     message={toast.message} 
//                     type={toast.type} 
//                     onClose={hideToast} 
//                     duration={3000}
//                 />
//             )}

//             {/* Booking Stats */}
//             <BookingStats stats={bookingStats} />
            
//             {/* Booking Tabs */}
//             <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

//             {/* Booking List */}
//             <BookingList
//                 isLoading={isLoading}
//                 errorMessage={errorMessage}
//                 filteredBookings={filteredBookings}
//                 onRefresh={loadBookings}
//                 onViewDetails={(booking) => {
//                     setSelectedBooking(booking);
//                     setShowDetailsModal(true);
//                 }}
//                 onMakePayment={handleMakePayment}
//                 onDownloadReceipt={handleDownloadReceipt}
//                 onEditBooking={handleEditBooking}
//             />

//             {/* Modals */}
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
//                     onEditClick={(booking) => {
//                         setShowDetailsModal(false);
//                         setSelectedBooking(booking);
//                         setShowEditModal(true);
//                     }}
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
//                     booking={selectedBooking}
//                     formatCurrency={formatCurrency}
//                 />
//             )}

//             {showEditModal && selectedBooking && (
//                 <EditBookingModal
//                     booking={selectedBooking}
//                     onClose={() => {
//                         setShowEditModal(false);
//                         setSelectedBooking(null);
//                     }}
//                     onSuccess={handleEditSuccess}
//                     formatCurrency={formatCurrency}
//                     BASE_URL={BASE_URL}
//                 />
//             )}
//         </CustomerLayout>
//     );
// };

// export default CustomerMyBookings;



// src/Pages/Customer/CustomerMyBookings.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerLayout from './components/CustomerLayout';
import BookingStats from './components/BookingStats';
import BookingTabs from './components/BookingTabs';
import BookingList from './components/BookingList';
import DetailsModal from './components/DetailsModal';
import CancelModal from './components/CancelModal';
import EditBookingModal from './components/EditBookingModal';
import Toast from '../../Components/Toast';
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
    const [showEditModal, setShowEditModal] = useState(false);
    const [cancelReason, setCancelReason] = useState('');
    const [isCancelling, setIsCancelling] = useState(false);
    const [customerName, setCustomerName] = useState('');
    
    // Toast states
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    
    const [bookingStats, setBookingStats] = useState({
        total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0
    });

    const BASE_URL = 'http://localhost:8080';

    // Toast helper function
    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
    };

    const hideToast = () => {
        setToast({ show: false, message: '', type: 'success' });
    };

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
        loadBookings();
        showToast('Booking updated successfully!', 'success');
    };

    // FIXED: Proper cancellation with API call and multiple endpoint attempts
    const handleCancelBooking = async () => {
        if (!cancelReason.trim()) {
            showToast('Please provide a reason for cancellation', 'error');
            return;
        }

        setIsCancelling(true);
        
        try {
            const token = localStorage.getItem('customerToken');
            
            if (!token) {
                showToast('Please login again', 'error');
                navigate('/customer/login');
                return;
            }

            console.log('Attempting to cancel booking:', selectedBooking.id);
            console.log('Cancel reason:', cancelReason);
            
            let response = null;
            let error = null;

            // TRY ENDPOINT 1: /api/v1/booking/{id}/cancel
            try {
                console.log('Trying endpoint: /api/v1/booking/${selectedBooking.id}/cancel');
                response = await axios.put(
                    `${BASE_URL}/api/v1/booking/${selectedBooking.id}/cancel`,
                    { cancellationReason: cancelReason },
                    {
                        headers: { 
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                console.log('Endpoint 1 success:', response.status);
            } catch (err) {
                console.log('Endpoint 1 failed:', err.response?.status);
                error = err;
                
                // TRY ENDPOINT 2: /api/v1/booking/cancel/{id}
                try {
                    console.log('Trying endpoint: /api/v1/booking/cancel/${selectedBooking.id}');
                    response = await axios.put(
                        `${BASE_URL}/api/v1/booking/cancel/${selectedBooking.id}`,
                        { cancellationReason: cancelReason },
                        {
                            headers: { 
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                    console.log('Endpoint 2 success:', response.status);
                    error = null;
                } catch (err2) {
                    console.log('Endpoint 2 failed:', err2.response?.status);
                    
                    // TRY ENDPOINT 3: Update booking status
                    try {
                        console.log('Trying endpoint: /api/v1/booking/update/${selectedBooking.id}');
                        response = await axios.put(
                            `${BASE_URL}/api/v1/booking/update/${selectedBooking.id}`,
                            { 
                                bookingStatus: 'CANCELLED',
                                cancellationReason: cancelReason 
                            },
                            {
                                headers: { 
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                }
                            }
                        );
                        console.log('Endpoint 3 success:', response.status);
                        error = null;
                    } catch (err3) {
                        console.log('Endpoint 3 failed:', err3.response?.status);
                        error = err3;
                    }
                }
            }

            if (response && (response.status === 200 || response.status === 201 || response.status === 204)) {
                // Close modals
                setShowCancelModal(false);
                setShowDetailsModal(false);
                
                // Show success toast (NO ALERT)
                showToast('Booking cancelled successfully!', 'success');
                
                // Reset cancel reason
                setCancelReason('');
                
                // Reload bookings to reflect changes
                await loadBookings();
            } else {
                throw error || new Error('Failed to cancel booking');
            }
            
        } catch (error) {
            console.error('Error cancelling booking - Full details:', {
                message: error.message,
                response: error.response,
                data: error.response?.data,
                status: error.response?.status,
                config: error.config
            });
            
            let errorMsg = 'Failed to cancel booking. Please try again.';
            
            if (error.response?.status === 404) {
                errorMsg = 'Cancellation endpoint not found. Please contact support.';
            } else if (error.response?.status === 400) {
                errorMsg = error.response.data?.message || 
                          error.response.data?.errorMessage || 
                          'Invalid cancellation request';
            } else if (error.response?.status === 401) {
                errorMsg = 'Session expired. Please login again.';
                setTimeout(() => navigate('/customer/login'), 2000);
            } else if (error.response?.status === 403) {
                errorMsg = 'You are not authorized to cancel this booking';
            } else if (error.response?.status === 409) {
                errorMsg = 'Booking cannot be cancelled at this stage';
            } else if (error.response?.data?.message) {
                errorMsg = error.response.data.message;
            } else if (error.response?.data?.errorMessage) {
                errorMsg = error.response.data.errorMessage;
            } else if (error.response?.data) {
                errorMsg = typeof error.response.data === 'string' 
                    ? error.response.data 
                    : 'Server error. Please try again.';
            }
            
            showToast(errorMsg, 'error');
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
            const token = localStorage.getItem('customerToken');
            const response = await axios.get(`${BASE_URL}/api/v1/payment/${paymentId}/receipt`, {
                headers: { 'Authorization': `Bearer ${token}` },
                responseType: 'blob'
            });
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `receipt_${paymentId}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            
            showToast('Receipt downloaded successfully!', 'success');
        } catch (error) {
            console.error('Download error:', error);
            showToast('Failed to download receipt', 'error');
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
        <CustomerLayout customerName={customerName}>
            {/* Toast Notification */}
            {toast.show && (
                <Toast 
                    message={toast.message} 
                    type={toast.type} 
                    onClose={hideToast} 
                    duration={3000}
                />
            )}

            {/* Booking Stats */}
            <BookingStats stats={bookingStats} />
            
            {/* Booking Tabs */}
            <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} stats={bookingStats} />

            {/* Booking List */}
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
                onEditBooking={handleEditBooking}
            />

            {/* Modals */}
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
                    booking={selectedBooking}
                    formatCurrency={formatCurrency}
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
                    BASE_URL={BASE_URL}
                />
            )}
        </CustomerLayout>
    );
};

export default CustomerMyBookings;