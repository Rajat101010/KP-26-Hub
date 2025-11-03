import './App.css';

import './components/font/fonts.css'
import "./RevolvingBorder.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import dayjs from "dayjs";

import Home from './pages/home';
import Info from './pages/info';

import Monday from './pages/monday';
import Tuesday from './pages/tuesday';
import Wednesday from './pages/wednesday';
import Thursday from './pages/thursday';
import Friday from './pages/friday';
import Saturday from './pages/saturday';
import Sunday from './pages/sunday';

import Now from './pages_bus/now';
import C25 from './pages_bus/c_25';
import C15 from './pages_bus/c_15_7_8';
import C3 from './pages_bus/c_3';

import InfoBus from './pages_bus/info_bus';

function App() {
  const day = dayjs().format("dddd").toLowerCase();

  return (
    <main style={{ backgroundColor: "#121212", height: "auto", minHeight: '100vh', color: "white" }}>
      <Router>
        <Routes>
          <Route path="/day" element={<Navigate to={`/${day}`} />} />

          <Route path='/' element={<Now />} />
          <Route path='/info' element={<Info />} />
          <Route path='/monday' element={<Monday />} />
          <Route path='/tuesday' element={<Tuesday />} />
          <Route path='/wednesday' element={<Wednesday />} />
          <Route path='/thursday' element={<Thursday />} />
          <Route path='/friday' element={<Friday />} />
          <Route path='/saturday' element={<Saturday />} />
          <Route path='/sunday' element={<Sunday />} />

          <Route path='/info-bus' element={<InfoBus />} />
          <Route path='/bus-now' element={<Now />} />
          <Route path='/bus-c_25' element={<C25 />} />
          <Route path='/bus-c_15_7_8' element={<C15 />} />
          <Route path='/bus-c_3' element={<C3 />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
