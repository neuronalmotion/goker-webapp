'use strict';

angular.module('goker')
  .controller('MainCtrl', function ($scope, Users, Cups) {
    $scope.users = Users.query();
    $scope.cups = Cups.query();
  });

