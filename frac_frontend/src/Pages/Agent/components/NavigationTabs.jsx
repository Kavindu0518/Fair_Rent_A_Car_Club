// // src/Pages/Agent/components/NavigationTabs.jsx
// import React from 'react';

// const NavigationTabs = ({ activeTab, setActiveTab, pendingBookings }) => {
//     return (
//         <div className="bg-white rounded-2xl shadow-lg mb-8">
//             <div className="border-b border-gray-200">
//                 <nav className="flex -mb-px">
//                     <button
//                         onClick={() => setActiveTab('overview')}
//                         className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                             activeTab === 'overview'
//                                 ? 'border-b-2 border-teal-600 text-teal-600'
//                                 : 'text-gray-500 hover:text-gray-700'
//                         }`}
//                     >
//                         Overview
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('bookings')}
//                         className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                             activeTab === 'bookings'
//                                 ? 'border-b-2 border-teal-600 text-teal-600'
//                                 : 'text-gray-500 hover:text-gray-700'
//                         }`}
//                     >
//                         Bookings
//                         {pendingBookings > 0 && (
//                             <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
//                                 {pendingBookings}
//                             </span>
//                         )}
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('vehicles')}
//                         className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                             activeTab === 'vehicles'
//                                 ? 'border-b-2 border-teal-600 text-teal-600'
//                                 : 'text-gray-500 hover:text-gray-700'
//                         }`}
//                     >
//                         My Vehicles
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('earnings')}
//                         className={`py-4 px-6 font-medium text-sm transition duration-200 ${
//                             activeTab === 'earnings'
//                                 ? 'border-b-2 border-teal-600 text-teal-600'
//                                 : 'text-gray-500 hover:text-gray-700'
//                         }`}
//                     >
//                         Earnings
//                     </button>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default NavigationTabs;



// src/Pages/Agent/components/NavigationTabs.jsx
import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab, pendingBookings, pendingTransfers = 0 }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg mb-8">
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`py-4 px-6 font-medium text-sm transition duration-200 whitespace-nowrap ${
                            activeTab === 'overview'
                                ? 'border-b-2 border-teal-600 text-teal-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`py-4 px-6 font-medium text-sm transition duration-200 whitespace-nowrap ${
                            activeTab === 'bookings'
                                ? 'border-b-2 border-teal-600 text-teal-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Bookings
                        {pendingBookings > 0 && (
                            <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
                                {pendingBookings}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('vehicles')}
                        className={`py-4 px-6 font-medium text-sm transition duration-200 whitespace-nowrap ${
                            activeTab === 'vehicles'
                                ? 'border-b-2 border-teal-600 text-teal-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        My Vehicles
                    </button>
                    <button
                        onClick={() => setActiveTab('banktransfers')}
                        className={`py-4 px-6 font-medium text-sm transition duration-200 whitespace-nowrap relative ${
                            activeTab === 'banktransfers'
                                ? 'border-b-2 border-teal-600 text-teal-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <span className="flex items-center">
                            Bank Transfers
                            {pendingTransfers > 0 && (
                                <span className="ml-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center animate-pulse">
                                    {pendingTransfers}
                                </span>
                            )}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('earnings')}
                        className={`py-4 px-6 font-medium text-sm transition duration-200 whitespace-nowrap ${
                            activeTab === 'earnings'
                                ? 'border-b-2 border-teal-600 text-teal-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Earnings
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default NavigationTabs;