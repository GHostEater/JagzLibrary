var app = angular.module("library");

var AuthorDetailCtrl = function ($scope,$http,$log,$routeParams) {

	$http.get("services/authorAPI.php")
		 .success(function(data){

		 	$scope.authors = data;

		 	$scope.author = _.find($scope.authors, {"author_id":$routeParams.authorid});

		 });
	$http.get("services/bookAPI.php")
		 .success(function(data){
		 	$scope.books = data;

		 	$scope.authorBooks = _.where($scope.books,{"author_id":$routeParams.authorid});
		 });
}

app.controller("AuthorDetailCtrl",AuthorDetailCtrl);