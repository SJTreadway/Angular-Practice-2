(function() {
  angular.module('myApp')
         .directive('myDirective', function() {
           return {
             restrict: 'E',

             controller: function($scope) {
              $scope.edit = true;
             },

             scope: {
               theBiz: '=',
               changeBiz: '&',
             },

             templateUrl: 'directiveTmpl.html'
           };
         })



})();
