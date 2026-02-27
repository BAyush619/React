import { use, useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa6'
function App({ noOfStars = 10 }) {

  const [ratings, setRatings] = useState(0);
  const [hover, setHover] = useState(0);


  function handleClick(currentIndex) {
    setRatings(currentIndex);
    // console.log(currentIndex)
  }
  function handleMouseMove(currentIndex) {
    setHover(currentIndex)
    // console.log(currentIndex)
  }

  function handleMouseLeave() {
    setHover(ratings)
  }
  return (
    <>
      <div className='wrapper'>
        {
          [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return <FaStar
              className={index <= (hover || ratings) ? "active" : "inactive"}
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave()}

            ></FaStar>

          })
        }
      </div>
    </>
  )
}

export default App
