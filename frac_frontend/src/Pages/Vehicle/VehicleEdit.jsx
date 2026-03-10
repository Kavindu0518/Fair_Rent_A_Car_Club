// // src/Pages/Vehicle/VehicleEdit.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const VehicleEditPage = () => {
//     const { id } = useParams(); // Get vehicle ID from URL
//     const navigate = useNavigate();
//     const [agentId, setAgentId] = useState(null);
//     const [agentName, setAgentName] = useState('');
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [vehicleImage, setVehicleImage] = useState(null);
//     const [currentImageUrl, setCurrentImageUrl] = useState('');
//     const [removeCurrentImage, setRemoveCurrentImage] = useState(false);
    
//     const [formData, setFormData] = useState({
//         regNumber: '',
//         makeModel: '',
//         yearOfManufacture: '',
//         color: '',
//         seatingCapacity: '',
//         fuelType: '',
//         transmissionType: '',
//         dailyRentalPrice: '',
//         status: 'Available'
//     });

//     // Fuel types
//     const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    
//     // Transmission types
//     const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    
//     // Vehicle status options
//     const statusOptions = ['Available', 'Booked', 'Maintenance', 'Unavailable'];
    
//     // Colors
//     const colorOptions = [
//         'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
//         'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
//     ];

//     // Year range (last 30 years to current year)
//     const currentYear = new Date().getFullYear();
//     const yearOptions = Array.from({ length: 31 }, (_, i) => currentYear - i);

//     // Seating capacity options
//     const seatingOptions = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

//     const BASE_URL = 'http://localhost:8080';

//     // Check authentication and fetch vehicle data
//     useEffect(() => {
//         const storedAgentId = localStorage.getItem('agentId');
//         const storedAgentToken = localStorage.getItem('agentToken');
//         const storedAgentName = localStorage.getItem('agentCompanyName');
        
//         if (!storedAgentId || !storedAgentToken) {
//             navigate('/agent/login');
//             return;
//         }

//         setAgentId(storedAgentId);
//         setAgentName(storedAgentName || 'Agent');
        
//         // Fetch vehicle details
//         fetchVehicleDetails(id, storedAgentToken);
//     }, [id, navigate]);

//     const fetchVehicleDetails = async (vehicleId, token) => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 const vehicle = response.data;
                
//                 // Verify that this vehicle belongs to the agent
//                 if (vehicle.agentId !== parseInt(localStorage.getItem('agentId'))) {
//                     setErrorMessage('You do not have permission to edit this vehicle');
//                     setTimeout(() => {
//                         navigate('/agent/dashboard?tab=vehicles');
//                     }, 3000);
//                     return;
//                 }

//                 // Format the data for the form
//                 setFormData({
//                     regNumber: vehicle.regNumber || '',
//                     makeModel: vehicle.makeModel || '',
//                     yearOfManufacture: vehicle.yearOfManufacture || '',
//                     color: vehicle.color || '',
//                     seatingCapacity: vehicle.seatingCapacity || '',
//                     fuelType: vehicle.fuelType || '',
//                     transmissionType: vehicle.transmissionType || '',
//                     dailyRentalPrice: vehicle.dailyRentalPrice || '',
//                     status: vehicle.status || 'Available'
//                 });

//                 // Set current image URL if exists
//                 if (vehicle.vehicleImage) {
//                     setCurrentImageUrl(getFullImageUrl(vehicle.vehicleImage));
//                 }
//             }
//         } catch (error) {
//             console.error('Error fetching vehicle details:', error);
//             if (error.response?.status === 404) {
//                 setErrorMessage('Vehicle not found');
//             } else {
//                 setErrorMessage('Failed to load vehicle details');
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const getFullImageUrl = (imagePath) => {
//         if (!imagePath) return null;
//         if (imagePath.startsWith('http')) return imagePath;
//         if (imagePath.startsWith('uploads') || imagePath.includes('\\')) {
//             const filename = imagePath.split('\\').pop();
//             return `${BASE_URL}/uploads/vehicles/${filename}`;
//         }
//         return `${BASE_URL}${imagePath}`;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         // Clear validation error for this field
//         if (validationErrors[name]) {
//             setValidationErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const errors = {};
        
//         if (!formData.regNumber.trim()) errors.regNumber = 'Registration number is required';
//         if (formData.regNumber && formData.regNumber.length < 3) errors.regNumber = 'Registration number is too short';
//         if (!formData.makeModel.trim()) errors.makeModel = 'Make & Model is required';
//         if (!formData.yearOfManufacture) errors.yearOfManufacture = 'Year of manufacture is required';
//         if (!formData.color) errors.color = 'Color is required';
//         if (!formData.seatingCapacity) errors.seatingCapacity = 'Seating capacity is required';
//         if (!formData.fuelType) errors.fuelType = 'Fuel type is required';
//         if (!formData.transmissionType) errors.transmissionType = 'Transmission type is required';
//         if (!formData.dailyRentalPrice) errors.dailyRentalPrice = 'Daily rental price is required';
//         if (!formData.status) errors.status = 'Status is required';

//         // Validate registration number format
//         const regNumberRegex = /^[A-Z0-9\s-]+$/i;
//         if (formData.regNumber && !regNumberRegex.test(formData.regNumber)) {
//             errors.regNumber = 'Invalid registration number format';
//         }

//         // Validate daily rental price
//         if (formData.dailyRentalPrice) {
//             const price = parseFloat(formData.dailyRentalPrice);
//             if (isNaN(price) || price <= 0) {
//                 errors.dailyRentalPrice = 'Please enter a valid price greater than 0';
//             }
//         }

//         return errors;
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             // Validate file type
//             const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
//             if (!validTypes.includes(file.type)) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     vehicleImage: 'Only JPEG, JPG, PNG, GIF, and WEBP images are allowed'
//                 }));
//                 return;
//             }
            
//             // Validate file size (10MB limit for vehicle images)
//             if (file.size > 10 * 1024 * 1024) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     vehicleImage: 'Image size must be less than 10MB'
//                 }));
//                 return;
//             }
            
//             setVehicleImage(file);
//             setRemoveCurrentImage(true); // Mark to remove current image when new one is uploaded
//             // Clear image error
//             if (validationErrors.vehicleImage) {
//                 setValidationErrors(prev => ({
//                     ...prev,
//                     vehicleImage: ''
//                 }));
//             }
//         }
//     };

//     const handleRemoveCurrentImage = () => {
//         setRemoveCurrentImage(true);
//         setCurrentImageUrl('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrorMessage('');
//         setSuccessMessage('');
//         setValidationErrors({});

//         // Check if agent is authenticated
//         if (!agentId) {
//             setErrorMessage('Authentication required. Please log in again.');
//             setTimeout(() => {
//                 navigate('/agent/login');
//             }, 2000);
//             return;
//         }

//         // Validate form
//         const errors = validateForm();
//         if (Object.keys(errors).length > 0) {
//             setValidationErrors(errors);
//             return;
//         }

//         setIsSubmitting(true);

//         const submitData = new FormData();
        
//         // Append all form fields
//         submitData.append('regNumber', formData.regNumber.toUpperCase());
//         submitData.append('makeModel', formData.makeModel);
//         submitData.append('yearOfManufacture', parseInt(formData.yearOfManufacture));
//         submitData.append('color', formData.color);
//         submitData.append('seatingCapacity', parseInt(formData.seatingCapacity));
//         submitData.append('fuelType', formData.fuelType);
//         submitData.append('transmissionType', formData.transmissionType);
//         submitData.append('dailyRentalPrice', parseFloat(formData.dailyRentalPrice));
//         submitData.append('status', formData.status);
//         submitData.append('agentId', agentId);
        
//         // Add new image if uploaded
//         if (vehicleImage) {
//             submitData.append('vehicleImage', vehicleImage);
//         }
        
//         // Flag to indicate if we should remove the current image
//         submitData.append('removeCurrentImage', removeCurrentImage);

//         try {
//             const response = await axios.put(`${BASE_URL}/api/v1/vehicle/update/${id}`, submitData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 },
//                 timeout: 30000,
//             });

//             if (response.status === 200) {
//                 setSuccessMessage('Vehicle updated successfully!');
                
//                 // Reset states
//                 setVehicleImage(null);
//                 setRemoveCurrentImage(false);
                
//                 // Auto redirect after 2 seconds
//                 setTimeout(() => {
//                     navigate('/agent/dashboard?tab=vehicles');
//                 }, 2000);
//             }
//         } catch (error) {
//             console.error('Update error details:', error);
            
//             if (error.code === 'ECONNABORTED') {
//                 setErrorMessage('Request timeout. Please try again.');
//             } else if (error.response) {
//                 if (error.response.status === 400) {
//                     const errorData = error.response.data;
//                     if (errorData && errorData.errorMessage) {
//                         setErrorMessage(errorData.errorMessage);
//                     } else if (errorData && typeof errorData === 'string') {
//                         if (errorData.includes("registration number")) {
//                             setErrorMessage('Vehicle with this registration number already exists.');
//                         } else {
//                             setErrorMessage(errorData);
//                         }
//                     } else {
//                         setErrorMessage('Invalid data. Please check all fields are correctly filled.');
//                     }
//                 } else if (error.response.status === 401) {
//                     setErrorMessage('Session expired. Please log in again.');
//                     setTimeout(() => {
//                         navigate('/agent/login');
//                     }, 2000);
//                 } else if (error.response.status === 403) {
//                     setErrorMessage('You do not have permission to edit this vehicle.');
//                 } else if (error.response.status === 404) {
//                     setErrorMessage('Vehicle not found.');
//                 } else {
//                     setErrorMessage(`Error ${error.response.status}: Failed to update vehicle`);
//                 }
//             } else if (error.request) {
//                 setErrorMessage('Cannot connect to server. Please make sure the backend is running.');
//             } else {
//                 setErrorMessage('An unexpected error occurred. Please try again.');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleDelete = async () => {
//         if (!window.confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) {
//             return;
//         }

//         try {
//             await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`, {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
//                 }
//             });
            
//             alert('Vehicle deleted successfully!');
//             navigate('/agent/dashboard?tab=vehicles');
//         } catch (error) {
//             console.error('Error deleting vehicle:', error);
//             alert('Failed to delete vehicle. Please try again.');
//         }
//     };

//     const handleGoBack = () => {
//         navigate('/agent/dashboard?tab=vehicles');
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
//                     <p className="text-gray-600">Loading vehicle details...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center p-4">
//             <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
//                 {/* Left Section - Vehicle Info & Preview */}
//                 <div className="md:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-10 md:p-12 flex flex-col relative overflow-hidden">
//                     {/* Background Pattern */}
//                     <div className="absolute inset-0 opacity-10">
//                         <div className="absolute top-10 left-10 w-24 h-12 border-2 border-white rounded-lg"></div>
//                         <div className="absolute bottom-20 right-10 w-20 h-10 border-2 border-white rounded-lg"></div>
//                     </div>

//                     <div className="relative z-10">
//                         {/* Logo/Brand Section */}
//                         <div className="mb-8">
//                             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
//                                 <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
//                             </div>
//                             <h1 className="text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
//                             <p className="text-teal-300 text-lg font-medium">Edit Vehicle Details</p>
//                         </div>

//                         {/* Agent Info */}
//                         <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
//                             <p className="text-sm text-teal-200">Editing as:</p>
//                             <p className="text-xl font-semibold text-white">{agentName}</p>
//                         </div>

//                         {/* Vehicle Preview */}
//                         {currentImageUrl && (
//                             <div className="mb-6">
//                                 <p className="text-sm text-teal-200 mb-2">Current Vehicle Image:</p>
//                                 <div className="relative">
//                                     <img 
//                                         src={currentImageUrl} 
//                                         alt={formData.makeModel}
//                                         className="w-full h-48 object-cover rounded-lg"
//                                     />
//                                     {!removeCurrentImage && (
//                                         <button
//                                             onClick={handleRemoveCurrentImage}
//                                             className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                                             title="Remove current image"
//                                         >
//                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                             </svg>
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Vehicle Summary */}
//                         <div className="mb-6 p-4 bg-white/10 rounded-lg">
//                             <h3 className="font-semibold mb-2">Vehicle Summary</h3>
//                             <p className="text-sm text-teal-200">
//                                 {formData.makeModel || 'No model specified'} • {formData.yearOfManufacture || 'N/A'}
//                             </p>
//                             <p className="text-sm text-teal-200">
//                                 Reg: {formData.regNumber || 'N/A'} • {formData.color || 'N/A'}
//                             </p>
//                             <p className="text-sm text-teal-200">
//                                 Daily Rate: {formData.dailyRentalPrice ? `Rs. ${formData.dailyRentalPrice}` : 'Not set'}
//                             </p>
//                         </div>

//                         {/* Status Badge */}
//                         <div className="mb-6">
//                             <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                 formData.status === 'Available' ? 'bg-green-500' :
//                                 formData.status === 'Booked' ? 'bg-yellow-500' :
//                                 formData.status === 'Maintenance' ? 'bg-red-500' :
//                                 'bg-gray-500'
//                             }`}>
//                                 {formData.status}
//                             </span>
//                         </div>

//                         {/* Quick Actions */}
//                         <div className="space-y-3">
//                             <button
//                                 onClick={handleGoBack}
//                                 className="block w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center"
//                             >
//                                 Back to Dashboard
//                             </button>
                            
//                             <button
//                                 onClick={handleDelete}
//                                 className="block w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 transform hover:-translate-y-1 shadow-lg text-center"
//                             >
//                                 Delete Vehicle
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Edit Form */}
//                 <div className="md:w-3/5 p-10 md:p-12 flex flex-col bg-gradient-to-br from-white to-teal-50">
//                     {/* Header */}
//                     <div className="mb-8 text-center">
//                         <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Edit Vehicle</h2>
//                         <p className="text-gray-600">Update your vehicle information</p>
//                     </div>

//                     {/* Messages */}
//                     {successMessage && (
//                         <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                             <p className="text-green-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                                 {successMessage}
//                             </p>
//                         </div>
//                     )}

//                     {errorMessage && !successMessage && (
//                         <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                             <p className="text-red-700 flex items-center">
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                 </svg>
//                                 {errorMessage}
//                             </p>
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         {/* Vehicle Image Upload */}
//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Update Vehicle Image (Optional)
//                             </label>
//                             <div className={`border-2 border-dashed rounded-lg p-4 text-center transition duration-200 ${
//                                 validationErrors.vehicleImage 
//                                     ? 'border-red-500 bg-red-50' 
//                                     : vehicleImage 
//                                         ? 'border-teal-500 bg-teal-50' 
//                                         : 'border-gray-300 hover:border-teal-400'
//                             }`}>
//                                 <input
//                                     type="file"
//                                     id="vehicleImage"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                     accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
//                                 />
//                                 <label htmlFor="vehicleImage" className="cursor-pointer">
//                                     {vehicleImage ? (
//                                         <>
//                                             <svg className="w-10 h-10 mx-auto text-teal-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             <p className="text-sm font-medium text-teal-700">
//                                                 New image selected: {vehicleImage.name}
//                                             </p>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                             </svg>
//                                             <p className="text-sm text-gray-600">
//                                                 Click to upload new image (leave empty to keep current)
//                                             </p>
//                                         </>
//                                     )}
//                                     <p className="text-xs text-gray-500 mt-1">
//                                         Supported: JPEG, PNG, GIF, WEBP • Max 10MB
//                                     </p>
//                                 </label>
//                             </div>
//                             {validationErrors.vehicleImage && (
//                                 <p className="text-sm text-red-600">{validationErrors.vehicleImage}</p>
//                             )}
//                         </div>

//                         {/* Vehicle Identification */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Registration Number *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="regNumber"
//                                     value={formData.regNumber}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.regNumber ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                     placeholder="ABC-1234"
//                                     style={{ textTransform: 'uppercase' }}
//                                 />
//                                 {validationErrors.regNumber && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.regNumber}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Make & Model *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="makeModel"
//                                     value={formData.makeModel}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.makeModel ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                     placeholder="Toyota Corolla"
//                                 />
//                                 {validationErrors.makeModel && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.makeModel}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Year of Manufacture *
//                                 </label>
//                                 <select
//                                     name="yearOfManufacture"
//                                     value={formData.yearOfManufacture}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         validationErrors.yearOfManufacture ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Year</option>
//                                     {yearOptions.map(year => (
//                                         <option key={year} value={year}>{year}</option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.yearOfManufacture && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.yearOfManufacture}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Color *
//                                 </label>
//                                 <select
//                                     name="color"
//                                     value={formData.color}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         validationErrors.color ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Color</option>
//                                     {colorOptions.map(color => (
//                                         <option key={color} value={color}>{color}</option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.color && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.color}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Vehicle Specifications */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Seating Capacity *
//                                 </label>
//                                 <select
//                                     name="seatingCapacity"
//                                     value={formData.seatingCapacity}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         validationErrors.seatingCapacity ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Capacity</option>
//                                     {seatingOptions.map(capacity => (
//                                         <option key={capacity} value={capacity}>{capacity} seats</option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.seatingCapacity && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.seatingCapacity}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Fuel Type *
//                                 </label>
//                                 <select
//                                     name="fuelType"
//                                     value={formData.fuelType}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         validationErrors.fuelType ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Fuel Type</option>
//                                     {fuelTypes.map(type => (
//                                         <option key={type} value={type}>
//                                             {type === 'PETROL' ? 'Petrol' : 
//                                              type === 'DIESEL' ? 'Diesel' : 
//                                              type === 'ELECTRIC' ? 'Electric' : 
//                                              type === 'HYBRID' ? 'Hybrid' : type}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.fuelType && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.fuelType}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Transmission Type *
//                             </label>
//                             <div className="flex gap-4">
//                                 {transmissionTypes.map(type => (
//                                     <label key={type} className="flex items-center">
//                                         <input
//                                             type="radio"
//                                             name="transmissionType"
//                                             value={type}
//                                             checked={formData.transmissionType === type}
//                                             onChange={handleChange}
//                                             className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                                         />
//                                         <span className="ml-2 text-sm text-gray-700">
//                                             {type === 'MANUAL' ? 'Manual' : 'Automatic'}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>
//                             {validationErrors.transmissionType && (
//                                 <p className="mt-1 text-xs text-red-600">{validationErrors.transmissionType}</p>
//                             )}
//                         </div>

//                         {/* Rental Price and Status */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Daily Rental Price (Rs.) *
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="dailyRentalPrice"
//                                     value={formData.dailyRentalPrice}
//                                     onChange={handleChange}
//                                     min="0"
//                                     step="0.01"
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         validationErrors.dailyRentalPrice ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                     placeholder="2500.00"
//                                 />
//                                 {validationErrors.dailyRentalPrice && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.dailyRentalPrice}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Vehicle Status *
//                                 </label>
//                                 <select
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         validationErrors.status ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     {statusOptions.map(status => (
//                                         <option key={status} value={status}>{status}</option>
//                                     ))}
//                                 </select>
//                                 {validationErrors.status && (
//                                     <p className="mt-1 text-xs text-red-600">{validationErrors.status}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Form Actions */}
//                         <div className="flex gap-4 pt-4">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`flex-1 py-3 px-4 rounded-lg font-semibold transition duration-200 ${
//                                     isSubmitting
//                                         ? 'bg-teal-400 cursor-not-allowed'
//                                         : 'bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900'
//                                 } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Updating...
//                                     </>
//                                 ) : (
//                                     'Update Vehicle'
//                                 )}
//                             </button>
                            
//                             <button
//                                 type="button"
//                                 onClick={handleGoBack}
//                                 className="flex-1 py-3 px-4 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-lg hover:shadow-xl"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VehicleEditPage;



// src/Pages/Vehicle/VehicleEdit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VehicleEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [agentId, setAgentId] = useState(null);
    const [agentName, setAgentName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [vehicleImage, setVehicleImage] = useState(null);
    const [currentImagePath, setCurrentImagePath] = useState('');
    
    const [formData, setFormData] = useState({
        regNumber: '',
        makeModel: '',
        yearOfManufacture: '',
        color: '',
        seatingCapacity: '',
        fuelType: '',
        transmissionType: '',
        dailyRentalPrice: ''
    });

    const fuelTypes = ['PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'];
    const transmissionTypes = ['MANUAL', 'AUTOMATIC'];
    const colorOptions = [
        'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 
        'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Gold'
    ];

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 31 }, (_, i) => currentYear - i);
    const seatingOptions = [2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

    const BASE_URL = 'http://localhost:8080';

    useEffect(() => {
        const storedAgentId = localStorage.getItem('agentId');
        const storedAgentToken = localStorage.getItem('agentToken');
        const storedAgentName = localStorage.getItem('agentCompanyName');
        
        if (!storedAgentId || !storedAgentToken) {
            navigate('/agent/login');
            return;
        }

        setAgentId(storedAgentId);
        setAgentName(storedAgentName || 'Agent');
        fetchVehicleDetails(id);
    }, [id, navigate]);

    const fetchVehicleDetails = async (vehicleId) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/${vehicleId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                const vehicle = response.data;
                
                if (vehicle.agentId !== parseInt(localStorage.getItem('agentId'))) {
                    setErrorMessage('You do not have permission to edit this vehicle');
                    setTimeout(() => {
                        navigate('/agent/dashboard?tab=vehicles');
                    }, 3000);
                    return;
                }

                setFormData({
                    regNumber: vehicle.regNumber || '',
                    makeModel: vehicle.makeModel || '',
                    yearOfManufacture: vehicle.yearOfManufacture?.toString() || '',
                    color: vehicle.color || '',
                    seatingCapacity: vehicle.seatingCapacity?.toString() || '',
                    fuelType: vehicle.fuelType || '',
                    transmissionType: vehicle.transmissionType || '',
                    dailyRentalPrice: vehicle.dailyRentalPrice?.toString() || ''
                });

                if (vehicle.vehicleImage) {
                    setCurrentImagePath(vehicle.vehicleImage);
                }
            }
        } catch (error) {
            console.error('Error fetching vehicle details:', error);
            if (error.response?.status === 404) {
                setErrorMessage('Vehicle not found');
            } else {
                setErrorMessage('Failed to load vehicle details');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        if (imagePath.includes('uploads')) {
            return `${BASE_URL}/${imagePath.replace(/\\/g, '/')}`;
        }
        return `${BASE_URL}${imagePath}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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

        const regNumberRegex = /^[A-Z0-9\s-]+$/i;
        if (formData.regNumber && !regNumberRegex.test(formData.regNumber)) {
            errors.regNumber = 'Invalid registration number format';
        }

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
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: 'Only JPEG, JPG, PNG, GIF, and WEBP images are allowed'
                }));
                return;
            }
            
            if (file.size > 10 * 1024 * 1024) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: 'Image size must be less than 10MB'
                }));
                return;
            }
            
            setVehicleImage(file);
            if (validationErrors.vehicleImage) {
                setValidationErrors(prev => ({
                    ...prev,
                    vehicleImage: ''
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        setValidationErrors({});

        if (!agentId) {
            setErrorMessage('Authentication required. Please log in again.');
            setTimeout(() => {
                navigate('/agent/login');
            }, 2000);
            return;
        }

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const submitData = new FormData();
        
        submitData.append('regNumber', formData.regNumber.toUpperCase());
        if (vehicleImage) {
            submitData.append('vehicleImage', vehicleImage);
        }
        submitData.append('makeModel', formData.makeModel);
        submitData.append('yearOfManufacture', parseInt(formData.yearOfManufacture));
        submitData.append('color', formData.color);
        submitData.append('seatingCapacity', parseInt(formData.seatingCapacity));
        submitData.append('fuelType', formData.fuelType);
        submitData.append('transmissionType', formData.transmissionType);
        submitData.append('dailyRentalPrice', parseFloat(formData.dailyRentalPrice));
        submitData.append('agentId', agentId);

        try {
            const response = await axios.put(`${BASE_URL}/api/v1/vehicle/update/${id}`, submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                },
                timeout: 30000,
            });

            if (response.status === 200) {
                setSuccessMessage('Vehicle updated successfully!');
                setVehicleImage(null);
                
                setTimeout(() => {
                    navigate('/agent/dashboard?tab=vehicles');
                }, 2000);
            }
        } catch (error) {
            console.error('Update error details:', error);
            
            if (error.code === 'ECONNABORTED') {
                setErrorMessage('Request timeout. Please try again.');
            } else if (error.response) {
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
                    setErrorMessage('You do not have permission to edit this vehicle.');
                } else if (error.response.status === 404) {
                    setErrorMessage('Vehicle not found.');
                } else {
                    setErrorMessage(`Error ${error.response.status}: Failed to update vehicle`);
                }
            } else if (error.request) {
                setErrorMessage('Cannot connect to server. Please make sure the backend is running.');
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) {
            return;
        }

        try {
            await axios.delete(`${BASE_URL}/api/v1/vehicle/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('agentToken')}`
                }
            });
            
            alert('Vehicle deleted successfully!');
            navigate('/agent/dashboard?tab=vehicles');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            alert('Failed to delete vehicle. Please try again.');
        }
    };

    const handleGoBack = () => {
        navigate('/agent/dashboard?tab=vehicles');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Loading vehicle details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Section - Vehicle Info & Preview */}
                        <div className="lg:w-2/5 bg-gradient-to-br from-teal-800 to-cyan-900 text-white p-8 lg:p-10">
                            <div className="relative z-10">
                                {/* Logo/Brand Section */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl mb-4">
                                        <img src="/upload/logo/frac_logo.png" alt="FAIR RENT A CAR Logo" className="w-10 h-10" />
                                    </div>
                                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">FAIR RENT A CAR</h1>
                                    <p className="text-teal-300 text-lg">Edit Vehicle Details</p>
                                </div>

                                {/* Agent Info */}
                                <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <p className="text-sm text-teal-200">Editing as:</p>
                                    <p className="text-xl font-semibold text-white">{agentName}</p>
                                </div>

                                {/* Vehicle Preview */}
                                {currentImagePath && (
                                    <div className="mb-6">
                                        <p className="text-sm text-teal-200 mb-2">Current Vehicle Image:</p>
                                        <div className="rounded-lg overflow-hidden border-2 border-teal-400">
                                            <img 
                                                src={getFullImageUrl(currentImagePath)} 
                                                alt={formData.makeModel}
                                                className="w-full h-48 object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M16 8h2"/><path d="M6 8h2"/></svg>';
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Vehicle Summary Card */}
                                <div className="mb-6 p-5 bg-white/10 rounded-lg border border-teal-400/30">
                                    <h3 className="font-semibold text-lg mb-3 text-teal-200">Vehicle Summary</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-teal-200">Model:</span>
                                            <span className="font-medium">{formData.makeModel || 'Not specified'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-teal-200">Year:</span>
                                            <span className="font-medium">{formData.yearOfManufacture || 'N/A'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-teal-200">Registration:</span>
                                            <span className="font-medium">{formData.regNumber || 'N/A'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-teal-200">Color:</span>
                                            <span className="font-medium">{formData.color || 'N/A'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-teal-200">Daily Rate:</span>
                                            <span className="font-medium text-teal-300">
                                                {formData.dailyRentalPrice ? `Rs. ${parseFloat(formData.dailyRentalPrice).toLocaleString()}` : 'Not set'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="space-y-3">
                                    <button
                                        onClick={handleGoBack}
                                        className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition duration-200 transform hover:-translate-y-1 shadow-lg"
                                    >
                                        ← Back to Dashboard
                                    </button>
                                    
                                    <button
                                        onClick={handleDelete}
                                        className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 transform hover:-translate-y-1 shadow-lg"
                                    >
                                        Delete Vehicle
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Edit Form */}
                        <div className="lg:w-3/5 p-8 lg:p-10 bg-gradient-to-br from-white to-teal-50">
                            {/* Header */}
                            <div className="mb-8 text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Edit Vehicle</h2>
                                <p className="text-gray-600">Update your vehicle information</p>
                            </div>

                            {/* Messages */}
                            {successMessage && (
                                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                                    <p className="text-green-700 flex items-center">
                                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {successMessage}
                                    </p>
                                </div>
                            )}

                            {errorMessage && !successMessage && (
                                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                    <p className="text-red-700 flex items-center">
                                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {errorMessage}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Vehicle Image Upload */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Update Vehicle Image <span className="text-gray-400">(Optional)</span>
                                    </label>
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
                                        <label htmlFor="vehicleImage" className="cursor-pointer block">
                                            {vehicleImage ? (
                                                <>
                                                    <svg className="w-12 h-12 mx-auto text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-teal-700">
                                                        {vehicleImage.name}
                                                    </p>
                                                    <p className="text-xs text-teal-600 mt-1">
                                                        Click to change
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <p className="text-sm text-gray-600">
                                                        Click to upload new image
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        (Leave empty to keep current image)
                                                    </p>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                    {validationErrors.vehicleImage && (
                                        <p className="text-sm text-red-600 mt-1">{validationErrors.vehicleImage}</p>
                                    )}
                                    <p className="text-xs text-gray-500">
                                        Supported: JPEG, PNG, GIF, WEBP • Max 10MB
                                    </p>
                                </div>

                                {/* Form Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Registration Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Registration Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="regNumber"
                                            value={formData.regNumber}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                                validationErrors.regNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="ABC-1234"
                                            style={{ textTransform: 'uppercase' }}
                                        />
                                        {validationErrors.regNumber && (
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.regNumber}</p>
                                        )}
                                    </div>

                                    {/* Make & Model */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Make & Model <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="makeModel"
                                            value={formData.makeModel}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                                validationErrors.makeModel ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="Toyota Corolla"
                                        />
                                        {validationErrors.makeModel && (
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.makeModel}</p>
                                        )}
                                    </div>

                                    {/* Year of Manufacture */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Year of Manufacture <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="yearOfManufacture"
                                            value={formData.yearOfManufacture}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                                validationErrors.yearOfManufacture ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Select Year</option>
                                            {yearOptions.map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                        {validationErrors.yearOfManufacture && (
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.yearOfManufacture}</p>
                                        )}
                                    </div>

                                    {/* Color */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Color <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                                validationErrors.color ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Select Color</option>
                                            {colorOptions.map(color => (
                                                <option key={color} value={color}>{color}</option>
                                            ))}
                                        </select>
                                        {validationErrors.color && (
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.color}</p>
                                        )}
                                    </div>

                                    {/* Seating Capacity */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Seating Capacity <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="seatingCapacity"
                                            value={formData.seatingCapacity}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                                validationErrors.seatingCapacity ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Select Capacity</option>
                                            {seatingOptions.map(capacity => (
                                                <option key={capacity} value={capacity}>{capacity} seats</option>
                                            ))}
                                        </select>
                                        {validationErrors.seatingCapacity && (
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.seatingCapacity}</p>
                                        )}
                                    </div>

                                    {/* Fuel Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Fuel Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="fuelType"
                                            value={formData.fuelType}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
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
                                            <p className="mt-1 text-xs text-red-600">{validationErrors.fuelType}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Transmission Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Transmission Type <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-6">
                                        {transmissionTypes.map(type => (
                                            <label key={type} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="transmissionType"
                                                    value={type}
                                                    checked={formData.transmissionType === type}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    {type === 'MANUAL' ? 'Manual' : 'Automatic'}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    {validationErrors.transmissionType && (
                                        <p className="mt-1 text-xs text-red-600">{validationErrors.transmissionType}</p>
                                    )}
                                </div>

                                {/* Daily Rental Price */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Daily Rental Price (Rs.) <span className="text-red-500">*</span>
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
                                            className={`w-full pl-12 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                                validationErrors.dailyRentalPrice ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="2500.00"
                                        />
                                    </div>
                                    {validationErrors.dailyRentalPrice && (
                                        <p className="mt-1 text-xs text-red-600">{validationErrors.dailyRentalPrice}</p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition duration-200 ${
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
                                                Updating...
                                            </>
                                        ) : (
                                            'Update Vehicle'
                                        )}
                                    </button>
                                    
                                    <button
                                        type="button"
                                        onClick={handleGoBack}
                                        className="flex-1 py-3 px-6 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleEditPage;