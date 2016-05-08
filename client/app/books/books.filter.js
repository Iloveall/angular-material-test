(function(){
  'use strict';

  angular
    .module('app')
    .filter('imageGet', imageGet);

  function imageGet($log) {

    return function(data) {
      var image = 'https://storage.aggregion.com/api/files/' + data + '/shared/data';

      $log.log(image);

      // return 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data';
    };
  }
})();
