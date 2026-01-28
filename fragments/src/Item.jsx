import styles from "./item.module.css";
const Item = ({foodItems , handleBuyButtonClicked}) =>{

  


  return (
    <li className="list-group-item">
      {foodItems}
      <button className={`${styles.button} btn btn-primary`} onClick={handleBuyButtonClicked}>Buy</button>
    </li> 
  );
}
export default Item;