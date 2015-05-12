var app = angular.module("library");

var BookDetailCtrl = function ($scope,$http,$log,$routeParams) {

	$http.get("services/bookAPI.php")
		 .success(function(data){

		 	$scope.books = data;

		 	$scope.book = _.find($scope.books, {"book_id":$routeParams.bookid});

		 });
}

app.controller("BookDetailCtrl",BookDetailCtrl);