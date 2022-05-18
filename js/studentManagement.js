angular.module("mlaasMain").controller("carouselController", function($scope)
{
    $scope.carouselInit = function()
    {
        
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {fullWidth: true, indicators: true});
          
    };
});