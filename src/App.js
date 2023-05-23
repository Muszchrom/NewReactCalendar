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
import LogIn from './routes/LogIn';
import Landing from './routes/Landing'

function App() {
  const [dayName, setDayName] = useState("");
  const [currentWeek, setCurrentWeek] = useState(semesterBlueprint.weeks[0]);

  useEffect(() => {
    getAndSetCurrentWeek();
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

  const getAndSetCurrentWeek = () => {
    let i = 0;
    while (i<semesterBlueprint.weeks.length) {
      if (new Date(new Date().setDate(new Date().getDate() - 7)) < new Date(semesterBlueprint.weeks[i].start + "T00:00")) {
        break;
      }
      i++;
    }
    i !== 0 && setCurrentWeek(semesterBlueprint.weeks[i]);
  }

  const handleWeekChange = (s) => {
    if (s < 1 || s >= semesterBlueprint.weeks.length) return;
    setCurrentWeek(semesterBlueprint.weeks[s-1]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/plan/*" element={<Plan getCurrentDay={getCurrentDay} dayName={dayName} currentWeek={currentWeek} handleWeekChange={handleWeekChange} getAndSetCurrentWeek={getAndSetCurrentWeek} setDayName={setDayName}/>} />
          <Route path="/login" element={<LogIn/>}/>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="*" element={<NotFound setDayName={setDayName} title={"ERR 404"} goTo={"/plan/"}/>} />
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

function Plan({getCurrentDay, dayName, currentWeek, handleWeekChange, getAndSetCurrentWeek, setDayName}) {
  return (
    <>
      <Header getCurrentDay={getCurrentDay} dayName={dayName} currentWeek={currentWeek} handleWeekChange={handleWeekChange} getAndSetCurrentWeek={getAndSetCurrentWeek}/>
      <Routes>
        <Route exact path="/" element={<HandleDefaultPath getCurrentDay={getCurrentDay} />} />
        <Route path="/monday" element={<DayBuilder setDayName={setDayName} title={"Monday"} day={monday} currentWeek={currentWeek}/>} />
        <Route path="/tuesday" element={<DayBuilder setDayName={setDayName} title={"Tuesday"} day={tuesday} currentWeek={currentWeek}/>} />
        <Route path="/wednesday" element={<DayBuilder setDayName={setDayName} title={"Wednesday"} day={wednesday} currentWeek={currentWeek}/>} />
        <Route path="/thursday" element={<DayBuilder  setDayName={setDayName} title={"Thursday"} day={thursday} currentWeek={currentWeek}/>} />
        <Route path="/friday" element={<DayBuilder  setDayName={setDayName} title={"Friday"} day={friday} currentWeek={currentWeek}/>} />
        <Route path="/saturday" element={<DayBuilder  setDayName={setDayName} title={"Satuday"} day={saturday} currentWeek={currentWeek}/>} />
        <Route path="/sunday" element={<DayBuilder  setDayName={setDayName} title={"Sunday"} day={sunday} currentWeek={currentWeek}/>} />
        <Route path="*" element={<NotFound goTo={"/plan/monday"} setDayName={setDayName} title={"ERR 404"} />} />
      </Routes>
    </>
  );
}

function HandleDefaultPath(props) {
  return <Navigate to={props.getCurrentDay()} />
}

export default App;
