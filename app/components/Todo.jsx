var React = require('react');

var Todo = React.createClass({
  handleCompleteTodo: function () {
    this.props.onToggle(this.props.id);
  },
  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={this.handleCompleteTodo}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});
module.exports = Todo
