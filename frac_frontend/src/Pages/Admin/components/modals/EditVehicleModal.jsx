// src/Pages/Admin/components/modals/EditVehicleModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditVehicleModal = ({ vehicle, onClose, onSave, BASE_URL }) => {
    const [formData, setFormData] = useState({
        regNumber: '',
        makeModel: '',
        yearOfManufacture: '',
        color: '',
        seatingCapacity: '',
        fuelType: '',
        transmissionType: '',
        dailyRentalPrice: '',
        agentId: ''
    });
    const [vehicleImage, setVehicleImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [agents, setAgents] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoadingAgents, setIsLoadingAgents] = useState(true);

    // Helper function to get image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        
        const cleanPath = imagePath.toString().trim().replace(/['"]/g, '');
        
        if (cleanPath.includes('\\') || cleanPath.includes('C:')) {
            const filename = cleanPath.split('\\').pop().split('/').pop();
            return `${BASE_URL}/uploads/vehicles/${filename}`;
        }
        
        if (cleanPath.startsWith('/uploads')) {
            return `${BASE_URL}${cleanPath}`;
        }
        
        return `${BASE_URL}/uploads/vehicles/${cleanPath}`;
    };

    // Fetch agents for dropdown
    useEffect(() => {
        fetchAgents();
    }, []);

    // Load vehicle data
    useEffect(() => {
        if (vehicle) {
            setFormData({
                regNumber: vehicle.regNumber || '',
                makeModel: vehicle.makeModel || '',
                yearOfManufacture: vehicle.yearOfManufacture || '',
                color: vehicle.color || '',
                seatingCapacity: vehicle.seatingCapacity || '',
                fuelType: vehicle.fuelType || '',
                transmissionType: vehicle.transmissionType || '',
                dailyRentalPrice: vehicle.dailyRentalPrice || '',
                agentId: vehicle.agentId || ''
            });
            
            if (vehicle.vehicleImage) {
                const url = getImageUrl(vehicle.vehicleImage);
                setCurrentImageUrl(url);
            }
        }
    }, [vehicle]);

    const fetchAgents = async () => {
        setIsLoadingAgents(true);
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/agent/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAgents(response.data || []);
        } catch (err) {
            console.error('Error fetching agents:', err);
        } finally {
            setIsLoadingAgents(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.regNumber.trim()) newErrors.regNumber = 'Registration number is required';
        if (!formData.makeModel.trim()) newErrors.makeModel = 'Make/Model is required';
        if (!formData.yearOfManufacture) newErrors.yearOfManufacture = 'Year of manufacture is required';
        if (!formData.color.trim()) newErrors.color = 'Color is required';
        if (!formData.seatingCapacity) newErrors.seatingCapacity = 'Seating capacity is required';
        if (!formData.fuelType) newErrors.fuelType = 'Fuel type is required';
        if (!formData.transmissionType) newErrors.transmissionType = 'Transmission type is required';
        if (!formData.dailyRentalPrice) newErrors.dailyRentalPrice = 'Daily rental price is required';
        if (!formData.agentId) newErrors.agentId = 'Please select an agent';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setErrors(prev => ({ ...prev, vehicleImage: 'Please select an image file' }));
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, vehicleImage: 'Image size must be less than 5MB' }));
                return;
            }
            setVehicleImage(file);
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, vehicleImage: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const submitData = new FormData();
            submitData.append('regNumber', formData.regNumber);
            submitData.append('makeModel', formData.makeModel);
            submitData.append('yearOfManufacture', formData.yearOfManufacture);
            submitData.append('color', formData.color);
            submitData.append('seatingCapacity', formData.seatingCapacity);
            submitData.append('fuelType', formData.fuelType);
            submitData.append('transmissionType', formData.transmissionType);
            submitData.append('dailyRentalPrice', formData.dailyRentalPrice);
            submitData.append('agentId', formData.agentId);
            
            if (vehicleImage) {
                submitData.append('vehicleImage', vehicleImage);
            }

            console.log('Submitting vehicle update:');
            for (let [key, value] of submitData.entries()) {
                console.log(key, value instanceof File ? `File: ${value.name}` : value);
            }

            await onSave(submitData);
        } catch (error) {
            console.error('Error in form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Edit Vehicle</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Current Image Preview */}
                    <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                        <div className="relative">
                            <div className="w-20 h-20 bg-teal-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-teal-200">
                                {imagePreview ? (
                                    <img 
                                        src={imagePreview} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : currentImageUrl ? (
                                    <img 
                                        src={currentImageUrl} 
                                        alt={vehicle.makeModel} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span class="text-teal-600 font-bold text-2xl">${vehicle.makeModel?.charAt(0)}</span>`;
                                        }}
                                    />
                                ) : (
                                    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                )}
                            </div>
                            {currentImageUrl && !imagePreview && (
                                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-teal-800">Current Vehicle Image</p>
                            <p className="text-xs text-teal-600">Upload new image below to change</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Registration Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="regNumber"
                                    value={formData.regNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.regNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.regNumber && <p className="mt-1 text-xs text-red-600">{errors.regNumber}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Make/Model <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="makeModel"
                                    value={formData.makeModel}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.makeModel ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.makeModel && <p className="mt-1 text-xs text-red-600">{errors.makeModel}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Year of Manufacture <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="yearOfManufacture"
                                    value={formData.yearOfManufacture}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.yearOfManufacture ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Year</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                {errors.yearOfManufacture && <p className="mt-1 text-xs text-red-600">{errors.yearOfManufacture}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Color <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.color ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.color && <p className="mt-1 text-xs text-red-600">{errors.color}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Seating Capacity <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="seatingCapacity"
                                    value={formData.seatingCapacity}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.seatingCapacity ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Capacity</option>
                                    {[2, 4, 5, 6, 7, 8, 9, 10, 12, 15].map(num => (
                                        <option key={num} value={num}>{num} Seats</option>
                                    ))}
                                </select>
                                {errors.seatingCapacity && <p className="mt-1 text-xs text-red-600">{errors.seatingCapacity}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Fuel Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="fuelType"
                                    value={formData.fuelType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.fuelType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Fuel Type</option>
                                    {fuelTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.fuelType && <p className="mt-1 text-xs text-red-600">{errors.fuelType}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Transmission <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="transmissionType"
                                    value={formData.transmissionType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.transmissionType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Transmission</option>
                                    {transmissionTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.transmissionType && <p className="mt-1 text-xs text-red-600">{errors.transmissionType}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Daily Rental Price (Rs.) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="dailyRentalPrice"
                                    value={formData.dailyRentalPrice}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.dailyRentalPrice ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                    min="0"
                                    step="100"
                                />
                                {errors.dailyRentalPrice && <p className="mt-1 text-xs text-red-600">{errors.dailyRentalPrice}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Agent <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="agentId"
                                value={formData.agentId}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                    errors.agentId ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                disabled={isLoadingAgents}
                            >
                                <option value="">
                                    {isLoadingAgents ? 'Loading agents...' : 'Select an agent'}
                                </option>
                                {agents.map(agent => (
                                    <option key={agent.id} value={agent.id}>
                                        {agent.companyName} (ID: #AG000{agent.id})
                                    </option>
                                ))}
                            </select>
                            {errors.agentId && <p className="mt-1 text-xs text-red-600">{errors.agentId}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Image (Leave blank to keep current)</label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.vehicleImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="editVehicleImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="editVehicleImage" className="cursor-pointer block">
                                    {imagePreview ? (
                                        <div className="flex flex-col items-center">
                                            <img 
                                                src={imagePreview} 
                                                alt="Preview" 
                                                className="w-20 h-20 rounded-lg object-cover mb-2 border-2 border-teal-500"
                                            />
                                            <p className="text-sm text-teal-600">{vehicleImage.name}</p>
                                            <p className="text-xs text-gray-500 mt-1">Click to change</p>
                                        </div>
                                    ) : (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">Click to change vehicle image</p>
                                        </>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Updating...
                                    </>
                                ) : (
                                    'Update Vehicle'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditVehicleModal;