import { useState } from "react";
import styles from "../Modules/Dashboard.module.css";
function Dashboard({ showBudget, setBudget, TotalSpent }) {
  const [isLocked, setIsLocked] = useState(false);

  // Calculate total spent properly
  const totalAmt = TotalSpent.reduce((sum, item) => sum + item.amount, 0);

  // Calculate remaining balance
  const remainingBalance = showBudget ? Number(showBudget) - totalAmt : 0;

  return (
    <div className={styles.DashContainer}>
      <div className={styles.DashRow}>
        <div className={styles.DashBox}>
          <h4 className={styles.heading}>Monthly Budget</h4>

          <div className={styles.insideBudget}>

            <input type="number" min="0" placeholder="Enter Budget Here..." className={styles.budgetInput} value={showBudget} onChange={(event) => setBudget(event.target.value)} disabled={isLocked} />

            {!isLocked ?
              <button className={styles.reset} onClick={() => {
                if (showBudget == "" || Number(showBudget) <= 0) {
                  alert("Please enter a valid budget greater than 0");
                  return;
                }
                setIsLocked(true);
              }}>Set</button> :
              <button className={styles.reset} onClick={() => setIsLocked(false)}>Reset</button>
            }
          </div>
        </div>
        <div className={styles.DashBox}>
          <h4 className={styles.heading}>Total Spent</h4>
          <div className={styles.totspent}>{totalAmt}</div>

        </div>
        <div className={styles.DashBox}>
          <h4 className={styles.heading}>Remaining Balance</h4>
          <div className={styles.totspent}>{remainingBalance}</div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;