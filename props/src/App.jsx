import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentInfo from './StudentInfo'

function App() {
  let students = [
    {
      name: "Ayush",
      age: 20,
      rollno: 46,
    },
    {
      name: "Deep",
      age: 21,
      rollno: 40,
    },
    {
      name: "Shreyas",
      age: 19,
      rollno: 43,
    },
  ];
  return (
    <>
    <div className='container'></div>
    {students.map((student) => (
        <StudentInfo
          key={student.rollno}
          name={student.name}
          age={student.age}
          rollno={student.rollno}
        />
      ))}
    <div/>
    </>
  );
}

export default App;
