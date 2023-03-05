import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { monday, tuesday, wednesday, thursday, friday, saturday, sunday, semesterBlueprint } from './components/data.js';
import Header from './components/Header';
import DayBuilder from './routes/DayBuilder';
import NotFound from './routes/NotFound';

function App() {
  const [dayName, setDayName] = useState("");
  const [currentWeek, setCurrentWeek] = useState(semesterBlueprint.weeks[0]);

  useEffect(() => {
    let i = 0
    console.log(semesterBlueprint.weeks[i].start)
    for (; i<semesterBlueprint.weeks.length; i++) {
      if (new Date(new Date().setDate(new Date().getDate() - 7)) < new Date(semesterBlueprint.weeks[i].start + "T00:00")) {
        break;
      }
    }
    i !== 0 && setCurrentWeek(semesterBlueprint.weeks[i]);
  }, []);

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

  const handleWeekChange = (s) => {
    if (s < 1 || s >= semesterBlueprint.weeks.length) return;
    setCurrentWeek(semesterBlueprint.weeks[s-1])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header getCurrentDay={getCurrentDay} dayName={dayName} currentWeek={currentWeek} handleWeekChange={handleWeekChange}/>
        <Routes>
          <Route exact path="/" element={<Navigate to={getCurrentDay()} />} />
          <Route path="/monday" element={<DayBuilder setDayName={setDayName} title={"Monday"} day={monday} currentWeek={currentWeek}/>} />
          <Route path="/tuesday" element={<DayBuilder setDayName={setDayName} title={"Tuesday"} day={tuesday} currentWeek={currentWeek}/>} />
          <Route path="/wednesday" element={<DayBuilder setDayName={setDayName} title={"Wednesday"} day={wednesday} currentWeek={currentWeek}/>} />
          <Route path="/thursday" element={<DayBuilder  setDayName={setDayName} title={"Thursday"} day={thursday} currentWeek={currentWeek}/>} />
          <Route path="/friday" element={<DayBuilder  setDayName={setDayName} title={"Friday"} day={friday} currentWeek={currentWeek}/>} />
          <Route path="/saturday" element={<DayBuilder  setDayName={setDayName} title={"Satuday"} day={saturday} currentWeek={currentWeek}/>} />
          <Route path="/sunday" element={<DayBuilder  setDayName={setDayName} title={"Sunday"} day={sunday} currentWeek={currentWeek}/>} />
          <Route path="*" element={<NotFound setDayName={setDayName} title={"ERR 404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
