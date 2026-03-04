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
  console.log(images)
  return (
    <>
      <div className='container'>

        <FaArrowAltCircleLeft className='arrow left-arrow' />


        <FaArrowAltCircleRight className='arrow right-arrow' />


        {images.map((image) => {
          return <div className='img-container' key={image.id}>
            <img src={image.download_url
            } />
          </div>
        })}

        <div className='sliderbar'>
          {images.map((_, index) => {
            return <button className='slider'></button>
          })}
        </div>


      </div>
    </>
  )
}

export default App
