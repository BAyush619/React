import { useState } from "react";
import Data from "../data/Data";
import "../style/Accordion.css"
function Accordion() {

  const [selected, setSelected] = useState(null);

  function handleSingleSelection(selectedid) {
    setSelected((prev) => (prev === selectedid ? null : selectedid))
  }

  return (
    <>

      <div className="wrapper">
        <button className="btn">Enable Multiple Selection</button>
        {Data.map(dataitem => (
          <div onClick={() => handleSingleSelection(dataitem.id)} className="accodian">
            <div className="question">{dataitem.question}
              <span className="show"> + </span>
            </div>

            <div className="answer">{selected === dataitem.id ? dataitem.answer : <div></div>}</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Accordion;