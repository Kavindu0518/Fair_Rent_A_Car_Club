import React from 'react';

const BookingsHeader = ({ customerName }) => {
    return (
        <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">FAIR RENT A CAR</h1>
                            <p className="text-teal-300">Your Journey Begins Here</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm hidden md:block">Welcome, {customerName}</span>
                        <a href="/customer/dashboard" className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-200">
                            Browse Vehicles
                        </a>
                        <a href="/customer/payment" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition duration-200">
                            Payments
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingsHeader;