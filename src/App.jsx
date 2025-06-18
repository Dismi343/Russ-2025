
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Programm from './pages/Programm.jsx';
import Team from './pages/Team.jsx';
import NavBar from './components/NavBar.jsx';
function App() {
  return (
    <>
    
     <Router>
      <div className='bg-[#080A45] pt-10 flex justify-center'>
    <NavBar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programm" element={<Programm />} />
        <Route path="/team" element={<Team />} />
      </Routes>
     </Router>
   
    </>
  )
}

export default App
