var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo component for eact todo item', () => {
    var todoArray= [{
      id: 1,
      text: 'Do somethong'
    }, {
      id: 2,
      text: 'Check Mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todoArray={todoArray}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    //find all nested components
    expect(todoComponents.length).toBe(todoArray.length);
  });
});
