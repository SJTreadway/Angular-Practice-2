(function() {
  angular.module('weatherBird')
         .service('mainService', function($http) {

           this.getWeather = function() {
              return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?lat=42.514231&lon=-113.725448&appid=2de143494c0b295cca9337e1e96b00e0',
            });
          };


         });




})();
