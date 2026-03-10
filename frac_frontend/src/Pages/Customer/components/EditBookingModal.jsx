// src/Pages/Customer/components/EditBookingModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBookingModal = ({ booking, onClose, onSuccess, formatCurrency, BASE_URL = 'http://localhost:8080' }) => {
    const [pickupDate, setPickupDate] = useState(booking.pickupDate?.split('T')[0] || '');
    const [dropOffDate, setDropOffDate] = useState(booking.dropOffDate?.split('T')[0] || '');
    const [pickupLocation, setPickupLocation] = useState(booking.pickupLocation || '');
    const [dropOffLocation, setDropOffLocation] = useState(booking.dropOffLocation || booking.pickupLocation || '');
    const [driverStatus, setDriverStatus] = useState(booking.driverStatus || 'WITHOUT_DRIVER');
    const [gpsIncluded, setGpsIncluded] = useState(booking.gpsIncluded || false);
    const [childSeatIncluded, setChildSeatIncluded] = useState(booking.childSeatIncluded || false);
    const [totalPrice, setTotalPrice] = useState(booking.totalPrice || 0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
    const [vehicle, setVehicle] = useState(booking.vehicle || null);

    const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];
    const locations = ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'];

    useEffect(() => {
        if (!vehicle && booking.vehicleId) {
            fetchVehicleDetails();
        }
    }, []);

    useEffect(() => {
        if (pickupDate && dropOffDate && vehicle) {
            calculateNewPrice();
        }
    }, [pickupDate, dropOffDate, driverStatus, gpsIncluded, childSeatIncluded, vehicle]);

    const fetchVehicleDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${booking.vehicleId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('customerToken')}` }
            });
            setVehicle(response.data);
        } catch (err) {
            console.error('Error fetching vehicle:', err);
        }
    };

    const calculateDays = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const calculateNewPrice = () => {
        if (!vehicle?.dailyRentalPrice) return;
        
        const days = calculateDays(pickupDate, dropOffDate);
        if (days > 0) {
            let price = days * vehicle.dailyRentalPrice;
            
            if (gpsIncluded) price += days * 500;
            if (childSeatIncluded) price += days * 300;
            if (driverStatus === 'WITH_DRIVER') price += days * 1500;
            
            setTotalPrice(price);
        }
    };

    const checkAvailability = async () => {
        setIsCheckingAvailability(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/booking/getAll`);
            
            const start = new Date(pickupDate);
            const end = new Date(dropOffDate);
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            
            // Check for conflicts excluding current booking
            const conflictingBookings = response.data.filter(b => {
                if (b.vehicleId !== booking.vehicleId) return false;
                if (b.id === booking.id) return false; // Exclude current booking
                if (b.bookingStatus === 'CANCELLED' || b.bookingStatus === 'COMPLETED') return false;
                
                const bStart = new Date(b.pickupDate);
                const bEnd = new Date(b.dropOffDate);
                bStart.setHours(0, 0, 0, 0);
                bEnd.setHours(23, 59, 59, 999);
                
                return (
                    (start >= bStart && start <= bEnd) ||
                    (end >= bStart && end <= bEnd) ||
                    (start <= bStart && end >= bEnd)
                );
            });
            
            setIsCheckingAvailability(false);
            return conflictingBookings.length === 0;
        } catch (err) {
            console.error('Error checking availability:', err);
            setIsCheckingAvailability(false);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate dates
        if (!pickupDate || !dropOffDate) {
            setError('Please select pickup and drop-off dates');
            return;
        }

        if (new Date(pickupDate) >= new Date(dropOffDate)) {
            setError('Drop-off date must be after pickup date');
            return;
        }

        if (new Date(pickupDate) < new Date()) {
            setError('Pickup date cannot be in the past');
            return;
        }

        // Check availability
        setIsSubmitting(true);
        const isAvailable = await checkAvailability();
        
        if (!isAvailable) {
            setError('Vehicle is not available for the selected dates. Please choose different dates.');
            setIsSubmitting(false);
            return;
        }

        const updatedBooking = {
            id: booking.id,
            customerId: booking.customerId,
            vehicleId: booking.vehicleId,
            agentId: booking.agentId,
            pickupDate: pickupDate,
            dropOffDate: dropOffDate,
            pickupLocation: pickupLocation,
            dropOffLocation: dropOffLocation || pickupLocation,
            driverStatus: driverStatus,
            bookingStatus: booking.bookingStatus,
            paymentStatus: booking.paymentStatus,
            totalPrice: totalPrice,
            gpsIncluded: gpsIncluded,
            childSeatIncluded: childSeatIncluded
        };

        try {
            const response = await axios.put(
                `${BASE_URL}/api/v1/booking/update/${booking.id}`,
                updatedBooking,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('customerToken')}`
                    }
                }
            );

            if (response.status === 200) {
                alert('Booking updated successfully!');
                onSuccess();
                onClose();
            }
        } catch (err) {
            console.error('Error updating booking:', err);
            if (err.response?.data?.errorMessage) {
                setError(err.response.data.errorMessage);
            } else {
                setError('Failed to update booking. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const priceDifference = totalPrice - booking.totalPrice;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Edit Booking</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-blue-700 flex items-start">
                            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>
                                <span className="font-bold">Note:</span> Changes may affect the total price. 
                                Availability will be checked before confirming changes.
                            </span>
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pickup Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Drop-off Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={dropOffDate}
                                    onChange={(e) => setDropOffDate(e.target.value)}
                                    min={pickupDate || new Date().toISOString().split('T')[0]}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pickup Location <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={pickupLocation}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                >
                                    <option value="">Select location</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Drop-off Location
                                </label>
                                <select
                                    value={dropOffLocation}
                                    onChange={(e) => setDropOffLocation(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                >
                                    <option value="">Same as pickup</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Driver Option</label>
                            <div className="flex gap-4">
                                {driverOptions.map(option => (
                                    <div key={option} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`edit-${option}`}
                                            name="driverStatus"
                                            value={option}
                                            checked={driverStatus === option}
                                            onChange={(e) => setDriverStatus(e.target.value)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                        />
                                        <label
                                            htmlFor={`edit-${option}`}
                                            className="ml-2 text-sm text-gray-700"
                                        >
                                            {option === 'WITH_DRIVER' ? 'With Driver (+Rs. 1,500/day)' : 'Without Driver'}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="edit-gps"
                                        checked={gpsIncluded}
                                        onChange={(e) => setGpsIncluded(e.target.checked)}
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="edit-gps" className="ml-2 text-sm text-gray-700">
                                        GPS Navigation (Rs. 500/day)
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="edit-childSeat"
                                        checked={childSeatIncluded}
                                        onChange={(e) => setChildSeatIncluded(e.target.checked)}
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="edit-childSeat" className="ml-2 text-sm text-gray-700">
                                        Child Seat (Rs. 300/day)
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Price Comparison */}
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Original Price:</span>
                                <span className="font-semibold">{formatCurrency(booking.totalPrice)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">New Price:</span>
                                <span className="text-xl font-bold text-teal-600">{formatCurrency(totalPrice)}</span>
                            </div>
                            {priceDifference !== 0 && (
                                <div className={`flex justify-between items-center pt-2 border-t border-gray-200 ${
                                    priceDifference > 0 ? 'text-red-600' : 'text-green-600'
                                }`}>
                                    <span className="font-medium">
                                        {priceDifference > 0 ? 'Additional Amount:' : 'You Save:'}
                                    </span>
                                    <span className="font-bold">
                                        {priceDifference > 0 ? '+' : '-'}{formatCurrency(Math.abs(priceDifference))}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting || isCheckingAvailability}
                                className={`flex-1 py-3 rounded-lg font-semibold transition duration-200 ${
                                    isSubmitting || isCheckingAvailability
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-teal-600 to-teal-800 text-white hover:from-teal-700 hover:to-teal-900'
                                }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Updating...
                                    </span>
                                ) : isCheckingAvailability ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Checking Availability...
                                    </span>
                                ) : (
                                    'Confirm Changes'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBookingModal;