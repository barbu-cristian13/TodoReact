var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todoArray);
});

//populate with saved data
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodoArray(initialTodos));
//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
