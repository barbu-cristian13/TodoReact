var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todoArray, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todoArray.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return TodoAPI.filterTodos(todoArray, showCompleted, searchText).map((todo) => {
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
    return state;
  }
)(TodoList);
