import { useState } from "react";
import "./index.css"
import { IoAdd } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";
import { LuMoveUp } from "react-icons/lu";
import { LuMoveDown } from "react-icons/lu";
import Heading from "../components/Heading";
import EmptyMessage from "../components/EmptyMessage";

function ToDoList() {

  const [tasks, settasks] = useState(["wake up", "bath"]); //The list of all tasks (the main app data)
  const [newtasks, setnewtasks] = useState(""); //This stores the current text inside the input box

  function handleOnChange(event) {
    setnewtasks(event.target.value);
  }
  function addTask() {
    if (newtasks.trim() !== "") {
      settasks([...tasks, newtasks]);
      setnewtasks("")
    }

  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    settasks(updatedTasks);
  }

  function moveUp(index) {
    if (index === 0) return;
    const updatedTasks = [...tasks];

    [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];

    settasks(updatedTasks);
  }
  function moveDown(index) {
    if (index === tasks.length - 1) return;

    const updatedTasks = [...tasks];

    [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];

    settasks(updatedTasks);

  }



  return <>
    <div>
      <div>
        <Heading></Heading>

        <input type="text" placeholder="Enter tasks heree..." value={newtasks} onChange={handleOnChange} />
        <button className="add-button" onClick={addTask}><IoAdd /></button>
        <EmptyMessage tasks={tasks}></EmptyMessage>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">
              {task}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}><FaDeleteLeft /></button>
            <button className="moveUp" onClick={() => moveUp(index)}><LuMoveUp /></button>
            <button className="moveUp" onClick={() => moveDown(index)}><LuMoveDown /></button>
          </li>
        )}
      </ol>
    </div>
  </>
}
export default ToDoList;