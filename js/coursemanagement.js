angular.module("mlaasMain").controller("dropdownController", function($scope){ //dropdown menu controller
    $scope.initPage = function(){
        var dropdowns = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(dropdowns,{alignment: 'center', hover: true, coverTrigger: false}); //for options it's like JSON format https://www.w3schools.com/js/js_json_objects.asp
    };

});