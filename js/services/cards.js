app.factory('cards', ['$http', function($http) { 
  return $http.get('https://api.hearthstonejson.com/v1/latest/esES/cards.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
