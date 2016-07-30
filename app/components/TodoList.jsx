var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todoArray} = this.props;
    var renderTodos = () => {
      if (todoArray.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return todoArray.map((todo) => {
          return (
            <Todo key={todo.id} onToggle={this.props.onToggle} {...todo}/>//will fail withoud id
          );
        });
      }
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});
module.exports = TodoList
