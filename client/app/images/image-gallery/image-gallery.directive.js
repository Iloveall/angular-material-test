(function() {
  'use strict';

  angular
    .module('app')
    .directive('imageGallery', imageGallery);

  function imageGallery($timeout, $log) {
    return {
      restrict: 'EA',
      replace: false,
      templateUrl: "/app/images/image-gallery/image-gallery.html",
      scope: {
        images: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('images', function(newData, oldData) {
          $log.info('gallery', scope.images);
        });
      }
    };
  };
})();
