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