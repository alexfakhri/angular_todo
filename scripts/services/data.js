'use strict';

angular.module("angularTodo")

.service('dataService', function($http){

  this.getTodos = function(callback) {
    $http.jsonp("mock/todos.json" +  "?callback=JSON_CALLBACK")
    .then(callback)
  }

  this.saveTodos = function(todo) {
    console.log("This " + todo.name + " has been saved")
  };

  this.deleteTodos = function(todo) {
    console.log("This " + todo.name  + " has been deleted")
  };

});
