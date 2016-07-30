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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Get milk.'
        },
        {
          id: uuid(),
          text: 'Clean Room.'
        },
        {
          id: uuid(),
          text: 'Crush enemies.'
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
          text: text
        }
      ]
    })
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
        <TodoList todoArray={todoArray}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
