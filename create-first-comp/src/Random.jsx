function Random(){
  let num = Math.random()*10;
  return <h1 style={{'background-color': '#654321'}}>Random number = {Math.floor(num)}</h1>
}
export default Random;