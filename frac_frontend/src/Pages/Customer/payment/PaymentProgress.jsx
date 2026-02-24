import React from 'react';

const PaymentProgress = ({ currentStep }) => {
    const steps = [
        { number: 1, label: 'Select Method', step: 'select' },
        { number: 2, label: 'Process', step: 'processing' },
        { number: 3, label: 'Complete', step: 'complete' }
    ];

    const getStepColor = (step) => {
        if (currentStep === step.step) {
            return step.number === 3 && currentStep === 'success' ? 'bg-green-600' :
                   step.number === 3 && currentStep === 'failed' ? 'bg-red-600' : 'bg-teal-600';
        }
        if (currentStep === 'success' || currentStep === 'failed') {
            return step.number < 3 ? 'bg-teal-100 text-teal-600' : 
                   step.number === 3 ? (currentStep === 'success' ? 'bg-green-600' : 'bg-red-600') : 'bg-gray-200';
        }
        return step.number < steps.findIndex(s => s.step === currentStep) + 1 ? 'bg-teal-100 text-teal-600' : 'bg-gray-200';
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStepColor(step)} ${
                                currentStep === step.step ? 'text-white' : 'text-gray-400'
                            }`}>
                                {step.number}
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-700">{step.label}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="w-16 h-1 mx-2 bg-gray-300"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PaymentProgress;