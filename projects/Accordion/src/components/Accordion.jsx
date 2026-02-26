import { useState } from "react";
import Data from "../data/Data";
import "../style/Accordion.css"
function Accordion() {

  const [selected, setSelected] = useState(null);

  function handleSingleSelection(selectedid) {
    setSelected((prev) => (prev === selectedid ? null : selectedid))
  }

  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [ids, setIds] = useState([]);
  function handleMultipleSelection(selectedid) {
    const copyIds = [...ids];
    const selectedIndex = copyIds.indexOf(selectedid);
    // console.log(selectedIndex);
    if (selectedIndex === -1) {
      copyIds.push(selectedid);
    } else {
      copyIds.splice(selectedIndex, 1);
    }
    setIds(copyIds);
  }

  return (
    <>

      <div className="wrapper">
        <button onClick={() => {
          setEnableMultipleSelection(!enableMultipleSelection)
          setSelected(null);
          setIds([]);
        }} className="btn">Enable Multiple Selection</button>
        {Data.map(dataitem => (
          <div onClick={enableMultipleSelection ? () => handleMultipleSelection(dataitem.id) : () => handleSingleSelection(dataitem.id)} className="accodian">
            <div className="question">{dataitem.question}
              <span className="show"> + </span>
            </div>
            <div className="answer">{enableMultipleSelection ? ids.includes(dataitem.id) ? dataitem.answer : <div></div> : selected === dataitem.id ? dataitem.answer : <div></div>}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Accordion;