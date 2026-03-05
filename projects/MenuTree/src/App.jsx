import ItemsList from './components/ItemsList'
import './App.css'
import Data from './data/MenuData'
function App() {

  return (
    <>
      <ItemsList list={Data}></ItemsList>
    </>
  )
}

export default App
