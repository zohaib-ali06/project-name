
import './App.css';
import { Component } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/sidebar.js';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Launchpad from './pages/Launchpad/Launchpad';
import Login from './admin/login/login';
import Themes from './admin/themes-crud/themes';


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <customizeBtn />


      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="/admin/login/themes" element={<Themes/>} />
        <Route path="/admin/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
