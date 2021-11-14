import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import today from '../graphics/svgs/today_black_24dp.svg';

export default function Header(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [props.dayName])

  return (
    <header className="app-header">
      <button onClick={() => setOpen(!open)} className="day-picker">
        <h1>{props.dayName}</h1>
      </button>
      {open && <NavDropdown setDayName={props.setDayName}/>}
      {open && <Overlay setOpen={setOpen} open={open}/>}
      <ul className="buttons-wrapper">
        <NavButton/>
      </ul>
    </header>
  );
}

function NavButton(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="button-container">
      <button onClick={() => setOpen(!open)} className="nav-button">
        <img className="calendar-icon" src={today} alt="Should not exist"/>
      </button>
      {open && props.children}
    </li>
  )
}

function NavDropdown(props) {
  return (
    <div className="nav-dropdown">
      <ul>
        <DrpdnItem setDayName={props.setDayName}>Monday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Tuesday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Wednesday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Thursday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Friday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Saturday</DrpdnItem>
        <DrpdnItem setDayName={props.setDayName}>Sunday</DrpdnItem>
      </ul>
    </div>
  )
}

function DrpdnItem(props) {
  const onClick = () => {
    props.setDayName(props.children);
  }
  return (
    <li onClick={() => onClick()}>
      <NavLink to={props.children.toLowerCase()}>
        {props.children}
      </NavLink>
    </li>
  );
}

function Overlay(props) {
  return (
    <div
      className="overlay"
      onClick={() => props.setOpen(!props.open)}>
    </div>
  );
}
