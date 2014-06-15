'use strict';
angular.module('AngularSMS', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/sendMessage");
    $stateProvider
      .state('sendMessage', {
        url: '/sendMessage',
        templateUrl: 'views/sendMessage.html'
      })
  })
  .controller('MainCtrl', ['$scope', function($scope) {

  }]);