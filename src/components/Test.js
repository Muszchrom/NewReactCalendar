import { useState } from 'react';
import Overlay from './Overlay';
import mapa from '../graphics/jpg/mapaKampusu.jpg'

export default function Test(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open &&
        <Overlay backgroundColor={"antiquewhite"} setOpen={setOpen} open={open}>
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
      <button className="absolute-button" onClick={() => setOpen(!open)}>...</button>
    </>
  );
}
