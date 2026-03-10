
// // App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import HomePage from './Pages/LandingPage'
// import LandingPage from './Pages/LandingPage';
// import './styles/Toast.css'; // Add this import


// // Admin Pages
// import AdminLoginPage from './Pages/Admin/LoginPage';
// import AdminRegisterPage from './Pages/Admin/RegisterPage';
// import VehicleViewPage from './Pages/Admin/VehicleView';
// import AdminDashboard from './Pages/Admin/Dashboard';


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
// import CustomerMyBookings from './Pages/Customer/CustomerMyBookings';
// import CustomerPaymentView from './Pages/Customer/CustomerPaymentView';
// import CustomerProfileEdit from './Pages/Customer/CustomerProfileEdit';
// import About from './Pages/About';
// // import CustomerPaymentPage from './Pages/Customer/PaymentPage'; // Uncomment if you have this component
// // import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView'; // Uncomment if you have this component

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         {/* Home Route */}
//         {/* <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-20">Welcome to FAIR RENT A CAR</h1>} /> */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/anout" element={<About />} />

        
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/register" element={<AdminRegisterPage />} />
//         <Route path="/admin/vehicleview" element={<VehicleViewPage />} />

//         // Add these routes:
// <Route path="/admin/dashboard" element={<AdminDashboard />} />
// {/* <Route path="/admin/agents" element={<AdminDashboard />} /> // Will default to agents tab
// <Route path="/admin/customers" element={<AdminDashboard />} />
// <Route path="/admin/vehicles" element={<AdminDashboard />} />
// <Route path="/admin/bookings" element={<AdminDashboard />} />
// <Route path="/admin/reports" element={<AdminDashboard />} />
// <Route path="/admin/settings" element={<AdminDashboard />} /> */}
        
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
//         <Route path="/customer/mybookings" element={<CustomerMyBookings />} />
//         <Route path="/customer/paymentview" element={<CustomerPaymentView />} />
//         <Route path="/customer/profile/edit" element={<CustomerProfileEdit />} />
//         {/* <Route path="/customer/payment-old" element={<CustomerPaymentPage />} /> */} {/* Commented out - using new payment view */}
//         {/* <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} /> */} {/* Commented out if not used */}
        
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

import HomePage from './Pages/LandingPage'
import LandingPage from './Pages/LandingPage';
import './styles/Toast.css'; // Add this import


// Admin Pages
import AdminLoginPage from './Pages/Admin/LoginPage';
import AdminRegisterPage from './Pages/Admin/RegisterPage';
import VehicleViewPage from './Pages/Admin/VehicleView';
import AdminDashboard from './Pages/Admin/Dashboard';


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
import CustomerProfileEdit from './Pages/Customer/CustomerProfileEdit';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
// import CustomerPaymentPage from './Pages/Customer/PaymentPage'; // Uncomment if you have this component
// import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView'; // Uncomment if you have this component

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Route */}
        {/* <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-20">Welcome to FAIR RENT A CAR</h1>} /> */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
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
        <Route path="/customer/profile/edit" element={<CustomerProfileEdit />} />
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