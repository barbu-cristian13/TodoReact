var expect = require('expect');
var $ = require('jQuery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todoArray');
  });

  it('should exit', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () =>{
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todoArray'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalit todos array', () => {
      var badTodo = {
        a: 'b'
      };

      TodoAPI.setTodos(badTodo);

      expect(localStorage.getItem('todoArray')).toBe(null);
    });
  });

  describe('getTodos', () =>{
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage',() => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todoArray', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual.todos;
    });
  });
});
