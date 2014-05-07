'use strict';

angular.module('goker')
  .controller('UserCtrl', function($scope, User, UserLeague) {
    $scope.user = User.get({ userId: 2 });
    $scope.leagues = UserLeague.query({ userId: 2 });

    $scope.saveUser = function() {
      $scope.user.$update();
    };
  });

