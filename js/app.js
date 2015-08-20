'use strict';

var app = angular.module('geneAdventure', ['ui.bootstrap']);

app.controller('geneSearchController', function($scope, $http) {
  // load the gene data
  $http.get('data/gencode.v19.genePred.hg19.json').success(function(data) {
    $scope.genes = Object.keys(data);
    $scope.geneData = data;
  });

  // match on leading characters
  // http://stackoverflow.com/questions/18429967/angularjs-ui-typeahead-match-on-leading-characters
  $scope.startsWith = function(gene, viewValue) {
      return gene.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
  } 

});
