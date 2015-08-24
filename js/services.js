'use strict';

var geneAdventureServices = angular.module('geneAdventureServices', []);

geneAdventureServices.service('geneData', ['$http', '$q', function($http, $q) {
    var deferedGeneData = $q.defer();
    this.loadGenes = function() {
      var geneInfo = $http.get('data/gencode.v19.genePred.hg19.json').success(function(data){
          deferedGeneData.resolve(data);
        });
      return deferedGeneData.promise;
      };
    this.geneInfo = this.loadGenes().then(function(data){return data});
    }]);
