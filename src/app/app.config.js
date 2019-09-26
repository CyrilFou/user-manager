'use strict';

angular.
  module('userManager').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/:userId', {
          template: '<user-form></user-form>'
        }).
        otherwise('/users');
    }
  ]);
