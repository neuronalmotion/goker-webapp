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
  .factory('Users', function($resource) {
    return $resource('/api/users');
  })
  .factory('UserCups', function($resource) {
    return $resource('/api/users/:userId/cups',
      { userId: '@id' },
      {
        'update': { method:'PUT' }
      });
  })
  .factory('Cups', function($resource) {
    return $resource('/api/cups');
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

