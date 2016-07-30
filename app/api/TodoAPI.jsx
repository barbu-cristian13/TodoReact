var $ = require('jQuery');

module.exports = {
  setTodos: function(todoArray){
    if($.isArray(todoArray)){
      localStorage.setItem('todoArray', JSON.stringify(todoArray));
      return todoArray;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todoArray');
    var todoArray = [];

    try{
      todoArray = JSON.parse(stringTodos);
    } catch(e){
      console.log(e);
    }

    return $.isArray(todoArray) ? todoArray : [];

  }
};
