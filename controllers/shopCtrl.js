// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment").controller("shopCtrl", function($scope, shopService) {
  // VARIABLES
  // ============================================================
  $scope.products=[];
  // FUNCTIONS
  // ============================================================
  $scope.getProducts = function () {
    shopService.getProducts().then(function(response) {
      $scope.products = response;
    });
  }
  $scope.getProducts();
});
