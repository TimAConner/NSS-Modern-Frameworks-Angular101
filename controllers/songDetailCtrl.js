'use strict';

angular.module("TodoApp").controller("SongDetailCtrl", function($scope, $routeParams, SongFactory){
    let songId = $routeParams.songId;
    
    // Get all songs and find individual one based on id
    SongFactory.getSongs().then(songData => {
        $scope.songDetail = songData.data.songs.find(song => +song.id === +songId);
    });

});