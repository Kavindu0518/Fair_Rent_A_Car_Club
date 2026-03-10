// src/Pages/Privacy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
                        <h2 className="text-3xl font-bold mb-2">Privacy Policy</h2>
                        <p className="text-teal-100">Last updated: March 2026</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Introduction */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h3>
                            <p className="text-gray-600 leading-relaxed">
                                At FAIR RENT A CAR, we take your privacy seriously. This Privacy Policy explains 
                                how we collect, use, disclose, and safeguard your information when you use our 
                                services and website. Please read this privacy policy carefully. If you do not agree 
                                with the terms of this privacy policy, please do not access the site or use our services.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">2. Information We Collect</h3>
                            <div className="space-y-4 text-gray-600">
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2">Personal Information:</p>
                                    <ul className="list-disc list-inside pl-4 space-y-2">
                                        <li>Name and contact information (email address, phone number)</li>
                                        <li>Driver's license details and identification documents</li>
                                        <li>Payment information (credit card details, billing address)</li>
                                        <li>Booking history and rental preferences</li>
                                        <li>Date of birth and nationality</li>
                                        <li>NIC/Passport number for verification purposes</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2">Technical Information:</p>
                                    <ul className="list-disc list-inside pl-4 space-y-2">
                                        <li>IP address and browser type</li>
                                        <li>Device information and operating system</li>
                                        <li>Cookies and usage data</li>
                                        <li>Location data (with your consent)</li>
                                        <li>Pages visited and time spent on our website</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                                <li>To process and manage your vehicle bookings</li>
                                <li>To communicate with you about your reservations and updates</li>
                                <li>To verify your identity and eligibility to rent vehicles</li>
                                <li>To process payments and prevent fraudulent transactions</li>
                                <li>To improve our services and enhance customer experience</li>
                                <li>To comply with legal obligations and regulatory requirements</li>
                                <li>To send marketing communications (with your consent)</li>
                                <li>To analyze website usage and optimize our platform</li>
                            </ul>
                        </section>

                        {/* Information Sharing */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">4. Information Sharing</h3>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                We do not sell, trade, or rent your personal information to third parties. 
                                We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                                <li>
                                    <span className="font-medium">Insurance Providers:</span> For coverage purposes during your rental period
                                </li>
                                <li>
                                    <span className="font-medium">Law Enforcement:</span> When required by law or to protect our legal rights
                                </li>
                                <li>
                                    <span className="font-medium">Payment Processors:</span> To securely process your transactions
                                </li>
                                <li>
                                    <span className="font-medium">Service Partners:</span> Who assist in our operations (under strict confidentiality agreements)
                                </li>
                                <li>
                                    <span className="font-medium">Vehicle Owners/Agents:</span> To facilitate your booking and rental experience
                                </li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">5. Data Security</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We implement industry-standard security measures to protect your personal information, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3 pl-4">
                                <li>SSL encryption for all data transmission</li>
                                <li>Secure payment processing with PCI compliance</li>
                                <li>Regular security audits and monitoring</li>
                                <li>Access controls and authentication protocols</li>
                                <li>Data encryption for stored sensitive information</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                                While we strive to use commercially acceptable means to protect your information, we cannot 
                                guarantee its absolute security.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">6. Cookies</h3>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                We use cookies and similar tracking technologies to enhance your browsing experience. 
                                Cookies help us:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                                <li>Remember your preferences and login information</li>
                                <li>Analyze site traffic and user behavior</li>
                                <li>Personalize content and advertisements</li>
                                <li>Improve website functionality and performance</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                You can control cookie settings through your browser preferences. Disabling cookies 
                                may affect certain features of our website.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">7. Your Rights</h3>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                                <li><span className="font-medium">Access:</span> Request a copy of your personal data</li>
                                <li><span className="font-medium">Correction:</span> Update or correct inaccurate information</li>
                                <li><span className="font-medium">Deletion:</span> Request deletion of your information</li>
                                <li><span className="font-medium">Opt-out:</span> Unsubscribe from marketing communications</li>
                                <li><span className="font-medium">Withdraw Consent:</span> Revoke consent at any time</li>
                                <li><span className="font-medium">Data Portability:</span> Receive your data in a structured format</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">8. Data Retention</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes 
                                outlined in this privacy policy, unless a longer retention period is required or permitted 
                                by law. This includes maintaining records for:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3 pl-4">
                                <li>Legal and regulatory compliance</li>
                                <li>Accounting and tax purposes</li>
                                <li>Dispute resolution and fraud prevention</li>
                                <li>Legitimate business interests</li>
                            </ul>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">9. Children's Privacy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly 
                                collect personal information from minors. If you are a parent or guardian and you are 
                                aware that your child has provided us with personal information, please contact us. 
                                If we become aware that we have collected personal information from a minor without 
                                verification of parental consent, we will take steps to remove that information from our servers.
                            </p>
                        </section>

                        {/* Third-Party Links */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">10. Third-Party Links</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our website may contain links to third-party websites. We have no control over and assume 
                                no responsibility for the content, privacy policies, or practices of any third-party sites 
                                or services. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </section>

                        {/* Changes to This Policy */}
                        <section>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">11. Changes to This Policy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                                posting the new policy on this page with an updated effective date. You are advised to review 
                                this privacy policy periodically for any changes. Changes to this privacy policy are effective 
                                when they are posted on this page.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-teal-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h3>
                            <p className="text-gray-600 mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                                please contact our Data Protection Officer:
                            </p>
                            <div className="space-y-3">
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span><span className="font-medium">Email:</span> privacy@fairrentacar.lk</span>
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span><span className="font-medium">Phone:</span> +94 11 234 5678</span>
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <span><span className="font-medium">Address:</span> No. 123, Galle Road, Colombo 03, Sri Lanka</span>
                                </p>
                            </div>
                        </section>

                        {/* Consent */}
                        <section className="border-t border-gray-200 pt-6">
                            <p className="text-sm text-gray-500">
                                By using our website and services, you consent to our Privacy Policy and agree to its terms.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;