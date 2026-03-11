import { useContext } from "react";
import DataContext from "../DataContext";

function Comp3() {
  const data = useContext(DataContext)
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>
          {item.product} - {item.price}
        </p>
      ))}
    </div>
  )
}
export default Comp3;