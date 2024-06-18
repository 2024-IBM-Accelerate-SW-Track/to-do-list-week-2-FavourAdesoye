import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
};

  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    const taskExists = this.state.todos.find(item => item.content === todo.content);
    if (taskExists){
      return;
    }
    else{
      todo.id = Math.random();
      // An array that contains the current array and the new todo item
      let new_list = [...this.state.todos, todo];
      // Updates the local state with the new array.
      this.setState({
        todos: new_list,
      });
    }
   
  };
  render() {
    return (
      <div className="Home">
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
         
        <h1><AddTodo addTodo={this.addTodo} />   </h1>
      </div>
    );
  }
}

export default Home;