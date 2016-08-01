var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todoArray, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todoArray, showCompleted, searchText);
      if (filteredTodos.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return filteredTodos.map((todo) => {
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
