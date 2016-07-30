var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {todoArray} = this.state;
    return (
      <div>
        <TodoList todoArray={todoArray}/>
      </div>
    );
  }
});

module.exports = TodoApp;
