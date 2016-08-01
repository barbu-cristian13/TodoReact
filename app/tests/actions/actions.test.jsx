var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);

  });

  it('should generate addTodoArray action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS_ARRAY',
      todoArray: todos
    }
    var res = actions.addTodoArray(action.todoArray);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  })

});
