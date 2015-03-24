angular.module('core', ['satellizer'])
.config(function ($authProvider) {

    $authProvider.github({
      clientId: 'e19079da683df8c15459'
    });

  });
