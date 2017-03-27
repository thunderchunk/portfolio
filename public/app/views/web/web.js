// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("web", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "web test"
  $scope.pseudoModal = false;
  
  $scope.modalContainer;
  
  $scope.vars = {
    web1: false,
    web2: false,
    web3: false,
    web4: false,
    web5: false,
    web6: false
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
