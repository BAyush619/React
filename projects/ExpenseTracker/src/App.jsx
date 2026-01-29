import { useState } from 'react'
import './App.css'
import Heading from '../components/Heading'
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'

function App() {
  const [budget, setBudget] = useState("");

  const [addExpense, setAddExpense] = useState([
    {
      id: 1,
      category: "food",
      amount: 100,
    },
    {
      id: 2,
      category: "cloth",
      amount: 900,
    }
  ]);
  function handledelete(id) {
    const newList = addExpense.filter(item => item.id !== id);
    setAddExpense(newList);
  }
  return (
    <>
      <center>
        <Heading></Heading>

        <Dashboard showBudget={budget} setBudget={setBudget} TotalSpent={addExpense}></Dashboard>

        <AddExpense addExpense={addExpense} setAddExpense={setAddExpense}></AddExpense>
      </center>
      <div className="heading">
        <span >category</span>
        <span >Amount</span>
        <span >Delete</span>
      </div>
      {addExpense.map((item) => {
        return (
          <div key={item.id} className="showItems">
            <span> {item.category}</span>
            <span> {item.amount}</span>

            <button className="deleteButton" onClick={() => handledelete(item.id)}>Delete</button>
          </div>
        );
      })}

    </>
  )
}

export default App
