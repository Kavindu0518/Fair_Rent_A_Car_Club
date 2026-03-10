// src/Pages/Admin/components/modals/DeleteConfirmationModal.jsx
import React from 'react';

const DeleteConfirmationModal = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    item, 
    itemType,
    isDeleting 
}) => {
    if (!isOpen || !item) return null;

    const getItemDisplayName = () => {
        switch(itemType) {
            case 'agents':
                return item.companyName || `Agent #${item.id}`;
            case 'customers':
                return `${item.firstName || ''} ${item.lastName || ''}`.trim() || `Customer #${item.id}`;
            case 'admins':
                return item.fullName || `Admin #${item.id}`;
            case 'vehicles':
                return item.makeModel || `Vehicle #${item.id}`;
            case 'bookings':
                return `Booking #BK${String(item.id).padStart(4, '0')}`;
            default:
                return `Item #${item.id}`;
        }
    };

    const getItemDetails = () => {
        switch(itemType) {
            case 'agents':
                return (
                    <>
                        <p><span className="text-gray-500">Email:</span> {item.email || 'N/A'}</p>
                        <p><span className="text-gray-500">Contact:</span> {item.contactNo || 'N/A'}</p>
                    </>
                );
            case 'customers':
                return (
                    <>
                        <p><span className="text-gray-500">Email:</span> {item.email || 'N/A'}</p>
                        <p><span className="text-gray-500">Contact:</span> {item.contactNumber || 'N/A'}</p>
                        <p><span className="text-gray-500">NIC:</span> {item.nicNumber || 'N/A'}</p>
                    </>
                );
            case 'admins':
                return (
                    <>
                        <p><span className="text-gray-500">Email:</span> {item.email || 'N/A'}</p>
                        <p><span className="text-gray-500">Username:</span> {item.userName || 'N/A'}</p>
                        <p><span className="text-gray-500">Role:</span> {item.role || 'N/A'}</p>
                    </>
                );
            case 'vehicles':
                return (
                    <>
                        <p><span className="text-gray-500">Registration:</span> {item.regNumber || 'N/A'}</p>
                        <p><span className="text-gray-500">Model:</span> {item.makeModel || 'N/A'}</p>
                        <p><span className="text-gray-500">Agent ID:</span> #{item.agentId || 'N/A'}</p>
                    </>
                );
            case 'bookings':
                return (
                    <>
                        <p><span className="text-gray-500">Customer ID:</span> #{item.customerId || 'N/A'}</p>
                        <p><span className="text-gray-500">Vehicle ID:</span> #{item.vehicleId || 'N/A'}</p>
                        <p><span className="text-gray-500">Agent ID:</span> #{item.agentId || 'N/A'}</p>
                        <p><span className="text-gray-500">Total:</span> Rs. {item.totalPrice?.toLocaleString() || 'N/A'}</p>
                    </>
                );
            default:
                return null;
        }
    };

    const getTitle = () => {
        switch(itemType) {
            case 'agents': return 'Delete Agent';
            case 'customers': return 'Delete Customer';
            case 'admins': return 'Delete Admin';
            case 'vehicles': return 'Delete Vehicle';
            case 'bookings': return 'Delete Booking';
            default: return 'Delete Item';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full transform transition-all animate-fadeIn">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {getTitle()}
                        </h3>
                        <button 
                            onClick={onClose} 
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            disabled={isDeleting}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Warning Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>

                    {/* Warning Message */}
                    <div className="text-center mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Are you sure you want to delete this {itemType.slice(0, -1)}?
                        </h4>
                        <p className="text-sm text-gray-600">
                            This action cannot be undone. The {itemType.slice(0, -1)} will be permanently removed from the system.
                        </p>
                    </div>

                    {/* Item Details */}
                    <div className="bg-red-50 p-4 rounded-lg mb-6 border border-red-200">
                        <p className="text-sm font-semibold text-red-800 mb-2">{itemType.slice(0, -1).toUpperCase()} Details:</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-red-600">ID:</span>
                                <span className="font-medium text-red-800">
                                    {itemType === 'bookings' ? `#BK${String(item.id).padStart(4, '0')}` : 
                                     itemType === 'vehicles' ? `#VEH${String(item.id).padStart(4, '0')}` :
                                     itemType === 'agents' ? `#AG${String(item.id).padStart(4, '0')}` :
                                     itemType === 'customers' ? `#CUS${String(item.id).padStart(4, '0')}` :
                                     `#AD${String(item.id).padStart(4, '0')}`}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-red-600">Name:</span>
                                <span className="font-medium text-red-800">{getItemDisplayName()}</span>
                            </div>
                            {getItemDetails()}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onConfirm}
                            disabled={isDeleting}
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                                isDeleting
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5'
                            }`}
                        >
                            {isDeleting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Deleting...
                                </>
                            ) : (
                                'Yes, Delete'
                            )}
                        </button>
                        <button
                            onClick={onClose}
                            disabled={isDeleting}
                            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200 disabled:opacity-50"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </div>
    );
};

export default DeleteConfirmationModal;