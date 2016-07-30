var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleCompleteTodo: function () {
    this.props.onToggle(this.props.id);
  },
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={this.handleCompleteTodo}>
          <input type="checkbox" checked={completed}/>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>

      </div>
    );
  }
});
module.exports = Todo
