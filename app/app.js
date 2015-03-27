'use strict';

angular.module('app', [
  'ngMaterial',
  'ngRoute',
  'core'])
  .config(function ($mdThemingProvider, $routeProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('red', {
        'default': '300'
      })
      .accentPalette('teal');

    $routeProvider
      .when('/', {
        'templateUrl': './app/core/partials/core.index.html',
        'controller': 'IndexController',
        'controllerAs': 'idxCtrl'
      })
      .when('/login', {
        'templateUrl': './app/core/partials/core.login.html',
        'controller': 'LoginController',
        'controllerAs': 'loginCtrl'
      })
      .when('/dashboard', {
        'templateUrl': './app/dashboard/partials/dashboard.index.html',
        'controller': 'DashboardController',
        'controllerAs': 'dashCtrl'
      })
      .otherwise({
        'redirectTo': '/'
      });

  });
