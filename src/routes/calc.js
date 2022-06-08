import { useState } from 'react';

export default function Calc(props) {
  const [wykladnik_rez, setWykladnik_rez] = useState(0);
  const [wykladnik_imz, setWykladnik_imz] = useState(0);
  const [mianownik_rez, setMianownik_rez] = useState(0);
  const [mianownik_imz, setMianownik_imz] = useState(0);

  const [inny_wykladnik, setInny_wykladnik] = useState('');
  const [inny_mianownik, setInny_mianownik] = useState('');

  const [wynik, setWynik] = useState("");

  const oblicz = () => {
    if (!mianownik_imz) {
      let r1 = (wykladnik_rez/mianownik_rez).toFixed(4);
      let r2 = (wykladnik_imz/mianownik_rez).toFixed(4);
      r1 = parseFloat(r1);
      r2 = parseFloat(r2);
      setInny_wykladnik(`${wykladnik_rez} + ${wykladnik_imz}i`);
      setInny_mianownik(`${mianownik_rez}`);
      setWynik(`${r1} + ${r2}i`);
      return;
    }
    const w = mnozenie(wykladnik_rez, wykladnik_imz, mianownik_rez, -mianownik_imz);
    const m = mnozenie(mianownik_rez, mianownik_imz, mianownik_rez, -mianownik_imz);
    let r1 = (w[0]/m[0]).toFixed(4);
    let r2 = (w[1]/m[0]).toFixed(4);
    r1 = parseFloat(r1);
    r2 = parseFloat(r2);

    setInny_wykladnik(`${w[0]} + ${w[1]}i`);
    setInny_mianownik(`${m[0]}`);

    setWynik(`${r1} + ${r2}i`);
  }

  const oblicz2 = () => {
    const [r1, r2] = mnozenie(wykladnik_rez, wykladnik_imz, mianownik_rez, mianownik_imz);
    setWynik(`${r1} + ${r2}i`);
  }
  const mnozenie = (a_rez, a_imz, b_rez, b_imz) => {
    const rez = a_rez * b_rez - a_imz * b_imz;
    const imz = a_rez * b_imz + a_imz * b_rez;
    return [rez, imz];
  }

  return (
    <div>
      <h1>dzielenie</h1>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="calc-container-1">
          <input className="text-input" value={wykladnik_rez} type="text" onChange={e => setWykladnik_rez(e.target.value)}/>
          <span style={{fontSize: "1.6em", marginLeft: "0px"}}>+</span>
          <input className="text-input" value={wykladnik_imz} type="text" onChange={e => setWykladnik_imz(e.target.value)}/>
          <span style={{fontSize: "1.6em", marginLeft: "-25px"}}>i</span>
        </div>
        <span className="kreska-ulamkowa"></span>
        <div className="calc-container-1">
          <input className="text-input" value={mianownik_rez} type="text" onChange={e => setMianownik_rez(e.target.value)}/>
          <span style={{fontSize: "1.6em", marginLeft: "0px"}}>+</span>
          <input className="text-input" value={mianownik_imz} type="text" onChange={e => setMianownik_imz(e.target.value)}/>
          <span style={{fontSize: "1.6em", marginLeft: "-25px"}}>i</span>
        </div>
        <button style={{marginTop: "1em"}} className="fancy-button" onClick={oblicz}>Oblicz</button>
        {wynik && (
          <div className="calc-result">
            <Ulamek wykladnik={wykladnik_rez + " + " + wykladnik_imz + "i"} mianownik={mianownik_rez + " + " + mianownik_imz + "i"}/>
            <span> = </span>
            <Ulamek wykladnik={inny_wykladnik} mianownik={inny_mianownik}/>
            <span> = {wynik}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// return (
//   <div>
//     <h1>dzielenie</h1>
//     <div className="dane-wejsciowe">
//       <div>
//         <input value={wykladnik_rez} type="text" onChange={e => setWykladnik_rez(e.target.value)}/>
//         <span style={{fontSize: "1.6em", marginLeft: "0px"}}>+</span>
//         <input value={wykladnik_imz} type="text" onChange={e => setWykladnik_imz(e.target.value)}/>
//         <span style={{fontSize: "1.6em", marginLeft: "-25px"}}>i</span>
//       </div>
//       <span className="kreska-ulamkowa"></span>
//       <div>
//         <input value={mianownik_rez} type="text" onChange={e => setMianownik_rez(e.target.value)}/>
//         <span style={{fontSize: "1.6em", marginLeft: "0px"}}>+</span>
//         <input value={mianownik_imz} type="text" onChange={e => setMianownik_imz(e.target.value)}/>
//         <span style={{fontSize: "1.6em", marginLeft: "-25px"}}>i</span>
//       </div>
//
//     </div>
//     <div>
//       <button style={{marginTop: "1em"}} className="fancy-button" onClick={oblicz}>Oblicz</button>
//       <div className="wyrazenie">
//         <Ulamek wykladnik={wykladnik_rez + " + " + wykladnik_imz + "i"} mianownik={mianownik_rez + " + " + mianownik_imz + "i"}/>
//         <span> = </span>
//         <Ulamek wykladnik={inny_wykladnik} mianownik={inny_mianownik}/>
//         <span> = {wynik}</span>
//       </div>
//     </div>
//   </div>
// );
// }
// <button className="fancy-button" onClick={oblicz2}>Oblicz2</button>

function Ulamek(props) {
  return (
    <div className="ulamek">
      <span className="wykladnik">{props.wykladnik}</span>
      <span className="kreska-ulamkowa"></span>
      <span className="mianownik">{props.mianownik}</span>
    </div>
  );
}
