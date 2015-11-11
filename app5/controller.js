(function() {
  angular.module('myApp')
         .controller('myCtrl', function($scope, myService, $interval) {

           function getStuff() {
             myService.getBiz().then(function(res) {
               $scope.bizzes = res.data.results;
             });
           };

             getStuff();
             
             $scope.editBiz = function(id, obj) {
               myService.editBiz(id, obj).then(function() {
                 getStuff();
               });
             };
         });


})();
