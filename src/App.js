import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import { render } from '@testing-library/react';
import uuid from 'uuid'
import About from './components/pages/About'
import axios from 'axios';

class App extends Component{
  state = {
    todos: [
            
          ]
        }
    

        // called right after the compoents mounts 
        componentDidMount()
        {
          axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").
          then(res => this.setState({todos : res.data}))
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
       axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res =>  this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}))
      //  console.log(id)
      //   this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})


     }


     addTodo = (title) => {
       axios.post("https://jsonplaceholder.typicode.com/todos", {
         title,
         completed: false
         
       }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
      // console.log(title)
      // const newtodo = {
      //   id: uuid.v4(),
      //   title: title, 
      //   completed: false
        
      // }

      //this.setState({todos:[...this.state.todos, newtodo]})
     }

        render()
  {
  
    return (
    <Router>
    <div className="App">
      <div className="container">

      <Header></Header>
      <Route exact path="/">

      <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todo todos={this.state.todos} 
        markComplete={this.markComplete} 
        deltodo={this.deltodo}></Todo>
        
      </Route>
       

      </div>

      <Route path="/about" component={About}></Route>
       
       </div>
       </Router>
    )
  }
  }


export default App;
