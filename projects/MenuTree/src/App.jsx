import ItemsList from './components/ItemsList'
import './App.css'
import Data from './data/MenuData'
function App() {

  return (
    <>
      <div className="nav-container">
        <ItemsList list={Data} />
      </div>
    </>
  )
}

export default App
