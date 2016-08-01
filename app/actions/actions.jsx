import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase/';


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    var todoRef = firebaseRef.child('todoArray').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

export var addTodoArray = (todoArray) => {
  return {
    type: 'ADD_TODO_ARRAY',
    todoArray: todoArray
  }
};
