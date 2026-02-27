import { use, useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa6'
function App({ noOfStars = 10 }) {

  const [ratings, setRatings] = useState(0);
  const [hover, setHover] = useState(0);


  function handleClick(currentIndex) {
    console.log(currentIndex)
  }
  function handleMouseMove(currentIndex) {
    setHover(currentIndex)
    console.log(currentIndex)
  }

  function handleMouseLeave(currentIndex) {
    console.log(currentIndex)
  }
  return (
    <>
      <div className='wrapper'>
        {
          [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return <FaStar

              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave(index)}

            ></FaStar>

          })
        }
      </div>
    </>
  )
}

export default App
