(function () {

	'use strict';
	angular.module('LunchCheck' , [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	
	function LunchCheckController($scope) {

		$scope.message = "";
		$scope.items_list = "";

		$scope.message_if_click = function() {

			if($scope.items_list==""){
				$scope.message = "Please enter data first";
				return;
			}

			function countItems(string) {
				var total = 0;
				var words = string.split(',');
				total = words.length;
				return total;
			};
			
			var num = countItems($scope.items_list);
			if(num<=3)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!";
		};

	};

})();