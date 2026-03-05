import ItemsList from "./ItemsList";

function Item({ item }) {


  return (
    <div>
      <li>
        {item.label}
        {
          item.children && item.children.length > 0 ?
            <ItemsList list={item.children} />
            : null
        }
      </li>
    </div>
  )
}
export default Item;