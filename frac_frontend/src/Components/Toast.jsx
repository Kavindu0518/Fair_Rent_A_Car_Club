// // // // // // // // src/components/Toast.jsx
// // // // // // // import React, { useEffect } from 'react';

// // // // // // // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// // // // // // //     useEffect(() => {
// // // // // // //         const timer = setTimeout(() => {
// // // // // // //             onClose();
// // // // // // //         }, duration);

// // // // // // //         return () => clearTimeout(timer);
// // // // // // //     }, [duration, onClose]);

// // // // // // //     const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
// // // // // // //     const icon = type === 'success' ? (
// // // // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // // // //         </svg>
// // // // // // //     ) : (
// // // // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // //         </svg>
// // // // // // //     );

// // // // // // //     return (
// // // // // // //         <div className="fixed top-5 right-5 z-50 animate-slide-in">
// // // // // // //             <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
// // // // // // //                 {icon}
// // // // // // //                 <span className="flex-1">{message}</span>
// // // // // // //                 <button onClick={onClose} className="hover:opacity-75">
// // // // // // //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // //                     </svg>
// // // // // // //                 </button>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Toast;



// // // // // // // src/components/Toast.jsx
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import '../styles/Toast.css'; // Import the CSS file

// // // // // // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// // // // // //     const [isExiting, setIsExiting] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         const timer = setTimeout(() => {
// // // // // //             handleClose();
// // // // // //         }, duration);

// // // // // //         return () => clearTimeout(timer);
// // // // // //     }, [duration]);

// // // // // //     const handleClose = () => {
// // // // // //         setIsExiting(true);
// // // // // //         setTimeout(() => {
// // // // // //             onClose();
// // // // // //         }, 300); // Match this with animation duration
// // // // // //     };

// // // // // //     const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
// // // // // //     const icon = type === 'success' ? (
// // // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // // //         </svg>
// // // // // //     ) : (
// // // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // //         </svg>
// // // // // //     );

// // // // // //     return (
// // // // // //         <div className={`fixed top-5 right-5 z-50 ${isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}>
// // // // // //             <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
// // // // // //                 {icon}
// // // // // //                 <span className="flex-1">{message}</span>
// // // // // //                 <button onClick={handleClose} className="hover:opacity-75">
// // // // // //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // //                     </svg>
// // // // // //                 </button>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default Toast;



// // // // // // src/components/Toast.jsx
// // // // // import React, { useEffect, useState } from 'react';

// // // // // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// // // // //     const [isVisible, setIsVisible] = useState(true);
// // // // //     const [progress, setProgress] = useState(100);

// // // // //     useEffect(() => {
// // // // //         // Start progress bar animation
// // // // //         const startTime = Date.now();
// // // // //         const endTime = startTime + duration;

// // // // //         const updateProgress = () => {
// // // // //             const now = Date.now();
// // // // //             const remaining = endTime - now;
// // // // //             const newProgress = (remaining / duration) * 100;

// // // // //             if (remaining > 0) {
// // // // //                 setProgress(newProgress);
// // // // //                 requestAnimationFrame(updateProgress);
// // // // //             }
// // // // //         };

// // // // //         const animationFrame = requestAnimationFrame(updateProgress);

// // // // //         // Auto close after duration
// // // // //         const timer = setTimeout(() => {
// // // // //             setIsVisible(false);
// // // // //             setTimeout(onClose, 300); // Allow exit animation
// // // // //         }, duration);

// // // // //         return () => {
// // // // //             clearTimeout(timer);
// // // // //             cancelAnimationFrame(animationFrame);
// // // // //         };
// // // // //     }, [duration, onClose]);

// // // // //     const handleClose = () => {
// // // // //         setIsVisible(false);
// // // // //         setTimeout(onClose, 300);
// // // // //     };

// // // // //     if (!isVisible) return null;

// // // // //     const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
// // // // //     const progressColor = type === 'success' ? 'bg-green-300' : 'bg-red-300';
    
// // // // //     const icon = type === 'success' ? (
// // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // //         </svg>
// // // // //     ) : (
// // // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // //         </svg>
// // // // //     );

// // // // //     return (
// // // // //         <div className="fixed top-5 right-5 z-50 animate-slide-in">
// // // // //             <div className={`${bgColor} text-white rounded-lg shadow-lg overflow-hidden min-w-[320px]`}>
// // // // //                 {/* Main content */}
// // // // //                 <div className="px-6 py-4 flex items-center gap-3">
// // // // //                     {icon}
// // // // //                     <span className="flex-1 font-medium">{message}</span>
// // // // //                     <button 
// // // // //                         onClick={handleClose} 
// // // // //                         className="hover:opacity-75 transition-opacity"
// // // // //                         aria-label="Close"
// // // // //                     >
// // // // //                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // //                         </svg>
// // // // //                     </button>
// // // // //                 </div>
                
// // // // //                 {/* Progress bar */}
// // // // //                 <div 
// // // // //                     className={`h-1 ${progressColor} transition-all duration-100 ease-linear`}
// // // // //                     style={{ width: `${progress}%` }}
// // // // //                 />
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Toast;



// // // // import React, { useEffect, useState } from 'react';

// // // // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// // // //     const [isVisible, setIsVisible] = useState(true);
// // // //     const [progress, setProgress] = useState(100);

// // // //     useEffect(() => {
// // // //         const startTime = Date.now();
// // // //         const endTime = startTime + duration;

// // // //         const updateProgress = () => {
// // // //             const now = Date.now();
// // // //             const remaining = endTime - now;
// // // //             const newProgress = (remaining / duration) * 100;

// // // //             if (remaining > 0) {
// // // //                 setProgress(Math.max(0, newProgress));
// // // //                 requestAnimationFrame(updateProgress);
// // // //             }
// // // //         };

// // // //         const animationFrame = requestAnimationFrame(updateProgress);

// // // //         const timer = setTimeout(() => {
// // // //             setIsVisible(false);
// // // //             setTimeout(onClose, 300);
// // // //         }, duration);

// // // //         return () => {
// // // //             clearTimeout(timer);
// // // //             cancelAnimationFrame(animationFrame);
// // // //         };
// // // //     }, [duration, onClose]);

// // // //     const handleClose = () => {
// // // //         setIsVisible(false);
// // // //         setTimeout(onClose, 300);
// // // //     };

// // // //     if (!isVisible) return null;

// // // //     const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
// // // //     const progressColor = type === 'success' ? 'bg-green-300' : 'bg-red-300';
    
// // // //     const icon = type === 'success' ? (
// // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //         </svg>
// // // //     ) : (
// // // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //         </svg>
// // // //     );

// // // //     return (
// // // //         <div className="fixed top-5 right-5 z-50 animate-slide-in">
// // // //             <div className={`${bgColor} text-white rounded-lg shadow-lg overflow-hidden min-w-[320px]`}>
// // // //                 <div className="px-6 py-4 flex items-center gap-3">
// // // //                     {icon}
// // // //                     <span className="flex-1 font-medium">{message}</span>
// // // //                     <button 
// // // //                         onClick={handleClose} 
// // // //                         className="hover:opacity-75 transition-opacity"
// // // //                     >
// // // //                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                         </svg>
// // // //                     </button>
// // // //                 </div>
// // // //                 <div 
// // // //                     className={`h-1 ${progressColor} transition-all duration-100 ease-linear`}
// // // //                     style={{ width: `${progress}%` }}
// // // //                 />
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Toast;


// // // // src/components/Toast.jsx
// // // import React, { useEffect } from 'react';

// // // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// // //     useEffect(() => {
// // //         const timer = setTimeout(() => {
// // //             onClose();
// // //         }, duration);

// // //         return () => clearTimeout(timer);
// // //     }, [duration, onClose]);

// // //     const getTypeStyles = () => {
// // //         switch (type) {
// // //             case 'success':
// // //                 return 'bg-green-50 border-green-500 text-green-800';
// // //             case 'error':
// // //                 return 'bg-red-50 border-red-500 text-red-800';
// // //             case 'warning':
// // //                 return 'bg-yellow-50 border-yellow-500 text-yellow-800';
// // //             case 'info':
// // //                 return 'bg-blue-50 border-blue-500 text-blue-800';
// // //             default:
// // //                 return 'bg-gray-50 border-gray-500 text-gray-800';
// // //         }
// // //     };

// // //     const getIcon = () => {
// // //         switch (type) {
// // //             case 'success':
// // //                 return (
// // //                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                     </svg>
// // //                 );
// // //             case 'error':
// // //                 return (
// // //                     <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                     </svg>
// // //                 );
// // //             case 'warning':
// // //                 return (
// // //                     <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// // //                     </svg>
// // //                 );
// // //             case 'info':
// // //                 return (
// // //                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                     </svg>
// // //                 );
// // //             default:
// // //                 return null;
// // //         }
// // //     };

// // //     return (
// // //         <div className="fixed top-4 right-4 z-[100] animate-slideIn">
// // //             <div className={`flex items-center p-4 rounded-lg border-l-4 shadow-lg ${getTypeStyles()}`}>
// // //                 <div className="flex-shrink-0 mr-3">
// // //                     {getIcon()}
// // //                 </div>
// // //                 <div className="flex-1 mr-2">
// // //                     <p className="text-sm font-medium">{message}</p>
// // //                 </div>
// // //                 <button
// // //                     onClick={onClose}
// // //                     className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
// // //                 >
// // //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                     </svg>
// // //                 </button>
// // //             </div>
// // //             <style jsx>{`
// // //                 @keyframes slideIn {
// // //                     from {
// // //                         transform: translateX(100%);
// // //                         opacity: 0;
// // //                     }
// // //                     to {
// // //                         transform: translateX(0);
// // //                         opacity: 1;
// // //                     }
// // //                 }
// // //                 .animate-slideIn {
// // //                     animation: slideIn 0.3s ease-out;
// // //                 }
// // //             `}</style>
// // //         </div>
// // //     );
// // // };

// // // export default Toast;



// // //===========

// // // src/components/Toast.jsx
// // import React, { useEffect } from 'react';

// // const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
// //     useEffect(() => {
// //         const timer = setTimeout(() => {
// //             onClose();
// //         }, duration);

// //         return () => clearTimeout(timer);
// //     }, [duration, onClose]);

// //     const getTypeStyles = () => {
// //         switch (type) {
// //             case 'success':
// //                 return 'bg-green-50 border-green-500 text-green-800';
// //             case 'error':
// //                 return 'bg-red-50 border-red-500 text-red-800';
// //             case 'warning':
// //                 return 'bg-yellow-50 border-yellow-500 text-yellow-800';
// //             case 'info':
// //                 return 'bg-blue-50 border-blue-500 text-blue-800';
// //             default:
// //                 return 'bg-gray-50 border-gray-500 text-gray-800';
// //         }
// //     };

// //     const getIcon = () => {
// //         switch (type) {
// //             case 'success':
// //                 return (
// //                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                 );
// //             case 'error':
// //                 return (
// //                     <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                     </svg>
// //                 );
// //             case 'warning':
// //                 return (
// //                     <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// //                     </svg>
// //                 );
// //             case 'info':
// //                 return (
// //                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                 );
// //             default:
// //                 return null;
// //         }
// //     };

// //     return (
// //         <div className="fixed top-4 right-4 z-[100] animate-slideIn">
// //             <div className={`flex items-center p-4 rounded-lg border-l-4 shadow-lg ${getTypeStyles()}`}>
// //                 <div className="flex-shrink-0 mr-3">
// //                     {getIcon()}
// //                 </div>
// //                 <div className="flex-1 mr-2">
// //                     <p className="text-sm font-medium">{message}</p>
// //                 </div>
// //                 <button
// //                     onClick={onClose}
// //                     className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
// //                 >
// //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                     </svg>
// //                 </button>
// //             </div>
// //             <style jsx>{`
// //                 @keyframes slideIn {
// //                     from {
// //                         transform: translateX(100%);
// //                         opacity: 0;
// //                     }
// //                     to {
// //                         transform: translateX(0);
// //                         opacity: 1;
// //                     }
// //                 }
// //                 .animate-slideIn {
// //                     animation: slideIn 0.3s ease-out;
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // export default Toast;




// //=====admin

// // src/components/Toast.jsx
// import React, { useEffect } from 'react';

// const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             onClose();
//         }, duration);

//         return () => clearTimeout(timer);
//     }, [duration, onClose]);

//     const getTypeStyles = () => {
//         switch (type) {
//             case 'success':
//                 return 'bg-green-50 border-green-500 text-green-800';
//             case 'error':
//                 return 'bg-red-50 border-red-500 text-red-800';
//             case 'warning':
//                 return 'bg-yellow-50 border-yellow-500 text-yellow-800';
//             case 'info':
//                 return 'bg-blue-50 border-blue-500 text-blue-800';
//             default:
//                 return 'bg-gray-50 border-gray-500 text-gray-800';
//         }
//     };

//     const getIcon = () => {
//         switch (type) {
//             case 'success':
//                 return (
//                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                 );
//             case 'error':
//                 return (
//                     <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 );
//             case 'warning':
//                 return (
//                     <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                 );
//             case 'info':
//                 return (
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="fixed top-4 right-4 z-[100] animate-slideIn">
//             <div className={`flex items-center p-4 rounded-lg border-l-4 shadow-lg ${getTypeStyles()}`}>
//                 <div className="flex-shrink-0 mr-3">
//                     {getIcon()}
//                 </div>
//                 <div className="flex-1 mr-2">
//                     <p className="text-sm font-medium">{message}</p>
//                 </div>
//                 <button
//                     onClick={onClose}
//                     className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//             </div>
//             <style jsx>{`
//                 @keyframes slideIn {
//                     from {
//                         transform: translateX(100%);
//                         opacity: 0;
//                     }
//                     to {
//                         transform: translateX(0);
//                         opacity: 1;
//                     }
//                 }
//                 .animate-slideIn {
//                     animation: slideIn 0.3s ease-out;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Toast;




//f=============#

// src/Components/Toast.jsx
import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-50 border-green-500 text-green-800';
            case 'error':
                return 'bg-red-50 border-red-500 text-red-800';
            case 'warning':
                return 'bg-yellow-50 border-yellow-500 text-yellow-800';
            case 'info':
                return 'bg-blue-50 border-blue-500 text-blue-800';
            default:
                return 'bg-gray-50 border-gray-500 text-gray-800';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                );
            case 'info':
                return (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed top-4 right-4 z-[100] animate-slideIn">
            <div className={`flex items-center p-4 rounded-lg border-l-4 shadow-lg ${getTypeStyles()}`}>
                <div className="flex-shrink-0 mr-3">
                    {getIcon()}
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Toast;