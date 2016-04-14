angular.module('myApp', [])
.controller('oneController',function($scope){
  $scope.hideText = true;

  $scope.submit = function(){
    if ($scope.myForm.$valid){
      $scope.hideText = false;
    }
  }

  $scope.reset = function(){
  location.reload();
  }
});
