// // src/Pages/Admin/components/modals/AddBookingModal.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddBookingModal = ({ onClose, onSave, BASE_URL }) => {
//     const [formData, setFormData] = useState({
//         customerId: '',
//         vehicleId: '',
//         agentId: '',
//         pickupDate: '',
//         dropOffDate: '',
//         pickupLocation: '',
//         dropOffLocation: '',
//         driverStatus: 'WITHOUT_DRIVER',
//         bookingStatus: 'PENDING',
//         paymentStatus: 'PENDING',
//         totalPrice: '',
//         gpsIncluded: false,
//         childSeatIncluded: false
//     });

//     const [customers, setCustomers] = useState([]);
//     const [vehicles, setVehicles] = useState([]);
//     const [agents, setAgents] = useState([]);
//     const [filteredVehicles, setFilteredVehicles] = useState([]);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState({
//         customers: true,
//         vehicles: true,
//         agents: true
//     });

//     // Fetch data for dropdowns
//     useEffect(() => {
//         fetchCustomers();
//         fetchVehicles();
//         fetchAgents();
//     }, []);

//     // Filter vehicles when agent changes
//     useEffect(() => {
//         if (formData.agentId && vehicles.length > 0) {
//             const filtered = vehicles.filter(v => v.agentId === parseInt(formData.agentId));
//             setFilteredVehicles(filtered);
//         } else {
//             setFilteredVehicles([]);
//         }
//     }, [formData.agentId, vehicles]);

//     const fetchCustomers = async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/customer/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setCustomers(response.data || []);
//         } catch (err) {
//             console.error('Error fetching customers:', err);
//         } finally {
//             setIsLoading(prev => ({ ...prev, customers: false }));
//         }
//     };

//     const fetchVehicles = async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setVehicles(response.data || []);
//         } catch (err) {
//             console.error('Error fetching vehicles:', err);
//         } finally {
//             setIsLoading(prev => ({ ...prev, vehicles: false }));
//         }
//     };

//     const fetchAgents = async () => {
//         try {
//             const token = localStorage.getItem('adminToken');
//             const response = await axios.get(`${BASE_URL}/api/v1/agent/getAll`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             setAgents(response.data || []);
//         } catch (err) {
//             console.error('Error fetching agents:', err);
//         } finally {
//             setIsLoading(prev => ({ ...prev, agents: false }));
//         }
//     };

//     const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];
//     const bookingStatusOptions = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];
//     const paymentStatusOptions = ['PENDING', 'PAID', 'UNPAID', 'UNPAID_CASH_PICKUP', 'CHECKING BANK TRANSFER'];
//     const locations = ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'];

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.customerId) newErrors.customerId = 'Please select a customer';
//         if (!formData.vehicleId) newErrors.vehicleId = 'Please select a vehicle';
//         if (!formData.agentId) newErrors.agentId = 'Please select an agent';
//         if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
//         if (!formData.dropOffDate) newErrors.dropOffDate = 'Drop-off date is required';
//         if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
//         if (!formData.driverStatus) newErrors.driverStatus = 'Driver status is required';
//         if (!formData.bookingStatus) newErrors.bookingStatus = 'Booking status is required';
//         if (!formData.paymentStatus) newErrors.paymentStatus = 'Payment status is required';
//         if (!formData.totalPrice) newErrors.totalPrice = 'Total price is required';
//         if (formData.totalPrice && parseFloat(formData.totalPrice) <= 0) newErrors.totalPrice = 'Total price must be greater than 0';
        
//         // Check if drop-off date is after pickup date
//         if (formData.pickupDate && formData.dropOffDate) {
//             const pickup = new Date(formData.pickupDate);
//             const dropoff = new Date(formData.dropOffDate);
//             if (dropoff <= pickup) {
//                 newErrors.dropOffDate = 'Drop-off date must be after pickup date';
//             }
//         }
        
//         return newErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }

//         // Reset vehicle when agent changes
//         if (name === 'agentId') {
//             setFormData(prev => ({ ...prev, vehicleId: '' }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Create JSON data
//             const submitData = {
//                 customerId: parseInt(formData.customerId),
//                 vehicleId: parseInt(formData.vehicleId),
//                 agentId: parseInt(formData.agentId),
//                 pickupDate: formData.pickupDate,
//                 dropOffDate: formData.dropOffDate,
//                 pickupLocation: formData.pickupLocation,
//                 dropOffLocation: formData.dropOffLocation || formData.pickupLocation,
//                 driverStatus: formData.driverStatus,
//                 bookingStatus: formData.bookingStatus,
//                 paymentStatus: formData.paymentStatus,
//                 totalPrice: parseFloat(formData.totalPrice),
//                 gpsIncluded: formData.gpsIncluded,
//                 childSeatIncluded: formData.childSeatIncluded
//             };

//             console.log('Submitting booking:', submitData);
//             await onSave(JSON.stringify(submitData));
//         } catch (error) {
//             console.error('Error in form submission:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const calculateDuration = () => {
//         if (!formData.pickupDate || !formData.dropOffDate) return 0;
//         const start = new Date(formData.pickupDate);
//         const end = new Date(formData.dropOffDate);
//         const diffTime = Math.abs(end - start);
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//         return diffDays;
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">Add New Booking</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         {/* Customer Selection */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Select Customer <span className="text-red-500">*</span>
//                             </label>
//                             <select
//                                 name="customerId"
//                                 value={formData.customerId}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                     errors.customerId ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}
//                                 disabled={isLoading.customers}
//                             >
//                                 <option value="">
//                                     {isLoading.customers ? 'Loading customers...' : 'Select a customer'}
//                                 </option>
//                                 {customers.map(customer => (
//                                     <option key={customer.id} value={customer.id}>
//                                         #CUS000{customer.id} - {customer.firstName} {customer.lastName}
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.customerId && <p className="mt-1 text-xs text-red-600">{errors.customerId}</p>}
//                         </div>

//                         {/* Agent Selection */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Select Agent <span className="text-red-500">*</span>
//                             </label>
//                             <select
//                                 name="agentId"
//                                 value={formData.agentId}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                     errors.agentId ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}
//                                 disabled={isLoading.agents}
//                             >
//                                 <option value="">
//                                     {isLoading.agents ? 'Loading agents...' : 'Select an agent'}
//                                 </option>
//                                 {agents.map(agent => (
//                                     <option key={agent.id} value={agent.id}>
//                                         #AG000{agent.id} - {agent.companyName}
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.agentId && <p className="mt-1 text-xs text-red-600">{errors.agentId}</p>}
//                         </div>

//                         {/* Vehicle Selection */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Select Vehicle <span className="text-red-500">*</span>
//                             </label>
//                             <select
//                                 name="vehicleId"
//                                 value={formData.vehicleId}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                     errors.vehicleId ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                 }`}
//                                 disabled={!formData.agentId || isLoading.vehicles}
//                             >
//                                 <option value="">
//                                     {!formData.agentId 
//                                         ? 'Select an agent first' 
//                                         : isLoading.vehicles 
//                                         ? 'Loading vehicles...' 
//                                         : filteredVehicles.length === 0 
//                                         ? 'No vehicles available for this agent' 
//                                         : 'Select a vehicle'}
//                                 </option>
//                                 {filteredVehicles.map(vehicle => (
//                                     <option key={vehicle.id} value={vehicle.id}>
//                                         #VEH000{vehicle.id} - {vehicle.makeModel} ({vehicle.regNumber})
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.vehicleId && <p className="mt-1 text-xs text-red-600">{errors.vehicleId}</p>}
//                         </div>

//                         {/* Dates */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Pickup Date <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="date"
//                                     name="pickupDate"
//                                     value={formData.pickupDate}
//                                     onChange={handleChange}
//                                     min={new Date().toISOString().split('T')[0]}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.pickupDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.pickupDate && <p className="mt-1 text-xs text-red-600">{errors.pickupDate}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Drop-off Date <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="date"
//                                     name="dropOffDate"
//                                     value={formData.dropOffDate}
//                                     onChange={handleChange}
//                                     min={formData.pickupDate || new Date().toISOString().split('T')[0]}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.dropOffDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 />
//                                 {errors.dropOffDate && <p className="mt-1 text-xs text-red-600">{errors.dropOffDate}</p>}
//                             </div>
//                         </div>

//                         {/* Locations */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Pickup Location <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="pickupLocation"
//                                     value={formData.pickupLocation}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.pickupLocation ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select Location</option>
//                                     {locations.map(loc => (
//                                         <option key={loc} value={loc}>{loc}</option>
//                                     ))}
//                                 </select>
//                                 {errors.pickupLocation && <p className="mt-1 text-xs text-red-600">{errors.pickupLocation}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
//                                 <select
//                                     name="dropOffLocation"
//                                     value={formData.dropOffLocation}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
//                                 >
//                                     <option value="">Same as pickup</option>
//                                     {locations.map(loc => (
//                                         <option key={loc} value={loc}>{loc}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Driver Status and Total Price */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Driver Status <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="driverStatus"
//                                     value={formData.driverStatus}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.driverStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     {driverOptions.map(option => (
//                                         <option key={option} value={option}>{option}</option>
//                                     ))}
//                                 </select>
//                                 {errors.driverStatus && <p className="mt-1 text-xs text-red-600">{errors.driverStatus}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Total Price (Rs.) <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="totalPrice"
//                                     value={formData.totalPrice}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                                         errors.totalPrice ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                     min="0"
//                                     step="100"
//                                     placeholder="5000"
//                                 />
//                                 {errors.totalPrice && <p className="mt-1 text-xs text-red-600">{errors.totalPrice}</p>}
//                             </div>
//                         </div>

//                         {/* Statuses */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Booking Status <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="bookingStatus"
//                                     value={formData.bookingStatus}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.bookingStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     {bookingStatusOptions.map(option => (
//                                         <option key={option} value={option}>{option}</option>
//                                     ))}
//                                 </select>
//                                 {errors.bookingStatus && <p className="mt-1 text-xs text-red-600">{errors.bookingStatus}</p>}
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Payment Status <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     name="paymentStatus"
//                                     value={formData.paymentStatus}
//                                     onChange={handleChange}
//                                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
//                                         errors.paymentStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
//                                     }`}
//                                 >
//                                     {paymentStatusOptions.map(option => (
//                                         <option key={option} value={option}>{option}</option>
//                                     ))}
//                                 </select>
//                                 {errors.paymentStatus && <p className="mt-1 text-xs text-red-600">{errors.paymentStatus}</p>}
//                             </div>
//                         </div>

//                         {/* Extras */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
//                             <div className="space-y-2">
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="gpsIncluded"
//                                         checked={formData.gpsIncluded}
//                                         onChange={handleChange}
//                                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                     />
//                                     <label className="ml-2 text-sm text-gray-700">
//                                         GPS Navigation Included
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="childSeatIncluded"
//                                         checked={formData.childSeatIncluded}
//                                         onChange={handleChange}
//                                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                     />
//                                     <label className="ml-2 text-sm text-gray-700">
//                                         Child Seat Included
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Duration Summary */}
//                         {formData.pickupDate && formData.dropOffDate && (
//                             <div className="bg-teal-50 p-3 rounded-lg text-sm">
//                                 <span className="font-medium">Duration:</span> {calculateDuration()} days
//                             </div>
//                         )}

//                         <div className="flex gap-4 pt-4">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-900 transition duration-200 disabled:opacity-50 flex items-center justify-center"
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Creating...
//                                     </>
//                                 ) : (
//                                     'Create Booking'
//                                 )}
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
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

// export default AddBookingModal;


// src/Pages/Admin/components/modals/AddBookingModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBookingModal = ({ onClose, onSave, BASE_URL }) => {
    const [formData, setFormData] = useState({
        customerId: '',
        vehicleId: '',
        agentId: '',
        pickupDate: '',
        dropOffDate: '',
        pickupLocation: '',
        dropOffLocation: '',
        driverStatus: 'WITHOUT_DRIVER',
        bookingStatus: 'PENDING',
        paymentStatus: 'PENDING',
        totalPrice: '',
        gpsIncluded: false,
        childSeatIncluded: false
    });

    const [customers, setCustomers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [agents, setAgents] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [selectedVehicleDetails, setSelectedVehicleDetails] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState({
        customers: true,
        vehicles: true,
        agents: true
    });

    // Constants for extra charges
    const EXTRA_CHARGES = {
        DRIVER: 2500,      // Rs. 2,500 per day for driver
        GPS: 500,          // Rs. 500 per day for GPS
        CHILD_SEAT: 300    // Rs. 300 per day for child seat
    };

    // Fetch data for dropdowns
    useEffect(() => {
        fetchCustomers();
        fetchVehicles();
        fetchAgents();
    }, []);

    // Filter vehicles when agent changes
    useEffect(() => {
        if (formData.agentId && vehicles.length > 0) {
            const filtered = vehicles.filter(v => v.agentId === parseInt(formData.agentId));
            setFilteredVehicles(filtered);
        } else {
            setFilteredVehicles([]);
        }
    }, [formData.agentId, vehicles]);

    // Set selected vehicle details when vehicle changes
    useEffect(() => {
        if (formData.vehicleId && vehicles.length > 0) {
            const vehicle = vehicles.find(v => v.id === parseInt(formData.vehicleId));
            setSelectedVehicleDetails(vehicle || null);
        } else {
            setSelectedVehicleDetails(null);
        }
    }, [formData.vehicleId, vehicles]);

    // Auto-calculate total price when relevant fields change
    useEffect(() => {
        calculateTotalPrice();
    }, [
        formData.pickupDate, 
        formData.dropOffDate, 
        formData.driverStatus, 
        formData.gpsIncluded, 
        formData.childSeatIncluded,
        selectedVehicleDetails
    ]);

    const fetchCustomers = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/customer/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setCustomers(response.data || []);
        } catch (err) {
            console.error('Error fetching customers:', err);
        } finally {
            setIsLoading(prev => ({ ...prev, customers: false }));
        }
    };

    const fetchVehicles = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/vehicle/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setVehicles(response.data || []);
        } catch (err) {
            console.error('Error fetching vehicles:', err);
        } finally {
            setIsLoading(prev => ({ ...prev, vehicles: false }));
        }
    };

    const fetchAgents = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.get(`${BASE_URL}/api/v1/agent/getAll`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setAgents(response.data || []);
        } catch (err) {
            console.error('Error fetching agents:', err);
        } finally {
            setIsLoading(prev => ({ ...prev, agents: false }));
        }
    };

    const calculateDays = () => {
        if (!formData.pickupDate || !formData.dropOffDate) return 0;
        const start = new Date(formData.pickupDate);
        const end = new Date(formData.dropOffDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const calculateTotalPrice = () => {
        const days = calculateDays();
        if (days <= 0 || !selectedVehicleDetails) {
            setFormData(prev => ({ ...prev, totalPrice: '' }));
            return;
        }

        let price = days * (selectedVehicleDetails.dailyRentalPrice || 0);
        
        // Add driver charge if selected
        if (formData.driverStatus === 'WITH_DRIVER') {
            price += days * EXTRA_CHARGES.DRIVER;
        }
        
        // Add GPS charge if selected
        if (formData.gpsIncluded) {
            price += days * EXTRA_CHARGES.GPS;
        }
        
        // Add child seat charge if selected
        if (formData.childSeatIncluded) {
            price += days * EXTRA_CHARGES.CHILD_SEAT;
        }
        
        setFormData(prev => ({ ...prev, totalPrice: price }));
    };

    const driverOptions = ['WITH_DRIVER', 'WITHOUT_DRIVER'];
    const bookingStatusOptions = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];
    const paymentStatusOptions = ['PENDING', 'PAID', 'UNPAID', 'UNPAID_CASH_PICKUP', 'CHECKING BANK TRANSFER'];
    const locations = ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.customerId) newErrors.customerId = 'Please select a customer';
        if (!formData.vehicleId) newErrors.vehicleId = 'Please select a vehicle';
        if (!formData.agentId) newErrors.agentId = 'Please select an agent';
        if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
        if (!formData.dropOffDate) newErrors.dropOffDate = 'Drop-off date is required';
        if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
        if (!formData.driverStatus) newErrors.driverStatus = 'Driver status is required';
        if (!formData.bookingStatus) newErrors.bookingStatus = 'Booking status is required';
        if (!formData.paymentStatus) newErrors.paymentStatus = 'Payment status is required';
        if (!formData.totalPrice) newErrors.totalPrice = 'Total price is required';
        if (formData.totalPrice && parseFloat(formData.totalPrice) <= 0) newErrors.totalPrice = 'Total price must be greater than 0';
        
        // Check if drop-off date is after pickup date
        if (formData.pickupDate && formData.dropOffDate) {
            const pickup = new Date(formData.pickupDate);
            const dropoff = new Date(formData.dropOffDate);
            if (dropoff <= pickup) {
                newErrors.dropOffDate = 'Drop-off date must be after pickup date';
            }
        }
        
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        // Reset vehicle when agent changes
        if (name === 'agentId') {
            setFormData(prev => ({ ...prev, vehicleId: '' }));
            setSelectedVehicleDetails(null);
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
            // Create JSON data
            const submitData = {
                customerId: parseInt(formData.customerId),
                vehicleId: parseInt(formData.vehicleId),
                agentId: parseInt(formData.agentId),
                pickupDate: formData.pickupDate,
                dropOffDate: formData.dropOffDate,
                pickupLocation: formData.pickupLocation,
                dropOffLocation: formData.dropOffLocation || formData.pickupLocation,
                driverStatus: formData.driverStatus,
                bookingStatus: formData.bookingStatus,
                paymentStatus: formData.paymentStatus,
                totalPrice: parseFloat(formData.totalPrice),
                gpsIncluded: formData.gpsIncluded,
                childSeatIncluded: formData.childSeatIncluded
            };

            console.log('Submitting booking:', submitData);
            await onSave(JSON.stringify(submitData));
        } catch (error) {
            console.error('Error in form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-LK', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('LKR', 'Rs.');
    };

    const days = calculateDays();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Add New Booking</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Customer Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Customer <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="customerId"
                                value={formData.customerId}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                    errors.customerId ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                disabled={isLoading.customers}
                            >
                                <option value="">
                                    {isLoading.customers ? 'Loading customers...' : 'Select a customer'}
                                </option>
                                {customers.map(customer => (
                                    <option key={customer.id} value={customer.id}>
                                        #CUS000{customer.id} - {customer.firstName} {customer.lastName}
                                    </option>
                                ))}
                            </select>
                            {errors.customerId && <p className="mt-1 text-xs text-red-600">{errors.customerId}</p>}
                        </div>

                        {/* Agent Selection */}
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
                                disabled={isLoading.agents}
                            >
                                <option value="">
                                    {isLoading.agents ? 'Loading agents...' : 'Select an agent'}
                                </option>
                                {agents.map(agent => (
                                    <option key={agent.id} value={agent.id}>
                                        #AG000{agent.id} - {agent.companyName}
                                    </option>
                                ))}
                            </select>
                            {errors.agentId && <p className="mt-1 text-xs text-red-600">{errors.agentId}</p>}
                        </div>

                        {/* Vehicle Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Vehicle <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="vehicleId"
                                value={formData.vehicleId}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                    errors.vehicleId ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                                disabled={!formData.agentId || isLoading.vehicles}
                            >
                                <option value="">
                                    {!formData.agentId 
                                        ? 'Select an agent first' 
                                        : isLoading.vehicles 
                                        ? 'Loading vehicles...' 
                                        : filteredVehicles.length === 0 
                                        ? 'No vehicles available for this agent' 
                                        : 'Select a vehicle'}
                                </option>
                                {filteredVehicles.map(vehicle => (
                                    <option key={vehicle.id} value={vehicle.id}>
                                        #VEH000{vehicle.id} - {vehicle.makeModel} ({vehicle.regNumber}) - {formatCurrency(vehicle.dailyRentalPrice || 0)}/day
                                    </option>
                                ))}
                            </select>
                            {errors.vehicleId && <p className="mt-1 text-xs text-red-600">{errors.vehicleId}</p>}
                        </div>

                        {/* Selected Vehicle Details Summary */}
                        {selectedVehicleDetails && (
                            <div className="bg-teal-50 p-3 rounded-lg text-sm">
                                <p className="font-medium text-teal-800 mb-1">Selected Vehicle Details:</p>
                                <p className="text-teal-700">
                                    {selectedVehicleDetails.makeModel} • {selectedVehicleDetails.fuelType} • {selectedVehicleDetails.transmissionType} • {selectedVehicleDetails.seatingCapacity} seats
                                </p>
                                <p className="text-teal-700 font-semibold mt-1">
                                    Base Rate: {formatCurrency(selectedVehicleDetails.dailyRentalPrice || 0)}/day
                                </p>
                            </div>
                        )}

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pickup Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="pickupDate"
                                    value={formData.pickupDate}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.pickupDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.pickupDate && <p className="mt-1 text-xs text-red-600">{errors.pickupDate}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Drop-off Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dropOffDate"
                                    value={formData.dropOffDate}
                                    onChange={handleChange}
                                    min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                                        errors.dropOffDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                />
                                {errors.dropOffDate && <p className="mt-1 text-xs text-red-600">{errors.dropOffDate}</p>}
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pickup Location <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.pickupLocation ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select Location</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                                {errors.pickupLocation && <p className="mt-1 text-xs text-red-600">{errors.pickupLocation}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
                                <select
                                    name="dropOffLocation"
                                    value={formData.dropOffLocation}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                >
                                    <option value="">Same as pickup</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Driver Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Driver Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="driverStatus"
                                value={formData.driverStatus}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                    errors.driverStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                            >
                                {driverOptions.map(option => (
                                    <option key={option} value={option}>
                                        {option === 'WITH_DRIVER' ? `With Driver (+Rs. ${EXTRA_CHARGES.DRIVER}/day)` : 'Without Driver'}
                                    </option>
                                ))}
                            </select>
                            {errors.driverStatus && <p className="mt-1 text-xs text-red-600">{errors.driverStatus}</p>}
                        </div>

                        {/* Statuses */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Booking Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="bookingStatus"
                                    value={formData.bookingStatus}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.bookingStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    {bookingStatusOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {errors.bookingStatus && <p className="mt-1 text-xs text-red-600">{errors.bookingStatus}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Payment Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="paymentStatus"
                                    value={formData.paymentStatus}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${
                                        errors.paymentStatus ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                                >
                                    {paymentStatusOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {errors.paymentStatus && <p className="mt-1 text-xs text-red-600">{errors.paymentStatus}</p>}
                            </div>
                        </div>

                        {/* Extras */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Extras</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="gpsIncluded"
                                        checked={formData.gpsIncluded}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">
                                        GPS Navigation (Rs. {EXTRA_CHARGES.GPS}/day)
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="childSeatIncluded"
                                        checked={formData.childSeatIncluded}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">
                                        Child Seat (Rs. {EXTRA_CHARGES.CHILD_SEAT}/day)
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Total Price Display - Auto-calculated, read-only */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Total Price (Rs.) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="totalPrice"
                                value={formData.totalPrice}
                                readOnly
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-semibold"
                                placeholder="Auto-calculated"
                            />
                            {errors.totalPrice && <p className="mt-1 text-xs text-red-600">{errors.totalPrice}</p>}
                        </div>

                        {/* Price Breakdown */}
                        {days > 0 && selectedVehicleDetails && (
                            <div className="bg-teal-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-teal-800 mb-2">Price Breakdown</h4>
                                <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Base Rate ({days} days × {formatCurrency(selectedVehicleDetails.dailyRentalPrice || 0)}/day)</span>
                                        <span className="font-medium">{formatCurrency(days * (selectedVehicleDetails.dailyRentalPrice || 0))}</span>
                                    </div>
                                    
                                    {formData.driverStatus === 'WITH_DRIVER' && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>Driver Charge ({days} days × Rs. {EXTRA_CHARGES.DRIVER}/day)</span>
                                            <span className="font-medium">{formatCurrency(days * EXTRA_CHARGES.DRIVER)}</span>
                                        </div>
                                    )}
                                    
                                    {formData.gpsIncluded && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>GPS Navigation ({days} days × Rs. {EXTRA_CHARGES.GPS}/day)</span>
                                            <span className="font-medium">{formatCurrency(days * EXTRA_CHARGES.GPS)}</span>
                                        </div>
                                    )}
                                    
                                    {formData.childSeatIncluded && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>Child Seat ({days} days × Rs. {EXTRA_CHARGES.CHILD_SEAT}/day)</span>
                                            <span className="font-medium">{formatCurrency(days * EXTRA_CHARGES.CHILD_SEAT)}</span>
                                        </div>
                                    )}
                                    
                                    <div className="border-t border-teal-200 pt-2 mt-2">
                                        <div className="flex justify-between font-bold text-teal-800">
                                            <span>Total Amount</span>
                                            <span>{formatCurrency(formData.totalPrice)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Duration Summary */}
                        {days > 0 && (
                            <div className="bg-teal-50 p-3 rounded-lg text-sm">
                                <span className="font-medium">Duration:</span> {days} day{days > 1 ? 's' : ''}
                            </div>
                        )}

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
                                        Creating...
                                    </>
                                ) : (
                                    'Create Booking'
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

export default AddBookingModal;