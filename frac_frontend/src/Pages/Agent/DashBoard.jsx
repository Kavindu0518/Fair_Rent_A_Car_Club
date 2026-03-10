// // src/Pages/Agent/Dashboard.jsx
// import React from 'react';
// import useAgentDashboard from './hooks/useAgentDashboard';
// import DashboardHeader from './components/DashboardHeader';
// import QuickStats from './components/QuickStats';
// import NavigationTabs from './components/NavigationTabs';
// import OverviewTab from './components/OverviewTab';
// import BookingsTab from './components/BookingsTab';
// import VehiclesTab from './components/VehiclesTab';
// import EarningsTab from './components/EarningsTab';
// import QuickActions from './components/QuickActions';
// import BankTransferTab from './components/BankTransferTab';

// const AgentDashboard = () => {
//     const {
//         agentData,
//         isLoading,
//         error,
//         activeTab,
//         setActiveTab,
//         stats,
//         recentBookings,
//         vehicles,
//         earningsData,
//         isVehiclesLoading,
//         isBookingsLoading,
//         bookingStatusFilter,
//         setBookingStatusFilter,
//         bookingSearchTerm,
//         setBookingSearchTerm,
//         handleUpdateBookingStatus,
//         handleUpdatePaymentStatus,
//         handleDeleteVehicle,
//         openDeleteModal,
//         closeDeleteModal,
//         handleLogout,
//         getStatusColor,
//         getPaymentStatusColor,
//         formatCurrency,
//         formatDate,
//         getFuelTypeDisplay,
//         getTransmissionDisplay,
//         getFullImageUrl,
//         getRatingStars,
        
//         // Delete modal states
//         showDeleteModal,
//         vehicleToDelete,
//         isDeleting,
        
//         // Toast states
//         toast,
//         hideToast
//     } = useAgentDashboard();

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading your dashboard...</p>
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
//                         onClick={handleLogout}
//                         className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
//                     >
//                         Back to Login
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             <DashboardHeader 
//                 agentData={agentData} 
//                 pendingBookings={stats?.pendingBookings || 0}
//                 onLogout={handleLogout}
//             />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 <QuickStats 
//                     stats={stats} 
//                     vehicles={vehicles || []} 
//                     formatCurrency={formatCurrency} 
//                 />

//                 <NavigationTabs 
//                     activeTab={activeTab} 
//                     setActiveTab={setActiveTab} 
//                     pendingBookings={stats?.pendingBookings || 0} 
//                 />

//                 <div className="space-y-6">
//                     {activeTab === 'overview' && (
//                         <OverviewTab 
//                             agentData={agentData}
//                             recentBookings={recentBookings || []}
//                             vehicles={vehicles || []}
//                             stats={stats}
//                             isBookingsLoading={isBookingsLoading}
//                             setActiveTab={setActiveTab}
//                             getStatusColor={getStatusColor}
//                             getPaymentStatusColor={getPaymentStatusColor}
//                             formatCurrency={formatCurrency}
//                             formatDate={formatDate}
//                             getRatingStars={getRatingStars}
//                         />
//                     )}

//                     {activeTab === 'bookings' && (
//                         <BookingsTab 
//                             recentBookings={recentBookings || []}
//                             isBookingsLoading={isBookingsLoading}
//                             bookingStatusFilter={bookingStatusFilter}
//                             setBookingStatusFilter={setBookingStatusFilter}
//                             bookingSearchTerm={bookingSearchTerm}
//                             setBookingSearchTerm={setBookingSearchTerm}
//                             handleUpdateBookingStatus={handleUpdateBookingStatus}
//                             handleUpdatePaymentStatus={handleUpdatePaymentStatus}
//                             getStatusColor={getStatusColor}
//                             getPaymentStatusColor={getPaymentStatusColor}
//                             formatCurrency={formatCurrency}
//                             formatDate={formatDate}
//                             toast={toast}
//                             hideToast={hideToast}
//                         />
//                     )}

//                     {activeTab === 'vehicles' && (
//                         <VehiclesTab 
//                             vehicles={vehicles || []}
//                             isVehiclesLoading={isVehiclesLoading}
//                             handleDeleteVehicle={handleDeleteVehicle}
//                             openDeleteModal={openDeleteModal}
//                             closeDeleteModal={closeDeleteModal}
//                             showDeleteModal={showDeleteModal}
//                             vehicleToDelete={vehicleToDelete}
//                             isDeleting={isDeleting}
//                             getStatusColor={getStatusColor}
//                             formatCurrency={formatCurrency}
//                             getFuelTypeDisplay={getFuelTypeDisplay}
//                             getTransmissionDisplay={getTransmissionDisplay}
//                             getFullImageUrl={getFullImageUrl}
//                             toast={toast}
//                             hideToast={hideToast}
//                         />
//                     )}

//                     {activeTab === 'earnings' && (
//                         <EarningsTab 
//                             earningsData={earningsData || []}
//                             stats={stats}
//                             vehicles={vehicles || []}
//                             formatCurrency={formatCurrency}
//                             BASE_URL="http://localhost:8080"
//                         />
//                     )}

//                     {/* {activeTab === 'banktransfers' && (
//                         <BankTransferTab 
//                             formatCurrency={formatCurrency}
//                             BASE_URL="http://localhost:8080"
//                         />
//                     )} */}

//                     // src/Pages/Agent/Dashboard.jsx (relevant section in the return statement)
//                     {activeTab === 'banktransfers' && (
//                         <BankTransferTab 
//                             formatCurrency={formatCurrency}
//                             BASE_URL="http://localhost:8080"
//                             toast={toast}
//                             hideToast={hideToast}
//                             showToast={showToast}
//                         />
//                     )}
//                 </div>
//             </div>

//             <QuickActions />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
//                 <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
//                 <p className="mt-1">Agent Portal v1.0</p>
//             </div>
//         </div>
//     );
// };

// export default AgentDashboard;



// src/Pages/Agent/Dashboard.jsx
import React from 'react';
import useAgentDashboard from './hooks/useAgentDashboard';
import DashboardHeader from './components/DashboardHeader';
import QuickStats from './components/QuickStats';
import NavigationTabs from './components/NavigationTabs';
import OverviewTab from './components/OverviewTab';
import BookingsTab from './components/BookingsTab';
import VehiclesTab from './components/VehiclesTab';
import EarningsTab from './components/EarningsTab';
import QuickActions from './components/QuickActions';
import BankTransferTab from './components/BankTransferTab';

const AgentDashboard = () => {
    const {
        agentData,
        isLoading,
        error,
        activeTab,
        setActiveTab,
        stats,
        recentBookings,
        vehicles,
        earningsData,
        isVehiclesLoading,
        isBookingsLoading,
        bookingStatusFilter,
        setBookingStatusFilter,
        bookingSearchTerm,
        setBookingSearchTerm,
        handleUpdateBookingStatus,
        handleUpdatePaymentStatus,
        handleDeleteVehicle,
        openDeleteModal,
        closeDeleteModal,
        handleLogout,
        getStatusColor,
        getPaymentStatusColor,
        formatCurrency,
        formatDate,
        getFuelTypeDisplay,
        getTransmissionDisplay,
        getFullImageUrl,
        getRatingStars,
        
        // Delete modal states
        showDeleteModal,
        vehicleToDelete,
        isDeleting,
        
        // Toast states
        toast,
        hideToast,
        showToast  // Make sure to include showToast here
    } = useAgentDashboard();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading your dashboard...</p>
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
                        onClick={handleLogout}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            <DashboardHeader 
                agentData={agentData} 
                pendingBookings={stats?.pendingBookings || 0}
                onLogout={handleLogout}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <QuickStats 
                    stats={stats} 
                    vehicles={vehicles || []} 
                    formatCurrency={formatCurrency} 
                />

                <NavigationTabs 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    pendingBookings={stats?.pendingBookings || 0} 
                />

                <div className="space-y-6">
                    {activeTab === 'overview' && (
                        <OverviewTab 
                            agentData={agentData}
                            recentBookings={recentBookings || []}
                            vehicles={vehicles || []}
                            stats={stats}
                            isBookingsLoading={isBookingsLoading}
                            setActiveTab={setActiveTab}
                            getStatusColor={getStatusColor}
                            getPaymentStatusColor={getPaymentStatusColor}
                            formatCurrency={formatCurrency}
                            formatDate={formatDate}
                            getRatingStars={getRatingStars}
                        />
                    )}

                    {activeTab === 'bookings' && (
                        <BookingsTab 
                            recentBookings={recentBookings || []}
                            isBookingsLoading={isBookingsLoading}
                            bookingStatusFilter={bookingStatusFilter}
                            setBookingStatusFilter={setBookingStatusFilter}
                            bookingSearchTerm={bookingSearchTerm}
                            setBookingSearchTerm={setBookingSearchTerm}
                            handleUpdateBookingStatus={handleUpdateBookingStatus}
                            handleUpdatePaymentStatus={handleUpdatePaymentStatus}
                            getStatusColor={getStatusColor}
                            getPaymentStatusColor={getPaymentStatusColor}
                            formatCurrency={formatCurrency}
                            formatDate={formatDate}
                            toast={toast}
                            hideToast={hideToast}
                        />
                    )}

                    {activeTab === 'vehicles' && (
                        <VehiclesTab 
                            vehicles={vehicles || []}
                            isVehiclesLoading={isVehiclesLoading}
                            handleDeleteVehicle={handleDeleteVehicle}
                            openDeleteModal={openDeleteModal}
                            closeDeleteModal={closeDeleteModal}
                            showDeleteModal={showDeleteModal}
                            vehicleToDelete={vehicleToDelete}
                            isDeleting={isDeleting}
                            getStatusColor={getStatusColor}
                            formatCurrency={formatCurrency}
                            getFuelTypeDisplay={getFuelTypeDisplay}
                            getTransmissionDisplay={getTransmissionDisplay}
                            getFullImageUrl={getFullImageUrl}
                            toast={toast}
                            hideToast={hideToast}
                        />
                    )}

                    {activeTab === 'earnings' && (
                        <EarningsTab 
                            earningsData={earningsData || []}
                            stats={stats}
                            vehicles={vehicles || []}
                            formatCurrency={formatCurrency}
                            BASE_URL="http://localhost:8080"
                        />
                    )}

                    {activeTab === 'banktransfers' && (
                        <BankTransferTab 
                            formatCurrency={formatCurrency}
                            BASE_URL="http://localhost:8080"
                            toast={toast}
                            hideToast={hideToast}
                            showToast={showToast}  // Pass showToast to BankTransferTab
                        />
                    )}
                </div>
            </div>

            <QuickActions />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-12">
                <p>© {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.</p>
                <p className="mt-1">Agent Portal v1.0</p>
            </div>
        </div>
    );
};

export default AgentDashboard;