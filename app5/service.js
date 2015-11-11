(function() {
  angular.module('myApp')
         .service('myService', function($http) {
           var parseHeaders = {
              "X-Parse-Application-Id": "FFhsApq36xikHlAz276OoAynS9A0UDFDGsMyI2wZ",
              "X-Parse-REST-API-Key": "npgGSyFCVoAq19cQLEct4BpleYy7US6GoOygdbpc",
              "Content-Type": "application/json",
            };

            this.getBiz = function() {
              return $http({
                method: 'GET',
                url: 'https://api.parse.com/1/classes/biznesses',
                headers: parseHeaders,
              });
            };

            this.editBiz = function(id, obj) {
              return $http({
                method: 'PUT',
                url: 'https://api.parse.com/1/classes/biznesses/' + id,
                headers: parseHeaders,
                data: obj
              });
            };
         });



})();
