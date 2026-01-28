import { useContext } from "react";
import EmptyMessageContext from "../context/EmptyMessageContext";
function EmptyMessage() {
  const tasks = useContext(EmptyMessageContext);
  return (
    <>
      {tasks.length === 0 && <h3>No tasks yet. Add one!</h3>}
    </>
  )
}
export default EmptyMessage;