(function(){
  'use strict';

  angular
      .module('app')
      .factory('catalog', catalog);

  function catalog($resource) {
    return $resource('https://ds.aggregion.com/api/public/catalog/:id');
  }
})();
