import { useEffect } from 'react';

import Tile from '../components/Tile';
import AdditionalInfo from '../components/AdditionalInfo';
import { colors } from '../components/data.js';

import ExercisesSVG from '../graphics/svgs/Exercises.svg'
import LaboSVG from '../graphics/svgs/Labo.svg'
import LectureSVG from '../graphics/svgs/Lecture.svg'
import LektoratSVG from '../graphics/svgs/Lektorat.svg'
import DefaultSVG from '../graphics/svgs/Default.svg'

export default function DayBuilder(props) {
  const [min, max] = [0, 6];

  useEffect(() => {
     props.setDayName(props.title);
  }, [props])

  const getIco = (i) => {
    const ico = i === 0 ? ExercisesSVG : (i === 1 ? LaboSVG : (i === 2 ? LectureSVG : (i === 3 ? LektoratSVG : DefaultSVG)))
    return ico
  }

  return (
    <div style={{width: "100%", maxWidth: "calc(500px + 2em)", flex: 1, padding: "0 1em"}}>
      {props.day.map((obj, index) => {
        return (
          <Tile
            start={obj.start}
            end={obj.end}
            label={obj.label}
            color={colors[Math.floor(Math.random() * (max - min + 1)) + min]}
            key={index}
            icon={getIco(obj.iconNumber)}>
            {obj.professor && <SchoolContent getIco={getIco} obj={props.day[index]}/>}
          </Tile>
        );
      })}
      <AdditionalInfo/>
    </div>
  );
}

function SchoolContent({getIco, obj}) {
  return (
    <div style={{marginLeft: "1em"}}>
      <p className="hours">{obj.start} - {obj.end}</p>
      <h2 className="label">{obj.label}</h2>
      {obj.bonusContent && <p className="hours">{obj.bonusContent}</p>}
      <p className="hours">{obj.professor}</p>
      <p className="hours">{obj.type}, {obj.hall}</p>
      <img className="overlay-svg" src={getIco(obj.iconNumber)} alt="School graduation hat"/>
    </div>
  )
}
