//var $ = require('jQuery');

module.exports = {
  filterTodos: function (todoArray, showCompleted, searchText){
    var filteredTodos = todoArray;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      if(todo.text.toLowerCase().includes(searchText)){
        return todo;
      }
    });
    //sort todos with non-completed first
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else {
        return 0;
      }
    });
    return filteredTodos;
  }
  // setTodos: function(todoArray){
  //   if($.isArray(todoArray)){
  //     localStorage.setItem('todoArray', JSON.stringify(todoArray));
  //     return todoArray;
  //   }
  // },
  // getTodos: function(){
  //   var stringTodos = localStorage.getItem('todoArray');
  //   var todoArray = [];
  //
  //   try{
  //     todoArray = JSON.parse(stringTodos);
  //   } catch(e){
  //     console.log(e);
  //   }
  //
  //   return $.isArray(todoArray) ? todoArray : [];
  //
  // },
};
