var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todoArray} = this.props;
    var renderTodos = () => {
      return todoArray.map((todo) => {
        return (
          <Todo key={todo.id} onToggle={this.props.onToggle} {...todo}/>//will fail withoud id
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});
module.exports = TodoList
