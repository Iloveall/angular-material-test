(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      // Default
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "app/main/main.page.html"
        })
        .state('books', {
          url: "/books",
          templateUrl: "app/books/books.page.html",
          controller: "Books as books"
        });
  });
})();
