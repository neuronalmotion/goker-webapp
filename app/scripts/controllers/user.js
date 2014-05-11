'use strict';

angular.module('goker')
  .controller('UserCtrl', function($scope, User, UserCups) {
    $scope.user = User.get({ userId: 2 });
    $scope.cups = UserCups.query({ userId: 2 });

    $scope.saveUser = function() {
      $scope.user.$update();
    };
  });

