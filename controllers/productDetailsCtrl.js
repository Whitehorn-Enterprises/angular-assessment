// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment").controller("productCtrl", function($scope, shopService, $stateParams) {
  // VARIABLES
  // ============================================================
  $scope.currentId = $stateParams.id
  // FUNCTIONS
  // ============================================================
  $scope.getProduct = function (id) {
    shopService.getProduct(id).then(function(response) {
      $scope.product = response;
    });
  }
  $scope.getProduct($scope.currentId);
});
