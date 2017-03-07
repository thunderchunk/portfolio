// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("home", function($scope, $timeout) {
  // VARIABLES
  // ============================================================
  $scope.test = "home test"
  $scope.isloaded = false;
  
  
  $scope.$on('$stateChangeSuccess', function () {
    $scope.isloaded = true;
  });
  
  // $timeout(function(){
  //   $scope.isloaded= true;
  // }, 5000);
  
  // ============================================================
});
