import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { monday, tuesday, wednesday, thursday, friday, saturday, sunday } from './components/data.js';
import { colors } from './components/data.js';
import Header from './components/Header';
import DayBuilder from './routes/DayBuilder';
import NotFound from './routes/NotFound';

function App() {
  const [dayName, setDayName] = useState("");

  const getCurrentDay = () => {
    const daysOfTheWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    const day = new Date().getDay();
    return daysOfTheWeek[day];
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header getCurrentDay={getCurrentDay} dayName={dayName}/>
        <Routes>
          <Route exact path="/" element={<Navigate to={getCurrentDay()} />} />
          <Route path="/monday" element={<DayBuilder setDayName={setDayName} title={"Monday"} day={monday} colors={colors}/>} />
          <Route path="/tuesday" element={<DayBuilder setDayName={setDayName} title={"Tuesday"} day={tuesday} colors={colors}/>} />
          <Route path="/wednesday" element={<DayBuilder setDayName={setDayName} title={"Wednesday"} day={wednesday} colors={colors}/>} />
          <Route path="/thursday" element={<DayBuilder  setDayName={setDayName} title={"Thursday"} day={thursday} colors={colors}/>} />
          <Route path="/friday" element={<DayBuilder  setDayName={setDayName} title={"Friday"} day={friday} colors={colors}/>} />
          <Route path="/saturday" element={<DayBuilder  setDayName={setDayName} title={"Satuday"} day={saturday} colors={colors}/>} />
          <Route path="/sunday" element={<DayBuilder  setDayName={setDayName} title={"Sunday"} day={sunday} colors={colors}/>} />
          <Route path="*" element={<NotFound setDayName={setDayName} title={"ERR 404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
