'use strict';

angular.module('dashboard')
  .factory('FileReaderService', ['LoginService', '$http', function (LoginService, $http) {

    return {
      getUserRepos: function () {
        return $http({
          method: 'GET',
          url: 'https://api.github.com/user/repos',
          data: LoginService.getUserCredentials()
        });
      }
    };

  }]);
