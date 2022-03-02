import { useState } from 'react';
import Overlay from './Overlay';
import mapa from '../graphics/jpg/mapaKampusu.jpg'

export default function AdditionalInfo(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open &&
        <Overlay backgroundColor={"antiquewhite"} setOpen={setOpen} open={open}>
          <a href="http://we1.pollub.pl/ats4/" target="_blank" rel="noreferrer" style={{textDecoration: "underline"}}>Oryginalny plan</a>
          <ul style={{marginTop: "2em"}}>
            <li>EXXX - Wydział Elektrotechniki i Informatyki</li>
            <li>Ox102 - Wydział Zarządzania</li>
            <li>PE 10, PE 14 - Pentagon</li>
            <li>PE 15a - Katedra Informatyki</li>
            <li>SW - Studium Wychowania Fizycznego i Sportu</li>
          </ul>
          <img src={mapa} style={{width: "100%", boxShadow: "5px 5px 18px grey"}} alt="Mapa kampusu"/>
        </Overlay>
      }
      <button style={{background: "lightcoral", position: "sticky", marginLeft: "auto", marginRight: "1em"}} aria-label="Additional info" className="absolute-button" onClick={() => setOpen(!open)}>
        <div className="dots"></div>
      </button>
    </>
  );
}
