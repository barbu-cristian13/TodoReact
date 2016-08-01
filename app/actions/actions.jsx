import moment from 'moment';

import firebase, {firebaseRef, githubProvider} from 'app/firebase/';


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

export var addTodoArray = (todoArray) => {
  return {
    type: 'ADD_TODO_ARRAY',
    todoArray: todoArray
  }
};

export var startAddTodoArray = () => {
  return (dispatch, getState) => {
    var todoArrayRef = firebaseRef.child('todoArray');

    return todoArrayRef.once('value').then((snapshot) => {
      var todoArray = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todoArray).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todoArray[todoId]
        });
      });

      dispatch(addTodoArray(parsedTodos));

    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todo/' + id);
    var todoRef = firebaseRef.child(`todoArray/${id}`);

    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix(): null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  }
};


export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export var startLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result)=> {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
        console.log('Logged out!');
    });
  };
};
