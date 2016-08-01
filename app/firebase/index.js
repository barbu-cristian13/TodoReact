import firebase from 'firebase';

try{
  var config = {
    apiKey: "AIzaSyCT96e1gSdXN5vDArzKtm0GmhhJAvSRhqo",
    authDomain: "john-todo-app-b81d3.firebaseapp.com",
    databaseURL: "https://john-todo-app-b81d3.firebaseio.com",
    storageBucket: "john-todo-app-b81d3.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e){

}

export var firebaseRef = firebase.database().ref();

export default firebase;
