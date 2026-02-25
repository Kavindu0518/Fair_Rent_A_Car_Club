// // import React from 'react'
// // import Home from './Pages/Home'

// // const App = () => {
// //   return (
// //     <>
// //         <Home/>
// //     </>
// //   )
// // }

// // export default App


// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import LoginPage from './Pages/Admin/LoginPage';
// // import RegisterPage from './Pages/Admin/RegisterPage';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="app">
// //         <Routes>
// //           <Route path="/login" element={<LoginPage />} />
// //           <Route path="/register" element={<RegisterPage />} />
// //           {/* You can also add a default route or home route */}
// //           <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import AdminLoginPage from './Pages/Admin/LoginPage';
// import AdminRegisterPage from './Pages/Admin/RegisterPage';
// import VehicleViewPage from './Pages/Admin/VehicleView';
// import AgentLoginPage from './Pages/Agent/LoginPage';
// import AgentRegisterPage from './Pages/Agent/RegisterPage';
// import AgentDashboardPage from './Pages/Agent/DashBoard';
// import VehicleRegisterPage from './Pages/Vehicle/VehicleRegister';
// import CustomerLoginPage from './Pages/Customer/LoginPage';
// import CustomerRegisterPage from './Pages/Customer/RegisterPage';
// import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView';
// import CustomerDashboardPage from './Pages/Customer/Dashboard';
// import CustomerPaymentPage from './Pages/Customer/PaymentPage';
// import CustomerPaymentView from './Pages/Customer/CustomerPaymentView';

// import CustomerMyBookings from './Pages/Customer/CustomerMyBookings'; // Add this import



// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/register" element={<AdminRegisterPage />} />
//         <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
//         <Route path="/agent/login" element={<AgentLoginPage />} />
//         <Route path="/agent/register" element={<AgentRegisterPage />} />
//         <Route path="/agent/dashboard" element={<AgentDashboardPage />} />
//         <Route path="/vehicle/register" element={<VehicleRegisterPage />} />
//         <Route path="/customer/login" element={<CustomerLoginPage />} />
//         <Route path="/customer/register" element={<CustomerRegisterPage />} />
//         <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} />
//         <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
//         <Route path="/customer/payment" element={<CustomerPaymentPage />} />
//         <Route path="/customer/paymentview" element={<CustomerPaymentView />} />


//         <Route path="/customer/mybookings" element={<CustomerMyBookings />} /> {/* Add this route */}



//       </Routes>
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Admin Pages
// import AdminLoginPage from './Pages/Admin/LoginPage';
// import AdminRegisterPage from './Pages/Admin/RegisterPage';
// import VehicleViewPage from './Pages/Admin/VehicleView';

// // Agent Pages
// import AgentLoginPage from './Pages/Agent/LoginPage';
// import AgentRegisterPage from './Pages/Agent/RegisterPage';
// import AgentDashboardPage from './Pages/Agent/DashBoard';

// // Vehicle Pages
// import VehicleRegisterPage from './Pages/Vehicle/VehicleRegister';
// import VehicleEditPage from './Pages/Vehicle/VehicleEdit';


// // Customer Pages
// import CustomerLoginPage from './Pages/Customer/LoginPage';
// import CustomerRegisterPage from './Pages/Customer/RegisterPage';
// import CustomerDashboardPage from './Pages/Customer/Dashboard';
// import CustomerPaymentView from './Pages/Customer/CustomerPaymentView';
// import CustomerMyBookings from './Pages/Customer/CustomerMyBookings';


// // import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView';
// // import CustomerPaymentPage from './Pages/Customer/PaymentPage';

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         {/* Home Route */}
//         <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-20">Welcome to FAIR RENT A CAR</h1>} />
        
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/register" element={<AdminRegisterPage />} />
//         <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
        
//         {/* Agent Routes */}
//         <Route path="/agent/login" element={<AgentLoginPage />} />
//         <Route path="/agent/register" element={<AgentRegisterPage />} />
//         <Route path="/agent/dashboard" element={<AgentDashboardPage />} />
        
//         {/* Vehicle Routes */}
//         <Route path="/vehicle/register" element={<VehicleRegisterPage />} />
//         <Route path="/vehicle/edit/:id" element={<VehicleEditPage />} />
        
//         {/* Customer Routes */}
//         <Route path="/customer/login" element={<CustomerLoginPage />} />
//         <Route path="/customer/register" element={<CustomerRegisterPage />} />
//         <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
//         <Route path="/customer/paymentview" element={<CustomerPaymentView />} />
//         <Route path="/customer/mybookings" element={<CustomerMyBookings />} />



//         {/* <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} /> */}
//         {/* <Route path="/customer/payment" element={<CustomerPaymentPage />} /> */}
        
//         {/* 404 Not Found Route */}
//         <Route path="*" element={
//           <div className="text-center mt-20">
//             <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
//             <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
//             <a href="/" className="text-teal-600 hover:text-teal-800 underline">Go back to Home</a>
//           </div>
//         } />
//       </Routes>
//     </div>
//   );
// };

// export default App;




// // App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Admin Pages
// import AdminLoginPage from './Pages/Admin/LoginPage';
// import AdminRegisterPage from './Pages/Admin/RegisterPage';
// import VehicleViewPage from './Pages/Admin/VehicleView';

// // Agent Pages
// import AgentLoginPage from './Pages/Agent/LoginPage';
// import AgentRegisterPage from './Pages/Agent/RegisterPage';
// import AgentDashboardPage from './Pages/Agent/DashBoard';

// // Vehicle Pages
// import VehicleRegisterPage from './Pages/Vehicle/VehicleRegister';
// import VehicleEditPage from './Pages/Vehicle/VehicleEdit';

// // Customer Pages
// import CustomerLoginPage from './Pages/Customer/LoginPage';
// import CustomerRegisterPage from './Pages/Customer/RegisterPage';
// import CustomerDashboardPage from './Pages/Customer/Dashboard';
// import CustomerPaymentView from './Pages/Customer/CustomerPaymentView';
// import CustomerMyBookings from './Pages/Customer/CustomerMyBookings';
// import CustomerPaymentPage from './Pages/Customer/PaymentPage'; // ✅ ADD THIS IMPORT

// // import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView';

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         {/* Home Route */}
//         <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-20">Welcome to FAIR RENT A CAR</h1>} />
        
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/register" element={<AdminRegisterPage />} />
//         <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
        
//         {/* Agent Routes */}
//         <Route path="/agent/login" element={<AgentLoginPage />} />
//         <Route path="/agent/register" element={<AgentRegisterPage />} />
//         <Route path="/agent/dashboard" element={<AgentDashboardPage />} />
        
//         {/* Vehicle Routes */}
//         <Route path="/vehicle/register" element={<VehicleRegisterPage />} />
//         <Route path="/vehicle/edit/:id" element={<VehicleEditPage />} />
        
//         {/* Customer Routes */}
//         <Route path="/customer/login" element={<CustomerLoginPage />} />
//         <Route path="/customer/register" element={<CustomerRegisterPage />} />
//         <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
//         <Route path="/customer/paymentview" element={<CustomerPaymentView />} />
//         <Route path="/customer/mybookings" element={<CustomerMyBookings />} />
//         <Route path="/customer/payment" element={<CustomerPaymentPage />} /> {/* ✅ ADD THIS ROUTE */}

//         {/* <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} /> */}
        
//         {/* 404 Not Found Route */}
//         <Route path="*" element={
//           <div className="text-center mt-20">
//             <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
//             <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
//             <a href="/" className="text-teal-600 hover:text-teal-800 underline">Go back to Home</a>
//           </div>
//         } />
//       </Routes>
//     </div>
//   );
// };

// export default App;



// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Admin Pages
import AdminLoginPage from './Pages/Admin/LoginPage';
import AdminRegisterPage from './Pages/Admin/RegisterPage';
import VehicleViewPage from './Pages/Admin/VehicleView';

// Agent Pages
import AgentLoginPage from './Pages/Agent/LoginPage';
import AgentRegisterPage from './Pages/Agent/RegisterPage';
import AgentDashboardPage from './Pages/Agent/DashBoard';

// Vehicle Pages
import VehicleRegisterPage from './Pages/Vehicle/VehicleRegister';
import VehicleEditPage from './Pages/Vehicle/VehicleEdit';

// Customer Pages
import CustomerLoginPage from './Pages/Customer/LoginPage';
import CustomerRegisterPage from './Pages/Customer/RegisterPage';
import CustomerDashboardPage from './Pages/Customer/Dashboard';
import CustomerMyBookings from './Pages/Customer/CustomerMyBookings';
import CustomerPaymentView from './Pages/Customer/CustomerPaymentView';
// import CustomerPaymentPage from './Pages/Customer/PaymentPage'; // Uncomment if you have this component
// import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView'; // Uncomment if you have this component

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-20">Welcome to FAIR RENT A CAR</h1>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
        
        {/* Agent Routes */}
        <Route path="/agent/login" element={<AgentLoginPage />} />
        <Route path="/agent/register" element={<AgentRegisterPage />} />
        <Route path="/agent/dashboard" element={<AgentDashboardPage />} />
        
        {/* Vehicle Routes */}
        <Route path="/vehicle/register" element={<VehicleRegisterPage />} />
        <Route path="/vehicle/edit/:id" element={<VehicleEditPage />} />
        
        {/* Customer Routes */}
        <Route path="/customer/login" element={<CustomerLoginPage />} />
        <Route path="/customer/register" element={<CustomerRegisterPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
        <Route path="/customer/mybookings" element={<CustomerMyBookings />} />
        <Route path="/customer/paymentview" element={<CustomerPaymentView />} />
        {/* <Route path="/customer/payment-old" element={<CustomerPaymentPage />} /> */} {/* Commented out - using new payment view */}
        {/* <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} /> */} {/* Commented out if not used */}
        
        {/* 404 Not Found Route */}
        <Route path="*" element={
          <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
            <a href="/" className="text-teal-600 hover:text-teal-800 underline">Go back to Home</a>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;