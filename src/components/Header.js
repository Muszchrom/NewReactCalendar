import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import today from '../graphics/svgs/today_black_24dp.svg';

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(window.location.pathname.charAt(1).toUpperCase()
    + window.location.pathname.substring(2, window.location.pathname.length))

  return (
    <header className="app-header">
      <button onClick={() => setOpen(!open)} className="day-picker">
        <h1>{day}</h1>
      </button>
      {open && <NavDropdown setDay={setDay} setOpen={setOpen}/>}
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
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <div className="nav-dropdown">
      <ul>
        {days.map((day, index) => {
          return <DrpdnItem key={index} setDay={props.setDay} setOpen={props.setOpen}>{day}</DrpdnItem>;
        })}
      </ul>
    </div>
  )
}

function DrpdnItem(props) {
  const onClick = () => {
    props.setOpen(false);
    props.setDay(props.children);
  }
  return (
    <li>
      <NavLink onClick={() => onClick()} to={props.children.toLowerCase()}>
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
