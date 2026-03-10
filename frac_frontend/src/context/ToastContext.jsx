// // // src/context/ToastContext.jsx
// // import React, { createContext, useState } from 'react';
// // import Toast from '../Components/Toast';

// // export const ToastContext = createContext();

// // export const ToastProvider = ({ children }) => {
// //     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

// //     const showToast = (message, type = 'success') => {
// //         setToast({ show: true, message, type });
// //     };

// //     const hideToast = () => {
// //         setToast({ show: false, message: '', type: 'success' });
// //     };

// //     return (
// //         <ToastContext.Provider value={{ showToast, hideToast }}>
// //             {children}
// //             {toast.show && (
// //                 <Toast 
// //                     message={toast.message} 
// //                     type={toast.type} 
// //                     onClose={hideToast} 
// //                     duration={3000}
// //                 />
// //             )}
// //         </ToastContext.Provider>
// //     );
// // };


// //==========f==========
// // src/context/ToastContext.jsx
// import React, { createContext, useState } from 'react';
// import Toast from '../Components/Toast';

// // Create and export the context
// export const ToastContext = createContext();

// // Toast Provider Component
// export const ToastProvider = ({ children }) => {
//     const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

//     const showToast = (message, type = 'success') => {
//         setToast({ show: true, message, type });
//     };

//     const hideToast = () => {
//         setToast({ show: false, message: '', type: 'success' });
//     };

//     const value = {
//         showToast,
//         hideToast
//     };

//     return (
//         <ToastContext.Provider value={value}>
//             {children}
//             {toast.show && (
//                 <Toast 
//                     message={toast.message} 
//                     type={toast.type} 
//                     onClose={hideToast} 
//                     duration={3000}
//                 />
//             )}
//         </ToastContext.Provider>
//     );
// };


// src/context/ToastContext.jsx
import React, { createContext, useState } from 'react';
import Toast from '../Components/Toast';

// Create context
const ToastContext = createContext();

// Toast Provider Component
export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
    };

    const hideToast = () => {
        setToast({ show: false, message: '', type: 'success' });
    };

    const value = {
        showToast,
        hideToast
    };

    return (
        <ToastContext.Provider value={value}>
            {children}
            {toast.show && (
                <Toast 
                    message={toast.message} 
                    type={toast.type} 
                    onClose={hideToast} 
                    duration={3000}
                />
            )}
        </ToastContext.Provider>
    );
};

// Export the context for the hook to use
export { ToastContext };