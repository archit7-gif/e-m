


import React from 'react'
import { Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import { Button } from 'antd'
import Login from './pages/Login'


function App() {
  
  return (
      <>
        <Button type="primary" style={{ margin: '20px' }}>Ant Design Button</Button>
       
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/login" element={< Login/>} />
        </Routes>
      </>
  )
}

export default App






// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Register from './pages/Register';
// import { Button } from 'antd';  // Importing Button component from Ant Design

// function App() {
//   return (
//     <>
//       {/* Ant Design Button example */}
//       <Button type="primary" style={{ margin: '20px' }}>Ant Design Button</Button>

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
