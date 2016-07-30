var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todoArray: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todoArray);
  },
  handleAddTodo: function (text){
    this.setState({
      todoArray: [
        ...this.state.todoArray,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todoArray.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todoArray: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todoArray, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todoArray, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todoArray={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
