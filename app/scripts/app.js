'use strict';

angular.module('goker', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

  .factory('User', function($resource) {
    return $resource('/api/users/:userId',
      { userId: '@id' },
      {
        'update': { method:'PUT' }
      });
  })
  .factory('UserLeague', function($resource) {
    return $resource('/api/users/:userId/leagues',
      { userId: '@id' },
      {
        'update': { method:'PUT' }
      });
  })
  .config(function ($routeProvider) {
    //$resourceProvider.defaults.stripTrailingSlashes = false;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

