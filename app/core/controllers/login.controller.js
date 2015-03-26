'use strict';

angular.module('core')
  .controller('LoginController', ['LoginService', function (LoginService) {
    var loginCtrl = this;

    loginCtrl.setCredentials = function (userCredentials) {

      LoginService.setUserCredentials(userCredentials);

    };

  }]);
