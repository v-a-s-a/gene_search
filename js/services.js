'use strict';

var geneAdventureServices = angular.module('geneAdventureServices', []);

geneAdventureServices.service('regionData', ['$http', '$q', function($http, $q) {
    var deferedRegionData = $q.defer();
    this.searchRegions = function(startswith) {
      var regionInfo = $http.get('http://localhost:9000/v1/regionSearch?startswith='+startswith).success(function(data){
          deferedRegionData.resolve(data);
        });
      return deferedRegionData.promise;
      };
    this.regionInfo = this.searchRegions().then(function(data){return data});
    }]);
