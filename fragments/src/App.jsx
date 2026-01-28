import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './components/FoodItems';
import ErrorMessage from "./components/ErrorMeaasge";
import Container from './components/Container';
import Foodinput from './components/Foodinput';
import { useState } from 'react';

function App() {
  //let foodItems = ["Apple","Mango","Banana","orange","Grapes"];
  let [foodItems ,setFoodItems] = useState(["Apple","Mango","Banana"]);
  
  // useState returns an array of 2 length arr[0] is initial value and arr[1] is method
  
  
  
  function onKeyDown(event){
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value ="";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
    }
  }
  return(
    <>
    <Container>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <Foodinput handleKeyDown = {onKeyDown}></Foodinput>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    </>
  ) 
}

export default App
