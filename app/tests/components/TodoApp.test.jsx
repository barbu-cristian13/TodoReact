var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todoArray state on handleAddTodo', () => {
    var todoText = 'test test';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todoArray: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todoArray[0].text).toBe(todoText);
  });
});
