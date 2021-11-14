import { useState } from 'react';

import image from '../graphics/svgs/school_black_24dp.svg';

import Overlay from './Overlay';

export default function Tile(props) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} role="button" tabIndex="0" className="tile" style={{background: props.color}}>
      <p className="hours">{props.start} - {props.end}</p>
      <p className="label">{props.label}</p>
      <img className="tile-icon" src={image} alt="Icon representing activity type"/>
      {open &&
        <Overlay backgroundColor={props.color}>
          {props.children}
        </Overlay>}
    </div>
  );
}
