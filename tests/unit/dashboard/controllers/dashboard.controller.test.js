'use strict';

describe('DashboardController: ', function () {

  var DashboardController;
  var LoginService;
  var $httpBackend;

  beforeEach(module('core'));
  beforeEach(module('dashboard'));

  beforeEach(inject(function (_LoginService_, _$httpBackend_, $controller) {

    LoginService = _LoginService_;
    $httpBackend = _$httpBackend_;
    DashboardController = $controller('DashboardController', {});

    $httpBackend.expect('GET', 'https://api.github.com/user/repos', LoginService.getUserCredentials()).respond(
        [
          {
            "id": 1234,
            "name": "random-repo",
            "full_name": "andela-ioraelosi/random-repo",
            "owner": {
              "login": "andela-ioraelosi"
            }
          }
        ]);

  }));

  it("should create the userRepos model with sample data", function () {

    expect(DashboardController.userRepos).toBeUndefined();
    $httpBackend.flush();

    expect(DashboardController.userRepos).toEqual([
          {
            "id": 1234,
            "name": "random-repo",
            "full_name": "andela-ioraelosi/random-repo",
            "owner": {
              "login": "andela-ioraelosi"
            }
          }
      ]);
  });


});
