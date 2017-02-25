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