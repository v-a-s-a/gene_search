'use strict';

var app = angular.module('geneAdventure', ['ui.bootstrap']);

app.controller('geneSearchController', function($scope, $http) {
  // load the gene data
  $http.get('data/gencode.v19.genePred.hg19.json').success(function(data) {
    $scope.genes = Object.keys(data);
    $scope.geneData = data;
  });

});
