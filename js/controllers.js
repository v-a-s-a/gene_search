'user strict';

var geneAdventureControllers = angular.module('geneAdventureControllers', []);

// controller for search box
geneAdventureControllers.controller('geneSearchController', ['$scope',
                                                             '$http',
                                                             '$location',
                                                             'geneData',
    function($scope, $http, $location, geneData){
    //load gene data
    geneData.loadGenes().then(function(data) {
      $scope.geneInfo = data;
      $scope.genes = Object.keys($scope.geneInfo);
      });

    // match on leading characters
    // http://stackoverflow.com/questions/18429967/angularjs-ui-typeahead-match-on-leading-characters
    $scope.startsWith = function(gene, viewValue) {
      return gene.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
      }

    // submit a query; route to a new URL based on gene symbol
    $scope.submitQuery = function(query){
      $location.path('/genes/' + query);
      }
  }]);


// controller for displaying a gene
geneAdventureControllers.controller('geneDisplayController', ['$scope',
                                                              '$routeParams',
                                                              'geneData',
  function($scope, $routeParams, geneData) {
    // load gene data
    geneData.loadGenes().then(function(data) {
      $scope.geneInfo = data;
      $scope.genes = Object.keys($scope.geneInfo);
      $scope.selectedGene = $routeParams.geneSymbol;
      $scope.selectedGeneData = $scope.geneInfo[$scope.selectedGene];     
    });

    // define gene data fields of interest
    $scope.interestingFields = ["name", "chrom", "txStart", "txEnd"]

  }]);

