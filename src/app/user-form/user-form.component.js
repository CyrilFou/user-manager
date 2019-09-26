'use strict';
angular.
  module('userForm').
  component('userForm', {
    templateUrl: 'user-form/user-form.template.html',
    controller: ['$routeParams', 'User',
      function UserFormController($routeParams, User) {
        var self = this;
        self.user = User.get({userId: $routeParams.userId}, function(user) {
          //self.setImage(user.images[0]);
        });
      }
    ]
  });
