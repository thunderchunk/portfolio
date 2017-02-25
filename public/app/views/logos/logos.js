// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("logos", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "web test"
  
  $scope.pseudoModal = false;
  
  $scope.modalContainer;
  
  $scope.vars = {
    logo1: false,
    logo2: false,
    logo3: false,
    logo4: false
  }

  
  // FUNCTIONS
  // ============================================================
  
  $scope.add = function(x){
  $scope.vars[x] = true;
  $scope.modalContainer = x;
  };
  
  $scope.remove = function(){
  $scope.vars[$scope.modalContainer] = false;
  };
});
