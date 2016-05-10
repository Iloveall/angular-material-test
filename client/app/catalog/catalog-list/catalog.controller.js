(function() {
  'use strict';

  angular
      .module('app')
      .controller('CatalogList', CatalogList);

  function CatalogList($scope, $log, catalog) {

    var c = this;

    c.catalog = catalog;

    activate();

    function activate () {

    };
  }
})();
