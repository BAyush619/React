function StudentInfo(props){
  return(
    <>
    <div className='student'>
      <div>Student name : {props.name}</div>
      <div>Age : {props.age}</div>
      <div>Roll.No : {props.rollno}</div>
    </div>
    </>
  );
}

export default StudentInfo;