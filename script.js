var app = angular.module('myApp', ['ngAnimate']);
app.controller('oneController',function($scope){
  $scope.show = false;

  $scope.submit = function(){
    if ($scope.myForm.$valid){
      $scope.show = true;
    }
    else{
      $scope.show = false;
    }
  }
  $scope.reset = function(){
location.reload();
}
});
