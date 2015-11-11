(function() {
  angular.module('weatherBird')
         .controller('weatherCtrl', function($scope, mainService. weatherData) {
           console.log(weatherData);
           $scope.weather = weatherData.data;

         });



})();
