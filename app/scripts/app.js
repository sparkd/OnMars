/**
 * @ngdoc overview
 * @name OnMars
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */
(function () {
   'use strict';
    angular.module('OnMars', ['ionic', 'ngCordova', 'ngResource'])
      .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
        });
      });
}());