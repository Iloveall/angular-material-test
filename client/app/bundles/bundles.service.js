(function(){
  'use strict';

  angular
      .module('app')
      .factory('bundles', bundles);

  function bundles($resource) {
    return $resource('https://ds.aggregion.com/api/public/catalog/:id/bundles/:bundleId');
  }
})();
