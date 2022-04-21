var mlaasMain = angular.module('mlaasMain', ['ngRoute']);

mlaasMain.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/login",
        {
            title: "Login - MLAAS",
            templateUrl: "pages/login.htm"
        }
    )
    .when("/dashboard",
        {
            title: "Dashboard - MLAAS",
            templateUrl: "pages/dashboard.htm"
        }
    )

    .when("/aboutus",
        {
            title: "About us - MLAAS",
            templateUrl: "pages/aboutus.htm"
        }
    )
});