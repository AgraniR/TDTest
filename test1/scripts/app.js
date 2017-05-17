var app = angular.module("tdApp",[]);

app.controller("tdController",function($scope,dataFactory){
    $scope.tempObj = "";
    $scope.objLength=0;
    dataFactory.getData().then(function(tempObj){
         $scope.getJsonData = tempObj.data.records;
        $scope.objLength=$scope.getJsonData.length;
    })
});

app.service('dataFactory', function($http){    
    return{
        getData : getData
    }
   function getData(){        
        responseData = $http.get("data.json")
        .success(function(data){})
        return responseData;
 	}
});

app.directive("buttonDirective",function(){
   return{
       template: "<button type='button' class='btn btn-default custom-button'>{{x.text}}</button>"
   } 
});
