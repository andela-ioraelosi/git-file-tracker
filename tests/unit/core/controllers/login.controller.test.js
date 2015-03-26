'use strict';

describe('Login Controller: ', function () {

  var LoginController;
  var LoginService;

  beforeEach(module('core'));

  beforeEach(inject(function ($controller, _LoginService_) {

    LoginService = _LoginService_;
    LoginController = $controller('LoginController', {});
    spyOn(LoginService, 'setUserCredentials');
  }));

  it('tracks the LoginService setUserCredentials method was called', function () {

    LoginController.setCredentials({username: 'gnerkus', password: 'dexter'});
    expect(LoginService.setUserCredentials).toHaveBeenCalled();
  });

  it('tracks the LoginService setUserCredentials method was called with the right arguments', function () {

    LoginController.setCredentials({username: 'gnerkus', password: 'dexter'});
    expect(LoginService.setUserCredentials).toHaveBeenCalledWith({username: 'gnerkus', password: 'dexter'});
  });

});
