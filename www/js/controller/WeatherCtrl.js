 function WeatherCtrl($scope,$http, GeolocationService){

 	$scope.panel=0;

 	$scope.search = function(){
 		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + "&mode=json&units=metric&cnt=10";
 		$scope.loader = true;
 		$http.get(url).success(httpSuccess).error(httpError);
 	}

 	$scope.expand = function(e){
 		$elem = $(e.currentTarget);
 		$elem.addClass('row_active').siblings().removeClass('row_active');
 	}

 	$scope.geolocate = function (){
 		GeolocationService.getCurrentPosition(function(position){
 			$scope.loader = true;
 			$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&mode=json&units=metric&cnt=10").success(httpSuccess).error(httpError);
 		},function(){
 			alert('Impossible de récupérer votre position');
 		})
 	}

 	httpSuccess = function(response){
 		$scope.loader=false;
 		$scope.panel = 1;
 		$scope.weather = response;
 	}
 	httpError = function (){
 		$scope.loader = false;
 		alert('Impossible de récupérer les informations');
 	}
 	$scope.Math = Math;

 }