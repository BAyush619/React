import { use, useEffect, useState } from "react";

function Container() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [text, setText] = useState("");
  const [copy, setCopy] = useState(false);

  function copyToClipBoard() {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  }

  function generatePassword() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "1234567890";
    const chars = "!@#$%^&*`";

    if (number === true) {
      str += num;
    }
    if (character === true) {
      str += chars;
    }
    for (let i = 0; i < length; i++) {
      const ch = str.charAt(Math.floor(Math.random() * str.length));
      pass += ch;
    }
    setText(pass);
  }
  useEffect(() => {
    generatePassword();
  }, [length, number, character]);
  return (
    <div className="container">


      <input type="text" readOnly className="inputBox" value={text} />
      <button className="copybtn" onClick={copyToClipBoard}>{copy ? "copied" : "Copy"}</button>


      <div className="properties">
        <label className="lable">
          <input type="range" min={8} max={40} value={length} onChange={(event) => {
            setLength(Number(event.target.value));
          }
          } />
          {"  "}Length({length}){"  "}
        </label>
        <label className="lable">
          <input type="checkbox" checked={number}
            onChange={() => setNumber(yes => !yes)} />
          {"  "}Number
        </label>
        <label className="lable">
          <input type="checkbox" checked={character}
            onChange={() => setCharacter(yes => !yes)}
          />
          {"  "}Character
        </label>
      </div>
    </div>
  )
}
export default Container;