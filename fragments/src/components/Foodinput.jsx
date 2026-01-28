import styles from "./Foodinput.module.css"
function Foodinput({handleKeyDown}){

  return(
    <>
    <input type="text" placeholder="Enter Here......" className={styles.Foodinput} 
    onKeyDown={handleKeyDown}
    />
    </>
  )
}
export default Foodinput;