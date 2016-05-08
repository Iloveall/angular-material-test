(function(){
  'use strict';

  angular
      .module('app')
      .factory('book', book);

  function book($resource) {
    return $resource('https://ds.aggregion.com/api/public/catalog', {}, {
      query: {
        method: 'GET',
        params: {
          // phoneId: 'phones'
        },
        isArray:true
      }
    });
  }
})();
