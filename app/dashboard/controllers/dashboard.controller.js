'use strict';

angular.module('dashboard')
  .controller('DashboardController', ['FileReaderService', function (FileReaderService) {

    var dashCtrl = this;

    FileReaderService.getUserRepos().success(function (response) {
      dashCtrl.userRepos = response;
    })
    .error(function () {

    });

  }]);
