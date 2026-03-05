import Item from "./Item";
import "../App.css"
function ItemsList({ list = [] }) {
  return (
    <ul>
      {
        list && list.length ?
          list.map(listitem => {
            return <Item key={listitem.label} item={listitem} />
          })
          : null
      }
    </ul>
  )
}
export default ItemsList;