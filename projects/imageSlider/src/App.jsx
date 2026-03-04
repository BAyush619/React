import { useEffect, useState } from 'react'
import './App.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


function App({ url, page = 1, limit = 5 }) {

  const [images, setImages] = useState([]);
  const [currImage, setCurrImage] = useState(0);

  useEffect(() => {
    fetch(`${url}?page=${page}&limit=${limit}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setImages(data);
      })
  }, [url]);
  // console.log(images)

  function handleLeft(currimgId) {
    // setCurrImage((currimgId - 1) % limit)

    setCurrImage((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1
    })

  }
  function handleRight(currimgId) {
    // setCurrImage((currimgId + 1) % limit)

    setCurrImage((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <>
      <div className='container'>

        <FaArrowAltCircleLeft className='arrow left-arrow' onClick={() => handleLeft(currImage)} />


        <FaArrowAltCircleRight className='arrow right-arrow' onClick={() => handleRight(currImage)} />


        {/* {images.map((image) => {
          return <div className='img-container' key={image.id}>
            <img src={image.download_url
            } />
          </div>
        })} */}

        {
          images.length > 0 && (
            <div className='img-container' key={images.id}>
              <img src={images[currImage].download_url} />
            </div>
          )
        }

        <div className='sliderbar'>
          {images.map((image, index) => {
            return <button key={image.id} className={`slider ${index === currImage ? `active` : `inactive`}`} onClick={() => setCurrImage(index)}></button>
          })}
        </div>
      </div>
    </>
  )
}

export default App
