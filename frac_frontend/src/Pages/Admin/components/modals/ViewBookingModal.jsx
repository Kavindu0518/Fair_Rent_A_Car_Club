// src/Pages/Admin/components/modals/ViewBookingModal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ViewBookingModal = ({ booking, onClose, formatCurrency, formatDate, getStatusColor, BASE_URL }) => {
    const [customerDetails, setCustomerDetails] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [agentDetails, setAgentDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch additional details
    const fetchDetails = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            const headers = { 'Authorization': `Bearer ${token}` };

            // Fetch customer details
            if (booking?.customerId) {
                const customerRes = await axios.get(`${BASE_URL}/api/v1/customer/${booking.customerId}`, { headers });
                setCustomerDetails(customerRes.data);
            }

            // Fetch vehicle details
            if (booking?.vehicleId) {
                const vehicleRes = await axios.get(`${BASE_URL}/api/v1/vehicle/${booking.vehicleId}`, { headers });
                setVehicleDetails(vehicleRes.data);
            }

            // Fetch agent details
            if (booking?.agentId) {
                const agentRes = await axios.get(`${BASE_URL}/api/v1/agent/${booking.agentId}`, { headers });
                setAgentDetails(agentRes.data);
            }
        } catch (err) {
            console.error('Error fetching details:', err);
        } finally {
            setLoading(false);
        }
    }, [booking, BASE_URL]);

    useEffect(() => {
        if (booking) {
            fetchDetails();
        }
    }, [booking, fetchDetails]);

    const calculateDuration = () => {
        if (!booking?.pickupDate || !booking?.dropOffDate) return 0;
        const start = new Date(booking.pickupDate);
        const end = new Date(booking.dropOffDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const DetailField = ({ label, value }) => (
        <div className="border-b border-gray-200 pb-2 last:border-0">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
        </div>
    );

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent"></div>
                        <p className="mt-2 text-gray-600">Loading booking details...</p>
                    </div>
                </div>
            </div>
        );
    }

    const duration = calculateDuration();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Booking ID and Status */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="text-sm text-gray-500">Booking ID</p>
                            <p className="text-2xl font-bold text-gray-800">#BK{String(booking.id).padStart(4, '0')}</p>
                        </div>
                        <div className="flex gap-3">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor(booking.bookingStatus)}`}>
                                {booking.bookingStatus}
                            </span>
                            <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor(booking.paymentStatus)}`}>
                                {booking.paymentStatus}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Customer Information */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5">
                            <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Customer Information
                            </h3>
                            <div className="space-y-2">
                                <DetailField label="Name" value={customerDetails ? `${customerDetails.firstName} ${customerDetails.lastName}` : booking.customerName} />
                                <DetailField label="Email" value={customerDetails?.email} />
                                <DetailField label="Contact" value={customerDetails?.contactNumber} />
                                <DetailField label="NIC" value={customerDetails?.nicNumber} />
                            </div>
                        </div>

                        {/* Vehicle Information */}
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5">
                            <h3 className="font-semibold text-teal-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                Vehicle Information
                            </h3>
                            <div className="space-y-2">
                                <DetailField label="Model" value={vehicleDetails?.makeModel || booking.vehicleName} />
                                <DetailField label="Registration" value={vehicleDetails?.regNumber} />
                                <DetailField label="Color" value={vehicleDetails?.color} />
                                <DetailField label="Fuel Type" value={vehicleDetails?.fuelType} />
                                <DetailField label="Transmission" value={vehicleDetails?.transmissionType} />
                            </div>
                        </div>

                        {/* Agent Information */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5">
                            <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Agent Information
                            </h3>
                            <div className="space-y-2">
                                <DetailField label="Company" value={agentDetails?.companyName || booking.agentCompanyName} />
                                <DetailField label="Email" value={agentDetails?.email} />
                                <DetailField label="Contact" value={agentDetails?.contactNo} />
                                <DetailField label="Business Reg" value={agentDetails?.businessRegNo} />
                            </div>
                        </div>

                        {/* Booking Details */}
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-5">
                            <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Booking Details
                            </h3>
                            <div className="space-y-2">
                                <DetailField label="Pickup Date" value={formatDate(booking.pickupDate)} />
                                <DetailField label="Drop-off Date" value={formatDate(booking.dropOffDate)} />
                                <DetailField label="Duration" value={`${duration} days`} />
                                <DetailField label="Pickup Location" value={booking.pickupLocation} />
                                <DetailField label="Drop-off Location" value={booking.dropOffLocation} />
                                <DetailField label="Driver Status" value={booking.driverStatus} />
                            </div>
                        </div>
                    </div>

                    {/* Extras and Payment */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-5">
                            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Extras
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${booking.gpsIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-gray-700">GPS Navigation {booking.gpsIncluded ? '(Included)' : '(Not Included)'}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${booking.childSeatIncluded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span className="text-gray-700">Child Seat {booking.childSeatIncluded ? '(Included)' : '(Not Included)'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-50 rounded-xl p-5">
                            <h3 className="font-semibold text-teal-800 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Payment Summary
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Base Price ({duration} days)</span>
                                    <span className="font-medium">{formatCurrency(booking.totalPrice)}</span>
                                </div>
                                <div className="border-t border-teal-200 pt-2 mt-2">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-teal-800">Total Amount</span>
                                        <span className="text-xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBookingModal;