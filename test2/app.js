var app=angular.module("screenReaderApp",['ngAria']);

app.controller("screenReaderController",function($scope){
    
   $scope.addAlert=function(){
       alert("you have transferred amount successfully");
   }
    
});
