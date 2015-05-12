var app = angular.module("library");

var AuthorCtrl = function ($scope,$http) {

	$http.get("services/bookAPI.php")
		 .success(function(data){

		 	$scope.books = data;

		 });
};

app.controller("AuthorCtrl",AuthorCtrl);