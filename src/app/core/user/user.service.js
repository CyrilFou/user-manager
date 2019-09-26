'use strict';
angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
      return $resource('https://trainee-api.pleiads.fr/users/:userId', {}, {
        query: {
          method: 'GET',
          params: {id: 'userId'},
          isArray: true
        }
      });
    }
  ]);
