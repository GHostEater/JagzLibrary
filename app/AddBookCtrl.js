var app = angular.module('library');

var AddBookCtrl = function($scope,$http,$log,$upload){
	$http.get("services/authorAPI.php")
		 .success(function(data){
		 	$scope.authors = data;
		 });

	$scope.uploadBook = function(){
		$upload.upload({
    url: 'services/uploadBook.php', 
    headers: {'Content-Type': $scope.file.type},
    method: 'POST',
    file: $scope.file,
    fields: {"title":$scope.title,
			 "author_id":$scope.author_id,
			 "publisher":$scope.publisher,
			 "published":$scope.published,
			 "book_info":$scope.book_info,},
	})
	.success(function(data) {
  	$scope.addBookSuccess = 1;
  	var form = document.getElementById("addBook");
    form.reset();
	});
};
};

app.controller('AddBookCtrl',AddBookCtrl);