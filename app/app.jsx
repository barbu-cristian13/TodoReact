var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import './firebase/index';

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todoArray);
});

//populate with saved data
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodoArray(initialTodos));

//populate with other data
// if(store.getState().todoArray.length === 0){
//   store.dispatch(actions.toggleShowCompleted());
//   store.dispatch(actions.addTodoArray([{
//     completed: true,
//     createdAt: 1470045545,
//     completedAt: 1470045587,
//     id: 'd98ea959-5d5b-4aa4-a4e9-cb927c930771',
//     text: 'Learn React'
//   }]));
//   store.dispatch(actions.addTodo('Design Project'));
//   store.dispatch(actions.addTodo('Finish Project'));
// }
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
