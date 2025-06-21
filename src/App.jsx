
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Programm from './pages/Programm.jsx';
import Team from './pages/Team.jsx';
import NavBar from './components/NavBar.jsx';
import AuthorInstructions from './pages/AuthorInstructions.jsx';
function App() {
  return (
    <>
    
     <Router>
      
    <NavBar />
            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programm" element={<Programm />} />
        <Route path="/team" element={<Team />} />
        <Route path='/author-instructions' element={<AuthorInstructions/>}/>
      </Routes>
     </Router>
   
    </>
  )
}

export default App
