(function() {
  'use strict';

  angular
      .module('app')
      .controller('CatalogDetail', CatalogDetail);

  function CatalogDetail($scope, $log, $state, $stateParams, catalog, bundles) {

    var c = this;

    c.catalog = catalog;

    c.bundles = bundles;

    activate();

    function activate () {

    };
  }
})();
