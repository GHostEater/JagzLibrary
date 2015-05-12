var app = angular.module("library",['ngRoute','ngSanitize','ngAnimate','angularFileUpload','ui.tinymce']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/books', {
    templateUrl: 'app/book.html',
    controller: 'BookCtrl'
  })
  .when('/authors', {
    templateUrl: 'app/author.html',
    controller: 'AuthorCtrl'
  })
  .when('/bookDetail/:bookid', {
    templateUrl: 'app/bookDetail.html',
    controller: 'BookDetailCtrl'
  })
  .when('/authorDetail/:authorid', {
    templateUrl: 'app/authorDetail.html',
    controller: 'AuthorDetailCtrl'
  })
  .otherwise({
    redirectTo: '/books'
  });
}]);