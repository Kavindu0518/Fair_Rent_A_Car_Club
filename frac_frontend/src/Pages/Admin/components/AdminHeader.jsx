// src/Pages/Admin/components/AdminHeader.jsx
import React from 'react';

const AdminHeader = ({ adminData, onLogout }) => {
    return (
        <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                        <div>
                            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                            <p className="text-teal-300">Welcome back, {adminData?.fullName || 'Admin'}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm text-teal-300">{adminData?.email}</p>
                            <p className="text-xs text-teal-400">{adminData?.role}</p>
                        </div>
                        <button
                            onClick={onLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;