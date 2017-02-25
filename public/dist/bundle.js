var app = angular.module("port", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home/home.html',
        controller: 'home'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './app/views/contact/contact.html',
        controller: 'contact'
      })
      .state('illustration', {
        url: '/illustration',
        templateUrl: './app/views/illustration/illustration.html',
        controller: 'illustration'
      })
      .state('logos', {
        url: '/logos',
        templateUrl: './app/views/logos/logos.html',
        controller: 'logos'
      })
      .state('print', {
        url: '/print',
        templateUrl: './app/views/print/print.html',
        controller: 'print'
      })
      .state('apparel', {
        url: '/apparel',
        templateUrl: './app/views/apparel/apparel.html',
        controller: 'apparel'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: './app/views/skills/skills.html',
        controller: 'skills'
      })
      .state('web', {
        url: '/web',
        templateUrl: './app/views/web/web.html',
        controller: 'web'
      })



}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("mainCtrl", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
$scope.test = "test";
  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE SERVICE
// ============================================================
angular.module("port").service("bashService", ["$http", function($http) {

  // CRUD FUNCTIONS
  // ============================================================


  // OTHER FUNCTIONS
  // ============================================================


}]);
angular.module('port')
    .directive('nav', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/nav/nav.html',
            link: function(scope, element, attributes) {
                
              $("#smallLogo").on("click", function() {
              $(".littleNavHolder").show(".littleNavHolder");
              $("#littleNavContainer").hide("#littleNavContainer");
              $(this).hide("#smallLogo");
              });
        

            }
};

});
angular.module('port')
    .directive('scene', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/scene/scene.html',
            link: function(scope, element, attributes) {
                

              scope.scene = document.getElementById('scene');
              scope.parallax = new Parallax(scene);
              scope.sceneMedium = document.getElementById('sceneMedium');
              scope.parallax = new Parallax(sceneMedium);
              scope.sceneSmall = document.getElementById('sceneSmall');
              scope.parallax = new Parallax(sceneSmall);

            }
};

});
angular.module('port')
    .directive('web1', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/web1/web1.html',
            link: function(scope, element, attributes) {
                

            }
};

});
angular.module('port')
    .directive('web2', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/web2/web2.html',
            link: function(scope, element, attributes) {
                

            }
};

});
angular.module('port')
    .directive('web3', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/web3/web3.html',
            link: function(scope, element, attributes) {
                

            }
};

});
angular.module('port')
    .directive('web4', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/web4/web4.html',
            link: function(scope, element, attributes) {
                

            }
};

});
angular.module('port')
    .directive('web5', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/web5/web5.html',
            link: function(scope, element, attributes) {
                

            }
};

});
// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("apparel", ["$scope", function($scope) {
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
}]);


// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("contact", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "contact test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("home", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "home test"

  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("illustration", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "illustration test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("logos", ["$scope", function($scope) {
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
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("print", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "web test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("skills", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "web test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("port").controller("web", ["$scope", function($scope) {
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
    web5: false
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
  
}]);
