
import { useState } from 'react';
import './App.css'

function App() {
  const [which, setWhich] = useState("rgb");

  const [color, setColor] = useState("#ffffff");
  function colorGenerator() {
    const colorvar = "0123456789ABCDEF"
    const col = colorvar.split("");
    let Mycolor = "#";

    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * colorvar.length);
      Mycolor += col[random];
    }
    setWhich("hex");
    setColor(Mycolor)
  }

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  function rgbGenerator() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    setWhich("rgb");
    setA(a);
    setB(b);
    setC(c);
  }


  return (
    <>
      <div className="wrapper">
        <div className='btnWrapper' style={which === "rgb" ? { backgroundColor: `rgb(${a}, ${b}, ${c})` } : { backgroundColor: color }}>
          <button onClick={rgbGenerator} className='hexcolor'>Generate RGB color</button>

          <button onClick={colorGenerator} className='hexcolor'>Generate Hex color</button>

          <div className='displaycolor'>{which === "rgb" ? `rgb(${a}, ${b}, ${c})` : color} </div>
        </div>
      </div>
    </>
  )
}

export default App
