angular.module("mlaasMain").controller("dropdownController", function($scope){ //dropdown menu controller
    $scope.initPage = function(){
        var dropdowns = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(dropdowns,{alignment: 'center', hover: true, coverTrigger: false}); //for options it's like JSON format https://www.w3schools.com/js/js_json_objects.asp
    };
});

//sort controller for table sorting similar to this https://codepen.io/marcmatias/pen/gxPzvY
angular.module("mlaasMain").controller("sortController", function($scope){ 
    $scope.sortTable = function(){
       
    };
});
