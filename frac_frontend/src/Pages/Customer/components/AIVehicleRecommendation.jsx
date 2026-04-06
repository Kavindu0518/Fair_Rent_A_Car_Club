// src/Pages/Customer/components/AIVehicleRecommendation.jsx
import React, { useState } from 'react';

const AIVehicleRecommendation = ({ vehicles, allBookings, onSelectVehicle, onClose }) => {
    const [userPreferences, setUserPreferences] = useState({
        purpose: '',
        passengers: '',
        budget: '',
        fuelPreference: '',
        transmissionPreference: '',
        specialRequirements: '',
        tripDuration: '',
        pickupDate: '',
        dropOffDate: ''
    });
    
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState('form');
    const [selectedRecommendation, setSelectedRecommendation] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [aiAnalysis, setAiAnalysis] = useState(null);
    
    // Travel purposes
    const purposes = [
        { id: 'business', label: 'Business Travel', icon: '💼', description: 'Professional, comfortable, reliable' },
        { id: 'family', label: 'Family Vacation', icon: '👨‍👩‍👧‍👦', description: 'Spacious, safe, child-friendly' },
        { id: 'adventure', label: 'Adventure Trip', icon: '🏔️', description: 'Durable, good for rough terrain' },
        { id: 'airport', label: 'Airport Transfer', icon: '✈️', description: 'Punctual, comfortable, luggage space' },
        { id: 'wedding', label: 'Wedding/Special Event', icon: '💒', description: 'Luxury, elegant, premium' },
        { id: 'daily', label: 'Daily Commute', icon: '🚗', description: 'Fuel-efficient, economical' }
    ];
    
    // Passenger options
    const passengerOptions = [
        { value: '1-2', label: '1-2 Passengers', vehicleTypes: ['Compact', 'Economy'] },
        { value: '3-4', label: '3-4 Passengers', vehicleTypes: ['Sedan', 'Compact SUV'] },
        { value: '5-6', label: '5-6 Passengers', vehicleTypes: ['SUV', 'MPV'] },
        { value: '7-8', label: '7-8 Passengers', vehicleTypes: ['Large SUV', 'Minivan'] },
        { value: '9+', label: '9+ Passengers', vehicleTypes: ['Van', 'Mini Bus'] }
    ];
    
    // Budget options (in LKR per day)
    const budgetOptions = [
        { value: 'low', label: 'Economy (Rs. 1,500 - 3,000/day)', range: [1500, 3000] },
        { value: 'medium', label: 'Standard (Rs. 3,000 - 6,000/day)', range: [3000, 6000] },
        { value: 'high', label: 'Premium (Rs. 6,000 - 10,000/day)', range: [6000, 10000] },
        { value: 'luxury', label: 'Luxury (Rs. 10,000+/day)', range: [10000, 100000] }
    ];
    
    // Fuel preferences
    const fuelOptions = [
        { value: 'PETROL', label: 'Petrol', icon: '⛽', advantage: 'Good for city driving' },
        { value: 'DIESEL', label: 'Diesel', icon: '🛢️', advantage: 'Better fuel economy for long trips' },
        { value: 'HYBRID', label: 'Hybrid', icon: '🔋', advantage: 'Eco-friendly, fuel efficient' },
        { value: 'ELECTRIC', label: 'Electric', icon: '⚡', advantage: 'Zero emissions, quiet ride' }
    ];
    
    // AI Recommendation Engine
    const generateRecommendations = async () => {
        setIsLoading(true);
        setCurrentStep('analyzing');
        
        // Simulate AI processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        try {
            // Apply AI logic to filter and score vehicles
            let scoredVehicles = [...vehicles];
            
            // Parse user preferences
            const passengerCount = parseInt(userPreferences.passengers.split('-')[1]) || 5;
            const budget = budgetOptions.find(b => b.value === userPreferences.budget);
            const purpose = purposes.find(p => p.id === userPreferences.purpose);
            const fuelPref = userPreferences.fuelPreference;
            const transmissionPref = userPreferences.transmissionPreference;
            
            // Calculate availability for dates if provided
            const hasDateFilter = userPreferences.pickupDate && userPreferences.dropOffDate;
            
            // Score each vehicle based on user preferences
            scoredVehicles = scoredVehicles.map(vehicle => {
                let score = 0;
                let reasons = [];
                
                // 1. Passenger capacity score (highest weight - 30%)
                const capacityScore = calculateCapacityScore(vehicle.seatingCapacity, passengerCount);
                score += capacityScore * 0.3;
                if (capacityScore > 0.8) {
                    reasons.push(`✓ Perfect seating capacity (${vehicle.seatingCapacity} seats)`);
                } else if (capacityScore > 0.5) {
                    reasons.push(`✓ Accommodates ${passengerCount} passengers comfortably`);
                }
                
                // 2. Budget score (25%)
                const budgetScore = calculateBudgetScore(vehicle.pricePerDay, budget?.range || [0, 50000]);
                score += budgetScore * 0.25;
                if (budgetScore > 0.9) {
                    reasons.push(`✓ Within your budget (${formatCurrency(vehicle.pricePerDay)}/day)`);
                } else if (budgetScore > 0.7) {
                    reasons.push(`✓ Slightly above budget but great value`);
                }
                
                // 3. Purpose match (20%)
                const purposeScore = calculatePurposeScore(vehicle, userPreferences.purpose);
                score += purposeScore * 0.2;
                if (purposeScore > 0.8) {
                    reasons.push(`✓ Excellent choice for ${purpose?.label || 'your trip'}`);
                }
                
                // 4. Fuel preference (15%)
                const fuelScore = fuelPref && fuelPref !== 'any' ? 
                    (vehicle.fuelType === fuelPref ? 1 : 0.3) : 0.7;
                score += fuelScore * 0.15;
                if (fuelPref && vehicle.fuelType === fuelPref) {
                    reasons.push(`✓ Matches your fuel preference (${getFuelTypeDisplay(vehicle.fuelType)})`);
                }
                
                // 5. Transmission preference (10%)
                const transmissionScore = transmissionPref && transmissionPref !== 'any' ?
                    (vehicle.transmissionType === transmissionPref ? 1 : 0.4) : 0.7;
                score += transmissionScore * 0.1;
                if (transmissionPref && vehicle.transmissionType === transmissionPref) {
                    reasons.push(`✓ ${getTransmissionDisplay(vehicle.transmissionType)} transmission as requested`);
                }
                
                // Bonus: Newer vehicles get slight boost
                const currentYear = new Date().getFullYear();
                const ageScore = Math.max(0, 1 - (currentYear - vehicle.yearOfManufacture) / 20);
                score += ageScore * 0.05;
                
                // Deduction: Check availability for selected dates
                let isAvailable = true;
                if (hasDateFilter) {
                    isAvailable = isVehicleAvailable(vehicle.id, 
                        userPreferences.pickupDate, 
                        userPreferences.dropOffDate);
                    if (!isAvailable) {
                        score = 0;
                        reasons = ['❌ Not available for selected dates'];
                    }
                }
                
                return {
                    ...vehicle,
                    aiScore: Math.min(1, Math.max(0, score)),
                    aiReasons: reasons,
                    isAvailable: isAvailable
                };
            });
            
            // Filter out unavailable vehicles and sort by score
            const availableVehicles = scoredVehicles.filter(v => v.isAvailable !== false);
            const sortedRecommendations = availableVehicles
                .sort((a, b) => b.aiScore - a.aiScore)
                .slice(0, 6); // Top 6 recommendations
            
            setRecommendations(sortedRecommendations);
            
            // Generate AI analysis summary
            generateAIAnalysis(sortedRecommendations, userPreferences);
            
            setCurrentStep('results');
            
        } catch (error) {
            console.error('AI Recommendation error:', error);
            setCurrentStep('error');
        } finally {
            setIsLoading(false);
        }
    };
    
    const calculateCapacityScore = (vehicleCapacity, requiredPassengers) => {
        if (vehicleCapacity >= requiredPassengers) {
            // Perfect or more space
            const extraSpace = vehicleCapacity - requiredPassengers;
            if (extraSpace <= 2) return 1.0;
            if (extraSpace <= 4) return 0.9;
            return 0.8;
        } else {
            // Not enough space - penalty
            const deficit = requiredPassengers - vehicleCapacity;
            return Math.max(0, 1 - deficit * 0.3);
        }
    };
    
    const calculateBudgetScore = (price, budgetRange) => {
        if (price <= budgetRange[0]) return 1.0;
        if (price <= budgetRange[1]) return 0.9;
        // Above budget - diminishing returns
        const overBudget = (price - budgetRange[1]) / budgetRange[1];
        return Math.max(0, 0.8 - overBudget * 0.5);
    };
    
    const calculatePurposeScore = (vehicle, purpose) => {
        const scores = {
            'business': vehicle.transmissionType === 'AUTOMATIC' ? 0.9 : 0.7,
            'family': vehicle.seatingCapacity >= 5 ? 0.9 : 0.5,
            'adventure': vehicle.fuelType === 'DIESEL' ? 0.9 : 0.6,
            'airport': 0.8,
            'wedding': vehicle.pricePerDay > 8000 ? 0.9 : 0.5,
            'daily': vehicle.fuelType === 'PETROL' || vehicle.fuelType === 'HYBRID' ? 0.9 : 0.6
        };
        return scores[purpose] || 0.7;
    };
    
    const generateAIAnalysis = (recommendations, preferences) => {
        if (recommendations.length === 0) {
            setAiAnalysis({
                summary: "No vehicles match your criteria. Try adjusting your preferences or dates.",
                bestMatch: null,
                recommendations: []
            });
            return;
        }
        
        const bestMatch = recommendations[0];
        const purpose = purposes.find(p => p.id === preferences.purpose);
        const budget = budgetOptions.find(b => b.value === preferences.budget);
        
        let analysisText = "";
        
        if (bestMatch.aiScore > 0.85) {
            analysisText = `🎯 Perfect Match! The ${bestMatch.makeModel} is an excellent choice for your ${purpose?.label || 'trip'}. ` +
                          `It offers ${bestMatch.seatingCapacity} seats within your ${budget?.label || 'budget'} range.`;
        } else if (bestMatch.aiScore > 0.7) {
            analysisText = `👍 Good Choice! The ${bestMatch.makeModel} aligns well with your needs. ` +
                          `Consider this vehicle for your ${purpose?.label || 'journey'}.`;
        } else {
            analysisText = `💡 Based on your preferences, the ${bestMatch.makeModel} is the best available match. ` +
                          `You might want to adjust your criteria for more options.`;
        }
        
        setAiAnalysis({
            summary: analysisText,
            bestMatch: bestMatch,
            recommendations: recommendations.slice(1, 4)
        });
    };
    
    const isVehicleAvailable = (vehicleId, startDate, endDate) => {
        if (!startDate || !endDate) return true;
        
        const start = new Date(startDate);
        const end = new Date(endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        const conflictingBookings = allBookings.filter(booking => {
            if (booking.vehicleId !== vehicleId) return false;
            if (booking.bookingStatus === 'CANCELLED' || booking.bookingStatus === 'COMPLETED') {
                return false;
            }
            
            const bookingStart = new Date(booking.pickupDate);
            const bookingEnd = new Date(booking.dropOffDate);
            bookingStart.setHours(0, 0, 0, 0);
            bookingEnd.setHours(23, 59, 59, 999);
            
            return (
                (start >= bookingStart && start <= bookingEnd) ||
                (end >= bookingStart && end <= bookingEnd) ||
                (start <= bookingStart && end >= bookingEnd)
            );
        });
        
        return conflictingBookings.length === 0;
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserPreferences(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handlePurposeSelect = (purposeId) => {
        setUserPreferences(prev => ({
            ...prev,
            purpose: purposeId
        }));
    };
    
    const handleFuelSelect = (fuelType) => {
        setUserPreferences(prev => ({
            ...prev,
            fuelPreference: fuelType === prev.fuelPreference ? '' : fuelType
        }));
    };
    
    const handleTransmissionSelect = (type) => {
        setUserPreferences(prev => ({
            ...prev,
            transmissionPreference: type === prev.transmissionPreference ? '' : type
        }));
    };
    
    const handleBookVehicle = (vehicle) => {
        onSelectVehicle(vehicle);
        onClose();
    };
    
    const getFuelTypeDisplay = (type) => {
        switch (type) {
            case 'PETROL': return 'Petrol';
            case 'DIESEL': return 'Diesel';
            case 'ELECTRIC': return 'Electric';
            case 'HYBRID': return 'Hybrid';
            default: return type;
        }
    };
    
    const getTransmissionDisplay = (type) => {
        return type === 'MANUAL' ? 'Manual' : 'Automatic';
    };
    
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-LK', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0
        }).format(amount).replace('LKR', 'Rs.');
    };
    
    const getScoreColor = (score) => {
        if (score >= 0.85) return 'text-green-600 bg-green-100';
        if (score >= 0.7) return 'text-blue-600 bg-blue-100';
        if (score >= 0.5) return 'text-yellow-600 bg-yellow-100';
        return 'text-gray-600 bg-gray-100';
    };
    
    const getScoreStars = (score) => {
        const stars = Math.round(score * 5);
        return '⭐'.repeat(stars) + '☆'.repeat(5 - stars);
    };
    
    // Render form step
    const renderFormStep = () => (
        <div className="space-y-6">
            {/* Travel Purpose */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    What's the purpose of your trip? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {purposes.map(purpose => (
                        <button
                            key={purpose.id}
                            type="button"
                            onClick={() => handlePurposeSelect(purpose.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                                userPreferences.purpose === purpose.id
                                    ? 'border-teal-500 bg-teal-50 shadow-md'
                                    : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                            }`}
                        >
                            <div className="text-2xl mb-2">{purpose.icon}</div>
                            <div className="font-semibold text-gray-800 text-sm">{purpose.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{purpose.description}</div>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Number of Passengers */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    How many passengers? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {passengerOptions.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setUserPreferences(prev => ({ ...prev, passengers: option.value }))}
                            className={`p-3 rounded-lg border text-center transition-all ${
                                userPreferences.passengers === option.value
                                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                                    : 'border-gray-200 hover:border-teal-300'
                            }`}
                        >
                            <div className="font-semibold text-sm">{option.label}</div>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Budget Range */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Daily Budget <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {budgetOptions.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setUserPreferences(prev => ({ ...prev, budget: option.value }))}
                            className={`p-3 rounded-lg border text-left transition-all ${
                                userPreferences.budget === option.value
                                    ? 'border-teal-500 bg-teal-50'
                                    : 'border-gray-200 hover:border-teal-300'
                            }`}
                        >
                            <div className={`font-medium ${userPreferences.budget === option.value ? 'text-teal-700' : 'text-gray-700'}`}>
                                {option.label}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Fuel Preference */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Fuel Preference (Optional)
                </label>
                <div className="flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => handleFuelSelect('')}
                        className={`px-4 py-2 rounded-full border transition-all ${
                            !userPreferences.fuelPreference
                                ? 'border-teal-500 bg-teal-50 text-teal-700'
                                : 'border-gray-200 hover:border-teal-300'
                        }`}
                    >
                        Any
                    </button>
                    {fuelOptions.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => handleFuelSelect(option.value)}
                            className={`px-4 py-2 rounded-full border transition-all ${
                                userPreferences.fuelPreference === option.value
                                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                                    : 'border-gray-200 hover:border-teal-300'
                            }`}
                        >
                            <span className="mr-1">{option.icon}</span>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Transmission Preference */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Transmission Preference (Optional)
                </label>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => handleTransmissionSelect('')}
                        className={`px-4 py-2 rounded-full border transition-all ${
                            !userPreferences.transmissionPreference
                                ? 'border-teal-500 bg-teal-50 text-teal-700'
                                : 'border-gray-200 hover:border-teal-300'
                        }`}
                    >
                        Any
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTransmissionSelect('MANUAL')}
                        className={`px-4 py-2 rounded-full border transition-all ${
                            userPreferences.transmissionPreference === 'MANUAL'
                                ? 'border-teal-500 bg-teal-50 text-teal-700'
                                : 'border-gray-200 hover:border-teal-300'
                        }`}
                    >
                        Manual
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTransmissionSelect('AUTOMATIC')}
                        className={`px-4 py-2 rounded-full border transition-all ${
                            userPreferences.transmissionPreference === 'AUTOMATIC'
                                ? 'border-teal-500 bg-teal-50 text-teal-700'
                                : 'border-gray-200 hover:border-teal-300'
                        }`}
                    >
                        Automatic
                    </button>
                </div>
            </div>
            
            {/* Date Range (Optional) */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Date (Optional)
                    </label>
                    <input
                        type="date"
                        name="pickupDate"
                        value={userPreferences.pickupDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Drop-off Date (Optional)
                    </label>
                    <input
                        type="date"
                        name="dropOffDate"
                        value={userPreferences.dropOffDate}
                        onChange={handleInputChange}
                        min={userPreferences.pickupDate || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                </div>
            </div>
            
            {/* Special Requirements */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements (Optional)
                </label>
                <textarea
                    name="specialRequirements"
                    value={userPreferences.specialRequirements}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="e.g., Need child seat, GPS navigation, driver, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
            </div>
            
            {/* Submit Button */}
            <button
                onClick={generateRecommendations}
                disabled={!userPreferences.purpose || !userPreferences.passengers || !userPreferences.budget || isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    !userPreferences.purpose || !userPreferences.passengers || !userPreferences.budget || isLoading
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900'
                }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {isLoading ? 'AI is analyzing...' : 'Get AI Recommendations'}
            </button>
        </div>
    );
    
    // Render analyzing step
    const renderAnalyzingStep = () => (
        <div className="text-center py-12">
            <div className="relative inline-block">
                <div className="w-24 h-24 border-4 border-teal-200 rounded-full animate-pulse"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-4 border-teal-600 rounded-full animate-spin border-t-transparent"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">AI is Finding Your Perfect Vehicle</h3>
            <p className="text-gray-600">Analyzing your preferences and vehicle availability...</p>
            <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
    
    // Render results step
    const renderResultsStep = () => (
        <div className="space-y-6">
            {/* AI Summary */}
            {aiAnalysis && (
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-5 border border-teal-200">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-teal-800 mb-1">AI Analysis</h4>
                            <p className="text-gray-700">{aiAnalysis.summary}</p>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Recommendations */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                        Top {recommendations.length} Recommendations
                    </h3>
                    <button
                        onClick={() => setCurrentStep('form')}
                        className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Adjust Preferences
                    </button>
                </div>
                
                <div className="space-y-4">
                    {recommendations.map((vehicle, index) => (
                        <div
                            key={vehicle.id}
                            className={`bg-white rounded-xl border-2 p-4 transition-all hover:shadow-lg cursor-pointer relative ${
                                index === 0 ? 'border-teal-400 shadow-md' : 'border-gray-200'
                            }`}
                            onClick={() => {
                                setSelectedRecommendation(vehicle);
                                setShowDetail(true);
                            }}
                        >
                            {index === 0 && (
                                <div className="absolute -top-3 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold rounded-full shadow-md">
                                        🏆 Best Match
                                    </span>
                                </div>
                            )}
                            
                            <div className="flex flex-col md:flex-row gap-4 mt-2">
                                {/* Vehicle Image */}
                                <div className="w-full md:w-32 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    {vehicle.vehicleImage ? (
                                        <img
                                            src={`http://localhost:8080/uploads/vehicles/${vehicle.vehicleImage.split('\\').pop()}`}
                                            alt={vehicle.makeModel}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <div class="w-full h-full flex items-center justify-center">
                                                        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                        </svg>
                                                    </div>
                                                `;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-gray-100">
                                            <svg className="w-12 h-12 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Vehicle Info */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800">{vehicle.makeModel}</h4>
                                            <p className="text-sm text-gray-500">{vehicle.regNumber}</p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(vehicle.aiScore)}`}>
                                            {getScoreStars(vehicle.aiScore)} {Math.round(vehicle.aiScore * 100)}% Match
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {getFuelTypeDisplay(vehicle.fuelType)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            {getTransmissionDisplay(vehicle.transmissionType)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {vehicle.seatingCapacity} seats
                                        </span>
                                    </div>
                                    
                                    {/* AI Reasons */}
                                    <div className="mt-2 text-xs text-gray-500">
                                        {vehicle.aiReasons.slice(0, 2).map((reason, idx) => (
                                            <div key={idx} className="mt-1">{reason}</div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Price and Action */}
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-teal-600">{formatCurrency(vehicle.pricePerDay)}</div>
                                    <div className="text-xs text-gray-500">per day</div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleBookVehicle(vehicle);
                                        }}
                                        className="mt-3 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition text-sm font-semibold"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {recommendations.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">No Vehicles Found</h3>
                    <p className="text-gray-600">Try adjusting your preferences or clearing the date filter</p>
                    <button
                        onClick={() => setCurrentStep('form')}
                        className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                    >
                        Adjust Preferences
                    </button>
                </div>
            )}
            
            {/* Reset Button */}
            <div className="flex gap-3">
                <button
                    onClick={() => {
                        setUserPreferences({
                            purpose: '',
                            passengers: '',
                            budget: '',
                            fuelPreference: '',
                            transmissionPreference: '',
                            specialRequirements: '',
                            tripDuration: '',
                            pickupDate: '',
                            dropOffDate: ''
                        });
                        setCurrentStep('form');
                    }}
                    className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                    Start Over
                </button>
                <button
                    onClick={onClose}
                    className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-teal-900 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-800 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">AI Vehicle Assistant</h2>
                                <p className="text-sm text-gray-500">Let AI find the perfect vehicle for your needs</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="p-6">
                    {currentStep === 'form' && renderFormStep()}
                    {currentStep === 'analyzing' && renderAnalyzingStep()}
                    {currentStep === 'results' && renderResultsStep()}
                    {currentStep === 'error' && (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h3>
                            <p className="text-gray-600 mb-6">Unable to generate recommendations. Please try again.</p>
                            <button
                                onClick={() => setCurrentStep('form')}
                                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Vehicle Detail Modal */}
            {showDetail && selectedRecommendation && (
                <VehicleDetailModal
                    vehicle={selectedRecommendation}
                    onClose={() => {
                        setShowDetail(false);
                        setSelectedRecommendation(null);
                    }}
                    onBookNow={handleBookVehicle}
                    formatCurrency={formatCurrency}
                    getFuelTypeDisplay={getFuelTypeDisplay}
                    getTransmissionDisplay={getTransmissionDisplay}
                    BASE_URL="http://localhost:8080"
                />
            )}
        </div>
    );
};

// Simple Vehicle Detail Modal Component
const VehicleDetailModal = ({ vehicle, onClose, onBookNow, getFuelTypeDisplay, getTransmissionDisplay, BASE_URL }) => {
    const [imageError, setImageError] = useState(false);
    
    const getImageUrl = () => {
        if (!vehicle.vehicleImage) return null;
        const filename = vehicle.vehicleImage.split('\\').pop().split('/').pop();
        return `${BASE_URL}/uploads/vehicles/${filename}`;
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Vehicle Details</h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl overflow-hidden h-48 mb-4">
                        {getImageUrl() && !imageError ? (
                            <img
                                src={getImageUrl()}
                                alt={vehicle.makeModel}
                                className="w-full h-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                        )}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800">{vehicle.makeModel}</h4>
                    <p className="text-gray-500 text-sm">Reg: {vehicle.regNumber}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-xs text-gray-500">Fuel Type</p>
                            <p className="font-medium">{getFuelTypeDisplay(vehicle.fuelType)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Transmission</p>
                            <p className="font-medium">{getTransmissionDisplay(vehicle.transmissionType)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Seating</p>
                            <p className="font-medium">{vehicle.seatingCapacity} seats</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Year</p>
                            <p className="font-medium">{vehicle.yearOfManufacture}</p>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                        <button
                            onClick={() => onBookNow(vehicle)}
                            className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg font-semibold"
                        >
                            Book This Vehicle
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIVehicleRecommendation;