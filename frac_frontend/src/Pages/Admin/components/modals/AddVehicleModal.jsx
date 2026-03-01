// src/Pages/Admin/components/modals/AddVehicleModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddVehicleModal = ({ onClose, onSave, BASE_URL }) => {
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
    const [agents, setAgents] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoadingAgents, setIsLoadingAgents] = useState(true);

    // Fetch agents for dropdown
    useEffect(() => {
        fetchAgents();
    }, []);

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
        if (!vehicleImage) newErrors.vehicleImage = 'Vehicle image is required';
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
            submitData.append('vehicleImage', vehicleImage);

            console.log('Submitting vehicle data:');
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
                        <h2 className="text-2xl font-bold text-gray-800">Add New Vehicle</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <img 
                                    src={imagePreview} 
                                    alt="Preview" 
                                    className="w-32 h-32 rounded-lg object-cover border-4 border-teal-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setVehicleImage(null);
                                        setImagePreview(null);
                                    }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

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
                                    placeholder="ABC-1234"
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
                                    placeholder="Toyota Vios"
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
                                    placeholder="Silver"
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
                                    placeholder="5000"
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Vehicle Image <span className="text-red-500">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                                errors.vehicleImage ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-teal-400'
                            }`}>
                                <input
                                    type="file"
                                    id="vehicleImage"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="vehicleImage" className="cursor-pointer block">
                                    {!imagePreview && (
                                        <>
                                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm text-gray-600">Click to upload vehicle image</p>
                                            <p className="text-xs text-gray-500 mt-2">PNG, JPG (Max 5MB)</p>
                                        </>
                                    )}
                                </label>
                            </div>
                            {errors.vehicleImage && <p className="mt-1 text-xs text-red-600">{errors.vehicleImage}</p>}
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
                                        Adding...
                                    </>
                                ) : (
                                    'Add Vehicle'
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

export default AddVehicleModal;