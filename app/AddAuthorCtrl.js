var app = angular.module('library');

var AddAuthorCtrl = function($scope,$http,$log,$upload){
	$http.get("services/authorAPI.php")
		 .success(function(data){
		 	$scope.authors = data;
		 });

	$scope.uploadAuthor = function(){
		$upload.upload({
    url: 'services/uploadAuthor.php', 
    headers: {'Content-Type': $scope.file.type},
    method: 'POST',
    file: $scope.file,
    fields: {"name":$scope.name,
			 "date_birth":$scope.date_birth,
			 "bio":$scope.bio,},
	})
	.success(function(data) {
  	$scope.addAuthorSuccess = 1;
  	var form = document.getElementById("addAuthor");
    form.reset();
	});
};
};

app.controller('AddAuthorCtrl',AddAuthorCtrl);