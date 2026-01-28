import Item from "../Item";
const FoodItems = ({items}) => {


  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item} handleBuyButtonClicked = {()=>{console.log(`${item} bought`)}}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
