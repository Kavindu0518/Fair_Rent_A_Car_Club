// src/Pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="/upload/logo/frac_logo.png" alt="Logo" className="w-12 h-12 mr-4" />
                            <div>
                                <h1 className="text-3xl font-bold">FAIR RENT A CAR</h1>
                                <p className="text-teal-300">Your Journey Begins Here</p>
                            </div>
                        </div>
                        <Link 
                            to="/" 
                            className="px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-8 py-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">About FAIR RENT A CAR</h2>
                        <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                            Your trusted partner for premium car rental services in Sri Lanka
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Our Story */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in 2010, FAIR RENT A CAR has grown to become one of Sri Lanka's most trusted car rental services. 
                                We started with a simple mission: to provide reliable, affordable, and high-quality vehicle rental services 
                                to both locals and tourists visiting our beautiful island.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver exceptional car rental experiences through our extensive fleet of well-maintained vehicles, 
                                professional service, and customer-centric approach. We strive to make every journey memorable and hassle-free.
                            </p>
                        </div>

                        {/* Our Values */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-teal-50 p-6 rounded-xl text-center">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Reliability</h4>
                                    <p className="text-sm text-gray-600">We deliver on our promises, every time</p>
                                </div>
                                <div className="bg-teal-50 p-6 rounded-xl text-center">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                                    <p className="text-sm text-gray-600">Always here when you need us</p>
                                </div>
                                <div className="bg-teal-50 p-6 rounded-xl text-center">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Best Value</h4>
                                    <p className="text-sm text-gray-600">Premium service at competitive prices</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-teal-50 p-6 rounded-xl">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-teal-600">5000+</p>
                                <p className="text-sm text-gray-600">Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-teal-600">200+</p>
                                <p className="text-sm text-gray-600">Vehicles</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-teal-600">15+</p>
                                <p className="text-sm text-gray-600">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-teal-600">25</p>
                                <p className="text-sm text-gray-600">Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;