import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VehicleRegisterPage = () => {
    const navigate = useNavigate();
    const [agentId, setAgentId] = useState(null);
    const [agentName, setAgentName] = useState('');
    const [formData, setFormData] = useState({
        regNumber: '',
        makeModel: '',
        yearOfManufacture: '',
        color: '',
        seatingCapacity: '',
        fuelType: '',
        transmissionType: '',
        dailyRentalPrice: '' // ✅ New field
    });
    const [vehicleImage, setVehicleImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Fuel types
    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    
    // Transmission types
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    
    // Colors
    const colorOptions = [
        'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
        'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
    ];

    // Year range (last 30 years to current year)
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 31 }, (_, i) => currentYear - i);

    // Seating capacity options
    const seatingOptions = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

    const BASE_URL = 'http://localhost:8080';

    // Check authentication and get agent ID on component mount
    useEffect(() => {
        const storedAgentId = localStorage.getItem('agentId');
        const storedAgentToken = localStorage.getItem('agentToken');
        const storedAgentName = localStorage.getItem('agentCompanyName');
        
        if (!storedAgentId || !storedAgentToken) {
            // Redirect to login if not authenticated
            navigate('/agent/login');
            return;
        }

        setAgentId(storedAgentId);
        setAgentName(storedAgentName || 'Agent');
        setIsLoading(false);
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear validation error for this field
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.regNumber.trim()) errors.regNumber = 'Registration number is required';
        if (formData.regNumber && formData.regNumber.length < 3) errors.regNumber = 'Registration number is too short';
        if (!formData.makeModel.trim()) errors.makeModel = 'Make & Model is required';
        if (!formData.yearOfManufacture) errors.yearOfManufacture = 'Year of manufacture is required';
        if (!formData.color) errors.color = 'Color is required';
        if (!formData.seatingCapacity) errors.seatingCapacity = 'Seating capacity is required';
        if (!formData.fuelType) errors.fuelType = 'Fuel type is required';
        if (!formData.transmissionType) errors.transmissionType = 'Transmission type is required';
        if (!formData.dailyRentalPrice) errors.dailyRentalPrice = 'Daily rental price is required';
        if (!vehicleImage) errors.vehicleImage = 'Vehicle image is required';
        if (!agentId) errors.agent = 'Agent authentication required';

        // Validate registration number format
        const regNumberRegex = /^[A-Z0-9\s-]+$/i;
        if (formData.regNumber && !regNumberRegex.test(formData.regNumber)) {
            errors.regNumber = 'Invalid registration number format';
        }

        // Validate daily rental price
        if (formData.dailyRentalPrice) {
            const price = parseFloat(formData.dailyRentalPrice);
            if (isNaN(price) || price <= 0) {
                errors.dailyRentalPrice = 'Please enter a valid price greater than 0';
            }
        }

        return errors;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: 'Only JPEG, JPG, PNG, GIF, and WEBP images are allowed'
                }));
                return;
            }
            
            // Validate file size (10MB limit for vehicle images)
            if (file.size > 10 * 1024 * 1024) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: 'Image size must be less than 10MB'
                }));
                return;
            }
            
            setVehicleImage(file);
            // Clear image error
            if (validationErrors.vehicleImage) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: ''
                }));
            }
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setValidationErrors({});

        // Check if agent is authenticated
        if (!agentId) {
            setErrorMessage('Authentication required. Please log in again.');
            setTimeout(() => {
                navigate('/agent/login');
            }, 2000);
            return;
        }

        // Validate form
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const submitData = new FormData();
        
        // Append all form fields exactly as backend expects
        submitData.append('regNumber', formData.regNumber.toUpperCase());
        submitData.append('makeModel', formData.makeModel);
        submitData.append('yearOfManufacture', parseInt(formData.yearOfManufacture));
        submitData.append('color', formData.color);
        submitData.append('seatingCapacity', parseInt(formData.seatingCapacity));
        submitData.append('fuelType', formData.fuelType);
        submitData.append('transmissionType', formData.transmissionType);
        submitData.append('dailyRentalPrice', parseFloat(formData.dailyRentalPrice)); // ✅ New field
        submitData.append('vehicleImage', vehicleImage);
        submitData.append('agentId', agentId);

        try {
            // Log what we're sending
            console.log('Form Data:');
            console.log('Agent ID:', agentId);
            for (let [key, value] of submitData.entries()) {
                console.log(`${key}:`, value);
            }

            const response = await axios.post(`${BASE_URL}/api/v1/vehicle/add`, submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
                timeout: 30000,
            });

            console.log('Response:', response.data);

            if (response.status === 201) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    regNumber: '',
                    makeModel: '',
                    yearOfManufacture: '',
                    color: '',
                    seatingCapacity: '',
                    fuelType: '',
                    transmissionType: '',
                    dailyRentalPrice: '' // ✅ Reset new field
                });
                setVehicleImage(null);
                
                // Auto redirect after 3 seconds
                setTimeout(() => {
                    navigate('/agent/dashboard?tab=vehicles');
                }, 3000);
            }
        } catch (error) {
            console.error('Registration error details:', error);
            
            if (error.code === 'ECONNABORTED') {
                setErrorMessage('Request timeout. Please try again.');
            } else if (error.response) {
                // Server responded with error
                console.error('Error response status:', error.response.status);
                console.error('Error response data:', error.response.data);
                
                if (error.response.status === 400) {
                    const errorData = error.response.data;
                    if (errorData && errorData.errorMessage) {
                        setErrorMessage(errorData.errorMessage);
                    } else if (errorData && typeof errorData === 'string') {
                        if (errorData.includes("registration number")) {
                            setErrorMessage('Vehicle with this registration number already exists.');
                        } else if (errorData.includes("Agent not found")) {
                            setErrorMessage('Agent authentication failed. Please log in again.');
                            setTimeout(() => {
                                navigate('/agent/login');
                            }, 2000);
                        } else if (errorData.includes("Invalid fuel type")) {
                            setErrorMessage('Invalid fuel type selected.');
                        } else if (errorData.includes("Invalid transmission type")) {
                            setErrorMessage('Invalid transmission type selected.');
                        } else {
                            setErrorMessage(errorData);
                        }
                    } else {
                        setErrorMessage('Invalid data. Please check all fields are correctly filled.');
                    }
                } else if (error.response.status === 401) {
                    setErrorMessage('Session expired. Please log in again.');
                    setTimeout(() => {
                        navigate('/agent/login');
                    }, 2000);
                } else if (error.response.status === 403) {
                    setErrorMessage('You do not have permission to add vehicles.');
                } else if (error.response.status === 500) {
                    const errorData = error.response.data;
                    if (errorData && errorData.errorMessage) {
                        setErrorMessage(errorData.errorMessage);
                    } else {
                        setErrorMessage('Server error. Please try again later.');
                    }
                } else {
                    setErrorMessage(`Error ${error.response.status}: Vehicle registration failed`);
                }
            } else if (error.request) {
                // Request was made but no response
                console.error('No response received. Check if server is running.');
                setErrorMessage('Cannot connect to server. Please make sure the backend is running.');
            } else {
                // Something else happened
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoBack = () => {
        navigate('/agent/dashboard');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Section - Car Theme */}
                <div className="md:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern - Car Silhouettes */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-24 h-12 border-2 border-white rounded-lg"></div>
                        <div className="absolute bottom-20 right-10 w-20 h-10 border-2 border-white rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/3 w-16 h-8 border-2 border-white rounded-lg"></div>
                    </div>

                    <div className="relative z-10">
                        {/* Logo/Brand Section */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
                                <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
                            </div>
                            <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
                            <p className="text-teal-300 text-lg font-medium">Add Your Vehicle</p>
                        </div>

                        {/* Agent Info */}
                        <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                            <p className="text-sm text-teal-200">Registering as:</p>
                            <p className="text-xl font-semibold text-white">{agentName}</p>
                        </div>

                        {/* Tagline */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3">Expand Your Fleet</h2>
                            <p className="text-teal-200 leading-relaxed">
                                Add your vehicle to our rental platform and start earning. 
                                We provide the platform, you provide the wheels - let's drive success together.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Instant Visibility to Thousands of Customers</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Competitive Pricing & Commission</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Insurance & Maintenance Support</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 Customer & Technical Support</span>
                            </div>
                        </div>

                        {/* Dashboard Link */}
                        <div className="mt-8">
                            <button 
                                onClick={handleGoBack}
                                className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Vehicle Registration Form */}
                <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                    {/* Vehicle Registration Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Register Vehicle</h2>
                        <p className="text-gray-600">Add your vehicle to the rental fleet</p>
                        <p className="text-sm text-teal-600 mt-2">Agent: {agentName}</p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="text-green-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Vehicle registered successfully! Redirecting to dashboard...
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && !showSuccess && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                            <p className="text-red-700 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-3 max-w mx-auto w-full">
                        {/* Vehicle Image */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Vehicle Image *
                            </h3>

                            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-200 ${
                                validationErrors.vehicleImage 
                                    ? 'border-red-500 bg-red-50' 
                                    : vehicleImage 
                                        ? 'border-teal-500 bg-teal-50' 
                                        : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="vehicleImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                                />
                                <label htmlFor="vehicleImage" className="cursor-pointer">
                                    {vehicleImage ? (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-sm font-medium text-teal-700">
                                                {vehicleImage.name}
                                            </p>
                                            <p className="text-xs text-teal-600 mt-1">
                                                Click to change image
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">
                                                Click to upload vehicle image
                                            </p>
                                        </>
                                    )}
                                    <p className="text-xs text-gray-500 mt-2">
                                        Supported: JPEG, PNG, GIF, WEBP • Max 10MB
                                    </p>
                                </label>
                            </div>
                            {validationErrors.vehicleImage && (
                                <p className="mt-1 text-sm text-red-600">{validationErrors.vehicleImage}</p>
                            )}
                        </div>

                        {/* Vehicle Identification */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Vehicle Identification
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Registration Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="regNumber"
                                        value={formData.regNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.regNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="ABC-1234"
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                    {validationErrors.regNumber && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.regNumber}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Make & Model *
                                    </label>
                                    <input
                                        type="text"
                                        name="makeModel"
                                        value={formData.makeModel}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.makeModel ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="Toyota Corolla"
                                    />
                                    {validationErrors.makeModel && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.makeModel}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Year of Manufacture *
                                    </label>
                                    <select
                                        name="yearOfManufacture"
                                        value={formData.yearOfManufacture}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.yearOfManufacture ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Year</option>
                                        {yearOptions.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    {validationErrors.yearOfManufacture && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.yearOfManufacture}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Color *
                                    </label>
                                    <select
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.color ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Color</option>
                                        {colorOptions.map(color => (
                                            <option key={color} value={color}>{color}</option>
                                        ))}
                                    </select>
                                    {validationErrors.color && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.color}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Specifications */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Vehicle Specifications
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Seating Capacity *
                                    </label>
                                    <select
                                        name="seatingCapacity"
                                        value={formData.seatingCapacity}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.seatingCapacity ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Capacity</option>
                                        {seatingOptions.map(capacity => (
                                            <option key={capacity} value={capacity}>{capacity} {capacity === 1 ? 'seat' : 'seats'}</option>
                                        ))}
                                    </select>
                                    {validationErrors.seatingCapacity && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.seatingCapacity}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Fuel Type *
                                    </label>
                                    <select
                                        name="fuelType"
                                        value={formData.fuelType}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 bg-white ${
                                            validationErrors.fuelType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select Fuel Type</option>
                                        {fuelTypes.map(type => (
                                            <option key={type} value={type}>
                                                {type === 'PETROL' ? 'Petrol' : 
                                                 type === 'DIESEL' ? 'Diesel' : 
                                                 type === 'ELECTRIC' ? 'Electric' : 
                                                 type === 'HYBRID' ? 'Hybrid' : type}
                                            </option>
                                        ))}
                                    </select>
                                    {validationErrors.fuelType && (
                                        <p className="mt-1 text-sm text-red-600">{validationErrors.fuelType}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Transmission Type *
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {transmissionTypes.map(type => (
                                        <div key={type} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={type}
                                                name="transmissionType"
                                                value={type}
                                                checked={formData.transmissionType === type}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                            />
                                            <label
                                                htmlFor={type}
                                                className={`ml-2 text-sm cursor-pointer select-none ${
                                                    formData.transmissionType === type ? 'text-teal-700 font-medium' : 'text-gray-700'
                                                }`}
                                            >
                                                {type === 'MANUAL' ? 'Manual' : 'Automatic'}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {validationErrors.transmissionType && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.transmissionType}</p>
                                )}
                            </div>
                        </div>

                        {/* Rental Price */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Rental Price
                            </h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Daily Rental Price (Rs.) *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">Rs.</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="dailyRentalPrice"
                                        value={formData.dailyRentalPrice}
                                        onChange={handleChange}
                                        min="0"
                                        step="0.01"
                                        className={`w-full pl-12 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                                            validationErrors.dailyRentalPrice ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                        }`}
                                        placeholder="2500.00"
                                    />
                                </div>
                                {validationErrors.dailyRentalPrice && (
                                    <p className="mt-1 text-sm text-red-600">{validationErrors.dailyRentalPrice}</p>
                                )}
                                <p className="mt-1 text-xs text-gray-500">
                                    Set the daily rental price for this vehicle
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-200 transform hover:-translate-y-0.5 ${
                                    isSubmitting
                                        ? 'bg-teal-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900'
                                } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Registering Vehicle...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add Vehicle to Fleet
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Dashboard Link */}
                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Want to see your vehicles? <a href="/agent/dashboard?tab=vehicles" className="text-teal-600 hover:text-teal-800 font-medium">View Vehicle List</a>
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                © {new Date().getFullYear()} FAIR RENT A CAR CLUB. All rights reserved.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VehicleRegisterPage;