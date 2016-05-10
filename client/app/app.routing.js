(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

      // Default
      $urlRouterProvider.otherwise("/404");

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "app/main/main.page.html"
        })

        .state('catalog', {
          url: "/catalog",
          templateUrl: "app/catalog/catalog.page.html"
        })

        .state('catalog.list', {
          url: "/list",
          templateUrl: "app/catalog/catalog-list/catalog.list.html",
          controller: "CatalogList as catalog",
          resolve: {
            catalog: function(catalog) {
                return catalog.query();
            }
          }
        })

        .state('catalog.detail', {
          url: "/:id",
          templateUrl: "app/catalog/catalog-detail/catalog.detail.html",
          controller: "CatalogDetail as catalog",
          resolve: {
            catalog: function($stateParams, catalog) {
                return catalog.get({id: $stateParams.id});
            },
            bundles: function($stateParams, bundles) {
              return bundles.query({id: $stateParams.id});
            }
          }
        })

        .state('e404', {
          url: "/404",
          templateUrl: "app/errors/404.page.html"
        });
  });
})();
