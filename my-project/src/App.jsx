import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/dashboard';
import Login from './components/Login';
import Teammember from './components/Teammember';
import TeamLeader from './components/TeamLeader';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/team-member" element={<Teammember />} />
          <Route path="/team-leader" element={<TeamLeader />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
