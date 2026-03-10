// import React from 'react';
// import { formatCurrency, formatDate } from './PaymentUtils';

// const PaymentSummary = ({ booking, BASE_URL }) => {
//     const calculateDuration = () => {
//         return Math.ceil((new Date(booking.dropOffDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24));
//     };

//     return (
//         <div className="bg-white rounded-2xl shadow-xl sticky top-8">
//             <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                
//                 {/* Vehicle Info */}
//                 <div className="flex items-center mb-4">
//                     <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
//                         {booking.vehicle?.vehicleImage ? (
//                             <img 
//                                 src={`${BASE_URL}/uploads/vehicles/${booking.vehicle.vehicleImage}`}
//                                 alt={booking.vehicle?.makeModel}
//                                 className="w-full h-full object-cover"
//                             />
//                         ) : (
//                             <div className="w-full h-full bg-teal-100 flex items-center justify-center">
//                                 <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                                 </svg>
//                             </div>
//                         )}
//                     </div>
//                     <div>
//                         <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
//                         <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
//                     </div>
//                 </div>

//                 {/* Booking Details */}
//                 <div className="space-y-3 mb-4">
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Booking ID:</span>
//                         <span className="font-medium">#{booking.id}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Pickup Date:</span>
//                         <span className="font-medium">{formatDate(booking.pickupDate)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Drop-off Date:</span>
//                         <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Duration:</span>
//                         <span className="font-medium">{calculateDuration()} days</span>
//                     </div>
//                 </div>

//                 {/* Price Breakdown */}
//                 <div className="border-t border-gray-200 pt-4 space-y-2">
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Base Price</span>
//                         <span>{formatCurrency(booking.totalPrice)}</span>
//                     </div>
//                     {booking.gpsIncluded && (
//                         <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">GPS Navigation</span>
//                             <span>+ Rs. 500/day</span>
//                         </div>
//                     )}
//                     {booking.childSeatIncluded && (
//                         <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">Child Seat</span>
//                             <span>+ Rs. 300/day</span>
//                         </div>
//                     )}
//                     {booking.driverStatus === 'WITH_DRIVER' && (
//                         <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">Driver Service</span>
//                             <span>+ Rs. 1,500/day</span>
//                         </div>
//                     )}
//                 </div>

//                 {/* Total */}
//                 <div className="border-t border-gray-200 pt-4 mt-4">
//                     <div className="flex justify-between items-center">
//                         <span className="text-lg font-bold text-gray-800">Total</span>
//                         <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
//                     </div>
//                 </div>

//                 {/* Security Badge */}
//                 <div className="mt-6 pt-4 border-t border-gray-200">
//                     <div className="flex items-center text-xs text-gray-500">
//                         <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                         </svg>
//                         <span>Secure Payment • SSL Encrypted</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentSummary;



import React, { useState } from 'react';
import { formatCurrency, formatDate } from './PaymentUtils';

const PaymentSummary = ({ booking, BASE_URL }) => {
    const [imageError, setImageError] = useState(false);

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

    const calculateDuration = () => {
        return Math.ceil((new Date(booking.dropOffDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24));
    };

    const imageUrl = getFullImageUrl(booking.vehicle?.vehicleImage);
    
    // For debugging - remove after fixing
    console.log('Vehicle Image Path:', booking.vehicle?.vehicleImage);
    console.log('Constructed Image URL:', imageUrl);

    return (
        <div className="bg-white rounded-2xl shadow-xl sticky top-8">
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
                
                {/* Vehicle Info */}
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
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
                                onLoad={() => console.log('Image loaded successfully:', imageUrl)}
                            />
                        ) : (
                            <div className="w-full h-full bg-teal-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">{booking.vehicle?.makeModel || 'Vehicle'}</h4>
                        <p className="text-xs text-gray-500">Reg: {booking.vehicle?.regNumber || 'N/A'}</p>
                    </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Booking ID:</span>
                        <span className="font-medium">#{booking.id}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Pickup Date:</span>
                        <span className="font-medium">{formatDate(booking.pickupDate)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Drop-off Date:</span>
                        <span className="font-medium">{formatDate(booking.dropOffDate)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{calculateDuration()} days</span>
                    </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Base Price</span>
                        <span>{formatCurrency(booking.totalPrice)}</span>
                    </div>
                    {booking.gpsIncluded && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">GPS Navigation</span>
                            <span>+ Rs. 500/day</span>
                        </div>
                    )}
                    {booking.childSeatIncluded && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Child Seat</span>
                            <span>+ Rs. 300/day</span>
                        </div>
                    )}
                    {booking.driverStatus === 'WITH_DRIVER' && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Driver Service</span>
                            <span>+ Rs. 1,500/day</span>
                        </div>
                    )}
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">Total</span>
                        <span className="text-2xl font-bold text-teal-600">{formatCurrency(booking.totalPrice)}</span>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Secure Payment • SSL Encrypted</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSummary;