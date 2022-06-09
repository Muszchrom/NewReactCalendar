import { useState } from 'react';

export default function Calc(props) {
  const [inputRez, setInputRez] = useState(0);
  const [inputImz, setInputImz] = useState(0);
  const [data, setData] = useState([]);
  const [startObliczania, setStartObliczania] = useState(0);
  const [wynik, setWynik] = useState("");

  const dodawanie = (a_rez, a_imz, b_rez, b_imz) => {
    const rez = a_rez + b_rez;
    const imz = a_imz + b_imz;
    return [rez, imz];
  }
  const odejmowanie = (a_rez, a_imz, b_rez, b_imz) => {
    return [a_rez - b_rez, a_imz - b_imz];
  }
  const mnozenie = (a_rez, a_imz, b_rez, b_imz) => {
    const rez = a_rez * b_rez - a_imz * b_imz;
    const imz = a_rez * b_imz + a_imz * b_rez;
    return [rez, imz];
  }
  const dzielenie = (a_rez, a_imz, b_rez, b_imz) => {
    if (!b_imz) {
      return [a_rez, a_imz, b_rez];
    }
    const w = mnozenie(a_rez, a_imz, b_rez, -b_imz);
    const m = mnozenie(b_rez, b_imz, b_rez, -b_imz);
    return [w[0], w[1], m[0]];
  }

  const runDodawanie = () => {
    const dane = {
      "type": 1,
      "a_rez": parseFloat(inputRez),
      "a_imz": parseFloat(inputImz),
    }
    setData([...data, dane]);
  }
  const runOdejmowanie = () => {
    const dane = {
      "type": 2,
      "a_rez": parseFloat(inputRez),
      "a_imz": parseFloat(inputImz),
    }
    setData([...data, dane]);
  }
  const runMnozenie = () => {
    const dane = {
      "type": 3,
      "a_rez": parseFloat(inputRez),
      "a_imz": parseFloat(inputImz),
    }
    setData([...data, dane]);
  }
  const runDzielenie = () => {
    const dane = {
      "type": 4,
      "a_rez": parseFloat(inputRez),
      "a_imz": parseFloat(inputImz),
    }
    setData([...data, dane]);
  }
  const runPotwierdz = () => {
    const dane = {
      "type": 0,
      "a_rez": parseFloat(inputRez),
      "a_imz": parseFloat(inputImz),
    }
    setData([...data, dane]);
    setStartObliczania(1);
  }

  const obliczanie = () => {
    let dt = [];
    for (let i=0; i<data.length; i++) {
      const dane = {
        "type": data[i].type,
        "a_rez": parseFloat(data[i].a_rez),
        "a_imz": parseFloat(data[i].a_imz),
      }
      dt = [...dt, dane];
    }
    let len = dt.length;

    for (let i=0; i<len; i++) {
      const t = dt[i].type;

      if (t === 3) {
        const [rez, imz] = mnozenie(dt[i].a_rez, dt[i].a_imz, dt[i+1].a_rez, dt[i+1].a_imz);
        dt[i].type = dt[i+1].type;
        dt[i].a_rez = rez;
        dt[i].a_imz = imz;
        dt.splice(i+1, 1);
        len -= 1;
        i -= 1;
      }
      if (t === 4) {
        const [rez, imz, d] = dzielenie(dt[i].a_rez, dt[i].a_imz, dt[i+1].a_rez, dt[i+1].a_imz);
        dt[i].type = dt[i+1].type;
        dt[i].a_rez = rez/d;
        dt[i].a_imz = imz/d;
        dt.splice(i+1, 1);
        len -= 1;
        i -= 1;
      }
    }
    for (let i=0; i<len; i++) {
      const t = dt[i].type;

      if (t === 2) {
        const [rez, imz] = odejmowanie(dt[i].a_rez, dt[i].a_imz, dt[i+1].a_rez, dt[i+1].a_imz);
        dt[i].type = dt[i+1].type;
        dt[i].a_rez = rez;
        dt[i].a_imz = imz;
        dt.splice(i+1, 1);
        len -= 1;
        i -= 1;
      }
      if (t === 1) {
        const [rez, imz] = dodawanie(dt[i].a_rez, dt[i].a_imz, dt[i+1].a_rez, dt[i+1].a_imz);
        dt[i].type = dt[i+1].type;
        dt[i].a_rez = rez;
        dt[i].a_imz = imz;
        dt.splice(i+1, 1);
        len -= 1;
        i -= 1;
      }
    }
    const w = dt[0];
    let operator;
    let imz;
    let rez = w.a_rez;

    if (w.a_imz >=0) {
      operator = "+";
      imz = w.a_imz;
    } else {
      operator = "-";
      imz = w.a_imz*(-1);
    }

    rez = rez.toFixed(4);
    rez = parseFloat(rez);
    imz = imz.toFixed(4);
    imz = parseFloat(imz);

    if (w.a_imz === 0) {
      setWynik(`${rez}`);
    } else if (w.a_rez === 0) {
      setWynik(`${operator}${imz}`);
    } else {
      setWynik(`(${rez} ${operator} j${imz})`);
    }
    setStartObliczania(2);
  }

  const resetuj = () => {
    setInputRez(0);
    setInputImz(0);
    setData([]);
    setStartObliczania(0);
    setWynik("");
  }

  return (
    <div style={{margin: "1em", maxWidth: "calc(500px + 2em)"}}>
      <h1>Kalkulator Podstawowy</h1>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="calc-container-1">
        <input className="text-input" value={inputRez} type="text" onChange={e => setInputRez(e.target.value)}/>
          <span style={{fontSize: "1.6em", marginLeft: "0px"}}>+</span>
          <div style={{width: "40%", display: "flex"}}>
            <span style={{fontSize: "1.6em"}}>j</span>
            <input style={{width: "94%", marginLeft: "auto"}} className="text-input" value={inputImz} type="text" onChange={e => setInputImz(e.target.value)}/>
          </div>
        </div>
        <div className="calc-container-3">
          {data.map((obj, index) => {
            if (data[index-1] && data[index-1].type === 4) {
              return ( <Ulamek key={index} type={obj.type} a_rez={data[index-1].a_rez} a_imz={data[index-1].a_imz} b_rez={obj.a_rez} b_imz={obj.a_imz}/> );
            } else if (!data[index+1] && data[index].type === 4) {
              return ( <Wyrazenie key={index} type={obj.type} a_rez={obj.a_rez} a_imz={obj.a_imz}/> );
            } else if (obj.type !== 4){
              return ( <Wyrazenie key={index} type={obj.type} a_rez={obj.a_rez} a_imz={obj.a_imz}/> );
            } else {
              return (<></>) ;
            }
          })}
          {wynik && (
            <span> = {wynik}</span>
          )}
        </div>
        <div className="calc-container-2" style={{alignItems: "center"}}>
          <button onClick={runDodawanie} style={{marginRight: "10px"}} className="fancy-button">+</button>
          <button onClick={runOdejmowanie} style={{marginRight: "10px"}} className="fancy-button">-</button>
          <button onClick={runMnozenie} style={{marginRight: "10px"}} className="fancy-button">*</button>
          <button onClick={runDzielenie} style={{margin: "0"}} className="fancy-button">/</button>
        </div>
        {
          startObliczania === 0 ?
          (<button style={{marginTop: "1em"}} className="fancy-button" onClick={runPotwierdz}>Potwierdz</button>) : (
            startObliczania === 1 ? (<button style={{marginTop: "1em"}} className="fancy-button" onClick={obliczanie}>Oblicz</button>) :
            (<button style={{marginTop: "1em"}} className="fancy-button" onClick={resetuj}>Resetuj</button>)
          )

        }
      </div>
      <Wyznacznik mnozenie={mnozenie} odejmowanie={odejmowanie}/>
    </div>
  );
}

function Wyznacznik(props) {
  const [a, setA] = useState([0, 0]);
  const [b, setB] = useState([0, 0]);
  const [c, setC] = useState([0, 0]);
  const [d, setD] = useState([0, 0]);
  const [wynik, setWynik] = useState("");

  const oblicz = () => {
    setA([parseFloat(a[0]), parseFloat(a[1])]);
    setB([parseFloat(b[0]), parseFloat(b[1])]);
    setC([parseFloat(c[0]), parseFloat(c[1])]);
    setD([parseFloat(d[0]), parseFloat(d[1])]);
    let [xRez, xImz] = props.mnozenie(a[0], a[1], d[0], d[1]);
    let [yRez, yImz] = props.mnozenie(b[0], b[1], c[0], c[1]);
    let [rez, imz] = props.odejmowanie(xRez, xImz, yRez, yImz);

    console.log(a);

    let operator;
    if (imz >=0) {
      operator = "+";
    } else {
      operator = "-";
      imz = imz*(-1);
    }

    rez = rez.toFixed(4);
    rez = parseFloat(rez);
    imz = imz.toFixed(4);
    imz = parseFloat(imz);

    if (imz === 0) {
      setWynik(`${rez}`);
    } else if (rez === 0) {
      setWynik(`${operator}${imz}`);
    } else {
      setWynik(`(${rez} ${operator} j${imz})`);
    }
  }

  return (
    <>
      <h1>Wyznacznik macierzy 2x2</h1>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{marginBottom: 0, borderLeft: "2px solid var(--text3)", borderRight: "2px solid var(--text3)"}} className="calc-container-1">
          <div className="calc-container-1">
            <input className="text-input" type="text" value={a[0]} onChange={e => setA([e.target.value, a[1]])}/>
            <span style={{fontSize: "1.6em", marginRight: "0px"}}>+</span>
            <span style={{fontSize: "1.2em"}}>j</span>
            <input className="text-input" type="text" value={a[1]} onChange={e => setA([a[0], e.target.value])}/>
          </div>
          <div className="calc-container-1">
            <input className="text-input" type="text" value={b[0]} onChange={e => setB([e.target.value, b[1]])}/>
            <span style={{fontSize: "1.6em", marginRight: "0px"}}>+</span>
            <span style={{fontSize: "1.2em"}}>j</span>
            <input className="text-input" type="text" value={b[1]} onChange={e => setB([b[0], e.target.value])}/>
          </div>
        </div>
        <div style={{marginTop: 0, borderLeft: "2px solid var(--text3)", borderRight: "2px solid var(--text3)"}} className="calc-container-1">
          <div className="calc-container-1">
            <input className="text-input" type="text" value={c[0]} onChange={e => setC([e.target.value, c[1]])}/>
            <span style={{fontSize: "1.6em", marginRight: "0px"}}>+</span>
            <span style={{fontSize: "1.2em"}}>j</span>
            <input className="text-input" type="text" value={c[1]} onChange={e => setC([c[0], e.target.value])}/>
          </div>
          <div className="calc-container-1">
            <input className="text-input" type="text" value={d[0]} onChange={e => setD([e.target.value, d[1]])}/>
            <span style={{fontSize: "1.6em", marginRight: "0px"}}>+</span>
            <span style={{fontSize: "1.2em"}}>j</span>
            <input className="text-input" type="text" value={d[1]} onChange={e => setD([d[0], e.target.value])}/>
          </div>
        </div>
        {wynik && (<span style={{margin: "10px auto"}}>wynik: {wynik}</span>)}
        <button style={{marginTop: "1em"}} className="fancy-button" onClick={oblicz}>Oblicz</button>
      </div>
    </>
  );
}


function Ulamek(props) {
  return (
    <>
      <div className="ulamek">
        {props.a_imz >= 0 ?
          <span>{`${props.a_rez} + j${props.a_imz}`}</span> :
          <span>{`${props.a_rez} - j${props.a_imz*(-1)}`}</span>
        }
        <span className="kreska-ulamkowa"></span>
        {props.b_imz >= 0 ?
          <span>{`${props.b_rez} + j${props.b_imz}`}</span> :
          <span>{`${props.b_rez} - j${props.b_imz*(-1)}`}</span>
        }
      </div>
      {
        props.type === 0 ? (<span>&nbsp;</span>) :
        (props.type === 1 ? (<span>&nbsp;+&nbsp;</span>) :
        (props.type === 2 ? (<span>&nbsp;-&nbsp;</span>) :
        (props.type === 3 && (<span>&nbsp;*&nbsp;</span>))))
      }
    </>
  );
}

function Wyrazenie(props) {
  return (
    <div className="wyrazenie-liniowe">
      {props.a_imz >= 0 ?
        <span>{`(${props.a_rez} + j${props.a_imz})`}</span>
        : <span>{`(${props.a_rez} - j${props.a_imz*(-1)})`}</span>
      }
      {
        props.type === 0 ? (<span>&nbsp;</span>) :
        (props.type === 1 ? (<span>&nbsp;+&nbsp;</span>) :
        (props.type === 2 ? (<span>&nbsp;-&nbsp;</span>) :
        (props.type === 3 ? (<span>&nbsp;*&nbsp;</span>) :
        (props.type === 4 && (<span>&nbsp;/&nbsp;</span>)))))
      }
    </div>
  );
}
