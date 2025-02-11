import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoList } from './TodoList.js';
import { Navbar } from './Navbar.js';



function App() {
  return (
    <div className="App">
      <Navbar />  
      <TodoCounter />
      </div>
  );
    
}
export default App;
