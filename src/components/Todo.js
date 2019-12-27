import React, { Component } from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types'

class Todo extends Component {

  
    render()
    {
        return this.props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deltodo={this.props.deltodo} ></TodoItem>
        ))


        
    }


    




    
   


    
}


Todo.propTypes = {
    todos: PropTypes.array.isRequired
}





export default Todo