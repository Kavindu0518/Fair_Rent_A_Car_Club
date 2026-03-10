// src/Pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
                    {/* Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-8 py-12 text-white">
                        <h2 className="text-3xl font-bold mb-2">Terms & Conditions</h2>
                        <p className="text-teal-100">Last updated: March 2026</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Introduction */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to FAIR RENT A CAR. By accessing our website and using our services, 
                                you agree to be bound by these Terms and Conditions. Please read them carefully 
                                before making a booking.
                            </p>
                        </section>

                        {/* Booking Terms */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">2. Booking Terms</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>• Minimum age for rental is 21 years with a valid driver's license.</p>
                                <p>• A valid credit card and security deposit are required at the time of pickup.</p>
                                <p>• Bookings are subject to vehicle availability.</p>
                                <p>• Rates include basic insurance coverage unless otherwise specified.</p>
                                <p>• Additional drivers must be registered and meet the same requirements.</p>
                            </div>
                        </section>

                        {/* Payment Terms */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">3. Payment Terms</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>• Full payment is required at the time of booking for online reservations.</p>
                                <p>• We accept all major credit cards, bank transfers, and cash payments at pickup.</p>
                                <p>• All prices are in Sri Lankan Rupees (LKR) and include all applicable taxes.</p>
                                <p>• A security deposit will be held on your credit card during the rental period.</p>
                            </div>
                        </section>

                        {/* Cancellation Policy */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">4. Cancellation Policy</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>• Free cancellation up to 48 hours before pickup.</p>
                                <p>• Cancellations within 48 hours will incur a 50% charge.</p>
                                <p>• No-shows will be charged the full amount.</p>
                                <p>• Early returns are subject to our refund policy.</p>
                            </div>
                        </section>

                        {/* Vehicle Use */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">5. Vehicle Use</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>• Vehicles must not be used for illegal purposes or racing.</p>
                                <p>• Smoking is strictly prohibited in all vehicles.</p>
                                <p>• Vehicles must be returned with the same fuel level as pickup.</p>
                                <p>• Off-road driving is not permitted unless in designated 4x4 vehicles.</p>
                                <p>• Any traffic violations are the responsibility of the renter.</p>
                            </div>
                        </section>

                        {/* Insurance */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">6. Insurance</h3>
                            <div className="space-y-3 text-gray-600">
                                <p>• All rentals include basic third-party insurance.</p>
                                <p>• Collision Damage Waiver (CDW) is available at an additional cost.</p>
                                <p>• The renter is responsible for the first LKR 50,000 of any damage.</p>
                                <p>• Personal accident insurance is not included.</p>
                            </div>
                        </section>

                        {/* Liability */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">7. Limitation of Liability</h3>
                            <p className="text-gray-600 leading-relaxed">
                                FAIR RENT A CAR shall not be liable for any indirect, incidental, or consequential 
                                damages arising from the use of our vehicles or services. Our total liability is 
                                limited to the amount paid for the rental.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">8. Changes to Terms</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these terms at any time. Changes will be effective 
                                immediately upon posting on our website. Continued use of our services constitutes 
                                acceptance of the modified terms.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="bg-teal-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Questions?</h3>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about these Terms & Conditions, please contact us:
                            </p>
                            <div className="space-y-2">
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    legal@fairrentacar.lk
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +94 11 234 5678
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;