'use strict';

describe('Login Controller: ', function () {

  var LoginController;
  var LoginService;
  var scope;

  beforeEach(module('core'));

  beforeEach(inject(function ($controller, _LoginService_) {
    LoginService = _LoginService_;
    scope = {};
    LoginController = $controller('LoginController', {$scope: scope});
    spyOn(LoginService, 'authenticate');
  }));

  it('tracks that the authenticate method for the LoginService was called', function () {
    scope.authenticate('github');
    expect(LoginService.authenticate).toHaveBeenCalled();
  });

  it('tracks that the authenticate method for the LoginService was called with the right arguments', function () {
    scope.authenticate('github');
    expect(LoginService.authenticate).toHaveBeenCalledWith('github');
  });

});
