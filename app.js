(function(){
//'use strict';

angular.module('Counting', [])

.controller('counter', function($scope){
	$scope.dishes = "";
	$scope.message = "";
	$scope.toomuch = function(){
		var jela = $scope.dishes.split(" ");
		if(jela.length >= 2){
			$scope.message = "Enjoy :)";
		} else if (jela.length >= 4){
			$scope.message = "Too Much!!!";
		} else if (jela.length = 1){
			$scope.message = " Please enter data first.";
		}
	}
});

})();