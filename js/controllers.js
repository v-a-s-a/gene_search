'user strict';

var geneAdventureControllers = angular.module('geneAdventureControllers', []);


// controller for search box
geneAdventureControllers.controller('geneSearchController', ['$scope',
                                                             '$http',
                                                             '$location',
    function($scope, $http, $location){

    // ask server for 10 regions with name that start with
    $scope.searchRegions = function(val) {
      return $http.get('http://localhost:9000/v1/regionSearch', {
        params: {
          startswith: val,
        }
      }).then(function(response){
          console.log(response);
          return response.data;
        });
    };


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
  function($scope, $routeParams) {
    $scope.selectedGene = $routeParams.geneSymbol;

  }]);

