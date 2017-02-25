// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("apparel", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "apparel test"
  $scope.test = "web test"
  
  $scope.pseudoModal = false;
  
  $scope.modalContainer;
  
  $scope.vars = {
    apparel1: false,
    apparel3: false,
    apparel4: false,
    apparel5: false
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

