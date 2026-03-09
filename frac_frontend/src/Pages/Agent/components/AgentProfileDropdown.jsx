// src/Pages/Agent/components/AgentProfileDropdown.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditAgentProfileModal from './EditAgentProfileModal';

const AgentProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [agentData, setAgentData] = useState(null);
    const navigate = useNavigate();
    
    const BASE_URL = 'http://localhost:8080';

    const fetchAgentDetails = async () => {
        try {
            const token = localStorage.getItem('agentToken');
            const agentId = localStorage.getItem('agentId');
            
            if (!token || !agentId) {
                console.error('No token or agent ID found');
                return;
            }

            const response = await axios.get(`${BASE_URL}/api/v1/agent/${agentId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 200) {
                setAgentData(response.data);
                // Update localStorage with latest data
                localStorage.setItem('agentCompanyName', response.data.companyName || '');
                localStorage.setItem('agentEmail', response.data.email || '');
                localStorage.setItem('agentData', JSON.stringify(response.data));
            }
        } catch (err) {
            console.error('Error fetching agent details:', err);
        }
    };

    useEffect(() => {
        fetchAgentDetails();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('agentToken');
        localStorage.removeItem('agentId');
        localStorage.removeItem('agentCompanyName');
        localStorage.removeItem('agentEmail');
        localStorage.removeItem('agentData');
        navigate('/agent/login');
    };

    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
        setIsOpen(false);
    };

    const handleProfileUpdate = (updatedData) => {
        setAgentData(updatedData);
        localStorage.setItem('agentCompanyName', updatedData.companyName || '');
        localStorage.setItem('agentEmail', updatedData.email || '');
        localStorage.setItem('agentData', JSON.stringify(updatedData));
        fetchAgentDetails();
    };

    const getInitials = () => {
        if (agentData?.companyName) {
            return agentData.companyName.charAt(0).toUpperCase();
        }
        return 'A';
    };

    const getServiceAreasCount = () => {
        if (!agentData?.serviceAreas) return 0;
        return agentData.serviceAreas.split(', ').length;
    };

    const companyName = agentData?.companyName || localStorage.getItem('agentCompanyName') || 'Agent';
    const initials = getInitials();

    return (
        <>
            <div className="relative">
                {/* Profile Button with Company Name and Initials */}
                <button
                    onClick={handleProfileClick}
                    className="flex items-center gap-3 px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm">
                        <span>{initials}</span>
                    </div>
                    <span className="font-medium max-w-[150px] truncate">{companyName}</span>
                    <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                        
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                            {/* Profile Header */}
                            <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-5 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                        <span>{initials}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg truncate">{agentData?.companyName}</h3>
                                        <p className="text-sm text-teal-100 truncate">{agentData?.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="p-5 border-b border-gray-100 max-h-80 overflow-y-auto">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Company Information</h4>
                                <div className="space-y-3">
                                    {/* Username */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Username</p>
                                            <p className="font-medium text-gray-800 break-all">{agentData?.userName || 'Not set'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Contact Number */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Contact Number</p>
                                            <p className="font-medium text-gray-800">{agentData?.contactNo || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Business Registration */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Business Reg No</p>
                                            <p className="font-medium text-gray-800">{agentData?.businessRegNo || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Operating Since */}
                                    {agentData?.operatingSince && (
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">Operating Since</p>
                                                <p className="font-medium text-gray-800">{agentData.operatingSince}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Service Areas */}
                                    {agentData?.serviceAreas && (
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">Service Areas</p>
                                                <p className="font-medium text-gray-800">{getServiceAreasCount()} districts</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-4 bg-gray-50">
                                <button
                                    onClick={handleEditClick}
                                    className="w-full mb-2 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Profile
                                </button>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                    }}
                                    className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Edit Profile Modal */}
            {showEditModal && agentData && (
                <EditAgentProfileModal
                    agent={agentData}
                    onClose={() => setShowEditModal(false)}
                    onUpdate={handleProfileUpdate}
                    BASE_URL="http://localhost:8080"
                />
            )}
        </>
    );
};

export default AgentProfileDropdown;