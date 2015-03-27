'use strict';

describe('FileReaderService: ', function () {

  var FileReaderService;
  var LoginService;

  beforeEach(module('dashboard'));
  beforeEach(module('core'));

  beforeEach(inject(function (_FileReaderService_, _LoginService_) {

    FileReaderService = _FileReaderService_;
    LoginService = _LoginService_;

  }));

  it('should not return null', function () {

    FileReaderService.getUserRepos();
    expect(FileReaderService.getUserRepos()).not.toBeNull();
  });

  it('should return a promise object', inject(function ($q) {

    var deferred = $q.defer();
    var promise = deferred.promise;

    expect(FileReaderService.getUserRepos()['$$state']).toEqual(promise['$$state']);
  }) );
});
