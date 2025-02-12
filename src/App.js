import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoList } from './TodoList.js';
import { Navbar } from './Navbar.js';
import { TodoItem } from './TodoItem.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoButton } from './TodoButton.js';

const defaultTodo = [
  { text: 'Cut Onion', completed: true},
  { text: 'Hi', completed: false},
  { text: 'Hola', completed: false},
  { text: 'HIIII', completed: false},
]
function App() {
  return (
    <React.Fragment>
      <Navbar />  

      <TodoCounter  completed={16} total={25} />
      <TodoSearch />
      
      <TodoList>
        {defaultTodo.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
        
      </TodoList>

      <TodoButton />
      </React.Fragment>
  );
    
}
export default App;
