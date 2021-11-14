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
        <h1>{window.location.pathname.charAt(1).toUpperCase()
          + window.location.pathname.substring(2, window.location.pathname.length)}</h1>
      </button>
      {open && <NavDropdown setOpen={setOpen}/>}
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
          return <DrpdnItem key={index} setOpen={props.setOpen}>{day}</DrpdnItem>;
        })}
      </ul>
    </div>
  )
}

function DrpdnItem(props) {
  const onClick = () => {
    props.setOpen(false);
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
