# Madlibs

## Synopsis

Self-explainatory everyone knkows madlibs right?! Enter the required input in each text box hit submit to see the madlib created, and reset to 
to do it again. Created as an introduction to AngularJS. Introduced controllers and scope along with multiple components in HTML syntax with "ng-"
commands.

**Used for educational purposes with Thinkful Bootcamp**

## Code Snippets

    angular.module('myApp', [])
    .controller('oneController',function($scope){
    $scope.hideText = true;

    $scope.submit = function(){
    if ($scope.myForm.$valid){
      $scope.hideText = false;
    }
    }


    <div ng-controller="oneController">
    <form name="myForm" ng-submit="submitted=true;submit()" novalidate>
    <input ng-model="data.one" name="texty" type="text" placeholder="Person in Room(Last Name)" required>
    <span class="error" ng-if="myForm.$submitted && myForm.texty.$error.required">
    A Last Name is required!
    </span>  
  
  
## Link to Website

http://ekeyes694.github.io/madlibs/
