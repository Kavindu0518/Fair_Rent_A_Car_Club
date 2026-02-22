// import React from 'react'
// import Home from './Pages/Home'

// const App = () => {
//   return (
//     <>
//         <Home/>
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './Pages/Admin/LoginPage';
// import RegisterPage from './Pages/Admin/RegisterPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           {/* You can also add a default route or home route */}
//           <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Pages/Admin/LoginPage';
import AdminRegisterPage from './Pages/Admin/RegisterPage';
import VehicleViewPage from './Pages/Admin/VehicleView';
import AgentLoginPage from './Pages/Agent/LoginPage';
import AgentRegisterPage from './Pages/Agent/RegisterPage';
import AgentDashboardPage from './Pages/Agent/DashBoard';
import VehicleRegisterPage from './Pages/Vehicle/VehicleRegister';
import CustomerLoginPage from './Pages/Customer/LoginPage';
import CustomerRegisterPage from './Pages/Customer/RegisterPage';
import CustomerVehicleViewPage from './Pages/Customer/CustomerVehicleView';
import CustomerDashboardPage from './Pages/Customer/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/admin/vehicleview" element={<VehicleViewPage />} />
        <Route path="/agent/login" element={<AgentLoginPage />} />
        <Route path="/agent/register" element={<AgentRegisterPage />} />
        <Route path="/agent/dashboard" element={<AgentDashboardPage />} />
        <Route path="/vehicle/register" element={<VehicleRegisterPage />} />
        <Route path="/customer/login" element={<CustomerLoginPage />} />
        <Route path="/customer/register" element={<CustomerRegisterPage />} />
        <Route path="/customer/vehicleview" element={<CustomerVehicleViewPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;
