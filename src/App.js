import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Header from './components/Header';

import { monday, tuesday, wednesday, thursday, friday, saturday, sunday } from './components/data.js';
import DayBuilder from './routes/DayBuilder';
import NotFound from './routes/NotFound';

function App() {
  const [dayName, setDayName] = useState("Failed");


  const colors = [
    "rgb(255, 199, 199)",
    "rgb(255, 232, 192)",
    "rgb(255, 243, 143)",
    "rgb(185, 230, 181)",
    "rgb(183, 228, 255)",
    "rgb(230, 200, 246)",
    "rgb(255, 201, 228)"
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Header dayName={dayName} setDayName={setDayName}/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/monday" />} />
          <Route path="/monday" element={<DayBuilder day={monday} colors={colors}/>} />
          <Route path="/tuesday" element={<DayBuilder day={tuesday} colors={colors}/>} />
          <Route path="/wednesday" element={<DayBuilder day={wednesday} colors={colors}/>} />
          <Route path="/thursday" element={<DayBuilder day={thursday} colors={colors}/>} />
          <Route path="/friday" element={<DayBuilder day={friday} colors={colors}/>} />
          <Route path="/saturday" element={<DayBuilder day={saturday} colors={colors}/>} />
          <Route path="/sunday" element={<DayBuilder day={sunday} colors={colors}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
