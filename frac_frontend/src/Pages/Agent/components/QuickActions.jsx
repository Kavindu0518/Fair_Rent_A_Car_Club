// src/Pages/Agent/components/QuickActions.jsx
import React from 'react';

const QuickActions = () => {
    return (
        <div className="fixed bottom-6 right-6">
            <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 group relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200">
                    Quick Actions
                </span>
            </button>
        </div>
    );
};

export default QuickActions;