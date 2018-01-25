"use strict";

const app = angular.module("TodoApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
    .when("/", {
       templateUrl: "partials/greeting.html", 
       controller: "MessageCtrl"
    })
    .when("/todo", {
        templateUrl: "partials/todos.html", 
        controller: "TodoCtrl"
    })
    .when("/songs", {
        templateUrl: "partials/songs.html",
        controller: "SongCtrl"
    })
    .when("/songs/:songId", {
        templateUrl: "partials/songDetails.html",
        controller: "SongDetailCtrl"
    })
    .otherwise("/");
});

app.controller("MessageCtrl", function($scope){
    $scope.title = "Testing";
    $scope.message = "Is this a message?";
});