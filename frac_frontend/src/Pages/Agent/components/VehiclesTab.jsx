// src/Pages/Agent/components/VehiclesTab.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VehiclesTab = ({ 
    vehicles,
    isVehiclesLoading,
    handleDeleteVehicle,
    getStatusColor,
    formatCurrency,
    getFuelTypeDisplay,
    getTransmissionDisplay,
    getFullImageUrl
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
                <Link 
                    to="/vehicle/register" 
                    className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add New Vehicle
                </Link>
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
                    <Link 
                        to="/vehicle/register" 
                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                    >
                        Add Your First Vehicle
                    </Link>
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
                                    {/* <Link 
                                        to={`/vehicle/edit/${vehicle.id}`}
                                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
                                    >
                                        Edit
                                    </Link> */}
                                    <Link 
                                        to={`/vehicle/edit/${vehicle.id}`}
                                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 text-center"
                                    >
                                        Edit
                                    </Link>
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
    );
};

export default VehiclesTab;