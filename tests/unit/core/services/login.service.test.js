'use strict';

describe('Login Service: ', function () {

  var LoginService;
  var $auth;

  // Load the 'core' module which has the Login controller as a dependency.
  beforeEach(module('core'));

  beforeEach(inject(function (_LoginService_, _$auth_) {
    LoginService = _LoginService_;
    $auth = _$auth_;
    spyOn($auth, 'authenticate');
  }));

  it('tracks that $auth authenticate method was called', function () {
    LoginService.authenticate('github');
    expect($auth.authenticate).toHaveBeenCalled();
  });

  it('tracks that $auth authenticate method was called with the right arguments', function () {
    LoginService.authenticate('github');
    expect($auth.authenticate).toHaveBeenCalledWith('github');
  });
});
