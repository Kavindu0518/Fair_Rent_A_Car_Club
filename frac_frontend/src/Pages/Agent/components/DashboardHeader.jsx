// src/Pages/Agent/components/DashboardHeader.jsx
import React from 'react';

const DashboardHeader = ({ agentData, pendingBookings, onLogout }) => {
    return (
        <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">Agent Dashboard</h1>
                            <p className="text-teal-300">Welcome back, {agentData?.companyName}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Notifications
                            <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {pendingBookings}
                            </span>
                        </button>
                        <button 
                            onClick={onLogout}
                            className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;