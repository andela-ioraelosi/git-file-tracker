'use strict';

angular.module('core')
  .factory('LoginService', [function () {

    return {
      username: null,
      password: null,

      setUserCredentials: function (credentials) {
        this.username = credentials.username;
        this.password = credentials.password;
      },

      getUserCredentials: function () {
        return {
          username: this.username,
          password: this.password
        };
      }
    };

  }]);
