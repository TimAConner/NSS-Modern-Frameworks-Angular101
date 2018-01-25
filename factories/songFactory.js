'use strict';

angular.module('TodoApp').factory('SongFactory', function($q, $http){
    let getSongs = () => {
        return $q((resolve, reject) => {
            $http
            .get("../songs.json")
            .then((songs) => {
                resolve(songs);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };

    return { getSongs };

});