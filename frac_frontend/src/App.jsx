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
import LoginPage from './Pages/Admin/LoginPage';
import RegisterPage from './Pages/Admin/RegisterPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
