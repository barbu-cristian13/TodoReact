var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';

export var TodoList = React.createClass({
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
            <Todo key={todo.id} {...todo}/>//will fail withoud id
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
export default connect(
  (state) => {
    return {
      todoArray: state.todoArray
    };
  }
)(TodoList);
