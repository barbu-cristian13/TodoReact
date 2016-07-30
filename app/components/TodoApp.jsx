var React = require('react');

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
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Get milk.'
        },
        {
          id: 3,
          text: 'Clean Room.'
        },
        {
          id: 4,
          text: 'Crush enemies.'
        }
      ]
    };
  },
  handleAddTodo: function (text){
    alert('new todo: ' + text);
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
