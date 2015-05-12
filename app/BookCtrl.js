var app = angular.module("library");

var BookCtrl = function ($scope,$http) {

	$http.get("services/bookAPI.php")
		 .success(function(data){

		 	$scope.books = data;

		 });
}

app.controller("BookCtrl",BookCtrl);