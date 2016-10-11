angular.module("angularTodo", [])

.controller('mainCtrl', function($scope, dataService) {

  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.push(todo);
  };

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodos(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodos(todo);
  };

})

.service('dataService', function($http){
  this.helloConsole = function(){
    console.log('This is a hello console service');
  };

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
