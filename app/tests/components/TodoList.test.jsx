var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo component for eact todo item', () => {
    var todoArray= [{
      id: 1,
      text: 'Do somethong',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check Mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({
      todoArray: todoArray
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    //find all nested components

    expect(todoComponents.length).toBe(todoArray.length);
  });
  it('should render empty message if no todos', () => {
    var todoArray= [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todoArray={todoArray}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
