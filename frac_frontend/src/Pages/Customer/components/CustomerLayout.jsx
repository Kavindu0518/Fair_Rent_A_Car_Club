// // src/Pages/Customer/components/CustomerLayout.jsx
// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import CustomerProfileDropdown from './CustomerProfileDropdown';

// const CustomerLayout = ({ children, showSearch = true, showFilters = true }) => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const isAuthenticated = localStorage.getItem('customerToken');

//     const handleLogoClick = () => {
//         navigate('/customer/dashboard');
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
//             {/* Header - Common across all customer pages */}
//             <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white sticky top-0 z-40 shadow-lg">
//                 <div className="max-w-7xl mx-auto px-4 py-4">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         {/* Logo and Brand */}
//                         <div 
//                             className="flex items-center mb-4 md:mb-0 cursor-pointer hover:opacity-90 transition"
//                             onClick={handleLogoClick}
//                         >
//                             <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
//                             <div>
//                                 <h1 className="text-2xl md:text-3xl font-bold">FAIR RENT A CAR</h1>
//                                 <p className="text-teal-300 text-sm">Your Journey Begins Here</p>
//                             </div>
//                         </div>

//                         {/* Navigation and Profile */}
//                         <div className="flex items-center gap-3 flex-wrap justify-center">
//                             {isAuthenticated ? (
//                                 <>
//                                     <nav className="flex gap-2 mr-2">
//                                         <button
//                                             onClick={() => navigate('/customer/dashboard')}
//                                             className={`px-4 py-2 rounded-lg transition duration-200 text-sm font-medium ${
//                                                 location.pathname === '/customer/dashboard'
//                                                     ? 'bg-white text-teal-700'
//                                                     : 'text-white hover:bg-white/10'
//                                             }`}
//                                         >
//                                             Dashboard
//                                         </button>
//                                         <button
//                                             onClick={() => navigate('/customer/mybookings')}
//                                             className={`px-4 py-2 rounded-lg transition duration-200 text-sm font-medium ${
//                                                 location.pathname === '/customer/mybookings'
//                                                     ? 'bg-white text-teal-700'
//                                                     : 'text-white hover:bg-white/10'
//                                             }`}
//                                         >
//                                             My Bookings
//                                         </button>
//                                     </nav>
//                                     <CustomerProfileDropdown />
//                                 </>
//                             ) : (
//                                 <div className="flex gap-3">
//                                     <button
//                                         onClick={() => navigate('/customer/login')}
//                                         className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 text-sm font-medium"
//                                     >
//                                         Login
//                                     </button>
//                                     <button
//                                         onClick={() => navigate('/customer/register')}
//                                         className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200 text-sm font-medium"
//                                     >
//                                         Register
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Area */}
//             <div className="max-w-7xl mx-auto px-4 py-6">
//                 {/* Page Title - can be overridden by children */}
//                 <div className="mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         {location.pathname === '/customer/dashboard' && 'Browse Vehicles'}
//                         {location.pathname === '/customer/mybookings' && 'My Bookings'}
//                         {location.pathname === '/customer/payment' && 'Payment'}
//                         {location.pathname === '/customer/paymentview' && 'Complete Payment'}
//                     </h2>
//                     <p className="text-gray-600 text-sm mt-1">
//                         {location.pathname === '/customer/dashboard' && 'Find the perfect vehicle for your journey'}
//                         {location.pathname === '/customer/mybookings' && 'View and manage all your bookings'}
//                         {location.pathname === '/customer/payment' && 'Complete your payment securely'}
//                     </p>
//                 </div>

//                 {/* Children Content */}
//                 {children}
//             </div>

//             {/* Footer - Common across all pages */}
//             <footer className="bg-white border-t border-gray-200 mt-12">
//                 <div className="max-w-7xl mx-auto px-4 py-8">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="font-bold text-lg text-gray-800 mb-4">FAIR RENT A CAR</h3>
//                             <p className="text-gray-600 text-sm">Your trusted partner for vehicle rentals in Sri Lanka.</p>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg text-gray-800 mb-4">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="/about" className="text-gray-600 hover:text-teal-600 transition text-sm">About Us</a></li>
//                                 <li><a href="/contact" className="text-gray-600 hover:text-teal-600 transition text-sm">Contact</a></li>
//                                 <li><a href="/terms" className="text-gray-600 hover:text-teal-600 transition text-sm">Terms & Conditions</a></li>
//                                 <li><a href="/privacy" className="text-gray-600 hover:text-teal-600 transition text-sm">Privacy Policy</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg text-gray-800 mb-4">Support</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="/faq" className="text-gray-600 hover:text-teal-600 transition text-sm">FAQ</a></li>
//                                 <li><a href="/help" className="text-gray-600 hover:text-teal-600 transition text-sm">Help Center</a></li>
//                                 <li><a href="/support" className="text-gray-600 hover:text-teal-600 transition text-sm">Customer Support</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-lg text-gray-800 mb-4">Contact</h3>
//                             <ul className="space-y-2 text-gray-600 text-sm">
//                                 <li className="flex items-center gap-2">
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                     support@fairrentacar.lk
//                                 </li>
//                                 <li className="flex items-center gap-2">
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                     +94 11 234 5678
//                                 </li>
//                                 <li className="flex items-center gap-2">
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                     Colombo, Sri Lanka
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-200 mt-8 pt-6 text-center">
//                         <p className="text-gray-500 text-sm">
//                             © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
//                         </p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default CustomerLayout;



// src/Pages/Customer/components/CustomerLayout.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomerProfileDropdown from './CustomerProfileDropdown';

const CustomerLayout = ({ children }) => { // Removed unused showSearch and showFilters
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('customerToken');

    const handleLogoClick = () => {
        navigate('/customer/dashboard');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            {/* Header - Common across all customer pages */}
            <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white sticky top-0 z-40 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Logo and Brand */}
                        <div 
                            className="flex items-center mb-4 md:mb-0 cursor-pointer hover:opacity-90 transition"
                            onClick={handleLogoClick}
                        >
                            <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold">FAIR RENT A CAR</h1>
                                <p className="text-teal-300 text-sm">Your Journey Begins Here</p>
                            </div>
                        </div>

                        {/* Navigation and Profile */}
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            {isAuthenticated ? (
                                <>
                                    <nav className="flex gap-2 mr-2">
                                        <button
                                            onClick={() => navigate('/customer/dashboard')}
                                            className={`px-4 py-2 rounded-lg transition duration-200 text-sm font-medium ${
                                                location.pathname === '/customer/dashboard'
                                                    ? 'bg-white text-teal-700'
                                                    : 'text-white hover:bg-white/10'
                                            }`}
                                        >
                                            Dashboard
                                        </button>
                                        <button
                                            onClick={() => navigate('/customer/mybookings')}
                                            className={`px-4 py-2 rounded-lg transition duration-200 text-sm font-medium ${
                                                location.pathname === '/customer/mybookings'
                                                    ? 'bg-white text-teal-700'
                                                    : 'text-white hover:bg-white/10'
                                            }`}
                                        >
                                            My Bookings
                                        </button>
                                    </nav>
                                    <CustomerProfileDropdown />
                                </>
                            ) : (
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => navigate('/customer/login')}
                                        className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200 text-sm font-medium"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => navigate('/customer/register')}
                                        className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-700 transition duration-200 text-sm font-medium"
                                    >
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Page Title - can be overridden by children */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {location.pathname === '/customer/dashboard' && 'Browse Vehicles'}
                        {location.pathname === '/customer/mybookings' && 'My Bookings'}
                        {location.pathname === '/customer/payment' && 'Payment'}
                        {location.pathname === '/customer/paymentview' && 'Complete Payment'}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                        {location.pathname === '/customer/dashboard' && 'Find the perfect vehicle for your journey'}
                        {location.pathname === '/customer/mybookings' && 'View and manage all your bookings'}
                        {location.pathname === '/customer/payment' && 'Complete your payment securely'}
                    </p>
                </div>

                {/* Children Content */}
                {children}
            </div>

            {/* Footer - Common across all pages */}
            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">FAIR RENT A CAR</h3>
                            <p className="text-gray-600 text-sm">Your trusted partner for vehicle rentals in Sri Lanka.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-600 hover:text-teal-600 transition text-sm">About Us</a></li>
                                <li><a href="/contact" className="text-gray-600 hover:text-teal-600 transition text-sm">Contact</a></li>
                                <li><a href="/terms" className="text-gray-600 hover:text-teal-600 transition text-sm">Terms & Conditions</a></li>
                                <li><a href="/privacy" className="text-gray-600 hover:text-teal-600 transition text-sm">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="/faq" className="text-gray-600 hover:text-teal-600 transition text-sm">FAQ</a></li>
                                <li><a href="/help" className="text-gray-600 hover:text-teal-600 transition text-sm">Help Center</a></li>
                                <li><a href="/support" className="text-gray-600 hover:text-teal-600 transition text-sm">Customer Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    support@fairrentacar.lk
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +94 11 234 5678
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Colombo, Sri Lanka
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 mt-8 pt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CustomerLayout;