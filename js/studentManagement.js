angular.module("mlaasMain").controller("carouselController", function($scope)
{
    $scope.carouselInit = function()
    {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
          })
    };
});