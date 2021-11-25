import React, { useState } from 'react'
import './TodoItems.css'


function TodoItem(props) {
  const [classItem, setClassItem] = useState('')
  
  const itemClickHandler = () => {
    setClassItem('clicked')
    return props.deleteItem(props.id)
  }

  return (
    <li onClick={itemClickHandler} className={classItem}>{props.title}
      <br />
      {props.status}
    </li>
  )
}
export default TodoItem