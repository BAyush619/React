
import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "light")

  function handletoggletheme() {
    setTheme(theme == "light" ? "dark" : "light");

    console.log(theme)
  }
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <h1 className={theme === "dark" ? "darktxt" : "lighttxt"}>Hello world!</h1>
      <button className='btn' onClick={handletoggletheme}>

        {theme === "dark" ? <div>dark mode</div> : <div>light mode</div>}

      </button>
    </div>
  )
}

export default App
