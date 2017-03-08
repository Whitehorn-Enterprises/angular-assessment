angular.module('assessment')
    .directive('logo', function() {
      return {
          restrict: 'E',
          templateUrl: './directives/logo.html',
          controller: function($scope) {}
        }
    })
