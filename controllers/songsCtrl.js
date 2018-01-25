"use strict";

angular.module("TodoApp").controller("SongCtrl", function($scope, SongFactory){

    SongFactory.getSongs()
    .then((songData) => {
        $scope.songList = songData.data.songs;
        // console.log('$scope.songList', $scope.songList);
        // console.log('songData', songData);
        // $scope.$apply();
    });    

});