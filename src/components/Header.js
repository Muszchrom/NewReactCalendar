import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import today from '../graphics/svgs/today_black_24dp.svg';
import FocusTrap from 'focus-trap-react';

export default function Header(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && document.addEventListener("keydown", (e) => {
      e.keyCode === 27 && setOpen(false);
    })
  }, [open])

  return (
    <header className="app-header">
      <div className="header-inner">
          {open ? (
            <FocusTrap>
              <div style={{display: "flex"}}>
                <button onClick={() => setOpen(!open)} className="day-picker">
                  <h1 className="no-select">{props.dayName}</h1>
                </button>
                {open && <NavDropdown setOpen={setOpen}/>}
                {open && <Overlay setOpen={setOpen} open={open}/>}
              </div>
            </FocusTrap>
          ) : (
            <div style={{display: "flex"}}>
              <button onClick={() => setOpen(!open)} className="day-picker">
                <h1>{props.dayName}</h1>
              </button>
              {open && <NavDropdown setOpen={setOpen}/>}
              {open && <Overlay setOpen={setOpen} open={open}/>}
            </div>
          )}
        <ul className="buttons-wrapper">
          <NavButton/>
        </ul>
      </div>
    </header>
  );
}

// Currently not in use
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
  return (
    <li>
      <NavLink onClick={() => props.setOpen(false)} to={props.children.toLowerCase()}>
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
