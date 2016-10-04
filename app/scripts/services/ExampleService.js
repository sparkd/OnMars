'use strict';

/**
 * @ngdoc function
 * @name Space3D.service:ExampleService
 * @description
 * # ExampleService
 */
angular.module('Space3D')
  // use factory for services
  .factory('ExampleService', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var doSomethingAsync = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
      return deferred.promise;
    };

    var fetchSomethingFromServer = function() {
      return $http({
          url: 'http://hipsterjesus.com/api',
          params: {
              paras: 2
          },
          method: 'GET'
        })
        .success(function(data) {
          console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      doSomethingAsync: doSomethingAsync,
      fetchSomethingFromServer: fetchSomethingFromServer
    };

  });
