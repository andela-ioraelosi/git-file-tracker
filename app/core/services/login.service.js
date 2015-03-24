angular.module('core')
  .factory('LoginService', ['$auth', function ($auth) {

    return {
      authenticate: function (provider) {
        $auth.authenticate(provider);
      }
    };

  }]);
