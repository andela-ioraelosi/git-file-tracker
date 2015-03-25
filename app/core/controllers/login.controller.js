'use strict';

angular.module('core')
  .controller('LoginController', ['$scope', 'LoginService', function ($scope, LoginService) {

    $scope.authenticate = function (provider) {
      LoginService.authenticate(provider);
    };

  }]);
