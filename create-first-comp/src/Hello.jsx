function Hello(){
  let myName ="Ayush";
  let fullName = () =>{
    return 'Bhayani Ayush';
  }
  return <h3>
    Hello this is React.
    name = {fullName()}
  </h3>
}

export default Hello;