import ItemsList from "./ItemsList";
import "../App.css"
import { useState } from "react";
function Item({ item }) {

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <li>
      {item.label}
      {
        item.children &&
        <span>
          <button onClick={() => toggle()} className="btn">
            {show ? "-" : "+"}
          </button>
        </span>
      }
      {
        item.children && item.children.length > 0 && show &&
        <ItemsList list={item.children} />
      }
    </li>
  )
}
export default Item;