import { useState } from "react";
import styles from "../Modules/AddExpense.module.css";
function AddExpense({ addExpense, setAddExpense }) {

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleAdd() {
    if (category !== "" && amount !== "") {


      const newItem = {
        id: Date.now(),
        category: category,
        amount: Number(amount),
      }

      setAddExpense([...addExpense, newItem]);
      if (amount <= 0) {
        alert("please enter valid amount");
        setAmount("");
      } else {
        setAmount("");
        setCategory("");
      }




    }
  }

  return (

    <>
      <center className={styles.adding}>
        <input type="text" value={category} className={styles.addSpace} placeholder="On what you spend" onChange={(event) => setCategory(event.target.value)} />

        <input type="number" min={1} value={amount} className={styles.addSpace} placeholder="Enter Amount" onChange={(event) => {
          setAmount(event.target.value);
        }} />

        <button className={styles.addExpensebtn} onClick={handleAdd}>Add Expense</button>
      </center>
    </>
  )
}
export default AddExpense;