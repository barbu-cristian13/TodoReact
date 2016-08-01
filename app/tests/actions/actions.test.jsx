import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/'
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);
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
      todo: {
        id: '123',
        text: 'Do something',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate addTodoArray action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODO_ARRAY',
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

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false
      }
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate login action', () => {
    var action = {
      type: 'LOGIN',
      uid: '1234'
    };
    var res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    var action = {
      type: 'LOGOUT'
    };
    var res = actions.logout();
    
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todoArray');

      todosRef.remove().then(()=> {
        testTodoRef = firebaseRef.child('todoArray').push();

        testTodoRef.set({
          text: 'some-test',
          completed: false,
          createdAt: 2342344
        });
      }).then(() => done()).catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });
    it('should create todo and dispatch ADD_TODO', (done) =>{
      const store = createMockStore({});
      const action = actions.startAddTodo('some-test');

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(mockActions[0].todo).toInclude({
          text: 'some-test'
        });
        done();
      }).catch(done);
    });

    it('should populate todos and dispatch ADD_TODO_ARRAY', (done) =>{
      const store = createMockStore({});
      const action = actions.startAddTodoArray();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODO_ARRAY');
        expect(mockActions[0].todoArray.length).toEqual(1);
        expect(mockActions[0].todoArray[0].text).toEqual('some-test');
        done();
      }, done).catch(done);
    });
    it('should toggle todo and dispatch UPDATE_TODO', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist()

        done();
      }, done);
    });
  });
});
