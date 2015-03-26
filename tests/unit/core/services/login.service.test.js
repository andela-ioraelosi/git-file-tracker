'use strict';

describe('Login Service: ', function () {

  var LoginService;

  // Load the 'core' module which has the Login controller as a dependency.
  beforeEach(module('core'));

  beforeEach(inject(function (_LoginService_) {
    LoginService = _LoginService_;
  }));

  it('checks that no username exists upon instantiation', function () {

    expect(LoginService.getUserCredentials().username).toBeNull();
  });

  it('checks that no password exists upon instantiation', function () {

    expect(LoginService.getUserCredentials().password).toBeNull();
  });

  it('checks that the username is saved in the service', function () {

    LoginService.setUserCredentials({username: 'dexter', password: 'crap'});
    expect(LoginService.getUserCredentials().username).toEqual('dexter');
  });

  it('checks that the password is saved in the service', function () {

    LoginService.setUserCredentials({username: 'dexter', password: 'crap'});
    expect(LoginService.getUserCredentials().password).toEqual('crap');
  });
});
