'use strict';

var geneAdventure = angular.module('geneAdventure', [
    'ui.bootstrap',
    'ngRoute',
    'geneAdventureControllers',
    'geneAdventureServices'
    ]);

geneAdventure.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/search', {
        templateUrl: 'partials/search-box.html',
        controller: 'geneSearchController'
      }).
      when('/genes/:geneSymbol', {
        templateUrl: 'partials/gene-detail.html',
        controller: 'geneDisplayController'
      }).
      otherwise({
        redirectTo: '/search'
      });
  }]);
