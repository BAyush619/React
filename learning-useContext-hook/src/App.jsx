import './App.css'
import Comp1 from './components/Comp1'
import DataContext from './DataContext'

function App() {

  const data = [
    {
      product: "wafers",
      price: 10,
    },
    {
      product: "grocerries",
      price: 100,
    }
  ]
  return (
    <>
      <div>
        <DataContext.Provider value={data}>
          <Comp1></Comp1>
        </DataContext.Provider>
      </div>
    </>
  )
}

export default App
