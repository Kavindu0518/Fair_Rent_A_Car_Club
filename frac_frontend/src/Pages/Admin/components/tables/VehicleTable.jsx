// src/Pages/Admin/components/tables/VehicleTable.jsx
import React from 'react';

const VehicleTable = ({ data, searchTerm, onViewDetails, getStatusColor, formatCurrency }) => {
    const filteredData = data.filter(vehicle => 
        vehicle.makeModel?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.regNumber?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Model</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Reg Number</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Agent</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Price/Day</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(vehicle => (
                        <tr key={vehicle.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">#V{String(vehicle.id).padStart(4, '0')}</td>
                            <td className="py-3 px-4 text-sm font-medium">{vehicle.makeModel}</td>
                            <td className="py-3 px-4 text-sm">{vehicle.regNumber}</td>
                            <td className="py-3 px-4 text-sm">Agent #{vehicle.agentId}</td>
                            <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(vehicle.status || 'AVAILABLE')}`}>
                                    {vehicle.status || 'AVAILABLE'}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-teal-600">{formatCurrency(vehicle.dailyRentalPrice)}</td>
                            <td className="py-3 px-4">
                                <button
                                    onClick={() => onViewDetails(vehicle)}
                                    className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No vehicles found matching your search
                </div>
            )}
        </div>
    );
};

export default VehicleTable;