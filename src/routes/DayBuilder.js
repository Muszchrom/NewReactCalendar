import { useEffect } from 'react';

import Tile from '../components/Tile';

import schoolSVG from '../graphics/svgs/school_black_24dp.svg';

export default function DayBuilder(props) {
  const [min, max] = [0, 6];

  useEffect(() => {
     props.setDayName(props.title);
  })

  return (
    <div style={{width: "100%"}}>
      {props.day.map((obj, index) => {
        return (
          <Tile
            start={obj.start}
            end={obj.end}
            label={obj.label}
            color={props.colors[Math.floor(Math.random() * (max - min + 1)) + min]}
            key={index}>
            {obj.professor && <SchoolContent obj={props.day[index]}/>}
          </Tile>
        );
      })}
    </div>
  );
}

function SchoolContent({obj}) {
  return (
    <div style={{marginLeft: "1em"}}>
      <p className="hours">{obj.start} - {obj.end}</p>
      <h2 className="label">{obj.label}</h2>
      {obj.bonusContent && <p className="hours">{obj.bonusContent}</p>}
      <p className="hours">{obj.professor}</p>
      <p className="hours">{obj.type}, {obj.hall}</p>
      <img className="overlay-svg" src={schoolSVG} alt="School graduation hat"/>
    </div>
  )
}
