angular.module("mlaasMain").controller("dropdownController", function($scope){ //dropdown menu controller
    $scope.initPage = function(){
        var dropdowns = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(dropdowns,{alignment: 'center', hover: true, coverTrigger: false}); //for options it's like JSON format https://www.w3schools.com/js/js_json_objects.asp
    };
});

angular.module("mlaasMain").controller("selectController", function($scope){ //select controller
    $scope.selectOption = function(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {classes:''});
    };
});