import { useEffect, useState } from 'react'
import './App.css'


// document.documentElement.scrollTop = How many pixels the entire HTML document has been scrolled vertically.
// document.documentElement.scrollHeight = The total height of the entire webpage, including the part not visible on screen.
// document.documentElement.clientHeight = The visible height of the browser window (viewport).


function App() {

  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const url = "https://dummyjson.com/products?limit=100";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((result) => {
        setData(result.products);
      })
  }, [])
  // console.log(data);

  function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => { })
    }
  })

  return (
    <div className='Mycontainer'>
      <h1>Scroll Indicator</h1>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${scrollPercentage}%` }}></div>
      </div>
      <br />
      <div className='displayProducts'>
        {
          data && data.length > 0 ?

            data.map((productItem) => (

              <div className='product'>{productItem.title}</div>
            ))

            : null
        }
      </div>
    </div>
  )
}

export default App
