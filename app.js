(function(){
//'use strict';

angular.module('Counting', [])

.controller('counter', function($scope){
	$scope.dishes = "";
	$scope.message = "";
	$scope.toomuch = function(){
		var jela = $scope.dishes.split(" ");
		//$scope.message = jela.length;
		if(jela.length > 1 && jela.length <= 3){
			$scope.message = "Enjoy :)";
		} else if (jela.length >= 4){
			$scope.message = "Too Much!!!";
		} else if (jela.length = 1){
			$scope.message = " Please enter data first.";
		}
	}
});

})();