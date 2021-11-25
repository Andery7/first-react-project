import React, { useState } from 'react'
import './App.css'
import TodoItems from './components/Todo/TodoItems'
import Header from './components/UI/Header'

function App() {
  const initialList = [
    {
      id: Math.random().toString(),
      title: 'Primo Task',
      status: 'new',
      owner: 'Grazia Sacchetti'
    },
    {
        id: Math.random().toString(),
        title: 'Secondo Task',
        status: 'new',
        owner: 'Grazia Sacchetti'
    },
    {
        id: Math.random().toString(),
        title: 'Terzo Task',
        status: 'new',
        owner: 'Grazia Sacchetti'
    },
  ]

  const [itemsList, setItemsList] = useState(initialList)

  const deleteFromList = (itemId) => {
   setItemsList(itemsList.filter(el => el.id !== itemId))
  }


  const addItem = (data) => {
    setItemsList((prevState) => {return  [...prevState, data] }
    )
  }


  return (
    <div>
      <Header />
      <TodoItems items={itemsList} deleteItem={deleteFromList} />
    </div>
      
   
    
  );
}

export default App;
