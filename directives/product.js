angular.module('assessment')
    .directive('product', function() {
      return {
          restrict: 'E',
          templateUrl: './directives/product.html',
          controller: function($scope) {

          },
          scope: {
            product:"="
          }
        }
    })
