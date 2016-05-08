(function() {
  'use strict';

  angular
      .module('app')
      .controller('Books', Books);

  function Books($scope, $log, book) {

    var c = this;

    c.data = {
      isFirstLoad: false,
      isLoading: false,
      list: []
    };

    c.getBooks = getBooks;

    activate();

    function getBooks () {
      c.data.list = book.query();
      $log.log('books', c.data.list);
    };

    function activate () {
      c.getBooks();
    }

  }
})();
