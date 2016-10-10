angular.module("angularTodo", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("hello there");
  };

  $scope.todos = [
    { "name": "Taks 1" },
    { "name": "Taks 2" }
  ]

});
