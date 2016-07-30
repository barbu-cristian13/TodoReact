var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todoArray: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Get milk.',
          completed: true

        },
        {
          id: uuid(),
          text: 'Clean Room.',
          completed: true
        },
        {
          id: uuid(),
          text: 'Crush enemies.',
          completed: false
        }
      ]
    };
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
  handleSearch: function (showCompleted, seachText){
    this.setState({
      showCompleted: showCompleted,
      seachText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todoArray} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todoArray={todoArray} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
