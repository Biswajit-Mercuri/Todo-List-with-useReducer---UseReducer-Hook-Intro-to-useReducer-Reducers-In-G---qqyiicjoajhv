import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';

import '../styles/App.css';

import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

import { Navbar } from './Navbar';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, {/* Initial todo state array, could be an array for storing indivial todo objects */ todos: [] })


  return (
    <div id="main">
      <Navbar />
      <AddTodo state={state} dispatch={dispatch} />
      {/* Render list of Todo Components here */}
    </div>
  )
}


export default App;
