"use strict";

angular.module("TodoApp").controller("TodoCtrl", function($scope){
    $scope.name = "Fred";

    $scope.printValue = () => {
        console.log($scope.name);
    };

    $scope.todos = [
        {name: "Master HTML/CSS/JS", completed: false},
        {name: "Master HTML/JS", completed: false},
        {name: "Master HTML/CSS", completed: false},
        {name: "Master HTML", completed: false}
    ];

});