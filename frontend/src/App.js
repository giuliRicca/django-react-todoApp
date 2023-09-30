import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import Todo from './Components/Todo'
import Button from 'react-bootstrap/Button'
import Modal from './Components/Modal';
import {fetchTodos, saveTodo, deleteTodo} from "./utils.js"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      currentItem: {
        title: "",
        completed: false,
      },
      todos: []
    }
  }
  
  componentDidMount = () =>{
    this.refreshTodos()
  }
  

  refreshTodos(){
      fetchTodos()
      .then(res => {
        const todos = res.data.results
        this.setState({
          todos: todos
        })
      })
  }

  
  toggle = () => this.setState({show: !this.state.show})
  
  handleSubmit = (item) => {
    saveTodo(item);
    this.toggle();
    this.refreshTodos();
  }



  handleCreate = () => {
    this.setState({
      currentItem: {
        title: "",
        completed: false,
      },
    })
    this.toggle();
  }

  handleEdit = (item) => {
    this.setState({currentItem: item})
    this.toggle();
  }

  handleDelete = (item) => {
    if(window.confirm("Are you sure?")) deleteTodo(item)
    this.refreshTodos();
  }

  render() {
    return (
      <main className="container">
        <h1 className="text-center text-uppercase
                  my-4">Todo App</h1>

        <div className="row">
          <div className="col mx-auto">
            <div className="card p-3">
              <div className="mb-4">
              <Button variant="primary" onClick={this.handleCreate}>
                Add Task
              </Button>
              </div>
              <ul className='list-group'>
                {this.state.todos.map((todoData, i) => (
                  <Todo key={i} 
                  data={todoData}
                  onEdit={this.handleEdit}
                  onDelete={this.handleDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Modal 
        show={this.state.show} 
        toggle={this.toggle}
        current={this.state.currentItem}  
        onSave={this.handleSubmit}
        />
      </main>
    )
  }
}
