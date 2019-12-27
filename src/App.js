import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import { render } from '@testing-library/react';
import uuid from 'uuid'

class App extends Component{
  state = {
    todos: [
            {
              id: uuid.v4(),
              title: "Play Asking Alexandria",
              completed: false
            },
            {
              id: 2,
              title: "Learn React",
              completed: false
            },
            {
              id: 3,
              title: "Drink Coffee",
              completed: false
            },
          ]
        }

        // mark complete 
        markComplete = (id) =>  {
          this.setState({todo: this.state.todos.map(todo => {
            if(todo.id === id)
            {
              todo.completed = !todo.completed
              return todo
            }
          })})
     }

     // delete a todo 
     deltodo = (id) => {
       console.log(id)
        this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})


     }


     addTodo = (title) => {
      console.log(title)
      const newtodo = {
        id: uuid.v4(),
        title: title, 
        completed: false
        
      }

      this.setState({todos:[...this.state.todos, newtodo]})
     }

        render()
  {
  
    return (
    <Router>
    <div className="App">
      <div className="container">

      <Header></Header>
      <Route path="/" render={props => }></Route>
       <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todo todos={this.state.todos} 
        markComplete={this.markComplete} 
        deltodo={this.deltodo}></Todo>

      </div>
       
       </div>
       </Router>
    )
  }
  }


export default App;
