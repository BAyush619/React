import { useEffect, useState } from 'react'
import './App.css'

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
        {images.map((image) => {
          return <div className='img-container' key={image.id}>
            <img src={image.download_url
            } />
          </div>
        })}
      </div>
    </>
  )
}

export default App
