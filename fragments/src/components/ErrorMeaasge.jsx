const ErrorMessage = () =>{
  let foodItems = ["Apple","Mango","Banana","orange","Grapes"];
  return (
    <>
      {foodItems.length === 0 ? <h3>no fruits</h3> : null}
    </>  
  );
}
export default ErrorMessage;