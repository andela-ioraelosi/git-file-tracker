'use strict';

angular.module('core')
  .controller('LoginController', ['$location', 'LoginService', function ($location, LoginService) {
    var loginCtrl = this;

    loginCtrl.setCredentials = function (userCredentials) {

      LoginService.setUserCredentials(userCredentials);

      // Navigate to the home page
      $location.path('/');

    };

  }]);
