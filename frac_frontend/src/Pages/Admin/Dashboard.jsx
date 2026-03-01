// // src/Pages/Admin/Dashboard.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAdminData from './hooks/useAdminData';
// import AdminHeader from './components/AdminHeader';
// import SidebarNavigation from './components/SidebarNavigation';
// import OverviewDashboard from './components/OverviewDashboard';
// import UserManagementView from './components/UserManagementView';
// import VehicleManagementView from './components/VehicleManagementView';
// import BookingManagementView from './components/BookingManagementView';
// import PaymentManagementView from './components/PaymentManagementView';

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const [activeMainTab, setActiveMainTab] = useState('overview');
//     const [activeSubTab, setActiveSubTab] = useState('agents');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [showDetailsModal, setShowDetailsModal] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showAddModal, setShowAddModal] = useState(false);

//     const {
//         adminData,
//         isLoading,
//         error,
//         stats,
//         agents,
//         customers,
//         admins,
//         vehicles,
//         allBookings,
//         payments,
//         bankTransfers,
//         recentActivities,
//         fetchAllData,
//         handleLogout: logout,
//         formatCurrency,
//         formatDate,
//         getStatusColor
//     } = useAdminData(navigate);

//     const handleLogout = () => {
//         logout();
//         navigate('/admin/login');
//     };
    

//     const handleNavigateToSection = (mainTab, subTab = null) => {
//         setActiveMainTab(mainTab);
//         if (subTab) {
//             setActiveSubTab(subTab);
//         }
//         setSearchTerm('');
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading Admin Dashboard...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//                     <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
//                     <p className="text-gray-600 mb-6">{error}</p>
//                     <button
//                         onClick={fetchAllData}
//                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
//                     >
//                         Try Again
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             <AdminHeader adminData={adminData} onLogout={handleLogout} />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Left Sidebar */}
//                     <SidebarNavigation
//                         activeMainTab={activeMainTab}
//                         setActiveMainTab={setActiveMainTab}
//                         stats={stats}
//                         formatCurrency={formatCurrency}
//                         adminData={adminData}
//                     />

//                     {/* Right Content Area */}
//                     <div className="flex-1">
//                         {activeMainTab === 'overview' && (
//                             <OverviewDashboard
//                                 stats={stats}
//                                 recentActivities={recentActivities}
//                                 allBookings={allBookings}
//                                 pendingTransfers={bankTransfers.filter(t => t.status === 'Pending')}
//                                 formatCurrency={formatCurrency}
//                                 formatDate={formatDate}
//                                 getStatusColor={getStatusColor}
//                                 onNavigate={handleNavigateToSection}
//                             />
//                         )}

//                         {activeMainTab === 'user' && (
//                             <UserManagementView
//                                 agents={agents}
//                                 customers={customers}
//                                 admins={admins}
//                                 activeSubTab={activeSubTab}
//                                 setActiveSubTab={setActiveSubTab}
//                                 searchTerm={searchTerm}
//                                 setSearchTerm={setSearchTerm}
//                                 onViewDetails={setSelectedItem}
//                                 onEdit={setSelectedItem}
//                                 onDelete={(id) => console.log('Delete:', id)}
//                                 getStatusColor={getStatusColor}
//                                 formatDate={formatDate}
//                                 formatCurrency={formatCurrency}
//                                 allBookings={allBookings}
//                                 stats={stats}
//                                 BASE_URL="http://localhost:8080"
//                                 onRefresh={fetchAllData}
//                             />
//                         )}

//                         {activeMainTab === 'vehicle' && (
//                             <VehicleManagementView
//                                 vehicles={vehicles}
//                                 searchTerm={searchTerm}
//                                 setSearchTerm={setSearchTerm}
//                                 activeSubTab={activeSubTab}
//                                 setActiveSubTab={setActiveSubTab}
//                                 onViewDetails={setSelectedItem}
//                                 getStatusColor={getStatusColor}
//                                 formatCurrency={formatCurrency}
//                                 stats={stats}
//                             />
//                         )}

//                         {activeMainTab === 'booking' && (
//                             <BookingManagementView
//                                 bookings={allBookings}
//                                 searchTerm={searchTerm}
//                                 setSearchTerm={setSearchTerm}
//                                 activeSubTab={activeSubTab}
//                                 setActiveSubTab={setActiveSubTab}
//                                 onViewDetails={setSelectedItem}
//                                 getStatusColor={getStatusColor}
//                                 formatCurrency={formatCurrency}
//                                 formatDate={formatDate}
//                                 stats={stats}
//                             />
//                         )}

//                         {activeMainTab === 'payment' && (
//                             <PaymentManagementView
//                                 payments={payments}
//                                 bankTransfers={bankTransfers}
//                                 searchTerm={searchTerm}
//                                 setSearchTerm={setSearchTerm}
//                                 activeSubTab={activeSubTab}
//                                 setActiveSubTab={setActiveSubTab}
//                                 onViewDetails={setSelectedItem}
//                                 getStatusColor={getStatusColor}
//                                 formatCurrency={formatCurrency}
//                                 formatDate={formatDate}
//                                 stats={stats}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;


// src/Pages/Admin/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAdminData from './hooks/useAdminData';
import AdminHeader from './components/AdminHeader';
import SidebarNavigation from './components/SidebarNavigation';
import OverviewDashboard from './components/OverviewDashboard';
import UserManagementView from './components/UserManagementView';
import VehicleManagementView from './components/VehicleManagementView';
import BookingManagementView from './components/BookingManagementView';
import PaymentManagementView from './components/PaymentManagementView';

const BASE_URL = 'http://localhost:8080';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeMainTab, setActiveMainTab] = useState('overview');
    const [activeSubTab, setActiveSubTab] = useState('agents');
    const [searchTerm, setSearchTerm] = useState('');
    
    // Remove unused state variables
    // const [selectedItem, setSelectedItem] = useState(null);
    // const [showDetailsModal, setShowDetailsModal] = useState(false);
    // const [showEditModal, setShowEditModal] = useState(false);
    // const [showAddModal, setShowAddModal] = useState(false);

    const {
        adminData,
        isLoading,
        error,
        stats,
        agents,
        customers,
        admins,
        vehicles,
        allBookings,
        payments,
        bankTransfers,
        recentActivities,
        fetchAllData,
        handleLogout: logout,
        formatCurrency,
        formatDate,
        getStatusColor
    } = useAdminData(navigate);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const handleNavigateToSection = (mainTab, subTab = null) => {
        setActiveMainTab(mainTab);
        if (subTab) {
            setActiveSubTab(subTab);
        }
        setSearchTerm('');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading Admin Dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={fetchAllData}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            <AdminHeader adminData={adminData} onLogout={handleLogout} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar */}
                    <SidebarNavigation
                        activeMainTab={activeMainTab}
                        setActiveMainTab={setActiveMainTab}
                        stats={stats}
                        formatCurrency={formatCurrency}
                        adminData={adminData}
                    />

                    {/* Right Content Area */}
                    <div className="flex-1">
                        {activeMainTab === 'overview' && (
                            <OverviewDashboard
                                stats={stats}
                                recentActivities={recentActivities}
                                allBookings={allBookings}
                                formatCurrency={formatCurrency}
                                formatDate={formatDate}
                                getStatusColor={getStatusColor}
                                onNavigate={handleNavigateToSection}
                            />
                        )}

                        {activeMainTab === 'user' && (
                            <UserManagementView
                                agents={agents}
                                customers={customers}
                                admins={admins}
                                activeSubTab={activeSubTab}
                                setActiveSubTab={setActiveSubTab}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                onRefresh={fetchAllData}
                                getStatusColor={getStatusColor}
                                formatDate={formatDate}
                                formatCurrency={formatCurrency}
                                allBookings={allBookings}
                                stats={stats}
                                BASE_URL="http://localhost:8080"
                            />
                        )}

                        {/* {activeMainTab === 'vehicle' && (
                            <VehicleManagementView
                                vehicles={vehicles}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                activeSubTab={activeSubTab}
                                setActiveSubTab={setActiveSubTab}
                                onViewDetails={() => {}} // Add appropriate handlers if needed
                                getStatusColor={getStatusColor}
                                formatCurrency={formatCurrency}
                                stats={stats}
                            />
                        )} */}

{activeMainTab === 'vehicle' && (
    <VehicleManagementView
        vehicles={vehicles || []}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onRefresh={fetchAllData}
        getStatusColor={getStatusColor}
        formatCurrency={formatCurrency}
        stats={stats}
        BASE_URL={BASE_URL}
    />
)}

                        {/* {activeMainTab === 'booking' && (
                            <BookingManagementView
                                bookings={allBookings}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                activeSubTab={activeSubTab}
                                setActiveSubTab={setActiveSubTab}
                                onViewDetails={() => {}} // Add appropriate handlers if needed
                                getStatusColor={getStatusColor}
                                formatCurrency={formatCurrency}
                                formatDate={formatDate}
                                stats={stats}
                            />
                        )} */}

{activeMainTab === 'booking' && (
    <BookingManagementView
        bookings={allBookings || []}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onRefresh={fetchAllData}
        getStatusColor={getStatusColor}
        formatCurrency={formatCurrency}
        formatDate={formatDate}
        stats={stats}
        BASE_URL={BASE_URL}
    />
)}
                        {activeMainTab === 'payment' && (
                            <PaymentManagementView
                                payments={payments}
                                bankTransfers={bankTransfers}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                activeSubTab={activeSubTab}
                                setActiveSubTab={setActiveSubTab}
                                onViewDetails={() => {}} // Add appropriate handlers if needed
                                getStatusColor={getStatusColor}
                                formatCurrency={formatCurrency}
                                formatDate={formatDate}
                                stats={stats}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;