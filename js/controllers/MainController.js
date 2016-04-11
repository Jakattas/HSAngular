app.controller('MainController', ['$scope', 'cards', function($scope, cards) { 
	cards.success(function(data){
		$scope.cards = data;
	})

	
}]);
