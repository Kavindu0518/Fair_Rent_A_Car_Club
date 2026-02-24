import React, { useState } from 'react';

const DetailsModal = ({ booking, onClose, onMakePayment, onCancelClick, onDownloadReceipt }) => {
    const [imageError, setImageError] = useState(false);
    const BASE_URL = 'http://localhost:8080';

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        // Clean the path - remove any quotes or extra spaces
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        // If it's already a full URL
        if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
            return cleanPath;
        }
        
        // If it starts with /uploads
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        // If it's a Windows path
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            // Extract just the filename from the full path
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        
        // If it already has 'uploads' in the path but not at the start
        if (cleanPath.includes('uploads/')) {
            const uploadsIndex = cleanPath.indexOf('uploads/');
            const relativePath = cleanPath.substring(uploadsIndex);
            return `${BASE_URL}/${relativePath}`;
        }
        
        // Default case - assume it's just a filename
        return `${BASE_URL}/uploads/vehicles/${cleanPath}`;
    };

    const imageUrl = getFullImageUrl(booking.vehicle?.vehicleImage);

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

    // const getStatusBadge = () => {
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

    const getStatusBadge = () => {
    if (booking.bookingStatus === 'CANCELLED') {
        return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Cancelled</span>;
    }
    
    if (booking.bookingStatus === 'COMPLETED') {
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
    }
    
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
                        {getStatusBadge()}
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
                                        alt={booking.vehicle?.makeModel || 'Vehicle'}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.error('Image failed to load:', imageUrl);
                                            setImageError(true);
                                            // Try alternative URL formats
                                            if (!imageUrl.includes('/uploads/vehicles/')) {
                                                const alternativeUrl = `${BASE_URL}/uploads/vehicles/${booking.vehicle?.vehicleImage?.split('\\').pop()}`;
                                                e.target.src = alternativeUrl;
                                            }
                                        }}
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

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                        {booking.paymentStatus === 'PENDING' && booking.bookingStatus !== 'CANCELLED' && (
                            <>
                                <button
                                    onClick={() => {
                                        onClose();
                                        onMakePayment(booking);
                                    }}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 text-center"
                                >
                                    Make Payment
                                </button>
                                <button
                                    onClick={() => {
                                        onClose();
                                        onCancelClick(booking);
                                    }}
                                    className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 text-center"
                                >
                                    Cancel Booking
                                </button>
                            </>
                        )}
                        
                        {booking.payment?.hasPdf && (
                            <button
                                onClick={() => onDownloadReceipt(booking.payment.id)}
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

export default DetailsModal;