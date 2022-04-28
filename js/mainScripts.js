var mlaasMain = angular.module("mlaasMain", ['ngRoute']);

mlaasMain.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/login", {
            title: "Login - MLAAS",
            templateUrl: "pages/login.htm"
        })
        .when("/dashboard", {
            title: "Dashboard - MLAAS",
            templateUrl: "pages/dashboard.htm",
        })
        .when("/aboutus", {
            title: "About us - MLAAS",
            templateUrl: "pages/aboutus.htm"
        })
        .when("/coursemanagement", {
            title: "Course management - MLAAS",
            templateUrl: "pages/coursemanagement.htm"
        })
        .when("/activitylibrary", {
            title: "Course Activity Library - MLAAS",
            templateUrl: "pages/activitylibrary.htm"
        })
        .when("/contentcreation", {
            title: "Course Content Creation - MLAAS",
            templateUrl: "pages/contentcreation.htm"
        })
        .when("/courselist", {
            title: "Course List - MLAAS",
            templateUrl: "pages/courselist.htm"
        })
        .when("/profile", {
            title: "Personal Profile - MLAAS",
            templateUrl: "pages/profile.htm"
        })
});