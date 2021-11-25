import TodoItem from './TodoItem'
import './TodoItems.css'

function TodoItems(props) {
  const itemClickHandler = (itemId) => {
    return props.deleteItem(itemId)
  }
  const listItems = props.items.map((item) => {
          return (
            <TodoItem title={item.title} status={item.status} id={item.id} key={item.id} deleteItem={itemClickHandler} />
          )
        })
  return (
    <ul className="todo-items-container">
      {listItems}
    </ul>
  )
}

export default TodoItems