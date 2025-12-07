import './App.css';
import React from "react";
import dayjs from "dayjs";

//routers(page changing)
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//assets
import './assets/fonts.css';

//bus-pages
import BusNow from './main_pages/pages/bus_pages/bus_now';
import BusAll from './main_pages/pages/bus_pages/bus_all';

//food-day-pages
import Sunday from './main_pages/pages/food_pages/sunday';
import Monday from './main_pages/pages/food_pages/monday';
import Tuesday from './main_pages/pages/food_pages/tuesday';
import Wednesday from './main_pages/pages/food_pages/wednesday';
import Thursday from './main_pages/pages/food_pages/thursday';
import Friday from './main_pages/pages/food_pages/friday';
import Saturday from './main_pages/pages/food_pages/saturday';

//info-pages
import Contact from './main_pages/pages/info_pages/contact';
import FoodInfo from './main_pages/pages/info_pages/food_info';
import WashingMachine from './main_pages/pages/info_pages/washing_m';

//hostel-pages
import Hostel from './main_pages/pages/hostel_pages/hostel';

//update-pages
import Update from './main_pages/pages/update_pages/update';


function App() {
  const days = dayjs().format("dddd").toLowerCase();

  return (
    <main style={{ backgroundColor: "#121212", height: "auto", minHeight: '95vh', color: "white" }}>

      <Router>
        <Routes>
          <Route path='/' element={<BusNow />} />
          <Route path='/bus-all' element={<BusAll />} />

          <Route path="/days" element={<Navigate to={`/${days}`} />} />
          <Route path='/sunday' element={<Sunday />} />
          <Route path='/monday' element={<Monday />} />
          <Route path='/tuesday' element={<Tuesday />} />
          <Route path='/wednesday' element={<Wednesday />} />
          <Route path='/thursday' element={<Thursday />} />
          <Route path='/friday' element={<Friday />} />
          <Route path='/saturday' element={<Saturday />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/food-info' element={<FoodInfo />} />
          <Route path='/washing-machine' element={<WashingMachine />} />

          <Route path='/hostel' element={<Hostel />} />

          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
